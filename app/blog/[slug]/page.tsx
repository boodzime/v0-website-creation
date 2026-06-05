import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { getPostBySlug, blogPosts } from '@/lib/blog-data'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return { title: 'Nie znaleziono artykulu' }
  }

  return {
    title: `${post.title} | SpawBlog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let inTable = false
    let tableRows: string[][] = []
    let tableHeaders: string[] = []

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Table handling
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        if (!inTable) {
          inTable = true
          tableHeaders = trimmedLine.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
        } else if (trimmedLine.includes('---')) {
          // Skip separator line
        } else {
          tableRows.push(trimmedLine.split('|').filter(cell => cell.trim()).map(cell => cell.trim()))
        }
        return
      } else if (inTable) {
        // End of table
        elements.push(
          <div key={`table-${index}`} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {tableHeaders.map((header, i) => (
                    <th key={i} className="border border-border bg-muted px-4 py-2 text-left text-sm font-semibold text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-border px-4 py-2 text-sm text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        inTable = false
        tableRows = []
        tableHeaders = []
      }

      // Headers
      if (trimmedLine.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        )
      } else if (trimmedLine.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="font-heading text-xl font-semibold text-foreground mt-8 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        )
      }
      // Lists
      else if (trimmedLine.startsWith('- **') || trimmedLine.startsWith('1. **')) {
        const isOrdered = trimmedLine.match(/^\d+\./)
        const content = trimmedLine.replace(/^[-\d]+\.\s*/, '')
        const boldMatch = content.match(/\*\*(.+?)\*\*(.*)/)
        
        elements.push(
          <li key={index} className="ml-6 mb-2 text-muted-foreground list-disc">
            {boldMatch ? (
              <>
                <strong className="text-foreground">{boldMatch[1]}</strong>
                {boldMatch[2]}
              </>
            ) : (
              content.replace(/\*\*/g, '')
            )}
          </li>
        )
      }
      else if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\./)) {
        const content = trimmedLine.replace(/^[-\d]+\.\s*/, '')
        elements.push(
          <li key={index} className="ml-6 mb-2 text-muted-foreground list-disc">
            {content}
          </li>
        )
      }
      // Regular paragraph
      else if (trimmedLine.length > 0) {
        // Process inline formatting
        let formattedContent = trimmedLine
          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        
        elements.push(
          <p 
            key={index} 
            className="text-muted-foreground mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        )
      }
    })

    return elements
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Powrot do bloga
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <Link 
                href={`/blog?kategoria=${encodeURIComponent(post.category)}`}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-muted-foreground">•</span>
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('pl-PL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.readTime} czytania</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <article className="prose-custom">
              {renderContent(post.content)}
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Podziel sie artykulem</h4>
                  <p className="text-sm text-muted-foreground">Jesli artykul byl pomocny, udostepnij go innym!</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-16 bg-card/30 border-t border-border">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Powiazane artykuly
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { CategoryFilter } from '@/components/category-filter'
import { blogPosts, getPostsByCategory } from '@/lib/blog-data'

interface BlogPageProps {
  searchParams: Promise<{ kategoria?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const category = params.kategoria || 'Wszystkie'
  const posts = getPostsByCategory(category)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Spawalniczy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Odkryj swiat spawania - od podstawowych technik po zaawansowane metody. 
              Praktyczna wiedza, porady i inspiracje dla kazdego spawacza.
            </p>
            
            <Suspense fallback={<div className="h-10 bg-muted animate-pulse rounded-lg w-96" />}>
              <CategoryFilter />
            </Suspense>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            {category !== 'Wszystkie' && (
              <div className="mb-8">
                <p className="text-muted-foreground">
                  Wyswietlanie {posts.length} {posts.length === 1 ? 'artykulu' : 'artykulow'} w kategorii{' '}
                  <span className="text-primary font-medium">{category}</span>
                </p>
              </div>
            )}
            
            {posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
                  <svg
                    className="h-10 w-10 text-muted-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Brak artykulow
                </h3>
                <p className="text-muted-foreground">
                  Nie znaleziono artykulow w tej kategorii. Sprawdz inne kategorie.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

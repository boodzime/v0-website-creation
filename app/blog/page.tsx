import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { CategoryFilter } from '@/components/category-filter'
import { getPostsByCategory } from '@/lib/blog-data'

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
        <section className="border-b border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          
          {/* Subtle background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDuration: '6s' }} />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/20 rounded-full animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          </div>
          
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h1 className="animate-fade-in-up opacity-0 font-heading text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ animationFillMode: 'forwards' }}>
              Blog{' '}
              <span className="text-gradient-animate">
                Spawalniczy
              </span>
            </h1>
            <p className="animate-fade-in-up opacity-0 text-lg text-muted-foreground max-w-2xl mb-8" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              Odkryj swiat spawania - od podstawowych technik po zaawansowane metody. 
              Praktyczna wiedza, porady i inspiracje dla kazdego spawacza.
            </p>
            
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Suspense fallback={<div className="h-10 bg-muted/50 rounded-lg w-96" />}>
                <CategoryFilter />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 relative">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          {/* Subtle horizontal line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            {category !== 'Wszystkie' && (
              <div className="mb-8 animate-fade-in">
                <p className="text-muted-foreground">
                  Wyswietlanie {posts.length} {posts.length === 1 ? 'artykulu' : 'artykulow'} w kategorii{' '}
                  <span className="text-gradient-animate font-semibold">{category}</span>
                </p>
              </div>
            )}
            
            {posts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <div 
                    key={post.id}
                    className="animate-fade-in-up opacity-0"
                    style={{ 
                      animationDelay: `${index * 80}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-scale-in opacity-0" style={{ animationFillMode: 'forwards' }}>
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-6">
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  Brak artykulow
                </h3>
                <p className="text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
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

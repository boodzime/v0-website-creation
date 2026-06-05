import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { CategoryFilter } from '@/components/category-filter'
import { getPostsByCategory } from '@/lib/blog-data'
import { getBlogListSchema, getBreadcrumbSchema } from '@/lib/seo-schemas'

export const metadata: Metadata = {
  title: 'Blog Spawalniczy - Artykuly o Spawaniu MIG, TIG, MMA',
  description: 'Odkryj swiat spawania - od podstawowych technik MIG, TIG, MMA po zaawansowane metody. Praktyczna wiedza, porady ekspertow i recenzje sprzetu spawalniczego.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog Spawalniczy - TechSpaw',
    description: 'Artykuly o spawaniu - techniki MIG, TIG, MMA, porady, recenzje sprzetu spawalniczego.',
    url: 'https://techspaw.pl/blog',
    type: 'website',
  },
}

interface BlogPageProps {
  searchParams: Promise<{ kategoria?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const category = params.kategoria || 'Wszystkie'
  const posts = getPostsByCategory(category)

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogListSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Strona glowna', url: 'https://techspaw.pl' },
              { name: 'Blog' },
            ])
          ),
        }}
      />
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <h1 className="animate-fade-in-up font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog{' '}
              <span className="text-gradient-animate">
                Spawalniczy
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-muted-foreground max-w-2xl mb-8 opacity-0" style={{ animationFillMode: 'forwards' }}>
              Odkryj swiat spawania - od podstawowych technik po zaawansowane metody. 
              Praktyczna wiedza, porady i inspiracje dla kazdego spawacza.
            </p>
            
            <div className="animate-fade-in-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
              <Suspense fallback={<div className="h-10 bg-muted animate-pulse rounded-lg w-96" />}>
                <CategoryFilter />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 relative">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Animated horizontal line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
          
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
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-scale-in">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-6 animate-glow-pulse">
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
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
                  Brak artykulow
                </h3>
                <p className="text-muted-foreground animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
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

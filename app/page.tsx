import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { getFeaturedPosts, blogPosts } from '@/lib/blog-data'

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = blogPosts.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">
                  Nowe artykuly co tydzien
                </span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                Profesjonalny
                <span className="text-primary"> Blog</span>
                <br />
                o Spawaniu
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Techniki MIG, TIG, MMA i wiele wiecej. Praktyczna wiedza, porady ekspertow i recenzje sprzetu dla spawaczy na kazdym poziomie.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Przegladaj artykuly
                </Link>
                <Link
                  href="/blog?kategoria=Techniki"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-8 text-base font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/50"
                >
                  Techniki spawania
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative h-96 w-96">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
              <svg
                className="absolute inset-0 h-full w-full text-primary/20"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="100" r="8" fill="currentColor" />
              </svg>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Artykulow</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">15k+</div>
                <div className="text-sm text-muted-foreground">Czytelnikow</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Kategorie</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Darmowy dostep</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Wyroznionie artykuly
                </h2>
                <p className="text-muted-foreground">
                  Najpopularniejsze i najbardziej wartosciowe tresci
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Zobacz wszystkie
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 md:py-24 bg-card/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Najnowsze wpisy
                </h2>
                <p className="text-muted-foreground">
                  Swiezo opublikowane artykuly
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Zobacz wszystkie
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden">
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Zobacz wszystkie artykuly
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              <div className="relative max-w-2xl">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Chcesz rozwijac swoje umiejetnosci spawalnicze?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Przegladaj nasze artykuly i dowiedz sie wiecej o technikach spawania, bezpieczenstwie i wyborze odpowiedniego sprzetu.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Zacznij czytac
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
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
          {/* Neon glow effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
          
          <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 mb-6 shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-glow-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                  </span>
                  <span className="text-sm font-medium text-primary">
                    Nowe artykuly co tydzien
                  </span>
                </div>
                
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                  <span className="animate-fade-in-up inline-block text-gradient-animate drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                    TECHSPAW
                  </span>
                  <br />
                  <span className="animate-fade-in-up delay-200 inline-block text-foreground">Blog</span>
                  <span className="animate-fade-in-up delay-300 inline-block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Spawalniczy</span>
                </h1>
                
                <p className="animate-fade-in-up delay-400 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl opacity-0" style={{ animationFillMode: 'forwards' }}>
                  Techniki MIG, TIG, MMA i wiele wiecej. Praktyczna wiedza, porady ekspertow i recenzje sprzetu dla spawaczy na kazdym poziomie.
                </p>
                
                <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4 opacity-0" style={{ animationFillMode: 'forwards' }}>
                  <Link
                    href="/blog"
                    className="group inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 hover-glow"
                  >
                    Przegladaj artykuly
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/blog?kategoria=Techniki"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-primary/50 bg-card/50 px-8 text-base font-medium text-foreground transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-primary/10 hover-scale"
                  >
                    Techniki spawania
                  </Link>
                </div>
              </div>
              
              {/* Logo display */}
              <div className="hidden lg:block flex-shrink-0 animate-scale-in delay-300" style={{ animationFillMode: 'forwards' }}>
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full scale-150 animate-glow-pulse" />
                  <Image
                    src="/logo.png"
                    alt="TechSpaw Logo"
                    width={300}
                    height={300}
                    className="relative drop-shadow-[0_0_40px_rgba(0,255,255,0.6)]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative neon circles */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block opacity-50">
            <div className="relative h-96 w-96">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              <svg
                className="absolute inset-0 h-full w-full animate-spin-slow"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="100" cy="100" r="80" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="8 8" />
                <circle cx="100" cy="100" r="60" stroke="url(#gradient1)" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="url(#gradient2)" strokeWidth="2" />
                <circle cx="100" cy="100" r="8" fill="url(#gradient1)" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.82 0.18 195)" />
                    <stop offset="100%" stopColor="oklch(0.72 0.20 310)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.72 0.20 310)" />
                    <stop offset="100%" stopColor="oklch(0.82 0.18 195)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: '50+', label: 'Artykulow' },
                { value: '15k+', label: 'Czytelnikow' },
                { value: '4', label: 'Kategorie' },
                { value: '100%', label: 'Darmowy dostep' },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center group animate-fade-in-up opacity-0`}
                  style={{ animationDelay: `${index * 100 + 600}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="font-heading text-3xl md:text-4xl font-bold text-gradient-animate mb-2 group-hover:animate-text-glow transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between mb-10">
              <div className="animate-slide-in-left">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Wyroznionie{' '}
                  <span className="text-gradient-animate">
                    artykuly
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Najpopularniejsze i najbardziej wartosciowe tresci
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all hover:text-accent animate-slide-in-right"
              >
                Zobacz wszystkie
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-6">
              {featuredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <BlogCard post={post} featured />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 md:py-24 bg-card/30 border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between mb-10">
              <div className="animate-slide-in-left">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Najnowsze{' '}
                  <span className="text-gradient-animate">
                    wpisy
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Swiezo opublikowane artykuly
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all hover:text-accent animate-slide-in-right"
              >
                Zobacz wszystkie
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recentPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center md:hidden animate-fade-in-up delay-500" style={{ animationFillMode: 'forwards' }}>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover-glow"
              >
                Zobacz wszystkie artykuly
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="animate-scale-in relative overflow-hidden rounded-2xl border border-primary/30 p-8 md:p-12 bg-gradient-to-br from-card via-card to-primary/5 hover-glow transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              
              <div className="relative max-w-2xl">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 animate-slide-in-left">
                  Chcesz rozwijac swoje{' '}
                  <span className="text-gradient-animate">
                    umiejetnosci spawalnicze?
                  </span>
                </h2>
                <p className="text-muted-foreground mb-6 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
                  Przegladaj nasze artykuly i dowiedz sie wiecej o technikach spawania, bezpieczenstwie i wyborze odpowiedniego sprzetu.
                </p>
                <Link
                  href="/blog"
                  className="group inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 animate-bounce-in delay-400"
                  style={{ animationFillMode: 'forwards' }}
                >
                  Zacznij czytac
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
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

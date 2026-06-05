import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getFeaturedPosts, blogPosts } from '@/lib/blog-data'
import { 
  StatsSection, 
  FeaturedPostsSection, 
  RecentPostsSection, 
  CTASection 
} from '@/components/animated-sections'
import { ContactSection, FloatingPhoneButton } from '@/components/contact-section'

export default function HomePage() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = blogPosts.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background video - stays in place while scrolling */}
      <div className="fixed inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Base overlay for entire page */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/70" />
      </div>
      
      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          {/* Additional overlay for hero readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />

          {/* Animated neon glow effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-70" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
            <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-primary rounded-full animate-float opacity-30" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
          </div>
          
          <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                {/* Animated badge */}
                <div className="animate-bounce-in inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 mb-6 shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-glow-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                  </span>
                  <span className="text-sm font-medium text-primary animate-text-glow">
                    Nowe artykuly co tydzien
                  </span>
                </div>
                
                {/* Main title with staggered animation */}
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                  <span className="animate-fade-in-up inline-block opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                    <span className="text-gradient-animate drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">TECH</span>
                  </span>
                  <span className="animate-fade-in-up inline-block opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                    <span className="text-gradient-animate drop-shadow-[0_0_30px_rgba(186,85,211,0.5)]">SPAW</span>
                  </span>
                  <br />
                  <span className="animate-slide-in-left inline-block opacity-0 text-foreground" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>Blog</span>
                  <span className="animate-slide-in-right inline-block opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Spawalniczy</span>
                  </span>
                </h1>
                
                {/* Animated underline */}
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full mb-6 animate-[expand_1s_ease-out_0.6s_forwards]" />
                
                <p className="animate-fade-in-up text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl opacity-0" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
                  Techniki <span className="text-primary font-semibold animate-text-glow">MIG</span>, <span className="text-accent font-semibold">TIG</span>, <span className="text-primary font-semibold">MMA</span> i wiele wiecej. Praktyczna wiedza, porady ekspertow i recenzje sprzetu dla spawaczy na kazdym poziomie.
                </p>
                
                {/* Animated buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/blog"
                    className="group animate-scale-in opacity-0 inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 hover-glow"
                    style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
                  >
                    <span className="relative z-10 flex items-center">
                      Przegladaj artykuly
                      <svg className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/blog?kategoria=Techniki"
                    className="animate-scale-in opacity-0 inline-flex h-12 items-center justify-center rounded-lg border border-primary/50 bg-card/50 px-8 text-base font-medium text-foreground transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-primary/10 hover-scale"
                    style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
                  >
                    Techniki spawania
                  </Link>
                </div>
              </div>
              
              {/* Animated Logo display */}
              <div className="hidden lg:block flex-shrink-0">
                <div className="relative animate-scale-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                  <div className="animate-float" style={{ animationDuration: '4s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full scale-150 animate-glow-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl rounded-full scale-125 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <Image
                      src="/logo.png"
                      alt="FutureTech Logo"
                      width={420}
                      height={140}
                      className="relative h-auto w-[420px] drop-shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:drop-shadow-[0_0_60px_rgba(0,255,255,0.8)] transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative animated circles */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block opacity-50">
            <div className="relative h-96 w-96">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse" />
              <svg
                className="absolute inset-0 h-full w-full animate-spin-slow"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle cx="100" cy="100" r="80" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="8 8" className="animate-pulse" />
                <circle cx="100" cy="100" r="60" stroke="url(#gradient1)" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="url(#gradient2)" strokeWidth="2" />
                <circle cx="100" cy="100" r="8" fill="url(#gradient1)" className="animate-pulse" />
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
          
          {/* Bottom animated line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
        </section>

        {/* Animated sections with scroll-triggered animations */}
        <StatsSection />
        <FeaturedPostsSection posts={featuredPosts} />
        <RecentPostsSection posts={recentPosts} />
        <ContactSection />
        <CTASection />
      </main>

      <Footer />
      <FloatingPhoneButton />
    </div>
  )
}

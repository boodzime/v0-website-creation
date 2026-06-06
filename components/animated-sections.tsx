"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"
import { BlogCard } from "@/components/blog-card"
import type { BlogPost } from "@/lib/blog-data"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isInView }
}

// Stats Section with scroll-triggered animations
export function StatsSection() {
  const { ref, isInView } = useInView()
  
  const stats = [
    { value: '50+', label: 'Artykulow' },
    { value: '15k+', label: 'Czytelnikow' },
    { value: '4', label: 'Kategorie' },
    { value: '100%', label: 'Darmowy dostep' },
  ]

  return (
    <section ref={ref} className="border-b border-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group hover-lift cursor-default p-4 rounded-xl transition-all duration-300 hover:bg-card/80 ${
                isInView ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isInView ? `${index * 150}ms` : undefined,
                animationFillMode: 'forwards'
              }}
            >
              <div className="font-heading text-3xl md:text-5xl font-bold mb-2">
                <span className="text-gradient-animate group-hover:animate-text-glow transition-all">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Posts Section with scroll-triggered animations
export function FeaturedPostsSection({ posts }: { posts: BlogPost[] }) {
  const { ref, isInView } = useInView()

  return (
    <section id="blog" ref={ref} className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span 
              className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2 ${
                isInView ? 'animate-fade-in-down' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
            >
              Polecane
            </span>
            <h2 
              className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 ${
                isInView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
            >
              Wyroznionie{' '}
              <span className="text-gradient-animate">artykuly</span>
            </h2>
            <p 
              className={`text-muted-foreground ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
            >
              Najpopularniejsze i najbardziej wartosciowe tresci
            </p>
          </div>
          <Link
            href="/blog"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all hover:text-accent group ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz wszystkie
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className={isInView ? 'animate-fade-in-up' : 'opacity-0'}
              style={{ 
                animationDelay: isInView ? `${index * 200 + 500}ms` : undefined, 
                animationFillMode: 'forwards' 
              }}
            >
              <BlogCard post={post} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Recent Posts Section with scroll-triggered animations
export function RecentPostsSection({ posts }: { posts: BlogPost[] }) {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-16 md:py-24 bg-card/30 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Animated accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
      
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span 
              className={`inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-2 ${
                isInView ? 'animate-fade-in-down' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
            >
              Swiezo dodane
            </span>
            <h2 
              className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 ${
                isInView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
            >
              Najnowsze{' '}
              <span className="text-gradient-animate">wpisy</span>
            </h2>
            <p 
              className={`text-muted-foreground ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
            >
              Swiezo opublikowane artykuly
            </p>
          </div>
          <Link
            href="/blog"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all hover:text-accent group ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz wszystkie
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className={isInView ? 'animate-scale-in' : 'opacity-0'}
              style={{ 
                animationDelay: isInView ? `${index * 100 + 300}ms` : undefined, 
                animationFillMode: 'forwards' 
              }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className={`inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover-glow ${
              isInView ? 'animate-bounce-in' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '700ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz wszystkie artykuly
          </Link>
        </div>
      </div>
    </section>
  )
}

// Generic category section (Techniki / Sprzet / BHP) with scroll-triggered animations
export function CategorySection({
  id,
  eyebrow,
  title,
  highlight,
  description,
  category,
  posts,
  altBg = false,
}: {
  id: string
  eyebrow: string
  title: string
  highlight: string
  description: string
  category: string
  posts: BlogPost[]
  altBg?: boolean
}) {
  const { ref, isInView } = useInView()
  const filtered = posts.filter((p) => p.category === category)

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 py-16 md:py-24 relative overflow-hidden ${
        altBg ? 'bg-card/30 border-y border-border' : ''
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span
              className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2 ${
                isInView ? 'animate-fade-in-down' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
            >
              {eyebrow}
            </span>
            <h2
              className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 ${
                isInView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
            >
              {title}{' '}
              <span className="text-gradient-animate">{highlight}</span>
            </h2>
            <p
              className={`text-muted-foreground ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
            >
              {description}
            </p>
          </div>
          <Link
            href={`/blog?kategoria=${category}`}
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all hover:text-accent group ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz wszystkie
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <div
              key={post.id}
              className={isInView ? 'animate-scale-in' : 'opacity-0'}
              style={{
                animationDelay: isInView ? `${index * 120 + 300}ms` : undefined,
                animationFillMode: 'forwards',
              }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href={`/blog?kategoria=${category}`}
            className={`inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover-glow ${
              isInView ? 'animate-bounce-in' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '600ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz wszystkie
          </Link>
        </div>
      </div>
    </section>
  )
}

// Gallery preview section with scroll-triggered animations
export function GalleryPreviewSection() {
  const { ref, isInView } = useInView()
  const tiles = [0, 1, 2, 3, 4, 5]

  return (
    <section id="galeria" ref={ref} className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span
              className={`inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-2 ${
                isInView ? 'animate-fade-in-down' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
            >
              Nasze realizacje
            </span>
            <h2
              className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 ${
                isInView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
            >
              Galeria{' '}
              <span className="text-gradient-animate">zdjec</span>
            </h2>
            <p
              className={`text-muted-foreground ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
            >
              Zobacz nasze spawalnicze realizacje i projekty
            </p>
          </div>
          <Link
            href="/galeria"
            className={`hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all hover:text-accent group ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz galerie
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {tiles.map((tile, index) => (
            <Link
              key={tile}
              href="/galeria"
              className={`group relative aspect-square overflow-hidden rounded-xl border border-primary/20 bg-card/50 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: isInView ? `${index * 100 + 300}ms` : undefined,
                animationFillMode: 'forwards',
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground transition-colors group-hover:text-primary">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span className="text-xs font-medium tracking-wider uppercase">Zdjecie wkrotce</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/galeria"
            className={`inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover-glow ${
              isInView ? 'animate-bounce-in' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '600ms' : undefined, animationFillMode: 'forwards' }}
          >
            Zobacz cala galerie
          </Link>
        </div>
      </div>
    </section>
  )
}

// CTA Section with scroll-triggered animations
export function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="mx-auto max-w-6xl px-4">
        <div 
          className={`relative overflow-hidden rounded-2xl border border-primary/30 p-8 md:p-12 bg-gradient-to-br from-card via-card to-primary/5 hover-glow transition-all duration-500 ${
            isInView ? 'animate-scale-in' : 'opacity-0'
          }`}
          style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/50 rounded-br-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="relative max-w-2xl">
            <span 
              className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4 ${
                isInView ? 'animate-fade-in-down' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
            >
              Zacznij juz dzis
            </span>
            <h2 
              className={`font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 ${
                isInView ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
            >
              Chcesz rozwijac swoje{' '}
              <span className="text-gradient-animate">umiejetnosci spawalnicze?</span>
            </h2>
            <p 
              className={`text-muted-foreground mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isInView ? '500ms' : undefined, animationFillMode: 'forwards' }}
            >
              Przegladaj nasze artykuly i dowiedz sie wiecej o technikach spawania, bezpieczenstwie i wyborze odpowiedniego sprzetu.
            </p>
            <Link
              href="/blog"
              className={`group inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 ${
                isInView ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '600ms' : undefined, animationFillMode: 'forwards' }}
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
  )
}

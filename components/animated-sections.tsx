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
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
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

// Testimonials Section with scroll-triggered animations
export function TestimonialsSection() {
  const { ref, isInView } = useInView()
  
  const testimonials = [
    {
      id: 1,
      name: 'Marek Kowalski',
      role: 'Właściciel warsztatu',
      content: 'Profesjonalne spawanie konstrukcji stalowej do mojego warsztatu. Terminowo, czysto i solidnie. Polecam!',
      rating: 5,
      image: '/testimonials/client1.jpg'
    },
    {
      id: 2,
      name: 'Anna Nowak',
      role: 'Architekt',
      content: 'Współpraca przy projekcie balustrad ze stali nierdzewnej przebiegła wzorowo. Wykonanie zgodne z projektem.',
      rating: 5,
      image: '/testimonials/client2.jpg'
    },
    {
      id: 3,
      name: 'Tomasz Wiśniewski',
      role: 'Kierownik budowy',
      content: 'Szybka realizacja, konkurencyjne ceny i świetna jakość spoin. Na pewno będziemy współpracować ponownie.',
      rating: 5,
      image: '/testimonials/client3.jpg'
    },
    {
      id: 4,
      name: 'Piotr Zieliński',
      role: 'Właściciel gospodarstwa',
      content: 'Naprawa maszyn rolniczych wykonana sprawnie i profesjonalnie. Polecam każdemu rolnikowi!',
      rating: 5,
      image: '/testimonials/client4.jpg'
    }
  ]

  const averageRating = 4.9
  const totalReviews = 47

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
          >
            Opinie klientów
          </span>
          <h2 
            className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 ${
              isInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
          >
            Co mówią nasi{' '}
            <span className="text-gradient-animate">klienci</span>
          </h2>
          
          {/* Google Rating Badge */}
          <div 
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm ${
              isInView ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-muted-foreground/30'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">{averageRating}</span>
            <span className="text-sm text-muted-foreground">({totalReviews} opinii na Google)</span>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`group relative p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: isInView ? `${index * 150 + 400}ms` : undefined, 
                animationFillMode: 'forwards' 
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div 
          className={`text-center mt-10 ${isInView ? 'animate-bounce-in' : 'opacity-0'}`}
          style={{ animationDelay: isInView ? '1000ms' : undefined, animationFillMode: 'forwards' }}
        >
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-card/50 text-sm font-medium text-foreground hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
          >
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Zostaw opinię na Google
          </a>
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

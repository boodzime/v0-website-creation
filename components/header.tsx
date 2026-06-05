'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Start', icon: 'home' },
  { href: '/blog', label: 'Blog', icon: 'blog' },
  { href: '/blog?kategoria=Techniki', label: 'Techniki', icon: 'tech' },
  { href: '/blog?kategoria=Sprzet', label: 'Sprzet', icon: 'gear' },
  { href: '/blog?kategoria=BHP', label: 'BHP', icon: 'shield' },
]

function NavIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case 'home':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    case 'blog':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      )
    case 'tech':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      )
    case 'gear':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    case 'shield':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9,12 11,14 15,10" />
        </svg>
      )
    default:
      return null
  }
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function HeaderContent() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.includes('?')) {
      const [path, query] = href.split('?')
      const params = new URLSearchParams(query)
      const kategoria = params.get('kategoria')
      return pathname === path && searchParams.get('kategoria') === kategoria
    }
    return pathname === href && !searchParams.get('kategoria')
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`animate-fade-in-down sticky top-0 z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? 'border-b border-primary/30 bg-background/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'border-b border-primary/10 bg-background/40 backdrop-blur-md'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />

        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
              <Image
                src="/logo.png"
                alt="TechSpaw"
                width={200}
                height={67}
                className="relative h-14 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${
                  isActive(item.href) ? 'w-2/3' : 'w-0 group-hover:w-2/3'
                }`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group relative flex items-center justify-center w-10 h-10 rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
              <FacebookIcon className="relative w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>

            <Link
              href="/blog"
              className="group inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:scale-105 animate-gradient-x"
            >
              <span className="group-hover:tracking-wider transition-all duration-300">Czytaj Blog</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header - Just Logo */}
      <header
        className={`md:hidden sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-primary/30 bg-background/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
            : 'border-b border-primary/10 bg-background/60 backdrop-blur-md'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />
        
        <div className="flex h-14 items-center justify-center px-4">
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
              <Image
                src="/logo.png"
                alt="TechSpaw"
                width={140}
                height={47}
                className="relative h-9 w-auto drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all duration-300"
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Fixed at bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-t border-primary/20" />
        
        {/* Animated top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        {/* Nav items */}
        <div className="relative flex items-stretch justify-around px-1 py-2">
          {navItems.map((item, index) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-300 min-w-[56px] ${
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground active:scale-95'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Active indicator glow */}
                {active && (
                  <>
                    <div className="absolute inset-0 bg-primary/10 rounded-xl" />
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                  </>
                )}
                
                {/* Icon with glow effect on active */}
                <div className={`relative transition-all duration-300 ${active ? 'scale-110' : ''}`}>
                  {active && (
                    <div className="absolute inset-0 blur-md bg-primary/50 rounded-full scale-150" />
                  )}
                  <NavIcon 
                    type={item.icon} 
                    className={`relative w-5 h-5 transition-all duration-300 ${
                      active ? 'drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' : ''
                    }`} 
                  />
                </div>
                
                {/* Label */}
                <span className={`text-[10px] font-medium tracking-tight transition-all duration-300 ${
                  active ? 'opacity-100' : 'opacity-70'
                }`}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export function Header() {
  return (
    <Suspense fallback={
      <>
        {/* Desktop Header Skeleton */}
        <header className="animate-fade-in-down sticky top-0 z-50 border-b border-primary/10 bg-background/40 backdrop-blur-md hidden md:block">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
            <div className="h-14 w-[200px] bg-muted/20 rounded animate-pulse" />
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-8 w-16 bg-muted/20 rounded animate-pulse" />
              ))}
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-10 bg-muted/20 rounded-lg animate-pulse" />
              <div className="h-10 w-24 bg-muted/20 rounded-lg animate-pulse" />
            </div>
          </div>
        </header>
        {/* Mobile Header Skeleton */}
        <header className="md:hidden sticky top-0 z-50 border-b border-primary/10 bg-background/60 backdrop-blur-md">
          <div className="flex h-14 items-center justify-center px-4">
            <div className="h-9 w-[140px] bg-muted/20 rounded animate-pulse" />
          </div>
        </header>
        {/* Mobile Bottom Nav Skeleton */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-t border-primary/20" />
          <div className="relative flex items-stretch justify-around px-1 py-2">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex flex-col items-center gap-1 min-w-[56px]">
                <div className="h-5 w-5 bg-muted/20 rounded animate-pulse" />
                <div className="h-2 w-8 bg-muted/20 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </nav>
        <div className="md:hidden h-[72px]" />
      </>
    }>
      <HeaderContent />
    </Suspense>
  )
}

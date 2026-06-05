'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'Strona Glowna' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog?kategoria=Techniki', label: 'Techniki' },
  { href: '/blog?kategoria=Sprzet', label: 'Sprzet' },
  { href: '/blog?kategoria=BHP', label: 'BHP' },
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`animate-fade-in-down sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-primary/30 bg-background/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          : 'border-b border-primary/10 bg-background/40 backdrop-blur-md'
      }`}
    >
      {/* Animated neon top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
            <Image
              src="/logo.png"
              alt="TechSpaw"
              width={180}
              height={60}
              className="relative h-14 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/5 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-2/3 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group relative hidden sm:flex items-center justify-center w-10 h-10 rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
            <FacebookIcon className="relative w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </a>

          {/* CTA */}
          <Link
            href="/blog"
            className="group hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:scale-105 animate-gradient-x"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">Czytaj Blog</span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? 'Zamknij menu' : 'Otworz menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex md:hidden items-center justify-center w-10 h-10 rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-1.5 w-5">
              <span className={`block h-0.5 w-full bg-primary rounded-full transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-full bg-primary rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-primary rounded-full transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out border-t border-primary/10 ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-1 bg-background/90 backdrop-blur-xl">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
              style={{ transitionDelay: open ? `${index * 50}ms` : '0ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300" />
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-primary/10">
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="flex-1 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] animate-gradient-x"
            >
              Czytaj Blog
            </Link>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group relative flex items-center justify-center w-11 h-11 rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-300"
            >
              <FacebookIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

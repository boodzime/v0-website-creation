'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function CookieIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="8" r="1" fill="currentColor" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="13" r="1" fill="currentColor" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
    </svg>
  )
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Delay showing banner for smooth page load
      const timer = setTimeout(() => {
        setIsVisible(true)
        setTimeout(() => setIsAnimating(true), 50)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 500)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 500)
  }

  if (!isVisible) return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-500 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150 animate-pulse" />
        
        {/* Main banner container */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.15)]">
          {/* Animated top border */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
          
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/50 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/50 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/50 rounded-br-2xl" />
          
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Cookie icon with glow */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center">
                  <CookieIcon className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                  <span className="text-gradient-animate">Ciasteczka</span>
                  <span className="text-primary animate-pulse">🍪</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uzywamy plikow cookies, aby zapewnic najlepsza jakosc korzystania z naszej strony. 
                  Cookies pomagaja nam analizowac ruch i personalizowac tresci.{' '}
                  <Link 
                    href="/cookies" 
                    className="text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-300"
                  >
                    Dowiedz sie wiecej
                  </Link>
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleDecline}
                  className="group relative px-6 py-3 rounded-xl border border-primary/30 bg-transparent text-muted-foreground font-medium transition-all duration-300 hover:border-primary/60 hover:text-foreground hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] overflow-hidden"
                >
                  <span className="relative z-10">Odrzuc</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={handleAccept}
                  className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Akceptuje
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Quick links */}
            <div className="mt-6 pt-4 border-t border-primary/20 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-muted-foreground">Wiecej informacji:</span>
              <Link href="/polityka-prywatnosci" className="text-primary/70 hover:text-primary transition-colors duration-300 hover:underline underline-offset-4">
                Polityka prywatnosci
              </Link>
              <span className="text-primary/30">|</span>
              <Link href="/regulamin" className="text-primary/70 hover:text-primary transition-colors duration-300 hover:underline underline-offset-4">
                Regulamin
              </Link>
              <span className="text-primary/30">|</span>
              <Link href="/cookies" className="text-primary/70 hover:text-primary transition-colors duration-300 hover:underline underline-offset-4">
                Polityka cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

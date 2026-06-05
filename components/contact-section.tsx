"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"

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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}

export function ContactSection() {
  const { ref, isInView } = useInView()
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      label: 'Telefon',
      value: '+48 691 779 481',
      href: 'tel:+48691779481',
      color: 'primary'
    },
    {
      icon: MailIcon,
      label: 'Email',
      value: 'techspaw@o2.pl',
      href: 'mailto:techspaw@o2.pl',
      color: 'accent'
    },
    {
      icon: MapPinIcon,
      label: 'Adres',
      value: 'Nad Zatoka 4/6, 87-100 Torun',
      href: null,
      color: 'primary'
    },
    {
      icon: ClockIcon,
      label: 'Godziny pracy',
      value: 'Pon-Sob: 8:00 - 17:00',
      href: null,
      color: 'accent'
    },
  ]

  return (
    <section ref={ref} id="kontakt" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-20" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
          >
            Kontakt
          </span>
          <h2 
            className={`font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 ${
              isInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
          >
            Skontaktuj sie z{' '}
            <span className="text-gradient-animate">nami</span>
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto text-lg ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
          >
            Masz pytania dotyczace spawania? Chcesz nawiazac wspolprace? Skontaktuj sie z nami!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
            >
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`group relative overflow-hidden rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm p-5 transition-all duration-500 hover:border-${item.color}/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover-lift ${
                    isInView ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: isInView ? `${index * 100 + 500}ms` : undefined, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-${item.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${item.color}/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-${item.color}/10 border border-${item.color}/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className={`text-foreground font-medium hover:text-${item.color} transition-colors duration-300 block truncate`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Map */}
            <div 
              className={`relative rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.1)] ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: isInView ? '800ms' : undefined, animationFillMode: 'forwards' }}
            >
              {/* Map Container */}
              <div className="relative h-[300px] bg-background/50">
                {/* Stylized Map Background */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  {/* Decorative streets */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                  <div className="absolute top-0 bottom-0 right-1/3 w-1 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
                  
                  {/* Decorative blocks */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-12 rounded bg-card/60 border border-primary/10" />
                  <div className="absolute top-1/4 right-1/4 w-20 h-16 rounded bg-card/60 border border-primary/10" />
                  <div className="absolute bottom-1/4 left-1/5 w-24 h-14 rounded bg-card/60 border border-primary/10" />
                  <div className="absolute bottom-1/3 right-1/5 w-16 h-20 rounded bg-card/60 border border-primary/10" />
                  
                  {/* Radial glow from pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                </div>
                
                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <div className="relative group cursor-pointer">
                    {/* Pulse rings */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-8 h-8">
                      <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping" />
                      <div className="absolute inset-2 rounded-full border border-primary/30 animate-ping" style={{ animationDelay: '0.5s' }} />
                    </div>
                    
                    {/* Pin shadow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-1 bg-black/30 rounded-full blur-sm" />
                    
                    {/* Main pin */}
                    <div className="relative animate-bounce" style={{ animationDuration: '2s' }}>
                      <div className="relative">
                        {/* Pin glow */}
                        <div className="absolute inset-0 bg-primary/50 blur-xl rounded-full scale-150 animate-pulse" />
                        
                        {/* Pin body */}
                        <div className="relative w-12 h-16">
                          <svg viewBox="0 0 48 64" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
                            <path 
                              d="M24 0C10.745 0 0 10.745 0 24c0 18 24 40 24 40s24-22 24-40C48 10.745 37.255 0 24 0z" 
                              className="fill-primary"
                            />
                            <circle cx="24" cy="24" r="10" className="fill-background" />
                            <circle cx="24" cy="24" r="6" className="fill-primary animate-pulse" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-card border border-primary/30 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      <p className="text-sm font-medium text-foreground">TECHSPAW</p>
                      <p className="text-xs text-muted-foreground">Nad Zatoka 4/6, Torun</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card" />
                    </div>
                  </div>
                </div>
                
                {/* Compass */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/80 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                    <path fill="currentColor" d="M12 2L8 12l4-2 4 2-4-10z" opacity="0.3" />
                    <path fill="currentColor" d="M12 22l4-10-4 2-4-2 4 10z" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Scale bar */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <span className="text-xs text-muted-foreground">500m</span>
                </div>
              </div>
              
              {/* Map footer */}
              <div className="p-4 border-t border-primary/20 bg-card/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Torun, Polska</p>
                    <p className="text-xs text-muted-foreground">Nad Zatoka 4/6, 87-100</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=Nad+Zatoka+4/6+Torun+87-100+Polska" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                >
                  Otwórz mape
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className={`relative rounded-2xl overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.1)] ${
              isInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '600ms' : undefined, animationFillMode: 'forwards' }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" />
            
            <div className="relative">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Wyslij <span className="text-gradient-animate">wiadomosc</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Wypelnij formularz, a odpowiemy najszybciej jak to mozliwe.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Imie i nazwisko
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <UserIcon className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Adres email
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>
                
                {/* Phone Field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon <span className="text-muted-foreground">(opcjonalnie)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Wiadomosc
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <MessageIcon className="w-5 h-5" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Napisz swoja wiadomosc..."
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {formStatus === 'idle' && (
                      <>
                        Wyslij wiadomosc
                        <SendIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                    {formStatus === 'sending' && (
                      <>
                        Wysylanie...
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      </>
                    )}
                    {formStatus === 'sent' && (
                      <>
                        Wyslano!
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </span>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Floating Phone Button Component
export function FloatingPhoneButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="tel:+48691779481"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Zadzwon do nas"
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
      <div className="absolute inset-2 rounded-full bg-primary/20 animate-ping" style={{ animationDelay: '0.5s' }} />
      
      {/* Main button */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] transition-all duration-300 hover:scale-110">
        <PhoneIcon className="w-7 h-7 text-primary-foreground group-hover:animate-wiggle" />
      </div>
      
      {/* Tooltip */}
      <div 
        className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-card border border-primary/30 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <p className="text-sm font-medium text-foreground">Zadzwon teraz!</p>
        <p className="text-xs text-primary">+48 691 779 481</p>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full border-8 border-transparent border-l-card" />
      </div>
    </a>
  )
}

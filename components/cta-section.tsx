'use client'

import Link from 'next/link'

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function CTABanner({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  const phoneNumber = '+48691779481'
  const whatsappLink = `https://wa.me/48691779481?text=${encodeURIComponent('Dzien dobry, chcialbym uzyskac wycene projektu spawalniczego.')}`
  
  if (variant === 'compact') {
    return (
      <section className="relative py-12 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href={`tel:${phoneNumber}`}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              <PhoneIcon className="w-5 h-5 group-hover:animate-wiggle" />
              Zadzwon teraz
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Napisz na WhatsApp
            </a>
            <Link
              href="/#kontakt"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl border-2 border-primary/50 bg-primary/10 text-primary font-semibold hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <CalculatorIcon className="w-5 h-5" />
              Wycen projekt
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Glowing borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-shimmer" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <ClockIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Bezplatna wycena w 24h</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient-animate">Gotowy na realizacje projektu?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj sie z nami juz teraz i otrzymaj darmowa wycene. Profesjonalne uslugi spawalnicze w Toruniu i okolicach.
          </p>
        </div>

        {/* CTA Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Wycen projekt */}
          <Link
            href="/#kontakt"
            className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
              <CalculatorIcon className="w-8 h-8 text-primary" />
            </div>
            <div className="relative text-center">
              <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">Wycen projekt</h3>
              <p className="text-sm text-muted-foreground mt-1">Wypelnij formularz</p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-3/4 transition-all duration-500" />
          </Link>

          {/* Zadzwon teraz */}
          <a
            href={`tel:${phoneNumber}`}
            className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
              <PhoneIcon className="w-8 h-8 text-primary group-hover:animate-wiggle" />
            </div>
            <div className="relative text-center">
              <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">Zadzwon teraz</h3>
              <p className="text-sm text-muted-foreground mt-1">+48 691 779 481</p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-3/4 transition-all duration-500" />
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300">
              <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
            </div>
            <div className="relative text-center">
              <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-[#25D366] transition-colors">Napisz na WhatsApp</h3>
              <p className="text-sm text-muted-foreground mt-1">Szybka odpowiedz</p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full group-hover:w-3/4 transition-all duration-500" />
          </a>

          {/* Bezplatna wycena */}
          <div className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/50 hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl animate-pulse" />
            <div className="relative w-16 h-16 rounded-xl bg-primary/30 border border-primary/60 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <ClockIcon className="w-8 h-8 text-primary" />
            </div>
            <div className="relative text-center">
              <h3 className="font-heading font-bold text-lg text-primary">Bezplatna wycena</h3>
              <p className="text-sm text-primary/80 mt-1 font-medium">Odpowiedz w 24h!</p>
            </div>
            <div className="absolute -top-2 -right-2 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full shadow-lg animate-bounce">
              GRATIS
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Ponad 15 lat doswiadczenia</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Darmowy dojazd do 30km</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Gwarancja jakosci</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <>
      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo & Description - Large Section */}
          <div className="lg:col-span-4 animate-fade-in-up">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
                <Image
                  src="/logo.png"
                  alt="TechSpaw"
                  width={180}
                  height={60}
                  className="relative h-14 w-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)] transition-all duration-300"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Profesjonalny blog o spawaniu. Techniki, porady, recenzje sprzetu i praktyczna wiedza dla spawaczy na kazdym poziomie zaawansowania.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                <FacebookIcon className="relative w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 animate-fade-in-up delay-100" style={{ animationFillMode: 'forwards' }}>
            <h4 className="font-heading font-semibold text-gradient-animate mb-5 text-lg">Nawigacja</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Strona glowna' },
                { href: '/blog', label: 'Blog' },
                { href: '/galeria', label: 'Galeria' },
                { href: '/blog?kategoria=Techniki', label: 'Techniki' },
                { href: '/blog?kategoria=Sprzet', label: 'Sprzet' },
                { href: '/blog?kategoria=BHP', label: 'BHP' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
            <h4 className="font-heading font-semibold text-gradient-animate mb-5 text-lg">Kategorie</h4>
            <ul className="space-y-3">
              {[
                { href: '/blog?kategoria=Techniki', label: 'Spawanie MIG/MAG' },
                { href: '/blog?kategoria=Techniki', label: 'Spawanie TIG' },
                { href: '/blog?kategoria=Techniki', label: 'Spawanie MMA' },
                { href: '/blog?kategoria=Sprzet', label: 'Spawarki' },
                { href: '/blog?kategoria=BHP', label: 'Bezpieczenstwo' },
              ].map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
            <h4 className="font-heading font-semibold text-gradient-animate mb-5 text-lg">Prawne</h4>
            <ul className="space-y-3">
              {[
                { href: '/polityka-prywatnosci', label: 'Polityka prywatnosci' },
                { href: '/regulamin', label: 'Regulamin' },
                { href: '/cookies', label: 'Polityka cookies' },
                { href: '/rodo', label: 'RODO' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 animate-fade-in-up delay-400" style={{ animationFillMode: 'forwards' }}>
            <h4 className="font-heading font-semibold text-gradient-animate mb-5 text-lg">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:techspaw@o2.pl" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  techspaw@o2.pl
                </a>
              </li>
              <li>
                <a 
                  href="tel:+48691779481" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +48 691 779 481
                </a>
              </li>
              <li className="text-muted-foreground flex items-start gap-2 pt-2">
                <svg className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Nad Zatoka 4/6, 87-100 Torun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/20 animate-fade-in-up delay-500" style={{ animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TechSpaw. Wszelkie prawa zastrzezone.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/polityka-prywatnosci" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-wider">
                Polityka prywatnosci
              </Link>
              <span className="text-primary/30">|</span>
              <Link href="/regulamin" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-wider">
                Regulamin
              </Link>
              <span className="text-primary/30">|</span>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-wider">
                Cookies
              </Link>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative flex items-center justify-center w-9 h-9 rounded-lg border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-300" />
                <FacebookIcon className="relative w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    {/* Spacer for mobile bottom navigation */}
    <div className="md:hidden h-20" />
    </>
  )
}

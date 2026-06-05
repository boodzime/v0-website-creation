import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 animate-fade-in-up">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
                <Image
                  src="/logo.png"
                  alt="TechSpaw"
                  width={100}
                  height={35}
                  className="relative h-8 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Profesjonalny blog o spawaniu. Techniki, porady, recenzje sprzetu i praktyczna wiedza dla spawaczy na kazdym poziomie zaawansowania.
            </p>
          </div>

          <div className="animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
            <h4 className="font-heading font-semibold text-gradient-animate mb-4">Kategorie</h4>
            <ul className="space-y-2">
              {[
                { href: '/blog?kategoria=Techniki', label: 'Techniki spawania' },
                { href: '/blog?kategoria=Sprzet', label: 'Sprzet' },
                { href: '/blog?kategoria=BHP', label: 'BHP' },
              ].map((item, index) => (
                <li key={item.href} style={{ animationDelay: `${index * 100 + 300}ms` }}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up delay-400" style={{ animationFillMode: 'forwards' }}>
            <h4 className="font-heading font-semibold text-gradient-animate mb-4">Kontakt</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">kontakt@techspaw.pl</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">+48 691 779 481</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up delay-600" style={{ animationFillMode: 'forwards' }}>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TechSpaw. Wszelkie prawa zastrzezone.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-wider">
              Blog
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:tracking-wider">
              Strona glowna
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

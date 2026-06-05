import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="animate-fade-in-down sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150" />
            <Image
              src="/logo.png"
              alt="TechSpaw"
              width={120}
              height={40}
              className="relative h-10 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: '/', label: 'Strona Glowna' },
            { href: '/blog', label: 'Blog' },
            { href: '/blog?kategoria=Techniki', label: 'Techniki' },
            { href: '/blog?kategoria=Sprzet', label: 'Sprzet' },
          ].map((item, index) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <Link
          href="/blog"
          className="group inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:scale-105 animate-gradient-x"
        >
          <span className="group-hover:tracking-wider transition-all duration-300">Czytaj Blog</span>
        </Link>
      </div>
    </header>
  )
}

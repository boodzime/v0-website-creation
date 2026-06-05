import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src="/logo.png"
              alt="TechSpaw"
              width={120}
              height={40}
              className="relative h-10 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Strona Glowna
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <Link 
            href="/blog?kategoria=Techniki" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Techniki
          </Link>
          <Link 
            href="/blog?kategoria=Sprzet" 
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Sprzet
          </Link>
        </nav>

        <Link
          href="/blog"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:scale-105"
        >
          Czytaj Blog
        </Link>
      </div>
    </header>
  )
}

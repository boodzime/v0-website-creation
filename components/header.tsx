import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              className="h-6 w-6 text-primary-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v8" />
              <path d="M4.93 10.93l2.83 2.83" />
              <path d="M2 18h4" />
              <path d="M18 18h4" />
              <path d="M19.07 10.93l-2.83 2.83" />
              <path d="M12 14l-4 8" />
              <path d="M12 14l4 8" />
            </svg>
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            SpawBlog
          </span>
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
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Czytaj Blog
        </Link>
      </div>
    </header>
  )
}

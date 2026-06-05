import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
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
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                SpawBlog
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Profesjonalny blog o spawaniu. Techniki, porady, recenzje sprzetu i praktyczna wiedza dla spawaczy na kazdym poziomie zaawansowania.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Kategorie</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog?kategoria=Techniki" className="text-muted-foreground hover:text-primary transition-colors">
                  Techniki spawania
                </Link>
              </li>
              <li>
                <Link href="/blog?kategoria=Sprzet" className="text-muted-foreground hover:text-primary transition-colors">
                  Sprzet
                </Link>
              </li>
              <li>
                <Link href="/blog?kategoria=BHP" className="text-muted-foreground hover:text-primary transition-colors">
                  BHP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>kontakt@spawblog.pl</li>
              <li>+48 123 456 789</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SpawBlog. Wszelkie prawa zastrzezone.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Strona glowna
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

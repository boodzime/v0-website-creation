import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/logo.png"
                  alt="TechSpaw"
                  width={100}
                  height={35}
                  className="relative h-8 w-auto drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Profesjonalny blog o spawaniu. Techniki, porady, recenzje sprzetu i praktyczna wiedza dla spawaczy na kazdym poziomie zaawansowania.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">Kategorie</h4>
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
            <h4 className="font-heading font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">Kontakt</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>kontakt@techspaw.pl</li>
              <li>+48 691 779 481</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TechSpaw. Wszelkie prawa zastrzezone.
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

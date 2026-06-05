import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingPhoneButton } from '@/components/contact-section'
import { CTABanner } from '@/components/cta-section'
import Image from 'next/image'

export const metadata = {
  title: 'Polityka Prywatnosci | TechSpaw',
  description: 'Polityka prywatnosci serwisu TechSpaw - informacje o przetwarzaniu danych osobowych.',
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Fixed logo */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[1] pointer-events-none hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full scale-150 animate-glow-pulse" />
          <Image
            src="/logo.png"
            alt="TechSpaw Logo"
            width={400}
            height={133}
            className="relative h-auto w-[400px] opacity-30 drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]"
          />
        </div>
      </div>

      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 border-b border-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
          
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in-down">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-primary font-medium">Ochrona Danych</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-animate">Polityka Prywatnosci</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Twoja prywatnosc jest dla nas priorytetem. Dowiedz sie, jak przetwarzamy i chronimy Twoje dane.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-8">
              {[
                {
                  title: '1. Administrator Danych',
                  content: `Administratorem danych osobowych jest TECHSPAW Uslugi Spawalnicze z siedziba w Toruniu, ul. Nad Zatoka 4/6, 87-100 Torun. Kontakt: techspaw@o2.pl, tel. +48 691 779 481.`
                },
                {
                  title: '2. Cel Przetwarzania Danych',
                  content: `Dane osobowe przetwarzamy w celach: realizacji usług spawalniczych, odpowiedzi na zapytania kontaktowe, marketingu bezposredniego wlasnych produktow i uslug, oraz wypelnienia obowiazkow prawnych.`
                },
                {
                  title: '3. Podstawa Prawna',
                  content: `Przetwarzanie danych odbywa sie na podstawie: zgody osoby, ktorej dane dotycza (art. 6 ust. 1 lit. a RODO), wykonania umowy (art. 6 ust. 1 lit. b RODO), wypelnienia obowiazku prawnego (art. 6 ust. 1 lit. c RODO), prawnie uzasadnionych interesow administratora (art. 6 ust. 1 lit. f RODO).`
                },
                {
                  title: '4. Odbiorcy Danych',
                  content: `Dane moga byc przekazywane podmiotom swiadczacym uslugi na rzecz administratora: hosting, obsluga IT, ksiegowosc, uslugi prawne. Nie przekazujemy danych do panstw trzecich.`
                },
                {
                  title: '5. Okres Przechowywania',
                  content: `Dane przechowujemy przez okres niezbedny do realizacji celow, dla ktorych zostaly zebrane, a po tym czasie przez okres wymagany przepisami prawa lub do momentu przedawnienia roszczen.`
                },
                {
                  title: '6. Prawa Uzytkownika',
                  content: `Masz prawo do: dostepu do swoich danych, ich sprostowania, usuniecia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania oraz cofniecia zgody w dowolnym momencie.`
                },
                {
                  title: '7. Pliki Cookies',
                  content: `Strona wykorzystuje pliki cookies do zapewnienia prawidlowego dzialania, analizy ruchu oraz personalizacji tresci. Szczegoly znajdziesz w naszej Polityce Cookies.`
                },
                {
                  title: '8. Bezpieczenstwo Danych',
                  content: `Stosujemy odpowiednie srodki techniczne i organizacyjne zapewniajace bezpieczenstwo danych osobowych, w tym ochrone przed nieuprawnionym dostepem, utrata lub zniszczeniem.`
                },
                {
                  title: '9. Kontakt',
                  content: `W sprawach zwiazanych z ochrona danych osobowych mozesz kontaktowac sie z nami pod adresem: techspaw@o2.pl lub telefonicznie: +48 691 779 481.`
                },
              ].map((section, index) => (
                <div 
                  key={section.title}
                  className="group relative p-6 rounded-2xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h2 className="relative font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h2>
                  <p className="relative text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTABanner />
      </main>

      <Footer />
      <FloatingPhoneButton />
    </div>
  )
}

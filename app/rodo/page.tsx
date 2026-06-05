import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingPhoneButton } from '@/components/contact-section'
import Image from 'next/image'

export const metadata = {
  title: 'RODO | TechSpaw',
  description: 'Informacje o przetwarzaniu danych osobowych zgodnie z RODO - TechSpaw.',
}

export default function RodoPage() {
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
              <span className="text-sm text-primary font-medium">RODO</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-animate">Informacja RODO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Informacje o przetwarzaniu danych osobowych zgodnie z Rozporzadzeniem Ogolnym o Ochronie Danych (RODO).
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-8">
              {[
                {
                  title: '1. Administrator Danych Osobowych',
                  content: `Administratorem Pani/Pana danych osobowych jest TECHSPAW Uslugi Spawalnicze z siedziba w Toruniu, ul. Nad Zatoka 4/6, 87-100 Torun. Kontakt z administratorem: techspaw@o2.pl, tel. +48 691 779 481.`
                },
                {
                  title: '2. Cele i Podstawy Przetwarzania',
                  content: `Pani/Pana dane osobowe przetwarzane sa w celu: (a) wykonania umowy lub podjecia dzialan przed jej zawarciem - art. 6 ust. 1 lit. b RODO; (b) wypelnienia obowiazkow prawnych ciazacych na administratorze - art. 6 ust. 1 lit. c RODO; (c) realizacji prawnie uzasadnionych interesow administratora - art. 6 ust. 1 lit. f RODO; (d) na podstawie wyrazonej zgody - art. 6 ust. 1 lit. a RODO.`
                },
                {
                  title: '3. Kategorie Przetwarzanych Danych',
                  content: `Przetwarzamy nastepujace kategorie danych: dane identyfikacyjne (imie, nazwisko, firma), dane kontaktowe (adres, e-mail, telefon), dane niezbedne do realizacji uslugi (specyfikacja zlecenia, dokumentacja techniczna).`
                },
                {
                  title: '4. Odbiorcy Danych',
                  content: `Pani/Pana dane moga byc przekazywane: podmiotom swiadczacym uslugi ksiegowe, prawne, IT; organom panstwowym uprawnionym na podstawie przepisow prawa; podwykonawcom w zakresie niezbednym do realizacji uslugi.`
                },
                {
                  title: '5. Okres Przechowywania Danych',
                  content: `Dane przechowujemy przez okres: trwania umowy i realizacji uslugi; wymagany przepisami prawa podatkowego i rachunkowego (5 lat); przedawnienia roszczen wynikajacych z umowy; do momentu wycofania zgody (jesli przetwarzanie opiera sie na zgodzie).`
                },
                {
                  title: '6. Prawa Osoby, Ktorej Dane Dotycza',
                  content: `Przysluguje Pani/Panu prawo do: dostepu do swoich danych osobowych; sprostowania nieprawidlowych danych; usuniecia danych ("prawo do bycia zapomnianym"); ograniczenia przetwarzania; przenoszenia danych; wniesienia sprzeciwu wobec przetwarzania; cofniecia zgody w dowolnym momencie; wniesienia skargi do Prezesa UODO.`
                },
                {
                  title: '7. Informacja o Wymogu Podania Danych',
                  content: `Podanie danych osobowych jest dobrowolne, jednak niezbedne do zawarcia i realizacji umowy o swiadczenie uslug spawalniczych. Brak podania danych uniemozliwi realizacje uslugi.`
                },
                {
                  title: '8. Zautomatyzowane Podejmowanie Decyzji',
                  content: `Pani/Pana dane osobowe nie beda przedmiotem zautomatyzowanego podejmowania decyzji, w tym profilowania.`
                },
                {
                  title: '9. Przekazywanie Danych do Panstw Trzecich',
                  content: `Pani/Pana dane osobowe nie sa przekazywane do panstw trzecich (poza Europejski Obszar Gospodarczy) ani do organizacji miedzynarodowych.`
                },
                {
                  title: '10. Bezpieczenstwo Danych',
                  content: `Administrator stosuje odpowiednie srodki techniczne i organizacyjne zapewniajace ochrone przetwarzanych danych osobowych, w szczegolnosci zabezpieczenie danych przed ich udostepnieniem osobom nieuprawnionym, zabraniem przez osoby nieuprawnione, przetwarzaniem z naruszeniem przepisow oraz zmiana, utrata, uszkodzeniem lub zniszczeniem.`
                },
                {
                  title: '11. Kontakt w Sprawach RODO',
                  content: `We wszystkich sprawach zwiazanych z przetwarzaniem danych osobowych oraz w celu realizacji przyslugujacych Pani/Panu praw prosimy o kontakt: e-mail: techspaw@o2.pl, telefon: +48 691 779 481, adres: ul. Nad Zatoka 4/6, 87-100 Torun.`
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
      </main>

      <Footer />
      <FloatingPhoneButton />
    </div>
  )
}

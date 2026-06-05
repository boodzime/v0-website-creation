import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingPhoneButton } from '@/components/contact-section'
import Image from 'next/image'

export const metadata = {
  title: 'Polityka Cookies | TechSpaw',
  description: 'Polityka cookies serwisu TechSpaw - informacje o plikach cookies.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-primary font-medium">Pliki Cookies</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-animate">Polityka Cookies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Informacje o tym, jak wykorzystujemy pliki cookies na naszej stronie.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            {/* Cookie Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Niezbedne',
                  description: 'Wymagane do dzialania strony',
                  color: 'primary'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  title: 'Analityczne',
                  description: 'Pomagaja ulepszac strone',
                  color: 'accent'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  ),
                  title: 'Funkcjonalne',
                  description: 'Personalizacja tresci',
                  color: 'primary'
                }
              ].map((card, index) => (
                <div 
                  key={card.title}
                  className="group relative p-6 rounded-2xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${card.color}/10 border border-${card.color}/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`text-${card.color}`}>{card.icon}</div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-8">
              {[
                {
                  title: '1. Czym sa Cookies?',
                  content: `Cookies (ciasteczka) to male pliki tekstowe przechowywane na Twoim urzadzeniu podczas odwiedzania stron internetowych. Pozwalaja stronie "zapamietac" Twoje preferencje i dzialania.`
                },
                {
                  title: '2. Jakie Cookies Wykorzystujemy?',
                  content: `Wykorzystujemy nastepujace rodzaje cookies: niezbedne (sesyjne) - wymagane do dzialania strony, analityczne - pomagaja nam zrozumiec, jak uzytkownicy korzystaja ze strony, funkcjonalne - zapamietuja Twoje preferencje.`
                },
                {
                  title: '3. Cookies Stron Trzecich',
                  content: `Na naszej stronie moga byc wykorzystywane cookies od zewnetrznych dostawcow uslug, takich jak Google Analytics do analizy ruchu. Te cookies podlegaja polityce prywatnosci odpowiednich dostawcow.`
                },
                {
                  title: '4. Czas Przechowywania',
                  content: `Cookies sesyjne sa usuwane po zamknieciu przegladarki. Cookies trwale pozostaja na urzadzeniu przez okreslony czas lub do momentu ich usuniecia przez uzytkownika. Czas przechowywania poszczegolnych cookies jest rozny i zalezy od ich przeznaczenia.`
                },
                {
                  title: '5. Zarzadzanie Cookies',
                  content: `Mozesz kontrolowac i usuwac cookies za pomoca ustawien przegladarki. Pamietaj, ze wylaczenie niektorych cookies moze wplynac na dzialanie strony. Instrukcje zarzadzania cookies znajdziesz w dokumentacji Twojej przegladarki.`
                },
                {
                  title: '6. Zgoda na Cookies',
                  content: `Korzystajac z naszej strony, zgadzasz sie na wykorzystywanie cookies zgodnie z niniejsza polityka. Jezeli nie zgadzasz sie na cookies, prosimy o zmiane ustawien przegladarki lub opuszczenie strony.`
                },
                {
                  title: '7. Zmiany w Polityce',
                  content: `Zastrzegamy sobie prawo do wprowadzania zmian w polityce cookies. O istotnych zmianach poinformujemy na stronie. Zalecamy regularne sprawdzanie tej strony.`
                },
                {
                  title: '8. Kontakt',
                  content: `Pytania dotyczace polityki cookies mozesz kierowac na adres: techspaw@o2.pl lub telefonicznie: +48 691 779 481.`
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

            {/* Cookie Banner Info */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Jak zarzadzac cookies?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Wiekszosc przegladarek pozwala na kontrole cookies przez ustawienia. Mozesz zablokowac cookies, usunac istniejace lub ustawic powiadomienia przed ich zapisaniem. Szczegolowe instrukcje znajdziesz w pomocy Twojej przegladarki.
                  </p>
                </div>
              </div>
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

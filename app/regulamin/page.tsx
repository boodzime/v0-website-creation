import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingPhoneButton } from '@/components/contact-section'
import { CTABanner } from '@/components/cta-section'
import Image from 'next/image'

export const metadata = {
  title: 'Regulamin | TechSpaw',
  description: 'Regulamin korzystania z serwisu TechSpaw - zasady i warunki.',
}

export default function RegulaminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-shimmer" />
          
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6 animate-fade-in-down">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-accent font-medium">Dokument Prawny</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient-animate">Regulamin</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Zasady korzystania z serwisu TechSpaw oraz warunki swiadczenia uslug spawalniczych.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-8">
              {[
                {
                  title: '1. Postanowienia Ogolne',
                  content: `Niniejszy regulamin okresla zasady korzystania z serwisu internetowego TechSpaw oraz warunki swiadczenia uslug spawalniczych przez TECHSPAW Uslugi Spawalnicze z siedziba w Toruniu, ul. Nad Zatoka 4/6, 87-100 Torun.`
                },
                {
                  title: '2. Definicje',
                  content: `Uslugodawca - TECHSPAW Uslugi Spawalnicze. Uzytkownik - osoba korzystajaca z serwisu. Serwis - strona internetowa dostepna pod adresem techspaw.pl. Uslugi - uslugi spawalnicze oferowane przez Uslugodawce.`
                },
                {
                  title: '3. Zakres Uslug',
                  content: `Oferujemy profesjonalne uslugi spawalnicze: spawanie aluminium, stali, zeliwa, naprawy spawalnicze, wykonywanie konstrukcji stalowych, spawanie metodami MIG/MAG, TIG, MMA oraz doradztwo techniczne.`
                },
                {
                  title: '4. Warunki Realizacji',
                  content: `Zlecenia realizowane sa po wczesniejszym uzgodnieniu zakresu prac, terminu oraz ceny. Wycena jest bezplatna. Termin realizacji ustalany jest indywidualnie. Gwarancja na wykonane prace zgodnie z ustaleniami.`
                },
                {
                  title: '5. Ceny i Platnosci',
                  content: `Ceny uslug ustalane sa indywidualnie na podstawie zakresu prac. Platnosc gotowka lub przelewem. Faktura VAT wystawiana na zyczenie. Zaliczka moze byc wymagana przy wiekszych zleceniach.`
                },
                {
                  title: '6. Reklamacje',
                  content: `Reklamacje mozna skladac pisemnie, mailowo lub telefonicznie. Rozpatrujemy reklamacje w terminie 14 dni roboczych. W przypadku uzasadnionej reklamacji wykonujemy naprawe bezplatnie lub zwracamy koszt uslugi.`
                },
                {
                  title: '7. Odpowiedzialnosc',
                  content: `Uslugodawca nie ponosi odpowiedzialnosci za szkody wynikle z nieprawidlowego uzytkowania wykonanych elementow, za materialy dostarczone przez Klienta oraz za opoznienia wynikle z przyczyn niezaleznych.`
                },
                {
                  title: '8. Prawa Autorskie',
                  content: `Wszystkie tresci zamieszczone w serwisie (teksty, grafiki, zdjecia, logo) sa wlasnoscia Uslugodawcy i sa chronione prawem autorskim. Kopiowanie bez zgody jest zabronione.`
                },
                {
                  title: '9. Ochrona Danych',
                  content: `Dane osobowe przetwarzane sa zgodnie z Polityka Prywatnosci oraz obowiazujacymi przepisami o ochronie danych osobowych (RODO).`
                },
                {
                  title: '10. Postanowienia Koncowe',
                  content: `Regulamin wchodzi w zycie z dniem publikacji. Uslugodawca zastrzega sobie prawo do zmian regulaminu. W sprawach nieuregulowanych stosuje sie przepisy prawa polskiego. Spory rozstrzygane sa przez sad wlasciwy dla siedziby Uslugodawcy.`
                },
              ].map((section, index) => (
                <div 
                  key={section.title}
                  className="group relative p-6 rounded-2xl bg-card/50 border border-accent/20 hover:border-accent/40 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h2 className="relative font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
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

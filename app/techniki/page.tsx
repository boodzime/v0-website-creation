import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingPhoneButton } from '@/components/contact-section'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Techniki Spawania | TechSpaw',
  description: 'Kompletny przewodnik po technikach spawania MIG/MAG, TIG, MMA.',
}

const techniques = [
  {
    id: 'mig',
    title: 'Spawanie MIG/MAG',
    subtitle: 'Metal Inert / Active Gas',
    color: 'primary',
    description: 'Najszybsza metoda spawania elektrodą topliwą w osłonie gazu.',
    features: ['Wysoka wydajność','Łatwe spawanie w pozycjach','Minimalne odpryski','Automatyzacja procesu'],
    applications: ['Stal konstrukcyjna','Aluminium','Stal nierdzewna','Konstrukcje stalowe'],
    level: 'Średniozaawansowany',
    levelColor: 'accent',
  },
  {
    id: 'tig',
    title: 'Spawanie TIG',
    subtitle: 'Tungsten Inert Gas',
    color: 'accent',
    description: 'Precyzyjna metoda spawania elektrodą nietopliwą.',
    features: ['Najwyższa jakość spoiny','Precyzyjna kontrola temperatury','Spawanie bez dodatku','Idealne do cienkich blach'],
    applications: ['Stal nierdzewna','Aluminium','Tytan','Miedź i mosiądz'],
    level: 'Zaawansowany',
    levelColor: 'primary',
  },
  {
    id: 'mma',
    title: 'Spawanie MMA',
    subtitle: 'Manual Metal Arc',
    color: 'primary',
    description: 'Klasyczna metoda spawania elektrodą otuloną.',
    features: ['Niezależność od gazu','Praca w każdych warunkach','Naprawa odlewów','Najniższy koszt wyposażenia'],
    applications: ['Stal węglowa','Żeliwo','Naprawy polowe','Konstrukcje ciężkie'],
    level: 'Początkujący',
    levelColor: 'accent',
  },
  {
    id: 'mag',
    title: 'Spawanie MAG',
    subtitle: 'Metal Active Gas',
    color: 'accent',
    description: 'Wariant MIG z aktywnym gazem osłonowym (CO2 lub mieszanki).',
    features: ['Najniższy koszt gazu','Wysoka penetracja','Idealne do grubych blach','Spawanie w pozycji pionowej'],
    applications: ['Stal węglowa','Konstrukcje stalowe','Przemysł ciężki','Spawalnia produkcyjna'],
    level: 'Początkujący',
    levelColor: 'primary',
  },
]

const comparisonData = [
  { feature: 'Szybkość', mig: 'Bardzo wysoka', tig: 'Niska', mma: 'Średnia' },
  { feature: 'Jakość spoiny', mig: 'Dobra', tig: 'Bardzo wysoka', mma: 'Dobra' },
  { feature: 'Wszechstronność', mig: 'Średnia', tig: 'Wysoka', mma: 'Bardzo wysoka' },
  { feature: 'Koszt wyposażenia', mig: 'Średni', tig: 'Wysoki', mma: 'Niski' },
  { feature: 'Koszt eksploatacji', mig: 'Średni', tig: 'Wysoki', mma: 'Niski' },
  { feature: 'Praca na zewnątrz', mig: 'Słaba', tig: 'Średnia', mma: 'Bardzo dobra' },
]

export default function TechnikiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[1] pointer-events-none hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full scale-150 animate-glow-pulse" />
          <Image src="/logo.png" alt="TechSpaw Logo" width={400} height={133} className="relative h-auto w-[400px] opacity-30 drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]" />
        </div>
      </div>

      <Header />

      <main className="flex-1 relative z-10">
        <section className="relative overflow-hidden border-b border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
          <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-bounce-in inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 mb-6 shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-glow-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                </span>
                <span className="text-sm font-medium text-primary animate-text-glow">Kompendium Wiedzy</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="animate-fade-in-up inline-block opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                  <span className="text-gradient-animate drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">Techniki</span>
                </span>
                <br />
                <span className="animate-fade-in-up inline-block opacity-0 text-foreground" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>Spawania</span>
              </h1>

              <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full mb-8 mx-auto animate-[expand_1s_ease-out_0.6s_forwards]" />

              <p className="animate-fade-in-up text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                Poznaj cztery podstawowe metody spawania. Od klasycznego <span className="text-primary font-semibold animate-text-glow">MMA</span> przez precyzyjny <span className="text-accent font-semibold">TIG</span>, aż po wydajny <span className="text-primary font-semibold animate-text-glow">MIG/MAG</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {techniques.map((tech, index) => (
                <div key={tech.id} className="group relative rounded-2xl bg-card/40 border border-primary/20 hover:border-primary/50 transition-all duration-500 hover-lift overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-60" />

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 text-primary group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">{tech.level}</span>
                    </div>

                    <h2 className="font-heading text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{tech.title}</h2>
                    <p className="text-sm text-primary/70 mb-4 font-mono">{tech.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{tech.description}</p>

                    <div className="space-y-2 mb-6">
                      {tech.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-shadow duration-300" />
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tech.applications.map((app) => (
                        <span key={app} className="px-3 py-1 rounded-lg bg-card/80 border border-primary/20 text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-primary/10">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-animate mb-4">Porównanie Technik</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Szybkie zestawienie kluczowych parametrów.</p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-card/30 overflow-hidden animate-fade-in-up delay-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left p-4 text-sm font-semibold text-muted-foreground">Parametr</th>
                      <th className="text-center p-4 text-sm font-semibold text-primary">MIG/MAG</th>
                      <th className="text-center p-4 text-sm font-semibold text-accent">TIG</th>
                      <th className="text-center p-4 text-sm font-semibold text-primary">MMA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={row.feature} className="border-b border-primary/10 hover:bg-primary/5 transition-colors duration-300 group" style={{ animationDelay: `${index * 50}ms` }}>
                        <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-sm text-muted-foreground group-hover:text-primary transition-colors">{row.mig}</td>
                        <td className="p-4 text-center text-sm text-muted-foreground group-hover:text-accent transition-colors">{row.tig}</td>
                        <td className="p-4 text-center text-sm text-muted-foreground group-hover:text-primary transition-colors">{row.mma}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-primary/10">
          <div className="mx-auto max-w-4xl px-4">
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 p-12 text-center overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent animate-pulse" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
              <div className="relative">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-animate mb-4">Chcesz się nauczyć spawać?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Przejrzyj nasze praktyczne poradniki i artykuły na blogu.</p>
                <Link href="/blog?kategoria=Techniki" className="group inline-flex h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 animate-gradient-x">
                  <span className="relative z-10 flex items-center">Przeglądaj artykuły<svg className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingPhoneButton />
    </div>
  )
}

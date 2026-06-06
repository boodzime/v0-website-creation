import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid, type GalleryItem } from '@/components/gallery-grid'
import { getBreadcrumbSchema } from '@/lib/seo-schemas'

export const metadata: Metadata = {
  title: 'Galeria Zdjec - Realizacje Spawalnicze TechSpaw',
  description: 'Galeria zdjec naszych realizacji spawalniczych - konstrukcje stalowe, spawanie MIG, TIG, MMA oraz prace warsztatowe wykonane przez TechSpaw.',
  alternates: {
    canonical: '/galeria',
  },
  openGraph: {
    title: 'Galeria Zdjec - TechSpaw',
    description: 'Zobacz nasze realizacje spawalnicze w galerii zdjec TechSpaw.',
    url: 'https://techspaw.pl/galeria',
    type: 'website',
  },
}

// Placeholders - podmien `src` na sciezki do zdjec gdy bedziesz gotowy,
// np. src: '/galeria/realizacja-1.jpg'
const galleryItems: GalleryItem[] = [
  { id: 1, src: null, alt: 'Realizacja spawalnicza 1', title: 'Konstrukcja stalowa' },
  { id: 2, src: null, alt: 'Realizacja spawalnicza 2', title: 'Spawanie MIG/MAG' },
  { id: 3, src: null, alt: 'Realizacja spawalnicza 3', title: 'Spawanie TIG' },
  { id: 4, src: null, alt: 'Realizacja spawalnicza 4', title: 'Balustrady i bramy' },
  { id: 5, src: null, alt: 'Realizacja spawalnicza 5', title: 'Prace warsztatowe' },
  { id: 6, src: null, alt: 'Realizacja spawalnicza 6', title: 'Spawanie MMA' },
  { id: 7, src: null, alt: 'Realizacja spawalnicza 7', title: 'Konstrukcje aluminiowe' },
  { id: 8, src: null, alt: 'Realizacja spawalnicza 8', title: 'Naprawy i regeneracja' },
  { id: 9, src: null, alt: 'Realizacja spawalnicza 9', title: 'Detale spawalnicze' },
]

export default function GaleriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: 'Strona glowna', url: 'https://techspaw.pl' },
              { name: 'Galeria' },
            ])
          ),
        }}
      />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <span className="animate-fade-in-down inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Nasze prace
            </span>
            <h1 className="animate-fade-in-up font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galeria{' '}
              <span className="text-gradient-animate">Zdjec</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-muted-foreground max-w-2xl opacity-0" style={{ animationFillMode: 'forwards' }}>
              Przeglądaj zdjecia naszych realizacji spawalniczych - konstrukcje stalowe,
              prace warsztatowe i efekty róznych technik spawania.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16 relative">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />

          <div className="relative mx-auto max-w-6xl px-4">
            <GalleryGrid items={galleryItems} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

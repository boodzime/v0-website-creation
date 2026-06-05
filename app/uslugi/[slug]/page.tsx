import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { services, getServiceBySlug } from '@/lib/services-data'
import { ServiceContactForm } from '@/components/service-contact-form'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: 'Usługa nie znaleziona | TECHSPAW',
    }
  }
  
  return {
    title: `${service.title} | TECHSPAW`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    notFound()
  }
  
  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3)
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>
      
      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Strona główna
              </Link>
              <span>/</span>
              <Link href="/uslugi" className="hover:text-primary transition-colors">
                Usługi
              </Link>
              <span>/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                  Usługi spawalnicze
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  <span className="text-gradient-animate">{service.title}</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+48123456789"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-base font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Zadzwoń teraz
                  </a>
                  <a
                    href="#formularz"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-primary/50 px-8 text-base font-medium text-foreground transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:bg-primary/10"
                  >
                    Zapytaj o wycenę
                  </a>
                </div>
              </div>
              
              {/* Placeholder for service image */}
              <div className="relative aspect-video rounded-2xl border border-primary/20 bg-card/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    O usłudze
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    {service.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Zalety
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl border border-primary/20 bg-card/30"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Applications */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Zastosowania
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.applications.map((application, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-card/30"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Form */}
                <div id="formularz">
                  <ServiceContactForm serviceName={service.title} />
                </div>
                
                {/* Other services */}
                <div className="p-6 rounded-2xl border border-primary/20 bg-card/50">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    Inne usługi
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((otherService) => (
                      <Link
                        key={otherService.id}
                        href={`/uslugi/${otherService.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">
                          {otherService.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/uslugi"
                    className="mt-4 flex items-center justify-center gap-2 p-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    Zobacz wszystkie usługi
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

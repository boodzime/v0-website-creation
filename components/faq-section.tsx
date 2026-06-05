"use client"

import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isInView }
}

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Ile kosztuje spawanie konstrukcji stalowej?",
    answer: "Cena zależy od wielu czynników: rodzaju materiału, grubości, złożoności konstrukcji i metody spawania. Orientacyjnie spawanie prostych konstrukcji zaczyna się od 50-80 zł/mb spoiny. Dla dokładnej wyceny prosimy o kontakt z opisem projektu."
  },
  {
    question: "Jak długo trwa realizacja zlecenia?",
    answer: "Czas realizacji zależy od skali projektu. Drobne naprawy wykonujemy w ciągu 1-2 dni roboczych. Średnie konstrukcje to 3-7 dni. Duże projekty wymagają indywidualnego ustalenia terminu. Zawsze staramy się dotrzymywać uzgodnionych terminów."
  },
  {
    question: "Czy wykonujecie dojazdy do klienta?",
    answer: "Tak, oferujemy usługi spawalnicze z dojazdem na terenie całego województwa. Dojazd do 30 km od naszej siedziby jest bezpłatny. Przy większych odległościach doliczamy koszty dojazdu według stawki 2 zł/km."
  },
  {
    question: "Jaka metoda spawania jest najlepsza?",
    answer: "Nie ma jednej najlepszej metody - każda ma swoje zastosowanie. MIG/MAG jest uniwersalna i wydajna. TIG daje najwyższą jakość spoin, idealna do stali nierdzewnej i aluminium. MMA sprawdza się w terenie i przy naprawach. Dobieramy metodę do konkretnego projektu."
  },
  {
    question: "Na jakim obszarze działacie?",
    answer: "Nasze usługi świadczymy głównie na terenie województwa mazowieckiego i okolicznych regionów. Przy większych projektach jesteśmy w stanie dojechać w dowolne miejsce w Polsce. Skontaktuj się z nami, aby omówić szczegóły."
  },
  {
    question: "Czy oferujecie gwarancję na usługi?",
    answer: "Tak, na wszystkie wykonane prace spawalnicze udzielamy gwarancji. Standardowy okres gwarancji to 12 miesięcy. W przypadku konstrukcji nośnych i odpowiedzialnych elementów gwarancja może być wydłużona do 24 miesięcy."
  },
  {
    question: "Jakie materiały spawacie?",
    answer: "Spawamy większość metali: stal węglową, stal nierdzewną, aluminium i jego stopy, miedź oraz stopy specjalne. Posiadamy odpowiedni sprzęt i doświadczenie do pracy z różnymi grubościami materiałów."
  },
  {
    question: "Czy wystawiacie faktury VAT?",
    answer: "Tak, jesteśmy płatnikiem VAT i wystawiamy faktury VAT na wszystkie usługi. Faktura jest wystawiana po zakończeniu prac lub zgodnie z ustaleniami przy większych projektach (zaliczka + faktura końcowa)."
  }
]

function AccordionItem({ 
  item, 
  isOpen, 
  onToggle, 
  index, 
  isInView 
}: { 
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
  isInView: boolean
}) {
  return (
    <div 
      className={`border border-primary/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 ${
        isOpen ? 'bg-card/80 shadow-[0_0_20px_rgba(0,255,255,0.1)]' : 'bg-card/30'
      } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ 
        animationDelay: isInView ? `${index * 100 + 300}ms` : undefined, 
        animationFillMode: 'forwards' 
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground pr-4">{item.question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-primary/20 rotate-180' : 'bg-transparent'
        }`}>
          <svg 
            className="w-4 h-4 text-primary transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-primary/10 pt-4">
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { ref, isInView } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-16 md:py-24 bg-card/30 border-y border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-shimmer" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
      
      <div className="relative mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-2 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
          >
            Najczęściej zadawane pytania
          </span>
          <h2 
            className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 ${
              isInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
          >
            Masz{' '}
            <span className="text-gradient-animate">pytania?</span>
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
          >
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług spawalniczych
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        {/* Contact CTA */}
        <div 
          className={`text-center mt-10 p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm ${
            isInView ? 'animate-bounce-in' : 'opacity-0'
          }`}
          style={{ animationDelay: isInView ? '1200ms' : undefined, animationFillMode: 'forwards' }}
        >
          <p className="text-muted-foreground mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a
            href="tel:+48123456789"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Zadzwoń do nas
          </a>
        </div>
      </div>
    </section>
  )
}

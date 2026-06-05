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

interface PriceRange {
  min: number
  max: number
}

const serviceTypes = [
  { id: 'mig-mag', label: 'Spawanie MIG/MAG', basePrice: 60 },
  { id: 'tig', label: 'Spawanie TIG', basePrice: 90 },
  { id: 'mma', label: 'Spawanie MMA', basePrice: 50 },
  { id: 'konstrukcje', label: 'Konstrukcje stalowe', basePrice: 80 },
  { id: 'naprawy', label: 'Naprawy spawalnicze', basePrice: 70 },
]

const materials = [
  { id: 'stal-weglowa', label: 'Stal węglowa', multiplier: 1.0 },
  { id: 'stal-nierdzewna', label: 'Stal nierdzewna', multiplier: 1.5 },
  { id: 'aluminium', label: 'Aluminium', multiplier: 1.8 },
  { id: 'miedz', label: 'Miedź', multiplier: 2.0 },
]

const quantities = [
  { id: 'maly', label: 'Mały (do 5 mb / do 2h)', multiplier: 1.0, hours: 2 },
  { id: 'sredni', label: 'Średni (5-20 mb / 2-8h)', multiplier: 0.9, hours: 5 },
  { id: 'duzy', label: 'Duży (20-50 mb / 8-20h)', multiplier: 0.8, hours: 14 },
  { id: 'bardzo-duzy', label: 'Bardzo duży (powyżej 50 mb / 20h+)', multiplier: 0.7, hours: 30 },
]

export function QuoteCalculator() {
  const { ref, isInView } = useInView()
  
  const [serviceType, setServiceType] = useState('')
  const [material, setMaterial] = useState('')
  const [quantity, setQuantity] = useState('')
  const [withInstallation, setWithInstallation] = useState(false)
  const [distance, setDistance] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [priceRange, setPriceRange] = useState<PriceRange | null>(null)
  
  // Contact form
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [showContactForm, setShowContactForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const calculatePrice = () => {
    const service = serviceTypes.find(s => s.id === serviceType)
    const mat = materials.find(m => m.id === material)
    const qty = quantities.find(q => q.id === quantity)
    
    if (!service || !mat || !qty) return

    const baseHourlyRate = service.basePrice
    const materialMultiplier = mat.multiplier
    const volumeDiscount = qty.multiplier
    const hours = qty.hours
    
    let baseCost = baseHourlyRate * materialMultiplier * volumeDiscount * hours
    
    // Installation adds 30%
    if (withInstallation) {
      baseCost *= 1.3
    }
    
    // Travel cost
    const distanceNum = parseInt(distance) || 0
    const travelCost = distanceNum > 30 ? (distanceNum - 30) * 2 : 0
    
    const minPrice = Math.round(baseCost * 0.85 + travelCost)
    const maxPrice = Math.round(baseCost * 1.15 + travelCost)
    
    setPriceRange({ min: minPrice, max: maxPrice })
    setShowResult(true)
  }

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    setSubmitted(true)
  }

  const resetForm = () => {
    setServiceType('')
    setMaterial('')
    setQuantity('')
    setWithInstallation(false)
    setDistance('')
    setShowResult(false)
    setPriceRange(null)
    setShowContactForm(false)
    setSubmitted(false)
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className={`inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '100ms' : undefined, animationFillMode: 'forwards' }}
          >
            Szybka wycena
          </span>
          <h2 
            className={`font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 ${
              isInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
            style={{ animationDelay: isInView ? '200ms' : undefined, animationFillMode: 'forwards' }}
          >
            Kalkulator{' '}
            <span className="text-gradient-animate">wyceny</span>
          </h2>
          <p 
            className={`text-muted-foreground max-w-2xl mx-auto ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: isInView ? '300ms' : undefined, animationFillMode: 'forwards' }}
          >
            Otrzymaj szacunkową wycenę w kilka sekund. Dla dokładnej ceny skontaktuj się z nami.
          </p>
        </div>
        
        {/* Calculator Card */}
        <div 
          className={`relative p-6 md:p-8 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm ${
            isInView ? 'animate-scale-in' : 'opacity-0'
          }`}
          style={{ animationDelay: isInView ? '400ms' : undefined, animationFillMode: 'forwards' }}
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/50 rounded-br-2xl" />
          
          {!showResult ? (
            <div className="space-y-6">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Rodzaj usługi
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setServiceType(service.id)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                        serviceType === service.id
                          ? 'border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                          : 'border-primary/20 bg-card/30 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Material */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Materiał
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setMaterial(mat.id)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                        material === mat.id
                          ? 'border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                          : 'border-primary/20 bg-card/30 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Szacunkowa ilość pracy
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quantities.map((qty) => (
                    <button
                      key={qty.id}
                      type="button"
                      onClick={() => setQuantity(qty.id)}
                      className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                        quantity === qty.id
                          ? 'border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                          : 'border-primary/20 bg-card/30 text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      {qty.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Additional options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Installation */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`relative w-6 h-6 rounded border-2 transition-all duration-300 ${
                      withInstallation 
                        ? 'border-primary bg-primary/20' 
                        : 'border-primary/30 group-hover:border-primary/60'
                    }`}>
                      {withInstallation && (
                        <svg className="absolute inset-0 w-full h-full text-primary p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      checked={withInstallation}
                      onChange={(e) => setWithInstallation(e.target.checked)}
                      className="sr-only"
                    />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Z montażem (+30%)
                    </span>
                  </label>
                </div>
                
                {/* Distance */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Odległość od siedziby (km)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    placeholder="np. 50"
                    className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-card/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Dojazd do 30 km bezpłatny</p>
                </div>
              </div>
              
              {/* Calculate Button */}
              <button
                type="button"
                onClick={calculatePrice}
                disabled={!serviceType || !material || !quantity}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                Oblicz szacunkową cenę
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Price Result */}
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground mb-2">Szacunkowa cena:</p>
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-animate mb-4">
                  {priceRange?.min} - {priceRange?.max} zł
                </div>
                <p className="text-sm text-muted-foreground">
                  * Cena orientacyjna. Dokładna wycena po oględzinach lub szczegółowym opisie projektu.
                </p>
              </div>
              
              {!showContactForm && !submitted && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(true)}
                    className="flex-1 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-[1.02]"
                  >
                    Zostaw kontakt po dokładną wycenę
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 py-4 rounded-lg border border-primary/30 text-foreground font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/10"
                  >
                    Oblicz ponownie
                  </button>
                </div>
              )}
              
              {showContactForm && !submitted && (
                <form onSubmit={handleSubmitContact} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/30 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/30 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email (opcjonalnie)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-card/30 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-[1.02]"
                  >
                    Wyślij zapytanie
                  </button>
                </form>
              )}
              
              {submitted && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Dziękujemy!</h3>
                  <p className="text-muted-foreground mb-6">
                    Otrzymaliśmy Twoje zapytanie. Skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-lg border border-primary/30 text-foreground font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10"
                  >
                    Nowa wycena
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

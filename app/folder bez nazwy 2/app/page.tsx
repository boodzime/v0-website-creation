'use client'

import React from 'react'
import { Menu, X, Flame, Wrench, Phone, Star, MapPin, Mail, Clock, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from '@/components/hero-carousel'

export default function Page() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Fixed Pinned Logo - Right Center */}
      <div className="hidden lg:block fixed top-1/2 right-4 -translate-y-1/2 z-40 pointer-events-none select-none opacity-80">
        <Image
          src="/futuretech-logo.png"
          alt="FutureTech"
          width={160}
          height={107}
          className="w-28 h-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        />
      </div>

      {/* Fixed Phone Button - Bottom Right */}
      <a 
        href="tel:+48691779481" 
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black rounded-full hover:from-cyan-300 hover:to-cyan-500 transition-all pulse-glow shadow-lg flex items-center justify-center"
        title="Zadzwoń"
      >
        <Phone className="w-7 h-7" />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-2xl border-b border-cyan-500/40">
        <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Image 
              src="/futuretech-logo.png" 
              alt="FutureTech" 
              width={180}
              height={120}
              className="h-12 w-auto transition-transform hover:scale-105"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 items-center">
            <a href="#home" className="nav-link">
              Strona główna
            </a>
            <a href="#reviews" className="nav-link">
              Recenzje
            </a>
            <a href="#services" className="nav-link">
              Usługi
            </a>
            <a href="#gallery" className="nav-link">
              Galeria
            </a>
            <a href="#contact" className="nav-link">
              Kontakt
            </a>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <a
              href="tel:+48691779481"
              className="ml-6 px-7 py-2.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-black font-bold rounded-lg hover:from-cyan-300 hover:via-blue-300 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/70 transform hover:scale-105"
            >
              Zadzwoń
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/40 text-cyan-400 hover:from-cyan-500/40 hover:to-purple-500/40 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-cyan-500/40 bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-2xl">
            <div className="px-6 py-6 flex flex-col gap-2">
              <a href="#home" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Strona główna
              </a>
              <a href="#reviews" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Recenzje
              </a>
              <a href="#services" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Usługi
              </a>
              <a href="#gallery" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Galeria
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Kontakt
              </a>
              <Link href="/blog" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <a
                href="tel:+48691779481"
                className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-black font-bold rounded-lg w-full text-center"
              >
                Zadzwoń
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center slide-in">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 glass">
              <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span className="text-sm text-gray-200">
                <span className="font-bold text-cyan-400">4.9</span> / 31 opinii w Google
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-white glow-cyan text-balance">
                TECHSPAW — Usługi Spawalnicze Toruń
              </h1>
              <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Profesjonalne usługi spawalnicze prowadzone przez Łukasza Kaźmierczaka. Spawanie aluminium, stali oraz żeliwa — drobne naprawy i wymagające zlecenia dla klientów indywidualnych oraz firm.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:+48691779481" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all pulse-glow shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Zadzwoń! +48 691 779 481
              </a>
              <a href="#gallery" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all text-center">
                Zobacz Galerię
              </a>
            </div>
          </div>

          {/* Carousel */}
          <HeroCarousel />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white glow-cyan mb-4 text-center">
            Opinie Klientów
          </h2>
          <div className="flex items-center justify-center gap-2 mb-16">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
              ))}
            </div>
            <span className="text-gray-300">
              <span className="font-bold text-cyan-400">4.9</span> na podstawie 31 opinii w Google
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'Spawanie aluminium profesjonalne!! Bardzo rzetelny uczciwy człowiek, polecam, cena uczciwa za tą ciężką wykonaną pracę.',
                author: 'Daniel B',
              },
              {
                text: 'Jestem bardzo zadowolony z usługi spawania. Dodatkowo z pomocy przy realizacji projektu stelaża według własnego projektu. Spawy i wszystkie prace przeprowadzone profesjonalnie oraz estetycznie. Polecam.',
                author: 'Szymon M',
              },
              {
                text: 'Usługi na najwyższym poziomie, nie mogłam trafić lepiej! Bardzo miła współpraca i porządna firma. Polecam!',
                author: 'Anna T',
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex flex-col"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed flex-1">{review.text}</p>
                <p className="text-cyan-400 font-semibold mt-6">~ {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white glow-cyan mb-16 text-center">
            Nasze Usługi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                title: 'Spawanie Aluminium',
                description: 'Precyzyjne spawanie aluminium i stopów do zastosowań wymagających lekkości i wytrzymałości',
              },
              {
                icon: Wrench,
                title: 'Spawanie Stali',
                description: 'Profesjonalne spawanie stali do konstrukcji przemysłowych i budowlanych',
              },
              {
                icon: Flame,
                title: 'Spawanie Żeliwa',
                description: 'Specjalistyczne spawanie żeliwa z zachowaniem właściwości materiału',
              },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="glass p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all hover:shadow-2xl hover:glow-box group"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:glow-cyan" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white glow-cyan mb-4 text-center">
            Galeria Realizacji
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Zobacz nasze realizacje spawalnicze. Każda praca to dowód solidności, dokładności i trwałości wykonania.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 11 }, (_, i) => i + 1).map((id) => (
              <div
                key={id}
                className="glass rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-500/70 transition-all group cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cyan-900/50 to-blue-900/50">
                  <Image 
                    src={`/gallery-${id}.jpg`}
                    alt={`Realizacja spawalnicza TECHSPAW ${id}`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white glow-cyan mb-12 text-center">
            Kim Jesteśmy
          </h2>

          <div className="glass p-8 md:p-12 rounded-xl border border-cyan-500/30">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              TECHSPAW to firma prowadzona przez Łukasza Kaźmierczaka, oferująca profesjonalne usługi spawalnicze w Toruniu i okolicach. Specjalizujemy się w spawaniu aluminium, stali oraz żeliwa, realizując zarówno drobne naprawy, jak i bardziej wymagające zlecenia dla klientów indywidualnych oraz firm.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Stawiamy na dokładność, solidność i trwałość wykonania, dobierając odpowiednią metodę pracy do rodzaju materiału i potrzeb klienta. Zapraszamy do współpracy warsztaty, firmy oraz osoby prywatne szukające sprawdzonego spawacza w Toruniu.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white glow-cyan mb-4 text-center">
            Blog Spawalniczy
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Praktyczna wiedza o spawaniu. Poradniki, techniki i wskazówki od profesjonalistów.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                slug: 'spawanie-aluminium-poradnik',
                title: 'Spawanie Aluminium - Kompletny Poradnik',
                excerpt: 'Poznaj techniki spawania aluminium metodą TIG i MIG. Dowiedz się, jak unikać najczęstszych błędów.',
                image: '/gallery-1.jpg',
                category: 'Poradniki',
              },
              {
                slug: 'roznice-miedzy-spawaniem-tig-mig-mma',
                title: 'TIG, MIG czy MMA? Który rodzaj spawania wybrać',
                excerpt: 'Porównanie trzech najpopularniejszych metod spawania. Zalety, wady i zastosowania.',
                image: '/gallery-2.jpg',
                category: 'Edukacja',
              },
              {
                slug: 'spawanie-zeliwa-techniki',
                title: 'Spawanie Żeliwa - Techniki i Rozwiązania',
                excerpt: 'Żeliwo to wymagający materiał. Poznaj sprawdzone metody spawania bez ryzyka pęknięć.',
                image: '/gallery-3.jpg',
                category: 'Specjalistyczne',
              },
            ].map((article) => (
              <Link 
                key={article.slug} 
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="glass rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-500/60 transition-all h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/90 text-black text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm flex-1 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                      Czytaj więcej
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Zobacz wszystkie artykuły
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white glow-cyan mb-4 text-center">
            Kontakt
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić swój projekt spawalniczy
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="glass p-8 rounded-xl border border-cyan-500/30 space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Dane Kontaktowe</h3>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Telefon</p>
                  <a href="tel:+48691779481" className="text-gray-300 hover:text-white transition-colors">+48 691 779 481</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Email</p>
                  <a href="mailto:techspaw9@gmail.com" className="text-gray-300 hover:text-white transition-colors">techspaw9@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="text-cyan-400 font-semibold mb-1">Adres</p>
                  <p className="text-gray-300">Nad Zatoką 4/6<br />87-100 Toruń</p>
                </div>
              </div>
              
              {/* Opening Hours */}
              <div className="pt-4 border-t border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <p className="text-cyan-400 font-semibold">Godziny otwarcia</p>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    ['Pon - Sob', '08:00 - 17:00'],
                    ['Niedziela', 'Zamknięte'],
                  ].map(([day, hours]) => (
                    <li key={day} className="flex justify-between items-center">
                      <span className="text-gray-400">{day}</span>
                      <span className={hours === 'Zamknięte' ? 'text-gray-500' : 'text-white font-medium'}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-6">Wyślij Wiadomość</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="jan@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="+48 123 456 789"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    placeholder="Opisz swój projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 transform hover:scale-[1.02]"
                >
                  Wyślij Wiadomość
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="glass p-4 rounded-xl border border-cyan-500/30 overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-4 px-4 pt-4">Nasza Lokalizacja</h3>
              <div className="rounded-lg overflow-hidden h-[400px] lg:h-[calc(100%-60px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5!2d18.5757!3d53.0111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ca3347c8e6d11%3A0x7b9c6c7b8e8f9a0b!2sNad%20Zatok%C4%85%2C%2087-100%20Toru%C5%84!5e0!3m2!1spl!2spl!4v1699000000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja TECHSPAW"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/30 bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Logo & Description */}
            <div className="md:col-span-2 space-y-4">
              <Image
                src="/futuretech-logo.png"
                alt="TECHSPAW"
                width={180}
                height={120}
                className="h-14 w-auto"
              />
              <p className="text-gray-400 max-w-md leading-relaxed">
                Profesjonalne usługi spawalnicze w Toruniu. Spawanie aluminium, stali i żeliwa dla klientów indywidualnych oraz firm.
              </p>
              {/* Social Media */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100063656787498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all group"
                  title="Facebook"
                >
                  <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Szybkie Linki</h4>
              <ul className="space-y-3">
                {[
                  ['Strona główna', '#home'],
                  ['Usługi', '#services'],
                  ['Galeria', '#gallery'],
                  ['Blog', '/blog'],
                  ['Kontakt', '#contact'],
                ].map(([label, href]) => (
                  <li key={href}>
                    {href.startsWith('/') ? (
                      <Link href={href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {label}
                      </Link>
                    ) : (
                      <a href={href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4">Kontakt</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+48691779481" className="hover:text-cyan-400 transition-colors">+48 691 779 481</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:techspaw9@gmail.com" className="hover:text-cyan-400 transition-colors">techspaw9@gmail.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Nad Zatoką 4/6<br />87-100 Toruń</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cyan-500/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} TECHSPAW — Łukasz Kaźmierczak. Wszystkie prawa zastrzeżone.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#polityka-prywatnosci" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Polityka Prywatności
                </a>
                <span className="text-gray-700">|</span>
                <a href="#regulamin" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Regulamin
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

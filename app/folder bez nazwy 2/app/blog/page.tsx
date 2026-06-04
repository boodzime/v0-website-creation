import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Blog - TECHSPAW | Porady Spawalnicze',
  description: 'Artykuły i porady o spawaniu aluminium, stali i żeliwa. Praktyczna wiedza od profesjonalistów.',
}

const articles = [
  {
    slug: 'spawanie-aluminium-poradnik',
    title: 'Spawanie Aluminium - Kompletny Poradnik dla Początkujących i Zaawansowanych',
    excerpt: 'Poznaj techniki spawania aluminium metodą TIG i MIG. Dowiedz się, jak unikać najczęstszych błędów i osiągnąć profesjonalne rezultaty.',
    image: '/gallery-1.jpg',
    category: 'Poradniki',
    author: 'Łukasz Kaźmierczak',
    date: '2024-01-15',
    readTime: '12 min',
  },
  {
    slug: 'roznice-miedzy-spawaniem-tig-mig-mma',
    title: 'TIG, MIG czy MMA? Który rodzaj spawania wybrać do swojego projektu',
    excerpt: 'Porównanie trzech najpopularniejszych metod spawania. Zalety, wady i zastosowania każdej z nich w praktyce warsztatowej.',
    image: '/gallery-2.jpg',
    category: 'Edukacja',
    author: 'Łukasz Kaźmierczak',
    date: '2024-01-10',
    readTime: '10 min',
  },
  {
    slug: 'spawanie-zeliwa-techniki',
    title: 'Spawanie Żeliwa - Techniki, Wyzwania i Rozwiązania',
    excerpt: 'Żeliwo to wymagający materiał. Poznaj sprawdzone metody spawania żeliwa szarego i sferoidalnego bez ryzyka pęknięć.',
    image: '/gallery-3.jpg',
    category: 'Specjalistyczne',
    author: 'Łukasz Kaźmierczak',
    date: '2024-01-05',
    readTime: '15 min',
  },
  {
    slug: 'przygotowanie-materialu-do-spawania',
    title: 'Jak Prawidłowo Przygotować Materiał do Spawania',
    excerpt: 'Dobra spoina zaczyna się od przygotowania. Czyszczenie, fazowanie, dopasowanie - wszystko co musisz wiedzieć przed spawaniem.',
    image: '/gallery-4.jpg',
    category: 'Podstawy',
    author: 'Łukasz Kaźmierczak',
    date: '2023-12-28',
    readTime: '8 min',
  },
  {
    slug: 'najczestsze-bledy-spawaczy',
    title: '10 Najczęstszych Błędów Spawaczy i Jak Ich Unikać',
    excerpt: 'Lista typowych pomyłek popełnianych nawet przez doświadczonych spawaczy. Praktyczne wskazówki jak poprawić jakość spoin.',
    image: '/gallery-5.jpg',
    category: 'Porady',
    author: 'Łukasz Kaźmierczak',
    date: '2023-12-20',
    readTime: '11 min',
  },
  {
    slug: 'spawanie-konstrukcji-stalowych',
    title: 'Spawanie Konstrukcji Stalowych - Od Projektu do Realizacji',
    excerpt: 'Kompleksowy przewodnik po spawaniu konstrukcji stalowych. Normy, certyfikaty, techniki i kontrola jakości.',
    image: '/gallery-6.jpg',
    category: 'Profesjonalne',
    author: 'Łukasz Kaźmierczak',
    date: '2023-12-15',
    readTime: '14 min',
  },
]

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-2xl border-b border-cyan-500/40">
        <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/futuretech-logo.png" 
              alt="TECHSPAW" 
              width={180}
              height={120}
              className="h-12 w-auto transition-transform hover:scale-105"
              priority
            />
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do strony głównej
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white glow-cyan mb-6">
            Blog Spawalniczy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Praktyczna wiedza o spawaniu od profesjonalistów. Poradniki, techniki i wskazówki 
            dla początkujących i zaawansowanych spawaczy.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
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
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-cyan-500/20">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass p-12 rounded-2xl border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Potrzebujesz profesjonalnego spawania?
          </h2>
          <p className="text-gray-300 mb-8">
            Skontaktuj się z nami, aby omówić swój projekt. Oferujemy spawanie aluminium, stali i żeliwa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+48691779481" 
              className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all"
            >
              Zadzwoń: +48 691 779 481
            </a>
            <Link 
              href="/#contact" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/30 bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-xl py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} TECHSPAW — Łukasz Kaźmierczak. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </main>
  )
}

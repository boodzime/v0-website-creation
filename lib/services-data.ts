export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  features: string[]
  applications: string[]
  image: string
  icon: string
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'spawanie-mig-mag',
    title: 'Spawanie MIG/MAG',
    shortDescription: 'Uniwersalna metoda spawania dla większości materiałów i zastosowań.',
    description: `Spawanie MIG/MAG to jedna z najpopularniejszych metod spawania, charakteryzująca się wysoką wydajnością i jakością spoin. Metoda ta wykorzystuje drut elektrodowy podawany w sposób ciągły oraz gaz osłonowy (obojętny lub aktywny).

Oferujemy profesjonalne usługi spawania MIG/MAG zarówno w naszym warsztacie, jak i z dojazdem do klienta. Dysponujemy nowoczesnym sprzętem spawalniczym, który pozwala na precyzyjne wykonanie nawet najbardziej wymagających zleceń.`,
    features: [
      'Wysoka wydajność pracy',
      'Możliwość spawania w różnych pozycjach',
      'Minimalna ilość odprysków',
      'Estetyczne spoiny bez żużla',
      'Spawanie stali węglowej i nierdzewnej',
      'Możliwość automatyzacji procesu'
    ],
    applications: [
      'Konstrukcje stalowe',
      'Elementy maszyn i urządzeń',
      'Zbiorniki i pojemniki',
      'Bramy i ogrodzenia',
      'Przyczepy i zabudowy',
      'Naprawy i regeneracja'
    ],
    image: '/services/mig-mag.jpg',
    icon: 'mig'
  },
  {
    id: '2',
    slug: 'spawanie-tig',
    title: 'Spawanie TIG',
    shortDescription: 'Precyzyjne spawanie dla wymagających projektów i materiałów specjalnych.',
    description: `Spawanie TIG (GTAW) to metoda zapewniająca najwyższą jakość spoin. Wykorzystuje nietopliwą elektrodę wolframową i gaz obojętny (argon lub hel). Jest idealna do spawania stali nierdzewnej, aluminium i innych metali nieżelaznych.

Specjalizujemy się w spawaniu TIG elementów wymagających najwyższej estetyki i precyzji. Nasze doświadczenie pozwala na wykonanie spoin o jakości wymaganej w przemyśle spożywczym, chemicznym i farmaceutycznym.`,
    features: [
      'Najwyższa jakość spoin',
      'Pełna kontrola nad procesem',
      'Brak rozprysków i żużla',
      'Spawanie cienkich blach (od 0.5mm)',
      'Idealne do stali nierdzewnej i aluminium',
      'Spoiny o wysokiej estetyce'
    ],
    applications: [
      'Instalacje przemysłowe',
      'Elementy ze stali nierdzewnej',
      'Konstrukcje aluminiowe',
      'Zbiorniki ciśnieniowe',
      'Rury i rurociągi',
      'Elementy dekoracyjne'
    ],
    image: '/services/tig.jpg',
    icon: 'tig'
  },
  {
    id: '3',
    slug: 'spawanie-mma',
    title: 'Spawanie MMA',
    shortDescription: 'Tradycyjna i niezawodna metoda spawania elektrodą otuloną.',
    description: `Spawanie MMA (elektroda otulona) to sprawdzona i uniwersalna metoda spawania, szczególnie ceniona w pracach terenowych i montażowych. Nie wymaga butli z gazem, co czyni ją idealną do pracy w trudnych warunkach.

Oferujemy usługi spawania MMA zarówno w warsztacie, jak i na terenie klienta. Ta metoda sprawdza się doskonale przy naprawach maszyn rolniczych, konstrukcji stalowych i pracach remontowych.`,
    features: [
      'Praca bez gazu osłonowego',
      'Idealna do pracy w terenie',
      'Odporność na wiatr i wilgoć',
      'Niski koszt sprzętu',
      'Uniwersalność zastosowania',
      'Głęboka penetracja'
    ],
    applications: [
      'Prace terenowe i montażowe',
      'Naprawy maszyn rolniczych',
      'Konstrukcje budowlane',
      'Prace remontowe',
      'Spawanie rurociągów',
      'Naprawy awaryjne'
    ],
    image: '/services/mma.jpg',
    icon: 'mma'
  },
  {
    id: '4',
    slug: 'konstrukcje-stalowe',
    title: 'Konstrukcje Stalowe',
    shortDescription: 'Projektowanie i wykonanie konstrukcji stalowych na zamówienie.',
    description: `Wykonujemy konstrukcje stalowe na indywidualne zamówienie - od małych elementów po duże hale i wiaty. Każdy projekt realizujemy od podstaw: od konsultacji i projektu, przez produkcję, aż po montaż na miejscu.

Dysponujemy własnym parkiem maszynowym, który pozwala na kompleksową realizację zleceń. Oferujemy również zabezpieczenie antykorozyjne - malowanie proszkowe lub tradycyjne.`,
    features: [
      'Projekt i wykonanie',
      'Indywidualne podejście',
      'Montaż na miejscu',
      'Zabezpieczenie antykorozyjne',
      'Certyfikowane materiały',
      'Gwarancja na wykonanie'
    ],
    applications: [
      'Hale i wiaty stalowe',
      'Schody i balustrady',
      'Bramy i ogrodzenia',
      'Konstrukcje przemysłowe',
      'Pergole i zadaszenia',
      'Elementy małej architektury'
    ],
    image: '/services/konstrukcje.jpg',
    icon: 'konstrukcje'
  },
  {
    id: '5',
    slug: 'naprawy-spawalnicze',
    title: 'Naprawy Spawalnicze',
    shortDescription: 'Szybkie i profesjonalne naprawy metodami spawalniczymi.',
    description: `Oferujemy profesjonalne naprawy spawalnicze wszystkich rodzajów - od drobnych napraw elementów stalowych po regenerację zużytych części maszyn. Nasze doświadczenie pozwala na skuteczne naprawy nawet mocno uszkodzonych elementów.

Realizujemy zlecenia zarówno w warsztacie, jak i z dojazdem do klienta. Szybki czas realizacji i konkurencyjne ceny to nasze atuty.`,
    features: [
      'Szybka realizacja',
      'Dojazd do klienta',
      'Naprawy awaryjne',
      'Regeneracja części',
      'Różne metody spawania',
      'Konkurencyjne ceny'
    ],
    applications: [
      'Maszyny rolnicze',
      'Pojazdy i przyczepy',
      'Elementy maszyn',
      'Konstrukcje stalowe',
      'Narzędzia i osprzęt',
      'Bramy i ogrodzenia'
    ],
    image: '/services/naprawy.jpg',
    icon: 'naprawy'
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

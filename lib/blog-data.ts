export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '7',
    slug: 'ile-kosztuje-spawanie-cennik-uslug-2026',
    title: 'Ile kosztuje spawanie w 2026? Cennik usług spawalniczych',
    excerpt: 'Sprawdź aktualne ceny usług spawalniczych. Od czego zależy cena spawania i jak przygotować się do wyceny?',
    content: `
## Ceny usług spawalniczych w 2026 roku

Ceny spawania mogą się znacznie różnić w zależności od wielu czynników. W tym artykule przedstawiamy orientacyjny cennik oraz wyjaśniamy, od czego zależy ostateczna cena usługi.

## Od czego zależy cena spawania?

### 1. Metoda spawania

| Metoda | Cena orientacyjna za godzinę |
|--------|------------------------------|
| MMA (elektroda) | 50-80 zł/h |
| MIG/MAG | 60-100 zł/h |
| TIG | 80-150 zł/h |

### 2. Rodzaj materiału

- **Stal węglowa** - cena bazowa
- **Stal nierdzewna** - +30-50% do ceny bazowej
- **Aluminium** - +50-80% do ceny bazowej
- **Metale specjalne** - wycena indywidualna

### 3. Złożoność projektu

Proste spoiny wykonane w pozycji podłogowej są tańsze niż skomplikowane prace w trudnych pozycjach (pułapowa, pionowa).

### 4. Lokalizacja

- Praca w warsztacie jest zazwyczaj tańsza
- Dojazd do klienta - często bezpłatny do 30km, powyżej 2-3 zł/km

## Orientacyjny cennik usług

### Drobne naprawy
- Naprawa przyczepy - 100-300 zł
- Spawanie ramy roweru - 50-150 zł
- Naprawa bramy/furtki - 100-400 zł

### Konstrukcje stalowe
- Balustrada prosta (mb) - 200-400 zł
- Schody stalowe - 2000-8000 zł
- Brama wjazdowa - 1500-5000 zł

### Prace przemysłowe
- Konstrukcje hal - wycena indywidualna
- Zbiorniki i rurociągi - wycena indywidualna

## Jak przygotować się do wyceny?

1. **Określ zakres prac** - co dokładnie ma być wykonane
2. **Podaj wymiary** - długość spoin, wielkość konstrukcji
3. **Określ materiał** - rodzaj i grubość stali
4. **Zdjęcia** - jeśli to naprawa, wyślij zdjęcia
5. **Termin** - pilne zlecenia mogą być droższe

## Podsumowanie

Ceny spawania zależą od wielu czynników. Zawsze warto poprosić o wycenę kilku wykonawców i porównać oferty, pamiętając że najtańsza opcja nie zawsze oznacza najlepszą jakość.
    `,
    category: 'Sprzet',
    date: '2026-01-20',
    readTime: '7 min',
    image: '/blog/cennik.png',
    featured: true
  },
  {
    id: '8',
    slug: 'mig-vs-tig-vs-mma-ktora-metoda-dla-ciebie',
    title: 'MIG vs TIG vs MMA - Którą metodę spawania wybrać?',
    excerpt: 'Porównanie trzech najpopularniejszych metod spawania. Dowiedz się, która będzie najlepsza dla Twoich potrzeb.',
    content: `
## Porównanie metod spawania

Wybór metody spawania zależy od wielu czynników: rodzaju materiału, wymaganej jakości, miejsca pracy i budżetu. Przeanalizujmy każdą metodę.

## MIG/MAG - Uniwersalność i wydajność

### Zalety
- Łatwa do nauki
- Wysoka wydajność
- Czyste spoiny (minimum żużla)
- Możliwość automatyzacji

### Wady
- Wymaga butli z gazem
- Mniej mobilna
- Wrażliwa na wiatr

### Kiedy wybierać MIG/MAG?
- Prace warsztatowe
- Serie produkcyjne
- Średnie i grube materiały
- Stal węglowa i nierdzewna

## TIG - Precyzja i jakość

### Zalety
- Najwyższa jakość spoin
- Pełna kontrola nad procesem
- Idealna do cienkich materiałów
- Brak rozprysków

### Wady
- Trudna technika
- Niska wydajność
- Najdroższy sprzęt

### Kiedy wybierać TIG?
- Stal nierdzewna
- Aluminium
- Cienkie blachy
- Prace wymagające estetyki
- Przemysł spożywczy/farmaceutyczny

## MMA - Tradycja i mobilność

### Zalety
- Prosta i tania
- Praca bez gazu
- Idealna do terenu
- Odporna na wiatr

### Wady
- Wymaga usuwania żużla
- Więcej rozprysków
- Wolniejsza nauka techniki

### Kiedy wybierać MMA?
- Prace terenowe
- Naprawy w trudnych warunkach
- Budowy
- Ograniczony budżet

## Tabela porównawcza

| Cecha | MIG/MAG | TIG | MMA |
|-------|---------|-----|-----|
| Łatwość nauki | ★★★★★ | ★★☆☆☆ | ★★★☆☆ |
| Jakość spoiny | ★★★★☆ | ★★★★★ | ★★★☆☆ |
| Wydajność | ★★★★★ | ★★☆☆☆ | ★★★☆☆ |
| Mobilność | ★★★☆☆ | ★★☆☆☆ | ★★★★★ |
| Koszt sprzętu | ★★★☆☆ | ★★☆☆☆ | ★★★★★ |
| Uniwersalność | ★★★★☆ | ★★★★☆ | ★★★★☆ |

## Podsumowanie

- **Początkujący hobbysta** → MIG/MAG
- **Precyzyjne prace, nierdzewka** → TIG
- **Prace terenowe, naprawy** → MMA
- **Profesjonalista** → wszystkie metody w zależności od projektu
    `,
    category: 'Techniki',
    date: '2026-01-15',
    readTime: '8 min',
    image: '/blog/porownanie.png',
    featured: false
  },
  {
    id: '9',
    slug: '5-bledow-przy-zamawianiu-uslug-spawalniczych',
    title: '5 błędów przy zamawianiu usług spawalniczych',
    excerpt: 'Unikaj tych pułapek przy zlecaniu prac spawalniczych. Praktyczne porady, które zaoszczędzą Ci czas i pieniądze.',
    content: `
## Najczęstsze błędy przy zlecaniu spawania

Zamawiając usługi spawalnicze, łatwo popełnić błędy, które mogą kosztować czas i pieniądze. Oto 5 najczęstszych problemów i jak ich uniknąć.

## Błąd 1: Niejasny opis zlecenia

### Problem
"Proszę zespawać bramę" - taki opis nic nie mówi wykonawcy.

### Rozwiązanie
Podaj szczegóły:
- Wymiary (szerokość, wysokość)
- Materiał (profil zamknięty, kątownik, rura)
- Czy z montażem
- Rodzaj wypełnienia
- Zabezpieczenie antykorozyjne

## Błąd 2: Wybieranie tylko po cenie

### Problem
Najtańsza oferta często oznacza:
- Gorsze materiały
- Brak uprawnień
- Słabą jakość spoin
- Brak gwarancji

### Rozwiązanie
Porównuj oferty pod kątem:
- Doświadczenia wykonawcy
- Portfolio realizacji
- Opinii klientów
- Zakresu usługi (czy cena zawiera materiał, transport, montaż?)

## Błąd 3: Brak pisemnej umowy

### Problem
Ustalenia ustne łatwo zapomnieć lub różnie interpretować.

### Rozwiązanie
Zawsze ustal na piśmie (choćby mail):
- Dokładny zakres prac
- Cenę i sposób płatności
- Termin realizacji
- Warunki gwarancji
- Kto dostarcza materiał

## Błąd 4: Nieprzygotowane miejsce pracy

### Problem
Spawacz przyjeżdża, a:
- Brak dostępu do prądu
- Element do spawania jest niedostępny
- Trzeba coś najpierw rozmontować

### Rozwiązanie
Przed wizytą zapewnij:
- Zasilanie (230V lub 400V - zapytaj)
- Dostęp do miejsca pracy
- Przygotowany element (oczyszczony, rozmontowany)

## Błąd 5: Brak kontroli jakości

### Problem
Odbiór prac "na szybko" bez sprawdzenia jakości.

### Rozwiązanie
Przy odbiorze sprawdź:
- Wygląd spoin (równomierność, brak porów)
- Zgodność z ustaleniami
- Stabilność konstrukcji
- Zabezpieczenie antykorozyjne (jeśli było w umowie)

## Podsumowanie

Dobre przygotowanie do zlecenia to:
1. Szczegółowy opis z wymiarami
2. Porównanie kilku ofert
3. Pisemne ustalenia
4. Przygotowane miejsce pracy
5. Staranna kontrola przy odbiorze

Te proste zasady pozwolą uniknąć większości problemów przy zamawianiu usług spawalniczych.
    `,
    category: 'Projekty',
    date: '2026-01-10',
    readTime: '6 min',
    image: '/blog/bledy.png',
    featured: false
  },
  {
    id: '10',
    slug: 'jak-przygotowac-material-do-spawania',
    title: 'Jak przygotować materiał do spawania?',
    excerpt: 'Prawidłowe przygotowanie materiału to połowa sukcesu. Poznaj kluczowe zasady przygotowania stali do spawania.',
    content: `
## Przygotowanie materiału - klucz do dobrej spoiny

Jakość spoiny w dużej mierze zależy od przygotowania materiału. Nawet najlepszy spawacz nie wykona dobrej spoiny na brudnym czy zardzewiałym materiale.

## Etapy przygotowania

### 1. Oczyszczenie mechaniczne

**Usuwamy:**
- Rdzę
- Starą farbę
- Zgorzelinę
- Pozostałości po cięciu

**Narzędzia:**
- Szlifierka kątowa z tarczą lamelkową
- Szczotka druciana
- Piaskarka (dla większych elementów)

### 2. Odtłuszczanie

**Usuwa:**
- Oleje i smary
- Emulsje chłodzące
- Odciski palców

**Środki:**
- Aceton
- Rozpuszczalnik
- Alkohol izopropylowy

**Uwaga:** Zawsze odtłuszczaj PO oczyszczeniu mechanicznym!

### 3. Przygotowanie rowka spawalniczego

Dla blach o grubości powyżej 5mm konieczne jest ukosowanie krawędzi.

**Rodzaje rowków:**

| Grubość | Typ rowka | Kąt |
|---------|-----------|-----|
| do 5mm | Bez rowka | - |
| 5-12mm | V jednostronny | 60° |
| 12-20mm | V dwustronny | 60° |
| pow. 20mm | U lub X | wg projektu |

### 4. Sczepianie elementów

Przed spawaniem właściwym elementy trzeba ustalić i zespoić.

**Zasady sczepiania:**
- Punkty co 10-15 cm dla cienkich blach
- Punkty co 20-30 cm dla grubszych elementów
- Pierwszy punkt na środku, kolejne symetrycznie
- Szczepi się po stronie przeciwnej do spawania głównego

### 5. Podgrzewanie wstępne

Wymagane dla:
- Stali o podwyższonej wytrzymałości
- Grubych elementów (powyżej 25mm)
- Niskich temperatur otoczenia (poniżej +5°C)
- Stali nierdzewnej (niektóre gatunki)

## Specyfika materiałów

### Stal węglowa
- Standardowe czyszczenie
- Odtłuszczanie
- Ukosowanie dla grubszych blach

### Stal nierdzewna
- Tylko szczotki ze stali nierdzewnej!
- Dokładne odtłuszczanie
- Praca w rękawiczkach (odciski = korozja)
- Osobne narzędzia (bez kontaktu ze stalą węglową)

### Aluminium
- Usunięcie warstwy tlenku tuż przed spawaniem
- Szczotka ze stali nierdzewnej
- Aceton do odtłuszczania
- Tlenki odnawiają się w minutach!

## Błędy do unikania

1. **Spawanie na rdzy** - spoina będzie porowata
2. **Brak odtłuszczenia** - porowatość, złe zwilżanie
3. **Narzędzia do stali węglowej na nierdzewnej** - korozja!
4. **Zbyt duża szczelina** - przepalenia, nadmiar spoiwa
5. **Brak podgrzewania gdy wymagane** - pęknięcia zimne

## Podsumowanie

Prawidłowe przygotowanie to:
1. Oczyszczenie mechaniczne
2. Odtłuszczenie
3. Ukosowanie (dla grubszych materiałów)
4. Właściwe sczepianie
5. Podgrzewanie (gdy wymagane)

Te kroki zajmują czas, ale znacząco wpływają na jakość i trwałość spoiny.
    `,
    category: 'Techniki',
    date: '2026-01-05',
    readTime: '9 min',
    image: '/blog/przygotowanie.png',
    featured: false
  },
  {
    id: '1',
    slug: 'spawanie-mig-mag-kompletny-przewodnik',
    title: 'Spawanie MIG/MAG - Kompletny Przewodnik dla Poczatkujacych i Zaawansowanych',
    excerpt: 'Poznaj wszystkie tajniki spawania MIG/MAG. Od podstaw po zaawansowane techniki - kompleksowy przewodnik, ktory pomoze Ci opanowac te uniwersalna metode spawania.',
    content: `
## Czym jest spawanie MIG/MAG?

Spawanie MIG (Metal Inert Gas) i MAG (Metal Active Gas) to procesy spawania lukowego, w ktorych elektroda topliwa jest podawana w sposob ciagly z podajnika drutu. Roznica miedzy nimi polega na rodzaju gazu oslonowego:

- **MIG** - wykorzystuje gazy obojetne (argon, hel)
- **MAG** - wykorzystuje gazy aktywne (CO2, mieszanki argonu z CO2)

## Zalety spawania MIG/MAG

1. **Wysoka wydajnosc** - ciagla praca bez wymiany elektrod
2. **Latwosc nauki** - idealne dla poczatkujacych
3. **Uniwersalnosc** - spawanie roznych materialow i grubosci
4. **Czyste spoiny** - minimalna ilosc rozprysków

## Podstawowy sprzet

Do spawania MIG/MAG potrzebujesz:

- Spawarka MIG/MAG z podajnikiem drutu
- Butla z gazem oslonowym
- Uchwyt spawalniczy (palnik)
- Drut spawalniczy odpowiedni do materialu
- Maska spawalnicza (najlepiej automatyczna)
- Rekawice spawalnicze
- Odziez ochronna

## Technika spawania

### Pozycja palnika

Utrzymuj palnik pod katem 15-20 stopni w kierunku spawania. Odleglosc dyszy od materialu powinna wynosic 10-15mm.

### Predkosc spawania

Predkosc powinna byc dostosowana do grubosci materialu. Zbyt wolne spawanie powoduje nadmierne nagrzanie, zbyt szybkie - slaba penetracje.

### Parametry spawania

| Grubosc materialu | Napiecie | Predkosc drutu |
|------------------|----------|----------------|
| 1-2mm | 16-18V | 3-5 m/min |
| 3-4mm | 18-22V | 5-8 m/min |
| 5-6mm | 22-26V | 8-12 m/min |

## Typowe bledy i jak ich unikac

1. **Porowatosc** - sprawdz przeplyw gazu i czystosc materialu
2. **Odpryski** - dostosuj napiecie i predkosc drutu
3. **Podtopienia** - zwolnij predkosc spawania
4. **Brak przetopu** - zwieksz natezenie pradu

## Podsumowanie

Spawanie MIG/MAG to doskonala metoda zarowno dla hobbystow jak i profesjonalistow. Kluczem do sukcesu jest praktyka i systematyczne doskonalenie techniki.
    `,
    category: 'Techniki',
    date: '2024-01-15',
    readTime: '12 min',
    image: '/blog/mig-mag.png',
    featured: true
  },
  {
    id: '2',
    slug: 'spawanie-tig-precyzja-i-jakosc',
    title: 'Spawanie TIG - Gdy Liczy sie Precyzja i Najwyzsza Jakosc',
    excerpt: 'TIG to metoda dla wymagajacych. Dowiedz sie, jak osiagnac perfekcyjne spoiny na stali nierdzewnej, aluminium i innych metalach.',
    content: `
## Wprowadzenie do TIG

Spawanie TIG (Tungsten Inert Gas), znane rowniez jako GTAW, to metoda spawania lukowego wykorzystujaca nietopliwa elektrode wolframowa. Jest uznawana za najbardziej precyzyjna metode spawania.

## Kiedy wybrac TIG?

- Spawanie stali nierdzewnej
- Prace z aluminium i jego stopami
- Spawanie cienkich blach (od 0.5mm)
- Prace wymagajace estetycznych spoin
- Przemysl lotniczy i kosmiczny
- Spawanie rurarzy i zbiornikow cisnieniowych

## Rodzaje pradow w TIG

### Prad staly DC (-)
- Stal weglowa i nierdzewna
- Miedz i jej stopy
- Tytan

### Prad zmienny AC
- Aluminium i magnez
- Skutecznie rozbija warstwe tlenku

## Elektrody wolframowe

| Kolor | Sklad | Zastosowanie |
|-------|-------|--------------|
| Zielony | Czyste W | AC, aluminium |
| Czerwony | 2% Th | DC, stal |
| Zloty | 1.5% La | Uniwersalne |
| Niebieski | 2% La | DC/AC |

## Technika spawania TIG

1. **Przygotowanie** - oczysc material, przygotuj spoiwo
2. **Zajarzenie luku** - unikaj dotykania materialu elektroda
3. **Tworzenie jeziorka** - poczekaj na utworzenie sie jeziorka
4. **Dodawanie spoiwa** - wprowadzaj pod malym katem
5. **Ruch** - plynne, rownomierne przesuniecia

## Wady i zalety

### Zalety
- Najwyzsza jakosc spoin
- Pelna kontrola procesu
- Mozliwosc spawania w kazdej pozycji
- Brak rozprysków

### Wady
- Niska wydajnosc
- Wymaga duzego doswiadczenia
- Wyzszy koszt sprzetu

## Praktyczne wskazowki

1. Zawsze ostry koniec elektrody dla DC
2. Zaokraglony koniec dla AC
3. Utrzymuj krotki luk (2-3mm)
4. Stosuj odpowiedni przepływ gazu (8-12 l/min)
    `,
    category: 'Techniki',
    date: '2024-01-10',
    readTime: '10 min',
    image: '/blog/tig.png',
    featured: true
  },
  {
    id: '3',
    slug: 'spawanie-mma-elektroda-otulona',
    title: 'Spawanie MMA - Tradycyjna Metoda, Ktora Wciaz Kroluje na Budowach',
    excerpt: 'Spawanie elektroda otulona to podstawa kazdego spawacza. Poznaj sekrety tej niezawodnej metody spawania.',
    content: `
## Historia i znaczenie MMA

Spawanie MMA (Manual Metal Arc), zwane tez spawaniem elektroda otulona lub SMAW, to najstarsza i najbardziej rozpowszechniona metoda spawania. Mimo rozwoju nowoczesnych technologii, MMA pozostaje niezastapione w wielu zastosowaniach.

## Zalety spawania MMA

- **Prostota** - minimalny sprzet
- **Mobilnosc** - praca w terenie bez gazu
- **Uniwersalnosc** - rozne materialy i pozycje
- **Niski koszt** - tanie urzadzenia i materialy
- **Odpornosc na warunki** - praca na zewnatrz, w wietrze

## Rodzaje elektrod

### Elektrody rutylowe (R)
- Latwe w uzyciu
- Ladny wyglad spoiny
- Dobre do cienkich blach

### Elektrody zasadowe (B)
- Wysoka jakosc spoiny
- Dobre wlasciwosci plastyczne
- Wymagaja suszenia

### Elektrody celulozowe (C)
- Gleboka penetracja
- Spawanie pionowe w dol
- Rurociagi

## Oznaczenia elektrod

Przyklad: **E 46 3 B 42**

- E - elektroda
- 46 - wytrzymalosc (460 MPa)
- 3 - wydluzenie i udarnosc
- B - typ otuliny (zasadowa)
- 42 - pozycje i prad

## Technika spawania

1. **Zajarzenie** - ruch jak zapalanie zapalki
2. **Utrzymanie luku** - 2-4mm od materialu
3. **Kat elektrody** - 70-80 stopni
4. **Ruch** - prosty lub wahadlowy
5. **Zakonczenie** - cofniecie i wypelnienie krateru

## Typowe problemy

| Problem | Przyczyna | Rozwiazanie |
|---------|-----------|-------------|
| Przyklejanie | Za niski prad | Zwieksz amperage |
| Podtopienia | Za szybko | Zwolnij |
| Porowatosc | Wilgotna elektroda | Wysusz elektrody |
| Odpryski | Za dlugi luk | Skroc luk |

## Bezpieczenstwo

- Zawsze maska spawalnicza
- Rekawice i odziez ochronna
- Wentylacja - dymy sa toksyczne
- Ochrona przed UV i IR
    `,
    category: 'Techniki',
    date: '2024-01-05',
    readTime: '8 min',
    image: '/blog/mma.png'
  },
  {
    id: '4',
    slug: 'jak-wybrac-spawarke-dla-poczatkujacego',
    title: 'Jak Wybrac Pierwsza Spawarke? Poradnik dla Poczatkujacych',
    excerpt: 'Stoisz przed wyborem pierwszej spawarki? Ten przewodnik pomoze Ci podjac wlasciwa decyzje bez przepalania portfela.',
    content: `
## Wprowadzenie

Wybor pierwszej spawarki to wazna decyzja. Zly wybor moze zniecheci do nauki, dobry - otworzy drzwi do fascynujacego swiata spawania.

## Rodzaje spawarek dla poczatkujacych

### Spawarka MIG/MAG
**Najlepsza na start!**

Zalety:
- Latwa nauka
- Szybkie efekty
- Uniwersalnosc

Wady:
- Potrzebny gaz
- Wyzszy koszt eksploatacji

### Spawarka inwertorowa MMA
**Swietna na poczatek!**

Zalety:
- Niski koszt zakupu
- Prostota obslugi
- Praca w terenie

Wady:
- Wolniejsza nauka
- Wiecej rozprysków

### Spawarka TIG
**Dla ambitnych!**

Zalety:
- Najwyzsza jakosc
- Precyzja

Wady:
- Trudna nauka
- Drogi sprzet

## Na co zwrocic uwage?

### Cykl pracy (Duty Cycle)
Procent czasu, przez ktory spawarka moze pracowac bez przegrzania. Dla hobbysty wystarczy 20-30%, dla profesjonalisty minimum 60%.

### Zakres natezenia pradu
- Do 160A - cienkie blachy, drobne prace
- 160-200A - uniwersalne zastosowanie
- Powyzej 200A - grube materialy

### Napiecie zasilania
- 230V - standard domowy
- 400V - przemyslowe

## Polecane modele dla poczatkujacych

### Budzet do 1000 zl
- Spawarki MMA 160-200A
- Podstawowe MIG bez gazu (FCAW)

### Budzet 1000-2000 zl
- Dobre MIG/MAG z podajnikiem
- Spawarki MMA z hot start, arc force

### Budzet 2000-4000 zl
- Profesjonalne MIG/MAG
- Spawarki kombi MIG/MMA
- Podstawowe TIG

## Dodatkowy sprzet

Pamietaj o zakupie:
1. Maska spawalnicza (automatyczna!)
2. Rekawice spawalnicze
3. Fartuch skorzany
4. Szczotka druciana
5. Mloteczek do zuzelki
    `,
    category: 'Sprzet',
    date: '2023-12-28',
    readTime: '9 min',
    image: '/blog/spawarka.png'
  },
  {
    id: '5',
    slug: 'bezpieczenstwo-przy-spawaniu',
    title: 'BHP przy Spawaniu - Zasady, Ktorych Nie Mozna Ignorowac',
    excerpt: 'Spawanie to piekne rzemioslo, ale tez niebezpieczne. Poznaj kluczowe zasady bezpieczenstwa, ktore moga uratowac Twoje zdrowie.',
    content: `
## Dlaczego BHP jest tak wazne?

Spawanie wiaze sie z wieloma zagrozeniami:
- Promieniowanie UV i IR
- Wysokie temperatury
- Dymy spawalnicze
- Porazenie pradem
- Pozary i wybuchy

## Ochrona oczu i twarzy

### Maska spawalnicza
Najwazniejszy element wyposazenia!

- **DIN 9-13** - zakres przyciemnienia
- **Automatyczna** - reaguje na luk
- **Certyfikat CE** - obowiazkowy

### Dobor filtra

| Metoda | Prad | DIN |
|--------|------|-----|
| MMA | do 100A | 10 |
| MMA | 100-300A | 11-12 |
| MIG/MAG | do 200A | 10-11 |
| MIG/MAG | 200-400A | 12-13 |
| TIG | do 100A | 9-10 |

## Ochrona drog oddechowych

### Zagrozenia
- Tlenki metali
- Ozon
- Tlenki azotu
- Dymy spawalnicze

### Srodki ochrony
1. **Wentylacja ogolna** - wymiana powietrza
2. **Odciag miejscowy** - przy stanowisku
3. **Maski filtrujace** - P2, P3
4. **Respiratory** - przy dlugiej ekspozycji

## Ochrona ciala

### Odziez spawalnicza
- Material niepalny lub skorzany
- Dlugie rekawy
- Brak syntetykow!
- Zamkniete kieszenie

### Rekawice
- Skorzane, dlugie
- Osobne dla MIG i TIG
- Wymiana gdy uszkodzone

### Obuwie
- Skorzane
- Wysoka cholewka
- Bez sznurowadel na wierzchu

## Bezpieczenstwo elektryczne

1. **Sprawdzaj sprzet** przed praca
2. **Suche rekawice** i odziez
3. **Izolacja** od podloza
4. **Wylaczaj** nieuzywany sprzet

## Ochrona przeciwpozarowa

- Usun materialy lztwopalne (10m)
- Miej gasnice w zasiegu
- Palnoprobne maty i kurtyny
- Nadzor po zakonczeniu prac (min. 30 min)

## Pierwsza pomoc

### Oparzenia
1. Chlodz woda (10-20 min)
2. Nie usuwaj przyschniętej odziezy
3. Wezwij pomoc przy powaznych

### Blysk spawalniczy
1. Zimne oklady
2. Krople nawilzajace
3. Lekarz przy silnym bolu
    `,
    category: 'BHP',
    date: '2023-12-20',
    readTime: '11 min',
    image: '/blog/bhp.png'
  },
  {
    id: '6',
    slug: 'spawanie-aluminium-wyzwania-i-rozwiazania',
    title: 'Spawanie Aluminium - Wyzwania i Sprawdzone Rozwiazania',
    excerpt: 'Aluminium to wymagajacy material. Odkryj techniki i triki, ktore pomoga Ci opanowac spawanie tego lekkiego metalu.',
    content: `
## Dlaczego aluminium jest trudne?

Aluminium rozni sie od stali:
- **Wysoka przewodnosc cieplna** - szybko oddaje cieplo
- **Niska temperatura topnienia** - 660°C vs 1500°C stali
- **Warstwa tlenku** - topi sie w 2072°C
- **Brak zmiany koloru** - trudno ocenic temperature

## Metody spawania aluminium

### TIG AC - Standard
Najlepsza metoda dla aluminium:
- Prad zmienny rozbija tlenki
- Pelna kontrola
- Najwyzsza jakosc

### MIG z impulsem
Dla wiekszych produkcji:
- Wysza wydajnosc
- Mniejsze odksztalcenia
- Wymaga doswiadczenia

## Przygotowanie materialu

### Czyszczenie - klucz do sukcesu!

1. **Odtluszczanie** - aceton, alkohol
2. **Usuniecie tlenkow** - szczotka stalowa TYLKO do aluminium
3. **Czyszczenie tuz przed** - tlenki powstaja w minutach

### Frezowanie krawedzi
- V lub X dla grubosci >4mm
- Kat 60-70 stopni
- Pozostaw prog 1-2mm

## Parametry spawania TIG

| Grubosc | Prad AC | Srednica W | Spoiwo |
|---------|---------|------------|--------|
| 1-2mm | 50-80A | 1.6mm | 1.6mm |
| 3-4mm | 100-150A | 2.4mm | 2.4mm |
| 5-6mm | 150-200A | 3.2mm | 3.2mm |

## Gazy oslonowe

- **Argon** - standard
- **Hel** - wieksza penetracja
- **Mieszanka Ar/He** - kompromis

Przeplyw: 12-18 l/min

## Spoiwa aluminiowe

### 4043
- Uniwersalne
- Dobre plynecie
- Mniejsza wytrzymalosc

### 5356
- Wyzsza wytrzymalosc
- Lepsza odpornosc korozyjna
- Trudniejsze w uzyciu

## Typowe problemy

### Porowatosc
- Przyczyna: wilgoc, zanieczyszczenia
- Rozwiazanie: lepsze czyszczenie, suchy gaz

### Pekniecia
- Przyczyna: zla spoiwo, napreszenia
- Rozwiazanie: odpowiednie spoiwo, podgrzewanie

### Przepalenie
- Przyczyna: za duzo ciepla
- Rozwiazanie: zmniejsz prad, szybciej spawaj
    `,
    category: 'Techniki',
    date: '2023-12-15',
    readTime: '10 min',
    image: '/blog/aluminium.png'
  }
]

export const categories = ['Wszystkie', 'Techniki', 'Sprzet', 'BHP', 'Projekty']

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'Wszystkie') return blogPosts
  return blogPosts.filter(post => post.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

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
  },
  {
    id: '7',
    slug: 'spawanie-rur-kompletny-poradnik',
    title: 'Spawanie Rur - Kompletny Poradnik od Podstaw do Certyfikacji',
    excerpt: 'Spawanie rur to jedno z najbardziej wymagajacych zadan spawalniczych. Poznaj techniki, pozycje i sekrety profesjonalnych spawaczy rurarzy.',
    content: `
## Wprowadzenie do spawania rur

Spawanie rur to specjalistyczna dziedzina, ktora wymaga wyjatkowych umiejetnosci. Rurociagi transportuja gaz, rope, wode i inne media - kazdy blad moze prowadzic do katastrofalnych skutkow.

## Dlaczego spawanie rur jest trudne?

- **Zmienne pozycje** - spawacz musi pracowac w pozycji plaskiej, pionowej i pulapowej podczas jednego zlacza
- **Dostep** - czesto ograniczony, praca w ciasnych przestrzeniach
- **Odpowiedzialnosc** - spoiny podlegaja rygorystycznym badaniom
- **Precyzja** - rowne przetopu na calym obwodzie

## Pozycje spawania rur

### Pozycja 1G (rura obracana)
- Najlatwiejsza pozycja
- Rura obraca sie, spawacz pracuje w pozycji podolnej
- Idealna do nauki

### Pozycja 2G (os pozioma)
- Rura nieruchoma w pozycji poziomej
- Spawanie w pozycji naroznej
- Sredni poziom trudnosci

### Pozycja 5G (os pozioma, rura nieruchoma)
- Rura nieruchoma
- Spawacz musi obejsc caly obwod
- Praca w pozycjach PA, PB, PF, PG, PE

### Pozycja 6G (os pod katem 45°)
- Najtrudniejsza pozycja egzaminacyjna
- Laczy wszystkie pozycje spawania
- Wymagana do certyfikacji

## Przygotowanie zlacza

### Fazowanie krawedzi
- Kat fazowania: 30-37.5 stopni
- Prog: 1.5-2mm
- Szczelina: 2-3mm (zalezna od srednicy)

### Sczepianie
- Minimum 3 punkty dla malych srednich
- 4-6 punktow dla wiekszych rur
- Rownomierne rozlozenie na obwodzie

## Technika spawania - warstwa graniowa

### Metoda TIG (GTAW)
Najlepsza dla warstwy graniowej:
1. Zajarz luk na plycie rozprowadzajacej
2. Prowadz spoiwo w jeziorkow
3. Utrzymuj rownomierny przetop
4. Kontroluj podtopienia od srodka

### Parametry dla stali weglowej

| Srednica rury | Prad TIG | Spoiwo |
|---------------|----------|--------|
| DN25-50 | 80-100A | 2.0mm |
| DN65-100 | 100-120A | 2.4mm |
| DN125+ | 120-150A | 3.2mm |

## Warstwy wypelniajace i lico

### Metoda TIG
- Kontynuacja TIG dla wysokiej jakosci
- Wolniejsze, ale idealne spoiny

### Metoda MMA
- Elektrody zasadowe E7018
- Szybsze wypelnianie
- Dobre wlasciwosci mechaniczne

### Metoda MIG/MAG
- Wysoka wydajnosc
- Wymaga dobrego przygotowania

## Typowe bledy i rozwiazania

| Blad | Przyczyna | Rozwiazanie |
|------|-----------|-------------|
| Brak przetopu | Za maly prad, za duza predkosc | Dostosuj parametry |
| Podtopienia | Za duzy prad, zla technika | Zmniejsz prad, popraw kat |
| Wklesniety grań | Za mala ilosc spoiwa | Dodaj wiecej materialu |
| Nadmierny grań | Za duzo ciepla | Zmniejsz prad |
| Porowatosc | Zanieczyszczenia, wilgoc | Oczysc, osusz |

## Badania i kontrola jakosci

### Badania niszczace
- Proba rozciagania
- Proba gięcia (face/root bend)
- Proba udarnosci

### Badania nieniszczace (NDT)
- RT (radiografia) - standard dla rurociagow
- UT (ultradźwieki)
- PT (penetracyjne)
- MT (magnetyczno-proszkowe)

## Certyfikacja spawaczy rurarzy

### Normy
- EN ISO 9606-1 (Europa)
- ASME Section IX (USA)
- AWS D1.1

### Zakres uprawnień
- Grubosc sciany
- Srednica rury
- Material
- Pozycja spawania
- Metoda spawania

## Wskazówki dla poczatkujacych

1. **Zacznij od 1G** - naucz sie podstaw
2. **Praktykuj na zomach** - duzo powtorzen
3. **Filmuj swoje spoiny** - analizuj bledy
4. **Szukaj mentora** - nauka od doswiadczonych
5. **Nie spiesz sie** - precyzja przed predkoscia
    `,
    category: 'Rury',
    date: '2024-01-20',
    readTime: '14 min',
    image: '/blog/spawanie-rur.png',
    featured: true
  },
  {
    id: '8',
    slug: 'spawanie-rur-cisnieniowych',
    title: 'Spawanie Rur Cisnieniowych - Normy, Wymagania i Najlepsze Praktyki',
    excerpt: 'Rurociagi cisnieniowe to krytyczna infrastruktura. Dowiedz sie o normach, procedurach kwalifikacji i technikach gwarantujacych bezpieczenstwo.',
    content: `
## Wprowadzenie do rur cisnieniowych

Rurociagi cisnieniowe transportuja media pod wysokim cisnieniem - gaz ziemny, rope naftowa, pare wodna czy chemikalia. Blad spawacza moze kosztowac zycie.

## Klasyfikacja rur cisnieniowych

### Wedlug cisnienia
- **Niskocisnieniowe** - do 1.6 MPa
- **Sredniocisnieniowe** - 1.6-10 MPa
- **Wysokocisnieniowe** - powyzej 10 MPa

### Wedlug medium
- Rurociagi gazowe
- Rurociagi parowe
- Rurociagi olejowe
- Rurociagi procesowe (chemiczne)

## Normy i przepisy

### Normy europejskie
- **EN 13480** - Metalowe rurociagi przemyslowe
- **EN 12732** - Rurociagi gazowe
- **PED 2014/68/EU** - Dyrektywa cisnieniowa

### Normy amerykanskie
- **ASME B31.1** - Rurociagi energetyczne
- **ASME B31.3** - Rurociagi procesowe
- **API 1104** - Rurociagi przesylowe

## Materialy na rury cisnieniowe

### Stale weglowe
- P235GH, P265GH
- Ekonomiczne, dobre wlasciwosci
- Do 450°C

### Stale stopowe
- 16Mo3 (Mo)
- 13CrMo4-5 (CrMo)
- Wyzsza temperatura pracy

### Stale nierdzewne
- 304, 316 (austenityczne)
- Odporne na korozje
- Przemysl chemiczny, spozywczy

## Przygotowanie zlacza

### Geometria rowka
Zgodnie z WPS (Welding Procedure Specification):
- Kat ukosowania: 30-37.5°
- Prog: 1.5-3mm
- Szczelina: 2-4mm

### Przygotowanie powierzchni
1. Czyszczenie mechaniczne (25mm od krawedzi)
2. Odtluszczanie
3. Kontrola wymiarow
4. Sprawdzenie owalizacji

## Procedury spawania (WPS)

### Elementy WPS
- Material podstawowy i dodatkowy
- Parametry spawania
- Kolejnosc sciegow
- Obrobka cieplna
- Pozycje spawania

### Kwalifikacja procedury (WPQR)
- Spawanie probi zgodnie z WPS
- Badania niszczace i nieniszczace
- Dokumentacja wynikow
- Zatwierdzenie przez jednostke

## Techniki spawania

### Warstwa graniowa - TIG z gazem formujacym
Krytyczna dla rur cisnieniowych:

| Element | Wymaganie |
|---------|-----------|
| Gaz oslonowy | Argon 99.99% |
| Gaz formujacy | Argon lub N2/H2 |
| Przetop | Rowny, bez wad |
| Utlenienie | Niedopuszczalne |

### Warstwy wypelniajace
- TIG dla najwyzszej jakosci
- MMA (elektrody zasadowe)
- Kombinacja TIG+MMA

### Obrobka cieplna
- Podgrzewanie wstepne (>150mm, CrMo)
- Wyżarzanie odprężające po spawaniu
- Kontrola temperatury miedzysciegowej

## Kontrola jakosci

### Kontrola 100%
Wymagana dla rur cisnieniowych:
- Kontrola wizualna (VT)
- Radiografia (RT) lub
- Badania ultradzwiekowe (UT)

### Kryteria akceptacji
Zgodnie z EN ISO 5817:
- Poziom B dla rur cisnieniowych
- Brak pekniec, przyklejen
- Ograniczone podtopienia
- Kontrolowany nadlew

## Dokumentacja

### Wymagane dokumenty
1. WPS - procedura spawania
2. WPQR - kwalifikacja procedury
3. Certyfikaty spawaczy
4. Swiadectwa materialowe
5. Protokoly badan NDT
6. Dokumentacja obrobki cieplnej

### Identyfikowalnosc
- Znakowanie spoin
- Numer spawacza
- Data wykonania
- Numer procedury

## Typowe wady i konsekwencje

### Wady niedopuszczalne
- Pekniecia - zawsze niedopuszczalne
- Brak przetopu - ryzyko pekniecia
- Wtrącenia - obnizenie wytrzymalosci
- Porowatosc - osłabienie struktury

### Konsekwencje
- Odrzucenie spoiny
- Naprawa lub wyciecie
- Ponowne badania
- Koszty i opoznienia

## Bezpieczenstwo przy spawaniu rur cisnieniowych

1. **Sprawdz procedury** przed rozpoczeciem
2. **Upewnij sie o kwalifikacjach** - wazne certyfikaty
3. **Kontroluj warunki** - temperatura, wilgotnosc
4. **Dokumentuj wszystko** - kazdy etap
5. **Nie spiesz sie** - jakosc przed predkoscia
    `,
    category: 'Rury',
    date: '2024-01-22',
    readTime: '16 min',
    image: '/blog/rury-cisnieniowe.png'
  }
]

export const categories = ['Wszystkie', 'Techniki', 'Sprzet', 'BHP', 'Projekty', 'Rury']

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

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'

const articles: Record<string, {
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  content: string
}> = {
  'spawanie-aluminium-poradnik': {
    title: 'Spawanie Aluminium - Kompletny Poradnik dla Początkujących i Zaawansowanych',
    excerpt: 'Poznaj techniki spawania aluminium metodą TIG i MIG. Dowiedz się, jak unikać najczęstszych błędów i osiągnąć profesjonalne rezultaty.',
    image: '/gallery-1.jpg',
    category: 'Poradniki',
    author: 'Łukasz Kaźmierczak',
    date: '2024-01-15',
    readTime: '12 min',
    content: `
## Wprowadzenie do spawania aluminium

Aluminium to jeden z najbardziej wymagających materiałów do spawania. Jego niska temperatura topnienia (około 660°C), wysoka przewodność cieplna oraz warstwa tlenku aluminium na powierzchni sprawiają, że wymaga specjalnego podejścia i odpowiednich technik.

W TECHSPAW od lat specjalizujemy się w spawaniu aluminium i jego stopów. W tym poradniku dzielimy się naszą wiedzą i doświadczeniem, które pomogą Ci osiągnąć profesjonalne rezultaty.

## Dlaczego aluminium jest trudne do spawania?

### Warstwa tlenku
Na powierzchni aluminium zawsze tworzy się warstwa tlenku aluminium (Al₂O₃), która topi się dopiero w temperaturze około 2050°C - znacznie wyższej niż samo aluminium. Dlatego przed spawaniem konieczne jest jej usunięcie lub przebicie za pomocą odpowiedniego procesu.

### Wysoka przewodność cieplna
Aluminium bardzo szybko odprowadza ciepło, co oznacza że:
- Potrzebujesz więcej energii do uzyskania odpowiedniej temperatury
- Jeziorko spawalnicze szybko zastyga
- Ryzyko niedogrzania materiału jest większe

### Brak zmiany koloru
W przeciwieństwie do stali, aluminium nie zmienia koloru przed stopieniem. Przechodzi bezpośrednio ze stanu stałego do ciekłego, co utrudnia kontrolę procesu.

## Metody spawania aluminium

### Spawanie TIG (GTAW)
Metoda TIG jest najczęściej wybierana do spawania aluminium, szczególnie gdy zależy nam na:
- Najwyższej jakości spoin
- Precyzyjnej kontroli procesu
- Spawaniu cienkich elementów
- Estetycznym wyglądzie spoiny

**Parametry dla TIG:**
- Prąd: AC (zmienny) z możliwością regulacji balansu
- Gaz osłonowy: argon (99,99%)
- Elektroda: wolframowa z cyrkonikiem lub lantanem
- Przepływ gazu: 10-15 l/min

### Spawanie MIG (GMAW)
Metoda MIG jest bardziej wydajna i szybsza, idealna do:
- Spawania grubszych elementów (powyżej 3mm)
- Długich spoin
- Produkcji seryjnej
- Prac konstrukcyjnych

**Parametry dla MIG:**
- Prąd: DC+ (dodatni biegun na drucie)
- Gaz osłonowy: argon lub mieszanka Ar/He
- Drut: odpowiedni stop (np. ER4043, ER5356)
- Tryb: impulsowy daje najlepsze rezultaty

## Przygotowanie aluminium do spawania

### Czyszczenie mechaniczne
1. Usuń wszelkie zanieczyszczenia (olej, smar, brud)
2. Użyj szczotki ze stali nierdzewnej dedykowanej tylko do aluminium
3. Szczotkuj w jednym kierunku
4. Oczyść bezpośrednio przed spawaniem

### Czyszczenie chemiczne
Dla najlepszych rezultatów:
1. Odtłuść acetonem lub alkoholem izopropylowym
2. Możesz użyć specjalnych środków do usuwania tlenków
3. Osusz dokładnie przed spawaniem

### Fazowanie krawędzi
Dla materiałów grubszych niż 3mm zaleca się fazowanie:
- Kąt fazowania: 60-70°
- Pozostaw "nos" 1-2mm
- Szczelina między elementami: 0-2mm w zależności od grubości

## Techniki spawania

### Kąt palnika
- Kąt pochylenia: 10-15° od pionu
- Kierunek: "ciągnij" spoiwo, nie "pchaj"
- Utrzymuj stały dystans

### Prędkość spawania
- Spawaj szybciej niż stal
- Unikaj zbyt długiego przebywania w jednym miejscu
- Utrzymuj płynny, równomierny ruch

### Dodawanie spoiwa
- Dodawaj spoiwo do przedniej krawędzi jeziorka
- Używaj odpowiedniego stopu spoiwa
- Dla TIG: pręt 2-3mm mniejszy od grubości materiału

## Najczęstsze problemy i rozwiązania

### Porowatość
**Przyczyny:** zanieczyszczenia, wilgoć, niewłaściwa osłona gazowa
**Rozwiązanie:** dokładne czyszczenie, suchy gaz, właściwy przepływ gazu

### Pęknięcia gorące
**Przyczyny:** zbyt szybkie chłodzenie, niewłaściwy stop spoiwa
**Rozwiązanie:** podgrzewanie wstępne, wolniejsze chłodzenie, właściwy dobór spoiwa

### Brak wtopienia
**Przyczyny:** zbyt mała moc, zbyt szybkie spawanie, brudna powierzchnia
**Rozwiązanie:** zwiększ parametry, zwolnij, oczyść materiał

### Nadmierne rozpryski
**Przyczyny:** zbyt wysokie parametry, niewłaściwy kąt, zły gaz
**Rozwiązanie:** dostosuj parametry, popraw technikę

## Dobór spoiwa

| Stop podstawowy | Zalecane spoiwo | Zastosowanie |
|----------------|-----------------|--------------|
| 1xxx (czyste Al) | ER1100 | Przemysł chemiczny |
| 3xxx | ER4043 | Naczynia, elementy dekoracyjne |
| 5xxx | ER5356 | Konstrukcje morskie, zbiorniki |
| 6xxx | ER4043/ER5356 | Konstrukcje, transport |

## Bezpieczeństwo przy spawaniu aluminium

1. **Wentylacja** - opary aluminium są szkodliwe
2. **Ochrona oczu** - silne promieniowanie UV
3. **Ochrona skóry** - odpowiednia odzież
4. **Ochrona dróg oddechowych** - maska z filtrem

## Podsumowanie

Spawanie aluminium wymaga praktyki i cierpliwości. Kluczowe punkty do zapamiętania:
- Zawsze czyść materiał bezpośrednio przed spawaniem
- Używaj odpowiednich parametrów dla danej grubości
- Spawaj szybciej niż stal
- Dobierz właściwe spoiwo do materiału podstawowego
- Ćwicz na odpadkach przed właściwym spawaniem

Jeśli potrzebujesz profesjonalnego spawania aluminium w Toruniu, zapraszamy do kontaktu z TECHSPAW. Z chęcią pomożemy w realizacji Twojego projektu.
    `,
  },
  'roznice-miedzy-spawaniem-tig-mig-mma': {
    title: 'TIG, MIG czy MMA? Który rodzaj spawania wybrać do swojego projektu',
    excerpt: 'Porównanie trzech najpopularniejszych metod spawania. Zalety, wady i zastosowania każdej z nich w praktyce warsztatowej.',
    image: '/gallery-2.jpg',
    category: 'Edukacja',
    author: 'Łukasz Kaźmierczak',
    date: '2024-01-10',
    readTime: '10 min',
    content: `
## Trzy główne metody spawania łukowego

Wybór odpowiedniej metody spawania ma kluczowe znaczenie dla jakości połączenia, wydajności pracy i kosztów projektu. W tym artykule szczegółowo porównamy trzy najpopularniejsze metody: TIG, MIG i MMA.

## Spawanie TIG (141)

### Czym jest TIG?
TIG (Tungsten Inert Gas), znane również jako GTAW (Gas Tungsten Arc Welding) lub WIG, to metoda spawania z użyciem nietopliwej elektrody wolframowej w osłonie gazu obojętnego.

### Jak działa?
1. Łuk elektryczny powstaje między elektrodą wolframową a materiałem spawanym
2. Gaz obojętny (argon lub hel) chroni jeziorko spawalnicze
3. Materiał dodatkowy (spoiwo) jest dodawany ręcznie przez spawacza
4. Spawacz kontroluje obie ręce: palnik i pręt spoiwa

### Zalety TIG
- **Najwyższa jakość spoin** - czyste, estetyczne połączenia
- **Precyzyjna kontrola** - spawacz ma pełną kontrolę nad procesem
- **Uniwersalność** - można spawać praktycznie wszystkie metale
- **Brak rozprysków** - czysta praca
- **Cienkie materiały** - idealne do spawania blach od 0,5mm

### Wady TIG
- **Niska wydajność** - najwolniejsza z trzech metod
- **Wymaga wysokich umiejętności** - stroma krzywa uczenia
- **Wyższy koszt** - droższy sprzęt i materiały
- **Wrażliwość na przeciągi** - wymaga osłony przed wiatrem

### Kiedy wybrać TIG?
- Spawanie aluminium i jego stopów
- Spawanie stali nierdzewnej
- Cienkie materiały (do 3mm)
- Prace wymagające najwyższej estetyki
- Spawanie egzotycznych metali (tytan, magnez)
- Naprawa precyzyjnych elementów

## Spawanie MIG/MAG (135/136)

### Czym jest MIG/MAG?
MIG (Metal Inert Gas) i MAG (Metal Active Gas) to metody spawania półautomatycznego z drutem elektrodowym w osłonie gazu.

### Różnica między MIG a MAG
- **MIG** - gaz obojętny (argon), do aluminium i stali nierdzewnej
- **MAG** - gaz aktywny (CO₂ lub mieszanki), do stali węglowej

### Jak działa?
1. Drut elektrodowy jest automatycznie podawany z szpuli
2. Drut topi się i stanowi jednocześnie elektrodę i spoiwo
3. Gaz osłonowy chroni jeziorko spawalnicze
4. Spawacz kontroluje tylko palnik

### Zalety MIG/MAG
- **Wysoka wydajność** - szybkie spawanie długich spoin
- **Łatwość nauki** - prostsza technika niż TIG
- **Ciągły proces** - nie trzeba wymieniać elektrod
- **Ekonomiczność** - niższe koszty przy dużych projektach
- **Wszechstronność** - szeroki zakres grubości materiałów

### Wady MIG/MAG
- **Rozchlapywanie** - wymaga czyszczenia po spawaniu
- **Wrażliwość na wiatr** - jeszcze większa niż TIG
- **Droższa inwestycja początkowa** - spawarka, butla, drut
- **Mniej precyzyjne** - trudniejsza kontrola przy cienkich blachach

### Kiedy wybrać MIG/MAG?
- Długie spoiny liniowe
- Produkcja seryjna
- Spawanie stali konstrukcyjnej
- Grube materiały (od 1,5mm wzwyż)
- Warsztaty samochodowe
- Prace konstrukcyjne

## Spawanie MMA (111)

### Czym jest MMA?
MMA (Manual Metal Arc), znane też jako SMAW (Shielded Metal Arc Welding) lub spawanie elektrodami otulonymi, to najstarsza i najprostsza metoda spawania łukowego.

### Jak działa?
1. Łuk elektryczny topi elektrodę otuloną
2. Otulina tworzy żużel i gazy osłonowe
3. Rdzeń elektrody stanowi materiał dodatkowy
4. Żużel chroni spoinę podczas stygnięcia

### Zalety MMA
- **Prostota** - najtańszy i najprostszy sprzęt
- **Mobilność** - nie wymaga butli z gazem
- **Odporność na warunki** - można spawać na zewnątrz
- **Dostępność** - elektrody dostępne wszędzie
- **Wszechstronność materiałowa** - różne elektrody do różnych metali

### Wady MMA
- **Przerwy na wymianę elektrod** - niższa ciągłość pracy
- **Żużel** - wymaga usuwania po każdej warstwie
- **Rozbryzgi** - więcej czyszczenia
- **Trudniejsze dla cienkich blach** - min. 2-3mm
- **Niższa estetyka** - spoiny mniej równomierne

### Kiedy wybrać MMA?
- Prace terenowe i montażowe
- Spawanie w trudnych warunkach
- Naprawy awaryjne
- Spawanie rur i konstrukcji
- Gdy nie ma dostępu do gazu
- Grube elementy konstrukcyjne

## Porównanie metod

| Cecha | TIG | MIG/MAG | MMA |
|-------|-----|---------|-----|
| Jakość spoiny | ★★★★★ | ★★★★☆ | ★★★☆☆ |
| Wydajność | ★★☆☆☆ | ★★★★★ | ★★★☆☆ |
| Łatwość nauki | ★★☆☆☆ | ★★★★☆ | ★★★☆☆ |
| Koszt sprzętu | ★★☆☆☆ | ★★★☆☆ | ★★★★★ |
| Mobilność | ★★☆☆☆ | ★★★☆☆ | ★★★★★ |
| Cienkie blachy | ★★★★★ | ★★★☆☆ | ★★☆☆☆ |
| Aluminium | ★★★★★ | ★★★★☆ | ★☆☆☆☆ |

## Która metoda dla Ciebie?

### Dla hobbysty/początkującego
Zacznij od **MIG/MAG** - łatwiejsza nauka, szybkie efekty, dobra jakość. Inwestycja zwraca się w postaci satysfakcji z pracy.

### Dla profesjonalisty
Opanuj **wszystkie trzy metody** - każda ma swoje zastosowanie. TIG do precyzyjnych prac, MIG do produkcji, MMA do montażu.

### Dla warsztatu samochodowego
**MIG** jako podstawa, **TIG** do aluminium i stali nierdzewnej (układy wydechowe).

### Dla konstruktora
**MAG** do stali konstrukcyjnej, **MMA** do prac terenowych.

## Podsumowanie

Nie ma jednej "najlepszej" metody spawania - każda ma swoje miejsce w warsztacie. W TECHSPAW stosujemy wszystkie trzy metody, dobierając odpowiednią technologię do konkretnego projektu i wymagań klienta.

Jeśli nie jesteś pewien, która metoda będzie najlepsza dla Twojego projektu, skontaktuj się z nami. Chętnie doradzimy i wykonamy spawanie profesjonalnie.
    `,
  },
  'spawanie-zeliwa-techniki': {
    title: 'Spawanie Żeliwa - Techniki, Wyzwania i Rozwiązania',
    excerpt: 'Żeliwo to wymagający materiał. Poznaj sprawdzone metody spawania żeliwa szarego i sferoidalnego bez ryzyka pęknięć.',
    image: '/gallery-3.jpg',
    category: 'Specjalistyczne',
    author: 'Łukasz Kaźmierczak',
    date: '2024-01-05',
    readTime: '15 min',
    content: `
## Czym jest żeliwo?

Żeliwo to stop żelaza z węglem (powyżej 2,11% C), często z dodatkiem krzemu i innych pierwiastków. Ze względu na swoją kruchość i specyficzne właściwości, spawanie żeliwa należy do najtrudniejszych operacji spawalniczych.

## Rodzaje żeliwa

### Żeliwo szare
- Węgiel w formie grafitu płatkowego
- Dobre właściwości odlewnicze
- Kruche, łatwo pęka przy spawaniu
- Zastosowanie: bloki silników, korpusy maszyn, elementy odlewane

### Żeliwo sferoidalne (SGCI)
- Węgiel w formie kulek grafitu
- Lepsze właściwości mechaniczne
- Łatwiejsze do spawania niż szare
- Zastosowanie: części samochodowe, wały korbowe, elementy nośne

### Żeliwo białe
- Węgiel w formie cementytu
- Bardzo twarde i kruche
- Praktycznie niespawalne tradycyjnymi metodami
- Zastosowanie: elementy ścierne

## Dlaczego żeliwo jest trudne do spawania?

### Wysoka zawartość węgla
Żeliwo zawiera 2,5-4% węgla, co przy szybkim chłodzeniu prowadzi do utworzenia twardych i kruchych struktur (martenzyt, ledeburyt).

### Niska plastyczność
Żeliwo nie "wybacza" naprężeń spawalniczych - pęka zamiast się odkształcać.

### Tendencja do pęknięć
- Pęknięcia gorące - podczas krzepnięcia
- Pęknięcia zimne - po ostygnięciu
- Pęknięcia odroczone - nawet kilka dni po spawaniu

### Strefa wpływu ciepła (SWC)
W SWC zachodzą niekorzystne przemiany strukturalne, które osłabiają materiał wokół spoiny.

## Metody spawania żeliwa

### Metoda "na gorąco"

**Procedura:**
1. Podgrzej cały element do 500-650°C
2. Spawaj przy tej temperaturze
3. Chłodź bardzo powoli (nawet 24-48 godzin)

**Zalety:**
- Najniższe naprężenia
- Najlepsza jakość połączenia
- Minimalne ryzyko pęknięć

**Wady:**
- Wymaga pieca
- Czasochłonne
- Drogie
- Nie zawsze możliwe (duże elementy)

### Metoda "na ciepło"

**Procedura:**
1. Podgrzej element do 200-400°C
2. Spawaj krótkimi odcinkami
3. Podkuwaj spoinę
4. Chłodź w piasku lub włóknie mineralnym

**Zalety:**
- Łatwiejsza do wykonania
- Dobre rezultaty dla żeliwa sferoidalnego
- Kompromis między jakością a praktycznością

### Metoda "na zimno"

**Procedura:**
1. Spawaj bez podgrzewania
2. Stosuj specjalne elektrody (niklowe)
3. Spawaj bardzo krótkimi ściegami (max 25mm)
4. Chłodź naturalnie między ściegami
5. Podkuwaj każdy ścieg młotkiem

**Zalety:**
- Nie wymaga specjalnego wyposażenia
- Szybsza realizacja
- Jedyna opcja dla elementów niemożliwych do podgrzania

**Wady:**
- Wyższe ryzyko pęknięć
- Wymaga doświadczenia
- Drogie elektrody niklowe

## Materiały dodatkowe do spawania żeliwa

### Elektrody niklowe (ENi)
- Zawartość niklu: 90-99%
- Miękka spoina, pochłania naprężenia
- Obróbka mechaniczna możliwa
- Najlepsze do spawania "na zimno"

### Elektrody niklo-żelazne (ENiFe)
- Około 50% niklu
- Wyższa wytrzymałość spoiny
- Tańsze od czysto niklowych
- Dobre do napraw konstrukcyjnych

### Elektrody niklo-miedziane (ENiCu)
- Spoina bardzo plastyczna
- Dobra odporność na korozję
- Stosowane do żeliwa sferoidalnego

### Elektrody żeliwne
- Rdzeń z żeliwa lub staliwa
- Tylko do spawania "na gorąco"
- Spoina o zbliżonych właściwościach do materiału podstawowego

## Technika spawania

### Przygotowanie powierzchni
1. Usuń wszelkie zanieczyszczenia (olej, farba, rdza)
2. Wykonaj fazowanie (60-90°)
3. Dla pęknięć: przewierć końce pęknięcia (Ø6-8mm)
4. Oczyść szczotką stalową

### Ścieg spawalniczy
- **Długość ściegu:** max 20-30mm
- **Prąd:** możliwie niski, stabilny łuk
- **Kierunek:** spawaj w stronę materiału zimnego
- **Przerwy:** pozwól materiałowi ostygnąć do 50°C między ściegami

### Podkuwanie
- Kuj spoinę zaraz po spawaniu, gdy jest jeszcze gorąca
- Używaj młotka z zaokrąglonym obuchem
- Kuj lekko, wielokrotnie
- Cel: wprowadzenie naprężeń ściskających, zniwelowanie skurczu

### Chłodzenie
- Nigdy nie chłodź wodą!
- Przykryj spawany element włóknem ceramicznym
- Możesz zasypać piaskiem lub vermiculitem
- Im wolniejsze chłodzenie, tym lepiej

## Naprawa typowych uszkodzeń

### Pęknięcia
1. Przewierć końce pęknięcia
2. Sfazuj krawędzie na całej długości
3. Spawaj od środka ku końcom
4. Stosuj technikę "wsteczną" (cofania)

### Ubytki materiału
1. Oczyść i sfazuj krawędzie
2. Spawaj warstwami
3. Każdą warstwę podkuwaj
4. Pozostaw nadmiar do obróbki

### Złamania
1. Dopasuj elementy
2. Wykonaj punkty sczepne
3. Spawaj naprzemiennie z obu stron
4. Unikaj koncentracji ciepła

## Kontrola jakości

### Badania wizualne
- Sprawdź kompletność wypełnienia
- Szukaj pęknięć powierzchniowych
- Oceń kształt i estetykę spoiny

### Badania penetracyjne
- Zalecane dla krytycznych połączeń
- Wykrywają pęknięcia powierzchniowe
- Wykonaj minimum 24h po spawaniu

### Próba szczelności
- Dla zbiorników i elementów ciśnieniowych
- Test ciśnieniowy lub podciśnieniowy

## Najczęstsze błędy

### Zbyt szybkie spawanie
**Problem:** Przegrzanie, duża SWC, pęknięcia
**Rozwiązanie:** Spawaj krótkimi odcinkami z przerwami

### Brak podkuwania
**Problem:** Wysokie naprężenia skurczowe, pęknięcia
**Rozwiązanie:** Kuj każdy ścieg

### Szybkie chłodzenie
**Problem:** Twardy, kruchy materiał w SWC
**Rozwiązanie:** Izoluj termicznie, chłodź powoli

### Niewłaściwe elektrody
**Problem:** Twarda spoina, brak plastyczności
**Rozwiązanie:** Używaj elektrod niklowych

## Podsumowanie

Spawanie żeliwa wymaga cierpliwości, doświadczenia i odpowiedniego podejścia. Kluczowe zasady:

1. **Poznaj rodzaj żeliwa** - od tego zależy metoda
2. **Nie spiesz się** - spawaj krótkimi odcinkami
3. **Podkuwaj** - to nie opcja, to konieczność
4. **Chłodź powoli** - im wolniej, tym lepiej
5. **Używaj właściwych elektrod** - niklowe dla spawania na zimno

W TECHSPAW mamy wieloletnie doświadczenie w spawaniu żeliwa. Naprawialiśmy bloki silników, korpusy maszyn i elementy zabytkowe. Jeśli masz żeliwny element do naprawy, skontaktuj się z nami - ocenimy możliwości i zaproponujemy najlepsze rozwiązanie.
    `,
  },
  'przygotowanie-materialu-do-spawania': {
    title: 'Jak Prawidłowo Przygotować Materiał do Spawania',
    excerpt: 'Dobra spoina zaczyna się od przygotowania. Czyszczenie, fazowanie, dopasowanie - wszystko co musisz wiedzieć przed spawaniem.',
    image: '/gallery-4.jpg',
    category: 'Podstawy',
    author: 'Łukasz Kaźmierczak',
    date: '2023-12-28',
    readTime: '8 min',
    content: `
## Dlaczego przygotowanie jest tak ważne?

80% problemów ze spoinami wynika ze złego przygotowania materiału. Nawet najlepszy spawacz nie wykona dobrej spoiny na brudnym lub źle przygotowanym materiale. Inwestycja czasu w przygotowanie zawsze się zwraca.

## Czyszczenie materiału

### Usuwanie zanieczyszczeń organicznych

**Co usuwamy:**
- Oleje i smary
- Farby i lakiery
- Ślady po markerach
- Pozostałości klejów

**Jak czyścić:**
1. Acetón lub rozpuszczalnik - odtłuszczanie
2. Druciana szczotka - usuwanie luźnych zanieczyszczeń
3. Szlifierka z dyskiem lamelkowym - usuwanie powłok

**Ważne:** Nie używaj WD-40 ani silikonowych środków - zostawiają pozostałości!

### Usuwanie rdzy i zgorzeliny

**Metody:**
- Szczotka druciana (ręczna lub mechaniczna)
- Szlifierka kątowa z tarczą ścierną
- Piaskowanie (najskuteczniejsze)
- Trawienie chemiczne (dla stali nierdzewnej)

**Standard:** Metal powinien być błyszczący, bez śladów korozji w strefie spawania i minimum 25mm wokół.

### Czyszczenie aluminium

Aluminium wymaga szczególnej uwagi:
1. Odtłuść acetonem
2. Usuń warstwę tlenku szczotką ze stali nierdzewnej
3. Spawaj w ciągu 2-4 godzin od czyszczenia
4. Używaj szczotki dedykowanej tylko do aluminium

### Czyszczenie stali nierdzewnej

1. Odtłuść środkiem nie zawierającym chloru
2. Używaj narzędzi dedykowanych tylko do stali nierdzewnej
3. Usuń przebarwienia pastą do stali nierdzewnej
4. Nie używaj szczotek stalowych węglowych - korozja!

## Fazowanie krawędzi

### Dlaczego fazujemy?

- Zapewnia pełne przetopienie grubszych materiałów
- Umożliwia dostęp do nasady spoiny
- Pozwala na prawidłowe ułożenie warstw
- Zwiększa wytrzymałość połączenia

### Rodzaje przygotowania krawędzi

**I (bez fazowania):**
- Grubość: do 3mm (stal), do 4mm (aluminium)
- Szczelina: 0-2mm

**V (jednostronne):**
- Grubość: 3-20mm
- Kąt: 60° (łącznie)
- Próg: 1-2mm
- Szczelina: 2-3mm

**X (dwustronne):**
- Grubość: powyżej 15mm
- Kąt: 60° (łącznie)
- Pozwala spawać z obu stron
- Mniejsze odkształcenia

**U (jednostronne z zaokrągleniem):**
- Grubość: powyżej 20mm
- Mniejsza ilość spoiwa niż V
- Trudniejsze w wykonaniu

### Narzędzia do fazowania

1. **Szlifierka kątowa** - uniwersalna, dostępna
2. **Fazowarka** - precyzyjna, szybka
3. **Palnik tlenowo-acetylenowy** - dla grubych materiałów
4. **Frezarka** - precyzyjne przygotowanie

### Zasady fazowania

- Utrzymuj równomierny kąt na całej długości
- Zachowaj odpowiedni próg (nose)
- Usuń zadziory po fazowaniu
- Oczyść krawędzie przed spawaniem

## Dopasowanie elementów

### Szczelina spawalnicza

| Grubość materiału | Szczelina |
|-------------------|-----------|
| Do 3mm | 0-1mm |
| 3-6mm | 1-2mm |
| 6-12mm | 2-3mm |
| Powyżej 12mm | 2-4mm |

### Wyrównanie elementów

**Niedopuszczalne:**
- Przesunięcie większe niż 10% grubości
- Nierówna szczelina
- Luz między elementami

**Narzędzia:**
- Kątownik spawalniczy
- Poziomnica
- Suwmiarka
- Szczelinomierz

### Punktowanie (sczepianie)

1. Oczyść miejsca pod punkty
2. Wykonaj punkty na tyle mocne, by utrzymać pozycję
3. Rozmieść równomiernie (co 100-200mm)
4. Dla cienkich blach - punkty krótkie, niskie parametry
5. Usuń wadliwe punkty przed spawaniem

## Pozycjonowanie i mocowanie

### Zasady mocowania

- Elementy muszą być unieruchomione
- Mocowanie nie może wprowadzać naprężeń
- Zapewnij dostęp do strefy spawania
- Przewidź odkształcenia spawalnicze

### Kompensacja odkształceń

**Ustawienie wstępne:**
- Ustaw elementy z lekkim przeciwwygięciem
- Kąt kompensacji zależy od grubości i długości spoiny
- Doświadczenie + próby = sukces

**Sekwencja spawania:**
- Spawaj naprzemiennie z obu stron
- Stosuj spawanie wsteczne
- Rozkładaj ciepło równomiernie

## Specyfika różnych materiałów

### Stal węglowa
- Standardowe przygotowanie
- Fazowanie od 3mm
- Szczelina 1-3mm

### Stal nierdzewna
- Tylko narzędzia dedykowane
- Unikaj zanieczyszczeń węglem
- Fazowanie od 2mm
- Mniejsze parametry = mniej odkształceń

### Aluminium
- Czyszczenie bezpośrednio przed spawaniem
- Fazowanie od 4mm
- Szersza szczelina (materiał się rozszerza)
- Podkładki ceramiczne lub stalowe dla pełnego przetopu

### Żeliwo
- Dokładne odtłuszczenie
- Fazowanie szersze (80-90°)
- Przewiercić końce pęknięć
- Wstępne podgrzanie

## Kontrola przygotowania

### Lista kontrolna przed spawaniem:

- [ ] Materiał odtłuszczony
- [ ] Brak rdzy i zgorzeliny
- [ ] Kąty fazowania zgodne z WPS
- [ ] Szczelina w tolerancji
- [ ] Elementy wyrównane
- [ ] Mocowanie stabilne
- [ ] Punkty sczepne wykonane prawidłowo
- [ ] Dostęp do strefy spawania zapewniony

## Podsumowanie

Prawidłowe przygotowanie materiału to:
1. **Czystość** - bez smarów, rdzy, farb
2. **Geometria** - odpowiednie fazowanie
3. **Dopasowanie** - właściwa szczelina i wyrównanie
4. **Mocowanie** - stabilna pozycja

Pamiętaj: lepiej poświęcić godzinę na przygotowanie niż dzień na naprawę wadliwej spoiny. W TECHSPAW każde zlecenie zaczynamy od dokładnego przygotowania - to podstawa naszej jakości.
    `,
  },
  'najczestsze-bledy-spawaczy': {
    title: '10 Najczęstszych Błędów Spawaczy i Jak Ich Unikać',
    excerpt: 'Lista typowych pomyłek popełnianych nawet przez doświadczonych spawaczy. Praktyczne wskazówki jak poprawić jakość spoin.',
    image: '/gallery-5.jpg',
    category: 'Porady',
    author: 'Łukasz Kaźmierczak',
    date: '2023-12-20',
    readTime: '11 min',
    content: `
## Wprowadzenie

Każdy spawacz, niezależnie od doświadczenia, popełnia błędy. Różnica polega na tym, że doświadczeni spawacze potrafią je rozpoznać i szybko skorygować. W tym artykule omówimy 10 najczęstszych błędów i sposoby ich unikania.

## 1. Spawanie na brudnym materiale

### Problem
To błąd numer jeden - odpowiada za większość wadliwych spoin. Olej, rdza, farba i wilgoć powodują porowatość, brak wtopienia i słabe właściwości mechaniczne.

### Rozwiązanie
- Zawsze czyść materiał przed spawaniem
- Używaj acetonu do odtłuszczania
- Usuwaj rdzę szlifierką lub szczotką
- Oczyść strefę min. 25mm od spoiny

### Zapamiętaj
"Czysta powierzchnia = czysta spoina"

## 2. Niewłaściwe parametry spawania

### Problem
Zbyt niski prąd = brak wtopienia, zimne nakładki
Zbyt wysoki prąd = przepalenia, nadmierne rozbryzgi
Zła prędkość = nierówna spoina, wady wewnętrzne

### Rozwiązanie
- Zacznij od parametrów zalecanych przez producenta
- Wykonaj próbne spoiny na odpadkach
- Dostosuj parametry do konkretnych warunków
- Prowadź dziennik ustawień

### Orientacyjne parametry MIG dla stali:
| Grubość | Prąd | Napięcie | Drut |
|---------|------|----------|------|
| 1-2mm | 60-100A | 16-19V | 0.8mm |
| 3-4mm | 120-170A | 19-22V | 0.8-1.0mm |
| 5-6mm | 170-220A | 22-26V | 1.0-1.2mm |

## 3. Zły kąt palnika

### Problem
- Zbyt stromy kąt = płytkie wtopienie
- Zbyt płaski kąt = podtopienie krawędzi
- Zły kąt poprzeczny = asymetryczna spoina

### Rozwiązanie
**Ogólna zasada:**
- Kąt wzdłużny: 10-15° od pionu (w kierunku spawania)
- Kąt poprzeczny: równo między elementami

**Dla spoiny pachwinowej:**
- 45° między ramionami
- Lekkie wahania dla lepszego wtopienia

## 4. Nieodpowiednia prędkość spawania

### Problem
**Za wolno:**
- Nadmierna penetracja (przepalenia)
- Przegrzanie materiału
- Duże odkształcenia
- Szeroka, wypukła spoina

**Za szybko:**
- Brak wtopienia
- Wąska, wysoka spoina
- Podtopienia
- Przyklejenia

### Rozwiązanie
- Obserwuj jeziorko spawalnicze
- Utrzymuj stałą szerokość jeziorka
- Dopasuj prędkość do parametrów
- Ćwicz równomierny ruch

## 5. Brak lub niewłaściwa osłona gazowa

### Problem
- Porowatość spoiny
- Utlenianie jeziorka
- Zła geometria spoiny
- Rozpryski

### Przyczyny:
- Za mały przepływ gazu
- Za duży przepływ (turbulencje)
- Przeciągi
- Zatkana dysza
- Nieszczelności w układzie

### Rozwiązanie
- Przepływ dla MIG: 12-18 l/min
- Przepływ dla TIG: 8-12 l/min
- Sprawdzaj stan dysz
- Osłoń miejsce spawania
- Testuj szczelność układu

## 6. Złe przygotowanie złącza

### Problem
- Niewłaściwy kąt fazowania
- Za duża/mała szczelina
- Przesunięcie elementów
- Słabe punkty sczepne

### Rozwiązanie
- Stosuj się do procedur WPS
- Używaj szablonów i sprawdzianów
- Wykonuj solidne punkty sczepne
- Kontroluj przed spawaniem

## 7. Ignorowanie kolejności spawania

### Problem
Przypadkowa kolejność spawania prowadzi do:
- Dużych odkształceń
- Naprężeń resztkowych
- Pęknięć
- Problemów wymiarowych

### Rozwiązanie
**Zasady kolejności:**
1. Spawaj od środka na zewnątrz
2. Równoważ ciepło (spawaj naprzemiennie)
3. Stosuj technikę wsteczną
4. Planuj sekwencję przed spawaniem

## 8. Niewłaściwa technika zakańczania spoiny

### Problem
- Krater na końcu spoiny (osłabienie)
- Pęknięcia w kraterze
- Nierówne zakończenie
- Brak wypełnienia

### Rozwiązanie
**Dla MIG:**
- Cofnij się na 10-15mm
- Zmniejsz prędkość na końcu
- Użyj funkcji crater fill

**Dla TIG:**
- Stopniowo zmniejszaj prąd
- Wypełnij krater spoiwem
- Nie odrywaj łuku nagle

**Dla MMA:**
- Cofnij się i przyspiesz
- Wypełnij krater drobnymi ruchami

## 9. Zaniedbywanie kontroli wizualnej

### Problem
Spawanie bez sprawdzania efektów prowadzi do:
- Powtarzania tych samych błędów
- Kumulacji wad
- Kosztownych poprawek
- Problemów z jakością

### Rozwiązanie
**Kontroluj na bieżąco:**
- Po każdym ściegu (wielowarstwowe)
- Szukaj: podtopień, porów, pęknięć, przyklejeń
- Poprawiaj natychmiast
- Dokumentuj obserwacje

**Lista kontrolna spoiny:**
- [ ] Równomierna szerokość
- [ ] Brak podtopień
- [ ] Brak porów widocznych
- [ ] Płynne przejścia
- [ ] Brak pęknięć

## 10. Pomijanie środków ochrony osobistej

### Problem
Spawanie bez odpowiedniej ochrony powoduje:
- Uszkodzenie wzroku (łuk spawalniczy)
- Oparzenia skóry
- Choroby płuc (dymy spawalnicze)
- Urazy słuchu

### Rozwiązanie
**Zawsze używaj:**
- Przyłbicy spawalniczej (min. DIN 10-13)
- Rękawic spawalniczych
- Odzieży ochronnej
- Obuwia roboczego
- Wentylacji/maski z filtrem

**Pamiętaj:**
Żadna spoina nie jest warta Twojego zdrowia!

## Dodatkowe wskazówki

### Prowadź dziennik spawania
- Zapisuj parametry dla różnych materiałów
- Notuj problemy i rozwiązania
- Dokumentuj udane ustawienia

### Ćwicz regularnie
- Spawanie to umiejętność praktyczna
- Każda przerwa wymaga "rozgrzewki"
- Próbuj nowe techniki na odpadkach

### Ucz się od innych
- Obserwuj doświadczonych spawaczy
- Pytaj o ich metody
- Dziel się swoimi doświadczeniami

### Dbaj o sprzęt
- Czyść dysze i prowadniki
- Sprawdzaj stan przewodów
- Serwisuj spawarkę regularnie

## Podsumowanie

Unikanie tych 10 błędów znacząco podniesie jakość Twoich spoin:

1. Zawsze czyść materiał
2. Dobieraj właściwe parametry
3. Utrzymuj prawidłowy kąt
4. Kontroluj prędkość spawania
5. Zapewnij odpowiednią osłonę gazową
6. Przygotuj złącze prawidłowo
7. Planuj kolejność spawania
8. Zakańczaj spoiny prawidłowo
9. Kontroluj swoją pracę
10. Chroń swoje zdrowie

Każdy z nas popełnia błędy - ważne, by wyciągać z nich wnioski i ciągle się doskonalić. W TECHSPAW nieustannie pracujemy nad jakością, bo wiemy że doskonałość to proces, nie cel.
    `,
  },
  'spawanie-konstrukcji-stalowych': {
    title: 'Spawanie Konstrukcji Stalowych - Od Projektu do Realizacji',
    excerpt: 'Kompleksowy przewodnik po spawaniu konstrukcji stalowych. Normy, certyfikaty, techniki i kontrola jakości.',
    image: '/gallery-6.jpg',
    category: 'Profesjonalne',
    author: 'Łukasz Kaźmierczak',
    date: '2023-12-15',
    readTime: '14 min',
    content: `
## Wprowadzenie do spawania konstrukcyjnego

Spawanie konstrukcji stalowych to jedna z najbardziej odpowiedzialnych dziedzin spawalnictwa. Błędy mogą prowadzić do katastrof budowlanych, dlatego ta praca wymaga najwyższych kwalifikacji, przestrzegania norm i rygorystycznej kontroli jakości.

## Normy i certyfikacja

### Normy europejskie

**EN 1090 - Wykonywanie konstrukcji stalowych:**
- EN 1090-1: Ogólne zasady i wymagania
- EN 1090-2: Wymagania techniczne dla konstrukcji stalowych

**Klasy wykonania (EXC):**
- EXC1: Podstawowe wymagania (wiaty, proste konstrukcje)
- EXC2: Standardowe wymagania (większość budynków)
- EXC3: Wysokie wymagania (mosty, hale o dużych rozpiętościach)
- EXC4: Najwyższe wymagania (elektrownie, konstrukcje specjalne)

### Certyfikacja spawaczy

**EN ISO 9606-1:**
- Określa wymagania dla spawaczy stali
- Egzamin teoretyczny i praktyczny
- Certyfikat ważny 2-3 lata
- Wymaga przedłużenia przez pracę lub re-egzamin

**Zakresy certyfikacji:**
- Metoda spawania (111, 135, 136, 141)
- Rodzaj złącza (BW, FW)
- Pozycja spawania (PA, PB, PC, PD, PE, PF, PG)
- Grubość materiału
- Rodzaj materiału

## Dokumentacja techniczna

### WPS (Welding Procedure Specification)

Instrukcja technologiczna spawania musi zawierać:
1. Materiał podstawowy i spoiwo
2. Przygotowanie złącza
3. Parametry spawania
4. Pozycję spawania
5. Temperaturę podgrzewania
6. Obróbkę cieplną
7. Wymagania kontroli jakości

### WPQR (Welding Procedure Qualification Record)

Protokół kwalifikowania technologii:
- Dokumentuje badania próbek
- Potwierdza poprawność WPS
- Wymagany przed produkcją

## Przygotowanie konstrukcji

### Cięcie elementów

**Metody:**
1. Cięcie tlenowe - dla grubych blach, tanie
2. Cięcie plazmowe - szybsze, cieńsze blachy
3. Cięcie laserowe - najdokładniejsze
4. Cięcie mechaniczne - piły, gilotyny

**Tolerancje:**
- Długość: ±1mm na metr (max ±3mm)
- Kąty: ±0.5°
- Prostoliniowość: 1mm na metr

### Przygotowanie krawędzi

**Dla blach 8-15mm (złącze V):**
- Kąt fazowania: 60° łącznie
- Próg: 1-2mm
- Szczelina: 2-3mm

**Dla blach powyżej 15mm (złącze X lub K):**
- Spawanie z dwóch stron
- Mniejsze odkształcenia
- Mniejsza ilość spoiwa

### Montaż i sczepianie

1. Kontrola wymiarów przed montażem
2. Montaż na stole lub w przyrządach
3. Sprawdzenie geometrii
4. Punktowanie elektrodami zgodnymi z WPS
5. Kontrola po sczepieniu

## Techniki spawania konstrukcji

### Spawanie wielowarstwowe

**Kolejność warstw:**
1. Warstwa graniowa (root pass) - pełne przetopienie
2. Wypełnienie (fill passes) - budowanie spoiny
3. Warstwa licowa (cap pass) - estetyka, właściwości

**Zasady:**
- Czyść żużel między warstwami
- Kontroluj temperaturę międzyściegową
- Zachowuj ciągłość procesu

### Sekwencja spawania

**Cel:** Minimalizacja odkształceń i naprężeń

**Techniki:**
1. **Spawanie wsteczne** - spawamy w kierunku przeciwnym do postępu
2. **Spawanie skokowe** - naprzemienne odcinki
3. **Spawanie symetryczne** - równocześnie z obu stron
4. **Balansowanie ciepła** - równomierne rozłożenie

### Spawanie w różnych pozycjach

**PA (podolna):**
- Najłatwiejsza, najwyższa wydajność
- Preferowana gdy możliwa

**PB (naboczna):**
- Spoiny pachwinowe poziome
- Wymaga kontroli kąta

**PC (naścienna):**
- Spoiny czołowe poziome
- Kontrola grawitacji jeziorka

**PF (pionowa w górę):**
- Trudna, wymaga techniki "wahadłowej"
- Niższe parametry

**PE (pułapowa):**
- Najtrudniejsza
- Wymaga doświadczenia
- Krótkie ściegi

## Kontrola jakości

### Badania nieniszczące (NDT)

**Badania wizualne (VT):**
- 100% spoin
- Pierwsza linia kontroli
- Wykrywa wady powierzchniowe

**Badania penetracyjne (PT):**
- Dla wykrycia pęknięć powierzchniowych
- Kolorowe lub fluorescencyjne

**Badania magnetyczno-proszkowe (MT):**
- Dla stali ferromagnetycznych
- Wykrywa wady powierzchniowe i przypowierzchniowe

**Badania ultradźwiękowe (UT):**
- Dla wad wewnętrznych
- Grubości powyżej 8mm
- Wymaga kwalifikowanego operatora

**Badania radiograficzne (RT):**
- "Zdjęcie rentgenowskie" spoiny
- Dokumentacja trwała
- Wykrywa wady wewnętrzne

### Kryteria akceptacji

Według EN ISO 5817 - poziomy jakości:
- **Poziom D** - najniższy (rzadko stosowany)
- **Poziom C** - standardowy (większość konstrukcji)
- **Poziom B** - wysoki (konstrukcje odpowiedzialne)

### Dokumentacja jakości

**Dla każdej konstrukcji:**
1. Certyfikaty materiałowe (3.1 lub 3.2)
2. Certyfikaty spawaczy
3. WPS i WPQR
4. Protokoły badań NDT
5. Protokoły niezgodności
6. Deklaracja zgodności

## Typowe problemy i rozwiązania

### Odkształcenia

**Przyczyny:**
- Niesymetryczne wprowadzanie ciepła
- Zła kolejność spawania
- Brak przyrządów

**Rozwiązania:**
- Planuj sekwencję
- Używaj przyrządów
- Kompensuj wstępnie
- Prostuj po spawaniu

### Pęknięcia

**Przyczyny:**
- Zbyt szybkie chłodzenie
- Wysoka zawartość węgla
- Wodór w spoinie
- Wysokie naprężenia

**Rozwiązania:**
- Podgrzewanie wstępne
- Kontrola temperatury międzyściegowej
- Suche elektrody
- Wolne chłodzenie

### Porowatość

**Przyczyny:**
- Zanieczyszczenia
- Wilgoć
- Zła osłona gazowa
- Przeciągi

**Rozwiązania:**
- Czyszczenie materiału
- Suszenie elektrod
- Sprawdzenie przepływu gazu
- Osłona miejsca spawania

## Bezpieczeństwo na budowie

### Zagrożenia specyficzne

1. Praca na wysokości
2. Ruchome elementy konstrukcji
3. Ograniczona przestrzeń
4. Warunki atmosferyczne
5. Inne prace równoległe

### Środki ochronne

- Plan BIOZ dla spawania
- Uprawnienia wysokościowe
- Zabezpieczenie strefy
- Ochrona przeciwpożarowa
- Wentylacja/odsysanie

## Podsumowanie

Spawanie konstrukcji stalowych wymaga:
1. **Kwalifikacji** - certyfikaty spawaczy
2. **Procedur** - zatwierdzone WPS
3. **Kontroli** - badania NDT
4. **Dokumentacji** - pełna śledzialność
5. **Bezpieczeństwa** - ochrona ludzi

W TECHSPAW realizujemy spawanie konstrukcji zgodnie z EN 1090. Posiadamy doświadczenie w spawaniu:
- Konstrukcji hal i wiat
- Schodów i balustrad
- Elementów maszyn
- Konstrukcji nietypowych

Skontaktuj się z nami, jeśli potrzebujesz profesjonalnego spawania konstrukcji stalowych.
    `,
  },
}

const articleSlugs = Object.keys(articles)

export async function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]
  if (!article) {
    return { title: 'Artykuł nie znaleziony - TECHSPAW' }
  }
  return {
    title: `${article.title} - TECHSPAW Blog`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) {
    notFound()
  }

  const currentIndex = articleSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? articleSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < articleSlugs.length - 1 ? articleSlugs[currentIndex + 1] : null

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
            href="/blog" 
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Wszystkie artykuły
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <header className="pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-cyan-500/90 text-black text-sm font-bold rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5 text-cyan-400" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              {new Date(article.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              {article.readTime} czytania
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-cyan-500/30">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-2xl border border-cyan-500/30">
            <div dangerouslySetInnerHTML={{ __html: formatContent(article.content) }} />
          </div>
        </div>
      </article>

      {/* Article Navigation */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-between">
          {prevSlug ? (
            <Link 
              href={`/blog/${prevSlug}`}
              className="flex items-center gap-3 glass px-6 py-4 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all group flex-1"
            >
              <ChevronLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="text-xs text-gray-500 block">Poprzedni artykuł</span>
                <span className="text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {articles[prevSlug].title}
                </span>
              </div>
            </Link>
          ) : <div className="flex-1" />}
          
          {nextSlug ? (
            <Link 
              href={`/blog/${nextSlug}`}
              className="flex items-center gap-3 glass px-6 py-4 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all group flex-1 justify-end"
            >
              <div className="text-right">
                <span className="text-xs text-gray-500 block">Następny artykuł</span>
                <span className="text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {articles[nextSlug].title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>

      {/* CTA Section */}
      <section className="px-6 pb-20">
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

function formatContent(content: string): string {
  const lines = content.trim().split('\n')
  const result: string[] = []
  let inList = false
  let inTable = false
  let tableRows: string[] = []
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    
    // Skip empty lines
    if (!line.trim()) {
      if (inList) {
        result.push('</ul>')
        inList = false
      }
      if (inTable) {
        result.push(`<table class="w-full border-collapse my-6 text-sm">${tableRows.join('')}</table>`)
        tableRows = []
        inTable = false
      }
      continue
    }
    
    // Convert bold
    line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    
    // Headers
    if (line.startsWith('## ')) {
      if (inList) { result.push('</ul>'); inList = false }
      result.push(`<h2 class="text-2xl font-bold text-cyan-400 mt-10 mb-4">${line.slice(3)}</h2>`)
      continue
    }
    if (line.startsWith('### ')) {
      if (inList) { result.push('</ul>'); inList = false }
      result.push(`<h3 class="text-xl font-semibold text-cyan-300 mt-8 mb-3">${line.slice(4)}</h3>`)
      continue
    }
    
    // Tables
    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').filter(c => c.trim())
      if (cells.some(c => /^-+$/.test(c.trim()))) continue // Skip separator row
      
      if (!inTable) {
        inTable = true
        // First row is header
        const headerRow = cells.map(c => `<th class="px-4 py-3 text-left bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">${c.trim()}</th>`).join('')
        tableRows.push(`<thead><tr>${headerRow}</tr></thead><tbody>`)
      } else {
        const dataRow = cells.map(c => `<td class="px-4 py-2 border border-cyan-500/20 text-gray-300">${c.trim()}</td>`).join('')
        tableRows.push(`<tr class="hover:bg-cyan-500/5">${dataRow}</tr>`)
      }
      continue
    } else if (inTable) {
      tableRows.push('</tbody>')
      result.push(`<table class="w-full border-collapse my-6 text-sm">${tableRows.join('')}</table>`)
      tableRows = []
      inTable = false
    }
    
    // Lists
    if (line.startsWith('- ') || /^\d+\. /.test(line)) {
      if (!inList) {
        result.push('<ul class="space-y-2 my-4 ml-4">')
        inList = true
      }
      const content = line.startsWith('- ') ? line.slice(2) : line.replace(/^\d+\. /, '')
      result.push(`<li class="text-gray-300 pl-4 border-l-2 border-cyan-500/40">${content}</li>`)
      continue
    } else if (inList) {
      result.push('</ul>')
      inList = false
    }
    
    // Regular paragraphs
    result.push(`<p class="text-gray-300 leading-relaxed mb-4">${line}</p>`)
  }
  
  // Close any open tags
  if (inList) result.push('</ul>')
  if (inTable) {
    tableRows.push('</tbody>')
    result.push(`<table class="w-full border-collapse my-6 text-sm">${tableRows.join('')}</table>`)
  }
  
  return result.join('\n')
}

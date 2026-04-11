import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEWieSVMFunktioniert() {
  const faq: FaqItem[] = [
    {
      q: "Was ist ein SVM in einfachen Worten?",
      a: "Ein SVM (Support Vector Machine) ist ein Klassifikationsalgorithmus, der optimale Grenzen zwischen mehreren Kategorien in einem hochdimensionalen Raum zieht. Stellen Sie sich 3963 Punkte in einem 56-dimensionalen Raum vor: Das SVM findet die Flaechen, die die 11 Pannengruppen am besten trennen. Ein neuer Klang wird klassifiziert, indem man schaut, auf welcher Seite der Flaechen er liegt.",
    },
    {
      q: "Warum genau 56 Merkmale?",
      a: "Weil das die Zahl ist, die den besten Kompromiss zwischen Praezision und Geschwindigkeit fuer unsere Pipeline liefert. 40 MFCC-Koeffizienten decken das perzeptuelle Timbre ab, 5 spektrale Merkmale fuegen allgemeinere Informationen hinzu (Zentroid, Bandbreite, Rolloff, Fluss, Kontrast), einige zeitliche Metriken vervollstaendigen das Ganze. Darueber hinaus stagniert die Praezision, aber die Rechenzeit steigt.",
    },
    {
      q: "Warum RBF-Kernel und kein linearer?",
      a: "Weil die Pannenklassen im 56-dimensionalen Raum nicht durch Geraden trennbar sind. Der RBF-Kernel (Radial Basis Function) projiziert die Daten implizit in einen unendlich-dimensionalen Raum, wo die Grenzen linear werden. Mathematisch elegant und konkret effektiv: Die Praezision steigt von 78&nbsp;% mit linearem Kernel auf 91.3&nbsp;% mit RBF.",
    },
    {
      q: "Wie gross ist das finale Modell?",
      a: "Etwa 12&nbsp;MB fuer die serialisierte .pkl-Datei. Das ist klein im Vergleich zu einem tiefen neuronalen Netz (oft mehrere hundert MB). Diese Leichtigkeit ist ein konkreter Vorteil: Das Modell laedt in weniger als einer Sekunde, eine Vorhersage dauert etwa 30&nbsp;ms auf einem Standardserver.",
    },
    {
      q: "Wie wird die Balance zwischen den 11 Klassen verwaltet?",
      a: "Der Datensatz ist nicht perfekt ausbalanciert: Manche Klassen haben mehr Beispiele als andere (air leak 1005, normal engine 269). Wir nutzen eine Klassenpondierung im Training, um dieses Ungleichgewicht auszugleichen, damit das Modell nicht die Mehrheitsklassen zu Lasten der Minderheiten bevorzugt.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Wie unser SVM funktioniert: Die Technologie hinter dem Klang-Scan"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={11}
        category="Technologie"
      >
        <p>
          Wenn Sie neugierig sind, was wirklich passiert, wenn Sie auf
          den &laquo;Scan starten&raquo;-Knopf der AutoDiag-EU-App
          druecken, ist das Folgende fuer Sie. Keine Marketing-Allgemeinheiten:
          eine echte Pipeline-Tour, Schicht fuer Schicht, mit den
          technischen Entscheidungen und den Gruenden dahinter. Das System
          laeuft auf einem Python-Backend mit scikit-learn und verarbeitet
          jede Aufnahme in sieben Schritten, sieben Schichten, die eine
          Rohaudiodatei in eine klare Diagnose und einen Konfidenzwert
          verwandeln.
        </p>

        <h2>Schicht 1: Qualitaetskontrolle</h2>
        <p>
          Vor jeder Analyse pruefen wir, ob die Aufnahme auswertbar ist.
          Lautstaerke zu niedrig? Ablehnung. Saettigung erkannt?
          Ablehnung. Dauer zu kurz (unter 3&nbsp;Sekunden)? Ablehnung.
          Hintergrundgeraeusch ueberdeckt Motorsignal? Warnung an den
          Nutzer. Diese mit librosa implementierte Qualitaetspruefung
          verhindert, dass fantasievolle Ergebnisse aus schlechten
          Aufnahmen entstehen. Eine Investition, die die effektive
          Zuverlaessigkeit in realen Bedingungen erhoeht.
        </p>

        <h2>Schicht 2: Entstoerung</h2>
        <p>
          Auch mit guter Aufnahme gibt es immer Stoergeraeusche: Wind,
          Verkehr, Heizung, Stimmen. Schicht 2 wendet einen Wiener-Filter
          via die noisereduce-Bibliothek an, um das Hintergrundgeraeusch
          zu schaetzen und zu entfernen, ohne das Nutzsignal zu
          beschaedigen. Der Filter arbeitet auf spektraler Schaetzung: Er
          identifiziert die von stationaerem Rauschen dominierten
          Frequenzbaender und reduziert dort die Amplitude, waehrend er
          die Transienten erhaelt, die die interessante Information sind.
        </p>

        <h2>Schicht 3: Extraktion der 56 Merkmale</h2>
        <p>
          Hier wird aus Audio Mathematik. Das Signal wird in ueberlappende
          25-ms-Fenster geschnitten, jedes Fenster durchlaeuft eine
          Fourier-Transformation, dann eine Projektion auf die Mel-Skala,
          die der menschlichen Timbrewahrnehmung entspricht, dann eine
          diskrete Kosinustransformation, die die 40 MFCC-Koeffizienten
          liefert. Dann 5 spektrale Merkmale (Spektralzentroid,
          Bandbreite, Rolloff, Spektralfluss, Bandkontrast), und einige
          zeitliche Metriken wie die Energiehuellkurve und die
          Nulldurchgangsrate. Total: 56 numerische Werte pro Aufnahme.
        </p>

        <h2>Schicht 4: Klassifikation durch SVM</h2>
        <p>
          Der 56-Werte-Vektor wird an den SVM-Klassifizierer uebergeben.
          Das Modell wurde auf 3963 etikettierten Aufnahmen trainiert,
          mit etwa 80&nbsp;% Training und 20&nbsp;% Test. Der RBF-Kernel
          projiziert die Daten in einen unendlich-dimensionalen Raum, wo
          die Klassengrenzen linear werden. Die Hyperparameter C
          (Regularisierung) und gamma (Kernelbreite) wurden per Gridsearch
          mit 5-fach Kreuzvalidierung optimiert. Endergebnis: 91.3&nbsp;%
          Praezision auf dem unabhaengigen Testset.
        </p>

        <h2>Schicht 5: OBD2-Fusion</h2>
        <p>
          Wenn ein OBD2-Dongle beim Scan verbunden ist, holt das System
          die aktiven Fehlercodes und Live-Daten (Drehzahl, Last,
          Temperatur, Sondenspannungen). Diese Infos werden mit der
          Audio-Vorhersage per Expertenregeln gekreuzt: Ein Code{" "}
          <Link href="/de/codes/p0300">P0300</Link>{" "}
          verstaerkt eine Misfire-Vorhersage, ein{" "}
          <Link href="/de/codes/p0420">P0420</Link>{" "}
          verstaerkt exhaust leak, ein{" "}
          <Link href="/de/codes/p0325">P0325</Link>{" "}
          verstaerkt knock usw. Die Fusion kann die finale Konfidenz um
          mehrere Punkte erhoehen, wenn beide Quellen uebereinstimmen,
          oder senken, wenn sie divergieren.
        </p>

        <h2>Schicht 6: Interpretation durch Claude API</h2>
        <p>
          Die Rohausgabe des SVM ist nuetzlich fuer einen Mechaniker,
          aber schwer lesbar fuer einen Fahrer. Schicht 6 nutzt die
          Claude API, um die Vorhersage in eine klare Nachricht zu
          verwandeln: Pannenerklaerung, wahrscheinliche Ursachen, Schwere,
          ungefaehre Kosten, sofortige Massnahmen. Wichtig: Claude
          erhaelt nie das Rohaudio. Es erhaelt nur die vorhergesagte
          Klasse, die Konfidenz und den OBD2-Kontext. Der
          Konfidenzprozentsatz kommt immer vom SVM, nie von Claude. Das
          ist eine absolute Pipelineregel.
        </p>

        <h2>Schicht 7: Anzeige und Schwellen</h2>
        <p>
          Die letzte Schicht, auf der Frontend-Seite, wendet die
          Konfidenzschwellen an, um Farbe und Ton der Nachricht zu
          bestimmen. Mindestens 80&nbsp;% Konfidenz: gruen, zuverlaessige
          Diagnose, Aktion empfohlen. Zwischen 60 und 79&nbsp;%: orange,
          zu beobachten, zweiter Scan empfohlen. Zwischen 30 und 59&nbsp;%:
          hellgelb, indikatives Ergebnis. Unter 30&nbsp;%: grau, nicht
          schluessig, Sie koennen den Scan unter besseren Bedingungen
          wiederholen. Diese Schwellen wurden auf realen Daten kalibriert.
        </p>

        <h2>Warum diese Architekturwahl</h2>
        <p>
          Wir haetten auf ein tiefes CNN setzen koennen, seit zehn Jahren
          Mode. Haben wir nicht gemacht aus drei Gruenden: Groesse unseres
          Datensatzes (3963 ist komfortabel fuer SVM, knapp fuer CNN),
          Latenzbeschraenkung (30&nbsp;ms fuer SVM, mehrere hundert ms
          fuer klassisches CNN), und Interpretierbarkeit (man kann mit
          SVM zu den einflussreichen Frequenzen zurueckgehen, mit tiefem
          Netz schwieriger). SVM ist eine pragmatische Wahl, keine
          Beschraenkung. Wenn unser Datensatz 15&nbsp;000 Samples
          erreicht, werden wir wahrscheinlich auf ein Hybrid CNN&nbsp;+
          SVM umsteigen, aber die 7-Schichten-Architektur bleibt. Zum
          Weiterlesen:{" "}
          <Link href="/de/blog/unhoerbare-geraeusche-ki-erkennt-was-ohr-nicht-hoert">
            die unhoerbaren Klaenge, die die KI erfasst
          </Link>{" "}
          und die{" "}
          <Link href="/de/blog/11-motorpannen-erkennbar-durch-klanganalyse">
            Liste der 11 erkennbaren Klassen
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

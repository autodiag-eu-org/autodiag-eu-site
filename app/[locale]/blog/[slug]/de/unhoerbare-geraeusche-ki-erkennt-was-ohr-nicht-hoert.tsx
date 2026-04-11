import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDESonsInaudibles() {
  const faq: FaqItem[] = [
    {
      q: "Kann mein Telefon wirklich Ultraschall aufnehmen?",
      a: "Ja, teilweise. Die meisten modernen Smartphones verwenden MEMS-Mikrofone mit linearer Antwort bis 20-22&nbsp;kHz und einer reduzierten aber nutzbaren Antwort bis 24&nbsp;kHz. Darueber faellt die Antwort ab. Fuer die Motordiagnose ist dieser Bereich mehr als ausreichend: fast alle Pannen-Signaturen liegen zwischen 50&nbsp;Hz und 16&nbsp;kHz.",
    },
    {
      q: "Hoert das menschliche Ohr wirklich bis 20&nbsp;kHz?",
      a: "Theoretisch ja, in jungen Jahren. In der Praxis faellt die Grenze nach dem 20. Lebensjahr um etwa 1&nbsp;kHz pro Dekade. Mit 50 Jahren ueberschreiten viele Menschen nicht mehr 13&nbsp;kHz. Schlimmer: die Empfindlichkeit sinkt weit vor der Schwelle, eine Frequenz bei 10&nbsp;kHz ist bereits 20&nbsp;dB weniger hoerbar als eine bei 1&nbsp;kHz.",
    },
    {
      q: "Warum von Infraschall bei einem Motor sprechen?",
      a: "Grosse rotierende Massen &mdash; Kurbelwelle, Schwungrad, Kupplung &mdash; erzeugen sehr niederfrequente Schwingungen, manchmal unter 20&nbsp;Hz. Dieser Infraschall ist unhoerbar, ein Mikrofon nimmt ihn aber auf. Eine Unwucht der Kurbelwelle kann bei 12-15&nbsp;Hz auftreten, ein fuer das Ohr voellig tauber Bereich.",
    },
    {
      q: "Ist ein externes Mikrofon praeziser als das Telefon?",
      a: "Ein kalibriertes Messmikrofon ist genauer, ja, aber das moderne Smartphone-Mikrofon reicht fuer die Diagnose. Wichtig ist, dass die Antwort von Messung zu Messung reproduzierbar ist. Die KI braucht keine absolute Praezision, sie braucht Konsistenz, um Ihre Scans ueber die Zeit zu vergleichen.",
    },
    {
      q: "Warum klingen manche Pannen fuer mich gleich?",
      a: "Weil Ihr Ohr die Unterschiede glaettet. Es zerlegt ein Geraeusch nicht in Frequenzen, es nimmt eine Gesamttextur wahr. Zwei spektral sehr unterschiedliche Klaenge koennen Ihnen identisch erscheinen. Der SVM-Klassifizierer arbeitet dagegen in einem 56-dimensionalen Raum, in dem jede Frequenz ihr eigenes Gewicht hat.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Unhoerbare Geraeusche: was die KI erkennt und Ihr Ohr verpasst"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Technologie"
      >
        <p>
          Probieren Sie ein Experiment. Starten Sie Ihr Auto, lassen Sie
          es im Leerlauf und hoeren Sie aufmerksam zu. Sie hoeren den
          Motor, natuerlich, aber was nehmen Sie wirklich wahr? Ein
          gleichmaessiges Schnurren. Ein leises Auspuffrauschen.
          Vielleicht einen sich einschaltenden Luefter. Das war&apos;s.
          Doch ein Mikrofon am gleichen Ort nimmt weit mehr auf: etwa
          4000 mal mehr Information pro Sekunde als Ihr Gehirn bewusst
          verarbeitet. Dieser Unterschied ist das Jagdrevier der KI.
        </p>

        <h2>Der Mythos von 20&nbsp;Hz bis 20&nbsp;kHz</h2>
        <p>
          Ueberall wird wiederholt, dass das menschliche Ohr von 20&nbsp;Hz
          bis 20&nbsp;kHz hoert. Technisch korrekt, aber irrefuehrend.
          Dieser Bereich gilt nur fuer einen gesunden jungen Erwachsenen
          in absoluter Stille, mit reinen und intensiven Toenen. Im
          wirklichen Leben folgt die Hoerempfindlichkeit der
          Fletcher-Munson-Kurve: sehr empfindlich um 2-4&nbsp;kHz (die
          Frequenz der Stimme), sinkt sie stark in den Tiefen (10&nbsp;dB
          weniger bei 100&nbsp;Hz) und in den Hoehen (20&nbsp;dB weniger
          bei 10&nbsp;kHz). Fuegen Sie den Innenraumgeraeusch hinzu, und
          Ihr Ohr verliert die Haelfte der Pannen-Signaturen.
        </p>

        <h2>Was ein Smartphone-Mikrofon aufnimmt</h2>
        <p>
          Ein modernes MEMS-Mikrofon, wie es in Ihrem Telefon verbaut
          ist, hat eine flache Antwort zwischen 50&nbsp;Hz und 18&nbsp;kHz,
          mit einer Erweiterung bis 22&nbsp;kHz. Darueber faellt die
          Antwort, die Information bleibt aber fuer eine trainierte KI
          teilweise nutzbar bis 24&nbsp;kHz. Im Tieftonbereich geht das
          Mikrofon bis 20&nbsp;Hz hinunter, dorthin, wo das Ohr nur noch
          Vibrationen in der Brust spuert. Fuer eine KI bedeutet dieser
          erweiterte Bereich Zugang zu Signaturen, die fuer einen
          Menschen unsichtbar sind.
        </p>

        <h2>Konkrete Beispiele fuer Unhoerbarkeit</h2>
        <p>
          Ein Turbolader, dessen Lager anfaengt zu markieren, gibt einen
          Spektralpeak bei 14-16&nbsp;kHz ab, sehr fein und sehr kurz.
          Ihr Ohr, im Innenraum mit Luefter, sprechendem GPS und Strasse,
          wird ihn nie wahrnehmen. Der SVM identifiziert ihn sofort.
          Anderer Fall: ein Kolben, der anfaengt Spiel zu bekommen,
          erzeugt eine spezifische harmonische Signatur um 3&nbsp;kHz mit
          einer an die Drehzahl gebundenen Periodizitaet. Unhoerbar im
          Leerlauf fuer das Ohr, aber sehr klar in den 40 MFCC-Koeffizienten
          der Pipeline.
        </p>

        <h2>Infraschall: das versteckte Gebiet der grossen Defekte</h2>
        <p>
          Unter 20&nbsp;Hz nehmen Sie keine Klaenge mehr wahr, sondern
          Vibrationen. Eine Unwucht des Schwungrads erzeugt eine
          Oszillation um 12-15&nbsp;Hz, die den Schalthebel zittern
          laesst, die Sie aber nicht als &laquo;Geraeusch&raquo;
          identifizieren. Das Mikrofon nimmt diese niederfrequente
          Komponente auf, und der Klassifizierer isoliert sie in den
          Spektralmerkmalen. Gleiche Logik fuer Antriebsstrang-Fehler
          oder ermuedete Motorlager.
        </p>

        <h2>Warum 56 Merkmale?</h2>
        <p>
          Die Pipeline extrahiert 56 Zahlenwerte aus jeder Aufnahme:
          40 MFCC-Koeffizienten, die die Klangfarbe auf der perzeptuellen
          Mel-Skala beschreiben, plus 5 klassische spektrale Merkmale
          (Zentroid, Bandbreite, Rolloff, Fluss, spektraler Kontrast),
          plus einige zeitliche Metriken wie die Energiehuellkurve oder
          die Nulldurchgangsrate. Diese 56 Zahlen sind die mathematische
          Fotografie des Klangs, ausreichend, damit ein RBF-SVM 91,3&nbsp;%
          Praezision bei 11 Klassen erreicht.
        </p>

        <h2>Warum Ihr Gehirn Sie taeuscht</h2>
        <p>
          Das menschliche Gehirn tut etwas, was die KI nicht tut: es
          ignoriert, was es fuer unwichtig haelt. Das ist praktisch im
          Alltag (sonst wuerden Sie jedes Kleidungsstueck hoeren, das
          gegen Ihre Haut reibt), aber katastrophal fuer die Diagnose.
          Ihr Gehirn gewoehnt sich in Sekunden an den Klang Ihres
          Motors, und nach einem Monat langsamer Verschlechterung hat
          es den neuen Klang bereits als &laquo;normal&raquo; integriert.
          Die KI hat 3963 Trainingsreferenzen im Kopf und gewoehnt sich
          an nichts.
        </p>

        <h2>Die Signatur luegt nie</h2>
        <p>
          Ein Klang kann Ihnen harmlos vorkommen, aber eine erdrueckende
          Signatur enthalten. Das ist der ganze Sinn des Klang-Scans:
          Ihnen ein Ohr zu bieten, das nicht ermuedet, sich nicht
          gewoehnt und jede Aufnahme mit einem statistischen Referenzsatz
          vergleicht. Um weiter zu gehen, entdecken Sie{" "}
          <Link href="/de/blog/comment-fonctionne-svm-technologie-scan-sonore">
            wie der SVM die Daten intern verarbeitet
          </Link>
          , oder die vollstaendige Liste der{" "}
          <Link href="/de/blog/11-pannes-detectables-analyse-sonore-moteur">
            11 erkennbaren Pannen
          </Link>
          . Wenn Sie einen Code{" "}
          <Link href="/de/codes/p0325">P0325</Link>{" "}
          (Klopfsensor-Schaltung) sehen, bestaetigt ein Klang-Scan oft
          das Vorhandensein eines echten Klopfens, bevor der Sensor es
          sieht.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

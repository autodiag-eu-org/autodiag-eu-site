import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEMotorSpricht() {
  const faq: FaqItem[] = [
    {
      q: "Wie kann eine KI hoeren, was mein Ohr nicht hoert?",
      a: "Ein Smartphone-Mikrofon erfasst deutlich breitere Frequenzen als das menschliche Ohr. Das Ohr endet bei etwa 20&nbsp;kHz und verliert ab 15&nbsp;kHz an Empfindlichkeit, ein modernes Handymikrofon bleibt bis 22&nbsp;kHz linear und erfasst auch subtile Tieffrequenzen. Unser auf 3963 Aufnahmen trainiertes SVM analysiert diese Baender, die Ihr Ohr nicht verarbeitet.",
    },
    {
      q: "Wie hoch ist die Erfolgsquote des AutoDiag-EU-Klang-Scans?",
      a: "Das SVM-Modell erreicht 91.3&nbsp;% Praezision im Test, auf 11&nbsp;verschiedenen Pannenklassen. Diese Praezision wird auf einem vom Trainingsset unabhaengigen Testset berechnet. In der Praxis ist die Diagnose zuverlaessig, wenn die angezeigte Konfidenz 80&nbsp;% uebersteigt.",
    },
    {
      q: "Braucht man einen OBD2-Dongle fuer den Klang-Scan?",
      a: "Nein, der Klang-Scan funktioniert ohne Dongle. Er nutzt nur das Handymikrofon. Wenn aber ein ELM327-Dongle verbunden ist, fusioniert das System die OBD2-Daten mit der Audioanalyse fuer noch praezisere Diagnose. Das ist die Schicht 5 unserer Pipeline.",
    },
    {
      q: "Welche Pannentypen erkennt der Klang-Scan?",
      a: "Elf Pannenklassen: Motorklopfen, Ticken, Lagergeraeusch, Luftleck, Abgasleck, Turbopfeifen, Riemengeraeusch, Injektorgeraeusch, Zuendaussetzer, normaler Motor und Distributionsgeraeusch. Jede Klasse deckt mehrere reale mechanische Defekte ab.",
    },
    {
      q: "Ersetzt der Klang-Scan eine klassische OBD2-Diagnose?",
      a: "Nein, er ergaenzt sie. Das OBD2 liest die vom Steuergeraet gespeicherten Codes, der Klang-Scan erkennt die mechanischen Probleme, die das Steuergeraet nicht sieht: Lagerverschleiss, Riemenspannung, Distributionsspiel, Lagerschalenzustand. Zusammen decken sie 95&nbsp;% der haeufigen Pannen ab.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Ihr Motor spricht mit Ihnen: Wie die KI seine Geraeusche in Diagnose uebersetzt"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Klang-Scan"
      >
        <p>
          Ihr Motor ist gespraechig. Bei jeder Explosion in einem Zylinder,
          bei jeder Kurbelwellenumdrehung, bei jedem Riemendurchlauf
          sendet er Klaenge aus. Einige sind normal &mdash; das
          regelmaessige Schnurren im Leerlauf, das leise Pfeifen des
          Turboladers. Andere sind Warnsignale, die Ihr Ohr schlicht nicht
          dekodieren kann. Ein Klopfen bei 3&nbsp;kHz zweimal pro
          Umdrehung, eine Resonanz bei 80&nbsp;Hz im Leerlauf, ein Hauch
          bei 12&nbsp;kHz beim Beschleunigen: All das hoert Ihr Gehirn,
          aber es klassifiziert es als &laquo;normales Motorgeraeusch&raquo;.
          Die KI laesst sich nicht taeuschen.
        </p>

        <h2>Der Motor als Musikinstrument</h2>
        <p>
          Ein Vierzylinder bei 800&nbsp;U/min produziert etwa 26
          Explosionen pro Sekunde, also eine Grundfrequenz um 26&nbsp;Hz,
          mit Oberschwingungen bis zu mehreren Kilohertz. Wenn alles gut
          ist, folgen diese Oberschwingungen einem vorhersehbaren Muster.
          Sobald ein Element sich verschlechtert &mdash; ein Lager, das
          anfaengt zu markieren, ein rutschender Riemen, ein leckender
          Injektor &mdash; aendert sich das Spektrum. Neue Frequenzen
          erscheinen, alte verschwinden, das zeitliche Profil aendert
          sich. Diese Spektralsignatur hat unsere KI zu erkennen gelernt.
        </p>

        <h2>3963 Aufnahmen, 11 Klassen, eine Wahrheit</h2>
        <p>
          Um das Modell zu trainieren, haben wir 3963 etikettierte
          Audiodateien gesammelt: air leak (Luftlecks), knock (Klopfen),
          bearing noise (Lager), belt noise (Riemen), tick (Ticken),
          injector noise (Injektoren), exhaust leak (Abgaslecks), normal
          engine (gesunder Motor) und mehrere weitere Kategorien. Jede
          Aufnahme wurde von einem Menschen gehoert, um das Etikett zu
          bestaetigen, dann in 56 numerische Merkmale umgewandelt:
          40&nbsp;MFCC-Koeffizienten (Mel-Frequency Cepstral Coefficients),
          die das Timbre beschreiben, plus 5 zusaetzliche spektrale
          Merkmale, plus einige zeitliche Metriken. Der SVM-Klassifizierer
          mit RBF-Kernel lernt, diese 11 Klassen in diesem 56-dimensionalen
          Raum zu trennen.
        </p>

        <h2>Warum ein SVM und kein neuronales Netz?</h2>
        <p>
          Die Frage kommt oft: Warum eine Support Vector Machine statt
          eines tiefen neuronalen Netzes wie alle anderen? Die Antwort
          hat drei Punkte. Erstens funktioniert SVM sehr gut auf
          mittelgrossen Datenmengen (einige Tausend Beispiele), wo ein CNN
          Zehntausende braucht. Zweitens ist es viel schneller beim
          Training und in der Inferenz: Eine Vorhersage dauert
          30&nbsp;Millisekunden auf einem Standardserver. Drittens sind
          seine Entscheidungen interpretierbar: Man kann zurueck zu den
          Frequenzen gehen, die die Klassifikation ausgeloest haben. Ein
          konkreter Vorteil, wenn man dem Fahrer erklaeren muss, warum
          die KI denkt, sein Turbo sei muede.
        </p>

        <h2>Die Pipeline in 7 Schichten</h2>
        <p>
          Eine Aufnahme geht nicht direkt in den Klassifizierer. Sie
          durchlaeuft zuerst sechs Vor- und Fusionsstufen. Schicht 1:
          Qualitaetspruefung (ausreichende Lautstaerke, keine Saettigung,
          korrekte Dauer). Schicht 2: Entstoerung durch Wiener-Filter,
          um Hintergrundgeraeusche zu entfernen. Schicht 3: Extraktion der
          56 Merkmale. Schicht 4: Klassifikation durch SVM. Schicht 5:
          Fusion mit OBD2-Daten, wenn ein Dongle verbunden ist &mdash; ein
          P0300-Code verstaerkt eine Misfire-Vorhersage. Schicht 6:
          Interpretation durch Claude API, die das Rohergebnis in klare
          Beratung uebersetzt. Schicht 7: Anzeige mit Farbcode je nach
          Konfidenzschwelle.
        </p>

        <h2>Was der Motor wirklich sagt</h2>
        <p>
          Wenn Sie einen Scan starten, macht das System kein
          Momentbild. Es nimmt mehrere Sekunden Motor auf, nach
          Moeglichkeit in verschiedenen Drehzahlen, und extrahiert das
          dominante Muster. Ein Klopfen, das zweimal pro Umdrehung bei
          2000&nbsp;U/min auftritt, aber bei 3500&nbsp;U/min verschwindet,
          ist kein Lagerdefekt &mdash; es ist wahrscheinlich ein
          Distributionsspiel. Ein kontinuierliches Pfeifen, das mit der
          Drehzahl steigt, ist ein Turbo. Ein rhythmischer Hauch im
          Abgastakt ist ein Krummerleck. Das SVM lernt diese zeitlichen
          Muster durch die MFCC, die die Spektrumsentwicklung ueber die
          Zeit integrieren.
        </p>

        <h2>Zuhoeren, um vorzubeugen</h2>
        <p>
          Das Hauptinteresse des Klang-Scans ist nicht, eine Panne
          festzustellen &mdash; eine Lampe oder ein offensichtliches
          Geraeusch reichen dafuer. Es geht darum, Verschleiss zu
          erkennen, BEVOR er zur Panne wird. Ein Lager, das anfaengt zu
          markieren, zeigt sich ab 5&nbsp;% anormalem Verschleiss im
          Spektrum, lange bevor Sie etwas hoeren. Wenn Sie Ihren Motor
          einmal pro Monat scannen, wiederholen Sie die Messung und sehen
          die Entwicklung. Steigt die Konfidenz &laquo;bearing noise&raquo;
          in drei Monaten von 15&nbsp;% auf 60&nbsp;%, ist es klar: Etwas
          verschlimmert sich. Sie greifen bei 150&nbsp;EUR Reparatur ein
          statt bei 2000&nbsp;EUR Motorschaden.
        </p>

        <h2>Weiterfuehrend</h2>
        <p>
          Wenn Sie im Detail verstehen wollen, welche Pannen das System
          erkennt, lesen Sie unseren Artikel:{" "}
          <Link href="/de/blog/11-motorpannen-erkennbar-durch-klanganalyse">
            11 Pannen erkennbar durch Klanganalyse
          </Link>
          . Fuer den wissenschaftlichen Teil &mdash; Frequenzen, Filter,
          Mathematik &mdash; siehe{" "}
          <Link href="/de/blog/unhoerbare-geraeusche-ki-erkennt-was-ohr-nicht-hoert">
            die unhoerbaren Klaenge
          </Link>
          . Und wenn Sie einen{" "}
          <Link href="/de/codes/p0300">P0300</Link>-Code sehen, sagt Ihnen
          der Klang-Scan, welcher Zylinder wirklich ermuedet &mdash; eine
          Information, die OBD2 allein nicht immer liefert.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDERadlagergeraeusch() {
  const faq: FaqItem[] = [
    {
      q: "Wie erkenne ich, welches Radlager defekt ist?",
      a: "Lenken Sie leicht nach rechts auf freier Strasse: Wird das Geraeusch leiser, ist das LINKE Radlager betroffen (die Last verschiebt sich nach rechts, das gesund ist). Wird es lauter, ist es das RECHTE. Der Klang-Scan liefert die Objektivitaet, dieser manuelle Test hilft bei der Bestaetigung.",
    },
    {
      q: "Ist das Radlager ein TUeV-Ausschlusskriterium?",
      a: "Ja, seit 2019 in Frankreich und ebenso beim TUeV in Deutschland. Uebermaessiges Lagerspiel oder ein anormales Geraeusch auf dem Rollenpruefstand fuehrt zur Nachpruefung. Gleiches gilt fuer MOT in Grossbritannien.",
    },
    {
      q: "Was kostet ein Radlagerwechsel?",
      a: "Zwischen 180 und 450&nbsp;EUR pro Rad, je nach Fahrzeug und Typ (Radlager in Nabe integriert oder separat). Bei einigen deutschen Fahrzeugen muss ausserdem das ABS neu codiert werden, das kostet 30 bis 60&nbsp;EUR zusaetzliche Arbeitszeit.",
    },
    {
      q: "Kann ich mit einem brummenden Radlager weiterfahren?",
      a: "Einige hundert Kilometer ohne unmittelbares Risiko, wenn das Geraeusch leicht ist. Darueber hinaus heizt der Lagerring auf, das Spiel waechst, und schliesslich kann das Rad einen anormalen Winkel annehmen. Dann ist ein Unfall moeglich.",
    },
    {
      q: "Erkennt der Scan ein beginnendes Radlagergeraeusch?",
      a: "Ja, genau darin liegt seine Staerke. Ein beginnendes Radlager erzeugt ein leises Brummen um 200&ndash;400&nbsp;Hz, das das menschliche Ohr im lauten Innenraum nicht wahrnimmt. Der SVM isoliert es unter 138 Merkmalen.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Radlagergeraeusch: Verschleiss vor dem TUeV erkennen"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={8}
        category="Praevention"
      >
        <p>
          Das Radlager ist eines der heimtueckischsten Bauteile am Auto. Es
          beginnt bei etwa 90.000&nbsp;km zu ermueden, gibt gegen
          110.000&nbsp;km erste hoerbare Signale und laeuft bis
          150.000&nbsp;km weiter, bevor es wirklich gefaehrlich wird. Das
          Problem: Waehrend dieser ganzen Zeit gewoehnt sich der Fahrer an
          den Klang. Ein Jahr spaeter ist er das &laquo;normale Geraeusch&raquo;
          seines Autos. Der Klang-Scan dagegen vergisst das Referenzgeraeusch
          nie.
        </p>

        <h2>Physik des ermuedeten Radlagers</h2>
        <p>
          Ein intaktes Kugel- oder Rollenlager laeuft nahezu geraeuschlos. Das
          sogenannte &laquo;Brummen&raquo; entsteht, wenn die Kontaktflaechen
          zu markieren beginnen: Das Fett zersetzt sich, die inneren Laufbahnen
          zeigen Mikro-Absplitterungen, und jede Umdrehung erzeugt einen
          akustischen Schlag, der durch die Geschwindigkeit moduliert wird.
          Die Grundfrequenz liegt bei 80&nbsp;km/h zwischen 100 und
          300&nbsp;Hz, mit Oberschwingungen bis 2&nbsp;kHz. In diesem Bereich
          ist der SVM am praezisesten.
        </p>

        <h2>Die Signatur, die verraet</h2>
        <p>
          Drei Merkmale identifizieren ein Radlager mit Sicherheit: Das
          Geraeusch nimmt mit der Geschwindigkeit zu (proportional), es
          moduliert mit der Seitenlast (leichte Kurvenfahrt), und es
          verschwindet, wenn Sie das Rad beim Verzoegern leicht entlasten.
          Sind alle drei vorhanden, ist es zu 90&nbsp;% ein Radlager. Der
          Klang-Scan integriert diese Abhaengigkeiten in seinen 138 Merkmalen:
          Er betrachtet nicht nur das Spektrum im Moment, sondern auch dessen
          Entwicklung ueber die dreissig Sekunden der Aufnahme.
        </p>

        <h2>TUeV-Relevanz</h2>
        <p>
          Seit der Neuregelung der Hauptuntersuchung sind die Pruefpunkte fuer
          Fahrwerk und Antrieb strenger. Ein mit der Messuhr festgestelltes
          Lagerspiel bedeutet einen erheblichen Mangel mit Nachpruefung. Der
          TUeV Deutschland, MFK Schweiz, ITV Spanien und IPO Portugal folgen
          derselben Logik. Das Radlager zwei Wochen vor der Pruefung zu
          erkennen, erlaubt eine stressfreie Reparatur und den Durchlauf
          beim ersten Versuch.
        </p>

        <h2>Kaskadeneffekt des vernachlaessigten Radlagers</h2>
        <p>
          Ein kaputtes Radlager ist nicht nur ein Ersatzteil. Es bedeutet
          Hitze in der Nabe, den integrierten ABS-Sensor, der durchbrennt
          (150&nbsp;EUR zusaetzlich), die Bremsscheibe, die asymmetrisch
          heiss wird und sich verzieht (weitere 150&nbsp;EUR), und in
          Extremfaellen den Achsschenkel, der ueberhitzt und ebenfalls Spiel
          bekommt (450&nbsp;EUR). Ein Radlager fuer 220&nbsp;EUR, frueh
          erkannt, wird zur Rechnung von 970&nbsp;EUR, wenn man es ein
          halbes Jahr laufen laesst.
        </p>

        <h2>Scan-Protokoll fuer Radlager</h2>
        <p>
          Fuer eine verlaessliche Erkennung muss man fahren. Ein Scan im
          Stand erfasst fast nichts von der Signatur. Das richtige Protokoll:
          dreissig Sekunden auf ebener Strasse bei konstanten 70&ndash;90&nbsp;km/h,
          mit zwei leichten Spurwechseln, um die Modulation durch Seitenlast
          zu testen. Vermeiden Sie stark holprige Strassen, die die Signatur
          in Fahrwerksgeraeuschen untergehen lassen. Der SVM liefert eine
          Radlager-Konfidenz zwischen 0 und 100&nbsp;%. Ueber 60&nbsp;%
          wissen Sie, welche Seite zuerst zu pruefen ist.
        </p>

        <h2>Was Ihre Hoergewoehnung verbirgt</h2>
        <p>
          Dieser Punkt ist zentral: Ihr Gehirn passt seine Wahrnehmung an
          wiederkehrende Geraeusche an. Ein beginnendes Radlagerbrummen bei
          70&nbsp;km/h hoeren Sie am ersten Tag, vergessen es in der zweiten
          Woche und bemerken es nach einem Monat nicht mehr. Die KI dagegen
          vergleicht jeden Scan objektiv mit dem vorherigen. Ist die
          Radlager-Konfidenz innerhalb von zwei Monaten von 20&nbsp;% auf
          55&nbsp;% gestiegen, muss gehandelt werden &mdash; auch wenn Ihr
          Ohr sagt &laquo;alles in Ordnung&raquo;.
        </p>

        <h2>Weiterfuehrendes</h2>
        <p>
          Lesen Sie auch{" "}
          <Link href="/de/blog/controle-preventif-son-eviter-facture-cascade">
            den praeventiven Klang-Scan vor dem TUeV
          </Link>{" "}
          und{" "}
          <Link href="/de/blog/usure-invisible-composant-fatigue-endommage-autre">
            wie ein ermuedetes Teil andere beschaedigt
          </Link>
          . Wenn zusaetzlich ein Code{" "}
          <Link href="/de/codes/p0011">P0011</Link>{" "}
          oder ein ABS-Problem auftritt, ist moeglicherweise der
          Raddrehzahlsensor durch das Lagerspiel gestoert. OBD2 allein
          verraet nicht, welches die Grundursache ist.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

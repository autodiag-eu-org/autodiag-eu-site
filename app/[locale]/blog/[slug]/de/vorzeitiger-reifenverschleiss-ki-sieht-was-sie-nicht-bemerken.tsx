import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEVorzeitigerReifenverschleiss() {
  const faq: FaqItem[] = [
    {
      q: "Wie erkenne ich anormalen Reifenverschleiss?",
      a: "Betrachten Sie das Profil der Lauflaeche: Ist die Mitte staerker abgenutzt als die Raender, sind die Reifen zu stark aufgepumpt. Sind die Schultern staerker abgenutzt als die Mitte, chronischer Luftmangel. Ist die Innenseite glatt und die Aussenseite unbeschaedigt, liegt ein Spur- oder Sturzproblem vor. Die Vision-KI erkennt diese fuenf Muster in einem Foto.",
    },
    {
      q: "Ist einseitiger Verschleiss immer ein mechanisches Problem?",
      a: "Fast immer. Einseitiger Verschleiss heisst, dass der Kontaktwinkel nicht gerade ist: zu negativer Sturz, ermuedete Querlenkerlager, Spurstangenkopf mit Spiel oder ein abgesackter Federtopf.",
    },
    {
      q: "Was ist Cupping und wie erkenne ich es?",
      a: "Cupping, Wellenverschleiss, zeigt welliges Profil auf der Lauflaeche. Sie spueren es auch beim Fahren: ein regelmaessiges Brummen, das mit der Geschwindigkeit steigt. Das ist die Signatur eines ermuedeten Stossdaempfers, der das Rad bei jeder Unebenheit abspringen laesst.",
    },
    {
      q: "Wie oft sollte ich den Reifenverschleiss pruefen?",
      a: "Ein Foto pro Reifen alle zwei Monate reicht, um die Entwicklung zu verfolgen. Zehn Sekunden pro Rad, vierzig insgesamt. Die KI vergleicht die aufeinanderfolgenden Aufnahmen und warnt, sobald sich das Profilmuster aendert.",
    },
    {
      q: "Muss ein 1,8&nbsp;mm-Reifen sofort gewechselt werden?",
      a: "Die gesetzliche Grenze in Europa liegt bei 1,6&nbsp;mm, aber die Bremsleistung auf Nass faellt ab 3&nbsp;mm ab. Bei 1,8&nbsp;mm sind Sie in der roten Zone: bestellen Sie die Reifen in der folgenden Woche. Die KI misst die Restprofiltiefe aus dem Foto mit einer Toleranz von plus minus 0,3&nbsp;mm.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Vorzeitiger Reifenverschleiss: die KI sieht, was Sie nicht bemerken"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Visuelle Diagnose"
      >
        <p>
          Ein Reifen ist nicht nur eine schwarze Huelle. Er ist ein Logbuch,
          das Foto fuer Foto erzaehlt, was Ihr Auto wirklich erlebt. Jedes
          Verschleissmuster ist die Signatur eines praezisen mechanischen
          Problems, und meist sieht der Besitzer nichts, bis der TUeV
          ablehnt. Die Vision-KI von AutoDiag EU liest dieses Logbuch fuer
          Sie. Sie machen ein Foto der Lauflaeche, sie identifiziert das
          Muster, sie sagt Ihnen, woher es kommt.
        </p>

        <h2>Fuenf Muster, fuenf Ursachen</h2>
        <p>
          In 90&nbsp;% der Faelle fallen anormale Verschleisse in fuenf
          Familien. Mittenverschleiss: der Reifen ist ueberpumpt, der
          Kontakt konzentriert sich in der Mitte. Schulterverschleiss: der
          Reifen ist chronisch unter Druck, die Flanken flachen ab.
          Ausgepraegter Innenverschleiss: zu negativer Sturz oder
          geschlossene Vorspur, oft nach einem Bordsteinkontakt.
          Aussenverschleiss: offene Vorspur oder ermuedeter Querlenkerkopf.
          Cupping: ermuedeter Stossdaempfer, der das Rad bei jeder
          Unebenheit abspringen laesst.
        </p>

        <h2>Was das Foto erfasst, das das Auge ignoriert</h2>
        <p>
          Nehmen Sie ein senkrechtes Foto der Lauflaeche bei guter
          Beleuchtung. Die KI macht drei Dinge, die Sie nicht tun. Erstens
          misst sie die Restprofiltiefe in jeder Rille mit 0,3&nbsp;mm
          Genauigkeit, waehrend Ihr Auge vage schaetzt. Zweitens vergleicht
          sie Innen- und Aussenprofiltiefe &mdash; wenn Sie 3,2&nbsp;mm
          rechts und 1,4&nbsp;mm links haben, ist der Unterschied riesig
          und auf den ersten Blick unsichtbar. Drittens erkennt sie
          beginnendes Cupping, lange bevor Sie das Brummen im Cockpit
          hoeren.
        </p>

        <h2>Die Geschichte des falsch eingestellten Sturzes</h2>
        <p>
          Ein konkreter Fall: ein Peugeot 308, der vor vier Monaten einen
          Bordstein getroffen hat. Der Fahrer dachte nicht an eine
          Achsvermessung, weil das Auto gerade fuhr. Vier Monate spaeter
          ist der linke Vorderreifen innen glatt und aussen fast neu. Das
          Vision-KI-Foto erkennt einen Unterschied von 2,4&nbsp;mm
          zwischen den Raendern, schaetzt den Sturz auf unter zwei Grad und
          alarmiert sofort. Kosten: 80&nbsp;EUR Achsvermessung und ein
          Reifen zu 120&nbsp;EUR. Haette der Fahrer sechs Monate laenger
          gewartet, waeren zwei Reifen und potenziell ein Querlenkerkopf
          faellig gewesen.
        </p>

        <h2>Die Verbindung zum Fahrwerk</h2>
        <p>
          Cupping verdient seinen eigenen Abschnitt. Es ist das
          Gestaendnis, dass das Fahrwerk nicht mehr richtig daempft: das
          Rad springt, der Reifen reibt ungleichmaessig, das Wellenmuster
          entsteht. Sehen Sie Cupping, ist das Problem nicht der Reifen,
          sondern der Stossdaempfer. Den Reifen ohne das Fahrwerk zu
          tauschen, garantiert, dass der neue Reifen dasselbe Muster in
          sechs Monaten reproduziert. Die Vision-KI macht die Verbindung
          automatisch und leitet Sie zur richtigen Massnahme. Sie koennen
          auch mit einem{" "}
          <Link href="/de/blog/fahrwerksgeraeusch-ki-erkennt-stossdaempfer">
            Fahrwerks-Klang-Scan
          </Link>{" "}
          abgleichen.
        </p>

        <h2>Das Timing, das alles aendert</h2>
        <p>
          Ein Reifen entscheidet sich auf zwei Wochen beim{" "}
          <Link href="/de/blog/tuv-vorbereitung-checkliste">
            TUeV
          </Link>
          . Fahren Sie den Termin mit 1,8&nbsp;mm, haben Sie fast sicher
          eine Nachpruefung, sobald eine Seitenungleichheit ein paar Zehntel
          ueberschreitet. Mit der Vision-KI koennen Sie zwei Monate im
          Voraus vorausschauen, den Reifensatz bestellen, wenn die Preise
          gut sind, und entspannt zum TUeV fahren. Ein komplett mittlerer
          Satz in 205/55 R16 kostet zwischen 380 und 520&nbsp;EUR. Am
          Vortag hetzen heisst 15 bis 25&nbsp;% mehr zahlen.
        </p>

        <h2>Was die KI nicht sehen kann</h2>
        <p>
          Das Foto erkennt keine inneren Hernien, keine feuchtigkeits-
          geschwaechten Karkassenfaeden und keine feinen Flankenrisse. Dafuer
          bleibt eine taktische Inspektion einmal pro Jahr noetig, am
          besten zum Saisonwechsel. Die KI ist sehr gut auf der Lauflaeche,
          aber sie sieht das Reifeninnere nicht. Betrachten Sie die
          Vision-KI als hochfrequente kontinuierliche Ueberwachung und den
          jaehrlichen Besuch beim Reifenhaendler als Tiefenkontrolle.
        </p>

        <h2>Die empfohlene Routine</h2>
        <p>
          Alle zwei Monate vier Fotos: eines pro Reifen, senkrecht zur
          Lauflaeche, immer am selben Punkt (Markierung am Ventil zum
          Beispiel). Die Historie erscheint als Grafik in der App, und Sie
          sehen die Kurve der Restprofiltiefe fallen. Wenn ein Rad hinter
          die anderen zurueckfaellt, kommt die Warnung. Sie greifen ein,
          bevor sich das Problem ausbreitet. Dieselbe Philosophie wie bei{" "}
          <Link href="/de/codes/p0300">Code P0300 Zuendaussetzer</Link>:
          frueh erkennen, wenig zahlen.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEBremsbelagVerschleissKI() {
  const faq: FaqItem[] = [
    {
      q: "Wie misst man die Belagstaerke ohne das Rad abzubauen?",
      a: "Die KI-Vision fotografiert den Belag durch die Speichen der Felge, mit der Handylampe zur Beleuchtung. Sie misst den sichtbaren Teil des Belages mit etwa 0.5&nbsp;mm Genauigkeit, kalibriert am erkannten Scheibendurchmesser. Das ist praezise, sofern die Aufnahme scharf und gut ausgeleuchtet ist.",
    },
    {
      q: "Ab welcher Staerke muessen die Belaege gewechselt werden?",
      a: "Ein neuer Belag misst 10 bis 12&nbsp;mm. Bei 4&nbsp;mm sollten Sie den Wechsel binnen drei Monaten planen. Bei 3&nbsp;mm schleift der Verschleissindikator bald und loest ein Quietschen aus. Bei 2&nbsp;mm fahren Sie auf der Traegerplatte und beschaedigen die Scheibe: sofortiger Wechsel und wahrscheinlich auch Scheibentausch.",
    },
    {
      q: "Was ist eine verzogene oder geriefte Scheibe?",
      a: "Eine gesunde Scheibe ist glatt und glaenzend mit feinen Riefen. Eine geriefte Scheibe hat tiefe Rillen durch bis zur Metallplatte abgenutzte Belaege. Eine verzogene Scheibe ist verformt und verursacht bei jedem Bremsen Vibrationen im Pedal. Die KI-Vision erkennt beide Defekte auf einem Foto.",
    },
    {
      q: "Was bedeutet eine blaue Faerbung auf der Scheibe?",
      a: "Die Blaufaerbung entsteht, wenn die Scheibe schwere Ueberhitzung erfahren hat. Die Oxidation des Metalls bei hoher Temperatur ergibt diesen blau-violetten Ton. Das ist die Signatur eines festen Bremssattels, einer verstopften Leitung oder intensiver Bergnutzung. Die Scheibe muss ersetzt werden, da ihre mechanischen Eigenschaften veraendert sind.",
    },
    {
      q: "Was kostet ein Belag- und Scheibenwechsel?",
      a: "Ein Satz vorderer Belaege im mittleren Preissegment kostet 60 bis 120&nbsp;EUR. Ein Satz Scheiben 90 bis 200&nbsp;EUR. Die Arbeitszeit betraegt 80 bis 150&nbsp;EUR pro Achse. Realistisches Total: 250 bis 450&nbsp;EUR vorne, etwas weniger hinten. Antizipieren erlaubt, den Zeitpunkt zu waehlen und Angebote zu vergleichen.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Bremsbelag- und Bremsscheibenverschleiss: Was die KI-Vision durch die Speichen erkennt"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="KI-Vision"
      >
        <p>
          Die Bremsen sind das wichtigste Bauteil Ihres Autos &mdash;
          wichtiger als der Motor, wichtiger als das Getriebe, wichtiger
          als das Fahrwerk. Denn eine Bremse, die versagt, ist ein Unfall.
          Das Problem: Niemand schaut wirklich auf seine Belaege. Man
          faehrt, bremst, wartet auf das Quietschen. Dieses Quietschen
          kommt zu spaet: Wenn Sie es hoeren, haben Sie die Scheibe
          wahrscheinlich schon beschaedigt. Die KI-Vision loest genau
          dieses Problem: Sie misst den Belag ohne Demontage, durch die
          Speichen der Felge. Einige Sekunden pro Rad, und Sie wissen, wo
          Sie stehen.
        </p>

        <h2>Die Aufnahme, die funktioniert</h2>
        <p>
          Drehen Sie das Lenkrad voll nach rechts, um den vorderen linken
          Belag freizulegen. Der vertikale Teil des Belages ist dann
          zwischen zwei Speichen der Felge zugaenglich. Schalten Sie die
          Handylampe ein, positionieren Sie das Objektiv zwischen die
          Speichen, stabilisieren Sie, machen Sie das Foto. Wiederholen
          Sie am gegenueberliegenden Rad. Die App erkennt die Geometrie
          eines Bremssattels, isoliert den Belag im Bild, misst die
          sichtbare Hoehe des Belagmaterials in Pixeln und rechnet in
          Millimeter um, indem sie am Scheibendurchmesser kalibriert.
        </p>

        <h2>Die Hierarchie der Messwerte</h2>
        <p>
          Ein neuer Belag hat 10 bis 12&nbsp;mm Belagmaterial. Bei
          6&nbsp;mm sind Sie auf Halbzeit, die App zeigt gruenen Indikator.
          Bei 4&nbsp;mm wird er orange: Wechsel in 3&nbsp;Monaten planen.
          Bei 3&nbsp;mm beruehrt der interne Verschleissindikator die
          Scheibe und Sie werden bald ein charakteristisches Quietschen
          hoeren &mdash; die App zeigt roten Alarm. Bei 2&nbsp;mm oder
          weniger ist es kritisch: Das Belagmaterial naehert sich
          gefaehrlich der Metalltraegerplatte. Das{" "}
          <Link href="/de/blog/bremsenquietschen-normal-oder-gefahr">
            Bremsenquietschen
          </Link>{" "}
          verdient dazu einen eigenen Artikel.
        </p>

        <h2>Die Scheibe: der grosse Vergessene</h2>
        <p>
          Haeufiges Problem: Fahrer tauschen ihre Belaege, behalten aber
          die alten Scheiben. Manchmal ist das ein Fehler. Die KI-Vision
          analysiert auch die im Bild sichtbare Scheibe und erkennt drei
          Defekte. Erster Defekt: tiefe Riefen. Zeigt die
          Scheibenoberflaeche deutliche Rillen, hat der vorherige Belag
          bis ins Metall verschlissen, die Scheibe kann nicht mehr
          ueberdreht werden. Zweiter Defekt: Verzug. Eine verzogene
          Scheibe verursacht Vibrationen bei jedem Bremsen. Die
          Fotoanalyse misst den Verzug nicht direkt, aber sie erkennt
          Spuren asymmetrischen Verschleisses als Folge. Dritter Defekt:
          Blaufaerbung. Ist die Scheibe bis zur Blaufaerbung ueberhitzt,
          hat ihre Kristallstruktur sich veraendert, sie muss ersetzt
          werden.
        </p>

        <h2>Die Zeichen, die die Messung begleiten</h2>
        <p>
          Die KI-Vision begnuegt sich nicht mit der reinen Messung. Sie
          betrachtet auch den Kontext. Ein leicht verglaster Belag zeigt
          eine glatte, glaenzende Oberflaeche, manchmal mit lackartigen
          Reflexen: Das ist ein ueberhitzter Belag, oft wegen eines teils
          festen Bremssattels. Ein markanter Unterschied zwischen innerem
          und aeusserem Belag ist die Signatur eines Sattelkolbens, der
          nicht mehr korrekt zurueckkehrt. Asymmetrischer Verschleiss
          zwischen links und rechts derselben Achse deutet auf ein
          hydraulisches Problem oder einen unter Druck sich aufblaehenden
          Bremsschlauch. All diese Anomalien erscheinen im Bericht mit
          ihrer mechanischen Interpretation.
        </p>

        <h2>Der Bezug zum Bremsgeraeusch</h2>
        <p>
          Die KI-Vision erkennt, was sichtbar ist, der{" "}
          <Link href="/de/blog/bremsenquietschen-normal-oder-gefahr">
            Klang-Scan der Bremsgeraeusche
          </Link>{" "}
          erkennt, was hoerbar ist. Zusammen decken beide Technologien
          95&nbsp;% der Bremsprobleme ab. Sehen Sie einen Belag bei
          4&nbsp;mm und hoeren Sie bereits ein zyklisches Quietschen, sind
          Sie wahrscheinlich ueber normalen Gebrauch hinaus: Es gibt
          wahrscheinlich eine Sattel- oder Kolbenkomponente. Sehen Sie
          einen Belag bei 5&nbsp;mm ohne Geraeusch, haben Sie noch drei
          bis vier Monate fuer den stressfreien Wechsel.
        </p>

        <h2>Die Berechnung der Restreichweite</h2>
        <p>
          Mit dem Verlauf aufeinanderfolgender Messungen berechnet die App
          Ihre Verschleissgeschwindigkeit in Millimetern pro tausend
          Kilometer. Dieser Wert ist fahrerabhaengig stark variabel: Ein
          Stadtfahrer verbraucht 1.5&nbsp;mm pro 10&nbsp;000&nbsp;km, ein
          Autobahnfahrer 0.7, ein Bergfahrer kann 2&nbsp;mm pro
          10&nbsp;000&nbsp;km uebersteigen. Sobald Ihre persoenliche
          Geschwindigkeit bekannt ist, projiziert die App den Moment, an
          dem Sie 3&nbsp;mm, dann 2&nbsp;mm erreichen. Sie planen Ihren
          Eingriff im Voraus, vergleichen Angebote, waehlen Ihre Werkstatt
          ohne Eile.
        </p>

        <h2>Die realen Ersparnisse</h2>
        <p>
          Den Belagwechsel zu antizipieren spart zwei Posten. Erster
          Posten: die Notdemontage mit Fahrzeugimmobilisierung kostet 30
          bis 60&nbsp;EUR mehr als ein geplanter Termin. Zweiter Posten:
          Warten Sie zu lange und beschaedigen die Scheibe, wechseln Sie
          von einem 100-Euro-Belagsatz zu einem 250-Euro-Belag-plus-Scheiben-Paket
          mit fast verdoppelter Arbeitszeit. Ueber vier Jahre typischer
          Nutzung in Europa sind das 300 bis 600&nbsp;EUR Ersparnis allein
          bei den Bremsen. Kombiniert mit der{" "}
          <Link href="/de/blog/tuv-vorbereitung-checkliste">
            TUeV-Vorbereitung
          </Link>{" "}
          und einem regelmaessigen OBD2-Scan (achten Sie auf den{" "}
          <Link href="/de/codes/p0325">Code P0325 Klopfen</Link>, der auf
          anormale Systemerwaermung hindeuten kann), haben Sie die
          vollstaendige Gleichung: KI-Vision&nbsp;+ Klang-Scan&nbsp;+
          OBD2&nbsp;= ein Fahrzeug ohne boese Ueberraschungen.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEKorrosionKIVision() {
  const faq: FaqItem[] = [
    {
      q: "Unterschied zwischen Oberflaechenrost und strukturellem Rost?",
      a: "Oberflaechenrost ist eine braune Oxidation nur in der obersten Metallschicht: geht beim Buersten weg und wird mit Rostschutz behandelt. Strukturrost greift die Blechdicke an, verursacht Durchbrueche, schwaecht das Teil und wird TUeV-Ablehnungsgrund. Die KI-Vision klassifiziert in vier Stufen, damit Sie wissen, ob Sie sechs Monate Zeit haben oder keine.",
    },
    {
      q: "Welche Zonen soll man vorrangig fotografieren?",
      a: "Das Rostdreieck eines europaeischen Autos: Schweller, Radhaeuser hinten, Bodenwannen, Heckquertraeger, Fahrwerksgummis, und alle Befestigungspunkte der Aufhaengung. Dazu die metallischen Bremsleitungen am Chassis: ein Rostpunkt darauf heisst sofortige Ablehnung.",
    },
    {
      q: "Wird mein 15 Jahre altes Auto zwangslaeufig durchfallen?",
      a: "Nein, viele Fahrzeuge mit 15 bis 20 Jahren bestehen problemlos, wenn Rost ueberwacht wird. Das Problem entsteht, wenn er ignoriert wurde. Eine halbjaehrliche KI-Vision-Kontrolle erkennt die Ausbreitung frueh und erlaubt eine Behandlung fuer 80 bis 150&nbsp;EUR statt einer Karosseriearbeit fuer 600 bis 1200&nbsp;EUR.",
    },
    {
      q: "Ist Blasenlack immer ein Zeichen aktiven Rosts?",
      a: "In 95&nbsp;% der Faelle ja. Eine Lackblase bedeutet, dass darunter ein Rostpunkt schwillt und die Schicht hebt. Die KI-Vision erkennt diese Blasen selbst sehr klein, manchmal unsichtbar fuer das Auge, durch Analyse von Farbton- und Reflex-Variationen auf der lackierten Oberflaeche.",
    },
    {
      q: "Kann ich erkannte Korrosion selbst behandeln?",
      a: "Fuer Stufe 1 (Oberflaeche) ja: Buersten, Rostumwandler, Rostschutzlack, 40&nbsp;EUR Material. Fuer Stufe 2 und hoeher, oder wenn die Zone strukturell ist (Laengstraeger, Aufhaengepunkt), muss ein kompetenter Karosseriebauer eingreifen.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Korrosion und Rost mit KI-Vision vor dem TUeV erkennen"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Praevention"
      >
        <p>
          Rost ist der stille Killer europaeischer Fahrzeuge. In
          Frankreich, Deutschland, Belgien oder der Schweiz arbeiten
          Winter und Streusalz an Ihrem Unterboden, waehrend Sie fahren.
          Ein Rostpunkt in der Groesse einer 2-Euro-Muenze kann in
          achtzehn Monaten Untaetigkeit zu einem Durchbruch werden, der
          zum TUeV-Durchfall fuehrt. Die KI-Vision von AutoDiag EU
          identifiziert diese Anfaenge, lange bevor sie irreversibel
          werden.
        </p>

        <h2>Warum fruehes Erkennen alles aendert</h2>
        <p>
          Der Rostmechanismus ist exponentiell. Ein erster Oxidationspunkt
          schafft Mikroporositaet, die Feuchtigkeit haelt, die Korrosion
          ausweitet, die die Poren vergroessert. In sechs Monaten
          verdoppelt sich die betroffene Flaeche. In achtzehn Monaten
          gehen Sie von Oberflaechenrost (behandelbar fuer 80&nbsp;EUR
          Material) zu Strukturrost (Schweissen und Schneiden, 400 bis
          1500&nbsp;EUR). Wenn Sie ihn beim Kofferraumschliessen mit
          blossem Auge sehen, ist es spaet. Die KI-Vision sieht die
          allerersten Punkte, wenn sie noch Millimeter messen.
        </p>

        <h2>Das Rostdreieck</h2>
        <p>
          Nicht alle Autos rosten an denselben Stellen. Aber neun von
          zehn haben dieselben empfindlichen Zonen. Zuerst die
          Schweller, wo von den Raedern geschleudertes Salz stehen
          bleibt. Die hinteren Radhaeuser, wo Feuchtigkeit hinter den
          Kunststoffverkleidungen gefangen bleibt. Die Bodenwannen
          zwischen den Quertraegern, wo Kondenswasser nie trocknet.
          Die Fahrwerksbefestigungspunkte, die Vibration und
          Feuchtigkeit kombinieren. Schliesslich die metallischen
          Bremsleitungen, der TUeV-Albtraum: ein tiefer Rostpunkt
          darauf bedeutet sofortige Ablehnung und Fahrverbot.
        </p>

        <h2>Vier Stufen, vier Entscheidungen</h2>
        <p>
          Das KI-Vision-Modell klassifiziert jedes Foto in vier
          Stufen. Stufe 1, Oberflaechenrost: brauner Fleck, keine
          Schwellung, Eigenbehandlung fuer 40 bis 80&nbsp;EUR moeglich.
          Stufe 2, aktiver Rost mit Schwellung: Lack blasig, Ablosen
          beginnt, innerhalb 6 Monaten beim Karosseriebauer behandeln
          fuer 150 bis 300&nbsp;EUR. Stufe 3, drohender Durchbruch:
          Blech ausgeduennt, Teil verliert Steifigkeit, Eingriff
          binnen 3 Monaten Pflicht, 400 bis 800&nbsp;EUR. Stufe 4,
          Durchbruch oder strukturell: der TUeV lehnt ab, sofortiger
          Eingriff, 600 bis 1500&nbsp;EUR je nach Zone. Zu jeder Stufe
          klare Empfehlung, keine Grauzone.
        </p>

        <h2>Eine Yaris-Geschichte und die Hinterachse</h2>
        <p>
          Echter Fall: Toyota Yaris von 2012, 140000&nbsp;km, sehr
          sorgfaeltiger Besitzer, der monatlich waescht. Beim
          Fotografieren unter der Hinterachse fuer einen Routine-Checkup
          erkennt die KI-Vision Stufe 2 an einem Befestigungspunkt des
          Panhardstabs. Das Auge sah nichts, nur einen braunen Fleck im
          schmutzigen Schwarz. Der Karosseriebauer bestaetigt, behandelt
          die Zone fuer 180&nbsp;EUR. Sechs Monate spaeter, gleiche
          Zone, gleiches Foto: Stufe 1, stabilisiert. Vermiedene Kosten:
          etwa 700&nbsp;EUR fuer den Stab-Ersatz, wenn das Teil
          waehrend der Fahrt nachgegeben haette.
        </p>

        <h2>Der Vorher-Nachher-Vergleich</h2>
        <p>
          Die wahre Staerke der KI-Vision ist nicht ein einzelnes
          Foto, sondern die Serie. Sie fotografieren dieselben Zonen
          alle sechs Monate, das System vergleicht die Historie und
          alarmiert, wenn eine Zone eine Stufe vorrueckt. Dieser
          Verlauf ist informativer als ein Schnappschuss: eine Stufe
          1, die seit drei Jahren stabil ist, ist nicht dringend.
          Eine Stufe 1, die in sechs Monaten zu Stufe 2 wurde, ist
          ein Alarm. Die Zeit ist eine Eingangsdatenquelle.
        </p>

        <h2>Was der TUeV wirklich anschaut</h2>
        <p>
          Bei einem{" "}
          <Link href="/de/blog/diesel-tuev-vorbereitung-2026-leitfaden">
            TUeV 2026
          </Link>{" "}
          hat der Pruefer eine praezise Liste. Major-Defekte durch
          Korrosion: durchgehender Rost an einer strukturellen Zone,
          Rost an einer Bremsleitung oder Aufhaengefixierung,
          Durchbruch eines Laengstraegers oder Quertraegers. Indem
          Sie diese Punkte zwei Monate im Voraus mit KI-Vision
          antizipieren, kommen Sie mit erledigten Behandlungen zum
          TUeV. Der Pruefer stellt fest, hakt ab, Sie fahren mit der
          Plakette raus.
        </p>

        <h2>Die Hygiene der regelmaessigen Kontrolle</h2>
        <p>
          Eine KI-Vision-Kontrolle der empfindlichen Zonen dauert alle
          sechs Monate zehn Minuten. Acht Aufnahmen: Schweller rechts,
          Schweller links, hinteres Radhaus rechts, hinteres Radhaus
          links, unter der Vorderachse, unter der Hinterachse, und
          zwei Aufnahmen auf sichtbare Bremsleitungen. Die App fuehrt
          Sie, erkennt die Winkel und signalisiert, wenn ein Bild nicht
          scharf genug ist. Zehn Minuten, zweimal im Jahr. Kombiniert
          mit dem{" "}
          <Link href="/de/blog/visueller-ki-checkup-5-punkte-gesundes-auto">
            visuellen 5-Punkte-Checkup
          </Link>{" "}
          und einem monatlichen OBD2-Scan halten Sie Ihr Fahrzeug vom
          unvorhergesehenen Bruch fern.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

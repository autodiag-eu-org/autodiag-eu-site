import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEOellampeLeuchtet() {
  const faq: FaqItem[] = [
    {
      q: "Rot oder orange? Wie unterscheide ich die beiden Oellampen?",
      a: "ROT: rote Oelkanne oder Symbol mit Text STOP &mdash; das ist eine Oeldruckwarnung. Sie muessen sofort anhalten, den Motor abschalten und nicht vor der Pruefung neu starten. ORANGE: gelbe Oelkanne oder Text OIL CHANGE &mdash; das ist eine Oelwechselerinnerung, nicht dringend, Sie koennen normal bis zur Werkstatt fahren.",
    },
    {
      q: "Wie lange darf ich mit roter Oellampe fahren?",
      a: "Null Sekunden. Jede Umdrehung ohne Oeldruck zerstoert die Lager, den Zylinderkopf und die Kolben. Der Motor kann bei totalem Kreislaufverlust in weniger als 30&nbsp;Sekunden sterben. Sofort abstellen, abkuehlen lassen, Oelstand pruefen, und wenn der Stand korrekt ist, abschleppen lassen.",
    },
    {
      q: "Was, wenn der Oelstand passt, die Lampe aber an bleibt?",
      a: "Ernste Lage. Der Kreislauf baut keinen Druck mehr auf: defekte Oelpumpe, verstopfter Saugkorb, klemmendes Regelventil oder wirklich anormaler Druck. Auch ein defekter Sensor ist moeglich. Abschleppen und diagnostizieren lassen. Eine Pumpe kostet 200 bis 600&nbsp;EUR, ein zerstoerter Motor 10 bis 30-mal mehr.",
    },
    {
      q: "Wie oft soll ich den Oelstand pruefen?",
      a: "Mindestens einmal pro Monat, einmal pro Woche bei verbrauchendem Motor. Kalt, auf ebener Flaeche, 5&nbsp;Minuten nach dem Abstellen warten. Ein Unterschied von mehr als 1&nbsp;Liter zwischen zwei Monatskontrollen ist anormal.",
    },
    {
      q: "Darf man im Notfall anderes Oel nachfuellen?",
      a: "Ja, besser ein leicht anderes Oel als gar keines. Wenn moeglich die Viskositaet beachten (z. B. 5W30 bleibt bevorzugt), aber blockieren Sie die Situation nicht wegen der Marke. Nach dieser Notfuellung einen kompletten Oelwechsel bei naechster Gelegenheit.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Oellampe leuchtet: weiterfahren oder sofort anhalten?"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnose"
      >
        <p>
          Die Oellampe ist die einzige Lampe, bei der die richtige Reaktion
          allein von ihrer Farbe abhaengt. Rot und Orange zu verwechseln,
          kann zwischen 5000 und 15&nbsp;000&nbsp;EUR Reparatur oder sogar
          den Totalausfall des Motors kosten. Diese Anleitung lehrt Sie,
          sie in zwei Sekunden zu unterscheiden und je nach Fall korrekt
          zu reagieren.
        </p>

        <h2>Rote Lampe: sofortiger Halt obligatorisch</h2>
        <p>
          Die rote Lampe zeigt eine rote Oelkanne oder ein Symbol mit dem
          Wort STOP. Bedeutung: der Oeldruck reicht nicht aus, den Motor
          korrekt zu schmieren. Ursache: zu niedriger Oelstand, defekte
          Pumpe, verstopfter Saugkorb oder defekter Sensor. In den ersten
          drei Faellen zaehlt jede Sekunde. Die Kurbelwellen- und
          Nockenwellenlager laufen auf einem Oelfilm von etwa zehn
          Mikrometern. Ohne diesen Film reibt Metall auf Metall und die
          Teile zerstoeren sich in wenigen Dutzend Sekunden.
        </p>

        <h2>Die Notfallprozedur in 5 Schritten</h2>
        <p>
          Schritt 1: Blinker setzen, sicher an den Rand fahren. Schritt 2:
          Motor sofort abstellen. Schritt 3: 5 bis 10 Minuten abkuehlen
          lassen. Schritt 4: Oelstand pruefen. Schritt 5: Ist der Stand
          unter Minimum, bis zum Maximum nachfuellen und kurz neu starten,
          um zu sehen, ob die Lampe ausgeht. Ja: vorsichtig zur Werkstatt.
          Nein oder Stand war schon korrekt: abschleppen lassen.
        </p>

        <h2>Orange Lampe: keine Eile, nur Erinnerung</h2>
        <p>
          Die orange Lampe, oft mit Text OIL CHANGE oder SERVICE, ist eine
          reine Oelwechsel-Erinnerung nach Kilometerstand oder Zeit. Sie
          zeigt kein mechanisches Problem an. Sie koennen normal
          weiterfahren und in den naechsten Wochen einen Werkstatttermin
          ausmachen. Der Oelwechsel kostet allgemein 60 bis
          150&nbsp;EUR.
        </p>

        <h2>Typische Ursachen der roten Lampe</h2>
        <p>
          Sehr niedriger Oelstand: haeufigste Ursache, oft durch ignorierten
          Verbrauch. Ermuedete Oelpumpe: 200 bis 600&nbsp;EUR Ersatz.
          Durch Ablagerungen verstopfter Saugkorb: oft verbunden mit zu
          altem Oel. Defekter Drucksensor: 40 bis 150&nbsp;EUR, das
          beruhigendste Szenario. Klemmendes Regelventil: 150 bis
          400&nbsp;EUR.
        </p>

        <h2>Folgen einer laengeren Fahrt ohne Druck</h2>
        <p>
          Nach 30 Sekunden: Anfang des Lagerfressens. Nach 2 Minuten:
          Zylinderzerkratzen. Nach 5 Minuten: Pleuelbruch wahrscheinlich.
          Die Schaeden sind irreversibel. Aus einer 400&nbsp;EUR-Pumpe
          wird ein 5000&nbsp;EUR-Motor mindestens, oft mehr. Die teuerste
          Panne durch einen einfachen menschlichen Fehler: mit roter Lampe
          weiterfahren.
        </p>

        <h2>Oelverbrauch, das Vorzeichen</h2>
        <p>
          Ein Auto, das mehr als einen halben Liter auf 1000&nbsp;km
          verbraucht, sagt Ihnen etwas. Haeufige Ursachen: verschlissene
          Kolbenringe, Ventilschaftdichtungen, Turbo, der zur Ansaugung
          leckt, beginnende Kopfdichtungsundichtigkeit. Eine monatliche
          Standkontrolle verhindert Ueberraschungen. Siehe{" "}
          <Link href="/de/blog/11-pannes-detectables-analyse-sonore-moteur">
            die 11 durch Klanganalyse erkennbaren Pannen
          </Link>
          .
        </p>

        <h2>Aktive Praevention</h2>
        <p>
          Respektieren Sie die Herstellerintervalle. Verwenden Sie ein Oel
          nach den Spezifikationen (ACEA, API, Herstellerfreigabe). Pruefen
          Sie den Stand mindestens monatlich, oefter bei Langstrecke.
          Halten Sie einen Kanister des richtigen Oels im Kofferraum.
          Siehe auch{" "}
          <Link href="/de/blog/motorkontrollleuchte-leuchtet-was-tun">
            Motorkontrollleuchte: was tun
          </Link>{" "}
          und{" "}
          <Link href="/de/codes/p0011">den Code P0011</Link> zu variablen
          Steuerzeiten.
        </p>

        <h2>Sonderfall: Lampe beim Start</h2>
        <p>
          Viele Autos schalten alle Lampen beim Start 2 Sekunden ein zum
          Test. Die rote Oellampe geht aus, sobald der Motor laeuft. Bleibt
          sie mehr als 3 Sekunden nach Start an, als aktive Lampe
          behandeln und die Notprozedur anwenden.
        </p>

        <h2>Der Reflex, der rettet</h2>
        <p>
          Rot = sofort anhalten. Orange = Termin in der Woche. Wenn Sie
          nur eines merken: das. Diese Regel hat mehr Motoren gerettet als
          jede Diagnosetechnologie.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

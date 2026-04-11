import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEKIVisionLeckagen() {
  const faq: FaqItem[] = [
    {
      q: "Wie unterscheidet die KI-Vision eine Oel-Leckage von einer Kuehlfluessigkeit?",
      a: "Das Modell analysiert drei Signale: die Farbe des Flecks (braun-schwarz fuer Motoroel, gruen/orange/rosa fuer Coolant), die aus der Randform geschaetzte Viskositaet, und die Position unter dem Fahrzeug. Ein fluoreszierend gruener Fleck vor dem Motor = Coolant zu 95&nbsp;%. Ein braun-schwarzer Fleck in der Mitte = Motoroel.",
    },
    {
      q: "Ab welcher Fleckgroesse soll ich mir Sorgen machen?",
      a: "Unter 2&nbsp;cm spricht man von Schwitzen: beobachten, nicht dringend. Zwischen 2 und 10&nbsp;cm ermuedet die Dichtung oder der Schlauch wirklich, Intervention innerhalb 15 Tagen. Ueber 10&nbsp;cm oder wenn der Fleck in Stunden zurueckkommt: nicht fahren, Abschleppen empfohlen.",
    },
    {
      q: "Darf ich fahren, wenn ich einen Tropfen pro Tag sehe?",
      a: "Ja, aber pruefen Sie den betroffenen Stand alle drei Tage. Ein Tropfen Oel pro Tag macht etwa 30&nbsp;ml im Monat: Sie muessen ausgleichen. Ist es Bremsfluessigkeit, sofort nicht mehr fahren, der Kreis toleriert keinen Verlust.",
    },
    {
      q: "Muss man etwas unters Auto legen?",
      a: "Ein einfacher weisser A4-Karton, den Sie vor dem Parken ueber Nacht unters Auto legen, reicht. Am Morgen fotografieren Sie den Karton: die KI bewaeltigt Kontraste auf hellem Hintergrund besser und misst den Fleck praezise.",
    },
    {
      q: "Ersetzt die KI-Vision einen Werkstattbesuch?",
      a: "Nein, sie warnt Sie. Sie sagt, was leckt, wo und wie schwer, und leitet Sie zur richtigen Reparatur. Die Werkstatt bleibt noetig fuer den Eingriff, aber Sie kommen mit klarer Akte statt offenem Kostenvoranschlag.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="KI-Vision: Leckagen unter dem Auto mit dem Handy erkennen"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="KI-Vision"
      >
        <p>
          Sie setzen Ihr Auto morgens zurueck und sehen einen Fleck auf
          dem Beton. Erster Reflex: die Augen zusammenkneifen und sich
          fragen, ob er gestern schon da war. Zweiter Reflex ab jetzt
          sollte sein: das Handy zu zuecken. Die KI-Vision von AutoDiag
          EU identifiziert in Sekunden, was leckt, wo und wie schwer.
          Kein Mechaniker sein, kein Finger in Fluessigkeit tauchen.
        </p>

        <h2>Das Foto, das eine Diagnose wert ist</h2>
        <p>
          Das Prinzip ist einfach: Sie fotografieren den Fleck am
          Boden, die App analysiert drei Dimensionen parallel. Erste
          Dimension: die dominante Farbe, kalibriert nach Umgebungslicht.
          Zweite: Textur und Viskositaet aus Randform und diffusem Hof.
          Dritte: die Position unter dem Fahrzeug — der Nutzer gibt an,
          wo das vordere linke Rad war, und das Modell trianguliert den
          wahrscheinlichen Ursprung.
        </p>

        <h2>Der Farbkatalog der Fluessigkeiten</h2>
        <p>
          Jede Autofluessigkeit hat ihre Signatur. Motoroel startet
          bernsteinfarben, wird nach einigen tausend Kilometern
          braun-schwarz: fettig, dicht, immer unter dem Block.
          Kuehlfluessigkeit gibt es in Neon-Gruen, Orange, Rosa oder
          Gelb je nach Chemie (IAT, OAT, HOAT) — fluessig, leicht
          suesslich, nahe Kuehler oder Schlaeuche. Bremsfluessigkeit ist
          durchsichtig bis strohgelb, sehr duennfluessig, leckt nahe
          Raedern oder Hauptzylinder. Automatikgetriebeoel ist
          kirschrot (neu) oder braun (alt). Servolenkoel ist
          bernsteinrot. Scheibenreiniger hellblau. Das ist die Palette.
        </p>

        <h2>Schwere nach Fliessrate</h2>
        <p>
          Zwei identische Flecke erzaehlen nicht dieselbe Geschichte.
          Ein 10-cm-Fleck in 8 Stunden Parken ist ernst: rund
          200&nbsp;ml pro Nacht. Derselbe Fleck ueber drei Wochen ist
          Schwitzen zum Beobachten. Deshalb fragt die App, wie lange
          das Auto schon steht. Damit berechnet sie eine Fliessrate in
          ml/h und klassifiziert in vier Stufen: Schwitzen, langsam,
          moderat, kritisch.
        </p>

        <h2>Die Dichtung vor dem Bruch</h2>
        <p>
          Dieses Fruehwarnen ist nicht aesthetisch. Ein schwitzender
          Kurbelwellen-Simmerring kostet 180 bis 350&nbsp;EUR Wechsel.
          Sechs Monate ignoriert, laeuft er bis zum Schwungrad und
          verunreinigt die Kupplung: Rechnung springt auf
          1400&nbsp;EUR. Ein tropfender Kuehlerschlauch kostet
          60&nbsp;EUR. Derselbe Schlauch, der auf der Autobahn
          nachgibt, ueberhitzt den Motor und sprengt die Kopfdichtung:
          2000&nbsp;EUR. Die KI-Vision gibt Ihnen ein bis zwei Wochen
          Vorsprung.
        </p>

        <h2>Wann fahren, wann abschleppen</h2>
        <p>
          Das System gibt am Ende der Analyse eine klare Empfehlung.
          Leichtes Schwitzen: normal fahren, innerhalb der Woche zur
          Werkstatt. Langsame Leckage: Stand vor jeder Fahrt pruefen,
          Reparatur binnen 15 Tagen. Moderate Leckage: Fahrten auf das
          Noetigste, Reparatur in 48 Stunden. Kritische Leckage von
          Brems- oder wichtiger Kuehlfluessigkeit: nicht mehr fahren,
          Abschleppen Pflicht. Derselbe Logik wie beim{" "}
          <Link href="/de/codes/p0128">Code P0128</Link> —
          antizipieren kostet immer weniger.
        </p>

        <h2>Was das Foto nicht kann</h2>
        <p>
          Die KI-Vision identifiziert Fluessigkeit und Schwere,
          ersetzt aber keine komplette mechanische Diagnose. Sie sagt
          nicht, welche Dichtung genau schuld ist — dafuer braucht es
          eine Inspektion auf der Buehne. Interne Lecks, die nicht zum
          Boden kommen (z.&nbsp;B. Kopfdichtung, die Coolant ins Oel
          schickt), erkennt sie nicht. Fuer diese Faelle uebernimmt der{" "}
          <Link href="/de/blog/ihr-motor-spricht-panne-durch-klang-erkennen">
            Motor-Klang-Scan
          </Link>
          : er hoert die Mikro-Klappergeraeusche, die interne Leckagen
          an den Lagern erzeugen.
        </p>

        <h2>Das Protokoll, das funktioniert</h2>
        <p>
          Die Methode, die am besten funktioniert: Auto auf hellem,
          glattem, trockenem Boden parken. Ist der Boden dunkel,
          schieben Sie einen weissen A4-Karton vor dem Abstellen unter
          das Fahrzeug. Mindestens zwei Stunden ruhen lassen, ideal
          ueber Nacht. Morgens auf einen Meter Abstand hocken, den
          Fleck mit einer Referenz am Boden (Muenze, Schluessel) fuer
          Massstab einrahmen. Scan starten. In drei Sekunden wissen
          Sie, was leckt. Machen Sie das Foto in der Folgewoche
          gleich, um die Entwicklung zu verfolgen.
        </p>

        <h2>Mit dem monatlichen Checkup kombinieren</h2>
        <p>
          Leckerkennung ist der erste Schritt eines{" "}
          <Link href="/de/blog/visueller-ki-checkup-5-punkte-gesundes-auto">
            visuellen 5-Punkte-Checkups
          </Link>
          , den Sie monatlich in fuenf Minuten machen koennen. Weitere
          Punkte: Reifenabnutzung, Belaege durch die Felge, Stand unter
          der Haube, Aussenbeleuchtung. Wenn Sie zusaetzlich einen
          OBD2-Dongle haben, denken Sie an den{" "}
          <Link href="/de/codes/p0420">Code P0420</Link>, der oft eine
          Oelleckage begleitet, die den Kat erreicht hat. Beide
          Technologien — Vision und Klang-Scan — ergaenzen sich.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

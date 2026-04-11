import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDECheckup5Punkte() {
  const faq: FaqItem[] = [
    {
      q: "Wie lange dauert die KI-Sichtpruefung in fuenf Punkten?",
      a: "Fuenf Minuten, wenn Sie dem Protokoll folgen, zehn als Anfaenger. Die App fuehrt Sie Punkt fuer Punkt, erkennt jede Aufnahme und bestaetigt, wenn das Bild auswertbar ist. Das ist weniger Zeit, als eine Tankfuellung braucht.",
    },
    {
      q: "Wie oft sollte ich diese Pruefung machen?",
      a: "Einmal im Monat bei taeglicher Nutzung. Alle zwei Wochen, wenn Sie viel fahren oder das Fahrzeug aelter als zwoelf Jahre ist. Vor einer langen Fahrt ist es die rentabelste Routine ueberhaupt &mdash; fuenf Minuten, um ein Problem zu entdecken, das Sie sonst die Reise kosten koennte.",
    },
    {
      q: "Brauche ich spezielles Material?",
      a: "Nur ein Handy und eine Lampe fuer dunkle Bereiche (die Handylampe reicht). Ein weisses A4-Blatt hilft beim Punkt Leckagen, ist aber nicht Pflicht. Kein Werkzeug, keine Demontage.",
    },
    {
      q: "Was macht die App mit meinen Fotos?",
      a: "Sie werden auf dem Server analysiert, das Ergebnis kommt als Diagnose zurueck, dann werden die Bilder innerhalb von 48&nbsp;Stunden geloescht &mdash; es sei denn, Sie erlauben ihre Aufbewahrung zur Verbesserung des Modells. Sie behalten nur den Bericht, nicht die Fotos.",
    },
    {
      q: "Erkennt die Pruefung alles?",
      a: "Sie erkennt, was von aussen sichtbar ist. Fuer elektronische Pannen oder interne Motorprobleme braucht es zusaetzlich einen OBD2-Scan oder einen Klang-Scan. Die drei Technologien ergaenzen sich und decken zusammen ueber 90&nbsp;% der haeufigen Pannen ab.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="KI-Sichtpruefung in fuenf Punkten: Ihr Fahrzeug gesund halten"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Praevention"
      >
        <p>
          Die beste Panne ist die, die man erwischt, bevor sie eine Panne
          wird. Das ist kein Slogan, das ist eine wirtschaftliche Wahrheit:
          Eine vorgezogene Reparatur kostet im Schnitt viermal weniger als
          eine Notreparatur. Das Problem: Die meisten wissen nicht, wohin
          sie schauen sollen, und wann. Die Sichtpruefung in fuenf Punkten
          ist die Routine, die wir genau dafuer entworfen haben: fuenf
          Minuten, fuenf Zonen, ein Handy, und die KI-Vision erledigt die
          Expertenarbeit.
        </p>

        <h2>Punkt 1: Der Boden unter dem Auto</h2>
        <p>
          Parken Sie das Auto auf hellem, trockenem Grund und warten Sie
          mindestens zwei Stunden. Gehen Sie in einem Meter Abstand in die
          Hocke und fotografieren Sie die Zone unter dem Motorblock. Dann
          ein zweites Bild unter dem Getriebe. Die KI sucht drei Dinge:
          einen sichtbaren Fluessigkeitsfleck, einen Unterschied zu
          vorherigen Aufnahmen, eine ungewoehnliche Farbe. Wenn nichts
          auftaucht, geht es in zehn Sekunden zu Punkt 2. Taucht etwas auf,
          erhalten Sie sofort das volle Detail: wahrscheinliche
          Fluessigkeit, Schweregrad, empfohlene Massnahme. Dieser Schritt
          ist ausfuehrlich im Artikel{" "}
          <Link href="/de/blog/ki-vision-leckagen-unter-auto-mit-handy-erkennen">
            Leckage-Erkennung mit KI-Vision
          </Link>{" "}
          behandelt.
        </p>

        <h2>Punkt 2: Die Reifen</h2>
        <p>
          Ein Foto pro Reifen, senkrecht zur Lauflaeche. Das Modell misst
          die Restprofiltiefe in den Rillen, erkennt anormale
          Verschleissmuster (Mitte, Schultern, Raender, Cupping), vergleicht
          mit dem Verlauf und alarmiert Sie, wenn ein Reifen abweicht.
          Dieser Schritt zahlt sich am schnellsten aus: Ein falsch
          aufgepumpter Reifen, frueh erkannt, erspart zweihundert Euro
          vorzeitigen Wechsel. Die Methode im Detail im Artikel{" "}
          <Link href="/de/blog/vorzeitiger-reifenverschleiss-ki-sieht-was-sie-nicht-bemerken">
            vorzeitiger Reifenverschleiss
          </Link>
          .
        </p>

        <h2>Punkt 3: Die Bremsbelaege durch die Speichen</h2>
        <p>
          Drehen Sie das Lenkrad voll ein, um den vorderen rechten Belag
          freizulegen, schieben Sie das Handy zwischen die Speichen, Lampe
          an, Foto. Dann links das Gleiche. Die KI-Vision misst die
          Restdicke des Belages, erkennt Riefen auf der Scheibe (gestreiftes
          Aussehen), beginnende Verglasung und Hitzemarken (blaeuliche
          Verfaerbung, die Ueberhitzung verraet). Ein Belag unter 3&nbsp;mm
          loest eine rote Warnung aus: etwa 2000&nbsp;km Restreichweite. Ein
          Belag bei 6&nbsp;mm ist gruen. Diese praezise Messung erspart
          Ueberraschungen auf langer Fahrt. Details im Artikel{" "}
          <Link href="/de/blog/bremsbelag-bremsscheiben-verschleiss-ki-vision-erkennt">
            Bremsbelag- und Bremsscheibenverschleiss durch KI-Vision
          </Link>
          .
        </p>

        <h2>Punkt 4: Unter der Motorhaube</h2>
        <p>
          Oeffnen Sie die Motorhaube. Vier Fotos: der Oeldeckel mit
          herausgezogenem Peilstab zur Niveaukontrolle, der
          Kuehlmittelausgleichsbehaelter, der Bremsfluessigkeitsbehaelter
          und eine Gesamtansicht der sichtbaren Riemen. Die KI misst die
          Fuellstaende ueber die Position der Fluessigkeit in den
          lichtdurchlaessigen Behaeltern, erkennt beginnende Risse an den
          Nebenaggregateriemen, sieht Sickerspuren an einem Schlauch. Ist
          Ihr Kuehlmittel von sattem Gruen auf Rostbraun gewechselt, ist das
          die Signatur einer zu beobachtenden Verunreinigung. Ist Ihr Oel
          auf dem Peilstab truebe, ist der Oelwechsel ueberfaellig. Vier
          Fotos, vier Kontrollen.
        </p>

        <h2>Punkt 5: Die Aussenbeleuchtung</h2>
        <p>
          Lassen Sie jemanden nacheinander Abblendlicht, Fernlicht, Blinker
          und Bremslichter einschalten. Fuer die Bremslichter reicht ein
          Fuss auf dem Pedal, wenn Sie alleine sind. Ein Foto von vorne,
          eines im Dreiviertelprofil, eines von hinten. Die KI zaehlt die
          aktiven Lichtquellen, erkennt eine durchgebrannte Gluehbirne,
          signalisiert eine Leistungsasymmetrie (ein Scheinwerfer gelber als
          der andere&nbsp;= Gluehbirne am Lebensende). Eine defekte
          Gluehbirne ist ein TUeV-Ausschlusskriterium und das am einfachsten
          zu behebende Problem vor dem Pruefungstag.
        </p>

        <h2>Der synthetische Bericht</h2>
        <p>
          Am Ende der fuenf Punkte erstellt die App einen einzigen Bericht
          mit Farbcode: gruen, wenn alles gut ist, orange, wenn ein Punkt
          Beobachtung erfordert, rot, wenn ein Punkt Handeln verlangt.
          Dieser Bericht wird im Verlauf Ihres Fahrzeugs archiviert. Monat
          fuer Monat sehen Sie die Kurven: Profiltiefe, die sinkt,
          Belagstaerke, die abnimmt, Fuellstaende, die schwanken. An dem
          Tag, an dem eine Kurve ins Anormale kippt, werden Sie gewarnt,
          bevor Sie selbst etwas bemerken.
        </p>

        <h2>Die Kombination, die 90&nbsp;% abdeckt</h2>
        <p>
          Die Sichtpruefung ist kein Einzelwerkzeug. Sie ist Teil einer
          Dreifaltigkeit: KI-Vision fuer aussen, Klang-Scan fuer die
          Geraeusche (siehe{" "}
          <Link href="/de/blog/11-motorpannen-erkennbar-durch-klanganalyse">
            11 Pannen, die am Klang erkennbar sind
          </Link>
          ), OBD2-Scan fuer die Elektronik (siehe{" "}
          <Link href="/de/codes/p0171">
            Code P0171 und Mager-Gemisch-Codes
          </Link>
          ). Zusammen decken die drei ueber 90&nbsp;% der haeufigen Pannen
          europaeischer Fahrzeuge in ihrer Fruehphase ab, wo die Reparatur
          bezahlbar bleibt. Fuenf Minuten pro Monat fuer den visuellen Teil,
          drei Minuten fuer den sonoren, zwei Minuten fuer den
          elektronischen. Zehn monatliche Minuten, die nach unseren
          Felddaten im Schnitt 800&nbsp;EUR pro Jahr sparen.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEVINScannen() {
  const faq: FaqItem[] = [
    {
      q: "Was ist eine VIN und wo finde ich sie?",
      a: "Die VIN (Vehicle Identification Number) ist eine eindeutige 17-stellige Nummer, die seit 1981 in jedes Fahrzeug eingepraegt wird. Man findet sie unten an der Windschutzscheibe auf der Fahrerseite, am Tuerrahmen der Fahrertuer, unter der Motorhaube auf einem Herstellerschild und im Fahrzeugschein. Die KI-Vision liest die 17 Zeichen direkt vom Schild oder der Gravur.",
    },
    {
      q: "Was enthaelt die VIN genau?",
      a: "Die VIN besteht aus drei Abschnitten: WMI (3 Zeichen, identifiziert Hersteller und Land), VDS (6 Zeichen, beschreibt Modell, Karosserie und Motorisierung), VIS (8 Zeichen, enthaelt Modelljahr, Montagewerk und Seriennummer). Jedes Zeichen hat eine praezise Bedeutung und kann nicht zufaellig erfunden sein.",
    },
    {
      q: "Liefert ein VIN-Scan die vollstaendige Historie?",
      a: "Er gibt Zugriff auf die von europaeischen Datenbanken aggregierte Historie: Unfallmeldungen, aufeinanderfolgende Kilometerstaende bei TUeV/MFK, bei Vertragshaendlern gemeldete Wartungen, Herstellerrueckrufe. Die Tiefe haengt vom Herkunftsland und der Kooperation der Amtsstellen ab. Das ist unvergleichlich mit einem einfachen Kennzeichen-Scan.",
    },
    {
      q: "Warum ist die VIN beim Kauf zuverlaessiger als das Kennzeichen?",
      a: "Weil das Kennzeichen ersetzt, geaendert, gefaelscht werden kann. Die VIN ist ins Metall gepraegt und begleitet das Fahrzeug ein Leben lang. Ein Fahrzeug, dessen VIN nicht mit dem Schein uebereinstimmt, ist wahrscheinlich gestohlen oder manipuliert. Das ist die Sicherheitsnummer des Autos.",
    },
    {
      q: "Gibt es Datenschutzrisiken beim Scannen einer VIN?",
      a: "Fuer Ihr eigenes Fahrzeug keine. Fuer ein Fahrzeug, das Sie kaufen wollen, haben Sie das Recht, seine Historie einzusehen &mdash; der Verkaeufer ist in Europa sogar verpflichtet, bestimmte Infos weiterzugeben. AutoDiag&nbsp;EU speichert gescannte VINs nicht in einem mit Ihrer Identitaet verknuepften Profil.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="VIN scannen: Die komplette Fahrzeughistorie dekodieren"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Gebrauchtwagenkauf"
      >
        <p>
          Siebzehn Zeichen. Mehr braucht es nicht, um die ganze Geschichte
          eines Autos zu kennen. Die VIN (Vehicle Identification Number)
          ist die wahre DNA des Fahrzeugs: Sie kodiert Hersteller, Werk,
          Modelljahr, Motortyp, Karosserie, und jedes Exemplar erhaelt
          eine einzigartige Seriennummer. Diese VIN mit Ihrem Handy zu
          scannen, heisst eine komplette Akte in zwei Sekunden zu oeffnen
          &mdash; und im Fall eines Gebrauchtkaufs Tausende Euro an boesen
          Ueberraschungen zu vermeiden.
        </p>

        <h2>Die Anatomie der 17 Zeichen</h2>
        <p>
          Die VIN ist seit 1981 weltweit standardisiert. Die ersten drei
          Zeichen bilden den WMI (World Manufacturer Identifier): Sie
          bezeichnen Land und Hersteller. WDB fuer Mercedes-Benz in
          Deutschland, VF1 fuer Renault in Frankreich, WVW fuer Volkswagen
          in Deutschland. Die naechsten sechs Zeichen bilden den VDS
          (Vehicle Descriptor Section): Sie kodieren Modell,
          Karosserietyp, Motorisierung und manchmal das
          Rueckhaltesystem. Die letzten acht Zeichen bilden den VIS
          (Vehicle Identifier Section): Das zehnte Zeichen ist das
          Modelljahr (A&nbsp;= 2010, B&nbsp;= 2011, usw., unter
          Auslassung von I, O, Q, U, Z), das elfte ist das Montagewerk,
          die letzten sechs sind die eindeutige Seriennummer.
        </p>

        <h2>Was die OCR-KI erfasst</h2>
        <p>
          Die VIN ist an mehreren Stellen des Autos eingepraegt oder
          angebracht. Die zugaenglichste ist der untere Teil der
          Windschutzscheibe auf der Fahrerseite, von aussen durch das
          Glas sichtbar. Die Gravur ist klein, reflektierend, manchmal von
          Schmutz verdeckt. Die KI-Vision bewaeltigt diese Bedingungen:
          Sie gleicht die Belichtung aus, eliminiert Reflexe und liest die
          17 Zeichen mit Toleranz fuer klassische Verwechslungen (Null
          gegen O, Eins gegen I). Sie kann die VIN auch vom Herstellerschild
          unter der Motorhaube lesen oder sogar von einem Foto des
          Fahrzeugscheins &mdash; nuetzlich zum Scannen aus der Distanz.
        </p>

        <h2>Der Gebrauchtkauf, der sich veraendert</h2>
        <p>
          Typisches Szenario: Sie antworten auf ein Inserat fuer einen
          Audi A4 Avant 2.0 TDI von 2016, 145&nbsp;000&nbsp;km
          angegeben. Der Verkaeufer hat Wartungsrechnungen, das Auto
          wirkt sauber, alles scheint gut. Sie scannen die VIN mit dem
          Handy. Die Antwort kommt in drei Sekunden: Das Modelljahr ist
          tatsaechlich 2016, aber der durchschnittliche Kilometerstand
          beim letzten TUeV (vor 14&nbsp;Monaten) betrug
          168&nbsp;000&nbsp;km. Schlussfolgerung: Der Tacho wurde um
          23&nbsp;000&nbsp;km zurueckgedreht. Sie gehen. Dieser Betrug
          ist der haeufigste im Gebrauchtmarkt, und die KI-Vision erkennt
          ihn in drei Sekunden. Bei 50&nbsp;Kaeufen zeigen Felddaten, dass
          ein bis zwei Fahrzeuge solche Inkohaerenzen aufweisen.
        </p>

        <h2>Die vergessenen Herstellerrueckrufe</h2>
        <p>
          Jeder Hersteller veroeffentlicht regelmaessig Rueckrufkampagnen
          fuer nach der Vermarktung identifizierte Maengel. Takata-Airbag,
          EGR-Ventil, Hochdruckpumpe, ABS-Modul, Injektoren &mdash; die
          Liste ist lang. Der Besitzer sollte ein Schreiben erhalten, aber
          mit Adresswechseln, Weiterverkaeufen und verlorenen Schreiben
          fahren viele Fahrzeuge noch mit unkorrigierten Maengeln. Der
          VIN-Scan fragt die Herstellerdatenbanken ab und zeigt die Liste
          der fuer dieses Fahrzeug anwendbaren Rueckrufe mit ihrem Status
          (bearbeitet oder nicht). Ist ein Rueckruf offen, koennen Sie
          vor dem Kauf die kostenlose Durchfuehrung beim Vertragshaendler
          verlangen.
        </p>

        <h2>Die fehlerfreie Teilebestellung</h2>
        <p>
          Eine weitere, weniger spektakulaere, aber sehr praktische
          Anwendung: Teilebestellungen. Wenn Sie einen Bremsbelag fuer
          einen VW Golf bestellen, gibt es oft drei oder vier
          verschiedene Referenzen je nach Bremstyp (Scheibendurchmesser),
          Ausstattung, exaktem Produktionsjahr. Die VIN uebermittelt diese
          Info praezise an den Verkaeufer, der die richtige Referenz im
          ersten Anlauf findet. Schluss mit Hin-und-her-Fahrten,
          Schluss mit 30-Euro-Rueckversandgebuehren. Zur regelmaessigen
          Wartung siehe auch den Artikel zur{" "}
          <Link href="/de/blog/motorschaden-vermeiden-vorbeugende-klangdiagnose">
            vorbeugenden Diagnose
          </Link>
          .
        </p>

        <h2>Versicherung und Angebote</h2>
        <p>
          Bei Versicherungsangeboten verlangen Gesellschaften manchmal nur
          das Kennzeichen, manchmal die vollstaendige VIN. VIN-basierte
          Angebote sind praeziser, weil sie das exakte Modell, die
          Ausstattung und eventuelle deklarierte Modifikationen
          beruecksichtigen. Ein VIN-Scan vor dem Tarifvergleich kann das
          Angebot um 10 bis 25&nbsp;% in die eine oder andere Richtung
          schwanken lassen. Bei typischen Jahrespraemien von 600 bis
          1200&nbsp;EUR sind das potenziell 60 bis 300&nbsp;EUR
          Jahresersparnis.
        </p>

        <h2>Grenzen und Datenschutz</h2>
        <p>
          Der VIN-Scan liefert nicht alles. Nicht gemeldete Unfaelle
          tauchen in den Datenbanken nicht auf. Eingriffe bei freien
          Werkstaetten (nicht Vertragshaendler) werden nicht immer
          erfasst. Die Historientiefe haengt vom Land ab:
          Deutschland, Frankreich und Belgien haben solide TUeV-Datenbanken,
          andere Laender sind lueckenhafter. Zum Datenschutz:
          AutoDiag&nbsp;EU verknuepft die gescannte VIN nicht mit Ihrem
          persoenlichen Konto, und Anfragen werden nach sieben Tagen
          geloescht. Sie konsultieren, entscheiden, vergessen. Ergaenzend
          zur elektronischen Pruefung hilft ein OBD2-Scan, der
          gespeicherte Codes wie{" "}
          <Link href="/de/codes/p0011">P0011</Link> offenbart, oft
          verbunden mit vernachlaessigter Distributionswartung.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

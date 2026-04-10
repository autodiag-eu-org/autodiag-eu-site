import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDETUVVorbereitung2026() {
  const faq: FaqItem[] = [
    {
      q: "Wie oft muss ich zur Hauptuntersuchung in Deutschland?",
      a: "Neuwagen muessen nach 36 Monaten zum ersten Mal zur HU. Danach alle 24 Monate. Bei Motorraedern identisch. Taxi und Mietwagen haben kuerzere Intervalle (jaehrlich). Der Termin steht auf der TUeV-Plakette am hinteren Kennzeichen.",
    },
    {
      q: "Was kostet die HU 2026 in Deutschland?",
      a: "Die Hauptuntersuchung inklusive Abgasuntersuchung kostet 2026 je nach Pruefstelle und Bundesland zwischen 80 und 150 EUR fuer einen PKW. TUeV Sued und Rheinland liegen meist um 130 EUR, DEKRA und GTUe etwas darunter. Eine Nachpruefung kostet 15 bis 30 EUR zusaetzlich.",
    },
    {
      q: "Was passiert, wenn die MKL bei der HU leuchtet?",
      a: "Eine aktive Motorkontrollleuchte ist seit 2010 ein erheblicher Mangel. Sie fallen direkt durch. Der Pruefer liest zudem den Fehlerspeicher aus. Loeschen kurz vor dem Termin hilft nicht, da die Readiness-Monitore dann unvollstaendig sind.",
    },
    {
      q: "Wie lange habe ich Zeit fuer eine Nachpruefung?",
      a: "Nach einer nicht bestandenen HU haben Sie einen Monat Zeit, die Maengel zu beheben und zur Nachpruefung in derselben Pruefstelle zu erscheinen. Danach wird die komplette HU faellig &mdash; mit voller Gebuehr.",
    },
    {
      q: "Kann AutoDiag EU eine HU-Vorpruefung ersetzen?",
      a: "Nein, eine echte HU muss immer von einer zugelassenen Organisation durchgefuehrt werden. AutoDiag EU ist ein Vorbereitungswerkzeug: Fehlerspeicher auslesen, Live-Daten pruefen, Audio-Scan fuer Motorgeraeusche. So vermeiden Sie boese Ueberraschungen beim Pruefer.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="de"
        title="TUeV-Vorbereitung 2026: Beim ersten Mal bestehen"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={10}
        category="TUeV-Ratgeber"
      >
        <p>
          Alle zwei Jahre steht der TUeV an, und jedes Jahr fallen in
          Deutschland rund 20 Prozent der Fahrzeuge durch die
          Hauptuntersuchung. Die gute Nachricht: Die Haelfte dieser
          Durchfaelle waere mit einer strukturierten Vorbereitung vermeidbar.
          In diesem Guide finden Sie die aktuelle Checkliste fuer 2026,
          angepasst an die verschaerften Abgaskontrollen, und eine klare
          Vorgehensweise &mdash; vom OBD-Vorscan bis zum Morgen des Termins.
        </p>

        <h2>HU und AU in Deutschland 2026</h2>
        <p>
          Die Hauptuntersuchung wird von TUeV Sued, TUeV Nord, TUeV Rheinland,
          DEKRA, GTUe und KUeS durchgefuehrt. Seit 2010 ist die
          Abgasuntersuchung (AU) in die HU integriert. Die Kosten liegen 2026
          zwischen 80 und 150 EUR. Achtung: ab zwei Monaten Ueberziehung wird
          eine erweiterte HU faellig (Aufpreis ca. 20 Prozent), ab acht
          Monaten drohen Punkte in Flensburg und 60 EUR Bussgeld.
        </p>

        <h2>Schritt 1: OBD-Vorscan &mdash; der wichtigste Test</h2>
        <p>
          Vier Wochen vor dem Termin: Schliessen Sie einen ELM327-Adapter an
          die OBD2-Buchse an und starten Sie AutoDiag EU. Pruefen Sie drei
          Dinge: aktive Fehlercodes, Readiness-Monitore und Lambdawerte. Jeder
          Code muss VOR dem Termin behoben werden &mdash; nicht geloescht.
          Haeufige Kandidaten sind{" "}
          <Link href="/de/codes/p0420">P0420</Link>,{" "}
          <Link href="/de/codes/p0171">P0171</Link> und{" "}
          <Link href="/de/codes/p0128">P0128</Link>. Ist ein Code geloescht,
          muessen die Readiness-Monitore durch eine laengere Fahrstrecke wieder
          auf &laquo;ready&raquo; gesetzt werden.
        </p>

        <h2>Schritt 2: Dieselpartikelfilter und Abgaswerte</h2>
        <p>
          Diesel-PKW haben es 2026 besonders schwer. Die Truebungsmessung
          (Opazitaet) ist strenger geworden. Ein verstopfter DPF fuehrt fast
          immer zum Durchfallen. Vor dem Termin: mindestens 30 Minuten
          Autobahnfahrt bei 2500 bis 3000 Umdrehungen, um eine
          Regeneration auszuloesen. Mit AutoDiag EU koennen Sie den
          DPF-Russbeladungswert live auslesen. Liegt er ueber 70 Prozent,
          muessen Sie zwingend handeln. Benziner: Katalysator mindestens 20
          Minuten warmfahren vor dem Termin.
        </p>

        <h2>Schritt 3: Bremsen, Lenkung, Fahrwerk</h2>
        <p>
          Nach der Beleuchtung sind Bremsen, Achsen und Reifen die Top-Gruende
          fuer Beanstandungen. Der Rollenpruefstand fordert 58 Prozent
          Bremswirkung an der Betriebsbremse und 16 Prozent an der Feststell-
          bremse. Pruefen Sie: Bremsbelaege (Verschleissanzeiger), Scheiben
          auf Rillen, Bremsfluessigkeit (DOT4 alle 2 Jahre wechseln). Beim
          Fahrwerk achten Sie auf ausgeschlagene Spurstangenkoepfe, defekte
          Koppelstangen und oelfeuchte Stossdaempfer. Kosten in Deutschland
          2026: Bremsbelaege 90 bis 160 EUR pro Achse, Stossdaempfer 180 bis
          400 EUR pro Paar.
        </p>

        <h2>Schritt 4: Beleuchtung und Sicht</h2>
        <p>
          Die Nummer 1 der Durchfallgruende: defekte Gluehbirnen und falsch
          eingestellte Scheinwerfer (rund 26 Prozent aller Beanstandungen).
          Pruefen Sie jede einzelne Leuchte: Abblend-, Fern-, Stand-, Brems-,
          Blinker-, Rueckfahr-, Nebelschluss- und Kennzeichenleuchte. Bei
          Xenon- oder LED-Scheinwerfern muss die Leuchtweitenregulierung
          funktionieren. Wischerblaetter gehoeren im Herbst sowieso getauscht.
          Risse in der Windschutzscheibe groesser als 10 mm im Sichtfeld des
          Fahrers = erheblicher Mangel.
        </p>

        <h2>Schritt 5: Reifen und Karosserie</h2>
        <p>
          Mindestprofil 1,6 mm gesetzlich, aber der Pruefer empfiehlt 3 mm bei
          Sommer- und 4 mm bei Winterreifen. Ungleichmaessiger Verschleiss
          deutet auf Fahrwerks- oder Spurprobleme hin &mdash; beheben lassen.
          Beulen oder Risse in der Seitenwand = sofortiger Tausch. Bei der
          Karosserie ist Rost an tragenden Teilen (Schweller, Laengstraeger,
          Radaufnahmen) die groesste Gefahr, besonders bei Fahrzeugen ab 10
          Jahren.
        </p>

        <h2>Schritt 6: Der ideale Vorbereitungskalender</h2>
        <ul>
          <li>
            <strong>4 Wochen vorher:</strong> OBD-Scan mit AutoDiag EU,
            Fehlercodes recherchieren, Audio-Scan des Motors.
          </li>
          <li>
            <strong>3 Wochen vorher:</strong> Reparaturen in der Werkstatt.
          </li>
          <li>
            <strong>2 Wochen vorher:</strong> Beleuchtung, Wischer, Reifen-
            profil.
          </li>
          <li>
            <strong>1 Woche vorher:</strong> Fluessigkeiten (Brems, Kuehl,
            Waschwasser, Oel), zweiter OBD-Scan zur Bestaetigung.
          </li>
          <li>
            <strong>Am Tag selbst:</strong> 30 Minuten Autobahnfahrt, sauberes
            Fahrzeug, Fahrzeugpapiere und letzte HU-Bescheinigung mitnehmen.
          </li>
        </ul>

        <h2>Fazit</h2>
        <p>
          Der TUeV muss kein Stressfaktor sein. Wer vier Wochen vorher mit dem
          OBD-Scan beginnt, die haeufigsten Fehlercodes abarbeitet, die
          DPF-Regeneration faehrt und die Beleuchtung kontrolliert, besteht
          die HU 2026 beim ersten Mal. AutoDiag EU ist Ihr kostenloses
          Vorbereitungswerkzeug &mdash; kein Ersatz fuer die HU, aber der
          beste Weg, teure Nachpruefungen zu vermeiden.
        </p>
      </ArticleLayout>
    </>
  );
}

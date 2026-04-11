import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEGebrauchtwagenKaufen() {
  const faq: FaqItem[] = [
    {
      q: "Was ist die wichtigste Pruefung vor dem Kauf?",
      a: "Der komplette OBD2-Scan, direkt gefolgt von einem Motor-Klang-Scan. Der erste enthuellt versteckte Codes und Alterungswerte (Lambda, Katalysator, Fuel Trims). Der zweite erkennt mechanischen Verschleiss, den der Verkaeufer auch durch Loeschen der Codes nicht verbergen kann. Zusammen geben sie in weniger als zehn Minuten ein verlaessliches Bild vom realen Zustand.",
    },
    {
      q: "Kann man eine Warnleuchte kurz vor dem Verkauf loeschen?",
      a: "Ja, und viele zweifelhafte Verkaeufer tun das. Aber einige Codes kommen nach wenigen Kilometern zurueck, und vor allem stehen die Readiness-Werte (OBD2-Monitore) dann auf Null. Ein ehrlicher Verkaeufer loescht nicht kurz vor der Besichtigung: die Monitore sind bereit, das heisst, das Steuergeraet hatte Zeit, sich nach Reparaturen zu initialisieren.",
    },
    {
      q: "Wie erkennt man einen manipulierten Tacho?",
      a: "Kreuzen Sie drei Quellen ab: Scheckheft mit Daten und Kilometerstaenden, TUeV-Report oder aehnliches, und der reale Kilometerstand, den der OBD2-Scanner aus bestimmten Steuergeraeten (ABS, Getriebe) auslesen kann. Eine Abweichung von mehr als 5000&nbsp;km ist ein klares Signal. Die groessten Manipulationen ueberschreiten die 50000&nbsp;km.",
    },
    {
      q: "Soll ich einen Ankauftest beim Mechaniker bezahlen?",
      a: "Fuer ein Auto ueber 10000&nbsp;EUR ja, rechnen Sie mit 100 bis 200&nbsp;EUR. Unter diesem Betrag deckt ein kompletter Scan mit der App plus aufmerksame Probefahrt 85&nbsp;% der Faelle ab. Bei konkretem Zweifel (Kupplung, Getriebe) bleibt ein Besuch beim Markenspezialisten beruhigend.",
    },
    {
      q: "Welche Dokumente sind zwingend zu verlangen?",
      a: "Originalfahrzeugbrief, Unbedenklichkeitsbescheinigung, HU juenger als 6 Monate, Scheckheft, Rechnungen grosser Eingriffe (Zahnriemen, Kupplung, Turbo). Bei Importfahrzeug pruefen, dass die EU-Uebereinstimmungsbescheinigung vorliegt. Verweigern Sie jeden Kauf ohne diese Grunddokumente.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Gebrauchtwagen kaufen: die wichtigen Pruefungen in 2026"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Gebrauchtwagenkauf"
      >
        <p>
          Der Gebrauchtwagenmarkt ist eine Falle. Die Inserate glaenzen, die
          Verkaeufer sind freundlich, die Fotos sind schmeichelhaft, und
          dennoch bereut jeder dritte Kaeufer seinen Kauf innerhalb von
          sechs Monaten, so europaeische Verbraucherstudien. Die gute
          Nachricht: 80&nbsp;% der schlechten Geschaefte haetten durch eine
          methodische 30-Minuten-Inspektion vermieden werden koennen. Hier
          ist die komplette Checkliste, die ein versierter Kaeufer in 2026
          befolgen sollte.
        </p>

        <h2>Bevor Sie sich ueberhaupt auf den Weg machen</h2>
        <p>
          Scannen Sie das Kennzeichen oder die VIN per OCR aus dem Inserat,
          um die Grundkonformitaet zu pruefen: Marke, Modell, Baujahr,
          Kraftstoff, Motorisierung. Ein Verkaeufer, der sich beim eigenen
          Auto irrt, ist ein Signal. Konsultieren Sie TUeV-Report
          (Deutschland), Car-Pass (Belgien) oder Aequivalent, um
          Kilometerhistorie, gemeldete Unfaelle und Rueckrufe zu pruefen.
          Siehe{" "}
          <Link href="/fr/blog/scanner-vin-decoder-historique-complet-voiture">
            die VIN scannen, um die Historie zu dekodieren
          </Link>
          .
        </p>

        <h2>Sichtpruefung Karosserie</h2>
        <p>
          Beginnen Sie mit einer Runde ums Auto bei Tageslicht. Suchen Sie
          Farbtonunterschiede zwischen den Blechen (Zeichen einer
          Neulackierung), Spachtelspuren unter den Kotfluegel-Kunststoffen,
          Ausrichtungsabweichungen an Motorhaube oder Tueren. Messen Sie
          die Lackdicke mit einem Lackschichtmessgeraet (15 bis 30&nbsp;EUR)
          &mdash; eine Dicke ueber 250&nbsp;Mikron verraet eine groessere
          Reparatur. Pruefen Sie die Fahrwerksschrauben am Radkasten: sind
          sie markiert, hatte das Auto einen Aufprall.
        </p>

        <h2>Unter dem Auto: was Lecks verraten</h2>
        <p>
          Schauen Sie auf den Boden, wo das Auto steht. Ein frischer brauner
          Fleck signalisiert ein Oelleck. Gruen, rosa oder orange: das ist
          Kuehlmittel. Rot: ATF des Automatikgetriebes. Transparent:
          Bremsfluessigkeit oder Klima-Kondensat (harmlos). Die Farben
          sprechen.
        </p>

        <h2>Die Reifen: eine Geschichte in vier Kapiteln</h2>
        <p>
          Reifen erzaehlen die Geometrie und den Verschleiss. Verschleiss
          Mitte: chronischer Ueberdruck. Verschleiss an den Schultern:
          Unterdruck oder defekter Stossdaempfer. Schraeger Verschleiss
          (Cupping): Fahrwerk oder Achsvermessung. Gleichmaessiger
          Verschleiss mit weniger als 3&nbsp;mm Profil: Reifen zum Wechseln,
          Verhandlungsfaktor. Pruefen Sie auch die Herstellungsdaten (DOT):
          Reifen ueber 6 Jahre verhaerten und verlieren Grip, selbst mit
          Profil.
        </p>

        <h2>OBD2-Scan: die Ehrlichkeit des Steuergeraets</h2>
        <p>
          Schliessen Sie Ihren ELM327-Dongle an und fuehren Sie einen
          kompletten Scan durch. Drei Dinge unbedingt pruefen. Erstens: die
          aktiven und ausstehenden Codes. Zweitens: die OBD2-Monitore
          (Readiness Tests) &mdash; sie muessen mehrheitlich auf ready
          stehen, Zeichen dass das Auto lange genug normal faehrt, damit
          das Steuergeraet alle Systeme testen konnte. Drittens: die
          Kilometerstaende aus bestimmten Steuergeraeten (ABS, Getriebe) zur
          Kreuzpruefung mit dem Tacho. Ein anstehender Code{" "}
          <Link href="/de/codes/p0300">P0300</Link> ist eine ernste
          Warnung.
        </p>

        <h2>Klang-Scan: was der Verkaeufer nicht verbergen kann</h2>
        <p>
          Der Klang-Scan laesst sich nicht manipulieren. Selbst wenn der
          Verkaeufer alle Codes geloescht hat, hinterlaesst mechanischer
          Verschleiss seine akustische Signatur. Starten Sie eine
          30-Sekunden-Aufnahme warm im Leerlauf und eine weitere bei
          2500&nbsp;U/min. Der SVM klassifiziert die Anomalien. Eine
          Konfidenz ueber 70&nbsp;% auf einer Klasse Bearing, Knock oder
          Tick ist ein Signal zur Diskussion.
        </p>

        <h2>Methodische Probefahrt</h2>
        <p>
          Minimum 20 Minuten unter vielfaeltigen Bedingungen: Stadt,
          Anfahrt aus dem Stand, Autobahn, kraeftige Bremsung, enger
          Kurvenradius. Horchen Sie auf verdaechtige Geraeusche, pruefen
          Sie, dass Gaenge ohne Stoss schalten, dass die Bremse klar und
          gerade greift, dass die Lenkung nicht zieht, dass die Klima
          schnell kuehlt. Motor warm abstellen, neu starten: ein Anlasser,
          der kaempft, oder Rauch beim Start sind grosse Warnungen.
        </p>

        <h2>Dokumente pruefen</h2>
        <p>
          Originalfahrzeugbrief auf den Namen des Verkaeufers,
          Unbedenklichkeitsbescheinigung nicht aelter als 15 Tage, HU
          juenger als 6 Monate, mit dem Kilometerstand stimmiges
          Scheckheft, Rechnungen wichtiger Eingriffe. Bei Fahrzeugen ueber
          5 Jahre ist die Zahnriemenrechnung entscheidend. Siehe auch{" "}
          <Link href="/de/codes/p0420">den Code P0420</Link>, ein haeufiger
          Verhandlungsgrund.
        </p>

        <h2>Auf faktischer Basis verhandeln</h2>
        <p>
          Wenn die Inspektion Maengel zeigt, verhandeln Sie mit Zahlen:
          Reparaturkostenvoranschlag, Instandsetzungskosten, Wertminderung.
          Ein seriouser Verkaeufer akzeptiert eine dokumentierte
          Verhandlung. Ein Verkaeufer, der sich bei einem Kostenvoranschlag
          von 400&nbsp;EUR aufregt, ist wahrscheinlich selbst ueberrascht
          von dem, was Sie gefunden haben. Gehen Sie notfalls &mdash; es
          gibt immer ein anderes Inserat.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

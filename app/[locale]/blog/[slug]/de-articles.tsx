import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

function ArticleLayout({
  children,
  title,
  date,
  author,
  readingTime,
  category,
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Startseite", href: "/de" },
          { label: "Blog", href: "/de/blog" },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href="/de/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; Zuruck zum Blog
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>Von {author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("de-DE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} Min. Lesezeit</span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">
          Bereit, Ihr Auto selbst zu diagnostizieren?
        </h3>
        <p className="mb-6 text-secondary">
          AutoDiag EU gibt Ihnen professionelle Werkzeuge, einfach gemacht.
          KI-Audio-Scan, Fehlercode-Leser und mehr &mdash; alles in Ihrer
          Tasche.
        </p>
        <Link
          href="/de#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Kostenlose Beta beitreten
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Artikel 1 — OBD2-Fehlercodes lesen
   ================================================================ */

export function ArticleDEOBD2FehlercodesLesen() {
  return (
    <ArticleLayout
      title="OBD2-Fehlercodes lesen &mdash; vollstandige Anleitung"
      date="2026-03-15"
      author="Reda Kaouani"
      readingTime={8}
      category="Anleitung"
    >
      <p>
        Die Motorkontrollleuchte leuchtet auf Ihrem Armaturenbrett? Keine
        Panik. Dieses kleine orangefarbene Symbol &mdash; manchmal ein
        stilisierter Motor, manchmal ein Ausrufezeichen &mdash; sagt Ihnen
        lediglich, dass Ihr Fahrzeug etwas Ungewoehnliches erkannt hat. Um
        genau herauszufinden, was los ist, muessen Sie die{" "}
        <strong>OBD2-Fehlercodes</strong> auslesen. Wir erklaeren Ihnen alles
        Schritt fuer Schritt, als stuenden wir direkt neben Ihnen in der
        Garage.
      </p>

      <h2>Was ist OBD2?</h2>
      <p>
        OBD2 steht fuer <em>On-Board Diagnostics, Version 2</em>. Es handelt
        sich um ein standardisiertes Diagnosesystem, das in allen in Europa
        seit 2001 (Benziner) bzw. 2004 (Diesel) verkauften Fahrzeugen
        vorhanden ist &mdash; in den USA sogar bereits seit 1996. Kurz gesagt:
        Ihr Auto besitzt einen Bordcomputer &mdash; das{" "}
        <strong>Steuergeraet</strong> (ECU) &mdash; der staendig den Motor,
        das Getriebe, die Abgaswerte und viele weitere Systeme ueberwacht.
        Erkennt er eine Abweichung, speichert er einen{" "}
        <strong>Fehlercode</strong>, auch DTC (Diagnostic Trouble Code)
        genannt.
      </p>
      <p>
        Stellen Sie sich OBD2 als das Gesundheitsheft Ihres Autos vor. Statt
        &laquo;&nbsp;Erkaeltung&nbsp;&raquo; oder
        &laquo;&nbsp;Grippe&nbsp;&raquo; schreibt es Codes wie P0420 oder
        P0171. Jeder Code entspricht einem bestimmten Problem.
      </p>

      <h2>Wo befindet sich die OBD2-Buchse?</h2>
      <p>
        Die OBD2-Buchse ist ein 16-poliger Stecker, der sich in der Regel
        unter dem Armaturenbrett auf der Fahrerseite befindet. Bei den meisten
        europaischen Fahrzeugen finden Sie ihn:
      </p>
      <ul>
        <li>Unter dem Lenkrad, links von der Lenksaeule</li>
        <li>Manchmal hinter einer kleinen Kunststoffabdeckung</li>
        <li>
          Bei einigen deutschen Fahrzeugen (BMW, Mercedes) kann er sich in
          der Mittelkonsole oder im Handschuhfach befinden
        </li>
        <li>
          Bei VW und Audi meistens unterhalb des Aschenbechers oder neben
          der Handbremse
        </li>
        <li>
          Bei Opel und Skoda haeufig direkt unter dem Lenkrad, gut
          zugaenglich
        </li>
      </ul>
      <p>
        Tipp: Wenn Sie die Buchse nicht finden, suchen Sie online nach
        &laquo;&nbsp;OBD2-Buchse Standort&nbsp;&raquo; gefolgt von Ihrem
        Fahrzeugmodell. In 90&nbsp;% der Faelle ist sie aber unter dem
        Lenkrad, direkt griffbereit.
      </p>

      <h2>Wie sind die Fehlercodes aufgebaut?</h2>
      <p>
        Jeder OBD2-Code folgt derselben Logik. Nehmen wir ein Beispiel:{" "}
        <strong>P0420</strong>. Dieser Code besteht aus 5 Zeichen, die jeweils
        eine bestimmte Bedeutung haben:
      </p>

      <h3>Der erste Buchstabe &mdash; das betroffene System</h3>
      <ul>
        <li>
          <strong>P (Powertrain)</strong> &mdash; Motor und Getriebe. Das ist
          der haeufigste Typ, etwa 70&nbsp;% aller Codes. Alles was den
          Antrieb betrifft: Einspritzung, Zuendung, Turbolader,
          Schaltgetriebe, Kupplung.
        </li>
        <li>
          <strong>C (Chassis)</strong> &mdash; Fahrwerk, Bremsen, Lenkung,
          Stabilitaetskontrolle.
        </li>
        <li>
          <strong>B (Body)</strong> &mdash; Karosserie, Klimaanlage,
          Airbags, elektrische Fensterheber.
        </li>
        <li>
          <strong>U (Network)</strong> &mdash; Kommunikation zwischen den
          Steuergeraeten, CAN-Bus-Fehler.
        </li>
      </ul>

      <h3>Die zweite Stelle &mdash; generisch oder herstellerspezifisch</h3>
      <ul>
        <li>
          <strong>0</strong> &mdash; Generischer Code (bei allen Marken
          gleich)
        </li>
        <li>
          <strong>1</strong> &mdash; Herstellerspezifischer Code (z.&nbsp;B.
          nur bei BMW oder VW)
        </li>
      </ul>

      <h3>Stellen 3 bis 5 &mdash; das genaue Problem</h3>
      <p>
        Die dritte Stelle zeigt das Untersystem (Kraftstoff, Zuendung,
        Abgas usw.), und die letzten beiden Stellen identifizieren den
        spezifischen Fehler. P04<strong>20</strong> beispielsweise verweist
        auf die Katalysatoreffizienz.
      </p>

      <h2>3 haeufige Fehlercodes erklaert</h2>

      <h3>P0420 &mdash; Katalysatoreffizienz unter Schwellenwert</h3>
      <p>
        Das ist der absolute Klassiker. Der Code bedeutet, dass Ihr
        Katalysator nicht mehr effizient genug arbeitet, um die Abgase
        ausreichend zu reinigen. Der Katalysator ist ein teures Bauteil (300
        bis 1.500&nbsp;EUR je nach Fahrzeug), aber bevor Sie sich Sorgen
        machen: Haeufig liegt es einfach an einer defekten
        Lambdasonde (80&ndash;200&nbsp;EUR) oder sogar an einer undichten
        Abgasanlage. Beim TUeV ist dieser Code besonders relevant, da er
        direkt die Abgasuntersuchung (AU) betrifft.
      </p>

      <h3>P0171 &mdash; Gemisch zu mager (Bank 1)</h3>
      <p>
        Ihr Motor bekommt zu viel Luft im Verhaeltnis zum Kraftstoff.
        Haeufige Ursachen: Unterdruckschlauch undicht, Ansaugkruemmer-
        Dichtung defekt, Kraftstoffpumpe schwaechelt, oder der
        Luftmassenmesser (MAF) ist verschmutzt. Ein verschmutzter MAF laesst
        sich oft mit speziellem Reiniger fuer unter 15&nbsp;EUR beheben.
        Reparaturkosten insgesamt: 50&ndash;400&nbsp;EUR je nach Ursache.
      </p>

      <h3>P0300 &mdash; Mehrfache Fehlzuendungen erkannt</h3>
      <p>
        Fehlzuendungen bedeuten, dass mindestens ein Zylinder nicht richtig
        zuendet. Symptome: ruckelnder Motor, Leistungsverlust, hoeherer
        Verbrauch. Bei VW TSI- und Audi TFSI-Motoren sind oft die
        Zuendspulen schuld (30&ndash;80&nbsp;EUR pro Stueck). Bei aelteren
        BMW-Motoren koennen auch Zuendkabel oder Zuendkerzen die Ursache
        sein. Gesamtkosten: 50&ndash;500&nbsp;EUR. Achtung: Nicht ignorieren
        &mdash; Fehlzuendungen koennen den Katalysator beschaedigen.
      </p>

      <h2>Wie liest man diese Codes mit AutoDiag EU?</h2>
      <p>
        Fruehr mussten Sie fuer das Auslesen des Fehlerspeichers in die
        Werkstatt fahren und 25&ndash;50&nbsp;EUR bezahlen &mdash; bei einer
        Vertragswerkstatt von BMW oder Mercedes sogar 80&ndash;180&nbsp;EUR.
        Heute geht das mit Ihrem Smartphone und einem BLE-Dongle (wir
        empfehlen den Vgate iCar Pro, ca. 25&nbsp;EUR) in wenigen Minuten:
      </p>
      <ul>
        <li>Dongle in die OBD2-Buchse stecken</li>
        <li>AutoDiag EU oeffnen und per Bluetooth verbinden</li>
        <li>
          Die App liest automatisch alle gespeicherten Fehlercodes aus
        </li>
        <li>
          Jeder Code wird auf Deutsch erklaert: Ursachen, Schweregrad,
          geschaetzte Reparaturkosten und ob Sie weiterfahren koennen
        </li>
      </ul>
      <p>
        Das Beste: Die App erklaert nicht nur den Code, sondern gibt Ihnen
        auch konkrete Handlungsempfehlungen. Kein Fachjargon, sondern klare
        Sprache.
      </p>

      <h2>Wann sollte man in die Werkstatt?</h2>
      <p>
        Nicht jeder Fehlercode erfordert sofort einen Werkstattbesuch. Hier
        eine einfache Faustregel:
      </p>
      <ul>
        <li>
          <strong>Rote Codes (kritisch):</strong> Motor abstellen, nicht
          weiterfahren. Beispiele: Oeldruck zu niedrig, Kuehlmittel-
          temperatur kritisch. Sofort in die Werkstatt oder ADAC rufen.
        </li>
        <li>
          <strong>Orange Codes (wichtig):</strong> Zeitnah abklaeren lassen,
          idealerweise innerhalb einer Woche. Der Motor laeuft noch, aber
          ignorieren kann teuer werden.
        </li>
        <li>
          <strong>Gelbe Codes (Hinweis):</strong> Beobachten. Oft handelt es
          sich um Sensorfehler oder sporadische Probleme. AutoDiag EU zeigt
          Ihnen, ob der Fehler wiederholt auftritt.
        </li>
      </ul>

      <h2>Fehler die man vermeiden sollte</h2>
      <p>
        Beim Umgang mit Fehlercodes machen viele Autobesitzer immer wieder
        dieselben Fehler. Hier die haeufigsten:
      </p>
      <ul>
        <li>
          <strong>Fehlercodes blind loeschen:</strong> Das Loeschen eines
          Codes behebt nicht das Problem. Es ist wie Fieberthermometer
          zuruecksetzen, ohne den Infekt zu behandeln. Ausserdem setzt das
          Loeschen die Readiness-Monitore zurueck, was beim TUeV zu einer
          Wiedervorstellung fuehren kann.
        </li>
        <li>
          <strong>Billigteile ohne Diagnose einbauen:</strong> Wer sofort
          die Lambdasonde tauscht, ohne vorher zu pruefen, ob der
          Katalysator selbst das Problem ist, gibt unnoetig Geld aus.
        </li>
        <li>
          <strong>Codes ignorieren:</strong> Ein kleiner Fehler heute kann
          ein grosser Schaden morgen sein. P0300 (Fehlzuendung) wird
          ungefiltert zum Katalysatorschaden &mdash; statt 80&nbsp;EUR fuer
          eine Zuendspule zahlen Sie ploetzlich 1.200&nbsp;EUR fuer einen
          neuen Kat.
        </li>
        <li>
          <strong>Nur auf den Code schauen:</strong> Der Code allein sagt
          nicht alles. Die Live-Daten (Sensortestwerte, Lambdawert, Kurz-
          und Langzeittrimm) liefern die eigentliche Diagnose. AutoDiag EU
          zeigt Ihnen beides zusammen.
        </li>
      </ul>

      <h2>Zusammenfassung</h2>
      <p>
        OBD2-Fehlercodes sind kein Hexenwerk. Jeder Autobesitzer kann lernen,
        sie zu lesen und zu verstehen &mdash; und damit eine Menge Geld
        sparen. Mit einem BLE-Dongle fuer 25&nbsp;EUR und der AutoDiag EU
        App haben Sie alles, was Sie brauchen, um Ihr Auto selbst zu
        ueberwachen: Fehlercodes auslesen, Live-Daten analysieren und
        konkrete Handlungsempfehlungen erhalten. Das naechste Mal, wenn die
        Motorkontrollleuchte aufleuchtet, greifen Sie einfach zu Ihrem
        Smartphone &mdash; statt direkt zur Werkstatt.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artikel 2 — TUeV-Vorbereitung Checkliste
   ================================================================ */

export function ArticleDETUVVorbereitung() {
  return (
    <ArticleLayout
      title="TUeV-Vorbereitung: Die vollstandige Checkliste"
      date="2026-03-10"
      author="Reda Kaouani"
      readingTime={9}
      category="Ratgeber"
    >
      <p>
        Alle zwei Jahre steht er an: der TUeV. Fuer viele Autofahrer in
        Deutschland ist die Hauptuntersuchung (HU) ein Pflichttermin, der
        leichte Nervositaet ausloest. Wird mein Auto durchkommen? Was
        kostet es, wenn nicht? Die gute Nachricht: Mit der richtigen
        Vorbereitung koennen Sie die meisten Durchfallgruende vermeiden
        &mdash; und das in weniger als einer Stunde. Hier ist Ihre
        vollstaendige Checkliste.
      </p>

      <h2>TUeV in Deutschland &mdash; HU und AU</h2>
      <p>
        Die Hauptuntersuchung (HU) ist in Deutschland gesetzlich
        vorgeschrieben und wird von zugelassenen Prueforganisationen
        durchgefuehrt: <strong>TUeV</strong> (Sued, Nord, Rheinland,
        Hessen, Thueringen), <strong>DEKRA</strong>, <strong>GTUe</strong>
        und <strong>KUeS</strong>. Die HU umfasst eine umfangreiche
        technische Pruefung des Fahrzeugs. Seit 2010 ist die
        Abgasuntersuchung (AU) in die HU integriert &mdash; Sie erhalten
        also beides in einem Termin.
      </p>
      <p>
        Die Kosten liegen je nach Pruefstelle und Fahrzeugtyp zwischen{" "}
        <strong>80 und 150&nbsp;EUR</strong> fuer einen PKW. Wer den Termin
        ueberzieht, riskiert ein Bussgeld von 15&ndash;60&nbsp;EUR &mdash;
        und ab zwei Monaten Ueberschreitung wird eine erweiterte HU
        (Ergaenzungsuntersuchung) faellig, die nochmal 20&nbsp;% Aufschlag
        kostet. Punkte in Flensburg gibt es bei mehr als acht Monaten
        Verspaetung.
      </p>
      <p>
        Zum Vergleich: In der Schweiz heisst die Pruefung MFK
        (Motorfahrzeugkontrolle), in Frankreich Controle Technique (CT). Die
        Anforderungen sind aehnlich, aber die Pruefintervalle und Kosten
        variieren leicht.
      </p>

      <h2>Die vollstaendige Checkliste</h2>

      <h3>Beleuchtung</h3>
      <p>
        Die haeufigste Durchfallursache bei der HU. Pruefen Sie
        <strong> jede einzelne Leuchte</strong> am Fahrzeug: Abblendlicht,
        Fernlicht, Standlicht, Blinker vorne und hinten,
        Bremsleuchten, Rueckfahrscheinwerfer, Nebelschlussleuchte,
        Kennzeichenbeleuchtung und Warnblinkanlage. Eine einzige defekte
        Gluehbirne reicht fuer eine Maengelanzeige. Kosten fuer einen
        Birnenwechsel: 5&ndash;30&nbsp;EUR. Scheinwerfereinstellung in der
        Werkstatt: 20&ndash;50&nbsp;EUR.
      </p>

      <h3>Bremsen</h3>
      <p>
        Der Pruefer misst die Bremsleistung auf einem Rollenpruefstand. Die
        Betriebsbremse muss mindestens <strong>58&nbsp;% Bremswirkung</strong>
        {" "}erreichen, die Feststellbremse mindestens{" "}
        <strong>16&nbsp;%</strong>. Pruefen Sie: Bremsbel&auml;ge (Verschleiss-
        anzeiger beachten), Bremsscheiben auf Rillen oder Riefen,
        Bremsfluessigkeitsstand, Handbremse (muss das Fahrzeug auf einer
        Steigung halten). Kosten: Bremsbelaege 80&ndash;150&nbsp;EUR pro
        Achse, Scheiben und Belaege zusammen 150&ndash;300&nbsp;EUR.
      </p>

      <h3>Abgase (AU)</h3>
      <p>
        Bei Benzinern werden CO- und HC-Werte gemessen, bei Dieseln der
        Truebungswert (Opazitaet). Ein leuchtender Motorkontrollleuchte ist
        seit 2010 ein <strong>erheblicher Mangel</strong> und fuehrt direkt
        zum Durchfallen. Deshalb: Fehlerspeicher vorher mit AutoDiag EU
        auslesen. Wenn Codes vorhanden sind, die Ursache beheben &mdash;
        nicht nur loeschen. Tipp: Fahren Sie vor der HU eine laengere
        Strecke (mind. 20 Minuten Autobahn), damit der Katalysator
        Betriebstemperatur erreicht und die Readiness-Monitore
        abgeschlossen sind.
      </p>

      <h3>Reifen</h3>
      <p>
        Gesetzliche Mindestprofiltiefe in Deutschland:{" "}
        <strong>1,6&nbsp;mm</strong>. Empfohlen werden aber mindestens
        3&nbsp;mm (Sommer) bzw. 4&nbsp;mm (Winter). Pruefen Sie ausserdem:
        gleichmaessige Abnutzung (ungleichmaessig = Fahrwerks- oder
        Spurproblem), Seitenwandbeschaedigungen, Beulen, Risse und korrekte
        Reifengroesse laut Fahrzeugschein. Kosten: Reifen je nach Klasse
        60&ndash;200&nbsp;EUR pro Stueck.
      </p>

      <h3>Lenkung und Fahrwerk</h3>
      <p>
        Spurstangenkoepfe, Traggelenke, Stabilisatorkoppelstangen,
        Stossdaempfer und Federn werden geprueft. Achten Sie auf: Klapper-
        oder Poltergeraeuschen beim Ueberfahren von Bodenwellen, ungleich-
        maessigen Reifenverschleiss, oelfeuchte Stossdaempfer. Kosten:
        Stossdaempfer 150&ndash;350&nbsp;EUR pro Paar, Koppelstangen
        40&ndash;100&nbsp;EUR pro Seite, Federn 80&ndash;200&nbsp;EUR pro
        Ecke.
      </p>

      <h3>Sicht</h3>
      <p>
        Windschutzscheibe auf Risse und Steinschlaege pruefen &mdash;
        Schaeden groesser als 10&nbsp;mm im Sichtfeld des Fahrers fuehren
        zum Durchfallen. Scheibenwischer muessen die Scheibe sauber wischen,
        die Scheibenwaschanlage muss funktionieren, und alle Spiegel muessen
        unbeschaedigt und fest montiert sein. Wischerblatt-Wechsel:
        10&ndash;30&nbsp;EUR.
      </p>

      <h3>Karosserie</h3>
      <p>
        Rost an tragenden Teilen (Schweller, Laengsbraeger, Radaufnahmen)
        ist ein haeufiger Durchfallgrund, besonders bei aelteren Fahrzeugen
        und Autos aus Kuestenregionen oder mit viel Salzbelastung. Scharfe
        Kanten an der Karosserie, die Fussgaenger verletzen koennten, werden
        ebenfalls beanstandet. Schweissarbeiten: 80&ndash;250&nbsp;EUR fuer
        kleinere Reparaturen, 200&ndash;600&nbsp;EUR pro Schweller.
      </p>

      <h3>Sicherheitsausstattung</h3>
      <p>
        Sicherheitsgurte (Rueckzug, Arretierung, Zustand des Gurtbands),
        Kopfstuetzen, Tuerschloesser, Hupe und Warndreieck werden
        kontrolliert. Ein defekter Gurt ist ein sofortiger erheblicher
        Mangel.
      </p>

      <h2>Wie OBD2 bei der TUeV-Vorbereitung hilft</h2>
      <p>
        Seit 2010 liest der Pruefer bei der HU auch den Fehlerspeicher Ihres
        Fahrzeugs aus. Leuchtende Motorkontrollleuchte oder aktive Fehlercodes
        bedeuten direktes Durchfallen. Hier kann AutoDiag EU Ihnen bares Geld
        sparen:
      </p>
      <ul>
        <li>
          <strong>Fehlerspeicher vorab auslesen:</strong> Finden Sie
          Fehlercodes <em>vor</em> der HU &mdash; nicht erst beim Pruefer.
        </li>
        <li>
          <strong>Readiness-Monitore pruefen:</strong> Die App zeigt Ihnen,
          ob alle Emissionsmonitore abgeschlossen sind. Zu viele offene
          Monitore koennen zur Beanstandung fuehren.
        </li>
        <li>
          <strong>Live-Daten kontrollieren:</strong> Kuehlmitteltemperatur,
          Lambdawerte und Kraftstofftrimm geben Hinweise auf versteckte
          Probleme.
        </li>
        <li>
          <strong>KI-Audio-Scan:</strong> Der Klang-Scan erkennt
          verdaechtige Motorgeraeuse (Lagerschaden, Klopfen, Riemen),
          bevor sie zum TUeV-Problem werden.
        </li>
      </ul>

      <h2>Der ideale Vorbereitungskalender</h2>
      <p>
        Beginnen Sie <strong>4 Wochen vor dem TUeV-Termin</strong> mit der
        Vorbereitung:
      </p>
      <ul>
        <li>
          <strong>4 Wochen vorher:</strong> Fehlerspeicher mit AutoDiag EU
          auslesen und gefundene Codes recherchieren. KI-Audio-Scan
          durchfuehren.
        </li>
        <li>
          <strong>3 Wochen vorher:</strong> Eventuelle Reparaturen
          durchfuehren oder beauftragen.
        </li>
        <li>
          <strong>2 Wochen vorher:</strong> Komplette Beleuchtung pruefen,
          Scheibenwischer kontrollieren, Reifenprofil messen.
        </li>
        <li>
          <strong>1 Woche vorher:</strong> Fluessigkeitsstaende pruefen
          (Bremsfluessigkeit, Kuehlmittel, Wischwasser, Oelstand).
          Nochmals Fehlerspeicher auslesen.
        </li>
        <li>
          <strong>Am Tag selbst:</strong> 20 Minuten Autobahn fahren
          (Katalysator warmlaufen, Monitore abschliessen). Sauber zum
          Termin erscheinen &mdash; Pruefer schaetzen ein gepflegtes
          Fahrzeug.
        </li>
      </ul>

      <h2>Die 5 haeufigsten Durchfallgruende</h2>
      <p>
        Laut den aktuellen Statistiken der Prueforganisationen fallen in
        Deutschland jaehrlich rund <strong>20&nbsp;% aller Fahrzeuge</strong>
        {" "}bei der HU durch. Die Top-5-Gruende:
      </p>
      <ul>
        <li>
          <strong>1. Beleuchtung (ca. 26&nbsp;%)</strong> &mdash; defekte
          Gluehbirnen, falsch eingestellte Scheinwerfer
        </li>
        <li>
          <strong>2. Achsen/Raeder/Reifen (ca. 15&nbsp;%)</strong> &mdash;
          zu wenig Profil, defekte Traggelenke, ausgeschlagene Spurstangen
        </li>
        <li>
          <strong>3. Bremsen (ca. 14&nbsp;%)</strong> &mdash; verschlissene
          Belaege, verzogene Scheiben, undichte Leitungen
        </li>
        <li>
          <strong>4. Umweltbelastung/Abgase (ca. 11&nbsp;%)</strong> &mdash;
          Motorkontrollleuchte aktiv, AU-Werte ueberschritten, defekter Kat
        </li>
        <li>
          <strong>5. Karosserie/Rahmen (ca. 8&nbsp;%)</strong> &mdash;
          Durchrostungen an tragenden Teilen, scharfe Kanten
        </li>
      </ul>
      <p>
        Zusammengenommen machen diese fuenf Kategorien fast drei Viertel
        aller Beanstandungen aus. Und das Beste: Die meisten davon koennen
        Sie selbst vorab pruefen und guenstig beheben lassen.
      </p>

      <h2>Zusammenfassung</h2>
      <p>
        Der TUeV muss kein Stressfaktor sein. Mit einer systematischen
        Vorbereitung &mdash; Beleuchtung, Bremsen, Reifen, Abgase und
        Karosserie &mdash; erhoehen Sie Ihre Chancen auf ein Bestehen beim
        ersten Anlauf erheblich. Nutzen Sie AutoDiag EU, um den
        Fehlerspeicher vorab auszulesen, die Readiness-Monitore zu pruefen
        und einen KI-Audio-Scan durchzufuehren. So kommen Sie entspannt
        zum TUeV &mdash; und fahren mit der begehrten Plakette wieder nach
        Hause.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artikel 3 — 5 Motorgeraeuschen die Sie nicht ignorieren sollten
   ================================================================ */

export function ArticleDE5Motorgerausche() {
  return (
    <ArticleLayout
      title="Die 5 Motorgeraeuschen, die Sie nicht ignorieren sollten"
      date="2026-03-05"
      author="Reda Kaouani"
      readingTime={7}
      category="Diagnose"
    >
      <p>
        Ihr Motor erzaehlt Ihnen mehr als Sie denken. Jedes ungewoehnliche
        Geraeusch ist eine Botschaft &mdash; manchmal eine dringende. Das
        Problem: Die meisten Autofahrer hoeren ein Geraeusch, machen das
        Radio lauter und hoffen, dass es von allein verschwindet. Spoiler:
        Das tut es fast nie. Hier sind die fuenf Motorgeraeuschen, die Sie
        ernst nehmen muessen &mdash; mit Ursachen, Risiken und geschaetzten
        Reparaturkosten.
      </p>

      <h2>1. Klappern beim Kaltstart &mdash; Steuerkette</h2>
      <p>
        Sie starten Ihren Motor morgens und hoeren fuer 2&ndash;5 Sekunden
        ein metallisches Klappern oder Rasseln, das nach dem Warmwerden
        verschwindet. Das ist ein typisches Symptom fuer eine{" "}
        <strong>gelaengte Steuerkette</strong> oder einen verschlissenen
        Kettenspanner.
      </p>
      <p>
        <strong>Betroffene Motoren:</strong> VW/Audi 1.4 TSI (EA111),
        BMW N47 Diesel, PSA 1.2 PureTech (EB-Baureihe). Besonders der
        VW 1.4 TSI vor Baujahr 2013 ist beruehmt-beruchtigt fuer
        Steuerkettenprobleme.
      </p>
      <p>
        <strong>Risiko:</strong> Hoch. Wenn die Steuerkette reisst oder
        ueberspringt, koennen Kolben und Ventile kollidieren &mdash;
        Motorschaden. Kosten fuer den Steuerkettentausch:{" "}
        <strong>800&ndash;2.500&nbsp;EUR</strong> (arbeitsintensiv). Ein
        Motorschaden kann 3.000&ndash;8.000&nbsp;EUR bedeuten.
      </p>
      <p>
        <strong>Was tun:</strong> Nicht abwarten. Werkstatttermin innerhalb
        von 1&ndash;2 Wochen vereinbaren. Mit dem Klang-Scan von AutoDiag EU
        koennen Sie das Geraeusch aufnehmen und die KI analysieren lassen
        &mdash; sie erkennt Steuerkettengereraeuschen mit hoher Treffsicherheit.
      </p>

      <h2>2. Brummen bei hoeherer Geschwindigkeit &mdash; Radlager</h2>
      <p>
        Ab etwa 60&ndash;80&nbsp;km/h hoeren Sie ein tiefes, gleichmaessiges
        Brummen oder Summen, das bei Kurvenfahrt leiser oder lauter wird.
        Das deutet fast immer auf ein <strong>verschlissenes Radlager</strong>
        {" "}hin. Einfacher Test: Wird das Geraeusch in der Linkskurve
        lauter, ist meist das rechte Radlager betroffen &mdash; und
        umgekehrt.
      </p>
      <p>
        <strong>Betroffene Fahrzeuge:</strong> Grundsaetzlich alle, aber
        besonders haeufig bei Fahrzeugen mit hoher Laufleistung ab
        80.000&nbsp;km. VW Golf, BMW 3er, Opel Astra und Mercedes C-Klasse
        sind Spitzenreiter in der Statistik.
      </p>
      <p>
        <strong>Risiko:</strong> Mittel bis hoch. Ein Radlager das
        komplett ausfaellt, kann zum Blockieren des Rades fuehren &mdash;
        lebensgefaehrlich bei hoher Geschwindigkeit. Kosten:{" "}
        <strong>150&ndash;450&nbsp;EUR</strong> pro Rad (inklusive Einbau).
      </p>
      <p>
        <strong>Was tun:</strong> Zeitnah pruefen lassen (innerhalb von
        1&ndash;2 Wochen). AutoDiag EU&apos;s Drive-Test kann durch die
        Sensoren Ihres Smartphones (Beschleunigungsmesser und Gyroskop)
        Vibrationen erkennen, die auf Radlagerprobleme hindeuten.
      </p>

      <h2>3. Pfeifen oder Quietschen &mdash; Keilriemen</h2>
      <p>
        Ein hohes Pfeifen oder Quietschen beim Starten oder bei Feuchtigkeit
        deutet auf einen <strong>verschlissenen oder schlecht gespannten
        Keilriemen</strong> (Keilrippenriemen) hin. Der Riemen treibt
        wichtige Nebenaggregate an: Lichtmaschine, Klimakompressor,
        Servopumpe und manchmal die Wasserpumpe.
      </p>
      <p>
        <strong>Typisch bei:</strong> Fahrzeugen ab 60.000&nbsp;km
        Laufleistung oder nach laengerem Stehen. Bei Opel, VW und Skoda
        kommt es besonders haeufig vor, wenn der automatische Riemenspanner
        nachgibt.
      </p>
      <p>
        <strong>Risiko:</strong> Mittel. Reisst der Riemen, faellt die
        Lichtmaschine aus (Batterie leer innerhalb von Minuten), die
        Servolenkung wird schwergaengig und die Kuehlung kann ausfallen.
        Kosten: Riemenwechsel <strong>80&ndash;200&nbsp;EUR</strong>,
        inklusive Spannrolle 120&ndash;300&nbsp;EUR.
      </p>
      <p>
        <strong>Was tun:</strong> Der Klang-Scan von AutoDiag EU ist speziell
        darauf trainiert, Riemengeraeuschen zu erkennen. Aufnahme machen,
        analysieren lassen, und bei bestaaetigtem Befund einen
        Werkstatttermin vereinbaren. Oft reicht eine Nachspannung oder
        ein neuer Riemen &mdash; beides guenstig und schnell erledigt.
      </p>

      <h2>4. Klopfen unter Last &mdash; Pleuellager oder Klingeln</h2>
      <p>
        Ein rhythmisches, metallisches Klopfen, das sich mit der Drehzahl
        aendert und besonders unter Last (Bergauffahrt, Beschleunigung)
        auftritt. Hier gibt es zwei moegliche Ursachen:
      </p>
      <ul>
        <li>
          <strong>Klopfsensor/Klingeln (Detonation):</strong> Der Motor
          klopft wegen minderwertigem Kraftstoff, falschem Zuendzeitpunkt
          oder Verkokung. Bei modernen Motoren regelt der Klopfsensor nach,
          aber wenn er selbst defekt ist, kann es zu Motorschaeden kommen.
          Kosten: Klopfsensor 60&ndash;200&nbsp;EUR, Entkokung
          100&ndash;300&nbsp;EUR.
        </li>
        <li>
          <strong>Pleuellager:</strong> Das schwerwiegendere Szenario. Ein
          verschlissenes Pleuellager klopft staerker und gleichmaessiger.
          Wenn Sie dieses Geraeusch hoeren, handeln Sie sofort &mdash; ein
          Pleuellagerschaden fuehrt unausweichlich zum Motorschaden.
          Kosten: <strong>1.500&ndash;5.000&nbsp;EUR</strong> fuer eine
          Motorueberholung.
        </li>
      </ul>
      <p>
        <strong>Betroffene Motoren:</strong> BMW N47/N57 Diesel sind
        beruehmt fuer Pleuellagerschaeden. Bei TSI/TFSI-Benzinern (Audi,
        VW, Skoda) tritt haeufiger Verkokung und Klingeln auf.
      </p>
      <p>
        <strong>Was tun:</strong> Sofort die Drehzahl niedrig halten und
        Volllast vermeiden. Werkstatttermin so schnell wie moeglich. Der
        Klang-Scan kann zwischen Steuerketten-Klappern und Pleuel-Klopfen
        unterscheiden &mdash; eine entscheidende Information fuer die
        Werkstatt.
      </p>

      <h2>5. Schleifen beim Bremsen &mdash; Bremsbelaege am Limit</h2>
      <p>
        Ein metallisches Schleif- oder Kratzgeraeusch beim Bremsen ist das
        unmissverstaendliche Zeichen fuer <strong>voellig verschlissene
        Bremsbelaege</strong>. In diesem Fall schleift bereits der
        Metalltraeger auf der Bremsscheibe &mdash; das beschaedigt die
        Scheibe und reduziert die Bremsleistung dramatisch.
      </p>
      <p>
        <strong>Haeufigkeit:</strong> Bremsbelaege muessen je nach
        Fahrweise alle 30.000&ndash;80.000&nbsp;km getauscht werden. Viele
        Fahrzeuge haben Verschleissanzeiger (optisch oder elektronisch), die
        vorwarnen &mdash; aber nicht alle.
      </p>
      <p>
        <strong>Risiko:</strong> Sehr hoch. Verlaengerter Bremsweg,
        TUeV-Durchfall garantiert, im schlimmsten Fall Bremsversagen.
        Kosten: Nur Belaege <strong>80&ndash;150&nbsp;EUR</strong> pro Achse.
        Belaege und Scheiben zusammen 150&ndash;350&nbsp;EUR. Wenn Sie zu
        lange warten, kommen moeglicherweise neue Bremssaettel dazu:
        200&ndash;500&nbsp;EUR extra pro Seite.
      </p>
      <p>
        <strong>Was tun:</strong> Sofort aufhoeren zu fahren oder nur noch
        vorsichtig zur naechsten Werkstatt. AutoDiag EU erkennt Brems-
        geraeuschen per KI-Audio-Scan und kann ueber den OBD2-Anschluss
        auch den Verschleissstand der Belaege (sofern elektronisch
        ueberwacht) auslesen.
      </p>

      <h2>Bonus: Der Klang-Scan von AutoDiag EU</h2>
      <p>
        Unser KI-basierter Klang-Scan (basierend auf Machine Learning) ist
        darauf trainiert, 11 verschiedene Fehlerkategorien am Klang zu
        erkennen: Lagerschaden, Auspuffleck, Riemenquietschen, Klopfen,
        Steuerkette, Luftleck und mehr. Sie muessen kein Mechaniker sein
        &mdash; halten Sie einfach Ihr Smartphone an den Motor, und die
        App sagt Ihnen, was sie hoert. Kombiniert mit dem OBD2-
        Fehlerspeicher erhalten Sie ein vollstaendiges Bild der Gesundheit
        Ihres Fahrzeugs.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artikel 4 — OBD2 verstehen in 5 Minuten
   ================================================================ */

export function ArticleDEOBD2Verstehen() {
  return (
    <ArticleLayout
      title="OBD2: Alles verstehen in 5 Minuten"
      date="2026-02-28"
      author="Reda Kaouani"
      readingTime={6}
      category="Anleitung"
    >
      <p>
        OBD2 &mdash; drei Buchstaben und eine Zahl, die jeder Autofahrer
        kennen sollte. Denn hinter dieser Abkuerzung verbirgt sich das
        maechtigste Diagnosewerkzeug, das in jedem modernen Auto
        eingebaut ist &mdash; und das Sie wahrscheinlich noch nie benutzt
        haben. In fuenf Minuten erklaeren wir Ihnen alles, was Sie
        wissen muessen.
      </p>

      <h2>Eine kurze Geschichte der Fahrzeugdiagnose</h2>
      <p>
        Alles begann in den 1980er Jahren in Kalifornien. Die CARB
        (California Air Resources Board) verlangte von Autoherstellern, ein
        Diagnosesystem fuer die Abgasueberwachung einzubauen. Das war
        OBD1 &mdash; allerdings hatte jeder Hersteller sein eigenes
        Protokoll und eigene Stecker. Chaos pur.
      </p>
      <p>
        1996 kam der Durchbruch: <strong>OBD2</strong> wurde in den USA fuer
        alle Neuwagen verpflichtend. Ein standardisierter Stecker, ein
        einheitliches Protokoll-Set, ein gemeinsamer Basis-Codekatalog. In
        Europa wurde der Standard als <strong>EOBD</strong> (European OBD)
        uebernommen: 2001 fuer Benziner, 2004 fuer Dieselfahrzeuge. Heute
        hat praktisch jedes Auto auf Europas Strassen eine OBD2-Buchse.
      </p>

      <h2>Was steckt technisch dahinter?</h2>
      <p>
        Im Herzen des Systems steht das{" "}
        <strong>Steuergeraet (ECU &mdash; Electronic Control Unit)</strong>.
        Moderne Fahrzeuge haben nicht nur eines, sondern 30 bis 100
        verschiedene Steuergeraete: fuer den Motor, das Getriebe, ABS, ESP,
        Airbags, Klimaanlage und mehr. OBD2 gibt Ihnen standardisierten
        Zugang zum Motor-Steuergeraet &mdash; dem wichtigsten von allen.
      </p>

      <h3>PIDs &mdash; Parameter Identifier</h3>
      <p>
        Ueber sogenannte PIDs (Parameter IDs) koennen Sie in Echtzeit
        Sensordaten abfragen: Motordrehzahl (RPM), Kuehlmitteltemperatur,
        Motorlast, Fahrzeuggeschwindigkeit, Lambdawerte, Kraftstofftrimm
        und dutzende weitere Parameter. Es ist, als koennten Sie dem Motor
        beim Denken zuschauen.
      </p>

      <h3>Die 5 Kommunikationsprotokolle</h3>
      <p>
        OBD2 definiert fuenf moegliche Kommunikationsprotokolle. Welches
        Ihr Fahrzeug nutzt, haengt vom Hersteller und Baujahr ab:
      </p>
      <ul>
        <li>
          <strong>CAN-Bus (ISO 15765)</strong> &mdash; Der heutige Standard,
          seit 2008 Pflicht in der EU. Schnell, zuverlaessig, von allen
          modernen Fahrzeugen verwendet.
        </li>
        <li>
          <strong>ISO 9141-2</strong> &mdash; Aeltere europaische Fahrzeuge
          (Chrysler, Honda, Audi, BMW, Mercedes vor 2005). Langsamere
          Kommunikation.
        </li>
        <li>
          <strong>KWP2000 (ISO 14230)</strong> &mdash; Haeufig bei VW, Audi,
          Skoda, Seat und asiatischen Herstellern. Robustes Protokoll,
          weit verbreitet bei Fahrzeugen von 2000&ndash;2008.
        </li>
        <li>
          <strong>SAE J1850 VPW</strong> &mdash; Hauptsaechlich bei
          amerikanischen GM-Fahrzeugen.
        </li>
        <li>
          <strong>SAE J1850 PWM</strong> &mdash; Ford-Fahrzeuge (USA).
        </li>
      </ul>
      <p>
        Die gute Nachricht: Als Anwender muessen Sie das Protokoll nicht
        kennen. AutoDiag EU erkennt es automatisch und stellt die
        Verbindung her.
      </p>

      <h2>Was kann man mit OBD2 machen?</h2>

      <h3>Fehlercodes lesen und loeschen</h3>
      <p>
        Die Basisfunktion: Alle gespeicherten Diagnostic Trouble Codes (DTCs)
        auslesen, verstehen und &mdash; wenn die Ursache behoben ist &mdash;
        loeschen. AutoDiag EU erklaert jeden Code auf Deutsch mit Ursachen,
        Schweregrad und geschaetzten Reparaturkosten.
      </p>

      <h3>Live-Daten in Echtzeit</h3>
      <p>
        Ueberwachen Sie Motordrehzahl, Temperatur, Kraftstoffverbrauch,
        Sensorwerte und mehr in Echtzeit auf Ihrem Smartphone. Ideal fuer
        die Fehlersuche bei sporadischen Problemen: Wenn der Motor bei
        70&nbsp;km/h ruckelt, koennen Sie live sehen, was in dem Moment
        passiert.
      </p>

      <h3>Readiness-Monitore</h3>
      <p>
        Das OBD2-System fuehrt selbstaendig Ueberpruefungen durch (Monitore):
        Katalysator, beheizter Sauerstoffsensor, Verdampfungssystem,
        Sekundaerluftsystem und mehr. Der Status dieser Monitore wird beim
        TUeV ausgelesen. Wenn zu viele Monitore den Status
        &laquo;&nbsp;nicht abgeschlossen&nbsp;&raquo; haben (z.&nbsp;B.
        nach einer Batterietrennung), kann die HU verweigert werden.
      </p>

      <h3>Sensortests und Freeze-Frame-Daten</h3>
      <p>
        Beim Auftreten eines Fehlercodes speichert das Steuergeraet einen
        Schnappschuss aller Sensorwerte zu diesem Zeitpunkt (Freeze Frame).
        Das hilft enorm bei der Diagnose: War der Motor kalt oder warm? Wie
        hoch war die Drehzahl? Fuhr das Auto schnell oder stand es im
        Leerlauf?
      </p>

      <h3>Praeventivdiagnose</h3>
      <p>
        OBD2 warnt nicht erst bei einem Defekt &mdash; es zeigt Tendenzen.
        Wenn die Lambdawerte schleichend abdriften oder die
        Kuehlmitteltemperatur langsam steigt, erkennt AutoDiag EU das und
        warnt Sie, bevor ein teurer Schaden entsteht.
      </p>

      <h2>Was brauche ich dafuer?</h2>
      <p>
        Nur zwei Dinge: einen <strong>BLE-OBD2-Dongle</strong> und die
        <strong> AutoDiag EU App</strong>. Wir empfehlen den Vgate iCar
        Pro (ca. 25&nbsp;EUR) &mdash; stabil, kompatibel mit allen
        Protokollen und energiesparend per Bluetooth Low Energy. Stecken
        Sie den Dongle in die OBD2-Buchse, oeffnen Sie die App, und in
        Sekunden sind Sie verbunden. Keine Kabel, kein Laptop, keine
        Software-Installation.
      </p>
      <p>
        Vorsicht bei Billig-Dongles unter 10&nbsp;EUR: Die nutzen oft
        gefaelschte ELM327-Chips, die nur einen Bruchteil der Protokolle
        unterstuetzen und haeufig Verbindungsabbrueche verursachen.
      </p>

      <h2>Die Grenzen von OBD2 &mdash; und die Zukunft</h2>
      <p>
        OBD2 gibt Ihnen Zugang zum Motor-Steuergeraet, aber nicht zu allen
        Systemen im Fahrzeug. Herstellerspezifische Funktionen (Codierungen,
        Anpassungen, Getriebe-Steuergeraet, Airbag-Codes) erfordern oft
        teurere Diagnosesoftware. Genau hier unterscheidet sich AutoDiag EU:
        Der <strong>KI-Audio-Scan</strong> und die{" "}
        <strong>Smartphone-Sensoren</strong> (Beschleunigungsmesser,
        Gyroskop, GPS) liefern Informationen, die OBD2 allein nicht bieten
        kann &mdash; ohne zusaetzliche Hardware.
      </p>
      <p>
        Die Zukunft? OBD3 wird diskutiert &mdash; mit drahtloser
        Kommunikation direkt an die Behoerden (Fernueberwachung der
        Abgaswerte). Und Connected-Car-APIs wie Smartcar ermoeglichen
        bereits heute den Zugriff auf Fahrzeugdaten ueber die Cloud, ohne
        physischen Dongle. AutoDiag EU unterstuetzt beides und ist damit
        bereit fuer die naechste Generation der Fahrzeugdiagnose.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Artikel 5 — AutoDiag EU vs Werkstatt: Ersparnisse
   ================================================================ */

export function ArticleDEAutodiagVsWerkstatt() {
  return (
    <ArticleLayout
      title="AutoDiag EU vs Werkstatt: Wie viel sparen Sie wirklich?"
      date="2026-02-20"
      author="Reda Kaouani"
      readingTime={8}
      category="Ersparnisse"
    >
      <p>
        Jeder Autobesitzer kennt das Gefuehl: Die Motorkontrollleuchte geht
        an, und der erste Gedanke ist &laquo;&nbsp;Was wird das jetzt wieder
        kosten?&nbsp;&raquo;. In Deutschland zahlen Autofahrer im Schnitt{" "}
        <strong>300&nbsp;EUR pro Jahr</strong> allein fuer Werkstattbesuche
        zur Fehlerdiagnose &mdash; ohne die eigentliche Reparatur. Muss das
        sein? Wir rechnen ehrlich vor, was AutoDiag EU im Vergleich zur
        Werkstatt kostet und spart.
      </p>

      <h2>Was kostet die Diagnose in der Werkstatt?</h2>
      <p>
        Die Preise variieren stark &mdash; je nach Art der Werkstatt und
        Region. Hier ein realistischer Ueberblick fuer Deutschland:
      </p>
      <ul>
        <li>
          <strong>Fehlerspeicher auslesen (freie Werkstatt):</strong>{" "}
          25&ndash;50&nbsp;EUR. Oft wird nur der Code abgelesen, ohne tiefere
          Analyse.
        </li>
        <li>
          <strong>Fehlerdiagnose (freie Werkstatt):</strong>{" "}
          80&ndash;180&nbsp;EUR. Hier wird tiefer gegraben: Live-Daten,
          Multimeter, Sichtpruefung.
        </li>
        <li>
          <strong>Vertragswerkstatt (VW, Opel, Skoda):</strong>{" "}
          120&ndash;250&nbsp;EUR fuer eine vollstaendige Diagnose.
        </li>
        <li>
          <strong>Premium-Vertragswerkstatt (BMW, Mercedes, Audi):</strong>
          {" "}150&ndash;300&nbsp;EUR. Bei komplexen Elektronikproblemen auch
          mehr.
        </li>
      </ul>
      <p>
        Zum europaischen Vergleich: In Frankreich liegen die Kosten bei
        30&ndash;120&nbsp;EUR (freie Werkstatt) bis 150&ndash;250&nbsp;EUR
        (Vertragswerkstatt). In der Schweiz zahlen Sie 80&ndash;180&nbsp;CHF
        in einer freien Garage und 150&ndash;350&nbsp;CHF bei einer
        Markenvertretung. In Spanien und Portugal ist es mit
        20&ndash;80&nbsp;EUR bzw. 15&ndash;60&nbsp;EUR deutlich guenstiger.
      </p>

      <h2>Was kostet AutoDiag EU?</h2>
      <p>
        Die Grundversion von AutoDiag EU ist <strong>kostenlos</strong>{" "}
        &mdash; inklusive Fehlercodes lesen, 4 Live-Daten-PIDs, einem
        Audio-Scan pro Woche und 3 KI-Mechaniker-Fragen pro Tag. Fuer
        Vielnutzer gibt es den <strong>Premium-Plan fuer
        49&nbsp;CHF/Jahr</strong> (ca. 51&nbsp;EUR): alles unbegrenzt,
        plus Fehlercodes loeschen, alle PIDs, Pre-TUeV-Check fuer 5 Laender,
        PDF-Exporte und unbegrenzten Verlauf.
      </p>
      <p>
        Dazu kommen einmalig ca. <strong>25&nbsp;EUR fuer einen
        BLE-Dongle</strong> (Vgate iCar Pro). Das war&apos;s. Keine
        versteckten Kosten, kein Abo fuer den Dongle.
      </p>

      <h2>3 Praxis-Szenarien im Vergleich</h2>

      <h3>Szenario 1: Die klassische Motorkontrollleuchte</h3>
      <p>
        Ihr VW Golf VII zeigt die Motorkontrollleuchte. In der Werkstatt:
        Fehlerspeicher auslesen (35&nbsp;EUR), Diagnose (120&nbsp;EUR),
        Ergebnis: Lambdasonde defekt. <strong>Kosten Diagnose:
        155&nbsp;EUR.</strong> Die Reparatur kommt obendrauf.
      </p>
      <p>
        Mit AutoDiag EU: App oeffnen, Dongle anstecken, Code P0131
        auslesen. Die App erklaert: &laquo;&nbsp;Lambdasonde Bank 1,
        Sensor 1 &mdash; Spannung zu niedrig. Haeufige Ursache: defekte
        Sonde, seltener Kabelbruch oder Steuergeraet. Reparaturkosten:
        80&ndash;200&nbsp;EUR.&nbsp;&raquo; Sie haben sofort die
        Information und koennen gezielt ein Angebot bei der Werkstatt
        einholen. <strong>Kosten Diagnose: 0&nbsp;EUR.</strong>
      </p>
      <p>
        <strong>Ersparnis: 155&nbsp;EUR</strong>
      </p>

      <h3>Szenario 2: TUeV-Vorbereitung</h3>
      <p>
        TUeV in zwei Wochen. Sie fahren vorab in die Werkstatt zum
        &laquo;&nbsp;TUeV-Vorab-Check&nbsp;&raquo;: 60&ndash;120&nbsp;EUR.
        Der Mechaniker findet einen alten Fehlercode und eine defekte
        Birne. Kosten: 90&nbsp;EUR fuer den Check plus 15&nbsp;EUR fuer
        die Birne.
      </p>
      <p>
        Mit AutoDiag EU: Fehlerspeicher auslesen (0&nbsp;EUR), Readiness-
        Monitore pruefen (0&nbsp;EUR), KI-Audio-Scan (0&nbsp;EUR),
        Beleuchtung selbst pruefen und Birne fuer 5&nbsp;EUR tauschen.{" "}
        <strong>Kosten: 5&nbsp;EUR.</strong>
      </p>
      <p>
        <strong>Ersparnis: ca. 100&nbsp;EUR</strong>
      </p>

      <h3>Szenario 3: Mysterioeses Geraeusch (BMW F30)</h3>
      <p>
        Ihr BMW 320d (F30) macht ein seltsames Klappern beim Kaltstart.
        BMW-Werkstatt: Annahme (0&nbsp;EUR), Diagnose mit ISTA
        (180&ndash;250&nbsp;EUR), Ergebnis nach 2 Stunden: Steuerkette
        gelaengt. Die Diagnose allein kostet Sie 250&nbsp;EUR.
      </p>
      <p>
        Mit AutoDiag EU: Klang-Scan beim Kaltstart &mdash; die KI
        identifiziert mit 87&nbsp;% Konfidenz
        &laquo;&nbsp;Steuerkettengeraeusch&nbsp;&raquo;. Gleichzeitig liest
        der OBD2-Scan den Code P0016 (Nockenwellen-/Kurbelwellen-Position
        Korrelation Bank 1). Sie wissen Bescheid und koennen direkt einen
        Kostenvoranschlag fuer den Steuerkettenwechsel einholen.{" "}
        <strong>Kosten Diagnose: 0&nbsp;EUR.</strong>
      </p>
      <p>
        <strong>Ersparnis: 250&nbsp;EUR</strong>
      </p>

      <h2>Die Jahresrechnung</h2>
      <p>
        Laut ADAC faehrt der durchschnittliche deutsche Autofahrer{" "}
        <strong>2&ndash;3 Mal pro Jahr</strong> wegen Warnleuchten oder
        seltsamen Geraeusche in die Werkstatt. Bei durchschnittlich
        100&ndash;150&nbsp;EUR pro Diagnosebesuch ergibt das{" "}
        <strong>200&ndash;450&nbsp;EUR pro Jahr</strong> nur fuer die
        Fehlersuche.
      </p>
      <p>
        Mit AutoDiag EU Premium zahlen Sie:{" "}
        <strong>51&nbsp;EUR/Jahr</strong> (App) plus einmalig
        25&nbsp;EUR (Dongle). Im ersten Jahr also 76&nbsp;EUR, danach nur
        noch 51&nbsp;EUR pro Jahr. Das entspricht einer{" "}
        <strong>Ersparnis von 150&ndash;400&nbsp;EUR jaehrlich</strong>.
        Ueber fuenf Jahre: 850&ndash;2.100&nbsp;EUR gespart.
      </p>

      <h2>Vergleich mit anderen Apps</h2>
      <p>
        AutoDiag EU ist nicht die einzige Diagnose-App auf dem Markt. Hier
        der ehrliche Vergleich:
      </p>
      <ul>
        <li>
          <strong>Carly:</strong> 54,99&nbsp;EUR/Jahr plus 59,90&nbsp;EUR
          fuer den eigenen Dongle (zwingend erforderlich &mdash; Standard-
          ELM327 werden nicht unterstuetzt). Starke Codierungs-Funktionen
          fuer BMW/VW, aber kein Audio-Scan, kein Drive-Test, kein
          KI-Mechaniker.
        </li>
        <li>
          <strong>Car Scanner:</strong> Guenstig (Einmalkauf ca. 6&nbsp;EUR),
          zeigt viele Live-Daten, aber ohne Erklaerungen. Reine Datenanzeige
          ohne Diagnose-Intelligenz. Kein Audio-Scan.
        </li>
        <li>
          <strong>OBDeleven:</strong> 49,99&nbsp;EUR/Jahr plus eigener
          Dongle (29,99&nbsp;EUR). Stark fuer VW-Konzern-Fahrzeuge
          (Codierungen), aber eingeschraenkt bei anderen Marken. Kein
          Audio-Scan, kein Drive-Test.
        </li>
      </ul>
      <p>
        <strong>Was nur AutoDiag EU kann:</strong> KI-Audio-Scan
        (11 Fehlerkategorien per Sound erkannt), Drive-Test ohne Dongle
        (Smartphone-Sensoren), KI-Mechaniker mit fahrzeugspezifischen
        Antworten, Pre-TUeV-Check fuer 5 europaische Laender und
        Multi-Sensor-Fusion (OBD2 + Audio + Bewegungssensoren). Kein
        anderer Anbieter kombiniert diese Funktionen.
      </p>

      <h2>Fuer wen lohnt sich AutoDiag EU besonders?</h2>
      <ul>
        <li>
          <strong>Vielfahrer:</strong> Je mehr Kilometer, desto haeufiger
          treten Warnleuchten und Geraeuschen auf. Die App amortisiert sich
          nach dem ersten vermiedenen Werkstattbesuch.
        </li>
        <li>
          <strong>Gebrauchtwagenkaeufer:</strong> Vor dem Kauf den
          Fehlerspeicher auslesen und den Motor scannen &mdash; so erkennen
          Sie versteckte Maengel, bevor Sie unterschreiben.
        </li>
        <li>
          <strong>Bastler und Schrauber:</strong> Live-Daten in Echtzeit
          sind Gold wert fuer die Fehlersuche in der eigenen Garage.
        </li>
        <li>
          <strong>TUeV-Vorbereiter:</strong> Readiness-Monitore und
          Fehlerspeicher vorab pruefen spart Geld und Nerven.
        </li>
      </ul>

      <h2>Das ehrliche Fazit</h2>
      <p>
        AutoDiag EU ersetzt nicht die Werkstatt &mdash; das war auch nie
        das Ziel. Was die App ersetzt, ist der{" "}
        <strong>blinde Werkstattbesuch</strong>. Statt unwissend
        hinzufahren und zu hoffen, dass die Rechnung nicht zu hoch
        ausfaellt, kommen Sie informiert an. Sie wissen, welche Codes
        gespeichert sind, was die wahrscheinliche Ursache ist und was die
        Reparatur ungefaehr kosten sollte. Das ist kein Ersatz fuer den
        Mechaniker &mdash; das ist der beste Freund des Autofahrers neben
        dem Mechaniker. Und mit durchschnittlich 200&ndash;400&nbsp;EUR
        jaehrlicher Ersparnis zahlt sich diese Freundschaft schnell aus.
      </p>
    </ArticleLayout>
  );
}

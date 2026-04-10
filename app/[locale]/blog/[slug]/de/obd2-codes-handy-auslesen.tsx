import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEOBD2CodesHandy() {
  const faq: FaqItem[] = [
    {
      q: "Welcher ELM327-Adapter ist in Deutschland empfehlenswert?",
      a: "Ein Bluetooth-Adapter der Marke Vgate (iCar 2 oder iCar Pro) kostet 20 bis 40 EUR und funktioniert zuverlaessig mit Android. Billige 10-EUR-China-Clones arbeiten oft nur mit aelteren Protokollen. Fuer iPhone benoetigen Sie einen BLE-Adapter (Bluetooth Low Energy), kein klassisches Bluetooth.",
    },
    {
      q: "Ist es legal, OBD2-Codes selbst auszulesen?",
      a: "Ja, vollkommen. Die OBD2-Buchse ist ein gesetzlich vorgeschriebener Standard fuer Diagnose. Sie koennen lesen so viel Sie wollen. Beim Loeschen von Codes kurz vor der HU ist Vorsicht geboten: die Readiness-Monitore werden zurueckgesetzt und der Pruefer kann das erkennen.",
    },
    {
      q: "Ab welchem Baujahr hat mein Auto eine OBD2-Buchse?",
      a: "In Europa sind Benziner ab 2001 und Diesel ab 2004 gesetzlich mit OBD2 ausgestattet. Fahrzeuge davor haben meist nur herstellerspezifische Anschluesse, die mit ELM327 nicht funktionieren.",
    },
    {
      q: "Wo befindet sich die OBD2-Buchse?",
      a: "In 90 Prozent der Faelle unter dem Lenkrad, links neben der Lenksaeule. Bei manchen Modellen hinter einer Klappe, in der Mittelkonsole oder im Handschuhfach. Im Bordbuch steht der genaue Ort.",
    },
    {
      q: "Kann ich mit dem Handy auch Live-Daten sehen?",
      a: "Ja. AutoDiag EU zeigt Live-Daten wie Drehzahl, Kuehlmitteltemperatur, Lambdasonde, Luftmassenmesser und Kraftstofftrimm. So koennen Sie Probleme erkennen, bevor ein Fehlercode gespeichert wird.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="de"
        title="OBD2-Codes mit dem Handy auslesen"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={9}
        category="Anleitung"
      >
        <p>
          Eine Fehlercodediagnose in der Werkstatt kostet in Deutschland
          zwischen 30 und 80 EUR, beim Vertragshaendler bis zu 120 EUR. Das
          absurde daran: der Mechaniker verbindet einen Adapter, liest die
          Codes und stellt Ihnen die Rechnung. Mit 20 EUR fuer einen
          ELM327-Adapter und einer kostenlosen App wie AutoDiag EU erledigen
          Sie dieselbe Arbeit selbst &mdash; in unter 60 Sekunden. Hier ist
          die Schritt-fuer-Schritt-Anleitung.
        </p>

        <h2>Was ist OBD2 ueberhaupt?</h2>
        <p>
          OBD2 steht fuer &laquo;On-Board Diagnostics 2&raquo;. Seit 2001
          (Benziner) bzw. 2004 (Diesel) muessen alle in der EU neu
          zugelassenen PKW ueber eine standardisierte 16-polige
          Diagnosebuchse verfuegen. Darueber koennen Werkstaetten (und Sie!)
          Fehlercodes auslesen, Live-Daten abrufen und Emissionsdaten pruefen.
          Die Codes sind international genormt &mdash; ein P0420 auf einem
          BMW bedeutet dasselbe wie auf einem Renault.
        </p>

        <h2>Schritt 1: Den richtigen Adapter kaufen</h2>
        <p>
          Der beruehmte <strong>ELM327-Chip</strong> ist der Quasi-Standard.
          Sie finden ihn in Hunderten von Adaptern ab 10 EUR. Unsere
          Empfehlung fuer Deutschland:
        </p>
        <ul>
          <li>
            <strong>Vgate iCar 2 Bluetooth (25 EUR):</strong> sehr
            zuverlaessig mit Android.
          </li>
          <li>
            <strong>Vgate iCar Pro BLE (45 EUR):</strong> kompatibel mit
            iPhone (Bluetooth Low Energy) und Android.
          </li>
          <li>
            <strong>OBDLink MX+ (90 EUR):</strong> professionelle Loesung
            mit optimaler Geschwindigkeit fuer Premium-Fahrzeuge.
          </li>
        </ul>
        <p>
          Vermeiden Sie Billigadapter unter 15 EUR. Sie haben oft Fake-Chips,
          liefern ungenaue Daten und sind inkompatibel mit neueren CAN-Bus-
          Protokollen.
        </p>

        <h2>Schritt 2: AutoDiag EU installieren</h2>
        <p>
          Laden Sie die App kostenlos aus dem Google Play Store. Keine
          Kreditkarte, keine Registrierung fuer die Basisfunktionen. Starten
          Sie die App. Sie erhalten eine kurze Einfuehrung in drei Screens
          und stehen direkt vor dem Startbildschirm.
        </p>

        <h2>Schritt 3: Adapter einstecken</h2>
        <p>
          Suchen Sie die OBD2-Buchse. In 90 Prozent der Faelle befindet sie
          sich unter dem Lenkrad, links neben der Lenksaeule. Bei manchen
          Modellen ist sie hinter einer Klappe versteckt (BMW, Audi). Ziehen
          Sie den Zuendschluessel in Position II (Zuendung an, Motor aus)
          oder starten Sie den Motor. Der Adapter sollte eine rote und eine
          blaue LED aufleuchten lassen.
        </p>

        <h2>Schritt 4: Bluetooth koppeln</h2>
        <p>
          Gehen Sie in die Bluetooth-Einstellungen Ihres Handys und suchen
          Sie das Geraet &laquo;OBDII&raquo; oder &laquo;Vgate&raquo;. Der
          Standard-Code ist meistens <strong>1234</strong> oder{" "}
          <strong>0000</strong>. Einmal gekoppelt, verbindet sich der Adapter
          automatisch. Oeffnen Sie nun AutoDiag EU &mdash; die App erkennt
          den Adapter und baut die OBD2-Verbindung auf.
        </p>

        <h2>Schritt 5: Fehlercodes lesen</h2>
        <p>
          Tippen Sie auf &laquo;Fehlercodes lesen&raquo;. Innerhalb von fuenf
          Sekunden sehen Sie alle aktiven und gespeicherten Codes. Jeder Code
          ist auf Deutsch erklaert, mit typischen Ursachen und
          Reparaturkostenspanne. Beispiele:{" "}
          <Link href="/de/codes/p0420">P0420</Link>,{" "}
          <Link href="/de/codes/p0171">P0171</Link>,{" "}
          <Link href="/de/codes/p0300">P0300</Link>. Sie koennen die Codes
          per E-Mail teilen oder als PDF speichern, um sie mit der Werkstatt
          zu besprechen.
        </p>

        <h2>Schritt 6: Live-Daten und Audio-Scan</h2>
        <p>
          Ueber die Codes hinaus bietet AutoDiag EU Live-Daten zu Drehzahl,
          Kuehlmittel, Lambdasonde, Luftmasse und vielen weiteren Parametern.
          Besonders nuetzlich: der Audio-Scan. Halten Sie das Handy neben den
          Motor, die KI analysiert das Geraeusch und erkennt typische Probleme
          wie Lagerschaeden, Klopfen oder Riemenquietschen.
        </p>

        <h2>Schritt 7: Codes loeschen &mdash; mit Vorsicht</h2>
        <p>
          Codes loeschen ist moeglich, aber bedenken Sie: die Ursache
          verschwindet dadurch nicht. Der Code kommt innerhalb von 50 bis 200
          km zurueck. Vor allem NICHT kurz vor dem TUeV loeschen! Die
          Readiness-Monitore werden zurueckgesetzt und der Pruefer erkennt
          das sofort. Erst Ursache beheben, dann loeschen, dann 200 km
          fahren.
        </p>

        <h2>Was Sie jaehrlich sparen</h2>
        <p>
          Ein durchschnittlicher deutscher Autofahrer lost seine MKL zwei- bis
          dreimal pro Jahr aus. Bei 50 EUR pro Diagnose-Scan sind das 100 bis
          150 EUR jaehrlich. Der Adapter fuer 25 EUR amortisiert sich nach
          der ersten Nutzung. Nach fuenf Jahren: ueber 500 EUR Ersparnis
          &mdash; ohne einen Tropfen Oel anzufassen.
        </p>

        <h2>Fazit</h2>
        <p>
          Ein 25-EUR-Adapter plus eine kostenlose App ersetzt jeden
          Werkstattbesuch zum reinen Auslesen. AutoDiag EU macht das ganze
          auf Deutsch und erklaert jeden Code in verstaendlicher Sprache. Sie
          bleiben Herr Ihres Fahrzeugs &mdash; und Ihres Geldbeutels.
        </p>
      </ArticleLayout>
    </>
  );
}

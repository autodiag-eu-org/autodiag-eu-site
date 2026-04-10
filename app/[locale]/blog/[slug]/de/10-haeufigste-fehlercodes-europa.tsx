import Link from "next/link";
import { ArticleLayout } from "../_shared/ArticleLayout";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDE10HaeufigsteFehlercodes() {
  const faq: FaqItem[] = [
    {
      q: "Welcher OBD2-Fehlercode ist am haeufigsten in Europa?",
      a: "P0420 (Katalysator-Wirkungsgrad unter Schwellwert) ist der mit Abstand haeufigste Code auf europaeischen Fahrzeugen ab 8 Jahren. Er wird oft durch eine alternde Lambdasonde oder einen ermuedeten Katalysator ausgeloest.",
    },
    {
      q: "Kann ich mit einem aktiven Fehlercode durch die HU kommen?",
      a: "Nein. Seit 2010 fuehrt eine leuchtende MKL in Deutschland automatisch zum Durchfallen. Auch wenn der Code nur gespeichert ist und die Lampe aktuell aus ist, lesen manche Pruefer ihn dennoch aus. Daher immer die Ursache beheben, nicht nur loeschen.",
    },
    {
      q: "Sind alle P-Codes motorbezogen?",
      a: "Ja, P-Codes (Powertrain) betreffen Motor und Getriebe. C-Codes betreffen das Chassis (ABS, ESP), B-Codes die Karosserie (Airbag, Klimaanlage) und U-Codes den CAN-Bus und die Kommunikation zwischen Steuergeraeten.",
    },
    {
      q: "Wie viel kostet die teuerste Reparatur aus dieser Liste?",
      a: "Ein originaler Katalysator bei P0420 kann in Deutschland schnell 800 bis 1800 EUR kosten, bei Premium-Marken noch mehr. Ein Nachruest-Katalysator liegt bei 250 bis 500 EUR. Die Lambdasonde als Ursache kostet meist nur 80 bis 180 EUR.",
    },
    {
      q: "Kann ich diese Codes alle mit einem Handy lesen?",
      a: "Ja. Ein ELM327-Bluetooth-Adapter (ab 20 EUR) in Kombination mit der AutoDiag EU App liest alle zehn Codes in Sekunden aus und erklaert sie auf Deutsch. Keine teure Werkstatt-Diagnose noetig.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayout
        locale="de"
        title="Die 10 haeufigsten OBD2-Fehlercodes in Europa"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={11}
        category="Fehlercodes"
      >
        <p>
          Von Lissabon bis Berlin: dieselben zehn OBD2-Fehlercodes sind fuer
          rund 75 Prozent aller leuchtenden Motorkontrollleuchten in Europa
          verantwortlich. Dank der von der EU vorgeschriebenen OBD2-Norm
          bedeuten die Codes auf einem Volkswagen in Deutschland dasselbe wie
          auf einem Peugeot in Frankreich oder einem Fiat in Italien. Hier
          ist unsere Top 10 fuer 2026, mit typischen Ursachen und realen
          Reparaturkosten in Deutschland.
        </p>

        <h2>
          1. <Link href="/de/codes/p0420">P0420</Link> &mdash; Katalysator-
          Wirkungsgrad
        </h2>
        <p>
          Der absolute Spitzenreiter. Die nachgelagerte Lambdasonde meldet,
          dass der Katalysator nicht mehr genug Schadstoffe umwandelt.
          Ursachen: alte Lambdasonde (80 bis 180 EUR), ermuedeter Katalysator
          (Nachruest 250 bis 500 EUR, Original 800 bis 1800 EUR), undichte
          Abgasanlage vor dem Kat. Vor jeder Reparatur Lambdawerte live
          pruefen.
        </p>

        <h2>
          2. <Link href="/de/codes/p0171">P0171</Link> &mdash; Gemisch zu
          mager (Bank 1)
        </h2>
        <p>
          Das Motorsteuergeraet erkennt zu wenig Kraftstoff im Gemisch.
          Ursachen: Falschluft am Ansaugtrakt (Schlaeuche, Dichtungen),
          verschmutzter Luftmassenmesser (Reinigung 15 EUR, Tausch 120 bis
          250 EUR), defekte Einspritzduese. Typisch bei Fahrzeugen ueber
          120&thinsp;000 km.
        </p>

        <h2>
          3. <Link href="/de/codes/p0300">P0300</Link> &mdash; Zuendaussetzer
          zufaellig
        </h2>
        <p>
          Mehrere Zylinder haben Zuendaussetzer. Ursachen: verschlissene
          Zuendkerzen (40 bis 120 EUR), defekte Zuendspule (60 bis 200 EUR
          pro Stueck), undichte Einspritzduesen, schwache Batterie. Blinkt
          die MKL dabei, sofort in die Werkstatt &mdash; Gefahr fuer den
          Katalysator.
        </p>

        <h2>
          4. <Link href="/de/codes/p0442">P0442</Link> &mdash; EVAP kleines
          Leck
        </h2>
        <p>
          Das Tankentlueftungssystem ist undicht. Die haeufigste Ursache ist
          ein loser Tankdeckel (0 EUR zum Festdrehen, 20 EUR fuer einen
          neuen). Weitere Ursachen: defekte EVAP-Ventile (60 bis 150 EUR),
          undichter Aktivkohlebehaelter.
        </p>

        <h2>
          5. <Link href="/de/codes/p0128">P0128</Link> &mdash; Kuehlmittel
          erreicht Solltemperatur nicht
        </h2>
        <p>
          Der Motor wird nicht warm genug. Meistens ein blockiert offener
          Thermostat (Ersatzteil 25 bis 80 EUR, Einbau 80 bis 150 EUR).
          Manchmal auch ein defekter Kuehlmitteltemperaturgeber. Dieser Code
          fuehrt ausserdem zu erhoehtem Verbrauch.
        </p>

        <h2>6. P0113 &mdash; Ansauglufttemperatur-Sensor</h2>
        <p>
          Ein verstopfter oder verschmutzter IAT-Sensor liefert unrealistisch
          hohe Werte. Reinigung 15 EUR, Tausch 40 bis 120 EUR. Oft gepaart
          mit P0171.
        </p>

        <h2>7. P0401 &mdash; AGR unzureichender Durchfluss</h2>
        <p>
          Das Abgasrueckfuehrventil ist verkokt oder sitzt fest. Reinigung 80
          bis 200 EUR, Tausch 300 bis 700 EUR. Typisch bei Diesel-PKW mit
          viel Kurzstreckenverkehr.
        </p>

        <h2>8. P0455 &mdash; EVAP grosses Leck</h2>
        <p>
          Wie P0442, aber groesser. Tankdeckel defekt, geplatzter
          EVAP-Schlauch oder gerissener Aktivkohlebehaelter. Kosten 30 bis
          300 EUR je nach Ursache.
        </p>

        <h2>9. P0172 &mdash; Gemisch zu fett (Bank 1)</h2>
        <p>
          Gegenteil von P0171. Defekter Kraftstoffdruckregler, undichte
          Einspritzduese, gestoerter Luftmassenmesser. Ohne Behebung: hoher
          Verbrauch und Katalysatorschaden. Kosten 100 bis 500 EUR je nach
          Ursache.
        </p>

        <h2>10. P0011 &mdash; Nockenwellen-Position zu frueh (Bank 1)</h2>
        <p>
          Variable Ventilsteuerung verstellt. Meist verstopfter VVT-Magnet
          durch altes Oel oder ausgeleierte Steuerkette. Oelwechsel mit
          korrektem SAE-Grad, VVT-Magnet 80 bis 200 EUR, Steuerkette 800 bis
          2000 EUR.
        </p>

        <h2>Fazit</h2>
        <p>
          Diese zehn Codes decken rund drei Viertel aller MKL-Faelle in
          Europa ab. Mit einem ELM327-Adapter fuer 20 EUR und AutoDiag EU
          identifizieren Sie den Code in Sekunden, verstehen die Ursache und
          sehen die typischen Kosten &mdash; bevor Sie in die Werkstatt
          gehen. So vermeiden Sie Ueberraschungen beim Kostenvoranschlag.
        </p>
      </ArticleLayout>
    </>
  );
}

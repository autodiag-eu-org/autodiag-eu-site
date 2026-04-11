import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDE11PannenKlang() {
  const faq: FaqItem[] = [
    {
      q: "Warum 11 Klassen und nicht mehr?",
      a: "Weil das die Zahl der Klassen ist, fuer die wir genug etikettierte Daten haben (mindestens 250 Aufnahmen pro Klasse), um ein zuverlaessiges SVM zu trainieren. Unter dieser Schwelle wird das Risiko falsch Positiver zu hoch. Wir fuegen eine Klasse hinzu, sobald der Datensatz das Minimum erreicht.",
    },
    {
      q: "Kann der Scan zwei Pannen verwechseln?",
      a: "Ja, das ist die natuerliche Grenze jedes Klassifizierers. Ein tieffrequentes Lagergeraeusch kann in 8&nbsp;% der Faelle mit einem Pleuelspiel verwechselt werden. Deshalb zeigt das System immer eine Konfidenz: Unter 60&nbsp;% wird das Ergebnis als &laquo;zu beobachten&raquo; markiert und ein zweiter Scan empfohlen.",
    },
    {
      q: "Welche Panne ist am leichtesten zu erkennen?",
      a: "Ansaugluftlecks haben die beste Praezision, etwa 96&nbsp;%. Das hohe kontinuierliche Pfeifen ist sehr unterscheidbar. Zuendaussetzer sind mit 87&nbsp;% schwieriger, da sie sich manchmal mit einem normalen unregelmaessigen Leerlauf beim Diesel verwechseln.",
    },
    {
      q: "Was kostet das Ignorieren eines verdaechtigen Geraeuschs?",
      a: "Es haengt von der Panne ab. Ein Zahnriemen, der bei einem Motor mit Ventilueberschneidung reisst, kostet 2000 bis 8000&nbsp;EUR Reparatur. Ein ausfallendes Kurbelwellenlager zerstoert den gesamten Motor, oft ueber 4000&nbsp;EUR. Ein ignoriertes Turbopfeifen kann 1500&nbsp;EUR Ersatz kosten.",
    },
    {
      q: "Motor kalt oder warm fuer den Scan?",
      a: "Beide sind nuetzlich, beantworten aber verschiedene Fragen. Kalter Motor: Sie erkennen mechanisches Spiel und Startgeraeusche. Warmer Motor: Sie erkennen Oellecks, warme Lagerverschleisse und den Turbozustand. Ideal: beide machen und vergleichen.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="11 Motorpannen, die durch KI-Klanganalyse erkennbar sind"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnose"
      >
        <p>
          Hier ist die vollstaendige Liste der 11 Pannenklassen, die der
          AutoDiag-EU-Klang-Scan heute erkennt. Jede wurde auf mehreren
          hundert realen, handetikettierten Aufnahmen trainiert, die
          Benzin-, Diesel-, LPG-, Hybrid- und Turbomotoren abdecken. Fuer
          jede Panne: die Klangsignatur, das Risiko beim Ignorieren und
          eine Groessenordnung der Reparaturkosten in Europa.
        </p>

        <h2>1. Motorklopfen (knock)</h2>
        <p>
          Ein metallischer Klang, oft beschrieben als &laquo;Kugeln in
          einer Dose&raquo;, der unter Last oder beim Wiederbeschleunigen
          auftritt. Haeufige Ursache: Selbstzuendung durch schlechten
          Kraftstoff oder defekten Klopfsensor, manchmal Lagerverschleiss.
          Kosten: von 40&nbsp;EUR (Kerzenwechsel) bis 3500&nbsp;EUR
          (Grundmotorueberholung). Der Scan unterscheidet leichtes Klopfen
          (Warnung) von starkem Klopfen (sofortiger Stopp).
        </p>

        <h2>2. Lagergeraeusch (bearing noise)</h2>
        <p>
          Ein dumpfes Grollen in tiefer Frequenz (50&ndash;200&nbsp;Hz),
          das mit der Drehzahl variiert. Deutet auf muedes Pleuel-,
          Kurbelwellen- oder Nockenwellenlager. Kosten: frueh erkannt 300
          bis 800&nbsp;EUR Lagerschalen. Ignoriert: kompletter
          Motorschaden, 3500 bis 6000&nbsp;EUR. Das ist die Panne, wo
          Frueherkennung den groessten ROI bringt.
        </p>

        <h2>3. Ansaugluftleck (air leak)</h2>
        <p>
          Ein hohes, kontinuierliches Pfeifen, oft lauter im Leerlauf als
          bei hoher Drehzahl. Ein gerissener Ansaugschlauch, eine muede
          Krummerdichtung, ein Leck am Drosselklappengehaeuse. Oft
          korreliert mit einem Code{" "}
          <Link href="/de/codes/p0171">P0171 &mdash; Gemisch mager</Link>.
          Kosten: 15 bis 200&nbsp;EUR bei frueher Erkennung, gegen 400 bis
          800&nbsp;EUR, wenn die Lambdasonde aufgibt.
        </p>

        <h2>4. Abgasleck (exhaust leak)</h2>
        <p>
          Ein rhythmischer Hauch im Explosionstakt, oft lauter im kalten
          Zustand. Krummerdichtung, Rissflexrohr, lockere Schelle nach dem
          Katalysator. Direkte Auswirkung auf die Entgiftung und oft auf
          den Code{" "}
          <Link href="/de/codes/p0420">P0420</Link>. Kosten: 80 bis
          450&nbsp;EUR je nach Stelle.
        </p>

        <h2>5. Turbopfeifen (turbo whistle)</h2>
        <p>
          Ein hohes Pfeifen, das mit der Last steigt, anders als das
          normale Kompressorgeraeusch. Kann auf Wellenspiel, ein Leck an
          der Luftleitung oder ein vibrierendes Wastegate hinweisen.
          Kosten: 200 bis 1800&nbsp;EUR je nach Panne. Nie ignorieren: Ein
          ausfallender Turbo kann Oel in die Ansaugung senden und den
          Motor zerstoeren.
        </p>

        <h2>6. Riemengeraeusch (belt noise)</h2>
        <p>
          Ein Quietschen oder Kreischen, oft im Kalten oder bei feuchtem
          Wetter. Vereister Aggregatriemen, muedes Spannelement, feste
          Riemenscheibe. Kosten: 30 bis 250&nbsp;EUR. Wichtig: Ein
          reissender Aggregatriemen ist nicht dramatisch, aber der
          Zahnriemen verdient seine eigene Kategorie (siehe Klasse 11).
        </p>

        <h2>7. Ticken (tick)</h2>
        <p>
          Ein schnelles, regelmaessiges Tippen, mit der Drehzahl
          ausgerichtet. Oft die Hydrostoessel (niedriger Oelstand, zu
          altes Oel) oder ein verkrusteter Injektor. Kosten: Ein Oelwechsel
          mit Qualitaetsoel reicht in 60&nbsp;% der Faelle. Sonst
          Injektorreinigung oder Stoesselwechsel.
        </p>

        <h2>8. Injektorgeraeusch (injector noise)</h2>
        <p>
          Ein trockenes, schnelles Klappern, oben am Motor konzentriert,
          bei Common-Rail-Dieseln und Direkteinspritzer-Benzinern.
          Festgefressener Injektor, muede Feder, leckende
          Injektorrueckfuehrung. Kosten: 80&nbsp;EUR (Reinigung) bis
          2000&nbsp;EUR (komplette Injektoren).
        </p>

        <h2>9. Zuendaussetzer (misfire)</h2>
        <p>
          Ein unregelmaessiges Schlagen, der Motor &laquo;stolpert&raquo;.
          Signatur sehr nah am Code{" "}
          <Link href="/de/codes/p0300">P0300</Link>. Zuendkerzen, Spulen,
          toter Injektor, Kompressionsleck. Kosten: 15&nbsp;EUR (eine
          Kerze) bis 900&nbsp;EUR (Zylinderkopfdichtung).
        </p>

        <h2>10. Gesunder Motor (normal engine)</h2>
        <p>
          Keine Panne, aber eine essentielle Klasse: Sie verhindert falsch
          Positive. Wenn der Scan &laquo;normal engine&raquo; mit ueber
          80&nbsp;% Konfidenz ausgibt, wissen Sie, dass nichts sichtbar
          driftet. Ein Gesundheitsbulletin, keine Diagnose.
        </p>

        <h2>11. Distributionsgeraeusch&nbsp;/ Zahnriemen</h2>
        <p>
          Ein Geraeusch, anders als die Aggregatriemen: dumpfer, oft vom
          restlichen Motor verdeckt, vor allem durch die KI sichtbar, die
          die Spektralsignatur isoliert. Muedes Distributionsspanner,
          Riemen mit beginnender Zahnueberspringung, festgefressene
          Umlenkrolle. Die teuerste Panne beim Ignorieren auf einem Motor
          mit Ventilueberschneidung: 2000 bis 8000&nbsp;EUR im Schaden.
          Unbedingt lesen:{" "}
          <Link href="/de/blog/verschlissener-zahnriemen-durch-klang-erkennen">
            verschlissenen Zahnriemen am Klang erkennen
          </Link>
          .
        </p>

        <h2>Was Sie mitnehmen sollten</h2>
        <p>
          Diese 11 Klassen decken etwa 85&nbsp;% der in der Praxis
          auftretenden mechanischen Pannen auf Motoren unter 15&nbsp;Jahren
          ab. Die globale Modellpraezision liegt bei 91.3&nbsp;%. Sehen
          Sie eine Vorhersage ueber 80&nbsp;%, handeln Sie schnell.
          Zwischen 60 und 80&nbsp;% machen Sie einen zweiten Scan in der
          Woche zur Bestaetigung. Unter 60&nbsp;% bleibt das System
          vorsichtig und zeigt &laquo;indikativ&raquo;. Um die Erkennung
          tief zu verstehen, lesen Sie{" "}
          <Link href="/de/blog/wie-svm-funktioniert-technologie-hinter-klangscan">
            die Technologie hinter dem Klang-Scan
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

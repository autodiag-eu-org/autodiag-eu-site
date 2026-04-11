import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEFluessigkeitFarbeVerraet() {
  const faq: FaqItem[] = [
    {
      q: "Warum haben Autofluessigkeiten unterschiedliche Farben?",
      a: "Jede Fluessigkeit hat eine spezifische Funktion und eine angepasste Chemie, was zu natuerlichen oder zugesetzten Faerbungen fuehrt. Motoroel wird durch Oxidation braun, Kuehlmittel wird absichtlich eingefaerbt, um identifizierbar zu sein und Lecks zu erkennen, Bremsfluessigkeit ist nahezu transparent, um chemisch neutral zu bleiben. Diese Farben sind wertvolle Hinweise fuer die Diagnose.",
    },
    {
      q: "Ist ein kirschrotes Leck immer Automatikgetriebeoel?",
      a: "Fast immer. Automatikgetriebe nutzen ATF (Automatic Transmission Fluid), das neu kirschrot eingefaerbt ist, um es von anderen zu unterscheiden. Die Servolenkung teilt manchmal diese Farbe, aber in einem bernsteinfarbenen Ton. Die Position unter dem Fahrzeug entscheidet: Getriebe&nbsp;= Mitte, Lenkung&nbsp;= nahe der Zahnstange.",
    },
    {
      q: "Mein Kuehlmittel wird braun, ist das schlimm?",
      a: "Ja. Ein braun werdendes Kuehlmittel ist durch innere Rostablagerungen (Kuehler, Motorblock) verunreinigt oder mit Oel vermischt, wenn eine Zylinderkopfdichtung nachgibt. In jedem Fall ist es ein Alarm: schnelle Spuelung und gruendliche Inspektion.",
    },
    {
      q: "Kann transparente Bremsfluessigkeit trotzdem schlecht sein?",
      a: "Ja, durchaus. Neue Bremsfluessigkeit ist transparent bis strohgelb, aber sie nimmt mit der Zeit Feuchtigkeit auf und dunkelt schrittweise nach. Eine dunkelbraun gewordene Fluessigkeit hat ihre Eigenschaften verloren und muss ersetzt werden &mdash; auch ohne sichtbares Leck.",
    },
    {
      q: "Kann blaues Scheibenwischwasser mit anderen Fluessigkeiten verwechselt werden?",
      a: "Selten. Das satte Blau des Wischwassers ist sehr unterscheidbar. Manche Frostschutzkuehlmittel sind ebenfalls blau, aber dunkler und dichter. Im Zweifel entscheidet die Position des Flecks: Eine Wischwasserleckage liegt nahe am vorderen Behaelter oder unter dem Kofferraum (bei Modellen mit Heckduesen).",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Oel-, Bremsfluessigkeits- oder Kuehlmittelleck: Die Farbe verraet den Defekt"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Sichtdiagnose"
      >
        <p>
          Jede Fluessigkeit in Ihrem Auto hat ihre eigene chemische
          Geschichte. Diese Geschichten lesen sich in Farbe, Textur und
          Geruch. Ein guter Kfz-Mechaniker kann ein Leck in drei Sekunden
          identifizieren, nur indem er den Fleck anschaut. Die KI-Vision
          von AutoDiag&nbsp;EU hat dieselbe Sprache gelernt, beim Studium
          Tausender annotierter Aufnahmen. In diesem Artikel zeige ich
          Ihnen den vollstaendigen Katalog, warum jede Fluessigkeit ihre
          Farbe hat, und was ein Leck Ihnen wirklich ueber die Gesundheit
          Ihres Fahrzeugs sagt.
        </p>

        <h2>Motoroel: das Gedaechtnis der Zeit</h2>
        <p>
          Frisch aus der Dose ist Motoroel golden, fast bernsteinfarben,
          mit deutlicher Transparenz. Nach tausend Kilometern im Motor
          beginnt es nachzudunkeln: Verbrennungsrueckstaende, Kohlepartikel,
          metallische Verschleissspuren geben ihm nach und nach den
          charakteristischen braun-schwarzen Ton. Ein Oelleck ist deshalb
          fast immer braun auf dem Boden, mit mittlerer Viskositaet: Es
          breitet sich langsam aus und hinterlaesst einen fettigen Hof.
          Die Position liegt fast immer unter dem Motorblock oder unter der
          Oelwanne. Typische Reparaturkosten: Oelwannendichtung 80 bis
          180&nbsp;EUR, Kurbelwellensimmerring getriebeseitig 250 bis
          450&nbsp;EUR, Ventildeckeldichtung 120 bis 220&nbsp;EUR.
        </p>

        <h2>Kuehlmittel: das farbige Chamaeleon</h2>
        <p>
          Die Formulierungen variieren je nach Hersteller und Alter des
          Fahrzeugs. Die alten IAT (Inorganic Additive Technology) sind
          neongruen, noch auf alten Peugeot oder Citroen verwendet. OAT
          (Organic Acid Technology) sind orange oder rosa: G12+ rosa von
          Volkswagen, Dex-Cool orange von General Motors. HOAT (Hybrid
          Organic Acid Technology) mischen beide: gelb oder tuerkis. Jede
          Farbe signalisiert eine andere Chemie, und das Mischen zweier
          Familien verursacht eine Gelbildung, die den Kreislauf zerstoert.
          Die KI-Vision erkennt die Farbe, identifiziert die Gruppe und
          warnt Sie bei Inkohaerenz mit Ihrem Modell. Die Fluessigkeit ist
          duennfluessig (fast wie Wasser), der Geruch leicht suesslich.
          Typische Position: vor dem Motor oder unter dem Kuehler.
        </p>

        <h2>Bremsfluessigkeit: die toedliche Transparenz</h2>
        <p>
          Ein Bremsfluessigkeitsleck ist das einzige, das einen sofortigen
          Fahrzeugstopp erfordert. Neu ist sie transparent bis strohgelb,
          sehr duennfluessig, mit leicht chemischem Geruch. Alt wird sie
          braun, weil sie Feuchtigkeit aufnimmt (sie ist hygroskopisch,
          das ist ihre Aufgabe). Ein Leck findet sich nahe einem Rad
          (Radzylinder oder Bremssattel), unter dem Hauptbremszylinder im
          Motorraum oder entlang einer Bremsleitung. Das Risiko:
          Druckverlust im Kreislauf und fortschreitender Bremskraftverlust.
          Kosten: von 40&nbsp;EUR fuer eine einfache Entlueftung bis
          300&nbsp;EUR fuer einen kompletten Bremssattel. Die KI-Vision
          erkennt den fast transparenten Ton und stuft automatisch als
          kritischen Alarm ein. Bei Identifikation als Bremsfluessigkeit
          lautet die Empfehlung immer: nicht fahren, Abschleppen.
        </p>

        <h2>Automatikgetriebe: das Rot, das braun wird</h2>
        <p>
          ATF ist neu kirschrot eingefaerbt, speziell um erkennbar zu
          sein. Verunreinigt, gealtert oder ueberhitzt, wird es zu einem
          wenig appetitlichen braun-rot. Der Geruch wird dann verbrannt
          &mdash; klares Zeichen, dass Ihr Drehmomentwandler ueberhitzt
          ist. Ein ATF-Leck ist selten, aber schwerwiegend: Getriebe, das
          ruckelt, langsame Schaltvorgaenge, Stoesse. Kosten:
          Getriebedichtung 300 bis 600&nbsp;EUR, Oelwechsel 150 bis
          250&nbsp;EUR, komplettes Getriebe 2500 bis 4500&nbsp;EUR. Siehe
          auch, wie sich die{" "}
          <Link href="/de/blog/autodiag-vs-werkstatt-ersparnisse">
            Eigendiagnose im Vergleich zur Werkstatt schlaegt
          </Link>
          .
        </p>

        <h2>Servolenkung: das diskrete Bernsteinrot</h2>
        <p>
          Einige Fahrzeuge (vor allem aeltere BMW, Mercedes, Renault)
          nutzen eine hydraulische Servolenkung mit bernsteinroter
          Fluessigkeit. Heller als ATF, dichter als Bremsfluessigkeit. Ein
          Leck liegt unter der Zahnstange oder nahe der Servopumpe. Sie
          spueren das Leck am Lenkrad: Lenkung wird schwer, Knarren beim
          Voll-Einschlag. Kosten: 120 bis 280&nbsp;EUR fuer eine Dichtung,
          400 bis 900&nbsp;EUR fuer eine Zahnstange. Die KI-Vision
          unterscheidet es vom ATF ueber die Position unter dem Fahrzeug:
          Zahnstange fuer Lenkung, Mitte fuer Getriebe.
        </p>

        <h2>Die anderen: Scheibenwischwasser, LPG, AdBlue</h2>
        <p>
          Scheibenwischwasser ist hellblau oder rosa je nach Saison, sehr
          fluessig, zitroniger oder alkoholischer Geruch. Harmlos &mdash;
          ausser fuer Ihr Portemonnaie, wenn der Behaelter etwas
          touchiert. AdBlue, auf Euro&nbsp;6-Dieseln, ist transparent,
          hinterlaesst aber weisse Spuren beim Trocknen (es ist
          Harnstoff). Ein AdBlue-Leck loest den{" "}
          <Link href="/de/codes/p0300">
            Code P0300 und manchmal einen P0420
          </Link>{" "}
          aus, wenn der SCR-Katalysator an Wirkung verliert. LPG tritt
          gasfoermig aus und ist nicht am Boden sichtbar &mdash; die
          KI-Vision erkennt es nicht, hier braucht es einen Gassensor oder
          eine Werkstattkontrolle.
        </p>

        <h2>Das Protokoll im Zweifel</h2>
        <p>
          Wenn Sie zwischen zwei Fluessigkeiten zoegern, nutzt die
          KI-Vision einen Entscheidungsbaum. Erste Frage: dominante Farbe?
          Braun-schwarz&nbsp;= Oel fast sicher. Rot&nbsp;= ATF oder
          Lenkung. Gruen/orange/rosa&nbsp;= Kuehlmittel fast sicher.
          Transparent&nbsp;= Bremse oder Wischwasser. Zweite Frage: Wo
          befindet sich der Fleck unter dem Fahrzeug? Mitte&nbsp;= Getriebe
          oder Lenkung. Block&nbsp;= Motor. Rad&nbsp;= Bremse. Vorne
          unten&nbsp;= Kuehler. Dritte Frage: Wie lange steht das Fahrzeug
          bereits? Diese Angabe berechnet die Durchflussrate. Die drei
          Antworten konvergieren auf eine Diagnose mit Konfidenzindex.
          Ueber 85&nbsp;% bestaetigt die KI. Zwischen 60&nbsp;% und
          85&nbsp;% schlaegt sie zwei Hypothesen vor und bittet um
          Praezisierung (Geruch, Textur). Unter 60&nbsp;% verweist sie
          direkt an die Werkstatt. Zur Ergaenzung lesen Sie auch{" "}
          <Link href="/de/blog/ki-vision-leckagen-unter-auto-mit-handy-erkennen">
            Leckageerkennung unter dem Fahrzeug
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

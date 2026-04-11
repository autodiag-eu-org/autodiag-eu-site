import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEDieselTUVVorbereitung2026() {
  const faq: FaqItem[] = [
    {
      q: "Was aendert sich beim Diesel-TUeV 2026?",
      a: "Die Opazimetergrenzen bleiben streng: 1,5&nbsp;m-1 fuer Diesel nach 2008 und 2,5&nbsp;m-1 fuer aeltere. Die Sichtpruefung des DPF ist Pflicht: fehlender oder herausgeschnittener DPF bedeutet automatische Nachpruefung. AdBlue wird bei Euro&nbsp;6 kontrolliert, jeder SCR-Ausfall wird sanktioniert. 2026 gewinnen die verschaerften Kontrollen an Abgassystemen nochmals an Bedeutung.",
    },
    {
      q: "Wie vermeide ich eine Nachpruefung wegen Opazitaet?",
      a: "Fuehren Sie zwei Wochen vorher mehrere forcierte Regenerationen durch: fahren Sie zweimal 30&nbsp;Minuten auf der Autobahn bei mindestens 3000&nbsp;U/min. Nutzen Sie einen Katalysator-Additiv, wenn Sie hauptsaechlich Stadt fahren. Pruefen Sie, ob das AGR-Ventil nicht blockiert ist. Pruefen Sie Ansaugleckagen, die das Gemisch verfaelschen.",
    },
    {
      q: "Was kostet eine DPF-Reparatur?",
      a: "Eine Profireinigung in einer Fachstation kostet 200 bis 400&nbsp;EUR. Eine forcierte Regeneration in der Werkstatt wird mit 80 bis 150&nbsp;EUR berechnet. Ein vollstaendiger DPF-Tausch kostet je nach Fahrzeug 1000 bis 2500&nbsp;EUR. Praevention ist also deutlich guenstiger als die kurative Intervention.",
    },
    {
      q: "Was tun, wenn das Auto wegen AdBlue abgewiesen wird?",
      a: "Niemals lange im Notlaufmodus fahren: das Steuergeraet sperrt irgendwann den Start. Pruefen Sie zuerst den NOx-Sensor (Tausch 200 bis 450&nbsp;EUR), dann den AdBlue-Injektor (180 bis 350&nbsp;EUR). Ein Code P229F oder P2BAD im OBD2 zeigt direkt auf die Stoerung. Danach einen kompletten Entgiftungszyklus fahren, bevor Sie erneut zum TUeV gehen.",
    },
    {
      q: "Bestehen alte Dieselfahrzeuge 2026 noch den TUeV?",
      a: "Ja, aber mit geringerer Toleranz. Euro&nbsp;3- und Euro&nbsp;4-Diesel werden visuell strenger auf DPF geprueft. Euro&nbsp;2 und aeltere werden mit spezifischen Grenzwerten behandelt. In den Umweltzonen ist der Zugang eingeschraenkt, der TUeV selbst bleibt aber zugaenglich, solange das Fahrzeug die Opazitaets- und Geraeuschwerte einhaelt.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Diesel-TUeV 2026 vorbereiten: der komplette Leitfaden"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Praktischer Leitfaden"
      >
        <p>
          Der Diesel-TUeV macht Angst. Die Opazitaetsgrenzen sind strenger als
          bei Benzinern, die Abgasnachbehandlungssysteme sind fragil, und eine
          DPF-Nachpruefung kann bis zu 2500&nbsp;EUR kosten. Dennoch lassen
          sich mit guter Vorbereitung und gezielten Kontrollen die meisten
          Ablehnungen vermeiden. Dieser Leitfaden erklaert Ihnen genau, was
          zu tun ist, wann und was eine Reparatur kostet.
        </p>

        <h2>Die 5 Punkte, an denen ein Diesel-TUeV scheitert</h2>
        <p>
          Statistisch betreffen 60&nbsp;% der Diesel-Nachpruefungen einen
          dieser fuenf Punkte: zu hohe Opazitaet, herausgeschnittener oder
          fehlender DPF, AdBlue-Ausfall (SCR), Auspuffleckage oder verstopfter
          Differenzdrucksensor. Die ersten vier sind gravierend, der letzte
          ist oft vorab per OBD2-Scan zu erkennen.
        </p>

        <h2>Opazitaetsmessung: den Test verstehen</h2>
        <p>
          Der Pruefer montiert ein Opazimeter am Auspuffausgang und fuehrt
          drei Freibeschleunigungen bei warmem Motor durch. Das Geraet misst
          die Lichtabsorption der Abgase. Grenzen 2026: 1,5&nbsp;m-1 bei
          Euro&nbsp;5 und Euro&nbsp;6 (nach 2011), 2,5&nbsp;m-1 bei aelteren
          Dieseln. Ein gesunder DPF liefert typischerweise Werte zwischen 0,2
          und 0,8&nbsp;m-1. Ueber 1,2 ist bereits eine ernste Warnung.
        </p>

        <h2>Den DPF vor dem TUeV vorbereiten</h2>
        <p>
          Der DPF regeneriert sich passiv (ueber 60&nbsp;km/h) und aktiv
          (Nacheinspritzung, 600&nbsp;Grad). Fahren Sie hauptsaechlich Stadt,
          regeneriert der DPF nicht vollstaendig und setzt sich zu. Nehmen
          Sie zwei Wochen vor dem TUeV die Autobahn fuer zwei Fahrten von
          mindestens 30&nbsp;Minuten bei ueber 2500&nbsp;U/min. Das zwingt
          mehrere Regenerationszyklen und reinigt die Russablagerungen.
          Weitere Tipps im{" "}
          <Link href="/de/blog/tuev-vorbereitung-2026">
            allgemeinen TUeV-2026-Leitfaden
          </Link>
          .
        </p>

        <h2>AdBlue und SCR: die Falle der Euro&nbsp;6</h2>
        <p>
          Euro&nbsp;6-Diesel nutzen AdBlue zur NOx-Reduktion ueber einen
          SCR-Katalysator. Wenn das System ausfaellt, geht das Steuergeraet
          in den Notlauf und sperrt schliesslich den Start. Haeufige
          Ursachen: NOx-Sensor nach Lebensdauerende (200 bis 450&nbsp;EUR),
          verschmutzter AdBlue-Injektor (180 bis 350&nbsp;EUR), Kristallisation
          des Tanks im Winter oder erschoepfte AdBlue-Pumpe (350 bis
          600&nbsp;EUR). Ein Code{" "}
          <Link href="/de/codes/p0420">P0420</Link> zusammen mit P229F, P20EE
          oder P2BAD ist typisch. Scannen Sie vor dem TUeV.
        </p>

        <h2>Auspuffleckagen: der Schalldaempfer im Visier</h2>
        <p>
          Eine Leckage vor dem Katalysator oder dem DPF verfaelscht die
          Messungen und senkt die Entgiftungseffizienz. Der Pruefer inspiziert
          optisch und testet mit dem Opazimeter. Haeufige Lecks: Kruemmer
          (ermuedete Dichtung), Flexrohr nach dem Turbo (Risse) oder
          Schalldaempfer hinten (Korrosion). Eine kleine Schweissreparatur
          kostet 80 bis 150&nbsp;EUR. Ein kompletter Hinterteiltausch 400 bis
          900&nbsp;EUR. Der Klang-Scan erkennt Leckagen an ihrer Signatur
          &mdash; siehe{" "}
          <Link href="/de/blog/vorbeugende-klangpruefung-kaskadenrechnung-vermeiden">
            die vorbeugende Klangpruefung
          </Link>
          .
        </p>

        <h2>Zusaetzliche Sichtkontrollen</h2>
        <p>
          Ueber die reine Mechanik hinaus kontrolliert der Pruefer auch:
          Oelspuren unter dem Motor, Turboschlauch-Zustand, fehlende
          Warnleuchten (Motor, ABS, Airbag, AdBlue), Lichtfunktion,
          Reifenzustand, Spiel in Traggelenken und Silentbloecken. Eine
          visuelle Vorkontrolle mit unserer{" "}
          <Link href="/fr/blog/checkup-visuel-ia-5-points-vehicule-sain">
            5-Punkte-Methode
          </Link>{" "}
          deckt das Wesentliche in weniger als fuenf Minuten ab.
        </p>

        <h2>Zwei Wochen vorher: die komplette Checkliste</h2>
        <p>
          Tag T-14: zwei lange Autobahnfahrten zur DPF-Regeneration. Tag T-10:
          kompletter OBD2-Scan, Korrektur etwaiger Codes. Tag T-7: optische
          Pruefung auf Auspuff- und Oellecks. Tag T-5: Reifen, Lichter,
          Scheibenwasser pruefen. Tag T-3: Klang-Scan auf anormale
          Motorgeraeusche. Tag T: Termin bestaetigt, Auto warm, AdBlue-Tank
          mindestens halbvoll.
        </p>

        <h2>Umweltzone und TUeV: zwei verschiedene Dinge</h2>
        <p>
          Viele verwechseln: Der TUeV prueft die technische Konformitaet
          (gemessene Emissionen, vorhandene Systeme), die Umweltzone prueft
          die Umweltplakette (administrative Kategorie nach
          Erstzulassungsdatum). Sie koennen den TUeV mit einer
          gelb-plakettierten Gebrauchten bestehen, aber nicht unbedingt in
          die Innenstadt fahren. Der TUeV aendert nichts an Ihrer Plakette.
        </p>

        <h2>Wenn die Nachpruefung kommt</h2>
        <p>
          Keine Panik. Die Nachpruefung findet innerhalb von zwei Monaten
          statt und prueft nur die abgelehnten Punkte. Prioritaet: den
          blockierenden Punkt praezise identifizieren, schnell korrigieren
          und erneut vorfahren. Bei abgelehntem DPF eher Profireinigung als
          Tausch. Bei Auspuffleckage oft eine gezielte Schweissnaht.
          Bei AdBlue-Problem erst scannen, bevor man ausgibt. Siehe auch{" "}
          <Link href="/de/codes/p0300">den Code P0300</Link>, der oft
          Verbrennungsfehler bei Dieseln begleitet.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

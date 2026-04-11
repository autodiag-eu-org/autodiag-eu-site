import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEHoherKraftstoffverbrauch() {
  const faq: FaqItem[] = [
    {
      q: "Ab welchem Unterschied ist ein Verbrauch anormal?",
      a: "Ueber 15&nbsp;% Abweichung vom angegebenen Verbrauch (WLTP oder Hersteller), oder ueber 20&nbsp;% von Ihrem ueblichen Schnitt, ist ein Signal. Wenn Ihr Auto normal 6&nbsp;L/100&nbsp;km verbraucht und plotzlich auf 7,5&nbsp;L ansteigt ohne Nutzungsaenderung, hat etwas gedriftet. Jahreszeit erklaert 5 bis 10&nbsp;%, darueber hinaus muss man suchen.",
    },
    {
      q: "Was ist die haeufigste Ursache fuer Mehrverbrauch?",
      a: "Der verschmutzte MAF-Sensor (Luftmassenmesser). Er sendet einen verfaelschten Wert an das Steuergeraet, das durch Anfettung kompensiert. Reinigung mit Spezialspray: 15&nbsp;EUR und 10 Minuten. Genuegt das nicht, Tausch: 80 bis 250&nbsp;EUR. Direkt danach folgen ermuedete Lambdasonden und Kraftstoffdruecke ausser Bereich.",
    },
    {
      q: "Zaehlt der Fahrstil wirklich?",
      a: "Enorm. Ein schwerer Fuss kann den Stadtverbrauch verdoppeln. Heftige Beschleunigungen, hartes Bremsen und hohe Autobahngeschwindigkeiten sind die drei Hauptfaktoren. Bei 130&nbsp;km/h verbraucht man typisch 30&nbsp;% mehr als bei 110. Ein aufmerksamer Fahrer spart leicht 1 bis 2 Liter auf 100&nbsp;km ohne Fahrzeugaenderung.",
    },
    {
      q: "Wie diagnostizieren per OBD2?",
      a: "Die Schluesselwerte: Short Term Fuel Trim (STFT) und Long Term Fuel Trim (LTFT). Normal zwischen -5&nbsp;% und +5&nbsp;%. Ueber +10&nbsp;% dauerhaft, fettet das Steuergeraet an, um Falschluft oder einen unterlesenden Sensor zu kompensieren. Ueber +20&nbsp;% ist kritisch. Schauen Sie auch den MAF-Wert in g/s bei verschiedenen Drehzahlen und vergleichen mit den erwarteten Werten.",
    },
    {
      q: "Kann ein Oelwechsel den Verbrauch senken?",
      a: "Maessig, 1 bis 3&nbsp;%. Zu altes Oel erhoeht die internen Reibungen und treibt den Verbrauch hoch. Wenn Sie den Oelwechselintervall weit ueberschritten haben, machen Sie ihn, Sie gewinnen ein paar Zehntel. Rechnen Sie nicht damit, eine groessere Drift zu kompensieren &mdash; wenn der Verbrauch gesprungen ist, suchen Sie anderswo.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Hoher Kraftstoffverbrauch: Ursachen und OBD2-Diagnose"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnose"
      >
        <p>
          Wenn der Verbrauch ohne erkennbaren Grund steigt, ist das selten
          Schicksal. In 80&nbsp;% der Faelle findet eine methodische
          OBD2-Diagnose die Ursache in weniger als einer Stunde. Dieser
          Leitfaden gibt Ihnen die exakte Checkliste, den Uebeltaeter zu
          identifizieren &mdash; von harmlosen Ursachen bis zu ernsteren
          Stoerungen, mit Preisspannen jeder Massnahme.
        </p>

        <h2>Zuerst pruefen, was nichts kostet</h2>
        <p>
          Bevor Sie das OBD2 herausholen, beseitigen Sie Fehlalarme.
          Reifendruck: ein Unterdruck von 0,5&nbsp;bar erhoeht den Verbrauch
          um 3 bis 5&nbsp;%. Luftfilter: ein verstopfter Filter kann 0,3
          bis 0,5&nbsp;L/100&nbsp;km kosten. Dachtraeger oder Dachkoffer:
          bis zu 1,5&nbsp;L mehr auf der Autobahn. Schlechter Kraftstoff
          oder unbeabsichtigtes E85-Gemisch: kommt oefter vor als man
          denkt. Wetter: Winter, Kaelte und Winterreifen bringen natuerlich
          0,5 bis 1&nbsp;L mehr.
        </p>

        <h2>Der OBD2-Scan: Fuel Trims vor allem</h2>
        <p>
          Die Fuel Trims sind die aussagekraeftigsten Indikatoren. STFT
          (short term) ist die Sofortkorrektur, LTFT (long term) der
          gelernte Mittelwert. Normal sind beide zwischen -5&nbsp;% und
          +5&nbsp;%. Ueberschreitet LTFT dauerhaft +10&nbsp;%, fettet das
          Steuergeraet an. Suchen Sie: nicht gemessene Falschluft
          (Schlauch, Kruemmer, Ansaugdichtung), unterlesender MAF, ermuedete
          vordere Lambda, niedriger Kraftstoffdruck. Siehe den Code{" "}
          <Link href="/de/codes/p0171">P0171</Link>, der typisch diese
          Drifts begleitet.
        </p>

        <h2>MAF und MAP: die Luftmess-Sensoren</h2>
        <p>
          Der MAF-Sensor (Luftmassenmesser) oder MAP (Saugrohrdruck) teilt
          dem Steuergeraet die ins Triebwerk eintretende Luftmenge mit.
          Luegt er, ist das Gemisch falsch. Ein verschmutzter MAF
          unterschaetzt den Durchfluss, das Steuergeraet gibt zunaechst
          weniger Kraftstoff, hoert dann die Lambdas und korrigiert durch
          dauerhafte Anfettung. Ergebnis: hoher LTFT, Verbrauch steigt.
          Reinigung mit Spray: 15&nbsp;EUR und 10 Minuten. Ein MAF ueber
          200000&nbsp;km verdient einen Tausch auch nach Reinigung.
        </p>

        <h2>Lambdasonden: das Regelungsrelais</h2>
        <p>
          Die Vorkat-Sonde regelt das Gemisch jede Sekunde. Eine ermuedete
          Sonde (ueber 150000&nbsp;km) reagiert langsam, die Regelung
          schlechter, der Verbrauch driftet. Der Tausch kostet 80 bis
          200&nbsp;EUR pro Teil plus Einbau. Universalsonden (NTK, Bosch)
          sind ebenso leistungsfaehig wie Herstellerteile zum halben
          Preis.
        </p>

        <h2>Ermuedete oder verschmutzte Injektoren</h2>
        <p>
          Beim Diesel laufen Injektoren mit dem Alter leicht nach und
          geben mehr Kraftstoff als vorgesehen. Beim Benziner koennen sie
          verschmutzen und schlechter zerstaeuben. In beiden Faellen
          steigt der Verbrauch. Eine Bankreinigung (50 bis 100&nbsp;EUR
          pro Injektor) bringt Benzininjektoren oft wieder in Ordnung.
          Beim Diesel identifiziert der Ruecklaufmengentest direkt die
          schuldigen Injektoren.
        </p>

        <h2>AGR und Abgasnachbehandlung</h2>
        <p>
          Ein in Offenstellung blockiertes AGR-Ventil verduennt die
          Ansaugluft und laesst den Verbrauch steigen. In Geschlossenstellung
          saettigt es die NOx, beruehrt aber den Verbrauch nicht. Ein
          verstopfter DPF erhoeht den Abgasgegendruck und damit die
          Motorarbeit: spuerbarer Mehrverbrauch. Eine OBD2-Diagnose liest
          die AGR-Positionen und die Drifts, aber nur eine Strassenfahrt
          bestaetigt.
        </p>

        <h2>Reifen, Bremsen und Fahrwerk</h2>
        <p>
          Ein festsitzender Bremssattel, der den Belag an der Scheibe
          schleifen laesst, erzeugt dauerhaften Widerstand &mdash;
          uebermaessige Waerme einseitig, ungleicher Verschleiss, hoeherer
          Verbrauch. Ein stark ermuedetes Radlager erzeugt ebenfalls
          Rollwiderstand. Im Sommer belassene Winterreifen heben den
          Verbrauch um 0,5&nbsp;L.
        </p>

        <h2>Fahrstil: Faktor Nummer eins</h2>
        <p>
          Bevor Sie eine Stoerung suchen, befragen Sie Ihre Gewohnheiten.
          Haben Sie die Strecke geaendert? Die Bedingungen? Machen Sie
          mehr Kurzstrecken? Oekofahren spart leicht 15&nbsp;% an demselben
          Fahrzeug. Vorausschauen, rechtzeitig vom Gas, 110 statt 130
          fahren, Motor im laengeren Stillstand ausmachen, alles
          zusammen macht einen echten Unterschied. Siehe auch{" "}
          <Link href="/de/blog/vorbeugende-klangpruefung-kaskadenrechnung-vermeiden">
            die vorbeugende Klangpruefung
          </Link>
          .
        </p>

        <h2>Wann zum Profi</h2>
        <p>
          Bleibt der Verbrauch trotz der obigen Pruefungen anormal, erlaubt
          ein Besuch beim Mechaniker mit fortgeschrittenem Diagnosegeraet
          das Auslesen von Herstellermodi und den Zugang zu Parametern,
          die Standard-OBD2 nicht zeigt. Rechnen Sie mit 50 bis
          100&nbsp;EUR fuer eine solide Motor-Diagnose, die sich durch
          gesparte Spritkosten in den Folgemonaten leicht rechnet.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

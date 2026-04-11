import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEFahrzeugGesundheitsscore() {
  const faq: FaqItem[] = [
    {
      q: "Wie wird der Score berechnet?",
      a: "Man startet mit 100 Punkten. Jede erkannte Auffaelligkeit zieht eine Punktzahl ab, die von Schwere, Quelle und zugehoeriger Konfidenz abhaengt. Ein kritischer OBD2-Code zieht zwischen 15 und 25 Punkte ab. Eine anormale Klangsignatur mit ueber 80&nbsp;% Konfidenz zieht 8 bis 15 Punkte ab. Ein visuelles Element wie eine grosse Leckage zieht 10 bis 20 Punkte ab. Der Endscore ist auf 100 gedeckelt und nie negativ.",
    },
    {
      q: "Welche Note entspricht welchem Zustand?",
      a: "90 bis 100: exzellenter Zustand, keine Massnahme noetig. 75 bis 89: guter Zustand, einige Punkte zu beobachten. 60 bis 74: korrekter Zustand, mehrere Elemente verlangen Aufmerksamkeit. 40 bis 59: bedenklich, bald reparieren. 0 bis 39: verschlechterter Zustand, dringender Eingriff empfohlen. Die Schwellen sind so kalibriert, dass sie nicht unnoetig bei einem normal fahrenden Auto alarmieren.",
    },
    {
      q: "Warum beeinflusst die SVM-Konfidenz den Score?",
      a: "Weil eine Erkennung bei 55&nbsp;% Konfidenz nicht wie eine bei 92&nbsp;% behandelt werden darf. Die Strafe ist proportional zur Konfidenz. Bei 55&nbsp;% werden 40&nbsp;% der Basisstrafe abgezogen. Bei 92&nbsp;%, 100&nbsp;%. So vermeidet man Fehlalarme, die einen Score ungerecht sinken liessen.",
    },
    {
      q: "Entwickelt sich der Score mit der Zeit?",
      a: "Ja, jeder Scan wird archiviert. Sie sehen die Gesundheitskurve Ihres Autos ueber Wochen oder Monate. Ein Abwaertstrend sagt mehr als ein Einzelwert. Sinkt Ihr Score in drei Monaten von 92 auf 78, ist das ein klares Signal, dass sich etwas verschlechtert.",
    },
    {
      q: "Ersetzt der Score den TUeV?",
      a: "Nein, er ergaenzt ihn. Der TUeV bleibt die gesetzliche Referenz und wir wollen ihn nicht ersetzen. Der Gesundheitsscore ist ein paedagogischer Indikator, der hilft, Ihr Auto vor dem TUeV vorzubereiten und boese Ueberraschungen zu vermeiden.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Fahrzeug-Gesundheitsscore: so berechnen wir Ihre Note auf 100"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={9}
        category="Technologie"
      >
        <p>
          Eine einzige Zahl, die den Gesundheitszustand Ihres Autos
          zusammenfasst, ist ein alter Traum. Versuche existieren seit
          Jahren, oft zu simpel (Anzahl Fehlercodes mal Koeffizient)
          oder so komplex, dass sie undurchsichtig werden. Der AutoDiag
          EU Score wurde robust, verstaendlich und nachvollziehbar
          entworfen. So funktioniert er.
        </p>

        <h2>Grundprinzip: 100 Punkte am Start</h2>
        <p>
          Ein perfekt gesundes Auto hat 100 Punkte. Es kann keine
          gewinnen, nur verlieren. Jeder Scan berechnet die Summe der
          Strafen aus den drei Quellen (OBD2, Klang, Vision) und zieht
          sie von 100 ab. Dieser invertierte Additions-Ansatz ist
          intuitiv: je hoeher der Score, desto besser.
        </p>

        <h2>Quelle 1: OBD2</h2>
        <p>
          Ein Fehlercode zieht zwischen 5 und 25 Punkte ab, je nach
          Schwere. Ein nicht bestaetigter Pending-Code zieht halb so
          viel ab wie ein bestaetigter. Ein historischer Code (geloescht
          aber protokolliert) noch weniger. Die Codes sind in vier
          Stufen klassifiziert:
        </p>
        <p>
          Kritisch (20 bis 25 Punkte): mehrfache Fehlzuendungen,
          Motortemperatur ausserhalb, niedriger Oeldruck. Hoch (12 bis
          18): muede Lambda, langanhaltend fettes oder mageres Gemisch,
          blockierte AGR. Mittel (6 bis 12): Katalysator am Limit,
          ABS-Sensor, Airbag. Niedrig (2 bis 5): informative Defekte,
          Sekundaerleuchten. Ein Beispiel:{" "}
          <Link href="/de/codes/p0420">Code P0420</Link>, mittel
          eingestuft.
        </p>

        <h2>Quelle 2: Klang-Scan</h2>
        <p>
          Jede vom SVM erkannte Auffaelligkeit hat ein Basisgewicht und
          eine Konfidenz. Die Strafe ist: Basisgewicht mal SVM-Konfidenz,
          mit einer Mindestgrenze von 30&nbsp;%, unterhalb derer nichts
          angewendet wird. Ein Motorklappern bei 85&nbsp;% Konfidenz mit
          Basisgewicht 18 zieht 15 Punkte ab. Ein Klackern bei 62&nbsp;%
          mit Basisgewicht 10 zieht 6 Punkte ab.
        </p>
        <p>
          Die 11 SVM-Klassen haben nach Motor-Schwere kalibrierte
          Gewichte: knock und bearing noise haben die hoechsten Gewichte
          (tiefer mechanischer Verschleiss), belt noise und tick mittlere
          Gewichte, air leak und exhaust leak mittlere bis niedrige
          Gewichte.
        </p>

        <h2>Quelle 3: Vision KI</h2>
        <p>
          Jeder visuelle Befund ist in drei Stufen klassifiziert. Klein
          (3 bis 5 Punkte Verlust): trockener Oelfleck, leichte
          Oberflaechenkorrosion, Reifen mit ausreichender Tiefe aber
          sichtbarem Verschleiss. Mittel (8 bis 12): aktive Leckage,
          aktive Korrosion, Belag unter 4&nbsp;mm, Reifen nahe
          gesetzlicher Grenze. Stark (15 bis 20): grosse Leckage,
          durchdringender Rost, Belag am Lebensende, Reifen an der
          Verschleissmarke. Die Gewichte sind von europaeischen
          TUeV-Kriterien inspiriert.
        </p>

        <h2>Fusion und Deckelung</h2>
        <p>
          Die Rohsumme der Strafen ist bei 100 gedeckelt, um negative
          Scores zu vermeiden. Es gibt auch eine Anti-Doppelzaehlung:
          Wenn ein OBD2-Code und ein Klang-Scan auf dieselbe Panne
          zeigen (z.&nbsp;B.{" "}
          <Link href="/de/codes/p0300">P0300</Link> plus klanglicher
          Misfire), wird nur die hoechste Strafe gezaehlt, nicht
          beide. Diese Regel vermeidet Ueberstrafe.
        </p>

        <h2>Ehrliche Intervalle</h2>
        <p>
          Ein Score von 88 an einem 10-jaehrigen Auto ist exzellent.
          88 an einem Neuwagen ist korrekt aber nicht perfekt. Die Zahl
          muss im Kontext gelesen werden. Die App zeigt auch das Delta
          gegenueber dem Durchschnittsscore von Autos desselben Alters
          und derselben Motorisierung. Ein Clio 4 von 2016 mit 82
          Punkten liegt im Schnitt und muss nicht beunruhigen. Derselbe
          mit 55 Punkten verlangt sofortige Aufmerksamkeit.
        </p>

        <h2>Der Trend zaehlt mehr als der Wert</h2>
        <p>
          Was uns am meisten interessiert, ist nicht der Score von
          heute, sondern die Ableitung ueber die Zeit. Verliert Ihr
          Auto in zwei Monaten 15 Punkte, passiert etwas. Bleibt es seit
          einem Jahr stabil bei 78, ist es ein Gleichgewicht. Jeder
          Scan wird zeitgestempelt und Sie sehen die Kurve. Genau wie
          bei Blutdruck- oder Blutzucker-Monitoring: eine Einzelmessung
          sagt wenig, eine Serie sagt alles.
        </p>

        <h2>Kein Werkstatt-Urteil</h2>
        <p>
          Dieser Score ist kein TUeV-Urteil und keine Mechaniker-Meinung.
          Er ist ein paedagogischer Indikator, der Ihnen hilft, den
          Zustand Ihres Autos zu verstehen und informierte Entscheidungen
          zu treffen. Faellt der Score, wissen Sie, wo hinzuschauen.
          Steigt er nach Reparatur, haben Sie den Beweis, dass der
          Eingriff gewirkt hat. Ein Werkzeug, kein Orakel.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

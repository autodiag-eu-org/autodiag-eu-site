import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEDreifachdiagnose() {
  const faq: FaqItem[] = [
    {
      q: "Warum drei Technologien statt einer einzigen kombinieren?",
      a: "Weil keine Technologie fuer sich alle Pannen abdeckt. OBD2 liest die gespeicherten Fehlercodes des Steuergeraets, der Klang-Scan hoert mechanische Verschleisserscheinungen, die das Steuergeraet ignoriert, und die Vision-KI erkennt sichtbare Anomalien (Lecks, Rost, Reifen). Zusammen ueberschneiden sich die drei Schichten und liefern oft mehr als 90&nbsp;% Konfidenz.",
    },
    {
      q: "Was ist eine typische Panne, die eine einzelne Technologie verpasst?",
      a: "Ein Kurbelwellenlager, das ermuedet: OBD2 sieht nichts, weil kein Code ausgeloest wird, die Vision-KI kommt nicht an das Oelwannenbauteil, aber der Klang-Scan erkennt die akustische Signatur von 5&nbsp;% anormalem Verschleiss. Umgekehrt hoert man eine Bremsfluessigkeitsleckage am Hauptzylinder nicht, sieht sie aber sofort.",
    },
    {
      q: "Brauche ich zwingend einen OBD2-Dongle?",
      a: "Nein, Sie koennen mit Klang-Scan und Vision-KI alleine beginnen. Der ELM327-Dongle ergaenzt eine dritte Schicht, die die Konfidenz bei einem vorhandenen Fehlercode steigert, aber die App funktioniert perfekt ohne.",
    },
    {
      q: "Wie fusioniert die App die drei Quellen?",
      a: "Schicht 5 der Pipeline, die Sensorfusion, wendet Expertenregeln an: Tritt ein Code P0300 gleichzeitig mit einer Audio-Signatur von Fehlzuendungen bei ueber 75&nbsp;% Konfidenz auf, wechselt das Urteil von &laquo;beobachten&raquo; zu &laquo;sicher&raquo;. Wird visuell ein gruenes Leck erkannt und steigt die OBD2-Motortemperatur, wird die Kuehlmittelwarnung vorrangig.",
    },
    {
      q: "Funktioniert die Dreifachdiagnose bei allen Marken?",
      a: "Ja fuer Klang und Vision, die nur vom Telefon abhaengen. Fuer OBD2 haengt die Kompatibilitaet vom Protokoll ab: ueber 677 europaeische Fahrzeuge werden unterstuetzt, mit Fallback-Ebenen fuer alte Protokolle KWP2000 und ISO 9141-2.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Dreifachdiagnose: wie Klang, Vision und OBD2 sich ergaenzen"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Technologie"
      >
        <p>
          Es gibt drei Wege, ein Auto zum Sprechen zu bringen: ihm Fragen
          stellen, ihm zuhoeren und es ansehen. AutoDiag EU ist das einzige
          Consumer-Tool, das alle drei Ansaetze in einer App verbindet. Jeder
          hat seine Staerken und seine blinden Flecken, und genau durch
          Kreuzvergleich erhaelt man eine Diagnose wie in einer
          Spezialwerkstatt &mdash; ohne die Spezialrechnung.
        </p>

        <h2>Schicht 1: OBD2, die Stimme des Steuergeraets</h2>
        <p>
          Das Motorsteuergeraet spricht seit 2001 in Europa eine normierte
          Sprache. Ueber einen kleinen ELM327-BLE-Dongle unter dem Lenkrad
          kann jedes Telefon die gespeicherten Fehlercodes, die PID-Werte
          in Echtzeit (Drehzahl, Temperatur, Lambda, Zuendwinkel) lesen und
          gezielte Tests ausloesen. Schnell, chirurgisch, und ein Code wie{" "}
          <Link href="/de/codes/p0420">P0420</Link> sagt Ihnen direkt, dass
          der Katalysator am Ende ist.
        </p>
        <p>
          Aber OBD2 hat einen grossen Mangel: Es sieht nur, was das
          Steuergeraet sieht. Ein verschlissenes Radlager, ein rutschender
          Riemen, ein undichter Stossdaempfer loesen keinen Code aus. Die
          Sensoren konzentrieren sich auf Verbrennung und Abgasreinigung.
          Alles andere ist fuer sie unsichtbar.
        </p>

        <h2>Schicht 2: Klang-Scan, das Ohr, das nicht ermuedet</h2>
        <p>
          Unser SVM mit RBF-Kernel, trainiert auf 3963 Aufnahmen, erkennt
          elf Pannenklassen allein aus einem Audio-Sample von wenigen
          Sekunden. Er unterscheidet ein Pleuellagerklopfen von einem
          Ventilspiel, ein gesundes Turbopfeifen von einem, das den
          Lagerausfall ankuendigt, ein Abgasleck von einem Ansauglufteintritt.
          Ihr Ohr kann das nicht. Es saettigt um 15&nbsp;kHz, die KI
          arbeitet auf 56 spektralen und zeitlichen Merkmalen bis
          22&nbsp;kHz.
        </p>
        <p>
          Der Klang-Scan fuellt den blinden Fleck des OBD2: Er hoert den
          mechanischen Verschleiss, bevor das Steuergeraet den geringsten
          Code ausloest. Zur SVM-Methode siehe{" "}
          <Link href="/de/blog/comment-fonctionne-svm-technologie-scan-sonore">
            wie unsere SVM-Technologie funktioniert
          </Link>
          .
        </p>

        <h2>Schicht 3: Vision-KI, das Auge, das nicht ermuedet</h2>
        <p>
          Ein Foto des Bodens unter dem Auto kann mehr Informationen
          enthalten als ein kompletter Scan. Die Farbe der Fluessigkeit
          verraet die Art des Lecks, die Groesse des Flecks die
          Verlustgeschwindigkeit, die Position unter dem Fahrzeug das
          schuldige Bauteil. Die Vision-KI macht das in zwei Sekunden und
          geht dann zu den Reifen, den Belaegen durch die Speichen der
          Felgen, der beginnenden Korrosion unter dem Radkasten ueber.
        </p>

        <h2>Wenn die drei Schichten zusammenlaufen</h2>
        <p>
          Ein echter Fall. Ein Peugeot 308 1.6 HDi bekommt Code P0299 &mdash;
          Turbo Unterdrehzahl. Allein hat dieser Code fuenf moegliche
          Ursachen. Der direkt danach gestartete Klang-Scan zeigt 82&nbsp;%
          Konfidenz auf einem anormalen Turbopfeifen. Die Vision-KI auf
          einem Motorfoto erkennt eine Oelspur auf dem Ansaugschlauch auf
          der Turbo-Seite. Konsolidiertes Urteil: durchgebohrter Schlauch
          hinter dem Turbo. Gesamtdiagnosezeit: weniger als fuenf Minuten.
          Werkstattzeit fuer dasselbe Urteil: ein bis zwei Stunden, in
          Rechnung.
        </p>

        <h2>Triangulation, Schluessel zur Zuverlaessigkeit</h2>
        <p>
          Eine isolierte Diagnose kann immer irren. Eine Diagnose, die drei
          unabhaengige Quellen kreuzvergleicht, ist fast unanfechtbar.
          Prinzip kritischer Systeme in der Luftfahrt &mdash; drei Sensoren,
          Mehrheitsentscheidung. Dieselbe Logik wenden wir auf das Auto an.
          Wenn SVM, OBD2-Leser und Vision-KI sich einig sind, koennen Sie
          mit einem Bericht in die Werkstatt gehen, der die Fehlermarge
          begrenzt.
        </p>

        <h2>Eine Philosophie, kein Gimmick</h2>
        <p>
          Dieser Dreifach-Ansatz ist kein Marketing-Argument, sondern
          technische Notwendigkeit. Zu viele Apps lesen nur OBD2-Codes und
          uebersetzen sie &mdash; nuetzlich, aber unvollstaendig. Wir haben
          die drei Schichten parallel gebaut, weil das die einzige ehrliche
          Weise ist, ein Auto mit einem Telefon zu diagnostizieren. Siehe
          auch{" "}
          <Link href="/de/blog/11-pannes-detectables-analyse-sonore-moteur">
            die 11 durch Klanganalyse erkennbaren Pannen
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

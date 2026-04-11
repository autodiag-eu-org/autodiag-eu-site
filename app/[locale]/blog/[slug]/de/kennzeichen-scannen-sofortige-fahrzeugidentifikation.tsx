import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDEKennzeichenScannen() {
  const faq: FaqItem[] = [
    {
      q: "Wie lange dauert das Scannen eines Kennzeichens?",
      a: "Unter zwei Sekunden bei normalen Bedingungen. Die OCR liest die Zeichen, fragt die europaeische Datenbank ab und liefert Marke, Modell, Baujahr, Hubraum und Kraftstoff zurueck. Bei schlechtem Licht oder verschmutztem Kennzeichen kann die Zeit auf vier Sekunden steigen, das Ergebnis bleibt aber zu mehr als 95 Prozent zuverlaessig.",
    },
    {
      q: "Funktioniert das Kennzeichen-Scannen in allen europaeischen Laendern?",
      a: "Es funktioniert bei den EU-Standardformaten plus Schweiz und Vereinigtes Koenigreich. Einige personalisierte oder Diplomatenkennzeichen liefern keine technischen Daten, die OCR erkennt die Zeichen aber dennoch korrekt. Technisch abgedeckt sind Frankreich, Deutschland, Belgien, Spanien, Italien, Portugal, Vereinigtes Koenigreich, Niederlande und Schweiz.",
    },
    {
      q: "Kann ich das Kennzeichen eines Autos scannen, das ich gebraucht kaufen will?",
      a: "Das ist genau der Hauptanwendungsfall. Sie stehen vor dem Fahrzeug, scannen das Kennzeichen und vergleichen sofort mit der Anzeige. Marke, Modell, Baujahr, Energie: alles muss passen. Wenn die Anzeige Benzin sagt und die Datenbank Diesel sagt, drehen Sie sich um, bevor der Preis ueberhaupt verhandelt wird.",
    },
    {
      q: "Erkennt die Vision-KI, ob ein Kennzeichen manipuliert wurde?",
      a: "Sie erkennt grundlegende Inkohaerenzen: Format nicht konform zum angegebenen Land, falsch ausgerichtete Zeichen, anormaler Hintergrund. Sie ersetzt aber keine vollstaendige behoerdliche Pruefung. Fuer eine Transaktion verlangen Sie immer Fahrzeugschein und Titelnachweis ergaenzend.",
    },
    {
      q: "Enthalten die abgerufenen Daten Kilometerstand und Historie?",
      a: "Nein, das Kennzeichen-Scannen liefert nur die technischen Fahrzeugdaten: Marke, Modell, Motorisierung, Baujahr, Kraftstoff, Emissionen. Fuer die vollstaendige Historie (Unfaelle, km, Wartung) muss die VIN mit ihren 17 eindeutigen Zeichen gescannt werden.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="de"
        title="Kennzeichen scannen: sofortige Fahrzeugidentifikation"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Gebrauchtkauf"
      >
        <p>
          Stellen Sie sich vor: Sie stehen auf einem Parkplatz vor einem
          Golf VII, der Sie interessiert, der Verkaeufer besteht auf einer
          TSI-Version von 2016 mit wenig Kilometern. Sie zuecken Ihr
          Telefon, richten die Kamera auf das Kennzeichen, druecken
          einmal. Zwei Sekunden spaeter antwortet die App: Volkswagen Golf
          VII, 1.6 TDI 110 PS, Erstzulassung 2014. Gespraech beendet. Sie
          haben gerade einen Betrug vermieden. Genau das macht der
          Kennzeichen-Scanner von AutoDiag EU, und es ist die
          nuetzlichste Funktion, die wir je fuer Gebrauchtwagenkaeufer
          hinzugefuegt haben.
        </p>

        <h2>Die OCR im Dienst des misstrauischen Kaeufers</h2>
        <p>
          Das System basiert auf zwei technischen Bausteinen: einer fuer
          europaeische Kennzeichenformate optimierten OCR und einer
          Zulassungsdatenbank, die die technischen Daten des Fahrzeugs
          liefert. Die OCR beherrscht die neun wichtigsten EU-Formate
          plus Schweiz und UK. Sie unterscheidet die Null vom Buchstaben
          O, die Eins vom I und korrigiert automatisch Verzerrungen durch
          den Aufnahmewinkel. Sobald die Zeichen gelesen sind, werden sie
          an die Referenz-API gesendet, die das technische Datenblatt in
          wenigen hundert Millisekunden zurueckliefert.
        </p>

        <h2>Was Sie in zwei Sekunden bekommen</h2>
        <p>
          Die Antwort enthaelt: Marke, das genaue Modell mit
          Ausstattungsstufe falls verfuegbar, Hubraum und Leistung,
          Kraftstofftyp (Benzin, Diesel, Hybrid, Elektro, LPG, CNG, E85),
          Jahr der Erstzulassung und die Euro-Abgasnorm (Euro 4, 5, 6,
          6d). Fuer einen Kaeufer erlauben diese Informationen zu
          pruefen, ob das Fahrzeug mit den Umweltzonen Ihrer Stadt
          kompatibel ist, ob die angegebene Motorisierung der Realitaet
          entspricht und ob das Baujahr mit dem Tachostand konsistent
          ist.
        </p>

        <h2>Der Kaffeetest</h2>
        <p>
          Meine Lieblingsanwendung: Bevor ich ein Fahrzeug besichtige,
          scanne ich das Kennzeichen von den Fotos der Online-Anzeige.
          Wenn der Verkaeufer das Kennzeichen verpixelt hat, bitte ich
          um ein scharfes Foto. Wenn die KI-Antwort nicht zur Anzeige
          passt (andere Energie, Baujahr um zwei Jahre verschoben,
          niedrigeres Modell), muss ich gar nicht erst hinfahren. Ich
          habe eine unnoetige Fahrt, eine Stunde Verhandlung und
          wahrscheinlich einen manipulierten Tacho gespart. Bei zehn so
          gescannten Anzeigen sind im Schnitt zwei problematisch.
        </p>

        <h2>Die europaeische Regelung und Ihre Privatsphaere</h2>
        <p>
          Eine Frage kommt wieder: Ist es legal, irgendein Kennzeichen zu
          scannen? Ja. Ein Kennzeichen ist per Definition oeffentlich.
          Dagegen ist es verboten, dieses Kennzeichen mit den
          persoenlichen Daten des Halters zu verknuepfen, und AutoDiag
          EU tut das nicht. Sie erhalten das technische Datenblatt des
          Fahrzeugs, nicht Name oder Adresse des Halters. Diese
          Unterscheidung ist wesentlich und respektiert die DSGVO
          buchstabengetreu. Die Anfragen werden nicht gespeichert, sie
          bilden kein Profil.
        </p>

        <h2>Der Fall des Eigentuemers</h2>
        <p>
          Wenn Sie das Kennzeichen Ihres eigenen Autos scannen, kann die
          App automatisch ein Fahrzeugprofil anlegen: Marke, Modell,
          Baujahr, Kraftstoff vorausgefuellt. Sie sparen fuenf Minuten
          manuelle Eingabe. Dieses Profil dient anschliessend zur
          Personalisierung der OBD2-Diagnosen, zur Ausrichtung der{" "}
          <Link href="/de/blog/preparer-ct-2026">TUeV-Vorbereitung</Link>{" "}
          und zur Anpassung der Wartungsempfehlungen. Der Scan ist eine
          Eingangstuer, keine blosse Neugier.
        </p>

        <h2>Wenn der Scan scheitert</h2>
        <p>
          Drei Faelle sind problematisch. Personalisierte Kennzeichen
          oder solche mit zu vielen Fantasiezeichen liefern eine saubere
          OCR, aber keine technischen Daten. Alte Kennzeichen (in
          Frankreich vor 2009, Format FNI) funktionieren, die Daten sind
          aber weniger vollstaendig. Auslaendische Kennzeichen ausserhalb
          der EU (Norwegen, Serbien, Tuerkei) liegen ausserhalb des
          Bereichs. In diesen Faellen schlaegt die App vor, direkt die
          VIN zu scannen, um die gleichen, vollstaendigeren Informationen
          zu erhalten.
        </p>

        <h2>Die Gewinnkombination Kennzeichen + VIN + OBD2</h2>
        <p>
          Fuer eine vollstaendige Pruefung vor dem Kauf kombiniert das
          AutoDiag-EU-Protokoll drei Schichten. Erste Schicht: das
          Kennzeichen-Scannen in zehn Sekunden zur Basispruefung. Zweite
          Schicht: der{" "}
          <Link href="/de/blog/scanner-vin-decoder-historique-complet-voiture">
            VIN-Scan
          </Link>{" "}
          zum Abrufen der Historie (Unfaelle, Kilometerstand, Wartung).
          Dritte Schicht: die OBD2-Verbindung, falls ein Dongle
          verfuegbar ist, um gespeicherte und ausstehende Codes zu
          lesen. Mit diesen drei Schichten sehen Sie in fuenfzehn
          Minuten, wofuer eine traditionelle Inspektion eine Stunde
          braucht. Das ist die Kraft der{" "}
          <Link href="/de/blog/autodiag-vs-garage">
            Selbstdiagnose im Vergleich zum Werkstattbesuch
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleAcheterOccasionVerifs() {
  const faq: FaqItem[] = [
    {
      q: "Quelle est la verification la plus importante avant d&apos;acheter ?",
      a: "Le scan OBD2 complet, suivi immediatement d&apos;un scan sonore moteur. Le premier revele les codes caches et les valeurs de vieillissement (lambda, catalyseur, fuel trims). Le second detecte les usures mecaniques que le vendeur ne peut pas masquer meme en effacant les codes. A eux deux, ils donnent une photo fiable de la sante reelle du vehicule en moins de dix minutes.",
    },
    {
      q: "Peut-on effacer un voyant juste avant la vente ?",
      a: "Oui, et beaucoup de vendeurs peu scrupuleux le font. Mais certains codes reviennent apres quelques kilometres, et surtout les valeurs de readiness (monitors OBD2) sont alors toutes a zero. Un vendeur honnete n&apos;efface pas les codes juste avant la visite : les monitors sont prets, ce qui signifie que le calculateur a eu le temps de se reinitialiser apres les reparations.",
    },
    {
      q: "Comment reperer un compteur trafique ?",
      a: "Recoupez trois sources : le carnet d&apos;entretien avec les dates et kilometrages, l&apos;historique Histovec ou equivalent europeen, et le kilometrage reel mesure par le scanner OBD2 dans certains calculateurs (ABS, boite). Un ecart de plus de 5000 km entre les sources est un signal clair. Les plus grosses manipulations depassent les 50000 km.",
    },
    {
      q: "Dois-je payer un pre-achat chez un mecanicien ?",
      a: "Pour une voiture au-dela de 10000 euros, oui c&apos;est une bonne idee, comptez 100 a 200 euros. Pour une voiture en dessous, un scan complet avec l&apos;application plus un essai routier attentif couvre 85% des cas. Si vous avez un doute specifique (embrayage, boite), un passage chez un mecanicien specialiste de la marque reste rassurant.",
    },
    {
      q: "Quels documents exiger imperativement ?",
      a: "Carte grise originale, certificat de non-gage, controle technique de moins de 6 mois, carnet d&apos;entretien, factures des grosses interventions (distribution, embrayage, turbo). Pour une voiture importee, verifiez que le certificat de conformite europeen est present. Refusez tout achat sans ces documents de base.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Acheter une voiture d&apos;occasion : les verifications essentielles en 2026"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Achat occasion"
      >
        <p>
          L&apos;occasion est un marche piege. Les annonces brillent, les
          vendeurs sont aimables, les photos sont flatteuses, et pourtant
          un acheteur sur trois regrette son achat dans les six mois selon
          les etudes de consommation europeennes. La bonne nouvelle :
          80% des mauvaises affaires auraient pu etre evitees avec une
          inspection methodique de trente minutes. Voici la checklist
          complete qu&apos;un acheteur averti doit suivre en 2026.
        </p>

        <h2>Avant meme de se deplacer</h2>
        <p>
          Scannez la plaque d&apos;immatriculation ou le VIN par OCR depuis
          l&apos;annonce pour verifier la conformite de base : marque,
          modele, annee, carburant, motorisation. Un vendeur qui se trompe
          sur sa propre voiture est un signal. Consultez Histovec (France),
          Car-Pass (Belgique), TUV Report (Allemagne) ou equivalent pour
          verifier l&apos;historique de kilometrage, les sinistres declares
          et les rappels constructeur. Voir{" "}
          <Link href="/fr/blog/scanner-vin-decoder-historique-complet-voiture">
            scanner le VIN pour decoder l&apos;historique
          </Link>
          .
        </p>

        <h2>Inspection visuelle carrosserie</h2>
        <p>
          Commencez par faire le tour de la voiture en plein jour.
          Cherchez les differences de teinte entre panneaux (signe de
          repeinture), les traces de mastic sous les plastiques
          d&apos;aile, les ecarts d&apos;alignement de capot ou de portes.
          Mesurez l&apos;epaisseur de peinture avec un epaisseurmetre (15
          a 30 euros) — une epaisseur superieure a 250 microns trahit une
          reparation importante. Verifiez les ecrous de suspension au
          passage de roue : s&apos;ils sont marques, la voiture a pris
          un choc.
        </p>

        <h2>Sous la voiture : les fuites qui parlent</h2>
        <p>
          Regardez le sol ou la voiture est stationnee. Une tache fraiche
          brune signale une fuite d&apos;huile. Verte, rose ou orange :
          c&apos;est du liquide de refroidissement. Rouge : ATF de boite
          automatique. Transparente : liquide de frein ou condensat
          climatisation (benin). Les couleurs parlent. Voir{" "}
          <Link href="/fr/blog/fuite-huile-liquide-frein-coolant-couleur-revele-panne">
            la couleur des fluides revele la panne
          </Link>
          .
        </p>

        <h2>Les pneus : une histoire en quatre chapitres</h2>
        <p>
          Les pneus racontent la geometrie et l&apos;usure. Usure centrale
          : surgonflage chronique. Usure sur les epaules : sous-gonflage
          ou amortisseur mort. Usure en biais (cupping) : suspension ou
          parallelisme. Usure uniforme avec profondeur inferieure a 3 mm : pneus a
          changer, facteur a negocier. Verifiez aussi les dates de
          fabrication (DOT) : des pneus de plus de 6 ans durcissent et
          perdent en adherence, meme avec du profil.
        </p>

        <h2>Scan OBD2 : la sincerite du calculateur</h2>
        <p>
          Branchez votre dongle ELM327 et lancez un scan complet. Trois
          choses a verifier absolument. Un : les codes actifs et en
          attente. Deux : les monitors OBD2 (readiness tests) — ils
          doivent etre majoritairement a ready, signe que la voiture
          roule normalement depuis assez longtemps pour que le
          calculateur ait teste tous ses systemes. Trois : les
          kilometrages remontes par certains calculateurs (ABS, boite)
          pour recouper avec le compteur. Un code{" "}
          <Link href="/fr/codes/p0300">P0300</Link> en attente est un
          avertissement serieux.
        </p>

        <h2>Scan sonore : ce que le vendeur ne peut pas masquer</h2>
        <p>
          Le scan sonore est impossible a manipuler. Meme si le vendeur
          a efface tous les codes, l&apos;usure mecanique laisse sa
          signature acoustique. Lancez un enregistrement de 30 secondes
          moteur chaud au ralenti, puis un autre a 2500 tr/min. Le SVM
          classe les anomalies. Une confiance superieure a 70% sur une
          classe bearing, knock ou tick est un signal qui merite
          discussion. Voir{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            les 11 pannes detectables par analyse sonore
          </Link>
          .
        </p>

        <h2>Essai routier methodique</h2>
        <p>
          Minimum 20 minutes en conditions variees : urbain, depart
          arrete, autoroute, freinage appuye, virage serre. Ecoutez les
          bruits suspects, verifiez que les rapports passent sans
          ressauts, que le freinage est franc et droit, que la direction
          ne tire pas, que le climatiseur refroidit rapidement. Arretez
          le moteur chaud, redemarrez : un demarreur qui force ou une
          fumee au demarrage sont des alertes majeures.
        </p>

        <h2>Verifier les documents</h2>
        <p>
          Carte grise originale au nom du vendeur, certificat de non-gage
          de moins de 15 jours, controle technique de moins de 6 mois
          (ou vierge si vehicule exempte), carnet d&apos;entretien
          coherent avec le kilometrage, factures des interventions
          importantes. Pour les voitures de plus de 5 ans, la facture de
          distribution est capitale. Voir aussi{" "}
          <Link href="/fr/codes/p0420">le code P0420</Link> qui est un
          motif frequent de negociation.
        </p>

        <h2>Negocier sur des bases factuelles</h2>
        <p>
          Si l&apos;inspection revele des defauts, negociez sur chiffres
          : devis de reparation, cout de remise en etat, decote du
          vehicule. Un vendeur serieux accepte une negociation
          documentee. Un vendeur qui s&apos;agite pour un devis de 400
          euros est sans doute lui-meme surpris par ce que vous avez
          trouve. Partez si besoin — il y a toujours une autre annonce.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

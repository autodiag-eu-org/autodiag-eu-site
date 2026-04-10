import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleConsommationExcessiveCarburant() {
  const faq: FaqItem[] = [
    {
      q: "A partir de quelle difference une consommation est-elle anormale ?",
      a: "Au-dela de 15% d&apos;ecart par rapport a la consommation annoncee (WLTP ou constructeur), ou au-dela de 20% de la moyenne que vous aviez habituellement, c&apos;est un signal. Par exemple si votre voiture consomme normalement 6L pour 100 km et qu&apos;elle passe a 7.5L sans changement d&apos;usage, quelque chose a derive. Les variations saisonnieres expliquent 5 a 10%, au-dela il faut chercher.",
    },
    {
      q: "Quelle est la cause la plus frequente de surconsommation ?",
      a: "Le capteur MAF (debimetre d&apos;air massique) encrasse. Il envoie une valeur biaisee au calculateur qui compense en enrichissant le melange. Nettoyage au spray specifique : 15 euros et 10 minutes. Si ca ne suffit pas, remplacement : 80 a 250 euros. Juste apres le MAF, on trouve les sondes lambda fatiguees et les pressions de carburant hors plage.",
    },
    {
      q: "Le style de conduite compte-t-il vraiment ?",
      a: "Enormement. Un pied lourd peut doubler la consommation en ville. Les acceleration franches, freinages brutaux et vitesses elevees sur autoroute sont les trois principaux facteurs. A 130 km/h on consomme typiquement 30% de plus qu&apos;a 110 km/h. Un conducteur attentif economise facilement 1 a 2 litres aux 100 km sans rien changer a sa voiture.",
    },
    {
      q: "Comment diagnostiquer via OBD2 ?",
      a: "Les valeurs cles a lire : short term fuel trim (STFT) et long term fuel trim (LTFT). Normalement entre -5% et +5%. Au-dela de +10% durablement, le calculateur enrichit pour compenser une prise d&apos;air ou un capteur sous-lisant. Au-dela de +20%, c&apos;est critique. Regardez aussi la valeur MAF en g/s a differents regimes et comparez aux valeurs attendues pour votre moteur.",
    },
    {
      q: "Une vidange peut-elle reduire la consommation ?",
      a: "Moderement, 1 a 3%. Une huile trop vieille augmente les frottements internes et fait monter la consommation. Si vous avez depasse l&apos;intervalle de vidange de beaucoup, faites-la, vous gagnerez quelques centiemes. Ne comptez pas dessus pour compenser une derive plus importante — si la consommation a fait un bond, cherchez ailleurs.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Consommation excessive de carburant : causes et diagnostic OBD2"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          Quand la consommation grimpe sans raison apparente, c&apos;est
          rarement une fatalite. Dans 80% des cas, un diagnostic OBD2
          methodique trouve la cause en moins d&apos;une heure. Ce guide
          vous donne la checklist exacte pour identifier le coupable,
          des causes benignes aux pannes plus serieuses, avec les
          fourchettes de prix de chaque intervention.
        </p>

        <h2>Verifier d&apos;abord ce qui coute zero</h2>
        <p>
          Avant de sortir l&apos;OBD2, eliminer les fausses alertes.
          Pression des pneus : un sous-gonflage de 0.5 bar augmente la
          consommation de 3 a 5%. Filtre a air : un filtre colmate peut
          coster 0.3 a 0.5 litres au cent. Barres de toit ou coffre de
          toit : jusqu&apos;a 1.5 litres de plus sur autoroute. Essence
          de mauvaise qualite ou melange avec de l&apos;E85 non prevu :
          ca existe plus souvent qu&apos;on ne le croit. Conditions
          meteo : l&apos;hiver, le froid et les pneus neige ajoutent
          naturellement 0.5 a 1 litre.
        </p>

        <h2>Le scan OBD2 : fuel trims avant tout</h2>
        <p>
          Les fuel trims sont les indicateurs les plus parlants. STFT
          (short term) est la correction instantanee, LTFT (long term)
          est la moyenne apprise. Normalement les deux sont entre -5% et
          +5%. Si LTFT depasse +10% durablement, le calculateur enrichit
          pour compenser quelque chose. Cherchez : prise d&apos;air non
          mesuree (durite, collecteur, joint d&apos;admission), capteur
          MAF sous-lisant, sonde lambda amont fatiguee, pression de
          carburant basse. Voir le code{" "}
          <Link href="/fr/codes/p0171">P0171</Link> qui accompagne
          typiquement ces derives.
        </p>

        <h2>MAF et MAP : les capteurs de mesure d&apos;air</h2>
        <p>
          Le capteur MAF (debimetre massique) ou MAP (pression
          d&apos;admission) indique au calculateur la quantite
          d&apos;air qui entre dans le moteur. S&apos;il ment, le
          melange est fausse. Un MAF encrasse sous-estime le debit, le
          calculateur applique moins de carburant, puis ecoute le
          retour des lambdas et corrige en enrichissant durablement.
          Resultat : LTFT eleve, consommation en hausse. Nettoyage au
          spray dedie : 15 euros et 10 minutes. Un MAF au-dela de 200000
          km merite un remplacement meme apres nettoyage.
        </p>

        <h2>Sondes lambda : le relais de la regulation</h2>
        <p>
          La sonde amont pilote la regulation du melange a chaque
          seconde. Une sonde fatiguee (plus de 150000 km) reagit
          lentement, le calculateur regule moins bien, la consommation
          derive. Le remplacement coute 80 a 200 euros la piece plus
          pose. Les sondes universelles (NTK, Bosch) sont aussi
          performantes que les pieces constructeur a prix divise par
          deux. Voir{" "}
          <Link href="/fr/blog/cout-reparation-catalyseur-p0420">
            le cout reparation catalyseur P0420
          </Link>{" "}
          qui discute aussi des lambdas.
        </p>

        <h2>Injecteurs fatigues ou encrasses</h2>
        <p>
          Sur diesel, les injecteurs fuient legerement avec l&apos;age et
          envoient plus de carburant que prevu. Sur essence, ils peuvent
          s&apos;encrasser et pulveriser moins bien. Dans les deux cas,
          la consommation monte. Un nettoyage au banc (50 a 100 euros
          par injecteur) remet souvent d&apos;aplomb les injecteurs
          essence. Pour les diesel, le test de debit de retour identifie
          directement les injecteurs fautifs.
        </p>

        <h2>EGR et systemes de depollution</h2>
        <p>
          Une vanne EGR bloquee ouverte dilue l&apos;air admis et fait
          monter la consommation. Une EGR bloquee fermee sature les NOx
          mais ne touche pas la consommation. Un FAP colmate augmente
          la contre-pression d&apos;echappement et donc le travail
          moteur : consommation en hausse notable. Un diagnostic OBD2
          lit les positions EGR et les derives, mais seul un test route
          confirme.
        </p>

        <h2>Pneus, freins et train roulant</h2>
        <p>
          Un etrier grippe qui laisse trainer la plaquette sur le disque
          cree une resistance permanente — chauffe excessive d&apos;un
          cote, usure inegale, consommation en hausse. Un roulement tres
          fatigue produit aussi de la resistance au roulement. Des
          pneus-neige laisses en ete font monter la conso de 0.5 litre.
          Voir{" "}
          <Link href="/fr/blog/bruit-roulement-roue-detecter-usure-avant-ct">
            detecter un bruit de roulement
          </Link>
          .
        </p>

        <h2>Style de conduite : le facteur numero un</h2>
        <p>
          Avant de chercher une panne, interrogez-vous sur vos
          habitudes. Avez-vous change de trajet ? De conditions ?
          Faites-vous plus de courts trajets ? L&apos;eco-conduite
          economise facilement 15% sur un meme vehicule. Anticiper,
          lever le pied a temps, rouler a 110 plutot que 130, couper le
          moteur a l&apos;arret prolonge, tout ca cumule fait une vraie
          difference. Voir aussi{" "}
          <Link href="/fr/blog/diagnostic-preventif-economiser-milliers-euros">
            le diagnostic preventif et ses economies concretes
          </Link>
          .
        </p>

        <h2>Quand faire appel a un pro</h2>
        <p>
          Si apres verification des points ci-dessus la consommation
          reste anormale, un passage chez un mecanicien avec outil
          diagnostic avance permet de lire les modes constructeur et
          d&apos;acceder a des parametres que l&apos;OBD2 standard
          n&apos;expose pas. Comptez 50 a 100 euros pour un diagnostic
          motorise serieux, largement rentable sur la facture de
          carburant economisee dans les mois suivants.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

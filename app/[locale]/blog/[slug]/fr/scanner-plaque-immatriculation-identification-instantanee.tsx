import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleScannerPlaque() {
  const faq: FaqItem[] = [
    {
      q: "Combien de temps prend le scan d&apos;une plaque d&apos;immatriculation ?",
      a: "Moins de deux secondes en conditions normales. L&apos;OCR lit les caracteres, interroge la base europeenne, et renvoie marque, modele, annee, cylindree et carburant. Si la lumiere est mauvaise ou la plaque sale, le temps peut monter a quatre secondes mais le resultat reste fiable a plus de 95%.",
    },
    {
      q: "Le scan de plaque fonctionne-t-il dans tous les pays europeens ?",
      a: "Il fonctionne sur les formats standards de l&apos;UE plus Suisse et Royaume-Uni. Certaines plaques personnalisees ou diplomatiques ne renvoient pas de donnees techniques, mais l&apos;OCR identifie quand meme correctement les caracteres. Les bases techniques sont couvertes pour la France, l&apos;Allemagne, la Belgique, l&apos;Espagne, l&apos;Italie, le Portugal, le Royaume-Uni, les Pays-Bas et la Suisse.",
    },
    {
      q: "Puis-je scanner la plaque d&apos;une voiture que je veux acheter en occasion ?",
      a: "C&apos;est precisement l&apos;usage principal. Vous arrivez devant le vehicule, vous scannez la plaque, vous comparez instantanement avec l&apos;annonce. Marque, modele, annee, energie : tout doit coller. Si l&apos;annonce dit essence et que la base dit diesel, vous tournez les talons avant meme de discuter prix.",
    },
    {
      q: "La Vision IA detecte-t-elle si une plaque a ete maquillee ?",
      a: "Elle detecte les incoherences basiques : format non conforme au pays declare, caracteres mal aligned, fond anormal. Mais elle ne remplace pas une verification administrative complete. Pour une transaction, exigez toujours la carte grise et le certificat de non-gage en complement.",
    },
    {
      q: "Les donnees recuperees incluent-elles le kilometrage et l&apos;historique ?",
      a: "Non, le scan de plaque donne uniquement les caracteristiques techniques du vehicule : marque, modele, motorisation, annee, carburant, emissions. Pour l&apos;historique complet (accidents, km, entretien), il faut scanner le VIN qui contient 17 caracteres uniques.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Scanner une plaque d&apos;immatriculation : identification instantanee du vehicule"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Achat occasion"
      >
        <p>
          Imaginez : vous etes dans un parking devant une Golf VII qui vous
          interesse, le vendeur insiste sur une version TSI de 2016 avec peu
          de kilometres. Vous sortez votre telephone, vous cadrez la plaque,
          vous appuyez une fois. Deux secondes plus tard, l&apos;application
          vous repond : Volkswagen Golf VII, 1.6 TDI 110 ch, mise en
          circulation 2014. Conversation terminee. Vous venez d&apos;eviter
          une arnaque. C&apos;est exactement ce que fait le scanner de plaque
          d&apos;AutoDiag EU, et c&apos;est la fonctionnalite la plus utile
          qu&apos;on ait jamais ajoutee pour les acheteurs d&apos;occasion.
        </p>

        <h2>L&apos;OCR au service de l&apos;acheteur mefiant</h2>
        <p>
          Le systeme repose sur deux briques techniques : un OCR optimise
          pour les formats de plaques europeennes, et une base de donnees
          d&apos;immatriculations qui renvoie les caracteristiques techniques
          du vehicule. L&apos;OCR gere les neuf formats principaux de
          l&apos;UE, plus Suisse et UK. Il sait distinguer le zero de la
          lettre O, le un de la lettre I, et il corrige automatiquement les
          inversions dues a un angle de prise de vue. Une fois les caracteres
          lus, ils sont envoyes a l&apos;API de reference qui renvoie la
          fiche technique en quelques centaines de millisecondes.
        </p>

        <h2>Ce que vous obtenez en deux secondes</h2>
        <p>
          La reponse contient : la marque, le modele exact avec son niveau de
          finition si disponible, la cylindree et la puissance, le type de
          carburant (essence, diesel, hybride, electrique, GPL, GNV, E85),
          l&apos;annee de premiere mise en circulation, et la norme Euro
          d&apos;emissions (Euro 4, 5, 6, 6d). Pour un acheteur, ces
          informations permettent de verifier si le vehicule est compatible
          avec les zones a faibles emissions de votre ville, si la
          motorisation annoncee correspond a la realite, et si l&apos;annee
          est coherente avec le kilometrage affiche au compteur.
        </p>

        <h2>Le test du cafe</h2>
        <p>
          Mon usage prefere : avant d&apos;aller voir un vehicule, je scanne
          la plaque depuis les photos de l&apos;annonce en ligne. Si le
          vendeur a flou la plaque, je demande une photo nette. Si la reponse
          de l&apos;IA ne correspond pas a l&apos;annonce (energie
          differente, annee decalee de deux ans, modele plus bas de gamme),
          je n&apos;ai meme pas a me deplacer. J&apos;ai epargne un
          deplacement inutile, une heure de negociation et probablement un
          faux compteur. Sur dix annonces scanees de cette facon, en
          moyenne deux posent probleme.
        </p>

        <h2>Le reglement europeen et votre vie privee</h2>
        <p>
          Une question revient : est-ce legal de scanner n&apos;importe
          quelle plaque ? Oui. Une plaque est publique par definition. En
          revanche, croiser cette plaque avec les donnees personnelles du
          proprietaire est interdit, et AutoDiag EU ne le fait pas. Vous
          recevez la fiche technique du vehicule, pas le nom ou l&apos;adresse
          du proprietaire. Cette distinction est essentielle et respecte le
          RGPD a la lettre. Les requetes ne sont pas stockees, elles ne
          constituent pas de profil.
        </p>

        <h2>Le cas du proprietaire</h2>
        <p>
          Si vous scannez la plaque de votre propre voiture, l&apos;application
          peut creer automatiquement un profil vehicule : marque, modele,
          annee, carburant pre-remplis. Vous gagnez cinq minutes de saisie
          manuelle. Ce profil sert ensuite pour personnaliser les diagnostics
          OBD2, orienter le{" "}
          <Link href="/fr/blog/preparer-ct-2026">controle technique</Link>{" "}
          et adapter les conseils d&apos;entretien. Le scan est une porte
          d&apos;entree, pas une simple curiosite.
        </p>

        <h2>Quand le scan echoue</h2>
        <p>
          Trois cas posent probleme. Les plaques personnalisees ou
          contenant trop de caracteres fantaisie renvoient un OCR propre
          mais aucune donnee technique. Les plaques anciennes (avant 2009 en
          France, format FNI) fonctionnent mais les donnees sont moins
          completes. Les plaques etrangeres hors UE (Norvege, Serbie,
          Turquie) sortent du perimetre. Dans ces cas, l&apos;application
          vous propose de scanner directement le VIN pour obtenir la meme
          information, en plus complet.
        </p>

        <h2>La combinaison gagnante plaque + VIN + OBD2</h2>
        <p>
          Pour une verification complete avant achat, le protocole AutoDiag
          EU combine trois couches. Premiere couche : le scan de plaque en
          dix secondes pour verifier la coherence de base. Deuxieme couche :
          le{" "}
          <Link href="/fr/blog/scanner-vin-decoder-historique-complet-voiture">
            scan VIN
          </Link>{" "}
          pour recuperer l&apos;historique (accidents, kilometrage,
          entretien). Troisieme couche : la connexion OBD2 si un dongle est
          disponible, pour lire les codes stockes et les codes en attente.
          Avec ces trois couches, vous voyez en quinze minutes ce
          qu&apos;une inspection traditionnelle met une heure a trouver.
          C&apos;est le pouvoir de l&apos;{" "}
          <Link href="/fr/blog/autodiag-vs-garage">
            autodiagnostic compare a la visite garage
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

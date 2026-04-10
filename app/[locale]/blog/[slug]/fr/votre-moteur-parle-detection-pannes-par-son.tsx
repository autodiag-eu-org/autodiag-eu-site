import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleSonMoteurParle() {
  const faq: FaqItem[] = [
    {
      q: "Comment une IA peut-elle entendre ce que mon oreille n&apos;entend pas ?",
      a: "Un microphone de smartphone capte des frequences bien plus larges que l&apos;oreille humaine. L&apos;oreille s&apos;arrete autour de 20 kHz et perd de la sensibilite des 15 kHz, alors qu&apos;un micro de telephone moderne reste lineaire jusqu&apos;a 22 kHz et capture aussi les basses frequences subtiles. Notre modele SVM entraine sur 3963 enregistrements analyse ces bandes que votre oreille ne traite pas.",
    },
    {
      q: "Quel est le taux de reussite du scan sonore AutoDiag EU ?",
      a: "Le modele SVM atteint 91.3% de precision en test, sur 11 classes de pannes differentes. Cette precision est calculee sur un jeu de test independant du jeu d&apos;entrainement. Dans la pratique, quand la confiance affichee depasse 80%, le diagnostic est fiable.",
    },
    {
      q: "Faut-il un dongle OBD2 pour utiliser le scan sonore ?",
      a: "Non, le scan sonore fonctionne sans dongle. Il utilise uniquement le microphone du telephone. Cependant, si vous avez un dongle ELM327 connecte, le systeme fusionne les donnees OBD2 avec l&apos;analyse audio pour un diagnostic encore plus precis. C&apos;est la couche 5 de notre pipeline.",
    },
    {
      q: "Quels types de pannes le scan sonore detecte-t-il ?",
      a: "Onze classes de pannes : claquement moteur, cliquetis, bruit de roulement, fuite d&apos;air, fuite d&apos;echappement, sifflement turbo, bruit de courroie, bruit d&apos;injecteur, ratees d&apos;allumage, moteur normal, et bruit de distribution. Chaque classe couvre plusieurs defauts mecaniques reels.",
    },
    {
      q: "Le scan sonore remplace-t-il un diagnostic OBD2 classique ?",
      a: "Non, il le complete. L&apos;OBD2 lit les codes stockes par le calculateur, le scan sonore detecte les problemes mecaniques que le calculateur ne voit pas : usure de roulement, tension de courroie, jeu de distribution, etat des coussinets. Ensemble, ils couvrent 95% des pannes courantes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Votre moteur vous parle : comment l&apos;IA traduit ses bruits en diagnostic"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Scan sonore"
      >
        <p>
          Votre moteur est bavard. A chaque explosion dans un cylindre, a chaque
          tour de vilebrequin, a chaque passage de courroie, il emet des sons.
          Certains sont normaux — le ronronnement regulier au ralenti, le
          sifflement doux du turbo qui monte en pression. D&apos;autres sont
          des signaux d&apos;alerte que votre oreille ne sait tout simplement
          pas decoder. Un cliquetis a 3 kHz qui arrive deux fois par tour, une
          resonance a 80 Hz au ralenti, un souffle a 12 kHz en acceleration :
          tout ca, votre cerveau l&apos;entend, mais il le classe comme
          &quot;bruit de moteur normal&quot;. L&apos;IA, elle, ne se laisse
          pas tromper.
        </p>

        <h2>Le moteur comme instrument de musique</h2>
        <p>
          Un moteur quatre cylindres a 800 tr/min produit environ 26 explosions
          par seconde, soit une frequence fondamentale autour de 26 Hz, avec
          des harmoniques qui s&apos;etalent jusqu&apos;a plusieurs kilohertz.
          Quand tout va bien, ces harmoniques suivent un motif previsible. Des
          qu&apos;un element se deteriore — un roulement qui commence a
          marquer, une courroie qui glisse, un injecteur qui fuit — le spectre
          change. De nouvelles frequences apparaissent, d&apos;anciennes
          disparaissent, le profil temporel se modifie. C&apos;est cette
          signature spectrale que notre IA a appris a reconnaitre.
        </p>

        <h2>3963 enregistrements, 11 classes, une seule verite</h2>
        <p>
          Pour entrainer le modele, nous avons collecte 3963 fichiers audio
          etiquetes : air leak (fuites d&apos;air), knock (claquement), bearing
          noise (roulements), belt noise (courroies), tick (cliquetis),
          injector noise (injecteurs), exhaust leak (fuites d&apos;echappement),
          normal engine (moteur sain), et plusieurs autres categories. Chaque
          enregistrement a ete ecoute par un humain pour confirmer
          l&apos;etiquette, puis transforme en 56 caracteristiques numeriques :
          40 coefficients MFCC (Mel-Frequency Cepstral Coefficients) qui
          decrivent le timbre, plus 5 caracteristiques spectrales
          supplementaires, plus quelques metriques temporelles. Le classifieur
          SVM a kernel RBF apprend a separer ces 11 classes dans cet espace a
          56 dimensions.
        </p>

        <h2>Pourquoi un SVM et pas un reseau de neurones ?</h2>
        <p>
          La question revient souvent : pourquoi utiliser une machine a
          vecteurs de support plutot qu&apos;un reseau de neurones profond comme
          tout le monde ? La reponse tient en trois points. D&apos;abord, le
          SVM fonctionne tres bien sur des jeux de donnees de taille moyenne
          (quelques milliers d&apos;exemples) la ou un CNN a besoin de dizaines
          de milliers. Ensuite, il est beaucoup plus rapide a entrainer et a
          inferer : une prediction prend 30 millisecondes sur un serveur
          standard. Enfin, ses decisions sont interpretables : on peut remonter
          aux frequences qui ont declenche la classification. Un avantage
          concret quand on doit expliquer au conducteur pourquoi l&apos;IA
          pense que son turbo est fatigue.
        </p>

        <h2>Le pipeline en 7 couches</h2>
        <p>
          Un enregistrement audio ne passe pas directement dans le classifieur.
          Il traverse d&apos;abord six etapes de pre-traitement et de fusion.
          Couche 1 : verification qualite (volume suffisant, pas de saturation,
          duree correcte). Couche 2 : debruitage par filtre de Wiener pour
          retirer le bruit de fond (vent, circulation, chauffage habitacle).
          Couche 3 : extraction des 56 caracteristiques. Couche 4 :
          classification par le SVM. Couche 5 : fusion avec les donnees OBD2 si
          un dongle est connecte — un code P0300 de ratees d&apos;allumage
          renforce une prediction &quot;misfire&quot;. Couche 6 :
          interpretation par Claude API qui traduit le resultat brut en
          conseil clair. Couche 7 : affichage avec code couleur selon le seuil
          de confiance.
        </p>

        <h2>Ce que le moteur dit vraiment</h2>
        <p>
          Quand vous lancez un scan, le systeme ne fait pas juste un snapshot.
          Il enregistre plusieurs secondes de moteur, a differents regimes si
          possible, et extrait le motif dominant. Un claquement qui arrive
          deux fois par tour a 2000 tr/min mais disparait a 3500 tr/min, ce
          n&apos;est pas un defaut de roulement — c&apos;est probablement un
          jeu de distribution. Un sifflement continu qui monte avec le regime,
          c&apos;est un turbo. Un souffle rythme sur le temps d&apos;echappement,
          c&apos;est une fuite de collecteur. Le SVM apprend ces patterns
          temporels grace aux MFCC qui integrent l&apos;evolution du spectre
          au fil du temps.
        </p>

        <h2>Ecouter pour prevenir</h2>
        <p>
          L&apos;interet principal du scan sonore n&apos;est pas de constater
          une panne — un voyant ou un bruit evident suffisent pour ca. C&apos;est
          de detecter l&apos;usure AVANT qu&apos;elle ne devienne une casse.
          Un roulement qui commence a marquer se voit des 5% d&apos;usure
          anormale dans le spectre, bien avant que vous n&apos;entendiez quoi
          que ce soit. En scannant votre moteur une fois par mois, vous
          repetez la mesure et vous voyez les evolutions. Si la confiance
          &quot;bearing noise&quot; passe de 15% a 60% en trois mois, c&apos;est
          clair : quelque chose s&apos;aggrave. Vous intervenez a 150 euros
          de reparation au lieu de 2000 euros de casse moteur.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Si vous voulez comprendre en detail quelles pannes le systeme
          detecte, lisez notre article dedie :{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            11 pannes detectables par analyse sonore
          </Link>
          . Pour la partie scientifique — frequences, filtres, mathematiques —
          voyez{" "}
          <Link href="/fr/blog/sons-inaudibles-ia-detecte-ce-que-oreille-ne-peut-pas">
            les sons que l&apos;oreille humaine rate
          </Link>
          . Et si vous voyez un code{" "}
          <Link href="/fr/codes/p0300">P0300</Link>{" "}
          s&apos;afficher, le scan sonore vous dira lequel des cylindres
          fatigue vraiment — une information que l&apos;OBD2 seul ne donne pas
          toujours.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

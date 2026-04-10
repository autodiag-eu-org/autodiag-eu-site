import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleCommentFonctionneSVM() {
  const faq: FaqItem[] = [
    {
      q: "Qu&apos;est-ce qu&apos;un SVM en termes simples ?",
      a: "Un SVM (Support Vector Machine, machine a vecteurs de support) est un algorithme de classification qui cherche a tracer des frontieres optimales entre plusieurs categories dans un espace de grande dimension. Imaginez 3963 points disperses dans un espace a 56 dimensions : le SVM trouve les surfaces qui separent au mieux les 11 groupes de pannes. Un nouveau son est classe en regardant de quel cote des surfaces il tombe.",
    },
    {
      q: "Pourquoi 56 caracteristiques precisement ?",
      a: "Parce que c&apos;est le nombre qui donne le meilleur compromis precision/vitesse pour notre pipeline. 40 coefficients MFCC couvrent le timbre perceptuel, 5 caracteristiques spectrales ajoutent des informations plus generales (centroide, bande passante, rolloff, flux, contraste), et quelques metriques temporelles completent le tout. Au-dela, la precision stagne mais le temps de calcul augmente.",
    },
    {
      q: "Pourquoi un kernel RBF et pas un lineaire ?",
      a: "Parce que les classes de pannes ne sont pas separables par des droites dans l&apos;espace a 56 dimensions. Le kernel RBF (Radial Basis Function) projette implicitement les donnees dans un espace de dimension infinie ou les frontieres deviennent lineaires. C&apos;est mathematiquement elegant et concretement efficace : la precision passe de 78% avec un kernel lineaire a 91.3% avec RBF.",
    },
    {
      q: "Quelle est la taille du modele final ?",
      a: "Environ 12 Mo pour le fichier .pkl serialise. C&apos;est petit par rapport a un reseau de neurones profond (souvent plusieurs centaines de Mo). Cette legerete est un avantage concret : le modele peut etre charge en memoire en moins d&apos;une seconde et une prediction prend environ 30 ms sur un serveur standard.",
    },
    {
      q: "Comment est gere l&apos;equilibre entre les 11 classes ?",
      a: "Le jeu de donnees n&apos;est pas parfaitement equilibre : certaines classes ont plus d&apos;exemples que d&apos;autres (air leak a 1005, normal engine a 269). Nous utilisons un ponderation par classe pendant l&apos;entrainement pour compenser ce desequilibre, ce qui evite que le modele favorise les classes majoritaires au detriment des minoritaires.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Comment fonctionne notre SVM : la technologie derriere le scan sonore"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={11}
        category="Technologie"
      >
        <p>
          Si vous etes curieux de savoir ce qui se passe vraiment quand
          vous appuyez sur le bouton &quot;lancer le scan&quot; de
          l&apos;app AutoDiag EU, ce qui suit est pour vous. Pas de
          generalites marketing : un vrai tour du pipeline, couche par
          couche, avec les choix techniques qu&apos;on a faits et les
          raisons derriere. Le systeme tourne sur un backend Python avec
          scikit-learn, et traite chaque enregistrement en sept etapes
          distinctes, sept couches qui transforment un fichier audio brut
          en un diagnostic clair et un score de confiance.
        </p>

        <h2>Couche 1 : verification de qualite</h2>
        <p>
          Avant toute analyse, on verifie que l&apos;enregistrement est
          exploitable. Volume trop faible ? On refuse. Saturation
          detectee ? On refuse. Duree insuffisante (moins de 3 secondes) ?
          On refuse. Bruit de fond ecrasant le signal moteur ? On previent
          l&apos;utilisateur. Cette porte qualite, implementee avec
          librosa, evite de donner des resultats fantaisistes a partir de
          mauvais enregistrements. C&apos;est un investissement qui
          augmente la fiabilite effective du systeme en conditions
          reelles.
        </p>

        <h2>Couche 2 : debruitage</h2>
        <p>
          Meme avec un bon enregistrement, il y a toujours du bruit
          parasite : vent, circulation, chauffage habitacle, voix
          environnantes. La couche 2 applique un filtre de Wiener via la
          bibliotheque noisereduce pour estimer le bruit de fond et le
          retirer sans abimer le signal utile. Le filtre fonctionne sur
          une estimation spectrale : il identifie les bandes de
          frequences dominees par le bruit stationnaire et y reduit
          l&apos;amplitude, tout en preservant les transitoires qui sont
          l&apos;information interessante.
        </p>

        <h2>Couche 3 : extraction des 56 caracteristiques</h2>
        <p>
          C&apos;est ici que l&apos;audio devient mathematique. Le signal
          est decoupe en fenetres de 25 ms qui se chevauchent, chaque
          fenetre subit une transformation de Fourier, puis une
          projection sur l&apos;echelle Mel qui correspond a la
          perception humaine du timbre, puis une transformation en
          cosinus discret qui produit les 40 coefficients MFCC. On ajoute
          ensuite 5 caracteristiques spectrales (centroide spectral,
          bande passante, rolloff, flux spectral, contraste par bande), et
          quelques metriques temporelles comme l&apos;enveloppe
          d&apos;energie et le taux de passage par zero. Total : 56
          valeurs numeriques par enregistrement.
        </p>

        <h2>Couche 4 : classification par SVM</h2>
        <p>
          Le vecteur de 56 valeurs est passe au classifieur SVM. Le
          modele a ete entraine sur 3963 enregistrements etiquetes, avec
          une repartition approximative de 80% pour l&apos;entrainement
          et 20% pour le test. Le kernel RBF projette les donnees dans
          un espace de dimension infinie ou les frontieres entre classes
          deviennent lineaires. Les hyperparametres C (regularisation) et
          gamma (largeur du kernel) ont ete optimises par grid search
          avec validation croisee a 5 folds. Resultat final : 91.3% de
          precision sur le set de test independant.
        </p>

        <h2>Couche 5 : fusion OBD2</h2>
        <p>
          Si un dongle OBD2 est connecte au moment du scan, le systeme
          recupere les codes defaut actifs et les donnees live (regime,
          charge, temperature, tensions de sondes). Ces informations sont
          croisees avec la prediction audio par un systeme de regles
          expertes : un code{" "}
          <Link href="/fr/codes/p0300">P0300</Link>{" "}
          renforce une prediction misfire, un{" "}
          <Link href="/fr/codes/p0420">P0420</Link>{" "}
          renforce exhaust leak, un{" "}
          <Link href="/fr/codes/p0325">P0325</Link>{" "}
          renforce knock, etc. La fusion peut augmenter la confiance
          finale de plusieurs points quand les deux sources concordent,
          ou la baisser quand elles divergent.
        </p>

        <h2>Couche 6 : interpretation par Claude API</h2>
        <p>
          La sortie brute du SVM est utile pour un mecanicien mais
          difficile a lire pour un conducteur. La couche 6 utilise Claude
          API pour transformer la prediction en un message clair en
          francais : explication de la panne, causes probables, gravite,
          cout approximatif, gestes immediats a faire. Important : Claude
          ne recoit jamais l&apos;audio brut. Il recoit uniquement la
          classe predite, la confiance, et le contexte OBD2. Le
          pourcentage de confiance vient toujours du SVM, jamais de
          Claude. C&apos;est une regle absolue du pipeline.
        </p>

        <h2>Couche 7 : affichage et seuils</h2>
        <p>
          La derniere couche, cote frontend, applique les seuils de
          confiance pour determiner la couleur et le ton du message. Au
          moins 80% de confiance : vert, diagnostic fiable, action
          recommandee. Entre 60 et 79% : orange, a surveiller, second
          scan conseille. Entre 30 et 59% : jaune clair, resultat
          indicatif. En dessous de 30% : gris, non concluant, vous
          pouvez relancer le scan dans de meilleures conditions. Ces
          seuils ont ete calibres sur des donnees reelles pour equilibrer
          sensibilite et specificite.
        </p>

        <h2>Pourquoi ce choix d&apos;architecture</h2>
        <p>
          On aurait pu partir sur un CNN deep learning, a la mode depuis
          dix ans. On ne l&apos;a pas fait pour trois raisons : la taille
          de notre dataset (3963 est confortable pour un SVM, juste
          pour un CNN), la contrainte de latence (30 ms pour le SVM,
          plusieurs centaines de ms pour un CNN classique), et
          l&apos;interpretabilite (on peut remonter aux frequences
          influentes avec un SVM, c&apos;est plus difficile avec un
          reseau profond). Le SVM est un choix pragmatique, pas une
          limitation. Quand notre dataset atteindra 15 000 echantillons,
          nous passerons probablement a un modele hybride CNN + SVM,
          mais l&apos;architecture en 7 couches restera. Pour aller plus
          loin, lisez{" "}
          <Link href="/fr/blog/sons-inaudibles-ia-detecte-ce-que-oreille-ne-peut-pas">
            les sons inaudibles que l&apos;IA capte
          </Link>{" "}
          et la{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            liste des 11 classes detectables
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function Article11PannesSonores() {
  const faq: FaqItem[] = [
    {
      q: "Pourquoi 11 classes et pas plus ?",
      a: "Parce que c&apos;est le nombre de classes pour lesquelles nous avons suffisamment de donnees etiquetees (minimum 250 enregistrements par classe) pour entrainer un modele SVM fiable. Sous ce seuil, le risque de faux positifs devient trop eleve. Nous ajoutons une classe chaque fois que le dataset atteint le minimum.",
    },
    {
      q: "Le scan peut-il confondre deux pannes ?",
      a: "Oui, c&apos;est la limite naturelle de tout classifieur. Un bruit de roulement a basse frequence peut etre confondu avec un jeu de bielle dans 8% des cas. C&apos;est pour ca que le systeme affiche toujours une confiance : sous 60%, le resultat est marque &quot;a surveiller&quot; et l&apos;on recommande un second scan.",
    },
    {
      q: "Quelle est la panne la plus facile a detecter ?",
      a: "Les fuites d&apos;air d&apos;admission (air leak) ont la meilleure precision, autour de 96%. Le sifflement aigu et continu est tres distinct des autres sons moteur. A l&apos;oppose, les ratees d&apos;allumage (misfire) sont plus difficiles a 87% car elles se confondent parfois avec un ralenti irregulier normal sur moteur diesel.",
    },
    {
      q: "Combien coute ignorer un bruit suspect ?",
      a: "Tout depend de la panne. Une courroie de distribution qui casse sur un moteur a interferences coute entre 2000 et 8000 euros de reparation. Un roulement de vilebrequin qui lache detruit le moteur complet, souvent au-dela de 4000 euros. Un sifflement turbo ignore peut couter 1500 euros de remplacement.",
    },
    {
      q: "Faut-il un moteur froid ou chaud pour le scan ?",
      a: "Les deux sont utiles mais repondent a des questions differentes. Moteur froid, vous detectez les jeux mecaniques et les bruits de demarrage. Moteur chaud a temperature normale, vous detectez les fuites d&apos;huile, les usures de roulement chauds, et l&apos;etat du turbo. Ideal : faire les deux et comparer.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="11 pannes moteur detectables par analyse sonore IA"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          Voici la liste complete des 11 classes de pannes que le scan sonore
          AutoDiag EU est aujourd&apos;hui capable de reconnaitre. Chacune a
          ete entrainee sur plusieurs centaines d&apos;enregistrements reels,
          etiquetes a la main, couvrant des moteurs essence, diesel, GPL,
          hybrides et turbocompresses. Pour chaque panne : la signature
          sonore, le risque si vous l&apos;ignorez, et un ordre de grandeur du
          cout de reparation en Europe.
        </p>

        <h2>1. Claquement moteur (knock)</h2>
        <p>
          Un son metallique, souvent decrit comme &quot;billes dans une
          boite&quot;, qui apparait sous charge ou a la reaccleration. Cause
          frequente : auto-allumage du a un carburant de mauvaise qualite ou
          une sonde cliquetis defaillante, parfois usure de coussinet. Cout :
          de 40 euros (changement bougies) a 3500 euros (refection bas moteur).
          Le scan distingue un claquement leger (avertissement) d&apos;un
          claquement severe (arret immediat).
        </p>

        <h2>2. Bruit de roulement (bearing noise)</h2>
        <p>
          Un grondement sourd, a basse frequence (50-200 Hz), qui varie avec le
          regime moteur. Indique un roulement de bielle, de vilebrequin ou
          d&apos;arbre a cames fatigue. Cout : si detecte tot, 300 a 800 euros
          de coussinets. Si ignore, casse moteur complete, 3500 a 6000 euros.
          C&apos;est la panne ou la detection precoce rapporte le plus gros
          retour sur investissement.
        </p>

        <h2>3. Fuite d&apos;air d&apos;admission (air leak)</h2>
        <p>
          Un sifflement aigu, continu, souvent plus fort au ralenti qu&apos;a
          haut regime. Une durite d&apos;admission fendue, un joint de
          collecteur fatigue, une prise d&apos;air sur le boitier papillon.
          Souvent correle a un code{" "}
          <Link href="/fr/codes/p0171">P0171 — melange pauvre</Link>. Cout : 15
          a 200 euros si vous le detectez tot, contre 400 a 800 euros si la
          sonde lambda finit par morfler.
        </p>

        <h2>4. Fuite d&apos;echappement (exhaust leak)</h2>
        <p>
          Un souffle rythme sur le temps d&apos;explosion, souvent plus fort a
          froid. Joint de collecteur, fissure de flexible, bride relachee
          apres le catalyseur. Impact direct sur la depollution et souvent sur
          le code{" "}
          <Link href="/fr/codes/p0420">P0420</Link>. Cout : 80 a 450 euros
          selon l&apos;endroit.
        </p>

        <h2>5. Sifflement turbo (turbo whistle)</h2>
        <p>
          Un sifflement aigu qui monte avec la charge, different du simple
          bruit de compresseur normal. Peut indiquer un jeu d&apos;axe, une
          fuite sur la canalisation d&apos;air, ou un wastegate qui vibre.
          Cout : 200 a 1800 euros selon la panne. A ne jamais ignorer : un
          turbo qui lache peut envoyer de l&apos;huile dans l&apos;admission
          et detruire le moteur.
        </p>

        <h2>6. Bruit de courroie (belt noise)</h2>
        <p>
          Un grincement ou un crissement, souvent a froid ou par temps humide.
          Courroie d&apos;accessoires glacee, tendeur fatigue, poulie grippee.
          Cout : 30 a 250 euros. Important : une courroie d&apos;accessoires
          qui casse n&apos;est pas dramatique, mais la courroie de distribution
          meritre sa propre categorie (voir classe 11).
        </p>

        <h2>7. Cliquetis (tick)</h2>
        <p>
          Un tapping rapide et regulier, aligne sur le regime moteur. Souvent
          les poussoirs hydrauliques (niveau d&apos;huile bas, huile trop
          vieille) ou un injecteur encrasse. Cout : une vidange avec huile de
          bonne qualite suffit dans 60% des cas. Sinon, nettoyage injecteurs
          ou changement de poussoirs.
        </p>

        <h2>8. Bruit d&apos;injecteur (injector noise)</h2>
        <p>
          Un claquement sec et rapide, concentre en haut du moteur, present
          sur les diesels common rail et les injections directes essence.
          Injecteur grippe, ressort fatigue, retour d&apos;injecteur fuyant.
          Cout : 80 euros (nettoyage) a 2000 euros (jeu complet sur certains
          moteurs premium).
        </p>

        <h2>9. Ratees d&apos;allumage (misfire)</h2>
        <p>
          Un battement irregulier, le moteur qui &quot;trebuche&quot;.
          Signature tres proche du code{" "}
          <Link href="/fr/codes/p0300">P0300</Link>. Bougies, bobines, injecteur
          mort, fuite de compression. Cout : 15 euros (une bougie) a 900 euros
          (joint de culasse).
        </p>

        <h2>10. Moteur sain (normal engine)</h2>
        <p>
          Ce n&apos;est pas une panne, mais c&apos;est une classe essentielle :
          elle evite les faux positifs. Quand le scan sort &quot;normal
          engine&quot; avec plus de 80% de confiance, vous savez que rien de
          visible n&apos;est en train de deriver. C&apos;est un bulletin de
          sante, pas un diagnostic.
        </p>

        <h2>11. Bruit de distribution / courroie crantee</h2>
        <p>
          Un bruit different des courroies d&apos;accessoires : plus sourd,
          souvent masque par le reste du moteur, visible surtout par
          l&apos;IA qui isole la signature spectrale. Tendeur de distribution
          fatigue, courroie qui commence a saut de dent, galet de renvoi
          grippe. C&apos;est la panne la plus chere a ignorer sur un moteur a
          interferences : 2000 a 8000 euros si elle casse. A lire
          imperativement :{" "}
          <Link href="/fr/blog/courroie-distribution-usee-detecter-par-son">
            detecter une courroie de distribution usee par le son
          </Link>
          .
        </p>

        <h2>Ce qu&apos;il faut retenir</h2>
        <p>
          Ces 11 classes couvrent environ 85% des pannes mecaniques
          rencontrees en clientele sur des moteurs de moins de 15 ans. Le taux
          de precision global du modele est de 91.3%. Quand vous voyez une
          prediction au-dessus de 80%, agissez vite. Entre 60 et 80%, faites
          un second scan dans la semaine pour confirmer. Sous 60%, le systeme
          reste prudent et affiche &quot;indicatif&quot;. Pour comprendre
          comment fonctionne la detection en profondeur, lisez{" "}
          <Link href="/fr/blog/comment-fonctionne-svm-technologie-scan-sonore">
            la technologie derriere le scan sonore
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

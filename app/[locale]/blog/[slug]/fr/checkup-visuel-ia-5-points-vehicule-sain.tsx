import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleCheckup5Points() {
  const faq: FaqItem[] = [
    {
      q: "Combien de temps prend le checkup visuel en cinq points ?",
      a: "Cinq minutes si vous suivez le protocole, dix si vous debutez. L&apos;application vous guide point par point, elle reconnait chaque prise de vue et vous confirme quand le cliche est exploitable. C&apos;est moins de temps qu&apos;il n&apos;en faut pour faire un plein.",
    },
    {
      q: "A quelle frequence dois-je faire ce checkup ?",
      a: "Une fois par mois pour un usage quotidien. Tous les quinze jours si vous roulez beaucoup ou si votre vehicule a plus de douze ans. Avant un grand trajet, c&apos;est la routine la plus rentable que vous puissiez faire — cinq minutes pour detecter un probleme qui vous aurait coute votre voyage.",
    },
    {
      q: "Ai-je besoin de materiel particulier ?",
      a: "Juste un telephone et une lampe pour les zones sombres (la lampe du telephone suffit). Un carton blanc A4 est utile pour le point fuites, mais pas obligatoire. Aucun outil mecanique, aucun demontage.",
    },
    {
      q: "Que fait l&apos;application avec mes photos ?",
      a: "Elles sont analysees sur le serveur, le resultat est renvoye sous forme de diagnostic, puis les images sont effacees sous 48 heures sauf si vous autorisez leur conservation pour ameliorer le modele. Vous gardez uniquement le rapport, pas les photos.",
    },
    {
      q: "Le checkup detecte-t-il tout ?",
      a: "Il detecte ce qui est visible de l&apos;exterieur. Pour les pannes electroniques ou les problemes internes au moteur, il faut coupler avec un scan OBD2 ou un scan sonore. Les trois technologies se completent et couvrent ensemble plus de 90% des pannes courantes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Checkup visuel IA en cinq points : garder votre vehicule en bonne sante"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Prevention"
      >
        <p>
          La meilleure panne est celle qu&apos;on attrape avant qu&apos;elle
          ne devienne une panne. Ce n&apos;est pas un slogan, c&apos;est une
          verite economique : une reparation anticipee coute en moyenne
          quatre fois moins qu&apos;une reparation d&apos;urgence. Le
          probleme, c&apos;est que la plupart des gens ne savent pas quoi
          regarder, ni quand. Le checkup visuel en cinq points est la
          routine que nous avons concue pour repondre exactement a ca :
          cinq minutes, cinq zones, un telephone, et la Vision IA qui fait
          le travail d&apos;expert.
        </p>

        <h2>Point 1 : le sol sous la voiture</h2>
        <p>
          Garez la voiture sur un sol clair et sec, attendez au moins deux
          heures. Accroupissez-vous a un metre de distance et prenez une
          photo de la zone situee sous le bloc moteur. Puis une deuxieme
          sous la boite de vitesses. L&apos;IA cherche trois choses : une
          tache de liquide visible, une difference avec les cliches
          precedents, une couleur inhabituelle. Si rien n&apos;apparait,
          vous passez au point 2 en dix secondes. Si quelque chose apparait,
          vous avez le detail complet : liquide probable, gravite, action
          recommandee. Cette etape est traitee en profondeur dans
          l&apos;article{" "}
          <Link href="/fr/blog/vision-ia-detecter-fuites-sous-voiture-telephone">
            detection de fuites avec Vision IA
          </Link>
          .
        </p>

        <h2>Point 2 : les pneus</h2>
        <p>
          Une photo par pneu, perpendiculaire a la bande de roulement. Le
          modele mesure la profondeur residuelle dans les sillons, detecte
          les motifs d&apos;usure anormale (centre, epaules, bords,
          cupping), compare avec l&apos;historique et vous alerte si un
          pneu devie des autres. Cette etape est celle qui paie le plus
          vite : un pneu mal gonfle decele en avance vous evite deux cent
          euros de changement premature. Pour la methode detaillee, voyez
          l&apos;article dedie a l&apos;{" "}
          <Link href="/fr/blog/usure-prematuree-pneus-ia-voit-ce-que-vous-ne-remarquez-pas">
            usure prematuree des pneus
          </Link>
          .
        </p>

        <h2>Point 3 : les plaquettes a travers les rayons</h2>
        <p>
          Tournez le volant a fond pour exposer la plaquette avant droite,
          passez le telephone entre les rayons, allumez la lampe, prenez la
          photo. Puis pareil a gauche. La Vision IA mesure l&apos;epaisseur
          residuelle de la garniture, detecte les traces de rainurage sur
          le disque (aspect strie), les debuts de vitrification et les
          marques de chauffe (teinte bleutee qui trahit une surchauffe).
          Une plaquette a moins de 3 mm declenche une alerte rouge : vous
          avez environ 2000 km d&apos;autonomie restante. Une plaquette a 6
          mm est verte. Cette mesure precise epargne les surprises pendant
          un long trajet. Pour les details, consultez{" "}
          <Link href="/fr/blog/usure-plaquettes-disques-vision-ia-detecte">
            usure des plaquettes et disques detectee par Vision IA
          </Link>
          .
        </p>

        <h2>Point 4 : sous le capot</h2>
        <p>
          Ouvrez le capot. Prenez quatre photos : le bouchon d&apos;huile
          avec la jauge sortie pour verifier le niveau, le vase
          d&apos;expansion du liquide de refroidissement, le reservoir de
          liquide de frein, et une vue generale des courroies visibles.
          L&apos;IA mesure les niveaux via la position du liquide dans les
          reservoirs translucides, detecte les craquelures naissantes sur
          les courroies accessoires, repere une traces de suintement sur
          une durite. Si votre liquide de refroidissement est passe de vert
          franc a brun rouille, c&apos;est la signature d&apos;une
          contamination a surveiller. Si votre huile est opaque sur la
          jauge, vidange en retard. Quatre photos, quatre verifications.
        </p>

        <h2>Point 5 : l&apos;eclairage exterieur</h2>
        <p>
          Demandez a quelqu&apos;un d&apos;allumer successivement les feux
          de croisement, les feux de route, les clignotants et les feux
          stop. Pour les feux stop, un pied sur la pedale suffit si vous
          etes seul. Prenez une photo de face, une photo de trois quarts,
          une photo de l&apos;arriere. L&apos;IA compte les sources lumineuses
          actives, detecte une ampoule grillee, signale une asymetrie de
          puissance (un phare plus jaune que l&apos;autre = ampoule en fin
          de vie). Une ampoule grillee est un motif de refus au CT, et
          c&apos;est la chose la plus facile a reparer avant le jour J.
        </p>

        <h2>Le rapport synthetique</h2>
        <p>
          A la fin des cinq points, l&apos;application genere un rapport
          unique avec un code couleur : vert si tout est bon, orange si un
          point demande surveillance, rouge si un point exige une action.
          Ce rapport s&apos;archive dans l&apos;historique de votre
          vehicule. Mois apres mois, vous voyez les courbes : profondeur
          pneu qui descend, epaisseur plaquette qui diminue, niveaux qui
          oscillent. Le jour ou une courbe bascule dans l&apos;anormal,
          vous etes prevenu avant meme de percevoir quoi que ce soit.
        </p>

        <h2>La combinaison qui couvre 90% des cas</h2>
        <p>
          Le checkup visuel n&apos;est pas un outil isole. Il fait partie
          d&apos;une triade : Vision IA pour l&apos;exterieur, scan sonore
          pour les bruits (voir{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            les 11 pannes detectables a l&apos;oreille
          </Link>
          ), scan OBD2 pour l&apos;electronique (voir{" "}
          <Link href="/fr/codes/p0171">
            code P0171 et les codes de melange pauvre
          </Link>
          ). Les trois ensemble couvrent plus de 90% des pannes courantes
          des vehicules europeens, dans leur phase precoce, la ou la
          reparation reste abordable. Cinq minutes par mois sur le visuel,
          trois minutes sur le sonore, deux minutes sur l&apos;electronique.
          Dix minutes mensuelles qui epargnent en moyenne 800 euros par an
          selon nos retours terrain.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

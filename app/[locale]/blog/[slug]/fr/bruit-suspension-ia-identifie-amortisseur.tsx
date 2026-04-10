import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleBruitSuspension() {
  const faq: FaqItem[] = [
    {
      q: "Comment savoir si c&apos;est l&apos;amortisseur ou le silentbloc ?",
      a: "L&apos;amortisseur donne un bruit mat, grave, avec rebond residuel apres la bosse. Le silentbloc donne un claquement sec et court, sans rebond. Le Scan Sonore separe ces deux signatures grace a l&apos;analyse de l&apos;enveloppe temporelle sur 138 caracteristiques.",
    },
    {
      q: "Le test du rebond manuel est-il fiable ?",
      a: "Partiellement. Il detecte les amortisseurs totalement morts mais rate les 50-70% d&apos;usure, qui sont pourtant la cause principale de perte d&apos;adherence sur route mouillee. L&apos;analyse sonore en roulant est nettement plus sensible.",
    },
    {
      q: "Des amortisseurs uses peuvent-ils provoquer une usure de pneu ?",
      a: "Oui, et c&apos;est meme la premiere etape de l&apos;effet cascade. Un amortisseur fatigue laisse la roue rebondir, le pneu use en dents de scie (cupping), et l&apos;adherence s&apos;effondre. Le meme pneu use finit par desaligner la geometrie, qui ruine la cremaillere.",
    },
    {
      q: "Quand faut-il remplacer les amortisseurs par paire ?",
      a: "Toujours par essieu. Remplacer un seul cote cree un desequilibre d&apos;amortissement qui penche le vehicule au freinage. Le budget reel d&apos;un amortisseur passe donc de 180 euros unitaire a 350-450 euros l&apos;essieu.",
    },
    {
      q: "Combien de kilometres dure un amortisseur moderne ?",
      a: "Entre 80 000 et 150 000 km selon le type de route et le poids du vehicule. Un break familial charge use ses amortisseurs arriere bien plus vite qu&apos;une berline en solo. Un scan annuel suffit a detecter le debut de fatigue.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Bruit de suspension : comment l&apos;IA identifie l&apos;amortisseur fatigue"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          L&apos;amortisseur est l&apos;un des elements les plus trompeurs
          de votre voiture. Il s&apos;use tellement progressivement que
          vous n&apos;en sentez rien. Un jour vous roulez sur une voiture
          qui tient la route comme un rail, un an plus tard sur une piece
          qui rebondit comme un matelas — et vous jureriez que rien
          n&apos;a change. Le Scan Sonore, lui, voit la bascule des le
          premier scan compare au precedent.
        </p>

        <h2>Pourquoi l&apos;oreille ne suffit pas</h2>
        <p>
          Un amortisseur sain ecrase une bosse en un seul mouvement. Un
          amortisseur a 60% d&apos;usure laisse passer un rebond residuel
          d&apos;une amplitude de quelques millimetres — imperceptible a
          l&apos;oreille, mais qui se traduit par une perte d&apos;appui
          mesurable sur route mouillee. L&apos;analyse spectrale de
          l&apos;audio habitacle capture ce rebond residuel comme une
          signature caracteristique autour de 8-15 Hz combinee a un
          transitoire a 200-400 Hz (la butee qui rebondit dans son
          logement).
        </p>

        <h2>Les trois familles de bruit de suspension</h2>
        <p>
          Premiere famille : le claquement sec sur bosse. Silentbloc
          fatigue, biellette de barre stabilisatrice avec jeu, ou coupelle
          d&apos;amortisseur flambee. Signature : impulsion courte, large
          bande, pas de queue.
        </p>
        <p>
          Deuxieme famille : le &quot;floc&quot; de rebond. Amortisseur
          qui perd son huile, ou soupape interne usee. Signature :
          impulsion suivie d&apos;une resonance basse frequence qui dure
          150 a 300 millisecondes. C&apos;est exactement ce que le SVM
          detecte le mieux.
        </p>
        <p>
          Troisieme famille : le grincement en virage. Coupelle
          superieure d&apos;amortisseur dont le roulement est grippe, ou
          ressort qui frotte sa spire superieure contre sa coupelle.
          Signature : bruit continu module par l&apos;angle de braquage.
        </p>

        <h2>Le protocole de scan en roulant</h2>
        <p>
          Pour un diagnostic fiable, trouvez une route avec quelques
          raccords de chaussee ou dos-d&apos;anes, roulez entre 30 et 60
          km/h, et enregistrez trente secondes. L&apos;IA analyse chaque
          fenetre audio independamment, ce qui lui permet de localiser
          les bruits par rapport aux impacts. Un claquement qui arrive
          systematiquement apres un cahot est suspect.
        </p>

        <h2>L&apos;effet cascade pneu-geometrie-cremaillere</h2>
        <p>
          Voici la sequence que je vois le plus souvent en atelier. Un
          amortisseur fatigue depuis dix-huit mois. Le conducteur ne s&apos;en
          rend pas compte. Les pneus commencent a marquer un cupping
          irregulier. Au bout d&apos;un an de plus, l&apos;un des pneus
          avant est a changer alors qu&apos;il a 20 000 km de moins que
          prevu — premier surcout : 180 euros. La geometrie est alors
          fausse a cause de l&apos;angle de carrossage dynamique modifie
          par le rebond. La cremaillere prend du jeu en six mois : 800
          euros supplementaires. Total final : 1 380 euros au lieu des
          350 euros d&apos;amortisseurs d&apos;origine. Le Scan Sonore
          coupe cette cascade a la racine en detectant le debut
          d&apos;usure.
        </p>

        <h2>SVM 7 classes et 75.05% : ce que ca veut dire concretement</h2>
        <p>
          Notre modele habitacle separe sept categories : frein,
          suspension, roulement, direction, climatisation, pneu, et
          silence de reference. Sur un jeu de test independant, il
          atteint 75.05% de precision. C&apos;est moins que les 91.3% du
          scan moteur, et ce n&apos;est pas un hasard : les bruits
          d&apos;habitacle sont plus varies, plus brefs, plus melanges
          avec la circulation exterieure. Mais 75% reste largement au-
          dessus de l&apos;oreille humaine en conditions reelles, surtout
          quand le conducteur s&apos;est habitue aux sons de son propre
          vehicule.
        </p>

        <h2>Quand le scan sauve vraiment</h2>
        <p>
          Le cas le plus frequent : un conducteur qui fait scanner sa
          voiture deux semaines avant le CT et qui decouvre un score
          &quot;suspension&quot; a 62%. Il fait controler, l&apos;amortisseur
          avant gauche fuit. Reparation 350 euros, CT passe sans souci.
          S&apos;il etait arrive le jour du CT, refus immediat (defaut
          critique en France depuis 2019), plus une contre-visite a
          payer, plus le risque que le pneu soit aussi a changer.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Continuez la lecture avec l&apos;article sur l&apos;{" "}
          <Link href="/fr/blog/usure-invisible-composant-fatigue-endommage-autre">
            usure invisible et l&apos;effet cascade
          </Link>
          {" "}et le{" "}
          <Link href="/fr/blog/bruit-roulement-roue-detecter-usure-avant-ct">
            roulement de roue avant le controle technique
          </Link>
          . Pour les codes OBD2 qui peuvent apparaitre en parallele d&apos;une
          suspension morte, voyez notre page{" "}
          <Link href="/fr/codes/p0325">P0325</Link>{" "}
          : un capteur de cliquetis peut etre perturbe par des vibrations
          de suspension trop importantes.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

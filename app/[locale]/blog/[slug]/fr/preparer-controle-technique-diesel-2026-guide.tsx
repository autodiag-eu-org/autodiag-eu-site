import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePreparerCTDiesel2026() {
  const faq: FaqItem[] = [
    {
      q: "Qu&apos;est-ce qui change au CT diesel en 2026 ?",
      a: "Les seuils d&apos;opacimetrie restent exigeants : 1.5 m-1 pour les diesel post-2008 et 2.5 m-1 pour les plus anciens. Le controle visuel du FAP est obligatoire : FAP absent ou decoupe = contre-visite automatique. L&apos;AdBlue est verifie sur les Euro 6, toute defaillance SCR est penalisee. En 2026, les controles renforces sur les systemes de depollution prennent encore plus d&apos;importance.",
    },
    {
      q: "Comment eviter une contre-visite pour opacite ?",
      a: "Effectuez une serie de regenerations forcees du FAP deux semaines avant : roulez 30 minutes sur voie rapide a 3000 tr/min minimum, deux fois. Utilisez un additif catalyseur si vous faites principalement de la ville. Verifiez que votre vanne EGR n&apos;est pas bloquee. Controlez les fuites d&apos;admission qui faussent le melange.",
    },
    {
      q: "Combien coute une reparation de FAP bouche ?",
      a: "Un nettoyage professionnel en station specialisee coute entre 200 et 400 euros. Une regeneration forcee en atelier est facturee 80 a 150 euros. Un remplacement complet de FAP varie entre 1000 et 2500 euros selon le vehicule. La prevention coute donc bien moins que l&apos;intervention curative.",
    },
    {
      q: "Que faire si la voiture est refusee pour AdBlue ?",
      a: "Ne jamais rouler prolongee en mode degrade : le calculateur finit par bloquer le demarrage. Verifiez d&apos;abord le capteur NOx (remplacement 200 a 450 euros), puis l&apos;injecteur AdBlue (180 a 350 euros). Un code P229F ou P2BAD sur l&apos;OBD2 pointe directement la panne. Ensuite refaites un cycle de depollution complet avant de repasser le CT.",
    },
    {
      q: "Les voitures diesel anciennes passent-elles encore le CT en 2026 ?",
      a: "Oui, mais avec une tolerance plus faible. Les diesel Euro 3 et Euro 4 font l&apos;objet d&apos;un controle visuel FAP plus strict. Les Euro 2 et anterieurs sont geres avec des seuils specifiques. Dans les ZFE, l&apos;acces est restreint, mais le CT en lui-meme reste accessible tant que le vehicule respecte les seuils d&apos;opacite et de bruit.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Preparer le controle technique diesel 2026 : guide complet"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Guide pratique"
      >
        <p>
          Le controle technique diesel fait peur. Les seuils d&apos;opacite
          sont plus stricts qu&apos;en essence, les systemes de depollution
          sont fragiles, et une contre-visite FAP peut couter jusqu&apos;a
          2500 euros. Pourtant, avec une bonne preparation et quelques
          verifications ciblees, la grande majorite des refus peuvent etre
          evites. Ce guide complet vous explique exactement quoi faire,
          quand le faire, et combien ca coute si vous devez passer a la
          reparation.
        </p>

        <h2>Les 5 points qui font echouer un CT diesel</h2>
        <p>
          Statistiquement, 60% des contre-visites diesel concernent un de
          ces cinq points : opacimetrie trop elevee, FAP decoupe ou absent,
          defaillance AdBlue (SCR), fuite d&apos;echappement, ou capteur de
          pression differentielle bouche. Les quatre premiers sont
          penalisants, le dernier est souvent detectable avant le CT par
          un simple scan OBD2.
        </p>

        <h2>Opacimetrie : comprendre le test</h2>
        <p>
          Le technicien monte un opacimetre sur la sortie d&apos;echappement
          et effectue trois accelerations libres moteur chaud. L&apos;appareil
          mesure l&apos;absorption lumineuse des fumees. Seuils 2026 : 1.5
          m-1 pour les diesel Euro 5 et Euro 6 (post-2011), 2.5 m-1 pour les
          diesel anciens. Un FAP en bon etat donne typiquement des valeurs
          entre 0.2 et 0.8 m-1. Au-dela de 1.2, c&apos;est un warning serieux.
        </p>

        <h2>Preparer le FAP avant le CT</h2>
        <p>
          Le FAP se regenere en phase active (passive a plus de 60 km/h) et
          en phase forcee (post-injection, temperature 600 degres). Si vous
          roulez majoritairement en ville, le FAP ne se regenere pas
          completement et finit par se boucher. Deux semaines avant le CT,
          prenez l&apos;autoroute pour deux trajets de 30 minutes minimum a
          un regime superieur a 2500 tr/min. Cela force plusieurs cycles de
          regeneration et nettoie les suies accumulees. Pour aller plus
          loin, voir{" "}
          <Link href="/fr/blog/preparer-controle-technique-2026">
            le guide general CT 2026
          </Link>
          .
        </p>

        <h2>AdBlue et SCR : le piege des Euro 6</h2>
        <p>
          Les diesel Euro 6 utilisent l&apos;AdBlue pour reduire les NOx via
          un catalyseur SCR. Si le systeme defaille, le calculateur passe en
          mode degrade et finit par bloquer le demarrage apres un certain
          nombre de redemarrages. Les causes frequentes : capteur NOx aval
          en fin de vie (200 a 450 euros), injecteur AdBlue encrasse (180 a
          350 euros), cristallisation du reservoir en hiver, ou pompe
          AdBlue fatiguee (350 a 600 euros). Un code{" "}
          <Link href="/fr/codes/p0420">P0420</Link> associe a des codes
          P229F, P20EE ou P2BAD est typique. Scannez avant de passer le CT.
        </p>

        <h2>Fuites d&apos;echappement : le silencieux pointe du doigt</h2>
        <p>
          Une fuite avant le catalyseur ou avant le FAP fausse les mesures
          et degrade l&apos;efficacite de depollution. Le technicien
          inspecte visuellement et teste avec son opacimetre. Les fuites
          frequentes se trouvent au collecteur (joint fatigue), au flexible
          inox apres turbo (fissuration), ou sur le corps du silencieux
          arriere (corrosion). Une petite reparation par soudure coute 80 a
          150 euros. Un remplacement de ligne arriere complete entre 400 et
          900 euros. Le scan sonore detecte les fuites par leur signature
          typique — voir{" "}
          <Link href="/fr/blog/controle-preventif-son-eviter-facture-cascade">
            le controle preventif par le son
          </Link>
          .
        </p>

        <h2>Controles visuels supplementaires</h2>
        <p>
          Au-dela de la mecanique pure, le technicien verifie aussi :
          coulures d&apos;huile sous le moteur, etat des durites de
          turbo, absence de voyants allumes (moteur, ABS, airbag,
          AdBlue), fonctionnement des feux, etat des pneus, jeux dans
          les rotules et silentblocs. Un pre-controle visuel avec notre
          methode en{" "}
          <Link href="/fr/blog/checkup-visuel-ia-5-points-vehicule-sain">
            cinq points
          </Link>{" "}
          couvre l&apos;essentiel en moins de cinq minutes.
        </p>

        <h2>Deux semaines avant : la checklist complete</h2>
        <p>
          Jour J-14 : deux trajets autoroute longs pour regenerer le FAP.
          Jour J-10 : scan OBD2 complet, correction des codes eventuels.
          Jour J-7 : verification visuelle des fuites d&apos;echappement
          et des coulures d&apos;huile moteur. Jour J-5 : controle des
          pneus, des feux, du liquide lave-glace. Jour J-3 : scan sonore
          pour detecter tout bruit moteur anormal. Jour J : rendez-vous
          pris, voiture chaude en arrivant, reservoir AdBlue au moins a
          moitie.
        </p>

        <h2>ZFE et controle technique : deux choses distinctes</h2>
        <p>
          Beaucoup confondent : le CT verifie la conformite technique
          (emissions mesurees, systemes presents), la ZFE verifie la
          vignette Crit&apos;Air (categorie administrative liee a la date de
          premiere immatriculation). Vous pouvez passer votre CT avec une
          voiture Crit&apos;Air 4 ou 5, mais vous ne pouvez pas forcement
          rouler dedans en centre-ville. Le CT ne change pas votre
          Crit&apos;Air.
        </p>

        <h2>Si la contre-visite tombe</h2>
        <p>
          Pas de panique. La contre-visite a lieu dans les deux mois et ne
          remesure que les points refuses. Priorite : identifier
          precisement le point bloquant grace au proces-verbal, corriger
          vite, et repasser. Pour un FAP refuse, envisagez un nettoyage
          professionnel plutot qu&apos;un remplacement. Pour une fuite
          d&apos;echappement, une soudure ciblee est souvent suffisante.
          Pour un probleme AdBlue, scannez d&apos;abord pour identifier
          exactement le composant avant de depenser. Voir aussi{" "}
          <Link href="/fr/codes/p0300">le code P0300</Link> qui accompagne
          souvent les defauts de combustion diesel.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleFuiteCouleurRevele() {
  const faq: FaqItem[] = [
    {
      q: "Pourquoi les liquides de voiture ont-ils des couleurs differentes ?",
      a: "Chaque liquide a une fonction specifique et une chimie adaptee, ce qui donne des colorations naturelles ou ajoutees. L&apos;huile moteur est brune par oxydation, le coolant est colore volontairement pour etre identifiable et detecter les fuites, le liquide de frein est quasi transparent pour rester neutre chimiquement. Ces couleurs sont des indices precieux pour le diagnostic.",
    },
    {
      q: "Une fuite rouge cerise est-elle toujours de la transmission automatique ?",
      a: "Presque toujours, oui. La transmission automatique utilise un ATF (Automatic Transmission Fluid) teinte rouge cerise quand il est neuf pour etre distingue des autres. La direction assistee partage parfois cette couleur mais avec une tonalite plus ambree. La position sous le vehicule tranche : boite = centre, direction = pres de la cremaillere.",
    },
    {
      q: "Mon liquide de refroidissement devient brun, est-ce grave ?",
      a: "Oui. Un coolant qui vire au brun est un coolant contamine par des depots de rouille interne (radiateur, bloc moteur) ou melange a de l&apos;huile si un joint de culasse commence a ceder. Dans tous les cas, c&apos;est une alerte : vidange rapide et inspection approfondie.",
    },
    {
      q: "Le liquide de frein transparent peut-il quand meme etre mauvais ?",
      a: "Oui, tout a fait. Le liquide de frein neuf est transparent a jaune paille, mais il absorbe l&apos;humidite avec le temps et fonce progressivement. Un liquide devenu marron fonce a perdu ses proprietes et doit etre remplace, meme s&apos;il n&apos;y a pas de fuite visible.",
    },
    {
      q: "Le lave-glace bleu peut-il etre confondu avec un autre liquide ?",
      a: "Rarement. Le bleu franc du lave-glace est tres distinctif. Certains antigel coolants sont bleus aussi mais plus fonces, plus denses. En cas de doute, la position de la tache tranche : une fuite de lave-glace se trouve pres du reservoir avant ou sous le coffre (pour les modeles avec gicleurs arriere).",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Fuite d&apos;huile, de liquide de frein ou de coolant : la couleur revele la panne"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic visuel"
      >
        <p>
          Chaque liquide dans votre voiture a sa propre histoire chimique.
          Ces histoires se lisent a travers la couleur, la texture et
          l&apos;odeur. Un bon mecanicien peut identifier une fuite en
          trois secondes juste en regardant la tache. La Vision IA
          d&apos;AutoDiag EU a appris le meme langage, en etudiant des
          milliers de cliches annotes. Dans cet article, je vais vous
          montrer le catalogue complet, pourquoi chaque liquide a cette
          couleur, et ce qu&apos;une fuite vous dit vraiment sur la sante
          de votre vehicule.
        </p>

        <h2>L&apos;huile moteur : la memoire du temps qui passe</h2>
        <p>
          Quand elle sort du bidon, l&apos;huile moteur est doree, quasi
          ambree, avec une transparence marquee. Au bout de mille
          kilometres dans le moteur, elle commence a foncer : les residus
          de combustion, les particules de carbone, les traces d&apos;usure
          metallique lui donnent peu a peu cette teinte brun-noir
          caracteristique. Une fuite d&apos;huile est donc presque toujours
          brune sur le sol, avec une viscosite moyenne : elle s&apos;etend
          lentement et laisse une aureole grasse. La position est quasi
          toujours sous le bloc moteur ou sous le carter d&apos;huile.
          Cout de reparation typique : joint de carter 80 a 180 euros,
          joint spi vilebrequin cote distribution 250 a 450 euros, joint de
          couvre culasse 120 a 220 euros.
        </p>

        <h2>Le liquide de refroidissement : le cameleon colore</h2>
        <p>
          Les formulations varient selon les constructeurs et l&apos;age du
          vehicule. Les anciens IAT (Inorganic Additive Technology) sont
          verts fluo, encore utilises sur de vieilles Peugeot ou Citroen.
          Les OAT (Organic Acid Technology) sont orange ou rose : G12+
          rose de Volkswagen, Dex-Cool orange de General Motors. Les HOAT
          (Hybrid Organic Acid Technology) melangent les deux : jaune ou
          turquoise. Chaque couleur signale une chimie differente, et
          melanger deux familles provoque une gelification qui detruit le
          circuit. La Vision IA reconnait la couleur, identifie le groupe,
          et vous previent s&apos;il y a incoherence avec votre modele de
          voiture. La fluidite est faible (presque comme de l&apos;eau),
          l&apos;odeur est legerement sucree. Position typique : devant le
          moteur ou sous le radiateur.
        </p>

        <h2>Le liquide de frein : le transparent mortel</h2>
        <p>
          Une fuite de liquide de frein est la seule qui commande un arret
          immediat du vehicule. Neuf, il est transparent a jaune paille,
          tres fluide, avec une odeur un peu chimique. Use, il fonce vers
          le marron parce qu&apos;il absorbe l&apos;humidite (il est
          hygroscopique, c&apos;est son role). Une fuite se trouve pres
          d&apos;une roue (cylindre de roue ou etrier), sous le maitre
          cylindre en compartiment moteur, ou le long d&apos;une canalisation
          de frein. Le risque : perte de pression du circuit et perte
          progressive de freinage. Cout : de 40 euros pour une simple
          purge a 300 euros pour un etrier complet. La Vision IA detecte
          la nuance quasi transparente et la classe en alerte critique
          automatiquement. Si elle identifie un liquide de frein, la
          recommandation est toujours : ne pas rouler, remorquage.
        </p>

        <h2>La transmission automatique : le rouge qui devient brun</h2>
        <p>
          L&apos;ATF (Automatic Transmission Fluid) est teinte rouge cerise
          quand il est neuf, specialement pour etre reconnaissable.
          Contamine, use, ou trop chauffe, il fonce vers un brun rougeatre
          peu appetissant. L&apos;odeur devient alors brulee — signe clair
          que votre convertisseur de couple a chauffe. Une fuite d&apos;ATF
          est rare mais severe : boite qui broute, passages de rapport
          lents, a-coups. Cout : remplacer un joint de boite 300 a 600
          euros, une vidange 150 a 250 euros, une boite complete 2500 a
          4500 euros. Voir aussi comment le{" "}
          <Link href="/fr/blog/autodiag-vs-garage">
            diagnostic autonome se compare au garage
          </Link>
          .
        </p>

        <h2>La direction assistee : le rouge ambre discret</h2>
        <p>
          Certains vehicules (notamment les anciennes BMW, Mercedes,
          Renault) utilisent une direction assistee hydraulique avec un
          fluide rouge ambre. Plus clair que l&apos;ATF, plus dense que le
          liquide de frein. Une fuite se trouve sous la cremaillere ou
          pres de la pompe de direction. Vous sentez la fuite au volant :
          direction qui devient lourde, grincement quand vous tournez a
          fond. Cout : 120 a 280 euros pour un joint, 400 a 900 euros
          pour une cremaillere. La Vision IA fait la distinction avec
          l&apos;ATF grace a la position sous le vehicule : cremaillere
          pour la direction, centre pour la boite.
        </p>

        <h2>Les autres : lave-glace, GPL, AdBlue</h2>
        <p>
          Le lave-glace est bleu clair ou rose selon la saison, tres
          fluide, odeur citronnee ou alcoolisee. Inoffensif sauf pour
          votre porte monnaie si le reservoir percute quelque chose.
          L&apos;AdBlue, sur les diesels Euro 6, est transparent mais
          laisse des traces blanches en sechant (c&apos;est de
          l&apos;uree). Une fuite d&apos;AdBlue provoque le{" "}
          <Link href="/fr/codes/p0300">
            code P0300 et parfois un P0420
          </Link>{" "}
          quand le catalyseur SCR perd en efficacite. Le GPL fuit en
          phase gazeuse et n&apos;est pas visible au sol — la Vision IA
          ne le detectera pas, il faut un detecteur olfactif ou un
          controle en atelier.
        </p>

        <h2>Le protocole du doute</h2>
        <p>
          Quand vous hesitez entre deux liquides, la Vision IA utilise un
          arbre de decision. Premiere question : quelle est la couleur
          dominante ? Brun-noir = huile presque sure. Rouge = ATF ou
          direction. Vert/orange/rose = coolant presque sur. Transparent =
          frein ou lave-glace. Deuxieme question : ou se trouve la tache
          sous le vehicule ? Centre = boite ou direction. Bloc = moteur.
          Roue = frein. Avant bas = radiateur. Troisieme question : depuis
          combien de temps le vehicule est-il gare ? Cette donnee calcule
          le debit. Les trois reponses convergent vers un diagnostic avec
          un indice de confiance. Au-dessus de 85%, l&apos;IA affirme.
          Entre 60% et 85%, elle propose deux hypotheses et vous demande
          de preciser (odeur, texture au toucher). En dessous de 60%, elle
          vous oriente vers le garage directement. Pour completer, lisez
          aussi{" "}
          <Link href="/fr/blog/vision-ia-detecter-fuites-sous-voiture-telephone">
            detection de fuites sous voiture
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

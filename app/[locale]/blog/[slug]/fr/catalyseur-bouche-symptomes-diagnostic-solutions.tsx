import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleCatalyseurBouche() {
  const faq: FaqItem[] = [
    {
      q: "Quelle difference entre catalyseur bouche et catalyseur inefficace ?",
      a: "Un catalyseur inefficace ne fait plus son travail de depollution : il laisse passer les polluants, ce qui declenche un code P0420. Un catalyseur bouche est physiquement obstrue : la section de passage se reduit, la contre-pression d&apos;echappement monte, le moteur s&apos;etouffe. Les symptomes sont totalement differents : perte de puissance massive dans le second cas, rien dans le premier.",
    },
    {
      q: "Quels sont les symptomes typiques d&apos;un catalyseur bouche ?",
      a: "Perte de puissance progressive surtout en montee, moteur qui ne prend plus ses tours, chaleur anormale sous le vehicule (parfois jusqu&apos;a faire fondre le tapis thermique), odeur d&apos;oeuf pourri a l&apos;echappement (soufre), consommation en hausse, et dans les cas extremes calage au ralenti. Le bruit d&apos;echappement peut devenir sourd et etouffe.",
    },
    {
      q: "Peut-on deboucher un catalyseur sans le remplacer ?",
      a: "Dans certains cas, oui. Les additifs pour catalyseur (20 a 40 euros le bidon) marchent si l&apos;encrassement est chimique et modere. Un passage en atelier pour regeneration thermique (100 a 250 euros) peut aussi reussir. Mais si le monolithe est casse ou fondu par surchauffe, le remplacement est inevitable. Nous ne cautionnons pas le remplacement par un tube vide — c&apos;est illegal au controle technique.",
    },
    {
      q: "Quelle est la cause la plus frequente d&apos;un catalyseur bouche ?",
      a: "La surchauffe due a un melange trop riche prolonge. Les causes amont : injecteur qui fuit, sonde lambda amont en fin de vie, bougie morte qui laisse passer du carburant imbrule, manque de compression. Le catalyseur n&apos;est jamais la cause premiere, il est la victime d&apos;une autre panne que le proprietaire a ignoree.",
    },
    {
      q: "Combien coute un remplacement de catalyseur ?",
      a: "Fourchette large : 400 a 1500 euros pour un catalyseur apres-marche de qualite correcte sur voiture courante, 1000 a 2500 euros pour une piece constructeur, et plus de 3000 euros sur certaines premium allemandes ou hybrides. Le cout inclut la piece, la pose (1 a 2 heures), et le reset des apprentissages du calculateur.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Catalyseur bouche : symptomes, diagnostic et solutions"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          Un catalyseur qui se bouche n&apos;annonce pas toujours un
          voyant moteur. Parfois le probleme s&apos;installe
          progressivement : d&apos;abord une legere perte de couple en
          montee, puis une consommation qui grimpe, puis une odeur
          bizarre, et enfin la voiture qui refuse de monter en regime.
          Cet article explique en detail comment reconnaitre la
          situation, la diagnostiquer correctement, et decider entre
          nettoyage et remplacement.
        </p>

        <h2>Role du catalyseur, rappel rapide</h2>
        <p>
          Le catalyseur transforme chimiquement les polluants
          d&apos;echappement (HC, CO, NOx) en gaz moins nocifs (CO2,
          N2, H2O) grace a des metaux precieux deposes sur un monolithe
          en ceramique ou metallique. Il travaille a haute temperature
          (400 a 800 degres). Cette structure est fragile : un choc
          thermique ou une surcharge de carburant imbrule peut la
          fondre, boucher ses canaux, ou disloquer le monolithe.
        </p>

        <h2>Catalyseur bouche vs catalyseur efficace en berne</h2>
        <p>
          Il faut absolument distinguer les deux. Un code{" "}
          <Link href="/fr/codes/p0420">P0420</Link> classique signale
          une efficacite en baisse : le catalyseur n&apos;epure plus
          assez mais le passage est libre. Voir{" "}
          <Link href="/fr/blog/cout-reparation-catalyseur-p0420">
            le cout reparation catalyseur P0420
          </Link>
          . Un catalyseur physiquement bouche ne declenche pas
          forcement ce code — il ralentit l&apos;echappement et cree
          une contre-pression qui etouffe le moteur. Ce sont deux
          problemes cousins mais distincts.
        </p>

        <h2>Les symptomes du catalyseur bouche</h2>
        <p>
          Symptome 1 : perte de puissance en acceleration. Le moteur
          semble brider, surtout en cote ou en charge. Symptome 2 :
          regime qui plafonne. Le moteur ne monte plus au-dela de 3000
          ou 4000 tr/min. Symptome 3 : consommation en hausse sans
          raison apparente. Symptome 4 : chaleur excessive sous le
          plancher, parfois jusqu&apos;a fondre les tapis. Symptome 5 :
          odeur d&apos;oeuf pourri ou de soufre caracteristique.
          Symptome 6 : bruit d&apos;echappement modifie, plus sourd.
          Un scan sonore detecte d&apos;ailleurs cette alteration
          acoustique.
        </p>

        <h2>Diagnostic professionnel : la mesure de contre-pression</h2>
        <p>
          Le test definitif est la mesure de contre-pression. On
          demonte la sonde lambda amont et on monte un manometre a la
          place. Moteur au ralenti : la pression doit etre inferieure
          a 0.2 bar. A 2500 tr/min maintenus : inferieure a 0.5 bar.
          Au-dela de ces valeurs, le catalyseur oppose une resistance
          anormale. C&apos;est une intervention d&apos;atelier qui
          coute 30 a 80 euros mais qui tranche definitivement le
          diagnostic.
        </p>

        <h2>Avant de blamer le catalyseur</h2>
        <p>
          Verifiez toujours l&apos;amont avant de declarer le
          catalyseur coupable. Une prise d&apos;air ou un injecteur qui
          fuit chronique peut envoyer de l&apos;essence dans le
          catalyseur et le tuer en quelques mois. Une bougie morte
          laisse passer du carburant qui s&apos;enflamme dans le
          catalyseur (post-combustion). Un code{" "}
          <Link href="/fr/codes/p0300">P0300</Link> de ratees
          d&apos;allumage accompagne souvent ces scenarios. Reparer la
          cause AVANT le catalyseur est essentiel, sinon le nouveau
          catalyseur ne tiendra pas longtemps.
        </p>

        <h2>Nettoyage et regeneration possibles</h2>
        <p>
          Les additifs liquides (Wynn&apos;s, Bardahl, JLM) injectes
          dans le reservoir font monter la temperature d&apos;echappement
          et peuvent bruler les depots legers. Cela fonctionne sur un
          encrassement modere, pas sur un monolithe casse. Coût : 20 a
          40 euros par traitement, a faire sur deux ou trois pleins.
          La regeneration thermique en atelier (on chauffe le
          catalyseur a blanc avec un cycle controlle) coute 100 a 250
          euros et peut recuperer un catalyseur legerement bouche.
        </p>

        <h2>FAP diesel : cousin du catalyseur</h2>
        <p>
          Sur diesel, le filtre a particules FAP peut aussi se boucher,
          avec des symptomes tres similaires : perte de puissance,
          chaleur, consommation en hausse. Le FAP se regenere
          normalement en roulant a vitesse soutenue (plus de 60 km/h
          pendant 20 minutes). Un usage urbain exclusif finit par le
          boucher. Le diagnostic et le traitement different mais le
          principe d&apos;inspection est le meme. Voir{" "}
          <Link href="/fr/blog/preparer-controle-technique-diesel-2026-guide">
            preparer le CT diesel 2026
          </Link>
          .
        </p>

        <h2>Remplacement : choisir la bonne piece</h2>
        <p>
          Trois categories. Piece constructeur OEM : qualite maximale,
          prix eleve, garantie longue. Piece equivalente OES : fabriquee
          par le meme equipementier, sans logo constructeur, 30 a 50%
          moins cher. Piece apres-marche : qualite variable, a choisir
          chez un fabricant reconnu. Evitez imperativement les pieces
          tres bas de gamme : elles sont souvent recyclees de
          catalyseurs voles et n&apos;ont pas la charge de metaux
          precieux requise, le code P0420 revient en quelques mois.
        </p>

        <h2>Prevention : une affaire d&apos;entretien</h2>
        <p>
          Un catalyseur bien entretenu dure 200000 km voire plus. Les
          cles : entretien lambda aux intervalles (changement preventif
          vers 150000 km), qualite des bougies d&apos;allumage sur
          essence, reglage moteur correct, carburant de qualite, et
          surtout reparation rapide de tout melange trop riche ou trop
          pauvre. Voir aussi{" "}
          <Link href="/fr/blog/consommation-excessive-carburant-causes-obd2">
            consommation excessive de carburant
          </Link>{" "}
          qui traite les causes amont.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

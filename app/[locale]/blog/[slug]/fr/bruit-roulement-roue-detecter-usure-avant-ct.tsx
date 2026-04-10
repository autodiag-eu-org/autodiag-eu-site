import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleRoulementRoue() {
  const faq: FaqItem[] = [
    {
      q: "Comment identifier le cote du roulement defaillant ?",
      a: "Tournez legerement le volant a droite sur route libre : si le bruit diminue, c&apos;est le roulement GAUCHE (la charge passe a droite, qui est saine). Si le bruit augmente, c&apos;est le DROIT. Le Scan Sonore fournit l&apos;objectivite, mais ce test manuel aide a confirmer.",
    },
    {
      q: "Le roulement est-il un point de refus au CT ?",
      a: "Oui, depuis 2019 en France. Un jeu de roulement excessif ou un bruit anormal audible au banc a rouleaux entraine une contre-visite. Meme chose en TUV en Allemagne et en MOT au Royaume-Uni.",
    },
    {
      q: "Combien coute un roulement remplace ?",
      a: "Entre 180 et 450 euros par roue, selon le vehicule et le type (roulement integre au moyeu ou separe). Sur certaines allemandes, il faut aussi recoder l&apos;ABS, ce qui ajoute 30 a 60 euros de main d&apos;oeuvre.",
    },
    {
      q: "Puis-je continuer a rouler avec un roulement qui gronde ?",
      a: "Quelques centaines de kilometres sans risque immediat si le bruit est leger. Au-dela, la bague de roulement chauffe, le jeu augmente, et a terme la roue peut prendre un angle anormal. A ce stade-la, l&apos;accident est possible.",
    },
    {
      q: "Le scan detecte-t-il un roulement qui commence ?",
      a: "Oui, c&apos;est meme son point fort. Un roulement qui commence produit un grondement faible autour de 200-400 Hz que l&apos;oreille humaine, assise dans un habitacle bruyant, ne remarque pas. Le SVM l&apos;isole parmi les 138 caracteristiques.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Bruit de roulement de roue : detecter l&apos;usure avant le CT"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevention"
      >
        <p>
          Le roulement de roue est l&apos;une des pieces les plus
          sournoises d&apos;une voiture. Il commence a fatiguer vers 90
          000 km, donne un premier signal audible vers 110 000 km, et
          continue de rouler jusqu&apos;a 150 000 km avant d&apos;etre
          vraiment dangereux. Le probleme, c&apos;est que pendant tout ce
          temps, le conducteur s&apos;habitue au son. Un an plus tard,
          c&apos;est devenu le &quot;bruit normal&quot; de sa voiture.
          Le Scan Sonore, lui, n&apos;oublie jamais le bruit de
          reference.
        </p>

        <h2>Physique du roulement fatigue</h2>
        <p>
          Un roulement a billes ou a rouleaux en bon etat tourne en
          silence presque total. Ce qu&apos;on appelle le
          &quot;grondement&quot; apparait quand les surfaces de contact
          commencent a marquer : la graisse se degrade, les pistes
          internes presentent des micro-ecailles, et chaque rotation
          genere un choc acoustique module par la vitesse. La frequence
          fondamentale se situe entre 100 et 300 Hz a 80 km/h, avec des
          harmoniques jusqu&apos;a 2 kHz. C&apos;est dans cette zone que
          le SVM est le plus precis.
        </p>

        <h2>La signature qui trahit</h2>
        <p>
          Trois caracteristiques identifient a coup sur un roulement : le
          bruit augmente avec la vitesse (proportionnel), il module avec
          la charge laterale (virage leger), et il disparait quand vous
          decollerez legerement la roue en decelerant. Si les trois
          sont presents, c&apos;est un roulement a 90% de certitude. Le
          Scan Sonore integre ces dependances dans ses 138
          caracteristiques : il ne regarde pas seulement le spectre a
          l&apos;instant T, mais aussi comment il evolue sur les trente
          secondes d&apos;enregistrement.
        </p>

        <h2>L&apos;enjeu du controle technique</h2>
        <p>
          Depuis la refonte du controle technique francais en 2019, les
          points de verification suspension et train roulant sont plus
          stricts. Un jeu de roulement mesure au comparateur entraine un
          defaut majeur avec contre-visite obligatoire. Comptez 78 euros
          pour la contre-visite en plus de la reparation. Meme logique au
          TUV allemand, au MFK suisse, a l&apos;ITV espagnol et a
          l&apos;IPO portugais. Detecter le roulement deux semaines avant
          la visite permet de reparer sans pression et de passer du
          premier coup.
        </p>

        <h2>L&apos;effet cascade du roulement neglige</h2>
        <p>
          Un roulement qui lache, ce n&apos;est pas juste une piece a
          changer. C&apos;est la chaleur qui monte dans le moyeu, le
          capteur ABS integre qui grille (150 euros supplementaires), le
          disque de frein qui chauffe asymetriquement et se voile (150
          euros de plus), et dans les cas extremes, le porte-fusee qui
          surchauffe et prend du jeu a son tour (450 euros). Un
          roulement a 220 euros detecte tot devient une facture a 970
          euros si on laisse courir six mois.
        </p>

        <h2>Protocole de scan roulement</h2>
        <p>
          Pour une detection fiable, il faut rouler. Un scan a
          l&apos;arret ne capte presque rien de la signature. Le bon
          protocole : trente secondes sur route plate a vitesse stable
          entre 70 et 90 km/h, avec deux legers changements de voie pour
          tester la modulation par charge laterale. Evitez les routes
          tres bosselees qui noient la signature dans les bruits de
          suspension. Le SVM donnera une confiance &quot;roulement&quot;
          entre 0 et 100%. Au-dela de 60%, vous savez quel cote verifier
          en priorite.
        </p>

        <h2>Ce que l&apos;adaptation auditive vous cache</h2>
        <p>
          Je repete cette idee parce qu&apos;elle est centrale : votre
          cerveau adapte sa perception aux bruits recurrents. Un
          roulement qui commence a gronder a 70 km/h, vous l&apos;entendez
          le premier jour, vous l&apos;oubliez la deuxieme semaine, et
          vous ne le remarquez plus au bout d&apos;un mois. L&apos;IA,
          elle, compare objectivement chaque scan au precedent. Si la
          confiance roulement est passee de 20% a 55% en deux mois, il
          faut reagir meme si votre oreille dit &quot;tout va bien&quot;.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Lisez aussi{" "}
          <Link href="/fr/blog/controle-preventif-son-eviter-facture-cascade">
            le scan preventif avant le CT
          </Link>{" "}
          et{" "}
          <Link href="/fr/blog/usure-invisible-composant-fatigue-endommage-autre">
            comment une piece fatiguee en endommage d&apos;autres
          </Link>
          . Si un code{" "}
          <Link href="/fr/codes/p0011">P0011</Link>{" "}
          ou un probleme d&apos;ABS apparait en meme temps, c&apos;est
          possiblement le capteur de vitesse de roue perturbe par le jeu
          du roulement. L&apos;OBD2 seul ne dira pas laquelle des deux
          est la cause racine.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

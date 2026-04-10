import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleVisionFuitesSousVoiture() {
  const faq: FaqItem[] = [
    {
      q: "Comment la Vision IA distingue-t-elle une fuite d&apos;huile d&apos;une fuite de liquide de refroidissement ?",
      a: "Le modele analyse trois signaux a la fois : la couleur de la tache (brun-noir pour l&apos;huile moteur, vert/orange/rose pour le coolant), la viscosite estimee par la forme de l&apos;aureole, et la position sous le vehicule. Une tache vert fluor devant le moteur = coolant a 95% de probabilite. Une tache brun-noir au milieu = huile moteur.",
    },
    {
      q: "A partir de quelle taille de tache dois-je m&apos;inquieter ?",
      a: "En dessous de 2 centimetres, on parle de suintement : a surveiller, pas urgent. Entre 2 et 10 centimetres, le joint ou la durite fatigue vraiment, prevoyez une intervention sous 15 jours. Au-dela de 10 centimetres ou si la tache reapparait en quelques heures, ne roulez pas : remorquage conseille.",
    },
    {
      q: "Puis-je rouler si je vois une goutte par jour sous ma voiture ?",
      a: "Oui, mais verifiez le niveau concerne tous les trois jours. Une goutte d&apos;huile par jour fait environ 30 ml par mois : vous devez compenser. Si c&apos;est du liquide de frein, arretez immediatement de rouler, le circuit ne tolere aucune perte.",
    },
    {
      q: "Faut-il placer quelque chose sous la voiture pour la detection ?",
      a: "Un simple carton blanc A4 pose au sol avant de garer la voiture toute la nuit suffit. Au matin, vous photographiez le carton : l&apos;IA gere mieux les contrastes sur fond clair et elle mesure la tache avec precision.",
    },
    {
      q: "La Vision IA remplace-t-elle une visite chez le garagiste ?",
      a: "Non, elle vous previent. Elle vous dit ce qui fuit, ou, et avec quelle gravite, puis vous oriente vers la bonne reparation. Le garagiste reste indispensable pour intervenir, mais vous arrivez chez lui avec un dossier clair au lieu d&apos;une facture ouverte.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Vision IA : detecter les fuites sous votre voiture avec un telephone"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Vision IA"
      >
        <p>
          Vous reculez votre voiture le matin et vous apercevez une tache sur
          le beton. Votre premier reflexe est de plisser les yeux et de vous
          demander si elle etait la hier. Votre deuxieme reflexe, a partir de
          maintenant, devrait etre de sortir votre telephone. La Vision IA
          d&apos;AutoDiag EU identifie en quelques secondes ce qui fuit, ou,
          et avec quelle severite. Pas besoin d&apos;etre mecanicien, pas
          besoin de sentir le liquide ou de tremper un doigt dedans.
        </p>

        <h2>La photo qui vaut un diagnostic</h2>
        <p>
          Le principe est simple : vous prenez une photo de la tache au sol,
          l&apos;application analyse trois dimensions en parallele. Premiere
          dimension, la couleur dominante calibree selon l&apos;eclairage
          ambiant. Deuxieme dimension, la texture et la viscosite estimees a
          partir de la forme du bord et de l&apos;aureole diffuse. Troisieme
          dimension, la position sous le vehicule — l&apos;utilisateur indique
          ou se trouvait la roue avant gauche, et le modele triangule le
          point d&apos;origine probable.
        </p>

        <h2>Le catalogue chromatique des liquides</h2>
        <p>
          Chaque liquide d&apos;une voiture a sa signature. L&apos;huile
          moteur commence ambree quand elle est neuve et vire au brun-noir
          apres quelques milliers de kilometres : sa tache est grasse, dense,
          et tombe toujours sous le bloc. Le liquide de refroidissement existe
          en vert fluo, en orange, en rose ou en jaune selon la chimie (IAT,
          OAT, HOAT) — il est fluide, legerement sucre, et se trouve pres du
          radiateur ou des durites. Le liquide de frein est transparent a
          jaune paille, tres fluide, et fuit pres des roues ou du maitre
          cylindre. Le liquide de transmission automatique est rouge cerise
          quand il est neuf, marron quand il est use. La direction assistee
          est rouge ambre. Le lave-glace est bleu clair. Voila la palette.
        </p>

        <h2>La gravite selon le debit</h2>
        <p>
          Deux taches identiques ne racontent pas la meme histoire. Une tache
          de dix centimetres apparue en huit heures de stationnement est une
          alerte serieuse : comptez une perte d&apos;environ 200 ml par nuit.
          La meme tache accumulee sur trois semaines est un suintement a
          surveiller. C&apos;est pour ca que l&apos;application vous demande
          depuis combien de temps la voiture est garee. Avec cette donnee,
          elle calcule un debit en millilitres par heure et le classe en
          quatre niveaux : suintement, fuite lente, fuite moderee, fuite
          critique.
        </p>

        <h2>Prendre le joint avant la casse</h2>
        <p>
          L&apos;interet de cette detection precoce n&apos;est pas esthetique.
          Un joint spi de vilebrequin qui commence a suinter coute 180 a 350
          euros a remplacer. Le meme joint ignore pendant six mois descend
          jusqu&apos;au volant moteur et contamine l&apos;embrayage : la
          facture saute a 1400 euros. Une durite de radiateur qui goutte
          coute 60 euros en main d&apos;oeuvre. La meme durite qui lache sur
          l&apos;autoroute surchauffe le moteur et fait sauter le joint de
          culasse : 2000 euros minimum. La Vision IA vous donne une semaine
          ou deux d&apos;avance, c&apos;est ce qui change tout.
        </p>

        <h2>Quand rouler, quand remorquer</h2>
        <p>
          Le systeme donne une recommandation claire a la fin de l&apos;analyse.
          Suintement leger : vous pouvez rouler normalement et passer chez
          votre garagiste dans la semaine. Fuite lente : verifiez le niveau
          avant chaque trajet, reparation sous quinze jours. Fuite moderee :
          limitez vos trajets au strict necessaire, reparation sous
          quarante-huit heures. Fuite critique de liquide de frein ou de
          liquide de refroidissement important : ne roulez plus, remorquage
          obligatoire. C&apos;est la meme logique que le{" "}
          <Link href="/fr/codes/p0128">code P0128</Link> qui signale un
          thermostat defaillant — anticiper coute toujours moins cher.
        </p>

        <h2>Ce que la photo ne peut pas faire</h2>
        <p>
          La Vision IA identifie le liquide et la gravite, mais elle ne
          remplace pas un diagnostic mecanique complet. Elle ne vous dit pas
          quel joint precisement est en cause — il faudra une inspection sur
          pont. Elle ne detecte pas les fuites internes qui ne sortent pas au
          sol, comme un joint de culasse qui envoie du coolant dans
          l&apos;huile. Pour ces cas, le{" "}
          <Link href="/fr/blog/votre-moteur-parle-detection-pannes-par-son">
            scan sonore moteur
          </Link>{" "}
          prend le relais : il entend les micro-claquements que la fuite
          interne produit sur les coussinets.
        </p>

        <h2>Le protocole qui marche</h2>
        <p>
          Voici la methode qui donne les meilleurs resultats : garez la
          voiture sur un sol clair, lisse et sec. Si le sol est fonce, glissez
          un carton blanc A4 sous le vehicule avant de couper le moteur.
          Laissez reposer au moins deux heures, idealement toute la nuit. Le
          matin, accroupissez-vous a un metre de distance, cadrez la tache
          avec un reperage au sol visible (une piece de monnaie, une cle) pour
          l&apos;echelle. Lancez le scan. En trois secondes, vous savez ce
          qui fuit. Faites la photo de la meme facon la semaine suivante
          pour suivre l&apos;evolution — c&apos;est la seule facon de
          distinguer un suintement stable d&apos;une fuite qui s&apos;aggrave.
        </p>

        <h2>A combiner avec le checkup mensuel</h2>
        <p>
          La detection de fuites est la premiere etape d&apos;un{" "}
          <Link href="/fr/blog/checkup-visuel-ia-5-points-vehicule-sain">
            checkup visuel en cinq points
          </Link>{" "}
          que vous pouvez faire en cinq minutes chaque mois. Les autres
          points : usure des pneus, plaquettes a travers les rayons de jante,
          niveaux sous le capot, eclairage exterieur. Si vous avez en plus
          un dongle OBD2 connecte, pensez aussi au{" "}
          <Link href="/fr/codes/p0420">code P0420</Link> qui accompagne
          souvent une fuite d&apos;huile qui a atteint le catalyseur. Les
          deux technologies — Vision et Scan Sonore — se completent.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleUsurePlaquettesVision() {
  const faq: FaqItem[] = [
    {
      q: "Comment mesurer l&apos;epaisseur d&apos;une plaquette sans demonter la roue ?",
      a: "La Vision IA photographie la plaquette a travers les rayons de la jante, en utilisant la lampe du telephone pour eclairer la zone. Elle mesure la partie visible de la garniture avec une precision de plus ou moins 0.5 mm en calibrant sur la taille du disque detecte dans l&apos;image. C&apos;est precis a condition que la prise de vue soit nette et bien eclairee.",
    },
    {
      q: "A partir de quelle epaisseur faut-il changer les plaquettes ?",
      a: "Une plaquette neuve mesure entre 10 et 12 mm. A 4 mm, vous devez planifier le changement dans les trois mois. A 3 mm, le temoin d&apos;usure va bientot frotter le disque et declencher un grincement. A 2 mm, vous roulez sur la plaque support et vous abimez le disque : changement immediat et probablement remplacement du disque aussi.",
    },
    {
      q: "Qu&apos;est-ce que le disque voile ou scored ?",
      a: "Un disque en bon etat est lisse et brillant avec quelques stries fines. Un disque scored presente des rainures profondes causees par des plaquettes usees jusqu&apos;a la plaque metallique. Un disque voile est deforme, ce qui provoque des vibrations dans la pedale a chaque freinage. La Vision IA detecte les deux defauts sur une photo.",
    },
    {
      q: "Que signifie une teinte bleue sur un disque ?",
      a: "Le bleuissement apparait quand le disque a subi une surchauffe severe. L&apos;oxydation du metal a haute temperature donne cette teinte bleue-violette. C&apos;est la signature d&apos;un etrier grippe, d&apos;un conduit obstrue ou d&apos;un usage intensif en montagne. Le disque doit etre remplace car ses proprietes mecaniques sont alterees.",
    },
    {
      q: "Combien coute un changement de plaquettes et disques ?",
      a: "Un train de plaquettes avant en milieu de gamme coute entre 60 et 120 euros. Un train de disques entre 90 et 200 euros. La main d&apos;oeuvre compte 80 a 150 euros par essieu. Total realiste : 250 a 450 euros avant, un peu moins a l&apos;arriere. Anticiper permet de choisir son moment et de comparer les devis, au lieu de subir un remplacement d&apos;urgence.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Usure des plaquettes et disques : ce que la Vision IA detecte a travers les rayons"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Vision IA"
      >
        <p>
          Les freins sont la piece la plus importante de votre voiture —
          plus que le moteur, plus que la boite, plus que la suspension.
          Parce qu&apos;un frein qui lache, c&apos;est un accident. Le
          probleme, c&apos;est que personne ne regarde vraiment ses
          plaquettes. On roule, on freine, on attend le grincement. Ce
          grincement arrive trop tard : quand vous l&apos;entendez, vous
          avez probablement deja abime le disque. La Vision IA resout
          exactement ce probleme : elle mesure votre plaquette sans
          demontage, en photographiant a travers les rayons de la jante.
          Quelques secondes par roue, et vous savez ou vous en etes.
        </p>

        <h2>La prise de vue qui fonctionne</h2>
        <p>
          Tournez le volant a fond vers la droite pour exposer la
          plaquette avant gauche. La partie verticale de la plaquette est
          alors accessible entre deux rayons de la jante. Allumez la
          lampe du telephone, positionnez l&apos;objectif entre les
          rayons, stabilisez, prenez la photo. Repetez pour la roue
          opposee. L&apos;application reconnait la geometrie d&apos;un
          etrier de frein, isole la plaquette dans l&apos;image, mesure
          la hauteur visible de la garniture en pixels, puis convertit en
          millimetres en se calibrant sur le diametre du disque qu&apos;elle
          identifie au passage.
        </p>

        <h2>La hierarchie des mesures</h2>
        <p>
          Une plaquette neuve fait entre 10 et 12 mm de garniture. A 6
          mm, vous etes a mi-vie, l&apos;application affiche un indicateur
          vert. A 4 mm, l&apos;indicateur passe a orange : planifiez le
          changement dans les 3 mois. A 3 mm, le temoin d&apos;usure
          interne commence a toucher le disque et vous allez bientot
          entendre un grincement caracteristique — l&apos;application
          affiche une alerte rouge. A 2 mm ou moins, c&apos;est critique :
          la garniture se rapproche dangereusement de la plaque metallique
          qui, une fois en contact avec le disque, va le rayer en quelques
          kilometres. Le{" "}
          <Link href="/fr/blog/grincement-freins-usure-normale-ou-danger">
            grincement de freins
          </Link>{" "}
          merite son article complet a ce sujet.
        </p>

        <h2>Le disque : le grand oublie</h2>
        <p>
          Un probleme courant : les conducteurs changent leurs plaquettes
          mais gardent les anciens disques. C&apos;est parfois une erreur.
          La Vision IA analyse aussi le disque visible dans le cliche et
          detecte trois defauts. Premier defaut : le rainurage profond.
          Si la surface du disque montre des sillons nets, la plaquette
          precedente a use jusqu&apos;au metal, le disque ne peut plus
          etre surface. Deuxieme defaut : le voile. Un disque voile
          provoque des vibrations a chaque freinage. L&apos;analyse
          photographique ne mesure pas le voile directement, mais elle
          detecte les traces d&apos;usure asymetrique qui en resultent.
          Troisieme defaut : le bleuissement. Quand le disque a chauffe
          au point de bleuir, sa structure cristalline a change, il doit
          etre remplace meme s&apos;il parait lisse.
        </p>

        <h2>Les signes qui accompagnent la mesure</h2>
        <p>
          La Vision IA ne se contente pas de la mesure brute. Elle
          regarde aussi le contexte. Une plaquette legerement vitrifiee
          presente une surface lisse et brillante, parfois avec des
          reflets vernisses : c&apos;est une plaquette qui a trop
          chauffe, souvent a cause d&apos;un etrier grippe qui bloque
          partiellement. Une difference marquee d&apos;usure entre
          plaquette interieure et exterieure est la signature d&apos;un
          piston d&apos;etrier qui ne rentre plus correctement. Une
          usure assymetrique entre gauche et droite du meme essieu
          signale un probleme hydraulique ou un flexible de frein qui
          gonfle sous pression. Toutes ces anomalies remontent dans le
          rapport avec leur interpretation mecanique.
        </p>

        <h2>Le lien avec le bruit de frein</h2>
        <p>
          La Vision IA detecte ce qui est visible, le{" "}
          <Link href="/fr/blog/grincement-freins-usure-normale-ou-danger">
            scan sonore des bruits de frein
          </Link>{" "}
          detecte ce qui est audible. Ensemble, les deux technologies
          couvrent 95% des problemes de freinage. Si vous voyez une
          plaquette a 4 mm et que vous entendez deja un grincement
          cyclique, vous etes probablement au-dela du simple usage normal :
          il y a probablement une composante etrier ou piston. Si vous
          voyez une plaquette a 5 mm sans bruit, vous avez encore trois
          a quatre mois devant vous pour preparer tranquillement le
          changement.
        </p>

        <h2>Le calcul d&apos;autonomie restante</h2>
        <p>
          Avec l&apos;historique des mesures successives, l&apos;application
          calcule votre vitesse d&apos;usure en millimetres par mille
          kilometres. Cette valeur est tres variable selon le
          conducteur : un citadin use 1.5 mm par 10 000 km, un
          autoroutier 0.7 mm par 10 000 km, un conducteur montagneux
          peut depasser 2 mm par 10 000 km. Une fois votre vitesse
          personnelle connue, l&apos;application projette le moment ou
          vous atteindrez 3 mm, puis 2 mm. Vous planifiez votre
          intervention a l&apos;avance, vous comparez les devis, vous
          choisissez votre garage sans urgence.
        </p>

        <h2>Les economies reelles</h2>
        <p>
          Anticiper le changement de plaquettes fait economiser deux
          postes. Premier poste : la depose en urgence avec immobilisation
          du vehicule coute 30 a 60 euros de plus qu&apos;une prise de
          rendez-vous planifiee. Deuxieme poste : si vous attendez trop
          et que vous abimez le disque, vous passez d&apos;un train de
          plaquettes a 100 euros a un ensemble plaquettes plus disques a
          250 euros, plus la main d&apos;oeuvre quasi doublee. Sur quatre
          ans d&apos;usage typique d&apos;une voiture en Europe, cela
          represente 300 a 600 euros epargnes juste sur les freins. Si
          vous combinez avec la{" "}
          <Link href="/fr/blog/preparer-controle-technique">
            preparation du controle technique
          </Link>{" "}
          et un scan OBD2 regulier (surveillez le{" "}
          <Link href="/fr/codes/p0325">code P0325 cliquetis</Link> qui
          peut signer une chauffe anormale du systeme), vous avez
          l&apos;equation complete : Vision IA + scan sonore + OBD2 = un
          vehicule sans mauvaise surprise.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

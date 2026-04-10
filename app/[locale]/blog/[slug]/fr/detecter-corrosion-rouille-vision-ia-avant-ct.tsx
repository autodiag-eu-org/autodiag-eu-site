import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleCorrosionVisionIA() {
  const faq: FaqItem[] = [
    {
      q: "Quelle difference entre rouille de surface et rouille structurelle ?",
      a: "La rouille de surface est une oxydation brune qui se limite a la couche superficielle du metal : elle part au brossage et se repare avec un traitement antirouille. La rouille structurelle attaque l&apos;epaisseur de la tole, provoque des perforations, fragilise la piece et devient un motif de refus au controle technique. La Vision IA classe les cliches en quatre niveaux pour que vous sachiez si vous avez six mois devant vous ou zero.",
    },
    {
      q: "Quelles zones faut-il photographier en priorite ?",
      a: "Le triangle rouille d&apos;une voiture europeenne : bas de caisse, passages de roue arriere, soubassement de plancher, traverse arriere, silentblocs de train, et tous les points de fixation de la suspension. Ajoutez les lignes de frein metalliques qui longent le chassis : un point de corrosion dessus vaut refus immediat.",
    },
    {
      q: "Mon vehicule de 15 ans va-t-il forcement refuser le CT ?",
      a: "Non, beaucoup de vehicules de 15 a 20 ans passent sans souci si la corrosion est surveillee. Le probleme arrive quand elle a ete ignoree. Un controle Vision IA tous les six mois detecte la propagation tot et permet un traitement a 80 ou 150 euros au lieu d&apos;une reparation de caisse a 600 ou 1200 euros.",
    },
    {
      q: "La peinture qui bulle est-elle toujours signe de rouille active ?",
      a: "Dans 95% des cas, oui. Une bulle de peinture signifie qu&apos;en dessous, un point de rouille gonfle et souleve la couche. La Vision IA detecte ces bulles meme tres petites, parfois invisibles a l&apos;oeil nu, en analysant les variations de teinte et de reflet sur la surface peinte.",
    },
    {
      q: "Puis-je traiter moi-meme la corrosion detectee ?",
      a: "Pour une rouille de niveau 1 (superficielle), oui : brossage, convertisseur de rouille, peinture antirouille, 40 euros de fournitures. Pour les niveaux 2 et plus, ou si la zone est structurelle (longeron, point de suspension), la reparation doit etre faite par un carrossier competent.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Detecter la corrosion avec la Vision IA avant le controle technique"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevention"
      >
        <p>
          La rouille est le tueur silencieux des vehicules europeens. En
          France, en Allemagne, en Belgique ou en Suisse, l&apos;hiver et le
          sel de deneigement travaillent vos soubassements pendant que vous
          roulez. Un point de rouille de la taille d&apos;une piece de deux
          euros peut devenir, en dix-huit mois d&apos;inaction, une
          perforation qui fait refuser votre vehicule au controle technique.
          La Vision IA d&apos;AutoDiag EU identifie ces debuts de corrosion
          bien avant qu&apos;ils deviennent irreversibles.
        </p>

        <h2>Pourquoi detecter tot change tout</h2>
        <p>
          Le mecanisme de la rouille est exponentiel. Un premier point
          d&apos;oxydation cree une micro-porosite qui retient l&apos;humidite,
          qui etend la corrosion, qui elargit la porosite. En six mois,
          vous doublez la surface touchee. En dix-huit mois, vous passez de
          la rouille de surface (traitable a 80 euros de produits) a la
          rouille structurelle (soudure et decoupe, 400 a 1500 euros). Le
          jour ou vous le voyez a l&apos;oeil nu en fermant le coffre, il
          est deja tard. La Vision IA voit les tout premiers points, quand
          ils mesurent encore quelques millimetres.
        </p>

        <h2>Le triangle rouille</h2>
        <p>
          Toutes les voitures ne rouillent pas aux memes endroits. Mais
          neuf vehicules sur dix ont les memes zones sensibles. Les bas de
          caisse, d&apos;abord, ou le sel projete par les roues stagne.
          Les passages de roue arriere, ou l&apos;humidite reste piegee
          derriere les garnitures plastiques. Les soubassements entre les
          traverses, ou la condensation ne seche jamais. Les points de
          fixation des trains roulants, qui combinent vibrations et
          humidite. Les lignes de frein metalliques, enfin, qui sont le
          cauchemar du CT : un point de corrosion profonde sur une ligne de
          frein vaut refus immediat et interdiction de circuler.
        </p>

        <h2>Quatre niveaux, quatre decisions</h2>
        <p>
          Le modele Vision IA classe chaque cliche en quatre niveaux.
          Niveau 1, rouille de surface : tache brune, pas de gonflement,
          traitement possible a la maison pour 40 a 80 euros. Niveau 2,
          rouille active avec gonflement : la peinture bulle, un debut de
          decollement apparait, il faut traiter sous six mois chez un
          carrossier pour 150 a 300 euros. Niveau 3, perforation imminente :
          la tole est amincie, la piece perd de sa rigidite, intervention
          sous trois mois obligatoire, 400 a 800 euros. Niveau 4,
          perforation avere ou structurelle : le controle technique refusera,
          intervention immediate, 600 a 1500 euros selon la zone. A chaque
          niveau, une recommandation claire, pas de zone grise.
        </p>

        <h2>Une histoire de Yaris et de train arriere</h2>
        <p>
          Cas reel : une Toyota Yaris de 2012, 140 000 km, proprietaire tres
          soigneux qui lave sa voiture tous les mois. En la photographiant
          sous le train arriere pour un checkup de routine, la Vision IA
          detecte un niveau 2 sur l&apos;un des points de fixation de la
          barre Panhard. L&apos;oeil nu ne voyait rien, juste une tache
          marron au milieu d&apos;un noir sale. Le carrossier confirme,
          traite la zone pour 180 euros. Six mois plus tard, meme zone, meme
          photo : niveau 1, stabilise. Cout evite : environ 700 euros de
          remplacement de barre si la piece avait cede en cours de
          roulage. L&apos;investissement est rentabilise des la premiere
          detection.
        </p>

        <h2>La comparaison avant-apres</h2>
        <p>
          La vraie force de la Vision IA n&apos;est pas un cliche isole,
          c&apos;est la serie. Vous photographiez les memes zones tous les
          six mois, le systeme compare l&apos;historique et vous alerte
          quand une zone progresse d&apos;un niveau. Cette progression est
          bien plus informative qu&apos;un etat instantane : une corrosion
          niveau 1 stable depuis trois ans n&apos;est pas urgente. Une
          corrosion niveau 1 qui est passee a niveau 2 en six mois est une
          alerte. Le temps est une donnee d&apos;entree dans le diagnostic.
        </p>

        <h2>Ce que le CT regarde vraiment</h2>
        <p>
          Sur un{" "}
          <Link href="/fr/blog/preparer-ct-2026">
            controle technique 2026
          </Link>
          , le controleur dispose d&apos;une grille precise. Les defauts
          majeurs lies a la corrosion sont : corrosion perforante sur une
          zone structurelle, corrosion sur une canalisation de frein ou une
          fixation de suspension, perforation d&apos;un longeron ou d&apos;une
          traverse. En anticipant ces points deux mois a l&apos;avance avec
          la Vision IA, vous arrivez au CT avec les traitements faits. Le
          controleur constate, coche, vous partez avec la vignette. Pas de
          contre visite, pas de frais supplementaires.
        </p>

        <h2>L&apos;hygiene du controle periodique</h2>
        <p>
          Un controle Vision IA des zones sensibles prend dix minutes tous
          les six mois. Huit cliches : bas de caisse droit, bas de caisse
          gauche, passage de roue arriere droit, passage de roue arriere
          gauche, sous le train avant, sous le train arriere, et deux
          cliches ciblant les lignes de frein visibles. L&apos;application
          vous guide, elle reconnait les angles et vous signale si un
          cliche n&apos;est pas assez net. Dix minutes, deux fois par an.
          En combinant ca avec le{" "}
          <Link href="/fr/blog/checkup-visuel-ia-5-points-vehicule-sain">
            checkup visuel en cinq points
          </Link>{" "}
          et un scan OBD2 mensuel, vous tenez votre vehicule a distance
          totale de la casse imprevue.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

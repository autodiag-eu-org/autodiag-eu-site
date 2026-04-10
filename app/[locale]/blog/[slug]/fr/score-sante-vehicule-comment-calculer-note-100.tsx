import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleScoreSanteVehicule() {
  const faq: FaqItem[] = [
    {
      q: "Comment le score est-il calcule ?",
      a: "On part de 100 points. Chaque anomalie detectee retire un nombre de points fonction de sa gravite, de sa source et de la confiance associee. Un code OBD2 critique retire entre 15 et 25 points. Une signature sonore anormale a plus de 80% de confiance retire entre 8 et 15 points. Un element visuel comme une fuite majeure retire entre 10 et 20 points. Le score final est plafonne a 100 et jamais negatif.",
    },
    {
      q: "Quelle note correspond a quelle sante ?",
      a: "90 a 100 : excellent etat, aucune action necessaire. 75 a 89 : bon etat, quelques points a surveiller. 60 a 74 : etat correct mais plusieurs elements demandent attention. 40 a 59 : etat preoccupant, reparations a prevoir rapidement. 0 a 39 : etat degrade, intervention urgente recommandee. Les seuils sont calibres pour ne pas alarmer inutilement sur une voiture qui roule normalement.",
    },
    {
      q: "Pourquoi la confiance du SVM influence-t-elle le score ?",
      a: "Parce qu&apos;une detection a 55% de confiance ne doit pas etre traitee comme une detection a 92%. Le poids de la penalite est proportionnel a la confiance. A 55%, on retire 40% de la penalite de base. A 92%, on retire 100%. Cela evite les faux positifs qui feraient chuter un score injustement.",
    },
    {
      q: "Le score evolue-t-il dans le temps ?",
      a: "Oui, chaque scan est historise. Vous voyez la courbe de sante de votre voiture sur les dernieres semaines ou mois. Une tendance descendante est plus parlante qu&apos;une valeur ponctuelle. Si votre score glisse de 92 a 78 en trois mois, c&apos;est un signal clair que quelque chose se degrade progressivement.",
    },
    {
      q: "Le score remplace-t-il un controle technique ?",
      a: "Non, il le complete. Le controle technique reste la reference legale et nous ne cherchons pas a le remplacer. Le score sante est un indicateur pedagogique qui vous aide a preparer votre voiture avant le CT et a eviter les mauvaises surprises le jour J.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Score de sante vehicule : comment on calcule votre note sur 100"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={9}
        category="Technologie"
      >
        <p>
          Un chiffre unique qui resume la sante de votre voiture, c&apos;est
          un vieux reve. Les tentatives existent depuis des annees, souvent
          simplifiees a l&apos;extreme (nombre de codes defaut x coefficient)
          ou au contraire tellement complexes qu&apos;elles deviennent
          opaques. Le score AutoDiag EU a ete concu pour etre a la fois
          robuste, comprehensible et verifiable. Voici comment il
          fonctionne.
        </p>

        <h2>Principe de base : 100 points au depart</h2>
        <p>
          Une voiture parfaitement saine a 100 points. Elle n&apos;en a
          aucun a gagner, elle peut seulement en perdre. Chaque scan calcule
          le total des penalites issues des trois sources (OBD2, son,
          vision) et le retranche de 100. Cette approche addition inverse
          a l&apos;avantage d&apos;etre intuitive : plus le score est eleve,
          mieux ca va.
        </p>

        <h2>Source 1 : OBD2</h2>
        <p>
          Un code defaut retire entre 5 et 25 points selon sa gravite. Un
          code pending qui n&apos;est pas encore confirme retire moitie
          moins qu&apos;un code confirme. Un code historique (DTC efface
          mais trace) retire encore moins. Les codes sont classes en
          quatre niveaux :
        </p>
        <p>
          Critique (retire 20 a 25 points) : ratees d&apos;allumage
          multiples, temperature moteur hors plage, pression huile basse.
          Eleve (retire 12 a 18 points) : lambda fatiguee, melange riche ou
          pauvre prolonge, EGR bloquee. Moyen (retire 6 a 12 points) :
          catalyseur a la limite, capteur ABS, systeme airbag. Faible
          (retire 2 a 5 points) : defauts informatifs, voyants secondaires.
          Pour un exemple concret, voir{" "}
          <Link href="/fr/codes/p0420">le code P0420</Link> qui est classe
          moyen.
        </p>

        <h2>Source 2 : scan sonore</h2>
        <p>
          Chaque anomalie detectee par le SVM a un poids de base et une
          confiance. La penalite appliquee est : poids de base multiplie
          par confiance SVM, avec un seuil minimal de 30% en dessous duquel
          on n&apos;applique rien du tout. Un claquement moteur a 85% de
          confiance avec un poids de base de 18 retire 15 points. Un
          cliquetis a 62% avec un poids de base de 10 retire 6 points.
        </p>
        <p>
          Les 11 classes du SVM ont des poids calibres par gravite moteur :
          knock et bearing noise ont les poids les plus eleves (usure
          mecanique profonde), belt noise et tick ont des poids moyens
          (souvent des usures peripheriques), air leak et exhaust leak ont
          des poids moyens a faibles (impact sur conso et emissions mais
          pas sur la vie du moteur).
        </p>

        <h2>Source 3 : Vision IA</h2>
        <p>
          Chaque finding visuel est classe en trois niveaux. Mineur (perte
          3 a 5 points) : trace d&apos;huile seche, legere corrosion
          superficielle, pneu avec profondeur suffisante mais usure visible.
          Moyen (perte 8 a 12 points) : fuite active, corrosion active,
          plaquette sous 4 mm, pneu proche de la limite legale. Severe
          (perte 15 a 20 points) : fuite majeure, rouille perforante,
          plaquette en fin de vie, pneu au temoin d&apos;usure. Ces poids
          sont inspires des criteres de controle technique europeen et ne
          sortent pas de notre imagination.
        </p>

        <h2>Fusion et plafonnement</h2>
        <p>
          La somme brute des penalites est plafonnee a 100 pour eviter les
          scores negatifs qui ne veulent rien dire. Il y a aussi une regle
          anti-double comptage : si un code OBD2 et un scan sonore pointent
          la meme panne (par exemple un{" "}
          <Link href="/fr/codes/p0300">P0300</Link> et un misfire sonore),
          on ne compte que la penalite la plus elevee, pas les deux. Cette
          regle evite de sur-penaliser une voiture qui a un seul probleme
          reel detecte par deux sources.
        </p>

        <h2>Interpretation honnete des intervalles</h2>
        <p>
          Un score de 88 sur une voiture de 10 ans, c&apos;est excellent.
          Un score de 88 sur une voiture neuve, c&apos;est correct mais pas
          parfait. Le chiffre doit etre lu en contexte. L&apos;application
          affiche aussi le delta par rapport au score moyen des voitures du
          meme age et de la meme motorisation — ce comparatif donne une
          reference honnete. Une Clio 4 de 2016 a 82 points est dans la
          moyenne et ne doit pas vous inquieter. La meme voiture a 55
          points demande de l&apos;attention immediate.
        </p>

        <h2>La tendance compte plus que la valeur</h2>
        <p>
          Ce qui nous interesse le plus, ce n&apos;est pas le score
          d&apos;aujourd&apos;hui, c&apos;est la derivee dans le temps. Si
          votre voiture perd 15 points en deux mois, quelque chose se
          passe. Si elle reste stable a 78 depuis un an, c&apos;est un
          equilibre. Chaque scan est horodate et vous voyez la courbe.
          C&apos;est exactement le meme principe que le suivi de tension
          arterielle ou de glycemie en medecine : une mesure ponctuelle dit
          peu, une serie dit tout. Pour la methode scan sonore derriere,
          voir{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            les 11 pannes detectables par analyse sonore
          </Link>{" "}
          et{" "}
          <Link href="/fr/blog/checkup-visuel-ia-5-points-vehicule-sain">
            le checkup visuel IA en 5 points
          </Link>
          .
        </p>

        <h2>Pas une note de garage</h2>
        <p>
          Ce score n&apos;est pas un verdict de controle technique ni un
          avis de mecanicien. C&apos;est un indicateur pedagogique qui vous
          aide a comprendre l&apos;etat de votre voiture et a prendre des
          decisions informees. Quand le score baisse, vous savez ou
          regarder. Quand il remonte apres reparation, vous avez la preuve
          que l&apos;intervention a servi. C&apos;est un outil, pas un
          oracle.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

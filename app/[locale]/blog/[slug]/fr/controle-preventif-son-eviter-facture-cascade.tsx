import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleControlePreventifSon() {
  const faq: FaqItem[] = [
    {
      q: "A quel moment dois-je scanner avant le controle technique ?",
      a: "Idealement deux semaines avant la date du CT. Ca vous laisse le temps d&apos;aller chez le garagiste, commander une piece si besoin, et refaire le scan pour verifier la reparation. Plus tard, vous etes pris par le temps et force d&apos;accepter un devis en urgence.",
    },
    {
      q: "Quels pays ce protocole couvre-t-il ?",
      a: "France (CT), Royaume-Uni (MOT), Allemagne (TUV), Espagne (ITV), Portugal (IPO), Suisse (MFK). Les points de controle varient mais les pieces mecaniques fondamentales sont identiques et le scan sonore fonctionne partout.",
    },
    {
      q: "Combien coute une contre-visite en moyenne ?",
      a: "Entre 35 et 90 euros selon le pays et le centre. A cela s&apos;ajoutent les 150 a 400 euros de reparation d&apos;urgence (tarifs plus eleves quand on a 48h pour repasser). Un scan preventif a zero euro evite cette double dose.",
    },
    {
      q: "Le scan detecte-t-il les points de refus electriques ?",
      a: "Indirectement. Un eclairage defaillant n&apos;a pas de signature audio, mais une pompe d&apos;assistance de freinage en fin de vie ou un moteur de ventilateur qui force si. C&apos;est complementaire a un controle visuel rapide.",
    },
    {
      q: "Que faire si le scan detecte un probleme au dernier moment ?",
      a: "Appelez un mecanicien de confiance en urgence avec les resultats du scan. Il peut prioriser votre vehicule s&apos;il sait exactement quelle piece regarder. Sans scan, il commence par un diagnostic a l&apos;aveugle qui prend du temps et coute plus cher.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Controle preventif sonore : eviter la facture en cascade avant le CT"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Prevention"
      >
        <p>
          Le controle technique est souvent vecu comme une loterie. On
          arrive au centre, on croise les doigts, on espere passer. Si
          ca refuse, on subit la double peine : la contre-visite a
          payer et une reparation d&apos;urgence souvent plus chere que
          si on avait eu le temps de comparer. Pourtant, avec un scan
          sonore bien fait deux semaines avant, la quasi-totalite des
          mauvaises surprises disparaissent. Voici la methode complete.
        </p>

        <h2>Pourquoi deux semaines avant ?</h2>
        <p>
          Deux semaines, c&apos;est le delai optimal pour trois raisons.
          Premierement, c&apos;est assez tot pour vous laisser
          demarcher deux ou trois garagistes et comparer les devis sans
          urgence. Deuxiemement, c&apos;est assez tard pour que le
          scan soit representatif de l&apos;etat au jour du CT
          (inutile de scanner trois mois avant, de l&apos;usure peut
          apparaitre entre-temps). Troisiemement, ca laisse le temps de
          commander une piece en reference constructeur ou en aftermarket
          qualite, plutot que d&apos;accepter la premiere disponible.
        </p>

        <h2>La checklist sonore avant CT</h2>
        <p>
          Voici les cinq enregistrements que je recommande, tous en
          conditions reelles car les bruits de fatigue ne sortent pas au
          ralenti.
        </p>
        <p>
          Premier scan : trente secondes en roulant a 80 km/h sur route
          plate. Objectif : detecter roulements, pneus en dents de scie,
          sifflements aerodynamiques. Deuxieme scan : trente secondes
          sur une route bosselee entre 40 et 60 km/h. Objectif :
          suspensions, silentblocs, biellettes. Troisieme scan : dix
          secondes de manoeuvres en parking avec volant a fond.
          Objectif : cardans, rotules de direction, pompe hydraulique
          d&apos;assistance. Quatrieme scan : trois freinages doux
          successifs entre 60 et 30 km/h. Objectif : plaquettes,
          disques, etriers qui collent. Cinquieme scan : montee en
          regime moteur de 1000 a 4000 tr/min a l&apos;arret. Objectif :
          partie moteur, courroies, distribution, turbo.
        </p>

        <h2>Lire les resultats intelligemment</h2>
        <p>
          Le SVM habitacle donne un pourcentage de confiance pour
          chacune des 7 classes. Voici comment interpreter concretement.
          Sous 30%, ignorer : c&apos;est du bruit de fond. Entre 30 et
          55%, surveiller : refaire un scan une semaine plus tard pour
          voir si ca monte. Entre 55 et 75%, verifier : demander au
          mecanicien de regarder ce point specifique. Au-dela de 75%,
          agir maintenant : la piece est probablement deja en defaut
          significatif. Cette grille est calibree pour minimiser les
          faux positifs et maximiser la detection precoce sans creer
          d&apos;anxiete inutile.
        </p>

        <h2>Le calcul economique du scan preventif</h2>
        <p>
          Faisons les comptes. Un scan preventif coute zero euro avec
          l&apos;app AutoDiag EU. Une contre-visite en France coute 45
          euros. Une reparation d&apos;urgence est facturee en moyenne
          20 a 30% plus cher qu&apos;une reparation planifiee. Si vous
          evitez une contre-visite et faites votre reparation
          tranquillement, vous economisez environ 100 a 150 euros par
          cycle CT. Sur la duree de vie d&apos;une voiture (dix CT en
          moyenne), c&apos;est 1 000 a 1 500 euros non depenses. Juste
          en prevention.
        </p>

        <h2>Les pays et leurs specificites</h2>
        <p>
          En France, le CT verifie 133 points dont suspension, freinage,
          direction, emissions. En Allemagne, le TUV est plus stricte
          sur la corrosion et le chassis. Au Royaume-Uni, le MOT est
          particulierement attentif aux emissions et a l&apos;eclairage.
          En Espagne et au Portugal, l&apos;ITV et l&apos;IPO suivent
          les normes europeennes avec un focus sur les emissions. Le
          scan sonore est utile dans les cinq cas car les pieces
          mecaniques sont universelles. Seule l&apos;ampleur des points
          electriques et d&apos;emissions complementaires varie.
        </p>

        <h2>Le cas concret d&apos;un scan qui a sauve un CT</h2>
        <p>
          Laissez-moi vous raconter un exemple typique. Un utilisateur
          beta passe son scan dix jours avant le CT. Classe
          &quot;direction&quot; a 68%. Il consulte son mecanicien
          habituel, qui confirme qu&apos;une rotule de direction a du
          jeu. Reparation : 130 euros, piece commandee et installee le
          lendemain. Le jour du CT, tout passe, zero point. Sans le
          scan, deux scenarios possibles : soit le CT detecte la rotule
          et il repart en urgence pour reparer dans la semaine
          (facture 180 euros + contre-visite 45 euros), soit le CT ne
          la detecte pas et la rotule casse trois mois plus tard en
          rond-point (accident evite de justesse, franchise et
          reparation complete du train avant, 1 500 euros et plus).
          Trente euros d&apos;installation d&apos;app, cinquante euros
          economises au meilleur cas, mille euros evites au pire.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Cette strategie de prevention est detaillee aussi dans notre
          article{" "}
          <Link href="/fr/blog/usure-invisible-composant-fatigue-endommage-autre">
            sur l&apos;usure invisible et l&apos;effet cascade
          </Link>
          . Pour le detail des bruits cibles, voyez les{" "}
          <Link href="/fr/blog/7-bruits-habitacle-jamais-ignorer">
            7 bruits a ne jamais ignorer
          </Link>
          . Pour une approche moteur complementaire, lisez{" "}
          <Link href="/fr/blog/preparer-controle-technique-2026">
            preparer son controle technique 2026
          </Link>
          . Et si un code{" "}
          <Link href="/fr/codes/p0300">P0300</Link>{" "}
          apparait pendant votre preparation, traitez-le en priorite :
          les ratees d&apos;allumage sont un motif de refus immediat
          dans la plupart des pays europeens.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

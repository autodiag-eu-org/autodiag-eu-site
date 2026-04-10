import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleUsurePrematureePneus() {
  const faq: FaqItem[] = [
    {
      q: "Comment savoir si mes pneus s&apos;usent de maniere anormale ?",
      a: "Regardez le profil de la bande de roulement : si le centre est plus use que les bords, c&apos;est de la surgonflage. Si les epaules sont plus usees que le centre, c&apos;est un sous-gonflage chronique. Si l&apos;interieur est lisse et l&apos;exterieur intact, c&apos;est un probleme de parallelisme ou de carrossage. La Vision IA reconnait ces cinq motifs en une photo.",
    },
    {
      q: "Un pneu qui s&apos;use d&apos;un seul cote est-il toujours un probleme mecanique ?",
      a: "Presque toujours. Une usure unilaterale signifie que l&apos;angle de contact n&apos;est pas droit : carrossage negatif excessif, silent-blocs de triangle fatigues, rotule de direction avec du jeu, ou ressort affaisse. Un reglage geometrique regle le symptome, mais la cause mecanique doit etre traitee en amont.",
    },
    {
      q: "Qu&apos;est-ce que le cupping et comment le reconnaitre ?",
      a: "Le cupping, ou usure en creux, donne un aspect de vaguelettes sur la bande de roulement. On le sent aussi a la conduite : bourdonnement regulier qui monte avec la vitesse. C&apos;est la signature d&apos;un amortisseur fatigue qui laisse la roue rebondir a chaque bosse.",
    },
    {
      q: "A quelle frequence faut-il verifier l&apos;usure des pneus ?",
      a: "Une photo par pneu tous les deux mois suffit pour tracer l&apos;evolution. Dix secondes par roue, quarante secondes au total. L&apos;IA compare les cliches successifs et vous alerte des que le profil change de nature.",
    },
    {
      q: "Un pneu use a 1.8 mm doit-il etre change immediatement ?",
      a: "La limite legale en Europe est 1.6 mm, mais les performances en freinage sur mouille chutent des 3 mm. A 1.8 mm, vous etes dans la zone rouge : commandez vos pneus la semaine suivante. L&apos;IA mesure la profondeur residuelle via la photo avec une tolerance de plus ou moins 0.3 mm.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Usure prematuree des pneus : l&apos;IA voit ce que vous ne remarquez pas"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic visuel"
      >
        <p>
          Un pneu n&apos;est pas juste une enveloppe noire. C&apos;est un
          carnet de bord qui raconte, cliche apres cliche, ce que votre
          voiture vit vraiment. Chaque motif d&apos;usure est la signature
          d&apos;un probleme mecanique precis, et la plupart du temps, le
          proprietaire ne voit rien jusqu&apos;au jour ou le controle
          technique refuse le vehicule. La Vision IA d&apos;AutoDiag EU lit
          ce carnet a votre place. Vous prenez une photo de la bande de
          roulement, elle identifie le motif, elle vous dit d&apos;ou il
          vient.
        </p>

        <h2>Cinq motifs, cinq causes</h2>
        <p>
          Dans quatre-vingt-dix pour cent des cas d&apos;usure anormale, on
          retombe sur cinq familles. Usure centrale : le pneu est surgonfle,
          le contact se concentre au milieu et epargne les epaules. Usure des
          epaules : le pneu est sous-gonfle en permanence, les flancs
          s&apos;ecrasent et deforment le contact. Usure interne marquee :
          carrossage negatif excessif ou parallelisme en pince ferme, souvent
          apres un choc de trottoir. Usure externe : parallelisme en pince
          ouverte ou rotule de triangle fatiguee. Cupping en creux : un
          amortisseur fatigue qui laisse la roue rebondir a chaque
          imperfection de la chaussee.
        </p>

        <h2>Ce que la photo capte que l&apos;oeil ignore</h2>
        <p>
          Prenez une photo perpendiculaire a la bande, avec un bon eclairage.
          L&apos;IA fait trois choses que vous ne faites pas. Premiere chose,
          elle mesure la profondeur residuelle dans chaque sillon avec une
          precision de trois dixiemes de millimetre, alors que votre oeil
          estime vaguement en regardant les temoins. Deuxieme chose, elle
          compare la profondeur interne et externe — si vous avez 3.2 mm a
          droite et 1.4 mm a gauche, l&apos;ecart est enorme et invisible au
          premier regard. Troisieme chose, elle detecte les debuts de cupping
          bien avant que vous n&apos;entendiez le bourdonnement en cabine.
        </p>

        <h2>L&apos;histoire du carrossage mal regle</h2>
        <p>
          Prenons un cas concret : une Peugeot 308 qui a tape un trottoir il
          y a quatre mois. Le conducteur n&apos;a pas pense a faire controler
          la geometrie parce que la voiture roulait droit. Quatre mois plus
          tard, le pneu avant gauche est lisse sur l&apos;interieur et
          presque neuf sur l&apos;exterieur. La photo de Vision IA detecte un
          ecart de 2.4 mm entre les deux bords, estime le carrossage a moins
          de deux degres et alerte immediatement. Cout : 80 euros de
          geometrie et un pneu avant a 120 euros. Si le conducteur avait
          attendu six mois de plus, c&apos;etaient deux pneus et
          potentiellement une rotule. L&apos;anticipation vaut toujours
          l&apos;acte.
        </p>

        <h2>Le lien avec la suspension</h2>
        <p>
          Le cupping merite sa section. C&apos;est l&apos;aveu que la
          suspension n&apos;amortit plus correctement : la roue rebondit, le
          pneu frotte irregulierement, le motif en vaguelettes apparait. Si
          vous voyez du cupping, le probleme n&apos;est pas le pneu, c&apos;est
          l&apos;amortisseur. Changer le pneu sans toucher a la suspension,
          c&apos;est garantir que le nouveau pneu reproduira le meme motif
          en six mois. La Vision IA fait le lien automatiquement et vous
          redirige vers la bonne intervention. Vous pouvez aussi croiser avec
          une ecoute de{" "}
          <Link href="/fr/blog/bruit-suspension-ia-identifie-amortisseur">
            bruit de suspension
          </Link>{" "}
          pour confirmer le diagnostic avant d&apos;aller au garage.
        </p>

        <h2>Le timing qui change tout</h2>
        <p>
          Un pneu se joue a deux semaines pres au moment du{" "}
          <Link href="/fr/blog/preparer-controle-technique">
            controle technique
          </Link>
          . Si vous passez le CT avec des pneus a 1.8 mm, vous avez une contre
          visite quasi garantie des qu&apos;une inegalite droite-gauche
          depasse quelques dixiemes. Avec la Vision IA, vous pouvez anticiper
          deux mois a l&apos;avance, commander le train de pneus quand vous
          trouvez les meilleurs prix, et arriver au CT serein. Pour un train
          complet de pneus milieu de gamme en 205/55 R16, on parle de 380 a
          520 euros selon la marque. Se precipiter la veille du CT, c&apos;est
          payer 15% a 25% de plus.
        </p>

        <h2>Ce que l&apos;IA ne peut pas voir</h2>
        <p>
          La photo ne detecte pas les hernies internes, les fils de carcasse
          ronges par l&apos;humidite, ni les craquelures fines du flanc. Pour
          ca, une inspection tactile reste obligatoire une fois par an, de
          preference au moment du changement de saison. L&apos;IA est tres
          bonne sur la bande de roulement, la surface qui touche le sol, mais
          elle ne voit pas l&apos;interieur du pneu. Considerez la Vision IA
          comme une surveillance continue a haute frequence, et la visite
          annuelle chez le pneumaticien comme un controle en profondeur.
        </p>

        <h2>La routine recommandee</h2>
        <p>
          Tous les deux mois, prenez quatre photos : une par pneu,
          perpendiculaire a la bande, au meme endroit a chaque fois (repere
          sur la valve par exemple). L&apos;historique s&apos;affiche en
          graphique dans l&apos;application et vous voyez la courbe de
          profondeur residuelle descendre. Quand une roue prend du retard sur
          les autres, l&apos;alerte tombe. Vous intervenez avant que le
          probleme se propage. C&apos;est la meme philosophie que pour le{" "}
          <Link href="/fr/codes/p0300">code P0300 de ratees d&apos;allumage</Link>
          {" "}: detecter tot pour payer peu.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

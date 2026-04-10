import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePreparerCT2026() {
  const faq: FaqItem[] = [
    {
      q: "Qu'est-ce qui change au controle technique en 2026 ?",
      a: "En 2026, le CT francais reste centre sur 133 points de controle repartis en 9 fonctions, mais les mesures d'emissions sont durcies pour les diesels Euro 5 et Euro 6. La verification du niveau de NOx devient plus stricte, et les vehicules avec FAP endommage ont moins de marge. Le controle visuel de l'eclairage LED et matriciel est egalement renforce.",
    },
    {
      q: "Combien coute un controle technique en France en 2026 ?",
      a: "Le prix moyen d'un CT en France en 2026 se situe entre 75 et 95 euros selon la region et le centre. Une contre-visite coute entre 20 et 35 euros. Les centres bon marche pratiquent autour de 65 euros, tandis que les agglomerations parisiennes peuvent monter a 110 euros.",
    },
    {
      q: "Puis-je passer le CT avec un voyant moteur allume ?",
      a: "Oui, mais vous risquez une contre-visite si le voyant est lie aux emissions ou au systeme OBD. Depuis 2019, le controleur lit l'OBD de votre vehicule : si des codes defaut lies a la depollution sont actifs, c'est un motif de defaillance majeure. Faites un pre-diagnostic OBD2 avant le CT pour eviter les mauvaises surprises.",
    },
    {
      q: "Combien de temps a l'avance faut-il preparer son CT ?",
      a: "Idealement, commencez a preparer votre CT 3 a 4 semaines a l'avance. Cela laisse le temps de corriger les petits defauts (eclairage, essuie-glaces, pneus) et, surtout, de resoudre d'eventuels codes defaut lies aux emissions qui necessitent plusieurs cycles de conduite pour que les moniteurs OBD redeviennent prets.",
    },
    {
      q: "Quels sont les motifs de contre-visite les plus frequents ?",
      a: "Les quatre motifs qui reviennent le plus sont : l'eclairage (ampoules grillees, feux mal regles), le freinage (disques uses, plaquettes, ecarts de freinage gauche/droite), les emissions (codes defaut moteur actifs, fumee diesel) et les pneus (usure inegale, profondeur insuffisante). A eux quatre, ils representent pres de 70% des contre-visites en France.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
      locale="fr"
        title="Preparer son controle technique 2026 : guide complet"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={10}
        category="Controle technique"
      >
        <p>
          Le controle technique, c&apos;est le moment de verite pour votre
          voiture. En 2026, les normes se sont encore durcies, surtout pour
          les moteurs diesel et les systemes electroniques. Un CT reussi du
          premier coup, c&apos;est 75 euros. Un CT avec contre-visite,
          c&apos;est facilement 200 a 400 euros supplementaires entre les
          reparations et la nouvelle visite. Voici comment preparer votre
          voiture pour passer du premier coup, sans stress et sans facture
          cachee.
        </p>

        <h2>Ce qui change en 2026</h2>
        <p>
          Le CT francais s&apos;appuie toujours sur les memes 133 points de
          controle repartis en 9 fonctions principales : identification,
          freinage, direction, visibilite, eclairage, liaisons au sol,
          structure/carrosserie, equipements, nuisances. Ce qui evolue,
          c&apos;est la severite des mesures, notamment sur la depollution.
          Depuis mi-2019, le controleur lit directement le port OBD de
          votre vehicule et detecte les codes defaut actifs. En 2026, cette
          verification est encore plus fine : un code P0420 (efficacite
          catalyseur), un P0401 (debit EGR insuffisant) ou un P2002 (FAP
          sature) sont des motifs quasi automatiques de contre-visite.
        </p>

        <h2>Le pre-diagnostic OBD2 : votre meilleure assurance</h2>
        <p>
          La premiere chose a faire, trois semaines avant votre rendez-vous,
          c&apos;est un scan OBD2 complet. Avec un dongle ELM327 Bluetooth
          et AutoDiag EU, vous voyez immediatement si votre voiture a des
          codes defaut actifs. Vous verifiez aussi l&apos;etat des moniteurs
          OBD, qui doivent tous etre &laquo; prets &raquo; le jour du
          controle. Si vous avez efface des codes recemment ou debranche la
          batterie, certains moniteurs peuvent etre &laquo; non prets &raquo;,
          ce qui est refuse par le CT.
        </p>
        <p>
          Les codes a surveiller en priorite sont :{" "}
          <Link href="/fr/codes/p0420">P0420</Link>,{" "}
          <Link href="/fr/codes/p0430">P0430</Link>,{" "}
          <Link href="/fr/codes/p0401">P0401</Link>,{" "}
          <Link href="/fr/codes/p0402">P0402</Link>, et{" "}
          <Link href="/fr/codes/p0171">P0171</Link>. Ces cinq codes
          representent a eux seuls la majorite des contre-visites liees
          aux emissions. Detectes tot, ils vous laissent le temps de
          reparer sans paniquer.
        </p>

        <h2>Checklist 3 semaines avant</h2>
        <p>
          A trois semaines du CT, vous faites un tour complet du vehicule
          pour reperer tous les petits defauts visibles. Commencez par{" "}
          <strong>l&apos;eclairage</strong> : feux de croisement, feux de
          route, feux de position, clignotants avant et arriere, feux de
          stop (demandez a quelqu&apos;un d&apos;appuyer pendant que vous
          regardez), feux de recul, feux de plaque, feux de brouillard si
          presents. Une ampoule grillee, c&apos;est automatiquement une
          contre-visite. Remplacez-les maintenant, pas la veille.
        </p>
        <p>
          Ensuite, <strong>les essuie-glaces</strong>. S&apos;ils laissent
          des traces ou sifflent, changez les lames. Verifiez que le
          lave-glace fonctionne avant et arriere. <strong>Les pneus</strong> :
          profondeur minimum 1,6 mm dans les rainures principales, pression
          conforme aux recommandations du constructeur, usure reguliere. Si
          un pneu s&apos;use plus d&apos;un cote, c&apos;est un probleme de
          parallelisme ou de suspension a corriger avant le CT.
        </p>

        <h2>Checklist 1 semaine avant</h2>
        <p>
          A une semaine du CT, vous verifiez les elements qui demandent
          plus d&apos;attention. <strong>Le freinage</strong> : faites un
          test a 50 km/h sur route degagee, la voiture ne doit pas tirer
          d&apos;un cote. Verifiez que la pedale n&apos;est pas spongieuse
          et que le frein a main tient sur une pente. Si vos plaquettes
          sifflent ou grincent, faites-les changer.{" "}
          <strong>La direction</strong> : pas de jeu excessif dans le
          volant, pas de bruit de cardan dans les virages serres a basse
          vitesse.
        </p>
        <p>
          <strong>L&apos;habitacle</strong> : ceintures de securite qui
          s&apos;enroulent correctement, klaxon qui fonctionne, retroviseurs
          en bon etat, pare-brise sans impact dans le champ de vision du
          conducteur (un impact plus grand que 30 mm dans la zone critique
          est un motif de contre-visite). Les airbags ne doivent pas avoir
          de voyant allume.
        </p>
        <p>
          <strong>Les emissions</strong> : si vous conduisez un diesel,
          roulez sur autoroute pendant 30 a 45 minutes pour bruler les
          suies accumulees dans le FAP. C&apos;est particulierement
          important si vous faites surtout des petits trajets urbains. Cela
          regenere le filtre et ameliore vos chances sur la mesure
          d&apos;opacite.
        </p>

        <h2>La veille et le jour J</h2>
        <p>
          La veille du CT, nettoyez les plaques d&apos;immatriculation et
          assurez-vous que le numero de serie (frappe a froid) est lisible.
          Videz le coffre et l&apos;habitacle des objets lourds qui
          pourraient gener les controles. Emportez votre carte grise et
          votre attestation d&apos;assurance, meme si l&apos;assurance
          n&apos;est pas verifiee au CT : c&apos;est plus simple pour le
          centre de vous identifier.
        </p>
        <p>
          Le jour meme, demarrez le moteur 10 a 15 minutes avant d&apos;y
          aller pour qu&apos;il soit chaud. Un moteur froid, c&apos;est
          plus d&apos;emissions et plus de risques sur la mesure de
          depollution. Allez directement au centre sans faire de detour, et
          si possible evitez les petits trajets dans les 24 heures
          precedentes.
        </p>

        <h2>Les motifs de contre-visite les plus frequents</h2>
        <ul>
          <li>
            <strong>Eclairage</strong> : ampoules grillees, feux mal regles
            ou eblouissants, ampoules de mauvaise couleur.
          </li>
          <li>
            <strong>Freinage</strong> : disques trop uses (epaisseur
            minimale depassee), ecarts de freinage gauche/droite superieurs
            a 30%, frein a main inefficace.
          </li>
          <li>
            <strong>Emissions</strong> : codes defaut actifs (P0420, P0401,
            P2002), opacite diesel hors norme, sonde lambda defaillante.
          </li>
          <li>
            <strong>Liaisons au sol</strong> : rotules fatiguees, silent
            blocs uses, amortisseurs qui fuient.
          </li>
          <li>
            <strong>Visibilite</strong> : essuie-glaces inefficaces, impact
            pare-brise dans la zone critique, retroviseur casse.
          </li>
        </ul>

        <h2>Le pre-CT AutoDiag EU</h2>
        <p>
          L&apos;app AutoDiag EU propose un mode Pre-controle technique qui
          simule les verifications OBD du centre CT. Il vous indique si vos
          moniteurs sont prets, liste les codes defaut actifs et en attente,
          et vous donne un verdict en vert, orange ou rouge. Vous savez en
          deux minutes si votre voiture est prete a passer le controle ou
          si vous avez encore du travail. Ca marche en France, Allemagne,
          Suisse, Espagne et Portugal, avec les specificites de chaque pays.
        </p>

        <h2>En resume</h2>
        <p>
          Un CT reussi, ca se prepare. Trois semaines avant pour les
          defauts visibles et le pre-diagnostic OBD. Une semaine avant pour
          le freinage et les emissions. La veille pour les details. Le jour
          J avec un moteur chaud. Avec cette methode et l&apos;app
          AutoDiag EU pour le pre-diagnostic, vous mettez toutes les
          chances de votre cote et vous evitez les contre-visites qui
          coutent souvent plus cher que le CT lui-meme.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

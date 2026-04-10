import { ArticleLayout } from "../_shared/ArticleLayout";

export function ArticlePreparerControleTechnique() {
  return (
    <ArticleLayout
      title="Preparer son controle technique : la checklist complete"
      date="2026-03-10"
      author="Reda Kaouani"
      readingTime={9}
      category="Guide pratique"
    >
      <p>
        Le controle technique, c&apos;est un peu le jour de l&apos;examen pour
        votre voiture. En France, en Allemagne ou en Suisse, les regles ne
        sont pas exactement les memes, mais l&apos;idee est la meme : verifier
        que votre vehicule est en bon etat et qu&apos;il ne represente pas un
        danger sur la route. Et comme pour un examen, mieux vaut se preparer.
        On va tout passer en revue ensemble, point par point, comme si on
        faisait le tour de votre voiture dans le garage.
      </p>

      <h2>Le controle technique par pays</h2>
      <p>
        Avant de commencer la checklist, un petit rappel sur les differences
        entre pays, parce que ca peut changer beaucoup de choses :
      </p>

      <h3>France — Controle technique (CT)</h3>
      <p>
        Obligatoire tous les 2 ans apres les 4 premieres annees du vehicule.
        Le controle dure environ 45 minutes et couvre 133 points de controle
        repartis en 10 categories. Depuis mai 2018, c&apos;est devenu plus
        strict avec l&apos;ajout de nombreux points sur les emissions et la
        pollution. Un vehicule peut recevoir une
        &laquo; defaillance critique &raquo; qui interdit de rouler
        immediatement. Le cout moyen est de 78 euros, mais ca varie de 50 a
        100 euros selon les centres et les regions. Si votre voiture echoue,
        vous avez 2 mois pour faire les reparations et passer la
        contre-visite (environ 15 a 30 euros).
      </p>

      <h3>Allemagne — TUV (Hauptuntersuchung / HU)</h3>
      <p>
        Les Allemands sont reputes pour leur rigueur, et le TUV ne fait pas
        exception. Controle tous les 2 ans egalement, mais les criteres sont
        souvent plus stricts qu&apos;en France, surtout sur l&apos;usure des
        composants. Le controle inclut systematiquement une mesure des
        emissions (AU — Abgasuntersuchung). Le cout est d&apos;environ 100 a
        150 euros selon le vehicule et l&apos;organisme (TUV, DEKRA, GTU ou
        KUS). Un point important : en Allemagne, si votre TUV est expire de
        plus de 2 mois, vous risquez une amende. Et si un policier vous
        controle avec un TUV expire, ca peut aller jusqu&apos;a 60 euros
        d&apos;amende et un point au registre de Flensburg.
      </p>

      <h3>Suisse — MFK (Motorfahrzeugkontrolle)</h3>
      <p>
        Le controle suisse a ses particularites. Le premier controle a lieu
        apres 4 ans, puis le deuxieme apres 3 ans, et ensuite tous les 2
        ans. Il est effectue par les services cantonaux des automobiles, pas
        par des centres prives. Le cout varie de 40 a 80 CHF selon les
        cantons. La Suisse est particulierement attentive aux emissions, aux
        freins et a l&apos;etat general du vehicule. Un avantage : le
        controleur vous explique souvent en detail ce qui ne va pas, c&apos;est
        plus pedagogique qu&apos;en France.
      </p>

      <h2>La checklist complete — point par point</h2>

      <h3>1. L&apos;eclairage — la premiere chose verifiee</h3>
      <p>
        C&apos;est souvent le premier point controle et l&apos;un des motifs
        les plus frequents de refus. Faites le tour de votre voiture avec
        quelqu&apos;un qui appuie sur les commandes pendant que vous verifiez
        de l&apos;exterieur :
      </p>
      <ul>
        <li>Feux de croisement (les deux fonctionnent ?)</li>
        <li>Feux de route</li>
        <li>Feux de position avant et arriere</li>
        <li>Clignotants avant, arriere, et lateraux (si equipe)</li>
        <li>Feux stop (les trois, y compris le troisieme feu stop)</li>
        <li>Feux de recul</li>
        <li>Feux de brouillard arriere (obligatoire en France)</li>
        <li>Eclairage de plaque d&apos;immatriculation</li>
        <li>Reglage de la hauteur des phares (le correcteur doit fonctionner)</li>
      </ul>
      <p>
        Astuce : une ampoule H7 coute entre 5 et 15 euros et se change en 10
        minutes sur la plupart des voitures. C&apos;est la reparation la moins
        chere pour eviter un echec. Si vos phares sont jaunes et opaques,
        un kit de renovation (20 euros) peut faire la difference.
      </p>

      <h3>2. Le freinage — la securite avant tout</h3>
      <p>
        Le systeme de freinage est controle en profondeur. Voici ce que le
        controleur va verifier et ce que vous pouvez checker vous-meme :
      </p>
      <ul>
        <li>
          Epaisseur des plaquettes (minimum legal 2 mm, mais remplacez des
          4 mm pour etre tranquille)
        </li>
        <li>
          Etat des disques (pas de sillon profond, pas de fissure, epaisseur
          minimale respectee)
        </li>
        <li>Flexibles de frein (pas de fissure, pas de fuite)</li>
        <li>
          Niveau de liquide de frein (entre min et max, pas de couleur noire)
        </li>
        <li>Frein a main (doit immobiliser le vehicule sur la pente du banc)</li>
        <li>
          Equilibrage gauche/droite (les deux roues d&apos;un meme essieu
          doivent freiner de facon egale, ecart max 30% environ)
        </li>
      </ul>
      <p>
        Le cout d&apos;un changement de plaquettes : 80 a 200 euros par
        essieu en garage, 20 a 60 euros en pieces si vous le faites
        vous-meme. Les disques : 100 a 300 euros par essieu en garage.
      </p>

      <h3>3. Les emissions — le point qui fait echouer</h3>
      <p>
        Depuis le durcissement des normes, c&apos;est LE point critique,
        surtout pour les diesel. Le controleur va mesurer les emissions de
        votre pot d&apos;echappement :
      </p>
      <ul>
        <li>
          Diesel : opacite des fumees. Si votre filtre a particules (FAP) est
          encrasse, ca peut depasser les seuils. Faites une regeneration FAP
          avant le CT : roulez 20 minutes a 3 000 tours/min sur autoroute.
        </li>
        <li>
          Essence : mesure du CO, CO2, HC et lambda. Un catalyseur fatigue ou
          une sonde lambda defaillante peut vous faire echouer.
        </li>
        <li>
          Fuite d&apos;echappement : verifiez visuellement sous la voiture.
          Toute fuite avant le catalyseur est un motif de refus.
        </li>
      </ul>
      <p>
        C&apos;est ici que l&apos;OBD2 devient votre meilleur ami. Un code
        P0420 (catalyseur) ou P0401 (vanne EGR) avant le CT, ca veut dire
        &laquo; reparation obligatoire avant le passage &raquo;. AutoDiag EU
        vous le dit clairement.
      </p>

      <h3>4. Les pneus — souvent sous-estimes</h3>
      <ul>
        <li>
          Profondeur de sculpture : minimum legal 1,6 mm, mais a 3 mm votre
          distance de freinage augmente deja de 20% sur sol mouille
        </li>
        <li>Pas de hernie, pas de coupure visible sur les flancs</li>
        <li>Les 4 pneus du meme type (pas de melange radial/diagonal)</li>
        <li>Pneus de meme dimension sur un meme essieu</li>
        <li>
          Pression correcte (verifiez a froid, les pressions sont indiquees
          sur le montant de porte conducteur)
        </li>
      </ul>

      <h3>5. La direction et la suspension</h3>
      <ul>
        <li>Pas de jeu excessif dans la direction</li>
        <li>
          Rotules et biellettes de direction en bon etat (pas de bruit de
          claquement en tournant le volant)
        </li>
        <li>
          Amortisseurs fonctionnels (faites le test : appuyez fort sur un
          coin de la voiture et relachez — si elle rebondit plus d&apos;une
          fois, les amortisseurs sont fatigues)
        </li>
        <li>Soufflets de direction assistes intacts</li>
        <li>Pas de fuite de liquide de direction</li>
      </ul>

      <h3>6. La visibilite</h3>
      <ul>
        <li>Pare-brise sans impact dans le champ de vision du conducteur</li>
        <li>Essuie-glaces en bon etat (pas de traces, bon contact)</li>
        <li>Lave-glace fonctionnel (reservoir rempli)</li>
        <li>Retroviseurs intacts et bien fixes</li>
      </ul>

      <h3>7. La structure et la carrosserie</h3>
      <ul>
        <li>Pas de corrosion perforante (rouille qui traverse la tole)</li>
        <li>Points d&apos;ancrage des ceintures en bon etat</li>
        <li>Plancher sans trou</li>
        <li>Fixation correcte du pare-chocs</li>
      </ul>

      <h3>8. Les elements de securite</h3>
      <ul>
        <li>Toutes les ceintures de securite fonctionnelles (elles se bloquent, elles s&apos;enroulent)</li>
        <li>Pas de voyant airbag allume</li>
        <li>Klaxon fonctionnel</li>
        <li>Triangle de signalisation et gilet jaune presents (obligatoires en France)</li>
      </ul>

      <h2>Comment l&apos;OBD2 vous aide a preparer le CT</h2>
      <p>
        Beaucoup de gens ne le savent pas, mais le controleur technique
        branche lui aussi un outil OBD2 sur votre voiture pendant le controle.
        Il verifie deux choses essentielles :
      </p>
      <ul>
        <li>
          <strong>Les codes defaut actifs</strong> : certains codes sont
          eliminatoires. Un code lié aux emissions (P04xx), au systeme
          d&apos;airbag (B0xxx), ou a l&apos;ABS (C0xxx) peut entrainer un
          refus.
        </li>
        <li>
          <strong>Les moniteurs de readiness</strong> : le calculateur doit
          avoir termine ses auto-tests. Si vous venez d&apos;effacer les
          codes, les moniteurs ne sont &laquo; pas prets &raquo; et le
          controleur le voit. Il faut rouler environ 50 a 100 km en conditions
          variees (ville + route + autoroute) pour que tous les moniteurs
          passent au vert.
        </li>
      </ul>
      <p>
        Avec AutoDiag EU, vous pouvez verifier tout ca avant d&apos;aller au
        centre de controle. L&apos;app vous montre les codes actifs, les
        moniteurs de readiness, et vous dit clairement si votre voiture est
        prete ou pas. Pas de mauvaise surprise le jour J.
      </p>

      <h2>Le calendrier ideal de preparation</h2>
      <p>
        Idealement, commencez a preparer votre CT 3 a 4 semaines avant la
        date. Ca vous laisse le temps de :
      </p>
      <ul>
        <li>Semaine 1 : faire un scan OBD2 complet avec AutoDiag EU, identifier les problemes</li>
        <li>Semaine 2 : commander les pieces si necessaire, faire les petites reparations (ampoules, essuie-glaces, lave-glace)</li>
        <li>Semaine 3 : faire les reparations plus importantes (plaquettes, pneus, etc.)</li>
        <li>Semaine 4 : re-scanner pour verifier que tout est OK, rouler 100 km pour les moniteurs de readiness</li>
      </ul>

      <h2>Les couts a prevoir</h2>
      <p>
        En moyenne, les Francais depensent entre 200 et 400 euros pour
        preparer leur voiture au CT (reparations incluses). Les postes les
        plus courants :
      </p>
      <ul>
        <li>Ampoules : 5 a 30 euros</li>
        <li>Essuie-glaces : 15 a 40 euros</li>
        <li>Plaquettes de frein : 20 a 60 euros (pieces seules)</li>
        <li>Pneus : 50 a 150 euros par pneu</li>
        <li>Liquide de frein (purge) : 60 a 100 euros en garage</li>
        <li>Regeneration FAP : gratuit si vous roulez sur autoroute, 150 a 300 euros en garage si trop encrasse</li>
      </ul>
      <p>
        Le diagnostic OBD2 avec AutoDiag EU ? Gratuit. Et ca peut vous eviter
        une contre-visite a 30 euros (plus le temps perdu et le stress).
      </p>

      <h2>Les 5 motifs de refus les plus frequents</h2>
      <p>Voici ce qui fait echouer le plus de voitures :</p>
      <ul>
        <li><strong>Eclairage defaillant</strong> — 22% des refus. C&apos;est bete, c&apos;est facile a reparer, et pourtant c&apos;est la premiere cause.</li>
        <li><strong>Emissions polluantes excessives</strong> — 18% des refus. Surtout les diesel anciens.</li>
        <li><strong>Freinage insuffisant</strong> — 15% des refus. Plaquettes usees ou desequilibre.</li>
        <li><strong>Visibilite</strong> — 12% des refus. Pare-brise fissure, essuie-glaces morts.</li>
        <li><strong>Suspension / direction</strong> — 10% des refus. Jeu dans la direction, amortisseurs fatigues.</li>
      </ul>

      <h2>En resume</h2>
      <p>
        Le controle technique n&apos;est pas un piege — c&apos;est une
        verification de securite. En vous preparant correctement, vous
        maximisez vos chances de passer du premier coup et vous evitez les
        mauvaises surprises (et les depenses inutiles). Un scan OBD2 avant le
        CT, c&apos;est comme reviser avant un examen : ca ne garantit pas le
        resultat, mais ca met toutes les chances de votre cote.
      </p>
    </ArticleLayout>
  );
}

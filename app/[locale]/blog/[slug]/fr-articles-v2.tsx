import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

interface FaqItem {
  q: string;
  a: string;
}

function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ArticleLayoutFR({
  children,
  title,
  date,
  author,
  readingTime,
  category,
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/fr" },
          { label: "Blog", href: "/fr/blog" },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href="/fr/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; Retour au blog
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>Par {author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} min de lecture</span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">
          Diagnostiquez votre voiture en 2 minutes
        </h3>
        <p className="mb-6 text-secondary">
          Telechargez AutoDiag EU et lisez vos codes defaut, ecoutez votre
          moteur avec l&apos;IA, et comprenez ce qui se passe sous le capot.
          Gratuit, sans carte bancaire.
        </p>
        <Link
          href="/fr#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Telecharger l&apos;app gratuitement
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Article — Voyant moteur allume : que faire ?
   ================================================================ */

export function ArticleVoyantMoteurQueFaire() {
  const faq: FaqItem[] = [
    {
      q: "Mon voyant moteur est allume, est-ce que je peux rouler ?",
      a: "Si le voyant est orange fixe, vous pouvez rouler mais faites un diagnostic rapidement. Si le voyant clignote, roulez doucement jusqu'a un garage : cela signale generalement des rates d'allumage qui peuvent detruire le catalyseur en quelques dizaines de kilometres. Si un voyant rouge s'allume (temperature, pression d'huile), arretez-vous immediatement.",
    },
    {
      q: "Combien coute la lecture d'un code defaut en garage ?",
      a: "En France, la lecture d'un code defaut en garage coute entre 30 et 80 euros selon l'atelier. Chez les concessions, la facture peut monter a 100 euros. Avec un dongle ELM327 (a partir de 15 euros) et l'application AutoDiag EU, vous lisez vos codes gratuitement, autant de fois que vous voulez.",
    },
    {
      q: "Effacer le code fait-il disparaitre le probleme ?",
      a: "Non. Effacer un code defaut eteint le voyant temporairement, mais si la cause n'est pas corrigee, le code reviendra apres 50 a 200 kilometres. Pire : juste avant un controle technique, effacer les codes met le calculateur en etat 'moniteurs non prets', ce que le controleur detecte immediatement.",
    },
    {
      q: "Le voyant moteur peut-il s'eteindre tout seul ?",
      a: "Oui, dans certains cas. Si le probleme etait passager (par exemple un bouchon de reservoir mal visse provoquant un code P0442), le voyant s'eteint apres quelques cycles de demarrage-arret une fois le probleme resolu. Mais ne comptez pas la-dessus : la majorite des codes necessitent une intervention.",
    },
    {
      q: "Quels sont les codes defaut les plus courants quand le voyant s'allume ?",
      a: "Les codes les plus frequents sur les voitures europeennes sont P0420 (efficacite du catalyseur), P0171 (melange trop pauvre), P0300 (rates d'allumage aleatoires), P0442 (petite fuite EVAP) et P0128 (thermostat). Ensemble, ils representent environ 60% des voyants moteur allumes.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutFR
        title="Voyant moteur allume : que faire ?"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={8}
        category="Guide pratique"
      >
        <p>
          Un petit temoin orange vient de s&apos;allumer sur votre tableau de
          bord. Il ressemble a un moteur stylise, parfois suivi d&apos;un
          point d&apos;exclamation, et vous vous demandez si vous devez vous
          arreter immediatement, appeler un depanneur, ou continuer votre
          route. Respirez : dans 90% des cas, ce voyant ne signifie pas que
          votre voiture va tomber en panne dans les cinq minutes. Mais il
          faut quand meme l&apos;ecouter. Voici exactement ce qu&apos;il faut
          faire, etape par etape.
        </p>

        <h2>1. Regardez la couleur et le comportement du voyant</h2>
        <p>
          La premiere information utile, c&apos;est l&apos;etat du voyant
          lui-meme. Un voyant moteur peut etre de trois formes : orange fixe,
          orange clignotant, ou rouge. Chacune a une signification tres
          differente, et votre reaction doit s&apos;adapter en consequence.
        </p>
        <p>
          <strong>Orange fixe :</strong> c&apos;est le cas le plus courant.
          Votre calculateur moteur a detecte une anomalie, mais elle
          n&apos;est pas critique. Vous pouvez rouler normalement, terminer
          votre trajet, rentrer chez vous. Mais dans les jours qui suivent,
          faites un diagnostic pour comprendre le probleme. Plus vous
          attendez, plus le petit souci peut devenir une grosse facture.
        </p>
        <p>
          <strong>Orange clignotant :</strong> ca devient serieux. Le voyant
          clignotant signale presque toujours des rates d&apos;allumage
          importants. A chaque rate, du carburant non brule arrive dans
          l&apos;echappement et surchauffe le catalyseur. En quelques dizaines
          de kilometres, vous pouvez litteralement faire fondre votre
          catalyseur, ce qui transforme une reparation de 80 euros (bougies)
          en facture de 1 500 euros. Roulez doucement, evitez les fortes
          accelerations, et rejoignez un garage rapidement.
        </p>
        <p>
          <strong>Voyant rouge :</strong> stop. Que ce soit la temperature
          moteur, la pression d&apos;huile, ou la batterie, un voyant rouge
          signifie un probleme immediat qui peut detruire votre moteur si
          vous continuez. Garez-vous des que possible, coupez le contact,
          et appelez une assistance.
        </p>

        <h2>2. Lisez le code defaut</h2>
        <p>
          Un voyant moteur allume, c&apos;est comme une notification sur un
          telephone : ca vous dit qu&apos;il y a quelque chose, mais pas
          quoi. Pour savoir ce qui se passe vraiment, il faut aller lire les
          codes defaut stockes dans le calculateur. Ces codes sont
          standardises : ils commencent par une lettre (P pour moteur, C pour
          chassis, B pour carrosserie, U pour reseau) suivie de quatre
          chiffres. Un code comme P0420 veut toujours dire la meme chose,
          que votre voiture soit une Renault, une BMW ou une Fiat.
        </p>
        <p>
          Pour lire ces codes, vous avez deux options. Option 1 : aller chez
          un garagiste. Comptez entre 30 et 80 euros pour une simple lecture,
          sans aucune reparation. Option 2 : utiliser un dongle ELM327
          Bluetooth (a partir de 15 euros) avec une application comme
          AutoDiag EU. Vous branchez le dongle sur la prise OBD2 de votre
          voiture (sous le volant dans la plupart des cas), vous ouvrez
          l&apos;app, et en dix secondes vous voyez tous les codes actifs,
          expliques en francais, avec les causes probables et une estimation
          du cout de reparation.
        </p>

        <h2>3. Identifiez la cause probable</h2>
        <p>
          Certains codes reviennent tellement souvent qu&apos;on peut
          presque les deviner rien qu&apos;en ecoutant la voiture. Voici les
          suspects habituels que vous pouvez explorer directement :
        </p>
        <ul>
          <li>
            <Link href="/fr/codes/p0420">P0420 — efficacite catalyseur</Link>{" "}
            : tres frequent sur les voitures de plus de 8 ans, lie a la
            sonde lambda ou au catalyseur lui-meme.
          </li>
          <li>
            <Link href="/fr/codes/p0171">P0171 — melange pauvre</Link> :
            souvent une prise d&apos;air au collecteur ou un capteur MAF
            encrasse.
          </li>
          <li>
            <Link href="/fr/codes/p0300">P0300 — rates d&apos;allumage</Link>{" "}
            : bougies ou bobines usees dans la majorite des cas.
          </li>
          <li>
            <Link href="/fr/codes/p0442">P0442 — petite fuite EVAP</Link> :
            souvent juste un bouchon de reservoir mal visse.
          </li>
          <li>
            <Link href="/fr/codes/p0128">P0128 — thermostat</Link> : moteur
            qui ne monte pas en temperature, thermostat bloque ouvert.
          </li>
        </ul>
        <p>
          Si votre code correspond a l&apos;un de ces cinq, vous tombez dans
          60% des cas les plus frequents en Europe. La reparation est souvent
          moins chere que ce que vous imaginez, surtout si vous pouvez la
          faire vous-meme sur des interventions simples comme un bouchon de
          reservoir ou un nettoyage de capteur.
        </p>

        <h2>4. Les 5 reflexes immediats</h2>
        <p>
          Avant meme de lire les codes, voici cinq choses a verifier qui
          peuvent parfois eteindre un voyant moteur sans aucun outil.
          D&apos;abord, revissez correctement le bouchon de votre reservoir
          de carburant. Un bouchon mal visse est responsable de 20% des
          voyants moteur allumes en Europe. Ensuite, verifiez le niveau
          d&apos;huile : un niveau trop bas peut declencher un voyant. Puis
          le niveau de liquide de refroidissement. Ecoutez aussi les bruits
          inhabituels au ralenti — un sifflement peut indiquer une prise
          d&apos;air, un cliquetis une bougie defaillante. Enfin, notez si
          vous avez remarque un changement recent : perte de puissance,
          consommation en hausse, demarrage difficile. Ces indices aident
          enormement au diagnostic.
        </p>

        <h2>5. Quand faut-il aller au garage ?</h2>
        <p>
          Tout ce qui touche a la securite (freins, direction, airbags) ou
          aux systemes de depollution complexes (catalyseur, FAP, vanne EGR
          en panne totale) merite l&apos;intervention d&apos;un
          professionnel. Mais pour les interventions simples — bougies,
          capteur MAF encrasse, bouchon de reservoir, capteur de temperature
          — un tutoriel YouTube et un jeu de cles suffisent. L&apos;erreur
          classique est de payer 300 euros chez le garagiste pour une
          intervention a 30 euros de piece et 15 minutes de travail. AutoDiag
          EU vous aide a faire la difference entre les deux : quand le
          diagnostic indique un simple nettoyage de capteur, vous savez que
          vous pouvez y aller vous-meme.
        </p>

        <h2>6. Comment eviter que ca recommence</h2>
        <p>
          La meilleure facon de ne pas voir de voyant moteur allume, c&apos;est
          l&apos;entretien preventif. Respectez les intervalles de vidange,
          changez vos bougies tous les 60 000 km, nettoyez votre capteur MAF
          une fois par an avec un produit specifique, et surtout : utilisez
          un carburant de qualite. Beaucoup de pannes liees aux injecteurs et
          au catalyseur viennent d&apos;un carburant souille ou de longues
          periodes sans rouler. Un diagnostic mensuel avec AutoDiag EU prend
          deux minutes et vous permet de detecter les petits soucis avant
          qu&apos;ils deviennent de gros problemes.
        </p>

        <h2>En resume</h2>
        <p>
          Un voyant moteur allume n&apos;est pas une condamnation. Regardez
          sa couleur, lisez le code, identifiez la cause, et agissez en
          consequence. Avec l&apos;app AutoDiag EU et un dongle a 15 euros,
          vous avez un outil de diagnostic professionnel dans votre poche.
          Vous economisez 80 euros a chaque visite evitee au garage pour une
          simple lecture de code, et vous roulez en sachant exactement ce
          qui se passe sous votre capot.
        </p>
      </ArticleLayoutFR>
    </>
  );
}

/* ================================================================
   Article — 10 codes defaut les plus frequents en Europe
   ================================================================ */

export function Article10CodesDefautFrequentsEurope() {
  const faq: FaqItem[] = [
    {
      q: "Quel est le code defaut OBD2 le plus frequent en Europe ?",
      a: "Le code le plus frequent est P0420 — efficacite du catalyseur sous le seuil (banc 1). Il apparait sur pres d'une voiture essence sur trois au-dela de 150 000 km. Cause principale : sonde lambda arriere fatiguee ou catalyseur use.",
    },
    {
      q: "Ces codes defaut peuvent-ils endommager le moteur ?",
      a: "La plupart ne sont pas graves a court terme, mais certains le deviennent si on les ignore. Un P0300 (rates d'allumage) peut detruire le catalyseur en quelques semaines. Un P0171 prolonge peut user prematurement les soupapes. Un P0128 non resolu maintient le moteur a basse temperature, ce qui augmente l'usure.",
    },
    {
      q: "Combien coute en moyenne la reparation de ces codes ?",
      a: "Les fourchettes varient beaucoup. Un P0442 (petite fuite EVAP) coute souvent 0 euro (revisser le bouchon). Un P0171 peut couter de 20 a 300 euros selon la cause. Un P0420 coute entre 150 euros (sonde lambda) et 1 500 euros (catalyseur complet). Un P0300 coute entre 50 et 800 euros selon qu'il faut changer les bougies ou les bobines.",
    },
    {
      q: "Puis-je effacer ces codes moi-meme avec un dongle ELM327 ?",
      a: "Oui, un dongle ELM327 compatible OBD2 permet d'effacer les codes defaut. Mais attention : effacer sans reparer est inutile, les codes reviendront. De plus, effacer juste avant un controle technique met les moniteurs OBD en etat 'non prets', ce qui est refuse au CT.",
    },
    {
      q: "Quelle est la difference entre un code generique et un code constructeur ?",
      a: "Un code generique commence par un 0 en deuxieme position (P0420) et signifie la meme chose sur toutes les marques. Un code constructeur commence par 1 (P1420) et est specifique a la marque : P1420 chez Toyota n'a pas la meme signification que chez Ford. AutoDiag EU reconnait les deux types.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutFR
        title="Les 10 codes defaut OBD2 les plus frequents en Europe"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={11}
        category="Codes defaut"
      >
        <p>
          Si vous branchez un outil de diagnostic sur une voiture au hasard
          en France, en Allemagne ou en Espagne, vous tomberez dans 80% des
          cas sur les memes dix codes defaut. Ce n&apos;est pas un hasard :
          ces codes correspondent aux pannes les plus courantes d&apos;un
          moteur vieillissant, aux composants d&apos;usure classiques, et
          aux points faibles partages par la majorite des constructeurs
          europeens. Les connaitre, c&apos;est diagnostiquer votre voiture
          sans meme ouvrir l&apos;app. Voici le top 10, dans l&apos;ordre
          de frequence reelle observee sur le terrain.
        </p>

        <h2>1. <Link href="/fr/codes/p0420">P0420</Link> — Efficacite catalyseur sous le seuil</h2>
        <p>
          Le roi incontestable. Present sur pres d&apos;une voiture essence
          sur trois au-dela de 150 000 km. Le calculateur compare le signal
          de la sonde lambda avant et celui de la sonde lambda arriere : si
          les deux signaux se ressemblent trop, c&apos;est que le
          catalyseur ne &laquo; travaille &raquo; plus. Cause principale :
          sonde lambda arriere fatiguee, catalyseur use, ou plus rarement
          un defaut d&apos;etancheite de l&apos;echappement en amont. Cout :
          de 150 euros (sonde) a 1 500 euros (catalyseur complet).
        </p>

        <h2>2. <Link href="/fr/codes/p0171">P0171</Link> — Melange trop pauvre (banc 1)</h2>
        <p>
          Le deuxieme plus frequent, surtout sur les moteurs essence
          atmospheriques et turbo downsizes. Le moteur recoit trop
          d&apos;air par rapport au carburant. Causes frequentes : prise
          d&apos;air au collecteur d&apos;admission, capteur MAF encrasse,
          injecteur qui dose mal, ou pompe a essence fatiguee. Premier
          geste : nettoyer le MAF (10 euros de produit). Si ca ne suffit
          pas, chercher la prise d&apos;air avec une machine a fumee.
        </p>

        <h2>3. <Link href="/fr/codes/p0300">P0300</Link> — Rates d&apos;allumage aleatoires</h2>
        <p>
          Le plus ressenti : le moteur vibre, il a des a-coups, il broute.
          Aleatoire veut dire que le calculateur ne peut pas isoler un
          cylindre precis. Causes : bougies usees (80% des cas sur les
          moteurs essence au-dela de 60 000 km sans changement), bobines
          fatiguees, rampe d&apos;injection sale. Danger : les rates
          detruisent le catalyseur. A traiter rapidement.
        </p>

        <h2>4. <Link href="/fr/codes/p0442">P0442</Link> — Petite fuite EVAP</h2>
        <p>
          Le plus benin de la liste. Le systeme EVAP recupere les vapeurs
          d&apos;essence du reservoir pour les brider dans le moteur. Une
          petite fuite, c&apos;est presque toujours un bouchon de
          reservoir mal visse ou un joint de bouchon use. Revisser
          correctement et rouler 50 km suffit dans 60% des cas. Sinon,
          remplacer le bouchon (15 a 40 euros).
        </p>

        <h2>5. <Link href="/fr/codes/p0128">P0128</Link> — Thermostat bloque ouvert</h2>
        <p>
          Votre moteur ne monte plus en temperature normale (au-dessus de
          80 degres). Le thermostat est bloque en position ouverte, le
          liquide circule en permanence dans le grand circuit. Le moteur
          reste froid, la consommation augmente, et a terme les cylindres
          s&apos;usent plus vite. Remplacement thermostat : 80 a 250 euros
          selon le moteur.
        </p>

        <h2>6. <Link href="/fr/codes/p0401">P0401</Link> — Debit EGR insuffisant</h2>
        <p>
          Classique sur les diesels europeens. La vanne EGR recircule une
          partie des gaz d&apos;echappement dans l&apos;admission pour
          reduire les NOx. Avec le temps, elle s&apos;encrasse et ne
          s&apos;ouvre plus correctement. Symptomes : perte de puissance,
          fumees noires a l&apos;acceleration, voyant moteur. Nettoyage :
          80 a 200 euros. Remplacement complet : 400 a 900 euros.
        </p>

        <h2>7. <Link href="/fr/codes/p0340">P0340</Link> — Capteur arbre a cames</h2>
        <p>
          Le capteur d&apos;arbre a cames informe le calculateur sur la
          position du cylindre en phase d&apos;allumage. Un capteur
          defaillant, c&apos;est des a-coups, des demarrages difficiles,
          parfois des calages au ralenti. Cause classique : corrosion sur
          le connecteur, fil coupe, ou simplement vieillissement du
          capteur. Piece : 30 a 120 euros. Main d&apos;oeuvre : 30 a 90 minutes.
        </p>

        <h2>8. <Link href="/fr/codes/p0455">P0455</Link> — Grosse fuite EVAP</h2>
        <p>
          Variante plus serieuse du P0442. Cette fois la fuite est plus
          importante : bouchon casse, tuyau debranche ou fissure, valve de
          purge defaillante. Si revisser le bouchon ne resout rien,
          inspectez les durites en caoutchouc dans le compartiment moteur
          et pres du reservoir.
        </p>

        <h2>9. <Link href="/fr/codes/p0430">P0430</Link> — Efficacite catalyseur banc 2</h2>
        <p>
          C&apos;est le jumeau du P0420, mais cote banc 2 (sur les moteurs
          V6 ou V8 qui ont deux rangees de cylindres et deux catalyseurs).
          Meme logique, meme causes, meme solutions. Les moteurs Audi,
          Mercedes et Jaguar en sont friands apres 180 000 km.
        </p>

        <h2>10. <Link href="/fr/codes/p0507">P0507</Link> — Ralenti trop haut</h2>
        <p>
          Votre voiture tourne a plus de 1 000 tours au ralenti alors
          qu&apos;elle devrait etre vers 750-850. Cause frequente : un boitier
          papillon encrasse, une prise d&apos;air au collecteur, ou un
          capteur MAF defaillant. Un nettoyage du boitier papillon (15
          euros de produit, 20 minutes de travail) resout le probleme dans
          la moitie des cas.
        </p>

        <h2>Comment utiliser cette liste ?</h2>
        <p>
          Quand votre voyant moteur s&apos;allume, branchez un dongle ELM327
          avec AutoDiag EU et comparez le code affiche a cette liste. Dans
          80% des cas, vous tomberez sur l&apos;un de ces dix. L&apos;app
          vous donnera aussi les causes probables specifiques a votre
          vehicule, une estimation du cout dans votre pays, et un niveau
          de gravite (peut-on rouler ou faut-il s&apos;arreter ?). Vous
          arrivez chez le garagiste en sachant deja ce qui se passe, ce
          qui limite enormement le risque de devis gonfle.
        </p>

        <h2>En resume</h2>
        <p>
          Ces dix codes defaut couvrent la grande majorite des voyants
          moteur que vous verrez sur une voiture europeenne. Avec un
          dongle a 15 euros et l&apos;app AutoDiag EU, vous avez un
          diagnostic precis et une estimation fiable du cout de reparation
          en quelques secondes. Fini les mauvaises surprises au garage.
        </p>
      </ArticleLayoutFR>
    </>
  );
}

/* ================================================================
   Article — Preparer son controle technique 2026
   ================================================================ */

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
      <ArticleLayoutFR
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
      </ArticleLayoutFR>
    </>
  );
}

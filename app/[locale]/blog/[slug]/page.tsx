import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateArticleMetadata } from "@/lib/seo";
import { getBlogPost, getAllBlogParams, getBlogAlternates } from "@/lib/blog";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import {
  ArticleVoyantMoteurQueFaire,
  ArticlePreparerCT2026,
  Article10CodesDefautFrequentsEurope,
} from "./fr-articles-v2";
import {
  ArticleCheckEngineLightWhatToDo,
  ArticleMOTPreparationGuide2026,
} from "./en-articles-v2";
import {
  ArticleTop10MOTFailureReasons,
  ArticleHowToPrepareCarForMOT,
  ArticleBestOBD2AppUK2026,
  ArticleOBD2FaultCodesExplainedUK,
  ArticleCarDiagnosticAppVsGarageUK,
} from "./en-articles";
import {
  ArticleDEOBD2FehlercodesLesen,
  ArticleDETUVVorbereitung,
  ArticleDE5Motorgerausche,
  ArticleDEOBD2Verstehen,
  ArticleDEAutodiagVsWerkstatt,
} from "./de-articles";
import {
  ArticleESCodigosFalloOBD2,
  ArticleESPrepararITV,
  ArticleES5RuidosMotor,
  ArticleESOBD2Entender,
  ArticleESAutodiagVsTaller,
} from "./es-articles";
import {
  ArticlePTCodigosErroOBD2,
  ArticlePTPrepararIPO,
  ArticlePT5RuidosMotor,
  ArticlePTOBD2Compreender,
  ArticlePTAutodiagVsOficina,
} from "./pt-articles";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogParams();
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article introuvable | AutoDiag EU" };

  return generateArticleMetadata({
    title: post.title,
    description: post.description,
    locale,
    slug: post.slug,
    datePublished: post.date,
    author: post.author,
    alternateSlugs: getBlogAlternates(post.slug),
  });
}

function ArticleLayout({
  children,
  title,
  date,
  author,
  readingTime,
  category,
  locale = "fr",
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
  locale?: string;
}) {
  const isEN = locale === "en";
  const dateLocale = isEN ? "en-GB" : "fr-FR";
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: isEN ? "Home" : "Accueil", href: `/${locale}` },
          { label: "Blog", href: `/${locale}/blog` },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href={`/${locale}/blog`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; {isEN ? "Back to blog" : "Retour au blog"}
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>{isEN ? "By" : "Par"} {author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(dateLocale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} {isEN ? "min read" : "min de lecture"}</span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">
          {isEN
            ? "Ready to diagnose your car yourself?"
            : "Envie de diagnostiquer votre voiture vous-meme ?"}
        </h3>
        <p className="mb-6 text-secondary">
          {isEN
            ? "AutoDiag EU gives you professional-grade tools, made simple. AI audio scan, fault code reader, and more \u2014 all in your pocket."
            : "AutoDiag EU vous donne les outils des pros, en plus simple. Scan audio IA, lecture de codes defaut, tout est la."}
        </p>
        <Link
          href={`/${locale}#beta`}
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          {isEN ? "Join the free beta" : "Rejoindre la beta gratuite"}
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Article content components — one per slug
   ================================================================ */

function ArticleCommentLireCodeDefautOBD2() {
  return (
    <ArticleLayout
      title="Comment lire un code defaut OBD2 — guide complet"
      date="2026-03-15"
      author="Reda Kaouani"
      readingTime={8}
      category="Tutoriel"
    >
      <p>
        Vous avez un voyant moteur allume sur votre tableau de bord ? Pas de
        panique. Ce petit temoin orange — parfois en forme de moteur, parfois
        juste un point d&apos;exclamation — vous dit simplement que votre
        voiture a detecte quelque chose d&apos;anormal. Et pour savoir
        exactement quoi, il faut lire les <strong>codes defaut OBD2</strong>.
        On va tout vous expliquer, comme si on etait a cote de vous dans le
        garage.
      </p>

      <h2>C&apos;est quoi l&apos;OBD2, concretement ?</h2>
      <p>
        OBD2, ca veut dire <em>On-Board Diagnostics, version 2</em>. C&apos;est
        un systeme standardise qui est present dans toutes les voitures
        vendues en Europe depuis 2001 (et aux Etats-Unis depuis 1996). En
        gros, votre voiture a un petit ordinateur a bord — le calculateur, ou
        ECU — qui surveille en permanence le moteur, la transmission, les
        emissions, et plein d&apos;autres trucs. Quand quelque chose ne va pas,
        il enregistre un <strong>code defaut</strong>, aussi appele DTC
        (Diagnostic Trouble Code).
      </p>
      <p>
        Pensez a l&apos;OBD2 comme au carnet de sante de votre voiture. Sauf
        qu&apos;au lieu d&apos;ecrire &laquo; rhume &raquo; ou &laquo; grippe
        &raquo;, il ecrit des codes comme P0420 ou P0171. Chaque code
        correspond a un probleme precis.
      </p>

      <h2>Ou se trouve la prise OBD2 ?</h2>
      <p>
        La prise OBD2 est un connecteur 16 broches, generalement situe sous
        le tableau de bord, cote conducteur. Sur la plupart des vehicules
        europeens, vous la trouverez :
      </p>
      <ul>
        <li>Sous le volant, a gauche de la colonne de direction</li>
        <li>Parfois derriere un petit cache en plastique</li>
        <li>
          Sur certains vehicules allemands (BMW, Mercedes), elle peut etre
          dans la console centrale ou la boite a gants
        </li>
        <li>
          Sur les Renault et Peugeot, souvent juste au-dessus de la pedale
          d&apos;embrayage
        </li>
      </ul>
      <p>
        Astuce : si vous ne la trouvez pas, cherchez
        &laquo; emplacement prise OBD2 &raquo; suivi du modele de votre
        voiture. Mais dans 90% des cas, c&apos;est sous le volant, a porte de
        main.
      </p>

      <h2>Comment sont structures les codes defaut ?</h2>
      <p>
        Chaque code OBD2 suit la meme logique. Prenons un exemple : <strong>
        P0420</strong>. Ce code est compose de 5 caracteres qui ont chacun
        une signification precise :
      </p>

      <h3>La premiere lettre — le systeme concerne</h3>
      <ul>
        <li>
          <strong>P (Powertrain)</strong> — Moteur et transmission. C&apos;est
          le type le plus courant, environ 70% des codes que vous verrez.
          Ca couvre tout ce qui fait avancer la voiture : injection, allumage,
          turbo, boite de vitesses, embrayage.
        </li>
        <li>
          <strong>C (Chassis)</strong> — Chassis et partie roulante. ABS,
          direction assistee, suspension, freinage. Si votre voyant ABS
          s&apos;allume, c&apos;est probablement un code C.
        </li>
        <li>
          <strong>B (Body)</strong> — Carrosserie et habitacle. Airbags,
          climatisation, vitres electriques, ceintures de securite, eclairage
          interieur. Moins critique pour rouler, mais important pour le
          confort et la securite.
        </li>
        <li>
          <strong>U (Network)</strong> — Reseau de communication. Les
          calculateurs de votre voiture communiquent entre eux via un reseau
          CAN-Bus. Un code U signifie qu&apos;un calculateur n&apos;arrive plus
          a parler aux autres. Ca peut etre un simple fil debranche ou un
          probleme plus serieux.
        </li>
      </ul>

      <h3>Le deuxieme caractere — generique ou constructeur</h3>
      <ul>
        <li>
          <strong>0</strong> — Code generique (standardise SAE). Tous les
          constructeurs utilisent le meme code pour le meme probleme. P0420,
          c&apos;est toujours le catalyseur, que ce soit une Renault, une
          BMW ou une Fiat.
        </li>
        <li>
          <strong>1</strong> — Code constructeur (specifique). Le
          constructeur a defini ce code pour un probleme propre a ses
          vehicules. Par exemple, P1135 chez Toyota n&apos;a pas la meme
          signification que P1135 chez Ford.
        </li>
      </ul>

      <h3>Le troisieme caractere — le sous-systeme</h3>
      <p>
        Ce chiffre precise quel sous-systeme est concerne. Pour les codes P
        (moteur) : 1 et 2 = dosage carburant/air, 3 = allumage, 4 =
        emissions, 5 = vitesse/ralenti, 6 = circuits du calculateur, 7 et 8 =
        transmission. Pour les codes B, C et U, les sous-systemes varient.
      </p>

      <h3>Les deux derniers chiffres — le defaut precis</h3>
      <p>
        C&apos;est le numero du defaut specifique dans le sous-systeme. Plus
        le numero est eleve, plus le defaut est precis. P0420 = catalyseur
        efficacite en dessous du seuil (banc 1). P0421 serait le meme
        probleme mais avec un seuil de warmup different.
      </p>

      <h2>3 codes defaut courants decryptes</h2>

      <h3>P0420 — Efficacite du catalyseur sous le seuil</h3>
      <p>
        C&apos;est probablement le code le plus repandu en Europe, surtout sur
        les voitures de plus de 8 ans. Votre sonde lambda arriere (celle qui
        se trouve apres le catalyseur) detecte que le catalyseur ne filtre
        plus aussi bien les gaz d&apos;echappement. Les causes possibles : un
        catalyseur use (c&apos;est une piece d&apos;usure apres 150 000 km
        environ), une sonde lambda defaillante, ou parfois simplement un
        mauvais carburant. Le cout de reparation ? Entre 150 et 1 500 euros
        selon qu&apos;il faut changer la sonde ou le catalyseur complet.
        Important : ce code ne vous empeche pas de rouler, mais vous risquez
        de rater votre controle technique sur les emissions.
      </p>

      <h3>P0171 — Melange trop pauvre (banc 1)</h3>
      <p>
        Votre moteur recoit trop d&apos;air par rapport au carburant. En
        pratique, ca se traduit souvent par des a-coups au ralenti, un moteur
        qui hesite a l&apos;acceleration, ou une consommation anormale. Les
        causes les plus frequentes : une prise d&apos;air au niveau du
        collecteur d&apos;admission (un joint qui vieillit, un tuyau de
        depression fissure), un capteur de debit d&apos;air (MAF) encrasse,
        ou un injecteur qui ne dose plus correctement. Premier reflexe : si
        votre voiture a plus de 100 000 km, nettoyez le capteur MAF avec un
        nettoyant specifique (environ 10 euros en magasin auto). Ca resout le
        probleme dans 30% des cas. Sinon, il faudra chercher la prise
        d&apos;air — un mecanicien utilisera une machine a fumee pour la
        detecter.
      </p>

      <h3>P0300 — Rates d&apos;allumage aleatoires detectes</h3>
      <p>
        Celui-la, vous le sentez : le moteur vibre, il a des rates, il
        &laquo; broute &raquo; comme on dit. Le calculateur detecte que la
        combustion ne se fait pas correctement, mais il n&apos;arrive pas a
        isoler un cylindre precis (contrairement a P0301 qui pointe le
        cylindre 1, P0302 le cylindre 2, etc.). Les causes : bougies usees
        (premier truc a verifier, surtout si elles n&apos;ont pas ete changees
        depuis 60 000 km), bobines d&apos;allumage fatiguees, ou un probleme
        d&apos;injection. Sur un diesel, ca peut aussi indiquer des
        injecteurs encrasses ou un probleme de pression de rampe. Le cout va
        de 30 euros (jeu de bougies a changer soi-meme) a 800 euros
        (remplacement de bobines + bougies en garage).
      </p>

      <h2>Comment lire ces codes avec AutoDiag EU ?</h2>
      <p>
        Avec les outils traditionnels, lire un code defaut, ca demande soit
        un passage au garage (entre 30 et 100 euros juste pour la lecture),
        soit l&apos;achat d&apos;une valise de diagnostic (de 50 a plus de
        2 000 euros pour les modeles pro). Et dans les deux cas, vous recevez
        un code brut — P0420 — sans forcement comprendre ce que ca veut dire
        pour votre voiture specifique.
      </p>
      <p>
        Avec AutoDiag EU, c&apos;est different. Vous branchez un dongle
        ELM327 Bluetooth (a partir de 15 euros, on recommande le Vgate iCar
        Pro) sur la prise OBD2 de votre voiture. Vous ouvrez l&apos;app, elle
        detecte automatiquement votre vehicule et ses protocoles de
        communication. En quelques secondes, vous voyez tous les codes defaut
        actifs, mais surtout : l&apos;app vous les explique en francais,
        avec les causes probables, le niveau de gravite (est-ce que je peux
        encore rouler ?), et une estimation du cout de reparation dans votre
        pays.
      </p>
      <p>
        Mieux encore : si vous avez un doute sur un bruit, vous pouvez
        utiliser le <strong>Scan Sonore</strong> — notre IA audio ecoute
        votre moteur pendant 10 secondes et detecte 11 types de pannes
        differentes par le son. Combine avec les codes defaut OBD2, ca vous
        donne un diagnostic beaucoup plus complet qu&apos;un simple lecteur
        de codes.
      </p>

      <h2>Quand faut-il aller au garage ?</h2>
      <p>
        AutoDiag EU vous donne les informations pour comprendre votre
        voiture, mais certaines reparations necessitent quand meme un
        professionnel. Voici notre regle simple :
      </p>
      <ul>
        <li>
          <strong>Voyant orange fixe</strong> : pas d&apos;urgence, mais
          faites un diagnostic pour comprendre le probleme. Vous pouvez
          rouler.
        </li>
        <li>
          <strong>Voyant orange clignotant</strong> : attention, c&apos;est
          plus serieux. Ca indique generalement des rates d&apos;allumage qui
          risquent d&apos;endommager le catalyseur. Roulez doucement
          jusqu&apos;a un garage.
        </li>
        <li>
          <strong>Voyant rouge</strong> : stop. Temperature, pression
          d&apos;huile, direction assistee — arretez-vous des que possible.
        </li>
      </ul>
      <p>
        Pour les petites interventions (changement de bougies, nettoyage du
        capteur MAF, remplacement d&apos;un capteur de temperature), un bon
        tutoriel YouTube et un jeu de cles suffisent. Pour tout ce qui touche
        a la securite (freins, direction, airbags) ou a la depollution
        (catalyseur, FAP), confiez ca a un pro.
      </p>

      <h2>Les erreurs a eviter</h2>
      <p>
        Premiere erreur classique : effacer les codes sans reparer le
        probleme. Oui, ca eteint le voyant. Pendant 50 km. Et apres il
        revient, parce que le probleme est toujours la. Pire : si vous
        effacez juste avant le controle technique, le calculateur signalera
        &laquo; moniteurs non prets &raquo; et le controleur le verra
        immediatement.
      </p>
      <p>
        Deuxieme erreur : paniquer devant un code defaut. Beaucoup de codes
        ne sont pas graves du tout. Un P0442 (petite fuite dans le systeme
        EVAP), c&apos;est souvent juste un bouchon de reservoir mal visse.
        Litteralement. Revissez-le, roulez 50 km, et le code disparait tout
        seul.
      </p>
      <p>
        Troisieme erreur : acheter des pieces avant d&apos;avoir diagnostique
        correctement. Un code P0420 ne veut pas forcement dire
        &laquo; catalyseur a changer &raquo;. Ca peut etre la sonde lambda
        (beaucoup moins cher). C&apos;est pour ca que le diagnostic complet
        — codes + donnees en temps reel + analyse audio — est tellement
        important.
      </p>

      <h2>En resume</h2>
      <p>
        Les codes defaut OBD2 sont un outil formidable pour comprendre ce
        qui se passe sous le capot de votre voiture. Avec un simple dongle
        Bluetooth et AutoDiag EU, vous avez acces aux memes informations
        qu&apos;un mecanicien — en plus comprehensible. Vous pouvez
        identifier les petits problemes avant qu&apos;ils ne deviennent gros
        (et chers), preparer votre controle technique en toute serenite, et
        meme faire certaines reparations vous-meme.
      </p>
      <p>
        Le diagnostic automobile n&apos;est plus reserve aux garages. C&apos;est
        exactement pour ca qu&apos;on a cree AutoDiag EU : pour que chacun
        puisse prendre soin de sa voiture, simplement.
      </p>
    </ArticleLayout>
  );
}

function ArticlePreparerControleTechnique() {
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

function Article5BruitsMoteur() {
  return (
    <ArticleLayout
      title="Les 5 bruits moteur a ne pas ignorer"
      date="2026-03-05"
      author="Reda Kaouani"
      readingTime={7}
      category="Diagnostic"
    >
      <p>
        Votre voiture vous parle. Pas avec des mots, mais avec des bruits. Et
        quand elle commence a faire un bruit inhabituel, c&apos;est rarement
        bon signe. Le probleme, c&apos;est que la plupart d&apos;entre nous ne
        savent pas interpreter ces bruits. Est-ce que c&apos;est grave ?
        Est-ce que je peux encore rouler ? Est-ce que ca va me couter une
        fortune ? On va passer en revue les 5 bruits moteur les plus
        importants a connaitre. Pas besoin d&apos;etre mecanicien — juste
        d&apos;avoir des oreilles.
      </p>

      <h2>1. Le cliquetis metallique — &laquo; tic tic tic &raquo;</h2>
      <p>
        Imaginez le bruit d&apos;une machine a coudre rapide, mais en plus
        metallique. Ce cliquetis regulier, souvent plus audible au ralenti ou
        a froid, est l&apos;un des bruits moteur les plus frequents. Il
        s&apos;accelere avec les tours moteur.
      </p>

      <h3>Ce que ca peut signifier</h3>
      <ul>
        <li>
          <strong>Poussoirs hydrauliques fatigues</strong> : les poussoirs
          (ou linguets hydrauliques) compensent le jeu aux soupapes. Quand ils
          s&apos;usent, ils ne compensent plus et vous entendez le metal
          taper. Ca se produit surtout a froid et disparait parfois quand
          l&apos;huile atteint sa temperature. Si le bruit persiste a chaud,
          c&apos;est qu&apos;ils sont vraiment en fin de vie.
        </li>
        <li>
          <strong>Niveau d&apos;huile trop bas</strong> : les poussoirs ont
          besoin de pression d&apos;huile pour fonctionner. Si le niveau est
          bas, ils ne se remplissent pas correctement. Verifiez la jauge en
          premier.
        </li>
        <li>
          <strong>Chaine de distribution tendue ou usee</strong> : sur les
          moteurs a chaine (BMW, VAG TSI/TFSI, PSA PureTech...), une chaine
          qui s&apos;allonge fait un cliquetis metallique assez
          caracteristique, surtout au demarrage.
        </li>
      </ul>

      <h3>Le risque</h3>
      <p>
        Si c&apos;est un simple poussoir, ce n&apos;est pas urgent mais ne
        laissez pas trainer des mois. Si c&apos;est la chaine de
        distribution, c&apos;est beaucoup plus serieux : une chaine qui saute,
        c&apos;est potentiellement un moteur detruit. Cout : poussoirs 200 a
        600 euros, chaine de distribution 800 a 2 000 euros selon le vehicule.
      </p>

      <h2>2. Le grondement sourd — &laquo; vrooomm grave &raquo;</h2>
      <p>
        Un bruit grave, continu, qui augmente avec la vitesse (pas avec les
        tours moteur, avec la vitesse de la voiture). Comme un avion qui
        decolle au loin, ou un roulement de tambour sourd. Souvent plus
        audible dans les virages, ou il devient plus fort d&apos;un cote.
      </p>

      <h3>Ce que ca peut signifier</h3>
      <ul>
        <li>
          <strong>Roulement de roue use</strong> : c&apos;est la cause
          numero 1 de ce type de bruit. Le roulement permet a la roue de
          tourner librement. Quand il s&apos;use, les billes (ou les
          rouleaux) ne tournent plus rond et creent une vibration grave. Le
          bruit change souvent dans les virages parce que le poids se
          transfere et charge davantage le roulement use. Si le bruit
          augmente en virant a droite, c&apos;est probablement le roulement
          gauche (et vice versa).
        </li>
        <li>
          <strong>Pneu en mauvais etat</strong> : un pneu avec une usure
          irreguliere (en dents de scie) peut produire un grondement similaire.
          Passez la main sur la bande de roulement — si vous sentez des
          bosses, c&apos;est le pneu.
        </li>
      </ul>

      <h3>Le risque</h3>
      <p>
        Un roulement de roue en fin de vie peut se bloquer, ce qui est
        extremement dangereux a haute vitesse. Si le bruit est apparu
        recemment et qu&apos;il s&apos;aggrave, ne tardez pas. Cout du
        remplacement : 150 a 400 euros par roulement en garage.
      </p>

      <h2>3. Le sifflement aigu — &laquo; iiiiii &raquo;</h2>
      <p>
        Un son aigu, strident, souvent au demarrage ou quand vous accelerez.
        Ca ressemble au bruit d&apos;une corde qui vibre ou d&apos;un oiseau
        qui siffle. Parfois ca dure quelques secondes, parfois c&apos;est
        permanent.
      </p>

      <h3>Ce que ca peut signifier</h3>
      <ul>
        <li>
          <strong>Courroie d&apos;accessoires usee ou mal tendue</strong> :
          c&apos;est la cause la plus frequente. La courroie trapezoidale (ou
          poly-V) entraine l&apos;alternateur, la climatisation, la direction
          assistee et la pompe a eau. Quand elle s&apos;use, elle patine sur
          les poulies et siffle. Le sifflement empire souvent quand il pleut
          (l&apos;eau fait patiner la courroie) ou quand vous allumez la
          climatisation (charge supplementaire).
        </li>
        <li>
          <strong>Galet tendeur fatigue</strong> : le galet qui maintient la
          tension de la courroie a un roulement qui s&apos;use aussi. Le bruit
          est alors plus un sifflement continu qu&apos;un crissement
          intermittent.
        </li>
        <li>
          <strong>Turbo qui siffle anormalement</strong> : un turbo fait un
          leger sifflement a l&apos;acceleration, c&apos;est normal. Mais si
          le sifflement devient strident ou metallique, ca peut indiquer un
          palier use ou un probleme d&apos;etancheite.
        </li>
      </ul>

      <h3>Le risque</h3>
      <p>
        Une courroie d&apos;accessoires qui casse, c&apos;est la direction
        assistee qui disparait, la batterie qui ne charge plus, et le moteur
        qui surchauffe (si elle entraine la pompe a eau). Cout : courroie 15
        a 40 euros (pieces), remplacement en garage 80 a 200 euros. Turbo :
        1 000 a 3 000 euros.
      </p>

      <h2>4. Le claquement lourd — &laquo; clac clac clac &raquo;</h2>
      <p>
        Un bruit de claquement net, regulier, comme si quelqu&apos;un tapait
        avec un marteau a l&apos;interieur du moteur. Plus grave et plus
        &laquo; lourd &raquo; que le cliquetis. Il peut etre present a
        toutes les temperatures et s&apos;amplifie souvent avec la charge
        moteur.
      </p>

      <h3>Ce que ca peut signifier</h3>
      <ul>
        <li>
          <strong>Bielle endommagee</strong> : c&apos;est le pire scenario.
          Les bielles connectent les pistons au vilebrequin. Si un coussinet
          de bielle s&apos;use, le jeu cree un claquement rythmique qui
          augmente avec les tours. C&apos;est souvent precede d&apos;un
          voyant de pression d&apos;huile.
        </li>
        <li>
          <strong>Injecteur bruyant (diesel)</strong> : les diesel sont
          naturellement plus bruyants, mais un injecteur defaillant fait un
          claquement plus marque que les autres. Vous entendez une
          &laquo; note &raquo; differente dans le bruit regulier du moteur.
        </li>
        <li>
          <strong>Pre-allumage / cliquetis de detonation</strong> : le
          carburant s&apos;enflamme trop tot dans le cylindre, creant une
          onde de choc. Ca se produit souvent sous charge (montee, forte
          acceleration) et peut etre cause par un mauvais carburant, un
          capteur de cliquetis defaillant, ou un reglage moteur incorrect.
        </li>
      </ul>

      <h3>Le risque</h3>
      <p>
        Un claquement de bielle, c&apos;est un moteur en sursis. Si vous
        continuez a rouler, la bielle peut percer le bloc moteur. Cout :
        moteur d&apos;echange 2 000 a 5 000 euros. Un injecteur diesel : 200
        a 500 euros. Un pre-allumage non traite peut endommager les pistons.
      </p>

      <h2>5. Le grincement — &laquo; crrrr &raquo;</h2>
      <p>
        Un bruit de frottement metallique, comme du metal qui gratte contre du
        metal. Souvent present au freinage, mais peut aussi apparaitre en
        roulant normalement. Desagreable pour les oreilles et mauvais signe
        pour le portefeuille.
      </p>

      <h3>Ce que ca peut signifier</h3>
      <ul>
        <li>
          <strong>Plaquettes de frein usees jusqu&apos;au metal</strong> :
          les plaquettes ont un temoin d&apos;usure — une petite piece
          metallique qui touche le disque quand la plaquette est trop fine.
          C&apos;est le bruit que vous entendez. Si vous l&apos;ignorez, le
          support metallique de la plaquette va frotter directement contre le
          disque et le detruire.
        </li>
        <li>
          <strong>Disque de frein raye</strong> : un petit caillou coincé
          entre la plaquette et le disque peut rayer le disque. Le grincement
          est present a chaque tour de roue. Souvent, le caillou finit par
          se deloger, mais le disque reste raye.
        </li>
        <li>
          <strong>Roulement sec</strong> : un roulement (de roue, de pompe a
          eau, d&apos;alternateur) qui manque de graisse produit un grincement
          metallique continu.
        </li>
      </ul>

      <h3>Le risque</h3>
      <p>
        Des freins qui grincent, c&apos;est des freins qui ne fonctionnent
        plus normalement. La distance de freinage augmente, et le risque de
        bloquer une roue aussi. C&apos;est une urgence. Cout : plaquettes +
        disques 150 a 400 euros par essieu, plus si les etriers sont
        endommages.
      </p>

      <h2>Comment l&apos;IA audio detecte ces bruits</h2>
      <p>
        Chez AutoDiag EU, on a developpe une technologie unique : le
        <strong> Scan Sonore</strong>. C&apos;est une intelligence
        artificielle entrainee sur des milliers d&apos;enregistrements de
        moteurs — sains et malades. Voila comment ca marche :
      </p>
      <ul>
        <li>
          Vous placez votre telephone pres du moteur (capot ouvert, moteur
          au ralenti)
        </li>
        <li>
          L&apos;app enregistre 10 secondes de son
        </li>
        <li>
          Notre IA analyse le spectre audio et identifie les frequences
          anormales
        </li>
        <li>
          Elle compare avec sa base de donnees de 11 types de pannes connues
        </li>
        <li>
          Vous recevez un resultat avec un indice de confiance et une
          explication en francais
        </li>
      </ul>
      <p>
        Le Scan Sonore detecte notamment : les cliquetis de distribution, les
        grondements de roulement, les sifflements de courroie, les
        claquements d&apos;injecteur, les grincements de frein, les fuites
        d&apos;air, et les bruits de turbo. Le taux de detection est de 91,3%
        sur les 5 classes principales, verifie sur notre dataset de test.
      </p>
      <p>
        Et quand le Scan Sonore est combine avec la lecture des codes defaut
        OBD2, la precision du diagnostic augmente encore. Par exemple, un
        sifflement + un code P0234 (suralimentation excessive) pointe
        directement vers un probleme de turbo. L&apos;IA croise les
        informations pour vous donner le diagnostic le plus fiable possible.
      </p>

      <h2>Quand faut-il s&apos;inquieter ?</h2>
      <p>
        Tous les bruits ne sont pas egalement urgents. Voici une regle simple
        pour evaluer la situation :
      </p>
      <ul>
        <li>
          <strong>Le bruit apparait puis disparait</strong> : pas de panique,
          mais surveillez. Faites un scan si ca revient.
        </li>
        <li>
          <strong>Le bruit est constant et s&apos;aggrave</strong> : prenez
          rendez-vous chez un mecanicien dans la semaine.
        </li>
        <li>
          <strong>Le bruit est accompagne d&apos;un voyant</strong> :
          diagnostic immediat, ne laissez pas trainer.
        </li>
        <li>
          <strong>Le bruit est fort et soudain</strong> : arretez-vous des que
          possible en securite.
        </li>
      </ul>

      <h2>Ce que vous pouvez faire vous-meme</h2>
      <p>
        Avant de foncer au garage, quelques verifications rapides :
      </p>
      <ul>
        <li>Verifiez le niveau d&apos;huile moteur (jauge)</li>
        <li>Verifiez le niveau de liquide de refroidissement</li>
        <li>
          Regardez sous la voiture : des taches ou des flaques revelent une
          fuite
        </li>
        <li>
          Ecoutez d&apos;ou vient le bruit : avant, arriere, gauche, droite,
          au demarrage, en roulant, au freinage
        </li>
        <li>
          Notez quand le bruit se produit : a froid, a chaud, en accelerant,
          au ralenti, en freinant
        </li>
      </ul>
      <p>
        Ces informations sont precieuses pour le mecanicien. Et avec
        AutoDiag EU, vous pouvez meme enregistrer le bruit et le montrer —
        plus besoin d&apos;essayer de le reproduire au garage (on connait tous
        ce moment ou la voiture decide de ne plus faire le bruit devant le
        mecanicien).
      </p>

      <h2>En resume</h2>
      <p>
        Votre voiture communique avec vous par les bruits. Un cliquetis,
        un grondement, un sifflement, un claquement ou un grincement — chacun
        raconte une histoire. En apprenant a les reconnaitre, vous pouvez
        reagir au bon moment, eviter les pannes couteuses et garder votre
        voiture en bonne sante plus longtemps. Et si vous avez un doute,
        le Scan Sonore d&apos;AutoDiag EU est la pour vous aider a mettre
        un nom sur le bruit.
      </p>
    </ArticleLayout>
  );
}

function ArticleOBD2Comprendre() {
  return (
    <ArticleLayout
      title="OBD2 : tout comprendre en 5 minutes"
      date="2026-02-28"
      author="Reda Kaouani"
      readingTime={6}
      category="Tutoriel"
    >
      <p>
        OBD2. Trois lettres et un chiffre qui font peur a beaucoup de
        conducteurs, alors que c&apos;est en fait quelque chose de tres simple.
        Si vous savez utiliser un telephone, vous savez utiliser l&apos;OBD2.
        Promis. En 5 minutes de lecture, vous allez comprendre ce que
        c&apos;est, comment ca marche, et surtout ce que ca peut faire pour
        vous. Allez, on y va.
      </p>

      <h2>Un peu d&apos;histoire — d&apos;ou ca vient ?</h2>
      <p>
        Tout commence en Californie dans les annees 1980. La pollution
        automobile est un probleme majeur, et les autorites californiennes
        (le fameux CARB — California Air Resources Board) veulent un moyen
        de verifier que les voitures polluent pas trop. Ils inventent le
        premier systeme OBD — On-Board Diagnostics. L&apos;idee est simple :
        obliger les constructeurs a mettre un ordinateur dans la voiture qui
        surveille les emissions polluantes.
      </p>
      <p>
        Le probleme du premier OBD ? Chaque constructeur faisait a sa sauce.
        Le connecteur etait different, le protocole de communication etait
        different, les codes etaient differents. Impossible pour un
        mecanicien d&apos;avoir un seul outil pour toutes les voitures.
      </p>
      <p>
        En 1996, les Etats-Unis imposent l&apos;OBD2 : un standard unique.
        Meme connecteur 16 broches, memes codes de base, memes protocoles
        de communication. Tous les vehicules essence vendus aux USA doivent
        etre equipes. Pour les diesel, ca viendra un peu plus tard.
      </p>
      <p>
        L&apos;Europe suit en 2001 pour les vehicules essence (norme
        EOBD — European On-Board Diagnostics) et en 2004 pour les diesel.
        Depuis, toutes les voitures vendues en Europe sont equipees d&apos;une
        prise OBD2. Votre voiture en a une, c&apos;est garanti.
      </p>

      <h2>Comment ca marche — le trio ECU, PIDs, protocoles</h2>

      <h3>L&apos;ECU — le cerveau de votre voiture</h3>
      <p>
        ECU signifie Electronic Control Unit, ou calculateur electronique en
        francais. C&apos;est un petit ordinateur cache dans votre voiture —
        en fait, les voitures modernes en ont plusieurs dizaines, chacun
        dedie a un systeme (moteur, transmission, ABS, airbags, climatisation,
        etc.).
      </p>
      <p>
        Le calculateur moteur est le plus important pour l&apos;OBD2.
        Il recoit en permanence des informations de dizaines de capteurs :
        temperature du moteur, quantite d&apos;air admis, position de
        l&apos;accelerateur, regime moteur, teneur en oxygene des gaz
        d&apos;echappement, pression du turbo, etc. A partir de ces donnees,
        il calcule la quantite de carburant a injecter, le moment
        d&apos;allumage, la pression de suralimentation — bref, il fait
        tourner votre moteur de facon optimale.
      </p>
      <p>
        Quand un capteur envoie une valeur anormale, ou quand un systeme ne
        fonctionne pas comme prevu, le calculateur enregistre un code defaut
        (DTC) et allume le voyant moteur. C&apos;est ce code que vous lisez
        avec un outil OBD2.
      </p>

      <h3>Les PIDs — les questions que vous posez au calculateur</h3>
      <p>
        PID signifie Parameter ID, ou identifiant de parametre. Quand vous
        utilisez un outil OBD2, vous ne faites pas que lire des codes defaut.
        Vous pouvez aussi poser des questions au calculateur en temps reel.
        Chaque question est un PID.
      </p>
      <p>
        Par exemple :
      </p>
      <ul>
        <li>PID 0x0C : &laquo; Quel est le regime moteur ? &raquo; — reponse : 850 tours/min</li>
        <li>PID 0x0D : &laquo; Quelle est la vitesse du vehicule ? &raquo; — reponse : 0 km/h (au ralenti)</li>
        <li>PID 0x05 : &laquo; Quelle est la temperature du liquide de refroidissement ? &raquo; — reponse : 87 degres</li>
        <li>PID 0x04 : &laquo; Quelle est la charge du moteur ? &raquo; — reponse : 23%</li>
        <li>PID 0x0B : &laquo; Quelle est la pression d&apos;admission ? &raquo; — reponse : 34 kPa</li>
      </ul>
      <p>
        Il existe des centaines de PIDs standardises, plus des PIDs
        specifiques a chaque constructeur. L&apos;OBD2 de base supporte
        environ 20 a 30 PIDs universels, ce qui est deja largement suffisant
        pour un diagnostic complet.
      </p>

      <h3>Les protocoles — la langue de communication</h3>
      <p>
        Pour que votre telephone (ou votre outil de diagnostic) puisse parler
        au calculateur, il faut qu&apos;ils parlent la meme langue. Il existe
        5 protocoles OBD2 principaux :
      </p>
      <ul>
        <li>
          <strong>CAN-Bus (ISO 15765)</strong> : le plus repandu depuis 2008.
          Toutes les voitures recentes l&apos;utilisent. Rapide et fiable.
        </li>
        <li>
          <strong>ISO 9141-2</strong> : utilise par les voitures europeennes
          et asiatiques des annees 2000. Chrysler aussi.
        </li>
        <li>
          <strong>KWP2000 (ISO 14230)</strong> : variante europeenne, souvent
          chez les constructeurs allemands et coreens des annees 2000-2008.
        </li>
        <li>
          <strong>SAE J1850 PWM</strong> : utilise par Ford (surtout marche
          americain).
        </li>
        <li>
          <strong>SAE J1850 VPW</strong> : utilise par General Motors (surtout
          marche americain).
        </li>
      </ul>
      <p>
        La bonne nouvelle ? Vous n&apos;avez pas a choisir le protocole.
        Un bon outil OBD2 (et un bon dongle comme le ELM327) detecte
        automatiquement quel protocole votre voiture utilise. AutoDiag EU
        gere les 5 protocoles de facon transparente.
      </p>

      <h2>Ce que vous pouvez faire avec l&apos;OBD2</h2>
      <p>
        L&apos;OBD2 n&apos;est pas juste un lecteur de codes defaut.
        Voici tout ce que ca permet :
      </p>

      <h3>1. Lire et effacer les codes defaut</h3>
      <p>
        La fonction de base. Vous voyez les codes actifs (en cours) et les
        codes en memoire (problemes passes). Vous pouvez effacer les codes
        une fois le probleme repare — ca eteint le voyant moteur. Attention :
        effacer sans reparer ne sert a rien, le code reviendra.
      </p>

      <h3>2. Suivre les donnees en temps reel (live data)</h3>
      <p>
        C&apos;est la fonction la plus interessante pour les passionnes. Vous
        pouvez voir en direct le regime moteur, la temperature, la pression
        du turbo, la consommation instantanee, la position du papillon, la
        tension batterie, et bien d&apos;autres parametres. C&apos;est comme
        avoir un tableau de bord de course sur votre telephone.
      </p>

      <h3>3. Verifier les moniteurs de readiness</h3>
      <p>
        Avant le controle technique, vous pouvez verifier que tous les
        auto-tests du calculateur sont termines. Si un moniteur n&apos;est
        pas &laquo; pret &raquo;, ca peut poser probleme au CT. AutoDiag EU
        vous montre clairement l&apos;etat de chaque moniteur.
      </p>

      <h3>4. Tester les capteurs</h3>
      <p>
        Vous pouvez verifier que chaque capteur envoie des valeurs coherentes.
        Une sonde lambda qui ne bouge pas, un capteur de temperature qui
        affiche -40 degres en plein ete, un debitmetre qui donne des valeurs
        erratiques — tout ca se voit dans les donnees OBD2.
      </p>

      <h3>5. Faire un diagnostic preventif</h3>
      <p>
        En surveillant regulierement les donnees, vous pouvez detecter des
        tendances avant que le probleme ne devienne visible. Une temperature
        moteur qui monte progressivement sur plusieurs semaines, une tension
        batterie qui baisse lentement, un capteur qui commence a deriver —
        c&apos;est de la maintenance predictive a portee de tous.
      </p>

      <h2>Les dongles ELM327 — le pont entre votre voiture et votre telephone</h2>
      <p>
        L&apos;ELM327 est une puce electronique concue par la societe
        canadienne ELM Electronics. C&apos;est elle qui traduit le langage
        OBD2 de votre voiture en donnees que votre telephone peut comprendre.
        Elle est integree dans un petit boitier (le &laquo; dongle &raquo;)
        que vous branchez sur la prise OBD2.
      </p>

      <h3>Les differents types de dongles</h3>
      <ul>
        <li>
          <strong>Bluetooth classique</strong> : compatible Android
          uniquement. Prix : 10 a 30 euros. Inconvenient : les modeles a 10
          euros sont souvent des clones chinois avec une puce ELM327 v1.5
          qui ne supporte pas tous les protocoles.
        </li>
        <li>
          <strong>Bluetooth Low Energy (BLE)</strong> : compatible Android et
          iOS. C&apos;est ce qu&apos;on recommande. Le Vgate iCar Pro BLE est
          notre reference : veritable puce ELM327 v2.1, tous les protocoles
          supportes, compatible CAN-Bus, et ca coute environ 25 euros.
        </li>
        <li>
          <strong>Wi-Fi</strong> : compatible iOS et Android. Avantage : bonne
          vitesse de transfert. Inconvenient : il cree son propre reseau Wi-Fi,
          ce qui deconnecte votre telephone de votre Wi-Fi habituel.
        </li>
        <li>
          <strong>USB</strong> : pour les ordinateurs portables. Utilise
          surtout par les pros avec des logiciels PC.
        </li>
      </ul>

      <h3>Notre recommandation</h3>
      <p>
        Pour utiliser AutoDiag EU, on recommande le <strong>Vgate iCar Pro
        2S Bluetooth BLE</strong>. Il coute environ 25 euros, il est fiable,
        il supporte tous les protocoles OBD2, et on l&apos;a teste en
        conditions reelles sur des dizaines de vehicules europeens (Renault,
        Peugeot, Volkswagen, BMW, Mercedes, Fiat, Opel, Skoda, Seat, Audi,
        Toyota, etc.). Evitez les dongles a moins de 10 euros — ils utilisent
        souvent de fausses puces qui ne fonctionnent pas correctement.
      </p>

      <h2>Ce que l&apos;OBD2 ne peut pas faire</h2>
      <p>
        Soyons honnetes — l&apos;OBD2 a ses limites :
      </p>
      <ul>
        <li>
          Il ne couvre pas tout. Les systemes proprietaires (climatisation
          avancee, multimedia, suspension pilotee) ne sont souvent accessibles
          que via des outils constructeur specifiques.
        </li>
        <li>
          Il ne remplace pas un mecanicien. Il vous donne l&apos;information,
          mais il ne repare pas la voiture.
        </li>
        <li>
          Les codes constructeur (P1xxx) ne sont pas toujours documentes
          publiquement. AutoDiag EU en couvre 250 avec des explications
          completes, mais il en existe des milliers.
        </li>
        <li>
          La vitesse de rafraichissement des donnees est limitee. Ne vous
          attendez pas a des mises a jour 60 fois par seconde comme un jeu
          video — c&apos;est plutot 2 a 10 fois par seconde selon le nombre
          de PIDs.
        </li>
      </ul>

      <h2>L&apos;avenir — OBD3 et diagnostics sans fil</h2>
      <p>
        L&apos;OBD2 a plus de 25 ans, et il commence a montrer ses limites.
        L&apos;OBD3 est en discussion : il integrerait une connexion
        cellulaire directe pour que la voiture communique ses donnees de
        diagnostic a distance, sans avoir besoin de brancher quoi que ce soit.
        En attendant, certains constructeurs proposent deja des API
        (Smartcar, par exemple) qui permettent de lire des donnees a distance
        via le cloud. AutoDiag EU integre deja Smartcar pour les vehicules
        compatibles (plus de 40 constructeurs).
      </p>
      <p>
        Mais la vraie revolution, c&apos;est ce qu&apos;on fait chez
        AutoDiag EU avec le diagnostic multi-capteurs : OBD2 + audio IA +
        vision IA + accelerometre + GPS. En combinant toutes ces sources
        d&apos;information, on peut detecter des problemes que l&apos;OBD2
        seul ne voit pas. Un amortisseur fatigue ne genere aucun code defaut,
        mais notre analyse du rebond (via l&apos;accelerometre) le detecte.
        Un disque de frein voile ne declenche aucun voyant, mais notre
        analyse frequentielle du freinage le revele.
      </p>

      <h2>En resume</h2>
      <p>
        L&apos;OBD2, c&apos;est simplement un moyen de communiquer avec
        l&apos;ordinateur de bord de votre voiture. Avec un dongle a 25
        euros et AutoDiag EU sur votre telephone, vous avez acces a des
        informations qui coutaient des milliers d&apos;euros il y a 20 ans.
        Vous pouvez comprendre pourquoi un voyant s&apos;allume, suivre la
        sante de votre moteur en temps reel, et preparer votre controle
        technique en toute serenite. Le diagnostic automobile democratise,
        c&apos;est maintenant.
      </p>
    </ArticleLayout>
  );
}

function ArticleAutodiagVsGarage() {
  return (
    <ArticleLayout
      title="AutoDiag EU vs garage : combien vous economisez vraiment"
      date="2026-02-20"
      author="Reda Kaouani"
      readingTime={8}
      category="Economies"
    >
      <p>
        Soyons francs : personne n&apos;aime depenser de l&apos;argent chez le
        garagiste. Non pas que les mecaniciens ne meritent pas leur salaire —
        ils font un boulot formidable — mais parce que le diagnostic est
        souvent la partie la plus frustrante de la facture. Vous payez pour
        savoir ce qui ne va pas, avant meme de payer pour la reparation. Et
        si on vous disait que cette premiere etape, le diagnostic, vous
        pouvez la faire vous-meme, gratuitement ou presque ?
      </p>

      <h2>Combien coute un diagnostic en garage ?</h2>
      <p>
        Le prix d&apos;un diagnostic automobile varie enormement selon le
        pays, le type de garage (independant ou concession), et la
        complexite du probleme. Voici les moyennes qu&apos;on a collectees
        aupres de plus de 200 garages en Europe :
      </p>

      <h3>France</h3>
      <ul>
        <li>Lecture simple des codes defaut : 30 a 60 euros</li>
        <li>Diagnostic complet (codes + mesures + analyse) : 60 a 120 euros</li>
        <li>Diagnostic en concession : 80 a 150 euros</li>
        <li>Diagnostic specialise (electronique, boite auto) : 100 a 200 euros</li>
      </ul>
      <p>
        En moyenne, un proprietaire francais depense environ 85 euros pour un
        diagnostic complet en garage independant, et 120 euros en concession.
      </p>

      <h3>Allemagne</h3>
      <ul>
        <li>Fehlerspeicher auslesen (lecture codes) : 25 a 50 euros</li>
        <li>Diagnose complet : 80 a 180 euros</li>
        <li>Diagnose en concession (Vertragswerkstatt) : 120 a 250 euros</li>
        <li>Les concessions premium (BMW, Mercedes, Audi) : 150 a 300 euros</li>
      </ul>
      <p>
        L&apos;Allemagne est plus chere, surtout en concession. Un
        proprietaire de BMW qui va chez le concessionnaire pour un diagnostic
        moteur paie en moyenne 180 euros. Et ca, c&apos;est juste pour savoir
        quel est le probleme.
      </p>

      <h3>Suisse</h3>
      <ul>
        <li>Lecture des codes : 40 a 80 CHF</li>
        <li>Diagnostic complet : 100 a 200 CHF</li>
        <li>Diagnostic en concession (garage officiel) : 150 a 300 CHF</li>
        <li>Le taux horaire moyen en garage suisse : 140 a 180 CHF</li>
      </ul>
      <p>
        La Suisse est le pays le plus cher pour le diagnostic automobile. Un
        simple passage au garage peut facilement couter 200 CHF avant meme
        qu&apos;une cle a molette ne soit sortie de la boite a outils.
      </p>

      <h3>Espagne et Portugal</h3>
      <ul>
        <li>Espagne : 20 a 50 euros pour la lecture, 50 a 100 euros pour le diagnostic complet</li>
        <li>Portugal : 15 a 40 euros pour la lecture, 40 a 80 euros pour le diagnostic complet</li>
      </ul>
      <p>
        Les pays du sud sont plus abordables, mais la proportion du cout
        par rapport au salaire moyen est similaire.
      </p>

      <h2>Ce que propose AutoDiag EU</h2>

      <h3>La version gratuite — deja tres complete</h3>
      <p>
        Avec la version gratuite d&apos;AutoDiag EU, vous avez acces a :
      </p>
      <ul>
        <li>Lecture illimitee des codes defaut — pas de limite, lisez autant de codes que vous voulez</li>
        <li>Explication en francais de chaque code — causes probables, gravite, conseils</li>
        <li>4 PIDs de base en temps reel (regime moteur, vitesse, temperature, charge)</li>
        <li>1 scan audio moteur par semaine — notre IA ecoute votre moteur</li>
        <li>1 scan audio habitacle par semaine</li>
        <li>3 questions par jour a l&apos;IA mecanicien</li>
        <li>Historique sur 7 jours</li>
      </ul>
      <p>
        Cout : 0 euro. Plus un dongle ELM327 BLE a environ 25 euros (achat
        unique, vous le gardez a vie). Total de l&apos;investissement la
        premiere annee : 25 euros.
      </p>

      <h3>La version Premium — 49 CHF par an</h3>
      <p>
        Pour les passionnes ou ceux qui veulent tout, le Premium debloque :
      </p>
      <ul>
        <li>Scans audio illimites (moteur + habitacle)</li>
        <li>Tous les PIDs disponibles en temps reel</li>
        <li>Effacement des codes defaut</li>
        <li>Devis et estimation des couts de reparation</li>
        <li>Pre-controle technique pour 5 pays</li>
        <li>Export PDF des rapports de diagnostic</li>
        <li>Drive Test sans dongle (accelerometre + gyroscope)</li>
        <li>Questions illimitees a l&apos;IA mecanicien</li>
        <li>Historique illimite</li>
      </ul>
      <p>
        Cout : 49 CHF/an (environ 50 euros), soit 4,08 CHF par mois. Avec
        7 jours d&apos;essai gratuit, sans carte bancaire.
      </p>

      <h2>Les vrais calculs — combien vous economisez</h2>
      <p>
        Arretons les generalites et faisons des calculs concrets. Prenons
        3 scenarios reels que nos beta-testeurs ont vecu :
      </p>

      <h3>Scenario 1 — Le voyant moteur classique</h3>
      <p>
        Marie, proprietaire d&apos;une Peugeot 308 de 2018, voit son voyant
        moteur s&apos;allumer. Au garage, le mecanicien fait un diagnostic :
        code P0420, catalyseur. Il recommande le remplacement du catalyseur
        pour 1 200 euros.
      </p>
      <p>
        Avec AutoDiag EU, Marie lit le code elle-meme en 30 secondes.
        L&apos;app lui explique que P0420 peut aussi etre cause par une sonde
        lambda defaillante (cout : 80 a 150 euros) et lui conseille de
        verifier les donnees de la sonde en temps reel. Elle regarde les
        donnees live, constate que la sonde arriere ne reagit presque plus,
        et fait remplacer uniquement la sonde pour 120 euros.
      </p>
      <p>
        <strong>Economie : 1 080 euros</strong> (le garage aurait change le
        catalyseur inutilement). Plus les 60 euros de diagnostic non payes.
        Total economise : 1 140 euros.
      </p>

      <h3>Scenario 2 — La preparation au controle technique</h3>
      <p>
        Thomas, en Suisse avec une VW Golf VII de 2015, doit passer le MFK.
        S&apos;il va au garage pour un pre-diagnostic, ca lui coute 150 CHF.
        Et s&apos;il rate le MFK, la contre-visite est un stress supplementaire.
      </p>
      <p>
        Avec AutoDiag EU Premium, Thomas fait un scan complet 3 semaines
        avant le MFK. L&apos;app detecte un code P0401 (debit EGR insuffisant)
        et des moniteurs de readiness pas encore valides. Thomas fait nettoyer
        la vanne EGR (80 CHF chez un petit garage), roule 100 km pour valider
        les moniteurs, et passe le MFK du premier coup.
      </p>
      <p>
        <strong>Economie : 150 CHF</strong> de pre-diagnostic garage + stress
        evite. En comptant le Premium a 49 CHF/an, il est deja gagnant des
        la premiere utilisation.
      </p>

      <h3>Scenario 3 — Le bruit mysterieux</h3>
      <p>
        Ahmed, en Allemagne avec une BMW Serie 3 F30 de 2014, entend un
        sifflement au demarrage. Il va chez BMW : 180 euros de diagnostic,
        verdict &laquo; courroie d&apos;accessoires + galet tendeur, devis
        450 euros &raquo;.
      </p>
      <p>
        Avec AutoDiag EU, Ahmed fait un Scan Sonore qui identifie un
        &laquo; sifflement de courroie &raquo; avec 87% de confiance. L&apos;app
        lui explique que c&apos;est souvent juste la courroie (pas le galet)
        et qu&apos;un mecanicien independant peut la changer pour 100 a 150
        euros. Ahmed fait changer la courroie seule chez un independant pour
        120 euros. Le sifflement disparait.
      </p>
      <p>
        <strong>Economie : 180 euros</strong> de diagnostic BMW + 300 euros
        de galet non necessaire = 480 euros economises.
      </p>

      <h2>Le calcul annuel</h2>
      <p>
        En moyenne, un proprietaire de voiture fait 1 a 3 visites de
        diagnostic par an. Voici le calcul sur une annee :
      </p>

      <h3>Sans AutoDiag EU (garage)</h3>
      <ul>
        <li>2 diagnostics par an en moyenne</li>
        <li>Cout moyen : 85 euros (France) / 150 euros (Allemagne) / 170 CHF (Suisse)</li>
        <li>Total annuel : 170 euros (FR) / 300 euros (DE) / 340 CHF (CH)</li>
      </ul>

      <h3>Avec AutoDiag EU</h3>
      <ul>
        <li>Dongle ELM327 : 25 euros (achat unique, amorti sur 5+ ans = 5 euros/an)</li>
        <li>Premium : 49 CHF/an (environ 50 euros)</li>
        <li>Total annuel : 55 euros (version Premium) ou 5 euros (version gratuite)</li>
      </ul>

      <h3>Economie annuelle</h3>
      <ul>
        <li>France : 115 a 165 euros/an</li>
        <li>Allemagne : 245 a 295 euros/an</li>
        <li>Suisse : 285 a 335 CHF/an</li>
      </ul>
      <p>
        Et ca, c&apos;est sans compter les diagnostics evites grace a la
        surveillance continue. Quand vous surveillez regulierement votre
        voiture, vous detectez les problemes tot, quand ils sont encore peu
        couteux a reparer. Un capteur de temperature a 40 euros aujourd&apos;hui
        peut vous eviter un joint de culasse a 2 000 euros dans 6 mois.
      </p>

      <h2>Quand faut-il quand meme aller au garage ?</h2>
      <p>
        On ne va pas pretendre qu&apos;AutoDiag EU remplace un mecanicien.
        Ce serait malhonnete. Voici les situations ou le garage reste
        indispensable :
      </p>
      <ul>
        <li>
          <strong>Reparations mecaniques</strong> : diagnostiquer un
          probleme, c&apos;est une chose. Le reparer, c&apos;en est une autre.
          Si ca necessite des outils specifiques, de la force physique ou
          un pont elevateur, confiez ca a un pro.
        </li>
        <li>
          <strong>Problemes de securite</strong> : freins, direction, airbags,
          suspension — tout ce qui touche directement a votre securite doit
          etre repare par un professionnel qualifie.
        </li>
        <li>
          <strong>Garantie constructeur</strong> : si votre voiture est sous
          garantie, les reparations doivent etre faites dans le reseau agree
          pour maintenir la garantie.
        </li>
        <li>
          <strong>Diagnostics complexes</strong> : certains problemes
          intermittents ou multi-systemes necessitent l&apos;experience
          d&apos;un mecanicien chevronné et des outils constructeur specifiques.
        </li>
      </ul>
      <p>
        L&apos;idee, c&apos;est que vous arriviez au garage en sachant deja
        ce qui ne va pas. Vous gagnez du temps, le mecanicien aussi, et la
        facture s&apos;en ressent. Un client informe est un client qui paie
        le juste prix.
      </p>

      <h2>La comparaison avec les autres apps</h2>
      <p>
        AutoDiag EU n&apos;est pas la seule app de diagnostic OBD2 sur le
        marche. Mais voici ce qui nous differencie :
      </p>
      <ul>
        <li>
          <strong>Carly</strong> : excellente app, mais l&apos;abonnement
          coute 54,99 euros/an et le dongle proprietaire coute 59,90 euros.
          Total premiere annee : 115 euros. Et pas de scan audio IA.
        </li>
        <li>
          <strong>Car Scanner</strong> : gratuit en version de base, mais
          le premium est a 39,99 euros/an et il n&apos;offre pas de diagnostic
          audio ni de pre-controle technique.
        </li>
        <li>
          <strong>OBDeleven</strong> : tres bien pour le groupe VAG
          (Volkswagen, Audi, Skoda, Seat), mais limite pour les autres
          marques. Le dongle coute 59,95 euros.
        </li>
      </ul>
      <p>
        AutoDiag EU : 49 CHF/an Premium (ou gratuit), dongle standard a 25
        euros, scan audio IA unique sur le marche, pre-CT 5 pays, IA
        mecanicien personnalisee, 677 vehicules europeens supportes. Le
        meilleur rapport qualite/prix, et des fonctionnalites qu&apos;aucun
        concurrent ne propose.
      </p>

      <h2>Le vrai cout de ne PAS diagnostiquer</h2>
      <p>
        Le plus gros risque financier, ce n&apos;est pas le cout du
        diagnostic. C&apos;est le cout de l&apos;absence de diagnostic. Un
        voyant moteur ignore pendant 6 mois, c&apos;est potentiellement :
      </p>
      <ul>
        <li>Un catalyseur detruit : 800 a 2 500 euros</li>
        <li>Un turbo grille : 1 500 a 3 500 euros</li>
        <li>Un joint de culasse claque : 1 500 a 3 000 euros</li>
        <li>Un FAP obstrue au point de devoir etre remplace : 1 000 a 2 500 euros</li>
        <li>Un moteur a refaire : 3 000 a 8 000 euros</li>
      </ul>
      <p>
        La plupart de ces pannes majeures commencent par un petit probleme
        detectable a temps. Un diagnostic regulier — meme une fois par mois,
        en 2 minutes avec AutoDiag EU — c&apos;est votre meilleure assurance
        contre les grosses factures.
      </p>

      <h2>En resume</h2>
      <p>
        Le diagnostic automobile ne devrait pas etre un luxe. Avec AutoDiag EU
        et un dongle a 25 euros, vous avez un outil de diagnostic
        professionnel dans votre poche, disponible 24h/24, qui vous explique
        clairement ce qui se passe dans votre voiture. Vous economisez entre
        100 et 300 euros par an en diagnostics garage, vous detectez les
        problemes tot, et vous arrivez chez le mecanicien en sachant
        exactement ce qu&apos;il faut reparer. C&apos;est gagnant-gagnant :
        pour vous, pour votre portefeuille, et pour votre voiture.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Content mapping
   ================================================================ */

const articleComponents: Record<string, () => React.JSX.Element> = {
  /* FR articles */
  "voyant-moteur-allume-que-faire": ArticleVoyantMoteurQueFaire,
  "preparer-controle-technique-2026": ArticlePreparerCT2026,
  "10-codes-defaut-frequents-europe": Article10CodesDefautFrequentsEurope,
  "comment-lire-code-defaut-obd2": ArticleCommentLireCodeDefautOBD2,
  "preparer-controle-technique": ArticlePreparerControleTechnique,
  "5-bruits-moteur-a-ne-pas-ignorer": Article5BruitsMoteur,
  "obd2-comprendre-en-5-minutes": ArticleOBD2Comprendre,
  "autodiag-vs-garage-economies": ArticleAutodiagVsGarage,
  /* EN articles */
  "check-engine-light-what-to-do": ArticleCheckEngineLightWhatToDo,
  "mot-preparation-guide-2026": ArticleMOTPreparationGuide2026,
  "top-10-mot-failure-reasons-2026": ArticleTop10MOTFailureReasons,
  "how-to-prepare-car-for-mot": ArticleHowToPrepareCarForMOT,
  "best-obd2-app-uk-2026": ArticleBestOBD2AppUK2026,
  "obd2-fault-codes-explained-uk": ArticleOBD2FaultCodesExplainedUK,
  "car-diagnostic-app-vs-garage-uk": ArticleCarDiagnosticAppVsGarageUK,
  /* DE articles */
  "obd2-fehlercodes-lesen-anleitung": ArticleDEOBD2FehlercodesLesen,
  "tuv-vorbereitung-checkliste": ArticleDETUVVorbereitung,
  "5-motorgerausche-nicht-ignorieren": ArticleDE5Motorgerausche,
  "obd2-verstehen-in-5-minuten": ArticleDEOBD2Verstehen,
  "autodiag-vs-werkstatt-ersparnisse": ArticleDEAutodiagVsWerkstatt,
  /* ES articles */
  "como-leer-codigos-fallo-obd2": ArticleESCodigosFalloOBD2,
  "preparar-itv-lista-completa": ArticleESPrepararITV,
  "5-ruidos-motor-no-ignorar": ArticleES5RuidosMotor,
  "obd2-entender-en-5-minutos": ArticleESOBD2Entender,
  "autodiag-vs-taller-ahorros": ArticleESAutodiagVsTaller,
  /* PT articles */
  "como-ler-codigos-erro-obd2": ArticlePTCodigosErroOBD2,
  "preparar-ipo-lista-completa": ArticlePTPrepararIPO,
  "5-ruidos-motor-nao-ignorar": ArticlePT5RuidosMotor,
  "obd2-compreender-em-5-minutos": ArticlePTOBD2Compreender,
  "autodiag-vs-oficina-poupancas": ArticlePTAutodiagVsOficina,
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  const ArticleComponent = articleComponents[slug];
  const post = getBlogPost(slug);
  if (!ArticleComponent || !post) {
    notFound();
  }

  const siteUrl = "https://www.autodiag-eu.com";
  const articleUrl = `${siteUrl}/${locale}/blog/${post.slug}`;
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(
    post.title
  )}&description=${encodeURIComponent(post.description)}`;

  const articleSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Article" as const,
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person" as const,
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    image: ogImage,
    mainEntityOfPage: {
      "@type": "WebPage" as const,
      "@id": articleUrl,
    },
    publisher: {
      "@type": "Organization" as const,
      name: "AutoDiag EU",
      logo: {
        "@type": "ImageObject" as const,
        url: `${siteUrl}/images/icon-192.png`,
      },
    },
  };

  return (
    <>
      <SchemaMarkup type="Article" data={articleSchema} />
      <ArticleComponent />
    </>
  );
}

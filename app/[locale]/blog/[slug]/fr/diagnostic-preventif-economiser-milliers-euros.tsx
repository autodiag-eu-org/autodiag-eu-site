import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDiagnosticPreventifEconomies() {
  const faq: FaqItem[] = [
    {
      q: "Combien peut-on reellement economiser en diagnostic preventif ?",
      a: "Pour un usage normal avec une voiture de plus de cinq ans, on observe facilement entre 800 et 2500 euros d&apos;economies par an. Cela vient de pannes detectees avant casse (roulements, distribution, lambda) et de pieces remplacees au bon moment plutot qu&apos;en urgence. L&apos;economie ne vient pas d&apos;une seule grosse piece mais d&apos;une accumulation de petites decisions prises au bon moment.",
    },
    {
      q: "Un scan sonore mensuel est-il vraiment utile ?",
      a: "Oui. La plupart des usures mecaniques evoluent sur plusieurs semaines ou mois. Un scan mensuel permet de voir la courbe plutot que l&apos;instantane. Une confiance qui passe de 15% a 60% sur une classe bearing noise en trois mois est un signal clair et impossible a detecter avec un seul scan.",
    },
    {
      q: "Quelles sont les pannes les plus rentables a prevenir ?",
      a: "Dans l&apos;ordre : la casse moteur liee a une distribution negligee (economies jusqu&apos;a 5000 euros), le catalyseur detruit par une lambda fatiguee (1500 a 2500 euros), le turbo casse par un manque d&apos;huile (1500 a 3000 euros), la boite de vitesses grillee par un embrayage qui patine trop longtemps (2000 a 4500 euros), et les pneus detruits par un defaut de geometrie ou d&apos;amortisseur (300 a 800 euros).",
    },
    {
      q: "Comment prioriser quand on a plusieurs alertes ?",
      a: "Utilisez le score de sante : traitez d&apos;abord ce qui pese le plus dans le calcul. Un code OBD2 critique passe avant une anomalie sonore a 55% de confiance. Une fuite visuelle active passe avant une legere corrosion superficielle. Le score indique la hierarchie en un coup d&apos;oeil.",
    },
    {
      q: "Faut-il tout reparer immediatement ?",
      a: "Non. Certaines anomalies peuvent etre surveillees avant d&apos;etre traitees, a condition de les surveiller vraiment. L&apos;application permet de suivre l&apos;evolution et vous alerte quand un seuil est franchi. La reparation immediate n&apos;est necessaire que pour les pannes critiques ou qui affectent la securite directement.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Diagnostic preventif : comment economiser plusieurs milliers d&apos;euros par an"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Economies"
      >
        <p>
          Personne n&apos;aime payer une reparation non prevue. Un devis de
          1800 euros un vendredi apres-midi, c&apos;est le genre de moment
          ou on se demande pourquoi on n&apos;a rien vu venir. La plupart
          du temps, ces grosses factures ne sont pas des fatalites. Ce sont
          des petites pannes laissees sans traitement jusqu&apos;a ce
          qu&apos;elles cassent autre chose. Le diagnostic preventif n&apos;a
          qu&apos;un seul objectif : casser cette cascade.
        </p>

        <h2>La regle d&apos;or : detecter avant la casse</h2>
        <p>
          Un roulement de roue qui commence a marquer coute 150 euros a
          remplacer. Laisse en place trop longtemps, il detruit son moyeu
          (400 euros), abime le disque par echauffement (120 euros), use un
          pneu en biais (180 euros) et peut meme fragiliser le porte-fusee
          (250 euros). La meme panne, detectee tot, coute 150 euros.
          Detectee tard, elle coute 900 euros. Le scan sonore detecte la
          signature bearing noise des 5% d&apos;usure anormale, bien avant
          que vous ne l&apos;entendiez. Voir{" "}
          <Link href="/fr/blog/roulement-moteur-fatigue-ia-entend">
            l&apos;article sur les roulements fatigues
          </Link>
          .
        </p>

        <h2>Cas n 1 : la sonde lambda fatiguee</h2>
        <p>
          Une sonde lambda amont a une duree de vie typique de 150000 km.
          Quand elle commence a fatiguer, elle envoie des valeurs biaisees
          au calculateur qui compense en enrichissant le melange. Consommation
          en hausse, catalyseur sursollicite, puis un{" "}
          <Link href="/fr/codes/p0420">code P0420</Link> qui apparait quand
          le catalyseur est attaque. Reparer la lambda a temps : 80 a 150
          euros. Reparer la lambda plus le catalyseur : 1200 a 2000 euros.
          Detection preventive : le scan OBD2 voit les derives de lambda
          bien avant que le seuil de code ne soit atteint.
        </p>

        <h2>Cas n 2 : la courroie de distribution</h2>
        <p>
          Le scenario catastrophe par excellence. Sur un moteur dit a
          interference (la majorite des moteurs modernes), une rupture de
          distribution casse les soupapes sur les pistons. Resultat :
          refection complete voire remplacement moteur, 3500 a 6000 euros.
          Une distribution changee a temps (entre 100000 et 160000 km selon
          modele) coute entre 500 et 1200 euros. Le scan sonore identifie
          les signatures de desserrage ou tension anormale avant la casse.
          Voir{" "}
          <Link href="/fr/blog/courroie-distribution-usee-detecter-par-son">
            detecter une courroie de distribution usee par le son
          </Link>
          .
        </p>

        <h2>Cas n 3 : le turbo et ses flaques</h2>
        <p>
          Un turbo qui commence a couler de l&apos;huile par le palier
          d&apos;arbre finit par manquer de lubrification et se serrer. La
          detection visuelle d&apos;une trace d&apos;huile sur la durite
          d&apos;admission, associee a un sifflement anormal, permet
          d&apos;intervenir pour 400 a 800 euros (reprise d&apos;etancheite
          ou echange standard cartouche). Un turbo qui a rendu l&apos;ame :
          1500 a 3000 euros, plus les degats d&apos;huile avalee par le
          moteur si ca va trop loin.
        </p>

        <h2>Cas n 4 : les amortisseurs et leurs degats collateraux</h2>
        <p>
          Un amortisseur qui fuit cesse progressivement d&apos;amortir. Le
          pneu rebondit au lieu de suivre la route, l&apos;usure devient
          inegale, les disques chauffent plus, le train roulant vieillit
          plus vite. Changer une paire d&apos;amortisseurs : 300 a 500
          euros. Ne pas les changer : une paire de pneus a 400 euros par an
          plus usure acceleree de tout le train. L&apos;analyse
          accelerometre du Drive Test mesure le coefficient
          d&apos;amortissement zeta en roulant sur un dos d&apos;ane, sans
          demontage.
        </p>

        <h2>Cas n 5 : les injecteurs diesel encrasses</h2>
        <p>
          Un injecteur qui fuit legerement envoie plus de carburant que
          prevu dans son cylindre. Symptome : consommation anormale, fumees
          noires, code misfire ponctuel. Laisse trop longtemps, il finit
          par endommager le piston ou le catalyseur FAP. Nettoyer ou
          remplacer un injecteur a temps : 150 a 400 euros. Reparer les
          degats apres : 1500 euros et plus. La fusion scan sonore (classe
          injector noise) plus OBD2 (fuel trims anormaux) donne une
          detection precoce fiable.
        </p>

        <h2>Le bilan annuel d&apos;un proprietaire attentif</h2>
        <p>
          Prenons un exemple chiffre sur une voiture de 9 ans, 130000 km.
          Sur l&apos;annee, l&apos;application a detecte : une derive
          lambda (reparee pour 110 euros, 1000 euros economises sur le
          catalyseur), un roulement naissant (180 euros, 600 euros
          economises sur le disque et le pneu), une amorce de fuite turbo
          (400 euros de reprise d&apos;etancheite, 1800 euros economises
          sur l&apos;echange complet), et une usure de plaquettes detectee
          en avance (70 euros, 250 euros economises sur le disque raye).
          Total depense : 760 euros. Total economise : 3650 euros. Marge
          nette : environ 2890 euros sur l&apos;annee.
        </p>

        <h2>Le paradoxe de la prevention</h2>
        <p>
          Le probleme de la prevention, c&apos;est qu&apos;on ne voit
          jamais les catastrophes qu&apos;elle a evitees. On voit seulement
          le prix des petites reparations qu&apos;on a faites. C&apos;est
          pour cette raison que beaucoup de proprietaires negligent le
          diagnostic preventif : ils n&apos;ont pas le reflexe de comparer
          le cout reel des interventions faites avec le cout qu&apos;elles
          auraient atteint sans intervention. Le score de sante, historise
          dans l&apos;application, rend ce comparatif visible et concret.
          Voir{" "}
          <Link href="/fr/blog/score-sante-vehicule-comment-calculer-note-100">
            comment le score de sante est calcule
          </Link>
          .
        </p>

        <h2>Le vrai luxe, c&apos;est la tranquillite</h2>
        <p>
          Au-dela des chiffres, le diagnostic preventif apporte quelque
          chose de difficile a monetiser : vous savez ou en est votre
          voiture. Plus de doute, plus d&apos;angoisse, plus de devis
          surprise. Vous partez en week-end en sachant que tout est OK.
          Vous vendez votre voiture avec un historique clair et un score
          recent. Ca aussi, ca a de la valeur.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

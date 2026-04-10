import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

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
      <ArticleLayoutV2
      locale="fr"
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
      </ArticleLayoutV2>
    </>
  );
}

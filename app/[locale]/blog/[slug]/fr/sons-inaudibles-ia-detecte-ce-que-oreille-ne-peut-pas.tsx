import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleSonsInaudibles() {
  const faq: FaqItem[] = [
    {
      q: "Mon telephone peut-il vraiment capter les ultrasons ?",
      a: "Oui, en partie. La plupart des smartphones modernes utilisent des microphones MEMS avec une reponse lineaire jusqu&apos;a 20-22 kHz, et une reponse reduite mais exploitable jusqu&apos;a 24 kHz. Au-dela, la reponse chute. Pour le diagnostic moteur, cette plage est largement suffisante : la quasi-totalite des signatures de panne se trouve entre 50 Hz et 16 kHz.",
    },
    {
      q: "L&apos;oreille humaine entend-elle vraiment jusqu&apos;a 20 kHz ?",
      a: "En theorie oui, dans la jeunesse. En pratique, la limite chute de 1 kHz environ par decennie apres 20 ans. A 50 ans, beaucoup de personnes ne depassent plus 13 kHz. Pire, la sensibilite chute bien avant le seuil : une frequence a 10 kHz est deja 20 dB moins audible qu&apos;une frequence a 1 kHz.",
    },
    {
      q: "Pourquoi parler d&apos;infrasons pour un moteur ?",
      a: "Les grosses masses en rotation — vilebrequin, volant moteur, embrayage — produisent des vibrations tres basse frequence, parfois en dessous de 20 Hz. Ces infrasons sont impossibles a entendre mais un micro les capte. Un desequilibrage de vilebrequin peut apparaitre a 12-15 Hz, une zone totalement sourde pour l&apos;oreille.",
    },
    {
      q: "Un micro externe est-il plus precis que celui du telephone ?",
      a: "Un micro de mesure calibre est plus fidele, oui, mais le micro de smartphone moderne est suffisant pour le diagnostic. Ce qui compte, c&apos;est que la reponse soit repetable d&apos;une mesure a l&apos;autre. L&apos;IA n&apos;a pas besoin de precision absolue, elle a besoin de coherence pour comparer vos scans dans le temps.",
    },
    {
      q: "Pourquoi certaines pannes sonnent pareil pour moi ?",
      a: "Parce que votre oreille lisse les differences. Elle ne decompose pas un bruit en frequences, elle percoit une texture globale. Deux sons tres differents spectralement peuvent vous paraitre identiques. Le classifieur SVM, lui, travaille dans un espace a 56 dimensions ou chaque frequence a son poids propre.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Les sons inaudibles : ce que l&apos;IA detecte que votre oreille rate"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Technologie"
      >
        <p>
          Essayez une experience. Demarrez votre voiture, laissez tourner au
          ralenti, et ecoutez attentivement. Vous entendez le moteur, bien
          sur, mais que percevez-vous vraiment ? Un ronronnement regulier. Un
          leger souffle d&apos;echappement. Peut-etre un ventilateur qui
          s&apos;enclenche. C&apos;est tout. Pourtant, un microphone place au
          meme endroit capte bien plus : environ 4000 fois plus
          d&apos;information par seconde que ce que votre cerveau traite
          consciemment. Cette difference, c&apos;est le terrain de chasse de
          l&apos;IA.
        </p>

        <h2>Le mythe des 20 Hz — 20 kHz</h2>
        <p>
          On repete partout que l&apos;oreille humaine entend de 20 Hz a 20
          kHz. Techniquement exact, mais trompeur. Cette plage n&apos;est
          valable que pour un jeune adulte en bonne sante, dans un silence
          absolu, avec des sons purs et intenses. Dans la vraie vie, la
          sensibilite auditive suit la courbe de Fletcher-Munson : tres
          sensible autour de 2-4 kHz (la frequence de la voix), elle chute
          brutalement dans les basses (10 dB de moins a 100 Hz) et dans les
          aigus (20 dB de moins a 10 kHz). Ajoutez le bruit ambiant de
          l&apos;habitacle, et votre oreille perd la moitie des signatures de
          panne.
        </p>

        <h2>Ce que capte un micro de smartphone</h2>
        <p>
          Un microphone MEMS moderne, celui integre dans votre telephone, a
          une reponse plate entre 50 Hz et 18 kHz, avec une extension jusqu&apos;a
          22 kHz. Au-dela, la reponse chute mais l&apos;information reste
          partiellement exploitable jusqu&apos;a 24 kHz pour une IA entrainee.
          En basses frequences, le micro descend jusqu&apos;a 20 Hz, la ou
          l&apos;oreille ne sent plus que des vibrations dans la poitrine.
          Pour une IA, cette plage elargie signifie acces a des signatures
          invisibles pour un humain.
        </p>

        <h2>Exemples concrets d&apos;inaudibilite</h2>
        <p>
          Un roulement de turbo qui commence a marquer emet un pic spectral
          vers 14-16 kHz, tres fin et tres bref. Votre oreille, dans un
          habitacle avec le ventilateur, le GPS qui parle, et la route, ne le
          percevra jamais. Le SVM, lui, l&apos;identifie instantanement. Autre
          cas : un piston qui commence a prendre du jeu produit une signature
          harmonique specifique vers 3 kHz avec une periodicite liee au
          regime moteur. Inaudible au ralenti pour l&apos;oreille, mais tres
          clair dans les 40 coefficients MFCC du pipeline.
        </p>

        <h2>Les infrasons : le territoire cache des gros defauts</h2>
        <p>
          En dessous de 20 Hz, vous ne percevez plus des sons, vous percevez
          des vibrations. Un desequilibrage de volant moteur produit une
          oscillation a environ 12-15 Hz qui fait trembler le levier de
          vitesse mais que vous n&apos;identifiez pas comme un &quot;bruit&quot;.
          Le micro, lui, enregistre cette composante basse frequence et le
          classifieur l&apos;isole dans les caracteristiques spectrales. Meme
          logique pour les defauts d&apos;alignement de transmission ou les
          problemes de supports moteur fatigues.
        </p>

        <h2>Pourquoi 56 caracteristiques ?</h2>
        <p>
          Le pipeline extrait 56 valeurs numeriques de chaque enregistrement :
          40 coefficients MFCC qui decrivent le timbre sur l&apos;echelle
          perceptuelle Mel, plus 5 caracteristiques spectrales classiques
          (centroide, bande passante, rolloff, flux, contraste spectral), plus
          quelques metriques temporelles comme l&apos;enveloppe d&apos;energie
          ou le taux de passage par zero. Ces 56 nombres sont la photographie
          mathematique du son, suffisante pour qu&apos;un SVM RBF atteigne
          91.3% de precision sur 11 classes.
        </p>

        <h2>Pourquoi votre cerveau vous trompe</h2>
        <p>
          Le cerveau humain fait quelque chose que l&apos;IA ne fait pas : il
          ignore ce qu&apos;il juge peu important. C&apos;est pratique au
          quotidien (sinon vous entendriez chaque vetement qui frotte contre
          votre peau), mais c&apos;est catastrophique pour le diagnostic.
          Votre cerveau s&apos;habitue au bruit de votre moteur en quelques
          secondes, et au bout d&apos;un mois d&apos;aggravation lente, il a
          deja integre le nouveau son comme &quot;normal&quot;. L&apos;IA,
          elle, a 3963 references d&apos;entrainement en tete et ne
          s&apos;habitue a rien.
        </p>

        <h2>La signature ne ment jamais</h2>
        <p>
          Un son peut vous sembler anodin mais contenir une signature
          accablante. C&apos;est tout l&apos;interet du scan sonore : vous
          offrir une oreille qui ne fatigue pas, ne s&apos;habitue pas, et
          compare chaque enregistrement a un referentiel statistique. Pour
          aller plus loin, decouvrez{" "}
          <Link href="/fr/blog/comment-fonctionne-svm-technologie-scan-sonore">
            comment le SVM traite les donnees en interne
          </Link>
          , ou la liste complete des{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            11 pannes detectables
          </Link>
          . Si vous voyez un code{" "}
          <Link href="/fr/codes/p0325">P0325</Link>{" "}
          (circuit de sonde cliquetis), un scan sonore confirme souvent la
          presence d&apos;un veritable claquement avant que le capteur ne le
          voie.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

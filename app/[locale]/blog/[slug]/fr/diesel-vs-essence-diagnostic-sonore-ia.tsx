import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDieselVsEssenceSon() {
  const faq: FaqItem[] = [
    {
      q: "Mon diesel est bruyant au ralenti, est-ce normal ?",
      a: "Oui, jusqu&apos;a un certain point. Les diesels produisent naturellement un claquement caracteristique du a la combustion par compression, surtout a froid. Ce bruit est plus marque sur les injections directes communes rail modernes. Il devient anormal quand il augmente, quand il prend une tonalite metallique plus aigue, ou quand il persiste meme apres chauffe complete.",
    },
    {
      q: "L&apos;IA fait-elle la difference entre un bruit normal de diesel et une panne ?",
      a: "Oui, c&apos;est precisement pour ca qu&apos;on a inclus plusieurs centaines d&apos;enregistrements diesel dans le jeu d&apos;entrainement. Le modele apprend que ce claquement base est la norme pour un diesel sain et ne le classe pas comme knock. Il reagit uniquement aux ecarts par rapport a cette norme.",
    },
    {
      q: "Un moteur essence tres silencieux peut-il cacher une panne ?",
      a: "Oui, absolument. Les moteurs essence modernes sont si silencieux que les debuts de pannes mecaniques passent sous le seuil de perception humaine. Un roulement qui commence a marquer peut etre inaudible pendant des mois. Le scan sonore est particulierement utile sur les moteurs essence pour cette raison : il compense le silence relatif de la mecanique par une analyse fine des harmoniques subtiles.",
    },
    {
      q: "Les frequences detectees sont-elles differentes selon le carburant ?",
      a: "Oui. Le diesel concentre son energie dans les basses frequences (50-400 Hz) a cause du taux de compression eleve et du bruit de combustion. L&apos;essence etale davantage vers les moyennes et hautes frequences (200 Hz - 3 kHz). Le modele SVM apprend ces signatures differentes et les classe correctement dans les deux cas grace aux 40 coefficients MFCC qui separent efficacement les deux profils.",
    },
    {
      q: "Et les hybrides ou les bi-carburation GPL ?",
      a: "Les hybrides sont un cas particulier : scannez toujours le moteur thermique en fonctionnement, pas en mode electrique. La bi-carburation GPL peut modifier legerement la signature a cause d&apos;une combustion plus propre et plus lente, mais le modele reste fiable dans la majorite des cas. Nous collectons activement des donnees supplementaires pour ces motorisations.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Diesel vs essence : pourquoi leur diagnostic sonore est different"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostic"
      >
        <p>
          Un moteur diesel et un moteur essence ne sonnent pas pareil, et
          ce n&apos;est pas une simple question d&apos;ambiance. Ils
          fonctionnent sur des principes de combustion fondamentalement
          differents, ce qui produit des signatures acoustiques aux
          antipodes l&apos;une de l&apos;autre. Pour un diagnostic sonore
          fiable, il est essentiel que le modele sache a quel type de
          moteur il a affaire, et qu&apos;il applique les bons criteres
          d&apos;analyse. C&apos;est exactement ce que le SVM a appris au
          cours de son entrainement.
        </p>

        <h2>Deux principes de combustion, deux signatures</h2>
        <p>
          Un moteur essence allume son melange avec une etincelle, dans
          un espace fermi ou l&apos;air et le carburant sont deja
          melanges. La combustion est relativement progressive, ce qui
          donne un bruit lisse avec une composante mecanique dominante.
          Un diesel, au contraire, injecte le carburant dans de
          l&apos;air tres fortement comprime (14:1 a 22:1 contre 8:1 a
          11:1 pour l&apos;essence). L&apos;auto-inflammation du
          carburant produit un pic de pression rapide, quasi-explosif, qui
          genere un bruit de combustion tres marque. C&apos;est ce qui
          donne au diesel son caractere &quot;claquant&quot; typique.
        </p>

        <h2>Les frequences dominantes</h2>
        <p>
          Sur un scan moteur diesel, l&apos;energie spectrale se
          concentre entre 50 et 400 Hz, avec des harmoniques marquees
          jusqu&apos;a 2 kHz. Les MFCC refletent cette concentration dans
          les basses frequences. Sur un moteur essence, l&apos;energie
          est plus etalee, avec des composantes significatives de 200 Hz
          jusqu&apos;a 3-4 kHz. Cette difference de distribution
          spectrale est si marquee qu&apos;un humain peut presque
          deviner le type de moteur a l&apos;oreille. Le SVM, lui, le
          sait avec certitude a partir des premiers coefficients MFCC.
        </p>

        <h2>Ce que le diesel cache</h2>
        <p>
          Le bruit de combustion diesel est si present qu&apos;il
          masque beaucoup de signatures de pannes. Un debut de
          claquement de bielle sur un diesel est difficile a entendre
          car il se fond dans le bruit normal du moteur. C&apos;est ici
          que le scan sonore apporte le plus : il separe
          mathematiquement la signature de la combustion normale de
          celle de la panne, meme quand elles partagent partiellement la
          meme bande de frequence. Sur diesel, les ecarts les plus
          significatifs a surveiller sont le knock au-dessus du bruit de
          base, les injecteurs qui prennent du jeu, et les roulements
          de vilebrequin.
        </p>

        <h2>Ce que l&apos;essence laisse entendre</h2>
        <p>
          L&apos;essence etant beaucoup plus silencieuse, les debuts de
          pannes y sont souvent audibles plus tot pour un humain —
          mais aussi plus confondus. Un leger sifflement peut etre un
          turbo, une fuite d&apos;admission, une courroie
          d&apos;accessoires, ou meme une fuite de collecteur. L&apos;IA
          est particulierement utile sur ces moteurs pour trancher
          rapidement entre plusieurs candidats. Les classes les plus
          utiles en essence sont air leak, turbo whistle, belt noise et
          misfire.
        </p>

        <h2>Les pannes qui ne touchent qu&apos;un type de moteur</h2>
        <p>
          Certaines pannes sont exclusives a un type. Le claquement
          d&apos;injecteur common rail est specifique au diesel et a
          certains moteurs a injection directe essence recents. La
          detonation (preignition) est quasi exclusivement essence. Le
          ratage turbo par encrassement FAP est diesel. Le phenomene de
          LSPI (low-speed preignition) est specifique a certains moteurs
          essence turbocompresses a injection directe. Notre modele
          connait ces specificites et adapte les seuils selon le
          contexte declare par l&apos;utilisateur.
        </p>

        <h2>Les codes OBD2 qui changent de signification</h2>
        <p>
          Un meme code n&apos;a pas toujours la meme implication en
          diesel et en essence. Le code{" "}
          <Link href="/fr/codes/p0300">P0300</Link>{" "}
          de ratees d&apos;allumage existe sur diesel mais indique
          plutot un probleme d&apos;injection ou de compression, pas de
          bougies. Le code{" "}
          <Link href="/fr/codes/p0420">P0420</Link>{" "}
          d&apos;efficacite catalyseur est different sur diesel
          (DPF/SCR) et essence (trois voies). La couche 5 de fusion OBD2
          tient compte de ces differences quand elle enrichit la
          prediction audio.
        </p>

        <h2>Precision comparee</h2>
        <p>
          Sur le jeu de test, la precision moyenne du modele est de
          91.3%. Detaillee par type de moteur, elle est d&apos;environ
          92% sur essence et 90% sur diesel. L&apos;ecart est leger et
          s&apos;explique par la difficulte intrinseque a detecter des
          anomalies sur un moteur deja bruyant. On compense cette
          difficulte en collectant progressivement plus de donnees
          diesel avec des labels fins. Pour aller plus loin,
          consultez{" "}
          <Link href="/fr/blog/comment-fonctionne-svm-technologie-scan-sonore">
            la technologie derriere le scan sonore
          </Link>{" "}
          et notre article sur{" "}
          <Link href="/fr/blog/bruit-claquement-moteur-causes-diagnostic-ia">
            le claquement moteur
          </Link>
          . Un code{" "}
          <Link href="/fr/codes/p0128">P0128</Link>{" "}
          sur un diesel peut aussi biaiser le scan via un ventilateur
          qui tourne anormalement.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleTripleDiagnostic() {
  const faq: FaqItem[] = [
    {
      q: "Pourquoi combiner trois technologies au lieu d&apos;une seule ?",
      a: "Parce qu&apos;aucune technologie prise isolement ne couvre l&apos;ensemble des pannes. L&apos;OBD2 lit les codes defaut stockes par le calculateur, le scan sonore entend les usures mecaniques que l&apos;ECU ignore, et la vision IA detecte les anomalies visibles (fuites, rouille, pneus). Ensemble, les trois couches se recoupent et produisent un diagnostic dont la confiance atteint souvent plus de 90%.",
    },
    {
      q: "Quelle est la panne typique qu&apos;une seule technologie rate ?",
      a: "Un roulement de vilebrequin qui commence a fatiguer : l&apos;OBD2 ne voit rien car aucun code n&apos;est declenche, la vision IA ne peut pas y acceder car c&apos;est dans le carter, mais le scan sonore detecte la signature acoustique des 5% d&apos;usure anormale. A l&apos;inverse, une fuite de liquide de frein sur le maitre cylindre ne s&apos;entend pas mais se voit immediatement.",
    },
    {
      q: "Ai-je besoin d&apos;un dongle OBD2 obligatoirement ?",
      a: "Non, vous pouvez commencer avec uniquement le scan sonore et la vision IA. Le dongle ELM327 ajoute une troisieme couche qui boost la confiance quand un code defaut est present, mais l&apos;application fonctionne parfaitement sans. Pour un diagnostic complet sur une voiture qui roule encore, les trois sources restent complementaires.",
    },
    {
      q: "Comment l&apos;application fusionne les trois sources ?",
      a: "La couche 5 du pipeline, appelee fusion capteurs, applique des regles expertes : si un code P0300 arrive en meme temps qu&apos;une signature sonore de misfire a plus de 75% de confiance, le verdict passe de surveiller a certain. Si une fuite visuelle verte est detectee et que la temperature moteur OBD2 monte, l&apos;alerte coolant devient prioritaire.",
    },
    {
      q: "Ce triple diagnostic fonctionne-t-il sur toutes les marques ?",
      a: "Oui pour la partie sonore et vision, qui ne dependent que du telephone. Pour l&apos;OBD2, la compatibilite depend du protocole : plus de 677 vehicules europeens sont supportes, avec des couches de fallback pour les protocoles anciens KWP2000 et ISO 9141-2.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Triple diagnostic : comment le son, la vision et l&apos;OBD2 se completent"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Technologie"
      >
        <p>
          Il y a trois facons de faire parler une voiture : lui poser des
          questions, l&apos;ecouter, et la regarder. AutoDiag EU est le seul
          outil grand public qui combine ces trois approches dans une meme
          application. Chacune a ses forces, chacune a ses angles morts, et
          c&apos;est precisement en les croisant que l&apos;on obtient un
          diagnostic digne d&apos;un atelier specialise — sans la facture de
          l&apos;atelier specialise.
        </p>

        <h2>Couche 1 : l&apos;OBD2, la voix du calculateur</h2>
        <p>
          Le calculateur moteur parle une langue normalisee depuis 2001 en
          Europe. Via un petit dongle ELM327 BLE branche sous le volant,
          n&apos;importe quel telephone peut lire les codes defauts stockes,
          les valeurs PID en temps reel (regime, temperature, lambda, avance a
          l&apos;allumage) et declencher des tests specifiques. C&apos;est
          rapide, c&apos;est chirurgical, et un code comme{" "}
          <Link href="/fr/codes/p0420">P0420</Link> vous dit tout de suite que
          le catalyseur est en bout de course.
        </p>
        <p>
          Mais l&apos;OBD2 a un defaut majeur : il ne voit que ce que le
          calculateur sait voir. Un roulement de roue use, une courroie qui
          commence a glisser, un amortisseur qui fuit, rien de tout cela ne
          declenche de code. Les capteurs du moteur sont concentres autour de
          la combustion et de la depollution. Tout le reste est invisible pour
          lui.
        </p>

        <h2>Couche 2 : le scan sonore, l&apos;oreille qui ne fatigue pas</h2>
        <p>
          Notre SVM a kernel RBF, entraine sur 3963 enregistrements, reconnait
          onze classes de pannes uniquement a partir d&apos;un echantillon
          audio de quelques secondes. Il distingue un claquement de bielle
          d&apos;un jeu de culbuteur, un sifflement turbo sain d&apos;un
          sifflement qui annonce la casse des paliers, un souffle de fuite
          d&apos;echappement d&apos;une fuite d&apos;air d&apos;admission.
          Votre oreille ne sait pas faire ces distinctions. L&apos;oreille
          humaine sature autour de 15 kHz, l&apos;IA travaille sur 56
          caracteristiques spectrales et temporelles jusqu&apos;a 22 kHz.
        </p>
        <p>
          Le scan sonore comble l&apos;angle mort de l&apos;OBD2 : il entend
          l&apos;usure mecanique avant que le calculateur ne declenche le
          moindre code. Pour le detail de la methode SVM, voir{" "}
          <Link href="/fr/blog/comment-fonctionne-svm-technologie-scan-sonore">
            comment fonctionne notre technologie SVM
          </Link>
          .
        </p>

        <h2>Couche 3 : la vision IA, l&apos;oeil qui ne se lasse pas</h2>
        <p>
          Une photo du sol sous la voiture peut contenir plus
          d&apos;informations qu&apos;un scan complet. La couleur du liquide
          trahit la nature de la fuite, la taille de la tache indique la
          vitesse de la perte, la position sous le vehicule pointe le
          composant fautif. La Vision IA fait tout ca en deux secondes, puis
          passe aux pneus, aux plaquettes vues a travers les rayons de jante,
          a la corrosion naissante sous le passage de roue. Elle voit ce que
          l&apos;OBD2 ne saura jamais et ce que le scan sonore ne peut pas
          entendre.
        </p>

        <h2>Quand les trois couches convergent</h2>
        <p>
          Prenons un cas reel. Un Peugeot 308 1.6 HDi monte en code P0299 —
          survitesse turbo basse. A lui seul, ce code a cinq causes possibles,
          du durite d&apos;admission percee a la pompe haute pression fatiguee.
          Le scan sonore, lance dans la foulee, affiche 82% de confiance sur
          un sifflement turbo anormal. La Vision IA, sur une photo du moteur,
          detecte une trace d&apos;huile sur la durite d&apos;admission cote
          turbo. Verdict consolide : durite percee en aval du turbo. Temps de
          diagnostic total : moins de cinq minutes. Temps d&apos;atelier
          traditionnel pour le meme verdict : entre une heure et deux heures,
          facturees.
        </p>

        <h2>La triangulation, cle de la confiance</h2>
        <p>
          Un diagnostic isole peut toujours se tromper. Un diagnostic qui
          recoupe trois sources independantes est presque impossible a
          contester. C&apos;est le principe des systemes critiques en
          aeronautique — trois capteurs, majorite gagnante. Nous appliquons la
          meme logique a la voiture. Quand le SVM, le lecteur OBD2 et la
          Vision IA sont d&apos;accord, vous pouvez aller voir le garage avec
          un rapport qui limite la marge d&apos;erreur.
        </p>

        <h2>Une philosophie plutot qu&apos;un gadget</h2>
        <p>
          Cette triple approche n&apos;est pas un argument marketing, c&apos;est
          une necessite technique. Trop d&apos;applications se contentent de
          lire des codes OBD2 et de les traduire — c&apos;est utile mais
          incomplet. Trop d&apos;autres proposent des quiz audio sans vraie
          intelligence derriere. Nous avons construit les trois couches en
          parallele parce que c&apos;est la seule facon honnete de pretendre
          diagnostiquer une voiture avec un telephone. Pour aller plus loin,
          voir{" "}
          <Link href="/fr/blog/11-pannes-detectables-analyse-sonore-moteur">
            les 11 pannes detectables par analyse sonore
          </Link>{" "}
          et{" "}
          <Link href="/fr/blog/checkup-visuel-ia-5-points-vehicule-sain">
            le checkup visuel IA en 5 points
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

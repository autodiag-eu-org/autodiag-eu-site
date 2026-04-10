import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleScannerVIN() {
  const faq: FaqItem[] = [
    {
      q: "Qu&apos;est-ce qu&apos;un VIN et ou le trouver ?",
      a: "Le VIN (Vehicle Identification Number) est un numero unique de 17 caracteres grave sur chaque vehicule depuis 1981. On le trouve grave au bas du pare-brise cote conducteur, sur l&apos;encadrement de portiere conducteur, sous le capot sur une plaque constructeur, et sur la carte grise en case E. La Vision IA lit directement les 17 caracteres en photographiant la plaque ou la grave.",
    },
    {
      q: "Que contient exactement le VIN ?",
      a: "Le VIN se decompose en trois sections : WMI (3 caracteres, identifie le constructeur et le pays), VDS (6 caracteres, decrit le modele, type de carrosserie et motorisation), VIS (8 caracteres, inclut annee modele, usine d&apos;assemblage et numero de serie). Chaque caractere a une signification precise et ne peut pas etre invente au hasard.",
    },
    {
      q: "Un scan VIN donne-t-il l&apos;historique complet du vehicule ?",
      a: "Il donne acces a l&apos;historique agrege par les bases europeennes : declarations d&apos;accidents, kilometrages successifs aux CT, entretiens declares chez les concessionnaires, rappels constructeurs. La profondeur depend du pays d&apos;origine et de la cooperation des services officiels. C&apos;est sans commune mesure avec un simple scan de plaque.",
    },
    {
      q: "Pourquoi le VIN est-il plus fiable que la plaque pour un achat ?",
      a: "Parce que la plaque peut etre remplacee, changee, falsifiee. Le VIN est grave dans le metal, il suit le vehicule pour toute sa vie. Un vehicule dont le VIN ne correspond pas a la carte grise est probablement vole ou trafique. C&apos;est le numero de securite de la voiture.",
    },
    {
      q: "Y a-t-il des risques de confidentialite a scanner un VIN ?",
      a: "Pour votre propre vehicule, aucun. Pour un vehicule que vous voulez acheter, vous etes dans votre droit de consulter son historique — le vendeur est meme tenu de vous communiquer certaines informations en Europe. AutoDiag EU ne stocke pas les VIN scannes dans un profil lie a votre identite.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Scanner le VIN : decoder l&apos;historique complet d&apos;une voiture"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Achat occasion"
      >
        <p>
          Dix-sept caracteres. C&apos;est tout ce qu&apos;il faut pour
          connaitre toute l&apos;histoire d&apos;une voiture. Le VIN
          (Vehicle Identification Number) est le veritable ADN du
          vehicule : il encode le constructeur, l&apos;usine, l&apos;annee
          modele, le type de moteur, la carrosserie, et chaque exemplaire
          recoit un numero de serie unique. Scanner ce VIN avec votre
          telephone, c&apos;est ouvrir un dossier complet en deux
          secondes — et eviter, dans le cas d&apos;un achat d&apos;occasion,
          des milliers d&apos;euros de mauvaise surprise.
        </p>

        <h2>L&apos;anatomie des 17 caracteres</h2>
        <p>
          Le VIN est standardise mondialement depuis 1981. Les trois
          premiers caracteres forment le WMI (World Manufacturer
          Identifier) : ils designent le pays et le constructeur. WDB pour
          Mercedes-Benz en Allemagne, VF1 pour Renault en France, WVW
          pour Volkswagen en Allemagne. Les six caracteres suivants
          forment le VDS (Vehicle Descriptor Section) : ils encodent le
          modele, le type de carrosserie, la motorisation et parfois le
          systeme de retenue. Les huit derniers caracteres forment le VIS
          (Vehicle Identifier Section) : le dixieme caractere est l&apos;annee
          modele (A = 2010, B = 2011, etc., en sautant I, O, Q, U, Z), le
          onzieme est l&apos;usine d&apos;assemblage, les six derniers
          sont le numero de serie unique dans cette usine pour cette
          annee.
        </p>

        <h2>Ce que l&apos;OCR Vision IA capte</h2>
        <p>
          Le VIN est grave ou appose a plusieurs endroits sur une voiture.
          Le plus accessible est la partie basse du pare-brise cote
          conducteur, visible de l&apos;exterieur a travers la vitre. La
          gravure est petite, reflechissante, parfois masquee par une
          touche de saletes. La Vision IA gere ces conditions : elle
          egalise l&apos;exposition, elimine les reflets, et lit les 17
          caracteres avec une tolerance sur les confusions classiques (zero
          contre lettre O, un contre lettre I). Elle peut aussi lire le
          VIN sur la plaque constructeur sous le capot, ou meme sur une
          photo de la carte grise — utile pour scanner a distance avant
          de deplacer.
        </p>

        <h2>L&apos;achat d&apos;occasion qui change de nature</h2>
        <p>
          Scenario typique : vous repondez a une annonce pour une Audi A4
          Avant 2.0 TDI de 2016, 145 000 km annonces. Le vendeur a des
          factures d&apos;entretien, la voiture parait propre, tout semble
          bon. Vous scannez le VIN avec votre telephone. La reponse arrive
          en trois secondes : l&apos;annee modele est bien 2016, mais le
          kilometrage moyen enregistre au dernier CT (il y a 14 mois)
          etait de 168 000 km. Conclusion : le compteur a ete rembobine
          de 23 000 km. Vous partez. Cette fraude est la plus courante du
          marche de l&apos;occasion et la Vision IA la detecte en trois
          secondes. Sur cinquante achats, la moyenne des retours terrains
          indique qu&apos;un a deux vehicules presentent ce type
          d&apos;incoherence.
        </p>

        <h2>Les rappels constructeurs oublies</h2>
        <p>
          Chaque constructeur emet regulierement des campagnes de rappel
          pour des defauts identifies apres la commercialisation. Airbag
          Takata, vanne EGR, pompe haute pression, module antiblocage,
          injecteurs, la liste est longue. Le proprietaire est cense
          recevoir un courrier, mais avec les changements d&apos;adresse,
          les ventes successives et les courriers perdus, beaucoup de
          vehicules roulent encore avec des defauts non corriges. Le scan
          VIN interroge les bases constructeurs et vous affiche la liste
          des rappels applicables a ce vehicule precis, avec leur statut
          (traite ou non). Si un rappel est toujours ouvert, vous pouvez
          exiger sa prise en charge gratuite chez un concessionnaire avant
          l&apos;achat.
        </p>

        <h2>La commande de pieces sans erreur</h2>
        <p>
          Un autre usage, moins spectaculaire mais tres pratique : la
          commande de pieces. Quand vous commandez une plaquette de frein
          pour une Peugeot 308, il y a souvent trois ou quatre references
          differentes selon le type de freins (diametre de disque), le
          niveau de finition, l&apos;annee de production exacte. Le VIN
          transmet cette info precise au vendeur qui retrouve la bonne
          reference du premier coup. Fini les allers-retours chez le
          parts dealer, finies les erreurs a 30 euros de frais de retour.
          Pour l&apos;entretien regulier, voyez aussi l&apos;article sur
          le{" "}
          <Link href="/fr/blog/prevenir-casse-moteur-diagnostic-sonore-preventif">
            diagnostic preventif
          </Link>
          .
        </p>

        <h2>L&apos;assurance et les devis</h2>
        <p>
          Quand vous demandez un devis d&apos;assurance, les compagnies
          demandent parfois uniquement l&apos;immatriculation, parfois le
          VIN complet. Les devis bases sur VIN sont plus precis parce
          qu&apos;ils tiennent compte du modele exact, du niveau
          d&apos;equipement, et des eventuelles modifications declarees.
          Un scan VIN avant de faire jouer la concurrence entre assureurs
          peut faire varier le devis de 10 a 25% dans un sens ou
          l&apos;autre. Pour un budget annuel typique de 600 a 1200 euros
          d&apos;assurance, c&apos;est 60 a 300 euros par an
          potentiellement economises.
        </p>

        <h2>Les limites et la confidentialite</h2>
        <p>
          Le scan VIN ne donne pas tout. Les accidents non declares
          n&apos;apparaissent pas dans les bases. Les interventions chez
          des garages independants (non concessionnaires) ne sont pas
          toujours remontees. La profondeur d&apos;historique depend du
          pays : la France, l&apos;Allemagne et la Belgique ont des bases
          CT solides, d&apos;autres pays sont plus lacunaires. Cote
          confidentialite, AutoDiag EU n&apos;associe pas le VIN scanne
          a votre compte personnel, et les requetes sont purgees au bout
          de sept jours. Vous consultez, vous decidez, vous oubliez. Pour
          completer avec une verification electronique, passez par un
          scan OBD2 qui revele les codes en memoire comme le{" "}
          <Link href="/fr/codes/p0011">P0011</Link> souvent lie a un
          entretien neglige de la distribution.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

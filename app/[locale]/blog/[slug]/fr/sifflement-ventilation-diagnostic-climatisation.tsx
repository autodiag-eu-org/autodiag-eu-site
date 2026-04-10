import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleSifflementVentilation() {
  const faq: FaqItem[] = [
    {
      q: "Un sifflement de ventilation est-il dangereux ?",
      a: "Non, jamais directement. Mais c&apos;est souvent un signe precurseur d&apos;un probleme plus couteux : filtre colmate, roulement de soufflante mort, ou embrayage de compresseur de clim en fin de vie. Detecter tot evite de passer d&apos;une reparation a 30 euros a une facture a 900 euros.",
    },
    {
      q: "Comment differencier un bruit de compresseur et un bruit de soufflante ?",
      a: "Le compresseur de clim claque a l&apos;enclenchement (quand on allume l&apos;AC) et son bruit est constant en vitesse. La soufflante, elle, change de frequence quand vous montez la vitesse de ventilation. Le Scan Sonore separe les deux grace a la modulation temporelle.",
    },
    {
      q: "Pourquoi ma ventilation siffle plus en hiver ?",
      a: "Deux raisons : l&apos;air froid est plus dense et passe plus difficilement dans un filtre colmate, et le systeme fonctionne presque en permanence pour le degivrage. Un filtre d&apos;habitacle a 15 euros resout 60% des cas.",
    },
    {
      q: "Le scan habitacle detecte-t-il une fuite de clim ?",
      a: "Indirectement. Une fuite de clim se traduit par un compresseur qui s&apos;enclenche plus souvent (bruit repete) et parfois par un sifflement du detendeur en sous-charge. Le SVM ne classe pas directement une fuite mais signale l&apos;anomalie de signature.",
    },
    {
      q: "Un sifflement constant peut-il venir d&apos;ailleurs que la clim ?",
      a: "Oui : un joint de porte defaillant qui siffle a 110 km/h, une prise d&apos;air moteur qui remonte par le tablier, ou un retroviseur mal ajuste. L&apos;IA fait la difference grace a la zone spectrale : 2-4 kHz pour les joints, 6-10 kHz pour la ventilation.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="fr"
        title="Sifflement de ventilation : diagnostic des bruits de climatisation"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={8}
        category="Scan sonore habitacle"
      >
        <p>
          On a tendance a negliger les bruits de ventilation parce
          qu&apos;ils ne touchent pas la securite. Grosse erreur
          d&apos;appreciation : ce sont souvent les premiers signaux
          faibles d&apos;un systeme de climatisation qui commence a
          fatiguer, et le passage d&apos;un probleme a 20 euros (filtre)
          a un probleme a 900 euros (compresseur) se joue sur trois a
          six mois. Le Scan Sonore habitacle capte ces signaux tres tot.
        </p>

        <h2>La soufflante et son roulement</h2>
        <p>
          Le moteur de ventilation est un petit moteur electrique avec
          un roulement a billes interne. Quand il commence a fatiguer,
          il emet un sifflement module par la vitesse de rotation :
          faible a vitesse 1, fort a vitesse 4. C&apos;est tres
          caracteristique. Sur le plan spectral, le roulement fatigue
          ajoute des harmoniques vers 2-5 kHz qui n&apos;existent pas
          sur un moteur sain. Le SVM habitacle reconnait cette
          signature dans sa classe &quot;ventilation&quot; et la
          separe des autres bruits.
        </p>

        <h2>Le filtre d&apos;habitacle colmate</h2>
        <p>
          C&apos;est la cause la plus frequente et la plus benigne.
          Quand le filtre se remplit de pollen, feuilles et poussieres,
          l&apos;air passe plus difficilement et cree un sifflement a
          l&apos;entree. Le bruit augmente quand vous poussez la
          ventilation. Solution : 15 euros de filtre et dix minutes de
          remplacement. Le probleme, c&apos;est que si on laisse
          courir, le moteur de soufflante force, son roulement chauffe,
          et la facture passe de 15 euros a 180 euros en quelques mois.
        </p>

        <h2>Le volet de distribution d&apos;air</h2>
        <p>
          Un claquement ou un grincement repetitif quand vous changez la
          direction d&apos;air (pieds, visage, pare-brise) indique un
          moteur de volet fatigue ou une came plastique cassee. Sur
          beaucoup de vehicules, le probleme devient invisible dans le
          tableau de bord et vous ne pouvez plus diriger l&apos;air. Le
          remplacement coute entre 200 et 600 euros selon
          l&apos;accessibilite. Detecte a l&apos;etape &quot;claquement
          occasionnel&quot;, c&apos;est souvent un simple nettoyage et
          graissage qui suffit.
        </p>

        <h2>Le compresseur de clim</h2>
        <p>
          Le compresseur lui-meme peut produire plusieurs sons. Un
          claquement sec a l&apos;enclenchement du bouton AC indique un
          embrayage magnetique use. Un ronronnement rauque continu
          indique les roulements internes du compresseur qui
          s&apos;essoufflent. Un sifflement aigu pendant la regulation
          indique souvent un detendeur bouche. Les trois signatures ont
          des zones spectrales bien distinctes que l&apos;analyse 138
          caracteristiques isole. Budget : 120 euros pour un embrayage,
          400 a 900 euros pour un compresseur complet.
        </p>

        <h2>Pourquoi detecter tot fait la difference</h2>
        <p>
          Un compresseur qui commence a fatiguer force le circuit de
          refrigerant a chauffer plus, ce qui degrade l&apos;huile, qui
          use plus vite les joints, qui creent une micro-fuite, qui
          fait tourner plus le compresseur, qui chauffe encore plus. En
          six mois vous passez d&apos;un sifflement a une recharge de
          gaz ET un remplacement de compresseur ET un desinfectant a
          cause des moisissures dans l&apos;evaporateur. Facture totale
          de l&apos;inaction : 1 100 euros. Facture d&apos;une
          intervention au premier signe : 180 euros.
        </p>

        <h2>SVM 7 classes et la ventilation</h2>
        <p>
          La classe &quot;ventilation&quot; de notre modele habitacle
          est l&apos;une des plus precises car ses bruits sont tres
          caracteristiques et peu melanges avec le reste. Sur notre jeu
          de test, elle depasse les 80% de precision individuelle
          (tandis que la precision globale 7 classes est de 75.05%).
          C&apos;est une classe ou vous pouvez faire confiance au
          diagnostic meme avec une seule mesure.
        </p>

        <h2>Pour aller plus loin</h2>
        <p>
          Completez votre lecture avec les{" "}
          <Link href="/fr/blog/7-bruits-habitacle-jamais-ignorer">
            7 bruits a ne jamais ignorer
          </Link>{" "}
          et le{" "}
          <Link href="/fr/blog/controle-preventif-son-eviter-facture-cascade">
            scan preventif avant facture en cascade
          </Link>
          . Si votre sifflement est accompagne d&apos;un code{" "}
          <Link href="/fr/codes/p0128">P0128</Link>{" "}
          (temperature moteur basse), c&apos;est possiblement le
          thermostat qui garde le circuit trop froid, forcant la
          ventilation a tourner plus fort pour compenser au
          degivrage.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

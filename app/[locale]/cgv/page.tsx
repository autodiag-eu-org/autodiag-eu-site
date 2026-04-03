import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

interface CGVPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CGVPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Conditions generales de vente",
    description:
      "Conditions generales de vente d'AutoDiag EU : abonnement Premium 49 CHF/an, essai gratuit 7 jours, facturation Google Play.",
    locale,
    path: "cgv",
  });
}

export default function CGVPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
        Conditions generales de vente
      </h1>

      <div className="space-y-8 text-secondary leading-relaxed">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            1. Preambule
          </h2>
          <p>
            Les presentes conditions generales de vente (ci-apres
            &laquo; CGV &raquo;) regissent les relations contractuelles entre
            AutoDiag EU Sarl (en cours de creation), Route du Jura 10, 2926
            Boncourt, Suisse (ci-apres &laquo; l&apos;Editeur &raquo;) et
            toute personne physique ou morale souhaitant souscrire a
            l&apos;offre Premium de l&apos;application AutoDiag EU (ci-apres
            &laquo; l&apos;Utilisateur &raquo;).
          </p>
          <p className="mt-3">
            En souscrivant a l&apos;offre Premium, l&apos;Utilisateur declare
            avoir pris connaissance des presentes CGV et les accepter sans
            reserve.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            2. Description du produit
          </h2>
          <p>
            AutoDiag EU est une application mobile de diagnostic automobile
            disponible sur Android (Google Play Store). L&apos;application
            propose :
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong className="text-white">Version gratuite :</strong> lecture
              illimitee des codes defaut, 4 PIDs en temps reel, 1 scan audio
              moteur et 1 scan audio habitacle par semaine, 3 questions IA
              par jour, historique 7 jours
            </li>
            <li>
              <strong className="text-white">Version Premium :</strong> toutes
              les fonctionnalites en illimite — scans audio, PIDs, effacement
              de codes, devis reparation, pre-controle technique 5 pays,
              export PDF, Drive Test sans dongle, IA mecanicien illimitee,
              historique illimite
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            3. Tarification
          </h2>
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <p className="mb-2 text-2xl font-bold text-white">
              Premium : 49 CHF / an
            </p>
            <p>
              Prix toutes taxes comprises. La TVA suisse de 8,1% est incluse
              dans le prix affiche. Le prix peut varier legerement selon votre
              pays de residence en raison des politiques tarifaires de Google
              Play.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            4. Essai gratuit
          </h2>
          <p>
            L&apos;Utilisateur beneficie d&apos;un essai gratuit de 7 jours
            pour la version Premium. Pendant cette periode, toutes les
            fonctionnalites Premium sont accessibles sans restriction. Aucune
            carte bancaire n&apos;est requise pour commencer l&apos;essai.
          </p>
          <p className="mt-3">
            A l&apos;issue de la periode d&apos;essai, l&apos;Utilisateur sera
            invite a souscrire un abonnement Premium. Sans souscription,
            l&apos;acces revient automatiquement a la version gratuite, sans
            perte des diagnostics precedemment effectues (dans la limite de
            la duree de retention du plan gratuit).
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            5. Facturation et paiement
          </h2>
          <p>
            La facturation est geree exclusivement par{" "}
            <strong className="text-white">Google Play Billing</strong>.
            L&apos;Editeur n&apos;a pas acces a vos informations de paiement
            (carte bancaire, compte Google Pay). Le paiement est debite via
            le compte Google Play de l&apos;Utilisateur.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            6. Renouvellement automatique
          </h2>
          <p>
            L&apos;abonnement Premium est renouvele automatiquement a chaque
            echeance annuelle. L&apos;Utilisateur est notifie par Google Play
            avant chaque renouvellement. Le montant est debite au tarif en
            vigueur au moment du renouvellement.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            7. Annulation de l&apos;abonnement
          </h2>
          <p>
            L&apos;Utilisateur peut annuler son abonnement a tout moment
            directement depuis le <strong className="text-white">Google Play
            Store</strong> :
          </p>
          <ol className="mt-3 list-inside list-decimal space-y-2">
            <li>Ouvrir le Google Play Store sur votre appareil Android</li>
            <li>
              Appuyer sur votre photo de profil en haut a droite, puis sur
              &laquo; Paiements et abonnements &raquo;
            </li>
            <li>Selectionner &laquo; Abonnements &raquo;</li>
            <li>Selectionner AutoDiag EU</li>
            <li>Appuyer sur &laquo; Annuler l&apos;abonnement &raquo;</li>
          </ol>
          <p className="mt-3">
            L&apos;annulation prend effet a la fin de la periode de
            facturation en cours. L&apos;Utilisateur conserve l&apos;acces
            Premium jusqu&apos;a cette date.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            8. Politique de remboursement
          </h2>
          <p>La politique de remboursement est la suivante :</p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong className="text-white">
                Dans les 48 heures suivant l&apos;achat :
              </strong>{" "}
              remboursement automatique via Google Play, sans justification
              necessaire
            </li>
            <li>
              <strong className="text-white">Apres 48 heures :</strong>{" "}
              remboursement sur demande motivee aupres de notre service client
              a{" "}
              <a
                href="mailto:info@autodiag.eu"
                className="text-cyan hover:underline"
              >
                info@autodiag.eu
              </a>
              . Chaque demande est examinee individuellement.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            9. Droit de retractation (UE)
          </h2>
          <p>
            Conformement a la directive europeenne 2011/83/UE relative aux
            droits des consommateurs, les Utilisateurs residents de l&apos;Union
            europeenne disposent d&apos;un droit de retractation de{" "}
            <strong className="text-white">14 jours</strong> a compter de la
            date de souscription de l&apos;abonnement.
          </p>
          <p className="mt-3">
            Pour exercer ce droit, envoyez un email a{" "}
            <a
              href="mailto:info@autodiag.eu"
              className="text-cyan hover:underline"
            >
              info@autodiag.eu
            </a>{" "}
            en indiquant clairement votre volonte de vous retracter, accompagne
            de votre identifiant Google Play ou de l&apos;email associe a
            votre compte. Le remboursement sera effectue dans les 14 jours
            suivant la reception de votre demande.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            10. Age minimum
          </h2>
          <p>
            L&apos;utilisation de l&apos;application AutoDiag EU et la
            souscription a l&apos;offre Premium sont reservees aux personnes
            agees de <strong className="text-white">18 ans et plus</strong>.
            En souscrivant, l&apos;Utilisateur declare avoir atteint cet age
            minimum.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            11. Limitation de responsabilite
          </h2>
          <p>
            L&apos;application AutoDiag EU fournit des informations de
            diagnostic a titre indicatif. Ces informations ne remplacent en
            aucun cas l&apos;avis d&apos;un mecanicien professionnel qualifie.
            L&apos;Editeur ne saurait etre tenu responsable des decisions
            prises par l&apos;Utilisateur sur la base des diagnostics fournis
            par l&apos;application, ni des dommages directs ou indirects qui
            pourraient en resulter.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            12. Modification des CGV
          </h2>
          <p>
            L&apos;Editeur se reserve le droit de modifier les presentes CGV
            a tout moment. Les modifications prennent effet des leur
            publication sur le site. L&apos;Utilisateur sera informe de toute
            modification substantielle par email ou notification dans
            l&apos;application au moins 30 jours avant l&apos;entree en
            vigueur des nouvelles conditions.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            13. Droit applicable et juridiction
          </h2>
          <p>
            Les presentes CGV sont soumises au droit suisse. Tout litige
            relatif a l&apos;interpretation ou a l&apos;execution des presentes
            CGV sera soumis a la competence exclusive des{" "}
            <strong className="text-white">
              tribunaux du Canton du Jura, Suisse
            </strong>
            , sous reserve des dispositions imperatives de protection du
            consommateur applicables dans le pays de residence de
            l&apos;Utilisateur.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
          <p>
            Pour toute question relative aux presentes conditions generales de
            vente, contactez-nous a{" "}
            <a
              href="mailto:info@autodiag.eu"
              className="text-cyan hover:underline"
            >
              info@autodiag.eu
            </a>
            .
          </p>
        </section>

        <p className="pt-4 text-sm text-secondary/60">
          Derniere mise a jour : 3 avril 2026
        </p>
      </div>
    </div>
  );
}

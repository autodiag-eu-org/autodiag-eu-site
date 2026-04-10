import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

interface CGVPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CGVPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale !== "fr";
  return generatePageMetadata({
    title: isEn
      ? "Terms and Conditions"
      : "Conditions generales de vente",
    description: isEn
      ? "Terms and Conditions for AutoDiag EU: Premium subscription at £42/year, 7-day free trial, Google Play Billing, 14-day cooling-off period."
      : "Conditions generales de vente d'AutoDiag EU : abonnement Premium 49 CHF/an, essai gratuit 7 jours, facturation Google Play.",
    locale,
    path: "cgv",
  });
}

export default async function CGVPage({ params }: CGVPageProps) {
  const { locale } = await params;
  const isEn = locale !== "fr";

  if (isEn) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
          Terms and Conditions
        </h1>

        <div className="space-y-8 text-secondary leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              1. Preamble
            </h2>
            <p>
              These Terms and Conditions (&ldquo;T&amp;Cs&rdquo;) govern the
              contractual relationship between AutoDiag EU Sarl (registration in
              progress), Route du Jura 10, 2926 Boncourt, Switzerland
              (&ldquo;the Publisher&rdquo;) and any individual or legal entity
              wishing to subscribe to the Premium offer of the AutoDiag EU
              application (&ldquo;the User&rdquo;).
            </p>
            <p className="mt-3">
              By subscribing to the Premium offer, the User confirms that they
              have read these T&amp;Cs and accept them without reservation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              2. Product Description
            </h2>
            <p>
              AutoDiag EU is a mobile vehicle diagnostic application available
              on Android (Google Play Store). The application offers:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Free version:</strong> unlimited
                fault code reading, 4 live PIDs, 1 engine audio scan and 1
                cabin audio scan per week, 3 AI questions per day, 7-day history
              </li>
              <li>
                <strong className="text-white">Premium version:</strong> all
                features without restriction — audio scans, PIDs, fault code
                clearing, repair estimates, pre-MOT check for 5 countries, PDF
                export, Drive Test without dongle, unlimited AI mechanic,
                unlimited history
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              3. Pricing
            </h2>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
              <p className="mb-2 text-2xl font-bold text-white">
                Premium: £42 / year
              </p>
              <p>
                Price inclusive of all taxes. The price shown is in pounds
                sterling and is approximate, based on the equivalent of 49 CHF
                per year. The exact amount charged may vary slightly depending
                on Google Play&apos;s local pricing policy and prevailing
                exchange rates.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              4. Free Trial
            </h2>
            <p>
              Users receive a 7-day free trial of the Premium version. During
              this period, all Premium features are accessible without
              restriction. No payment details are required to start the trial.
            </p>
            <p className="mt-3">
              At the end of the trial period, the User will be invited to
              subscribe to Premium. Without a subscription, access reverts
              automatically to the free version, with no loss of previously
              completed diagnostics (subject to the free plan&apos;s retention
              period).
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              5. Billing and Payment
            </h2>
            <p>
              Billing is managed exclusively by{" "}
              <strong className="text-white">Google Play Billing</strong>. The
              Publisher does not have access to your payment information (debit
              or credit card, Google Pay account). Payment is charged via the
              User&apos;s Google Play account.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              6. Automatic Renewal
            </h2>
            <p>
              The Premium subscription renews automatically at each annual
              renewal date. The User is notified by Google Play before each
              renewal. The amount charged is the price in force at the time of
              renewal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              7. Cancellation
            </h2>
            <p>
              The User may cancel their subscription at any time directly
              through the{" "}
              <strong className="text-white">Google Play Store</strong>:
            </p>
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>Open the Google Play Store on your Android device</li>
              <li>
                Tap your profile picture in the top right, then tap
                &ldquo;Payments &amp; subscriptions&rdquo;
              </li>
              <li>Select &ldquo;Subscriptions&rdquo;</li>
              <li>Select AutoDiag EU</li>
              <li>Tap &ldquo;Cancel subscription&rdquo;</li>
            </ol>
            <p className="mt-3">
              Cancellation takes effect at the end of the current billing
              period. The User retains Premium access until that date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              8. Refund Policy
            </h2>
            <p>The refund policy is as follows:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">
                  Within 48 hours of purchase:
                </strong>{" "}
                automatic refund via Google Play, no reason required
              </li>
              <li>
                <strong className="text-white">After 48 hours:</strong>{" "}
                refund on reasoned request to our customer service team at{" "}
                <a
                  href="mailto:info@autodiag-eu.com"
                  className="text-cyan hover:underline"
                >
                  info@autodiag-eu.com
                </a>
                . Each request is considered individually.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              9. Cooling-Off Period (UK)
            </h2>
            <p>
              Under the{" "}
              <strong className="text-white">
                Consumer Contracts (Information, Cancellation and Additional
                Charges) Regulations 2013
              </strong>
              , Users resident in the United Kingdom have a right to cancel
              within{" "}
              <strong className="text-white">14 days</strong> from the date of
              subscription without giving any reason.
            </p>
            <p className="mt-3">
              To exercise this right, please send an email to{" "}
              <a
                href="mailto:info@autodiag-eu.com"
                className="text-cyan hover:underline"
              >
                info@autodiag-eu.com
              </a>{" "}
              clearly stating your wish to cancel, together with your Google
              Play identifier or the email address associated with your account.
              A refund will be processed within 14 days of receipt of your
              request.
            </p>
            <p className="mt-3">
              Please note: if you have expressly requested that the service
              begin during the 14-day cooling-off period and the service has
              commenced, you may be required to pay for the period during which
              the service was provided, in accordance with Regulation 36 of the
              2013 Regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              10. Minimum Age
            </h2>
            <p>
              Use of the AutoDiag EU application and subscription to the Premium
              offer are restricted to persons aged{" "}
              <strong className="text-white">18 years and over</strong>. By
              subscribing, the User confirms that they have reached this minimum
              age.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              11. Limitation of Liability
            </h2>
            <p>
              The AutoDiag EU application provides diagnostic information for
              guidance purposes only. Such information does not under any
              circumstances replace the advice of a qualified professional
              mechanic. The Publisher shall not be liable for any decisions made
              by the User on the basis of the diagnostics provided by the
              application, nor for any direct or indirect damage that may
              result.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              12. Amendments to these T&amp;Cs
            </h2>
            <p>
              The Publisher reserves the right to amend these T&amp;Cs at any
              time. Amendments take effect upon publication on the website. The
              User will be notified of any material amendment by email or
              in-app notification at least 30 days before the new terms come
              into force.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              13. Applicable Law and Jurisdiction
            </h2>
            <p>
              These T&amp;Cs are governed by Swiss law. Any dispute relating to
              the interpretation or performance of these T&amp;Cs shall be
              subject to the exclusive jurisdiction of the{" "}
              <strong className="text-white">
                courts of the Canton of Jura, Switzerland
              </strong>
              , subject to any mandatory consumer protection provisions
              applicable in the User&apos;s country of residence. For UK
              consumers, nothing in these T&amp;Cs affects your statutory rights
              under UK law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
            <p>
              For any questions relating to these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:info@autodiag-eu.com"
                className="text-cyan hover:underline"
              >
                info@autodiag-eu.com
              </a>
              .
            </p>
          </section>

          <p className="pt-4 text-sm text-secondary/60">
            Last updated: 3 April 2026
          </p>
        </div>
      </div>
    );
  }

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
            directement depuis le{" "}
            <strong className="text-white">Google Play Store</strong> :
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
                href="mailto:info@autodiag-eu.com"
                className="text-cyan hover:underline"
              >
                info@autodiag-eu.com
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
              href="mailto:info@autodiag-eu.com"
              className="text-cyan hover:underline"
            >
              info@autodiag-eu.com
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
              href="mailto:info@autodiag-eu.com"
              className="text-cyan hover:underline"
            >
              info@autodiag-eu.com
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

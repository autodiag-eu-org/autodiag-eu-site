import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

interface ConfidentialitePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ConfidentialitePageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return generatePageMetadata({
    title: isEn
      ? "Privacy Policy — UK GDPR & Swiss nDSG"
      : "Politique de confidentialite — RGPD et nDSG",
    description: isEn
      ? "Privacy Policy for AutoDiag EU: compliant with UK GDPR, EU GDPR, and Swiss nDSG. Full transparency on how your personal data is processed."
      : "Politique de confidentialite d'AutoDiag EU : double conformite RGPD (UE) et nDSG (Suisse). Transparence totale sur vos donnees.",
    locale,
    path: "confidentialite",
  });
}

export default async function ConfidentialitePage({
  params,
}: ConfidentialitePageProps) {
  const { locale } = await params;
  const isEn = locale === "en";

  if (isEn) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-secondary leading-relaxed">
          <section>
            <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
              <p className="text-white">
                AutoDiag EU Sarl complies with the{" "}
                <strong>
                  UK General Data Protection Regulation (UK GDPR)
                </strong>{" "}
                as retained in UK law following the end of the Brexit transition
                period, the{" "}
                <strong>
                  EU General Data Protection Regulation (EU GDPR)
                </strong>
                , and the{" "}
                <strong>
                  Swiss Federal Act on Data Protection (nDSG)
                </strong>{" "}
                which entered into force on 1 September 2023. This triple
                compliance ensures the highest level of protection for your
                personal data, whether you are in the United Kingdom,
                the European Union, or Switzerland.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              1. Data Controller
            </h2>
            <p>
              AutoDiag EU Sarl (registration in progress)
              <br />
              Route du Jura 10, 2926 Boncourt, Switzerland
              <br />
              Email:{" "}
              <a
                href="mailto:info@autodiag-eu.com"
                className="text-cyan hover:underline"
              >
                info@autodiag-eu.com
              </a>
              <br />
              Contact person: Reda Kaouani
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              2. Personal Data Collected and Purposes
            </h2>
            <p className="mb-4">
              We collect only the personal data necessary for the provision of
              our services. Full details are set out below:
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
                <h3 className="mb-2 font-semibold text-white">
                  Beta-tester registration form
                </h3>
                <p className="mb-2">
                  <strong className="text-white">Data:</strong> name, email
                  address, vehicle (optional), country
                </p>
                <p className="mb-2">
                  <strong className="text-white">Legal basis:</strong>{" "}
                  explicit consent (Article 6(1)(a) UK GDPR / Article 6(1)(a)
                  EU GDPR / Article 31 nDSG)
                </p>
                <p>
                  <strong className="text-white">Purpose:</strong> sending the
                  access link to the beta version of the application and
                  communications relating to the launch
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
                <h3 className="mb-2 font-semibold text-white">
                  Google Analytics 4 (GA4)
                </h3>
                <p className="mb-2">
                  <strong className="text-white">Data:</strong> anonymised
                  browsing data (pages visited, session duration, device type,
                  country)
                </p>
                <p className="mb-2">
                  <strong className="text-white">Legal basis:</strong>{" "}
                  consent via the cookie banner (Article 6(1)(a) UK GDPR /
                  EU GDPR)
                </p>
                <p className="mb-2">
                  <strong className="text-white">Purpose:</strong> statistical
                  audience analysis to improve the website
                </p>
                <p>
                  <strong className="text-white">Important:</strong> GA4 does
                  not load until you have accepted cookies. The consent banner
                  is blocking — no tracker activates without your explicit
                  agreement.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
                <h3 className="mb-2 font-semibold text-white">
                  Diagnostics via the mobile application
                </h3>
                <p className="mb-2">
                  <strong className="text-white">Data:</strong> vehicle
                  technical data (fault codes, engine parameters), engine audio
                  recordings (if the audio scan feature is used)
                </p>
                <p className="mb-2">
                  <strong className="text-white">Legal basis:</strong>{" "}
                  performance of a contract (Article 6(1)(b) UK GDPR /
                  EU GDPR)
                </p>
                <p>
                  <strong className="text-white">Purpose:</strong> provision of
                  the vehicle diagnostic service
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              3. Retention Periods
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">
                  Email addresses and beta data:
                </strong>{" "}
                retained until you unsubscribe or submit a deletion request
              </li>
              <li>
                <strong className="text-white">GA4 data:</strong> maximum 26
                months (Google Analytics configuration)
              </li>
              <li>
                <strong className="text-white">Application diagnostics:</strong>{" "}
                automatic purge after 30 days (free plan) or 90 days (Premium
                plan), unless the user requests that their history be retained
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              4. Data Sharing
            </h2>
            <p>
              We never sell your personal data. The only processors with access
              to certain data are:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Supabase (Singapore/EU):</strong>{" "}
                database hosting, GDPR-compliant infrastructure
              </li>
              <li>
                <strong className="text-white">Vercel (USA):</strong>{" "}
                website hosting, DPA signed
              </li>
              <li>
                <strong className="text-white">Resend (USA):</strong>{" "}
                transactional email delivery
              </li>
              <li>
                <strong className="text-white">Google (USA):</strong> Google
                Analytics 4, only if you have accepted cookies
              </li>
            </ul>
            <p className="mt-3">
              Transfers to third countries (USA) are governed by the European
              Commission&apos;s Standard Contractual Clauses and the EU–US Data
              Privacy Framework. For UK data subjects, transfers rely on the
              International Data Transfer Agreement (IDTA) or equivalent
              adequacy mechanisms recognised by the UK ICO.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              5. Your Rights
            </h2>
            <p className="mb-3">
              Under the UK GDPR, EU GDPR, and nDSG, you have the following
              rights as a data subject:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Right of access:</strong>{" "}
                to know what personal data we hold about you
              </li>
              <li>
                <strong className="text-white">Right to rectification:</strong>{" "}
                to correct inaccurate personal data
              </li>
              <li>
                <strong className="text-white">Right to erasure:</strong>{" "}
                to request the deletion of your personal data
              </li>
              <li>
                <strong className="text-white">Right to data portability:</strong>{" "}
                to receive your data in a structured, machine-readable format
              </li>
              <li>
                <strong className="text-white">Right to object:</strong>{" "}
                to object to the processing of your personal data for marketing
                purposes
              </li>
              <li>
                <strong className="text-white">
                  Right to withdraw consent:
                </strong>{" "}
                at any time, without affecting the lawfulness of processing
                carried out before withdrawal
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please send an email to{" "}
              <a
                href="mailto:info@autodiag-eu.com"
                className="text-cyan hover:underline"
              >
                info@autodiag-eu.com
              </a>{" "}
              setting out your request. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              6. Cookies
            </h2>
            <p>
              This website uses only Google Analytics 4 cookies, and exclusively
              after your explicit consent. The consent banner is blocking: no
              analytics cookie is set until you click &ldquo;Accept&rdquo;.
            </p>
            <p className="mt-3">
              No advertising or targeting cookies are used on this website.
              Strictly necessary cookies (language preference, session) do not
              require consent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              7. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal data: encryption in transit (TLS 1.3),
              encryption at rest (AES-256), two-factor authentication for
              administrative access, and access logging.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              8. Supervisory Authorities
            </h2>
            <p>
              If you believe that the processing of your personal data infringes
              your rights, you may lodge a complaint with the relevant
              supervisory authority:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">United Kingdom:</strong>{" "}
                Information Commissioner&apos;s Office (ICO) —{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  ico.org.uk
                </a>
              </li>
              <li>
                <strong className="text-white">Switzerland:</strong> Federal
                Data Protection and Information Commissioner (FDPIC / PFPDT)
              </li>
              <li>
                <strong className="text-white">European Union:</strong> the data
                protection authority in your country of residence
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              9. Changes to this Policy
            </h2>
            <p>
              We reserve the right to amend this Privacy Policy at any time.
              Any changes will be published on this page with an updated date.
              In the event of a material change, we will notify you by email or
              via a notice on the website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
            <p>
              For any questions relating to the protection of your personal
              data, please contact us at{" "}
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
        Politique de confidentialite
      </h1>

      <div className="space-y-8 text-secondary leading-relaxed">
        <section>
          <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
            <p className="text-white">
              AutoDiag EU Sarl respecte la{" "}
              <strong>
                Loi federale suisse sur la protection des donnees (nDSG)
              </strong>{" "}
              entree en vigueur le 1er septembre 2023, ainsi que le{" "}
              <strong>
                Reglement general sur la protection des donnees (RGPD)
              </strong>{" "}
              de l&apos;Union europeenne. Cette double conformite garantit le
              plus haut niveau de protection de vos donnees personnelles, que
              vous soyez en Suisse ou dans l&apos;UE.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            1. Responsable du traitement
          </h2>
          <p>
            AutoDiag EU Sarl (en cours de creation)
            <br />
            Route du Jura 10, 2926 Boncourt, Suisse
            <br />
            Email :{" "}
            <a
              href="mailto:info@autodiag-eu.com"
              className="text-cyan hover:underline"
            >
              info@autodiag-eu.com
            </a>
            <br />
            Responsable : Reda Kaouani
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            2. Donnees collectees et finalites
          </h2>
          <p className="mb-4">
            Nous collectons uniquement les donnees necessaires au
            fonctionnement de nos services. Voici le detail :
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
              <h3 className="mb-2 font-semibold text-white">
                Formulaire beta-testeur
              </h3>
              <p className="mb-2">
                <strong className="text-white">Donnees :</strong> nom, adresse
                email, vehicule (optionnel), pays
              </p>
              <p className="mb-2">
                <strong className="text-white">Base legale :</strong>{" "}
                consentement explicite (article 6.1.a RGPD / article 31 nDSG)
              </p>
              <p>
                <strong className="text-white">Finalite :</strong> envoi du
                lien d&apos;acces a la version beta de l&apos;application et
                communication relative au lancement
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
              <h3 className="mb-2 font-semibold text-white">
                Google Analytics 4 (GA4)
              </h3>
              <p className="mb-2">
                <strong className="text-white">Donnees :</strong> donnees de
                navigation anonymisees (pages visitees, duree de session, type
                d&apos;appareil, pays)
              </p>
              <p className="mb-2">
                <strong className="text-white">Base legale :</strong>{" "}
                consentement via le bandeau cookies (article 6.1.a RGPD)
              </p>
              <p className="mb-2">
                <strong className="text-white">Finalite :</strong> analyse
                statistique d&apos;audience pour ameliorer le site
              </p>
              <p>
                <strong className="text-white">Important :</strong> GA4 ne se
                charge pas tant que vous n&apos;avez pas accepte les cookies.
                Le bandeau est bloquant — aucun traceur ne s&apos;active sans
                votre accord.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
              <h3 className="mb-2 font-semibold text-white">
                Diagnostics via l&apos;application mobile
              </h3>
              <p className="mb-2">
                <strong className="text-white">Donnees :</strong> donnees
                techniques du vehicule (codes defaut, parametres moteur),
                enregistrements audio moteur (si scan sonore utilise)
              </p>
              <p className="mb-2">
                <strong className="text-white">Base legale :</strong>{" "}
                execution du contrat (article 6.1.b RGPD)
              </p>
              <p>
                <strong className="text-white">Finalite :</strong> fourniture
                du service de diagnostic automobile
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            3. Durees de conservation
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong className="text-white">Emails et donnees beta :</strong>{" "}
              conserves jusqu&apos;a votre desinscription ou demande de
              suppression
            </li>
            <li>
              <strong className="text-white">Donnees GA4 :</strong> 26 mois
              maximum (parametrage Google Analytics)
            </li>
            <li>
              <strong className="text-white">Diagnostics application :</strong>{" "}
              purge automatique apres 30 jours (plan gratuit) ou 90 jours
              (plan Premium), sauf historique conserve a la demande de
              l&apos;utilisateur
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            4. Partage des donnees
          </h2>
          <p>
            Nous ne vendons jamais vos donnees. Les seuls sous-traitants ayant
            acces a certaines donnees sont :
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong className="text-white">Supabase (Singapour/EU) :</strong>{" "}
              hebergement base de donnees, infrastructure conforme RGPD
            </li>
            <li>
              <strong className="text-white">Vercel (USA) :</strong>{" "}
              hebergement du site web, DPA signe
            </li>
            <li>
              <strong className="text-white">Resend (USA) :</strong> envoi
              d&apos;emails transactionnels
            </li>
            <li>
              <strong className="text-white">Google (USA) :</strong> Google
              Analytics 4, uniquement si vous avez accepte les cookies
            </li>
          </ul>
          <p className="mt-3">
            Les transferts vers des pays tiers (USA) sont encadres par les
            clauses contractuelles types de la Commission europeenne et le
            EU-US Data Privacy Framework.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            5. Vos droits
          </h2>
          <p className="mb-3">
            Conformement au RGPD et a la nDSG, vous disposez des droits
            suivants :
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong className="text-white">Droit d&apos;acces :</strong>{" "}
              savoir quelles donnees nous detenons sur vous
            </li>
            <li>
              <strong className="text-white">Droit de rectification :</strong>{" "}
              corriger des donnees inexactes
            </li>
            <li>
              <strong className="text-white">Droit de suppression :</strong>{" "}
              demander l&apos;effacement de vos donnees
            </li>
            <li>
              <strong className="text-white">Droit a la portabilite :</strong>{" "}
              recevoir vos donnees dans un format structure et lisible par
              machine
            </li>
            <li>
              <strong className="text-white">Droit d&apos;opposition :</strong>{" "}
              vous opposer au traitement de vos donnees a des fins de
              marketing
            </li>
            <li>
              <strong className="text-white">
                Droit de retirer votre consentement :
              </strong>{" "}
              a tout moment, sans affecter la licéite du traitement effectue
              avant le retrait
            </li>
          </ul>
          <p className="mt-3">
            Pour exercer vos droits, envoyez un email a{" "}
            <a
              href="mailto:info@autodiag-eu.com"
              className="text-cyan hover:underline"
            >
              info@autodiag-eu.com
            </a>{" "}
            en precisant votre demande. Nous repondons dans un delai de 30
            jours.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            6. Cookies
          </h2>
          <p>
            Ce site utilise uniquement les cookies de Google Analytics 4, et
            exclusivement apres votre consentement explicite. Le bandeau de
            consentement est bloquant : aucun cookie d&apos;analyse n&apos;est
            depose tant que vous n&apos;avez pas clique sur
            &laquo; Accepter &raquo;.
          </p>
          <p className="mt-3">
            Aucun cookie publicitaire ou de ciblage n&apos;est utilise sur ce
            site. Les cookies strictement necessaires au fonctionnement du
            site (preferences de langue, session) ne necessitent pas de
            consentement.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            7. Securite des donnees
          </h2>
          <p>
            Nous mettons en oeuvre des mesures techniques et
            organisationnelles appropriees pour proteger vos donnees :
            chiffrement en transit (TLS 1.3), chiffrement au repos (AES-256),
            authentification a deux facteurs pour les acces administrateur,
            et journalisation des acces.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            8. Autorite de controle
          </h2>
          <p>
            Si vous estimez que le traitement de vos donnees personnelles
            constitue une violation de vos droits, vous pouvez introduire
            une reclamation aupres de :
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong className="text-white">Suisse :</strong> Prpose federal
              a la protection des donnees et a la transparence (PFPDT)
            </li>
            <li>
              <strong className="text-white">France :</strong> Commission
              Nationale de l&apos;Informatique et des Libertes (CNIL)
            </li>
            <li>
              <strong className="text-white">Allemagne :</strong>{" "}
              Bundesbeauftragter fur den Datenschutz und die
              Informationsfreiheit (BfDI) ou votre Landesdatenschutzbeauftragter
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            9. Modifications
          </h2>
          <p>
            Nous nous reservons le droit de modifier cette politique de
            confidentialite a tout moment. Toute modification sera publiee
            sur cette page avec la date de mise a jour. En cas de modification
            substantielle, nous vous en informerons par email ou par une
            notification sur le site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
          <p>
            Pour toute question relative a la protection de vos donnees,
            contactez-nous a{" "}
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

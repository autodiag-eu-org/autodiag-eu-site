import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

interface ConfidentialitePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ConfidentialitePageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Politique de confidentialite — RGPD et nDSG",
    description:
      "Politique de confidentialite d'AutoDiag EU : double conformite RGPD (UE) et nDSG (Suisse). Transparence totale sur vos donnees.",
    locale,
    path: "confidentialite",
  });
}

export default function ConfidentialitePage() {
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

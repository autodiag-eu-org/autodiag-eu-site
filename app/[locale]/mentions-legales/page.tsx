import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

interface MentionsLegalesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: MentionsLegalesPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Mentions legales — Impressum",
    description:
      "Mentions legales et impressum d'AutoDiag EU Sarl, entreprise suisse basee a Boncourt, Canton du Jura.",
    locale,
    path: "mentions-legales",
  });
}

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">
        Mentions legales
      </h1>

      <div className="space-y-8 text-secondary leading-relaxed">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Editeur du site
          </h2>
          <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
            <p className="mb-2">
              <strong className="text-white">Raison sociale :</strong>{" "}
              AutoDiag EU Sarl (en cours de creation)
            </p>
            <p className="mb-2">
              <strong className="text-white">Forme juridique :</strong>{" "}
              Societe a responsabilite limitee de droit suisse
            </p>
            <p className="mb-2">
              <strong className="text-white">Adresse :</strong> Route du Jura
              10, 2926 Boncourt, Suisse
            </p>
            <p className="mb-2">
              <strong className="text-white">Email :</strong>{" "}
              <a
                href="mailto:info@autodiag.eu"
                className="text-cyan hover:underline"
              >
                info@autodiag.eu
              </a>
            </p>
            <p className="mb-2">
              <strong className="text-white">Responsable de la publication :</strong>{" "}
              Reda Kaouani
            </p>
            <p className="mb-2">
              <strong className="text-white">IDE / CHE :</strong> En attente
              d&apos;immatriculation
            </p>
            <p>
              <strong className="text-white">Registre du commerce :</strong>{" "}
              Canton du Jura, Suisse
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Hebergement du site
          </h2>
          <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
            <p className="mb-2">
              <strong className="text-white">Hebergeur :</strong> Vercel Inc.
            </p>
            <p className="mb-2">
              <strong className="text-white">Adresse :</strong> 440 N Barranca
              Ave #4133, Covina, CA 91723, Etats-Unis
            </p>
            <p>
              <strong className="text-white">Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                vercel.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Propriete intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes,
            logo, icones, logiciels) est la propriete exclusive d&apos;AutoDiag
            EU Sarl ou de ses partenaires et est protege par les lois suisses
            et internationales relatives a la propriete intellectuelle.
          </p>
          <p className="mt-3">
            Toute reproduction, representation, modification, publication ou
            adaptation de tout ou partie des elements du site, quel que soit
            le moyen ou le procede utilise, est interdite sans l&apos;autorisation
            ecrite prealable d&apos;AutoDiag EU Sarl.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Limitation de responsabilite
          </h2>
          <p>
            Les informations fournies sur ce site le sont a titre indicatif.
            AutoDiag EU Sarl ne saurait garantir l&apos;exactitude, la
            completude ou l&apos;actualite des informations diffusees. Les
            diagnostics fournis par l&apos;application AutoDiag EU sont des
            indications et ne remplacent en aucun cas l&apos;avis d&apos;un
            mecanicien professionnel qualifie.
          </p>
          <p className="mt-3">
            AutoDiag EU Sarl ne pourra etre tenue responsable des dommages
            directs ou indirects causes au materiel de l&apos;utilisateur lors
            de l&apos;acces au site ou a l&apos;application, ni des dommages
            resultant de l&apos;utilisation des informations de diagnostic
            fournies.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Liens hypertextes
          </h2>
          <p>
            Le site peut contenir des liens vers d&apos;autres sites web.
            AutoDiag EU Sarl n&apos;exerce aucun controle sur ces sites et
            decline toute responsabilite quant a leur contenu ou leurs
            pratiques en matiere de protection des donnees.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">
            Droit applicable et juridiction
          </h2>
          <p>
            Les presentes mentions legales sont soumises au droit suisse. Tout
            litige relatif a l&apos;utilisation du site sera soumis a la
            competence exclusive des tribunaux du Canton du Jura, Suisse, sauf
            disposition legale contraire applicable au consommateur.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
          <p>
            Pour toute question relative aux presentes mentions legales,
            contactez-nous a{" "}
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

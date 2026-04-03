import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import EconomiesClient from "./EconomiesClient";

interface EconomiesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: EconomiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Calculateur d'economies — AutoDiag EU vs garage",
    description:
      "Calculez combien vous economisez avec AutoDiag EU par rapport aux diagnostics en garage. Comparaison des couts par pays : France, Allemagne, Suisse, Espagne, Portugal.",
    locale,
    path: "economies",
  });
}

export default function EconomiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Calculez vos{" "}
          <span className="text-gradient">economies</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Combien depensez-vous en diagnostics garage ? AutoDiag EU change la
          donne.
        </p>
      </div>

      <EconomiesClient />
    </div>
  );
}

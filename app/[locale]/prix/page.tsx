import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import PrixClient from "./PrixClient";

interface PrixPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrixPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Tarifs AutoDiag EU — Gratuit ou Premium 49 CHF/an",
    description:
      "Decouvrez les tarifs AutoDiag EU : version gratuite genereuse et Premium a 49 CHF/an tout illimite. Comparaison avec Carly, Car Scanner et OBDeleven.",
    locale,
    path: "prix",
  });
}

export default function PrixPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Des tarifs{" "}
          <span className="text-gradient">simples et transparents</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Pas de mauvaise surprise. Gratuit au lancement, Premium pour les
          passionnes.
        </p>
      </div>

      <PrixClient />
    </div>
  );
}

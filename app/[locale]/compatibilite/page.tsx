import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import CompatibiliteClient from "./CompatibiliteClient";
import DongleRecommendation from "@/components/shared/DongleRecommendation";

interface CompatibilitePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CompatibilitePageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return generatePageMetadata({
    title: isEn
      ? "OBD2 Vehicle Compatibility Checker"
      : "Verificateur de compatibilite OBD2",
    description: isEn
      ? "Check if your vehicle is compatible with AutoDiag EU. 677 European vehicles, OBD2 protocols, supported PIDs and available features."
      : "Verifiez si votre vehicule est compatible avec AutoDiag EU. 677 vehicules europeens, protocoles OBD2, PIDs supportes et fonctionnalites disponibles.",
    locale,
    path: "compatibilite",
  });
}

export default async function CompatibilitePage({ params }: CompatibilitePageProps) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {isEn ? (
            <>
              OBD2{" "}
              <span className="text-gradient">Vehicle Compatibility</span>
              {" "}Checker
            </>
          ) : (
            <>
              Verificateur de{" "}
              <span className="text-gradient">compatibilite OBD2</span>
            </>
          )}
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {isEn
            ? "677 European vehicles listed — check in seconds if your car is compatible"
            : "677 vehicules europeens references — verifiez en quelques secondes si votre voiture est compatible"}
        </p>
      </div>

      <CompatibiliteClient />
      <DongleRecommendation locale={locale} />
    </div>
  );
}

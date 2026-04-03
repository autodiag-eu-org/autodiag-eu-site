import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import CompatibiliteClient from "./CompatibiliteClient";

interface CompatibilitePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CompatibilitePageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Verificateur de compatibilite OBD2",
    description:
      "Verifiez si votre vehicule est compatible avec AutoDiag EU. 677 vehicules europeens, protocoles OBD2, PIDs supportes et fonctionnalites disponibles.",
    locale,
    path: "compatibilite",
  });
}

export default function CompatibilitePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Verificateur de{" "}
          <span className="text-gradient">compatibilite OBD2</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          677 vehicules europeens references — verifiez en quelques secondes si
          votre voiture est compatible
        </p>
      </div>

      <CompatibiliteClient />
    </div>
  );
}

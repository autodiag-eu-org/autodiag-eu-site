import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import CTChecklist from "@/components/tools/CTChecklist";

interface CTPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CTPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Pre-controle technique interactif — CT, TUV, MFK, ITV, IPO",
    description:
      "Verifiez votre vehicule avant le controle technique dans 5 pays europeens : CT en France, TUV en Allemagne, MFK en Suisse, ITV en Espagne, IPO au Portugal. Checklist interactive gratuite avec AutoDiag EU.",
    locale,
    path: "controle-technique",
  });
}

export default function ControleTechniquePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Pre-controle technique{" "}
          <span className="text-gradient">interactif</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Verifiez votre vehicule avant de passer au controle technique dans 5
          pays europeens.
        </p>
      </div>

      <CTChecklist />
    </div>
  );
}

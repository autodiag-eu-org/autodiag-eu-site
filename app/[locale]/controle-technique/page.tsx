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
  const isEn = locale !== "fr";
  return generatePageMetadata({
    title: isEn
      ? "Pre-MOT / Vehicle Inspection Check — CT, TUV, MFK, ITV, IPO, MOT"
      : "Pre-controle technique interactif — CT, TUV, MFK, ITV, IPO",
    description: isEn
      ? "Check your vehicle before its inspection in 6 European countries: MOT in the UK, CT in France, TUV in Germany, MFK in Switzerland, ITV in Spain, IPO in Portugal. Free interactive checklist with AutoDiag EU."
      : "Verifiez votre vehicule avant le controle technique dans 5 pays europeens : CT en France, TUV en Allemagne, MFK en Suisse, ITV en Espagne, IPO au Portugal. Checklist interactive gratuite avec AutoDiag EU.",
    locale,
    path: "controle-technique",
  });
}

export default async function ControleTechniquePage({ params }: CTPageProps) {
  const { locale } = await params;
  const isEn = locale !== "fr";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {isEn ? (
            <>
              Pre-inspection{" "}
              <span className="text-gradient">interactive check</span>
            </>
          ) : (
            <>
              Pre-controle technique{" "}
              <span className="text-gradient">interactif</span>
            </>
          )}
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {isEn
            ? "Check your vehicle before its inspection in 6 European countries."
            : "Verifiez votre vehicule avant de passer au controle technique dans 5 pays europeens."}
        </p>
      </div>

      <CTChecklist />
    </div>
  );
}

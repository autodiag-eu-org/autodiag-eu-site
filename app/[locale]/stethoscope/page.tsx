import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import AudioQuiz from "@/components/tools/AudioQuiz";

interface StethoscopePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: StethoscopePageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Stethoscope Virtuel — Testez votre oreille de mecanicien",
    description:
      "Saurez-vous reconnaitre un moteur defaillant a l'oreille ? Testez vos competences avec notre quiz audio gamifie en 3 niveaux de difficulte. Debutant, intermediaire ou expert — identifiez les bruits anormaux parmi les echantillons sonores.",
    locale,
    path: "stethoscope",
  });
}

export default function StethoscopePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Stethoscope{" "}
          <span className="text-gradient">Virtuel</span>
        </h1>
        <p className="mt-4 text-lg text-[#8a90b0] max-w-2xl mx-auto">
          Testez votre oreille de mecanicien — ecoutez les echantillons sonores
          et identifiez le son defectueux parmi trois propositions
        </p>
      </div>

      <AudioQuiz />
    </div>
  );
}

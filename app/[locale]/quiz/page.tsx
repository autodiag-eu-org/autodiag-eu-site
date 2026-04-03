import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import CarQuiz from "@/components/tools/CarQuiz";

interface QuizPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: QuizPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Quiz Voiture — Testez vos connaissances automobiles",
    description:
      "15 questions pour tester vos connaissances automobiles. OBD2, mecanique, entretien, culture auto — decouvrez si vous etes novice, amateur eclaire, passionne confirme ou expert automobile.",
    locale,
    path: "quiz",
  });
}

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Quiz{" "}
          <span className="text-gradient">Voiture</span>
        </h1>
        <p className="mt-4 text-lg text-[#8a90b0] max-w-2xl mx-auto">
          Testez vos connaissances automobiles en 15 questions — OBD2,
          mecanique, entretien et culture auto
        </p>
      </div>

      <CarQuiz />
    </div>
  );
}

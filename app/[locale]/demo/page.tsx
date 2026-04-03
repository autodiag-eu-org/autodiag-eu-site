import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import AppSimulator from "@/components/tools/AppSimulator";

interface DemoPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Decouvrez AutoDiag EU en action — Demo interactive",
    description:
      "Regardez comment AutoDiag EU diagnostique votre vehicule en temps reel. Connexion Bluetooth, lecture OBD2, detection de pannes et score de sante — tout en 30 secondes.",
    locale,
    path: "demo",
  });
}

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Decouvrez AutoDiag EU{" "}
          <span className="text-gradient">en action</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Regardez comment AutoDiag EU diagnostique votre vehicule en temps
          reel.
        </p>
        <p className="mt-2 text-sm text-secondary/70">
          Video demo bientot disponible
        </p>
      </div>

      <AppSimulator />
    </div>
  );
}

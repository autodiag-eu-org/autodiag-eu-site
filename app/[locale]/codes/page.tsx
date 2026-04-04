import type { Metadata } from "next";
import { getAllCodes } from "@/lib/dtc";
import { generatePageMetadata } from "@/lib/seo";
import DTCEncyclopediaClient from "./DTCEncyclopediaClient";

interface CodesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CodesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return generatePageMetadata({
    title: isEn
      ? "OBD2 Fault Code Encyclopedia"
      : "Encyclopedie des codes defaut OBD2",
    description: isEn
      ? "250 OBD2 fault codes documented with causes, repair costs by country and solutions. Search your fault code and understand what your car is trying to tell you."
      : "250 codes defaut OBD2 documentes avec causes, couts de reparation par pays et solutions. Recherchez votre code defaut et comprenez ce que votre voiture essaie de vous dire.",
    locale,
    path: "codes",
  });
}

export default async function CodesPage({
  params,
}: CodesPageProps) {
  const { locale } = await params;
  const allCodes = getAllCodes();
  const isEn = locale === "en";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          {isEn ? (
            <>
              OBD2{" "}
              <span className="text-gradient">Fault Code Encyclopedia</span>
            </>
          ) : (
            <>
              Encyclopedie des{" "}
              <span className="text-gradient">codes defaut OBD2</span>
            </>
          )}
        </h1>
        <p className="mt-4 text-lg text-secondary">
          {isEn
            ? "250 codes documented with causes, costs and solutions"
            : "250 codes documentes avec causes, couts et solutions"}
        </p>
      </div>

      <DTCEncyclopediaClient initialCodes={allCodes} locale={locale} />
    </div>
  );
}

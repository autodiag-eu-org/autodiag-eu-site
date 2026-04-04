import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";
import SchemaMarkup from "@/components/shared/SchemaMarkup";
import MOTChecklist from "@/components/tools/MOTChecklist";

interface MOTPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: MOTPageProps): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    title: "MOT Preparation Checklist — Free MOT Check Guide 2026",
    description:
      "Prepare your car for its MOT with our interactive DVSA-based checklist. Check lighting, suspension, tyres, brakes, emissions and more. See which checks AutoDiag EU can help with.",
    locale,
    path: "mot-check",
  });
}

export default async function MOTCheckPage({ params }: MOTPageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    redirect(`/${locale}/controle-technique`);
  }

  const faqSchema = {
    "@context": "https://schema.org" as const,
    "@type": "FAQPage" as const,
    mainEntity: [
      {
        "@type": "Question" as const,
        name: "What are the most common MOT failure reasons?",
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: "The most common MOT failure reasons are lighting and signalling (12.75%), suspension (10.67%), tyres (10.05%), brakes (9.80%), and emissions (8.20%). Together, these five categories account for over half of all MOT failures in the UK.",
        },
      },
      {
        "@type": "Question" as const,
        name: "Can AutoDiag EU help me prepare for my MOT?",
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: "Yes. AutoDiag EU can read OBD2 fault codes related to emissions, brakes (ABS), airbags, and lighting circuits. The AI audio scan can also detect suspension and exhaust noises. While AutoDiag EU cannot check tyres or bodywork, it covers many of the electronic and engine-related MOT test items.",
        },
      },
      {
        "@type": "Question" as const,
        name: "How much does an MOT cost in the UK?",
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: "The maximum MOT test fee set by the DVSA is currently £54.85 for cars. Many garages offer MOTs for less, typically £30-£50. This does not include the cost of any repairs needed to pass.",
        },
      },
      {
        "@type": "Question" as const,
        name: "What happens if my car fails its MOT?",
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: "If your car fails, you will receive a list of defects categorised as dangerous, major, or minor. Dangerous and major defects must be repaired before the car can pass. You can get repairs done and return for a free partial retest within 10 working days at the same testing station.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <SchemaMarkup type="FAQPage" data={faqSchema} />

      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1.5 text-sm font-medium text-cyan">
          UK Exclusive
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          MOT Preparation{" "}
          <span className="text-gradient">Checklist</span>
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Go through every major MOT checkpoint before your test. Based on real
          DVSA test categories and failure statistics.
        </p>
      </div>

      {/* MOT Stats summary */}
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-glass p-4 text-center backdrop-blur-md">
          <p className="text-2xl font-bold text-gradient">12</p>
          <p className="mt-1 text-xs text-secondary">Test categories</p>
        </div>
        <div className="rounded-xl border border-border bg-glass p-4 text-center backdrop-blur-md">
          <p className="text-2xl font-bold text-gradient">36%</p>
          <p className="mt-1 text-xs text-secondary">Fail first time</p>
        </div>
        <div className="rounded-xl border border-border bg-glass p-4 text-center backdrop-blur-md">
          <p className="text-2xl font-bold text-gradient">£54.85</p>
          <p className="mt-1 text-xs text-secondary">Max MOT fee</p>
        </div>
        <div className="rounded-xl border border-border bg-glass p-4 text-center backdrop-blur-md">
          <p className="text-2xl font-bold text-gradient">5</p>
          <p className="mt-1 text-xs text-secondary">OBD2-checkable areas</p>
        </div>
      </div>

      <MOTChecklist />

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-8 text-center">
          <h2 className="mb-2 text-xl font-bold">
            Scan your car before your MOT with AutoDiag EU
          </h2>
          <p className="mb-6 text-secondary">
            Read fault codes, check emissions health, and listen for suspension
            noises — all from your phone. Catch problems before the tester does.
          </p>
          <a
            href="#beta"
            className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
          >
            <span className="relative z-10">Download AutoDiag EU</span>
            <span
              aria-hidden="true"
              className="shimmer pointer-events-none absolute inset-0"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

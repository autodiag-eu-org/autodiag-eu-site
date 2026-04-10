import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";
import DiagnosticExpress from "@/components/landing/DiagnosticExpress";
import InnovationCards from "@/components/landing/InnovationCards";
import PricingSection from "@/components/landing/PricingSection";
import BetaForm from "@/components/landing/BetaForm";
import IOSWaitlist from "@/components/landing/IOSWaitlist";
import TestimonialSection from "@/components/landing/TestimonialSection";
import DongleRecommendation from "@/components/shared/DongleRecommendation";
import SchemaMarkup, {
  buildSoftwareApplicationSchema,
  buildWebSiteSchema,
} from "@/components/shared/SchemaMarkup";

interface LandingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { locale } = await params;
  const softwareAppSchema = buildSoftwareApplicationSchema(locale);
  const webSiteSchema = buildWebSiteSchema(locale);

  return (
    <main className="min-h-screen bg-bg">
      <SchemaMarkup type="SoftwareApplication" data={softwareAppSchema} />
      <SchemaMarkup type="WebSite" data={webSiteSchema} />
      <section id="hero">
        <HeroSection />
      </section>

      <section id="stats">
        <StatsBar />
      </section>

      <section id="diagnostic">
        <DiagnosticExpress />
      </section>

      <section id="innovations">
        <InnovationCards />
      </section>

      <section id="tarifs">
        <PricingSection />
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DongleRecommendation locale={locale} />
      </div>

      <section id="beta">
        <BetaForm />
      </section>

      <section id="ios">
        <IOSWaitlist />
      </section>

      <section id="avis">
        <TestimonialSection />
      </section>
    </main>
  );
}

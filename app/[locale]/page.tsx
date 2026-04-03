import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";
import DiagnosticExpress from "@/components/landing/DiagnosticExpress";
import InnovationCards from "@/components/landing/InnovationCards";
import PricingSection from "@/components/landing/PricingSection";
import BetaForm from "@/components/landing/BetaForm";
import IOSWaitlist from "@/components/landing/IOSWaitlist";
import TestimonialSection from "@/components/landing/TestimonialSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-bg">
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

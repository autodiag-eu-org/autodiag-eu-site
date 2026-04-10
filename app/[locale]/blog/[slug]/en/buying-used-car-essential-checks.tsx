import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleBuyingUsedCarChecks() {
  const faq: FaqItem[] = [
    {
      q: "What is the most important check before buying?",
      a: "A full OBD2 scan, immediately followed by an engine sound scan. The first reveals hidden codes and ageing values (lambda, catalyst, fuel trims). The second detects mechanical wear the seller can't mask even by clearing codes. Together, they give a reliable picture of the car's real health in under ten minutes.",
    },
    {
      q: "Can a seller clear a warning light just before sale?",
      a: "Yes, and many unscrupulous sellers do. But some codes return after a few miles, and crucially the readiness monitors are then all at zero. An honest seller does not clear codes right before a viewing: the monitors are ready, meaning the ECU had time to re-evaluate its systems after any repairs.",
    },
    {
      q: "How do I spot a tampered odometer?",
      a: "Cross-reference three sources: the service book with dates and mileages, the MOT history on gov.uk, and the mileage logged in some modules (ABS, gearbox) via the OBD2 scanner. A gap of more than 3000 miles between sources is a clear signal. The biggest tampering operations exceed 30000 miles.",
    },
    {
      q: "Should I pay for a pre-purchase inspection at a garage?",
      a: "For a car above 9000 GBP, yes it's a good idea, expect 80 to 170 GBP. For a cheaper car, a full app-based scan plus an attentive test drive covers 85% of cases. If you have a specific doubt (clutch, gearbox), a stop at a brand specialist is reassuring.",
    },
    {
      q: "Which documents are absolutely essential?",
      a: "Original V5C, valid MOT (ideally recent), service book, major repair invoices (timing, clutch, turbo), HPI check to confirm no outstanding finance or write-off. For an imported vehicle, check that the European certificate of conformity is present. Refuse any sale without these basic documents.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Buying a used car: the essential checks in 2026"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={11}
        category="Used Car Buying"
      >
        <p>
          The used-car market is a trap. Adverts shine, sellers are
          pleasant, photos are flattering, yet one in three buyers
          regrets their purchase within six months according to
          European consumer studies. The good news: 80% of bad deals
          could have been avoided with a methodical 30-minute
          inspection. Here is the full checklist a careful buyer
          should follow in 2026.
        </p>

        <h2>Before you even drive there</h2>
        <p>
          Scan the number plate or VIN via OCR from the advert to
          verify basic details: make, model, year, fuel, engine. A
          seller who gets their own car wrong is already a signal.
          Check the HPI register, the gov.uk MOT history and the
          service history to verify mileage consistency, declared
          incidents and recalls. See{" "}
          <Link href="/en/blog/scan-vin-decode-car-complete-history">
            scan the VIN to decode the history
          </Link>
          .
        </p>

        <h2>Bodywork visual inspection</h2>
        <p>
          Start by walking around the car in daylight. Look for shade
          differences between panels (paint respray signs), filler
          traces under wheel-arch plastics, misalignment of bonnet or
          doors. Measure paint thickness with a coating gauge (15 to
          30 GBP) — thickness above 250 microns reveals significant
          repair. Check the suspension bolts in the wheel arch: if
          they are marked, the car has been hit.
        </p>

        <h2>Under the car: leaks that tell stories</h2>
        <p>
          Look at the ground where the car is parked. A fresh brown
          stain signals an oil leak. Green, pink or orange means
          coolant. Red is automatic transmission fluid. Clear is
          either brake fluid or AC condensate (benign). Colours tell
          the story. See{" "}
          <Link href="/en/blog/oil-brake-fluid-coolant-leak-colour-reveals-fault">
            how fluid colour reveals the fault
          </Link>
          .
        </p>

        <h2>Tyres: a story in four chapters</h2>
        <p>
          Tyres reveal geometry and wear. Centre wear: chronic
          overinflation. Shoulder wear: underinflation or dead shock
          absorber. Feathering and cupping: suspension or alignment.
          Uniform wear with depth under 3 mm: tyres to change, a
          negotiation factor. Also check manufacturing dates (DOT):
          tyres older than 6 years harden and lose grip even if
          tread looks fine.
        </p>

        <h2>OBD2 scan: the ECU's honesty</h2>
        <p>
          Plug in your ELM327 dongle and run a full scan. Three
          things to check. One: active and pending codes. Two: OBD2
          readiness monitors — they should mostly show ready, a
          sign the car has been driving normally long enough for the
          ECU to complete all its system tests. Three: mileage
          logged in some modules (ABS, gearbox) to cross-check
          against the odometer. A pending{" "}
          <Link href="/en/codes/p0300">P0300 code</Link> is a
          serious warning.
        </p>

        <h2>Sound scan: what the seller cannot hide</h2>
        <p>
          The sound scan is impossible to manipulate. Even if the
          seller has cleared every code, mechanical wear leaves its
          acoustic signature. Launch a 30-second recording at hot
          idle, then another at 2500 RPM. The SVM classifies
          anomalies. Confidence above 70% on a bearing, knock or
          tick class is a signal worth discussing. See{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            the 11 engine faults detectable by sound
          </Link>
          .
        </p>

        <h2>Methodical test drive</h2>
        <p>
          At least 20 minutes in varied conditions: urban, pull-away
          from stationary, motorway, hard braking, tight cornering.
          Listen for suspicious noises, check that gears engage
          without jolts, that braking is firm and straight, that the
          steering doesn't pull, that air-con cools quickly. Stop
          the warm engine and restart: a labouring starter or smoke
          on startup are major red flags.
        </p>

        <h2>Checking the paperwork</h2>
        <p>
          Original V5C in the seller's name, recent HPI check, valid
          MOT certificate, service book coherent with mileage,
          invoices for important repairs. On cars over 5 years old
          the timing job invoice is crucial. See also{" "}
          <Link href="/en/codes/p0420">the P0420 code</Link> which is
          a frequent negotiation lever.
        </p>

        <h2>Negotiating on facts</h2>
        <p>
          If the inspection reveals defects, negotiate on numbers:
          repair quotes, remediation cost, vehicle depreciation. A
          serious seller accepts a documented negotiation. A seller
          who gets agitated over a 400 GBP quote is likely surprised
          himself by what you found. Walk away if needed — there's
          always another advert.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

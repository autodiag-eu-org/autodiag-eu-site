import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleTimingBeltSound() {
  const faq: FaqItem[] = [
    {
      q: "At what mileage should a timing belt be changed?",
      a: "It depends on the model: between 60 000 and 180 000 km or 5 to 10 years, whichever comes first. Always check the service book for your specific engine. Some modern engines use timing chains instead, which last longer but can still fail, and they too have a sonic signature.",
    },
    {
      q: "What is an interference engine?",
      a: "An engine where valves and pistons share the same physical space at different moments. If the timing slips or breaks, they collide. Most modern engines are interference. On these engines, a broken belt bends valves and sometimes damages pistons, jumping the bill from GBP 400 (preventive change) to GBP 1700-6500 (head rebuild or replacement engine).",
    },
    {
      q: "Can the sound scan really detect a belt nearing the end?",
      a: "Yes, with caveats. It especially detects early wear in the tensioner and idler pulley, which produce characteristic frequencies well before failure. The belt itself has subtler signs, but a shift in spectral signature above 70% confidence justifies a mechanical inspection.",
    },
    {
      q: "What noises warn of a tired timing belt?",
      a: "A light whine from cold, a rapid ticking at mid-range, a subtle whistle that tracks rpm. These sounds are usually masked by the rest of the engine, which is why the human ear misses them. Sound scan isolates their specific spectral signature.",
    },
    {
      q: "How do I tell accessory belt noise from timing belt noise?",
      a: "Accessory belt (alternator, AC, power steering) noises are sharper, more varied and more audible. The timing belt sits behind a cover and produces muffled, deeper sounds that blend into general engine noise. The SVM separates them through the 40 MFCC coefficients.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Worn timing belt: detect it by sound before it snaps"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevention"
      >
        <p>
          If you only remember one reason to use sound scanning, let
          it be this: catching a timing belt near the end of its life
          before it lets go. Because when a belt snaps on an
          interference engine, and most modern engines are
          interference, bills start at GBP 1700 and climb very
          quickly towards GBP 3500, 5000 or even 7000 depending on
          the number of damaged valves and piston condition. A
          preventive change costs between GBP 350 and 800. The ratio
          is one to eight at best, one to twenty in the worst case.
        </p>

        <h2>Why belts fail &quot;without warning&quot; (to humans)</h2>
        <p>
          The timing belt hides behind a plastic cover, usually on
          the left-hand side of the engine as you look under the
          bonnet. That cover muffles sound, and the residual noise
          blends with the rest of the engine: combustion, intake,
          exhaust, cooling fan. No human ear can isolate the specific
          belt noise. That is why failures always feel
          &quot;sudden&quot;. In reality, they are not: the signs
          were there, in the spectrum, for weeks.
        </p>

        <h2>The spectral signature of a tiring timing belt</h2>
        <p>
          A new belt has a clean signature: minimal belt noise of its
          own, stable harmonics, no parasitic peaks. As it wears,
          several things happen. The tensioner, compensating for belt
          elongation, works harder and produces a spectral peak
          around 4-6 kHz. Belt teeth wear too, introducing even
          harmonics tied to the tooth-passing frequency. If the idler
          starts to bind, a cyclic noise appears at the idler rotation
          frequency. Combined, these three signals form a fingerprint
          the SVM labels as &quot;belt noise&quot; with rising
          confidence.
        </p>

        <h2>The 3 detectable degradation phases</h2>
        <p>
          Phase 1: mild drift. Belt noise confidence climbs from 5%
          (baseline) to 20-30%. Nothing visible to the user, but the
          AI sees a spectral change. Perfect moment to plan the
          replacement calmly. Phase 2: yellow alert. Confidence
          reaches 50-70%. Clear change. Schedule a mechanical
          inspection within two weeks. Phase 3: red alert. Confidence
          above 80%. Immediate action required, the window of safety
          is measured in days.
        </p>

        <h2>What the scan cannot do</h2>
        <p>
          Let us be clear: sound scan does not replace a visual belt
          inspection. It detects drift, not the actual visible state
          of the belt. If the service book says it is time to change
          the belt, change it, even if the scan is quiet. The scan is
          a complementary tool, not a substitute. Its job is to alert
          you between scheduled services, when you are still well
          below the theoretical mileage but the belt has been
          stressed abnormally.
        </p>

        <h2>Factors that accelerate wear</h2>
        <p>
          A belt rated for 120 000 km can fail at 60 000 km under
          adverse conditions. Known wear accelerators: coolant or oil
          contamination on the belt (rubber disintegrates), a weak
          tensioner from a known design flaw, intensive city use with
          many cold starts, any overheating event, or simply a
          previous replacement done with low-quality parts. If your
          car has been through any of these, monthly scanning is
          particularly recommended.
        </p>

        <h2>OBD2 plus sound fusion</h2>
        <p>
          Certain codes hint indirectly at timing belt issues. A{" "}
          <Link href="/en/codes/p0011">P0011</Link>{" "}
          (intake cam advance) can indicate a belt that jumped a
          tooth. A generalised{" "}
          <Link href="/en/codes/p0300">P0300</Link>{" "}
          misfire code can result from the same cause. Layer 5 fuses
          that information: when one of these codes is present AND
          belt noise is flagged above 40%, the system raises
          diagnostic priority. A concrete example of the value of
          audio plus OBD2 fusion.
        </p>

        <h2>The real cost of a missed detection</h2>
        <p>
          On the most common interference engines in Europe, Renault
          1.5 dCi, Peugeot 1.6 HDi, VW 1.6 TDI, Fiat 1.3 MultiJet,
          BMW N47, timing belt failure routinely costs between GBP
          2000 and 4500. On premium or V6 engines it can exceed GBP
          7000. Compare that to GBP 350-800 for a preventive
          replacement. Even if sound scan only warns you once in the
          life of the vehicle, it pays for itself many times over.
          More reading:{" "}
          <Link href="/en/blog/prevent-engine-failure-preventive-sound-diagnosis">
            preventive sound diagnosis
          </Link>{" "}
          and the{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            11 detectable faults
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

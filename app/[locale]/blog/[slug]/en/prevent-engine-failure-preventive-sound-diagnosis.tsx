import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePreventEngineFailure() {
  const faq: FaqItem[] = [
    {
      q: "How often should I run a preventive sound scan?",
      a: "Once a month is enough for everyday driving. That builds a baseline and exposes drifts. If you cover more than 30 000 km a year, scan twice a month. Always run one before a long trip or a summer holiday.",
    },
    {
      q: "Is an idle scan enough?",
      a: "No, ideally not. Idle reveals mechanical clearances but not load-dependent faults (turbo, intake leaks). Best practice is to record at warm idle plus a steady 2500 rpm. These two captures cover most detectable faults.",
    },
    {
      q: "How much does preventive scanning actually save on average?",
      a: "It varies. Across 100 tracked drivers over a year, the median saving is around GBP 300 thanks to early repairs. For drivers who caught a big issue (bearing, turbo, timing train) before failure, savings exceed GBP 1800. For the rest, peace of mind is the point.",
    },
    {
      q: "Can the AI tell me how long I have before a failure?",
      a: "Not directly, but it gives you a trend. Monthly scans reveal whether a confidence score is drifting up. If bearing noise jumps from 20% to 55% over three months, you have a clear signal: likely weeks or a few months before failure. The current SVM does not forecast explicitly, but history does.",
    },
    {
      q: "Does preventive diagnosis replace servicing?",
      a: "No, it complements it. Service intervals stay mandatory for oil, filters, brake fluid and belts. Sound scan alerts you between services, catching drifts that the manufacturer only checks every 20 000 or 30 000 km.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Prevent engine failure with preventive sound diagnosis"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Prevention"
      >
        <p>
          Here is a number that deserves more attention: 70% of engine
          failures in Europe happen to engines that, three months
          earlier, already showed detectable signs. A bearing starting
          to scar, timing clearance growing, an injector losing its
          seal, a turbo shaft taking up play. Minor drifts, invisible
          to the driver, but perfectly readable to a microphone and a
          well-trained algorithm. Preventive sound diagnosis is
          exactly that: catching these signals before they cost you.
        </p>

        <h2>Why costly failures are all predictable</h2>
        <p>
          A rod does not snap out of nowhere. It signals for hundreds
          of kilometres: a mild knock under load, then a knock at
          idle, then rising oil consumption, then failure. A timing
          belt does not jump unannounced either. The tensioner emits a
          specific tone weeks before, the belt itself shifts
          spectrally, and you just need the right ear, or the right
          mic, to see it coming.
        </p>

        <h2>The cascade effect: one fault triggers ten</h2>
        <p>
          Engine faults are rarely isolated. A crankshaft bearing
          starting to wear produces metal particles in the oil. Those
          particles, carried by the oil pump, wear every other
          bearing, the camshaft journals, the turbo if present.
          Within three months, a GBP 450 repair becomes a complete
          engine overhaul at GBP 4500. Preventive scanning cuts this
          cascade at the root by detecting the initial bearing before
          it contaminates the rest.
        </p>

        <h2>The faults with the best early-catch payoff</h2>
        <p>
          From our customer analytics, here is the ROI ranking. First:
          the timing belt. Early detection GBP 400, late failure up
          to GBP 7000 on interference engines. Ratio 1 to 17. Second:
          rod bearings. Early GBP 700, late GBP 4000. Ratio 1 to 6.
          Third: the turbo. Early GBP 600, late GBP 2000 plus
          collateral intake damage. Ratio 1 to 4. Fourth: injectors.
          Early GBP 180, late up to GBP 1800. Ratio 1 to 10.
        </p>

        <h2>Setting up monthly monitoring</h2>
        <p>
          Easiest approach: scan the first Saturday of every month,
          always in the same conditions. Warm engine after a 10-minute
          drive, windows closed, HVAC off, phone placed at the same
          spot on the bonnet. The app records and compares to previous
          scans. If a fault class creeps up, you are alerted. This
          repeatability is critical: the more stable your conditions,
          the better the AI detects micro-evolutions.
        </p>

        <h2>When the scan flags something</h2>
        <p>
          When a prediction exceeds 60%, act. Run a second scan 48
          hours later to confirm. If confidence holds, visit a garage
          or tackle simple fixes yourself. Between 30 and 60%,
          monitor: weekly scans for a month to see whether it
          worsens. Below 30%, the system stays cautious but you know
          it is not random: something mild has appeared, make a note.
          Our thresholds come from real data: above 80% is reliable,
          60-79% to monitor, 30-59% indicative, below 30%
          inconclusive.
        </p>

        <h2>The power of history</h2>
        <p>
          A single scan is not worth much. Twelve monthly scans are
          gold. The trend curve does the talking: stable means
          healthy, even if absolute values are not zero. Rising means
          drift. Evolution is more reliable than any single
          measurement, and that is why preventive scanning only pays
          off if you actually keep doing it.
        </p>

        <h2>Where the scan falls short</h2>
        <p>
          Let us be honest: sound scan does not detect everything.
          Electronic faults (failing ECU, dead sensors) leave no
          audio signature. Hydraulic faults (brakes, power steering)
          neither. For those, OBD2 and visual checks remain
          essential. Sound scan covers mechanical and acoustic
          faults, roughly 40% of total workshop visits but the
          majority of the expensive ones. To dig deeper, read{" "}
          <Link href="/en/blog/worn-engine-bearing-ai-hears-what-you-cant">
            how to detect a tired bearing by sound
          </Link>{" "}
          or{" "}
          <Link href="/en/blog/worn-timing-belt-detect-by-sound-before-it-snaps">
            spot a worn timing belt
          </Link>
          . If you see a{" "}
          <Link href="/en/codes/p0128">P0128</Link>{" "}
          code, note that sound scan also catches cooling drifts via
          the fan signature.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

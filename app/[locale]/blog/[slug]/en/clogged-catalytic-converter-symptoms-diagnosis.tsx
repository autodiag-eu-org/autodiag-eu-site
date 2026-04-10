import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleCloggedCatalyticConverter() {
  const faq: FaqItem[] = [
    {
      q: "How do I tell a clogged cat from a dead cat?",
      a: "A dead cat loses efficiency but lets exhaust gas through: you get a P0420 code, raised emissions, but no real back pressure. A clogged cat physically blocks the exhaust: you get heavy power loss, difficult starts when warm, fuel-smelling exhaust, sometimes no codes at all because the ECU still sees acceptable lambda values. A back-pressure gauge before the cat settles it in one minute.",
    },
    {
      q: "What exhaust back pressure is considered abnormal?",
      a: "Below 0.3 bar at idle and below 0.8 bar at 2500 RPM for a healthy exhaust. Above 0.5 bar at idle or above 1.2 bar at 2500 RPM, the cat is restricted. Above 2 bar, the engine struggles to breathe at all and the risk of thermal damage on valves and turbo becomes significant. Measure is taken by unscrewing the upstream lambda and fitting a gauge.",
    },
    {
      q: "Can I unclog a cat without replacing it?",
      a: "Sometimes. For light internal fouling, a long motorway run at high load (3000 to 4000 RPM) can burn off deposits. Dedicated cleaning additives exist (Cataclean, JLM) and show modest results on mildly fouled cats. Beyond that, when the honeycomb has physically melted or collapsed, no cleaning works and replacement is the only option.",
    },
    {
      q: "How much does a catalytic converter replacement cost?",
      a: "Between 500 and 1800 GBP fitted for a universal aftermarket cat. Between 900 and 3500 GBP for a manufacturer original. Cars over 10 years old usually accept a quality universal without issue. On recent Euro 6 cars, the original is often mandatory for MOT compliance because of specific emissions thresholds.",
    },
    {
      q: "What causes premature cat clogging?",
      a: "In order of frequency: chronic rich mixture from tired lambda or leaking injectors, high oil consumption poisoning the precious metals, misfires sending unburnt fuel into the cat, coolant leaks from a failing head gasket. The cat is almost always a victim, rarely the first culprit. Fixing the root cause before replacing is essential to avoid destroying the new cat within weeks.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Clogged catalytic converter: symptoms, diagnosis and solutions"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          A clogged catalytic converter is one of those faults that
          creeps up slowly and then suddenly cripples the car overnight.
          Unlike a dead cat which mainly triggers codes, a physically
          clogged cat restricts the exhaust flow and literally
          suffocates the engine. This guide explains the symptoms, the
          diagnostic method, and the real options before reaching for
          an 1800 GBP quote.
        </p>

        <h2>Symptoms of a clogged cat</h2>
        <p>
          The telltale symptom is progressive power loss, especially
          at high RPM. The car pulls normally up to 2500 RPM, then
          feels like it hits a wall. Other signals: a warm engine that
          stalls or refuses to restart (back pressure keeps the
          cylinders from purging), a dull exhaust note, fuel smell at
          the rear, sometimes a faint smell of rotten eggs from
          sulphur trapped in the substrate. The check engine light is
          not always on, which is a trap.
        </p>

        <h2>Back-pressure measurement: the reference test</h2>
        <p>
          The only truly reliable test. Remove the upstream lambda
          sensor, screw in an exhaust back-pressure gauge, and read
          the value at idle and at 2500 RPM stabilised. A healthy
          exhaust sits below 0.3 bar at idle. Above 0.5 bar the cat
          is restricted. Above 1 bar at idle, it is critically
          clogged and the engine is fighting every combustion cycle.
          The test costs nothing if you own the gauge (30 to 70 GBP).
        </p>

        <h2>OBD2 scan: what it tells and what it hides</h2>
        <p>
          A clogged cat doesn&apos;t always throw a code. The ECU sees
          lambda values that look acceptable because the downstream
          sensor is still averaging. But fuel trims can reveal the
          issue: a persistent negative LTFT (below -8%) can indicate
          the ECU is enleaning to compensate for reduced flow. A
          MAF reading lower than expected at full load is another
          clue. See{" "}
          <Link href="/en/codes/p0420">the P0420 code</Link> which
          often accompanies — but does not prove — a clogged cat.
        </p>

        <h2>Why a cat clogs in the first place</h2>
        <p>
          Honeycombs don&apos;t clog by themselves. The number one
          cause is a chronic rich mixture: a tired upstream lambda
          sends wrong feedback, the ECU over-fuels, unburnt petrol
          enters the cat, overheats it, and melts the ceramic. Second
          cause: oil consumption above half a litre per 600 miles,
          with oil poisoning the precious metals. Third cause:
          persistent misfires dumping unburnt fuel. See also{" "}
          <Link href="/en/codes/p0300">the P0300 misfire code</Link>.
        </p>

        <h2>Cleaning attempts: what actually works</h2>
        <p>
          A motorway drive at sustained 3000 RPM for 30 minutes can
          burn off surface deposits on a mildly fouled cat. Dedicated
          additives (Cataclean, JLM, Wynns) poured into a nearly
          empty tank, followed by a long drive, can help in early
          stages. Beyond visible physical damage (melted honeycomb,
          broken substrate rattling inside), no cleaning works. Don&apos;t
          waste 30 GBP on additives if your back pressure is already
          above 1.5 bar.
        </p>

        <h2>Replacement: original vs universal</h2>
        <p>
          On cars over 10 years old, a universal aftermarket cat
          (Magnaflow, Walker, Bosal) does the job well for 500 to
          900 GBP fitted. On Euro 6 cars, the MOT emission thresholds
          are tight enough that only an original cat reliably passes.
          Budget 900 to 2200 GBP for a decent part, up to 3500 GBP
          for German premium. Always ask your fitter to code the
          replacement if the model requires it.
        </p>

        <h2>Fix the root cause first</h2>
        <p>
          Replacing a cat without fixing the upstream cause is
          burning money. A new 1500 GBP cat destroyed within three
          months by a chronic rich mixture is a real-world scenario
          we see regularly. Before ordering, do a full OBD2 check:
          lambda values, fuel trims, injector leak test on diesels,
          oil consumption log over 600 miles. See{" "}
          <Link href="/en/blog/excessive-fuel-consumption-causes-obd2">
            excessive fuel consumption causes
          </Link>
          .
        </p>

        <h2>MOT and clogged cats</h2>
        <p>
          A clogged cat fails an MOT on emissions if the car still
          runs well enough to reach the test station. But often the
          car fails earlier from the power loss alone. A borderline
          cat (dead but not clogged) can still pass emissions thanks
          to clever engine mapping, which is why some cars scrape
          through year after year until sudden clogging changes
          everything. See{" "}
          <Link href="/en/blog/diesel-mot-preparation-2026-complete-guide">
            the 2026 diesel MOT preparation guide
          </Link>
          .
        </p>

        <h2>Prevention: small habits that save cats</h2>
        <p>
          Do your oil changes on time. Replace upstream lambda
          sensors preventively around 90000 miles. Never ignore a
          check engine light for more than a few weeks. Avoid pure
          short trips if possible — give the engine a proper 30
          minute run weekly. These four habits alone prevent the
          vast majority of premature cat failures and save the
          second most expensive part of the exhaust line.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

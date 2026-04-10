import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePreventiveDiagnosticsSavings() {
  const faq: FaqItem[] = [
    {
      q: "How much can you really save with preventive diagnostics?",
      a: "For a normal use case with a car over five years old, we easily see 700 to 2200 GBP in savings per year. It comes from faults caught before they destroy other parts (bearings, timing, lambdas) and from parts replaced on time rather than in emergency. Savings come from an accumulation of small decisions taken at the right moment, not from one big component.",
    },
    {
      q: "Is a monthly sound scan actually useful?",
      a: "Yes. Most mechanical wear evolves over weeks or months. A monthly scan lets you see the curve rather than a snapshot. A confidence rising from 15% to 60% on the bearing noise class over three months is a clear signal impossible to detect from a single scan.",
    },
    {
      q: "Which faults are the most valuable to prevent?",
      a: "In order: engine damage from a neglected timing chain (savings up to 4500 GBP), catalyst destroyed by a tired lambda (1400 to 2200 GBP), turbo failed from oil starvation (1400 to 2800 GBP), gearbox ruined by a slipping clutch (1800 to 4000 GBP), and tyres destroyed by bad geometry or failing shocks (250 to 700 GBP).",
    },
    {
      q: "How do I prioritise when several alerts pop up at once?",
      a: "Use the health score: first address what weighs most in the calculation. A critical OBD2 code comes before a sound anomaly at 55% confidence. An active visual leak comes before light surface corrosion. The score shows the hierarchy at a glance.",
    },
    {
      q: "Do I have to repair everything immediately?",
      a: "No. Some anomalies can be monitored before being treated, provided you actually monitor them. The app tracks evolution and alerts you when a threshold is crossed. Immediate repair is only needed for critical faults or anything that directly affects safety.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Preventive diagnostics: how to save thousands of pounds per year"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Savings"
      >
        <p>
          Nobody enjoys paying for an unexpected repair. A 1600 GBP
          quote on a Friday afternoon is exactly the moment you wonder
          why you didn't see it coming. Most of the time, these big
          bills are not fate. They are small faults left untreated
          until they destroyed something else. Preventive diagnostics
          has only one goal: break that cascade.
        </p>

        <h2>The golden rule: detect before failure</h2>
        <p>
          A wheel bearing starting to rumble costs 120 GBP to replace.
          Left too long, it kills its hub (350 GBP), overheats the disc
          (100 GBP), wears a tyre unevenly (160 GBP) and can even
          stress the hub carrier (220 GBP). Same fault, caught early,
          costs 120 GBP. Caught late, it costs 800 GBP. The sound scan
          picks up the bearing noise signature at the 5% abnormal wear
          mark, long before you hear it. See{" "}
          <Link href="/en/blog/worn-engine-bearing-ai-hears-what-you-cant">
            the article on tired engine bearings
          </Link>
          .
        </p>

        <h2>Case 1: the tired lambda sensor</h2>
        <p>
          An upstream lambda sensor typically lasts around 150000 km.
          When it starts to tire, it sends biased values to the ECU
          which compensates by enriching the mixture. Fuel consumption
          rises, the catalyst gets hammered, and eventually a{" "}
          <Link href="/en/codes/p0420">P0420 code</Link> appears once
          the catalyst is attacked. Fix the lambda on time: 70 to 130
          GBP. Fix the lambda and the catalyst: 1100 to 1800 GBP.
          Preventive detection: the OBD2 scan catches lambda drift well
          before the code threshold is crossed.
        </p>

        <h2>Case 2: the timing belt</h2>
        <p>
          The ultimate disaster scenario. On an interference engine
          (most modern engines), a timing belt rupture slams the valves
          into the pistons. Result: full rebuild or engine replacement,
          3000 to 5500 GBP. A timing job done on schedule (typically
          between 60000 and 100000 miles depending on model) costs
          between 450 and 1100 GBP. The sound scan identifies
          slackening or abnormal tension signatures before failure.
          See{" "}
          <Link href="/en/blog/worn-timing-belt-detect-by-sound-before-it-snaps">
            detect a worn timing belt by sound
          </Link>
          .
        </p>

        <h2>Case 3: the turbo and its oil puddles</h2>
        <p>
          A turbo starting to leak oil from the shaft bearing
          eventually runs short on lubrication and seizes. Spotting an
          oil trace on the intake hose visually, combined with an
          abnormal whistle, allows you to act for 350 to 700 GBP
          (reseal or cartridge exchange). A turbo that actually gave
          up: 1400 to 2800 GBP, plus the damage of oil being ingested
          by the engine if it goes too far.
        </p>

        <h2>Case 4: shock absorbers and their collateral damage</h2>
        <p>
          A shock absorber leaking progressively stops damping. The
          tyre bounces instead of following the road, wear becomes
          uneven, discs heat more, the running gear ages faster.
          Replace a pair of shocks: 250 to 450 GBP. Don't replace
          them: a pair of tyres at 350 GBP per year plus accelerated
          wear across the whole axle. The Drive Test accelerometer
          analysis measures the damping ratio zeta while rolling over
          a speed bump, no disassembly needed.
        </p>

        <h2>Case 5: clogged diesel injectors</h2>
        <p>
          An injector lightly leaking sends more fuel than planned
          into its cylinder. Symptom: abnormal consumption, black
          smoke, occasional misfire code. Left too long, it ends up
          damaging the piston or the DPF. Clean or replace an
          injector on time: 130 to 350 GBP. Fix the downstream
          damage: 1300 GBP and up. The fusion of sound scan (injector
          noise class) and OBD2 (abnormal fuel trims) gives reliable
          early detection.
        </p>

        <h2>Yearly ledger of a careful owner</h2>
        <p>
          Concrete example on a 9-year-old car, 80000 miles. Over the
          year the app detected: lambda drift (fixed for 90 GBP, 900
          GBP saved on the catalyst), an early bearing (150 GBP, 500
          GBP saved on disc and tyre), the start of a turbo leak (350
          GBP reseal, 1600 GBP saved on full replacement), and brake
          pad wear spotted early (60 GBP, 220 GBP saved on a scored
          disc). Total spent: 650 GBP. Total saved: 3220 GBP. Net
          margin: roughly 2570 GBP over the year.
        </p>

        <h2>The paradox of prevention</h2>
        <p>
          The trouble with prevention is that you never see the
          disasters it avoided. You only see the price of the small
          repairs you did. That is why many owners neglect preventive
          diagnostics: they never compare the real cost of what they
          fixed against the cost it would have reached without action.
          The health score, archived inside the app, makes that
          comparison visible and concrete. See{" "}
          <Link href="/en/blog/vehicle-health-score-how-we-calculate-rating">
            how the health score is calculated
          </Link>
          .
        </p>

        <h2>The real luxury is peace of mind</h2>
        <p>
          Beyond the numbers, preventive diagnostics brings something
          hard to monetise: you know exactly where your car stands. No
          more doubt, no more anxiety, no more surprise quotes. You
          set off for a weekend knowing everything is fine. You sell
          your car with a clear history and a recent score. That too
          has value.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

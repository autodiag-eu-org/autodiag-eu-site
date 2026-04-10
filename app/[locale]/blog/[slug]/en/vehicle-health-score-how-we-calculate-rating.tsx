import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleVehicleHealthScore() {
  const faq: FaqItem[] = [
    {
      q: "How is the score calculated?",
      a: "We start at 100 points. Every detected anomaly removes points based on severity, source and associated confidence. A critical OBD2 code removes 15 to 25 points. An abnormal sound signature above 80% confidence removes 8 to 15 points. A visual element like a major leak removes 10 to 20 points. The final score is clamped to 100 and never negative.",
    },
    {
      q: "Which rating maps to which health?",
      a: "90 to 100: excellent state, no action needed. 75 to 89: good state, a few points to watch. 60 to 74: fair state but several elements need attention. 40 to 59: worrying state, repairs should be planned quickly. 0 to 39: degraded state, urgent intervention recommended. Thresholds are calibrated to avoid unjustified alarm on a normally running car.",
    },
    {
      q: "Why does SVM confidence influence the score?",
      a: "Because a detection at 55% confidence should not be treated like a detection at 92%. Penalty weight is proportional to confidence. At 55%, we apply 40% of the base penalty. At 92%, we apply 100%. This prevents false positives from unfairly dragging the score down.",
    },
    {
      q: "Does the score evolve over time?",
      a: "Yes, every scan is archived. You see the health curve of your car over recent weeks or months. A downward trend is more meaningful than a single value. If your score slides from 92 to 78 in three months, that is a clear signal something is degrading gradually.",
    },
    {
      q: "Does the score replace an MOT?",
      a: "No, it complements it. The MOT remains the legal reference and we are not trying to replace it. The health score is an educational indicator that helps you prepare your car before the MOT and avoid nasty surprises on the day.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Vehicle health score: how we calculate your rating out of 100"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={9}
        category="Technology"
      >
        <p>
          A single number that summarises the health of your car is an
          old dream. Attempts have existed for years, often oversimplified
          (DTC count times a coefficient) or at the opposite so complex
          they become opaque. The AutoDiag EU score was designed to be
          robust, understandable and verifiable. Here is how it works.
        </p>

        <h2>Baseline: 100 points at the start</h2>
        <p>
          A perfectly healthy car starts at 100. It cannot gain points,
          it can only lose them. Each scan calculates the total of
          penalties from the three sources (OBD2, sound, vision) and
          subtracts it from 100. This reverse-addition approach is
          intuitive: the higher the score, the better.
        </p>

        <h2>Source 1: OBD2</h2>
        <p>
          A fault code removes 5 to 25 points depending on severity. A
          pending code not yet confirmed removes half as much as a
          confirmed code. A historical DTC (cleared but logged) removes
          even less. Codes are sorted into four levels:
        </p>
        <p>
          Critical (20 to 25 points removed): multiple misfires, engine
          temperature out of range, low oil pressure. High (12 to 18
          points): tired lambda, prolonged rich or lean mixture, stuck
          EGR. Medium (6 to 12 points): catalyst at limit, ABS sensor,
          airbag system. Low (2 to 5 points): informational faults,
          secondary warnings. For a concrete example see{" "}
          <Link href="/en/codes/p0420">the P0420 code</Link>, rated
          medium.
        </p>

        <h2>Source 2: sound scan</h2>
        <p>
          Every anomaly detected by the SVM has a base weight and a
          confidence. The applied penalty equals base weight multiplied
          by SVM confidence, with a minimum confidence threshold of 30%
          below which nothing is applied. Engine knock at 85% confidence
          with a base weight of 18 removes 15 points. A tick at 62%
          with a base weight of 10 removes 6 points.
        </p>
        <p>
          The 11 SVM classes have weights calibrated by engine-severity:
          knock and bearing noise carry the heaviest weights (deep
          mechanical wear), belt noise and tick carry medium weights
          (often peripheral wear), air leak and exhaust leak carry
          medium to low weights (impact on economy and emissions but
          not engine life).
        </p>

        <h2>Source 3: Vision AI</h2>
        <p>
          Each visual finding is ranked in three levels. Minor (3 to 5
          points lost): dry oil trace, light surface corrosion, tyre
          with acceptable depth but visible wear. Medium (8 to 12
          points): active leak, active corrosion, pad under 4 mm, tyre
          close to legal limit. Severe (15 to 20 points): major leak,
          perforating rust, pad at end of life, tyre on the wear bar.
          These weights draw from European MOT criteria, not from
          imagination.
        </p>

        <h2>Fusion and clamping</h2>
        <p>
          The raw sum of penalties is clamped to 100 to avoid negative
          scores that would mean nothing. There is also an
          anti-double-counting rule: if an OBD2 code and a sound scan
          point at the same fault (for example{" "}
          <Link href="/en/codes/p0300">P0300</Link> plus a sound misfire),
          only the highest penalty counts, not both. This rule prevents
          over-penalising a car that has one real fault picked up by
          two sources.
        </p>

        <h2>Reading the bands honestly</h2>
        <p>
          A score of 88 on a 10-year-old car is excellent. The same 88
          on a brand-new car is fair but imperfect. The number must be
          read in context. The app also shows the delta against the
          average score of similar age and engine, which gives an
          honest reference. A 2016 Ford Fiesta at 82 points sits in the
          average and should not worry you. The same car at 55 points
          asks for immediate attention.
        </p>

        <h2>Trend matters more than the value</h2>
        <p>
          What interests us most is not today's score, it is the
          derivative over time. If your car loses 15 points in two
          months, something is happening. If it stays stable at 78 for
          a year, it is a balance. Each scan is timestamped and you
          see the curve. Same principle as blood pressure or glucose
          monitoring in medicine: a single measurement says little, a
          series says everything. For the sound method behind see{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            11 engine faults detectable by sound analysis
          </Link>{" "}
          and{" "}
          <Link href="/en/blog/ai-visual-checkup-5-points-healthy-vehicle">
            the 5-point AI visual checkup
          </Link>
          .
        </p>

        <h2>Not a garage verdict</h2>
        <p>
          This score is not an MOT outcome nor a mechanic's opinion.
          It is an educational indicator that helps you understand
          your car and make informed decisions. When the score drops,
          you know where to look. When it rises after repair, you have
          evidence the intervention actually helped. It is a tool, not
          an oracle.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

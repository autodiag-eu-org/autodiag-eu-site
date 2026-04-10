import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleTyreWearAI() {
  const faq: FaqItem[] = [
    {
      q: "How can I tell if my tyres are wearing abnormally?",
      a: "Look at the tread profile. If the centre is more worn than the shoulders, it is overinflation. Shoulders more worn than the centre means chronic underinflation. Inside edge smooth and outside edge intact points to alignment or camber. Vision AI recognises the five common patterns from a single photo.",
    },
    {
      q: "Is one-sided tyre wear always a mechanical problem?",
      a: "Almost always. Uneven wear means the contact angle is not square: excessive negative camber, tired wishbone bushes, a ball joint with play, or a sagged spring. A four-wheel alignment fixes the symptom, but the root cause must be handled first or the new alignment will not hold.",
    },
    {
      q: "What is cupping and how do I recognise it?",
      a: "Cupping, or scalloping, produces a wave pattern across the tread. You also feel it when driving: a steady drone that rises with speed. It is the signature of a worn shock absorber letting the wheel rebound on every bump.",
    },
    {
      q: "How often should I check tyre wear?",
      a: "One photo per tyre every two months is plenty to track the trend. Ten seconds per wheel, forty seconds total. The AI compares successive shots and flags you the moment the profile shifts shape.",
    },
    {
      q: "Do I need to change a tyre at 1.8 mm immediately?",
      a: "The legal limit in the UK and across the EU is 1.6 mm, but wet braking drops off sharply below 3 mm. At 1.8 mm you are in the red zone: order replacements within a week. Vision AI measures residual depth from the photo to plus or minus 0.3 mm.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Premature tyre wear: AI sees what you do not notice"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Visual Diagnostic"
      >
        <p>
          A tyre is not just a black rubber casing. It is a logbook that
          reads, photograph after photograph, exactly what your car is
          going through. Each wear pattern is the signature of a precise
          mechanical issue, and most of the time the owner sees nothing
          until the MOT tester points it out. The Vision AI inside
          AutoDiag EU reads that logbook for you. You take a photo of the
          tread, it identifies the pattern, it tells you where the pattern
          comes from.
        </p>

        <h2>Five patterns, five causes</h2>
        <p>
          In ninety percent of abnormal wear cases, the problem belongs to
          one of five families. Centre wear: the tyre is over-inflated,
          contact concentrates in the middle and spares the shoulders.
          Shoulder wear: chronic under-inflation, the sidewalls squash and
          distort the contact patch. Marked inner edge wear: excessive
          negative camber or toe-in too aggressive, often after kerbing
          the car. Outer edge wear: toe-out or a tired track-rod end. And
          finally cupping — scalloping in wavelets — which signs a dead
          shock absorber letting the wheel bounce on every road
          imperfection.
        </p>

        <h2>What the photo captures that your eye misses</h2>
        <p>
          Take a photo perpendicular to the tread, with good light. The AI
          does three things you are not doing. First, it measures residual
          depth in each groove with a tolerance of 0.3 mm, whereas your
          eye vaguely estimates the wear indicator bars. Second, it
          compares the inside and outside depths. If you read 3.2 mm on
          the right side and 1.4 mm on the left, the gap is enormous and
          invisible at a glance. Third, it picks up early cupping long
          before you hear the hum inside the cabin.
        </p>

        <h2>The story of the badly aligned camber</h2>
        <p>
          A real case: a Vauxhall Astra that kerbed the front-right tyre
          four months ago. The driver did not think about a geometry
          check because the car tracked straight. Four months later, the
          right front is smooth on the inner edge and virtually new on
          the outer edge. The Vision AI photo shows a 2.4 mm gap between
          the two edges, estimates the camber at beyond two negative
          degrees and flags it immediately. Cost: 70 GBP for a four-wheel
          alignment and a new front tyre for about 110 GBP. Wait another
          six months and you are replacing both front tyres and probably
          a track-rod end. Anticipation always beats reaction.
        </p>

        <h2>The suspension link</h2>
        <p>
          Cupping deserves its own paragraph. It is the confession that
          the suspension no longer damps properly: the wheel bounces, the
          tyre rubs unevenly, the wavelet pattern emerges. If you see
          cupping, the problem is not the tyre, it is the shock. Fit a
          new tyre without touching the suspension and you are guaranteed
          the same pattern again in six months. Vision AI spots the link
          automatically and redirects you to the right repair. You can
          cross-check with a{" "}
          <Link href="/en/blog/suspension-noise-ai-identifies-failing-shock">
            suspension noise scan
          </Link>{" "}
          to confirm before the garage visit.
        </p>

        <h2>Timing that changes everything</h2>
        <p>
          Tyres come down to weeks of planning around the{" "}
          <Link href="/en/blog/how-to-prepare-car-for-mot">MOT</Link>. Go
          in with tyres at 1.8 mm and you are nearly guaranteed an advisory
          the moment there is more than a couple of tenths between left
          and right. With Vision AI you can anticipate two months out,
          order the tyre set when prices are best, and arrive at the MOT
          test bay in peace. For a mid-range set in 205/55 R16, expect 320
          to 460 GBP depending on brand. Rushing the day before the test
          will cost you 15 to 25 percent more.
        </p>

        <h2>What the AI cannot see</h2>
        <p>
          A photo does not detect internal sidewall bulges, cord damage
          from kerb impacts, or the fine flank cracking that comes with
          UV and age. A once-a-year tactile inspection remains mandatory,
          ideally when you swap between summer and winter tyres. Vision
          AI is superb at tread analysis — the surface that meets the
          road — but it cannot see the inside of the casing. Think of it
          as continuous high-frequency surveillance, and the yearly tyre
          shop visit as the deep check.
        </p>

        <h2>The recommended routine</h2>
        <p>
          Every two months, take four photos: one per tyre, perpendicular
          to the tread, at the same spot each time (keyed off the valve
          stem for example). History is plotted as a graph in the app and
          you see the residual depth curve tick downwards. When one wheel
          starts to lag the others, the alert fires. You act before the
          problem spreads. Same philosophy as watching the{" "}
          <Link href="/en/codes/p0300">P0300 misfire code</Link> — catch
          it early, pay little.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

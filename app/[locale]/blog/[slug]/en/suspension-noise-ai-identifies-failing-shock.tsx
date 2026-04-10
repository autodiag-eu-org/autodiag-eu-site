import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleSuspensionNoise() {
  const faq: FaqItem[] = [
    {
      q: "How do I tell a shock absorber from a bush?",
      a: "A shock produces a dull, low-frequency noise with a residual rebound after the bump. A bush produces a sharp, short knock with no rebound. Cabin Sound Scan separates the two by analysing the temporal envelope across 138 features.",
    },
    {
      q: "Is the manual bounce test reliable?",
      a: "Only partly. It catches shocks that are completely dead but misses 50 to 70% wear, which is already the main cause of lost grip on wet roads. Rolling sound analysis is far more sensitive.",
    },
    {
      q: "Can worn shocks cause tyre wear?",
      a: "Yes, and it is the first step in the cascade. A tired shock lets the wheel bounce, the tyre develops cupping, and grip collapses. The same worn tyre eventually knocks alignment out of spec and destroys the steering rack.",
    },
    {
      q: "Should shocks be replaced in pairs?",
      a: "Always per axle. Replacing only one side creates a damping imbalance that tips the car under braking. The real budget therefore moves from 160 pounds per unit to 350-450 pounds per axle fitted.",
    },
    {
      q: "How long does a modern shock absorber last?",
      a: "Between 50 000 and 95 000 miles depending on road surface and vehicle weight. A loaded family estate eats rear shocks much faster than a solo commuter. A yearly scan is enough to catch early fatigue.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Suspension noise: how AI identifies a failing shock absorber"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          The shock absorber is one of the sneakiest components on your
          car. It wears so gradually that you feel nothing. One day you
          are driving a car that grips like a rail, a year later you
          are driving one that bounces like a mattress — and you would
          swear nothing had changed. Cabin Sound Scan, by contrast,
          sees the tip-over from the first scan compared against the
          previous one.
        </p>

        <h2>Why your ear is not enough</h2>
        <p>
          A healthy shock flattens a bump in a single stroke. A shock
          at 60% wear lets through a residual rebound of a few
          millimetres — imperceptible to the ear but measurable as
          lost grip on a wet surface. Spectral analysis of the cabin
          audio captures that residual rebound as a characteristic
          signature around 8-15 Hz coupled with a transient at 200-400
          Hz (the bump stop bouncing in its housing).
        </p>

        <h2>The three families of suspension noise</h2>
        <p>
          First family: the sharp knock over bumps. Tired bush, worn
          anti-roll drop link, or a warped top mount. Signature: short
          impulse, wide band, no tail.
        </p>
        <p>
          Second family: the rebound thud. Shock losing oil, or a worn
          internal valve. Signature: impulse followed by a low-frequency
          resonance lasting 150 to 300 milliseconds. This is exactly
          what the SVM detects best.
        </p>
        <p>
          Third family: the cornering creak. Top-mount bearing that has
          seized, or a spring rubbing its upper coil against the seat.
          Signature: continuous noise modulated by steering angle.
        </p>

        <h2>The rolling scan protocol</h2>
        <p>
          For a reliable diagnosis, find a road with a few expansion
          joints or speed bumps, drive between 20 and 40 mph, and
          record thirty seconds. The AI analyses each audio window
          independently, which lets it correlate noises with impact
          timing. A knock that arrives systematically after a jolt is
          suspicious.
        </p>

        <h2>The tyre-alignment-rack cascade</h2>
        <p>
          Here is the sequence I see most often in the workshop. A
          shock tired for eighteen months. The driver does not notice.
          Tyres start showing uneven cupping. A year later one front
          tyre needs replacing 12 000 miles before schedule — first
          overrun: 160 pounds. The geometry is now out of spec because
          of the dynamic camber change caused by the bounce. The
          steering rack develops play within six months: 700 pounds
          more. Grand total: 1 260 pounds instead of the original
          350-pound shock replacement. Cabin Sound Scan cuts the
          cascade at the root by flagging the early wear.
        </p>

        <h2>SVM 7 classes and 75.05%: what it really means</h2>
        <p>
          Our cabin model separates seven categories: brake, suspension,
          bearing, steering, HVAC, tyre, and reference silence. On an
          independent test set it hits 75.05% accuracy. That is less
          than the 91.3% of the engine scan, and it is not by chance:
          cabin noises are more varied, shorter, and more mixed with
          outside traffic. But 75% is still well above the human ear in
          real conditions, especially when the driver has adapted to
          the sounds of their own car.
        </p>

        <h2>When the scan really saves the day</h2>
        <p>
          The most common case: a driver scans two weeks before the
          MOT and discovers a &quot;suspension&quot; score at 62%. He
          has it checked, the front left shock is leaking. Repair: 350
          pounds, MOT passes clean. Had he shown up on the day, it
          would have been an instant fail (major defect in the UK
          since 2018), plus a retest fee, plus the risk that the tyre
          also needed replacing.
        </p>

        <h2>Keep reading</h2>
        <p>
          Continue with the article on{" "}
          <Link href="/en/blog/invisible-wear-tired-component-damages-another">
            invisible wear and the cascade effect
          </Link>{" "}
          and on the{" "}
          <Link href="/en/blog/wheel-bearing-noise-detect-wear-before-mot">
            wheel bearing before the MOT
          </Link>
          . For OBD2 codes that may appear alongside a dead
          suspension, see our{" "}
          <Link href="/en/codes/p0325">P0325</Link>{" "}
          page: a knock sensor can be thrown off by excessive
          suspension vibration.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

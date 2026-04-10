import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleWheelBearingNoise() {
  const faq: FaqItem[] = [
    {
      q: "How do I identify which side is failing?",
      a: "Gently turn the wheel slightly right on an open road: if the noise drops, the LEFT bearing is faulty (load moves to the healthy right side). If it rises, the RIGHT is the culprit. Cabin Sound Scan provides objectivity, but this manual test helps confirm.",
    },
    {
      q: "Is a wheel bearing an MOT fail item?",
      a: "Yes, in most of Europe. Excess bearing play or an abnormal noise audible on the rolling-road test leads to a retest. Same rule at the French CT, German TUV, Spanish ITV and Portuguese IPO.",
    },
    {
      q: "How much does a replaced bearing cost?",
      a: "Between 160 and 400 pounds per wheel, depending on the car and the type (hub-integrated or standalone). Some German models also need ABS recoding, which adds 30 to 60 pounds of labour.",
    },
    {
      q: "Can I keep driving with a droning bearing?",
      a: "A few hundred miles with no immediate risk if the noise is mild. Beyond that the race heats up, the play increases, and eventually the wheel can take an abnormal angle. At that stage an accident becomes possible.",
    },
    {
      q: "Does the scan catch a bearing that is just starting?",
      a: "Yes, that is its strength. An early bearing produces a faint drone around 200-400 Hz that the human ear, sitting in a noisy cabin, does not notice. The SVM isolates it among the 138 features.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Wheel bearing noise: detect the wear before your MOT"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevention"
      >
        <p>
          The wheel bearing is one of the sneakiest parts on a car. It
          starts to fatigue around 55 000 miles, gives its first
          audible signal around 70 000 miles, and keeps going to 95 000
          miles before becoming genuinely dangerous. The problem is
          that during all that time, the driver adapts to the sound.
          A year later it has become the &quot;normal noise&quot; of
          the car. Cabin Sound Scan never forgets the reference sound.
        </p>

        <h2>The physics of a tired bearing</h2>
        <p>
          A healthy ball or roller bearing spins in near-total silence.
          What we call &quot;drone&quot; appears when the contact
          surfaces start to pit: the grease degrades, the inner races
          show micro-spalls, and each rotation generates an acoustic
          shock modulated by speed. The fundamental frequency sits
          between 100 and 300 Hz at 50 mph, with harmonics up to 2 kHz.
          That is the band where the SVM is most accurate.
        </p>

        <h2>The telltale signature</h2>
        <p>
          Three traits identify a bearing with near certainty: the
          noise increases with speed (proportionally), it modulates
          with lateral load (gentle cornering), and it goes away when
          you lightly unload the wheel under deceleration. If all
          three are present, bearing diagnosis is 90% certain. Cabin
          Sound Scan builds these dependencies into its 138 features:
          it does not only look at the instant spectrum, but also at
          how it evolves over the thirty seconds of recording.
        </p>

        <h2>The MOT stakes</h2>
        <p>
          The UK MOT suspension and running-gear checks have tightened
          over the last decade. A bearing play measured on the play
          detector is a major defect with a retest. Count a 50-pound
          retest fee on top of the repair. Same logic at the French
          CT, German TUV, Swiss MFK, Spanish ITV and Portuguese IPO.
          Detecting the bearing two weeks before the test lets you
          repair without pressure and pass first time.
        </p>

        <h2>The cascade of a neglected bearing</h2>
        <p>
          A bearing that fails is not just one part to change. It is
          heat rising in the hub, the integrated ABS sensor frying (add
          140 pounds), the brake disc heating asymmetrically and
          warping (add 130 pounds), and in the worst cases the hub
          upright itself overheating and developing play (add 400
          pounds). A bearing at 200 pounds detected early becomes an
          870-pound invoice if left for six months.
        </p>

        <h2>Bearing scan protocol</h2>
        <p>
          For reliable detection you must drive. A stationary scan
          captures almost nothing of the signature. The right protocol:
          thirty seconds on a flat road at a steady 45-55 mph, with two
          gentle lane changes to test side-load modulation. Avoid very
          rough roads that drown the signature in suspension noise.
          The SVM returns a &quot;bearing&quot; confidence between 0
          and 100%. Above 60%, you know which side to check first.
        </p>

        <h2>What adaptive hearing hides</h2>
        <p>
          I repeat this idea because it is central: your brain adapts
          to recurring sounds. A bearing that starts droning at 45 mph
          — you hear it on day one, you forget it in week two, you
          stop noticing it after a month. The AI compares objectively
          every scan against the previous ones. If the bearing
          confidence has gone from 20% to 55% in two months, you must
          react even if your ear says &quot;everything is fine&quot;.
        </p>

        <h2>Keep reading</h2>
        <p>
          Read on with{" "}
          <Link href="/en/blog/preventive-sound-check-avoid-cascade-repair-bill">
            the preventive scan before the MOT
          </Link>{" "}
          and{" "}
          <Link href="/en/blog/invisible-wear-tired-component-damages-another">
            how a tired part damages others around it
          </Link>
          . If a{" "}
          <Link href="/en/codes/p0011">P0011</Link>{" "}
          or an ABS code appears at the same time, it may well be a
          wheel-speed sensor thrown off by bearing play. OBD2 alone
          will not tell you which of the two is the root cause.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

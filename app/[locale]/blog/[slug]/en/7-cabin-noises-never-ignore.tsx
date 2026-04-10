import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function Article7CabinNoises() {
  const faq: FaqItem[] = [
    {
      q: "Which cabin noises are the most dangerous to ignore?",
      a: "Steering clunks on roundabouts, wheel-bearing drone that rises with speed, and sharp suspension knocks over potholes. These three affect roadholding directly and can turn into a loss of control if left for months.",
    },
    {
      q: "My ear has gotten used to the noise — is that a problem?",
      a: "Yes, and that is exactly why Cabin Sound Scan exists. The human brain auto-filters sounds it hears every day, a phenomenon called auditory adaptation. The AI never adapts: it compares your cabin against a 7-class SVM trained to 75.05% accuracy on 138 features.",
    },
    {
      q: "How often should I scan my cabin?",
      a: "One scan per month is enough to catch trends. If a noise confidence starts climbing month over month, that is the signal to act before your next garage visit.",
    },
    {
      q: "Is the scan run while driving or stationary?",
      a: "While driving, that is the whole point. Many cabin noises only appear under load: a bearing drone at 45 mph, a shock knock over motorway joints, an HVAC whistle at full fan speed. The app records several seconds of real driving.",
    },
    {
      q: "How is this different from the engine sound scan?",
      a: "The engine scan analyses the powertrain (11 classes, knock, turbo, timing belt). The cabin scan analyses what you hear from the driver seat: suspension, bearings, brakes, steering, HVAC. The two are complementary.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="7 cabin noises you should never ignore"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={9}
        category="Cabin Sound Scan"
      >
        <p>
          You know that moment when, two weeks into owning a car, you stop
          noticing the small click on left turns or the faint drone at 55
          mph. Your brain has filed them under &quot;normal noises my car
          makes&quot;. The trouble is, your car does not consider those
          sounds normal. It is warning you, and you have stopped
          listening. Here are the seven cabin noises you must never let
          slide, and what each one is really telling you.
        </p>

        <h2>1. The brake squeal</h2>
        <p>
          A high-pitched squeal when you press the pedal: this is the pad
          wear indicator rubbing the disc. When it appears, you typically
          have 300 to 1200 miles left before metal-on-metal. Ignore it
          and you destroy the disc (add 150 to 300 pounds to the bill)
          and sometimes the caliper. The Cabin Sound Scan recognises the
          spectral signature from the first trip, well before the
          dashboard warning lights up.
        </p>

        <h2>2. The sharp knock over bumps</h2>
        <p>
          A crisp &quot;tock&quot; when you cross a speed bump or drain
          cover: suspension. More precisely a tired bush, a dead
          anti-roll bar drop link, or a bump stop hitting metal. In our
          training set this type of noise falls into the suspension
          class with a clean signature in the low-frequency band.
        </p>

        <h2>3. The drone that rises with speed</h2>
        <p>
          If the noise grows from 30 to 55 mph and changes pitch when you
          lightly turn the wheel, you have a wheel bearing on its way
          out. It is an MOT failure item in the UK, and more seriously:
          a bearing that seizes on the motorway can lock the wheel. The
          Cabin Sound Scan picks up that side-load modulation that the
          human ear, sitting in a noisy cabin with the radio on, no
          longer processes.
        </p>

        <h2>4. The steering clunk</h2>
        <p>
          A repeating click as you lock the steering in a car park is
          usually a CV joint. A sharper clunk on acceleration is a track
          rod end ball joint. A dull thump in tight corners is the rack
          starting to develop play. Three different parts, three
          signatures, three repair bills from 70 to 800 pounds depending
          on severity.
        </p>

        <h2>5. The HVAC whistle</h2>
        <p>
          Not a roadholding risk but a revealing one. A constant fan
          whistle means a clogged cabin filter or a failing blower
          motor bearing. Subtler: a click as the AC compressor engages
          signals a worn magnetic clutch, the precursor to an 800-pound
          repair.
        </p>

        <h2>6. The asymmetric tyre roar</h2>
        <p>
          A cupped tyre produces a distinctive roar that changes as you
          switch lanes. That is usually a tired shock that lets the
          wheel bounce instead of pressing it into the road. It is the
          first link in the cascade: a dead shock kills the tyre, the
          worn tyre wrecks the geometry, the geometry destroys the
          steering rack. A 160-pound shock avoids a 1 200-pound total
          bill.
        </p>

        <h2>7. The tick at constant speed</h2>
        <p>
          A steady tick at 50 mph on flat road that vanishes under
          braking is usually a stone stuck in the tread or a loose brake
          shim. Benign. The same tick that continues under braking, on
          the other hand, is a caliper that is no longer clamping
          straight. Cabin Sound Scan tells them apart thanks to the 138
          features extracted from the audio.
        </p>

        <h2>Why AI catches what you stopped noticing</h2>
        <p>
          The human brain adapts its filtering to recurring sounds. It
          is a cognitive economy mechanism: if a sound has not changed
          your life in two weeks, it drops into the background. The AI
          never adapts. Each scan is compared coldly against a 7-class
          SVM, sampled at 16 kHz, trained on hundreds of labelled
          recordings. It tells you objectively whether the noise has
          grown from one month to the next.
        </p>

        <h2>Keep reading</h2>
        <p>
          This piece opens our cabin sound scan series. Read on with the{" "}
          <Link href="/en/blog/brake-squealing-normal-wear-or-danger">
            brake squeal deep-dive
          </Link>
          , the{" "}
          <Link href="/en/blog/suspension-noise-ai-identifies-failing-shock">
            AI diagnosis of a failing shock
          </Link>
          , and the{" "}
          <Link href="/en/blog/wheel-bearing-noise-detect-wear-before-mot">
            wheel bearing detection before MOT
          </Link>
          . For the engine counterpart see{" "}
          <Link href="/en/blog/your-engine-speaks-ai-fault-detection-by-sound">
            your engine speaks
          </Link>
          . And if a{" "}
          <Link href="/en/codes/p0325">P0325</Link>{" "}
          (knock sensor) code appears after a scan, the root cause may
          run deeper than the suspension.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

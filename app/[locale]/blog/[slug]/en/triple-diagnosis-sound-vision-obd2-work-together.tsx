import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleTripleDiagnosisTech() {
  const faq: FaqItem[] = [
    {
      q: "Why combine three technologies instead of just one?",
      a: "Because no single technology covers the full range of faults. OBD2 reads codes the ECU stores, sound scanning hears wear the ECU ignores, and Vision AI catches what can only be seen (leaks, rust, tyres). Layered together, the three sources cross-check each other and push diagnostic confidence above 90% in most real-world cases.",
    },
    {
      q: "What is a typical fault that a single technology would miss?",
      a: "An early crankshaft bearing wearing down: OBD2 sees nothing because no code is triggered, Vision AI can't reach inside the sump, but the sound scan picks up the acoustic signature at the 5% wear mark. Conversely, a brake fluid leak at the master cylinder is silent but instantly visible on camera.",
    },
    {
      q: "Do I absolutely need an OBD2 dongle?",
      a: "No. You can use sound scanning and Vision AI on their own. An ELM327 dongle simply adds a third layer that boosts confidence when a fault code is present. The app works fine without one, and for many mechanical-only issues the two camera-plus-mic layers already catch the problem.",
    },
    {
      q: "How does the app fuse the three sources?",
      a: "Layer 5 of the pipeline, called sensor fusion, applies expert rules. If a P0300 code arrives alongside a sound signature for misfire above 75% confidence, the verdict shifts from 'monitor' to 'confirmed'. If a green fluid leak is seen on camera while OBD2 reports a rising coolant temperature, the coolant alert takes priority.",
    },
    {
      q: "Does this triple approach work on all car brands?",
      a: "Yes for the sound and vision layers — they depend only on your phone. OBD2 compatibility depends on the protocol: more than 677 European vehicles are supported, with fallback layers for older KWP2000 and ISO 9141-2 protocols.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Triple diagnosis: how sound, vision and OBD2 work together"
        date="2026-04-14"
        author="Reda Kaouani"
        readingTime={10}
        category="Technology"
      >
        <p>
          There are three ways to make a car talk: ask it questions, listen
          to it, and look at it. AutoDiag EU is the only consumer tool that
          combines all three in a single app. Each approach has strengths,
          each has blind spots, and it is precisely the crossing of the
          three that produces a diagnosis worthy of a specialist garage —
          minus the specialist-garage invoice.
        </p>

        <h2>Layer 1: OBD2, the voice of the ECU</h2>
        <p>
          The engine ECU has spoken a standardised language since 2001 in
          Europe. Through a small BLE ELM327 dongle plugged under the
          steering wheel, any phone can read stored fault codes, live PID
          values (RPM, temperature, lambda, ignition advance) and trigger
          specific tests. It is fast, surgical, and a code like{" "}
          <Link href="/en/codes/p0420">P0420</Link> instantly tells you the
          catalytic converter is on its last legs.
        </p>
        <p>
          But OBD2 has a major blind spot: it only sees what the ECU knows
          how to see. A worn wheel bearing, a slipping accessory belt, a
          leaking shock, none of that triggers a code. The engine sensors
          are all clustered around combustion and emissions. Everything
          else is invisible.
        </p>

        <h2>Layer 2: the sound scan, an ear that never tires</h2>
        <p>
          Our SVM with RBF kernel, trained on 3963 recordings, recognises
          eleven fault classes from just a few seconds of audio. It
          distinguishes a rod knock from tappet noise, a healthy turbo
          whistle from the whistle that foreshadows bearing failure, an
          exhaust-side leak from an intake-side one. Your ear cannot do
          this. Human hearing saturates around 15 kHz; the AI works on 56
          spectral and temporal features up to 22 kHz.
        </p>
        <p>
          The sound scan fills the OBD2 blind spot: it hears mechanical
          wear before the ECU triggers any code. For the full method see{" "}
          <Link href="/en/blog/how-our-svm-works-technology-behind-sound-scanning">
            how our SVM sound technology actually works
          </Link>
          .
        </p>

        <h2>Layer 3: Vision AI, an eye that never looks away</h2>
        <p>
          A photo of the ground under the car can carry more information
          than a full scan. Fluid colour betrays the leak type, stain size
          indicates loss rate, position under the vehicle pinpoints the
          guilty component. Vision AI does all of this in two seconds,
          then moves on to tyres, brake pads seen through alloy spokes,
          early corrosion under the wheel arch. It sees what OBD2 will
          never see and what the sound scan cannot hear.
        </p>

        <h2>When the three layers converge</h2>
        <p>
          Real-world example. A Ford Focus 1.5 TDCi throws a P0299 — turbo
          underboost. On its own, this code has five possible causes,
          from a split intake hose to a tired high-pressure pump. The
          sound scan, launched right after, shows 82% confidence on
          abnormal turbo whistle. Vision AI, on a photo of the engine bay,
          spots an oil trace on the intake hose on the turbo side.
          Consolidated verdict: intake hose split downstream of the turbo.
          Total time: under five minutes. Traditional workshop diagnostic
          time for the same verdict: one to two hours, invoiced.
        </p>

        <h2>Triangulation, the key to confidence</h2>
        <p>
          A single-source diagnosis can always be wrong. A diagnosis that
          matches three independent sources is almost impossible to
          argue with. It is the same principle as critical systems in
          aviation — three sensors, majority wins. We apply the same logic
          to cars. When the SVM, the OBD2 reader and Vision AI all agree,
          you can walk into the garage with a report that narrows the
          margin of error to almost zero.
        </p>

        <h2>A philosophy, not a gimmick</h2>
        <p>
          This triple approach is not a marketing argument, it is a
          technical necessity. Too many apps simply read OBD2 codes and
          translate them — useful but incomplete. Too many others push
          shallow audio quizzes without real intelligence behind them. We
          built the three layers in parallel because it is the only
          honest way to claim you can diagnose a car with a phone. To dig
          deeper see{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            11 engine faults detectable by sound analysis
          </Link>{" "}
          and{" "}
          <Link href="/en/blog/ai-visual-checkup-5-points-healthy-vehicle">
            the 5-point AI visual checkup
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

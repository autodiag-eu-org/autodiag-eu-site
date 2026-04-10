import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleInaudibleSounds() {
  const faq: FaqItem[] = [
    {
      q: "Can my phone really capture ultrasounds?",
      a: "Partly. Most modern smartphones use MEMS microphones with a flat response up to 20-22 kHz and usable response up to about 24 kHz. Beyond that, response drops. For engine diagnosis that is more than enough, because virtually all fault signatures sit between 50 Hz and 16 kHz.",
    },
    {
      q: "Does a human ear really hear up to 20 kHz?",
      a: "In theory, in youth and in silence. In practice, the upper limit drops by roughly 1 kHz per decade after 20. By 50, many people cannot hear above 13 kHz. Worse, sensitivity fades well before the cut-off: 10 kHz is already 20 dB quieter than 1 kHz at the same physical level.",
    },
    {
      q: "Why talk about infrasound for an engine?",
      a: "Heavy rotating masses, the crankshaft, flywheel and clutch, produce very low-frequency vibrations, sometimes below 20 Hz. These infrasounds are impossible to hear but a microphone picks them up. A crankshaft imbalance can show as a 12-15 Hz peak, a zone that is completely silent to the human ear.",
    },
    {
      q: "Is an external calibrated mic more accurate than the phone?",
      a: "A measurement microphone is more faithful, yes, but a modern smartphone microphone is sufficient for diagnosis. What matters is repeatability across scans. The AI does not need absolute precision, it needs consistency to compare your measurements over time.",
    },
    {
      q: "Why do different faults sometimes sound the same to me?",
      a: "Because your ear smooths out differences. It does not decompose a sound into frequencies, it feels a global texture. Two spectrally distinct sounds can feel identical to you. The SVM classifier, on the other hand, works in a 56-dimensional space where every frequency carries its own weight.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Inaudible sounds: what AI catches that your ear misses"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Technology"
      >
        <p>
          Try an experiment. Start your car, let it idle, and listen
          carefully. You hear the engine of course, but what do you
          actually perceive? A steady hum, a faint exhaust puff, maybe
          a cooling fan kicking in. That is about it. Meanwhile, a
          microphone placed at the same spot records thousands of times
          more information per second than your brain consciously
          processes. That gap is exactly where AI-powered diagnosis
          lives.
        </p>

        <h2>The 20 Hz to 20 kHz myth</h2>
        <p>
          People like to quote that humans hear from 20 Hz to 20 kHz.
          Technically correct, but misleading. That range only applies
          to a young adult, in absolute silence, with pure loud tones.
          In real life, auditory sensitivity follows the Fletcher-Munson
          curve: highly sensitive around 2-4 kHz (the voice band), much
          less at the extremes (10 dB less at 100 Hz, 20 dB less at 10
          kHz). Add the noise of the cabin and your ear misses half the
          fault signatures before they even reach your consciousness.
        </p>

        <h2>What a smartphone mic captures</h2>
        <p>
          A modern MEMS microphone, the one inside your phone, has a
          flat response from around 50 Hz to 18 kHz, with a usable
          extension to 22 kHz. Beyond, the response falls off but still
          carries information a trained AI can exploit up to about 24
          kHz. At the low end the mic reaches 20 Hz and below, where
          the ear feels vibration rather than sound. For an AI this
          wider range means access to signatures that are flat-out
          invisible to a human listener.
        </p>

        <h2>Concrete examples of inaudibility</h2>
        <p>
          A worn turbo bearing produces a narrow spectral peak around
          14-16 kHz, very sharp and very brief. In a cabin with the
          fan, satnav and road noise, your ear will never isolate it.
          The SVM identifies it instantly. Another example: a piston
          taking up clearance produces a specific harmonic pattern
          around 3 kHz with periodicity tied to engine rpm. Inaudible
          at idle for a human, crystal clear across the 40 MFCC
          coefficients.
        </p>

        <h2>Infrasound: the hidden territory of big faults</h2>
        <p>
          Below 20 Hz you no longer perceive sound, you perceive
          vibration. A flywheel imbalance produces an oscillation
          around 12-15 Hz that makes the gear lever shake but that you
          do not identify as &quot;noise&quot;. The mic, however,
          records that low-frequency component and the classifier
          isolates it inside the spectral feature set. Same logic for
          transmission misalignment or tired engine mounts.
        </p>

        <h2>Why 56 features?</h2>
        <p>
          The pipeline extracts 56 numeric values from each recording:
          40 MFCC coefficients describing timbre on the perceptual Mel
          scale, 5 classical spectral features (centroid, bandwidth,
          rolloff, flux, spectral contrast) and a few temporal metrics
          like energy envelope and zero-crossing rate. These 56 numbers
          are the mathematical photograph of the sound, enough for an
          RBF SVM to hit 91.3% accuracy over 11 classes.
        </p>

        <h2>Why your brain fools you</h2>
        <p>
          The human brain does something the AI does not: it filters
          out what it judges unimportant. Handy day-to-day, a disaster
          for diagnosis. Your brain adapts to your engine noise within
          seconds, and after a month of slow degradation it has
          already rebranded the new sound as &quot;normal&quot;. The
          AI has 3963 training references in its head and never
          acclimatises.
        </p>

        <h2>The signature never lies</h2>
        <p>
          A sound may feel perfectly innocent to you while carrying a
          damning signature under the hood. That is the whole point of
          sound scan: giving you a tireless ear that never
          acclimatises and compares every recording to a statistical
          reference. For more depth, read{" "}
          <Link href="/en/blog/how-our-svm-works-technology-behind-sound-scanning">
            how the SVM processes data internally
          </Link>{" "}
          or the full list of{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            11 detectable faults
          </Link>
          . If you ever see a{" "}
          <Link href="/en/codes/p0325">P0325</Link>{" "}
          code, a sound scan often confirms a real knock before the
          sensor notices it.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

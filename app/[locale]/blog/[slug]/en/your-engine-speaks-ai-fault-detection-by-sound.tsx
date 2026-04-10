import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleYourEngineSpeaks() {
  const faq: FaqItem[] = [
    {
      q: "How can AI hear things my ears cannot?",
      a: "A modern smartphone microphone captures a wider frequency range than the human ear and does not suffer from cognitive adaptation. Our SVM model, trained on 3963 labelled recordings, analyses bands your brain filters out and spots patterns it has seen before in fault cases.",
    },
    {
      q: "What is the success rate of the AutoDiag EU sound scan?",
      a: "The SVM model achieves 91.3% accuracy on an independent test set, across 11 different fault classes. In real-world use, any prediction above 80% confidence is considered reliable. Between 60 and 80% we recommend a second scan, and below 60% the result is marked as indicative only.",
    },
    {
      q: "Do I need an OBD2 dongle to use sound scanning?",
      a: "No. Sound scan runs entirely from your phone microphone. However, if a dongle is connected, layer 5 of our pipeline fuses OBD2 data with the audio classification, which can boost confidence by several points when both sources agree.",
    },
    {
      q: "Which types of faults can the sound scan detect?",
      a: "Eleven classes: engine knock, tick, bearing noise, air leak, exhaust leak, turbo whistle, belt noise, injector noise, misfire, normal engine and timing-train noise. Each class covers several mechanical defects observed in the real world.",
    },
    {
      q: "Does the sound scan replace a normal OBD2 diagnosis?",
      a: "No, it complements it. OBD2 reads codes stored by the ECU, while sound scan detects mechanical issues that the ECU cannot see: bearing wear, belt tension, timing-train play, and general wear patterns. Together they cover around 95% of the most common faults.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Your engine speaks: how AI translates its sounds into a diagnosis"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Sound Scan"
      >
        <p>
          Your engine is a chatterbox. Every combustion event, every turn
          of the crankshaft, every pass of the timing belt produces sound.
          Some of these sounds are perfectly normal, like the steady idle
          hum or the gentle whistle of a turbo spooling up. Others are
          early warning signals your ears are simply not equipped to
          decode. A ticking peak at 3 kHz occurring twice per revolution,
          a resonance at 80 Hz at idle, a hiss at 12 kHz under
          acceleration: your brain hears all of that, but classifies it
          as &quot;normal engine noise&quot;. AI does not fall for that
          trick.
        </p>

        <h2>The engine as a musical instrument</h2>
        <p>
          A four-cylinder engine idling at 800 rpm fires roughly 26 times
          per second, creating a fundamental around 26 Hz and harmonics
          stretching out several kilohertz. When the engine is healthy,
          these harmonics follow a predictable pattern. The moment
          something starts to deteriorate, a bearing that begins to
          scar, a belt starting to glaze, an injector leaking, the
          spectrum shifts. New frequencies appear, old ones fade, the
          temporal profile changes. That spectral signature is what our
          AI has learned to recognise.
        </p>

        <h2>3963 recordings, 11 classes, one single truth</h2>
        <p>
          To train the model we collected 3963 labelled audio files:
          air leaks, knocks, bearing noise, belt noise, ticks, injector
          noise, exhaust leaks, healthy engines and several other
          categories. Every recording was listened to by a human to
          confirm the label, then turned into 56 numerical features: 40
          Mel-Frequency Cepstral Coefficients (MFCC) describing the
          timbre, plus 5 additional spectral features, plus a handful of
          temporal metrics. The SVM classifier with RBF kernel then
          learns to separate these 11 classes inside that 56-dimensional
          space.
        </p>

        <h2>Why an SVM and not a deep neural network?</h2>
        <p>
          The question comes up often: why use a Support Vector Machine
          rather than a modern deep convolutional network? Three reasons.
          First, SVMs perform excellently on medium-sized datasets like
          ours (a few thousand labelled examples) where a CNN would need
          tens of thousands to generalise well. Second, they are much
          faster to train and infer: a prediction runs in about 30
          milliseconds on a standard server. Third, their decisions are
          interpretable: we can trace back which frequencies drove the
          classification. That matters when explaining to a driver why
          the AI thinks their turbo is tired.
        </p>

        <h2>A 7-layer pipeline</h2>
        <p>
          An audio recording does not flow straight into the classifier.
          It first goes through six pre-processing and fusion steps.
          Layer 1: quality checks (volume, clipping, duration). Layer 2:
          Wiener denoising to strip background noise (wind, traffic,
          HVAC). Layer 3: extraction of the 56 features. Layer 4: SVM
          classification. Layer 5: fusion with live OBD2 data if a
          dongle is plugged in, for example a{" "}
          <Link href="/en/codes/p0300">P0300</Link>{" "}
          misfire code reinforcing a &quot;misfire&quot; audio
          prediction. Layer 6: Claude API turning the raw result into a
          plain-English explanation. Layer 7: display with colour coding
          based on confidence thresholds.
        </p>

        <h2>What the engine really says</h2>
        <p>
          When you trigger a scan, the system does not take just one
          snapshot. It records several seconds of engine noise, ideally
          at more than one rpm, and extracts the dominant pattern. A
          knock hitting twice per revolution at 2000 rpm but fading at
          3500 rpm is not a bearing issue, it is almost certainly a
          timing-train clearance. A continuous whistle that rises with
          load is turbo territory. A rhythmic huff on exhaust strokes is
          a manifold leak. The SVM picks up these temporal patterns
          through the MFCCs, which integrate spectrum evolution over
          time.
        </p>

        <h2>Listen to prevent</h2>
        <p>
          The real point of sound scanning is not to confirm that your
          engine is already broken, a warning light or obvious noise is
          enough for that. It is to catch wear BEFORE it becomes a
          breakage. A bearing starting to score shows up from just 5% of
          abnormal wear in the spectrum, long before you hear anything.
          Scanning once a month builds a history, and if your
          &quot;bearing noise&quot; confidence creeps from 15% to 60%
          over three months, the picture is clear: something is
          degrading. You intervene for a few hundred pounds instead of
          paying for a whole engine.
        </p>

        <h2>Keep reading</h2>
        <p>
          For the full list of detectable faults, head to our{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            11 faults detectable by sound
          </Link>{" "}
          piece. For the physics side, see{" "}
          <Link href="/en/blog/inaudible-sounds-ai-catches-what-your-ear-misses">
            inaudible sounds the AI catches
          </Link>
          . And if you ever see a{" "}
          <Link href="/en/codes/p0300">P0300</Link>{" "}
          code, sound scan will often tell you which cylinder is
          actually weak, information OBD2 alone may not reveal.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleHowSVMWorks() {
  const faq: FaqItem[] = [
    {
      q: "What is an SVM in simple terms?",
      a: "An SVM (Support Vector Machine) is a classification algorithm that draws optimal frontiers between categories in a high-dimensional space. Picture 3963 points scattered inside a 56-dimensional space: the SVM finds surfaces that best separate the 11 fault groups. A new sound is classified by looking at which side of the frontiers it falls.",
    },
    {
      q: "Why 56 features exactly?",
      a: "Because that number gives the best trade-off between accuracy and speed for our pipeline. 40 MFCCs cover perceptual timbre, 5 spectral features add broader information (centroid, bandwidth, rolloff, flux, contrast) and a handful of temporal metrics complete the picture. Beyond that, accuracy plateaus but compute cost grows.",
    },
    {
      q: "Why an RBF kernel rather than a linear one?",
      a: "Because fault classes are not linearly separable in the 56-dimensional space. The RBF kernel (Radial Basis Function) implicitly projects data into an infinite-dimensional space where boundaries become linear. Mathematically elegant and practically effective: precision jumps from 78% with linear kernel to 91.3% with RBF.",
    },
    {
      q: "How big is the final model?",
      a: "Around 12 MB for the serialised .pkl file. That is tiny compared to a deep neural network (often hundreds of MB). The small footprint is a real advantage: the model loads in under a second and inference runs in about 30 ms on a standard server.",
    },
    {
      q: "How is the class imbalance handled?",
      a: "The dataset is not perfectly balanced: some classes have more examples than others (air leak has 1005, normal engine has 269). We use per-class weighting during training to compensate, preventing the model from favouring majority classes at the expense of minority ones.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="How our SVM works: the technology behind sound scanning"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={11}
        category="Technology"
      >
        <p>
          If you are curious about what really happens when you tap
          the &quot;run scan&quot; button in the AutoDiag EU app,
          this is for you. No marketing fluff, a real walk-through
          of the pipeline, layer by layer, with the engineering
          choices we made and why. The system runs on a Python
          backend built on scikit-learn, and processes every
          recording through seven distinct stages that turn raw
          audio into a clear diagnosis and a confidence score.
        </p>

        <h2>Layer 1: quality gate</h2>
        <p>
          Before any analysis we verify the recording is usable.
          Volume too low? Reject. Clipping detected? Reject.
          Duration too short (under 3 seconds)? Reject. Background
          noise overwhelming the engine signal? Warn the user. This
          quality gate, implemented with librosa, prevents us from
          delivering nonsense results from bad recordings. An
          investment that drastically improves real-world
          reliability.
        </p>

        <h2>Layer 2: denoising</h2>
        <p>
          Even with a good recording there is always parasitic
          noise: wind, traffic, HVAC, voices. Layer 2 applies a
          Wiener filter via the noisereduce library to estimate the
          background noise profile and subtract it without hurting
          the useful signal. The filter works on a spectral
          estimation: it identifies frequency bands dominated by
          stationary noise and reduces amplitude there while
          preserving the transients that carry the interesting
          information.
        </p>

        <h2>Layer 3: extracting the 56 features</h2>
        <p>
          This is where audio becomes mathematics. The signal is
          sliced into overlapping 25 ms windows, each window is
          Fourier-transformed, projected onto the Mel scale that
          matches human timbre perception, and finally passed
          through a discrete cosine transform producing the 40 MFCC
          coefficients. We then add 5 spectral features (spectral
          centroid, bandwidth, rolloff, spectral flux, band
          contrast) and a few temporal metrics such as energy
          envelope and zero-crossing rate. Total: 56 numeric
          values per recording.
        </p>

        <h2>Layer 4: SVM classification</h2>
        <p>
          The 56-value vector feeds into the SVM classifier. The
          model was trained on 3963 labelled recordings, split
          roughly 80/20 between training and testing. The RBF
          kernel projects the data into an infinite-dimensional
          space where class boundaries become linear.
          Hyperparameters C (regularisation) and gamma (kernel
          width) were tuned via grid search with 5-fold cross
          validation. Final result: 91.3% precision on the
          independent test set.
        </p>

        <h2>Layer 5: OBD2 fusion</h2>
        <p>
          If an OBD2 dongle is connected during the scan, the
          system pulls active fault codes and live data (rpm,
          load, temperature, lambda voltages). Those readings are
          cross-referenced with the audio prediction through an
          expert rule system: a{" "}
          <Link href="/en/codes/p0300">P0300</Link>{" "}
          code reinforces a misfire prediction, a{" "}
          <Link href="/en/codes/p0420">P0420</Link>{" "}
          reinforces exhaust leak, a{" "}
          <Link href="/en/codes/p0325">P0325</Link>{" "}
          reinforces knock, and so on. Fusion can lift final
          confidence by several points when sources agree, or
          reduce it when they diverge.
        </p>

        <h2>Layer 6: interpretation by Claude API</h2>
        <p>
          The SVM raw output is useful for a mechanic but hard to
          read for a driver. Layer 6 uses the Claude API to turn
          the prediction into a plain-English message: fault
          explanation, likely causes, severity, rough cost,
          immediate actions. Important: Claude never receives raw
          audio. It only receives the predicted class, the
          confidence score, and the OBD2 context. The confidence
          percentage always comes from the SVM, never from Claude.
          That is an absolute pipeline rule.
        </p>

        <h2>Layer 7: display and thresholds</h2>
        <p>
          The final layer, on the frontend side, applies confidence
          thresholds to colour the result. 80% or above: green,
          reliable diagnosis, action recommended. 60-79%: orange,
          monitor, second scan advised. 30-59%: light yellow,
          indicative result. Below 30%: grey, inconclusive, please
          rescan in better conditions. These thresholds were
          calibrated on real-world data to balance sensitivity and
          specificity.
        </p>

        <h2>Why this architecture choice</h2>
        <p>
          We could have gone with a deep CNN, which has been
          fashionable for a decade. We did not, for three reasons:
          our dataset size (3963 is comfortable for an SVM, tight
          for a CNN), latency constraints (30 ms for the SVM, many
          hundreds of ms for a standard CNN), and interpretability
          (we can trace the influential frequencies with an SVM,
          it is harder with a deep network). The SVM is a pragmatic
          choice, not a limitation. When the dataset reaches 15 000
          samples we will probably move to a hybrid CNN + SVM, but
          the 7-layer architecture will remain. Further reading:{" "}
          <Link href="/en/blog/inaudible-sounds-ai-catches-what-your-ear-misses">
            the inaudible sounds AI catches
          </Link>{" "}
          and the{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            11 detectable classes
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleBearingWearAI() {
  const faq: FaqItem[] = [
    {
      q: "How do I tell an engine bearing from a wheel bearing?",
      a: "Wheel bearings change with road speed and vary in corners. Engine bearings change with engine rpm regardless of vehicle speed and stay identical through turns. Quick test: in neutral, if the noise persists as rpm rises, it is engine. If it vanishes, it is probably a wheel.",
    },
    {
      q: "Which internal engine bearings can wear?",
      a: "Big-end and main crankshaft bearings (the critical ones), camshaft journals, water pump and oil pump bearings, and in some cases turbo shaft bearings. Each has a distinct sonic signature, localised at a specific frequency linked to its geometry and position.",
    },
    {
      q: "Can low oil level cause bearing-like noise without real wear?",
      a: "Yes. Insufficient oil starves the bearings of their hydrodynamic film and produces metallic sounds similar to early wear. First thing to check before any diagnosis: the dipstick. If the noise disappears after top-up, you just avoided disaster. If not, wear is real.",
    },
    {
      q: "At what mileage do bearings start failing?",
      a: "On a well-maintained engine with regular oil changes, bearings last 250 000 to 400 000 km without issue. With neglected servicing that drops to 120 000 km. Some engines have well-known design flaws that shorten life further, check forum feedback for your specific engine.",
    },
    {
      q: "Why does the scan catch a bearing before I hear it?",
      a: "Because early wear produces a narrow, low-amplitude spectral peak inside a band your ear processes poorly (50-300 Hz or 8-14 kHz depending on the bearing type). The classifier, trained on 3963 recordings, picks up that peak before it becomes loud enough for conscious human perception.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Worn engine bearing: what AI hears before you can"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostic"
      >
        <p>
          In the hierarchy of engine faults, bearings occupy a
          special place. When a rod bearing lets go, it is not a
          repair, it is an engine replacement. When a cam journal
          seizes, it is not an inconvenience, it is a cascading
          failure. Fortunately, none of these faults arrive without
          warning. All of them produce, from the first few hundred
          kilometres of abnormal wear, a subtle sound signature that
          is perfectly identifiable, provided you have the right tool
          to listen.
        </p>

        <h2>Why bearings are the first to give away</h2>
        <p>
          A healthy bearing spins in near-silence. A few microns of
          oil film separate the moving surfaces, and as long as that
          film is intact, wear is zero. The moment the film thins,
          old oil, low level, brief overheating, the asperities touch.
          Those micro-contacts emit characteristic acoustic waves.
          The sound is too faint to hear immediately, but the mic
          records it and the classifier isolates it in the MFCC
          coefficients.
        </p>

        <h2>Spectral signatures by bearing type</h2>
        <p>
          Each bearing type has its own frequency, linked to geometry
          and position. Rod bearings produce a deep rumble around
          80-200 Hz, locked to engine rotation. Main bearings give a
          similar signature but broader. Camshaft journals run at
          half engine speed and emit around 100-400 Hz. Turbo shaft
          bearings, much smaller and much faster, produce narrow
          peaks between 8 and 14 kHz. The SVM separates these four
          families with over 93% precision on clean cases.
        </p>

        <h2>The classic mistake: confusing with something else</h2>
        <p>
          Many drivers blame a rumble on a wheel bearing or a pulley
          and waste weeks or months. The AI does not make that
          mistake: it compares the signature to its 11 classes and
          outputs whichever fits best, with a confidence score for
          each. A &quot;bearing noise&quot; at 65% and &quot;belt
          noise&quot; at 20% is clear: mainly bearing, partial
          similarity to belt.
        </p>

        <h2>What the oil tells you</h2>
        <p>
          A strong complementary indicator: metal particles in the
          oil. If you suspect a bearing and the scan returns bearing
          noise with medium confidence, check the oil. Normal oil is
          amber and translucent. Oil contaminated with bearing
          material is darker, more opaque, and leaves a metallic
          film on absorbent paper. That visual confirmation is worth
          any diagnostic score.
        </p>

        <h2>Early detection: the difference between GBP 500 and GBP 5000</h2>
        <p>
          A bearing caught at early wear stage (first 10% of abnormal
          clearance) can be replaced during a shell job for GBP 350
          to 800 depending on vehicle and labour rates. The same
          bearing ignored until failure destroys the crank, scars
          the journals, sends particles everywhere, and imposes a
          full engine replacement for GBP 3000 to 5000. This brutal
          asymmetry is the main reason preventive sound scanning
          exists. For the full picture, read{" "}
          <Link href="/en/blog/prevent-engine-failure-preventive-sound-diagnosis">
            preventive sound diagnosis
          </Link>
          .
        </p>

        <h2>False positives and how to handle them</h2>
        <p>
          No classifier is perfect. At 91.3% precision, roughly 1
          case in 11 is mislabelled. For bearing noise specifically,
          the common confusions are mild knocks and timing-train
          noise. To manage this, always run a second scan 24-48
          hours after an alert, ideally under identical conditions.
          If both scans agree, the result is reliable. If they
          disagree, run a third. Statistics do the rest.
        </p>

        <h2>What to do when the scan alerts</h2>
        <p>
          If your scan flags bearing noise above 60% confidence:
          first, check oil level. Second, check colour. Third, avoid
          high rpm and heavy load until diagnosis. Fourth, book a
          workshop visit within the week. A bearing that has started
          to scar is never stable: it gets worse. The useful
          intervention window is usually a few weeks to a few
          months. If a{" "}
          <Link href="/en/codes/p0011">P0011</Link>{" "}
          code appears too, priority goes even higher. For all
          detectable classes, see our{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            list of 11 classes
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

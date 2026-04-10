import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function Article11EngineFaultsSound() {
  const faq: FaqItem[] = [
    {
      q: "Why 11 classes and not more?",
      a: "Because that is the number of classes for which we currently have enough labelled data (minimum 250 recordings each) to train a reliable SVM. Below that threshold the false positive rate becomes unacceptable. We add a class each time the dataset reaches the required minimum.",
    },
    {
      q: "Can the scan mix up two faults?",
      a: "Yes, that is the natural limit of any classifier. A low-frequency bearing rumble can be confused with a big-end knock in about 8% of cases. This is why the system always shows a confidence score: below 60% the result is marked &quot;watch closely&quot; and a repeat scan is recommended.",
    },
    {
      q: "Which fault is easiest to detect?",
      a: "Intake air leaks have the best precision, around 96%. The sharp and continuous hiss is very distinct from other engine sounds. At the other end, misfires sit at 87% because they can occasionally resemble a naturally rough diesel idle.",
    },
    {
      q: "How much does ignoring a suspicious noise cost?",
      a: "It depends on the fault. A timing belt snap on an interference engine costs between GBP 1700 and GBP 6500. A crank bearing that lets go usually means a full engine replacement, often over GBP 3500. An ignored turbo whistle can mean GBP 1200 or more in parts alone.",
    },
    {
      q: "Should the engine be cold or hot for scanning?",
      a: "Both are useful but answer different questions. Cold starts reveal mechanical clearances and early-morning tapping. Hot engine at operating temperature reveals oil-sensitive faults, worn bearings and turbo condition. Ideally, scan both and compare.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="11 engine faults detectable by AI sound analysis"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          Here is the full list of the 11 fault classes our sound scan
          can currently recognise. Each was trained on several hundred
          real recordings, labelled by hand, covering petrol, diesel,
          LPG, hybrid and turbocharged engines. For every fault you get
          the sonic signature, the risk of ignoring it, and a realistic
          repair cost across European markets.
        </p>

        <h2>1. Engine knock</h2>
        <p>
          A metallic sound, often described as &quot;marbles in a tin&quot;,
          that appears under load or on re-acceleration. Common root
          causes: wrong-octane fuel, a failing knock sensor, sometimes
          early bearing wear. Cost: from GBP 35 (spark plugs) to GBP
          3000 (bottom-end rebuild). The scan tells you whether the
          knock is mild (monitor) or severe (stop immediately).
        </p>

        <h2>2. Bearing noise</h2>
        <p>
          A dull rumble in the low frequency range (50-200 Hz) that
          changes with engine rpm. Points at worn big-end, main or
          camshaft bearings. Cost: GBP 250 to 700 for shells if caught
          early, GBP 3000 to 5000 for a complete engine if ignored. This
          is the fault with the highest return on early detection.
        </p>

        <h2>3. Intake air leak</h2>
        <p>
          A sharp continuous hiss, often louder at idle than at higher
          rpm. Split intake hose, tired manifold gasket, leak around the
          throttle body. Often correlates with{" "}
          <Link href="/en/codes/p0171">P0171 — system too lean</Link>.
          Cost: GBP 15 to 180 for early repair, versus GBP 350 to 700
          when the lambda sensor eventually dies as a consequence.
        </p>

        <h2>4. Exhaust leak</h2>
        <p>
          A rhythmic huff on the exhaust stroke, stronger from cold.
          Manifold gasket, cracked flexi, loosened clamp after the
          catalyst. Directly impacts emissions and often leads to a{" "}
          <Link href="/en/codes/p0420">P0420</Link>{" "}
          code. Cost: GBP 70 to 400 depending on location.
        </p>

        <h2>5. Turbo whistle</h2>
        <p>
          A rising whistle under load, distinct from the normal
          compressor tone. Can mean shaft play, a leak on the charge
          pipe, or a fluttering wastegate. Cost: GBP 180 to 1600
          depending on cause. Never ignore it: a failing turbo can send
          oil into the intake and take the engine with it.
        </p>

        <h2>6. Belt noise</h2>
        <p>
          A squeak or chirp, usually from cold or in damp weather.
          Glazed accessory belt, tired tensioner, seized pulley. Cost:
          GBP 25 to 220. Note that the timing belt has its own
          dedicated class (see item 11) because the consequences of
          failure are so different.
        </p>

        <h2>7. Engine tick</h2>
        <p>
          A fast, steady tapping aligned with engine rpm. Often
          hydraulic lifters (low oil level or old oil) or a sticky
          injector. Cost: a proper oil change with quality oil fixes
          around 60% of these cases. Otherwise, injector cleaning or
          lifter replacement.
        </p>

        <h2>8. Injector noise</h2>
        <p>
          A dry rapid clack, concentrated near the top of the engine,
          typical of common-rail diesels and modern direct-injection
          petrols. Sticky injector, weak return spring, leaking return
          line. Cost: GBP 70 (cleaning) up to GBP 1800 (a full set on
          some premium engines).
        </p>

        <h2>9. Misfire</h2>
        <p>
          An irregular beat, the engine stumbling. Signature strongly
          overlaps with{" "}
          <Link href="/en/codes/p0300">P0300</Link>. Spark plugs, coils,
          dead injector, compression loss. Cost: GBP 15 (a plug) to
          GBP 800 (head gasket).
        </p>

        <h2>10. Normal engine</h2>
        <p>
          Not a fault, but an essential class: it prevents false
          positives. When the scan returns &quot;normal engine&quot;
          above 80% confidence, you know nothing visible is drifting.
          It is a clean bill of health, not a diagnosis.
        </p>

        <h2>11. Timing-train noise</h2>
        <p>
          A sound quite different from accessory belts: deeper, often
          masked by the rest of the engine, visible mostly to the AI
          which isolates its spectral signature. Tired timing tensioner,
          belt near tooth-jump, seized idler. The most expensive fault
          to ignore on interference engines: GBP 1700 to 6500 if it
          goes. Essential reading:{" "}
          <Link href="/en/blog/worn-timing-belt-detect-by-sound-before-it-snaps">
            detecting a worn timing belt by sound
          </Link>
          .
        </p>

        <h2>Takeaway</h2>
        <p>
          These 11 classes cover around 85% of the mechanical faults we
          see on engines younger than 15 years. The model runs at 91.3%
          overall precision. Above 80%, act quickly. Between 60 and
          80%, run a second scan the same week. Below 60%, the system
          stays cautious and labels the result &quot;indicative&quot;.
          For the full engineering story, visit{" "}
          <Link href="/en/blog/how-our-svm-works-technology-behind-sound-scanning">
            how our SVM works
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDieselVsPetrolSound() {
  const faq: FaqItem[] = [
    {
      q: "My diesel is noisy at idle, is it normal?",
      a: "Yes, up to a point. Diesels naturally produce a characteristic clatter from compression ignition, especially cold. It is more marked on modern common-rail direct-injection diesels. It becomes abnormal when it grows louder, takes a sharper metallic tone, or persists once fully warm.",
    },
    {
      q: "Does the AI tell the difference between normal diesel clatter and a fault?",
      a: "Yes, that is precisely why we included several hundred diesel recordings in the training set. The model learns that baseline clatter is normal for a healthy diesel and does not flag it as knock. It only reacts to deviations from that baseline.",
    },
    {
      q: "Can a very quiet petrol engine hide a fault?",
      a: "Yes, absolutely. Modern petrol engines are so quiet that early mechanical faults fall below human perception. A bearing that starts to scar can stay inaudible for months. Sound scan is especially useful on petrol engines for exactly this reason: it compensates for relative mechanical silence with fine harmonic analysis.",
    },
    {
      q: "Are the detected frequencies different depending on fuel type?",
      a: "Yes. Diesel concentrates its energy in low frequencies (50-400 Hz) because of high compression and combustion noise. Petrol spreads more into mid and high frequencies (200 Hz to 3 kHz). The SVM learns these distinct signatures and classifies both correctly thanks to the 40 MFCCs that separate the two profiles efficiently.",
    },
    {
      q: "What about hybrids or LPG bi-fuel?",
      a: "Hybrids are a special case: always scan while the thermal engine is running, not in EV mode. LPG bi-fuel can slightly alter the signature because of cleaner, slower combustion, but the model stays reliable in most cases. We actively collect extra data for these powertrains.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Diesel vs petrol: why their sound diagnosis is different"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostic"
      >
        <p>
          A diesel and a petrol engine do not sound alike, and that
          is not just a matter of vibe. They run on fundamentally
          different combustion principles, producing sonic
          signatures at opposite ends of the spectrum. For reliable
          sound diagnosis the model must know which engine type it
          is dealing with and apply the right analysis criteria.
          That is exactly what the SVM learned during training.
        </p>

        <h2>Two combustion principles, two signatures</h2>
        <p>
          A petrol engine ignites a pre-mixed air-fuel charge with
          a spark plug. Combustion is relatively progressive,
          producing smoother noise with dominant mechanical
          components. A diesel, by contrast, injects fuel into air
          compressed very strongly (14:1 to 22:1 versus 8:1 to
          11:1 for petrol). Fuel auto-ignites, producing a rapid,
          near-explosive pressure peak that generates a very
          marked combustion noise. That is the source of the
          typical diesel &quot;clatter&quot;.
        </p>

        <h2>The dominant frequencies</h2>
        <p>
          On a diesel scan, spectral energy concentrates between
          50 and 400 Hz, with marked harmonics up to 2 kHz. The
          MFCCs reflect that low-frequency concentration. On a
          petrol engine, energy is spread more widely, with
          significant components from 200 Hz up to 3-4 kHz. The
          distribution difference is so marked that a human can
          almost guess the engine type by ear. The SVM knows for
          certain from the first MFCC coefficients.
        </p>

        <h2>What diesels hide</h2>
        <p>
          Diesel combustion noise is so loud that it masks many
          fault signatures. An early rod knock on a diesel is
          hard to hear because it blends into normal engine
          noise. This is where sound scan adds the most value: it
          mathematically separates normal combustion from the
          fault signature, even when they partially share the
          same frequency band. On diesels, the most significant
          deviations to watch are knock above baseline, injectors
          taking up play, and main bearings.
        </p>

        <h2>What petrol engines let you hear</h2>
        <p>
          Petrol engines being much quieter, early faults are
          often audible earlier to a human, but also more easily
          confused. A light whistle can be a turbo, an intake
          leak, an accessory belt, or even a manifold leak. The
          AI is particularly useful on these engines to quickly
          narrow down multiple candidates. The most useful
          classes on petrol are air leak, turbo whistle, belt
          noise and misfire.
        </p>

        <h2>Faults exclusive to one engine type</h2>
        <p>
          Some faults are exclusive to one type. Common-rail
          injector tick is specific to diesel and certain recent
          petrol direct-injection engines. Detonation (preignition)
          is almost exclusively petrol. Turbo choking from DPF
          soot is diesel. Low-speed preignition (LSPI) is specific
          to some turbocharged direct-injection petrol engines.
          Our model knows these specificities and adjusts
          thresholds based on the user-declared context.
        </p>

        <h2>OBD2 codes that shift meaning</h2>
        <p>
          The same code can mean different things on diesel and
          petrol. The{" "}
          <Link href="/en/codes/p0300">P0300</Link>{" "}
          misfire code exists on diesels but usually points to an
          injection or compression problem, not spark plugs. The{" "}
          <Link href="/en/codes/p0420">P0420</Link>{" "}
          catalyst efficiency code is different on diesel (DPF/SCR)
          and petrol (three-way cat). Layer 5 OBD2 fusion accounts
          for these differences when enriching the audio
          prediction.
        </p>

        <h2>Compared precision</h2>
        <p>
          On the test set, the model runs at 91.3% average
          precision. Broken down by engine type, it sits around
          92% on petrol and 90% on diesel. The small gap is
          explained by the intrinsic difficulty of detecting
          anomalies on an already noisy engine. We compensate by
          gradually collecting more finely-labelled diesel data.
          Further reading:{" "}
          <Link href="/en/blog/how-our-svm-works-technology-behind-sound-scanning">
            the technology behind sound scanning
          </Link>{" "}
          and our article on{" "}
          <Link href="/en/blog/engine-knocking-noise-causes-ai-diagnosis">
            engine knocking
          </Link>
          . A{" "}
          <Link href="/en/codes/p0128">P0128</Link>{" "}
          code on a diesel can also bias the scan through a
          cooling fan running abnormally.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

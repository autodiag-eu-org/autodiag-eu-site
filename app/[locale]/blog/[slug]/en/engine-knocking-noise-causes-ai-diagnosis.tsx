import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleEngineKnocking() {
  const faq: FaqItem[] = [
    {
      q: "My engine knocks cold then clears, is it serious?",
      a: "Not necessarily. A brief knock from cold that fades within 10-30 seconds is usually hydraulic lifters repressurising. If it happens daily and oil level is correct, switch to a better-quality oil at the next service. If the knock persists when warm or comes back under load, that is a different story.",
    },
    {
      q: "What is the difference between pinking and knocking?",
      a: "Pinking (combustion knock) is a sharp metallic sound appearing under load, often described as marbles rattling in a can. It is a combustion abnormality. Mechanical knock (piston slap, rod knock) is deeper, rhythmic with engine rotation, and reflects actual mechanical clearance. Our SVM separates these signatures in under a second.",
    },
    {
      q: "Does a P0325 code mean my engine is knocking?",
      a: "No, P0325 is about the knock sensor circuit, not the knock itself. The sensor can be faulty without the engine knocking, or the engine can knock without the code appearing if the sensor is dead. A sound scan verifies the actual noise independently of the sensor.",
    },
    {
      q: "How much does an ignored knock cost?",
      a: "A severe rod knock destroys the engine within a few hundred kilometres. Replacement: GBP 2000 to 5000 depending on the vehicle. Early detection via sound scan lets you change bearing shells for GBP 350 to 800. The return on early detection is massive for this fault.",
    },
    {
      q: "Can I drive with a mild knock?",
      a: "Just as far as the garage, gently, no high rpm. Beyond that, no. Every kilometre with a mechanical knock accelerates wear exponentially: clearance grows, surfaces destroy each other, metal particles contaminate the oil and wreck everything else. Classic cascade failure.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Engine knocking noise: causes, risks and AI diagnosis"
        date="2026-04-11"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostic"
      >
        <p>
          There is knocking and there is knocking. A metallic tap under
          the bonnet is not unusual, every engine produces some to
          varying degrees. The tricky part is knowing which ones are
          normal and which ones herald a GBP 3000 repair. Without
          tools, even an experienced mechanic can misjudge. With the
          AutoDiag EU sound scan, you get an answer in under a minute,
          complete with a confidence score.
        </p>

        <h2>The three knock families</h2>
        <p>
          First family: combustion knock, or pinking. A sharp metallic
          sound that appears when you squeeze the throttle, typically
          uphill or in a recovery. The cause is fuel auto-igniting
          before the spark, usually from low-octane fuel, advanced
          ignition timing, or a failing knock sensor (code{" "}
          <Link href="/en/codes/p0325">P0325</Link>). Second family:
          piston slap. A deeper sound, mostly present cold, coming from
          piston-to-bore clearance. Third family: rod knock, the most
          serious. A rhythmic hammering signalling worn big-end
          bearings.
        </p>

        <h2>Why your ear cannot tell them apart</h2>
        <p>
          The human ear has three big weaknesses for this diagnosis.
          It does not measure precise periodicity (a noise twice per
          revolution vs once per revolution feels the same). It does
          not separate frequencies (a 2 kHz peak and a 5 kHz peak
          merge into one sensation). And it adapts: after three
          minutes of listening, your brain classifies the sound as
          &quot;background&quot; and you stop noticing it. The SVM has
          none of those weaknesses. It measures with precision,
          separates bands across the 40 MFCC coefficients, and never
          acclimatises.
        </p>

        <h2>How the AI tells them apart</h2>
        <p>
          Rod knock has a distinctive spectral signature: a rapid
          attack, exponential decay, fundamental around 200-400 Hz with
          harmonics up to 3 kHz, and a periodicity strictly locked on
          engine rotation divided by two (one ignition per revolution
          on a four-stroke). Piston slap spreads more in frequency,
          damps faster, and shrinks noticeably as the engine warms up.
          Combustion knock sits higher, 5-8 kHz, and only shows up
          under load. These spectral differences, invisible to the ear,
          are legible in the MFCCs.
        </p>

        <h2>Where OBD2 fits in</h2>
        <p>
          If a dongle is connected, layer 5 of the pipeline enriches
          the prediction with OBD2 data. An active{" "}
          <Link href="/en/codes/p0325">P0325</Link>{" "}
          strengthens the case for real combustion knock. A{" "}
          <Link href="/en/codes/p0011">P0011</Link>{" "}
          for intake VVT timing can mask or amplify mechanical knock
          depending on cam phase. When both sources agree, effective
          precision climbs above 94% from the baseline 91.3%.
        </p>

        <h2>The most common root causes</h2>
        <p>
          By frequency across our European user base: poor fuel
          quality (15-20% of mild knocks), ignition timing drift
          (10%), dead knock sensor (15%), worn hydraulic lifters or
          low oil (25%), early piston clearance (15%), bearing wear
          (10%), various other (10%). Good news: more than half fix
          for under GBP 200, provided you catch them early.
        </p>

        <h2>The cascade of degradation</h2>
        <p>
          An engine that knocks, even mildly, does not stay in that
          state. Clearance grows, metal particles contaminate the oil,
          polluted oil wears the other bearings, the other bearings
          knock too, and within six months a GBP 450 repair turns into
          a full engine replacement. That is why we keep insisting on
          early detection. A monthly sound scan gives you a confidence
          curve: if &quot;knock&quot; confidence climbs from 10% to
          45% over two months, you know something is happening.
        </p>

        <h2>What to do about it</h2>
        <p>
          If you hear anything, run a sound scan. If knock is returned
          above 60% confidence, contrast with a cold and a hot scan.
          If confidence stays high, book a workshop visit quickly,
          even without any warning light. For a complete rundown of
          what the system detects,{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            see the full list
          </Link>
          . And to understand how to get ahead of the problem, read{" "}
          <Link href="/en/blog/prevent-engine-failure-preventive-sound-diagnosis">
            our preventive diagnosis guide
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

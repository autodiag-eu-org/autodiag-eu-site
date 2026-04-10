import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleDieselMOT2026() {
  const faq: FaqItem[] = [
    {
      q: "What changes on the 2026 diesel MOT?",
      a: "Smoke opacity thresholds remain strict: 1.5 m-1 for post-2008 diesels, 2.5 m-1 for older ones. Visual DPF inspection is mandatory: a removed or cut-out DPF means an automatic fail. AdBlue (SCR) is checked on Euro 6 vehicles, any SCR fault is penalised. In 2026 reinforced checks on emission-control systems matter even more.",
    },
    {
      q: "How do I avoid a fail for smoke opacity?",
      a: "Do a couple of forced DPF regens in the two weeks before: drive 30 minutes on the motorway at 3000 RPM minimum, twice. Use a catalyst additive if you mostly drive in town. Check your EGR valve isn't stuck. Inspect for intake leaks that would throw the mixture off.",
    },
    {
      q: "How much does a blocked DPF repair cost?",
      a: "Professional cleaning at a specialised station costs 180 to 350 GBP. A forced regen in workshop runs 70 to 130 GBP. Full DPF replacement ranges from 900 to 2200 GBP depending on the vehicle. Prevention is much cheaper than cure.",
    },
    {
      q: "What to do if the car fails on AdBlue?",
      a: "Never drive long in limp mode: the ECU eventually blocks starting. First check the NOx sensor (replacement 180 to 400 GBP), then the AdBlue injector (160 to 320 GBP). A P229F or P2BAD code on OBD2 points straight at the fault. Then run a full emissions cycle before retesting.",
    },
    {
      q: "Do older diesels still pass the MOT in 2026?",
      a: "Yes, but with tighter tolerance. Euro 3 and Euro 4 diesels get a stricter visual DPF check. Euro 2 and older are handled with specific thresholds. In Clean Air Zones access is restricted but the MOT itself remains accessible as long as the vehicle meets opacity and noise limits.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Diesel MOT preparation 2026: complete guide"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Practical Guide"
      >
        <p>
          The diesel MOT is a stressful appointment. Smoke thresholds
          are tougher than on petrol, emission systems are fragile, and
          a DPF retest can cost up to 2200 GBP. Yet with the right
          preparation and a few targeted checks, the large majority of
          failures can be avoided. This guide tells you exactly what to
          do, when to do it, and what it costs if you do need to move
          into repair.
        </p>

        <h2>The 5 points that fail a diesel MOT</h2>
        <p>
          Statistically, 60% of diesel retests concern one of these five
          points: smoke opacity too high, DPF cut out or missing, AdBlue
          (SCR) failure, exhaust leak, or blocked differential pressure
          sensor. The first four penalise, the last one is usually
          detectable ahead of the MOT with a simple OBD2 scan.
        </p>

        <h2>Opacity: understanding the test</h2>
        <p>
          The tester fits an opacimeter on the exhaust and performs
          three free accelerations with a hot engine. The device
          measures light absorption by the fumes. 2026 thresholds: 1.5
          m-1 for Euro 5 and Euro 6 diesels (post-2011), 2.5 m-1 for
          older diesels. A healthy DPF typically reads between 0.2 and
          0.8 m-1. Beyond 1.2, that is a serious warning.
        </p>

        <h2>Prepping the DPF before MOT day</h2>
        <p>
          The DPF regenerates in passive mode (motorway over 40 mph) and
          active mode (post-injection, 600 Celsius). If you mostly drive
          in town, the DPF never fully regenerates and eventually
          clogs. Two weeks before the MOT, take the motorway for two
          30-minute runs at over 2500 RPM. This forces multiple regen
          cycles and clears accumulated soot. For the bigger picture
          see{" "}
          <Link href="/en/blog/mot-preparation-guide-2026">
            the general MOT 2026 guide
          </Link>
          .
        </p>

        <h2>AdBlue and SCR: the Euro 6 trap</h2>
        <p>
          Euro 6 diesels use AdBlue to cut NOx via an SCR catalyst. If
          the system fails, the ECU drops to limp mode and eventually
          blocks starting after a set number of restarts. Common
          causes: downstream NOx sensor at end of life (180 to 400
          GBP), fouled AdBlue injector (160 to 320 GBP), tank
          crystallisation in winter, or tired AdBlue pump (300 to 550
          GBP). A <Link href="/en/codes/p0420">P0420 code</Link>{" "}
          together with P229F, P20EE or P2BAD is typical. Scan before
          taking the MOT.
        </p>

        <h2>Exhaust leaks: the silencer in the spotlight</h2>
        <p>
          A leak before the catalyst or before the DPF throws the
          measurements off and degrades emission-control efficiency.
          The tester inspects visually and tests with the opacimeter.
          Common leak points: manifold (tired gasket), stainless flex
          after the turbo (cracks), rear silencer body (corrosion). A
          small weld repair costs 70 to 130 GBP. A full rear line
          replacement runs 350 to 800 GBP. Sound scanning detects
          leaks by their typical signature — see{" "}
          <Link href="/en/blog/preventive-sound-check-avoid-cascade-repair-bill">
            preventive sound check
          </Link>
          .
        </p>

        <h2>Extra visual checks</h2>
        <p>
          Beyond pure mechanics, the tester also checks: oil drips
          under the engine, turbo hose condition, no warning lights on
          (engine, ABS, airbag, AdBlue), lights working, tyre
          condition, joints and bushes play. A pre-MOT visual check
          using our{" "}
          <Link href="/en/blog/ai-visual-checkup-5-points-healthy-vehicle">
            5-point method
          </Link>{" "}
          covers the essentials in under five minutes.
        </p>

        <h2>Two weeks before: the full checklist</h2>
        <p>
          Day D-14: two long motorway runs to regenerate the DPF. Day
          D-10: full OBD2 scan, fix any codes. Day D-7: visual check
          for exhaust leaks and engine oil drips. Day D-5: tyres,
          lights, washer fluid. Day D-3: sound scan to catch any
          abnormal engine noise. Day D: appointment booked, warm
          engine on arrival, AdBlue tank at least half full.
        </p>

        <h2>Clean Air Zones and MOT: two different things</h2>
        <p>
          Many people mix them up. The MOT checks technical compliance
          (measured emissions, systems present). Clean Air Zones check
          the administrative category tied to first registration date.
          You can pass your MOT with a vehicle that cannot drive into
          central London, and vice versa. The MOT does not change your
          CAZ status.
        </p>

        <h2>If you fail</h2>
        <p>
          Don't panic. The retest happens within ten working days and
          only rechecks the failed points. Priority: pinpoint the
          failing point from the fail sheet, fix quickly, return. For
          a failed DPF, consider professional cleaning rather than
          replacement. For an exhaust leak, targeted welding is often
          enough. For an AdBlue issue, scan first to identify the
          exact component before spending money. See also{" "}
          <Link href="/en/codes/p0300">the P0300 code</Link> which
          often accompanies diesel combustion faults.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

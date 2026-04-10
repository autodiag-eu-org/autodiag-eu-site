import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleExcessiveFuelConsumption() {
  const faq: FaqItem[] = [
    {
      q: "Above what difference is a fuel consumption abnormal?",
      a: "Beyond 15% off the claimed figure (WLTP or manufacturer), or beyond 20% off your usual average, it's a signal. For example if your car normally returns 45 mpg and drops to 38 mpg without any change in use, something has drifted. Seasonal variation explains 5 to 10%, beyond that you need to investigate.",
    },
    {
      q: "What is the most frequent cause of overconsumption?",
      a: "A dirty MAF (mass air flow) sensor. It sends a biased value to the ECU which compensates by enriching the mixture. Dedicated spray cleaning: 12 GBP and 10 minutes. If that's not enough, replacement: 70 to 220 GBP. After the MAF come tired lambda sensors and fuel pressure out of range.",
    },
    {
      q: "Does driving style really matter?",
      a: "Enormously. A heavy foot can double urban fuel use. Hard acceleration, sudden braking and high motorway speeds are the three main factors. At 80 mph you typically burn 30% more than at 70 mph. A careful driver easily saves 5 to 10 mpg without changing anything on the car.",
    },
    {
      q: "How do I diagnose via OBD2?",
      a: "Key values to read: short term fuel trim (STFT) and long term fuel trim (LTFT). Normally between -5% and +5%. Beyond +10% persistently, the ECU is enriching to compensate for an air leak or an under-reading sensor. Beyond +20%, that's critical. Also look at MAF g/s at different RPMs and compare to expected values for your engine.",
    },
    {
      q: "Can an oil service reduce consumption?",
      a: "Moderately, 1 to 3%. Oil that's too old increases internal friction and raises consumption. If you went well past the service interval, do the service, you'll gain a little. Don't count on it to compensate for bigger drift — if consumption jumped, look elsewhere.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Excessive fuel consumption: causes and OBD2 diagnosis"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={10}
        category="Diagnostic"
      >
        <p>
          When fuel consumption rises for no obvious reason, it's
          rarely a dead end. In 80% of cases, a methodical OBD2
          diagnostic finds the cause in under an hour. This guide
          gives you the exact checklist to identify the culprit, from
          benign causes to more serious faults, with price bands for
          each intervention.
        </p>

        <h2>Check what costs zero first</h2>
        <p>
          Before pulling out the OBD2, rule out false alerts. Tyre
          pressure: 0.5 bar low adds 3 to 5% consumption. Air
          filter: a clogged filter can cost 2 to 4 mpg. Roof bars or
          roof box: up to 8 mpg worse on motorway. Poor quality
          fuel: it exists more often than people think. Weather:
          winter, cold and winter tyres naturally add 0.5 to 1 litre
          per 100 km.
        </p>

        <h2>OBD2 scan: fuel trims first</h2>
        <p>
          Fuel trims are the most telling indicators. STFT (short
          term) is the instantaneous correction, LTFT (long term) is
          the learned average. Normally both sit between -5% and
          +5%. If LTFT stays above +10%, the ECU is enriching to
          compensate for something. Look for: unmetered air leak
          (hose, manifold, intake gasket), MAF reading low, tired
          upstream lambda, low fuel pressure. See the code{" "}
          <Link href="/en/codes/p0171">P0171</Link> which typically
          accompanies these drifts.
        </p>

        <h2>MAF and MAP: air measurement sensors</h2>
        <p>
          The MAF (mass air flow) or MAP (manifold absolute
          pressure) sensor tells the ECU how much air is entering
          the engine. If it lies, the mixture is wrong. A fouled
          MAF under-reads the flow, the ECU adds less fuel, then
          listens to lambda feedback and corrects by enriching
          persistently. Result: high LTFT, rising consumption.
          Dedicated spray cleaning: 12 GBP and 10 minutes. A MAF
          past 120000 miles deserves replacement even after
          cleaning.
        </p>

        <h2>Lambda sensors: the regulation relay</h2>
        <p>
          The upstream sensor drives mixture regulation every
          second. A tired sensor (over 90000 miles) reacts slowly,
          the ECU regulates less well, consumption drifts.
          Replacement 70 to 180 GBP for the part plus fitting.
          Universal sensors (NTK, Bosch) perform as well as
          manufacturer parts at half the price. See{" "}
          <Link href="/en/blog/p0420-catalytic-converter-cost">
            the P0420 catalytic converter cost
          </Link>{" "}
          which also discusses lambdas.
        </p>

        <h2>Tired or fouled injectors</h2>
        <p>
          On diesel, injectors leak slightly with age and deliver
          more fuel than intended. On petrol, they can foul and
          atomise poorly. In both cases, consumption climbs. Bench
          cleaning (45 to 90 GBP per injector) often restores
          petrol injectors. On diesel, a back-leak test identifies
          the guilty injector directly.
        </p>

        <h2>EGR and emissions systems</h2>
        <p>
          A stuck-open EGR valve dilutes the air intake and raises
          consumption. A stuck-closed EGR saturates NOx but doesn't
          affect consumption. A clogged DPF raises exhaust back
          pressure and therefore engine work: noticeable
          consumption rise. An OBD2 scan reads EGR positions and
          drifts, but only a road test confirms.
        </p>

        <h2>Tyres, brakes and running gear</h2>
        <p>
          A seized caliper that drags the pad on the disc creates
          permanent resistance — excessive heat on one side, uneven
          wear, rising consumption. A very tired wheel bearing also
          adds rolling resistance. Winter tyres left on through
          summer add 2 to 4 mpg. See{" "}
          <Link href="/en/blog/wheel-bearing-noise-detect-wear-before-mot">
            detect a wheel bearing noise
          </Link>
          .
        </p>

        <h2>Driving style: the number one factor</h2>
        <p>
          Before hunting for a fault, question your habits. Have
          you changed routes? Conditions? More short trips?
          Eco-driving easily saves 15% on the same car. Anticipate,
          ease off in time, drive at 70 rather than 80, shut the
          engine at prolonged stops — all of that adds up. See also{" "}
          <Link href="/en/blog/preventive-diagnostics-save-thousands-per-year">
            preventive diagnostics and their concrete savings
          </Link>
          .
        </p>

        <h2>When to call a pro</h2>
        <p>
          If after checking the points above consumption remains
          abnormal, a visit to a mechanic with an advanced
          diagnostic tool allows reading manufacturer modes and
          accessing parameters that standard OBD2 doesn't expose.
          Expect 45 to 90 GBP for a serious engine diagnostic,
          easily paid back on the fuel bill saved in the following
          months.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

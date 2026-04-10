import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleTop10CommonFaultCodesEurope() {
  const faq: FaqItem[] = [
    {
      q: "What is the most common OBD2 fault code in Europe?",
      a: "P0420 — catalyst system efficiency below threshold (bank 1) — is the single most common code seen across European cars. It shows up on roughly one petrol car in three past 150,000 km. The primary cause is a tired downstream oxygen sensor or a worn catalytic converter.",
    },
    {
      q: "Can these fault codes damage the engine?",
      a: "Most are not immediately serious, but ignoring them can create bigger problems. A P0300 (misfires) can destroy a catalytic converter in weeks. A long-running P0171 accelerates valve wear. A P0128 left alone keeps the engine below normal temperature and increases cylinder wear.",
    },
    {
      q: "How much does it cost to repair these codes?",
      a: "The ranges vary widely. A P0442 (small EVAP leak) often costs nothing — tightening the fuel cap. A P0171 can be GBP 20 to 300 depending on the cause. A P0420 runs GBP 130 to 1,300 depending on whether you replace the sensor or the full catalyst. A P0300 is GBP 40 to 700 depending on plugs versus coils.",
    },
    {
      q: "Can I clear these codes myself with an ELM327 adapter?",
      a: "Yes, a Bluetooth ELM327 adapter lets you clear fault codes, but clearing without repairing is pointless — the code will return. Clearing codes just before an MOT also sets readiness monitors to 'not ready', which is an automatic fail.",
    },
    {
      q: "What's the difference between a generic code and a manufacturer code?",
      a: "A generic code has a 0 in the second position (P0420) and means the same thing on every make. A manufacturer code starts with a 1 (P1420) and is brand-specific: a Toyota P1420 is not the same as a Ford P1420. AutoDiag EU recognises both types.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
      locale="en"
        title="Top 10 most common OBD2 fault codes in Europe"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={11}
        category="Fault Codes"
      >
        <p>
          Plug a diagnostic scanner into a random car in the UK, France or
          Germany and, eight times out of ten, the code that comes up will
          be one of the same ten. That&apos;s no coincidence: these codes
          line up with the most common failures on an ageing engine, the
          wear components every manufacturer uses, and the shared weak
          points of European drivetrains. Knowing them means you can
          almost diagnose a car without opening the app. Here&apos;s the
          top ten, ordered by real-world frequency.
        </p>

        <h2>1. <Link href="/en/codes/p0420">P0420</Link> — Catalyst efficiency below threshold</h2>
        <p>
          The undisputed king. Seen on roughly one petrol car in three
          past 150,000 km. The ECU compares the upstream and downstream
          oxygen sensor signals: when they look too similar, the catalytic
          converter is no longer &quot;working&quot;. Main causes: tired
          downstream lambda sensor, worn cat, or more rarely an exhaust
          leak upstream. Cost: GBP 130 (sensor) to GBP 1,300 (full cat).
        </p>

        <h2>2. <Link href="/en/codes/p0171">P0171</Link> — System too lean (bank 1)</h2>
        <p>
          The second most common, especially on naturally aspirated and
          downsized turbo petrol engines. The engine is receiving too much
          air relative to fuel. Common causes: intake manifold air leak,
          dirty MAF sensor, under-performing injector, tired fuel pump.
          First move: clean the MAF (GBP 10 cleaner). If that fails, smoke
          test for vacuum leaks.
        </p>

        <h2>3. <Link href="/en/codes/p0300">P0300</Link> — Random misfire detected</h2>
        <p>
          The most felt: the engine vibrates, stumbles, misses. Random
          means the ECU cannot pinpoint a single cylinder. Causes: worn
          spark plugs (80% of cases on petrol engines past 60,000 miles
          without a change), tired coils, dirty injectors. Danger:
          misfires destroy the catalytic converter. Treat fast.
        </p>

        <h2>4. <Link href="/en/codes/p0442">P0442</Link> — Small EVAP leak</h2>
        <p>
          The mildest of the list. The EVAP system captures fuel vapour
          from the tank and routes it back to the engine. A small leak is
          almost always a loose fuel cap or a worn cap seal. Tightening
          the cap and driving 50 miles clears it in 60% of cases.
          Otherwise, replace the cap (GBP 12 to 35).
        </p>

        <h2>5. <Link href="/en/codes/p0128">P0128</Link> — Coolant thermostat stuck open</h2>
        <p>
          Your engine no longer reaches normal operating temperature
          (above 80 degrees). The thermostat is stuck open, coolant
          circulates through the main loop constantly. The engine stays
          cold, fuel consumption rises, and cylinder wear accelerates.
          Thermostat replacement: GBP 70 to 220 depending on engine.
        </p>

        <h2>6. <Link href="/en/codes/p0401">P0401</Link> — EGR insufficient flow</h2>
        <p>
          Classic on European diesels. The EGR valve recirculates part of
          the exhaust gases into the intake to cut NOx. Over time it
          carbons up and stops opening fully. Symptoms: power loss, black
          smoke on acceleration, engine light. Cleaning: GBP 70 to 180.
          Full replacement: GBP 350 to 800.
        </p>

        <h2>7. <Link href="/en/codes/p0340">P0340</Link> — Camshaft position sensor</h2>
        <p>
          The camshaft position sensor tells the ECU which cylinder is in
          the ignition phase. A failing sensor causes stumbling, hard
          starts, and sometimes stalls at idle. Classic causes: corroded
          connector, cut wire, or simple sensor ageing. Part: GBP 25 to
          100. Labour: 30 to 90 minutes.
        </p>

        <h2>8. <Link href="/en/codes/p0455">P0455</Link> — Large EVAP leak</h2>
        <p>
          The bigger brother of P0442. A larger leak: a broken cap, a
          disconnected or cracked pipe, or a failing purge valve. If
          reseating the cap doesn&apos;t help, inspect the rubber hoses in
          the engine bay and near the tank.
        </p>

        <h2>9. <Link href="/en/codes/p0430">P0430</Link> — Catalyst efficiency bank 2</h2>
        <p>
          The twin of P0420, but for bank 2 (on V6 or V8 engines with two
          cylinder banks and two catalysts). Same logic, same causes, same
          fixes. Audis, Mercedes and Jaguar owners see this one a lot past
          180,000 km.
        </p>

        <h2>10. <Link href="/en/codes/p0507">P0507</Link> — Idle air control higher than expected</h2>
        <p>
          Your car idles above 1,000 rpm when it should be around 750-850.
          Common causes: a dirty throttle body, an intake manifold air
          leak, or a failing MAF sensor. Cleaning the throttle body (GBP
          12 cleaner, 20 minutes of work) solves it in half of all cases.
        </p>

        <h2>How to use this list</h2>
        <p>
          When your engine light comes on, plug in an ELM327 adapter with
          AutoDiag EU and compare the code against this list. Eight times
          out of ten, you&apos;ll land on one of these ten. The app also
          gives you vehicle-specific probable causes, a country-specific
          cost estimate, and a severity indicator (drive or stop?). You
          arrive at the garage already knowing what&apos;s wrong, which
          dramatically limits the risk of an inflated quote.
        </p>

        <h2>In short</h2>
        <p>
          These ten codes cover the vast majority of check engine lights
          you&apos;ll ever see on a European car. With a GBP 12 adapter
          and the AutoDiag EU app, you get an accurate diagnosis and a
          realistic repair estimate in seconds. No more garage bill
          surprises.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

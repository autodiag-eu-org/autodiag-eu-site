import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleMOTPreparationGuide2026() {
  const faq: FaqItem[] = [
    {
      q: "What has changed for the MOT in 2026?",
      a: "The core MOT test still covers the same categories, but in 2026 emissions checks for Euro 5 and Euro 6 diesels are stricter, with tighter NOx thresholds. DPF inspection is more thorough, and matrix/LED headlight alignment is checked more carefully. OBD2 scanning of emissions monitors remains mandatory.",
    },
    {
      q: "How much does an MOT cost in the UK in 2026?",
      a: "The DVSA maximum MOT fee for a Class 4 car is GBP 54.85, but most independent garages charge between GBP 35 and 50. A retest after a fail can be free if you stay at the same garage and return within 10 working days with only partial fails resolved.",
    },
    {
      q: "Can I pass my MOT with the engine light on?",
      a: "No. If the Malfunction Indicator Lamp (MIL) is illuminated, the car fails the emissions portion of the MOT automatically. Get a diagnostic scan before booking: the light may be triggered by a simple issue like a loose fuel cap or dirty MAF sensor that you can fix in 10 minutes.",
    },
    {
      q: "How far ahead should I prepare for my MOT?",
      a: "Start three to four weeks ahead. That gives you time to fix visible defects like bulbs and wipers, and crucially, time to clear any emissions-related fault codes and let the OBD readiness monitors reset — which takes several drive cycles.",
    },
    {
      q: "What are the most common MOT failure reasons?",
      a: "The top four fail categories in the UK are: lighting and signalling (roughly 18% of fails), suspension, brakes, and tyres. Together they account for over 60% of all MOT failures. Emissions failures have risen in recent years thanks to stricter OBD-based checks.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
      locale="en"
        title="MOT preparation guide 2026 — pass first time"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={10}
        category="MOT Guide"
      >
        <p>
          Your MOT is the moment of truth for your car. In 2026 the standards
          have tightened again, especially for diesels and electronic
          systems. A first-time pass costs you around GBP 45. A fail plus
          retest and repairs can easily add GBP 200 to 400 to that bill.
          Here&apos;s exactly how to prepare your car so it sails through
          first time, without stress and without nasty surprises.
        </p>

        <h2>What has changed in 2026</h2>
        <p>
          The MOT test still uses the same categories you know: lights,
          brakes, tyres, steering, suspension, visibility, exhaust and
          emissions, body and structure, driver aids. What&apos;s getting
          stricter is the emissions side, especially for diesel vehicles.
          Since 2018, testers plug into your car&apos;s OBD2 port to check
          that all readiness monitors are set and that no emissions-related
          fault codes are active. In 2026 the tolerance is even tighter:
          codes like P0420 (catalyst efficiency), P0401 (EGR insufficient
          flow) or P2002 (DPF saturated) are essentially automatic fails.
        </p>

        <h2>OBD2 pre-scan: your best insurance</h2>
        <p>
          The first thing to do, three weeks before your MOT, is a complete
          OBD2 scan. With a Bluetooth ELM327 adapter and AutoDiag EU, you
          immediately see whether your car has any active fault codes. You
          also check the OBD readiness monitors, all of which must be
          &quot;ready&quot; on test day. If you cleared codes recently or
          disconnected the battery, some monitors may still be &quot;not
          ready&quot;, which is an automatic MOT fail.
        </p>
        <p>
          The codes to watch first are:{" "}
          <Link href="/en/codes/p0420">P0420</Link>,{" "}
          <Link href="/en/codes/p0430">P0430</Link>,{" "}
          <Link href="/en/codes/p0401">P0401</Link>,{" "}
          <Link href="/en/codes/p0402">P0402</Link>, and{" "}
          <Link href="/en/codes/p0171">P0171</Link>. These five alone
          account for the majority of emissions-related MOT failures. Spot
          them early and you&apos;ll have time to fix them properly.
        </p>

        <h2>Three-week checklist</h2>
        <p>
          Three weeks out, walk around the car and check every visible
          item. Start with <strong>lighting</strong>: dipped beam, high
          beam, sidelights, indicators front and rear, brake lights (ask
          someone to press the pedal while you watch), reverse lights,
          number plate lights, fog lights if fitted. A blown bulb is an
          automatic fail, so replace it now, not the day before.
        </p>
        <p>
          Then <strong>the wipers and washers</strong>. If the wipers
          streak or squeak, fit new blades. Check front and rear washer
          jets work. <strong>Tyres</strong>: minimum tread depth is 1.6 mm
          across the central three-quarters of the tread, all the way
          around. Check pressures against the manufacturer&apos;s plate.
          Uneven wear points to alignment or suspension issues that need
          fixing before the test.
        </p>

        <h2>One-week checklist</h2>
        <p>
          A week before the test, focus on items that need more attention.{" "}
          <strong>Brakes</strong>: do a firm stop from 40 mph on a clear
          road — the car must not pull to one side. The pedal should feel
          firm, not spongy, and the parking brake must hold on a slope. If
          the pads squeal or grind, replace them.{" "}
          <strong>Steering</strong>: no excessive play at the wheel, no
          clicking from the CV joints on tight slow turns.
        </p>
        <p>
          <strong>Interior</strong>: seatbelts retract properly, horn
          works, mirrors intact, windscreen free of cracks or chips larger
          than 10 mm in the driver&apos;s field of view (40 mm anywhere
          else). No airbag warning light should be on.
        </p>
        <p>
          <strong>Emissions</strong>: if you drive a diesel, take the car
          for a 30 to 45 minute motorway run to burn off soot accumulated
          in the DPF. This is critical if you mostly do short urban
          journeys. It regenerates the filter and improves your chances on
          the smoke test.
        </p>

        <h2>The day before and the day itself</h2>
        <p>
          The day before, clean the number plates and make sure the VIN
          stamp is legible. Empty the boot and interior of heavy items that
          might interfere with the test. Bring the V5C logbook — it makes
          identification easier at reception.
        </p>
        <p>
          On the day, start the engine 10 to 15 minutes before driving so
          it&apos;s fully warm. A cold engine means higher emissions and
          worse results on the smoke and CO tests. Drive straight to the
          test station without a detour, and avoid short trips in the 24
          hours beforehand.
        </p>

        <h2>Top MOT failure categories</h2>
        <ul>
          <li>
            <strong>Lighting and signalling</strong>: blown bulbs, misaimed
            headlights, illegal colour bulbs.
          </li>
          <li>
            <strong>Brakes</strong>: discs below minimum thickness, uneven
            braking left/right, ineffective parking brake.
          </li>
          <li>
            <strong>Emissions</strong>: active MIL with codes P0420, P0401
            or P2002, diesel smoke over limit, failing lambda sensor.
          </li>
          <li>
            <strong>Suspension and steering</strong>: worn ball joints,
            tired bushes, leaking dampers.
          </li>
          <li>
            <strong>Visibility</strong>: worn wipers, chip in the
            driver&apos;s windscreen zone, cracked mirror.
          </li>
        </ul>

        <h2>Pre-MOT mode in AutoDiag EU</h2>
        <p>
          The AutoDiag EU app has a Pre-MOT mode that mirrors the OBD checks
          a testing station will perform. It tells you whether your
          readiness monitors are set, lists all active and pending fault
          codes, and gives you a green / amber / red verdict. In two
          minutes you know whether your car is ready or whether you still
          have work to do. It supports the UK, France, Germany, Switzerland,
          Spain and Portugal, with country-specific quirks built in.
        </p>

        <h2>In short</h2>
        <p>
          A successful MOT is planned, not hoped for. Three weeks ahead for
          visible defects and an OBD pre-scan. One week ahead for brakes
          and emissions. The day before for details. Test day with a warm
          engine. With this routine plus a quick AutoDiag EU pre-scan,
          you&apos;re stacking the odds firmly in your favour and avoiding
          retests that often cost more than the MOT itself.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

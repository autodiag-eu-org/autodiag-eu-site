import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

interface FaqItem {
  q: string;
  a: string;
}

function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ArticleLayoutEN({
  children,
  title,
  date,
  author,
  readingTime,
  category,
}: {
  children: ReactNode;
  title: string;
  date: string;
  author: string;
  readingTime: number;
  category: string;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/en" },
          { label: "Blog", href: "/en/blog" },
          { label: title, href: "#" },
        ]}
      />
      <Link
        href="/en/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-cyan"
      >
        &larr; Back to blog
      </Link>

      <header className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-cyan/10 px-4 py-1 text-sm font-medium text-cyan">
          {category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
          <span>By {author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} min read</span>
        </div>
      </header>

      <div className="prose-article">{children}</div>

      <footer className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/5 p-8 text-center">
        <h3 className="mb-3 text-xl font-bold">
          Diagnose your car in 2 minutes
        </h3>
        <p className="mb-6 text-secondary">
          Download AutoDiag EU to read fault codes, listen to your engine
          with AI, and understand what&apos;s really going on under the
          bonnet. Free, no credit card required.
        </p>
        <Link
          href="/en#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Download the free app
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Article — Check engine light on: what to do?
   ================================================================ */

export function ArticleCheckEngineLightWhatToDo() {
  const faq: FaqItem[] = [
    {
      q: "Is it safe to drive with the check engine light on?",
      a: "If the light is a steady amber, yes you can drive, but book a diagnostic scan soon. If the light is flashing amber, drive gently to the nearest garage: a flashing light usually means misfires that can destroy the catalytic converter within a few dozen miles. Any red light means stop immediately.",
    },
    {
      q: "How much does a garage charge to read fault codes?",
      a: "In the UK, most garages charge between GBP 30 and 80 just to read the codes, and dealerships can go up to GBP 100. With a basic Bluetooth ELM327 adapter (from GBP 12) and the AutoDiag EU app, you can read those same codes yourself as many times as you want, for free.",
    },
    {
      q: "Will clearing the code make the problem go away?",
      a: "No. Clearing the code only resets the warning light. If the underlying cause is still there, the code will come back after 50 to 200 miles. Worse: if you clear codes right before an MOT, the tester will see that emissions monitors are not ready, and the car fails automatically.",
    },
    {
      q: "Can the check engine light turn itself off?",
      a: "Yes, in some cases. If the cause was temporary — like a loose fuel cap triggering a P0442 EVAP leak code — the light can switch off on its own after a few ignition cycles once the issue is resolved. But most fault codes need active repair before clearing.",
    },
    {
      q: "Which fault codes are the most common when the engine light comes on?",
      a: "Across European vehicles, the most common codes are P0420 (catalyst efficiency), P0171 (lean mixture), P0300 (random misfires), P0442 (small EVAP leak) and P0128 (engine coolant thermostat). Together they account for roughly 60% of all check engine light incidents.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutEN
        title="Check engine light on: what to do?"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={8}
        category="Practical Guide"
      >
        <p>
          That little amber engine symbol just appeared on your dashboard,
          and you&apos;re wondering whether to pull over, call breakdown
          recovery, or carry on driving. Good news: in 90% of cases, it
          doesn&apos;t mean your engine is about to explode. But you
          shouldn&apos;t ignore it either. Here&apos;s exactly what to do,
          step by step.
        </p>

        <h2>1. Look at the colour and behaviour of the warning light</h2>
        <p>
          The very first clue is the light itself. Check engine warnings
          come in three flavours: steady amber, flashing amber, and red. The
          right reaction depends on which one you&apos;re seeing.
        </p>
        <p>
          <strong>Steady amber:</strong> the most common case. The engine
          control unit has detected an anomaly, but it&apos;s not
          life-threatening. You can drive normally, finish your journey,
          drive home. But book a diagnostic within a few days. A small
          issue left unattended has a habit of turning into a big repair
          bill.
        </p>
        <p>
          <strong>Flashing amber:</strong> this is serious. A flashing
          engine light almost always means misfires. Every misfire dumps
          unburnt fuel into the exhaust, which overheats the catalytic
          converter. Within a few dozen miles you can literally melt the
          catalyst, turning a GBP 60 repair (spark plugs) into a GBP 1,500
          bill. Drive slowly, avoid hard acceleration, and get to a garage.
        </p>
        <p>
          <strong>Red warning light:</strong> stop. Whether it&apos;s coolant
          temperature, oil pressure, or battery, a red light means
          immediate danger for the engine. Pull over safely, switch off,
          and call for recovery.
        </p>

        <h2>2. Read the fault code</h2>
        <p>
          The warning light is just a notification — it tells you something
          is wrong, but not what. To find out, you need to read the fault
          codes stored in the car&apos;s ECU. These codes are standardised:
          they start with a letter (P for powertrain, C for chassis, B for
          body, U for network) followed by four digits. A code like P0420
          means the same thing whether you drive a Ford, a BMW or a Fiat.
        </p>
        <p>
          You have two options to read them. Option 1: take the car to a
          garage. Expect GBP 30 to 80 for a simple scan, before any
          repairs. Option 2: use a Bluetooth ELM327 adapter (from GBP 12)
          with an app like AutoDiag EU. Plug the adapter into the OBD2
          port (under the dash on the driver side), open the app, and
          within ten seconds you see every active code, explained in plain
          English, with probable causes and a realistic repair cost
          estimate.
        </p>

        <h2>3. Identify the likely cause</h2>
        <p>
          A handful of fault codes show up so often on European vehicles
          that you can almost guess them. Here are the usual suspects you
          can look up directly:
        </p>
        <ul>
          <li>
            <Link href="/en/codes/p0420">P0420 — catalyst efficiency</Link>:
            extremely common on cars over eight years old, linked to the
            oxygen sensor or the catalytic converter itself.
          </li>
          <li>
            <Link href="/en/codes/p0171">P0171 — lean fuel mixture</Link>:
            usually an air leak in the intake or a dirty MAF sensor.
          </li>
          <li>
            <Link href="/en/codes/p0300">P0300 — random misfires</Link>:
            worn spark plugs or tired ignition coils in most cases.
          </li>
          <li>
            <Link href="/en/codes/p0442">P0442 — small EVAP leak</Link>:
            very often just a loose fuel cap.
          </li>
          <li>
            <Link href="/en/codes/p0128">P0128 — coolant thermostat</Link>:
            engine not reaching normal temperature, stuck open thermostat.
          </li>
        </ul>
        <p>
          If your code matches one of these five, you&apos;re in the 60% of
          most common faults across Europe. The repair is usually cheaper
          than you expect, especially for do-it-yourself-friendly fixes
          like a fuel cap or a sensor clean.
        </p>

        <h2>4. Five things to check right now</h2>
        <p>
          Before even reading the codes, here are five things you can
          check that sometimes clear a check engine light on their own.
          First, reseat the fuel cap firmly — a loose cap accounts for up
          to 20% of check engine warnings. Next, check the oil level: too
          low can trigger a warning. Then the coolant level. Listen for
          unusual noises at idle: a hiss can mean a vacuum leak, a tick
          can mean a failing spark plug. Finally, note any recent
          changes: power loss, rising fuel consumption, rough starts.
          These clues make diagnosis far easier.
        </p>

        <h2>5. When to go to a garage</h2>
        <p>
          Anything safety-related (brakes, steering, airbags) or involving
          complex emissions systems (catalyst, DPF, a fully failed EGR
          valve) deserves a professional. But for simple jobs — spark
          plugs, dirty MAF sensor, fuel cap, coolant temperature sensor —
          a YouTube tutorial and a basic spanner set are enough. The
          classic mistake is paying GBP 300 at a garage for a repair that
          needs GBP 30 in parts and 15 minutes of work. AutoDiag EU helps
          you tell the difference: when the diagnosis says &quot;clean the
          MAF sensor&quot;, you know you can do it yourself.
        </p>

        <h2>6. How to prevent it from coming back</h2>
        <p>
          The best way to avoid a check engine light is preventive
          maintenance. Stick to oil change intervals, replace spark plugs
          every 60,000 miles or so, clean the MAF sensor once a year with
          dedicated cleaner, and use good-quality fuel. A lot of injector
          and catalyst failures come from contaminated fuel or long
          periods of disuse. A monthly AutoDiag EU scan takes two minutes
          and catches small issues before they become big bills.
        </p>

        <h2>In short</h2>
        <p>
          A check engine light isn&apos;t a death sentence. Check its
          colour, read the code, identify the cause, and act accordingly.
          With the AutoDiag EU app and a GBP 12 adapter, you have a
          professional diagnostic tool in your pocket. You save GBP 80
          every time you skip a garage scan, and you drive with full
          knowledge of what&apos;s happening under the bonnet.
        </p>
      </ArticleLayoutEN>
    </>
  );
}

/* ================================================================
   Article — How to read OBD2 codes with your phone
   ================================================================ */

export function ArticleReadOBD2CodesPhone() {
  const faq: FaqItem[] = [
    {
      q: "Which OBD2 adapter should I buy for my phone?",
      a: "For everyday use with an app like AutoDiag EU, a Bluetooth 4.0 or BLE ELM327 adapter is plenty. Avoid Wi-Fi versions — they are often less stable and hog your phone's data connection. A good adapter like the Vgate iCar Pro BLE costs GBP 22 to 35. Avoid GBP 5 ELM327 clones: poor electronics, slow communications, and no support for newer CAN protocols.",
    },
    {
      q: "Where is the OBD2 port in my car?",
      a: "In 90% of cars, the OBD2 port is under the dashboard on the driver's side, within 60 cm of the steering wheel. On some BMWs and Mercedes it may be in the centre console or behind a plastic cover. In the glovebox on certain A-Class models. Above the clutch pedal on many Renaults and Peugeots. It has been mandatory on all petrol cars sold in the EU since 2001 and diesels since 2004.",
    },
    {
      q: "iPhone or Android — which is better for OBD2?",
      a: "Both work well with a modern BLE Bluetooth adapter. Historically Android was more flexible because iOS required Wi-Fi or MFi-certified adapters. Since 2019, BLE adapters work without restriction on iPhone. AutoDiag EU is available on both platforms in beta from mid-2026.",
    },
    {
      q: "Can reading codes with a phone damage my car?",
      a: "No, provided you use a quality ELM327 adapter and a reputable app. Reading OBD2 data is a passive operation — the app queries the ECU without changing anything. Risks only appear if you use apps that force settings (coding, advanced programming) on an incompatible ECU. AutoDiag EU never does coding, only standard reading and clearing.",
    },
    {
      q: "Can I leave the adapter plugged in all the time?",
      a: "It depends on the adapter. A basic ELM327 draws 50 to 80 mA continuously, which can flatten the battery in 2 to 3 weeks if the car sits idle. Premium adapters like the Vgate iCar Pro enter auto-sleep below 3 mA. For occasional use, unplug after each session.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutEN
        title="How to read OBD2 codes with your phone"
        date="2026-04-10"
        author="Reda Kaouani"
        readingTime={9}
        category="Tutorial"
      >
        <p>
          Fifteen years ago, reading your car&apos;s fault codes required a
          GBP 2,000 diagnostic scanner and mechanical training. Today you
          can do the same thing with your smartphone and a little GBP 22
          adapter. Technology has democratised, Bluetooth OBD2 adapters
          are reliable, and apps like AutoDiag EU make reading codes
          accessible to everyone. Here&apos;s how, step by step, with zero
          technical skill required.
        </p>

        <h2>Step 1: Pick the right ELM327 adapter</h2>
        <p>
          An ELM327 adapter is a small box that plugs into the OBD2 port
          and bridges the car&apos;s ECU to your phone over Bluetooth.
          There are hundreds on the market, from GBP 5 to GBP 130. Our
          advice: aim for the middle, GBP 22 to 35. Skip the GBP 5
          marketplace ELM327 clones: cheap electronics, pirated firmware,
          unstable communications, and often incompatible with the newer
          CAN protocols used on post-2015 cars.
        </p>
        <p>
          Our pick: the Vgate iCar Pro BLE, around GBP 27. Bluetooth Low
          Energy (fully compatible with iPhone), auto-sleep so it
          doesn&apos;t flatten the battery, and supports every modern OBD2
          protocol including CAN-FD. On a tighter budget, the Vgate iCar
          2 Bluetooth classic at GBP 17 is a solid Android-only option.
        </p>

        <h2>Step 2: Find the OBD2 port</h2>
        <p>
          Every petrol car sold in the EU since 2001 (and diesel since
          2004) has a 16-pin OBD2 port. In 90% of cases it&apos;s under
          the dash on the driver&apos;s side, within 60 cm of the
          steering wheel. On some BMWs it&apos;s in the centre console or
          behind a plastic cover. On Mercedes A-Class models, sometimes in
          the glovebox. On Renaults and Peugeots, often above the clutch
          pedal. If in doubt, a quick search for your model and
          &quot;OBD2 port location&quot; gives the exact spot.
        </p>

        <h2>Step 3: Install the AutoDiag EU app</h2>
        <p>
          Download AutoDiag EU from Google Play (or the App Store from
          mid-2026). Installation takes under a minute. On first launch
          the app asks for Bluetooth and location permissions (mandatory
          on Android for BLE scanning, even though we don&apos;t track
          you). No account, no credit card, no ads. Free for code reading.
        </p>

        <h2>Step 4: Plug in and pair the adapter</h2>
        <p>
          Switch the ignition off, plug the adapter into the OBD2 port,
          then turn the ignition to position II (accessories, engine
          off). The adapter should light up (red or blue LED). In
          AutoDiag EU, tap &quot;Connect an adapter&quot;. The app scans
          nearby Bluetooth devices and offers the ELM327. Tap it, wait 3
          to 5 seconds, and it&apos;s paired. Some Android phones require
          a one-time pairing code in Bluetooth system settings (usually
          0000 or 1234).
        </p>

        <h2>Step 5: Start the engine and run a scan</h2>
        <p>
          Start the engine. AutoDiag EU auto-detects your vehicle, tests
          communication protocols (ISO 9141, KWP2000, CAN, CAN-FD), and
          reports the result. Usually 10 to 15 seconds. Then tap
          &quot;Read fault codes&quot;. The app queries the ECU and
          displays all active codes in plain English, with severity and a
          realistic repair cost estimate.
        </p>
        <p>
          If you hit a <Link href="/en/codes/p0420">P0420</Link>, a{" "}
          <Link href="/en/codes/p0171">P0171</Link>, a{" "}
          <Link href="/en/codes/p0300">P0300</Link>, a{" "}
          <Link href="/en/codes/p0442">P0442</Link> or a{" "}
          <Link href="/en/codes/p0128">P0128</Link>, you&apos;re in the
          top five most common codes in Europe — which is actually good
          news because the causes are well known and the fixes are
          often affordable.
        </p>

        <h2>Step 6: Read live data</h2>
        <p>
          AutoDiag EU doesn&apos;t stop at fault codes. You can also view
          live data: engine rpm, vehicle speed, coolant temperature,
          battery voltage, engine load, and many more parameters. For
          deeper diagnosis, watching these values while the engine runs
          often tells you more than the codes themselves. For example, a
          coolant temperature that never climbs above 70 degrees is a
          stuck thermostat, even without an active P0128 yet.
        </p>

        <h2>Step 7: Clear codes (carefully)</h2>
        <p>
          Once you&apos;ve identified and repaired the issue, you can
          clear the code to turn off the warning light. AutoDiag EU offers
          this feature behind a warning: clearing a code without fixing
          the cause is pointless, and clearing before an MOT will fail
          the test. Only do it after a real repair, and drive 50 miles to
          confirm the code stays gone.
        </p>

        <h2>Total cost?</h2>
        <p>
          GBP 22 for the adapter plus a free app = GBP 22 for a lifetime
          diagnostic tool. Compare that to the GBP 30 to 80 a garage will
          charge for a single scan. After the second use, you&apos;ve
          broken even. After the fifth, you&apos;re saving hundreds of
          pounds. And crucially, you arrive at the mechanic already
          knowing what&apos;s going on, which flips the power dynamic on
          quotes.
        </p>

        <h2>In short</h2>
        <p>
          Reading OBD2 codes with your phone is now within reach of
          everyone. A GBP 22 adapter, the AutoDiag EU app, and five
          minutes. No more excuses for not understanding your own car.
        </p>
      </ArticleLayoutEN>
    </>
  );
}

/* ================================================================
   Article — Top 10 most common fault codes in Europe
   ================================================================ */

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
      <ArticleLayoutEN
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
      </ArticleLayoutEN>
    </>
  );
}

/* ================================================================
   Article — MOT preparation guide 2026
   ================================================================ */

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
      <ArticleLayoutEN
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
      </ArticleLayoutEN>
    </>
  );
}

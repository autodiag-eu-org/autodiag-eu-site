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

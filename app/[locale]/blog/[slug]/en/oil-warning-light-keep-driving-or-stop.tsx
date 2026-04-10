import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleOilWarningLight() {
  const faq: FaqItem[] = [
    {
      q: "Red or amber? How do I tell the two oil lights apart?",
      a: "RED: red oil can icon or STOP text — this is an oil pressure alert. You must stop immediately, turn off the engine, and do not restart without a proper check. AMBER: yellow oil can or OIL CHANGE text — this is a service reminder, no emergency, you can drive normally to the garage.",
    },
    {
      q: "How long can I drive with the red light on?",
      a: "Zero minutes. Every second of rotation without oil pressure destroys the bearings, cylinder head and pistons. The engine can grenade in under 30 seconds on a total circuit failure. Stop immediately, let it cool, check the level, and if the level is correct, get it towed. Never try to drive home.",
    },
    {
      q: "What if the oil level is fine but the red light stays on?",
      a: "That's a serious situation. It means the circuit no longer pressurises: failed oil pump, blocked pickup, stuck regulator valve, or abnormal real pressure. The sensor itself can also be faulty (lucky case). Don't risk driving to check — get it towed and diagnosed. Fixing a pump costs 180 to 500 GBP, fixing a grenaded engine costs 10 to 30 times that.",
    },
    {
      q: "How often should I check the oil level?",
      a: "Once a month minimum, once a week if the car consumes oil. Cold engine, level ground, wait 5 minutes after stopping so the oil drains back. The level should be between the min and max marks on the dipstick. A gap larger than 1 litre between two monthly checks is abnormal and deserves a diagnosis.",
    },
    {
      q: "Can I top up with a different oil in an emergency?",
      a: "Yes, a slightly different oil is better than no oil at all. Try to match the grade (5W30 stays best) but do not let the situation escalate over a brand. After the emergency top-up, do a full oil change at the next service to restore exact specifications.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Oil warning light: keep driving or stop immediately?"
        date="2026-04-15"
        author="Reda Kaouani"
        readingTime={9}
        category="Diagnostic"
      >
        <p>
          The oil warning light is the only light where the right
          response depends entirely on its colour. Confusing red and
          amber can cost between 4500 and 13000 GBP in repairs, or
          even total engine loss. This guide teaches you to tell them
          apart in two seconds and react correctly in each case.
        </p>

        <h2>Red light: mandatory immediate stop</h2>
        <p>
          The red light shows a red oil can or an icon with the word
          STOP. Its meaning: oil pressure is insufficient to lubricate
          the engine properly. It can come from a very low level, a
          failed pump, a blocked pickup, or a faulty sensor. In the
          first three cases, every second counts. Crankshaft and
          camshaft bearings run on a 10-micron oil film. Without that
          film, metal grinds on metal and parts destroy themselves in
          tens of seconds.
        </p>

        <h2>The 5-step emergency procedure</h2>
        <p>
          Step 1: indicate, pull over safely. Step 2: immediately
          turn off the engine. Step 3: let it cool for 5 to 10
          minutes. Step 4: check oil level on the dipstick. Step 5:
          if the level is below minimum, top up to maximum and
          briefly restart to see if the light goes out. If yes, drive
          carefully to the garage. If no, or if the level was already
          correct, get the car towed.
        </p>

        <h2>Amber light: no emergency, just a reminder</h2>
        <p>
          The amber light, often accompanied by OIL CHANGE or
          SERVICE text, is simply a service reminder based on
          mileage or duration. It indicates absolutely no mechanical
          problem. You can continue driving normally and book an
          appointment with your garage in the coming weeks. An oil
          service typically costs between 50 and 130 GBP for a
          standard car.
        </p>

        <h2>Typical causes of a red light</h2>
        <p>
          Very low oil level: the most common trigger, often due to
          a progressive consumption that was ignored. Tired oil
          pump: 180 to 500 GBP replacement. Blocked pickup from
          deposits or carbon: often linked to oil that was left too
          long or a suffering engine. Faulty pressure sensor: 35 to
          130 GBP, the most reassuring scenario. Stuck regulator
          valve: 130 to 350 GBP.
        </p>

        <h2>Consequences of driving without pressure</h2>
        <p>
          After 30 seconds: beginning of bearing seizure. After 2
          minutes: cylinder scoring. After 5 minutes: probable rod
          failure. Damage is irreversible. What was a 400 GBP pump
          job becomes a 4500 GBP engine job minimum, sometimes more.
          It is the most expensive fault tied to a simple human
          mistake: continuing to drive with the red light on.
        </p>

        <h2>Oil consumption, an early warning</h2>
        <p>
          A car using more than half a litre per 600 miles is trying
          to tell you something. Common causes: worn piston rings,
          valve stem seals, turbo leaking into the intake, early
          head gasket. A monthly level check prevents surprises.
          Sound scanning can detect some of these wears before they
          become visible. See{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            the 11 engine faults detectable by sound
          </Link>
          .
        </p>

        <h2>Active prevention</h2>
        <p>
          Respect manufacturer service intervals. Use oil that meets
          specifications (ACEA, API, manufacturer approvals). Check
          the level at least once a month, more before a long trip.
          Keep a bottle of the correct grade in the boot — it can
          save an engine. See also{" "}
          <Link href="/en/blog/check-engine-light-what-to-do">
            check engine light: what to do
          </Link>{" "}
          and{" "}
          <Link href="/en/codes/p0011">the P0011 code</Link> on
          variable valve timing, which can accompany oil problems.
        </p>

        <h2>Special case: light on at startup</h2>
        <p>
          Many cars light all warnings for 2 seconds at startup to
          test the bulbs. The red oil light goes out as soon as the
          engine runs. If it stays on more than 3 seconds after
          startup, treat it as an active warning and apply the
          emergency procedure. Don't hesitate, don't wait, don't
          drive to test.
        </p>

        <h2>The reflex that saves engines</h2>
        <p>
          Red colour = immediate stop. Amber colour = appointment
          within the week. If you remember one thing from this
          article, let it be that. This rule has saved more engines
          than any diagnostic technology.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

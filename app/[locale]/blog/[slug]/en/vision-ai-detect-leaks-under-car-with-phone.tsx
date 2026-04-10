import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleVisionLeaksUnderCar() {
  const faq: FaqItem[] = [
    {
      q: "How does Vision AI tell an oil leak apart from a coolant leak?",
      a: "The model analyses three signals at once: the colour of the stain (brown-black for engine oil, green/orange/pink for coolant), the estimated viscosity from the halo shape, and the position under the vehicle. A bright green puddle in front of the engine bay is coolant at 95% confidence. A brown-black one under the block is engine oil.",
    },
    {
      q: "How big does the stain have to be before I worry?",
      a: "Under 2 cm it is a weep — worth watching but not urgent. Between 2 and 10 cm your seal or hose is properly tired; book a workshop slot within a fortnight. Above 10 cm, or if the stain returns within a few hours, do not drive: call recovery.",
    },
    {
      q: "Can I still drive if I see one drop a day under the car?",
      a: "Usually yes, but check the affected level every few days. One drop of oil a day adds up to about 30 ml a month — top up accordingly. If it is brake fluid, stop driving immediately. The brake circuit tolerates no loss.",
    },
    {
      q: "Should I put anything under the car for the scan?",
      a: "A plain A4 white cardboard on the ground before you park overnight is perfect. In the morning you photograph the cardboard: the AI handles contrast far better on a light background and measures the stain precisely.",
    },
    {
      q: "Does Vision AI replace a trip to the garage?",
      a: "No, it prepares one. It tells you what is leaking, where and how badly, then points you to the right repair. The mechanic is still needed for the fix, but you walk in with a clear file instead of an open chequebook.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Vision AI: spot the leak under your car with just a phone"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Vision AI"
      >
        <p>
          You roll the car off the drive on a Tuesday morning and spot a
          shiny patch on the concrete. Your first instinct is to squint and
          ask yourself whether it was there yesterday. Your second instinct,
          from now on, should be to pull out your phone. The Vision AI in
          AutoDiag EU identifies what is leaking, from where, and how badly
          in a couple of seconds. No mechanic training, no sniffing, no
          dipping a finger in the puddle.
        </p>

        <h2>A photo that counts as a diagnosis</h2>
        <p>
          The principle is simple: you photograph the stain on the ground
          and the app analyses three dimensions in parallel. Colour first,
          recalibrated for ambient light. Texture and estimated viscosity
          second, inferred from the shape of the edge and the halo. Location
          under the vehicle third — you tell the app roughly where the left
          front wheel sits, and the model triangulates the likely source
          point.
        </p>

        <h2>The colour catalogue of car fluids</h2>
        <p>
          Every fluid in a car has a signature. Engine oil starts amber when
          new and drifts to brown-black after a few thousand miles: the
          stain is greasy, dense, and always falls under the block. Coolant
          comes in fluorescent green, orange, pink or yellow depending on
          the chemistry (IAT, OAT, HOAT) — it is watery, slightly sweet in
          smell, and sits near the radiator or hose runs. Brake fluid is
          clear to pale yellow, very thin, and leaks near the wheels or
          master cylinder. Automatic transmission fluid is cherry red when
          fresh, brown when aged. Power steering is reddish amber.
          Screenwash is pale blue. That is the whole palette.
        </p>

        <h2>Severity by flow rate</h2>
        <p>
          Two identical looking stains do not tell the same story. A ten
          centimetre pool after eight hours parked is a serious alert:
          count on roughly 200 ml lost overnight. The same size accumulated
          over three weeks is a weep. That is why the app asks you how long
          the car has been parked. Using that figure, it works out a flow
          rate in millilitres per hour and classes it into four tiers:
          weep, slow leak, moderate leak, critical leak.
        </p>

        <h2>Catch the seal before the catastrophe</h2>
        <p>
          Early detection is not cosmetic — it is financial. A crankshaft
          front seal that starts to weep costs 160 to 320 GBP to replace.
          Ignore it for six months and the oil drips onto the flywheel and
          clutch: the bill jumps to 1250 GBP. A radiator hose that seeps
          costs 50 GBP of labour. The same hose that blows on the
          motorway overheats the engine and lifts the head gasket: 1800
          GBP minimum. Vision AI hands you a week or two of lead time,
          which is everything.
        </p>

        <h2>Drive, or call recovery?</h2>
        <p>
          The system ends each scan with a clear recommendation. Weep:
          drive normally, book the garage this week. Slow leak: check the
          level before every trip, repair within two weeks. Moderate leak:
          essential trips only, workshop within 48 hours. Critical brake
          fluid or major coolant loss: do not drive, recovery truck. It is
          the same logic as the{" "}
          <Link href="/en/codes/p0128">P0128 code</Link> that flags a
          sticking thermostat — anticipating is always cheaper.
        </p>

        <h2>What the photo cannot do</h2>
        <p>
          Vision AI identifies the fluid and the severity, but it does not
          replace a full mechanical diagnosis. It will not tell you which
          specific seal has failed — a lift inspection is needed for that.
          It misses internal leaks that never reach the ground, like a
          head gasket pushing coolant into the oil gallery. For those
          cases the{" "}
          <Link href="/en/blog/your-engine-speaks-ai-fault-detection-by-sound">
            engine sound scan
          </Link>{" "}
          takes over: it catches the micro-knocks a hidden leak creates on
          the bearings.
        </p>

        <h2>The protocol that actually works</h2>
        <p>
          Here is the method that gives the best results: park the car on
          a light, smooth, dry surface. If the floor is dark, slip a plain
          A4 white cardboard underneath before you switch off. Leave it at
          least two hours, ideally overnight. In the morning, crouch a
          metre from the stain, frame it with a ground reference (a coin,
          a key) for scale. Run the scan. Three seconds later you know
          what is leaking. Repeat the same photo a week later to track the
          evolution — the only reliable way to tell a stable weep from a
          leak that is getting worse.
        </p>

        <h2>Pair it with the monthly checkup</h2>
        <p>
          Leak detection is the first step of a{" "}
          <Link href="/en/blog/ai-visual-checkup-5-points-healthy-vehicle">
            five point visual checkup
          </Link>{" "}
          you can run in five minutes a month. The others: tyre wear, pad
          depth through the spokes, fluid levels under the bonnet,
          external lighting. If you also run an OBD2 dongle, watch out for
          the <Link href="/en/codes/p0420">P0420 code</Link> which often
          accompanies an oil drip that has reached the catalytic converter.
          Vision and Sound Scan complement each other.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

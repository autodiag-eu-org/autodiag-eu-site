import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleFluidColourReveals() {
  const faq: FaqItem[] = [
    {
      q: "Why do car fluids have different colours?",
      a: "Each fluid has a specific job and chemistry that either creates the colour naturally or has it added deliberately. Engine oil turns brown through oxidation. Coolant is dyed so leaks stand out. Brake fluid stays almost clear to remain chemically neutral. Those colours are a priceless diagnostic clue.",
    },
    {
      q: "Is a cherry-red stain always automatic transmission fluid?",
      a: "Almost always. ATF is dyed cherry red when new specifically to set it apart from anything else. Power steering fluid can share that shade with a slightly more amber hue. Position under the car decides it: centre equals gearbox, near the steering rack equals power steering.",
    },
    {
      q: "My coolant is turning brown — is that serious?",
      a: "Yes. Coolant that goes brown has been contaminated by internal rust deposits (radiator, block) or mixed with oil if a head gasket is starting to go. Either way it is an alert: flush and inspect quickly.",
    },
    {
      q: "Clear brake fluid can still be bad?",
      a: "Absolutely. Fresh brake fluid is clear to pale yellow, but it absorbs moisture over time and darkens progressively. Dark brown brake fluid has lost its properties and must be replaced even if there is no visible leak.",
    },
    {
      q: "Can blue screenwash be confused with another fluid?",
      a: "Rarely. The bright blue of screenwash is very distinctive. Some antifreeze coolants are blue too but darker and denser. If in doubt, location decides: screenwash leaks near the front reservoir or, on cars with rear washers, under the boot.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Oil, brake fluid or coolant leak: the colour reveals the fault"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={10}
        category="Visual Diagnostic"
      >
        <p>
          Every fluid in your car has its own chemical history. Those
          histories read through colour, texture and smell. A good
          mechanic can identify a leak in three seconds just from looking
          at the stain. The Vision AI in AutoDiag EU learned the same
          language by studying thousands of annotated images. In this
          article I will walk you through the complete catalogue, why
          each fluid is that colour, and what a leak really tells you
          about the health of your vehicle.
        </p>

        <h2>Engine oil: the memory of time passing</h2>
        <p>
          Straight out of the bottle, engine oil is golden, almost amber,
          with marked transparency. After about a thousand miles in the
          engine it starts to darken: combustion residues, carbon
          particles, and tiny metal wear traces give it that
          characteristic brown-black tint. An engine oil leak on the
          ground is therefore almost always brown, with medium viscosity:
          it spreads slowly and leaves a greasy halo. The drip point is
          nearly always under the block or the sump. Typical repair
          cost: sump gasket 70 to 160 GBP, crank front seal behind the
          timing cover 220 to 400 GBP, rocker cover gasket 110 to 200
          GBP.
        </p>

        <h2>Coolant: the colourful chameleon</h2>
        <p>
          Formulations vary between makers and vintages. Older IAT
          (Inorganic Additive Technology) coolants are fluorescent
          green, still found on older Peugeots and Citroens. OAT
          (Organic Acid Technology) coolants are orange or pink: VW's
          G12+ pink, GM's Dex-Cool orange. HOAT (Hybrid Organic Acid
          Technology) blends the two: yellow or turquoise. Each colour
          signals a different chemistry, and mixing families causes a
          gel that ruins the cooling circuit. Vision AI recognises the
          colour, identifies the family, and warns you if there is a
          mismatch with your car. Viscosity is low (almost like water),
          smell is faintly sweet. Typical location: front of the engine
          or below the radiator.
        </p>

        <h2>Brake fluid: the lethal clear one</h2>
        <p>
          A brake fluid leak is the only one that orders an immediate
          stop. New, it is clear to pale yellow, very thin, with a
          slightly chemical smell. Used, it darkens towards brown
          because it absorbs moisture (it is hygroscopic — that is its
          job). A leak sits near a wheel (wheel cylinder or caliper),
          under the master cylinder in the engine bay, or along a brake
          line. Risk: loss of circuit pressure and progressive loss of
          braking. Cost: anything from 35 GBP for a bleed to 260 GBP for
          a full caliper. Vision AI picks up the near-transparent shade
          and auto-classifies it as a critical alert. Whenever brake
          fluid is identified, the recommendation is always: do not
          drive, call recovery.
        </p>

        <h2>Automatic transmission: red turning brown</h2>
        <p>
          ATF is dyed cherry red when new specifically to be
          recognisable. Contaminated, aged or overheated, it drifts to
          an unappetising reddish brown. The smell then turns burnt — a
          dead giveaway that your torque converter has been cooking. An
          ATF leak is rare but severe: hunting gearbox, slow shifts,
          judder. Cost: 260 to 520 GBP for a gearbox seal, 130 to 220
          GBP for a service, 2200 to 4000 GBP for a full gearbox. See
          also how the{" "}
          <Link href="/en/blog/car-diagnostic-app-vs-garage-uk">
            app diagnosis stacks up against the garage
          </Link>
          .
        </p>

        <h2>Power steering: the discreet amber</h2>
        <p>
          Some cars (older BMWs, Mercedes, Renaults) use hydraulic power
          steering with a reddish amber fluid. Lighter than ATF, denser
          than brake fluid. A leak sits under the rack or near the
          pump. You feel it at the wheel: heavy steering, a groan when
          turning lock to lock. Cost: 100 to 250 GBP for a seal, 350 to
          800 GBP for a rack. Vision AI separates it from ATF using
          location under the car: rack equals steering, centre equals
          gearbox.
        </p>

        <h2>The rest: screenwash, LPG, AdBlue</h2>
        <p>
          Screenwash is pale blue or pink depending on the season, very
          thin, lemon or alcohol smell. Harmless unless your reservoir
          takes a knock. AdBlue, on Euro 6 diesels, is clear but leaves
          white crusts as it dries (it is urea). An AdBlue leak causes
          a{" "}
          <Link href="/en/codes/p0300">P0300 and sometimes P0420</Link>{" "}
          as the SCR catalyst loses efficiency. LPG leaks in gas phase
          and is not visible on the ground — Vision AI will not detect
          it, you need a nose or a workshop check.
        </p>

        <h2>The decision tree</h2>
        <p>
          When you are unsure between two fluids, Vision AI runs through
          a decision tree. First question: what is the dominant colour?
          Brown-black equals oil, almost certain. Red equals ATF or
          power steering. Green / orange / pink equals coolant, almost
          certain. Clear equals brake fluid or screenwash. Second
          question: where is the stain under the car? Centre equals
          gearbox or steering. Block equals engine. Wheel equals brake.
          Front low equals radiator. Third question: how long has the
          car been parked? That number gives flow rate. The three
          answers converge on a diagnosis with a confidence score.
          Above 85% the AI states the answer. Between 60 and 85 it
          offers two hypotheses and asks you to verify (smell, texture
          by touch). Below 60 it points you straight to a garage. For
          more, read the companion article on{" "}
          <Link href="/en/blog/vision-ai-detect-leaks-under-car-with-phone">
            leak detection under the car
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

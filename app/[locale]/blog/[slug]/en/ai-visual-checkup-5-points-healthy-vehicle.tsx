import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleVisualCheckup5Points() {
  const faq: FaqItem[] = [
    {
      q: "How long does the five-point visual checkup take?",
      a: "Five minutes if you follow the protocol, ten if you are learning. The app guides you point by point, recognises each shot and confirms when the image is usable. That is less time than filling up with petrol.",
    },
    {
      q: "How often should I run the checkup?",
      a: "Once a month for daily drivers. Every fortnight if you cover high mileage or your car is over twelve years old. Before a long trip it is the most profitable five minutes you will ever spend — catch a problem that would have ruined your journey.",
    },
    {
      q: "Do I need any special kit?",
      a: "Just a phone and a torch for darker zones (the phone torch is fine). A plain A4 white cardboard helps with the leak check but is not mandatory. No mechanical tools, no dismantling.",
    },
    {
      q: "What happens to my photos?",
      a: "They are processed on the server, the diagnosis is returned, then the images are deleted within 48 hours unless you explicitly allow them to be kept for model improvement. You only keep the report, not the pictures.",
    },
    {
      q: "Does the checkup catch everything?",
      a: "It catches what is visible from the outside. Electronic faults and internal engine problems need an OBD2 scan or a sound scan to surface. The three technologies complement each other and together they cover more than 90% of common faults.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="AI visual checkup in five points: keeping your vehicle healthy"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Prevention"
      >
        <p>
          The best breakdown is the one you caught before it became a
          breakdown. That is not a slogan, it is an economic truth: an
          anticipated repair costs on average four times less than an
          emergency one. The problem is that most drivers have no idea
          what to look at, or when. The five-point visual checkup is the
          routine we designed to answer exactly that: five minutes, five
          zones, a phone, and Vision AI doing the expert work.
        </p>

        <h2>Point 1: the ground under the car</h2>
        <p>
          Park on a light, dry surface and wait at least two hours.
          Crouch a metre from the front of the car and photograph the
          area below the engine block. Then the area below the gearbox.
          The AI looks for three things: a visible stain, a difference
          against previous photos, an unusual colour. If nothing appears
          you move to point 2 in ten seconds. If something appears, you
          get the full breakdown: probable fluid, severity, recommended
          action. This step is covered in depth in the{" "}
          <Link href="/en/blog/vision-ai-detect-leaks-under-car-with-phone">
            leak detection article
          </Link>
          .
        </p>

        <h2>Point 2: the tyres</h2>
        <p>
          One photo per tyre, perpendicular to the tread. The model
          measures residual depth in the grooves, detects abnormal wear
          patterns (centre, shoulders, edges, cupping), compares with
          history and alerts you if one tyre drifts away from the
          others. This step pays back the fastest: a chronically
          underinflated tyre spotted early saves you a 200 GBP premature
          replacement. For the detail, see the{" "}
          <Link href="/en/blog/premature-tyre-wear-ai-sees-what-you-dont-notice">
            premature tyre wear article
          </Link>
          .
        </p>

        <h2>Point 3: brake pads through the spokes</h2>
        <p>
          Turn the wheel full lock to expose the front-right pad, slip
          the phone between the spokes, switch on the torch, take the
          shot. Same on the left. Vision AI measures residual friction
          material, detects scoring on the disc (striated surface),
          early glazing, and the bluish tint that gives away overheating.
          A pad below 3 mm triggers a red alert: you have roughly 1200
          miles of life left. A pad at 6 mm is green. That precise
          measurement saves long-trip surprises. Full detail in the{" "}
          <Link href="/en/blog/brake-pad-disc-wear-vision-ai-detects">
            brake pad and disc wear article
          </Link>
          .
        </p>

        <h2>Point 4: under the bonnet</h2>
        <p>
          Open the bonnet. Take four photos: the oil dipstick pulled out
          to check level, the coolant expansion tank, the brake fluid
          reservoir, and a general view of the visible drive belts. The
          AI measures levels via the fluid position in the translucent
          tanks, spots early cracking on accessory belts, detects any
          seeping trace on a hose. If your coolant has shifted from
          bright green to a rust brown, that is a contamination alert.
          If your oil is opaque on the dipstick, the service is
          overdue. Four photos, four checks.
        </p>

        <h2>Point 5: exterior lighting</h2>
        <p>
          Ask someone to switch on dipped beam, main beam, indicators
          and brake lights in turn. For brake lights, a foot on the
          pedal is enough if you are alone. Take a front shot, a
          three-quarter shot and a rear shot. The AI counts active light
          sources, detects a blown bulb, flags asymmetric output (one
          headlight noticeably yellower than the other means an
          end-of-life bulb). A blown bulb is an MOT failure item and the
          easiest thing to fix before the test.
        </p>

        <h2>The consolidated report</h2>
        <p>
          At the end of the five points, the app generates a single
          report with a colour code: green if everything is fine, amber
          if a point needs watching, red if a point demands action. The
          report is archived in the vehicle's history. Month after
          month, you see the curves: tread depth falling, pad thickness
          dropping, levels wobbling. The day a curve tips into the
          abnormal, you are warned before you notice anything yourself.
        </p>

        <h2>The 90% combo</h2>
        <p>
          The visual checkup is not a standalone tool. It is part of a
          triad: Vision AI for the exterior, sound scanning for noises
          (see{" "}
          <Link href="/en/blog/11-engine-faults-detectable-by-sound-analysis">
            the 11 faults detectable by sound
          </Link>
          ), OBD2 scanning for the electronics (see{" "}
          <Link href="/en/codes/p0171">
            P0171 and the lean mixture codes
          </Link>
          ). All three together cover more than 90% of common faults on
          European cars in their early phase, where repairs are still
          affordable. Five minutes a month on visual, three minutes on
          sound, two minutes on electronic. Ten monthly minutes that
          save about 700 GBP a year according to our field feedback.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

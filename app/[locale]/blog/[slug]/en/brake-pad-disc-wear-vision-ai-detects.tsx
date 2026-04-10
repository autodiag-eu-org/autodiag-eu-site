import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleBrakePadDiscWearVision() {
  const faq: FaqItem[] = [
    {
      q: "How do you measure pad thickness without taking the wheel off?",
      a: "Vision AI photographs the pad through the spokes of the wheel with the phone torch on. It measures the visible portion of the friction material with a tolerance of plus or minus 0.5 mm by calibrating on the disc diameter it detects in the image. That precision holds as long as the shot is sharp and well lit.",
    },
    {
      q: "At what thickness should brake pads be changed?",
      a: "A new pad is 10 to 12 mm thick. At 4 mm you should plan the change within three months. At 3 mm the wear indicator will soon rub the disc and start squealing. At 2 mm you are riding the metal backing plate, which ruins the disc: immediate change and probably a disc replacement at the same time.",
    },
    {
      q: "What is a scored or warped disc?",
      a: "A healthy disc is smooth and shiny with a few fine striations. A scored disc shows deep grooves caused by pads worn through to the backing plate. A warped disc is deformed, causing pedal pulsation under braking. Vision AI picks up both defects from a single photo.",
    },
    {
      q: "What does a blue tint on a disc mean?",
      a: "Blueing appears when the disc has suffered severe overheating. High-temperature oxidation of the metal produces that blue-violet colour. It is the signature of a seized caliper, a blocked brake hose, or very intensive mountain driving. The disc must be replaced because its mechanical properties are altered.",
    },
    {
      q: "How much does a pad and disc replacement cost?",
      a: "A mid-range set of front pads costs between 55 and 110 GBP. A front disc set between 80 and 180 GBP. Labour adds 70 to 130 GBP per axle. Realistic total: 220 to 400 GBP on the front, slightly less on the rear. Anticipating lets you shop around instead of accepting an emergency quote.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Brake pad and disc wear: what Vision AI detects through the spokes"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Vision AI"
      >
        <p>
          Brakes are the most important part of your car — more than the
          engine, more than the gearbox, more than the suspension.
          Because a failed brake equals an accident. The trouble is that
          nobody really looks at their pads. You drive, you brake, you
          wait for the squeal. That squeal turns up too late: by the
          time you hear it you have probably already scored the disc.
          Vision AI solves exactly that: it measures your pad without
          removing anything, by photographing it through the wheel
          spokes. A few seconds per wheel, and you know where you stand.
        </p>

        <h2>The shot that works</h2>
        <p>
          Turn the steering all the way right to expose the front-left
          pad. The vertical face of the pad is then accessible between
          two spokes. Switch on the phone torch, position the lens
          between the spokes, hold steady, take the shot. Repeat on the
          opposite wheel. The app recognises the geometry of a caliper,
          isolates the pad in the image, measures the visible height of
          the friction material in pixels, then converts to millimetres
          by calibrating on the disc diameter it detects along the way.
        </p>

        <h2>The measurement hierarchy</h2>
        <p>
          A new pad has 10 to 12 mm of friction material. At 6 mm you
          are at the midpoint and the indicator goes green. At 4 mm it
          turns amber: plan the change within three months. At 3 mm the
          internal wear indicator starts touching the disc and you are
          about to hear the characteristic squeal — the app shows a red
          alert. At 2 mm or less it becomes critical: the friction is
          dangerously close to the steel backing plate which, once in
          contact with the disc, will score it within a few miles. The{" "}
          <Link href="/en/blog/brake-squealing-normal-wear-or-danger">
            brake squealing article
          </Link>{" "}
          covers the audible side in depth.
        </p>

        <h2>The disc: the forgotten half</h2>
        <p>
          A common mistake: drivers change their pads but keep the old
          discs. Sometimes that is wrong. Vision AI also analyses the
          disc visible in the shot and detects three defects. First:
          deep scoring. If the disc surface shows sharp grooves, the
          previous pad wore through to metal and the disc can no longer
          be skimmed. Second: warping. A warped disc causes pedal
          pulsation under braking. Photo analysis does not measure
          warpage directly, but it catches the asymmetric wear traces
          it leaves. Third: blueing. When a disc has heated enough to
          turn blue, its crystalline structure has shifted and it must
          be replaced even if it looks smooth.
        </p>

        <h2>The context behind the measurement</h2>
        <p>
          Vision AI does not stop at the raw measurement. It reads
          context too. A lightly glazed pad shows a smooth varnished
          surface, sometimes with glossy reflections: that is a pad that
          has overheated, often because of a caliper that is partially
          seized. A marked difference in wear between the inner and
          outer pad signs a caliper piston that no longer retracts
          properly. Asymmetric wear between left and right on the same
          axle points to a hydraulic problem or a brake hose swelling
          under pressure. All those anomalies end up in the report with
          their mechanical interpretation.
        </p>

        <h2>The link with brake noise</h2>
        <p>
          Vision AI catches what is visible, the{" "}
          <Link href="/en/blog/brake-squealing-normal-wear-or-danger">
            brake noise sound scan
          </Link>{" "}
          catches what is audible. Together they cover 95% of brake
          problems. If you see a pad at 4 mm and you already hear a
          cyclic squeal, you are beyond normal use: there is probably
          a caliper or piston component involved. If you see a pad at 5
          mm with no noise, you still have three to four months ahead
          to plan the change calmly.
        </p>

        <h2>Remaining life projection</h2>
        <p>
          With the history of successive measurements, the app
          calculates your wear rate in millimetres per thousand miles.
          That rate varies hugely with driving style: a city driver
          burns 1.5 mm per 6000 miles, a motorway commuter 0.7 mm per
          6000 miles, a mountain driver can exceed 2 mm per 6000 miles.
          Once your personal rate is known, the app projects when you
          will hit 3 mm, then 2 mm. You plan ahead, shop around,
          choose your workshop without urgency.
        </p>

        <h2>The real savings</h2>
        <p>
          Anticipating a pad change saves you on two fronts. First, an
          emergency drop-off with vehicle downtime costs 25 to 50 GBP
          more than a planned appointment. Second, if you wait too long
          and score the disc, you go from a 90 GBP pad job to a 220 GBP
          pad-plus-disc job, with labour nearly doubled. Over four
          years of typical use in the UK, that comes out to 250 to 500
          GBP saved on brakes alone. Combine that with{" "}
          <Link href="/en/blog/how-to-prepare-car-for-mot">
            proper MOT preparation
          </Link>{" "}
          and a regular OBD2 scan (watch the{" "}
          <Link href="/en/codes/p0325">P0325 knock sensor code</Link>{" "}
          which can signal abnormal heat in the system), and you have
          the complete equation: Vision AI + sound scan + OBD2 equals a
          car without nasty surprises.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

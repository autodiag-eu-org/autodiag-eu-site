import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleCorrosionVisionAI() {
  const faq: FaqItem[] = [
    {
      q: "What is the difference between surface rust and structural rust?",
      a: "Surface rust is a brown oxidation confined to the top skin of the metal: it brushes off and is fixed with a rust converter. Structural rust eats into the thickness of the panel, causes perforations, weakens the part and becomes an MOT failure item. Vision AI grades each photo into four levels so you know whether you have six months to act or zero.",
    },
    {
      q: "Which areas should I photograph first?",
      a: "The rust triangle on European cars: sills, rear wheel arches, floor pan, rear beam, subframe bushes, and every suspension mounting point. Add the steel brake lines running along the chassis: a spot of deep corrosion on a brake line is an instant MOT fail.",
    },
    {
      q: "Is my 15-year-old car doomed to fail?",
      a: "No. Plenty of 15 to 20 year old cars sail through the MOT if corrosion is kept under review. The trouble starts when it has been ignored. A Vision AI check every six months catches progression early and turns a 600 GBP repair into an 80 GBP treatment.",
    },
    {
      q: "Is blistering paint always active rust underneath?",
      a: "In 95% of cases, yes. A paint blister means a rust spot beneath it is swelling and lifting the coat. Vision AI picks up even tiny blisters, sometimes invisible to the naked eye, by analysing tone and reflection changes on the painted surface.",
    },
    {
      q: "Can I treat detected rust myself?",
      a: "Level 1 (surface), yes: wire brush, rust converter, rust-inhibiting paint, around 35 GBP of materials. Level 2 and above, or any structural zone (chassis rail, suspension mount), should be handled by a competent body shop.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Detect corrosion with Vision AI before your MOT"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Prevention"
      >
        <p>
          Rust is the silent killer of European cars. In the UK, France,
          Germany, Belgium and Switzerland, winter and road salt work on
          your underbody while you drive. A rust spot the size of a
          two-pound coin can, in eighteen months of neglect, become the
          perforation that fails your MOT. Vision AI in AutoDiag EU picks
          up those early pockets long before they become irreversible.
        </p>

        <h2>Why early detection changes everything</h2>
        <p>
          Rust progresses exponentially. A first oxidation spot creates a
          micro-porosity that traps moisture, which extends the
          corrosion, which widens the porosity. In six months you double
          the affected area. In eighteen months you go from surface rust
          (treatable with 35 GBP of products) to structural rust (cutting
          and welding, 350 to 1300 GBP). The day you see it with the
          naked eye closing the boot, it is already late. Vision AI sees
          the first millimetre-scale spots.
        </p>

        <h2>The rust triangle</h2>
        <p>
          Not every car rusts in the same places. But nine out of ten
          share the same danger zones. The sills, where salt sprayed off
          the wheels sits. The rear wheel arches, where damp stays
          trapped behind the plastic liners. The floor pan between cross
          members, where condensation never dries. The suspension
          mounting points that mix vibration and moisture. And the steel
          brake lines — the MOT inspector's nightmare: one point of
          deep corrosion on a brake line is an instant fail and a
          drive-away ban.
        </p>

        <h2>Four levels, four decisions</h2>
        <p>
          The Vision AI model grades each shot into four levels. Level 1,
          surface rust: brown stain, no blistering, DIY treatment for 30
          to 70 GBP. Level 2, active rust with blistering: the paint is
          bubbling, a fringe of lift is visible, book a body shop within
          six months for 130 to 270 GBP. Level 3, imminent perforation:
          the panel is thinning, the part loses rigidity, action within
          three months is mandatory at 350 to 700 GBP. Level 4, actual
          perforation or structural damage: the MOT will fail it,
          immediate intervention, 500 to 1300 GBP depending on the zone.
          Every level comes with a clear recommendation, no grey area.
        </p>

        <h2>A Yaris and its rear beam</h2>
        <p>
          Real case: a 2012 Toyota Yaris, 85 000 miles, very careful
          owner who washes it monthly. While photographing the rear
          beam for a routine checkup, Vision AI flags level 2 on one of
          the Panhard rod mounting points. The naked eye saw nothing,
          just a brown smear in the usual underbody grime. The body
          shop confirmed, treated the zone for 160 GBP. Six months
          later, same zone, same shot: level 1, stable. Avoided cost:
          roughly 600 GBP for a beam replacement if the mount had
          failed while on the road. The investment pays itself back the
          first time it catches something.
        </p>

        <h2>The before and after comparison</h2>
        <p>
          The real power of Vision AI is not a single snapshot, it is
          the series. You photograph the same zones every six months,
          the system compares history and warns you when an area
          progresses by one level. That progression is far more useful
          than a static state: a level 1 rust patch stable for three
          years is not urgent. A level 1 that jumped to level 2 in six
          months is an alert. Time becomes part of the diagnosis.
        </p>

        <h2>What the MOT tester actually looks at</h2>
        <p>
          For a{" "}
          <Link href="/en/blog/mot-preparation-guide-2026">2026 MOT</Link>
          , the tester works from a precise grid. The corrosion-linked
          major defects are: perforation in a structural area, corrosion
          on a brake line or suspension mount, perforation of a chassis
          rail or cross member. By anticipating these points two months
          in advance with Vision AI, you turn up at the test bay with
          the work already done. The tester ticks the boxes and you drive
          away. No retest, no extra fee.
        </p>

        <h2>The periodic check routine</h2>
        <p>
          A Vision AI check of the sensitive zones takes ten minutes
          every six months. Eight shots: right sill, left sill, right
          rear arch, left rear arch, front subframe, rear subframe, and
          two shots aimed at visible brake lines. The app guides you,
          recognises angles and tells you if a shot is too blurry. Ten
          minutes, twice a year. Combine that with the{" "}
          <Link href="/en/blog/ai-visual-checkup-5-points-healthy-vehicle">
            five point visual checkup
          </Link>{" "}
          and a monthly OBD2 scan and you hold your car at arm's length
          from any unplanned breakdown.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

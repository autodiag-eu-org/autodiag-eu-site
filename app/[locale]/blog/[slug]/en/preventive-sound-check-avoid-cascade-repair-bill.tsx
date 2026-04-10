import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticlePreventiveSoundCheck() {
  const faq: FaqItem[] = [
    {
      q: "When should I run the scan before my MOT?",
      a: "Ideally two weeks before the MOT date. That gives you time to go to the garage, order a part if needed, and re-scan to verify the repair. Any later and you are rushed, forced to accept the first available quote.",
    },
    {
      q: "Which countries does this protocol cover?",
      a: "UK (MOT), France (CT), Germany (TUV), Spain (ITV), Portugal (IPO), Switzerland (MFK). The checkpoints differ slightly but the core mechanical parts are identical and sound scan works everywhere.",
    },
    {
      q: "How much does a retest cost on average?",
      a: "Between 35 and 90 pounds depending on country and station. On top sit the 140 to 400 pounds of rushed repair (tariffs are higher when you have 48 hours to come back). A free preventive scan avoids this double hit.",
    },
    {
      q: "Does the scan catch electrical failure points?",
      a: "Indirectly. Failed lighting has no audio signature, but a dying brake servo pump or a straining fan motor does. It complements a quick visual check.",
    },
    {
      q: "What if the scan catches a problem at the last minute?",
      a: "Call a trusted mechanic urgently with the scan results. He can prioritise your car if he knows exactly which part to look at. Without the scan he starts a blind diagnosis that takes more time and costs more.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Preventive sound check: avoiding the cascade repair bill before the MOT"
        date="2026-04-12"
        author="Reda Kaouani"
        readingTime={10}
        category="Prevention"
      >
        <p>
          The MOT is often treated like a lottery. You show up at the
          test centre, cross your fingers, hope it passes. If it
          fails, you get the double penalty: a retest fee plus a
          rushed repair, usually more expensive than if you had time
          to shop around. Yet with a proper sound scan two weeks
          before, almost every nasty surprise disappears. Here is the
          complete method.
        </p>

        <h2>Why two weeks before?</h2>
        <p>
          Two weeks is the sweet spot for three reasons. First, it is
          early enough to let you call two or three garages and
          compare quotes without urgency. Second, it is late enough
          that the scan represents the car state on test day (no
          point scanning three months ahead, wear can appear in the
          meantime). Third, it leaves time to order a part at OEM
          reference or quality aftermarket rather than accept the
          first available one.
        </p>

        <h2>The pre-MOT sound checklist</h2>
        <p>
          Here are the five recordings I recommend, all under real
          driving conditions because fatigue noises do not come out
          at idle.
        </p>
        <p>
          First scan: thirty seconds rolling at 50 mph on flat road.
          Goal: catch bearings, cupped tyres, aerodynamic whistles.
          Second scan: thirty seconds on a bumpy road between 25 and
          40 mph. Goal: suspensions, bushes, drop links. Third scan:
          ten seconds of parking manoeuvres with wheel full lock.
          Goal: CV joints, ball joints, hydraulic power-steering
          pump. Fourth scan: three gentle successive brake
          applications between 40 and 20 mph. Goal: pads, discs,
          sticky calipers. Fifth scan: engine sweep from 1000 to 4000
          rpm stationary. Goal: powertrain, belts, timing, turbo.
        </p>

        <h2>Reading the results intelligently</h2>
        <p>
          The cabin SVM returns a confidence percentage for each of
          the 7 classes. Here is how to interpret concretely. Under
          30%, ignore: that is background noise. Between 30 and 55%,
          monitor: scan again a week later to see if it climbs.
          Between 55 and 75%, verify: ask the mechanic to look at
          that specific point. Above 75%, act now: the part is
          probably already in significant failure. This grid is
          calibrated to minimise false positives while maximising
          early detection without creating unnecessary anxiety.
        </p>

        <h2>The economics of preventive scanning</h2>
        <p>
          Let us do the maths. A preventive scan costs zero with the
          AutoDiag EU app. A UK MOT retest costs 50 pounds on average.
          An urgent repair is typically billed 20 to 30% above a
          planned one. If you avoid a retest and do your repair at
          leisure, you save roughly 80 to 140 pounds per MOT cycle.
          Over a car&apos;s lifetime (ten MOTs on average), that is
          900 to 1 400 pounds never spent. Just from prevention.
        </p>

        <h2>Countries and their specifics</h2>
        <p>
          In the UK the MOT covers lights, brakes, steering,
          suspension, tyres and emissions. In France the CT looks at
          133 points including suspension, braking, steering, and
          emissions. In Germany the TUV is stricter on corrosion and
          chassis integrity. In Spain and Portugal the ITV and IPO
          follow EU norms with a focus on emissions. The sound scan
          is useful in all five because the mechanical parts are
          universal. Only the scope of the complementary electrical
          and emissions checks varies.
        </p>

        <h2>A real case of a scan saving an MOT</h2>
        <p>
          Let me give a typical example. A beta user runs his scan
          ten days before the MOT. &quot;Steering&quot; class at
          68%. He consults his usual mechanic, who confirms that a
          track rod end has play. Repair: 120 pounds, part ordered
          and fitted the next day. On test day everything passes,
          zero advisories. Without the scan, two scenarios: either
          the MOT catches the rod end and he goes back for an urgent
          repair within the week (bill 180 pounds + retest 50 pounds),
          or the MOT misses it and the joint fails three months
          later at a roundabout (near-accident, insurance excess and
          full front-end rebuild, 1 400 pounds and up). Thirty
          minutes of app setup, eighty pounds saved in the best case,
          a thousand pounds avoided in the worst.
        </p>

        <h2>Keep reading</h2>
        <p>
          This prevention strategy is also detailed in our article
          on{" "}
          <Link href="/en/blog/invisible-wear-tired-component-damages-another">
            invisible wear and the cascade effect
          </Link>
          . For the targeted noises see the{" "}
          <Link href="/en/blog/7-cabin-noises-never-ignore">
            7 noises never to ignore
          </Link>
          . For a complementary engine-side approach, read{" "}
          <Link href="/en/blog/mot-preparation-guide-2026">
            the 2026 MOT preparation guide
          </Link>
          . And if a{" "}
          <Link href="/en/codes/p0300">P0300</Link>{" "}
          code appears during your preparation, treat it as a
          priority: misfires are an instant fail in most European
          countries.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

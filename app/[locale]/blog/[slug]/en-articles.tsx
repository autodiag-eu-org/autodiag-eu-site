import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

function ArticleLayout({
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
          Ready to diagnose your car yourself?
        </h3>
        <p className="mb-6 text-secondary">
          AutoDiag EU gives you professional-grade tools, made simple. AI audio
          scan, fault code reader, and more &mdash; all in your pocket.
        </p>
        <Link
          href="/en#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          Join the free beta
        </Link>
      </footer>
    </article>
  );
}

/* ================================================================
   Article 1 — Top 10 MOT Failure Reasons 2026
   ================================================================ */

export function ArticleTop10MOTFailureReasons() {
  return (
    <ArticleLayout
      title="Top 10 MOT Failure Reasons in 2026 &mdash; And How to Avoid Them"
      date="2026-04-01"
      author="Reda Kaouani"
      readingTime={12}
      category="MOT Guide"
    >
      <p>
        Every year, millions of cars in the UK go through the MOT test &mdash;
        and a staggering number of them fail. According to the latest DVSA
        statistics, roughly <strong>one in three cars</strong> doesn&apos;t make
        it through first time. That&apos;s a lot of failed tests, a lot of
        re-tests, and a lot of unnecessary expense. The good news? Most MOT
        failures are entirely preventable if you know what to look for.
      </p>
      <p>
        We&apos;ve gone through the official DVSA data for 2025/2026 and broken
        down the <strong>ten most common reasons</strong> cars fail their MOT in
        the UK. For each one, we&apos;ll explain what the issue actually is, what
        it typically costs to fix, and how you can catch it before the tester
        does &mdash; including how AutoDiag EU can help.
      </p>

      <h2>1. Lighting and signalling &mdash; 12.75% of failures</h2>
      <p>
        Topping the list year after year is lighting. Blown bulbs, cracked
        lenses, misaligned headlamps, faulty indicators &mdash; they all count.
        The tester will check every single light on your car: headlights (dipped
        and main beam), sidelights, rear lights, brake lights, fog lights,
        indicators, number plate lights, and hazard warning lights. Even a single
        blown bulb is an automatic fail.
      </p>
      <p>
        <strong>Typical repair cost:</strong> £5&ndash;£30 for a bulb
        replacement. Headlamp alignment at a garage: £20&ndash;£50. If the
        headlamp unit itself is damaged, expect £80&ndash;£250 depending on
        your car.
      </p>
      <p>
        <strong>How to avoid it:</strong> Walk around your car once a month and
        check every light. Get a mate to stand behind while you press the brake
        pedal and flick the indicators. It takes two minutes and could save you
        a failed MOT. AutoDiag EU&apos;s OBD2 scanner can also flag bulb-related
        fault codes (like codes for brake light circuit faults) before they
        become a problem.
      </p>

      <h2>2. Suspension &mdash; 10.67% of failures</h2>
      <p>
        Worn shock absorbers, damaged springs, perished bushes, and leaking
        dampers. Your suspension takes an absolute battering on UK roads &mdash;
        and let&apos;s be honest, our potholes don&apos;t help. The MOT tester
        will bounce each corner of the car and check for excessive movement,
        knocking sounds, and visible damage to springs and dampers. A broken
        coil spring is one of the most common individual failure items.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Shock absorbers: £150&ndash;£350
        per pair fitted. Coil springs: £80&ndash;£200 per corner. Anti-roll bar
        links: £40&ndash;£100 per side.
      </p>
      <p>
        <strong>How to avoid it:</strong> Listen for clunking or knocking noises
        when driving over bumps. If the car feels bouncy or wallowy, the dampers
        are likely worn. AutoDiag EU&apos;s <strong>AI audio scan</strong> can
        detect suspension knocking and clunking sounds before they become severe
        enough to fail an MOT. The Drive Test feature uses your phone&apos;s
        accelerometer to measure body roll and bounce &mdash; no dongle needed.
      </p>

      <h2>3. Tyres &mdash; 10.05% of failures</h2>
      <p>
        Tyres are the only thing between your car and the road, yet they&apos;re
        one of the most neglected components. The legal minimum tread depth in
        the UK is <strong>1.6mm across the central three-quarters of the
        tyre</strong>, around the entire circumference. The tester will also
        check for sidewall damage, bulges, cuts, and incorrect tyre sizes.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Budget tyres: £40&ndash;£70 each.
        Mid-range: £60&ndash;£120 each. Premium brands: £80&ndash;£200 each.
        Fitting and balancing usually included.
      </p>
      <p>
        <strong>How to avoid it:</strong> Use the 20p test &mdash; if you can
        see the outer band of the coin when inserted into the tread, your tyres
        are below 1.6mm. Check all four tyres and don&apos;t forget the spare
        if your car carries one (though the spare itself isn&apos;t tested).
        Also check for uneven wear, which can indicate alignment or suspension
        issues.
      </p>

      <h2>4. Brakes &mdash; 9.80% of failures</h2>
      <p>
        Worn brake pads, corroded discs, seized calipers, and faulty handbrakes.
        The MOT brake test measures actual braking efficiency on a roller, so
        there&apos;s no hiding worn-out components. The tester needs to see at
        least <strong>58% braking efficiency</strong> from the main brakes and
        <strong>16% from the handbrake</strong> (or 25% for vehicles first used
        from September 2010).
      </p>
      <p>
        <strong>Typical repair cost:</strong> Brake pads: £80&ndash;£150 per
        axle. Discs and pads together: £150&ndash;£300 per axle. Handbrake
        cable: £60&ndash;£150. Caliper rebuild: £100&ndash;£250 per caliper.
      </p>
      <p>
        <strong>How to avoid it:</strong> Listen for squealing or grinding when
        braking &mdash; AutoDiag EU&apos;s audio scan is specifically trained to
        detect brake noise patterns. If you feel vibration through the pedal,
        your discs may be warped. The app&apos;s OBD2 reader can also flag ABS
        and brake system fault codes well before your MOT date.
      </p>

      <h2>5. Emissions &mdash; 8.20% of failures</h2>
      <p>
        Petrol cars must pass a tailpipe emissions test measuring CO and
        hydrocarbons. Diesel cars face a smoke opacity test. Since 2018, the
        rules got stricter: <strong>any visible smoke from the exhaust is an
        automatic fail</strong> for diesel vehicles. A faulty catalytic
        converter, worn lambda sensor, or engine running rich can all push
        emissions over the limit.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Lambda sensor: £80&ndash;£200.
        Catalytic converter: £300&ndash;£1,500 depending on the car. DPF clean:
        £300&ndash;£600. DPF replacement: £1,000&ndash;£2,500.
      </p>
      <p>
        <strong>How to avoid it:</strong> If your engine management light is on,
        sort it before the MOT &mdash; it&apos;s now a <strong>major
        fault</strong> and an automatic fail since May 2018. AutoDiag EU reads
        all emissions-related fault codes (P0420, P0171, P0300 series, and more)
        and explains them in plain English. Give your car a good 20-minute
        motorway run before the test to get the catalytic converter up to
        temperature.
      </p>

      <h2>6. Windscreen &mdash; 5.40% of failures</h2>
      <p>
        A chip or crack in the windscreen can fail the MOT if it&apos;s in the
        driver&apos;s line of sight. Specifically, any damage larger than
        <strong>10mm in Zone A</strong> (a 290mm-wide strip directly in front
        of the driver) or larger than <strong>40mm anywhere else on the swept
        area</strong> of the windscreen is a fail. Wipers and washers are also
        checked &mdash; they must clear the screen effectively.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Chip repair: £30&ndash;£75 (often
        free through your insurance). Full windscreen replacement:
        £200&ndash;£500. Wiper blades: £10&ndash;£30.
      </p>
      <p>
        <strong>How to avoid it:</strong> Get chips repaired as soon as they
        appear &mdash; they&apos;re cheap to fix and only get worse with
        temperature changes. Replace your wiper blades at least once a year, and
        top up your washer fluid before the test. A simple visual check saves
        you a fail.
      </p>

      <h2>7. Steering &mdash; 4.50% of failures</h2>
      <p>
        Excessive play in the steering, worn track rod ends, damaged gaiters,
        and power steering fluid leaks. The tester will physically check for
        play by rocking the steering wheel and inspecting the components
        underneath. If there&apos;s more than a certain amount of free play
        before the wheels start to turn, it&apos;s a fail.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Track rod end: £50&ndash;£120 per
        side (plus alignment). Steering rack gaiter: £80&ndash;£200. Power
        steering pump: £200&ndash;£500. Full steering rack: £400&ndash;£900.
      </p>
      <p>
        <strong>How to avoid it:</strong> If your steering feels vague, pulls
        to one side, or you hear knocking when turning the wheel at low speed,
        get it checked. AutoDiag EU&apos;s Drive Test can detect steering
        anomalies through your phone&apos;s gyroscope data during normal driving.
      </p>

      <h2>8. Bodywork and structure &mdash; 4.20% of failures</h2>
      <p>
        Corrosion is the enemy here &mdash; particularly on older vehicles and
        cars in coastal areas. The tester checks for rust and corrosion on
        structural components: sills, subframes, chassis legs, and anywhere
        within 30cm of a load-bearing component. Sharp edges on bodywork that
        could injure pedestrians are also checked.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Minor welding repair:
        £80&ndash;£250. Sill replacement: £200&ndash;£600 per side. Structural
        welding: £300&ndash;£1,000 depending on severity.
      </p>
      <p>
        <strong>How to avoid it:</strong> Check underneath your car for rust,
        especially around the wheel arches, sills, and subframe mounting points.
        Treat surface rust early with a rust converter and protective paint. If
        you live near the coast or your car gets a lot of salt exposure in
        winter, consider an annual underseal treatment.
      </p>

      <h2>9. Exhaust system &mdash; 3.50% of failures</h2>
      <p>
        Leaking exhausts, corroded sections, damaged mountings, and missing heat
        shields. The tester will check the entire exhaust system from the
        manifold to the tailpipe, looking for leaks, excessive corrosion, and
        secure mounting. An exhaust leak can also affect your emissions readings,
        causing a double failure.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Exhaust clamp or repair paste:
        £10&ndash;£30 (DIY). Back box replacement: £80&ndash;£200. Centre
        section: £120&ndash;£300. Full system: £300&ndash;£800.
      </p>
      <p>
        <strong>How to avoid it:</strong> Listen for changes in exhaust noise
        &mdash; a louder or raspier sound usually means a leak. AutoDiag EU&apos;s
        AI audio scan is trained to detect exhaust leak signatures. You can also
        hold your hand near exhaust joints (without touching &mdash; it&apos;s
        hot!) to feel for escaping gases.
      </p>

      <h2>10. Seatbelts &mdash; 2.80% of failures</h2>
      <p>
        Every seatbelt in the vehicle is tested. The tester checks that they
        retract properly, lock under sharp pulling, aren&apos;t frayed or
        damaged, and that all buckles click in securely. Even a slow-retracting
        belt can be a fail item.
      </p>
      <p>
        <strong>Typical repair cost:</strong> Seatbelt buckle: £30&ndash;£80.
        Retractor mechanism: £80&ndash;£200. Full seatbelt assembly:
        £100&ndash;£300.
      </p>
      <p>
        <strong>How to avoid it:</strong> Pull each seatbelt fully out and let
        it retract &mdash; it should pull back smoothly and fully. Yank it
        sharply and it should lock. Check the webbing for fraying, cuts, or
        stains that might indicate damage. Clean the buckle mechanisms if they
        feel sticky.
      </p>

      <h2>The bigger picture &mdash; what the numbers tell us</h2>
      <p>
        If you add up these top 10 categories, they account for over
        <strong>70% of all MOT failures</strong>. That means the vast majority
        of failed MOTs come down to a relatively short list of checkable items.
        Most of them don&apos;t require specialist equipment to inspect &mdash;
        just a few minutes of your time and a bit of knowledge.
      </p>
      <p>
        Here&apos;s the thing: a failed MOT doesn&apos;t just mean the
        inconvenience of a re-test. It means time off work, potentially paying
        for a courtesy car, and the stress of unexpected repair bills. The
        average cost of fixing an MOT failure is between <strong>£150 and
        £400</strong>, but catching problems early often means cheaper, simpler
        repairs.
      </p>

      <h2>How AutoDiag EU helps you prepare</h2>
      <p>
        AutoDiag EU isn&apos;t just an OBD2 code reader &mdash; it&apos;s a
        complete vehicle health tool. Here&apos;s how it helps with MOT
        preparation:
      </p>
      <ul>
        <li>
          <strong>OBD2 fault code scanning:</strong> Read and clear engine
          management codes. The app explains each code in plain English and
          tells you whether it&apos;s MOT-relevant.
        </li>
        <li>
          <strong>AI audio scan:</strong> Our machine-learning engine listens to
          your car and identifies 11 different fault categories &mdash; from
          bearing noise to exhaust leaks, belt squeal to engine knock.
        </li>
        <li>
          <strong>Drive Test:</strong> Using just your phone&apos;s sensors
          (accelerometer, gyroscope, GPS, and microphone), the Drive Test
          analyses suspension health, steering response, and drivetrain
          smoothness &mdash; no dongle required.
        </li>
        <li>
          <strong>Live data monitoring:</strong> Watch RPM, coolant temperature,
          engine load, and more in real time to spot issues the dashboard
          won&apos;t show you.
        </li>
      </ul>

      <h2>Final thoughts</h2>
      <p>
        The MOT test exists to keep our roads safe, and it&apos;s really not
        something to dread. Most failures are caused by things you can check
        yourself in under 30 minutes. Spend a bit of time going through the
        basics &mdash; lights, tyres, brakes, windscreen &mdash; a week before
        your test, and you&apos;ll massively increase your chances of a first-time
        pass. And with tools like AutoDiag EU in your pocket, you&apos;ve got
        a mechanic&apos;s insight without the mechanic&apos;s bill. Your car
        will thank you, your wallet will thank you, and you&apos;ll drive away
        from the test centre with that lovely green pass certificate.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 2 — How to Prepare Your Car for Its MOT
   ================================================================ */

export function ArticleHowToPrepareCarForMOT() {
  return (
    <ArticleLayout
      title="How to Prepare Your Car for Its MOT &mdash; Complete Checklist"
      date="2026-03-28"
      author="Reda Kaouani"
      readingTime={11}
      category="MOT Guide"
    >
      <p>
        Your MOT is coming up. Whether it&apos;s your first one or your
        twentieth, that little bit of pre-test anxiety is completely normal.
        Nobody wants to hear &ldquo;sorry, it&apos;s failed&rdquo; and face an
        unexpected bill. The good news is that with a bit of preparation, you
        can dramatically reduce your chances of failure &mdash; and the whole
        process takes less time than you&apos;d spend watching an episode of your
        favourite show.
      </p>
      <p>
        This guide walks you through everything the MOT tester actually checks,
        broken down into a week-by-week preparation plan. Follow it, and
        you&apos;ll walk into that test centre feeling confident.
      </p>

      <h2>What exactly does the MOT test cover?</h2>
      <p>
        The MOT (Ministry of Transport) test is an annual inspection required
        for all vehicles over three years old in the UK. It&apos;s carried out
        by authorised testing stations and covers the following areas:
      </p>
      <ul>
        <li>Lighting and signalling equipment</li>
        <li>Steering and suspension</li>
        <li>Brakes (including handbrake)</li>
        <li>Tyres and wheels</li>
        <li>Seatbelts and seats</li>
        <li>Body, structure, and general items</li>
        <li>Exhaust, emissions, and noise</li>
        <li>Windscreen, wipers, and washers</li>
        <li>Bonnet, doors, and mirrors</li>
        <li>Horn</li>
        <li>Number plates</li>
        <li>Vehicle identification (VIN)</li>
      </ul>
      <p>
        Since May 2018, MOT defects are classified into three categories:
        <strong>dangerous</strong> (you must not drive the car),
        <strong>major</strong> (fail &mdash; must be repaired and re-tested),
        and <strong>minor</strong> (advisory &mdash; noted but not a fail). An
        illuminated engine management light is now a <strong>major
        fault</strong> and an automatic fail.
      </p>

      <h2>Four weeks before &mdash; the early check</h2>
      <p>
        Four weeks gives you plenty of time to sort out any issues you find.
        Start with a thorough visual inspection.
      </p>

      <h3>Lights</h3>
      <p>
        Check every single light on the car. This means headlights (dipped and
        main beam), sidelights, rear lights, brake lights, reversing lights,
        fog lights (front and rear), indicators, hazard warning lights, and
        number plate lights. Get someone to help &mdash; have them press the
        brake pedal and operate the indicators while you walk around the car.
        Replace any blown bulbs immediately. Most are under £10 and take five
        minutes to fit.
      </p>

      <h3>Tyres</h3>
      <p>
        Check the tread depth on all four tyres. The legal minimum in the UK is
        <strong>1.6mm</strong> across the central three-quarters of the tyre,
        around the full circumference. Use a tread depth gauge (about £3 from
        any motor factors) or the 20p coin test. Also check for sidewall
        damage, bulges, cracking, and uneven wear patterns. Don&apos;t forget
        to check the spare if you carry one &mdash; while it&apos;s not part of
        the MOT test itself, you&apos;ll want it roadworthy.
      </p>

      <h3>Run an OBD2 scan</h3>
      <p>
        This is where AutoDiag EU earns its keep. Connect your ELM327 dongle
        (or use the app&apos;s dongle-free features) and scan for fault codes.
        If your engine management light is on, you <strong>will</strong> fail
        the MOT &mdash; no exceptions since 2018. The app reads all stored
        codes, explains them in plain English, and tells you which ones are
        MOT-relevant. Fix any issues now while you&apos;ve got four weeks of
        breathing room.
      </p>

      <h2>Three weeks before &mdash; the underneath check</h2>

      <h3>Exhaust system</h3>
      <p>
        With the engine cold, have a look at the exhaust system from the
        manifold to the tailpipe. Look for rust holes, loose brackets, and
        damaged mounting rubbers. Start the engine and listen for blowing or
        rattling. A leaking exhaust will likely fail on both the exhaust
        inspection and the emissions test.
      </p>

      <h3>Suspension</h3>
      <p>
        Push down firmly on each corner of the car and release. It should
        bounce back once and settle &mdash; if it bounces repeatedly, the
        dampers are worn. Look at each spring through the wheel arch for breaks
        or corrosion. Check anti-roll bar links by grabbing them and checking
        for excessive play.
      </p>
      <p>
        AutoDiag EU&apos;s <strong>AI audio scan</strong> is particularly
        useful here. Drive over a few speed bumps with the app recording and
        it will flag any knocking, clunking, or bearing noise that might
        indicate worn suspension components.
      </p>

      <h3>Steering</h3>
      <p>
        With the wheels on the ground, rock the steering wheel left and right
        and look for excessive play before the wheels start to move. Check
        underneath for leaking power steering fluid and torn steering rack
        gaiters.
      </p>

      <h2>Two weeks before &mdash; the brakes and bodywork</h2>

      <h3>Brakes</h3>
      <p>
        Through the wheel spokes, check the thickness of your brake pads. Most
        pads have a wear indicator &mdash; if the pad material is less than
        3mm thick, replace them. Check the discs for deep grooves, lipping, and
        surface rust. Test the handbrake: park on a moderate hill and see if
        the car holds. Count the clicks &mdash; if the handbrake comes up more
        than about 8-10 clicks, it probably needs adjusting.
      </p>
      <p>
        Take the car for a short drive and brake firmly from 30mph. The car
        should stop in a straight line without pulling to one side. Any
        vibration through the pedal suggests warped discs. Squealing or
        grinding means pads are due. AutoDiag EU&apos;s audio scan is trained
        to identify brake squeal and grinding patterns and will flag them with
        a confidence score.
      </p>

      <h3>Bodywork</h3>
      <p>
        Walk around the car and check for sharp edges on body panels that could
        injure a pedestrian. Check the sills, wheel arches, and subframe areas
        for corrosion. If you can push a screwdriver through it, it&apos;s too
        far gone and needs welding. Check that all doors open and close
        properly, and that the bonnet catch works securely.
      </p>

      <h3>Windscreen</h3>
      <p>
        Inspect the windscreen for chips and cracks. Remember the rules: no
        damage larger than 10mm in Zone A (directly in front of the driver) or
        40mm in the rest of the swept area. Get chips repaired now &mdash; most
        insurers cover chip repairs for free. Check your wiper blades for
        splits and tears, and top up the washer fluid.
      </p>

      <h2>One week before &mdash; the final details</h2>

      <h3>Seatbelts</h3>
      <p>
        Pull each belt fully out and check the webbing for fraying, cuts, or
        damage. Let it retract &mdash; it should pull back smoothly. Give it a
        sharp tug to check the inertia lock engages. Click each buckle in and
        out to make sure the mechanism is clean and positive.
      </p>

      <h3>Horn</h3>
      <p>
        Give it a good press. It needs to produce a continuous, uniform sound
        that&apos;s loud enough to warn other road users. If it sounds weak or
        intermittent, check the connections or replace the horn unit.
      </p>

      <h3>Mirrors</h3>
      <p>
        You need at least two mirrors: the interior mirror and the offside
        (driver&apos;s side) exterior mirror. Both must be securely mounted and
        give a clear view behind. Cracked or badly damaged mirrors should be
        replaced.
      </p>

      <h3>Number plates</h3>
      <p>
        Both front and rear plates must be clean, securely mounted, and legible.
        The lettering must be correctly spaced (no dealer graphics or bolt
        fixings obscuring characters). The rear plate must be illuminated.
      </p>

      <h3>Dashboard warning lights</h3>
      <p>
        With the ignition on (before starting the engine), all warning lights
        should illuminate briefly and then go out. If your engine management
        light, ABS light, or airbag light stays on, that&apos;s a fail. Run
        another quick scan with AutoDiag EU to make sure no new codes have
        appeared since your initial check.
      </p>

      <h2>The day before &mdash; the final prep</h2>
      <ul>
        <li>Give the car a wash, especially the underside and wheel arches &mdash; testers appreciate a clean car and it makes their job easier</li>
        <li>Take the car for a 20-minute motorway run to get the catalytic converter up to operating temperature &mdash; this helps emissions pass</li>
        <li>Make sure the fuel tank is at least a quarter full (the tester needs to rev the engine for the emissions test)</li>
        <li>Remove any heavy items from the boot that might affect brake test readings</li>
        <li>Check that all lights work one final time</li>
        <li>Make sure you have your V5C logbook to hand (not technically required, but helpful)</li>
      </ul>

      <h2>The complete MOT preparation checklist</h2>
      <p>
        Here&apos;s the full checklist in one handy summary:
      </p>
      <ul>
        <li>All external lights working (headlights, indicators, brake lights, fog lights, number plate lights)</li>
        <li>Tyre tread depth above 1.6mm on all four tyres</li>
        <li>No tyre sidewall damage, bulges, or cracking</li>
        <li>Brake pads above 3mm thickness</li>
        <li>Brake discs free from deep grooves or excessive wear</li>
        <li>Handbrake holds the car securely</li>
        <li>No engine management, ABS, or airbag warning lights illuminated</li>
        <li>Windscreen free from chips over 10mm in Zone A or 40mm elsewhere</li>
        <li>Wiper blades in good condition and washer fluid topped up</li>
        <li>Exhaust system secure with no leaks</li>
        <li>Horn works continuously and loudly</li>
        <li>All seatbelts retract, lock, and buckle correctly</li>
        <li>Mirrors secure and clear</li>
        <li>Number plates clean, legible, and illuminated (rear)</li>
        <li>No excessive bodywork corrosion on structural components</li>
        <li>Steering free from excessive play</li>
        <li>Suspension not excessively bouncy or noisy</li>
        <li>All doors and bonnet open, close, and latch properly</li>
      </ul>

      <h2>What if something needs fixing?</h2>
      <p>
        If your pre-MOT check reveals issues, don&apos;t panic. Most common MOT
        failure items are relatively inexpensive to fix, especially if caught
        early. Get quotes from a few local garages, and consider whether any
        repairs are within your DIY ability. Simple jobs like bulb replacement,
        wiper blades, and washer fluid top-ups cost virtually nothing and take
        minutes.
      </p>
      <p>
        For more complex issues, AutoDiag EU gives you the knowledge to walk
        into a garage understanding exactly what&apos;s wrong. You won&apos;t
        be sold unnecessary work because you&apos;ll already know the fault
        codes and what they mean. That&apos;s the real power of having
        professional diagnostic tools in your pocket.
      </p>

      <h2>Wrapping up</h2>
      <p>
        Preparing for your MOT doesn&apos;t need to be stressful. Start early,
        work through the checklist systematically, and fix anything you find
        before test day. With AutoDiag EU helping you scan for fault codes,
        listen for trouble, and monitor your car&apos;s health, you&apos;re
        giving yourself the best possible chance of that satisfying first-time
        pass. Good luck &mdash; though if you&apos;ve followed this guide,
        you won&apos;t need it.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 3 — Best OBD2 Apps in the UK 2026
   ================================================================ */

export function ArticleBestOBD2AppUK2026() {
  return (
    <ArticleLayout
      title="Best OBD2 Apps in the UK (2026) &mdash; Honest Comparison"
      date="2026-03-20"
      author="Reda Kaouani"
      readingTime={10}
      category="Comparison"
    >
      <p>
        If you&apos;ve just bought an ELM327 Bluetooth or Wi-Fi dongle and
        you&apos;re wondering which app to pair it with, you&apos;re not alone.
        There are dozens of OBD2 apps on the Google Play Store and Apple App
        Store, and honestly, the quality varies wildly. Some are brilliant,
        some are outdated, and some are just glorified code readers that
        haven&apos;t been updated since 2019.
      </p>
      <p>
        We&apos;ve tested the most popular OBD2 apps available to UK drivers
        in 2026 and put together this honest comparison. No sponsored rankings,
        no affiliate tricks &mdash; just genuine pros and cons based on real
        testing with real cars. Let&apos;s get into it.
      </p>

      <h2>What to look for in an OBD2 app</h2>
      <p>
        Before comparing individual apps, it helps to know what actually
        matters:
      </p>
      <ul>
        <li>
          <strong>Code reading and clearing:</strong> The basics. Every app
          should read DTCs (Diagnostic Trouble Codes) and let you clear them.
          But the real value is in how well the app <em>explains</em> those
          codes.
        </li>
        <li>
          <strong>Live data:</strong> Real-time sensor data like RPM,
          coolant temperature, intake air temperature, engine load, fuel trims.
          More PIDs supported = more useful.
        </li>
        <li>
          <strong>Enhanced diagnostics:</strong> Going beyond generic OBD2 into
          manufacturer-specific codes and modules (ABS, airbag, transmission,
          etc.).
        </li>
        <li>
          <strong>User interface:</strong> You&apos;ll be using this in a car
          park or driveway, possibly in the rain. It needs to be clear and
          easy to use.
        </li>
        <li>
          <strong>UK relevance:</strong> MOT preparation features, costs in
          GBP, UK-specific advice.
        </li>
        <li>
          <strong>Price:</strong> Free tier, one-off purchase, or subscription
          &mdash; and what you actually get for your money.
        </li>
      </ul>

      <h2>Torque Pro &mdash; the old faithful</h2>
      <p>
        Torque Pro has been around since the early days of Android and it
        remains one of the most downloaded OBD2 apps on the Play Store.
        It&apos;s a one-off purchase of around £3.50, which makes it one of
        the cheapest options available.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Extremely cheap &mdash; one-off payment, no subscription</li>
        <li>Highly customisable dashboard with gauges and graphs</li>
        <li>Supports a wide range of PIDs</li>
        <li>Large community and plenty of third-party plugins</li>
        <li>GPS logging and trip tracking</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Interface looks dated &mdash; it hasn&apos;t had a major visual refresh in years</li>
        <li>Android only &mdash; no iOS version</li>
        <li>No manufacturer-specific diagnostics (generic OBD2 only)</li>
        <li>Code explanations are basic and often technical</li>
        <li>No AI or audio diagnostic features</li>
        <li>No MOT-specific guidance</li>
      </ul>
      <p>
        <strong>Verdict:</strong> Great value for money if you just want raw
        data and gauges. But it&apos;s showing its age, and if you want your
        app to actually <em>help</em> you understand what&apos;s wrong, you&apos;ll
        need to look elsewhere.
      </p>

      <h2>Car Scanner ELM OBD2 &mdash; the all-rounder</h2>
      <p>
        Car Scanner is a solid middle-ground option available on both Android
        and iOS. The free version covers the basics, while the Pro version
        (around £20 one-off or via subscription) adds enhanced diagnostics for
        certain manufacturers.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Cross-platform &mdash; works on both Android and iOS</li>
        <li>Clean, modern interface</li>
        <li>Good range of live data PIDs</li>
        <li>Some manufacturer-specific diagnostics (Ford, GM, Toyota, Mazda)</li>
        <li>Freeze frame data and readiness monitors</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Enhanced diagnostics limited to a few manufacturers</li>
        <li>European car support (BMW, Mercedes, Audi, VW) is weaker than competitors</li>
        <li>No audio diagnostic capabilities</li>
        <li>Code explanations could be more detailed</li>
        <li>Some features locked behind separate in-app purchases</li>
      </ul>
      <p>
        <strong>Verdict:</strong> A competent all-rounder that does the basics
        well. If you drive a Ford or Toyota, the enhanced diagnostics are a
        nice bonus. European car owners may find the manufacturer-specific
        coverage lacking.
      </p>

      <h2>Carly &mdash; the European specialist</h2>
      <p>
        Carly positions itself as the premium option for European cars,
        particularly BMW, Mercedes, Audi, VW, Porsche, and Renault. It offers
        deep manufacturer-specific diagnostics, coding (changing car settings),
        and a used car check feature. The catch: it requires their own
        proprietary adapter (around £50) and an annual subscription of
        approximately £55&ndash;£85 per year depending on your car&apos;s make.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Deep manufacturer-specific diagnostics for European brands</li>
        <li>Vehicle coding (enable/disable features like folding mirrors, daytime running lights)</li>
        <li>Used car check (mileage fraud detection)</li>
        <li>Modern, polished interface</li>
        <li>Good code explanations for supported brands</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Requires their own proprietary adapter (won&apos;t work with a generic ELM327)</li>
        <li>Expensive &mdash; adapter plus annual subscription adds up</li>
        <li>Coverage varies dramatically by brand &mdash; some makes have far more features than others</li>
        <li>No audio diagnostic features</li>
        <li>No dongle-free diagnostic capabilities</li>
        <li>No MOT-specific preparation tools</li>
      </ul>
      <p>
        <strong>Verdict:</strong> If you drive a BMW or VAG-group car and want
        deep coding features, Carly is hard to beat. But the proprietary adapter
        requirement and annual subscription make it the most expensive option
        on this list.
      </p>

      <h2>OBDeleven &mdash; the VAG specialist</h2>
      <p>
        OBDeleven is laser-focused on Volkswagen Group vehicles &mdash; VW,
        Audi, Skoda, SEAT, Porsche, Lamborghini, and Bentley. It offers
        genuinely deep diagnostics and coding for these brands, with a
        community-driven &ldquo;One-Click Apps&rdquo; feature that lets you
        apply common coding changes with a single tap. Like Carly, it requires
        its own Bluetooth adapter (around £30&ndash;£60).
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Unmatched depth for VAG-group vehicles</li>
        <li>One-Click Apps make coding accessible to beginners</li>
        <li>Active community sharing coding configurations</li>
        <li>Reasonable adapter price</li>
        <li>Service reset and adaptation features</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Only useful if you drive a VAG-group car</li>
        <li>Requires proprietary adapter</li>
        <li>Credits system for advanced features can get expensive</li>
        <li>No audio or vision diagnostics</li>
        <li>No features for non-VAG vehicles at all</li>
      </ul>
      <p>
        <strong>Verdict:</strong> The best tool available if you drive a VW,
        Audi, Skoda, or SEAT. Completely irrelevant if you don&apos;t.
      </p>

      <h2>AutoDiag EU &mdash; the new contender</h2>
      <p>
        Full disclosure: this is our app, so take this section with a pinch of
        salt and judge for yourself. AutoDiag EU launched in 2026 with a
        fundamentally different approach to car diagnostics. While other apps
        focus purely on OBD2 data, we built AutoDiag EU around the idea that
        your phone has more diagnostic potential than just reading fault codes.
      </p>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>
          <strong>AI audio scan:</strong> Uses machine learning (SVM with 91.3%
          accuracy) to identify 11 categories of engine and cabin sounds &mdash;
          from bearing noise to belt squeal, exhaust leaks to injector knock.
          No other OBD2 app offers this.
        </li>
        <li>
          <strong>Vision AI:</strong> Take a photo under the bonnet and the AI
          identifies components and potential issues. Useful for checking belt
          condition, fluid levels, and more.
        </li>
        <li>
          <strong>Drive Test without a dongle:</strong> Uses your phone&apos;s
          accelerometer, gyroscope, GPS, and microphone to analyse suspension,
          steering, and drivetrain health during a normal drive. No dongle
          required.
        </li>
        <li>
          <strong>AI mechanic:</strong> Ask questions in plain English and get
          personalised answers based on your specific vehicle and its fault
          codes.
        </li>
        <li>
          <strong>Full OBD2 support:</strong> Read and clear codes, live data,
          freeze frames &mdash; all the standard OBD2 features, with clear
          plain-English explanations.
        </li>
        <li>
          <strong>MOT preparation:</strong> Pre-MOT checklist with country-specific
          guidance for the UK, France, Germany, Switzerland, Spain, and Portugal.
        </li>
        <li>
          <strong>Affordable:</strong> Free tier available. Premium at
          approximately <strong>&pound;42 per year</strong> &mdash; less than a
          single garage diagnostic session.
        </li>
        <li>Works with any standard ELM327 Bluetooth dongle &mdash; no proprietary hardware</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Newer app &mdash; smaller community than established competitors</li>
        <li>Currently Android only (iOS coming soon)</li>
        <li>No vehicle coding features (not our focus)</li>
        <li>Enhanced manufacturer-specific diagnostics still growing</li>
      </ul>
      <p>
        <strong>Verdict:</strong> AutoDiag EU is the only app that combines
        OBD2 diagnostics with AI audio scanning, computer vision, and
        dongle-free sensor analysis. If you want more than just a code reader
        &mdash; if you want an app that actually helps you understand your car
        &mdash; it&apos;s worth a look.
      </p>

      <h2>Quick comparison table</h2>
      <p>
        Here&apos;s how the five apps stack up across the features that
        matter most:
      </p>
      <ul>
        <li><strong>Generic OBD2 codes:</strong> All five apps support this</li>
        <li><strong>Enhanced manufacturer codes:</strong> Carly (best), OBDeleven (VAG only), Car Scanner (limited), Torque Pro (no), AutoDiag EU (growing)</li>
        <li><strong>Vehicle coding:</strong> Carly and OBDeleven only</li>
        <li><strong>AI audio diagnostics:</strong> AutoDiag EU only</li>
        <li><strong>Vision AI:</strong> AutoDiag EU only</li>
        <li><strong>Dongle-free diagnostics:</strong> AutoDiag EU only</li>
        <li><strong>MOT preparation:</strong> AutoDiag EU only</li>
        <li><strong>iOS support:</strong> Car Scanner and Carly (AutoDiag EU coming soon)</li>
        <li><strong>Price per year:</strong> Torque Pro &pound;3.50 one-off, Car Scanner &pound;20 one-off, Carly &pound;55&ndash;&pound;85 + &pound;50 adapter, OBDeleven &pound;30&ndash;&pound;60 adapter + credits, AutoDiag EU &pound;42/year (free tier available)</li>
      </ul>

      <h2>Which app is right for you?</h2>
      <p>
        It depends on what you need:
      </p>
      <ul>
        <li>
          <strong>You just want cheap gauges and raw data:</strong> Torque Pro
          is hard to beat at &pound;3.50.
        </li>
        <li>
          <strong>You drive a BMW and want coding:</strong> Carly is the way
          to go, if you&apos;re willing to pay for their adapter and
          subscription.
        </li>
        <li>
          <strong>You drive a VW/Audi/Skoda/SEAT:</strong> OBDeleven is
          purpose-built for you.
        </li>
        <li>
          <strong>You want a solid all-rounder on iOS:</strong> Car Scanner
          does a decent job across the board.
        </li>
        <li>
          <strong>You want diagnostics beyond just fault codes:</strong>
          AutoDiag EU is the only app that listens to your car, watches through
          your camera, and uses your phone&apos;s motion sensors &mdash; all on
          top of standard OBD2 features.
        </li>
      </ul>

      <h2>The bottom line</h2>
      <p>
        The OBD2 app market in 2026 is more competitive than ever, and that&apos;s
        great for drivers. Gone are the days when you needed a &pound;2,000
        diagnostic machine to understand what&apos;s happening under your
        bonnet. Whether you choose a &pound;3.50 app or a premium subscription
        service, you&apos;re putting yourself in control of your car&apos;s
        health &mdash; and that&apos;s always a good thing. We genuinely believe
        AutoDiag EU offers something no other app can match, but don&apos;t just
        take our word for it &mdash; download the free version and see for
        yourself.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 4 — OBD2 Fault Codes Explained
   ================================================================ */

export function ArticleOBD2FaultCodesExplainedUK() {
  return (
    <ArticleLayout
      title="OBD2 Fault Codes Explained &mdash; A UK Driver&apos;s Guide"
      date="2026-03-15"
      author="Reda Kaouani"
      readingTime={10}
      category="Tutorial"
    >
      <p>
        Your engine management light has just come on. That little amber symbol
        on the dashboard &mdash; sometimes shaped like an engine, sometimes just
        a generic warning &mdash; is telling you that your car&apos;s computer
        has detected something unusual. It&apos;s stored a fault code, and
        understanding that code is the first step to knowing what&apos;s wrong
        and how much it might cost to fix.
      </p>
      <p>
        This guide explains everything a UK driver needs to know about OBD2
        fault codes: what they are, how they&apos;re structured, where to find
        your OBD2 port, and how to read them yourself without paying a garage
        &pound;50&ndash;&pound;100 for a diagnostic session.
      </p>

      <h2>What is OBD2?</h2>
      <p>
        OBD2 stands for <strong>On-Board Diagnostics, version 2</strong>.
        It&apos;s a standardised system built into every car sold in the UK
        since 2001 (petrol) and 2004 (diesel). Your car has an electronic
        control unit &mdash; essentially a computer &mdash; that constantly
        monitors hundreds of sensors throughout the vehicle. When a sensor
        reading falls outside its expected range, the ECU logs a
        <strong>Diagnostic Trouble Code</strong> (DTC) and usually illuminates
        the engine management light on your dashboard.
      </p>
      <p>
        Think of it as your car&apos;s health diary. Instead of writing
        &ldquo;I&apos;ve got a headache,&rdquo; it writes something like
        &ldquo;P0420&rdquo; &mdash; which, if you know how to read it, tells
        you exactly which system is affected and what type of problem has been
        detected.
      </p>

      <h2>Where is the OBD2 port in my car?</h2>
      <p>
        Every OBD2-compliant vehicle has a 16-pin diagnostic port, and by law
        it must be accessible from the driver&apos;s seat without tools. In
        most UK cars, you&apos;ll find it:
      </p>
      <ul>
        <li>Under the dashboard, to the left of the steering column (most common)</li>
        <li>Behind a small plastic cover or flap</li>
        <li>In the centre console area, below the handbrake or gear lever (some BMWs and Mercedes)</li>
        <li>In the glovebox (some older Vauxhalls and Fords)</li>
        <li>Under a cover near the fuse box (some French cars like Renault and Peugeot)</li>
      </ul>
      <p>
        If you&apos;re struggling to find it, AutoDiag EU&apos;s app includes
        a visual guide showing the OBD2 port location for over 677 vehicle
        models. Just select your car and it will show you exactly where to look.
      </p>

      <h2>How OBD2 fault codes are structured</h2>
      <p>
        Every DTC follows the same five-character format. Let&apos;s break
        down a common example: <strong>P0420</strong>.
      </p>

      <h3>First character &mdash; the system</h3>
      <ul>
        <li>
          <strong>P (Powertrain):</strong> Engine, gearbox, fuel system,
          ignition, emissions. This is by far the most common type &mdash;
          roughly 70% of all fault codes you&apos;ll encounter are P codes.
        </li>
        <li>
          <strong>C (Chassis):</strong> ABS, traction control, stability
          control, power steering, suspension electronics.
        </li>
        <li>
          <strong>B (Body):</strong> Airbags, seatbelt pretensioners, climate
          control, electric windows, central locking, dashboard instruments.
        </li>
        <li>
          <strong>U (Network):</strong> Communication between the car&apos;s
          various control modules via the CAN bus network. A U code means one
          computer in the car can&apos;t talk to another properly.
        </li>
      </ul>

      <h3>Second character &mdash; generic or manufacturer-specific</h3>
      <ul>
        <li>
          <strong>0:</strong> Generic/standardised code. This code means the
          same thing on every car, regardless of make or model. These are
          defined by the SAE (Society of Automotive Engineers) and are the
          easiest to look up and understand.
        </li>
        <li>
          <strong>1:</strong> Manufacturer-specific code. The car maker has
          defined this code for their own vehicles. A P1xxx code on a Ford
          might mean something completely different on a BMW.
        </li>
        <li>
          <strong>2 or 3:</strong> Can be either generic or manufacturer-specific
          depending on the context. These are less common.
        </li>
      </ul>

      <h3>Third character &mdash; the subsystem</h3>
      <p>For P codes, this digit tells you which part of the powertrain is affected:</p>
      <ul>
        <li><strong>1:</strong> Fuel and air metering</li>
        <li><strong>2:</strong> Fuel and air metering (injector circuit)</li>
        <li><strong>3:</strong> Ignition system or misfire</li>
        <li><strong>4:</strong> Auxiliary emissions controls (catalytic converter, EGR)</li>
        <li><strong>5:</strong> Vehicle speed control and idle control</li>
        <li><strong>6:</strong> Computer output circuit</li>
        <li><strong>7 and 8:</strong> Transmission</li>
      </ul>

      <h3>Fourth and fifth characters &mdash; the specific fault</h3>
      <p>
        These two digits narrow down the exact problem. For example, in P0420:
      </p>
      <ul>
        <li><strong>P</strong> = Powertrain</li>
        <li><strong>0</strong> = Generic (same on all cars)</li>
        <li><strong>4</strong> = Auxiliary emissions (catalytic converter area)</li>
        <li><strong>20</strong> = Catalyst system efficiency below threshold (Bank 1)</li>
      </ul>
      <p>
        So P0420 is telling you that your catalytic converter on bank 1 isn&apos;t
        working as efficiently as it should. It&apos;s the most common
        emissions-related fault code in the UK, and it&apos;s particularly
        relevant to the MOT because a failing catalytic converter will cause
        your car to fail the emissions test.
      </p>

      <h2>The most common fault codes in the UK</h2>
      <p>
        Based on data from UK garages and MOT testing stations, these are the
        fault codes British drivers encounter most frequently:
      </p>
      <ul>
        <li>
          <strong>P0420 &mdash; Catalyst system efficiency below threshold:</strong>{" "}
          Usually means the catalytic converter is ageing or a lambda sensor
          needs replacing. Repair cost: &pound;80&ndash;&pound;1,500.
        </li>
        <li>
          <strong>P0171 &mdash; System too lean (Bank 1):</strong>{" "}
          The engine is getting too much air or not enough fuel. Often caused
          by a vacuum leak, faulty MAF sensor, or fuel injector issue. Repair
          cost: &pound;50&ndash;&pound;400.
        </li>
        <li>
          <strong>P0300 &mdash; Random/multiple cylinder misfire:</strong>{" "}
          The engine is misfiring across multiple cylinders. Could be spark
          plugs, ignition coils, fuel injectors, or compression issues. Repair
          cost: &pound;40&ndash;&pound;500.
        </li>
        <li>
          <strong>P0442 &mdash; EVAP system small leak detected:</strong>{" "}
          Often just a loose or faulty fuel cap. Tighten the cap and clear the
          code &mdash; if it comes back, there may be a genuine leak. Repair
          cost: &pound;0&ndash;&pound;200.
        </li>
        <li>
          <strong>P0128 &mdash; Coolant thermostat below regulating
          temperature:</strong>{" "}
          The engine isn&apos;t reaching operating temperature quickly enough.
          Usually a stuck-open thermostat. Repair cost: &pound;50&ndash;&pound;200.
        </li>
        <li>
          <strong>C0035/C0050 &mdash; ABS wheel speed sensor:</strong>{" "}
          A wheel speed sensor has failed or its wiring is damaged. Common on
          UK cars due to road salt corrosion. Repair cost: &pound;60&ndash;&pound;200.
        </li>
        <li>
          <strong>P0401 &mdash; EGR flow insufficient:</strong>{" "}
          The Exhaust Gas Recirculation valve is blocked or not flowing enough.
          Common on diesel cars. Repair cost: &pound;100&ndash;&pound;400.
        </li>
        <li>
          <strong>B0001/B0100 &mdash; Airbag system codes:</strong>{" "}
          Can be anything from a faulty seat sensor to a clockspring issue.
          The airbag light on the dashboard is an MOT fail. Repair cost:
          &pound;80&ndash;&pound;500.
        </li>
      </ul>

      <h2>How to read fault codes yourself</h2>
      <p>
        Reading fault codes is genuinely easy. Here&apos;s what you need:
      </p>
      <ul>
        <li>
          <strong>An ELM327 Bluetooth dongle:</strong> Available from
          &pound;10&ndash;&pound;30 online. We recommend Bluetooth Low Energy
          (BLE) versions like the Vgate iCar Pro for the most reliable
          connection.
        </li>
        <li>
          <strong>An OBD2 app:</strong> AutoDiag EU, Torque Pro, Car Scanner,
          or similar. AutoDiag EU is free to download and reads codes on the
          free tier.
        </li>
      </ul>
      <p>The process is simple:</p>
      <ul>
        <li>Plug the ELM327 dongle into your car&apos;s OBD2 port</li>
        <li>Turn the ignition on (you don&apos;t need to start the engine for code reading)</li>
        <li>Open the app and connect to the dongle via Bluetooth</li>
        <li>Tap &ldquo;Scan&rdquo; or &ldquo;Read Codes&rdquo;</li>
        <li>The app will display any stored fault codes with explanations</li>
      </ul>
      <p>
        The whole process takes about two minutes. AutoDiag EU goes further by
        explaining each code in plain English, telling you whether it&apos;s
        MOT-relevant, giving you an estimated repair cost in pounds, and even
        suggesting what to check first.
      </p>

      <h2>Fault codes and the MOT</h2>
      <p>
        Since May 2018, the MOT test has become much stricter about fault codes.
        Here&apos;s what you need to know:
      </p>
      <ul>
        <li>
          <strong>Engine management light on = automatic major fail.</strong>{" "}
          This is non-negotiable. If the light is illuminated when the ignition
          is on, your car will fail. This alone accounts for a significant
          portion of MOT failures.
        </li>
        <li>
          <strong>ABS warning light on = major fail.</strong>{" "}
          The ABS system must be fully functional.
        </li>
        <li>
          <strong>Airbag warning light on = major fail.</strong>{" "}
          All supplementary restraint systems must show no faults.
        </li>
        <li>
          <strong>Emissions-related codes</strong> often correlate with actual
          emissions test failures. If you have a P0420, there&apos;s a good
          chance you&apos;ll fail the tailpipe test too.
        </li>
      </ul>
      <p>
        The smart move is to scan your car at least two weeks before your MOT.
        This gives you time to investigate any codes, get repairs done, and
        clear the codes before test day. AutoDiag EU even has a dedicated
        pre-MOT checklist feature that walks you through everything the tester
        will look at.
      </p>

      <h2>Can I just clear the codes and hope for the best?</h2>
      <p>
        Technically, yes &mdash; you can clear fault codes before the MOT. But
        there are two important caveats:
      </p>
      <ul>
        <li>
          <strong>The light will come back</strong> if the underlying problem
          hasn&apos;t been fixed. Depending on the fault, this could happen
          within minutes or a few driving cycles.
        </li>
        <li>
          <strong>Readiness monitors:</strong> When you clear codes, the
          car&apos;s emissions readiness monitors reset to &ldquo;not
          ready.&rdquo; The MOT tester can see this. If too many monitors are
          in a &ldquo;not ready&rdquo; state, the tester may not be able to
          complete the emissions test, and the car could fail or need to be
          re-presented after more driving.
        </li>
      </ul>
      <p>
        The honest advice? Fix the problem, clear the code, then drive the
        car for 50&ndash;100 miles before the MOT to let the monitors complete
        their self-checks. AutoDiag EU shows you the status of each readiness
        monitor so you know exactly when your car is ready for the test.
      </p>

      <h2>Beyond fault codes &mdash; what else can OBD2 tell you?</h2>
      <p>
        Fault codes are just the beginning. Through the OBD2 port, you can
        also access:
      </p>
      <ul>
        <li>
          <strong>Live sensor data:</strong> RPM, coolant temperature, intake
          air temperature, engine load, throttle position, fuel trims, oxygen
          sensor readings, and dozens more. This data is incredibly useful for
          diagnosing intermittent problems that don&apos;t trigger a fault code.
        </li>
        <li>
          <strong>Freeze frame data:</strong> A snapshot of sensor readings at
          the exact moment a fault code was triggered. This helps pinpoint what
          conditions caused the fault.
        </li>
        <li>
          <strong>Emissions readiness monitors:</strong> The status of the
          car&apos;s self-diagnostic checks. Essential for MOT preparation.
        </li>
        <li>
          <strong>Vehicle information:</strong> VIN number, calibration IDs,
          and software versions for the ECU.
        </li>
      </ul>

      <h2>Understanding severity &mdash; when to worry</h2>
      <p>
        Not all fault codes are equally urgent. Here&apos;s a rough guide:
      </p>
      <ul>
        <li>
          <strong>Critical (fix immediately):</strong> Misfire codes (P0300
          series), oil pressure codes, coolant temperature warnings, turbo
          overboost codes. These can cause engine damage if ignored.
        </li>
        <li>
          <strong>High (fix soon):</strong> Catalytic converter codes, EGR
          codes, transmission codes. These won&apos;t cause immediate damage
          but will worsen over time and will fail the MOT.
        </li>
        <li>
          <strong>Medium (monitor):</strong> EVAP codes, secondary air
          injection codes, minor sensor drift. These are usually not urgent
          but should be investigated.
        </li>
        <li>
          <strong>Low (advisory):</strong> Some manufacturer-specific codes
          that don&apos;t affect drivability or emissions. Still worth knowing
          about.
        </li>
      </ul>
      <p>
        AutoDiag EU colour-codes every fault code by severity and tells you
        in plain English whether you can keep driving safely or whether you
        need to stop and get it looked at immediately. No jargon, no guessing
        &mdash; just clear, actionable advice.
      </p>

      <h2>Wrapping up</h2>
      <p>
        OBD2 fault codes might look intimidating at first glance, but they
        follow a logical structure that&apos;s surprisingly easy to understand
        once you know the pattern. The first letter tells you the system, the
        second tells you whether it&apos;s generic or specific, and the
        remaining digits narrow down the exact fault. With a &pound;15 dongle
        and a free app like AutoDiag EU, you can read these codes yourself in
        minutes &mdash; saving &pound;50&ndash;&pound;100 per garage visit and
        giving you the knowledge to make informed decisions about your car&apos;s
        maintenance. That&apos;s not just a nice-to-have &mdash; in the age of
        increasingly complex vehicles, it&apos;s becoming essential.
      </p>
    </ArticleLayout>
  );
}

/* ================================================================
   Article 5 — Car Diagnostic App vs Garage UK
   ================================================================ */

export function ArticleCarDiagnosticAppVsGarageUK() {
  return (
    <ArticleLayout
      title="Car Diagnostic App vs Garage &mdash; What&apos;s Really Worth It in the UK?"
      date="2026-03-10"
      author="Reda Kaouani"
      readingTime={10}
      category="Savings"
    >
      <p>
        Picture this: your engine management light comes on. Your heart sinks a
        bit. You phone your local garage and they say they can book you in next
        Thursday for a diagnostic &mdash; that&apos;ll be &pound;60 to
        &pound;100 just to plug in their machine and tell you what&apos;s
        wrong. Then the actual repairs are on top. Sound familiar?
      </p>
      <p>
        Now picture this instead: you open an app on your phone, connect a
        &pound;15 Bluetooth dongle to your car, and two minutes later you know
        exactly what fault codes are stored, what they mean, and roughly what
        it&apos;ll cost to fix. You walk into the garage already knowing
        what&apos;s wrong, which means you can&apos;t be charged for
        unnecessary work. That&apos;s the reality of car diagnostic apps in
        2026, and it&apos;s changing how UK drivers deal with car problems.
      </p>
      <p>
        But is a phone app really a substitute for a professional garage
        diagnostic? Let&apos;s break it down honestly.
      </p>

      <h2>What does a garage diagnostic actually cost?</h2>
      <p>
        In the UK, the average cost of a diagnostic session at an independent
        garage is between <strong>&pound;50 and &pound;100</strong>. Franchise
        dealers typically charge more &mdash; <strong>&pound;80 to
        &pound;150</strong> &mdash; and some specialist marques like Porsche,
        BMW M, or Mercedes AMG can charge upwards of <strong>&pound;150 to
        &pound;200</strong> for a full diagnostic.
      </p>
      <p>
        What do you get for that money? The mechanic will connect a professional
        diagnostic tool (typically costing the garage &pound;2,000&ndash;&pound;10,000)
        to your car&apos;s OBD2 port and read all stored fault codes across
        every module. They&apos;ll interpret the codes based on their experience,
        possibly do some additional testing (checking wiring, measuring voltages,
        road testing), and give you a diagnosis along with a repair quote.
      </p>
      <p>
        There&apos;s genuine value in that expertise &mdash; a good mechanic
        brings years of experience that no app can fully replace. But here&apos;s
        the thing: for many common issues, the diagnostic process is relatively
        straightforward. Read the code, understand what it means, check the
        most likely cause first. You don&apos;t always need to pay someone
        &pound;80 for that.
      </p>

      <h2>What does a diagnostic app cost?</h2>
      <p>
        Let&apos;s look at the actual costs of going the app route:
      </p>
      <ul>
        <li>
          <strong>ELM327 Bluetooth dongle:</strong> &pound;10&ndash;&pound;30
          one-off purchase. We recommend a BLE (Bluetooth Low Energy) version
          like the Vgate iCar Pro (around &pound;25) for the most reliable
          connection and lowest battery drain.
        </li>
        <li>
          <strong>AutoDiag EU app:</strong> Free tier includes fault code
          reading, one AI audio scan per week, basic live data, and the AI
          mechanic (3 questions per day). Premium is approximately
          <strong>&pound;42 per year</strong> for unlimited everything.
        </li>
      </ul>
      <p>
        So your total first-year cost is roughly <strong>&pound;55&ndash;&pound;70</strong>
        (dongle plus Premium), and from year two onwards it&apos;s just the
        <strong>&pound;42 annual subscription</strong>. Compare that to a single
        garage diagnostic at &pound;80, and the numbers speak for themselves.
      </p>

      <h2>The annual savings calculation</h2>
      <p>
        Let&apos;s be conservative and assume you&apos;d typically visit a
        garage for diagnostics <strong>twice a year</strong> &mdash; once for
        a general check-up or when a warning light appears, and once before
        the MOT. Many drivers go more often, but let&apos;s keep it modest.
      </p>
      <ul>
        <li>Two garage diagnostics per year: 2 &times; &pound;75 (average) = <strong>&pound;150</strong></li>
        <li>AutoDiag EU Premium per year: <strong>&pound;42</strong></li>
        <li>ELM327 dongle (year one only): <strong>&pound;25</strong></li>
        <li><strong>Year one savings: &pound;83</strong></li>
        <li><strong>Year two onwards savings: &pound;108 per year</strong></li>
      </ul>
      <p>
        Over five years, that&apos;s roughly <strong>&pound;515 in
        savings</strong> &mdash; and that&apos;s the conservative estimate. If
        you&apos;re the kind of person who likes to check things regularly
        (which you should be), the savings add up even faster because the app
        is unlimited while each garage visit costs money.
      </p>

      <h2>What can the app do that a garage can&apos;t?</h2>
      <p>
        Here&apos;s where things get interesting. A diagnostic app isn&apos;t
        just a cheaper version of what the garage does &mdash; it offers some
        things a garage simply can&apos;t:
      </p>
      <ul>
        <li>
          <strong>24/7 availability:</strong> Your engine management light
          doesn&apos;t care that it&apos;s 11pm on a Sunday. With the app,
          you can scan immediately and find out whether it&apos;s safe to
          keep driving or whether you need to stop.
        </li>
        <li>
          <strong>Regular monitoring:</strong> Scan your car every week or
          every month to catch problems early, before they become expensive.
          You wouldn&apos;t pay a garage &pound;80 every month for a check-up,
          but a quick app scan takes two minutes and costs nothing.
        </li>
        <li>
          <strong>AI audio diagnostics:</strong> AutoDiag EU&apos;s audio scan
          uses your phone&apos;s microphone and machine learning to identify
          engine and cabin sounds &mdash; bearing noise, belt squeal, exhaust
          leaks, injector knock, and more. No garage offers this as a standard
          service.
        </li>
        <li>
          <strong>Drive Test:</strong> Using just your phone&apos;s sensors
          (no dongle needed), AutoDiag EU analyses your suspension, steering,
          and drivetrain during a normal drive. This kind of continuous
          monitoring simply isn&apos;t available at a garage.
        </li>
        <li>
          <strong>Knowledge transfer:</strong> The app educates you about your
          car. Over time, you understand what the codes mean, what the sensors
          are telling you, and when something needs attention. That knowledge
          is worth more than any individual diagnostic session.
        </li>
      </ul>

      <h2>What can a garage do that the app can&apos;t?</h2>
      <p>
        Let&apos;s be honest about the limitations. There are situations where
        no app can replace a skilled mechanic:
      </p>
      <ul>
        <li>
          <strong>Physical inspection:</strong> A mechanic can get under the
          car, feel for play in components, check fluid conditions, measure
          brake disc thickness, and visually inspect things an app can&apos;t
          see.
        </li>
        <li>
          <strong>Wiring and electrical diagnosis:</strong> Intermittent
          electrical faults often require hands-on testing with a multimeter,
          oscilloscope, or wiring diagrams. The app can tell you a sensor is
          reporting an out-of-range value, but it can&apos;t tell you whether
          it&apos;s the sensor itself, its wiring, or a ground fault.
        </li>
        <li>
          <strong>Manufacturer-specific deep diagnostics:</strong> Some complex
          issues require dealer-level diagnostic equipment that can access
          proprietary modules and run actuator tests. Generic OBD2 has limits.
        </li>
        <li>
          <strong>Experience and intuition:</strong> A mechanic who&apos;s seen
          thousands of cars knows that a P0420 on a 2015 Focus with 80,000
          miles is almost certainly the rear lambda sensor, not the cat. That
          kind of pattern recognition comes from experience.
        </li>
        <li>
          <strong>Actually fixing the car:</strong> The app tells you
          what&apos;s wrong. The garage fixes it. Unless you&apos;re handy
          with a spanner, you&apos;ll still need someone to do the actual
          repairs.
        </li>
      </ul>

      <h2>The smart approach &mdash; app first, garage when needed</h2>
      <p>
        The real answer isn&apos;t app <em>or</em> garage &mdash; it&apos;s
        app <em>then</em> garage when necessary. Here&apos;s the approach we
        recommend:
      </p>
      <ul>
        <li>
          <strong>Use the app for first-line diagnosis.</strong> When a warning
          light appears, scan immediately. In many cases, you&apos;ll find
          it&apos;s something simple (loose fuel cap, minor sensor issue) that
          you can address yourself or at least understand before calling a
          garage.
        </li>
        <li>
          <strong>Use the app for regular health checks.</strong> A monthly
          scan takes two minutes and catches problems early. Early detection
          means cheaper repairs.
        </li>
        <li>
          <strong>Use the app for MOT preparation.</strong> Scan two weeks
          before your MOT, fix any issues, and go into the test confident.
        </li>
        <li>
          <strong>Go to the garage for physical repairs.</strong> Once you know
          what&apos;s wrong, get quotes from multiple garages. You&apos;ll be
          negotiating from a position of knowledge, not ignorance.
        </li>
        <li>
          <strong>Go to the garage for complex diagnostics.</strong> If the app
          shows multiple codes across different systems, or if the fault is
          intermittent and hard to pin down, a skilled mechanic&apos;s hands-on
          diagnosis is worth paying for.
        </li>
      </ul>

      <h2>Real-world scenarios</h2>

      <h3>Scenario 1: Engine management light on a Monday morning</h3>
      <p>
        <strong>Without the app:</strong> Phone the garage, book in for
        Thursday, worry all week, pay &pound;80 for diagnosis, find out
        it&apos;s a P0442 (EVAP leak &mdash; probably a loose fuel cap).
        Total cost: &pound;80 and four days of anxiety.
      </p>
      <p>
        <strong>With AutoDiag EU:</strong> Scan in the car park before work.
        App shows P0442, explains it&apos;s likely a loose fuel cap, suggests
        tightening the cap and clearing the code. Light goes off. Problem
        solved. Total cost: &pound;0 and two minutes.
      </p>

      <h3>Scenario 2: Strange noise from the front left</h3>
      <p>
        <strong>Without the app:</strong> Drive to the garage, describe the
        noise (which of course disappears when the mechanic listens), pay
        &pound;80 for a diagnostic that finds nothing conclusive. Come back
        when it gets worse.
      </p>
      <p>
        <strong>With AutoDiag EU:</strong> Record the noise with the AI audio
        scan next time it happens. The app identifies it as bearing noise with
        85% confidence. Show the recording and the app&apos;s analysis to the
        mechanic. They know exactly what to look for and can confirm or rule
        it out immediately. Total diagnostic cost: &pound;0. Time saved:
        potentially a wasted trip and a second visit.
      </p>

      <h3>Scenario 3: Pre-MOT check</h3>
      <p>
        <strong>Without the app:</strong> Cross your fingers and hope for the
        best. If it fails, pay for the re-test (often free at the same garage,
        but you still need to fix the issue under time pressure).
      </p>
      <p>
        <strong>With AutoDiag EU:</strong> Scan two weeks before the MOT.
        Find a P0171 (lean mixture) that would cause the engine light to fail
        the MOT. Investigate, replace the cracked vacuum hose (£15 and 30
        minutes), clear the code, drive for a week to complete readiness
        monitors. Pass the MOT first time. Total cost: &pound;15 instead of
        a &pound;80 diagnostic plus emergency repair.
      </p>

      <h2>What about the cost of getting it wrong?</h2>
      <p>
        A fair question. What if the app misleads you? This is where the
        severity system matters. AutoDiag EU categorises every fault code by
        urgency:
      </p>
      <ul>
        <li>
          <strong>Critical codes</strong> tell you to stop driving and get
          professional help immediately. The app will never tell you to ignore
          a serious fault.
        </li>
        <li>
          <strong>High-severity codes</strong> recommend professional
          inspection within days.
        </li>
        <li>
          <strong>Medium codes</strong> suggest monitoring and investigation.
        </li>
        <li>
          <strong>Low codes</strong> are advisories.
        </li>
      </ul>
      <p>
        The app is a diagnostic <em>tool</em>, not a replacement for
        professional judgement on complex issues. But for the majority of
        everyday car problems &mdash; the ones that account for most garage
        diagnostic visits &mdash; it provides accurate, actionable information
        that saves you time and money.
      </p>

      <h2>The bottom line</h2>
      <p>
        A car diagnostic app like AutoDiag EU costs roughly <strong>&pound;42
        per year</strong>. A single garage diagnostic costs <strong>&pound;50
        to &pound;100</strong>. Over the course of a year, the app saves the
        average UK driver between <strong>&pound;80 and &pound;150</strong>
        while giving them 24/7 access to diagnostic tools, AI-powered audio
        analysis, sensor-based health monitoring, and clear, plain-English
        guidance.
      </p>
      <p>
        Does it replace the garage entirely? No, and it shouldn&apos;t try to.
        Mechanics bring irreplaceable hands-on expertise. But a diagnostic
        app is the perfect first line of defence &mdash; catching problems
        early, saving unnecessary diagnostic visits, and ensuring you walk
        into any garage as an informed customer rather than a worried one.
        That&apos;s a shift in power from the garage to the driver, and at
        &pound;42 a year, it&apos;s one of the smartest investments you can
        make as a car owner in the UK.
      </p>
    </ArticleLayout>
  );
}

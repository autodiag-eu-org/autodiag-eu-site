import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleScanVIN() {
  const faq: FaqItem[] = [
    {
      q: "What is a VIN and where do I find it?",
      a: "The VIN (Vehicle Identification Number) is a unique 17-character code stamped on every vehicle since 1981. You find it etched at the base of the windscreen on the driver's side, on the driver's door frame, on a manufacturer plate under the bonnet, and on the V5C logbook. Vision AI reads the 17 characters directly from a photo of the stamp or the logbook.",
    },
    {
      q: "What does the VIN actually contain?",
      a: "The VIN splits into three sections. The WMI (3 chars) identifies the manufacturer and country. The VDS (6 chars) describes model, body style and engine. The VIS (8 chars) encodes model year, assembly plant and serial number. Each character has a precise meaning and cannot be made up at random.",
    },
    {
      q: "Does a VIN scan return the full vehicle history?",
      a: "It gives access to whatever the European aggregated databases hold: recorded accident claims, successive mileages at MOTs, dealer-logged services, manufacturer recalls. Depth depends on country and how well official services share data. It is incomparably richer than a plate scan.",
    },
    {
      q: "Why is the VIN more reliable than the plate for buying?",
      a: "Because the plate can be swapped, transferred or faked. The VIN is stamped in metal and follows the car for its whole life. A vehicle whose VIN does not match the V5C is probably stolen or cloned. It is the car's security number.",
    },
    {
      q: "Any privacy concerns when scanning a VIN?",
      a: "For your own car, none. For a car you want to buy, you are within your rights to consult its history — European law even requires the seller to disclose certain information. AutoDiag EU does not tie scanned VINs to your identity.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Scan the VIN: decode a car's complete history"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={9}
        category="Used Car Buying"
      >
        <p>
          Seventeen characters. That is all you need to know a car's
          entire story. The VIN (Vehicle Identification Number) is the
          true DNA of a vehicle: it encodes maker, plant, model year,
          engine type, bodywork, and each unit gets its own unique
          serial. Scanning that VIN with your phone opens a full file in
          two seconds — and in the context of a used purchase, it saves
          thousands of pounds in avoided bad surprises.
        </p>

        <h2>The anatomy of 17 characters</h2>
        <p>
          The VIN has been standardised worldwide since 1981. The first
          three characters form the WMI (World Manufacturer Identifier):
          they encode country and maker. WDB is Mercedes-Benz Germany,
          VF1 is Renault France, WVW is Volkswagen Germany. The next six
          form the VDS (Vehicle Descriptor Section): model, body style,
          engine family, sometimes the restraint system. The final
          eight form the VIS (Vehicle Identifier Section): the tenth
          character encodes model year (A is 2010, B is 2011 and so on,
          skipping I, O, Q, U, Z), the eleventh is the assembly plant,
          the last six are the serial number for that plant and year.
        </p>

        <h2>What the Vision AI OCR captures</h2>
        <p>
          The VIN is stamped or stickered in several places on a car.
          The most accessible is the lower portion of the windscreen on
          the driver's side, visible from outside through the glass.
          The etching is small, reflective, often partly obscured by
          dust. Vision AI handles that: it equalises exposure, removes
          reflections, and reads the 17 characters with built-in
          tolerance for the classic confusions (zero versus letter O,
          one versus letter I). It can also read the VIN from the
          manufacturer plate under the bonnet, or from a photo of the
          V5C logbook — handy for scanning remotely before driving to
          see a car.
        </p>

        <h2>Used buying, changed forever</h2>
        <p>
          Typical scenario: you answer an advert for a 2016 Audi A4
          Avant 2.0 TDI, 90 000 miles claimed. The seller has service
          receipts, the car looks clean, everything seems fine. You scan
          the VIN with your phone. The answer comes back in three
          seconds: model year is indeed 2016, but the mileage recorded
          at the last MOT (14 months ago) was 104 500 miles. Conclusion:
          the odometer has been wound back by 14 500 miles. You walk
          away. Odometer fraud is the most common used-car scam and
          Vision AI catches it in three seconds. On fifty used-car
          purchases, field feedback suggests one or two will show this
          kind of inconsistency.
        </p>

        <h2>Forgotten manufacturer recalls</h2>
        <p>
          Every manufacturer regularly issues recall campaigns for
          defects identified after sale. Takata airbags, EGR valves,
          high-pressure fuel pumps, ABS modules, injectors — the list
          is long. Owners are supposed to receive a letter, but with
          moves, resales and lost post, many cars are still on the road
          with uncorrected defects. The VIN scan queries manufacturer
          databases and lists the recalls that apply to that exact car
          with their status (done or outstanding). If a recall is still
          open, you can demand a free repair at a dealer before
          completing the purchase.
        </p>

        <h2>Ordering parts without errors</h2>
        <p>
          Another, less spectacular but very practical use: ordering
          parts. When you order brake pads for a Ford Focus there are
          often three or four different part numbers depending on brake
          kit (disc diameter), trim level, exact build year. The VIN
          transmits that information cleanly to the parts vendor who
          finds the right reference first time. No more round trips to
          the motor factor, no more 20 GBP restocking fees. See also
          our piece on{" "}
          <Link href="/en/blog/prevent-engine-failure-preventive-sound-diagnosis">
            preventive sound diagnosis
          </Link>
          .
        </p>

        <h2>Insurance quotes and valuations</h2>
        <p>
          When you request an insurance quote, brokers sometimes ask
          only for the registration, sometimes for the full VIN.
          VIN-based quotes are more precise because they account for
          the exact model, equipment level, and declared modifications.
          A VIN scan before shopping around can move a quote by 10 to
          25 percent either way. On a typical annual premium of 500 to
          1100 GBP, that is 50 to 275 GBP a year potentially saved.
        </p>

        <h2>Limits and privacy</h2>
        <p>
          The VIN scan does not give you everything. Unreported
          accidents do not show. Work done at independent garages
          outside the dealer network is not always captured. The depth
          of history depends on country: the UK, France, Germany and
          Belgium have robust MOT/CT databases, other countries are
          thinner. On the privacy side, AutoDiag EU does not tie
          scanned VINs to your personal account and requests are
          purged within seven days. You query, decide and forget. To
          round it off with an electronic check, add an OBD2 scan that
          exposes the stored codes — including the{" "}
          <Link href="/en/codes/p0011">P0011 code</Link> often linked
          to neglected timing maintenance.
        </p>
      </ArticleLayoutV2>
    </>
  );
}

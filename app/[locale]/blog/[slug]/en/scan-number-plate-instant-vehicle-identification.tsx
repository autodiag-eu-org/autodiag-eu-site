import Link from "next/link";
import { ArticleLayoutV2 } from "../_shared/ArticleLayoutV2";
import { FaqJsonLd, type FaqItem } from "../_shared/FaqJsonLd";

export function ArticleScanNumberPlate() {
  const faq: FaqItem[] = [
    {
      q: "How long does a number plate scan take?",
      a: "Under two seconds in normal conditions. The OCR reads the characters, queries the European database, and returns make, model, year, engine size and fuel type. In low light or with a dirty plate it can climb to four seconds, but accuracy stays above 95%.",
    },
    {
      q: "Does plate scanning work across Europe?",
      a: "Yes, on all standard EU formats plus UK and Swiss plates. A handful of personalised or diplomatic plates return no technical data, but the OCR still reads the characters correctly. Technical databases are covered for the UK, France, Germany, Belgium, Spain, Italy, Portugal, the Netherlands and Switzerland.",
    },
    {
      q: "Can I scan a plate when looking at a used car?",
      a: "That is exactly the main use case. You walk up to the car, scan the plate, and instantly compare with the advert. Make, model, year, fuel — everything has to match. If the ad says petrol and the database says diesel, you walk away before the haggling even starts.",
    },
    {
      q: "Does Vision AI detect tampered plates?",
      a: "It catches basic inconsistencies: a format that does not match the claimed country, poorly aligned characters, abnormal backgrounds. It does not replace a full administrative check. For any transaction, always demand the V5C logbook and a proper HPI style report as well.",
    },
    {
      q: "Does the scan return mileage or history?",
      a: "No. The plate scan only returns the vehicle's technical specs: make, model, engine, year, fuel, emissions. For full history (accidents, mileage, service), you need to scan the VIN, which is the 17-character unique code.",
    },
  ];

  return (
    <>
      <FaqJsonLd items={faq} />
      <ArticleLayoutV2
        locale="en"
        title="Scan a number plate: instant vehicle identification"
        date="2026-04-13"
        author="Reda Kaouani"
        readingTime={8}
        category="Used Car Buying"
      >
        <p>
          Picture this: you are in a supermarket car park staring at a
          Golf VII the seller swears is a 2016 TSI with low mileage. You
          pull out your phone, frame the plate, tap once. Two seconds
          later your screen reads: Volkswagen Golf VII, 1.6 TDI 110 hp,
          first registered 2014. End of conversation. You just dodged a
          used car scam. That is exactly what the AutoDiag EU number
          plate scanner does, and it is the single most useful feature we
          have ever added for second-hand buyers.
        </p>

        <h2>OCR for the suspicious buyer</h2>
        <p>
          Two technical layers make it work: an OCR tuned for European
          plate formats, and a registration database that returns the
          vehicle's technical file. The OCR handles the nine main EU
          formats plus UK and Switzerland. It can tell a zero from a
          letter O, a one from a letter I, and it corrects the classic
          inversions caused by shooting at an angle. Once the characters
          are read they hit the reference API which returns the spec
          sheet in a few hundred milliseconds.
        </p>

        <h2>What you get in two seconds</h2>
        <p>
          The response contains: the make, the exact model with trim
          level where available, engine displacement and power, fuel type
          (petrol, diesel, hybrid, EV, LPG, CNG, E85), first registration
          year, and Euro emissions standard (Euro 4, 5, 6, 6d). For a
          buyer, that is enough to verify whether the car meets London
          ULEZ or any European Low Emission Zone, whether the quoted
          engine matches reality, and whether the year is consistent with
          the mileage on the clock.
        </p>

        <h2>The coffee shop test</h2>
        <p>
          My favourite use: before I ever go to see a car, I scan the
          plate from the advert photos online. If the seller has blurred
          the plate, I ask for a clean picture. If the AI response does
          not match the listing — different fuel, year out by two,
          downgraded trim — I do not even need to drive over. I save a
          round trip, an hour of haggling and probably a clocked
          odometer. Out of ten adverts scanned this way, roughly two turn
          out to be dodgy.
        </p>

        <h2>European law and your privacy</h2>
        <p>
          The common question: is it legal to scan any plate? Yes. A
          number plate is public by definition. Cross-referencing the
          plate with the owner's personal data is illegal, and AutoDiag
          EU does not do it. You receive the vehicle's technical file,
          not the owner's name or address. That distinction is critical
          and fully respects UK GDPR and EU GDPR. Queries are not stored
          and no profile is built.
        </p>

        <h2>The owner use case</h2>
        <p>
          Scan your own car's plate and the app builds a vehicle profile
          automatically: make, model, year, fuel pre-filled. You save
          five minutes of manual entry. That profile then personalises
          OBD2 diagnostics, guides the{" "}
          <Link href="/en/blog/mot-preparation-guide-2026">MOT preparation</Link>
          {" "}and tailors service advice. The scan is a front door, not
          just a curiosity.
        </p>

        <h2>When the scan fails</h2>
        <p>
          Three edge cases. Custom or cherished plates with fanciful
          character sequences return a clean OCR but no technical data.
          Older plates (the pre-2001 UK format for example) work but
          deliver thinner data. Non-EU plates (Norway, Serbia, Turkey)
          fall outside the scope. In those cases, the app offers to scan
          the VIN instead for the same information, usually more
          complete.
        </p>

        <h2>Plate + VIN + OBD2: the winning combo</h2>
        <p>
          For a complete pre-purchase check, the AutoDiag EU protocol
          stacks three layers. Layer one: the plate scan in ten seconds
          to verify basic consistency. Layer two: the{" "}
          <Link href="/en/blog/scan-vin-decode-car-complete-history">
            VIN scan
          </Link>{" "}
          to pull history (accidents, mileage, service). Layer three: an
          OBD2 connection if a dongle is available, to read stored and
          pending codes. With these three layers you see in fifteen
          minutes what a traditional inspection spends an hour hunting
          for. It is the whole point of the{" "}
          <Link href="/en/blog/car-diagnostic-app-vs-garage-uk">
            app versus garage approach
          </Link>
          .
        </p>
      </ArticleLayoutV2>
    </>
  );
}

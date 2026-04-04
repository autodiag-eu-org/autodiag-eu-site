/**
 * scripts/validate-dtc-data.ts
 * Validates integrity of DTC data in data/dtc/dtc_codes.json
 * Checks both FR and EN content + GBP prices
 * Run with: npx tsx scripts/validate-dtc-data.ts
 */

import { readFileSync } from "fs";
import { join } from "path";

// ---------- Types ----------

interface LocalizedText {
  fr: string;
  en?: string;
}

interface CountryPrices {
  fr: number;
  de: number;
  ch: number;
  es: number;
  pt: number;
  gb?: number;
}

interface Cause {
  name: LocalizedText;
  costMin: CountryPrices;
  costMax: CountryPrices;
}

interface FaqEntry {
  question: string;
  answer: string;
}

interface DtcCode {
  code: string;
  name: LocalizedText;
  description: LocalizedText;
  severity: string;
  canDrive: boolean;
  category: string;
  causes: Cause[];
  symptoms: { fr: string[]; en?: string[] };
  relatedCodes: string[];
  faq: { fr: FaqEntry[]; en?: FaqEntry[] };
  motFail?: string;
}

// ---------- Helpers ----------

const VALID_SEVERITIES = ["low", "medium", "high", "critical"] as const;
const COUNTRIES_FR = ["fr", "de", "ch", "es", "pt"] as const;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ---------- Load data ----------

const dataPath = join(__dirname, "..", "data", "dtc", "dtc_codes.json");
const raw = readFileSync(dataPath, "utf-8");
const dtcCodes: DtcCode[] = JSON.parse(raw);

// ---------- Validation ----------

let errors = 0;

function fail(msg: string): void {
  console.error(`  ERROR: ${msg}`);
  errors++;
}

// Check 7: No duplicate codes
const seenCodes = new Set<string>();
for (const dtc of dtcCodes) {
  if (seenCodes.has(dtc.code)) {
    fail(`Duplicate code: ${dtc.code}`);
  }
  seenCodes.add(dtc.code);
}

// Per-code checks
for (const dtc of dtcCodes) {
  const prefix = `[${dtc.code}]`;

  // Check 1a: description.fr >= 80 words
  if (!dtc.description?.fr) {
    fail(`${prefix} missing description.fr`);
  } else {
    const wc = wordCount(dtc.description.fr);
    if (wc < 80) {
      fail(`${prefix} description.fr too short (${wc} words, min 80)`);
    }
  }

  // Check 1b: description.en >= 80 words (if present)
  if (dtc.description?.en) {
    const wc = wordCount(dtc.description.en);
    if (wc < 80) {
      fail(`${prefix} description.en too short (${wc} words, min 80)`);
    }
  }

  // Check 2a: Realistic prices for all causes (EUR countries)
  if (!Array.isArray(dtc.causes) || dtc.causes.length === 0) {
    fail(`${prefix} must have at least 1 cause`);
  } else {
    for (const cause of dtc.causes) {
      for (const country of COUNTRIES_FR) {
        const min = cause.costMin?.[country];
        const max = cause.costMax?.[country];

        if (min === undefined || max === undefined) {
          fail(`${prefix} cause "${cause.name?.fr}" missing price for ${country}`);
          continue;
        }
        if (min <= 0) {
          fail(`${prefix} cause "${cause.name?.fr}" costMin <= 0 for ${country} (${min})`);
        }
        if (max <= 0) {
          fail(`${prefix} cause "${cause.name?.fr}" costMax <= 0 for ${country} (${max})`);
        }
        if (max > 10000) {
          fail(`${prefix} cause "${cause.name?.fr}" costMax > 10000 for ${country} (${max})`);
        }
        if (min > max) {
          fail(`${prefix} cause "${cause.name?.fr}" costMin (${min}) > costMax (${max}) for ${country}`);
        }
      }

      // Check 2b: GBP prices (if present)
      const gbMin = cause.costMin?.gb;
      const gbMax = cause.costMax?.gb;
      if (gbMin !== undefined && gbMax !== undefined) {
        if (gbMin <= 0) {
          fail(`${prefix} cause "${cause.name?.en ?? cause.name?.fr}" costMin.gb <= 0 (${gbMin})`);
        }
        if (gbMax <= 0) {
          fail(`${prefix} cause "${cause.name?.en ?? cause.name?.fr}" costMax.gb <= 0 (${gbMax})`);
        }
        if (gbMax > 8500) {
          fail(`${prefix} cause "${cause.name?.en ?? cause.name?.fr}" costMax.gb > 8500 GBP (${gbMax})`);
        }
        if (gbMin > gbMax) {
          fail(`${prefix} cause "${cause.name?.en ?? cause.name?.fr}" costMin.gb (${gbMin}) > costMax.gb (${gbMax})`);
        }
      }
    }
  }

  // Check 3: Valid severity
  if (!VALID_SEVERITIES.includes(dtc.severity as typeof VALID_SEVERITIES[number])) {
    fail(`${prefix} invalid severity "${dtc.severity}" (expected: ${VALID_SEVERITIES.join(", ")})`);
  }

  // Check 4: Boolean canDrive
  if (typeof dtc.canDrive !== "boolean") {
    fail(`${prefix} canDrive is not a boolean (got ${typeof dtc.canDrive}: ${String(dtc.canDrive)})`);
  }

  // Check 5: At least 3 FAQ entries in faq.fr
  if (!Array.isArray(dtc.faq?.fr)) {
    fail(`${prefix} missing faq.fr array`);
  } else if (dtc.faq.fr.length < 3) {
    fail(`${prefix} faq.fr has ${dtc.faq.fr.length} entries (min 3)`);
  } else {
    for (let i = 0; i < dtc.faq.fr.length; i++) {
      const entry = dtc.faq.fr[i];
      if (!entry.question || !entry.answer) {
        fail(`${prefix} faq.fr[${i}] missing question or answer`);
      }
    }
  }

  // Check 5b: EN FAQ entries (if present)
  if (Array.isArray(dtc.faq?.en)) {
    if (dtc.faq.en.length < 3) {
      fail(`${prefix} faq.en has ${dtc.faq.en.length} entries (min 3)`);
    }
    for (let i = 0; i < dtc.faq.en.length; i++) {
      const entry = dtc.faq.en[i];
      if (!entry.question || !entry.answer) {
        fail(`${prefix} faq.en[${i}] missing question or answer`);
      }
    }
  }

  // Check 6: EN name (if present, must not be empty)
  if (dtc.name?.en !== undefined && dtc.name.en.trim().length === 0) {
    fail(`${prefix} name.en is empty`);
  }

  // Check 7: motFail (if present, must not be empty)
  if (dtc.motFail !== undefined && dtc.motFail.trim().length === 0) {
    fail(`${prefix} motFail is empty`);
  }
}

// Check 8: All relatedCodes reference existing codes
for (const dtc of dtcCodes) {
  if (Array.isArray(dtc.relatedCodes)) {
    for (const ref of dtc.relatedCodes) {
      if (!seenCodes.has(ref)) {
        fail(`[${dtc.code}] relatedCodes references non-existent code "${ref}"`);
      }
    }
  }
}

// ---------- Summary ----------

const enCount = dtcCodes.filter((d) => d.description.en).length;
const gbCount = dtcCodes.filter((d) => d.causes[0]?.costMin?.gb !== undefined).length;

console.log("");
console.log(`  Codes: ${dtcCodes.length}`);
console.log(`  With EN content: ${enCount}`);
console.log(`  With GBP prices: ${gbCount}`);
console.log("");

if (errors > 0) {
  console.error(`FAIL: ${errors} error(s) found in ${dtcCodes.length} DTC codes.`);
  process.exit(1);
} else {
  console.log(`PASS: ${dtcCodes.length} DTC codes validated successfully.`);
}

/**
 * scripts/validate-dtc-data.ts
 * Validates integrity of DTC data in data/dtc/dtc_codes.json
 * Run with: npx tsx scripts/validate-dtc-data.ts
 */

import { readFileSync } from "fs";
import { join } from "path";

// ---------- Types ----------

interface LocalizedText {
  fr: string;
}

interface CountryPrices {
  fr: number;
  de: number;
  ch: number;
  es: number;
  pt: number;
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
  symptoms: LocalizedText & { fr: string[] };
  relatedCodes: string[];
  faq: { fr: FaqEntry[] };
}

// ---------- Helpers ----------

const VALID_SEVERITIES = ["low", "medium", "high", "critical"] as const;
const COUNTRIES = ["fr", "de", "ch", "es", "pt"] as const;

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

  // Check 1: description.fr >= 80 words
  if (!dtc.description?.fr) {
    fail(`${prefix} missing description.fr`);
  } else {
    const wc = wordCount(dtc.description.fr);
    if (wc < 80) {
      fail(`${prefix} description.fr too short (${wc} words, min 80)`);
    }
  }

  // Check 2: Realistic prices for all causes
  if (!Array.isArray(dtc.causes) || dtc.causes.length === 0) {
    fail(`${prefix} must have at least 1 cause`);
  } else {
    for (const cause of dtc.causes) {
      for (const country of COUNTRIES) {
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

  // Check 5: At least 1 cause (already checked above, but explicit)
  // (covered in check 2)

  // Check 6: At least 3 FAQ entries in faq.fr
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

console.log("");
if (errors > 0) {
  console.error(`FAIL: ${errors} error(s) found in ${dtcCodes.length} DTC codes.`);
  process.exit(1);
} else {
  console.log(`PASS: ${dtcCodes.length} DTC codes validated successfully.`);
}

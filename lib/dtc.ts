/**
 * DTC utility functions — search, filter, and retrieve diagnostic trouble codes
 * Supports FR and EN locales
 */

import dtcCodesData from "@/data/dtc/dtc_codes.json";

interface CountryPrices {
  fr: number;
  de: number;
  ch: number;
  es: number;
  pt: number;
  gb?: number;
}

interface DTCCause {
  name: { fr: string; en?: string };
  costMin: CountryPrices;
  costMax: CountryPrices;
}

interface DTCFaqEntry {
  question: string;
  answer: string;
}

export interface DTCCode {
  code: string;
  name: { fr: string; en?: string };
  description: { fr: string; en?: string };
  severity: "low" | "medium" | "high" | "critical";
  canDrive: boolean;
  category: string;
  causes: DTCCause[];
  symptoms: { fr: string[]; en?: string[] };
  relatedCodes: string[];
  faq: { fr: DTCFaqEntry[]; en?: DTCFaqEntry[] };
  motFail?: string;
}

const dtcCodes: DTCCode[] = dtcCodesData as DTCCode[];

/**
 * Get a single DTC by its code (e.g., "P0420").
 * Case-insensitive lookup.
 */
export function getDTCByCode(code: string): DTCCode | undefined {
  const upperCode = code.toUpperCase();
  return dtcCodes.find((dtc) => dtc.code === upperCode);
}

/**
 * Search DTCs by query string — matches code, name, or description.
 * Case-insensitive, returns all matching entries.
 * Searches both FR and EN content.
 */
export function searchDTCs(query: string): DTCCode[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();

  return dtcCodes.filter((dtc) => {
    const matchesCode = dtc.code.toLowerCase().includes(normalizedQuery);
    const matchesNameFr = dtc.name.fr.toLowerCase().includes(normalizedQuery);
    const matchesNameEn = dtc.name.en?.toLowerCase().includes(normalizedQuery);
    const matchesDescFr = dtc.description.fr
      .toLowerCase()
      .includes(normalizedQuery);
    const matchesDescEn = dtc.description.en
      ?.toLowerCase()
      .includes(normalizedQuery);
    const matchesSymptomsFr = dtc.symptoms.fr.some((s) =>
      s.toLowerCase().includes(normalizedQuery)
    );
    const matchesSymptomsEn = dtc.symptoms.en?.some((s) =>
      s.toLowerCase().includes(normalizedQuery)
    );

    return (
      matchesCode ||
      matchesNameFr ||
      matchesNameEn ||
      matchesDescFr ||
      matchesDescEn ||
      matchesSymptomsFr ||
      matchesSymptomsEn
    );
  });
}

/**
 * Get all DTCs for a given category (e.g., "emissions", "moteur").
 */
export function getDTCsByCategory(category: string): DTCCode[] {
  return dtcCodes.filter(
    (dtc) => dtc.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get all DTC codes.
 */
export function getAllCodes(): DTCCode[] {
  return dtcCodes;
}

/**
 * Get all unique categories with their entry counts.
 */
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const dtc of dtcCodes) {
    counts[dtc.category] = (counts[dtc.category] ?? 0) + 1;
  }
  return counts;
}

/**
 * Get related DTC entries for a given code.
 */
export function getRelatedDTCs(code: string): DTCCode[] {
  const dtc = getDTCByCode(code);
  if (!dtc) return [];

  return dtc.relatedCodes
    .map((relCode) => getDTCByCode(relCode))
    .filter((entry): entry is DTCCode => entry !== undefined);
}

/**
 * Helper to get localised text from a field that has {fr, en?} shape.
 * Falls back to FR if the requested locale is not available.
 */
export function getLocalised(
  field: { fr: string; en?: string },
  locale: string
): string {
  if (locale === "en" && field.en) return field.en;
  return field.fr;
}

/**
 * Helper to get localised array from a field that has {fr: string[], en?: string[]} shape.
 */
export function getLocalisedArray(
  field: { fr: string[]; en?: string[] },
  locale: string
): string[] {
  if (locale === "en" && field.en) return field.en;
  return field.fr;
}

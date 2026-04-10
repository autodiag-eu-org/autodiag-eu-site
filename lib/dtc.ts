/**
 * DTC utility functions — search, filter, and retrieve diagnostic trouble codes
 * Supports FR, EN, DE, ES, PT locales
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

interface LocalisedString {
  fr: string;
  en?: string;
  de?: string;
  es?: string;
  pt?: string;
}

interface LocalisedStringArray {
  fr: string[];
  en?: string[];
  de?: string[];
  es?: string[];
  pt?: string[];
}

interface DTCCause {
  name: LocalisedString;
  costMin: CountryPrices;
  costMax: CountryPrices;
}

interface DTCFaqEntry {
  question: string;
  answer: string;
}

interface LocalisedFaq {
  fr: DTCFaqEntry[];
  en?: DTCFaqEntry[];
  de?: DTCFaqEntry[];
  es?: DTCFaqEntry[];
  pt?: DTCFaqEntry[];
}

export interface DTCCode {
  code: string;
  name: LocalisedString;
  description: LocalisedString;
  severity: "low" | "medium" | "high" | "critical";
  canDrive: boolean;
  category: string;
  causes: DTCCause[];
  symptoms: LocalisedStringArray;
  relatedCodes: string[];
  faq: LocalisedFaq;
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
 * Helper to get localised text from a multilingual field.
 * Falls back: requested locale → EN → FR.
 */
export function getLocalised(
  field: LocalisedString,
  locale: string
): string {
  const value = field[locale as keyof LocalisedString];
  if (value) return value;
  if (field.en) return field.en;
  return field.fr;
}

/**
 * Helper to get localised array from a multilingual field.
 * Falls back: requested locale → EN → FR.
 */
export function getLocalisedArray(
  field: LocalisedStringArray,
  locale: string
): string[] {
  const value = field[locale as keyof LocalisedStringArray];
  if (value) return value;
  if (field.en) return field.en;
  return field.fr;
}

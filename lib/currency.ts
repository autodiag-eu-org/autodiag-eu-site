"use client";

/**
 * Dynamic currency based on Vercel geolocation.
 *
 * The middleware writes a `user-country` cookie from x-vercel-ip-country.
 * This module reads it client-side and returns the matching currency config.
 */

export type CurrencyCode = "EUR" | "GBP" | "CHF";

export interface CurrencyConfig {
  /** ISO currency code */
  code: CurrencyCode;
  /** Display symbol */
  symbol: string;
  /** Premium annual price in local currency */
  premiumAmount: number;
  /** Format a price with the currency symbol */
  format: (amount: number) => string;
}

const CHF_COUNTRIES = new Set(["CH", "LI"]);
const GBP_COUNTRIES = new Set(["GB"]);

function getCurrencyForCountry(country: string): CurrencyCode {
  if (CHF_COUNTRIES.has(country)) return "CHF";
  if (GBP_COUNTRIES.has(country)) return "GBP";
  return "EUR";
}

const PREMIUM_PRICES: Record<CurrencyCode, number> = {
  EUR: 49,
  GBP: 42,
  CHF: 49,
};

function formatPrice(amount: number, currency: CurrencyCode): string {
  if (currency === "GBP") return `\u00a3${amount}`;
  if (currency === "CHF") return `${amount} CHF`;
  return `${amount} \u20ac`;
}

function buildConfig(currency: CurrencyCode): CurrencyConfig {
  return {
    code: currency,
    symbol: currency === "GBP" ? "\u00a3" : currency === "CHF" ? "CHF" : "\u20ac",
    premiumAmount: PREMIUM_PRICES[currency],
    format: (amount: number) => formatPrice(amount, currency),
  };
}

/** Read the user-country cookie set by the middleware. */
function getCountryFromCookie(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith("user-country="));
  return match ? match.split("=")[1] : "";
}

/**
 * Returns the currency config for the current visitor.
 * Call from any client component — no hook/state needed, it's synchronous.
 */
export function getCurrency(): CurrencyConfig {
  const country = getCountryFromCookie();
  const code = getCurrencyForCountry(country);
  return buildConfig(code);
}

/**
 * Server-side helper — pass the country code directly.
 */
export function getCurrencyForServer(country: string): CurrencyConfig {
  const code = getCurrencyForCountry(country);
  return buildConfig(code);
}

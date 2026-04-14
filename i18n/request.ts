/**
 * next-intl request configuration
 * Loads messages based on the requested locale
 */

import { getRequestConfig } from "next-intl/server";
import { routing } from "@/lib/i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  type Messages = Record<string, unknown>;

  const messages = (await import(`@/i18n/${locale}.json`)).default as Messages;

  // Fallback: merge with FR base so empty strings fall back to French
  if (locale !== "fr") {
    const frMessages = (await import("@/i18n/fr.json")).default as Messages;

    const UNSAFE_KEYS = new Set(["__proto__", "constructor", "prototype"]);

    function mergeDeep(base: Messages, target: Messages): Messages {
      for (const key of Object.keys(base)) {
        if (UNSAFE_KEYS.has(key)) continue;
        if (!Object.prototype.hasOwnProperty.call(base, key)) continue;
        const baseVal = base[key];
        if (typeof baseVal === "object" && baseVal !== null) {
          const existing = Object.prototype.hasOwnProperty.call(target, key)
            ? (target[key] as Messages | undefined)
            : undefined;
          const targetSub: Messages = existing ?? Object.create(null);
          target[key] = mergeDeep(baseVal as Messages, targetSub);
        } else if (!Object.prototype.hasOwnProperty.call(target, key) || !target[key]) {
          target[key] = baseVal;
        }
      }
      return target;
    }

    mergeDeep(frMessages, messages);
  }

  return {
    locale,
    messages,
  };
});

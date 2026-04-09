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

    function mergeDeep(base: Messages, target: Messages): Messages {
      for (const key of Object.keys(base)) {
        if (typeof base[key] === "object" && base[key] !== null) {
          const baseSub = base[key] as Messages;
          const targetSub = (target[key] ?? {}) as Messages;
          target[key] = mergeDeep(baseSub, targetSub);
        } else if (!target[key]) {
          target[key] = base[key];
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

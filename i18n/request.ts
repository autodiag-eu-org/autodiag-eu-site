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

  const messages = (await import(`@/i18n/${locale}.json`)).default as Record<
    string,
    Record<string, string> | string
  >;

  return {
    locale,
    messages,
  };
});

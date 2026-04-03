/**
 * next-intl configuration — routing and locale settings
 */

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr"],
  defaultLocale: "fr",
});

/**
 * next-intl configuration — routing and locale settings
 */

import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["fr", "en", "de", "es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "fr",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

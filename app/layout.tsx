import type { ReactNode } from "react";

/**
 * Root layout — minimal wrapper.
 * The real layout with i18n, metadata, and components is in app/[locale]/layout.tsx.
 * This root layout exists because Next.js requires it at app/layout.tsx.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}

/**
 * Middleware — Locale detection and redirection
 * Redirects / to /fr based on Accept-Language header
 */

import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n";

export default createMiddleware(routing);

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (/api/...)
     * - Next.js internals (/_next/...)
     * - Static files with extensions (.ico, .png, .jpg, .svg, etc.)
     */
    "/((?!api|_next|.*\\..*).*)",
  ],
};

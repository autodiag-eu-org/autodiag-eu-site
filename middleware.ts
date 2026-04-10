/**
 * Middleware — Locale detection + geolocation currency cookie
 */

import createMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";
import { routing } from "@/lib/i18n";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Set user-country cookie from Vercel geolocation header
  const country = request.headers.get("x-vercel-ip-country") || "";

  if (country) {
    response.cookies.set("user-country", country, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24h
    });
  }

  return response;
}

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

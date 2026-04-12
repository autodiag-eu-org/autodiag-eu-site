/**
 * Middleware — Locale detection + geolocation currency cookie
 */

import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/lib/i18n";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  let response = intlMiddleware(request);

  // Upgrade any temporary locale redirect (307) to permanent (308) for SEO.
  // Googlebot treats 307 as "keep the original URL indexed" which blocks indexation
  // of the target — 308 tells Google to transfer signals to the canonical URL.
  if (response.status === 307 || response.status === 302) {
    const location = response.headers.get("location");
    if (location) {
      const permanent = NextResponse.redirect(
        new URL(location, request.url),
        308,
      );
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== "location") {
          permanent.headers.set(key, value);
        }
      });
      response = permanent;
    }
  }

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

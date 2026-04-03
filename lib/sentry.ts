/**
 * Sentry — Lightweight integration point.
 * Does NOT install @sentry/nextjs (heavy). Prepares the interface
 * so that when SENTRY_DSN is configured, errors are captured.
 *
 * To upgrade later: npm install @sentry/nextjs, then replace this
 * file with the full Sentry initialization.
 */

const SENTRY_DSN = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

interface ErrorContext {
  componentStack?: string;
  digest?: string;
  extra?: Record<string, unknown>;
}

/**
 * Capture an exception and send it to Sentry if DSN is configured.
 * Falls back to a silent no-op when Sentry is not set up.
 */
export function captureException(
  error: unknown,
  context?: ErrorContext
): void {
  if (!SENTRY_DSN) return;

  // Use the Reporting API if available (modern browsers)
  if (
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    "sendBeacon" in navigator
  ) {
    const payload = JSON.stringify({
      dsn: SENTRY_DSN,
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      context,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    });

    navigator.sendBeacon(
      `https://sentry.io/api/0/envelope/`,
      payload
    );
  }
}

/**
 * Set user context for Sentry.
 * Placeholder for when @sentry/nextjs is installed.
 */
export function setUser(_user: { id?: string; email?: string }): void {
  // Will be implemented when @sentry/nextjs is added
}

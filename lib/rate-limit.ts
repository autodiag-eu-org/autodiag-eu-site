/**
 * Simple in-memory rate limiter for API routes
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

/**
 * Check if a request from the given IP is within rate limits.
 * @returns true if the request is allowed, false if rate limited.
 */
export function rateLimit(
  ip: string,
  maxRequests: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count < maxRequests) {
    entry.count += 1;
    return true;
  }

  return false;
}

/**
 * Clean up expired entries to prevent memory leaks.
 * Call periodically in long-running processes.
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(key);
    }
  }
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'cookie-consent';

function loadGA4Script(gaId: string): void {
  if (typeof document === 'undefined') return;

  // Prevent double-loading
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) {
    return;
  }

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inlineScript);
}

export default function CookieConsent() {
  const t = useTranslations('cookie');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (consent === 'accepted') {
        const gaId = process.env.NEXT_PUBLIC_GA_ID;
        if (gaId) {
          loadGA4Script(gaId);
        }
        return;
      }
      if (consent === 'refused') {
        return;
      }
      // No consent stored yet — show banner
      setShowBanner(true);
    } catch {
      // localStorage unavailable — show banner
      setShowBanner(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // localStorage unavailable
    }
    setShowBanner(false);

    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId) {
      loadGA4Script(gaId);
    }
  }, []);

  const handleRefuse = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'refused');
    } catch {
      // localStorage unavailable
    }
    setShowBanner(false);
  }, []);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          role="dialog"
          aria-label="Consentement aux cookies"
          aria-describedby="cookie-consent-message"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="cookie-consent fixed bottom-0 left-0 right-0 z-[70] backdrop-blur-xl bg-[rgba(12,12,30,0.95)] border-t border-[rgba(255,255,255,0.08)] px-4 py-4 sm:py-5"
        >
          <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              id="cookie-consent-message"
              className="text-sm text-secondary"
            >
              {t('message')}
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleRefuse}
                className="rounded-full border border-[rgba(255,255,255,0.15)] px-4 py-2 text-sm font-medium text-secondary transition-colors duration-200 hover:text-white hover:border-[rgba(255,255,255,0.3)]"
              >
                {t('refuse')}
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="rounded-full bg-cyan px-4 py-2 text-sm font-semibold text-bg transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Call this function from the footer "Gerer mes choix" link
 * to reset consent and re-show the cookie banner.
 */
export function resetCookieConsent(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage unavailable
  }
  window.location.reload();
}

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'cta-banner-dismissed';

export default function CTABanner() {
  const t = useTranslations('cta');
  const [isVisible, setIsVisible] = useState(false);
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '#';

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (dismissed === 'true') return;
    } catch {
      // localStorage unavailable
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleDismiss() {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // localStorage unavailable
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="complementary"
          aria-label={t('scanFree')}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="cta-banner fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-[rgba(12,12,30,0.9)] border-t border-[rgba(255,255,255,0.08)] px-4 py-3"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <p className="text-sm font-medium text-white sm:text-base">
              {t('scanFree')}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-green px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,200,83,0.4)]"
              >
                {t('download')}
              </a>

              <button
                type="button"
                onClick={handleDismiss}
                className="flex items-center justify-center w-8 h-8 rounded-full text-secondary hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                aria-label={t('dismiss')}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

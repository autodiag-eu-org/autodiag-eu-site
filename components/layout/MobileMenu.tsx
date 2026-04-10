'use client';

import { useEffect, useRef, useCallback } from 'react';
import { Link } from '@/lib/i18n';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'dtcCodes', href: '/codes' },
  { key: 'compatibility', href: '/compatibilite' },
  { key: 'demo', href: '/demo' },
  { key: 'pricing', href: '/prix' },
] as const;

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '#';

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab' || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when menu opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-[60] backdrop-blur-xl bg-[rgba(12,12,30,0.95)] flex flex-col"
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-secondary hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
              aria-label={t('closeMenu')}
            >
              <svg
                width="24"
                height="24"
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

          {/* Navigation links */}
          <nav
            aria-label="Menu mobile"
            className="flex flex-1 flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-semibold text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t(link.key)}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Download button at bottom */}
          <div className="p-6 pb-10">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green px-6 py-4 text-lg font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,200,83,0.4)]"
              aria-label={t('download')}
            >
              {t('download')}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

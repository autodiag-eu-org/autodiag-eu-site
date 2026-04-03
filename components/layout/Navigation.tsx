'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'dtcCodes', href: '/codes' },
  { key: 'compatibility', href: '/compatibilite' },
  { key: 'demo', href: '/demo' },
  { key: 'pricing', href: '/prix' },
] as const;

export default function Navigation() {
  const t = useTranslations('nav');
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 80) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '#';

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[rgba(12,12,30,0.8)] border-b border-[rgba(255,255,255,0.08)]"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-cyan focus:text-bg focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          {t('skipToContent')}
        </a>

        <nav
          aria-label="Navigation principale"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
              aria-label="AutoDiag EU — Accueil"
            >
              <span className="text-gradient">AutoDiag EU</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-secondary transition-colors duration-200 hover:text-white rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>

            {/* Right side: download button + mobile hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-green px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,200,83,0.4)]"
                aria-label={t('download')}
              >
                {t('download')}
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-secondary hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                aria-label={t('openMenu')}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
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
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}

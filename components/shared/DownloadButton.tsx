'use client';

import { useTranslations } from 'next-intl';

export default function DownloadButton() {
  const t = useTranslations('download');
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '#';

  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-green px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,83,0.5)]"
      aria-label={t('label')}
    >
      {/* Shimmer overlay */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        aria-hidden="true"
      />

      {/* Play Store icon */}
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="currentColor"
        aria-hidden="true"
        className="relative shrink-0"
      >
        <path d="M1.57 0.22C1.22 0.58 1 1.13 1 1.82V20.18C1 20.87 1.22 21.42 1.57 21.78L1.65 21.86L11.95 11.56V11.44V11.32L1.65 1.02L1.57 0.22Z" />
        <path d="M15.38 14.99L11.95 11.56V11.44V11.32L15.38 7.89L15.48 7.95L19.52 10.27C20.63 10.89 20.63 11.93 19.52 12.55L15.48 14.87L15.38 14.99Z" />
        <path d="M15.48 14.87L11.95 11.44L1.57 21.78C1.97 22.2 2.62 22.26 3.36 21.83L15.48 14.87Z" />
        <path d="M15.48 7.95L3.36 1.05C2.62 0.62 1.97 0.68 1.57 1.1L11.95 11.44L15.48 7.95Z" />
      </svg>

      <span className="relative">{t('text')}</span>
    </a>
  );
}

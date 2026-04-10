import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo';

interface ComparaisonPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ComparaisonPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'comparison' });
  return {
    ...generatePageMetadata({
      title: t('metaTitle'),
      description: t('metaDescription'),
      locale,
      path: 'comparaison',
    }),
    keywords: [
      'meilleure app OBD2 2026',
      'Carly alternative',
      'app diagnostic auto',
      'comparatif OBD2',
      'Car Scanner alternative',
      'OBDeleven alternative',
      'scan audio moteur',
      'diagnostic automobile IA',
    ],
  };
}

/* ── Structural data — text comes from i18n ── */

const COMPARISON_KEYS = [
  'scanAudio', 'scanCabin', 'visionAI', 'aiMechanic', 'noDongle',
  'preCT', 'autoQuote', 'multiSensor', 'dtcRead', 'liveData',
  'dtcClear', 'annualPrice', 'languages',
] as const;

const UNIQUE_SET = new Set([
  'scanAudio', 'scanCabin', 'visionAI', 'aiMechanic',
  'noDongle', 'preCT', 'autoQuote', 'multiSensor',
]);

/** Competitor values — prices/numbers/dashes don't translate */
const COMPETITOR_DATA: Record<string, { carly: string; carscanner: string; obdeleven: string }> = {
  scanAudio: { carly: '—', carscanner: '—', obdeleven: '—' },
  scanCabin: { carly: '—', carscanner: '—', obdeleven: '—' },
  visionAI: { carly: '—', carscanner: '—', obdeleven: '—' },
  aiMechanic: { carly: '—', carscanner: '—', obdeleven: '—' },
  noDongle: { carly: '—', carscanner: '—', obdeleven: '—' },
  preCT: { carly: '—', carscanner: '—', obdeleven: '—' },
  autoQuote: { carly: '—', carscanner: '—', obdeleven: '—' },
  multiSensor: { carly: '—', carscanner: '—', obdeleven: '—' },
  dtcRead: { carly: '✓', carscanner: '✓', obdeleven: '✓' },
  liveData: { carly: '✓', carscanner: '✓', obdeleven: '✓' },
  dtcClear: { carly: '✓', carscanner: '✓', obdeleven: '✓' },
  annualPrice: { carly: '59,99 EUR', carscanner: '5,99 EUR/an', obdeleven: '49,99 EUR' },
  languages: { carly: '18', carscanner: '40+', obdeleven: '12' },
};

const UNIQUE_ICON_KEYS = ['audio', 'vision', 'phone', 'fusion'] as const;

function CheckIcon() {
  return (
    <svg
      className="inline-block h-5 w-5 text-green"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function DashIcon() {
  return (
    <span className="inline-block h-5 w-5 text-center leading-5 text-secondary/40" aria-hidden="true">
      —
    </span>
  );
}

function CardIcon({ type }: { type: typeof UNIQUE_ICON_KEYS[number] }) {
  const iconClass = 'h-8 w-8 text-cyan';
  switch (type) {
    case 'audio':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
          <path d="M19 10v2a7 7 0 01-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      );
    case 'vision':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'phone':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'fusion':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      );
  }
}

export default async function ComparaisonPage() {
  const t = await getTranslations('comparison');

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-14 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {t('pageTitle')}{' '}
          <span className="text-gradient">{t('pageTitleAccent')}</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-secondary">
          {t('pageSubtitle')}
        </p>
      </div>

      {/* Comparison table — scrollable on mobile */}
      <div className="mb-16 overflow-x-auto rounded-2xl border border-border bg-glass backdrop-blur-sm">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-5 text-sm font-medium text-secondary">
                {t('tableHeaderFeature')}
              </th>
              <th className="border-l border-cyan/30 bg-cyan/5 px-6 py-5 text-sm font-bold text-cyan">
                AutoDiag EU
              </th>
              <th className="px-6 py-5 text-sm font-medium text-secondary">
                Carly
              </th>
              <th className="px-6 py-5 text-sm font-medium text-secondary">
                Car Scanner
              </th>
              <th className="px-6 py-5 text-sm font-medium text-secondary">
                OBDeleven
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_KEYS.map((key, index) => {
              const isUnique = UNIQUE_SET.has(key);
              const comp = COMPETITOR_DATA[key];
              return (
                <tr
                  key={key}
                  className={`border-b border-border/50 ${
                    index % 2 === 0 ? '' : 'bg-white/[0.01]'
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-white">
                    {t(`row_${key}`)}
                  </td>
                  <td className="border-l border-cyan/30 bg-cyan/5 px-6 py-4 text-sm">
                    {isUnique ? (
                      <span className="inline-flex items-center gap-2">
                        <CheckIcon />
                        <span className="font-medium text-green">
                          {t(`row_${key}_autodiag`)}
                        </span>
                      </span>
                    ) : (
                      <span className="text-white">{t(`row_${key}_autodiag`)}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {comp.carly === '—' ? (
                      <DashIcon />
                    ) : (
                      <span className="text-secondary">{comp.carly}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {comp.carscanner === '—' ? (
                      <DashIcon />
                    ) : (
                      <span className="text-secondary">{comp.carscanner}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {comp.obdeleven === '—' ? (
                      <DashIcon />
                    ) : (
                      <span className="text-secondary">{comp.obdeleven}</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Unique selling points */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          {t('uniqueTitle')} <span className="text-gradient">{t('uniqueTitleAccent')}</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {UNIQUE_ICON_KEYS.map((icon) => (
            <div
              key={icon}
              className="rounded-2xl border border-border bg-glass backdrop-blur-sm p-8 transition-all hover:border-cyan/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan/10">
                <CardIcon type={icon} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">
                {t(`unique_${icon}_title`)}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">
                {t(`unique_${icon}_desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-10 text-center">
        <h2 className="mb-3 text-2xl font-bold">
          {t('ctaTitle')}
        </h2>
        <p className="mb-6 text-secondary">
          {t('ctaSubtitle')}
        </p>
        <Link
          href="/fr#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3.5 font-semibold text-black transition-transform hover:scale-105"
        >
          {t('ctaButton')}
        </Link>
      </div>
    </section>
  );
}

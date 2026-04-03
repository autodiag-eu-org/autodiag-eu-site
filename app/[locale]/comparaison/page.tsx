import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

interface ComparaisonPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ComparaisonPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...generatePageMetadata({
      title: 'AutoDiag EU vs la concurrence — pourquoi nous choisir',
      description:
        'Comparatif complet AutoDiag EU vs Carly, Car Scanner, OBDeleven. Scan audio IA moteur, vision AI, diagnostic sans dongle — des fonctions uniques en 2026.',
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

interface ComparisonRow {
  feature: string;
  autodiag: string;
  carly: string;
  carscanner: string;
  obdeleven: string;
  isUnique: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Scan audio IA moteur',
    autodiag: 'Oui (91,3%)',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Scan audio habitacle',
    autodiag: 'Oui (75%)',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Vision AI / OCR',
    autodiag: 'Oui',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'IA mecanicien (Claude)',
    autodiag: 'Oui',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Diagnostic sans dongle',
    autodiag: 'Oui',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Pre-controle technique 5 pays',
    autodiag: 'Oui',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Devis automatique',
    autodiag: 'Oui',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Fusion multi-capteurs',
    autodiag: 'Oui (94%)',
    carly: '—',
    carscanner: '—',
    obdeleven: '—',
    isUnique: true,
  },
  {
    feature: 'Lecture codes DTC',
    autodiag: 'Oui',
    carly: 'Oui',
    carscanner: 'Oui',
    obdeleven: 'Oui',
    isUnique: false,
  },
  {
    feature: 'Donnees en direct (live data)',
    autodiag: 'Oui',
    carly: 'Oui',
    carscanner: 'Oui',
    obdeleven: 'Oui',
    isUnique: false,
  },
  {
    feature: 'Effacement codes DTC',
    autodiag: 'Oui',
    carly: 'Oui',
    carscanner: 'Oui',
    obdeleven: 'Oui',
    isUnique: false,
  },
  {
    feature: 'Prix annuel',
    autodiag: '49 CHF',
    carly: '59,99 EUR',
    carscanner: '5,99 EUR/an',
    obdeleven: '49,99 EUR',
    isUnique: false,
  },
  {
    feature: 'Langues europeennes',
    autodiag: '5',
    carly: '18',
    carscanner: '40+',
    obdeleven: '12',
    isUnique: false,
  },
];

interface UniqueCard {
  title: string;
  description: string;
  icon: 'audio' | 'vision' | 'phone' | 'fusion';
}

const UNIQUE_CARDS: UniqueCard[] = [
  {
    title: 'Scan audio IA',
    description:
      'Notre intelligence artificielle ecoute votre moteur et detecte 11 types de pannes par le son, avec 91,3% de precision. Aucun concurrent ne propose cette technologie.',
    icon: 'audio',
  },
  {
    title: 'Vision AI / OCR',
    description:
      'Prenez en photo un code, une piece, un voyant — notre IA identifie et explique instantanement. Reconnaissance visuelle integree au diagnostic.',
    icon: 'vision',
  },
  {
    title: 'Diagnostic sans dongle',
    description:
      'Pas besoin d\'acheter un dongle OBD2. Le Drive Test utilise l\'accelerometre, le gyroscope, le GPS et le micro de votre telephone pour diagnostiquer.',
    icon: 'phone',
  },
  {
    title: 'Fusion multi-capteurs',
    description:
      'Audio + OBD2 + capteurs du telephone = un diagnostic combine a 94% de precision. Plus les sources sont nombreuses, plus le resultat est fiable.',
    icon: 'fusion',
  },
];

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

function CardIcon({ type }: { type: UniqueCard['icon'] }) {
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

export default function ComparaisonPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-14 text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          AutoDiag EU vs la concurrence —{' '}
          <span className="text-gradient">pourquoi nous choisir</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-secondary">
          Les apps OBD2 classiques lisent des codes et affichent des donnees.
          AutoDiag EU va bien plus loin : scan audio IA, vision artificielle,
          diagnostic sans dongle, et fusion multi-capteurs. Comparez par
          vous-meme.
        </p>
      </div>

      {/* Comparison table — scrollable on mobile */}
      <div className="mb-16 overflow-x-auto rounded-2xl border border-border bg-glass backdrop-blur-sm">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-5 text-sm font-medium text-secondary">
                Fonctionnalite
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
            {COMPARISON_DATA.map((row, index) => (
              <tr
                key={row.feature}
                className={`border-b border-border/50 ${
                  index % 2 === 0 ? '' : 'bg-white/[0.01]'
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-white">
                  {row.feature}
                </td>
                <td className="border-l border-cyan/30 bg-cyan/5 px-6 py-4 text-sm">
                  {row.isUnique ? (
                    <span className="inline-flex items-center gap-2">
                      <CheckIcon />
                      <span className="font-medium text-green">
                        {row.autodiag}
                      </span>
                    </span>
                  ) : (
                    <span className="text-white">{row.autodiag}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm">
                  {row.carly === '—' ? (
                    <DashIcon />
                  ) : (
                    <span className="text-secondary">{row.carly}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm">
                  {row.carscanner === '—' ? (
                    <DashIcon />
                  ) : (
                    <span className="text-secondary">{row.carscanner}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm">
                  {row.obdeleven === '—' ? (
                    <DashIcon />
                  ) : (
                    <span className="text-secondary">{row.obdeleven}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Unique selling points */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Ce qui nous rend <span className="text-gradient">uniques</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {UNIQUE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-glass backdrop-blur-sm p-8 transition-all hover:border-cyan/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan/10">
                <CardIcon type={card.icon} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-10 text-center">
        <h2 className="mb-3 text-2xl font-bold">
          Pret a essayer la difference ?
        </h2>
        <p className="mb-6 text-secondary">
          Rejoignez la beta gratuite et decouvrez un diagnostic auto qui va
          vraiment plus loin.
        </p>
        <Link
          href="/fr#beta"
          className="inline-block rounded-xl bg-gradient-to-r from-cyan to-green px-8 py-3.5 font-semibold text-black transition-transform hover:scale-105"
        >
          Essayez AutoDiag EU gratuitement
        </Link>
      </div>
    </section>
  );
}

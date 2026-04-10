"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-green"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const FREE_FEATURE_KEYS = [
  "featureScanAudio",
  "featureScanCabin",
  "featureDTC",
  "featureLiveData",
  "featureAI",
  "featureHistory",
] as const;

const PREMIUM_FEATURE_KEYS = [
  "featureScanAudio",
  "featureScanCabin",
  "featureDTC",
  "featureLiveData",
  "featureAI",
  "featureHistory",
  "featureErase",
  "featureQuote",
  "featureCT",
  "featureExport",
  "featureDriveTest",
] as const;

export default function PricingSection() {
  const t = useTranslations('pricing');
  const tc = useTranslations('common');

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-3 text-secondary">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Free plan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col rounded-2xl border border-border p-8 backdrop-blur-md transition-all hover:border-border/60"
        >
          <h3 className="text-xl font-bold">{t('freeTitle')}</h3>
          <p className="mt-1 text-sm text-secondary">{t('freeSubtitle')}</p>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold">0</span>
            <span className="text-secondary">CHF</span>
          </div>
          <ul className="mt-8 flex-1 space-y-3">
            {FREE_FEATURE_KEYS.map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm text-secondary">
                <CheckIcon />
                {t(key)} : {t(`${key}Free`)}
              </li>
            ))}
          </ul>
          <a
            href="#beta"
            className="mt-8 block rounded-full border border-border py-3 text-center font-semibold transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            {t('ctaFree')}
          </a>
        </motion.div>

        {/* Premium plan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass relative flex flex-col rounded-2xl border border-cyan/40 p-8 shadow-[0_0_30px_rgba(0,229,255,0.08)] backdrop-blur-md"
        >
          <span className="absolute -top-3 right-6 rounded-full bg-cyan px-4 py-1 text-xs font-bold text-black">
            {tc('recommended')}
          </span>
          <h3 className="text-xl font-bold">{t('premiumTitle')}</h3>
          <p className="mt-1 text-sm text-secondary">{t('premiumSubtitle')}</p>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gradient">
              {t('price')}
            </span>
          </div>
          <p className="mt-2 text-sm text-cyan/80">
            {t('trial')}
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {PREMIUM_FEATURE_KEYS.map((key) => (
              <li key={key} className="flex items-start gap-2 text-sm">
                <CheckIcon />
                {t(key)} : {t(`${key}Premium`)}
              </li>
            ))}
          </ul>
          <a
            href="#beta"
            className="group relative mt-8 block overflow-hidden rounded-full bg-green py-3 text-center font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
          >
            <span className="relative z-10">
              {t('ctaPremium')}
            </span>
            <span
              aria-hidden="true"
              className="shimmer pointer-events-none absolute inset-0"
            />
          </a>
        </motion.div>
      </div>

      <p className="mt-8 text-center text-sm text-secondary">
        {t('paymentNote')} — {t('trialNote')}
      </p>
    </section>
  );
}

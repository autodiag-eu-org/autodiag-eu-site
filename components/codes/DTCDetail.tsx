"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SeverityBadge from "@/components/shared/SeverityBadge";
import CostRange from "@/components/shared/CostRange";
import ShareButton from "@/components/shared/ShareButton";
import VehicleSelector from "@/components/tools/VehicleSelector";
import type { DTCCode } from "@/lib/dtc";
import { getLocalised, getLocalisedArray } from "@/lib/dtc";
import type { VehicleCompatibility } from "@/lib/vehicles";

interface DTCDetailProps {
  dtc: DTCCode;
  relatedDTCs: DTCCode[];
  sameCategoryDTCs?: DTCCode[];
  locale?: string;
}

type CountryKey = "fr" | "de" | "ch" | "es" | "pt" | "gb";

const COUNTRY_KEYS: CountryKey[] = ["fr", "de", "ch", "es", "pt"];
const COUNTRY_KEYS_EN: CountryKey[] = ["gb", "fr", "de", "ch", "es", "pt"];
const CURRENCY_MAP: Record<CountryKey, string> = {
  fr: "EUR", de: "EUR", ch: "CHF", es: "EUR", pt: "EUR", gb: "GBP",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function DTCDetail({
  dtc,
  relatedDTCs,
  sameCategoryDTCs = [],
  locale = "fr",
}: DTCDetailProps) {
  const t = useTranslations('dtcDetail');
  const isEN = locale === "en";
  const countries = isEN ? COUNTRY_KEYS_EN : COUNTRY_KEYS;
  const defaultCountry: CountryKey = isEN ? "gb" : "fr";

  const [selectedCountry, setSelectedCountry] = useState<CountryKey>(defaultCountry);
  const [expandedCauses, setExpandedCauses] = useState<Record<number, boolean>>(
    { 0: true }
  );
  const [expandedFaq, setExpandedFaq] = useState<Record<number, boolean>>({});
  const [selectedVehicle, setSelectedVehicle] =
    useState<VehicleCompatibility | null>(null);

  const currency = CURRENCY_MAP[selectedCountry] ?? "EUR";

  const toggleCause = useCallback((index: number) => {
    setExpandedCauses((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setExpandedFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const name = getLocalised(dtc.name, locale);
  const description = getLocalised(dtc.description, locale);
  const symptoms = getLocalisedArray(dtc.symptoms, locale);
  const faqLocaleKey = locale as keyof typeof dtc.faq;
  const faqData = dtc.faq[faqLocaleKey] ?? dtc.faq.en ?? dtc.faq.fr;

  const NUMBER_FORMATS: Record<string, string> = {
    fr: "fr-FR", en: "en-GB", de: "de-DE", es: "es-ES", pt: "pt-PT",
  };
  const numberFormat = NUMBER_FORMATS[locale] ?? "fr-FR";

  return (
    <article className="mx-auto max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">{dtc.code}</span>
          </h1>
          <SeverityBadge severity={dtc.severity} />
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              dtc.canDrive
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {dtc.canDrive ? (
              <>
                <svg
                  className="h-3.5 w-3.5"
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
                {t('safeToDrive')}
              </>
            ) : (
              <>
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  />
                </svg>
                {t('stopVehicle')}
              </>
            )}
          </span>
        </div>
        <h2 className="text-lg font-medium text-secondary">{name}</h2>
      </header>

      {/* Description */}
      <section className="mb-10">
        <h3 className="mb-4 text-xl font-bold">
          {t('whatDoesCodeMean', { code: dtc.code })}
        </h3>
        <div className="rounded-2xl border border-border bg-glass p-6 text-secondary leading-relaxed backdrop-blur-md">
          {description}
        </div>
      </section>

      {/* MOT fail notice (EN only) */}
      {isEN && dtc.motFail && (
        <section className="mb-10">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <h3 className="mb-2 text-lg font-bold text-amber-400">
              {t('motFailTitle', { code: dtc.code })}
            </h3>
            <p className="text-secondary leading-relaxed">{dtc.motFail}</p>
          </div>
        </section>
      )}

      {/* Causes with cost per country */}
      <section className="mb-10">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold">
            {t('causesTitle')}
          </h3>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value as CountryKey)}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-white transition-colors focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
            aria-label={t('countryAriaLabel')}
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {t(`country_${c}`)} ({CURRENCY_MAP[c]})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          {dtc.causes.map((cause, index) => {
            const costMinVal = cause.costMin[selectedCountry] ?? cause.costMin.fr;
            const costMaxVal = cause.costMax[selectedCountry] ?? cause.costMax.fr;
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-glass backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => toggleCause(index)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left"
                  aria-expanded={expandedCauses[index] ?? false}
                >
                  <div className="flex-1">
                    <p className="font-semibold">{getLocalised(cause.name, locale)}</p>
                    <div className="mt-1">
                      <CostRange
                        min={costMinVal}
                        max={costMaxVal}
                        currency={currency}
                      />
                    </div>
                  </div>
                  <ChevronIcon open={expandedCauses[index] ?? false} />
                </button>
                <AnimatePresence>
                  {expandedCauses[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-5 pb-5 pt-4">
                        <p className="mb-3 text-sm text-secondary">
                          {t('priceByCountry')}
                        </p>
                        <div className="grid gap-2 sm:grid-cols-5">
                          {countries.map((countryKey) => {
                            const minVal = cause.costMin[countryKey] ?? cause.costMin.fr;
                            const maxVal = cause.costMax[countryKey] ?? cause.costMax.fr;
                            return (
                              <div
                                key={countryKey}
                                className={`rounded-lg border p-3 text-center ${
                                  countryKey === selectedCountry
                                    ? "border-cyan/30 bg-cyan/5"
                                    : "border-border"
                                }`}
                              >
                                <p className="text-xs text-secondary">
                                  {t(`country_${countryKey}`)}
                                </p>
                                <p className="mt-1 text-sm font-semibold">
                                  {new Intl.NumberFormat(numberFormat).format(minVal)}{" "}
                                  —{" "}
                                  {new Intl.NumberFormat(numberFormat).format(maxVal)}
                                </p>
                                <p className="text-xs text-secondary">
                                  {CURRENCY_MAP[countryKey]}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Symptoms */}
      <section className="mb-10">
        <h3 className="mb-4 text-xl font-bold">
          {t('symptomsTitle')}
        </h3>
        <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
          <ul className="space-y-2.5">
            {symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-secondary">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vehicle Selector */}
      <section className="mb-10">
        <h3 className="mb-4 text-xl font-bold">
          {t('compatibilityTitle')}
        </h3>
        <VehicleSelector onSelect={setSelectedVehicle} />
        {selectedVehicle && (
          <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="text-sm text-emerald-400">
              {t('compatibilityResult', {
                brand: selectedVehicle.brand,
                model: selectedVehicle.model,
                protocol: selectedVehicle.protocol,
                code: dtc.code,
                pidsSupported: selectedVehicle.pidsSupported,
              })}
            </p>
          </div>
        )}
      </section>

      {/* Related codes */}
      {relatedDTCs.length > 0 && (
        <section className="mb-10">
          <h3 className="mb-4 text-xl font-bold">
            {t('relatedTitle')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedDTCs.map((related) => (
              <Link
                key={related.code}
                href={`/${locale}/codes/${related.code.toLowerCase()}`}
                className="rounded-lg border border-border bg-glass px-4 py-2.5 backdrop-blur-md transition-all hover:border-cyan/30 hover:text-cyan"
              >
                <span className="font-bold text-gradient">{related.code}</span>
                <span className="ml-2 text-sm text-secondary">
                  {getLocalised(related.name, locale)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqData.length > 0 && (
        <section className="mb-10">
          <h3 className="mb-4 text-xl font-bold">
            {t('faqTitle')}
          </h3>
          <div className="space-y-3">
            {faqData.map((faqEntry, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-glass backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left"
                  aria-expanded={expandedFaq[index] ?? false}
                >
                  <span className="font-semibold">{faqEntry.question}</span>
                  <ChevronIcon open={expandedFaq[index] ?? false} />
                </button>
                <AnimatePresence>
                  {expandedFaq[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-5 pb-5 pt-4">
                        <p className="text-secondary leading-relaxed">
                          {faqEntry.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Same-category codes (internal linking for SEO) */}
      {sameCategoryDTCs.length > 0 && (
        <section className="mb-10">
          <h3 className="mb-4 text-xl font-bold">
            {t('sameCategoryTitle')}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {sameCategoryDTCs.map((entry) => (
              <Link
                key={entry.code}
                href={`/${locale}/codes/${entry.code.toLowerCase()}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-glass p-4 backdrop-blur-md transition-all hover:border-cyan/30 hover:bg-cyan/5"
              >
                <span className="font-bold text-gradient">{entry.code}</span>
                <span className="flex-1 text-sm text-secondary group-hover:text-white">
                  {getLocalised(entry.name, locale)}
                </span>
                <svg
                  className="h-4 w-4 shrink-0 text-secondary transition-colors group-hover:text-cyan"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mb-10">
        <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold">
            {t('ctaTitle')}
          </h3>
          <p className="mb-6 text-secondary">
            {t('ctaDescription')}
          </p>
          <a
            href="#beta"
            className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
          >
            <span className="relative z-10">
              {t('ctaButton')}
            </span>
            <span
              aria-hidden="true"
              className="shimmer pointer-events-none absolute inset-0"
            />
          </a>
        </div>
      </section>

      {/* Share */}
      <div className="flex justify-end">
        <ShareButton
          title={`${dtc.code} — ${name}`}
          text={t('shareText', { code: dtc.code, name })}
        />
      </div>
    </article>
  );
}

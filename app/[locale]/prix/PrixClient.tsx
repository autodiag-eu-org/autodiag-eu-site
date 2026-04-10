"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { getCurrency } from "@/lib/currency";

/* ── Plan features — keys reference the pricing namespace ── */

const PLAN_FEATURE_KEYS = [
  "ScanAudio",
  "ScanCabin",
  "DTC",
  "LiveData",
  "AI",
  "History",
  "Erase",
  "Quote",
  "CT",
  "Export",
  "DriveTest",
] as const;

/* Features that have a non-dash free value */
const FREE_INCLUDED = new Set([
  "ScanAudio",
  "ScanCabin",
  "DTC",
  "LiveData",
  "AI",
  "History",
]);

/* ── Competitor comparison — structural data only ── */

const COMPETITOR_KEYS = [
  "annualPrice",
  "scanAudio",
  "visionAI",
  "driveTest",
  "aiMechanic",
  "preCT",
  "dtcRead",
  "liveData",
  "dtcClear",
  "sensorFusion",
] as const;

/** Static competitor values (prices/numbers don't translate) */
const COMPETITOR_VALUES: Record<
  string,
  { carly: string; carScanner: string; obdeleven: string }
> = {
  annualPrice: { carly: "59,99 EUR", carScanner: "5,99 EUR/an", obdeleven: "49,99 EUR" },
  scanAudio: { carly: "—", carScanner: "—", obdeleven: "—" },
  visionAI: { carly: "—", carScanner: "—", obdeleven: "—" },
  driveTest: { carly: "—", carScanner: "—", obdeleven: "—" },
  aiMechanic: { carly: "—", carScanner: "—", obdeleven: "—" },
  preCT: { carly: "—", carScanner: "—", obdeleven: "—" },
  dtcRead: { carly: "✓", carScanner: "✓", obdeleven: "✓" },
  liveData: { carly: "✓", carScanner: "✓", obdeleven: "✓" },
  dtcClear: { carly: "✓", carScanner: "Premium", obdeleven: "✓" },
  sensorFusion: { carly: "—", carScanner: "—", obdeleven: "—" },
};

/* ── FAQ keys ── */

const FAQ_KEYS = ["freeReally", "premiumMore", "trialHow", "payment", "refund"] as const;

/* ── Icons ── */

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

/* ── Main component ── */

export default function PrixClient() {
  const t = useTranslations("pricing");
  const cur = getCurrency();
  const [expandedFaq, setExpandedFaq] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setExpandedFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="space-y-12">
      {/* Plan cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Free */}
        <div className="glass flex flex-col rounded-2xl border border-border p-8 backdrop-blur-md transition-all hover:border-border/60">
          <h2 className="text-xl font-bold">{t("freeTitle")}</h2>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold">{cur.format(0)}</span>
          </div>
          <p className="mt-2 text-sm text-secondary">
            {t("freeDesc")}
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {PLAN_FEATURE_KEYS.filter((k) => FREE_INCLUDED.has(k)).map((k) => (
              <li
                key={k}
                className="flex items-start gap-2 text-sm text-secondary"
              >
                <CheckIcon />
                <span>
                  {t(`feature${k}`)}
                  {t(`feature${k}Free`) !== t(`feature${k}Premium`) && (
                    <span className="text-secondary/60">
                      {" "}
                      — {t(`feature${k}Free`)}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#beta"
            className="mt-8 block rounded-full border border-border py-3 text-center font-semibold transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            {t("ctaFree")}
          </a>
        </div>

        {/* Premium */}
        <div className="glass relative flex flex-col rounded-2xl border border-cyan/40 p-8 shadow-[0_0_30px_rgba(0,229,255,0.08)] backdrop-blur-md">
          <span className="absolute -top-3 right-6 rounded-full bg-cyan px-4 py-1 text-xs font-bold text-black">
            {t("recommended")}
          </span>
          <h2 className="text-xl font-bold">{t("premiumTitle")}</h2>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gradient">{cur.format(cur.premiumAmount)}</span>
            <span className="text-secondary">/ {t("perYear")}</span>
          </div>
          <p className="mt-2 text-sm text-cyan/80">
            {t("premiumTrialDesc")}
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {PLAN_FEATURE_KEYS.map((k) => (
              <li key={k} className="flex items-start gap-2 text-sm">
                <CheckIcon />
                <span>
                  {t(`feature${k}`)}
                  {t(`feature${k}Premium`) !== t("unlimited") && (
                    <span className="text-secondary/60">
                      {" "}
                      — {t(`feature${k}Premium`)}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#beta"
            className="group relative mt-8 block overflow-hidden rounded-full bg-green py-3 text-center font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
          >
            <span className="relative z-10">
              {t("ctaPremium")}
            </span>
            <span
              aria-hidden="true"
              className="shimmer pointer-events-none absolute inset-0"
            />
          </a>
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-6 text-xl font-bold">
          {t("comparisonTitle")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-semibold text-secondary">
                  {t("featureLabel")}
                </th>
                <th className="pb-3 px-4 text-center font-semibold text-secondary">
                  {t("freeTitle")}
                </th>
                <th className="pb-3 pl-4 text-center font-semibold text-cyan">
                  {t("premiumTitle")}
                </th>
              </tr>
            </thead>
            <tbody>
              {PLAN_FEATURE_KEYS.map((k) => (
                <tr key={k} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">{t(`feature${k}`)}</td>
                  <td className="py-3 px-4 text-center text-secondary">
                    {FREE_INCLUDED.has(k) ? t(`feature${k}Free`) : "—"}
                  </td>
                  <td className="py-3 pl-4 text-center font-medium text-green">
                    {t(`feature${k}Premium`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitor comparison */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-2 text-xl font-bold">
          {t("vsTitle")}
        </h2>
        <p className="mb-6 text-sm text-secondary">
          {t("vsSubtitle")}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-semibold text-secondary">
                  {t("featureLabel")}
                </th>
                <th className="pb-3 px-3 text-center font-semibold text-cyan">
                  AutoDiag EU
                </th>
                <th className="pb-3 px-3 text-center font-semibold text-secondary">
                  Carly
                </th>
                <th className="pb-3 px-3 text-center font-semibold text-secondary">
                  Car Scanner
                </th>
                <th className="pb-3 pl-3 text-center font-semibold text-secondary">
                  OBDeleven
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPETITOR_KEYS.map((k) => {
                const vals = COMPETITOR_VALUES[k];
                return (
                  <tr key={k} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">{t(`comp_${k}`)}</td>
                    <td className="py-3 px-3 text-center font-medium text-green">
                      {t(`comp_${k}_autodiag`)}
                    </td>
                    <td className="py-3 px-3 text-center text-secondary">
                      {vals.carly}
                    </td>
                    <td className="py-3 px-3 text-center text-secondary">
                      {vals.carScanner}
                    </td>
                    <td className="py-3 pl-3 text-center text-secondary">
                      {vals.obdeleven}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="mb-6 text-xl font-bold">{t("faqTitle")}</h2>
        <div className="space-y-3">
          {FAQ_KEYS.map((k, index) => (
            <div
              key={k}
              className="rounded-xl border border-border bg-glass backdrop-blur-md"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-3 p-5 text-left"
                aria-expanded={expandedFaq[index] ?? false}
              >
                <span className="font-semibold">{t(`faq_${k}_q`)}</span>
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
                        {t(`faq_${k}_a`)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold">
          {t("readyTitle")}
        </h2>
        <p className="mb-6 text-secondary">
          {t("readyDesc")}
        </p>
        <a
          href="#beta"
          className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
        >
          <span className="relative z-10">{t("ctaPremium")}</span>
          <span
            aria-hidden="true"
            className="shimmer pointer-events-none absolute inset-0"
          />
        </a>
        <p className="mt-4 text-sm text-secondary">
          {t("paymentNote")}
        </p>
      </div>
    </div>
  );
}

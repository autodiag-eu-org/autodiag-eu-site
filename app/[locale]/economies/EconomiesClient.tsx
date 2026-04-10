"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type CountryKey = "fr" | "de" | "ch" | "es" | "pt";

interface CountryConfig {
  key: CountryKey;
  currency: string;
  diagCost: number;
  premiumPrice: number;
}

const countriesConfig: CountryConfig[] = [
  { key: "fr", currency: "EUR", diagCost: 80, premiumPrice: 45 },
  { key: "de", currency: "EUR", diagCost: 120, premiumPrice: 45 },
  { key: "ch", currency: "CHF", diagCost: 150, premiumPrice: 49 },
  { key: "es", currency: "EUR", diagCost: 60, premiumPrice: 45 },
  { key: "pt", currency: "EUR", diagCost: 50, premiumPrice: 45 },
];

export default function EconomiesClient() {
  const t = useTranslations("savings");
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>("fr");
  const [visitsPerYear, setVisitsPerYear] = useState(3);

  const country = useMemo(
    () => countriesConfig.find((c) => c.key === selectedCountry)!,
    [selectedCountry]
  );

  const garageCostYear = country.diagCost * visitsPerYear;
  const garageCost3Years = garageCostYear * 3;
  const premiumCostYear = country.premiumPrice;
  const premiumCost3Years = premiumCostYear * 3;
  const savingsYear = Math.max(0, garageCostYear - premiumCostYear);
  const savings3Years = Math.max(0, garageCost3Years - premiumCost3Years);
  const costPerDiagGarage = country.diagCost;
  const costPerDiagPremium =
    visitsPerYear > 0
      ? Math.round((premiumCostYear / visitsPerYear) * 100) / 100
      : 0;

  const maxBarValue = Math.max(garageCostYear, premiumCostYear, 1);

  const formatPrice = (value: number) =>
    `${new Intl.NumberFormat("fr-FR").format(value)} ${country.currency}`;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="country-select"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              {t("countryLabel")}
            </label>
            <select
              id="country-select"
              value={selectedCountry}
              onChange={(e) =>
                setSelectedCountry(e.target.value as CountryKey)
              }
              className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-white transition-colors focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
            >
              {countriesConfig.map((c) => (
                <option key={c.key} value={c.key}>
                  {t(`country_${c.key}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="visits-slider"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              {t("diagsPerYear")}{" "}
              <span className="font-bold text-white">{visitsPerYear}</span>
            </label>
            <input
              id="visits-slider"
              type="range"
              min={1}
              max={10}
              value={visitsPerYear}
              onChange={(e) => setVisitsPerYear(parseInt(e.target.value, 10))}
              className="w-full accent-cyan"
            />
            <div className="mt-1 flex justify-between text-xs text-secondary/60">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bar chart comparison */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-6 text-xl font-bold">{t("annualComparison")}</h2>

        <div className="space-y-6">
          {/* Garage bar */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-secondary">
                {t("garageLabel", { count: visitsPerYear })}
              </span>
              <span className="text-sm font-bold text-red-400">
                {formatPrice(garageCostYear)}
              </span>
            </div>
            <div className="h-8 overflow-hidden rounded-lg bg-surface">
              <motion.div
                className="h-full rounded-lg bg-gradient-to-r from-red-500/60 to-red-500/40"
                initial={{ width: 0 }}
                animate={{
                  width: `${(garageCostYear / maxBarValue) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Premium bar */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-secondary">
                {t("premiumLabel")}
              </span>
              <span className="text-sm font-bold text-green">
                {formatPrice(premiumCostYear)}
              </span>
            </div>
            <div className="h-8 overflow-hidden rounded-lg bg-surface">
              <motion.div
                className="h-full rounded-lg bg-gradient-to-r from-green/60 to-green/40"
                initial={{ width: 0 }}
                animate={{
                  width: `${(premiumCostYear / maxBarValue) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              />
            </div>
          </div>

          {/* Free bar */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-secondary">
                {t("freeLabel")}
              </span>
              <span className="text-sm font-bold text-cyan">
                0 {country.currency}
              </span>
            </div>
            <div className="h-8 overflow-hidden rounded-lg bg-surface">
              <motion.div
                className="h-full w-1 rounded-lg bg-gradient-to-r from-cyan/60 to-cyan/40"
                initial={{ width: 0 }}
                animate={{ width: "2%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label={t("savingsYearLabel")}
          value={formatPrice(savingsYear)}
          accent="cyan"
        />
        <StatCard
          label={t("savings3YearsLabel")}
          value={formatPrice(savings3Years)}
          accent="green"
        />
        <StatCard
          label={t("costPerDiagGarageLabel")}
          value={formatPrice(costPerDiagGarage)}
          accent="red"
        />
        <StatCard
          label={t("costPerDiagPremiumLabel")}
          value={formatPrice(costPerDiagPremium)}
          accent="green"
        />
      </div>

      {/* Details */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-4 text-xl font-bold">{t("howCalculatedTitle")}</h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>{t("howCalculatedP1")}</p>
          <p>
            {t("howCalculatedP2", {
              price: String(country.premiumPrice),
              currency: country.currency,
            })}
          </p>
          <p>{t("howCalculatedP3")}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold">
          {t("ctaTitle")}
        </h2>
        <p className="mb-6 text-secondary">
          {t("ctaDesc")}
        </p>
        <a
          href="#beta"
          className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
        >
          <span className="relative z-10">{t("ctaButton")}</span>
          <span
            aria-hidden="true"
            className="shimmer pointer-events-none absolute inset-0"
          />
        </a>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: "cyan" | "green" | "red";
}) {
  const accentClasses = {
    cyan: "border-cyan/20 text-cyan",
    green: "border-emerald-500/20 text-green",
    red: "border-red-500/20 text-red-400",
  };

  return (
    <div
      className={`rounded-xl border bg-glass p-5 backdrop-blur-md ${accentClasses[accent]}`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-secondary">
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}

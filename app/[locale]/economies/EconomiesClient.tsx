"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

type CountryKey = "fr" | "de" | "ch" | "es" | "pt";

interface CountryConfig {
  key: CountryKey;
  label: string;
  currency: string;
  diagCost: number;
  premiumPrice: number;
}

const countriesConfig: CountryConfig[] = [
  { key: "fr", label: "France", currency: "EUR", diagCost: 80, premiumPrice: 45 },
  { key: "de", label: "Allemagne", currency: "EUR", diagCost: 120, premiumPrice: 45 },
  { key: "ch", label: "Suisse", currency: "CHF", diagCost: 150, premiumPrice: 49 },
  { key: "es", label: "Espagne", currency: "EUR", diagCost: 60, premiumPrice: 45 },
  { key: "pt", label: "Portugal", currency: "EUR", diagCost: 50, premiumPrice: 45 },
];

export default function EconomiesClient() {
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
              Votre pays
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
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="visits-slider"
              className="mb-2 block text-sm font-medium text-secondary"
            >
              Diagnostics par an :{" "}
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
        <h2 className="mb-6 text-xl font-bold">Comparaison annuelle</h2>

        <div className="space-y-6">
          {/* Garage bar */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-secondary">
                Garage ({visitsPerYear} diagnostic{visitsPerYear > 1 ? "s" : ""})
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
                AutoDiag EU Premium (illimite)
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
                AutoDiag EU Gratuit (limite)
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
          label="Economie annuelle"
          value={formatPrice(savingsYear)}
          accent="cyan"
        />
        <StatCard
          label="Economie sur 3 ans"
          value={formatPrice(savings3Years)}
          accent="green"
        />
        <StatCard
          label="Cout / diagnostic garage"
          value={formatPrice(costPerDiagGarage)}
          accent="red"
        />
        <StatCard
          label="Cout / diagnostic Premium"
          value={formatPrice(costPerDiagPremium)}
          accent="green"
        />
      </div>

      {/* Details */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-4 text-xl font-bold">Comment sont calcules ces chiffres ?</h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            Le cout moyen d&apos;un diagnostic OBD2 en garage varie selon les
            pays : environ {countriesConfig[0].diagCost} EUR en France,{" "}
            {countriesConfig[1].diagCost} EUR en Allemagne,{" "}
            {countriesConfig[2].diagCost} CHF en Suisse,{" "}
            {countriesConfig[3].diagCost} EUR en Espagne et{" "}
            {countriesConfig[4].diagCost} EUR au Portugal. Ces chiffres
            correspondent aux tarifs constates en 2025-2026 pour une lecture de
            codes defaut avec interpretation basique.
          </p>
          <p>
            Avec AutoDiag EU Premium a{" "}
            {country.premiumPrice} {country.currency}/an, vous avez un nombre
            illimite de diagnostics : lecture et effacement des codes DTC,
            donnees en temps reel, scan audio IA, devis reparation et bien plus
            encore.
          </p>
          <p>
            La version gratuite permet deja de lire les codes DTC sans limite,
            avec 1 scan audio par semaine et 3 questions IA par jour — souvent
            suffisant pour un usage ponctuel.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold">
          Pret a faire des economies ?
        </h2>
        <p className="mb-6 text-secondary">
          Rejoignez les testeurs beta et diagnostiquez votre voiture
          gratuitement.
        </p>
        <a
          href="#beta"
          className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
        >
          <span className="relative z-10">Telecharger AutoDiag EU</span>
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

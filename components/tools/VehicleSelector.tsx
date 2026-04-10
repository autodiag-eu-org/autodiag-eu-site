"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import type { VehicleCompatibility } from "@/lib/vehicles";
import brandsData from "@/data/vehicles/brands.json";
import modelsData from "@/data/vehicles/models.json";
import compatibilityData from "@/data/vehicles/compatibility.json";

interface Brand {
  name: string;
  modelsCount: number;
}

interface VehicleSelectorProps {
  onSelect?: (result: VehicleCompatibility | null) => void;
}

const brands: Brand[] = brandsData;
const models: Record<string, string[]> = modelsData;
const compatibility: VehicleCompatibility[] =
  compatibilityData as VehicleCompatibility[];

function getYearsForModel(brand: string, model: string): number[] {
  const entry = compatibility.find(
    (c) =>
      c.brand.toLowerCase() === brand.toLowerCase() &&
      c.model.toLowerCase() === model.toLowerCase()
  );
  if (!entry) return [];
  const years: number[] = [];
  for (let y = entry.yearFrom; y <= entry.yearTo; y++) {
    years.push(y);
  }
  return years;
}

function findCompatibility(
  brand: string,
  model: string,
  year: number
): VehicleCompatibility | null {
  return (
    compatibility.find(
      (c) =>
        c.brand.toLowerCase() === brand.toLowerCase() &&
        c.model.toLowerCase() === model.toLowerCase() &&
        year >= c.yearFrom &&
        year <= c.yearTo
    ) ?? null
  );
}

export default function VehicleSelector({ onSelect }: VehicleSelectorProps) {
  const t = useTranslations('compatibility');
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [result, setResult] = useState<VehicleCompatibility | null>(null);

  const availableModels = selectedBrand ? models[selectedBrand] ?? [] : [];
  const availableYears =
    selectedBrand && selectedModel
      ? getYearsForModel(selectedBrand, selectedModel)
      : [];

  const handleBrandChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const brand = e.target.value;
      setSelectedBrand(brand);
      setSelectedModel("");
      setSelectedYear("");
      setResult(null);
      onSelect?.(null);
    },
    [onSelect]
  );

  const handleModelChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const model = e.target.value;
      setSelectedModel(model);
      setSelectedYear("");
      setResult(null);
      onSelect?.(null);
    },
    [onSelect]
  );

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const year = e.target.value;
      setSelectedYear(year);
      if (year && selectedBrand && selectedModel) {
        const compat = findCompatibility(
          selectedBrand,
          selectedModel,
          parseInt(year, 10)
        );
        setResult(compat);
        onSelect?.(compat);
      } else {
        setResult(null);
        onSelect?.(null);
      }
    },
    [selectedBrand, selectedModel, onSelect]
  );

  return (
    <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="brand-select"
            className="mb-1.5 block text-sm font-medium text-secondary"
          >
            {t('brandLabel')}
          </label>
          <select
            id="brand-select"
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-white transition-colors focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
          >
            <option value="">{t('brandPlaceholder')}</option>
            {brands.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name} ({b.modelsCount})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="model-select"
            className="mb-1.5 block text-sm font-medium text-secondary"
          >
            {t('modelLabel')}
          </label>
          <select
            id="model-select"
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!selectedBrand}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-white transition-colors focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20 disabled:opacity-50"
          >
            <option value="">{t('modelPlaceholder')}</option>
            {availableModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="year-select"
            className="mb-1.5 block text-sm font-medium text-secondary"
          >
            {t('yearLabel')}
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            disabled={!selectedModel}
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-white transition-colors focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20 disabled:opacity-50"
          >
            <option value="">{t('yearPlaceholder')}</option>
            {availableYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <div className="mt-6 rounded-xl border border-cyan/20 bg-cyan/5 p-5">
          <h4 className="mb-3 text-sm font-bold text-cyan">
            {t('resultTitle')}
          </h4>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs text-secondary">{t('protocol')}</p>
              <p className="mt-0.5 text-sm font-semibold">{result.protocol}</p>
            </div>
            <div>
              <p className="text-xs text-secondary">{t('pidsSupported')}</p>
              <p className="mt-0.5 text-sm font-semibold">
                {result.pidsSupported}
              </p>
            </div>
            <div>
              <p className="text-xs text-secondary">{t('yearsCovered')}</p>
              <p className="mt-0.5 text-sm font-semibold">
                {result.yearFrom} — {result.yearTo}
              </p>
            </div>
            <div>
              <p className="text-xs text-secondary">{t('featuresLabel')}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {result.features.dtcRead && (
                  <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-400">
                    {t('dtcRead')}
                  </span>
                )}
                {result.features.dtcClear && (
                  <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-400">
                    {t('dtcClear')}
                  </span>
                )}
                {result.features.liveData && (
                  <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-400">
                    Live Data
                  </span>
                )}
                {result.features.absEsp && (
                  <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-400">
                    ABS / ESP
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

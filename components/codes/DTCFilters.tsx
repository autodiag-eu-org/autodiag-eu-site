"use client";

import { useTranslations } from "next-intl";

interface DTCFiltersProps {
  activeCategory: string;
  onFilter: (category: string) => void;
}

const CATEGORY_IDS = [
  "tous",
  "moteur",
  "emissions",
  "transmission",
  "abs_freinage",
  "airbag_securite",
  "electrique",
  "climatisation",
  "reseau",
] as const;

const CATEGORY_KEY_MAP: Record<string, string> = {
  tous: "filterAll",
  moteur: "filterEngine",
  emissions: "filterEmission",
  transmission: "filterTransmission",
  abs_freinage: "filterBraking",
  airbag_securite: "filterAirbag",
  electrique: "filterElectric",
  climatisation: "filterClimate",
  reseau: "filterNetwork",
};

export default function DTCFilters({
  activeCategory,
  onFilter,
}: DTCFiltersProps) {
  const t = useTranslations('codes');

  return (
    <div className="scrollbar-hide -mx-2 flex gap-2 overflow-x-auto px-2 pb-2">
      {CATEGORY_IDS.map((id) => {
        const isActive = activeCategory === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onFilter(id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-cyan text-black"
                : "border border-border bg-glass text-secondary backdrop-blur-sm hover:border-cyan/30 hover:text-white"
            }`}
          >
            {t(CATEGORY_KEY_MAP[id])}
          </button>
        );
      })}
    </div>
  );
}

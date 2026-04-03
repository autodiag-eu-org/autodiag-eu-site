"use client";

interface DTCFiltersProps {
  activeCategory: string;
  onFilter: (category: string) => void;
}

const categories = [
  { id: "tous", label: "Tous" },
  { id: "moteur", label: "Moteur" },
  { id: "emissions", label: "Emissions" },
  { id: "transmission", label: "Transmission" },
  { id: "abs_freinage", label: "ABS / Freinage" },
  { id: "airbag_securite", label: "Airbag / Securite" },
  { id: "electrique", label: "Electrique" },
  { id: "climatisation", label: "Climatisation" },
  { id: "reseau", label: "Reseau" },
];

export default function DTCFilters({
  activeCategory,
  onFilter,
}: DTCFiltersProps) {
  return (
    <div className="scrollbar-hide -mx-2 flex gap-2 overflow-x-auto px-2 pb-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onFilter(cat.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-cyan text-black"
                : "border border-border bg-glass text-secondary backdrop-blur-sm hover:border-cyan/30 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

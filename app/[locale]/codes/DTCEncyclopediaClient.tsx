"use client";

import { useState, useCallback, useMemo, Suspense } from "react";
import DTCSearch from "@/components/codes/DTCSearch";
import DTCFilters from "@/components/codes/DTCFilters";
import DTCCard from "@/components/codes/DTCCard";
import type { DTCCode } from "@/lib/dtc";

interface DTCEncyclopediaClientProps {
  initialCodes: DTCCode[];
}

function DTCEncyclopediaContent({ initialCodes }: DTCEncyclopediaClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("tous");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleFilter = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const filteredCodes = useMemo(() => {
    let codes = initialCodes;

    if (activeCategory !== "tous") {
      codes = codes.filter(
        (dtc) => dtc.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      codes = codes.filter((dtc) => {
        const matchesCode = dtc.code.toLowerCase().includes(q);
        const matchesName = dtc.name.fr.toLowerCase().includes(q);
        const matchesDescription = dtc.description.fr.toLowerCase().includes(q);
        const matchesSymptoms = dtc.symptoms.fr.some((s) =>
          s.toLowerCase().includes(q)
        );
        return matchesCode || matchesName || matchesDescription || matchesSymptoms;
      });
    }

    return codes;
  }, [initialCodes, searchQuery, activeCategory]);

  return (
    <>
      <div className="mb-6">
        <DTCSearch
          onSearch={handleSearch}
          resultCount={filteredCodes.length}
          totalCount={initialCodes.length}
        />
      </div>

      <div className="mb-8">
        <DTCFilters activeCategory={activeCategory} onFilter={handleFilter} />
      </div>

      {filteredCodes.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg text-secondary">
            Aucun code ne correspond a votre recherche.
          </p>
          <p className="mt-2 text-sm text-secondary/70">
            Essayez un autre terme ou changez de categorie.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCodes.map((dtc, index) => (
            <DTCCard key={dtc.code} dtc={dtc} index={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default function DTCEncyclopediaClient({
  initialCodes,
}: DTCEncyclopediaClientProps) {
  return (
    <Suspense>
      <DTCEncyclopediaContent initialCodes={initialCodes} />
    </Suspense>
  );
}

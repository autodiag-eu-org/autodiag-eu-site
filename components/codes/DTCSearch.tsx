"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface DTCSearchProps {
  onSearch: (query: string) => void;
  resultCount: number;
  totalCount: number;
}

export default function DTCSearch({
  onSearch,
  resultCount,
  totalCount,
}: DTCSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = query.length > 0;

  const debouncedSearch = useCallback(
    (value: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onSearch(value);
        const params = new URLSearchParams(searchParams.toString());
        if (value.trim()) {
          params.set("q", value.trim());
        } else {
          params.delete("q");
        }
        const paramString = params.toString();
        const newUrl = paramString
          ? `${window.location.pathname}?${paramString}`
          : window.location.pathname;
        router.replace(newUrl, { scroll: false });
      }, 200);
    },
    [onSearch, router, searchParams]
  );

  useEffect(() => {
    if (initialQuery) {
      onSearch(initialQuery);
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    const paramString = params.toString();
    const newUrl = paramString
      ? `${window.location.pathname}?${paramString}`
      : window.location.pathname;
    router.replace(newUrl, { scroll: false });
  };

  return (
    <div className="w-full">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Rechercher un code (ex : P0420, catalyseur, voyant moteur...)"
          className="w-full rounded-xl border border-border bg-glass py-3.5 pl-12 pr-12 text-white placeholder:text-secondary/60 backdrop-blur-md transition-all focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
          aria-label="Rechercher un code defaut"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary transition-colors hover:text-white"
            aria-label="Effacer la recherche"
          >
            <svg
              className="h-5 w-5"
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
          </button>
        )}
      </div>
      {isActive && (
        <p className="mt-3 text-sm text-secondary">
          {resultCount} {resultCount <= 1 ? "resultat" : "resultats"} sur{" "}
          {totalCount} codes
        </p>
      )}
    </div>
  );
}

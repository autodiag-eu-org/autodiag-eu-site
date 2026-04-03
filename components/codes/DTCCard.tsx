"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SeverityBadge from "@/components/shared/SeverityBadge";
import CostRange from "@/components/shared/CostRange";
import type { DTCCode } from "@/lib/dtc";

interface DTCCardProps {
  dtc: DTCCode;
  index: number;
}

export default function DTCCard({ dtc, index }: DTCCardProps) {
  const firstCause = dtc.causes[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Link
        href={`/fr/codes/${dtc.code.toLowerCase()}`}
        className="group block rounded-2xl border border-border bg-glass p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_4px_24px_rgba(0,229,255,0.06)]"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="text-xl font-bold text-gradient">{dtc.code}</span>
          <SeverityBadge severity={dtc.severity} />
        </div>

        <h3 className="mb-2 text-sm font-semibold leading-snug text-white/90 line-clamp-2">
          {dtc.name.fr}
        </h3>

        <div className="mb-3 flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-medium ${
              dtc.canDrive ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {dtc.canDrive ? (
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
            ) : (
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
            )}
            {dtc.canDrive ? "Peut rouler" : "Arreter le vehicule"}
          </span>

          <span className="rounded-md border border-border px-2 py-0.5 text-xs text-secondary">
            {dtc.category}
          </span>
        </div>

        {firstCause && (
          <div className="border-t border-border pt-3">
            <p className="mb-1 text-xs text-secondary">Cause principale :</p>
            <p className="text-xs font-medium text-white/80">
              {firstCause.name.fr}
            </p>
            <div className="mt-1">
              <CostRange
                min={firstCause.costMin.fr}
                max={firstCause.costMax.fr}
              />
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}

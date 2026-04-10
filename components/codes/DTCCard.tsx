"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SeverityBadge from "@/components/shared/SeverityBadge";
import CostRange from "@/components/shared/CostRange";
import type { DTCCode } from "@/lib/dtc";
import { getLocalised } from "@/lib/dtc";

interface DTCCardProps {
  dtc: DTCCode;
  index: number;
  locale?: string;
}

const COST_KEYS: Record<string, "fr" | "de" | "ch" | "es" | "pt" | "gb"> = {
  fr: "fr", en: "gb", de: "de", es: "es", pt: "pt",
};

const CAN_DRIVE_YES: Record<string, string> = {
  fr: "Peut rouler", en: "Safe to drive", de: "Fahrbar",
  es: "Se puede conducir", pt: "Pode circular",
};
const CAN_DRIVE_NO: Record<string, string> = {
  fr: "Arreter le vehicule", en: "Stop the vehicle", de: "Fahrzeug anhalten",
  es: "Detener el vehiculo", pt: "Parar o veiculo",
};
const MAIN_CAUSE: Record<string, string> = {
  fr: "Cause principale :", en: "Main cause:", de: "Hauptursache:",
  es: "Causa principal:", pt: "Causa principal:",
};
const CURRENCY_MAP: Record<string, string | undefined> = {
  en: "GBP", de: undefined, es: undefined, pt: undefined, fr: undefined,
};

export default function DTCCard({ dtc, index, locale = "fr" }: DTCCardProps) {
  const firstCause = dtc.causes[0];
  const costKey = COST_KEYS[locale] ?? "fr";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
    >
      <Link
        href={`/${locale}/codes/${dtc.code.toLowerCase()}`}
        className="group block rounded-2xl border border-border bg-glass p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/20 hover:shadow-[0_4px_24px_rgba(0,229,255,0.06)]"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="text-xl font-bold text-gradient">{dtc.code}</span>
          <SeverityBadge severity={dtc.severity} />
        </div>

        <h3 className="mb-2 text-sm font-semibold leading-snug text-white/90 line-clamp-2">
          {getLocalised(dtc.name, locale)}
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
            {dtc.canDrive
              ? (CAN_DRIVE_YES[locale] ?? CAN_DRIVE_YES.fr)
              : (CAN_DRIVE_NO[locale] ?? CAN_DRIVE_NO.fr)}
          </span>

          <span className="rounded-md border border-border px-2 py-0.5 text-xs text-secondary">
            {dtc.category}
          </span>
        </div>

        {firstCause && (
          <div className="border-t border-border pt-3">
            <p className="mb-1 text-xs text-secondary">
              {MAIN_CAUSE[locale] ?? MAIN_CAUSE.fr}
            </p>
            <p className="text-xs font-medium text-white/80">
              {getLocalised(firstCause.name, locale)}
            </p>
            <div className="mt-1">
              <CostRange
                min={firstCause.costMin[costKey] ?? firstCause.costMin.fr}
                max={firstCause.costMax[costKey] ?? firstCause.costMax.fr}
                currency={CURRENCY_MAP[locale]}
              />
            </div>
          </div>
        )}
      </Link>
    </motion.div>
  );
}

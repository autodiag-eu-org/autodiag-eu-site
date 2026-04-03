"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShareButton from "@/components/shared/ShareButton";

import frData from "@/data/ct/fr.json";
import deData from "@/data/ct/de.json";
import chData from "@/data/ct/ch.json";
import esData from "@/data/ct/es.json";
import ptData from "@/data/ct/pt.json";

/* ──────────────── Types ──────────────── */

interface CTPoint {
  id: string;
  name: string;
  description: string;
  obd2Checkable: boolean;
}

interface CTData {
  country: string;
  name: string;
  authority: string;
  frequency: string;
  points: CTPoint[];
}

type CheckStatus = "unchecked" | "ok" | "warning" | "problem";

interface CountryOption {
  code: string;
  flag: string;
  label: string;
  shortLabel: string;
  data: CTData;
}

/* ──────────────── Constants ──────────────── */

const COUNTRIES: CountryOption[] = [
  { code: "FR", flag: "\uD83C\uDDEB\uD83C\uDDF7", label: "France — CT", shortLabel: "CT", data: frData as CTData },
  { code: "DE", flag: "\uD83C\uDDE9\uD83C\uDDEA", label: "Allemagne — TUV", shortLabel: "TUV", data: deData as CTData },
  { code: "CH", flag: "\uD83C\uDDE8\uD83C\uDDED", label: "Suisse — MFK", shortLabel: "MFK", data: chData as CTData },
  { code: "ES", flag: "\uD83C\uDDEA\uD83C\uDDF8", label: "Espagne — ITV", shortLabel: "ITV", data: esData as CTData },
  { code: "PT", flag: "\uD83C\uDDF5\uD83C\uDDF9", label: "Portugal — IPO", shortLabel: "IPO", data: ptData as CTData },
];

const STATUS_CYCLE: CheckStatus[] = ["unchecked", "ok", "warning", "problem"];

function nextStatus(current: CheckStatus): CheckStatus {
  const idx = STATUS_CYCLE.indexOf(current);
  return STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
}

/* ──────────────── Status rendering helpers ──────────────── */

function StatusIcon({ status }: { status: CheckStatus }) {
  switch (status) {
    case "ok":
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green/20 text-green">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    case "warning":
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
      );
    case "problem":
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-secondary">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="6" />
          </svg>
        </div>
      );
  }
}

function statusLabel(status: CheckStatus): string {
  switch (status) {
    case "ok":
      return "Verifie";
    case "warning":
      return "A verifier";
    case "problem":
      return "Probleme";
    default:
      return "Non verifie";
  }
}

/* ──────────────── Component ──────────────── */

export default function CTChecklist() {
  const [selectedCountry, setSelectedCountry] = useState<string>("FR");
  const [statuses, setStatuses] = useState<Record<string, Record<string, CheckStatus>>>({});

  const country = useMemo(
    () => COUNTRIES.find((c) => c.code === selectedCountry) ?? COUNTRIES[0],
    [selectedCountry]
  );

  const points = country.data.points;

  const getStatus = useCallback(
    (pointId: string): CheckStatus => statuses[selectedCountry]?.[pointId] ?? "unchecked",
    [statuses, selectedCountry]
  );

  const toggleStatus = useCallback(
    (pointId: string) => {
      setStatuses((prev) => {
        const countryStatuses = prev[selectedCountry] ?? {};
        const current = countryStatuses[pointId] ?? "unchecked";
        return {
          ...prev,
          [selectedCountry]: {
            ...countryStatuses,
            [pointId]: nextStatus(current),
          },
        };
      });
    },
    [selectedCountry]
  );

  /* ── Summary counts ── */
  const counts = useMemo(() => {
    const cs = statuses[selectedCountry] ?? {};
    let ok = 0;
    let warning = 0;
    let problem = 0;
    let checked = 0;
    for (const p of points) {
      const s = cs[p.id] ?? "unchecked";
      if (s === "ok") { ok++; checked++; }
      if (s === "warning") { warning++; checked++; }
      if (s === "problem") { problem++; checked++; }
    }
    return { ok, warning, problem, checked, total: points.length };
  }, [statuses, selectedCountry, points]);

  const progressPct = points.length > 0 ? Math.round((counts.checked / counts.total) * 100) : 0;

  const allChecked = counts.checked === counts.total && counts.total > 0;
  const hasProblems = counts.problem > 0;
  const hasWarnings = counts.warning > 0;

  /* ── Share text ── */
  const shareText = useMemo(() => {
    const lines = [
      `Pre-controle technique ${country.data.name}`,
      `${counts.ok} OK / ${counts.warning} A verifier / ${counts.problem} Probleme(s)`,
      `${counts.checked}/${counts.total} points verifies`,
    ];
    if (allChecked && !hasProblems) {
      lines.push("Vehicule pret pour le controle technique !");
    }
    return lines.join("\n");
  }, [country, counts, allChecked, hasProblems]);

  return (
    <div className="space-y-8">
      {/* ── Country selector ── */}
      <div className="flex flex-wrap justify-center gap-3">
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            type="button"
            onClick={() => setSelectedCountry(c.code)}
            className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
              selectedCountry === c.code
                ? "border border-cyan/60 bg-cyan/10 text-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                : "border border-border bg-glass text-secondary hover:border-cyan/30 hover:text-white"
            }`}
          >
            <span className="text-xl" role="img" aria-label={c.label}>
              {c.flag}
            </span>
            <span className="hidden sm:inline">{c.label}</span>
            <span className="sm:hidden">{c.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* ── Header info ── */}
      <motion.div
        key={selectedCountry}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-border bg-glass p-5 backdrop-blur-md"
      >
        <h3 className="text-lg font-bold">{country.data.name}</h3>
        <p className="mt-1 text-sm text-secondary">
          <span className="font-medium text-white">Organisme :</span> {country.data.authority}
        </p>
        <p className="text-sm text-secondary">
          <span className="font-medium text-white">Frequence :</span> {country.data.frequency}
        </p>
      </motion.div>

      {/* ── Progress bar ── */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-secondary">
            {counts.checked}/{counts.total} points verifies
          </span>
          <span className="font-medium text-cyan">{progressPct}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan to-green"
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* ── Checkpoint cards ── */}
      <div className="grid gap-3">
        <AnimatePresence mode="popLayout">
          {points.map((point, i) => {
            const status = getStatus(point.id);
            return (
              <motion.button
                key={point.id}
                type="button"
                onClick={() => toggleStatus(point.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className={`group w-full cursor-pointer rounded-xl border p-4 text-left backdrop-blur-md transition-all duration-200 ${
                  status === "ok"
                    ? "border-green/30 bg-green/5"
                    : status === "warning"
                    ? "border-orange-400/30 bg-orange-400/5"
                    : status === "problem"
                    ? "border-red-400/30 bg-red-400/5"
                    : "border-border bg-glass hover:border-cyan/20"
                }`}
              >
                <div className="flex items-start gap-3">
                  <StatusIcon status={status} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold">{point.name}</h4>
                      {point.obd2Checkable && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[11px] font-medium text-cyan">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Verifiable avec AutoDiag EU
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">
                      {point.description}
                    </p>
                    <span className="mt-2 inline-block text-xs font-medium text-secondary/70 group-hover:text-secondary">
                      Cliquez pour changer : {statusLabel(status)}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Summary ── */}
      {counts.checked > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 rounded-2xl border border-border bg-glass p-6 backdrop-blur-md"
        >
          <h3 className="text-lg font-bold">Resultat</h3>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green" />
              <span className="text-sm">
                <span className="font-semibold text-green">{counts.ok}</span>{" "}
                <span className="text-secondary">OK</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <span className="text-sm">
                <span className="font-semibold text-orange-400">{counts.warning}</span>{" "}
                <span className="text-secondary">A verifier</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <span className="text-sm">
                <span className="font-semibold text-red-400">{counts.problem}</span>{" "}
                <span className="text-secondary">Probleme(s)</span>
              </span>
            </div>
          </div>

          {/* ── Verdict ── */}
          {allChecked && (
            <div
              className={`rounded-xl p-4 ${
                hasProblems
                  ? "border border-red-400/30 bg-red-400/10"
                  : hasWarnings
                  ? "border border-orange-400/30 bg-orange-400/10"
                  : "border border-green/30 bg-green/10"
              }`}
            >
              <p className="text-sm font-medium leading-relaxed">
                {hasProblems
                  ? "Nous vous recommandons de faire verifier ces points avant le controle technique."
                  : hasWarnings
                  ? "Quelques points meritent une attention avant le passage au controle technique."
                  : "Votre vehicule semble pret pour le controle technique !"}
              </p>
            </div>
          )}

          {/* ── CTA ── */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan to-green px-6 py-3 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
              <span className="relative">Faites un diagnostic complet avec AutoDiag EU</span>
            </a>
            <ShareButton
              title="Pre-controle technique — AutoDiag EU"
              text={shareText}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

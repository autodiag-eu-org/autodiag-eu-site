"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import motData from "@/data/ct/gb.json";

type CheckStatus = "unchecked" | "passed" | "failed";

interface MOTPoint {
  id: string;
  name: string;
  failRate: string;
  description: string;
  obd2Checkable: boolean;
  autodiagHelp: string;
  commonDefects: string[];
  avgRepairCostGBP: { min: number; max: number };
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function MOTChecklist() {
  const points = motData.points as MOTPoint[];
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [statuses, setStatuses] = useState<Record<string, CheckStatus>>({});

  const toggleExpanded = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const setStatus = useCallback((id: string, status: CheckStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  }, []);

  const passedCount = Object.values(statuses).filter((s) => s === "passed").length;
  const failedCount = Object.values(statuses).filter((s) => s === "failed").length;
  const checkedCount = passedCount + failedCount;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8 rounded-xl border border-border bg-glass p-4 backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-secondary">
            {checkedCount} of {points.length} checked
          </span>
          <div className="flex gap-4">
            <span className="text-emerald-400">{passedCount} OK</span>
            <span className="text-red-400">{failedCount} needs attention</span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-surface">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-cyan to-green transition-all duration-300"
            style={{ width: `${(checkedCount / points.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {points.map((point) => {
          const status = statuses[point.id] ?? "unchecked";
          const isExpanded = expanded[point.id] ?? false;

          return (
            <div
              key={point.id}
              className={`rounded-xl border backdrop-blur-md transition-colors ${
                status === "passed"
                  ? "border-emerald-500/20 bg-emerald-500/5"
                  : status === "failed"
                    ? "border-red-500/20 bg-red-500/5"
                    : "border-border bg-glass"
              }`}
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => toggleExpanded(point.id)}
                className="flex w-full items-center gap-4 p-5 text-left"
                aria-expanded={isExpanded}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{point.name}</h3>
                    <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400">
                      {point.failRate} failure rate
                    </span>
                    {point.obd2Checkable && (
                      <span className="rounded-full bg-cyan/10 px-2 py-0.5 text-xs font-medium text-cyan">
                        OBD2
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-secondary line-clamp-1">
                    {point.description}
                  </p>
                </div>
                <ChevronIcon open={isExpanded} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-5 pb-5 pt-4 space-y-4">
                      {/* Full description */}
                      <p className="text-sm text-secondary leading-relaxed">
                        {point.description}
                      </p>

                      {/* Common defects */}
                      <div>
                        <p className="mb-2 text-sm font-medium">Common defects:</p>
                        <ul className="grid gap-1.5 sm:grid-cols-2">
                          {point.commonDefects.map((defect) => (
                            <li
                              key={defect}
                              className="flex items-center gap-2 text-sm text-secondary"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                              {defect}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Repair cost */}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-secondary">Typical repair cost:</span>
                        <span className="font-semibold">
                          £{point.avgRepairCostGBP.min} — £{point.avgRepairCostGBP.max}
                        </span>
                      </div>

                      {/* AutoDiag EU help */}
                      <div className="rounded-lg border border-cyan/20 bg-cyan/5 p-3">
                        <p className="text-sm font-medium text-cyan">
                          Can AutoDiag EU check this?{" "}
                          {point.obd2Checkable ? "Yes" : "Partially"}
                        </p>
                        <p className="mt-1 text-xs text-secondary">
                          {point.autodiagHelp}
                        </p>
                      </div>

                      {/* Pass/fail buttons */}
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStatus(point.id, "passed")}
                          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                            status === "passed"
                              ? "bg-emerald-500 text-white"
                              : "border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                          }`}
                        >
                          OK
                        </button>
                        <button
                          type="button"
                          onClick={() => setStatus(point.id, "failed")}
                          className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                            status === "failed"
                              ? "bg-red-500 text-white"
                              : "border border-red-500/30 text-red-400 hover:bg-red-500/10"
                          }`}
                        >
                          Needs attention
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      {checkedCount === points.length && (
        <div className="mt-8 rounded-2xl border border-border bg-glass p-6 text-center backdrop-blur-md">
          <h3 className="mb-2 text-xl font-bold">
            {failedCount === 0
              ? "Looking good! Your car appears MOT-ready."
              : `${failedCount} area${failedCount > 1 ? "s" : ""} need${failedCount === 1 ? "s" : ""} attention before your MOT.`}
          </h3>
          <p className="text-secondary">
            {failedCount === 0
              ? "Of course, this checklist is a guide — the official MOT test may find things we cannot check digitally. Good luck!"
              : "Get these sorted before your MOT to avoid a failure. AutoDiag EU can help you understand the fault codes involved."}
          </p>
        </div>
      )}
    </div>
  );
}

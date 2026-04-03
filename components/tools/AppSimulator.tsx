"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────── Types ──────────────── */

interface SimStep {
  id: number;
  label: string;
  durationMs: number;
}

const STEPS: SimStep[] = [
  { id: 1, label: "Connexion Bluetooth...", durationMs: 5000 },
  { id: 2, label: "Initialisation ELM327...", durationMs: 5000 },
  { id: 3, label: "Scan en cours...", durationMs: 10000 },
  { id: 4, label: "Alerte detectee", durationMs: 5000 },
  { id: 5, label: "Score sante", durationMs: 5000 },
];

const TOTAL_DURATION = 30000;

/* ──────────────── Gauge sub-component ──────────────── */

function AnimatedGauge({
  label,
  value,
  unit,
  max,
  color,
  progress,
}: {
  label: string;
  value: number;
  unit: string;
  max: number;
  color: string;
  progress: number;
}) {
  const currentValue = Math.round(value * Math.min(progress, 1));
  const fillPct = Math.min((currentValue / max) * 100, 100);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-secondary">{label}</span>
        <span className="font-mono font-semibold" style={{ color }}>
          {currentValue}
          <span className="text-secondary"> {unit}</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${fillPct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ──────────────── Circular score gauge ──────────────── */

function CircularScore({ score, progress }: { score: number; progress: number }) {
  const currentScore = Math.round(score * Math.min(progress, 1));
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentScore / 100) * circumference;

  const getColor = (s: number): string => {
    if (s >= 80) return "#00c853";
    if (s >= 60) return "#8BC34A";
    if (s >= 40) return "#FFC107";
    return "#F44336";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="6"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={getColor(currentScore)}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <text
          x="50"
          y="46"
          textAnchor="middle"
          fill={getColor(currentScore)}
          fontSize="20"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          {currentScore}
        </text>
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="#8a90b0"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
        >
          /100
        </text>
      </svg>
    </div>
  );
}

/* ──────────────── Animated dots ──────────────── */

function AnimatedDots() {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <span className="inline-block w-6 text-left">{".".repeat(dotCount)}</span>;
}

/* ──────────────── Main component ──────────────── */

export default function AppSimulator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepProgress, setStepProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const advanceSimulation = useCallback(() => {
    if (!isRunning) return;

    const step = STEPS.find((s) => s.id === currentStep);
    if (!step) {
      setCurrentStep(1);
      setStepProgress(0);
      return;
    }

    const interval = 50;
    const increment = interval / step.durationMs;

    setStepProgress((prev) => {
      const next = prev + increment;
      if (next >= 1) {
        const nextStepId = currentStep >= STEPS.length ? 1 : currentStep + 1;
        setTimeout(() => {
          setCurrentStep(nextStepId);
          setStepProgress(0);
        }, 0);
        return 1;
      }
      return next;
    });
  }, [currentStep, isRunning]);

  useEffect(() => {
    const timer = setInterval(advanceSimulation, 50);
    return () => clearInterval(timer);
  }, [advanceSimulation]);

  const stepDone = stepProgress >= 0.99;

  return (
    <div className="space-y-10">
      {/* ── Phone frame ── */}
      <div className="mx-auto w-full max-w-[320px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a18] p-2 shadow-[0_0_60px_rgba(0,229,255,0.08)]">
          {/* Glass reflection */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-green/5 blur-3xl" />

          {/* Inner screen */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#050510]">
            {/* Notch */}
            <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-black/80 shadow-inner" />

            {/* Status bar */}
            <div className="flex items-center justify-between px-5 py-2 text-[10px] text-secondary">
              <span>9:41</span>
              <span className="font-medium text-cyan">AutoDiag EU</span>
              <span>100%</span>
            </div>

            {/* Screen content */}
            <div className="min-h-[420px] px-4 pb-6">
              <AnimatePresence mode="wait">
                {/* ── Step 1: Bluetooth connexion ── */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center pt-16"
                  >
                    {!stepDone ? (
                      <>
                        <div className="mb-6 h-16 w-16 rounded-full border-2 border-cyan/30 bg-cyan/10 p-3">
                          <svg className="h-full w-full animate-pulse text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-white">
                          Connexion Bluetooth<AnimatedDots />
                        </p>
                        <p className="mt-2 text-xs text-secondary">
                          Recherche du dongle ELM327
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green/20">
                          <svg className="h-8 w-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-green">Connecte !</p>
                        <p className="mt-1 text-xs text-secondary">VGate iCar Pro 2S</p>
                      </>
                    )}
                  </motion.div>
                )}

                {/* ── Step 2: ELM327 init ── */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center pt-16"
                  >
                    {!stepDone ? (
                      <>
                        <p className="mb-4 text-sm font-medium text-white">
                          Initialisation ELM327<AnimatedDots />
                        </p>
                        <div className="w-full max-w-[200px]">
                          <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-cyan to-green"
                              initial={{ width: 0 }}
                              animate={{ width: `${stepProgress * 100}%` }}
                              transition={{ duration: 0.1 }}
                            />
                          </div>
                        </div>
                        <div className="mt-4 space-y-1 text-[11px] text-secondary">
                          <p>{stepProgress > 0.1 ? "\u2713" : "\u25CB"} ATZ — Reset</p>
                          <p>{stepProgress > 0.3 ? "\u2713" : "\u25CB"} ATE0 — Echo Off</p>
                          <p>{stepProgress > 0.5 ? "\u2713" : "\u25CB"} ATSP0 — Protocole auto</p>
                          <p>{stepProgress > 0.7 ? "\u2713" : "\u25CB"} 0100 — PIDs supportes</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/20">
                          <svg className="h-7 w-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-green">Pret !</p>
                        <p className="mt-1 text-xs text-secondary">Protocole ISO 15765-4 (CAN)</p>
                      </>
                    )}
                  </motion.div>
                )}

                {/* ── Step 3: Gauges / scan ── */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-6"
                  >
                    <p className="mb-1 text-center text-sm font-medium text-white">
                      Scan en cours<AnimatedDots />
                    </p>
                    <p className="mb-5 text-center text-[11px] text-secondary">
                      Lecture des capteurs du vehicule
                    </p>

                    <div className="space-y-4 rounded-xl border border-border bg-white/[0.02] p-4">
                      <AnimatedGauge
                        label="RPM"
                        value={780}
                        unit="tr/min"
                        max={8000}
                        color="#00e5ff"
                        progress={stepProgress}
                      />
                      <AnimatedGauge
                        label="Temperature"
                        value={87}
                        unit="\u00B0C"
                        max={120}
                        color="#00c853"
                        progress={stepProgress}
                      />
                      <AnimatedGauge
                        label="Vitesse"
                        value={0}
                        unit="km/h"
                        max={250}
                        color="#8a90b0"
                        progress={stepProgress}
                      />
                      <AnimatedGauge
                        label="Batterie"
                        value={142}
                        unit="V"
                        max={160}
                        color="#FFC107"
                        progress={stepProgress}
                      />
                    </div>

                    <p className="mt-3 text-center text-[10px] text-secondary">
                      {Math.round(stepProgress * 47)} codes verifies
                    </p>
                  </motion.div>
                )}

                {/* ── Step 4: Alert ── */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center pt-12"
                  >
                    <motion.div
                      animate={{
                        scale: stepProgress < 0.3 ? [1, 1.2, 1] : 1,
                        opacity: stepProgress < 0.3 ? [1, 0.6, 1] : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: stepProgress < 0.3 ? Infinity : 0,
                      }}
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20"
                    >
                      <svg className="h-7 w-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </motion.div>

                    <p className="text-sm font-semibold text-orange-400">
                      Alerte detectee
                    </p>

                    {stepProgress > 0.3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 w-full rounded-xl border border-orange-400/20 bg-orange-400/5 p-4"
                      >
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-orange-400/20 px-2 py-0.5 text-[11px] font-semibold text-orange-400">
                            MOYENNE
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-bold text-white">P0420</p>
                        <p className="mt-1 text-xs text-secondary">
                          Efficacite catalyseur en dessous du seuil
                        </p>
                        <p className="mt-2 text-[11px] text-secondary">
                          Votre catalyseur fatigue un peu — on vous explique quoi faire.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* ── Step 5: Health score ── */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center pt-10"
                  >
                    <p className="mb-4 text-sm font-medium text-white">
                      Score de sante
                    </p>

                    <CircularScore score={84} progress={stepProgress} />

                    {stepProgress > 0.5 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 w-full"
                      >
                        <div className="rounded-xl border border-border bg-white/[0.02] p-3 text-center">
                          <p className="text-xs font-medium text-white">
                            Votre vehicule necessite une attention
                          </p>
                          <p className="mt-1 text-[11px] text-secondary">
                            1 code defaut detecte — le reste est en bonne sante
                          </p>
                        </div>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="h-2 w-2 rounded-full bg-green" />
                            <span className="text-secondary">Moteur</span>
                            <span className="ml-auto font-medium text-green">OK</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="h-2 w-2 rounded-full bg-green" />
                            <span className="text-secondary">Transmission</span>
                            <span className="ml-auto font-medium text-green">OK</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="h-2 w-2 rounded-full bg-orange-400" />
                            <span className="text-secondary">Emissions</span>
                            <span className="ml-auto font-medium text-orange-400">P0420</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="h-2 w-2 rounded-full bg-green" />
                            <span className="text-secondary">Electrique</span>
                            <span className="ml-auto font-medium text-green">OK</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-1.5 pb-4">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    step.id === currentStep
                      ? "w-6 bg-cyan"
                      : step.id < currentStep
                      ? "w-1.5 bg-cyan/40"
                      : "w-1.5 bg-white/10"
                  }`}
                />
              ))}
            </div>

            {/* Home bar */}
            <div className="mx-auto mb-2 h-1 w-28 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Play/pause button */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => setIsRunning((prev) => !prev)}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-secondary transition-colors hover:border-cyan/30 hover:text-white"
          >
            {isRunning ? (
              <>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Mettre en pause
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Reprendre
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Feature bullets ── */}
      <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
        {[
          {
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            ),
            title: "Scan audio IA",
            desc: "Ecoutez votre moteur avec notre IA",
          },
          {
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.008M21 12.75V6.375c0-.621-.504-1.125-1.125-1.125H3.375C2.754 5.25 2.25 5.754 2.25 6.375v6.375m18.75 0h-18" />
              </svg>
            ),
            title: "677 vehicules",
            desc: "Compatible avec toutes les marques europeennes",
          },
          {
            icon: (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            ),
            title: "Pre-CT 5 pays",
            desc: "France, Allemagne, Suisse, Espagne, Portugal",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-glass p-4 text-center backdrop-blur-md"
          >
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-cyan/10 text-cyan">
              {feature.icon}
            </div>
            <h4 className="text-sm font-semibold">{feature.title}</h4>
            <p className="mt-1 text-xs text-secondary">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="text-center">
        <a
          href={process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan to-green px-8 py-4 text-base font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]"
        >
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="currentColor"
            aria-hidden="true"
            className="relative shrink-0"
          >
            <path d="M1.57 0.22C1.22 0.58 1 1.13 1 1.82V20.18C1 20.87 1.22 21.42 1.57 21.78L1.65 21.86L11.95 11.56V11.44V11.32L1.65 1.02L1.57 0.22Z" />
            <path d="M15.38 14.99L11.95 11.56V11.44V11.32L15.38 7.89L15.48 7.95L19.52 10.27C20.63 10.89 20.63 11.93 19.52 12.55L15.48 14.87L15.38 14.99Z" />
            <path d="M15.48 14.87L11.95 11.44L1.57 21.78C1.97 22.2 2.62 22.26 3.36 21.83L15.48 14.87Z" />
            <path d="M15.48 7.95L3.36 1.05C2.62 0.62 1.97 0.68 1.57 1.1L11.95 11.44L15.48 7.95Z" />
          </svg>
          <span className="relative">Essayez vous-meme — telecharger AutoDiag EU</span>
        </a>
      </div>
    </div>
  );
}

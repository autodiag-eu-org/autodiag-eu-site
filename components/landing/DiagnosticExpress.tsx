"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Cause {
  label: string;
  costMin: number;
  costMax: number;
}

interface Symptom {
  id: string;
  icon: string;
  label: string;
  causes: Cause[];
}

const symptoms: Symptom[] = [
  {
    id: "voyant",
    icon: "🔶",
    label: "Voyant moteur",
    causes: [
      { label: "Sonde lambda defaillante", costMin: 120, costMax: 350 },
      { label: "Catalyseur fatigue", costMin: 400, costMax: 1500 },
      { label: "Vanne EGR encrassee", costMin: 150, costMax: 500 },
    ],
  },
  {
    id: "surchauffe",
    icon: "🌡️",
    label: "Surchauffe",
    causes: [
      { label: "Thermostat bloque", costMin: 80, costMax: 250 },
      { label: "Pompe a eau fatiguee", costMin: 200, costMax: 600 },
      { label: "Radiateur perce", costMin: 250, costMax: 700 },
    ],
  },
  {
    id: "fumee",
    icon: "💨",
    label: "Fumee anormale",
    causes: [
      { label: "Joints de queue de soupape uses", costMin: 400, costMax: 1200 },
      { label: "Turbo qui lache", costMin: 800, costMax: 2500 },
      { label: "Injecteur defaillant", costMin: 200, costMax: 600 },
    ],
  },
  {
    id: "bruit",
    icon: "🔊",
    label: "Bruit suspect",
    causes: [
      { label: "Roulement de roue use", costMin: 150, costMax: 400 },
      { label: "Courroie accessoire fatiguee", costMin: 80, costMax: 200 },
      { label: "Silent-bloc moteur casse", costMin: 120, costMax: 350 },
    ],
  },
  {
    id: "demarrage",
    icon: "🔑",
    label: "Demarrage difficile",
    causes: [
      { label: "Batterie en fin de vie", costMin: 80, costMax: 250 },
      { label: "Demarreur fatigue", costMin: 200, costMax: 500 },
      { label: "Bougies de prechauffage (diesel)", costMin: 60, costMax: 200 },
    ],
  },
  {
    id: "conso",
    icon: "⛽",
    label: "Surconsommation",
    causes: [
      { label: "Filtre a air encrasse", costMin: 15, costMax: 50 },
      { label: "Sonde temperature defaillante", costMin: 60, costMax: 180 },
      { label: "Pression pneus insuffisante", costMin: 0, costMax: 10 },
    ],
  },
  {
    id: "vibrations",
    icon: "📳",
    label: "Vibrations",
    causes: [
      { label: "Disque de frein voile", costMin: 150, costMax: 400 },
      { label: "Cardan use", costMin: 200, costMax: 600 },
      { label: "Equilibrage roues", costMin: 30, costMax: 80 },
    ],
  },
  {
    id: "puissance",
    icon: "⚡",
    label: "Perte de puissance",
    causes: [
      { label: "Filtre a particules sature", costMin: 300, costMax: 1500 },
      { label: "Turbo en perte de charge", costMin: 600, costMax: 2500 },
      { label: "Debitmetre defaillant", costMin: 100, costMax: 350 },
    ],
  },
];

export default function DiagnosticExpress() {
  const [selected, setSelected] = useState<string | null>(null);

  const active = symptoms.find((s) => s.id === selected);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          Diagnostic Express —{" "}
          <span className="text-gradient">trouvez la panne en 3 clics</span>
        </h2>
        <p className="mt-3 text-secondary">
          Selectionnez un symptome pour voir les causes probables et les couts
          estimes
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {symptoms.map((symptom, i) => (
          <motion.button
            key={symptom.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            onClick={() =>
              setSelected(selected === symptom.id ? null : symptom.id)
            }
            className={`glass flex flex-col items-center gap-2 rounded-xl border p-4 text-center backdrop-blur-md transition-all hover:-translate-y-0.5 ${
              selected === symptom.id
                ? "border-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                : "border-border hover:border-cyan/30"
            }`}
          >
            <span className="text-2xl" aria-hidden="true">
              {symptom.icon}
            </span>
            <span className="text-sm font-medium">{symptom.label}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="glass mt-6 rounded-2xl border border-border p-6 backdrop-blur-md">
              <h3 className="mb-4 text-lg font-semibold">
                Causes probables pour :{" "}
                <span className="text-cyan">{active.label}</span>
              </h3>
              <div className="space-y-3">
                {active.causes.map((cause, i) => (
                  <motion.div
                    key={cause.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface/50 px-4 py-3"
                  >
                    <span className="text-sm sm:text-base">{cause.label}</span>
                    <span className="shrink-0 rounded-full bg-glass px-3 py-1 text-sm font-medium text-cyan">
                      {cause.costMin}&nbsp;-&nbsp;{cause.costMax}&nbsp;EUR
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="#beta"
                  className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_20px_rgba(0,200,83,0.3)]"
                >
                  Pour un diagnostic precis → telecharger AutoDiag EU
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

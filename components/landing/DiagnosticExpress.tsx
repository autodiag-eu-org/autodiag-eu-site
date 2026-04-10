"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface CauseCost {
  costMin: number;
  costMax: number;
}

const SYMPTOM_IDS = [
  "voyant",
  "surchauffe",
  "fumee",
  "bruit",
  "demarrage",
  "conso",
  "vibrations",
  "puissance",
] as const;

const SYMPTOM_ICONS = ["🔶", "🌡️", "💨", "🔊", "🔑", "⛽", "📳", "⚡"];

const SYMPTOM_CAUSES: Record<string, CauseCost[]> = {
  voyant: [
    { costMin: 120, costMax: 350 },
    { costMin: 400, costMax: 1500 },
    { costMin: 150, costMax: 500 },
  ],
  surchauffe: [
    { costMin: 80, costMax: 250 },
    { costMin: 200, costMax: 600 },
    { costMin: 250, costMax: 700 },
  ],
  fumee: [
    { costMin: 400, costMax: 1200 },
    { costMin: 800, costMax: 2500 },
    { costMin: 200, costMax: 600 },
  ],
  bruit: [
    { costMin: 150, costMax: 400 },
    { costMin: 80, costMax: 200 },
    { costMin: 120, costMax: 350 },
  ],
  demarrage: [
    { costMin: 80, costMax: 250 },
    { costMin: 200, costMax: 500 },
    { costMin: 60, costMax: 200 },
  ],
  conso: [
    { costMin: 15, costMax: 50 },
    { costMin: 60, costMax: 180 },
    { costMin: 0, costMax: 10 },
  ],
  vibrations: [
    { costMin: 150, costMax: 400 },
    { costMin: 200, costMax: 600 },
    { costMin: 30, costMax: 80 },
  ],
  puissance: [
    { costMin: 300, costMax: 1500 },
    { costMin: 600, costMax: 2500 },
    { costMin: 100, costMax: 350 },
  ],
};

export default function DiagnosticExpress() {
  const t = useTranslations('diagnosticExpress');
  const [selected, setSelected] = useState<string | null>(null);

  const activeId = SYMPTOM_IDS.find((id) => id === selected);
  const activeCauses = activeId ? SYMPTOM_CAUSES[activeId] : null;

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
          {t('title')}{" "}
          <span className="text-gradient">{t('titleHighlight')}</span>
        </h2>
        <p className="mt-3 text-secondary">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SYMPTOM_IDS.map((id, i) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            onClick={() =>
              setSelected(selected === id ? null : id)
            }
            className={`glass flex flex-col items-center gap-2 rounded-xl border p-4 text-center backdrop-blur-md transition-all hover:-translate-y-0.5 ${
              selected === id
                ? "border-cyan shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                : "border-border hover:border-cyan/30"
            }`}
          >
            <span className="text-2xl" aria-hidden="true">
              {SYMPTOM_ICONS[i]}
            </span>
            <span className="text-sm font-medium">{t(id)}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeId && activeCauses && (
          <motion.div
            key={activeId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="glass mt-6 rounded-2xl border border-border p-6 backdrop-blur-md">
              <h3 className="mb-4 text-lg font-semibold">
                {t('causesFor')}{" "}
                <span className="text-cyan">{t(activeId)}</span>
              </h3>
              <div className="space-y-3">
                {activeCauses.map((cause, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface/50 px-4 py-3"
                  >
                    <span className="text-sm sm:text-base">{t(`${activeId}Cause${i}`)}</span>
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
                  {t('cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

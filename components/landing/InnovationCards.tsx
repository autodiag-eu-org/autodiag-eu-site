"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const INNOVATION_NUMBERS = [
  "01", "02", "03", "04", "05", "06",
  "07", "08", "09", "10", "11", "12",
] as const;

const SPAN2_ITEMS = new Set(["01", "05"]);

export default function InnovationCards() {
  const t = useTranslations('innovations');

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          <span className="text-gradient">{t('titleHighlight')}</span>{" "}
          {t('titleEnd')}
        </h2>
        <p className="mt-3 text-secondary">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INNOVATION_NUMBERS.map((num, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={`glass group rounded-2xl border border-border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:shadow-[0_0_20px_rgba(0,229,255,0.08)] ${
              SPAN2_ITEMS.has(num) ? "sm:col-span-2" : ""
            }`}
          >
            <span className="text-xs font-semibold tracking-widest text-cyan/60">
              {num}
            </span>
            <h3 className="mt-2 text-lg font-semibold">{t(`title${num}`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
              {t(`desc${num}`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

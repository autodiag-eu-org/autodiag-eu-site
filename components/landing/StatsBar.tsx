"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface StatItemProps {
  target: number;
  label: string;
  suffix?: string;
  index: number;
}

function useCountUp(target: number, isActive: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, target, duration]);

  return value;
}

function StatItem({ target, label, suffix, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(target, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col items-center gap-1 px-4 py-3"
    >
      <span className="text-3xl font-bold text-gradient sm:text-4xl">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-secondary">{label}</span>
    </motion.div>
  );
}

export default function StatsBar() {
  const t = useTranslations('stats');

  const stats: { target: number; label: string; suffix?: string }[] = [
    { target: 677, label: t('vehiclesLabel') },
    { target: 250, label: t('codesLabel') },
    { target: 5, label: t('languagesLabel') },
    { target: 34, label: t('countriesLabel') },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-12">
      <div className="glass rounded-2xl border border-border backdrop-blur-md">
        <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              target={stat.target}
              label={stat.label}
              suffix={stat.suffix}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

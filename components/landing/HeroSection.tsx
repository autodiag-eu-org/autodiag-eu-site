"use client";

import { type Variants, motion } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora blobs */}
      <div
        aria-hidden="true"
        className="aurora-blob-1 pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.35)_0%,transparent_70%)] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="aurora-blob-2 pointer-events-none absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,0.3)_0%,transparent_70%)] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="aurora-blob-3 pointer-events-none absolute bottom-1/4 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,200,83,0.25)_0%,transparent_70%)] blur-[120px]"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          La seule app qui{" "}
          <span className="text-gradient">ecoute votre moteur</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-secondary sm:text-xl"
        >
          Diagnostic automobile intelligent — scan audio IA, vision AI, 677
          vehicules europeens
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href="#beta"
            className="group relative inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 text-lg font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
          >
            <span className="relative z-10">
              Scannez votre voiture gratuitement
            </span>
            {/* Shimmer overlay */}
            <span
              aria-hidden="true"
              className="shimmer pointer-events-none absolute inset-0 rounded-full"
            />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-4 py-2 text-sm text-white backdrop-blur-md">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Disponible sur Google Play
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-glass px-4 py-2 text-sm text-secondary backdrop-blur-md">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.71,19.5C17.88,20.5 17,21.4 15.66,21.41C14.32,21.42 13.87,20.6 12.33,20.6C10.79,20.59 10.29,21.4 9.04,21.42C7.69,21.44 6.73,20.39 5.89,19.39C4.17,17.34 2.86,13.67 4.63,11.15C5.5,9.91 6.89,9.15 8.37,9.13C9.65,9.11 10.85,10.01 11.62,10.01C12.39,10.01 13.85,8.92 15.4,9.1C16.06,9.13 17.67,9.38 18.67,10.82C18.58,10.88 16.54,12.09 16.56,14.57C16.59,17.54 19.19,18.49 19.22,18.5C19.19,18.56 18.86,19.73 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            iOS coming soon
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

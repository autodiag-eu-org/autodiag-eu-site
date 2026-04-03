"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function IOSWaitlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/ios-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl border border-border p-8 text-center backdrop-blur-md"
      >
        {/* Apple logo */}
        <svg
          className="mx-auto h-10 w-10 text-secondary"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.71,19.5C17.88,20.5 17,21.4 15.66,21.41C14.32,21.42 13.87,20.6 12.33,20.6C10.79,20.59 10.29,21.4 9.04,21.42C7.69,21.44 6.73,20.39 5.89,19.39C4.17,17.34 2.86,13.67 4.63,11.15C5.5,9.91 6.89,9.15 8.37,9.13C9.65,9.11 10.85,10.01 11.62,10.01C12.39,10.01 13.85,8.92 15.4,9.1C16.06,9.13 17.67,9.38 18.67,10.82C18.58,10.88 16.54,12.09 16.56,14.57C16.59,17.54 19.19,18.49 19.22,18.5C19.19,18.56 18.86,19.73 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
        </svg>

        <h2 className="mt-4 text-xl font-bold sm:text-2xl">
          iOS arrive <span className="text-gradient">bientot</span>
        </h2>
        <p className="mt-2 text-sm text-secondary">
          Laissez votre email, on vous previent des le lancement
        </p>

        {status === "success" ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-sm font-medium text-green"
          >
            Vous serez prevenu des le lancement iOS !
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@example.com"
              className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-white placeholder:text-secondary/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-lg bg-white/10 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-white/20 disabled:opacity-60"
            >
              {status === "loading" ? "..." : "Me notifier"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">
            Erreur — reessayez ou contactez{" "}
            <a
              href="mailto:info@autodiag.eu"
              className="underline hover:text-cyan"
            >
              info@autodiag.eu
            </a>
          </p>
        )}
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import HoneypotField from "@/components/shared/HoneypotField";

type Status = "idle" | "loading" | "success" | "error";

const countries = [
  "France",
  "Allemagne",
  "Suisse",
  "Espagne",
  "Portugal",
  "Autre",
];

export default function BetaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [country, setCountry] = useState("France");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)
      ?.value;
    if (honeypot) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, vehicle, country }),
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
    <section className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl border border-border p-8 backdrop-blur-md sm:p-10"
      >
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Rejoignez les{" "}
          <span className="text-gradient">premiers testeurs</span>
        </h2>

        <p className="mt-3 text-center text-sm text-secondary">
          Acces anticipe a l&apos;app — places limitees
        </p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-xl border border-green/30 bg-green/10 p-6 text-center"
          >
            <p className="text-lg font-semibold text-green">
              Inscription enregistree !
            </p>
            <p className="mt-2 text-sm text-secondary">
              Vous recevrez un email avec le lien d&apos;installation.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <HoneypotField />

            <div>
              <label
                htmlFor="beta-name"
                className="mb-1.5 block text-sm font-medium"
              >
                Nom <span className="text-red-400">*</span>
              </label>
              <input
                id="beta-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-white placeholder:text-secondary/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="beta-email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="beta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-white placeholder:text-secondary/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30"
                placeholder="votre.email@gmail.com"
              />
            </div>

            <div>
              <label
                htmlFor="beta-vehicle"
                className="mb-1.5 block text-sm font-medium"
              >
                Vehicule{" "}
                <span className="text-secondary">(optionnel)</span>
              </label>
              <input
                id="beta-vehicle"
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-white placeholder:text-secondary/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30"
                placeholder="ex: BMW 530d 2018"
              />
            </div>

            <div>
              <label
                htmlFor="beta-country"
                className="mb-1.5 block text-sm font-medium"
              >
                Pays <span className="text-red-400">*</span>
              </label>
              <select
                id="beta-country"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-white focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/30"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
              <p className="text-sm text-amber-200">
                <strong>Important :</strong> vous aurez besoin d&apos;un compte
                Google (Gmail) pour installer l&apos;app.
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative w-full overflow-hidden rounded-full bg-green py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)] disabled:opacity-60"
            >
              <span className="relative z-10">
                {status === "loading"
                  ? "Envoi en cours..."
                  : "Rejoindre la beta"}
              </span>
              <span
                aria-hidden="true"
                className="shimmer pointer-events-none absolute inset-0"
              />
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Une erreur est survenue. Contactez-nous a{" "}
                <a
                  href="mailto:info@autodiag.eu"
                  className="underline hover:text-cyan"
                >
                  info@autodiag.eu
                </a>
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}

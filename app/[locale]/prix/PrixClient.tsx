"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PlanFeature {
  name: string;
  free: string;
  premium: string;
}

const planFeatures: PlanFeature[] = [
  { name: "Scan audio moteur IA", free: "1 / semaine", premium: "Illimite" },
  { name: "Scan audio habitacle", free: "1 / semaine", premium: "Illimite" },
  { name: "Lecture codes DTC", free: "Illimitee", premium: "Illimitee" },
  {
    name: "Live data OBD2",
    free: "4 PIDs basiques",
    premium: "Tous les PIDs",
  },
  { name: "IA mecanicien", free: "3 questions / jour", premium: "Illimite" },
  {
    name: "Historique diagnostics",
    free: "7 derniers jours",
    premium: "Illimite",
  },
  { name: "Effacement codes DTC", free: "—", premium: "Illimite" },
  {
    name: "Devis + couts reparation",
    free: "—",
    premium: "5 pays (FR, DE, CH, ES, PT)",
  },
  {
    name: "Pre-controle technique",
    free: "—",
    premium: "5 pays",
  },
  { name: "Export PDF rapports", free: "—", premium: "Illimite" },
  {
    name: "Drive Test sans dongle",
    free: "—",
    premium: "Accelerometre + GPS + micro",
  },
  { name: "Historique illimite", free: "—", premium: "Illimite" },
];

interface CompetitorRow {
  feature: string;
  autodiag: string;
  carly: string;
  carScanner: string;
  obdeleven: string;
}

const competitorData: CompetitorRow[] = [
  {
    feature: "Prix annuel",
    autodiag: "Gratuit / 49 CHF",
    carly: "59,99 EUR",
    carScanner: "5,99 EUR/an",
    obdeleven: "49,99 EUR",
  },
  {
    feature: "Scan audio moteur IA",
    autodiag: "Oui",
    carly: "Non",
    carScanner: "Non",
    obdeleven: "Non",
  },
  {
    feature: "Vision IA / OCR",
    autodiag: "Oui",
    carly: "Non",
    carScanner: "Non",
    obdeleven: "Non",
  },
  {
    feature: "Drive Test sans dongle",
    autodiag: "Oui",
    carly: "Non",
    carScanner: "Non",
    obdeleven: "Non",
  },
  {
    feature: "IA mecanicien personnalisee",
    autodiag: "Oui",
    carly: "Non",
    carScanner: "Non",
    obdeleven: "Non",
  },
  {
    feature: "Pre-controle technique 5 pays",
    autodiag: "Oui",
    carly: "Non",
    carScanner: "Non",
    obdeleven: "Non",
  },
  {
    feature: "Lecture codes DTC",
    autodiag: "Oui",
    carly: "Oui",
    carScanner: "Oui",
    obdeleven: "Oui",
  },
  {
    feature: "Live data OBD2",
    autodiag: "Oui",
    carly: "Oui",
    carScanner: "Oui",
    obdeleven: "Oui",
  },
  {
    feature: "Effacement DTC",
    autodiag: "Premium",
    carly: "Oui",
    carScanner: "Premium",
    obdeleven: "Oui",
  },
  {
    feature: "Fusion capteurs telephone",
    autodiag: "Oui",
    carly: "Non",
    carScanner: "Non",
    obdeleven: "Non",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "AutoDiag EU est-il vraiment gratuit ?",
    answer:
      "Oui, la version gratuite est genereuse : lecture illimitee des codes DTC, 1 scan audio par semaine, 4 PIDs en live data et 3 questions IA par jour. Elle couvre largement les besoins d'un proprietaire qui veut comprendre un voyant allume.",
  },
  {
    question: "Qu'est-ce que j'obtiens de plus avec Premium ?",
    answer:
      "Premium deverrouille tout : scans audio et habitacle illimites, tous les PIDs en temps reel, effacement des codes DTC, devis reparation par pays, pre-controle technique 5 pays, Drive Test sans dongle, export PDF et historique illimite. C'est l'outil complet du passionne.",
  },
  {
    question: "Comment fonctionne l'essai gratuit de 7 jours ?",
    answer:
      "Des l'installation, vous avez acces a toutes les fonctionnalites Premium pendant 7 jours. Pas besoin de carte bancaire. A la fin de la periode, vous basculez sur le plan gratuit si vous ne souscrivez pas.",
  },
  {
    question: "Comment se fait le paiement ?",
    answer:
      "Exclusivement via Google Play Billing. Pas de Stripe, pas de paiement direct sur le site. L'abonnement se renouvelle automatiquement et peut etre annule a tout moment depuis le Play Store.",
  },
  {
    question: "Puis-je me faire rembourser ?",
    answer:
      "Google Play offre un remboursement automatique dans les 48 heures. Au-dela, contactez-nous a info@autodiag-eu.com et nous traiterons votre demande sous 14 jours conformement au droit de retractation UE.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-green"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
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

export default function PrixClient() {
  const [expandedFaq, setExpandedFaq] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setExpandedFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="space-y-12">
      {/* Plan cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Free */}
        <div className="glass flex flex-col rounded-2xl border border-border p-8 backdrop-blur-md transition-all hover:border-border/60">
          <h2 className="text-xl font-bold">Gratuit</h2>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold">0</span>
            <span className="text-secondary">CHF</span>
          </div>
          <p className="mt-2 text-sm text-secondary">
            Tout ce qu&apos;il faut pour comprendre votre voiture
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {planFeatures
              .filter((f) => f.free !== "—")
              .map((f) => (
                <li
                  key={f.name}
                  className="flex items-start gap-2 text-sm text-secondary"
                >
                  <CheckIcon />
                  <span>
                    {f.name}
                    {f.free !== "Illimitee" && f.free !== "Illimite" && (
                      <span className="text-secondary/60"> — {f.free}</span>
                    )}
                  </span>
                </li>
              ))}
          </ul>
          <a
            href="#beta"
            className="mt-8 block rounded-full border border-border py-3 text-center font-semibold transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            Commencer gratuitement
          </a>
        </div>

        {/* Premium */}
        <div className="glass relative flex flex-col rounded-2xl border border-cyan/40 p-8 shadow-[0_0_30px_rgba(0,229,255,0.08)] backdrop-blur-md">
          <span className="absolute -top-3 right-6 rounded-full bg-cyan px-4 py-1 text-xs font-bold text-black">
            Recommande
          </span>
          <h2 className="text-xl font-bold">Premium</h2>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gradient">49</span>
            <span className="text-secondary">CHF / an</span>
          </div>
          <p className="mt-2 text-sm text-cyan/80">
            7 jours d&apos;essai gratuit — sans carte bancaire
          </p>
          <ul className="mt-8 flex-1 space-y-3">
            {planFeatures.map((f) => (
              <li key={f.name} className="flex items-start gap-2 text-sm">
                <CheckIcon />
                <span>
                  {f.name}
                  {f.premium !== "Illimite" &&
                    f.premium !== "Illimitee" && (
                      <span className="text-secondary/60">
                        {" "}
                        — {f.premium}
                      </span>
                    )}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#beta"
            className="group relative mt-8 block overflow-hidden rounded-full bg-green py-3 text-center font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
          >
            <span className="relative z-10">
              Commencer l&apos;essai gratuit
            </span>
            <span
              aria-hidden="true"
              className="shimmer pointer-events-none absolute inset-0"
            />
          </a>
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-6 text-xl font-bold">
          Comparaison detaillee des plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-semibold text-secondary">
                  Fonctionnalite
                </th>
                <th className="pb-3 px-4 text-center font-semibold text-secondary">
                  Gratuit
                </th>
                <th className="pb-3 pl-4 text-center font-semibold text-cyan">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {planFeatures.map((f) => (
                <tr key={f.name} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">{f.name}</td>
                  <td className="py-3 px-4 text-center text-secondary">
                    {f.free}
                  </td>
                  <td className="py-3 pl-4 text-center font-medium text-green">
                    {f.premium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitor comparison */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-2 text-xl font-bold">
          AutoDiag EU vs la concurrence
        </h2>
        <p className="mb-6 text-sm text-secondary">
          Ce qui nous rend unique : le scan audio IA, la vision IA, le
          diagnostic sans dongle et la fusion capteurs — aucun concurrent ne
          propose ces fonctionnalites.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 text-left font-semibold text-secondary">
                  Fonctionnalite
                </th>
                <th className="pb-3 px-3 text-center font-semibold text-cyan">
                  AutoDiag EU
                </th>
                <th className="pb-3 px-3 text-center font-semibold text-secondary">
                  Carly
                </th>
                <th className="pb-3 px-3 text-center font-semibold text-secondary">
                  Car Scanner
                </th>
                <th className="pb-3 pl-3 text-center font-semibold text-secondary">
                  OBDeleven
                </th>
              </tr>
            </thead>
            <tbody>
              {competitorData.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium">{row.feature}</td>
                  <td className="py-3 px-3 text-center font-medium text-green">
                    {row.autodiag}
                  </td>
                  <td className="py-3 px-3 text-center text-secondary">
                    {row.carly}
                  </td>
                  <td className="py-3 px-3 text-center text-secondary">
                    {row.carScanner}
                  </td>
                  <td className="py-3 pl-3 text-center text-secondary">
                    {row.obdeleven}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="mb-6 text-xl font-bold">Questions sur les tarifs</h2>
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-glass backdrop-blur-md"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-3 p-5 text-left"
                aria-expanded={expandedFaq[index] ?? false}
              >
                <span className="font-semibold">{item.question}</span>
                <ChevronIcon open={expandedFaq[index] ?? false} />
              </button>
              <AnimatePresence>
                {expandedFaq[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-5 pb-5 pt-4">
                      <p className="text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold">
          Pret a essayer ?
        </h2>
        <p className="mb-6 text-secondary">
          7 jours gratuits, pas de carte bancaire, annulation en un clic.
        </p>
        <a
          href="#beta"
          className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
        >
          <span className="relative z-10">Commencer l&apos;essai gratuit</span>
          <span
            aria-hidden="true"
            className="shimmer pointer-events-none absolute inset-0"
          />
        </a>
        <p className="mt-4 text-sm text-secondary">
          Paiement via Google Play — pas de carte bancaire requise pour
          l&apos;essai
        </p>
      </div>
    </div>
  );
}

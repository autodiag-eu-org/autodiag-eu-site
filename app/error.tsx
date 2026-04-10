"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { captureException } from "@/lib/sentry";

import frMessages from "@/i18n/fr.json";
import enMessages from "@/i18n/en.json";
import deMessages from "@/i18n/de.json";
import esMessages from "@/i18n/es.json";
import ptMessages from "@/i18n/pt.json";

const messagesMap: Record<string, typeof frMessages> = {
  fr: frMessages,
  en: enMessages,
  de: deMessages,
  es: esMessages,
  pt: ptMessages,
};

function detectLocale(): string {
  if (typeof window === "undefined") return "fr";
  const seg = window.location.pathname.split("/")[1];
  return seg && seg in messagesMap ? seg : "fr";
}

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const locale = useMemo(detectLocale, []);
  const t = messagesMap[locale]?.error ?? frMessages.error;

  useEffect(() => {
    captureException(error, { digest: error.digest });
  }, [error]);

  return (
    <main className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          style={{
            background: "rgba(229, 57, 53, 0.15)",
            border: "1px solid rgba(229, 57, 53, 0.3)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E53935"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {t.title}
        </h1>

        <p className="text-secondary text-lg mb-8">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-xl font-semibold text-bg transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #00e5ff, #00c853)",
            }}
          >
            {t.cta}
          </button>

          <Link
            href={`/${locale}`}
            className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {messagesMap[locale]?.common?.back ?? "Retour"}
          </Link>
        </div>

        <p className="mt-10 text-secondary/60 text-sm">
          {t.contact}
        </p>
      </div>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { captureException } from "@/lib/sentry";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
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
          Oups, quelque chose a cal&eacute;
        </h1>

        <p className="text-secondary text-lg mb-8">
          Notre moteur de recherche a un petit souci. R&eacute;essayez dans un
          instant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-xl font-semibold text-bg transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #00e5ff, #00c853)",
            }}
          >
            R&eacute;essayer
          </button>

          <Link
            href="/fr"
            className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Retour a l&apos;accueil
          </Link>
        </div>

        <p className="mt-10 text-secondary/60 text-sm">
          Si le probl&egrave;me persiste, contactez-nous :&nbsp;
          <a
            href="mailto:info@autodiag.eu"
            className="text-cyan underline hover:no-underline"
          >
            info@autodiag.eu
          </a>
        </p>

        <p className="mt-6 text-secondary/40 text-xs">
          AutoDiag EU &mdash; Le diagnostic auto intelligent
        </p>
      </div>
    </main>
  );
}

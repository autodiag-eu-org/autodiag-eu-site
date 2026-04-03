"use client";

import { useState } from "react";
import VehicleSelector from "@/components/tools/VehicleSelector";
import type { VehicleCompatibility } from "@/lib/vehicles";

export default function CompatibiliteClient() {
  const [result, setResult] = useState<VehicleCompatibility | null>(null);

  return (
    <div className="space-y-8">
      <VehicleSelector onSelect={setResult} />

      {result && (
        <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
          <h2 className="mb-6 text-xl font-bold">
            <span className="text-gradient">
              {result.brand} {result.model}
            </span>{" "}
            — Resultat detaille
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Protocol */}
            <div className="rounded-xl border border-border p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                Protocole OBD2
              </p>
              <p className="mt-2 text-2xl font-bold text-gradient">
                {result.protocol}
              </p>
              <p className="mt-1 text-sm text-secondary">
                Protocole de communication vehicule
              </p>
            </div>

            {/* PIDs */}
            <div className="rounded-xl border border-border p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                PIDs supportes
              </p>
              <p className="mt-2 text-2xl font-bold text-gradient">
                {result.pidsSupported}
              </p>
              <p className="mt-1 text-sm text-secondary">
                Parametres lisibles en temps reel
              </p>
            </div>

            {/* Years */}
            <div className="rounded-xl border border-border p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                Annees couvertes
              </p>
              <p className="mt-2 text-2xl font-bold text-gradient">
                {result.yearFrom} — {result.yearTo}
              </p>
              <p className="mt-1 text-sm text-secondary">
                Generations compatibles
              </p>
            </div>
          </div>

          {/* Feature matrix */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-bold">
              Matrice de fonctionnalites
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureItem
                label="Lecture codes DTC"
                supported={result.features.dtcRead}
              />
              <FeatureItem
                label="Effacement codes DTC"
                supported={result.features.dtcClear}
              />
              <FeatureItem
                label="Donnees en temps reel"
                supported={result.features.liveData}
              />
              <FeatureItem
                label="ABS / ESP"
                supported={result.features.absEsp}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-green/5 p-6 text-center">
            <p className="mb-4 text-secondary">
              Votre {result.brand} {result.model} est compatible avec AutoDiag
              EU
            </p>
            <a
              href="#beta"
              className="group relative inline-block overflow-hidden rounded-full bg-green px-8 py-3 font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(0,200,83,0.4)]"
            >
              <span className="relative z-10">Telecharger gratuitement</span>
              <span
                aria-hidden="true"
                className="shimmer pointer-events-none absolute inset-0"
              />
            </a>
          </div>
        </div>
      )}

      {/* Info section */}
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md">
        <h2 className="mb-4 text-xl font-bold">
          Comment fonctionne la compatibilite OBD2 ?
        </h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            La prise OBD2 est obligatoire sur tous les vehicules essence vendus
            en Europe depuis 2001 et diesel depuis 2003. Elle se situe
            generalement sous le volant, pres de la colonne de direction.
          </p>
          <p>
            AutoDiag EU communique avec votre vehicule via un dongle ELM327
            Bluetooth (BLE). Le protocole de communication varie selon le
            constructeur — CAN 11 bits pour la majorite des vehicules modernes,
            KWP2000 pour certains vehicules plus anciens.
          </p>
          <p>
            Le nombre de PIDs (parametres lisibles) depend de l&apos;electronique
            embarquee. Plus votre vehicule est recent, plus le nombre de donnees
            accessibles est important : temperature moteur, regime, vitesse,
            pression turbo, temperature de l&apos;huile et bien d&apos;autres.
          </p>
          <p>
            Meme sans dongle OBD2, vous pouvez utiliser les fonctionnalites
            uniques d&apos;AutoDiag EU : le scan audio IA ecoute votre moteur
            pour detecter 11 types de pannes, et la vision IA reconnait les
            pieces et codes instantanement.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  label,
  supported,
}: {
  label: string;
  supported: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg border p-3 ${
        supported
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-red-500/20 bg-red-500/5"
      }`}
    >
      {supported ? (
        <svg
          className="h-5 w-5 shrink-0 text-emerald-400"
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
      ) : (
        <svg
          className="h-5 w-5 shrink-0 text-red-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span className={`text-sm font-medium ${supported ? "text-emerald-400" : "text-red-400"}`}>
        {label}
      </span>
    </div>
  );
}

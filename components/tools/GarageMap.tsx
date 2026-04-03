'use client';

import { useState } from 'react';

interface Garage {
  name: string;
  address: string;
  phone: string;
  distance: string;
  specialty: string;
}

const EXAMPLE_GARAGES: Garage[] = [
  {
    name: 'Garage du Jura — Boncourt',
    address: 'Rue de la Gare 12, 2926 Boncourt',
    phone: '+41 32 475 XX XX',
    distance: '0.8 km',
    specialty: 'Toutes marques, diagnostic electronique',
  },
  {
    name: 'Auto Center Delemont',
    address: 'Route de Bale 45, 2800 Delemont',
    phone: '+41 32 422 XX XX',
    distance: '12.3 km',
    specialty: 'Mecanique generale, controle MFK',
  },
  {
    name: 'Carrosserie Porrentruy Plus',
    address: 'Faubourg de France 8, 2900 Porrentruy',
    phone: '+41 32 466 XX XX',
    distance: '8.1 km',
    specialty: 'Carrosserie, peinture, mecanique legere',
  },
];

export default function GarageMap() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-8">
      {/* Search input */}
      <div className="relative">
        <label htmlFor="garage-search" className="sr-only">
          Rechercher par ville ou code postal
        </label>
        <input
          id="garage-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Entrez une ville ou un code postal..."
          className="w-full rounded-xl border border-border bg-surface px-5 py-4 pl-12 text-white placeholder:text-secondary/60 focus:border-cyan/40 focus:outline-none focus:ring-2 focus:ring-cyan/20 transition-all"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* Map placeholder */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
          {/* Map pin icon */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan/10">
            <svg
              className="h-10 w-10 text-cyan"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-bold text-white">
            Carte disponible prochainement
          </h3>
          <p className="max-w-md text-secondary">
            La carte interactive avec geolocalisation sera activee
            prochainement. En attendant, decouvrez les garages de votre
            region ci-dessous.
          </p>
        </div>
      </div>

      {/* Garage list */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Garages pres de Boncourt (Jura, Suisse)
        </h3>

        {EXAMPLE_GARAGES.map((garage) => (
          <div
            key={garage.name}
            className="rounded-2xl border border-border bg-glass backdrop-blur-sm p-6 transition-all hover:border-cyan/20"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h4 className="font-semibold text-white">{garage.name}</h4>
                </div>
                <p className="text-sm text-secondary">{garage.address}</p>
                <p className="text-sm text-secondary">{garage.specialty}</p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <span className="inline-flex items-center gap-1.5 text-sm text-secondary">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    {garage.phone}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                    {garage.distance}
                  </span>
                </div>
              </div>
              <button
                type="button"
                disabled
                className="shrink-0 rounded-xl border border-border bg-surface px-5 py-2.5 text-sm font-medium text-secondary cursor-not-allowed opacity-50"
                aria-label={`Itineraire vers ${garage.name} — bientot disponible`}
              >
                Itineraire
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info note */}
      <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6 text-center">
        <p className="mb-2 text-sm text-secondary">
          La carte interactive avec geolocalisation sera activee prochainement.
        </p>
        <p className="text-sm font-medium text-white">
          En attendant, utilisez AutoDiag EU pour diagnostiquer votre vehicule
          vous-meme — c&apos;est gratuit au lancement.
        </p>
      </div>
    </div>
  );
}

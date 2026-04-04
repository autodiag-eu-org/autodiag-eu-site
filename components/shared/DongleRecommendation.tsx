"use client";

import { motion } from "framer-motion";

const AMAZON_UK_TAG = process.env.NEXT_PUBLIC_AMAZON_UK_TAG ?? "autodiageu-21";
const AMAZON_UK_URL = `https://www.amazon.co.uk/s?k=Vgate+iCar+Pro+Bluetooth+OBD2&tag=${AMAZON_UK_TAG}`;

interface DongleRecommendationProps {
  locale?: string;
}

export default function DongleRecommendation({ locale = "fr" }: DongleRecommendationProps) {
  if (locale !== "en") return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-12"
    >
      <div className="rounded-2xl border border-border bg-glass p-6 backdrop-blur-md sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Icon/Image placeholder */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-cyan/10">
            <svg
              className="h-12 w-12 text-cyan"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 10h.01M10 10h.01M14 10h.01" />
              <path d="M6 14h12" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="mb-1 text-lg font-bold">
              Recommended: Vgate iCar Pro 2S (Bluetooth 4.0)
            </h3>
            <p className="mb-3 text-sm text-secondary leading-relaxed">
              The OBD2 dongle we recommend for AutoDiag EU. Compact, reliable,
              and compatible with both iOS and Android via Bluetooth Low Energy.
              Works with all OBD2 vehicles from 2001 onwards. Typical price:
              £20–£30.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={AMAZON_UK_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF9900] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:brightness-110"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.045 18.02c.07-.116.36-.198.638-.233a29.087 29.087 0 013.12-.156c1.724.04 3.445.27 5.063.636a22.86 22.86 0 014.383 1.74c.262.148.477.264.674.262.197-.003.283-.146.283-.49V18.38c0-.4-.19-.735-.558-1.058C12.32 16.2 10.57 15.35 8.694 14.75c-1.875-.6-3.78-.85-5.7-.75-.86.05-1.7.16-2.5.33-.114.025-.227.05-.337.08a.244.244 0 00-.112.398z" />
                  <path d="M14.398 18.02c.07-.116.36-.198.638-.233.915-.11 2.015-.15 3.12-.156 1.724.04 3.445.27 5.063.636.23.05.46.11.683.17a.244.244 0 01-.065.48h-.018a29.104 29.104 0 00-2.5.33c-1.92.1-3.825.35-5.7.75-1.876.6-3.626 1.45-4.954 2.572-.367.323-.558.658-.558 1.058v1.393c0 .344.086.487.283.49.197.002.412-.114.674-.263a22.86 22.86 0 014.383-1.74c1.618-.366 3.34-.596 5.063-.636 1.105.006 2.205.047 3.12.156.278.035.568.117.638.233" />
                </svg>
                Buy on Amazon UK
              </a>
            </div>
            <p className="mt-3 text-xs text-secondary/60">
              As an Amazon Associate, we earn from qualifying purchases. This
              does not affect the price you pay.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

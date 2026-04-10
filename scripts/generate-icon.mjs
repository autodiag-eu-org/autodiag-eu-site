/**
 * Generate public/images/icon-192.png — AutoDiag EU app icon.
 *
 * Renders a 192x192 PNG with rounded corners:
 *   - background #050510 (brand dark)
 *   - "AD" monogram in cyan #00e5ff with a green underline accent
 *
 * Run manually if the source SVG below changes:
 *   node scripts/generate-icon.mjs
 */

import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "public", "images", "icon-192.png");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00e5ff"/>
      <stop offset="100%" stop-color="#00c853"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="192" height="192" rx="36" ry="36" fill="#050510"/>
  <rect x="6" y="6" width="180" height="180" rx="32" ry="32" fill="none" stroke="url(#g)" stroke-width="2" stroke-opacity="0.35"/>
  <text x="96" y="118"
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
        font-size="96"
        font-weight="800"
        text-anchor="middle"
        fill="url(#g)"
        letter-spacing="-4">AD</text>
  <rect x="48" y="138" width="96" height="4" rx="2" fill="url(#g)"/>
</svg>`;

mkdirSync(dirname(OUT), { recursive: true });

await sharp(Buffer.from(svg))
  .resize(192, 192)
  .png({ compressionLevel: 9 })
  .toFile(OUT);

console.log(`wrote ${OUT}`);

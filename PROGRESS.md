# PROGRESS — Site web autodiag.eu
# Mis a jour automatiquement par Claude Code

## Phase 1 — Fondation
- [x] Init Next.js + Tailwind + next-intl + framer-motion
- [x] middleware.ts (redirection locale)
- [x] Layout : Navigation + MobileMenu + Footer
- [x] Landing : HeroSection + StatsBar
- [x] Landing : DiagnosticExpress (8 symptomes)
- [x] Landing : InnovationCards (12 innovations bento)
- [x] Landing : PricingSection (Gratuit + Premium)
- [x] Landing : BetaForm + IOSWaitlist
- [x] Landing : CTABanner + LiveCounter
- [x] CookieConsent bloquant
- [x] Page 404 + Page erreur
- [x] Donnees : dtc_codes.json (250 codes FR)
- [x] Donnees : compatibility.json (677 vehicules)
- [ ] Deploy Vercel (preview)
- [x] quality-gate.sh PASS

## Phase 2 — Outils
- [x] DTCSearch + DTCFilters + DTCCard
- [x] DTCDetail avec VehicleSelector + couts par pays
- [x] Pages DTC SSG (250 pages FR)
- [x] Schema JSON-LD FAQ sur chaque page DTC
- [x] Verificateur compatibilite vehicule
- [x] Calculateur economies
- [x] validate-dtc-data.ts PASS
- [x] quality-gate.sh PASS

## Phase 3 — Gamification
- [x] AudioQuiz (stethoscope 3 niveaux)
- [x] CarQuiz (15 questions)
- [x] CTChecklist (Pre-CT 5 pays)
- [x] AppSimulator (demo pipeline 30s)
- [x] quality-gate.sh PASS

## Phase 4 — SEO + i18n
- [ ] Traduction EN complete (reporte — FR prioritaire au lancement)
- [x] Sitemap XML + robots.txt (next-sitemap, 251 URLs)
- [x] Open Graph images dynamiques (/api/og edge runtime)
- [x] PWA manifest (enrichi + meta tags layout)
- [x] Sentry integration (lib/sentry.ts + error.tsx)
- [x] GA4 events types (lib/analytics.ts — 9 fonctions verifiees)
- [x] quality-gate.sh PASS

## Phase 5 — Contenu + Legal
- [x] 5 articles blog (FR, 1200+ mots chacun, ton ami mecanicien)
- [x] Page A propos (texte exact Reda)
- [x] Page comparaison concurrents (vs Carly/Car Scanner/OBDeleven, pas Skanyx)
- [x] Mentions legales (impressum suisse)
- [x] Politique confidentialite RGPD + nDSG
- [x] CGV (Premium 49 CHF/an, Google Play)
- [x] Carte garages (placeholder + 3 garages Jura, Google Maps pret a brancher)
- [x] Breadcrumbs (DTC detail + blog articles) + ScrollToTop (layout global)
- [x] Print stylesheet (globals.css)
- [ ] Lighthouse >= 95 (a verifier apres deploy Vercel)
- [x] quality-gate.sh PASS

## Statut actuel
Phase : 5 — TERMINEE (toutes les phases 1-5 livrees)
Dernier commit : feat: Phase 5 — polish final
Derniere mise a jour : 3 avril 2026

## Routes du site (22 pages)
- / → /fr (redirect middleware)
- /fr — Landing page
- /fr/codes — Encyclopedie 250 DTC
- /fr/codes/[code] — 250 pages SSG
- /fr/compatibilite — Verificateur 677 vehicules
- /fr/demo — Simulateur app 30s
- /fr/stethoscope — Quiz audio 3 niveaux
- /fr/economies — Calculateur epargne
- /fr/controle-technique — Pre-CT 5 pays
- /fr/quiz — Quiz voiture 15 questions
- /fr/garages — Carte garages
- /fr/prix — Tarification + comparaison
- /fr/comparaison — Concurrents detaille
- /fr/a-propos — Histoire Reda
- /fr/blog — 5 articles
- /fr/blog/[slug] — 5 articles SSG
- /fr/mentions-legales — Impressum
- /fr/confidentialite — RGPD + nDSG
- /fr/cgv — Conditions vente
- /api/beta — Formulaire beta
- /api/ios-waitlist — Waitlist iOS
- /api/og — OG images dynamiques

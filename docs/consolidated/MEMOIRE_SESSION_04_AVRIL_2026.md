# MEMOIRE SESSION — 4 Avril 2026
# Site web autodiag-eu.com
# Claude Opus 4.6 (1M context) + Claude Code

---

## CONTEXTE

Reda a demande la creation complete du site web autodiag-eu.com en mode autonome.
Trois documents source : CLAUDE_SITE_WEB.md + SPEC_SITE_AUTODIAG_EU.pdf + ADDENDUM_SPEC_SITE_AUTODIAG_EU.pdf.
Le site est un produit web interactif (pas une vitrine statique) qui convertit les visiteurs en telechargements Google Play.

Avant le site web, un bug Sentry FATAL a ete corrige sur l'app mobile (crash `.toFixed()` sur undefined).

---

## PARTIE 1 — FIX APP MOBILE (autodiag-eu)

### Bug Sentry FATAL
- **Device** : SM-S908B (Samsung S22 Ultra), Android 16, autodiag-app@2.6.0
- **Crash** : `TypeError: Cannot read property 'toFixed' of undefined` dans `checkEmissions()`
- **Root cause** : PID 012F retourne "NO DATA" → `shortTermFuelTrimB1` est `undefined` (pas `null`). Guard `=== null` ne catch pas `undefined`.
- **Impact** : 4 fonctions vulnerables dans `quickTestService.ts` (checkMoteur, checkTemperature, checkBatterie, checkEmissions)

### Fix applique
- **Fix 1** : 4 guards `=== null` → `== null` dans `quickTestService.ts` (lignes 57, 100, 145, 190)
- **Fix 2** : spread `{ ...EMPTY_LIVE_DATA, ...(liveData ?? {}) }` dans `quick-test.tsx:150`
- **Audit** : 166 occurrences `.toFixed()` auditees dans tout `app/`, 0 `.toPrecision()`, 0 `.valueOf()` dangereux
- **Commit** : `eb779fc` — pushé sur `autodiag-eu-org/autodiag-eu`
- **Build** : clean build R13 (`gradlew clean && assembleRelease`), APK 173 Mo, installe + force stop
- **Tests** : tsc 0 erreurs, 2619 Jest PASS / 151 suites

---

## PARTIE 2 — SITE WEB autodiag-eu.com

### Stack technique
- Next.js 16.2.2 (App Router) + TypeScript strict + Tailwind CSS v4 + Framer Motion + next-intl
- Donnees JSON statiques (zero base de donnees pour le site)
- Supabase : tables beta_requests + ios_waitlist (projet existant wikoprywqzpovgknqihz)
- Email : Resend API (HTTP fetch direct, pas SDK)
- Analytics : GA4 avec consentement bloquant RGPD
- Deploiement : Vercel (auto-deploy sur push)

### Phases livrees

#### Phase 1 — Fondation (commit 16f0a48)
- Init projet, middleware i18n, layout complet
- Navigation sticky (hide on scroll) + MobileMenu (focus trap) + Footer
- HeroSection aurora blobs + StatsBar (677/250/5/34) + DiagnosticExpress 8 symptomes
- InnovationCards 12 bento grid + PricingSection (Gratuit + Premium 49 CHF/an)
- BetaForm + IOSWaitlist + CTABanner + LiveCounter
- CookieConsent BLOQUANT GA4 + ScrollToTop + DownloadButton shimmer
- SchemaMarkup JSON-LD (Organization, FAQPage, Article)
- Page 404 + Page erreur personnalisees
- Donnees : 250 codes DTC FR + 677 vehicules compatibles
- API : /api/beta + /api/ios-waitlist (honeypot + rate limit + Supabase)
- Lib : analytics, email, rate-limit, seo, dtc, vehicles

#### Phase 2 — Outils DTC (commit dde452c)
- DTCSearch (debounce 200ms + URL sync) + DTCFilters (9 categories) + DTCCard
- DTCDetail : causes expandables, couts 5 pays, FAQ accordion, ShareButton
- 250 pages DTC SSG via generateStaticParams + FAQPage JSON-LD
- VehicleSelector : 3 dropdowns cascade (marque/modele/annee), 677 vehicules
- Page compatibilite : verificateur OBD2 protocole/PIDs/features
- Page economies : calculateur epargne garage vs AutoDiag, slider, bar chart
- Page prix : tarification + comparaison Carly/Car Scanner/OBDeleven + 5 FAQ
- validate-dtc-data.ts : 250 codes valides, 3 prix zero corriges, 5 descriptions allongees

#### Phase 3 — Gamification (commit c349796)
- AudioQuiz : stethoscope 3 niveaux × 3 rounds, 27 sons, waveform animes, confettis
- CarQuiz : 15 questions, timer 30s, 4 verdicts (Novice → Expert)
- CTChecklist : pre-CT interactif 5 pays (FR CT / DE TUV / CH MFK / ES ITV / PT IPO)
- AppSimulator : mockup telephone 30s boucle (BLE → ELM327 → jauges → P0420 → score 84/100)

#### Phase 4 — SEO + Contenu (commit 4c98dfd)
- next-sitemap : 251 URLs (homepage + 250 DTC)
- OG images dynamiques /api/og (edge runtime, 1200x630)
- PWA manifest enrichi + meta tags layout
- Sentry : lib/sentry.ts + integration error.tsx
- GA4 : 9 fonctions typees (toutes avec consent check)
- 5 articles blog 1200+ mots FR (OBD2, CT, bruits moteur, economies, guide)
- Legal : mentions legales (impressum suisse), confidentialite (RGPD + nDSG), CGV
- A propos : mots exacts de Reda (non reecrit)

#### Phase 5 — Polish final (commit 9e19c1c)
- GarageMap placeholder + 3 garages Jura CH (pret pour Google Maps)
- Page comparaison concurrents (vs Carly/Car Scanner/OBDeleven, pas Skanyx)
- ScrollToTop integre dans layout global
- Breadcrumbs ajoutes aux articles blog
- Footer enrichi : liens garages + comparatif

### Corrections post-deploy

| Commit | Description |
|--------|-------------|
| 8fd10cf | fix: domaine autodiag-eu.com (pas autodiag.eu) — 22 fichiers corriges |
| 0ff2f96 | feat: tables Supabase beta_requests + ios_waitlist — migration SQL |
| 1747324 | feat: Google Search Console verification file |
| e10d840 | feat: notification email Reda a chaque inscription beta + iOS |
| 1df73a0 | fix: Resend from address — onboarding@resend.dev (domaine non verifie) |
| 730b12a | debug: add error logging to email service |
| efaf9ca | debug: check RESEND_API_KEY availability in runtime |
| 37b06b0 | fix: use bare onboarding@resend.dev |
| 3e16500 | fix: replace Resend SDK with direct HTTP fetch |
| 66c856f | debug: inline fetch test in beta route |
| 116d519 | fix: inline Resend fetch dans les API routes — contourne bundling Vercel |

### Debug email Resend
- **Probleme initial** : `emailSent: false` sur tous les appels
- **Root cause 1** : RESEND_API_KEY manquante dans Vercel env vars (ajoutee)
- **Root cause 2** : domaine `noreply@autodiag-eu.com` non verifie dans Resend → fallback `onboarding@resend.dev`
- **Root cause 3** : SDK Resend echouait silencieusement dans le runtime serverless Vercel
- **Fix final** : appels HTTP fetch directs inlines dans les routes API (pas d'import lib externe)
- **Verification** : debug inline confirme `status=200` + email envoye avec id depuis Vercel
- **Rate limiting** : le test via la meme IP est bloque apres 3 requetes/heure (fonctionnel)

---

## INFRASTRUCTURE

### Repo GitHub
- **URL** : https://github.com/autodiag-eu-org/autodiag-eu-site (public)
- **Branche** : main
- **Commits** : 16 commits total

### Deploiement Vercel
- **URL production** : https://autodiag-eu-site.vercel.app
- **Domaine custom** : https://www.autodiag-eu.com (alias Vercel)
- **Auto-deploy** : connecte a GitHub, push = deploy

### Variables d'environnement Vercel (7)
| Variable | Statut |
|----------|--------|
| NEXT_PUBLIC_GA_ID | G-K3MJ3QLBTB |
| NEXT_PUBLIC_SITE_URL | https://www.autodiag-eu.com |
| NEXT_PUBLIC_SUPABASE_URL | configuree |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | configuree |
| NEXT_PUBLIC_BETA_OPTIN_URL | https://play.google.com/apps/testing/com.autodiageu.app |
| NEXT_PUBLIC_PLAY_STORE_URL | https://play.google.com/store/apps/details?id=com.autodiageu.app |
| RESEND_API_KEY | configuree |

### Scores Lighthouse
| Metrique | Score |
|----------|:-----:|
| Performance | 97 |
| Accessibility | 98 |
| Best Practices | 96 |
| SEO | 100 |

---

## ROUTES DU SITE (22 pages)

| Route | Type | Description |
|-------|------|-------------|
| / | Redirect | → /fr (middleware) |
| /fr | Dynamic | Landing page (8 sections) |
| /fr/codes | Dynamic | Encyclopedie 250 DTC |
| /fr/codes/[code] | SSG (250) | Pages DTC individuelles |
| /fr/compatibilite | Dynamic | Verificateur 677 vehicules |
| /fr/demo | Dynamic | Simulateur app 30s |
| /fr/stethoscope | Dynamic | Quiz audio 3 niveaux |
| /fr/economies | Dynamic | Calculateur epargne |
| /fr/controle-technique | Dynamic | Pre-CT 5 pays |
| /fr/quiz | Dynamic | Quiz voiture 15 questions |
| /fr/garages | Dynamic | Carte garages (placeholder) |
| /fr/prix | Dynamic | Tarification + concurrents |
| /fr/comparaison | Dynamic | Comparaison detaillee |
| /fr/a-propos | Dynamic | Histoire Reda |
| /fr/blog | Dynamic | Liste 5 articles |
| /fr/blog/[slug] | SSG (5) | Articles individuels |
| /fr/mentions-legales | Dynamic | Impressum suisse |
| /fr/confidentialite | Dynamic | RGPD + nDSG |
| /fr/cgv | Dynamic | CGV Premium |
| /api/beta | POST | Formulaire beta |
| /api/ios-waitlist | POST | Waitlist iOS |
| /api/og | GET | OG images dynamiques |

---

## QUALITY GATES — RESULTATS FINAUX

| Gate | Resultat |
|------|----------|
| TypeScript (tsc --noEmit) | 0 erreur |
| Next.js build | SUCCESS |
| console.log (hors analytics.ts) | 0 |
| any TypeScript | 0 |
| TODO / FIXME | 0 |
| DTC validation (250 codes) | PASS |
| Prix realistes 5 pays | PASS |
| Descriptions 80+ mots | PASS |

---

## ACTIONS RESTANTES

1. **Verifier domaine autodiag-eu.com dans Resend** → permettra d'envoyer depuis `noreply@autodiag-eu.com` au lieu de `onboarding@resend.dev`
2. **Executer SQL migration** sur Supabase dashboard (si pas encore fait) : `supabase/migrations/001_beta_requests_ios_waitlist.sql`
3. **Tester formulaire beta** depuis un navigateur (pas la meme IP que le terminal rate-limite)
4. **DNS autodiag-eu.com** : configurer les records DNS chez le registrar pour pointer vers Vercel
5. **Google Search Console** : valider la propriete avec le fichier de verification deploye
6. **Traduction EN** : reportee — FR prioritaire au lancement (Phase 4 i18n)
7. **Lighthouse** : reverifier apres configuration DNS du domaine custom

---

## METRIQUES SESSION

- **Duree** : ~4h
- **Commits app mobile** : 1 (fix toFixed)
- **Commits site web** : 16
- **Fichiers crees** : ~80+
- **Donnees** : 250 DTC codes, 677 vehicules, 8 arbres diagnostic, 15 quiz, CT 5 pays, 12 innovations, 5 articles blog
- **Pages generees** : 255 SSG (250 DTC + 5 blog) + 17 dynamiques + 3 API

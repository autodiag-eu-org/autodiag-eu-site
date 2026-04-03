/**
 * GA4 Analytics — Typed event functions
 * This is the ONLY file allowed to use console.log (R1)
 */

type GtagCommand = "event";

interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  plan?: string;
  code?: string;
  symptom?: string;
  brand?: string;
  model?: string;
  level?: number;
  score?: number;
  locale?: string;
  [key: string]: string | number | undefined;
}

declare global {
  interface Window {
    gtag?: (command: GtagCommand, action: string, params?: GtagEventParams) => void;
  }
}

function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("cookie-consent") === "accepted";
  } catch {
    return false;
  }
}

function sendEvent(action: string, params: GtagEventParams): void {
  if (!hasConsent()) {
    console.log(`[Analytics] Event blocked (no consent): ${action}`);
    return;
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  } else {
    console.log(`[Analytics] gtag not loaded, event queued: ${action}`);
  }
}

export function trackDownloadClick(): void {
  sendEvent("download_click", {
    event_category: "engagement",
    event_label: "play_store",
  });
}

export function trackBetaFormSubmit(): void {
  sendEvent("beta_form_submit", {
    event_category: "conversion",
    event_label: "beta_signup",
  });
}

export function trackDTCSearch(code: string): void {
  sendEvent("dtc_search", {
    event_category: "engagement",
    event_label: code,
    code,
  });
}

export function trackSymptomClick(symptom: string): void {
  sendEvent("symptom_click", {
    event_category: "engagement",
    event_label: symptom,
    symptom,
  });
}

export function trackVehicleCheck(brand: string, model: string): void {
  sendEvent("vehicle_check", {
    event_category: "engagement",
    event_label: `${brand} ${model}`,
    brand,
    model,
  });
}

export function trackQuizStart(level: number): void {
  sendEvent("quiz_start", {
    event_category: "engagement",
    event_label: `level_${level}`,
    level,
  });
}

export function trackQuizComplete(score: number): void {
  sendEvent("quiz_complete", {
    event_category: "engagement",
    event_label: `score_${score}`,
    value: score,
    score,
  });
}

export function trackLanguageChange(locale: string): void {
  sendEvent("language_change", {
    event_category: "navigation",
    event_label: locale,
    locale,
  });
}

export function trackPricingView(plan: string): void {
  sendEvent("pricing_view", {
    event_category: "engagement",
    event_label: plan,
    plan,
  });
}

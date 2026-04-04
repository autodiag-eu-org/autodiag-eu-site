import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/lib/rate-limit";
// Email sending inlined — lib/email.ts had bundling issues on Vercel

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const HOUR_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_HOUR = 3;

interface BetaRequestBody {
  name: string;
  email: string;
  vehicle?: string;
  country: string;
  website?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: BetaRequestBody;

  try {
    body = (await request.json()) as BetaRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Corps de requete invalide" },
      { status: 400 }
    );
  }

  // Honeypot: if the hidden 'website' field is filled, it's a bot
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
    return NextResponse.json(
      { error: "Le nom est requis" },
      { status: 400 }
    );
  }

  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
    return NextResponse.json(
      { error: "Adresse email invalide" },
      { status: 400 }
    );
  }

  if (!body.country || typeof body.country !== "string" || body.country.trim().length === 0) {
    return NextResponse.json(
      { error: "Le pays est requis" },
      { status: 400 }
    );
  }

  // Rate limiting: 3 per IP per hour
  const ip = getClientIP(request);
  if (!rateLimit(ip, MAX_REQUESTS_PER_HOUR, HOUR_MS)) {
    return NextResponse.json(
      { error: "Trop de requetes. Reessayez dans une heure." },
      { status: 429 }
    );
  }

  // Insert into Supabase
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { error: insertError } = await supabase
    .from("beta_requests")
    .insert({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      vehicle: body.vehicle?.trim() || null,
      country: body.country.trim(),
      email_sent: false,
    });

  if (insertError) {
    // Duplicate email
    if (insertError.code === "23505") {
      return NextResponse.json(
        { error: "Cette adresse email est deja inscrite" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Contactez info@autodiag-eu.com" },
      { status: 500 }
    );
  }

  // Send welcome email + notify Reda via direct fetch to Resend API
  const emailName = body.name.trim();
  const emailAddr = body.email.trim().toLowerCase();
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddr = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const betaUrl = process.env.NEXT_PUBLIC_BETA_OPTIN_URL ?? "https://autodiag-eu.com";
  let emailSent = false;

  if (apiKey) {
    // Welcome email to user
    try {
      const welcomeRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: fromAddr,
          to: emailAddr,
          subject: "Bienvenue dans la beta AutoDiag EU !",
          html: `<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px"><h1 style="color:#00e5ff">Bienvenue ${emailName} !</h1><p>Merci de rejoindre la beta d'AutoDiag EU.</p><p><strong>Important :</strong> Vous aurez besoin d'un compte Google (Gmail) pour installer l'application.</p><div style="margin:32px 0;text-align:center"><a href="${betaUrl}" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#00e5ff,#00c853);color:#050510;font-weight:700;text-decoration:none;border-radius:8px">Rejoindre la beta sur Google Play</a></div><p style="color:#666;font-size:14px">Questions ? <a href="mailto:info@autodiag-eu.com" style="color:#00e5ff">info@autodiag-eu.com</a></p><hr style="border:none;border-top:1px solid #eee;margin:24px 0"><p style="color:#999;font-size:12px">AutoDiag EU Sarl — Boncourt, Suisse</p></div>`,
        }),
      });
      emailSent = welcomeRes.ok;
    } catch {
      emailSent = false;
    }

    if (emailSent) {
      await supabase
        .from("beta_requests")
        .update({ email_sent: true })
        .eq("email", emailAddr);
    }

    // Notify Reda
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: fromAddr,
          to: "r.kaouani25@gmail.com",
          subject: "[AutoDiag EU] Nouveau beta testeur",
          html: `<div style="font-family:system-ui,sans-serif;padding:20px"><h2 style="color:#00e5ff">Nouveau beta testeur</h2><p>Nom : ${emailName}</p><p>Email : ${emailAddr}</p><p>Vehicule : ${body.vehicle?.trim() || "Non renseigne"}</p><p>Pays : ${body.country.trim()}</p><hr style="border:none;border-top:1px solid #eee;margin:20px 0"><p style="color:#999;font-size:12px">Notification automatique — autodiag-eu.com</p></div>`,
        }),
      });
    } catch {
      // Non-blocking
    }
  }

  return NextResponse.json({
    success: true,
    message: "Inscription reussie ! Verifiez votre boite mail.",
    emailSent,
  });
}

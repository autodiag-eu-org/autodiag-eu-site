import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/lib/rate-limit";
// Email sending inlined — lib/email.ts had bundling issues on Vercel

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const HOUR_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_HOUR = 3;

interface WaitlistRequestBody {
  email: string;
  website?: string;
}

function isValidEmail(email: string): boolean {
  if (typeof email !== "string" || email.length === 0 || email.length > 254) return false;
  if (/\s/.test(email)) return false;
  const atIndex = email.indexOf("@");
  if (atIndex < 1 || atIndex !== email.lastIndexOf("@")) return false;
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (local.length === 0 || local.length > 64) return false;
  if (domain.length === 0 || domain.length > 253) return false;
  const dotIndex = domain.lastIndexOf(".");
  if (dotIndex < 1 || dotIndex === domain.length - 1) return false;
  return true;
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
  let body: WaitlistRequestBody;

  try {
    body = (await request.json()) as WaitlistRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Corps de requete invalide" },
      { status: 400 }
    );
  }

  // Honeypot: silent rejection for bots
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ success: true });
  }

  // Validate email
  if (!body.email || typeof body.email !== "string" || !isValidEmail(body.email)) {
    return NextResponse.json(
      { error: "Adresse email invalide" },
      { status: 400 }
    );
  }

  // Rate limiting
  const ip = getClientIP(request);
  if (!rateLimit(`ios-${ip}`, MAX_REQUESTS_PER_HOUR, HOUR_MS)) {
    return NextResponse.json(
      { error: "Trop de requetes. Reessayez dans une heure." },
      { status: 429 }
    );
  }

  // Insert into Supabase
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { error: insertError } = await supabase
    .from("ios_waitlist")
    .insert({
      email: body.email.trim().toLowerCase(),
    });

  if (insertError) {
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

  // Notify Reda (non-blocking, inlined fetch)
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
          to: "r.kaouani25@gmail.com",
          subject: "[AutoDiag EU] Nouvelle inscription iOS waitlist",
          html: `<div style="font-family:system-ui,sans-serif;padding:20px"><h2 style="color:#00e5ff">Nouvelle inscription iOS waitlist</h2><p>Email : ${body.email.trim().toLowerCase()}</p><hr style="border:none;border-top:1px solid #eee;margin:20px 0"><p style="color:#999;font-size:12px">Notification automatique — autodiag-eu.com</p></div>`,
        }),
      });
    } catch {
      // Non-blocking
    }
  }

  return NextResponse.json({
    success: true,
    message: "Inscription a la liste d'attente iOS reussie !",
  });
}

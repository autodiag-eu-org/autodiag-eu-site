import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/lib/rate-limit";
import { sendBetaWelcomeEmail, notifyRedaBeta } from "@/lib/email";

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

  // Send welcome email (non-blocking for user experience)
  const emailSent = await sendBetaWelcomeEmail(body.name.trim(), body.email.trim().toLowerCase());

  if (emailSent) {
    await supabase
      .from("beta_requests")
      .update({ email_sent: true })
      .eq("email", body.email.trim().toLowerCase());
  }

  // Notify Reda (non-blocking)
  await notifyRedaBeta(
    body.name.trim(),
    body.email.trim().toLowerCase(),
    body.vehicle?.trim() || null,
    body.country.trim()
  );

  return NextResponse.json({
    success: true,
    message: "Inscription reussie ! Verifiez votre boite mail.",
    emailSent,
  });
}

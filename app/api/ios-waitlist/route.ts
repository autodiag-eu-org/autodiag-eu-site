import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/lib/rate-limit";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const HOUR_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_HOUR = 3;

interface WaitlistRequestBody {
  email: string;
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
      { error: "Erreur lors de l'inscription. Contactez info@autodiag.eu" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Inscription a la liste d'attente iOS reussie !",
  });
}

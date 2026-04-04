/**
 * Resend email service for beta welcome emails
 */

import { Resend } from "resend";

const REDA_EMAIL = "r.kaouani25@gmail.com";

function getResend(): Resend {
  return new Resend(process.env.RESEND_API_KEY ?? "re_placeholder");
}

/**
 * Send a welcome email to a new beta tester.
 * Returns false on failure (never throws).
 */
export async function sendBetaWelcomeEmail(
  name: string,
  email: string
): Promise<boolean> {
  try {
    const betaOptinUrl =
      process.env.NEXT_PUBLIC_BETA_OPTIN_URL ?? "https://autodiag-eu.com";

    const { error } = await getResend().emails.send({
      from: "AutoDiag EU <noreply@autodiag-eu.com>",
      to: email,
      subject: "Bienvenue dans la beta AutoDiag EU !",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h1 style="color: #00e5ff; font-size: 24px; margin-bottom: 16px;">
            Bienvenue ${name} !
          </h1>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Merci de rejoindre la beta d'AutoDiag EU. Vous faites partie des premiers
            a tester l'application de diagnostic automobile la plus avancee d'Europe.
          </p>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            <strong>Important :</strong> Vous aurez besoin d'un compte Google (Gmail)
            pour installer l'application via Google Play.
          </p>
          <div style="margin: 32px 0; text-align: center;">
            <a href="${betaOptinUrl}"
               style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #00e5ff, #00c853); color: #050510; font-weight: 700; text-decoration: none; border-radius: 8px; font-size: 16px;">
              Rejoindre la beta sur Google Play
            </a>
          </div>
          <p style="color: #666; font-size: 14px; line-height: 1.5;">
            Si vous avez des questions, contactez-nous a
            <a href="mailto:info@autodiag-eu.com" style="color: #00e5ff;">info@autodiag-eu.com</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 12px;">
            AutoDiag EU Sarl — Route du Jura 10, 2926 Boncourt, Suisse
          </p>
        </div>
      `,
    });

    if (error) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Notify Reda of a new beta signup with details.
 */
export async function notifyRedaBeta(
  name: string,
  email: string,
  vehicle: string | null,
  country: string
): Promise<void> {
  await notifyReda("Nouveau beta testeur", [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Vehicule : ${vehicle ?? "Non renseigne"}`,
    `Pays : ${country}`,
  ]);
}

/**
 * Notify Reda of a new iOS waitlist signup.
 */
export async function notifyRedaIOSWaitlist(email: string): Promise<void> {
  await notifyReda("Nouvelle inscription iOS waitlist", [
    `Email : ${email}`,
  ]);
}

/**
 * Send a notification email to Reda.
 */
async function notifyReda(subject: string, lines: string[]): Promise<void> {
  try {
    await getResend().emails.send({
      from: "AutoDiag EU <noreply@autodiag-eu.com>",
      to: REDA_EMAIL,
      subject: `[AutoDiag EU] ${subject}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 500px; padding: 20px;">
          <h2 style="color: #00e5ff; margin-bottom: 16px;">${subject}</h2>
          ${lines.map((l) => `<p style="margin: 4px 0; color: #333;">${l}</p>`).join("")}
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #999; font-size: 12px;">Notification automatique — autodiag-eu.com</p>
        </div>
      `,
    });
  } catch {
    // Non-blocking: don't fail the user request if notification fails
  }
}

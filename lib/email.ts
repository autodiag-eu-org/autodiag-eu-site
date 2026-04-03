/**
 * Resend email service for beta welcome emails
 */

import { Resend } from "resend";

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
      process.env.NEXT_PUBLIC_BETA_OPTIN_URL ?? "https://autodiag.eu";

    const { error } = await getResend().emails.send({
      from: "AutoDiag EU <noreply@autodiag.eu>",
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
            <a href="mailto:info@autodiag.eu" style="color: #00e5ff;">info@autodiag.eu</a>.
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

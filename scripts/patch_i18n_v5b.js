/**
 * Patch iosWaitlist (add titleAccent) + testimonials (new namespace)
 */
const fs = require("fs");
const path = require("path");

const BASE = "C:/Users/rkaou/Desktop/autodiag-eu-site";
const LANGS = ["fr", "en", "de", "es", "pt"];

const iosWaitlist = {
  fr: {
    title: "iOS arrive",
    titleAccent: "bientot",
    subtitle: "Laissez votre email, on vous previent des le lancement",
    emailPlaceholder: "votre.email@example.com",
    submit: "Me notifier",
    success: "Vous serez prevenu des le lancement iOS !",
    error: "Erreur \u2014 reessayez ou contactez info@autodiag-eu.com"
  },
  en: {
    title: "iOS is coming",
    titleAccent: "soon",
    subtitle: "Leave your email and we\u2019ll let you know when it launches",
    emailPlaceholder: "your.email@example.com",
    submit: "Notify me",
    success: "You\u2019ll be notified as soon as iOS launches!",
    error: "Error \u2014 please try again or contact info@autodiag-eu.com"
  },
  de: {
    title: "iOS kommt",
    titleAccent: "bald",
    subtitle: "Hinterlassen Sie Ihre E-Mail, wir benachrichtigen Sie zum Launch",
    emailPlaceholder: "ihre.email@beispiel.de",
    submit: "Benachrichtigen",
    success: "Sie werden zum iOS-Launch benachrichtigt!",
    error: "Fehler \u2014 bitte erneut versuchen oder info@autodiag-eu.com kontaktieren"
  },
  es: {
    title: "iOS llega",
    titleAccent: "pronto",
    subtitle: "Deja tu email, te avisamos en cuanto se lance",
    emailPlaceholder: "tu.email@ejemplo.es",
    submit: "Avisarme",
    success: "\u00a1Te avisaremos en cuanto iOS este disponible!",
    error: "Error \u2014 intentalo de nuevo o contacta con info@autodiag-eu.com"
  },
  pt: {
    title: "iOS chega",
    titleAccent: "em breve",
    subtitle: "Deixe o seu email e avisamo-lo quando lan\u00e7armos",
    emailPlaceholder: "seu.email@exemplo.pt",
    submit: "Avisar-me",
    success: "Sera avisado assim que o iOS estiver disponivel!",
    error: "Erro \u2014 tente novamente ou contacte info@autodiag-eu.com"
  }
};

const testimonials = {
  fr: {
    title: "Ce que disent",
    titleAccent: "nos utilisateurs",
    comingSoonNote: "Avis disponibles prochainement \u2014 nous lan\u00e7ons en avril 2026",
    comingSoon: "Bientot disponible"
  },
  en: {
    title: "What our",
    titleAccent: "users say",
    comingSoonNote: "Reviews coming soon \u2014 we\u2019re launching in April 2026",
    comingSoon: "Coming soon"
  },
  de: {
    title: "Was unsere",
    titleAccent: "Nutzer sagen",
    comingSoonNote: "Bewertungen in Kuerze verfuegbar \u2014 wir starten im April 2026",
    comingSoon: "In Kuerze verfuegbar"
  },
  es: {
    title: "Lo que dicen",
    titleAccent: "nuestros usuarios",
    comingSoonNote: "Opiniones disponibles proximamente \u2014 lanzamos en abril de 2026",
    comingSoon: "Proximamente"
  },
  pt: {
    title: "O que dizem os",
    titleAccent: "nossos utilizadores",
    comingSoonNote: "Opinioes disponiveis em breve \u2014 lan\u00e7amos em abril de 2026",
    comingSoon: "Em breve disponivel"
  }
};

const allNamespaces = { iosWaitlist, testimonials };

for (const lang of LANGS) {
  const filePath = path.join(BASE, "i18n", `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  for (const [ns, translations] of Object.entries(allNamespaces)) {
    const langData = translations[lang];
    if (!data[ns]) data[ns] = {};
    for (const [key, value] of Object.entries(langData)) {
      // Overwrite existing keys for iosWaitlist (title was split into title+titleAccent)
      data[ns][key] = value;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`Patched ${lang}.json`);
}
console.log("Done.");

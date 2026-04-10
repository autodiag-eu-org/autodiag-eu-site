/**
 * Add perYear key to pricing namespace for all 5 languages
 */
const fs = require("fs");
const path = require("path");

const BASE = "C:/Users/rkaou/Desktop/autodiag-eu-site";
const LANGS = ["fr", "en", "de", "es", "pt"];

const perYear = {
  fr: "an",
  en: "year",
  de: "Jahr",
  es: "a\u00f1o",
  pt: "ano"
};

for (const lang of LANGS) {
  const filePath = path.join(BASE, "i18n", `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  if (!data.pricing.perYear) {
    data.pricing.perYear = perYear[lang];
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`${lang}: pricing.perYear = "${perYear[lang]}"`);
}

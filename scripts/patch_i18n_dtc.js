const fs = require("fs");
const path = require("path");
const BASE = "C:/Users/rkaou/Desktop/autodiag-eu-site";
const LANGS = ["fr", "en", "de", "es", "pt"];

const codes = {
  fr: {
    metaTitle: "Encyclopedie des codes defaut OBD2 — AutoDiag EU",
    metaDescription: "250 codes defaut OBD2 documentes avec causes, couts de reparation par pays et solutions. Recherchez votre code defaut et comprenez ce que votre voiture essaie de vous dire.",
    pageTitle: "Encyclopedie des",
    pageTitleAccent: "codes defaut OBD2",
    pageSubtitle: "250 codes documentes avec causes, couts et solutions",
    breadcrumbHome: "Accueil",
    breadcrumbCodes: "Codes defaut",
    codeNotFound: "Code introuvable | AutoDiag EU"
  },
  en: {
    metaTitle: "OBD2 Fault Code Encyclopedia — AutoDiag EU",
    metaDescription: "250 OBD2 fault codes documented with causes, repair costs by country and solutions. Search your fault code and understand what your car is trying to tell you.",
    pageTitle: "OBD2",
    pageTitleAccent: "Fault Code Encyclopedia",
    pageSubtitle: "250 codes documented with causes, costs and solutions",
    breadcrumbHome: "Home",
    breadcrumbCodes: "Fault codes",
    codeNotFound: "Code not found | AutoDiag EU"
  },
  de: {
    metaTitle: "OBD2-Fehlercode-Enzyklopaedie — AutoDiag EU",
    metaDescription: "250 OBD2-Fehlercodes dokumentiert mit Ursachen, Reparaturkosten nach Land und Loesungen. Suchen Sie Ihren Fehlercode und verstehen Sie, was Ihr Auto Ihnen sagen will.",
    pageTitle: "OBD2",
    pageTitleAccent: "Fehlercode-Enzyklopaedie",
    pageSubtitle: "250 Codes dokumentiert mit Ursachen, Kosten und Loesungen",
    breadcrumbHome: "Startseite",
    breadcrumbCodes: "Fehlercodes",
    codeNotFound: "Code nicht gefunden | AutoDiag EU"
  },
  es: {
    metaTitle: "Enciclopedia de codigos de fallo OBD2 — AutoDiag EU",
    metaDescription: "250 codigos de fallo OBD2 documentados con causas, costes de reparacion por pais y soluciones. Busca tu codigo de fallo y entiende lo que tu coche intenta decirte.",
    pageTitle: "Enciclopedia de",
    pageTitleAccent: "codigos de fallo OBD2",
    pageSubtitle: "250 codigos documentados con causas, costes y soluciones",
    breadcrumbHome: "Inicio",
    breadcrumbCodes: "Codigos de fallo",
    codeNotFound: "Codigo no encontrado | AutoDiag EU"
  },
  pt: {
    metaTitle: "Enciclopedia de codigos de erro OBD2 — AutoDiag EU",
    metaDescription: "250 codigos de erro OBD2 documentados com causas, custos de repara\u00e7ao por pais e solu\u00e7oes. Pesquise o seu codigo de erro e compreenda o que o seu carro tenta dizer-lhe.",
    pageTitle: "Enciclopedia de",
    pageTitleAccent: "codigos de erro OBD2",
    pageSubtitle: "250 codigos documentados com causas, custos e solu\u00e7oes",
    breadcrumbHome: "Inicio",
    breadcrumbCodes: "Codigos de erro",
    codeNotFound: "Codigo nao encontrado | AutoDiag EU"
  }
};

for (const lang of LANGS) {
  const filePath = path.join(BASE, "i18n", `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const langData = codes[lang];
  for (const [key, value] of Object.entries(langData)) {
    if (!(key in data.codes)) {
      data.codes[key] = value;
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`${lang}: +${Object.keys(langData).length} codes keys`);
}

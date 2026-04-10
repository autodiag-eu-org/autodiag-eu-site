import type { JSX } from "react";

/* FR v2 */
import { ArticleVoyantMoteurQueFaire } from "./fr/voyant-moteur-que-faire";
import { ArticlePreparerCT2026 } from "./fr/preparer-ct-2026";
import { Article10CodesDefautFrequentsEurope } from "./fr/10-codes-frequents-europe";
import { ArticleLireCodesOBD2Telephone } from "./fr/lire-codes-obd2-telephone";
import { ArticleCoutReparationCatalyseurP0420 } from "./fr/cout-catalyseur-p0420";

/* FR v1 */
import { ArticleCommentLireCodeDefautOBD2 } from "./fr/comment-lire-code-defaut-obd2";
import { ArticlePreparerControleTechnique } from "./fr/preparer-controle-technique";
import { Article5BruitsMoteur } from "./fr/5-bruits-moteur";
import { ArticleOBD2Comprendre } from "./fr/obd2-comprendre";
import { ArticleAutodiagVsGarage } from "./fr/autodiag-vs-garage";

/* EN v2 */
import { ArticleCheckEngineLightWhatToDo } from "./en/check-engine-light";
import { ArticleMOTPreparationGuide2026 } from "./en/mot-preparation-guide-2026";
import { ArticleTop10CommonFaultCodesEurope } from "./en/top-10-fault-codes-europe";
import { ArticleReadOBD2CodesPhone } from "./en/read-obd2-codes-phone";
import { ArticleP0420CatalyticConverterCost } from "./en/p0420-catalytic-cost";

/* EN v1 */
import { ArticleTop10MOTFailureReasons } from "./en/top-10-mot-failure-reasons";
import { ArticleHowToPrepareCarForMOT } from "./en/how-to-prepare-car-for-mot";
import { ArticleBestOBD2AppUK2026 } from "./en/best-obd2-app-uk";
import { ArticleOBD2FaultCodesExplainedUK } from "./en/obd2-fault-codes-explained-uk";
import { ArticleCarDiagnosticAppVsGarageUK } from "./en/car-diagnostic-app-vs-garage-uk";

/* DE */
import { ArticleDEOBD2FehlercodesLesen } from "./de/obd2-fehlercodes-lesen";
import { ArticleDETUVVorbereitung } from "./de/tuv-vorbereitung";
import { ArticleDE5Motorgerausche } from "./de/5-motorgerausche";
import { ArticleDEOBD2Verstehen } from "./de/obd2-verstehen";
import { ArticleDEAutodiagVsWerkstatt } from "./de/autodiag-vs-werkstatt";

/* ES */
import { ArticleESCodigosFalloOBD2 } from "./es/codigos-fallo-obd2";
import { ArticleESPrepararITV } from "./es/preparar-itv";
import { ArticleES5RuidosMotor } from "./es/5-ruidos-motor";
import { ArticleESOBD2Entender } from "./es/obd2-entender";
import { ArticleESAutodiagVsTaller } from "./es/autodiag-vs-taller";

/* PT */
import { ArticlePTCodigosErroOBD2 } from "./pt/codigos-erro-obd2";
import { ArticlePTPrepararIPO } from "./pt/preparar-ipo";
import { ArticlePT5RuidosMotor } from "./pt/5-ruidos-motor";
import { ArticlePTOBD2Compreender } from "./pt/obd2-compreender";
import { ArticlePTAutodiagVsOficina } from "./pt/autodiag-vs-oficina";

export const articleComponents: Record<string, () => JSX.Element> = {
  /* FR articles */
  "voyant-moteur-allume-que-faire": ArticleVoyantMoteurQueFaire,
  "preparer-controle-technique-2026": ArticlePreparerCT2026,
  "10-codes-defaut-frequents-europe": Article10CodesDefautFrequentsEurope,
  "lire-codes-obd2-telephone": ArticleLireCodesOBD2Telephone,
  "cout-reparation-catalyseur-p0420": ArticleCoutReparationCatalyseurP0420,
  "comment-lire-code-defaut-obd2": ArticleCommentLireCodeDefautOBD2,
  "preparer-controle-technique": ArticlePreparerControleTechnique,
  "5-bruits-moteur-a-ne-pas-ignorer": Article5BruitsMoteur,
  "obd2-comprendre-en-5-minutes": ArticleOBD2Comprendre,
  "autodiag-vs-garage-economies": ArticleAutodiagVsGarage,
  /* EN articles */
  "check-engine-light-what-to-do": ArticleCheckEngineLightWhatToDo,
  "mot-preparation-guide-2026": ArticleMOTPreparationGuide2026,
  "top-10-common-fault-codes-europe": ArticleTop10CommonFaultCodesEurope,
  "read-obd2-codes-phone": ArticleReadOBD2CodesPhone,
  "p0420-catalytic-converter-cost": ArticleP0420CatalyticConverterCost,
  "top-10-mot-failure-reasons-2026": ArticleTop10MOTFailureReasons,
  "how-to-prepare-car-for-mot": ArticleHowToPrepareCarForMOT,
  "best-obd2-app-uk-2026": ArticleBestOBD2AppUK2026,
  "obd2-fault-codes-explained-uk": ArticleOBD2FaultCodesExplainedUK,
  "car-diagnostic-app-vs-garage-uk": ArticleCarDiagnosticAppVsGarageUK,
  /* DE articles */
  "obd2-fehlercodes-lesen-anleitung": ArticleDEOBD2FehlercodesLesen,
  "tuv-vorbereitung-checkliste": ArticleDETUVVorbereitung,
  "5-motorgerausche-nicht-ignorieren": ArticleDE5Motorgerausche,
  "obd2-verstehen-in-5-minuten": ArticleDEOBD2Verstehen,
  "autodiag-vs-werkstatt-ersparnisse": ArticleDEAutodiagVsWerkstatt,
  /* ES articles */
  "como-leer-codigos-fallo-obd2": ArticleESCodigosFalloOBD2,
  "preparar-itv-lista-completa": ArticleESPrepararITV,
  "5-ruidos-motor-no-ignorar": ArticleES5RuidosMotor,
  "obd2-entender-en-5-minutos": ArticleESOBD2Entender,
  "autodiag-vs-taller-ahorros": ArticleESAutodiagVsTaller,
  /* PT articles */
  "como-ler-codigos-erro-obd2": ArticlePTCodigosErroOBD2,
  "preparar-ipo-lista-completa": ArticlePTPrepararIPO,
  "5-ruidos-motor-nao-ignorar": ArticlePT5RuidosMotor,
  "obd2-compreender-em-5-minutos": ArticlePTOBD2Compreender,
  "autodiag-vs-oficina-poupancas": ArticlePTAutodiagVsOficina,
};

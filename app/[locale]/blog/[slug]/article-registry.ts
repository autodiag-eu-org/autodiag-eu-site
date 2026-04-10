import type { JSX } from "react";

/* FR sound scan series */
import { ArticleSonMoteurParle } from "./fr/votre-moteur-parle-detection-pannes-par-son";
import { Article11PannesSonores } from "./fr/11-pannes-detectables-analyse-sonore-moteur";
import { ArticleSonsInaudibles } from "./fr/sons-inaudibles-ia-detecte-ce-que-oreille-ne-peut-pas";
import { ArticleClaquementMoteur } from "./fr/bruit-claquement-moteur-causes-diagnostic-ia";
import { ArticlePreventionCasseMoteur } from "./fr/prevenir-casse-moteur-diagnostic-sonore-preventif";
import { ArticleCourroieDistributionSon } from "./fr/courroie-distribution-usee-detecter-par-son";
import { ArticleRoulementMoteurFatigue } from "./fr/roulement-moteur-fatigue-ia-entend";
import { ArticleTurboQuiSiffle } from "./fr/turbo-qui-siffle-panne-ou-normal";
import { ArticleCommentFonctionneSVM } from "./fr/comment-fonctionne-svm-technologie-scan-sonore";
import { ArticleDieselVsEssenceSon } from "./fr/diesel-vs-essence-diagnostic-sonore-ia";

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

/* EN sound scan series */
import { ArticleYourEngineSpeaks } from "./en/your-engine-speaks-ai-fault-detection-by-sound";
import { Article11EngineFaultsSound } from "./en/11-engine-faults-detectable-by-sound-analysis";
import { ArticleInaudibleSounds } from "./en/inaudible-sounds-ai-catches-what-your-ear-misses";
import { ArticleEngineKnocking } from "./en/engine-knocking-noise-causes-ai-diagnosis";
import { ArticlePreventEngineFailure } from "./en/prevent-engine-failure-preventive-sound-diagnosis";
import { ArticleTimingBeltSound } from "./en/worn-timing-belt-detect-by-sound-before-it-snaps";
import { ArticleBearingWearAI } from "./en/worn-engine-bearing-ai-hears-what-you-cant";
import { ArticleTurboWhistle } from "./en/turbo-whistle-imminent-failure-or-normal";
import { ArticleHowSVMWorks } from "./en/how-our-svm-works-technology-behind-sound-scanning";
import { ArticleDieselVsPetrolSound } from "./en/diesel-vs-petrol-sound-diagnosis-differences";

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
import { ArticleDEMotorkontrollleuchte } from "./de/motorkontrollleuchte-was-tun";
import { ArticleDETUVVorbereitung2026 } from "./de/tuv-vorbereitung-2026";
import { ArticleDE10HaeufigsteFehlercodes } from "./de/10-haeufigste-fehlercodes-europa";
import { ArticleDEOBD2CodesHandy } from "./de/obd2-codes-handy-auslesen";
import { ArticleDEKatalysatorKostenP0420 } from "./de/katalysator-kosten-p0420";

/* ES */
import { ArticleESCodigosFalloOBD2 } from "./es/codigos-fallo-obd2";
import { ArticleESPrepararITV } from "./es/preparar-itv";
import { ArticleES5RuidosMotor } from "./es/5-ruidos-motor";
import { ArticleESOBD2Entender } from "./es/obd2-entender";
import { ArticleESAutodiagVsTaller } from "./es/autodiag-vs-taller";
import { ArticleESTestigoMotorQueHacer } from "./es/testigo-motor-que-hacer";
import { ArticleESPrepararITV2026 } from "./es/preparar-itv-2026";
import { ArticleES10CodigosAveria } from "./es/10-codigos-averia-europa";
import { ArticleESLeerCodigosOBD2Movil } from "./es/leer-codigos-obd2-movil";
import { ArticleESCosteCatalizadorP0420 } from "./es/coste-catalizador-p0420";

/* PT */
import { ArticlePTCodigosErroOBD2 } from "./pt/codigos-erro-obd2";
import { ArticlePTPrepararIPO } from "./pt/preparar-ipo";
import { ArticlePT5RuidosMotor } from "./pt/5-ruidos-motor";
import { ArticlePTOBD2Compreender } from "./pt/obd2-compreender";
import { ArticlePTAutodiagVsOficina } from "./pt/autodiag-vs-oficina";
import { ArticlePTLuzMotorQueFazer } from "./pt/luz-motor-que-fazer";
import { ArticlePTPrepararInspecao2026 } from "./pt/preparar-inspecao-2026";
import { ArticlePT10CodigosErroEuropa } from "./pt/10-codigos-erro-europa";
import { ArticlePTLerCodigosOBD2Telemovel } from "./pt/ler-codigos-obd2-telemovel";
import { ArticlePTCustoCatalisadorP0420 } from "./pt/custo-catalisador-p0420";

export const articleComponents: Record<string, () => JSX.Element> = {
  /* FR articles */
  "votre-moteur-parle-detection-pannes-par-son": ArticleSonMoteurParle,
  "11-pannes-detectables-analyse-sonore-moteur": Article11PannesSonores,
  "sons-inaudibles-ia-detecte-ce-que-oreille-ne-peut-pas": ArticleSonsInaudibles,
  "bruit-claquement-moteur-causes-diagnostic-ia": ArticleClaquementMoteur,
  "prevenir-casse-moteur-diagnostic-sonore-preventif": ArticlePreventionCasseMoteur,
  "courroie-distribution-usee-detecter-par-son": ArticleCourroieDistributionSon,
  "roulement-moteur-fatigue-ia-entend": ArticleRoulementMoteurFatigue,
  "turbo-qui-siffle-panne-ou-normal": ArticleTurboQuiSiffle,
  "comment-fonctionne-svm-technologie-scan-sonore": ArticleCommentFonctionneSVM,
  "diesel-vs-essence-diagnostic-sonore-ia": ArticleDieselVsEssenceSon,
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
  "your-engine-speaks-ai-fault-detection-by-sound": ArticleYourEngineSpeaks,
  "11-engine-faults-detectable-by-sound-analysis": Article11EngineFaultsSound,
  "inaudible-sounds-ai-catches-what-your-ear-misses": ArticleInaudibleSounds,
  "engine-knocking-noise-causes-ai-diagnosis": ArticleEngineKnocking,
  "prevent-engine-failure-preventive-sound-diagnosis": ArticlePreventEngineFailure,
  "worn-timing-belt-detect-by-sound-before-it-snaps": ArticleTimingBeltSound,
  "worn-engine-bearing-ai-hears-what-you-cant": ArticleBearingWearAI,
  "turbo-whistle-imminent-failure-or-normal": ArticleTurboWhistle,
  "how-our-svm-works-technology-behind-sound-scanning": ArticleHowSVMWorks,
  "diesel-vs-petrol-sound-diagnosis-differences": ArticleDieselVsPetrolSound,
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
  "motorkontrollleuchte-leuchtet-was-tun": ArticleDEMotorkontrollleuchte,
  "tuev-vorbereitung-2026": ArticleDETUVVorbereitung2026,
  "10-haeufigste-fehlercodes-europa": ArticleDE10HaeufigsteFehlercodes,
  "obd2-codes-mit-handy-auslesen": ArticleDEOBD2CodesHandy,
  "katalysator-reparatur-kosten-p0420": ArticleDEKatalysatorKostenP0420,
  /* ES articles */
  "como-leer-codigos-fallo-obd2": ArticleESCodigosFalloOBD2,
  "preparar-itv-lista-completa": ArticleESPrepararITV,
  "5-ruidos-motor-no-ignorar": ArticleES5RuidosMotor,
  "obd2-entender-en-5-minutos": ArticleESOBD2Entender,
  "autodiag-vs-taller-ahorros": ArticleESAutodiagVsTaller,
  "testigo-motor-encendido-que-hacer": ArticleESTestigoMotorQueHacer,
  "preparar-itv-2026": ArticleESPrepararITV2026,
  "10-codigos-averia-frecuentes-europa": ArticleES10CodigosAveria,
  "leer-codigos-obd2-con-movil": ArticleESLeerCodigosOBD2Movil,
  "coste-reparacion-catalizador-p0420": ArticleESCosteCatalizadorP0420,
  /* PT articles */
  "como-ler-codigos-erro-obd2": ArticlePTCodigosErroOBD2,
  "preparar-ipo-lista-completa": ArticlePTPrepararIPO,
  "5-ruidos-motor-nao-ignorar": ArticlePT5RuidosMotor,
  "obd2-compreender-em-5-minutos": ArticlePTOBD2Compreender,
  "autodiag-vs-oficina-poupancas": ArticlePTAutodiagVsOficina,
  "luz-motor-acesa-o-que-fazer": ArticlePTLuzMotorQueFazer,
  "preparar-inspecao-2026": ArticlePTPrepararInspecao2026,
  "10-codigos-erro-frequentes-europa": ArticlePT10CodigosErroEuropa,
  "ler-codigos-obd2-com-telemovel": ArticlePTLerCodigosOBD2Telemovel,
  "custo-reparacao-catalisador-p0420": ArticlePTCustoCatalisadorP0420,
};

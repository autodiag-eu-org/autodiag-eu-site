"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SoundEntry {
  id: string;
  label: string;
  description: string;
  isDefective: boolean;
  explanation: string;
  /** Visual waveform pattern — array of 12 bar heights (0-100) */
  waveform: number[];
}

interface Round {
  roundIndex: number;
  sounds: [SoundEntry, SoundEntry, SoundEntry];
}

interface Level {
  name: string;
  tag: string;
  rounds: [Round, Round, Round];
}

type Phase = "menu" | "playing" | "result";

/* ------------------------------------------------------------------ */
/*  Quiz data — 3 levels × 3 rounds × 3 sounds = 27 entries           */
/* ------------------------------------------------------------------ */

const LEVELS: Level[] = [
  {
    name: "Debutant",
    tag: "Facile",
    rounds: [
      {
        roundIndex: 0,
        sounds: [
          {
            id: "d1a",
            label: "Echantillon A",
            description: "Moteur normal — ralenti regulier et stable",
            isDefective: false,
            explanation: "",
            waveform: [30, 35, 32, 34, 30, 33, 31, 35, 32, 30, 34, 31],
          },
          {
            id: "d1b",
            label: "Echantillon B",
            description: "Cliquetis metallique — bruit repetitif anormal",
            isDefective: true,
            explanation:
              "Ce cliquetis metallique provient generalement d'un jeu excessif dans les poussoirs hydrauliques ou d'un probleme de lubrification. Un bruit de type 'tic-tic-tic' rapide est un signe classique a ne pas ignorer.",
            waveform: [20, 85, 15, 90, 20, 80, 18, 88, 22, 85, 15, 90],
          },
          {
            id: "d1c",
            label: "Echantillon C",
            description: "Moteur normal — acceleration progressive douce",
            isDefective: false,
            explanation: "",
            waveform: [25, 30, 38, 42, 50, 55, 60, 65, 62, 58, 55, 50],
          },
        ],
      },
      {
        roundIndex: 1,
        sounds: [
          {
            id: "d2a",
            label: "Echantillon A",
            description: "Roulement use — grondement sourd continu",
            isDefective: true,
            explanation:
              "Ce grondement sourd qui augmente avec la vitesse est typique d'un roulement de roue use. Il produit un bruit grave et continu, souvent plus audible en virage quand la charge se deplace.",
            waveform: [55, 60, 58, 62, 65, 60, 63, 58, 61, 64, 59, 62],
          },
          {
            id: "d2b",
            label: "Echantillon B",
            description: "Moteur diesel normal — claquement regulier du diesel",
            isDefective: false,
            explanation: "",
            waveform: [40, 50, 38, 48, 40, 52, 38, 50, 42, 48, 40, 50],
          },
          {
            id: "d2c",
            label: "Echantillon C",
            description: "Moteur normal — ralenti chaud apres conduite",
            isDefective: false,
            explanation: "",
            waveform: [28, 32, 30, 34, 29, 33, 31, 28, 32, 30, 34, 29],
          },
        ],
      },
      {
        roundIndex: 2,
        sounds: [
          {
            id: "d3a",
            label: "Echantillon A",
            description: "Moteur normal — regime stable a 2000 tr/min",
            isDefective: false,
            explanation: "",
            waveform: [45, 48, 44, 47, 46, 48, 44, 47, 45, 48, 44, 46],
          },
          {
            id: "d3b",
            label: "Echantillon B",
            description: "Moteur normal — deceleration progressive",
            isDefective: false,
            explanation: "",
            waveform: [60, 55, 50, 45, 40, 38, 35, 32, 30, 28, 26, 25],
          },
          {
            id: "d3c",
            label: "Echantillon C",
            description: "Courroie usee — sifflement aigu au demarrage",
            isDefective: true,
            explanation:
              "Ce sifflement aigu au demarrage est cause par une courroie d'accessoires usee ou detendue qui patine sur les poulies. Le bruit est souvent plus prononce par temps froid ou humide.",
            waveform: [10, 70, 75, 80, 60, 40, 30, 25, 20, 72, 78, 35],
          },
        ],
      },
    ],
  },
  {
    name: "Intermediaire",
    tag: "Moyen",
    rounds: [
      {
        roundIndex: 0,
        sounds: [
          {
            id: "i1a",
            label: "Echantillon A",
            description: "Moteur essence normal — regime 3000 tr/min constant",
            isDefective: false,
            explanation: "",
            waveform: [50, 52, 48, 53, 50, 51, 49, 52, 50, 53, 48, 51],
          },
          {
            id: "i1b",
            label: "Echantillon B",
            description: "Injecteur defaillant — claquement irregulier",
            isDefective: true,
            explanation:
              "Ce claquement irregulier provient d'un injecteur qui ne pulverise plus correctement le carburant. Contrairement au bruit normal des injecteurs (regulier et discret), celui-ci est plus fort et arythmique, signe d'une obstruction partielle.",
            waveform: [30, 70, 35, 25, 80, 30, 75, 25, 35, 85, 28, 40],
          },
          {
            id: "i1c",
            label: "Echantillon C",
            description: "Moteur diesel normal — montee en regime progressive",
            isDefective: false,
            explanation: "",
            waveform: [35, 40, 45, 48, 52, 55, 58, 60, 58, 55, 52, 50],
          },
        ],
      },
      {
        roundIndex: 1,
        sounds: [
          {
            id: "i2a",
            label: "Echantillon A",
            description: "Moteur turbo normal — souffle regulier a l'acceleration",
            isDefective: false,
            explanation: "",
            waveform: [30, 35, 42, 50, 58, 65, 70, 68, 62, 55, 48, 40],
          },
          {
            id: "i2b",
            label: "Echantillon B",
            description: "Moteur normal — retour au ralenti apres acceleration",
            isDefective: false,
            explanation: "",
            waveform: [65, 58, 50, 42, 38, 35, 33, 31, 30, 30, 31, 30],
          },
          {
            id: "i2c",
            label: "Echantillon C",
            description: "Fuite echappement — souffle rauque et irregulier",
            isDefective: true,
            explanation:
              "Ce souffle rauque accompagne d'un bruit de 'pfuitt' est typique d'une fuite au niveau du collecteur d'echappement ou d'un joint defaillant. Le son est plus audible a froid et peut s'attenuer legerement a chaud lorsque les metaux se dilatent.",
            waveform: [45, 60, 35, 70, 40, 65, 50, 72, 38, 68, 42, 60],
          },
        ],
      },
      {
        roundIndex: 2,
        sounds: [
          {
            id: "i3a",
            label: "Echantillon A",
            description: "Pompe a eau fatiguee — grincement sous le capot",
            isDefective: true,
            explanation:
              "Ce grincement provient du roulement interne de la pompe a eau qui s'use. Si on le neglige, la pompe peut se bloquer et entrainer une surchauffe moteur. Un remplacement preventif est recommande.",
            waveform: [40, 55, 65, 50, 70, 45, 68, 55, 72, 48, 60, 55],
          },
          {
            id: "i3b",
            label: "Echantillon B",
            description: "Moteur normal — demarrage a froid typique",
            isDefective: false,
            explanation: "",
            waveform: [60, 55, 50, 45, 40, 38, 36, 34, 33, 32, 31, 30],
          },
          {
            id: "i3c",
            label: "Echantillon C",
            description: "Moteur V6 normal — ronronnement grave et regulier",
            isDefective: false,
            explanation: "",
            waveform: [42, 45, 43, 46, 44, 45, 43, 46, 42, 45, 44, 43],
          },
        ],
      },
    ],
  },
  {
    name: "Expert",
    tag: "Difficile",
    rounds: [
      {
        roundIndex: 0,
        sounds: [
          {
            id: "e1a",
            label: "Echantillon A",
            description: "Moteur diesel normal — ralenti avec leger claquement typique",
            isDefective: false,
            explanation: "",
            waveform: [38, 48, 36, 50, 40, 46, 38, 50, 42, 48, 36, 48],
          },
          {
            id: "e1b",
            label: "Echantillon B",
            description: "Moteur diesel normal — regime stabilise 2500 tr/min",
            isDefective: false,
            explanation: "",
            waveform: [52, 55, 53, 56, 52, 54, 53, 55, 52, 56, 53, 54],
          },
          {
            id: "e1c",
            label: "Echantillon C",
            description: "Turbo siffle — bruit de sifflement aigu a l'acceleration",
            isDefective: true,
            explanation:
              "Ce sifflement aigu a l'acceleration est cause par un jeu excessif dans l'axe du turbocompresseur. Contrairement au leger souffle normal d'un turbo sain, ce sifflement metallique indique une usure avancee des paliers. A ce stade, le turbo peut lacher a tout moment.",
            waveform: [30, 35, 50, 72, 85, 90, 88, 82, 70, 55, 40, 35],
          },
        ],
      },
      {
        roundIndex: 1,
        sounds: [
          {
            id: "e2a",
            label: "Echantillon A",
            description: "Bielle cognee — cognement sourd et rythmique",
            isDefective: true,
            explanation:
              "Ce cognement sourd et lourd, synchrone avec le regime moteur, indique un jeu excessif au niveau d'une bielle. C'est l'un des bruits les plus graves : il annonce souvent une casse moteur imminente. Arretez le moteur et faites remorquer le vehicule.",
            waveform: [25, 75, 30, 78, 28, 80, 25, 76, 30, 82, 26, 78],
          },
          {
            id: "e2b",
            label: "Echantillon B",
            description: "Moteur 4 cylindres normal — acceleration franche",
            isDefective: false,
            explanation: "",
            waveform: [35, 42, 50, 58, 65, 70, 72, 68, 62, 58, 55, 52],
          },
          {
            id: "e2c",
            label: "Echantillon C",
            description: "Moteur normal — ralenti avec climatisation active",
            isDefective: false,
            explanation: "",
            waveform: [34, 38, 36, 40, 35, 39, 37, 38, 36, 40, 34, 38],
          },
        ],
      },
      {
        roundIndex: 2,
        sounds: [
          {
            id: "e3a",
            label: "Echantillon A",
            description: "Moteur normal — deceleration avec frein moteur",
            isDefective: false,
            explanation: "",
            waveform: [70, 62, 55, 48, 42, 38, 35, 33, 32, 30, 30, 30],
          },
          {
            id: "e3b",
            label: "Echantillon B",
            description: "Moteur TSI normal — ralenti avec leger bourdonnement pompe HP",
            isDefective: false,
            explanation: "",
            waveform: [32, 36, 34, 38, 33, 37, 35, 36, 34, 38, 32, 36],
          },
          {
            id: "e3c",
            label: "Echantillon C",
            description:
              "Chaine de distribution etiree — cliquetis metallique rapide a froid",
            isDefective: true,
            explanation:
              "Ce cliquetis rapide et metallique au demarrage a froid, qui s'attenue legerement a chaud, est typique d'une chaine de distribution etiree. Le tendeur ne compense plus suffisamment le jeu. C'est un probleme serieux : une chaine qui saute peut detruire le moteur.",
            waveform: [70, 30, 75, 25, 72, 28, 68, 32, 65, 35, 60, 38],
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function WaveformBars({
  pattern,
  active,
}: {
  pattern: number[];
  active: boolean;
}) {
  return (
    <div className="flex items-end gap-[3px] h-10">
      {pattern.map((h, i) => (
        <motion.div
          key={i}
          className="w-[5px] rounded-full"
          style={{
            background: active
              ? "linear-gradient(to top, #00e5ff, #00c853)"
              : "rgba(138, 144, 176, 0.3)",
          }}
          animate={
            active
              ? {
                  height: [`${h * 0.4}px`, `${h * 0.4 * 0.5}px`, `${h * 0.4}px`],
                }
              : { height: `${h * 0.3}px` }
          }
          transition={
            active
              ? {
                  duration: 0.5 + i * 0.04,
                  repeat: Infinity,
                  repeatType: "mirror" as const,
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}

function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = ((current + 1) / total) * 100;
  return (
    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(to right, #00e5ff, #00c853)" }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}

/** CSS-only confetti dots */
function Confetti() {
  const colors = ["#00e5ff", "#00c853", "#ff6d00", "#e040fb", "#ffd600"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {Array.from({ length: 40 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 1.5;
        const duration = 2 + Math.random() * 2;
        const size = 6 + Math.random() * 6;
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: "-10px",
              width: size,
              height: size,
              background: color,
            }}
            initial={{ y: 0, opacity: 1, rotate: 0 }}
            animate={{ y: 600, opacity: 0, rotate: 360 }}
            transition={{
              duration,
              delay,
              ease: "easeIn",
            }}
          />
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AudioQuiz() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [levelIndex, setLevelIndex] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const level = LEVELS[levelIndex];
  const round = level.rounds[roundIndex];
  const isAnswered = selected !== null;
  const correctSound = round.sounds.find((s) => s.isDefective);

  /* Reset playing animation after 3s */
  useEffect(() => {
    if (!playingId) return;
    const t = setTimeout(() => setPlayingId(null), 3000);
    return () => clearTimeout(t);
  }, [playingId]);

  const startLevel = useCallback((idx: number) => {
    setLevelIndex(idx);
    setRoundIndex(0);
    setScore(0);
    setSelected(null);
    setPlayingId(null);
    setShowConfetti(false);
    setPhase("playing");
  }, []);

  const handleAnswer = useCallback(
    (soundId: string) => {
      if (isAnswered) return;
      setSelected(soundId);
      const sound = round.sounds.find((s) => s.id === soundId);
      if (sound?.isDefective) {
        setScore((prev) => prev + 1);
      }
    },
    [isAnswered, round.sounds]
  );

  const nextRound = useCallback(() => {
    if (roundIndex < 2) {
      setRoundIndex((prev) => prev + 1);
      setSelected(null);
      setPlayingId(null);
    } else {
      setShowConfetti(true);
      setPhase("result");
    }
  }, [roundIndex]);

  const backToMenu = useCallback(() => {
    setPhase("menu");
    setShowConfetti(false);
  }, []);

  const shareResult = useCallback(() => {
    const text = `Stethoscope Virtuel AutoDiag EU — Niveau ${level.name} : ${score}/3 bonnes reponses ! Testez votre oreille de mecanicien sur autodiag.eu`;
    if (navigator.share) {
      navigator.share({ text }).catch(() => {
        /* user cancelled */
      });
    } else {
      navigator.clipboard.writeText(text).catch(() => {
        /* fallback */
      });
    }
  }, [level.name, score]);

  /* ---- MENU ---- */
  if (phase === "menu") {
    return (
      <div className="space-y-8">
        <p className="text-[#8a90b0] text-center max-w-2xl mx-auto">
          Ecoutez les echantillons sonores et identifiez celui qui presente un
          defaut. Trois niveaux pour tester votre oreille de mecanicien.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {LEVELS.map((lvl, idx) => (
            <motion.button
              key={lvl.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => startLevel(idx)}
              className="relative overflow-hidden rounded-2xl p-6 text-left backdrop-blur-md"
              style={{ background: "rgba(12,12,30,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3"
                style={{
                  background:
                    idx === 0
                      ? "rgba(0,200,83,0.15)"
                      : idx === 1
                        ? "rgba(0,229,255,0.15)"
                        : "rgba(255,109,0,0.15)",
                  color:
                    idx === 0 ? "#00c853" : idx === 1 ? "#00e5ff" : "#ff6d00",
                }}
              >
                {lvl.tag}
              </span>
              <h3 className="text-xl font-bold text-white">{lvl.name}</h3>
              <p className="mt-1 text-sm text-[#8a90b0]">
                3 manches — identifiez le son defectueux
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  /* ---- RESULT ---- */
  if (phase === "result") {
    const verdict =
      score === 3
        ? "Parfait ! Vous avez l'oreille absolue du mecanicien."
        : score === 2
          ? "Tres bien ! Encore un petit effort pour la perfection."
          : score === 1
            ? "Pas mal, mais votre oreille a besoin d'entrainement."
            : "Aie ! Il est temps de se familiariser avec les bruits moteur.";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mx-auto max-w-lg rounded-2xl p-8 text-center backdrop-blur-md"
        style={{ background: "rgba(12,12,30,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {showConfetti && <Confetti />}

        <h2 className="text-2xl font-bold text-white mb-2">
          Niveau {level.name} termine
        </h2>
        <div className="my-6">
          <span
            className="text-6xl font-extrabold"
            style={{
              background: "linear-gradient(to right, #00e5ff, #00c853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {score}/3
          </span>
        </div>
        <p className="text-[#8a90b0] mb-8">{verdict}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={backToMenu}
            className="rounded-xl px-6 py-3 font-semibold text-white"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            Retour aux niveaux
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shareResult}
            className="rounded-xl px-6 py-3 font-semibold text-black"
            style={{ background: "linear-gradient(to right, #00e5ff, #00c853)" }}
          >
            Partager mon score
          </motion.button>
        </div>
      </motion.div>
    );
  }

  /* ---- PLAYING ---- */
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${levelIndex}-${roundIndex}`}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.35 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#8a90b0]">
            Niveau {level.name} — Manche {roundIndex + 1}/3
          </span>
          <span className="text-sm font-semibold text-white">
            Score : {score}/{roundIndex + (isAnswered ? 1 : 0)}
          </span>
        </div>
        <ProgressBar current={roundIndex} total={3} />

        <h2 className="text-xl font-bold text-white text-center">
          Quel echantillon presente un defaut ?
        </h2>

        {/* Sound cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {round.sounds.map((sound) => {
            const isCorrect = sound.isDefective;
            const isChosen = selected === sound.id;
            let borderColor = "rgba(255,255,255,0.08)";
            if (isAnswered) {
              if (isCorrect) borderColor = "#00c853";
              else if (isChosen) borderColor = "#ff1744";
            }

            return (
              <motion.div
                key={sound.id}
                layout
                className="rounded-2xl p-5 backdrop-blur-md flex flex-col gap-3"
                style={{
                  background: "rgba(12,12,30,0.6)",
                  border: `2px solid ${borderColor}`,
                  transition: "border-color 0.3s",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{sound.label}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPlayingId(sound.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{
                      background:
                        playingId === sound.id
                          ? "linear-gradient(135deg, #00e5ff, #00c853)"
                          : "rgba(255,255,255,0.08)",
                    }}
                    aria-label={`Ecouter ${sound.label}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="white"
                    >
                      {playingId === sound.id ? (
                        <>
                          <rect x="3" y="3" width="4" height="10" rx="1" />
                          <rect x="9" y="3" width="4" height="10" rx="1" />
                        </>
                      ) : (
                        <path d="M4 2l10 6-10 6V2z" />
                      )}
                    </svg>
                  </motion.button>
                </div>

                <WaveformBars
                  pattern={sound.waveform}
                  active={playingId === sound.id}
                />

                <p className="text-sm text-[#8a90b0]">{sound.description}</p>

                {/* Answer button */}
                <motion.button
                  whileHover={!isAnswered ? { scale: 1.03 } : {}}
                  whileTap={!isAnswered ? { scale: 0.97 } : {}}
                  onClick={() => handleAnswer(sound.id)}
                  disabled={isAnswered}
                  className="mt-auto rounded-xl py-2.5 text-sm font-semibold transition-colors"
                  style={{
                    background: isAnswered
                      ? isCorrect
                        ? "rgba(0,200,83,0.2)"
                        : isChosen
                          ? "rgba(255,23,68,0.2)"
                          : "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.08)",
                    color: isAnswered
                      ? isCorrect
                        ? "#00c853"
                        : isChosen
                          ? "#ff1744"
                          : "#8a90b0"
                      : "white",
                    cursor: isAnswered ? "default" : "pointer",
                  }}
                >
                  {isAnswered
                    ? isCorrect
                      ? "Defectueux"
                      : "Normal"
                    : "Choisir"}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {isAnswered && correctSound && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl p-5 backdrop-blur-md"
              style={{
                background: "rgba(12,12,30,0.6)",
                border: "1px solid rgba(0,229,255,0.2)",
              }}
            >
              <h3 className="text-sm font-bold text-[#00e5ff] mb-2">
                Explication
              </h3>
              <p className="text-sm text-[#8a90b0] leading-relaxed">
                {correctSound.explanation}
              </p>

              <div className="mt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextRound}
                  className="rounded-xl px-6 py-2.5 text-sm font-semibold text-black"
                  style={{
                    background: "linear-gradient(to right, #00e5ff, #00c853)",
                  }}
                >
                  {roundIndex < 2 ? "Manche suivante" : "Voir le resultat"}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

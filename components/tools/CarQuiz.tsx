"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import questionsData from "@/data/quiz/questions.json";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

type Phase = "playing" | "result";

const questions: Question[] = questionsData;
const TOTAL = questions.length;
const TIMER_SECONDS = 30;

/* ------------------------------------------------------------------ */
/*  Verdict helper                                                     */
/* ------------------------------------------------------------------ */

type VerdictKey = "expert" | "enthusiast" | "amateur" | "novice";

function getVerdictKey(score: number): VerdictKey {
  if (score === 15) return "expert";
  if (score >= 11) return "enthusiast";
  if (score >= 6) return "amateur";
  return "novice";
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ProgressBar({ current }: { current: number }) {
  const pct = ((current + 1) / TOTAL) * 100;
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

function TimerRing({ seconds }: { seconds: number }) {
  const pct = (seconds / TIMER_SECONDS) * 100;
  const color = seconds > 10 ? "#00e5ff" : seconds > 5 ? "#ff6d00" : "#ff1744";

  return (
    <div className="flex items-center gap-2">
      <div
        className="relative h-8 w-8 rounded-full"
        style={{
          background: `conic-gradient(${color} ${pct}%, rgba(255,255,255,0.05) ${pct}%)`,
        }}
      >
        <div
          className="absolute inset-[3px] rounded-full flex items-center justify-center text-xs font-bold"
          style={{ background: "#050510", color }}
        >
          {seconds}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function CarQuiz() {
  const t = useTranslations('quiz');
  const [phase, setPhase] = useState<Phase>("playing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [timer, setTimer] = useState(TIMER_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const question = questions[currentIndex];
  const isAnswered = selectedOption !== null;

  /* Timer countdown */
  useEffect(() => {
    if (phase !== "playing" || isAnswered) return;

    setTimer(TIMER_SECONDS);

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, phase, isAnswered]);

  /* Stop timer when answered */
  useEffect(() => {
    if (isAnswered && timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, [isAnswered]);

  const handleAnswer = useCallback(
    (optIndex: number) => {
      if (isAnswered) return;
      setSelectedOption(optIndex);
      if (optIndex === question.correctIndex) {
        setScore((prev) => prev + 1);
      }
    },
    [isAnswered, question.correctIndex]
  );

  const nextQuestion = useCallback(() => {
    if (currentIndex < TOTAL - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setPhase("result");
    }
  }, [currentIndex]);

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setTimer(TIMER_SECONDS);
    setPhase("playing");
  }, []);

  const shareResult = useCallback(() => {
    const verdictKey = getVerdictKey(score);
    const verdictTitle = t(`verdict${verdictKey.charAt(0).toUpperCase() + verdictKey.slice(1)}Title`);
    const text = t('shareText', { score, total: TOTAL, verdict: verdictTitle });
    if (navigator.share) {
      navigator.share({ text }).catch(() => {
        /* user cancelled */
      });
    } else {
      navigator.clipboard.writeText(text).catch(() => {
        /* fallback */
      });
    }
  }, [score, t]);

  /* ---- RESULT ---- */
  if (phase === "result") {
    const verdictKey = getVerdictKey(score);
    const verdictTitle = t(`verdict${verdictKey.charAt(0).toUpperCase() + verdictKey.slice(1)}Title`);
    const verdictText = t(`verdict${verdictKey.charAt(0).toUpperCase() + verdictKey.slice(1)}Text`);
    const pct = Math.round((score / TOTAL) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-lg rounded-2xl p-8 text-center backdrop-blur-md"
        style={{
          background: "rgba(12,12,30,0.6)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">{t('finished')}</h2>

        <div className="my-6">
          <span
            className="text-6xl font-extrabold"
            style={{
              background: "linear-gradient(to right, #00e5ff, #00c853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {score}/{TOTAL}
          </span>
          <p className="mt-2 text-sm text-[#8a90b0]">{t('correctPercent', { pct })}</p>
        </div>

        <div
          className="inline-block rounded-full px-4 py-1.5 text-sm font-bold mb-4"
          style={{
            background: "rgba(0,229,255,0.12)",
            color: "#00e5ff",
          }}
        >
          {verdictTitle}
        </div>

        <p className="text-[#8a90b0] mb-8">{verdictText}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restart}
            className="rounded-xl px-6 py-3 font-semibold text-white"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {t('retry')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shareResult}
            className="rounded-xl px-6 py-3 font-semibold text-black"
            style={{
              background: "linear-gradient(to right, #00e5ff, #00c853)",
            }}
          >
            {t('share')}
          </motion.button>
        </div>
      </motion.div>
    );
  }

  /* ---- PLAYING ---- */
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#8a90b0]">
          {t('question')} {currentIndex + 1}/{TOTAL}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-white">
            {t('scoreLabel')} : {score}
          </span>
          <TimerRing seconds={timer} />
        </div>
      </div>
      <ProgressBar current={currentIndex} />

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-6 sm:p-8 backdrop-blur-md"
          style={{
            background: "rgba(12,12,30,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
            {question.question}
          </h2>

          {/* Options */}
          <div className="grid gap-3">
            {question.options.map((option, idx) => {
              const isCorrect = idx === question.correctIndex;
              const isChosen = selectedOption === idx;

              let bg = "rgba(255,255,255,0.05)";
              let border = "rgba(255,255,255,0.08)";
              let textColor = "white";

              if (isAnswered) {
                if (isCorrect) {
                  bg = "rgba(0,200,83,0.15)";
                  border = "#00c853";
                  textColor = "#00c853";
                } else if (isChosen) {
                  bg = "rgba(255,23,68,0.15)";
                  border = "#ff1744";
                  textColor = "#ff1744";
                } else {
                  textColor = "#8a90b0";
                }
              }

              return (
                <motion.button
                  key={idx}
                  whileHover={!isAnswered ? { scale: 1.01 } : {}}
                  whileTap={!isAnswered ? { scale: 0.99 } : {}}
                  animate={
                    isAnswered && isCorrect
                      ? { scale: [1, 1.03, 1] }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                  onClick={() => handleAnswer(idx)}
                  disabled={isAnswered}
                  className="w-full text-left rounded-xl px-5 py-3.5 text-sm sm:text-base font-medium transition-colors"
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    color: textColor,
                    cursor: isAnswered ? "default" : "pointer",
                  }}
                >
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold" style={{ background: "rgba(255,255,255,0.06)" }}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className="mt-5 rounded-xl p-4"
                  style={{
                    background: "rgba(0,229,255,0.06)",
                    border: "1px solid rgba(0,229,255,0.15)",
                  }}
                >
                  <h3 className="text-sm font-bold text-[#00e5ff] mb-1">
                    {t('explanation')}
                  </h3>
                  <p className="text-sm text-[#8a90b0] leading-relaxed">
                    {question.explanation}
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextQuestion}
                    className="rounded-xl px-6 py-2.5 text-sm font-semibold text-black"
                    style={{
                      background:
                        "linear-gradient(to right, #00e5ff, #00c853)",
                    }}
                  >
                    {currentIndex < TOTAL - 1
                      ? t('nextQuestion')
                      : t('seeResult')}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

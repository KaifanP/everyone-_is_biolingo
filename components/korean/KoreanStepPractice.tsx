"use client";

import { motion } from "framer-motion";
import { KoreanLesson, KoreanExercise } from "@/lib/korean-types";
import { useState, useRef } from "react";
import KoreanAudioPlayer from "./KoreanAudioPlayer";
import listeningAudio from "@/lib/korean-listening-audio.json";

interface ExerciseResult {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  exerciseType: string;
  options?: string[];
  exerciseIndex?: number;
  itemIndex?: number;
  matchingWrongPairs?: { left: string; right: string }[];
  originalExercise?: KoreanExercise;
}

interface Props {
  data: KoreanLesson;
  onResult?: (result: ExerciseResult) => void;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function AnswerFeedback({ correct, correctAnswer, explanation }: { correct: boolean; correctAnswer: string; explanation?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-3 p-3 rounded-xl text-sm ${
        correct
          ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30"
          : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30"
      }`}
    >
      <p className={correct ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}>
        {correct ? "✓ 正确！" : `✗ 错误。正确答案：${correctAnswer}`}
      </p>
      {explanation && (
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{explanation}</p>
      )}
    </motion.div>
  );
}

function ListeningChoiceCard({ exercise, index, lessonId, onResult }: {
  exercise: Extract<KoreanExercise, { type: "listening-choice" }>;
  index: number;
  lessonId: string;
  onResult?: (r: ExerciseResult) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected !== null) {
      onResult?.({
        question: exercise.question,
        userAnswer: selected,
        correctAnswer: exercise.answer,
        isCorrect: selected === exercise.answer,
        exerciseType: "listening-choice",
        options: exercise.options,
        exerciseIndex: index,
        originalExercise: exercise,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      <div className="mb-3">
        <KoreanAudioPlayer
          audioId={exercise.audioId ?? `${lessonId}-listening`}
          text={exercise.audioText ?? listeningAudio[`${lessonId}-listening` as keyof typeof listeningAudio] ?? exercise.answer}
        />
      </div>
      <p className="text-sm text-gray-800 dark:text-gray-200 mb-3">
        <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">
          {index + 1}
        </span>
        {exercise.question}
      </p>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {exercise.options.map((opt, oi) => (
          <button
            key={oi}
            onClick={() => !submitted && setSelected(opt)}
            className={`p-2 rounded-lg text-sm transition-all border ${
              selected === opt
                ? submitted
                  ? opt === exercise.answer
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200"
                  : "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400 text-indigo-800 dark:text-indigo-200"
                : submitted && opt === exercise.answer
                ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-300 dark:hover:border-emerald-700"
            }`}
            disabled={submitted}
          >
            {opt}
          </button>
        ))}
      </div>
      {!submitted && selected && (
        <button
          onClick={handleSubmit}
          className="text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交答案
        </button>
      )}
      {submitted && (
        <AnswerFeedback correct={selected === exercise.answer} correctAnswer={exercise.answer} explanation={exercise.explanation} />
      )}
    </motion.div>
  );
}

function ReadingChoiceCard({ exercise, index, onResult }: {
  exercise: Extract<KoreanExercise, { type: "reading-choice" }>;
  index: number;
  onResult?: (r: ExerciseResult) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected !== null) {
      onResult?.({
        question: exercise.question,
        userAnswer: selected,
        correctAnswer: exercise.answer,
        isCorrect: selected === exercise.answer,
        exerciseType: "reading-choice",
        options: exercise.options,
        exerciseIndex: index,
        originalExercise: exercise,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      {exercise.passage && (
        <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/30">
          <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">阅读文章</p>
          <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{exercise.passage}</p>
        </div>
      )}
      <p className="text-sm text-gray-800 dark:text-gray-200 mb-3">
        <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">
          {index + 1}
        </span>
        {exercise.question}
      </p>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {exercise.options.map((opt, oi) => (
          <button
            key={oi}
            onClick={() => !submitted && setSelected(opt)}
            className={`p-2 rounded-lg text-sm transition-all border ${
              selected === opt
                ? submitted
                  ? opt === exercise.answer
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200"
                  : "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400 text-indigo-800 dark:text-indigo-200"
                : submitted && opt === exercise.answer
                ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-300 dark:hover:border-emerald-700"
            }`}
            disabled={submitted}
          >
            {opt}
          </button>
        ))}
      </div>
      {!submitted && selected && (
        <button
          onClick={handleSubmit}
          className="text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交答案
        </button>
      )}
      {submitted && (
        <AnswerFeedback correct={selected === exercise.answer} correctAnswer={exercise.answer} explanation={exercise.explanation} />
      )}
    </motion.div>
  );
}

function MatchingCard({ exercise, index, onResult }: {
  exercise: Extract<KoreanExercise, { type: "matching" }>;
  index: number;
  onResult?: (r: ExerciseResult) => void;
}) {
  const [shuffledLeft] = useState(() => shuffleArray(exercise.pairs.map((p, i) => ({ text: p.left, origIdx: i }))));
  const [shuffledRight] = useState(() => shuffleArray(exercise.pairs.map((p, i) => ({ text: p.right, origIdx: i }))));
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [correctMatches, setCorrectMatches] = useState<Record<number, number>>({});
  const [wrongFlash, setWrongFlash] = useState<{ left: number; right: number } | null>(null);
  const [wrongAttempts, setWrongAttempts] = useState<{ left: string; right: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleLeftClick = (idx: number) => {
    if (submitted || correctMatches[idx] !== undefined) return;
    setSelectedLeft(idx);
  };

  const handleRightClick = (idx: number) => {
    if (submitted || selectedLeft === null) return;
    const isUsed = Object.values(correctMatches).includes(idx);
    if (isUsed) return;

    const leftOrig = shuffledLeft[selectedLeft].origIdx;
    const rightOrig = shuffledRight[idx].origIdx;

    if (leftOrig === rightOrig) {
      setCorrectMatches((prev) => ({ ...prev, [selectedLeft]: idx }));
    } else {
      // Brief wrong flash, then continue — don't reveal correct answer
      setWrongFlash({ left: selectedLeft, right: idx });
      setWrongAttempts((prev) => [...prev, { left: shuffledLeft[selectedLeft].text, right: shuffledRight[idx].text }]);
      setTimeout(() => setWrongFlash(null), 600);
    }
    setSelectedLeft(null);
  };

  const allMatched = Object.keys(correctMatches).length === exercise.pairs.length;

  const handleSubmit = () => {
    setSubmitted(true);
    const isAllCorrect = Object.keys(correctMatches).length === exercise.pairs.length;
    const correctPairs = exercise.pairs.map((p) => `${p.left} ↔ ${p.right}`);
    onResult?.({
      question: exercise.instructions,
      userAnswer: correctMatches ? Object.entries(correctMatches).map(([l, r]) => `${shuffledLeft[+l].text} ↔ ${shuffledRight[r].text}`).join(", ") : "",
      correctAnswer: correctPairs.join(", "),
      isCorrect: isAllCorrect,
      exerciseType: "matching",
      options: correctPairs,
      exerciseIndex: index,
      matchingWrongPairs: wrongAttempts.length > 0 ? wrongAttempts : undefined,
      originalExercise: exercise,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        {submitted ? "配对结果：" : "先选左边，再选右边配对。配错可以继续尝试。"}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {shuffledLeft.map((item, i) => {
            const isMatched = correctMatches[i] !== undefined;
            const isSelected = selectedLeft === i;
            const isWrongFlash = wrongFlash?.left === i;
            return (
              <button
                key={i}
                onClick={() => handleLeftClick(i)}
                className={`w-full p-2 rounded-lg text-sm text-left transition-all border ${
                  isMatched
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : isWrongFlash
                    ? "bg-red-100 dark:bg-red-900/30 border-red-400 animate-pulse"
                    : isSelected
                    ? "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-emerald-300"
                }`}
                disabled={submitted || isMatched}
              >
                {item.text}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((item, i) => {
            const isUsed = Object.values(correctMatches).includes(i);
            const isWrongFlash = wrongFlash?.right === i;
            return (
              <button
                key={i}
                onClick={() => handleRightClick(i)}
                className={`w-full p-2 rounded-lg text-sm text-left transition-all border ${
                  isUsed
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : isWrongFlash
                    ? "bg-red-100 dark:bg-red-900/30 border-red-400 animate-pulse"
                    : selectedLeft !== null
                    ? "bg-gray-50 dark:bg-gray-700 border-amber-300 dark:border-amber-600 hover:border-emerald-300"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-emerald-300"
                }`}
                disabled={submitted || isUsed}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
      {!submitted && allMatched && (
        <button
          onClick={handleSubmit}
          className="mt-3 text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交配对
        </button>
      )}
      {!submitted && !allMatched && wrongAttempts.length >= 3 && (
        <button
          onClick={handleSubmit}
          className="mt-3 text-sm px-3 py-1.5 rounded-lg bg-gray-400 dark:bg-gray-600 text-white hover:bg-gray-500 transition-all"
        >
          提交当前配对（{Object.keys(correctMatches).length}/{exercise.pairs.length}）
        </button>
      )}
      {submitted && (
        <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            {allMatched ? "✓ 全部配对正确！" : `✓ 正确配对 ${Object.keys(correctMatches).length}/${exercise.pairs.length}`}
          </p>
          {!allMatched && (
            <div className="mt-2 space-y-1">
              {exercise.pairs.map((p, pi) => {
                const leftIdx = shuffledLeft.findIndex((l) => l.origIdx === pi);
                const matchedRightIdx = correctMatches[leftIdx];
                const isCorrect = matchedRightIdx !== undefined && shuffledRight[matchedRightIdx].origIdx === pi;
                if (isCorrect) return null;
                return (
                  <p key={pi} className="text-xs text-red-600 dark:text-red-400">
                    {p.left} ↔ {p.right}
                  </p>
                );
              })}
            </div>
          )}
          {exercise.explanation && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{exercise.explanation}</p>
          )}
        </div>
      )}
    </motion.div>
  );
}

function OrderingCard({ exercise, index, onResult }: {
  exercise: Extract<KoreanExercise, { type: "ordering" }>;
  index: number;
  onResult?: (r: ExerciseResult) => void;
}) {
  const [shuffled] = useState(() => shuffleArray(exercise.items));
  const [currentOrder, setCurrentOrder] = useState<string[]>(shuffled);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const moveItem = (from: number, to: number) => {
    if (submitted || from === to) return;
    const newOrder = [...currentOrder];
    const [item] = newOrder.splice(from, 1);
    newOrder.splice(to, 0, item);
    setCurrentOrder(newOrder);
  };

  const handleDragStart = (idx: number) => {
    if (submitted) return;
    setDragIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (dragIdx !== null && dragIdx !== idx) {
      moveItem(dragIdx, idx);
      setDragIdx(idx);
    }
  };

  const handleDragEnd = () => setDragIdx(null);

  // Touch drag support
  const touchStartIdx = useRef<number | null>(null);
  const handleTouchStart = (idx: number) => {
    if (submitted) return;
    touchStartIdx.current = idx;
  };
  const handleTouchEnd = (idx: number) => {
    if (touchStartIdx.current !== null && touchStartIdx.current !== idx) {
      moveItem(touchStartIdx.current, idx);
    }
    touchStartIdx.current = null;
  };

  const isCorrect = submitted && JSON.stringify(currentOrder) === JSON.stringify(exercise.correctOrder);

  const handleSubmit = () => {
    setSubmitted(true);
    if (JSON.stringify(currentOrder) !== JSON.stringify(exercise.correctOrder)) {
      onResult?.({
        question: exercise.instructions,
        userAnswer: currentOrder.join(", "),
        correctAnswer: exercise.correctOrder.join(", "),
        isCorrect: false,
        exerciseType: "ordering",
        options: exercise.items,
        exerciseIndex: index,
        originalExercise: exercise,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        {submitted ? "排序结果：" : "拖动排序，或用右侧按钮上下移动"}
      </p>
      <div className="space-y-2 mb-3">
        {currentOrder.map((item, i) => {
          const isCorrectPos = submitted && currentOrder[i] === exercise.correctOrder[i];
          const isDragging = dragIdx === i;
          return (
            <div
              key={`${item}-${i}`}
              draggable={!submitted}
              onDragStart={() => handleDragStart(i)}
              onDragOver={(e) => handleDragOver(e, i)}
              onDragEnd={handleDragEnd}
              onTouchStart={() => handleTouchStart(i)}
              onTouchEnd={() => handleTouchEnd(i)}
              className={`flex items-center gap-2 rounded-lg text-sm border transition-all ${
                isDragging
                  ? "opacity-50 scale-95"
                  : submitted
                  ? isCorrectPos
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400"
                    : "bg-red-100 dark:bg-red-900/30 border-red-400"
                  : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
              } ${!submitted ? "cursor-grab active:cursor-grabbing" : ""}`}
            >
              <span className="w-7 h-7 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 flex-shrink-0">
                {i + 1}
              </span>
              <span className="flex-1 p-2 text-left">{item}</span>
              {!submitted && (
                <div className="flex flex-col gap-0.5 flex-shrink-0 pr-1">
                  <button
                    onClick={() => moveItem(i, Math.max(0, i - 1))}
                    disabled={i === 0}
                    className="w-6 h-5 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                    aria-label="上移"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveItem(i, Math.min(currentOrder.length - 1, i + 1))}
                    disabled={i === currentOrder.length - 1}
                    className="w-6 h-5 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                    aria-label="下移"
                  >
                    ▼
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!submitted && (
        <button
          onClick={handleSubmit}
          className="text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交排序
        </button>
      )}
      {submitted && (
        <AnswerFeedback
          correct={isCorrect}
          correctAnswer={exercise.correctOrder.join(" → ")}
          explanation={exercise.explanation}
        />
      )}
    </motion.div>
  );
}

function normalizeAnswer(s: string): string {
  return s
    .trim()
    .replace(/[\s　]+/g, "")       // all whitespace (including full-width)
    .replace(/[.,!?。！？、，:;：；""''「」『』()（）\-—–]/g, "")  // punctuation
    .replace(/요$/g, "")               // Korean polite ending normalization
    .toLowerCase();
}

function answersMatch(userAns: string, correctAns: string): boolean {
  if (userAns === correctAns) return true;
  const n1 = normalizeAnswer(userAns);
  const n2 = normalizeAnswer(correctAns);
  if (n1 === n2) return true;
  // Common Korean equivalences
  const equivalents: Record<string, string[]> = {
    "입니다": ["이에요", "예요", "이에요", "예요"],
    "이에요": ["입니다", "예요"],
    "예요": ["입니다", "이에요"],
    "아니에요": ["아닙니다", "아닙니다"],
    "아닙니다": ["아니에요"],
    "있어요": ["있습니다"],
    "있습니다": ["있어요"],
    "없어요": ["없습니다"],
    "없습니다": ["없어요"],
    "했어요": ["했습니다"],
    "했습니다": ["했어요"],
    "갔어요": ["갔습니다"],
    "갔습니다": ["갔어요"],
    "왔어요": ["왔습니다"],
    "왔습니다": ["왔어요"],
    "먹어요": ["먹습니다"],
    "먹습니다": ["먹어요"],
  };
  for (const [key, alts] of Object.entries(equivalents)) {
    if ((n1.includes(key) && alts.some((a) => n2.includes(a))) ||
        (n2.includes(key) && alts.some((a) => n1.includes(a)))) {
      return true;
    }
  }
  return false;
}

function FillInCard({ exercise, index, onResult }: {
  exercise: Extract<KoreanExercise, { type: "fill-in" }>;
  index: number;
  onResult?: (r: ExerciseResult) => void;
}) {
  const [answers, setAnswers] = useState<string[]>(exercise.sentences.map(() => ""));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (i: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[i] = value;
    setAnswers(newAnswers);
  };

  const allFilled = answers.every((a) => a.trim().length > 0);

  const handleSubmit = () => {
    setSubmitted(true);
    const wrongOnes = exercise.sentences
      .map((s, i) => ({ sentence: s, userAnswer: answers[i].trim(), correctAnswer: s.answer }))
      .filter((item) => !answersMatch(item.userAnswer, item.correctAnswer));
    if (wrongOnes.length > 0) {
      onResult?.({
        question: exercise.instructions,
        userAnswer: wrongOnes.map((w) => `"${w.sentence.sentence}" → 你的答案: ${w.userAnswer}, 正确答案: ${w.correctAnswer}`).join("; "),
        correctAnswer: exercise.sentences.map((s) => s.answer).join(", "),
        isCorrect: false,
        exerciseType: "fill-in",
        options: exercise.sentences.map((s) => s.answer),
        exerciseIndex: index,
        originalExercise: exercise,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      <div className="space-y-3">
        {exercise.sentences.map((s, si) => {
          const isCorrect = submitted && answersMatch(answers[si], s.answer);
          const isExact = submitted && answers[si].trim() === s.answer;
          return (
            <div key={si} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">{s.sentence}</p>
              {s.hint && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">提示：{s.hint}</p>
              )}
              <input
                type="text"
                value={answers[si]}
                onChange={(e) => handleChange(si, e.target.value)}
                placeholder="输入答案..."
                disabled={submitted}
                className={`w-full p-2 rounded-lg text-sm border transition-all ${
                  submitted
                    ? isCorrect
                      ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400"
                      : "bg-red-50 dark:bg-red-900/20 border-red-400"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                }`}
              />
              {submitted && (
                <p className={`mt-1 text-xs ${isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                  {isCorrect
                    ? isExact ? "✓ 正确" : "✓ 正确（等价答案）"
                    : `✗ 正确答案：${s.answer}`}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {!submitted && allFilled && (
        <button
          onClick={handleSubmit}
          className="mt-3 text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交答案
        </button>
      )}
    </motion.div>
  );
}

function DictationCard({ exercise, index, lessonId, onResult }: {
  exercise: Extract<KoreanExercise, { type: "dictation" }>;
  index: number;
  lessonId: string;
  onResult?: (r: ExerciseResult) => void;
}) {
  const items = exercise.sentences ?? [{ sentence: exercise.chinese ?? "听写", answer: exercise.korean ?? "", audioId: exercise.audioId }];
  const [userInputs, setUserInputs] = useState(() => items.map(() => ""));
  const [submitted, setSubmitted] = useState(() => items.map(() => false));

  const normalize = (s: string) => s.replace(/[\s.,!?。！？、]/g, "").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      <div className="space-y-4">
        {items.map((item, itemIndex) => {
          const isCorrect = submitted[itemIndex] && normalize(userInputs[itemIndex]) === normalize(item.answer);
          return (
            <div key={itemIndex} className="rounded-lg border border-gray-100 p-3 dark:border-gray-700">
              <KoreanAudioPlayer
                audioId={item.audioId ?? exercise.audioId ?? `${lessonId}-dictation-${itemIndex}`}
                text={item.answer}
                label={`播放第 ${itemIndex + 1} 题`}
              />
              <p className="my-2 text-xs text-gray-500 dark:text-gray-400">提示：{item.sentence}</p>
              <input
                type="text"
                value={userInputs[itemIndex]}
                onChange={(e) => setUserInputs((current) => current.map((value, i) => i === itemIndex ? e.target.value : value))}
                placeholder="输入你听到的韩文..."
                disabled={submitted[itemIndex]}
                className={`w-full p-2 rounded-lg text-sm border transition-all ${submitted[itemIndex] ? isCorrect ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400" : "bg-red-50 dark:bg-red-900/20 border-red-400" : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"}`}
              />
              {!submitted[itemIndex] && userInputs[itemIndex].trim() && (
                <button
                  onClick={() => {
                    setSubmitted((current) => current.map((value, i) => i === itemIndex ? true : value));
                    if (normalize(userInputs[itemIndex]) !== normalize(item.answer)) {
                      onResult?.({
                        question: item.sentence,
                        userAnswer: userInputs[itemIndex],
                        correctAnswer: item.answer,
                        isCorrect: false,
                        exerciseType: "dictation",
                        exerciseIndex: index,
                        itemIndex,
                        originalExercise: exercise,
                      });
                    }
                  }}
                  className="mt-2 text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
                >
                  提交听写
                </button>
              )}
              {submitted[itemIndex] && <AnswerFeedback correct={isCorrect} correctAnswer={item.answer} explanation={exercise.explanation} />}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ImageChoiceCard({ exercise, index, onResult }: {
  exercise: Extract<KoreanExercise, { type: "image-choice" }>;
  index: number;
  onResult?: (r: ExerciseResult) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected !== null && selected !== exercise.answer) {
      onResult?.({
        question: exercise.question,
        userAnswer: selected,
        correctAnswer: exercise.answer,
        isCorrect: false,
        exerciseType: "image-choice",
        options: exercise.options,
        exerciseIndex: index,
        originalExercise: exercise,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
    >
      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {exercise.instructions}
      </p>
      <div className="mb-3 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/everyone-_is_biolingo${exercise.imageUrl}`}
          alt={exercise.question}
          className="max-w-full h-auto max-h-48 rounded-lg border border-gray-200 dark:border-gray-700"
        />
      </div>
      <p className="text-sm text-gray-800 dark:text-gray-200 mb-3">
        <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">
          {index + 1}
        </span>
        {exercise.question}
      </p>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {exercise.options.map((opt, oi) => (
          <button
            key={oi}
            onClick={() => !submitted && setSelected(opt)}
            className={`p-2 rounded-lg text-sm transition-all border ${
              selected === opt
                ? submitted
                  ? opt === exercise.answer
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200"
                  : "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400 text-indigo-800 dark:text-indigo-200"
                : submitted && opt === exercise.answer
                ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-300 dark:hover:border-emerald-700"
            }`}
            disabled={submitted}
          >
            {opt}
          </button>
        ))}
      </div>
      {!submitted && selected && (
        <button
          onClick={handleSubmit}
          className="text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交答案
        </button>
      )}
      {submitted && (
        <AnswerFeedback correct={selected === exercise.answer} correctAnswer={exercise.answer} explanation={exercise.explanation} />
      )}
    </motion.div>
  );
}

function ExerciseCard({ exercise, index, lessonId, onResult }: {
  exercise: KoreanExercise;
  index: number;
  lessonId: string;
  onResult?: (r: ExerciseResult) => void;
}) {
  switch (exercise.type) {
    case "listening-choice":
      return <ListeningChoiceCard exercise={exercise} index={index} lessonId={lessonId} onResult={onResult} />;
    case "reading-choice":
      return <ReadingChoiceCard exercise={exercise} index={index} onResult={onResult} />;
    case "matching":
      return <MatchingCard exercise={exercise} index={index} onResult={onResult} />;
    case "ordering":
      return <OrderingCard exercise={exercise} index={index} onResult={onResult} />;
    case "fill-in":
      return <FillInCard exercise={exercise} index={index} onResult={onResult} />;
    case "dictation":
      return <DictationCard exercise={exercise} index={index} lessonId={lessonId} onResult={onResult} />;
    case "image-choice":
      return <ImageChoiceCard exercise={exercise} index={index} onResult={onResult} />;
    default: {
      return (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800/30">
          <p className="text-sm text-red-600 dark:text-red-400">
            未实现的练习类型：{(exercise as { type: string }).type}
          </p>
        </div>
      );
    }
  }
}

export default function KoreanStepPractice({ data, onResult }: Props) {
  const { practice } = data;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 rounded-lg text-sm">
            ✏️
          </span>
          听读练习
        </h3>
        <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-100">
          <strong>先检索，再核对：</strong>请先在纸上或心里完整作答，再点击提交。卡住时至少坚持回想 10 秒；这种「费力感」正是记忆在加深。
        </div>
      </motion.div>

      <div className="space-y-4">
        {practice.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} index={i} lessonId={data.info.id} onResult={onResult} />
        ))}
      </div>
    </div>
  );
}

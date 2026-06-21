"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { KoreanMistakeRecord } from "@/lib/korean-types";
import { ERROR_TYPE_CONFIG } from "@/lib/korean-error-types";
import KoreanAudioPlayer from "./KoreanAudioPlayer";

interface ReviewAnswer {
  userAnswer: string;
  isCorrect: boolean;
}

interface Props {
  mistake: KoreanMistakeRecord;
  answered: ReviewAnswer | null;
  onAnswer: (userAnswer: string, isCorrect: boolean) => void;
}

function normalizeAnswer(value: string) {
  return value
    .normalize("NFC")
    .trim()
    .replace(/[.!?。！？]+$/u, "")
    .replace(/\s+/g, " ");
}

function shuffledAwayFromCorrect(items: string[]) {
  if (items.length < 2) return [...items];
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  const unchanged = shuffled.every((item, index) => item === items[index]);
  return unchanged ? [...items.slice(1), items[0]] : shuffled;
}

export default function ReviewExerciseCard({ mistake, answered, onAnswer }: Props) {
  const errorConfig = mistake.errorType ? ERROR_TYPE_CONFIG[mistake.errorType] : null;

  const isChoiceType = mistake.options && (
    mistake.exerciseType === "listening-choice" ||
    mistake.exerciseType === "reading-choice" ||
    mistake.exerciseType === "self-test" ||
    mistake.exerciseType === "mock-listening" ||
    mistake.exerciseType === "mock-reading" ||
    mistake.exerciseType === "image-choice"
  );

  const isFillIn = mistake.exerciseType === "fill-in";
  const isDictation = mistake.exerciseType === "dictation";
  const isMatching = mistake.exerciseType === "matching";
  const isOrdering = mistake.exerciseType === "ordering";

  const content = isChoiceType ? (
    <ReviewChoice mistake={mistake} answered={answered} onAnswer={onAnswer} />
  ) : isFillIn ? (
    <ReviewFillIn mistake={mistake} answered={answered} onAnswer={onAnswer} />
  ) : isDictation ? (
    <ReviewDictation mistake={mistake} answered={answered} onAnswer={onAnswer} />
  ) : isMatching ? (
    <ReviewMatching mistake={mistake} answered={answered} onAnswer={onAnswer} />
  ) : isOrdering ? (
    <ReviewOrdering mistake={mistake} answered={answered} onAnswer={onAnswer} />
  ) : (
    <ReviewChoice mistake={mistake} answered={answered} onAnswer={onAnswer} />
  );

  return (
    <div aria-live="polite">
      {errorConfig && (
        <div className="mb-3 flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${errorConfig.color} ${errorConfig.bgColor}`}>
            {errorConfig.label}
          </span>
          {mistake.count > 1 && (
            <span className="text-xs text-gray-400">错{mistake.count}次</span>
          )}
        </div>
      )}
      {content}
      {answered && !answered.isCorrect && (mistake.autoExplanation || (mistake.originalExercise && "explanation" in mistake.originalExercise)) && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30"
        >
          {mistake.autoExplanation && (
            <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
              💡 {mistake.autoExplanation}
            </p>
          )}
          {mistake.originalExercise && "explanation" in mistake.originalExercise && mistake.originalExercise.explanation && (
            <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">
              教材解析：{String(mistake.originalExercise.explanation)}
            </p>
          )}
          {isChoiceType && (
            <div className="mt-2 flex items-center gap-3 text-xs">
              <span className="text-red-600 dark:text-red-400">✗ 你的：{answered.userAnswer}</span>
              <span className="text-gray-400">→</span>
              <span className="text-emerald-600 dark:text-emerald-400">✓ 正确：{mistake.correctAnswer}</span>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

function ReviewChoice({ mistake, answered, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const options = mistake.options ?? [];

  const handleSubmit = () => {
    if (!selected) return;
    const isCorrect = selected === mistake.correctAnswer;
    onAnswer(selected, isCorrect);
  };

  return (
    <div className="space-y-4">
      {mistake.exerciseType === "listening-choice" && mistake.originalExercise && "audioId" in mistake.originalExercise && (() => {
        const orig = mistake.originalExercise as { audioId?: string; audioText?: string; korean?: string };
        const ttsText = orig.audioText || orig.korean || mistake.correctAnswer;
        return (
          <div className="mb-3">
            <KoreanAudioPlayer
              audioId={orig.audioId ?? mistake.lessonId}
              text={ttsText}
            />
          </div>
        );
      })()}

      <p className="font-medium text-gray-800 dark:text-gray-200">{mistake.question}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt, i) => {
          const isSelected = selected === opt;
          const isUserAnswer = answered && answered.userAnswer === opt;
          const isCorrect = opt === mistake.correctAnswer;
          const showResult = !!answered;

          let style = "p-3 rounded-xl text-sm border text-left transition-all ";
          if (showResult) {
            if (isCorrect) {
              style += "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200";
            } else if (isUserAnswer && !isCorrect) {
              style += "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200";
            } else {
              style += "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400";
            }
          } else if (isSelected) {
            style += "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400 text-indigo-800 dark:text-indigo-200 ring-2 ring-indigo-200 dark:ring-indigo-700";
          } else {
            style += "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-700 cursor-pointer";
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => !answered && setSelected(opt)}
              disabled={!!answered}
              className={style}
            >
              <span className="font-bold mr-1">{String.fromCharCode(65 + i)}.</span> {opt}
            </button>
          );
        })}
      </div>

      {!answered && (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!selected}
          className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          提交答案
        </button>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl text-sm ${
            answered.isCorrect
              ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30"
          }`}
        >
          <p className={answered.isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}>
            {answered.isCorrect ? "✓ 正确！" : `✗ 错误。正确答案：${mistake.correctAnswer}`}
          </p>
          {!answered.isCorrect && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              你的答案：{answered.userAnswer}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function ReviewFillIn({ mistake, answered, onAnswer }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const isCorrect = normalizeAnswer(input) === normalizeAnswer(mistake.correctAnswer);
    onAnswer(input.trim(), isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className="font-medium text-gray-800 dark:text-gray-200">{mistake.question}</p>

      {!answered ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="输入你的答案..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="px-4 py-2.5 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            提交
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl text-sm ${
            answered.isCorrect
              ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30"
          }`}
        >
          <p className={answered.isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}>
            {answered.isCorrect ? "✓ 正确！" : `✗ 错误。正确答案：${mistake.correctAnswer}`}
          </p>
          {!answered.isCorrect && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              你的答案：{answered.userAnswer}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function ReviewDictation({ mistake, answered, onAnswer }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const isCorrect = normalizeAnswer(input) === normalizeAnswer(mistake.correctAnswer);
    onAnswer(input.trim(), isCorrect);
  };

  return (
    <div className="space-y-4">
      {mistake.originalExercise && "audioId" in mistake.originalExercise && (
        <div className="mb-3">
          <KoreanAudioPlayer
            audioId={(mistake.originalExercise as { audioId?: string }).audioId ?? mistake.lessonId}
            text={mistake.correctAnswer}
          />
        </div>
      )}
      <p className="font-medium text-gray-800 dark:text-gray-200">{mistake.question}</p>

      {!answered ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="听写输入..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="px-4 py-2.5 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            提交
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl text-sm ${
            answered.isCorrect
              ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30"
          }`}
        >
          <p className={answered.isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}>
            {answered.isCorrect ? "✓ 正确！" : `✗ 错误。正确答案：${mistake.correctAnswer}`}
          </p>
          {!answered.isCorrect && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              你的答案：{answered.userAnswer}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

function ReviewMatching({ mistake, answered, onAnswer }: Props) {
  const wrongPairs = mistake.matchingWrongPairs ?? [];
  const correctPairs = mistake.originalExercise && "pairs" in mistake.originalExercise
    ? (mistake.originalExercise as { pairs: { left: string; right: string }[] }).pairs
    : [];

  const pairsToShow = correctPairs.length > 0 ? correctPairs : [];

  const allLeft = pairsToShow.map((p) => p.left);
  const [rightOptions] = useState<string[]>(() => shuffledAwayFromCorrect(pairsToShow.map((p) => p.right)));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});

  if (pairsToShow.length === 0 && wrongPairs.length === 0) {
    return <ReviewChoice mistake={mistake} answered={answered} onAnswer={onAnswer} />;
  }

  const handleLeftClick = (left: string) => {
    if (answered) return;
    setSelectedLeft(left);
  };

  const handleRightClick = (right: string) => {
    if (answered || !selectedLeft) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: right }));
    setSelectedLeft(null);
  };

  const handleSubmit = () => {
    if (Object.keys(matches).length < pairsToShow.length) return;
    const isCorrect = pairsToShow.every((p) => matches[p.left] === p.right);
    const userAnswer = Object.entries(matches).map(([l, r]) => `${l}↔${r}`).join(", ");
    onAnswer(userAnswer, isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
        将左侧与右侧正确配对：
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {allLeft.map((left) => (
            <button
              key={left}
              type="button"
              onClick={() => handleLeftClick(left)}
              disabled={!!answered || matches[left] !== undefined}
              className={`w-full p-3 rounded-xl text-sm border text-left transition-all ${
                selectedLeft === left
                  ? "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400 ring-2 ring-indigo-200"
                  : matches[left]
                  ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300"
                  : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-indigo-300 cursor-pointer"
              }`}
            >
              {left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rightOptions.map((right) => {
            const isSelected = Object.values(matches).includes(right);
            return (
              <button
                key={right}
                type="button"
                onClick={() => handleRightClick(right)}
                disabled={!!answered || isSelected}
                className={`w-full p-3 rounded-xl text-sm border text-left transition-all ${
                  isSelected
                    ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-indigo-300 cursor-pointer"
                }`}
              >
                {right}
              </button>
            );
          })}
        </div>
      </div>

      {!answered && (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={Object.keys(matches).length < pairsToShow.length}
          className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          提交配对
        </button>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl text-sm ${
            answered.isCorrect
              ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30"
          }`}
        >
          <p className={answered.isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}>
            {answered.isCorrect ? "✓ 正确！" : "✗ 错误。"}
          </p>
          {!answered.isCorrect && (
            <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              <p className="font-medium mb-1">正确配对：</p>
              {pairsToShow.map((p) => (
                <p key={p.left}>{p.left} ↔ {p.right}</p>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

function ReviewOrdering({ mistake, answered, onAnswer }: Props) {
  const correctOrder = mistake.originalExercise && "correctOrder" in mistake.originalExercise
    ? (mistake.originalExercise as { correctOrder: string[] }).correctOrder
    : mistake.correctAnswer.split(/[,\n]/).map((s) => s.trim()).filter(Boolean);

  const [order, setOrder] = useState<string[]>(() => shuffledAwayFromCorrect(correctOrder));

  if (correctOrder.length === 0) {
    return <ReviewChoice mistake={mistake} answered={answered} onAnswer={onAnswer} />;
  }

  const moveItem = (from: number, to: number) => {
    if (answered || to < 0 || to >= order.length) return;
    const arr = [...order];
    const [item] = arr.splice(from, 1);
    arr.splice(to, 0, item);
    setOrder(arr);
  };

  const handleSubmit = () => {
    const isCorrect = order.every((item, i) => item === correctOrder[i]);
    onAnswer(order.join(" → "), isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
        拖动或使用箭头调整顺序：
      </p>

      <div className="space-y-2">
        {order.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => moveItem(i, i - 1)}
              disabled={!!answered || i === 0}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-30 transition-all text-sm"
            >
              ↑
            </button>
            <div className="flex-1 p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm text-gray-800 dark:text-gray-200">
              <span className="font-bold mr-2 text-indigo-500">{i + 1}.</span>
              {item}
            </div>
            <button
              type="button"
              onClick={() => moveItem(i, i + 1)}
              disabled={!!answered || i === order.length - 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-30 transition-all text-sm"
            >
              ↓
            </button>
          </div>
        ))}
      </div>

      {!answered && (
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all"
        >
          提交排序
        </button>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl text-sm ${
            answered.isCorrect
              ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30"
              : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30"
          }`}
        >
          <p className={answered.isCorrect ? "text-emerald-700 dark:text-emerald-300" : "text-red-700 dark:text-red-300"}>
            {answered.isCorrect ? "✓ 正确！" : "✗ 错误。"}
          </p>
          {!answered.isCorrect && (
            <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              <p className="font-medium mb-1">正确顺序：</p>
              <p>{correctOrder.join(" → ")}</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

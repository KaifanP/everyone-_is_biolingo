"use client";

import { motion } from "framer-motion";
import { KoreanLesson, KoreanExercise } from "@/lib/korean-types";
import { useState } from "react";
import KoreanAudioPlayer from "./KoreanAudioPlayer";
import listeningAudio from "@/lib/korean-listening-audio.json";

interface Props {
  data: KoreanLesson;
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

function ListeningChoiceCard({ exercise, index, lessonId }: { exercise: Extract<KoreanExercise, { type: "listening-choice" }>; index: number; lessonId: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
          onClick={() => setSubmitted(true)}
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

function ReadingChoiceCard({ exercise, index }: { exercise: Extract<KoreanExercise, { type: "reading-choice" }>; index: number }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
          onClick={() => setSubmitted(true)}
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

function MatchingCard({ exercise, index }: { exercise: Extract<KoreanExercise, { type: "matching" }>; index: number }) {
  const [shuffledLeft] = useState(() => shuffleArray(exercise.pairs.map((p, i) => ({ text: p.left, origIdx: i }))));
  const [shuffledRight] = useState(() => shuffleArray(exercise.pairs.map((p, i) => ({ text: p.right, origIdx: i }))));
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [wrongPair, setWrongPair] = useState<{ left: number; right: number } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleLeftClick = (idx: number) => {
    if (submitted || matches[idx] !== undefined) return;
    setSelectedLeft(idx);
    setWrongPair(null);
  };

  const handleRightClick = (idx: number) => {
    if (submitted || selectedLeft === null) return;
    const isUsed = Object.values(matches).includes(idx);
    if (isUsed) return;

    const leftOrig = shuffledLeft[selectedLeft].origIdx;
    const rightOrig = shuffledRight[idx].origIdx;

    if (leftOrig === rightOrig) {
      setMatches((prev) => ({ ...prev, [selectedLeft]: idx }));
      setSelectedLeft(null);
    } else {
      setWrongPair({ left: selectedLeft, right: idx });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 800);
    }
  };

  const allMatched = Object.keys(matches).length === exercise.pairs.length;

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
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {shuffledLeft.map((item, i) => {
            const isMatched = matches[i] !== undefined;
            const isSelected = selectedLeft === i;
            const isWrong = wrongPair?.left === i;
            return (
              <button
                key={i}
                onClick={() => handleLeftClick(i)}
                className={`w-full p-2 rounded-lg text-sm text-left transition-all border ${
                  isMatched
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : isWrong
                    ? "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200"
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
            const isUsed = Object.values(matches).includes(i);
            const isWrong = wrongPair?.right === i;
            return (
              <button
                key={i}
                onClick={() => handleRightClick(i)}
                className={`w-full p-2 rounded-lg text-sm text-left transition-all border ${
                  isUsed
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200"
                    : isWrong
                    ? "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200"
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
      {allMatched && !submitted && (
        <button
          onClick={() => setSubmitted(true)}
          className="mt-3 text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          全部配对完成，提交
        </button>
      )}
      {submitted && (
        <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
          <p className="text-sm text-emerald-700 dark:text-emerald-300">✓ 全部配对正确！</p>
          {exercise.explanation && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{exercise.explanation}</p>
          )}
        </div>
      )}
    </motion.div>
  );
}

function OrderingCard({ exercise, index }: { exercise: Extract<KoreanExercise, { type: "ordering" }>; index: number }) {
  const [shuffled] = useState(() => shuffleArray(exercise.items));
  const [currentOrder, setCurrentOrder] = useState<string[]>(shuffled);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleItemClick = (idx: number) => {
    if (submitted) return;
    if (selectedIndex === null) {
      setSelectedIndex(idx);
    } else if (selectedIndex === idx) {
      setSelectedIndex(null);
    } else {
      const newOrder = [...currentOrder];
      [newOrder[selectedIndex], newOrder[idx]] = [newOrder[idx], newOrder[selectedIndex]];
      setCurrentOrder(newOrder);
      setSelectedIndex(null);
    }
  };

  const isCorrect = submitted && JSON.stringify(currentOrder) === JSON.stringify(exercise.correctOrder);

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
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">点击两个项目交换位置</p>
      <div className="space-y-2 mb-3">
        {currentOrder.map((item, i) => {
          const isSelected = selectedIndex === i;
          const isCorrectPos = submitted && currentOrder[i] === exercise.correctOrder[i];
          return (
            <button
              key={`${item}-${i}`}
              onClick={() => handleItemClick(i)}
              className={`w-full p-2 rounded-lg text-sm text-left transition-all border flex items-center gap-2 ${
                submitted
                  ? isCorrectPos
                    ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400"
                    : "bg-red-100 dark:bg-red-900/30 border-red-400"
                  : isSelected
                  ? "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-400"
                  : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-emerald-300"
              }`}
              disabled={submitted}
            >
              <span className="w-5 h-5 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300">
                {i + 1}
              </span>
              {item}
            </button>
          );
        })}
      </div>
      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
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

function FillInCard({ exercise, index }: { exercise: Extract<KoreanExercise, { type: "fill-in" }>; index: number }) {
  const [answers, setAnswers] = useState<string[]>(exercise.sentences.map(() => ""));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (i: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[i] = value;
    setAnswers(newAnswers);
  };

  const allFilled = answers.every((a) => a.trim().length > 0);

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
          const isCorrect = submitted && answers[si].trim() === s.answer;
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
                  {isCorrect ? "✓ 正确" : `✗ 正确答案：${s.answer}`}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {!submitted && allFilled && (
        <button
          onClick={() => setSubmitted(true)}
          className="mt-3 text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all"
        >
          提交答案
        </button>
      )}
    </motion.div>
  );
}

function DictationCard({ exercise, index, lessonId }: { exercise: Extract<KoreanExercise, { type: "dictation" }>; index: number; lessonId: string }) {
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
                <button onClick={() => setSubmitted((current) => current.map((value, i) => i === itemIndex ? true : value))} className="mt-2 text-sm px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all">提交听写</button>
              )}
              {submitted[itemIndex] && <AnswerFeedback correct={isCorrect} correctAnswer={item.answer} explanation={exercise.explanation} />}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ImageChoiceCard({ exercise, index }: { exercise: Extract<KoreanExercise, { type: "image-choice" }>; index: number }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
          onClick={() => setSubmitted(true)}
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

function ExerciseCard({ exercise, index, lessonId }: { exercise: KoreanExercise; index: number; lessonId: string }) {
  switch (exercise.type) {
    case "listening-choice":
      return <ListeningChoiceCard exercise={exercise} index={index} lessonId={lessonId} />;
    case "reading-choice":
      return <ReadingChoiceCard exercise={exercise} index={index} />;
    case "matching":
      return <MatchingCard exercise={exercise} index={index} />;
    case "ordering":
      return <OrderingCard exercise={exercise} index={index} />;
    case "fill-in":
      return <FillInCard exercise={exercise} index={index} />;
    case "dictation":
      return <DictationCard exercise={exercise} index={index} lessonId={lessonId} />;
    case "image-choice":
      return <ImageChoiceCard exercise={exercise} index={index} />;
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

export default function KoreanStepPractice({ data }: Props) {
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
          <ExerciseCard key={i} exercise={exercise} index={i} lessonId={data.info.id} />
        ))}
      </div>
    </div>
  );
}

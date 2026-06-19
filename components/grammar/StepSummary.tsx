"use client";

import { motion } from "framer-motion";
import { UnitData } from "@/lib/unit-01-data";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useGrammarProgress } from "@/lib/progress";

interface Props {
  data: UnitData;
}

function MindMapTree({ text }: { text: string }) {
  const lines = text.split("\n").filter((l) => l.trim());
  const nodes: { depth: number; text: string; isRoot: boolean }[] = [];

  for (const line of lines) {
    const indent = line.search(/\S/);
    const depth = Math.floor(indent / 2);
    const cleanText = line.trim().replace(/^[├└│─\s]+/, "").replace(/^\*+\s*/, "");
    nodes.push({ depth, text: cleanText, isRoot: depth === 0 });
  }

  const renderNodes = (nodes: { depth: number; text: string; isRoot: boolean }[], startIdx: number, parentDepth: number): { element: React.ReactNode; nextIdx: number } => {
    const items: React.ReactNode[] = [];
    let idx = startIdx;

    while (idx < nodes.length) {
      const node = nodes[idx];
      if (node.depth < parentDepth) break;
      if (node.depth > parentDepth) {
        const result = renderNodes(nodes, idx, node.depth);
        items.push(
          <ul key={`sub-${idx}`} className="ml-4 border-l-2 border-purple-200 dark:border-purple-700 pl-3 mt-1">
            {result.element}
          </ul>
        );
        idx = result.nextIdx;
      } else {
        const isRoot = node.isRoot;
        items.push(
          <li key={idx} className="py-0.5">
            <span
              className={`text-sm ${
                isRoot
                  ? "font-bold text-purple-700 dark:text-purple-300 text-base"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {isRoot ? "🔹 " : "• "}
              {node.text}
            </span>
          </li>
        );
        idx++;
      }
    }

    return { element: items, nextIdx: idx };
  };

  const result = renderNodes(nodes, 0, 0);

  return (
    <div className="p-4">
      <ul className="space-y-0.5">{result.element}</ul>
    </div>
  );
}

export default function StepSummary({ data }: Props) {
  const { summary } = data;
  const { markUnitCompleted } = useGrammarProgress();
  const [quizAnswers, setQuizAnswers] = useState<(string | null)[]>(
    new Array(summary.selfTest.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const selectAnswer = (questionIndex: number, answer: string) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);
  };

  const correctCount = quizAnswers.filter(
    (a, i) => a === summary.selfTest[i].answer
  ).length;
  const masteryThreshold = Math.ceil(summary.selfTest.length * 0.8);
  const hasReachedMastery = correctCount >= masteryThreshold;

  useEffect(() => {
    if (showResults && hasReachedMastery) {
      markUnitCompleted(data.info.id);
      if (correctCount === summary.selfTest.length) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6"],
        });
      }
    }
  }, [showResults, hasReachedMastery, correctCount, summary.selfTest.length, markUnitCompleted, data.info.id]);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg text-sm">
            📋
          </span>
          核心要点
        </h3>
        <div className="space-y-3">
          {summary.keyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800/30"
            >
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
                  {i + 1}
                </span>
                {point.title}
              </h4>
              <ul className="space-y-1.5 ml-8">
                {point.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-700 dark:text-gray-300 relative before:content-['•'] before:absolute before:-left-4 before:text-blue-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 rounded-lg text-sm">
            🗺️
          </span>
          思维导图
        </h3>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/30 overflow-hidden">
          <MindMapTree text={summary.mindMap} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 rounded-lg text-sm">
            ✅
          </span>
          自测题
        </h3>
        <div className="space-y-4">
          {summary.selfTest.map((q, qi) => (
            <motion.div
              key={qi}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + qi * 0.08 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800/30"
            >
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-3 flex items-start gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-emerald-500 text-white rounded-full text-xs flex-shrink-0 mt-0.5">
                  {qi + 1}
                </span>
                {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-8">
                {q.options.map((opt, oi) => {
                  const isSelected = quizAnswers[qi] === opt;
                  const isCorrect = q.answer === opt;
                  let style =
                    "p-3 rounded-xl text-sm cursor-pointer transition-all border-2 text-left ";
                  if (showResults) {
                    if (isCorrect) {
                      style += "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400 text-emerald-800 dark:text-emerald-200";
                    } else if (isSelected && !isCorrect) {
                      style += "bg-red-100 dark:bg-red-900/30 border-red-400 text-red-800 dark:text-red-200";
                    } else {
                      style += "bg-white dark:bg-gray-800 border-transparent text-gray-500 dark:text-gray-500";
                    }
                  } else {
                    style += isSelected
                      ? "bg-blue-100 dark:bg-blue-900/30 border-blue-400 text-blue-800 dark:text-blue-200 shadow-sm"
                      : "bg-white dark:bg-gray-800 border-transparent text-gray-700 dark:text-gray-300 hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10";
                  }
                  return (
                    <button
                      key={oi}
                      onClick={() => !showResults && selectAnswer(qi, opt)}
                      className={style}
                      disabled={showResults}
                    >
                      <span className="font-bold mr-1">{String.fromCharCode(65 + oi)}.</span> {opt}
                    </button>
                  );
                })}
              </div>
              {showResults && (
                <p className={`ml-8 mt-3 rounded-lg px-3 py-2 text-xs leading-5 ${
                  quizAnswers[qi] === q.answer
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                }`}>
                  {quizAnswers[qi] === q.answer
                    ? "答对了。请再用一句话说出你的判断依据。"
                    : `正确答案：${q.answer}。先回到“辨析”定位错误原因，再重新作答。`}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={quizAnswers.some((a) => a === null)}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-emerald-500/20"
            >
              提交答案
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
            >
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                得分：{correctCount}/{summary.selfTest.length}
                {correctCount === summary.selfTest.length
                  ? " 🎉 满分！"
                  : hasReachedMastery
                  ? " ✅ 本轮达标"
                  : " 🔁 还需要一次针对性复习"}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
                {hasReachedMastery
                  ? "现在请完成一个不看示例的自主造句，并在 24 小时后重新测试。隔天仍能答对，才更接近长期掌握。"
                  : `本轮达标线是 ${masteryThreshold}/${summary.selfTest.length}。不要立刻反复刷同一套题：先查看错题对应的讲解或辨析，解释错误原因后再重测。`}
              </p>
            </motion.div>
          )}
          {showResults && (
            <button
              onClick={() => {
                setQuizAnswers(new Array(summary.selfTest.length).fill(null));
                setShowResults(false);
              }}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
            >
              重新测试
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

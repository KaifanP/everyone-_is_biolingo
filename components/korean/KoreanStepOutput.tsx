"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KoreanLesson, KoreanOralResponse, KoreanSentenceCreation } from "@/lib/korean-types";

interface Props {
  data: KoreanLesson;
  onComplete?: (score: number) => void;
}

function isOralResponse(task: KoreanOralResponse | KoreanSentenceCreation): task is KoreanOralResponse {
  return task.type === "oral-response";
}

export default function KoreanStepOutput({ data, onComplete }: Props) {
  const task = data.outputTask;
  const [phase, setPhase] = useState<"intro" | "doing" | "compare" | "done">("intro");
  const [selfScore, setSelfScore] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const [draft, setDraft] = useState("");

  if (!task) return null;

  const oral = isOralResponse(task);
  const instructions = task.instructions;
  const instructionsEn = task.instructionsEn;

  function handleStart() {
    setPhase("doing");
  }

  function handleShowAnswer() {
    setPhase("compare");
  }

  function handleSubmitScore() {
    setPhase("done");
    onComplete?.(selfScore);
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/40 rounded-lg text-sm">
            🗣️
          </span>
          输出任务
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {instructionsEn}
        </p>

        <AnimatePresence mode="wait">
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-800/30"
            >
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                {instructions}
              </p>

              {oral ? (
                <div className="space-y-3 mb-5">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    请尝试包含以下关键词：
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(task as KoreanOralResponse).keyPhrases.map((phrase, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                      >
                        {phrase}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      目标语法：
                    </p>
                    <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-bold">
                      {(task as KoreanSentenceCreation).targetGrammar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      请尝试使用以下词汇：
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(task as KoreanSentenceCreation).keyWords.map((word, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      任务提示：
                    </p>
                    <ul className="space-y-1">
                      {(task as KoreanSentenceCreation).prompts.map((p, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-orange-400">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={handleStart}
                className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
              >
                开始
              </button>
            </motion.div>
          )}

          {phase === "doing" && (
            <motion.div
              key="doing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-800/30"
            >
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎤</div>
                <p className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {oral ? "大声说出来吧！" : "写下你的句子！"}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  {oral ? "对着手机/电脑练习口语" : "在纸上或输入框中写出句子"}
                </p>

                {!oral && (
                  <textarea
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    aria-label="输入你的韩语句子"
                    className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none focus:ring-2 focus:ring-orange-300 focus:border-transparent mb-4"
                    rows={4}
                    placeholder="在这里写下你的句子..."
                  />
                )}

                <button
                  type="button"
                  onClick={handleShowAnswer}
                  disabled={!oral && !draft.trim()}
                  className="py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {oral ? "我说完了，看参考答案" : "我写好了，看参考答案"}
                </button>
              </div>
            </motion.div>
          )}

          {phase === "compare" && (
            <motion.div
              key="compare"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-orange-100 dark:border-orange-800/30"
            >
              {!oral && draft.trim() && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">你的答案：</p>
                  <p className="rounded-xl border border-orange-200 dark:border-orange-800/40 bg-orange-100/60 dark:bg-orange-900/20 p-4 text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                    {draft}
                  </p>
                </div>
              )}

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                参考答案：
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
                {oral ? (
                  <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                    {(task as KoreanOralResponse).sampleAnswer}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {(task as KoreanSentenceCreation).sampleAnswers.map((ans, i) => (
                      <p key={i} className="text-gray-800 dark:text-gray-200">
                        <span className="text-xs text-gray-400 mr-2">Q{i + 1}:</span>
                        {ans}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-6 rounded-xl bg-white/70 dark:bg-gray-800/70 p-4 text-sm text-gray-700 dark:text-gray-300">
                <p className="font-bold mb-2">对照检查</p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>{oral ? "是否表达完整、能让对方听懂" : "句意是否完整、自然"}</li>
                  <li>{oral ? "是否使用了至少一个提示短语" : "是否使用了目标语法"}</li>
                  <li>{oral ? "发音和节奏是否清楚" : "助词、词尾和拼写是否正确"}</li>
                </ul>
              </div>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                自我评估：你完成得怎么样？
              </p>
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} 星`}
                    aria-pressed={selfScore === star}
                    onMouseEnter={() => setHoverStar(star)}
                    onMouseLeave={() => setHoverStar(0)}
                    onClick={() => setSelfScore(star)}
                    className="text-3xl transition-transform hover:scale-110"
                  >
                    {star <= (hoverStar || selfScore) ? "⭐" : "☆"}
                  </button>
                ))}
              </div>
              {selfScore > 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {selfScore <= 2
                      ? "没关系，多练习就好了！明天再来复习巩固一下。"
                      : selfScore <= 3
                      ? "还不错，继续加油！"
                      : "很棒！你已经能运用所学知识了！"}
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmitScore}
                    className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                  >
                    完成
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800/30 text-center"
            >
              <div className="text-4xl mb-3">
                {selfScore >= 4 ? "🎉" : selfScore >= 3 ? "👍" : "💪"}
              </div>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                {selfScore >= 4
                  ? "输出任务完成！"
                  : selfScore >= 3
                  ? "不错的尝试！"
                  : "继续练习，你会越来越好的！"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                明天再来复习巩固，才能真正掌握。
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UnitData } from "@/lib/unit-01-data";
import { useState } from "react";

interface Props {
  data: UnitData;
}

export default function StepPractice({ data }: Props) {
  const { practice } = data;
  const [activeExercise, setActiveExercise] = useState(0);
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());

  const toggleAnswer = (index: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const currentExercise = practice[activeExercise];

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
          练习
        </h3>
        <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-100">
          <strong>先检索，再核对：</strong>请先在纸上或心里完整作答，再打开答案。卡住时至少坚持回想 10 秒；这种“费力感”正是记忆在加深。
        </div>
        <div className="flex gap-2 mb-6 flex-wrap">
          {practice.map((ex, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveExercise(i);
                setRevealedAnswers(new Set());
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                activeExercise === i
                  ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700"
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeExercise}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800/30">
            <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-1">
              {currentExercise.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              {currentExercise.titleEn}
            </p>
            <div className="space-y-4">
              {currentExercise.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
                >
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 text-white rounded-full text-xs font-bold mr-2">
                      {i + 1}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item.question }} />
                  </p>
                  <button
                    onClick={() => toggleAnswer(i)}
                    className={`text-sm px-3 py-1.5 rounded-lg transition-all ${
                      revealedAnswers.has(i)
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                    }`}
                  >
                    {revealedAnswers.has(i) ? "🔽 收起答案" : "✓ 我已作答，核对答案"}
                  </button>
                  <AnimatePresence>
                    {revealedAnswers.has(i) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
                          <p
                            className="text-sm text-gray-700 dark:text-gray-300"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                          <p className="mt-2 text-xs leading-5 text-emerald-700 dark:text-emerald-300">
                            核对后请再问自己：我的答案错在规则、形式，还是没有读懂语境？只改答案，不找原因，下一次还会在同一处出错。
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

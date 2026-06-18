"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UnitData } from "@/lib/unit-01-data";

interface Props {
  data: UnitData;
}

export default function StepLeadIn({ data }: Props) {
  const { leadIn } = data;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg text-sm">
            💡
          </span>
          思考题
        </h3>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            请看以下句子，思考它们的区别：
          </p>
          <div className="space-y-3 mb-5">
            {leadIn.thinkQuestions.sentences.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="pl-4 border-l-4 border-blue-400 dark:border-blue-500"
              >
                <p
                  className="text-lg font-medium text-gray-800 dark:text-gray-200"
                  dangerouslySetInnerHTML={{ __html: s }}
                />
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {showAnswer ? "隐藏答案" : "查看答案"}
          </button>
          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-800/30">
                  <p className="font-semibold text-green-600 dark:text-green-400 mb-2">
                    ✅ 答案：
                  </p>
                  <p
                    className="text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: leadIn.thinkQuestions.answer }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 rounded-lg text-sm">
            🔄
          </span>
          中文 vs 英文
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-5 border border-orange-100 dark:border-orange-800/30"
          >
            <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-2">
              🇨🇳 中文
            </h4>
            <div className="space-y-2">
              {leadIn.comparison.chinese.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-xs text-orange-500 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/40 px-2 py-0.5 rounded mt-0.5 flex-shrink-0">
                    {item.note}
                  </span>
                  <span className="text-gray-800 dark:text-gray-200 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-5 border border-green-100 dark:border-green-800/30"
          >
            <h4 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
              🇬🇧 英文
            </h4>
            <div className="space-y-2">
              {leadIn.comparison.english.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-xs text-green-500 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded mt-0.5 flex-shrink-0">
                    {item.note}
                  </span>
                  <span
                    className="text-gray-800 dark:text-gray-200 text-sm"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30"
        >
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
            💡{" "}
            <span
              dangerouslySetInnerHTML={{ __html: leadIn.comparison.conclusion }}
            />
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

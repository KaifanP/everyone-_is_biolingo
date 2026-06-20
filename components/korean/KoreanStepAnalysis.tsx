"use client";

import { motion } from "framer-motion";
import { KoreanLesson } from "@/lib/korean-types";

interface Props {
  data: KoreanLesson;
}

export default function KoreanStepAnalysis({ data }: Props) {
  const { analysis } = data;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900/40 rounded-lg text-sm">
            ⚠️
          </span>
          常见错误
        </h3>
      </motion.div>

      <div className="space-y-4">
        {analysis.commonErrors.map((err, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-5 border border-red-100 dark:border-red-800/30"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-red-200 dark:border-red-800/30">
                <p className="text-xs text-red-500 font-medium mb-1 flex items-center gap-1">
                  <span>✗</span> 错误
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {err.wrong}
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-800/30">
                <p className="text-xs text-green-500 font-medium mb-1 flex items-center gap-1">
                  <span>✓</span> 正确
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {err.correct}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 rounded-lg px-3 py-2">
              💡 {err.reason}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg text-sm">
            🎯
          </span>
          关键问题
        </h3>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-5 border border-blue-100 dark:border-blue-800/30">
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            做选择时，问自己以下问题：
          </p>
          <div className="space-y-2">
            {analysis.keyQuestions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-blue-50 dark:border-blue-900/20"
              >
                <span className="w-7 h-7 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-800 dark:text-gray-200">{q}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

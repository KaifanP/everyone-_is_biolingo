"use client";

import { motion } from "framer-motion";
import { KoreanLesson } from "@/lib/korean-types";

interface Props {
  data: KoreanLesson;
}

export default function KoreanStepWarmup({ data }: Props) {
  const { warmup } = data;
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 rounded-lg text-sm">
            🔥
          </span>
          热身思考
        </h3>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800/30">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            先思考以下问题：
          </p>
          <div className="space-y-3 mb-5">
            {warmup.questions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="pl-4 border-l-4 border-indigo-400 dark:border-indigo-500"
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {q}
                </p>
              </motion.div>
            ))}
          </div>
          {warmup.culturalNote && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">
                🇰🇷 文化小知识
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                {warmup.culturalNote}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

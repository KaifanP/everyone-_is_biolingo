"use client";

import { motion } from "framer-motion";
import { KoreanLesson } from "@/lib/korean-types";
import { useState } from "react";

interface Props {
  data: KoreanLesson;
}

export default function KoreanStepGrammar({ data }: Props) {
  const { grammar } = data;
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 rounded-lg text-sm">
            📖
          </span>
          语法拆解
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {grammar.points.map((point, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.04 }}
            onClick={() => setActivePoint(activePoint === i ? null : i)}
            className={`p-4 rounded-xl text-left transition-all duration-300 border ${
              activePoint === i
                ? "bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700 shadow-md"
                : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-sm"
            }`}
          >
            <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
              {point.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {point.nameEn}
            </p>
            <p className="text-xs mt-1.5 text-purple-600 dark:text-purple-400">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-1.5 py-0.5 rounded">
                {point.structure}
              </code>
            </p>
          </motion.button>
        ))}
      </div>

      {activePoint !== null && (
        <motion.div
          key={activePoint}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800/30"
        >
          <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-1 text-lg">
            {grammar.points[activePoint].name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {grammar.points[activePoint].nameEn}
          </p>
          <p className="text-sm mb-4">
            <code className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-lg">
              {grammar.points[activePoint].structure}
            </code>
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            <strong>含义：</strong>{grammar.points[activePoint].meaning}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            <strong>用法：</strong>{grammar.points[activePoint].usage}
          </p>

          {grammar.points[activePoint].chineseTransfer && (
            <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">
                🇨🇳 中文迁移提示
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-200">
                {grammar.points[activePoint].chineseTransfer}
              </p>
            </div>
          )}

          <div className="space-y-2">
            {grammar.points[activePoint].examples.map((ex, ei) => (
              <div
                key={ei}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-purple-100 dark:border-purple-900/20"
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {ex.korean}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {ex.chinese}
                </p>
                {ex.note && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {ex.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { UnitData } from "@/lib/unit-01-data";
import { useState } from "react";

interface Props {
  data: UnitData;
}

export default function StepProduction({ data }: Props) {
  const { production } = data;
  const [revealedExamples, setRevealedExamples] = useState<Set<number>>(new Set());

  const toggleExample = (index: number) => {
    setRevealedExamples((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/40 rounded-lg text-sm">
            🎯
          </span>
          产出任务
        </h3>
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm leading-6 text-orange-900 dark:border-orange-800/50 dark:bg-orange-950/30 dark:text-orange-100">
          <strong>先独立表达：</strong>示例只用于最后核对，不是抄写模板。请先完成自己的版本，并尝试说出“我为什么选这个结构”。
        </div>
      </motion.div>

      {production.map((task, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-5 border border-orange-100 dark:border-orange-800/30"
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold text-sm flex-shrink-0">
              {i + 1}
            </span>
            <div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300">
                {task.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {task.titleEn}
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
            {task.description}
          </p>
          <div className="mb-4 grid gap-2 rounded-xl bg-white/70 p-4 text-xs text-gray-700 dark:bg-gray-800/70 dark:text-gray-300 sm:grid-cols-3">
            <span>□ 结构是否完整？</span>
            <span>□ 语境是否匹配？</span>
            <span>□ 能否解释选择理由？</span>
          </div>
          <button
            onClick={() => toggleExample(i)}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-700 ring-1 ring-orange-200 transition hover:bg-orange-100 dark:bg-gray-800 dark:text-orange-300 dark:ring-orange-800"
          >
            {revealedExamples.has(i) ? "收起参考示例" : "我已完成，查看参考示例"}
          </button>
          {revealedExamples.has(i) && (
            <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-orange-100 dark:border-orange-900/20">
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-3 flex items-center gap-1">
                💡 参考示例（答案可以不同）
              </p>
              <div className="space-y-2">
                {task.example.map((ex, ei) => (
                  <motion.p
                    key={ei}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: ei * 0.08 }}
                    className="text-sm text-gray-700 dark:text-gray-300 pl-3 border-l-2 border-orange-300 dark:border-orange-600"
                    dangerouslySetInnerHTML={{ __html: ex }}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

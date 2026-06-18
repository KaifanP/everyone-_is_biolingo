"use client";

import { motion, AnimatePresence } from "framer-motion";
import { UnitData } from "@/lib/unit-01-data";
import { useState } from "react";

interface Props {
  data: UnitData;
}

const MODULE_LABELS: Record<string, { title: string; leftTitle: string; rightTitle: string; leftDesc: string; rightDesc: string; matrixTitle: string; detailTitle: string; timeWordsLabel: string }> = {
  "01": { title: "📖 时态的本质：时间 + 体态", leftTitle: "⏰ 时间（Time）", rightTitle: "🔄 体态（Aspect）", leftDesc: "动作发生在什么时候？", rightDesc: "动作处于什么状态？", matrixTitle: "📊 时态矩阵图", detailTitle: "📝 12种时态详解", timeWordsLabel: "⏰ 时间标志词：" },
  "02": { title: "📖 情态动词的特性", leftTitle: "📋 核心特性", rightTitle: "🎯 用法分类", leftDesc: "情态动词的基本规则", rightDesc: "情态动词表达什么？", matrixTitle: "📊 情态动词功能总览", detailTitle: "📝 情态动词详解", timeWordsLabel: "📌 " },
  "03": { title: "📖 从句的核心概念", leftTitle: "📋 核心概念", rightTitle: "🎯 从句类型与功能", leftDesc: "从句的基本概念", rightDesc: "从句充当什么成分？", matrixTitle: "📊 从句对比总览", detailTitle: "📝 从句用法详解", timeWordsLabel: "📌 " },
  "04": { title: "📖 被动语态与间接引语", leftTitle: "📋 基本结构", rightTitle: "🎯 使用场景", leftDesc: "被动语态和间接引语的构成", rightDesc: "什么时候用被动/间接引语？", matrixTitle: "📊 语态与时态矩阵", detailTitle: "📝 语态用法详解", timeWordsLabel: "📌 " },
  "05": { title: "📖 非谓语动词的核心", leftTitle: "📋 基本形式", rightTitle: "🎯 句法功能", leftDesc: "不定式、动名词、分词的形式", rightDesc: "非谓语动词充当什么成分？", matrixTitle: "📊 非谓语形式对比", detailTitle: "📝 非谓语动词详解", timeWordsLabel: "📌 " },
  "06": { title: "📖 特殊句式的奥秘", leftTitle: "📋 基本原理", rightTitle: "🎯 修辞效果", leftDesc: "倒装、强调、省略的规则", rightDesc: "特殊句式增强表达效果", matrixTitle: "📊 句式类型总览", detailTitle: "📝 句式用法详解", timeWordsLabel: "📌 " },
  "07": { title: "📖 词性与搭配基础", leftTitle: "📋 基本含义", rightTitle: "🎯 常见搭配", leftDesc: "介词和连词的用法", rightDesc: "词性的固定搭配规则", matrixTitle: "📊 词性转换总览", detailTitle: "📝 搭配规则详解", timeWordsLabel: "📌 " },
};

export default function StepExplanation({ data }: Props) {
  const { explanation } = data;
  const [activeTense, setActiveTense] = useState<number | null>(null);
  const labels = MODULE_LABELS[data.info.moduleId] || MODULE_LABELS["01"];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg text-sm">
            📖
          </span>
          {labels.title.replace("📖 ", "")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-5 border border-blue-100 dark:border-blue-800/30"
          >
            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
              {labels.leftTitle}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              {labels.leftDesc}
            </p>
            <div className="space-y-2">
              {explanation.essence.time.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-blue-50 dark:border-blue-900/20"
                >
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    {item.description}
                  </p>
                  <p
                    className="text-xs mt-1.5 text-blue-600 dark:text-blue-400 font-medium"
                    dangerouslySetInnerHTML={{ __html: item.example }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-5 border border-purple-100 dark:border-purple-800/30"
          >
            <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
              {labels.rightTitle}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              {labels.rightDesc}
            </p>
            <div className="space-y-2">
              {explanation.essence.aspect.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-purple-50 dark:border-purple-900/20"
                >
                  <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    {item.description}
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-1.5 font-medium">
                    重点：{item.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 rounded-lg text-sm">
            📊
          </span>
          {labels.matrixTitle.replace("📊 ", "")}
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30">
                <th className="p-3 text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-emerald-200 dark:border-emerald-800/30 bg-emerald-50/50 dark:bg-emerald-900/10"></th>
                {explanation.matrix.headers.filter(Boolean).map((h, i) => (
                  <th
                    key={i}
                    className="p-3 text-sm font-semibold text-gray-800 dark:text-gray-200 border-b border-emerald-200 dark:border-emerald-800/30"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {explanation.matrix.rows.map((row, ri) => (
                <motion.tr
                  key={ri}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + ri * 0.08 }}
                  className="bg-white dark:bg-gray-800/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors"
                >
                  <td className="p-3 font-semibold text-gray-800 dark:text-gray-200 border-b border-emerald-100 dark:border-emerald-800/20 bg-emerald-50/50 dark:bg-emerald-900/10 text-sm">
                    {row.time}
                  </td>
                  {row.forms.map((form, fi) => (
                    <td
                      key={fi}
                      className="p-3 text-sm text-center text-gray-700 dark:text-gray-300 border-b border-emerald-100 dark:border-emerald-800/20"
                    >
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">
                        {form}
                      </code>
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/40 rounded-lg text-sm">
            📝
          </span>
          {labels.detailTitle.replace("📝 ", "")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {explanation.tenses.map((tense, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.04 }}
              onClick={() => setActiveTense(activeTense === i ? null : i)}
              className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                activeTense === i
                  ? "bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700 shadow-md"
                  : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 hover:shadow-sm"
              }`}
            >
              <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                {tense.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {tense.nameEn}
              </p>
              <p className="text-xs mt-1.5 text-orange-600 dark:text-orange-400">
                <code className="bg-orange-100 dark:bg-orange-900/30 px-1.5 py-0.5 rounded">
                  {tense.structure}
                </code>
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {activeTense !== null && (
            <motion.div
              key={activeTense}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl border border-orange-200 dark:border-orange-800/30"
            >
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-1 text-lg">
                {explanation.tenses[activeTense].name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {explanation.tenses[activeTense].nameEn}
              </p>
              <p className="text-sm mb-4">
                <code className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-lg">
                  {explanation.tenses[activeTense].structure}
                </code>
              </p>
              <div className="space-y-2">
                {explanation.tenses[activeTense].usages.map((usage, ui) => (
                  <div
                    key={ui}
                    className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-orange-100 dark:border-orange-900/20"
                  >
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {usage.label}
                    </p>
                    <p
                      className="text-sm text-gray-600 dark:text-gray-400 mt-0.5"
                      dangerouslySetInnerHTML={{ __html: usage.example }}
                    />
                  </div>
                ))}
              </div>
              {explanation.tenses[activeTense].timeWords && (
                <p className="mt-3 text-sm text-orange-600 dark:text-orange-400 font-medium">
                  {labels.timeWordsLabel}
                  {explanation.tenses[activeTense].timeWords}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

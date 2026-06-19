"use client";

import { motion } from "framer-motion";
import { UnitData } from "@/lib/unit-01-data";

interface Props {
  data: UnitData;
}

const ANALYSIS_SECTION_LABELS: Record<string, { title: string; description: string }> = {
  "01": {
    title: "动词意义与体态速查",
    description: "先判断动词在当前语境中表达状态还是动作；部分动词会随意义改变用法，不能只背“永远不用进行时”。",
  },
  "02": {
    title: "情态结构与功能速查",
    description: "把形式、语气强度和使用场合放在一起比较，避免只按中文逐词替换。",
  },
  "03": {
    title: "从句结构速查",
    description: "先判断从句在整句中的功能，再检查引导词、语序和句子成分。",
  },
  "04": {
    title: "转换规则速查",
    description: "转换时同时追踪表达焦点、时态、人称与时间视角，不做机械替换。",
  },
  "05": {
    title: "非谓语结构速查",
    description: "先找句子谓语，再判断非谓语的形式、功能以及它与逻辑主语的关系。",
  },
  "06": {
    title: "特殊句式结构速查",
    description: "先还原常规语序和核心意思，再判断结构变化带来的强调或语气效果。",
  },
  "07": {
    title: "搭配与用法速查",
    description: "把介词、连词、冠词等放进完整搭配和语境中记忆，不用孤立中文释义硬套。",
  },
};

export default function StepAnalysis({ data }: Props) {
  const { analysis } = data;
  const sectionLabel = ANALYSIS_SECTION_LABELS[data.info.moduleId] ?? ANALYSIS_SECTION_LABELS["01"];

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
          中文母语者常见问题
        </h3>
        <div className="space-y-4">
          {analysis.commonErrors.map((err, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-5 border border-red-100 dark:border-red-800/30"
            >
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">
                  {i + 1}
                </span>
                {err.title}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-red-200 dark:border-red-800/30">
                  <p className="text-xs text-red-500 font-medium mb-1 flex items-center gap-1">
                    <span>✗</span> 错误
                  </p>
                  <p
                    className="text-sm text-gray-800 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: err.wrong }}
                  />
                </div>
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-800/30">
                  <p className="text-xs text-green-500 font-medium mb-1 flex items-center gap-1">
                    <span>✓</span> 正确
                  </p>
                  <p
                    className="text-sm text-gray-800 dark:text-gray-200"
                    dangerouslySetInnerHTML={{ __html: err.correct }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 rounded-lg px-3 py-2">
                💡 {err.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 rounded-lg text-sm">
            🎯
          </span>
          选择的关键问题
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 rounded-lg text-sm">
            🚫
          </span>
          {sectionLabel.title}
        </h3>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-5 border border-purple-100 dark:border-purple-800/30">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm font-medium">
            {sectionLabel.description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {analysis.stateVerbs.categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-purple-100 dark:border-purple-800/20"
              >
                <p className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {cat.label}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {cat.verbs.join(", ")}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-purple-100 dark:border-purple-800/20 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
              <p
                className="text-sm text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: analysis.stateVerbs.example.wrong }}
              />
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
              <p
                className="text-sm text-gray-800 dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: analysis.stateVerbs.example.correct }}
              />
            </div>
            <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg px-3 py-2">
              💡 {analysis.stateVerbs.example.note}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

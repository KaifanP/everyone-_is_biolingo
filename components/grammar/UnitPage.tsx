"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { UnitData } from "@/lib/unit-01-data";
import { STEP_LABELS } from "@/lib/grammar-data";
import StepNav from "./StepNav";
import StepLeadIn from "./StepLeadIn";
import StepExplanation from "./StepExplanation";
import StepAnalysis from "./StepAnalysis";
import StepPractice from "./StepPractice";
import StepProduction from "./StepProduction";
import StepSummary from "./StepSummary";

interface Props {
  data: UnitData;
  moduleTitle: string;
}

const stepComponents = [
  StepLeadIn,
  StepExplanation,
  StepAnalysis,
  StepPractice,
  StepProduction,
  StepSummary,
];

const stepPurposes = [
  "先预测与观察，激活你已经知道的内容。",
  "建立可解释的规则模型，不只记公式。",
  "对比易混形式，理解错误为什么发生。",
  "闭卷作答后再核对，用检索强化记忆。",
  "在新语境中自主表达，检验能否迁移。",
  "完成自测并安排复习，确认真正掌握。",
];

export default function UnitPage({ data, moduleTitle }: Props) {
  const [currentStep, setCurrentStep] = useState(0);

  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/grammar"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center gap-1 w-fit"
          >
            ← 返回课程概览
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {moduleTitle}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            第{data.info.number}单元：{data.info.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {data.info.titleEn}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">约 20–30 分钟</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">先预测，再看讲解</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">自测 80% 为本轮达标</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30"
        >
          <h2 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">
            🎯 本单元要解决的任务
          </h2>
          <ul className="space-y-2">
            {data.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-blue-200/70 pt-4 dark:border-blue-800/50">
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">怎样算学会？</p>
            <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">
              不看讲解完成关键练习；自测至少答对 80%；最后能自己造出 2 个例句，并说出选择该结构的理由。
            </p>
          </div>
        </motion.div>

        <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-4 mb-6 border-b border-gray-100 dark:border-gray-800">
          <StepNav currentStep={currentStep} onStepChange={setCurrentStep} />
          <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
            {stepPurposes[currentStep]}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentStepComponent data={data} />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            ← {STEP_LABELS[Math.max(0, currentStep - 1)]?.label}
          </button>
          <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
            {currentStep + 1} / {STEP_LABELS.length}
          </span>
          <button
            onClick={() =>
              setCurrentStep(Math.min(STEP_LABELS.length - 1, currentStep + 1))
            }
            disabled={currentStep === STEP_LABELS.length - 1}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm shadow-blue-500/20"
          >
            {STEP_LABELS[Math.min(STEP_LABELS.length - 1, currentStep + 1)]?.label} →
          </button>
        </div>
      </div>
    </main>
  );
}

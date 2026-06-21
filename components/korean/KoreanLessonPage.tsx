"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { KoreanLesson, KOREAN_STEP_LABELS, MistakeSourceType } from "@/lib/korean-types";
import { useKoreanProgress } from "@/lib/korean-progress";
import KoreanStepNav from "./KoreanStepNav";
import KoreanStepWarmup from "./KoreanStepWarmup";
import KoreanStepInput from "./KoreanStepInput";
import KoreanStepGrammar from "./KoreanStepGrammar";
import KoreanStepAnalysis from "./KoreanStepAnalysis";
import KoreanStepPractice from "./KoreanStepPractice";
import KoreanStepOutput from "./KoreanStepOutput";
import KoreanStepSummary from "./KoreanStepSummary";
import KoreanMockTest from "./KoreanMockTest";

interface Props {
  data: KoreanLesson;
  moduleTitle: string;
}

const BASE_STEP_COMPONENTS = [
  KoreanStepWarmup,
  KoreanStepInput,
  KoreanStepGrammar,
  KoreanStepAnalysis,
  KoreanStepPractice,
];

const BASE_STEP_PURPOSES = [
  "先预测与观察，激活你已经知道的内容。",
  "通过对话和词汇建立语言输入。",
  "建立可解释的语法模型，不只记公式。",
  "对比易混形式，理解错误为什么发生。",
  "闭卷作答后再核对，用检索强化记忆。",
];

export default function KoreanLessonPage({ data, moduleTitle }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const { recordMistake } = useKoreanProgress();

  const hasOutput = !!data.outputTask;
  const hasMockTest = !!data.mockTest;

  // Build step list dynamically: base(5) + output?(1) + summary(1) + mockTest?(1)
  const stepLayout = useMemo(() => {
    const steps: { key: string; purpose: string }[] = [];
    for (let i = 0; i < BASE_STEP_COMPONENTS.length; i++) {
      steps.push({ key: KOREAN_STEP_LABELS[i].key, purpose: BASE_STEP_PURPOSES[i] });
    }
    if (hasOutput) {
      steps.push({ key: "output", purpose: "用韩语表达，检验真正的掌握程度。" });
    }
    steps.push({ key: "summary", purpose: "完成自测并安排复习，确认真正掌握。" });
    if (hasMockTest) {
      steps.push({ key: "mockTest", purpose: "在限定时间内完成模拟测试，检验学习成果。" });
    }
    return steps;
  }, [hasOutput, hasMockTest]);

  const totalSteps = stepLayout.length;

  const handlePracticeResult = useCallback((result: { question: string; userAnswer: string; correctAnswer: string; isCorrect: boolean; exerciseType: string; options?: string[]; exerciseIndex?: number; itemIndex?: number; matchingWrongPairs?: { left: string; right: string }[]; originalExercise?: import("@/lib/korean-types").KoreanExercise }) => {
    const hasMatchingErrors = result.matchingWrongPairs && result.matchingWrongPairs.length > 0;
    if (!result.isCorrect || hasMatchingErrors) {
      recordMistake(
        data.info.id,
        "practice" as MistakeSourceType,
        result.exerciseType,
        result.question,
        result.userAnswer,
        result.correctAnswer,
        result.options,
        result.exerciseIndex,
        result.itemIndex,
        result.matchingWrongPairs,
        result.originalExercise,
      );
    }
  }, [data.info.id, recordMistake]);

  const handleOutputComplete = useCallback((score: number) => {
    if (score <= 2 && data.outputTask) {
      recordMistake(
        data.info.id,
        "output" as MistakeSourceType,
        data.outputTask.type,
        data.outputTask.instructions,
        `自评${score}分`,
        data.outputTask.type === "oral-response"
          ? (data.outputTask as import("@/lib/korean-types").KoreanOralResponse).sampleAnswer
          : (data.outputTask as import("@/lib/korean-types").KoreanSentenceCreation).sampleAnswers.join("; "),
        undefined,
        999,
        undefined,
        undefined,
        undefined,
        data.outputTask.errorTag,
      );
    }
  }, [data.info.id, data.outputTask, recordMistake]);

  const currentStepKey = stepLayout[currentStep]?.key;

  function renderStep() {
    switch (currentStepKey) {
      case "warmup":
        return <KoreanStepWarmup data={data} />;
      case "input":
        return <KoreanStepInput data={data} />;
      case "grammar":
        return <KoreanStepGrammar data={data} />;
      case "analysis":
        return <KoreanStepAnalysis data={data} />;
      case "practice":
        return <KoreanStepPractice data={data} onResult={handlePracticeResult} />;
      case "output":
        return <KoreanStepOutput data={data} onComplete={handleOutputComplete} />;
      case "summary":
        return <KoreanStepSummary data={data} />;
      case "mockTest":
        return <KoreanMockTest mockTest={data.mockTest!} lessonId={data.info.id} />;
      default:
        return null;
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/korean"
            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm flex items-center gap-1 w-fit"
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
            第{data.info.number}课：{data.info.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {data.info.titleEn}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">约 20–30 分钟</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">先预测，再看讲解</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">自测 80% 为本轮达标</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">隔天复习才算掌握</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/30"
        >
          <h2 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-3">
            🎯 本课要解决的任务
          </h2>
          <ul className="space-y-2">
            {data.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 flex items-center justify-center bg-indigo-500 text-white rounded-full text-xs flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-indigo-200/70 pt-4 dark:border-indigo-800/50">
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">怎样算学会？</p>
            <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">
              不看讲解完成关键练习；自测至少答对 80%；完成输出任务；明天复习仍能答对才算真正掌握。
            </p>
          </div>
        </motion.div>

        <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-4 mb-6 border-b border-gray-100 dark:border-gray-800">
          <KoreanStepNav
            currentStep={currentStep}
            onStepChange={setCurrentStep}
            hasOutput={hasOutput}
            hasMockTest={hasMockTest}
          />
          <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
            {stepLayout[currentStep]?.purpose}
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
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            ← {currentStep > 0 ? stepLayout[currentStep - 1]?.key === "mockTest" ? "模拟测试" : KOREAN_STEP_LABELS.find(l => l.key === stepLayout[currentStep - 1]?.key)?.label ?? "上一步" : "上一步"}
          </button>
          <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">
            {currentStep + 1} / {totalSteps}
          </span>
          <button
            onClick={() => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1))}
            disabled={currentStep === totalSteps - 1}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm shadow-indigo-500/20"
          >
            {currentStep < totalSteps - 1 ? (stepLayout[currentStep + 1]?.key === "mockTest" ? "模拟测试" : KOREAN_STEP_LABELS.find(l => l.key === stepLayout[currentStep + 1]?.key)?.label ?? "下一步") : "完成"} →
          </button>
        </div>
      </div>
    </main>
  );
}

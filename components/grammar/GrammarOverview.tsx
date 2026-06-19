"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { modules } from "@/lib/grammar-data";
import { useGrammarProgress } from "@/lib/progress";

const MODULE_GRADIENTS = [
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
  "from-fuchsia-500 to-rose-600",
];

export default function GrammarOverview() {
  const { completedUnits } = useGrammarProgress();
  const allUnits = modules.flatMap((module) => module.units);
  const recommendedUnit = allUnits.find((unit) => !completedUnits.includes(unit.id)) ?? allUnits[0];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center gap-1 w-fit"
          >
            ← 返回首页
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
            中级英语语法课程
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Intermediate English Grammar Course
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-3">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              7个模块 · 42个单元 · 面向中文母语者
            </p>
            {completedUnits.length > 0 && (
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                <span className="text-emerald-500 text-xs font-bold">
                  已完成 {completedUnits.length} / 42
                </span>
                <div className="w-16 h-1.5 bg-emerald-200 dark:bg-emerald-800/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(completedUnits.length / 42) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-800/40 dark:from-blue-950/30 dark:to-indigo-950/20">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">
              建议学习方式
            </p>
            <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
              每次只学一个单元，用 20–30 分钟走完闭环
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white/80 p-3 dark:bg-gray-900/60">
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300">学习前</p>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">先回答导入问题，不会也先猜；预测会让后面的讲解更容易被记住。</p>
              </div>
              <div className="rounded-xl bg-white/80 p-3 dark:bg-gray-900/60">
                <p className="text-sm font-bold text-violet-700 dark:text-violet-300">学习中</p>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">重点比较容易混淆的选项；练习时先闭卷作答，再核对答案。</p>
              </div>
              <div className="rounded-xl bg-white/80 p-3 dark:bg-gray-900/60">
                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">学习后</p>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">自测达到 80%，并能自己造句解释，才算本轮掌握；隔天再测一次。</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800/80">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {completedUnits.length > 0 ? "继续学习" : "推荐起点"}
            </p>
            <h2 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
              第{recommendedUnit.number}单元 · {recommendedUnit.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {completedUnits.length > 0
                ? "从上次进度继续。若某个模块正是你的薄弱点，也可以直接跳到对应模块。"
                : "第一次学习建议从体系总览开始；先建立地图，再进入具体规则。"}
            </p>
            <Link
              href={`/grammar/${recommendedUnit.id}`}
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              {completedUnits.length > 0 ? "继续这一单元 →" : "开始第一单元 →"}
            </Link>
          </div>
        </motion.section>

        <div className="mb-6 flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">课程地图</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            系统学习请按顺序；针对薄弱点复习时，可根据每个模块的“学会证据”选择。
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((mod, mi) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mi * 0.08 }}
              id={`module-${mod.id}`}
              className="bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-r ${MODULE_GRADIENTS[mi]} p-5`}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-sm">
                    {mod.number}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      模块{mod.number}：{mod.title}
                    </h2>
                    <p className="text-sm text-white/80">
                      {mod.titleEn} · {mod.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4 grid gap-2 rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-900/40 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">学会证据</p>
                    <p className="mt-1 leading-5 text-gray-700 dark:text-gray-300">{mod.learningOutcome}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400">开始前建议</p>
                    <p className="mt-1 leading-5 text-gray-700 dark:text-gray-300">{mod.prerequisite}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mod.units.map((unit, ui) => (
                    <motion.div
                      key={unit.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: mi * 0.08 + ui * 0.03 }}
                    >
                      <Link
                        href={`/grammar/${unit.id}`}
                        className={`block p-4 rounded-xl transition-all group border ${
                          completedUnits.includes(unit.id)
                            ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
                            : "bg-gray-50 dark:bg-gray-700/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1 flex items-center gap-1">
                              第{unit.number}单元
                              {completedUnits.includes(unit.id) && (
                                <span className="text-emerald-500 text-[10px]">
                                  ✅ 已完成
                                </span>
                              )}
                            </p>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {unit.title}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                              {unit.titleEn}
                            </p>
                          </div>
                          <span className="text-gray-300 dark:text-gray-600 group-hover:text-blue-400 dark:group-hover:text-blue-500 transition-colors mt-1">
                            →
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

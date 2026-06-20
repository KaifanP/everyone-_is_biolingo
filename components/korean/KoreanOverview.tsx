"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { koreanModules } from "@/lib/korean-types";
import { useKoreanProgress } from "@/lib/korean-progress";

const MODULE_GRADIENTS = [
  "from-indigo-500 to-purple-600",
  "from-violet-500 to-fuchsia-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
];

export default function KoreanOverview() {
  const { completedLessons, getDueReviews, getLessonProgress } = useKoreanProgress();
  const allLessons = koreanModules.flatMap((module) => module.lessons);
  const recommendedLesson = allLessons.find((lesson) => !completedLessons.includes(lesson.id)) ?? allLessons[0];
  const dueReviews = getDueReviews();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm flex items-center gap-1 w-fit"
          >
            ← 返回首页
          </Link>
          <Link
            href="/korean/credits"
            className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            音频授权
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
            韩语入门课程
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Korean for Beginners · TOPIK I 基础入门
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-3">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              6个模块 · 30课 · 面向中文母语者
            </p>
            {completedLessons.length > 0 && (
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                <span className="text-emerald-500 text-xs font-bold">
                  已完成 {completedLessons.length} / 30
                </span>
                <div className="w-16 h-1.5 bg-emerald-200 dark:bg-emerald-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(completedLessons.length / 30) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {dueReviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800/30"
          >
            <p className="text-sm font-bold text-amber-700 dark:text-amber-300 mb-2">
              📅 今日待复习（{dueReviews.length} 课）
            </p>
            <div className="flex flex-wrap gap-2">
              {dueReviews.map((id) => {
                const lesson = allLessons.find((l) => l.id === id);
                if (!lesson) return null;
                return (
                  <Link
                    key={id}
                    href={`/korean/${id}`}
                    className="text-xs px-3 py-1.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                  >
                    第{lesson.number}课 · {lesson.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 dark:border-indigo-800/40 dark:from-indigo-950/30 dark:to-purple-950/20">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
              建议学习方式
            </p>
            <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
              每次只学一课，用 20–30 分钟走完闭环
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white/80 p-3 dark:bg-gray-900/60">
                <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300">学习前</p>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">先回答导入问题，不会也先猜；预测会让后面的讲解更容易被记住。</p>
              </div>
              <div className="rounded-xl bg-white/80 p-3 dark:bg-gray-900/60">
                <p className="text-sm font-bold text-purple-700 dark:text-purple-300">学习中</p>
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
              {completedLessons.length > 0 ? "继续学习" : "推荐起点"}
            </p>
            <h2 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
              第{recommendedLesson.number}课 · {recommendedLesson.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {completedLessons.length > 0
                ? "从上次进度继续。若某个模块正是你的薄弱点，也可以直接跳到对应模块。"
                : "第一次学习建议从韩文字母开始；先建立地图，再进入具体规则。"}
            </p>
            <Link
              href={`/korean/${recommendedLesson.id}`}
              className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              {completedLessons.length > 0 ? "继续这一课 →" : "开始第一课 →"}
            </Link>
          </div>
        </motion.section>

        <div className="mb-6 flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">课程地图</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            系统学习请按顺序；针对薄弱点复习时，可根据每个模块的「学会证据」选择。
          </p>
        </div>

        <div className="space-y-8">
          {koreanModules.map((mod, mi) => (
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
                  {mod.lessons.map((lesson, li) => {
                    const lessonProgress = getLessonProgress(lesson.id);
                    return (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: mi * 0.08 + li * 0.03 }}
                      >
                        <Link
                          href={`/korean/${lesson.id}`}
                          className={`block p-4 rounded-xl transition-all group border ${
                            completedLessons.includes(lesson.id)
                              ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
                              : "bg-gray-50 dark:bg-gray-700/30 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1 flex items-center gap-1">
                                第{lesson.number}课
                                {completedLessons.includes(lesson.id) && (
                                  <span className="text-emerald-500 text-[10px]">
                                    ✅ 已完成
                                  </span>
                                )}
                                {lessonProgress && lessonProgress.bestScore > 0 && (
                                  <span className="text-indigo-500 text-[10px]">
                                    最佳{lessonProgress.bestScore}/{lessonProgress.totalQuestions}
                                  </span>
                                )}
                              </p>
                              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {lesson.title}
                              </p>
                              <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                                {lesson.titleEn}
                              </p>
                            </div>
                            <span className="text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 dark:group-hover:text-indigo-500 transition-colors mt-1">
                              →
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

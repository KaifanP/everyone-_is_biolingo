"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { koreanModules } from "@/lib/korean-types";
import { useKoreanProgress } from "@/lib/korean-progress";
import { SKILL_CONFIG, type SkillCategory } from "@/lib/korean-progress-core";
import ClientOnly from "@/components/ClientOnly";

const MODULE_GRADIENTS = [
  "from-indigo-500 to-purple-600",
  "from-violet-500 to-fuchsia-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
];

const SKILL_BAR_COLORS: Record<SkillCategory, string> = {
  alphabet: "bg-indigo-500",
  vocabulary: "bg-emerald-500",
  grammar: "bg-blue-500",
  listening: "bg-purple-500",
  reading: "bg-amber-500",
};

export default function KoreanOverview() {
  const {
    completedLessons, getDueReviews, getLessonProgress,
    getUnresolvedMistakes, getStreak, getWeeklyStats, getSkillMasteryStats, getNextStepInfo,
  } = useKoreanProgress();
  const allLessons = koreanModules.flatMap((module) => module.lessons);
  const dueReviews = getDueReviews();
  const masteredCount = allLessons.filter((l) => getLessonProgress(l.id)?.mastered).length;
  const unresolvedMistakes = getUnresolvedMistakes();
  const streak = getStreak();
  const weeklyStats = getWeeklyStats();
  const skillMastery = getSkillMasteryStats();
  const nextStep = getNextStepInfo();

  const lessonLookup: Record<string, (typeof allLessons)[0]> = {};
  for (const l of allLessons) lessonLookup[l.id] = l;

  const nextLessonInfo = nextStep ? lessonLookup[nextStep.lessonId] : null;

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
            语音说明
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
            韩语入门课程
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Korean for Beginners · TOPIK I 基础入门
          </p>
        </motion.div>

        <ClientOnly>
          {/* === Dashboard: Today's Tasks === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              今日任务
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* New lesson */}
              {nextStep?.type === "new" && nextLessonInfo && (
                <Link
                  href={`/korean/${nextStep.lessonId}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all group"
                >
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300">新课</p>
                    <p className="text-xs text-indigo-500 dark:text-indigo-400">
                      第{nextLessonInfo.number}课 · {nextLessonInfo.title}
                    </p>
                  </div>
                  <span className="ml-auto text-indigo-400 group-hover:text-indigo-600 transition-colors">→</span>
                </Link>
              )}

              {/* Due reviews */}
              {dueReviews.length > 0 && (
                <Link
                  href="/korean/review"
                  className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 hover:border-amber-400 dark:hover:border-amber-600 transition-all group"
                >
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="text-sm font-bold text-amber-700 dark:text-amber-300">到期复习</p>
                    <p className="text-xs text-amber-500 dark:text-amber-400">
                      {dueReviews.length} 门课程需要复习
                    </p>
                  </div>
                  <span className="ml-auto text-amber-400 group-hover:text-amber-600 transition-colors">→</span>
                </Link>
              )}

              {/* Unresolved mistakes */}
              {unresolvedMistakes.length > 0 && (
                <Link
                  href="/korean/review"
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 hover:border-red-400 dark:hover:border-red-600 transition-all group"
                >
                  <span className="text-2xl">📝</span>
                  <div>
                    <p className="text-sm font-bold text-red-700 dark:text-red-300">未解决错题</p>
                    <p className="text-xs text-red-500 dark:text-red-400">
                      {unresolvedMistakes.length} 道错题待处理
                    </p>
                  </div>
                  <span className="ml-auto text-red-400 group-hover:text-red-600 transition-colors">→</span>
                </Link>
              )}

              {/* All done */}
              {dueReviews.length === 0 && unresolvedMistakes.length === 0 && nextStep?.type !== "new" && (
                <div className="col-span-full text-center py-6">
                  <div className="text-3xl mb-2">🌟</div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300">今日任务全部完成！</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">继续保持，明天再来复习巩固</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* === Next Step Recommendation === */}
          {nextStep && nextLessonInfo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-2xl border border-indigo-200 dark:border-indigo-800/30"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">
                  {nextStep.type === "new" ? "🚀" : nextStep.type === "mastery" ? "🎯" : nextStep.type === "review" ? "🔄" : "💡"}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300">
                    下一步：第{nextLessonInfo.number}课 · {nextLessonInfo.title}
                  </p>
                  <p className="text-sm text-indigo-600/80 dark:text-indigo-400/80 mt-1">
                    {nextStep.reason}
                  </p>
                  <Link
                    href={`/korean/${nextStep.lessonId}`}
                    className="inline-flex mt-3 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                  >
                    {nextStep.type === "new" ? "开始学习" : "开始复习"} →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* === Streak + Weekly Accuracy === */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center"
            >
              <p className="text-3xl font-bold text-orange-500">{streak}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">连续学习天数</p>
              {streak > 0 && (
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                  {streak >= 7 ? "坚持一周了！" : streak >= 3 ? "连续3天，继续保持！" : "好的开始！"}
                </p>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-center"
            >
              {weeklyStats.total > 0 ? (
                <>
                  <p className="text-3xl font-bold text-emerald-500">
                    {Math.round((weeklyStats.correct / weeklyStats.total) * 100)}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">本周正确率</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                    {weeklyStats.correct}/{weeklyStats.total} 题
                  </p>
                </>
              ) : (
                <>
                  <p className="text-3xl font-bold text-gray-300 dark:text-gray-600">—</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">本周正确率</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">暂无复习记录</p>
                </>
              )}
            </motion.div>
          </div>

          {/* === Skill Mastery === */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              能力掌握度
            </h2>
            <div className="space-y-3">
              {(Object.entries(SKILL_CONFIG) as [SkillCategory, typeof SKILL_CONFIG[SkillCategory]][]).map(([key, config]) => {
                const skill = skillMastery[key];
                return (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-lg w-7 text-center">{config.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {config.label}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {skill.mastered}/{skill.total} 已掌握
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${SKILL_BAR_COLORS[key]}`}
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-500 w-10 text-right">
                      {skill.pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* === Completion Stats === */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {completedLessons.length > 0 && (
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                <span className="text-emerald-500 text-xs font-bold">
                  已完成 {completedLessons.length} / 30
                </span>
                <div className="w-16 h-1.5 bg-emerald-200 dark:bg-emerald-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(completedLessons.length / 30) * 100}%` }}
                  />
                </div>
                {masteredCount > 0 && (
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    · 已掌握 {masteredCount}
                  </span>
                )}
              </div>
            )}
          </div>
        </ClientOnly>

        {/* === Course Map === */}
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
                            lessonProgress?.mastered
                              ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/20"
                              : lessonProgress?.completed
                              ? "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800/50 hover:bg-yellow-100 dark:hover:bg-yellow-900/20"
                              : "bg-gray-50 dark:bg-gray-700/30 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                          }`}
                          suppressHydrationWarning
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1 flex items-center gap-1">
                                第{lesson.number}课
                                <ClientOnly>
                                  {lessonProgress?.mastered && (
                                    <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                                      ✅ 已掌握
                                    </span>
                                  )}
                                  {lessonProgress?.completed && !lessonProgress?.mastered && (
                                    <span className="text-yellow-600 dark:text-yellow-400 text-[10px] font-bold">
                                      📖 学完了
                                    </span>
                                  )}
                                  {lessonProgress && lessonProgress.bestScore > 0 && (
                                    <span className="text-indigo-500 text-[10px]">
                                      最佳{lessonProgress.bestScore}/{lessonProgress.totalQuestions}
                                    </span>
                                  )}
                                </ClientOnly>
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

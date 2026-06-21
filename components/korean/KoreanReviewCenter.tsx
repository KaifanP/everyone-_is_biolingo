"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useKoreanProgress } from "@/lib/korean-progress";
import { koreanModules, KoreanMistakeRecord } from "@/lib/korean-types";
import { ERROR_TYPE_CONFIG, getErrorTypeStats, type ErrorType } from "@/lib/korean-error-types";
import { getKoreanLessonData } from "@/lib/korean-lesson-data-registry";
import ReviewExerciseCard from "@/components/korean/ReviewExerciseCard";

const SOURCE_LABELS: Record<string, string> = {
  practice: "练习",
  selfTest: "自测",
  mockTest: "模拟测试",
  output: "输出",
};

type ViewMode = "queue" | "mistakeBook" | "review" | "result";

interface KoreanReviewCenterProps {
  embedded?: boolean;
  onExit?: () => void;
}

export function KoreanReviewCenter({ embedded = false, onExit }: KoreanReviewCenterProps) {
  const {
    getUnresolvedMistakes,
    getDueReviews,
    getReviewQuestions,
    getTotalUnresolvedCount,
    recordReviewAttempt,
    getLessonProgress,
  } = useKoreanProgress();

  const [viewMode, setViewMode] = useState<ViewMode>("queue");
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [reviewQuestions, setReviewQuestions] = useState<KoreanMistakeRecord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { userAnswer: string; isCorrect: boolean }>>({});
  const [result, setResult] = useState<{ score: number; total: number; correctCount: number } | null>(null);
  const [errorTypeFilter, setErrorTypeFilter] = useState<ErrorType | null>(null);

  // Restore review progress from sessionStorage on mount
  const restoredRef = useRef(false);
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    try {
      const saved = sessionStorage.getItem("korean_review_state");
      if (saved) {
        const state = JSON.parse(saved);
        if (state.viewMode === "review" && state.reviewQuestions?.length > 0) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- session progress is restored only after client hydration
          setViewMode(state.viewMode);
          setSelectedLesson(state.selectedLesson);
          setReviewQuestions(state.reviewQuestions);
          setCurrentIndex(state.currentIndex ?? 0);
          setAnswers(state.answers ?? {});
        }
      }
    } catch { /* ignore */ }
  }, []);

  // Save review progress to sessionStorage when in review mode
  useEffect(() => {
    if (viewMode === "review" && reviewQuestions.length > 0) {
      sessionStorage.setItem("korean_review_state", JSON.stringify({
        viewMode, selectedLesson, reviewQuestions, currentIndex, answers,
      }));
    } else {
      sessionStorage.removeItem("korean_review_state");
    }
  }, [viewMode, selectedLesson, reviewQuestions, currentIndex, answers]);

  // Warn before leaving with unsaved progress
  useEffect(() => {
    const hasProgress = viewMode === "review" && Object.keys(answers).length > 0 && !result;
    const handler = (e: BeforeUnloadEvent) => {
      if (hasProgress) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [viewMode, answers, result]);

  const allLessons = useMemo(() => koreanModules.flatMap((m) => m.lessons), []);
  const lessonLookup = useMemo(() => {
    const map: Record<string, (typeof allLessons)[0]> = {};
    for (const l of allLessons) map[l.id] = l;
    return map;
  }, [allLessons]);

  const dueReviews = useMemo(() => getDueReviews(), [getDueReviews]);
  const unresolvedMistakes = useMemo(() => getUnresolvedMistakes(), [getUnresolvedMistakes]);

  const startReview = useCallback((lessonId: string) => {
    const lessonData = getKoreanLessonData(lessonId);
    const selfTestQ = lessonData?.summary?.selfTest;
    const questions = getReviewQuestions(lessonId, selfTestQ);
    if (questions.length === 0) return;

    setSelectedLesson(lessonId);
    setReviewQuestions(questions);
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setViewMode("review");
  }, [getReviewQuestions]);

  const handleAnswer = useCallback((userAnswer: string, isCorrect: boolean) => {
    const current = reviewQuestions[currentIndex];
    if (!current) return;
    setAnswers((prev) => ({
      ...prev,
      [current.id]: { userAnswer, isCorrect },
    }));
  }, [reviewQuestions, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < reviewQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, reviewQuestions.length]);

  const handleFinish = useCallback(() => {
    const total = reviewQuestions.length;
    const correctCount = reviewQuestions.filter((q) => answers[q.id]?.isCorrect).length;
    const score = correctCount;
    const resolvedIds = reviewQuestions
      .filter((q) => answers[q.id]?.isCorrect && q.id.startsWith("m-"))
      .map((q) => q.id);
    const reviewedIds = reviewQuestions
      .filter((q) => q.id.startsWith("m-"))
      .map((q) => q.id);

    if (selectedLesson) {
      recordReviewAttempt(selectedLesson, score, total, resolvedIds, reviewedIds);
    }

    setResult({ score, total, correctCount });
    setViewMode("result");
  }, [reviewQuestions, answers, selectedLesson, recordReviewAttempt]);

  const currentQuestion = reviewQuestions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const allAnswered = reviewQuestions.length > 0 && reviewQuestions.every((q) => answers[q.id] !== undefined);
  const progressPercent = reviewQuestions.length > 0 ? ((currentIndex + 1) / reviewQuestions.length) * 100 : 0;

  if (viewMode === "result" && result && selectedLesson) {
    const pct = result.total > 0 ? result.score / result.total : 0;
    const passed = pct >= 0.8;
    const unanswered = reviewQuestions.filter((q) => !answers[q.id]?.isCorrect);
    const lp = getLessonProgress(selectedLesson);

    return (
      <div className={embedded ? "" : "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"}>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Link
            href="/korean/review"
            onClick={(e) => {
              e.preventDefault();
              setViewMode("queue");
              setSelectedLesson(null);
            }}
            className="text-indigo-500 hover:text-indigo-600 text-sm flex items-center gap-1 w-fit mb-6"
          >
            ← 返回复习列表
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="text-6xl">{passed ? "🎉" : "💪"}</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {passed ? "复习通过！" : "继续加油！"}
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{result.correctCount}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">答对</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-400">{result.total - result.correctCount}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">答错</p>
                </div>
                <div className="text-center">
                  <p className={`text-3xl font-bold ${passed ? "text-emerald-600" : "text-amber-600"}`}>
                    {Math.round(pct * 100)}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">正确率</p>
                </div>
              </div>

              {!passed && (
                <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl">
                  未达到80%门槛，答错的题目将在下次复习中重新出现。
                </p>
              )}

              {lp && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  下次复习：{lp.nextReviewAt ? new Date(lp.nextReviewAt).toLocaleDateString("zh-CN") : "已全部掌握"}
                </p>
              )}
            </div>

            {unanswered.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 text-left">
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                  仍未掌握的题目（{unanswered.length} 题）
                </p>
                {/* Error type breakdown */}
                {(() => {
                  const stats = getErrorTypeStats(unanswered);
                  const hasStats = Object.values(stats).some((v) => v > 0);
                  if (!hasStats) return null;
                  return (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(Object.entries(stats) as [ErrorType, number][]).map(([key, count]) => {
                        if (count === 0) return null;
                        const config = ERROR_TYPE_CONFIG[key];
                        return (
                          <span key={key} className={`px-2 py-1 rounded-full text-xs font-bold ${config.color} ${config.bgColor}`}>
                            {config.label} {count}
                          </span>
                        );
                      })}
                    </div>
                  );
                })()}
                <div className="space-y-2">
                  {unanswered.map((q) => {
                    const etConfig = q.errorType ? ERROR_TYPE_CONFIG[q.errorType] : null;
                    return (
                      <div key={q.id} className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
                        <div className="flex items-center gap-2 mb-1">
                          {etConfig && (
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${etConfig.color} ${etConfig.bgColor}`}>
                              {etConfig.label}
                            </span>
                          )}
                          <p className="text-sm text-gray-800 dark:text-gray-200">{q.question}</p>
                        </div>
                        <p className="text-xs text-red-600 dark:text-red-400">
                          正确答案：{q.correctAnswer}
                        </p>
                        {q.autoExplanation && (
                          <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                            💡 {q.autoExplanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-3">
              {unanswered.length > 0 && (
                <button
                  onClick={() => {
                    setReviewQuestions(unanswered);
                    setCurrentIndex(0);
                    setAnswers({});
                    setResult(null);
                    setViewMode("review");
                  }}
                  className="inline-flex px-5 py-2.5 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors"
                >
                  只重做错题（{unanswered.length} 题）
                </button>
              )}
              <Link
                href="/korean"
                className="inline-flex px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
              >
                返回课程概览
              </Link>
              <button
                onClick={() => {
                  setViewMode("queue");
                  setSelectedLesson(null);
                }}
                className="inline-flex px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                继续复习其他课程
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (viewMode === "review" && currentQuestion) {
    const lessonInfo = lessonLookup[selectedLesson ?? ""];
    return (
      <div className={embedded ? "" : "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"}>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Link
            href="/korean/review"
            onClick={(e) => {
              e.preventDefault();
              setViewMode("queue");
              setSelectedLesson(null);
            }}
            className="text-indigo-500 hover:text-indigo-600 text-sm flex items-center gap-1 w-fit mb-6"
          >
            ← 返回复习列表
          </Link>

          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {lessonInfo ? `第${lessonInfo.number}课 · ${lessonInfo.title}` : "复习"}
            </h1>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>第 {currentIndex + 1} / {reviewQuestions.length} 题</span>
              <span>已答对 {reviewQuestions.filter((q) => answers[q.id]?.isCorrect).length} 题</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-bold">
                {currentIndex + 1}
              </span>
              <span className="text-[10px] px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
                {SOURCE_LABELS[currentQuestion.sourceType] ?? currentQuestion.sourceType}
              </span>
            </div>

            <ReviewExerciseCard
              mistake={currentQuestion}
              answered={currentAnswer ?? null}
              onAnswer={handleAnswer}
            />
          </motion.div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              ← 上一题
            </button>

            {allAnswered ? (
              <button
                onClick={handleFinish}
                className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md"
              >
                完成复习
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!currentAnswer || currentIndex >= reviewQuestions.length - 1}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                下一题 →
              </button>
            )}
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:hidden">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {currentIndex + 1}/{reviewQuestions.length} · 答对 {reviewQuestions.filter((q) => answers[q.id]?.isCorrect).length}
              </span>
              {allAnswered ? (
                <button
                  onClick={handleFinish}
                  className="px-5 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                >
                  完成复习
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white disabled:opacity-40"
                >
                  下一题
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === "mistakeBook") {
    const filteredMistakes = errorTypeFilter
      ? unresolvedMistakes.filter((m) => m.errorType === errorTypeFilter)
      : unresolvedMistakes;
    const groupedByLesson: Record<string, KoreanMistakeRecord[]> = {};
    for (const m of filteredMistakes) {
      if (!groupedByLesson[m.lessonId]) groupedByLesson[m.lessonId] = [];
      groupedByLesson[m.lessonId].push(m);
    }
    const errorStats = getErrorTypeStats(unresolvedMistakes);

    return (
      <div className={embedded ? "" : "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button
            onClick={() => { setViewMode("queue"); setErrorTypeFilter(null); }}
            className="text-indigo-500 hover:text-indigo-600 text-sm flex items-center gap-1 w-fit mb-6"
          >
            ← 返回复习首页
          </button>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">错题本</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            共 {unresolvedMistakes.length} 道未解决错题
          </p>

          {/* Error type filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setErrorTypeFilter(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                !errorTypeFilter
                  ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-300"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              全部
            </button>
            {(Object.entries(ERROR_TYPE_CONFIG) as [ErrorType, typeof ERROR_TYPE_CONFIG[ErrorType]][]).map(([key, config]) => {
              const count = errorStats[key];
              if (count === 0) return null;
              return (
                <button
                  key={key}
                  onClick={() => setErrorTypeFilter(errorTypeFilter === key ? null : key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    errorTypeFilter === key
                      ? `${config.color} ${config.bgColor} ring-2 ring-current`
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {config.label} ({count})
                </button>
              );
            })}
          </div>

          {filteredMistakes.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🌟</div>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                {errorTypeFilter ? "该类型没有错题" : "没有错题"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">继续保持！</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(groupedByLesson).map(([lessonId, mistakes]) => {
                const lessonInfo = lessonLookup[lessonId];
                return (
                  <div key={lessonId} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          {lessonInfo ? `第${lessonInfo.number}课` : lessonId}
                        </p>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {lessonInfo?.title ?? lessonId}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {mistakes.length} 道错题
                        </p>
                      </div>
                      <button
                        onClick={() => startReview(lessonId)}
                        className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
                      >
                        开始复习
                      </button>
                    </div>
                    <div className="space-y-2">
                      {mistakes.slice(0, 3).map((m) => {
                        const etConfig = m.errorType ? ERROR_TYPE_CONFIG[m.errorType] : null;
                        return (
                          <div key={m.id} className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                            <p className="text-sm text-gray-800 dark:text-gray-200 line-clamp-2">{m.question}</p>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <span className="text-[10px] px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
                                {SOURCE_LABELS[m.sourceType] ?? m.sourceType}
                              </span>
                              {etConfig && (
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${etConfig.color} ${etConfig.bgColor}`}>
                                  {etConfig.label}
                                </span>
                              )}
                              <span className="text-[10px] text-gray-400">
                                错误{m.count}次
                              </span>
                            </div>
                            {m.autoExplanation && (
                              <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">
                                💡 {m.autoExplanation}
                              </p>
                            )}
                          </div>
                        );
                      })}
                      {mistakes.length > 3 && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                          还有 {mistakes.length - 3} 道...
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={embedded ? "" : "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          {embedded ? (
            <button
              type="button"
              onClick={onExit}
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm flex items-center gap-1 w-fit"
            >
              ← 返回课程地图
            </button>
          ) : (
            <Link
              href="/korean"
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm flex items-center gap-1 w-fit"
            >
              ← 返回课程概览
            </Link>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">复习中心</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          选择复习方式，巩固薄弱知识点
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setViewMode("mistakeBook")}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-left hover:border-indigo-300 dark:hover:border-indigo-700 transition-all group"
          >
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              错题本
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {getTotalUnresolvedCount()} 道未解决错题
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              随时查看全部错题
            </p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            onClick={() => {
              if (dueReviews.length > 0) {
                startReview(dueReviews[0]);
              }
            }}
            disabled={dueReviews.length === 0}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-left hover:border-amber-300 dark:hover:border-amber-700 transition-all group disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              今日复习
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {dueReviews.length} 门课程到期
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              复习到期的课程内容
            </p>
          </motion.button>
        </div>

        {dueReviews.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">到期课程</h2>
            <div className="space-y-3">
              {dueReviews.map((lessonId) => {
                const lessonInfo = lessonLookup[lessonId];
                if (!lessonInfo) return null;
                return (
                  <motion.div
                    key={lessonId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">第{lessonInfo.number}课</p>
                      <h3 className="font-bold text-gray-900 dark:text-white">{lessonInfo.title}</h3>
                    </div>
                    <button
                      onClick={() => startReview(lessonId)}
                      className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
                    >
                      开始复习
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {dueReviews.length === 0 && unresolvedMistakes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🌟</div>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">暂无待复习内容</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              继续学习新课，系统会自动记录需要复习的错题。
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default KoreanReviewCenter;

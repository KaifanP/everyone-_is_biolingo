"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import { KoreanMistakeRecord, KoreanExercise, MistakeSourceType } from "./korean-types";
import {
  getDefaultProgress,
  parseProgress,
  markLessonCompleted as _markLessonCompleted,
  updateLessonScore as _updateLessonScore,
  completeReview as _completeReview,
  recordMistake as _recordMistake,
  getReviewQuestions as _getReviewQuestions,
  computeStreak,
  getWeeklyAccuracy,
  getSkillMastery,
  getNextStep,
  STORAGE_KEY,
  CHANGE_EVENT,
  type LessonProgress,
  type KoreanProgressData,
} from "./korean-progress-core";
export type { SkillCategory, ReviewAttempt } from "./korean-progress-core";

function getProgressSnapshot() {
  if (typeof window === "undefined") return JSON.stringify(getDefaultProgress());
  return localStorage.getItem(STORAGE_KEY) ?? JSON.stringify(getDefaultProgress());
}

function getServerSnapshot() {
  return JSON.stringify(getDefaultProgress());
}

function subscribeToProgress(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

function saveProgress(data: KoreanProgressData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useKoreanProgress() {
  const progressSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerSnapshot
  );

  const progress = useMemo(() => parseProgress(progressSnapshot), [progressSnapshot]);

  const markLessonCompleted = useCallback((lessonId: string, score?: number, totalQuestions?: number) => {
    saveProgress(_markLessonCompleted(parseProgress(getProgressSnapshot()), lessonId, score, totalQuestions));
  }, []);

  const updateLessonScore = useCallback((lessonId: string, score: number, totalQuestions: number, mistakeIds?: string[]) => {
    saveProgress(_updateLessonScore(parseProgress(getProgressSnapshot()), lessonId, score, totalQuestions, mistakeIds));
  }, []);

  const completeReview = useCallback((
    lessonId: string,
    score: number,
    total: number,
    resolvedMistakeIds: string[],
    reviewedMistakeIds?: string[]
  ) => {
    saveProgress(_completeReview(
      parseProgress(getProgressSnapshot()),
      lessonId,
      score,
      total,
      resolvedMistakeIds,
      reviewedMistakeIds
    ));
  }, []);

  const recordMistake = useCallback((
    lessonId: string, sourceType: MistakeSourceType, exerciseType: string,
    question: string, userAnswer: string, correctAnswer: string,
    options?: string[], exerciseIndex?: number, itemIndex?: number,
    matchingWrongPairs?: { left: string; right: string }[],
    originalExercise?: KoreanExercise,
    errorTag?: import("./korean-error-types").ErrorType
  ) => {
    saveProgress(_recordMistake(
      parseProgress(getProgressSnapshot()), lessonId, sourceType, exerciseType,
      question, userAnswer, correctAnswer, options, exerciseIndex, itemIndex,
      matchingWrongPairs, originalExercise, errorTag
    ));
  }, []);

  const resolveMistake = useCallback((mistakeId: string) => {
    const current = parseProgress(getProgressSnapshot());
    const record = current.mistakeRecords[mistakeId];
    if (record && !record.resolved) {
      record.resolved = true;
      record.resolvedAt = new Date().toISOString();
      saveProgress(current);
    }
  }, []);

  const getDueReviewQueue = useCallback((): { lessonId: string; mistakes: KoreanMistakeRecord[] }[] => {
    const now = new Date();
    const result: { lessonId: string; mistakes: KoreanMistakeRecord[] }[] = [];
    for (const [lessonId, lp] of Object.entries(progress.lessonProgress)) {
      const due = lp.nextReviewAt && new Date(lp.nextReviewAt) <= now;
      const unresolved = lp.mistakeIds
        .map((id) => progress.mistakeRecords[id])
        .filter((r): r is KoreanMistakeRecord => !!r && !r.resolved);
      if (due || unresolved.length > 0) result.push({ lessonId, mistakes: unresolved });
    }
    return result;
  }, [progress]);

  const getUnresolvedMistakes = useCallback((): KoreanMistakeRecord[] => {
    return Object.values(progress.mistakeRecords).filter((r) => !r.resolved);
  }, [progress.mistakeRecords]);

  const getReviewQuestions = useCallback((lessonId: string, selfTestQuestions?: { question: string; options: string[]; answer: string }[]): KoreanMistakeRecord[] => {
    return _getReviewQuestions(
      Object.values(progress.mistakeRecords),
      lessonId,
      selfTestQuestions
    );
  }, [progress.mistakeRecords]);

  const recordReviewAttempt = useCallback((
    lessonId: string,
    score: number,
    total: number,
    mistakeIdsResolved: string[],
    mistakeIdsReviewed?: string[]
  ) => {
    completeReview(lessonId, score, total, mistakeIdsResolved, mistakeIdsReviewed);
  }, [completeReview]);

  const setRomanizationPreference = useCallback((show: boolean) => {
    const current = parseProgress(getProgressSnapshot());
    current.romanizationPreference = show;
    saveProgress(current);
  }, []);

  const getDueReviews = useCallback((): string[] => {
    const now = new Date();
    return Object.entries(progress.lessonProgress)
      .filter(([, prog]) => prog.nextReviewAt && new Date(prog.nextReviewAt) <= now)
      .map(([id]) => id);
  }, [progress.lessonProgress]);

  const getLessonProgress = useCallback((lessonId: string): LessonProgress | undefined => {
    return progress.lessonProgress[lessonId];
  }, [progress.lessonProgress]);

  const getMistakeRecord = useCallback((mistakeId: string): KoreanMistakeRecord | undefined => {
    return progress.mistakeRecords[mistakeId];
  }, [progress.mistakeRecords]);

  const getUnresolvedMistakesForLesson = useCallback((lessonId: string): KoreanMistakeRecord[] => {
    return Object.values(progress.mistakeRecords).filter(
      (r) => r.lessonId === lessonId && !r.resolved
    );
  }, [progress.mistakeRecords]);

  const getTotalUnresolvedCount = useCallback((): number => {
    return Object.values(progress.mistakeRecords).filter((r) => !r.resolved).length;
  }, [progress.mistakeRecords]);

  const getStreak = useCallback((): number => {
    return computeStreak(progress.dailyActivity);
  }, [progress.dailyActivity]);

  const getWeeklyStats = useCallback((): { correct: number; total: number } => {
    return getWeeklyAccuracy(progress.reviewHistory);
  }, [progress.reviewHistory]);

  const getSkillMasteryStats = useCallback(() => {
    return getSkillMastery(progress.lessonProgress);
  }, [progress.lessonProgress]);

  const getNextStepInfo = useCallback(() => {
    return getNextStep(progress.lessonProgress, progress.completedLessons, progress.mistakeRecords);
  }, [progress.lessonProgress, progress.completedLessons, progress.mistakeRecords]);

  return {
    completedLessons: progress.completedLessons,
    lessonProgress: progress.lessonProgress,
    romanizationPreference: progress.romanizationPreference,
    mistakeRecords: progress.mistakeRecords,
    markLessonCompleted, updateLessonScore, completeReview, recordMistake,
    resolveMistake, getDueReviewQueue, recordReviewAttempt,
    setRomanizationPreference, getDueReviews, getLessonProgress,
    getMistakeRecord, getUnresolvedMistakesForLesson, getTotalUnresolvedCount,
    getUnresolvedMistakes, getReviewQuestions,
    getStreak, getWeeklyStats, getSkillMasteryStats, getNextStepInfo,
  };
}

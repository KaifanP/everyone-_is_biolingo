"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "biolingo_korean_progress";
const CHANGE_EVENT = "biolingo-korean-progress-change";
const CURRENT_VERSION = 2;

interface LessonProgress {
  completed: boolean;
  bestScore: number;
  totalQuestions: number;
  lastAttemptAt: string;
  nextReviewAt: string | null;
  review1Day: boolean;
  review7Day: boolean;
  review30Day: boolean;
  errorTypes: string[];
}

interface KoreanProgressData {
  version: number;
  completedLessons: string[];
  lessonProgress: Record<string, LessonProgress>;
  romanizationPreference: boolean;
}

function getDefaultProgress(): KoreanProgressData {
  return {
    version: CURRENT_VERSION,
    completedLessons: [],
    lessonProgress: {},
    romanizationPreference: true,
  };
}

function migrateFromV1(oldData: string[]): KoreanProgressData {
  const progress = getDefaultProgress();
  for (const lessonId of oldData) {
    if (typeof lessonId === "string") {
      progress.completedLessons.push(lessonId);
      progress.lessonProgress[lessonId] = {
        completed: true,
        bestScore: 0,
        totalQuestions: 0,
        lastAttemptAt: new Date().toISOString(),
        nextReviewAt: null,
        review1Day: false,
        review7Day: false,
        review30Day: false,
        errorTypes: [],
      };
    }
  }
  return progress;
}

function parseProgress(raw: string): KoreanProgressData {
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return migrateFromV1(parsed);
    }
    if (parsed && typeof parsed === "object" && parsed.version === CURRENT_VERSION) {
      return parsed as KoreanProgressData;
    }
    if (parsed && typeof parsed === "object" && parsed.version === 1) {
      const progress = getDefaultProgress();
      progress.completedLessons = parsed.completedLessons || [];
      progress.lessonProgress = parsed.lessonProgress || {};
      progress.romanizationPreference = parsed.romanizationPreference ?? true;
      return progress;
    }
    return getDefaultProgress();
  } catch {
    return getDefaultProgress();
  }
}

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

function scheduleReviewDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString();
}

export function useKoreanProgress() {
  const progressSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerSnapshot
  );

  const progress = useMemo(() => parseProgress(progressSnapshot), [progressSnapshot]);

  const markLessonCompleted = useCallback((lessonId: string, score?: number, totalQuestions?: number) => {
    const current = parseProgress(getProgressSnapshot());
    if (!current.completedLessons.includes(lessonId)) {
      current.completedLessons.push(lessonId);
    }

    const existing = current.lessonProgress[lessonId];
    const now = new Date().toISOString();

    current.lessonProgress[lessonId] = {
      completed: true,
      bestScore: score !== undefined ? Math.max(score, existing?.bestScore ?? 0) : existing?.bestScore ?? 0,
      totalQuestions: totalQuestions ?? existing?.totalQuestions ?? 0,
      lastAttemptAt: now,
      nextReviewAt: scheduleReviewDate(1),
      review1Day: false,
      review7Day: false,
      review30Day: false,
      errorTypes: existing?.errorTypes ?? [],
    };

    saveProgress(current);
  }, []);

  const updateLessonScore = useCallback((lessonId: string, score: number, totalQuestions: number, errorTypes?: string[]) => {
    const current = parseProgress(getProgressSnapshot());
    const existing = current.lessonProgress[lessonId];
    const now = new Date().toISOString();

    current.lessonProgress[lessonId] = {
      completed: existing?.completed ?? score / totalQuestions >= 0.8,
      bestScore: Math.max(score, existing?.bestScore ?? 0),
      totalQuestions,
      lastAttemptAt: now,
      nextReviewAt: existing?.nextReviewAt ?? null,
      review1Day: existing?.review1Day ?? false,
      review7Day: existing?.review7Day ?? false,
      review30Day: existing?.review30Day ?? false,
      errorTypes: errorTypes ?? existing?.errorTypes ?? [],
    };

    if (current.lessonProgress[lessonId].completed && !current.completedLessons.includes(lessonId)) {
      current.completedLessons.push(lessonId);
      current.lessonProgress[lessonId].nextReviewAt = scheduleReviewDate(1);
    }

    saveProgress(current);
  }, []);

  const completeReview = useCallback((lessonId: string, reviewType: "1day" | "7day" | "30day", score?: number) => {
    const current = parseProgress(getProgressSnapshot());
    const existing = current.lessonProgress[lessonId];
    if (!existing) return;

    if (reviewType === "1day") existing.review1Day = true;
    if (reviewType === "7day") existing.review7Day = true;
    if (reviewType === "30day") existing.review30Day = true;

    if (score !== undefined) {
      existing.bestScore = Math.max(score, existing.bestScore);
    }

    existing.lastAttemptAt = new Date().toISOString();

    if (!existing.review1Day) {
      existing.nextReviewAt = scheduleReviewDate(1);
    } else if (!existing.review7Day) {
      existing.nextReviewAt = scheduleReviewDate(6);
    } else if (!existing.review30Day) {
      existing.nextReviewAt = scheduleReviewDate(23);
    } else {
      existing.nextReviewAt = null;
    }

    saveProgress(current);
  }, []);

  const setRomanizationPreference = useCallback((show: boolean) => {
    const current = parseProgress(getProgressSnapshot());
    current.romanizationPreference = show;
    saveProgress(current);
  }, []);

  const getDueReviews = useCallback((): string[] => {
    const current = parseProgress(getProgressSnapshot());
    const now = new Date();
    return Object.entries(current.lessonProgress)
      .filter(([, prog]) => {
        if (!prog.nextReviewAt) return false;
        return new Date(prog.nextReviewAt) <= now;
      })
      .map(([id]) => id);
  }, []);

  const getLessonProgress = useCallback((lessonId: string): LessonProgress | undefined => {
    const current = parseProgress(getProgressSnapshot());
    return current.lessonProgress[lessonId];
  }, []);

  return {
    completedLessons: progress.completedLessons,
    lessonProgress: progress.lessonProgress,
    romanizationPreference: progress.romanizationPreference,
    markLessonCompleted,
    updateLessonScore,
    completeReview,
    setRomanizationPreference,
    getDueReviews,
    getLessonProgress,
  };
}

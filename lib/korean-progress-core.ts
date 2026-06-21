import { KoreanMistakeRecord, KoreanExercise, MistakeSourceType } from "./korean-types";
import { inferErrorType, generateExplanation } from "./korean-error-types";

export const CURRENT_VERSION = 6;
export const STORAGE_KEY = "biolingo_korean_progress";
export const CHANGE_EVENT = "biolingo-korean-progress-change";

export interface LessonProgress {
  completed: boolean;
  mastered: boolean;
  bestScore: number;
  totalQuestions: number;
  lastAttemptAt: string;
  nextReviewAt: string | null;
  review1Day: boolean;
  review7Day: boolean;
  review30Day: boolean;
  mistakeIds: string[];
  originalCompletedAt?: string;
}

export interface ReviewAttempt {
  date: string;
  lessonId: string;
  score: number;
  total: number;
}

export interface KoreanProgressData {
  version: number;
  completedLessons: string[];
  lessonProgress: Record<string, LessonProgress>;
  romanizationPreference: boolean;
  mistakeRecords: Record<string, KoreanMistakeRecord>;
  dailyActivity: string[];
  reviewHistory: ReviewAttempt[];
}

export function getDefaultProgress(): KoreanProgressData {
  return {
    version: CURRENT_VERSION,
    completedLessons: [],
    lessonProgress: {},
    romanizationPreference: true,
    mistakeRecords: {},
    dailyActivity: [],
    reviewHistory: [],
  };
}

export function getTodayString(): string {
  return getLocalDateKey(new Date());
}

function getLocalDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function recordDailyActivity(data: KoreanProgressData): KoreanProgressData {
  const today = getTodayString();
  if (data.dailyActivity.includes(today)) return data;
  return { ...data, dailyActivity: [...data.dailyActivity, today] };
}

export function addReviewAttempt(data: KoreanProgressData, lessonId: string, score: number, total: number): KoreanProgressData {
  const entry: ReviewAttempt = { date: getTodayString(), lessonId, score, total };
  const updated = { ...data, reviewHistory: [...data.reviewHistory, entry] };
  return recordDailyActivity(updated);
}

export function computeStreak(dailyActivity: string[]): number {
  if (dailyActivity.length === 0) return 0;
  const sorted = [...new Set(dailyActivity)].sort().reverse();
  const today = getTodayString();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = getLocalDateKey(yesterdayDate);
  // Must have activity today or yesterday to have a streak
  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diff = (prev.getTime() - curr.getTime()) / 86400000;
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export function getWeeklyAccuracy(reviewHistory: ReviewAttempt[]): { correct: number; total: number } {
  const weekAgoDate = new Date();
  weekAgoDate.setDate(weekAgoDate.getDate() - 7);
  const weekAgo = getLocalDateKey(weekAgoDate);
  let correct = 0;
  let total = 0;
  for (const r of reviewHistory) {
    if (r.date >= weekAgo) {
      correct += r.score;
      total += r.total;
    }
  }
  return { correct, total };
}

export type SkillCategory = "alphabet" | "listening" | "vocabulary" | "grammar" | "reading";

export const SKILL_CONFIG: Record<SkillCategory, { label: string; labelEn: string; icon: string; lessonRange: [number, number] }> = {
  alphabet: { label: "字母", labelEn: "Alphabet", icon: "🔤", lessonRange: [1, 5] },
  vocabulary: { label: "词汇", labelEn: "Vocabulary", icon: "📝", lessonRange: [6, 15] },
  grammar: { label: "语法", labelEn: "Grammar", icon: "📖", lessonRange: [16, 25] },
  listening: { label: "听力", labelEn: "Listening", icon: "👂", lessonRange: [26, 29] },
  reading: { label: "阅读", labelEn: "Reading", icon: "👁️", lessonRange: [28, 30] },
};

export function getSkillMastery(lessonProgress: Record<string, LessonProgress>): Record<SkillCategory, { mastered: number; total: number; pct: number }> {
  const result = {} as Record<SkillCategory, { mastered: number; total: number; pct: number }>;
  for (const [skill, config] of Object.entries(SKILL_CONFIG)) {
    const [start, end] = config.lessonRange;
    let mastered = 0;
    for (let i = start; i <= end; i++) {
      const id = `lesson-${String(i).padStart(2, "0")}`;
      const lp = lessonProgress[id];
      if (lp?.mastered) mastered++;
    }
    const total = end - start + 1;
    result[skill as SkillCategory] = { mastered, total, pct: total > 0 ? Math.round((mastered / total) * 100) : 0 };
  }
  return result;
}

export function getNextStep(lessonProgress: Record<string, LessonProgress>, completedLessons: string[], mistakeRecords: Record<string, KoreanMistakeRecord>): { lessonId: string; reason: string; type: "new" | "review" | "mastery" | "mistakes" } | null {
  const now = new Date();
  // 1. Check for due reviews (highest priority — time-sensitive)
  for (const [id, lp] of Object.entries(lessonProgress)) {
    if (lp.completed && !lp.mastered && lp.nextReviewAt && new Date(lp.nextReviewAt) <= now) {
      return { lessonId: id, reason: "昨天学完了这课，今天复习一下巩固记忆", type: "mastery" };
    }
  }
  for (const [id, lp] of Object.entries(lessonProgress)) {
    if (lp.mastered && lp.nextReviewAt && new Date(lp.nextReviewAt) <= now) {
      return { lessonId: id, reason: "间隔复习到期，再测一次防止遗忘", type: "review" };
    }
  }
  // 2. Check for unresolved mistakes
  const unresolvedByLesson: Record<string, number> = {};
  for (const m of Object.values(mistakeRecords)) {
    if (!m.resolved) {
      unresolvedByLesson[m.lessonId] = (unresolvedByLesson[m.lessonId] ?? 0) + 1;
    }
  }
  const topMistakeLesson = Object.entries(unresolvedByLesson).sort((a, b) => b[1] - a[1])[0];
  if (topMistakeLesson && topMistakeLesson[1] >= 3) {
    return { lessonId: topMistakeLesson[0], reason: `这课有 ${topMistakeLesson[1]} 道未解决错题，需要针对性复习`, type: "mistakes" };
  }
  // 3. Next new lesson
  const allLessons = Array.from({ length: 30 }, (_, i) => `lesson-${String(i + 1).padStart(2, "0")}`);
  const nextNew = allLessons.find((id) => !completedLessons.includes(id));
  if (nextNew) {
    return { lessonId: nextNew, reason: "还没学过这课，按顺序继续学习", type: "new" };
  }
  // 4. All done — check if any need mastery review
  const unmastered = Object.entries(lessonProgress).find(([, lp]) => lp.completed && !lp.mastered);
  if (unmastered) {
    return { lessonId: unmastered[0], reason: "这课学完了但还没通过隔天复习，再来一次巩固", type: "mastery" };
  }
  return null;
}

export function getStableMistakeId(lessonId: string, sourceType: string, exerciseIndex: number, itemIndex?: number): string {
  const suffix = itemIndex !== undefined ? `-${itemIndex}` : "";
  return `m-${lessonId}-${sourceType}-${exerciseIndex}${suffix}`;
}

export function scheduleReviewDateFrom(baseDate: string, daysFromBase: number): string {
  const d = new Date(baseDate);
  d.setDate(d.getDate() + daysFromBase);
  return d.toISOString();
}

function getNextMistakeId(): string {
  return `m-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function markLessonCompleted(data: KoreanProgressData, lessonId: string, score?: number, totalQuestions?: number): KoreanProgressData {
  const now = new Date().toISOString();
  const existing = data.lessonProgress[lessonId];
  const completedLessons = data.completedLessons.includes(lessonId)
    ? data.completedLessons
    : [...data.completedLessons, lessonId];

  const isFirstCompletion = !existing?.completed;

  return recordDailyActivity({
    ...data,
    completedLessons,
    lessonProgress: {
      ...data.lessonProgress,
      [lessonId]: {
        completed: true,
        mastered: existing?.mastered ?? false,
        bestScore: score !== undefined ? Math.max(score, existing?.bestScore ?? 0) : existing?.bestScore ?? 0,
        totalQuestions: totalQuestions ?? existing?.totalQuestions ?? 0,
        lastAttemptAt: now,
        nextReviewAt: isFirstCompletion ? scheduleReviewDateFrom(now, 1) : existing.nextReviewAt,
        review1Day: isFirstCompletion ? false : existing.review1Day,
        review7Day: isFirstCompletion ? false : existing.review7Day,
        review30Day: isFirstCompletion ? false : existing.review30Day,
        mistakeIds: existing?.mistakeIds ?? [],
        originalCompletedAt: existing?.originalCompletedAt ?? now,
      },
    },
  });
}

export function updateLessonScore(data: KoreanProgressData, lessonId: string, score: number, totalQuestions: number, mistakeIds?: string[]): KoreanProgressData {
  const existing = data.lessonProgress[lessonId];
  const now = new Date().toISOString();
  const newlyCompleted = !existing?.completed && score / totalQuestions >= 0.8;

  const updated: LessonProgress = {
    completed: (existing?.completed ?? false) || score / totalQuestions >= 0.8,
    mastered: existing?.mastered ?? false,
    bestScore: Math.max(score, existing?.bestScore ?? 0),
    totalQuestions,
    lastAttemptAt: now,
    nextReviewAt: existing?.nextReviewAt ?? null,
    review1Day: existing?.review1Day ?? false,
    review7Day: existing?.review7Day ?? false,
    review30Day: existing?.review30Day ?? false,
    mistakeIds: mistakeIds ?? existing?.mistakeIds ?? [],
    originalCompletedAt: existing?.originalCompletedAt ?? (newlyCompleted ? now : undefined),
  };

  let completedLessons = data.completedLessons;
  if (updated.completed && !completedLessons.includes(lessonId)) {
    completedLessons = [...completedLessons, lessonId];
    updated.nextReviewAt = scheduleReviewDateFrom(now, 1);
    updated.originalCompletedAt = now;
  }

  return {
    ...data,
    completedLessons,
    lessonProgress: { ...data.lessonProgress, [lessonId]: updated },
  };
}

export function completeReview(
  data: KoreanProgressData,
  lessonId: string,
  score: number,
  total: number,
  resolvedMistakeIds: string[],
  reviewedMistakeIds: string[] = resolvedMistakeIds
): KoreanProgressData {
  const existing = data.lessonProgress[lessonId];
  if (!existing) return data;

  const now = new Date().toISOString();
  const newRecords = { ...data.mistakeRecords };

  for (const mid of reviewedMistakeIds) {
    const r = newRecords[mid];
    if (r) {
      const resolved = resolvedMistakeIds.includes(mid);
      newRecords[mid] = {
        ...r,
        lastReviewedAt: now,
        ...(resolved ? { resolved: true, resolvedAt: now } : {}),
      };
    }
  }

  if (!existing.nextReviewAt || new Date(existing.nextReviewAt) > new Date()) {
    return { ...data, mistakeRecords: newRecords };
  }

  const pct = total > 0 ? score / total : 0;
  const baseDate = existing.originalCompletedAt || existing.lastAttemptAt;
  const updated = { ...existing, lastAttemptAt: now };

  if (pct >= 0.8) {
    if (!updated.review1Day) {
      updated.review1Day = true;
      updated.mastered = true;
      updated.nextReviewAt = scheduleReviewDateFrom(baseDate, 7);
    } else if (!updated.review7Day) {
      updated.review7Day = true;
      updated.nextReviewAt = scheduleReviewDateFrom(baseDate, 30);
    } else if (!updated.review30Day) {
      updated.review30Day = true;
      updated.nextReviewAt = null;
    }
  } else {
    updated.mastered = false;
    updated.nextReviewAt = scheduleReviewDateFrom(now, 1);
  }

  return addReviewAttempt(
    { ...data, lessonProgress: { ...data.lessonProgress, [lessonId]: updated }, mistakeRecords: newRecords },
    lessonId,
    score,
    total
  );
}

export function recordMistake(
  data: KoreanProgressData,
  lessonId: string,
  sourceType: MistakeSourceType,
  exerciseType: string,
  question: string,
  userAnswer: string,
  correctAnswer: string,
  options?: string[],
  exerciseIndex?: number,
  itemIndex?: number,
  matchingWrongPairs?: { left: string; right: string }[],
  originalExercise?: KoreanExercise,
  errorTag?: import("./korean-error-types").ErrorType
): KoreanProgressData {
  const id = exerciseIndex !== undefined
    ? getStableMistakeId(lessonId, sourceType, exerciseIndex, itemIndex)
    : getNextMistakeId();

  const classifiedType = inferErrorType(exerciseType, userAnswer, correctAnswer, question, errorTag);
  const explanation = generateExplanation(classifiedType, userAnswer, correctAnswer);

  const newRecords = { ...data.mistakeRecords };
  let existing = newRecords[id];

  if (existing && existing.resolved) {
    existing = { ...existing, resolved: false, resolvedAt: undefined };
    newRecords[id] = existing;
  }

  if (!existing) {
    const found = Object.values(newRecords).find(
      (r) => r.lessonId === lessonId && r.question === question && r.sourceType === sourceType
    );
    if (found) {
      existing = found.resolved ? { ...found, resolved: false, resolvedAt: undefined } : found;
      newRecords[found.id] = existing;
    }
  }

  if (existing) {
    existing = {
      ...existing,
      count: existing.count + 1,
      lastWrongAt: new Date().toISOString(),
      userAnswer,
      matchingWrongPairs: matchingWrongPairs ?? existing.matchingWrongPairs,
      errorType: existing.errorType ?? classifiedType,
      autoExplanation: explanation,
    };
    newRecords[existing.id] = existing;
    return { ...data, mistakeRecords: newRecords };
  }

  const newId = id || getNextMistakeId();
  const newRecord: KoreanMistakeRecord = {
    id: newId,
    lessonId,
    sourceType,
    exerciseType,
    question,
    options,
    userAnswer,
    correctAnswer,
    count: 1,
    createdAt: new Date().toISOString(),
    lastWrongAt: new Date().toISOString(),
    resolved: false,
    itemIndex,
    exerciseIndex,
    matchingWrongPairs,
    originalExercise,
    errorType: classifiedType,
    autoExplanation: explanation,
  };
  newRecords[newId] = newRecord;

  const existingProgress = data.lessonProgress[lessonId];
  const newProgress: LessonProgress = existingProgress
    ? { ...existingProgress, mistakeIds: [...existingProgress.mistakeIds, newId] }
    : {
        completed: false,
        mastered: false,
        bestScore: 0,
        totalQuestions: 0,
        lastAttemptAt: new Date().toISOString(),
        nextReviewAt: null,
        review1Day: false,
        review7Day: false,
        review30Day: false,
        mistakeIds: [newId],
      };

  return {
    ...data,
    lessonProgress: { ...data.lessonProgress, [lessonId]: newProgress },
    mistakeRecords: newRecords,
  };
}

export function getReviewQuestions(
  mistakes: KoreanMistakeRecord[],
  lessonId: string,
  selfTestQuestions?: { question: string; options: string[]; answer: string }[]
): KoreanMistakeRecord[] {
  const unresolved = mistakes.filter((r) => r.lessonId === lessonId && !r.resolved);

  // Score each mistake: frequency + forgetting curve + never-reviewed bonus
  const now = Date.now();
  const scored = unresolved.map((m) => {
    const daysSinceWrong = (now - new Date(m.lastWrongAt).getTime()) / (1000 * 60 * 60 * 24);
    const neverReviewed = !m.lastReviewedAt ? 5 : 0;
    const score = m.count * 3 + daysSinceWrong * 2 + neverReviewed;
    return { mistake: m, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // Error type clustering: cap at 2 per type, prefer variety
  const typeCount: Record<string, number> = {};
  const selected: KoreanMistakeRecord[] = [];
  for (const { mistake } of scored) {
    const et = mistake.errorType || "meaning";
    if ((typeCount[et] ?? 0) >= 2 && selected.length < 8) continue;
    selected.push(mistake);
    typeCount[et] = (typeCount[et] ?? 0) + 1;
    if (selected.length >= 10) break;
  }

  // If we have fewer than 3, add remaining regardless of type cap
  if (selected.length < 3) {
    for (const { mistake } of scored) {
      if (!selected.includes(mistake)) {
        selected.push(mistake);
        if (selected.length >= 10) break;
      }
    }
  }

  const mistakeQuestions = selected;

  if (mistakeQuestions.length >= 3) return mistakeQuestions;

  if (selfTestQuestions && selfTestQuestions.length > 0) {
    const usedQuestions = new Set(mistakeQuestions.map((q) => q.question));
    const available = selfTestQuestions.filter((q) => !usedQuestions.has(q.question));
    const needed = Math.min(Math.max(3, mistakeQuestions.length), 10) - mistakeQuestions.length;
    const padded = available.slice(0, needed).map((q, i) => ({
        id: `st-${lessonId}-${i}`,
      lessonId,
      sourceType: "selfTest" as MistakeSourceType,
      exerciseType: "self-test",
      question: q.question,
      options: q.options,
      userAnswer: "",
      correctAnswer: q.answer,
      count: 0,
      createdAt: new Date().toISOString(),
      lastWrongAt: new Date().toISOString(),
      resolved: false,
      exerciseIndex: i,
    }));
    return [...mistakeQuestions, ...padded];
  }

  return mistakeQuestions;
}

export function parseProgress(raw: string): KoreanProgressData {
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const progress = getDefaultProgress();
      for (const lessonId of parsed) {
        if (typeof lessonId === "string") {
          progress.completedLessons.push(lessonId);
          const now = new Date().toISOString();
          progress.lessonProgress[lessonId] = {
            completed: true,
            mastered: false,
            bestScore: 0,
            totalQuestions: 0,
            lastAttemptAt: now,
            nextReviewAt: null,
            review1Day: false,
            review7Day: false,
            review30Day: false,
            mistakeIds: [],
            originalCompletedAt: now,
          };
        }
      }
      return progress;
    }
    const v = parsed?.version;
    if (v === CURRENT_VERSION) {
      return {
        ...parsed,
        completedLessons: parsed.completedLessons || [],
        lessonProgress: parsed.lessonProgress || {},
        romanizationPreference: parsed.romanizationPreference ?? true,
        mistakeRecords: parsed.mistakeRecords || {},
        dailyActivity: parsed.dailyActivity || [],
        reviewHistory: parsed.reviewHistory || [],
      } as KoreanProgressData;
    }
    if (v === 5) {
      const p: KoreanProgressData = {
        version: CURRENT_VERSION,
        completedLessons: parsed.completedLessons || [],
        lessonProgress: parsed.lessonProgress || {},
        romanizationPreference: parsed.romanizationPreference ?? true,
        mistakeRecords: parsed.mistakeRecords || {},
        dailyActivity: parsed.dailyActivity || [],
        reviewHistory: parsed.reviewHistory || [],
      };
      return p;
    }
    if (v === 4) {
      const p: KoreanProgressData = {
        version: CURRENT_VERSION,
        completedLessons: parsed.completedLessons || [],
        lessonProgress: {},
        romanizationPreference: parsed.romanizationPreference ?? true,
        mistakeRecords: {},
        dailyActivity: [],
        reviewHistory: [],
      };
      for (const [id, lp] of Object.entries(parsed.lessonProgress || {})) {
        const old = lp as Record<string, unknown>;
        p.lessonProgress[id] = {
          completed: !!old.completed,
          mastered: !!(old.completed && (old as Record<string, boolean>).review1Day),
          bestScore: (old.bestScore as number) ?? 0,
          totalQuestions: (old.totalQuestions as number) ?? 0,
          lastAttemptAt: (old.lastAttemptAt as string) ?? new Date().toISOString(),
          nextReviewAt: (old.nextReviewAt as string) ?? null,
          review1Day: !!(old as Record<string, boolean>).review1Day,
          review7Day: !!(old as Record<string, boolean>).review7Day,
          review30Day: !!(old as Record<string, boolean>).review30Day,
          mistakeIds: (old.mistakeIds as string[]) ?? [],
          originalCompletedAt: (old.originalCompletedAt as string) ?? undefined,
        };
      }
      for (const [id, mr] of Object.entries(parsed.mistakeRecords || {})) {
        const old = mr as Record<string, unknown>;
        const exerciseType = (old.exerciseType as string) ?? "";
        const userAnswer = (old.userAnswer as string) ?? "";
        const correctAnswer = (old.correctAnswer as string) ?? "";
        const question = (old.question as string) ?? "";
        const et = inferErrorType(exerciseType, userAnswer, correctAnswer, question);
        p.mistakeRecords[id] = {
          id: id as string,
          lessonId: (old.lessonId as string) ?? "",
          sourceType: (old.sourceType as MistakeSourceType) ?? "practice",
          exerciseType,
          question,
          options: old.options as string[] | undefined,
          userAnswer,
          correctAnswer,
          count: (old.count as number) ?? 1,
          createdAt: (old.createdAt as string) ?? new Date().toISOString(),
          lastWrongAt: (old.lastWrongAt as string) ?? new Date().toISOString(),
          resolved: !!old.resolved,
          resolvedAt: old.resolvedAt as string | undefined,
          itemIndex: old.itemIndex as number | undefined,
          exerciseIndex: old.exerciseIndex as number | undefined,
          matchingWrongPairs: old.matchingWrongPairs as { left: string; right: string }[] | undefined,
          originalExercise: old.originalExercise as KoreanExercise | undefined,
          errorType: et,
          autoExplanation: generateExplanation(et, userAnswer, correctAnswer),
        };
      }
      return p;
    }
    if (v === 3) {
      const p: KoreanProgressData = {
        version: CURRENT_VERSION,
        completedLessons: parsed.completedLessons || [],
        lessonProgress: {},
        romanizationPreference: parsed.romanizationPreference ?? true,
        mistakeRecords: {},
        dailyActivity: [],
        reviewHistory: [],
      };
      for (const [id, lp] of Object.entries(parsed.lessonProgress || {})) {
        const old = lp as Record<string, unknown>;
        const lastAttempt = (old.lastAttemptAt as string) ?? new Date().toISOString();
        p.lessonProgress[id] = {
          completed: !!old.completed,
          mastered: !!(old.completed && (old as Record<string, boolean>).review1Day),
          bestScore: (old.bestScore as number) ?? 0,
          totalQuestions: (old.totalQuestions as number) ?? 0,
          lastAttemptAt: lastAttempt,
          nextReviewAt: (old.nextReviewAt as string) ?? null,
          review1Day: !!(old as Record<string, boolean>).review1Day,
          review7Day: !!(old as Record<string, boolean>).review7Day,
          review30Day: !!(old as Record<string, boolean>).review30Day,
          mistakeIds: (old.mistakeIds as string[]) ?? [],
          originalCompletedAt: (old.originalCompletedAt as string) ?? lastAttempt,
        };
      }
      for (const [id, mr] of Object.entries(parsed.mistakeRecords || {})) {
        const old = mr as Record<string, unknown>;
        const exerciseType = (old.exerciseType as string) ?? "";
        const userAnswer = (old.userAnswer as string) ?? "";
        const correctAnswer = (old.correctAnswer as string) ?? "";
        const question = (old.question as string) ?? "";
        const et = inferErrorType(exerciseType, userAnswer, correctAnswer, question);
        p.mistakeRecords[id] = {
          id: id as string,
          lessonId: (old.lessonId as string) ?? "",
          sourceType: (old.sourceType as MistakeSourceType) ?? "practice",
          exerciseType,
          question,
          options: old.options as string[] | undefined,
          userAnswer,
          correctAnswer,
          count: (old.count as number) ?? 1,
          createdAt: (old.createdAt as string) ?? new Date().toISOString(),
          lastWrongAt: (old.lastWrongAt as string) ?? new Date().toISOString(),
          resolved: !!old.resolved,
          resolvedAt: old.resolvedAt as string | undefined,
          itemIndex: old.itemIndex as number | undefined,
          exerciseIndex: old.exerciseIndex as number | undefined,
          matchingWrongPairs: old.matchingWrongPairs as { left: string; right: string }[] | undefined,
          originalExercise: old.originalExercise as KoreanExercise | undefined,
          errorType: et,
          autoExplanation: generateExplanation(et, userAnswer, correctAnswer),
        };
      }
      return p;
    }
    return getDefaultProgress();
  } catch {
    return getDefaultProgress();
  }
}

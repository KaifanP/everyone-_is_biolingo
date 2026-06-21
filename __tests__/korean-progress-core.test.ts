import { describe, it, expect } from "vitest";
import {
  getDefaultProgress,
  getStableMistakeId,
  scheduleReviewDateFrom,
  completeReview,
  recordMistake,
  getReviewQuestions,
  parseProgress,
  markLessonCompleted,
  updateLessonScore,
  CURRENT_VERSION,
  type LessonProgress,
  type KoreanProgressData,
} from "@/lib/korean-progress-core";
import { KoreanMistakeRecord } from "@/lib/korean-types";

function makeMistake(overrides: Partial<KoreanMistakeRecord> = {}): KoreanMistakeRecord {
  return {
    id: "m-test",
    lessonId: "lesson-01",
    sourceType: "practice",
    exerciseType: "listening-choice",
    question: "测试题目",
    options: ["A", "B", "C", "D"],
    userAnswer: "A",
    correctAnswer: "B",
    count: 1,
    createdAt: "2026-06-21T00:00:00.000Z",
    lastWrongAt: "2026-06-21T00:00:00.000Z",
    resolved: false,
    ...overrides,
  };
}

function makeProgress(overrides: Partial<LessonProgress> = {}): LessonProgress {
  return {
    completed: true,
    mastered: false,
    bestScore: 8,
    totalQuestions: 10,
    lastAttemptAt: "2026-06-21T00:00:00.000Z",
    nextReviewAt: "2026-06-22T00:00:00.000Z",
    review1Day: false,
    review7Day: false,
    review30Day: false,
    mistakeIds: [],
    originalCompletedAt: "2026-06-21T00:00:00.000Z",
    ...overrides,
  };
}

function makeData(overrides: Partial<KoreanProgressData> = {}): KoreanProgressData {
  return {
    version: CURRENT_VERSION,
    completedLessons: [],
    lessonProgress: {},
    romanizationPreference: true,
    mistakeRecords: {},
    dailyActivity: [],
    reviewHistory: [],
    ...overrides,
  };
}

describe("getDefaultProgress", () => {
  it("returns the current version with empty data", () => {
    const p = getDefaultProgress();
    expect(p.version).toBe(CURRENT_VERSION);
    expect(p.completedLessons).toEqual([]);
  });
});

describe("getStableMistakeId", () => {
  it("generates stable ID with exerciseIndex", () => {
    expect(getStableMistakeId("lesson-01", "practice", 3)).toBe("m-lesson-01-practice-3");
  });
  it("includes itemIndex when provided", () => {
    expect(getStableMistakeId("lesson-02", "selfTest", 5, 2)).toBe("m-lesson-02-selfTest-5-2");
  });
  it("same inputs produce same ID", () => {
    expect(getStableMistakeId("lesson-01", "practice", 0)).toBe(getStableMistakeId("lesson-01", "practice", 0));
  });
});

describe("scheduleReviewDateFrom", () => {
  it("returns correct date N days from base", () => {
    const result = scheduleReviewDateFrom("2026-06-21T10:00:00.000Z", 7);
    const d = new Date(result);
    expect(d.getUTCDate()).toBe(28);
    expect(d.getUTCMonth()).toBe(5);
  });
  it("handles month boundaries", () => {
    const result = scheduleReviewDateFrom("2026-06-28T00:00:00.000Z", 5);
    const d = new Date(result);
    expect(d.getUTCDate()).toBe(3);
    expect(d.getUTCMonth()).toBe(6);
  });
});

describe("completeReview - 1/7/30 intervals", () => {
  it("schedules day 7 after passing initial review", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({
          review1Day: false,
          nextReviewAt: "2020-06-22T00:00:00.000Z",
          originalCompletedAt: "2020-06-21T00:00:00.000Z",
        }),
      },
    });
    const result = completeReview(data, "lesson-01", 9, 10, []);
    expect(result.lessonProgress["lesson-01"].review1Day).toBe(true);
    const nextDate = new Date(result.lessonProgress["lesson-01"].nextReviewAt!);
    expect(nextDate.getUTCFullYear()).toBe(2020);
    expect(nextDate.getUTCMonth()).toBe(5);
    expect(nextDate.getUTCDate()).toBe(28);
  });

  it("does NOT advance when review is not yet due", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({
          review1Day: false,
          nextReviewAt: "2099-01-01T00:00:00.000Z",
        }),
      },
    });
    const result = completeReview(data, "lesson-01", 9, 10, []);
    expect(result.lessonProgress["lesson-01"].review1Day).toBe(false);
    expect(result.lessonProgress["lesson-01"].nextReviewAt).toBe("2099-01-01T00:00:00.000Z");
  });

  it("failure schedules from today, not original completion", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({
          review1Day: false,
          nextReviewAt: "2020-01-02T00:00:00.000Z",
          originalCompletedAt: "2020-01-01T00:00:00.000Z",
        }),
      },
    });
    const result = completeReview(data, "lesson-01", 3, 10, []);
    const nextDate = new Date(result.lessonProgress["lesson-01"].nextReviewAt!);
    const now = new Date();
    const diffDays = Math.abs(nextDate.getTime() - now.getTime()) / 86400000;
    expect(diffDays).toBeLessThan(2);
  });

  it("does not update bestScore", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({ bestScore: 10, nextReviewAt: "2020-01-02T00:00:00.000Z" }),
      },
    });
    const result = completeReview(data, "lesson-01", 5, 10, []);
    expect(result.lessonProgress["lesson-01"].bestScore).toBe(10);
  });

  it("resolves mistake IDs", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({ nextReviewAt: "2020-01-02T00:00:00.000Z" }),
      },
      mistakeRecords: {
        m1: makeMistake({ id: "m1", resolved: false }),
      },
    });
    const result = completeReview(data, "lesson-01", 9, 10, ["m1"]);
    expect(result.mistakeRecords.m1.resolved).toBe(true);
  });

  it("stamps every reviewed mistake without resolving wrong answers", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({ nextReviewAt: "2099-01-01T00:00:00.000Z" }),
      },
      mistakeRecords: {
        m1: makeMistake({ id: "m1" }),
        m2: makeMistake({ id: "m2" }),
      },
    });
    const result = completeReview(data, "lesson-01", 1, 2, ["m1"], ["m1", "m2"]);
    expect(result.mistakeRecords.m1.resolved).toBe(true);
    expect(result.mistakeRecords.m2.resolved).toBe(false);
    expect(result.mistakeRecords.m2.lastReviewedAt).toBeDefined();
  });
});

describe("recordMistake", () => {
  it("creates new mistake record", () => {
    const data = makeData();
    const result = recordMistake(data, "lesson-01", "practice", "listening-choice", "q1", "A", "B", ["A", "B", "C"], 0);
    const records = Object.values(result.mistakeRecords);
    expect(records).toHaveLength(1);
    expect(records[0].question).toBe("q1");
    expect(records[0].resolved).toBe(false);
  });

  it("increments count on existing unresolved record", () => {
    const existing = makeMistake({ id: "m-lesson-01-practice-0", count: 2, resolved: false, question: "q1" });
    const data = makeData({ mistakeRecords: { "m-lesson-01-practice-0": existing } });
    const result = recordMistake(data, "lesson-01", "practice", "listening-choice", "q1", "C", "B", undefined, 0);
    expect(result.mistakeRecords["m-lesson-01-practice-0"].count).toBe(3);
  });

  it("re-opens resolved record found by stable ID", () => {
    const existing = makeMistake({ id: "m-lesson-01-practice-0", resolved: true, resolvedAt: "2026-06-21T00:00:00.000Z" });
    const data = makeData({ mistakeRecords: { "m-lesson-01-practice-0": existing } });
    const result = recordMistake(data, "lesson-01", "practice", "listening-choice", "q1", "A", "B", undefined, 0);
    expect(result.mistakeRecords["m-lesson-01-practice-0"].resolved).toBe(false);
    expect(result.mistakeRecords["m-lesson-01-practice-0"].resolvedAt).toBeUndefined();
  });

  it("re-opens resolved record found by question match", () => {
    const existing = makeMistake({ id: "m-old", question: "shared-q", resolved: true });
    const data = makeData({ mistakeRecords: { "m-old": existing } });
    const result = recordMistake(data, "lesson-01", "practice", "listening-choice", "shared-q", "A", "B");
    expect(result.mistakeRecords["m-old"].resolved).toBe(false);
  });
});

describe("getReviewQuestions", () => {
  it("returns unresolved mistakes sorted by count", () => {
    const mistakes = [
      makeMistake({ id: "m1", question: "q1", count: 3 }),
      makeMistake({ id: "m2", question: "q2", count: 1 }),
      makeMistake({ id: "m3", question: "q3", count: 5, resolved: true }),
    ];
    const result = getReviewQuestions(mistakes, "lesson-01");
    expect(result).toHaveLength(2);
    expect(result[0].count).toBeGreaterThanOrEqual(result[1].count);
  });

  it("pads with self-test when < 3 mistakes", () => {
    const mistakes = [makeMistake({ id: "m1", question: "q1" })];
    const selfTest = [
      { question: "st1", options: ["A"], answer: "A" },
      { question: "st2", options: ["B"], answer: "B" },
      { question: "st3", options: ["C"], answer: "C" },
    ];
    const result = getReviewQuestions(mistakes, "lesson-01", selfTest);
    expect(result.length).toBeGreaterThanOrEqual(3);
  });

  it("does not duplicate self-test that are already mistakes", () => {
    const mistakes = [makeMistake({ id: "m1", question: "shared" })];
    const selfTest = [
      { question: "shared", options: ["A"], answer: "A" },
      { question: "unique", options: ["B"], answer: "B" },
    ];
    const result = getReviewQuestions(mistakes, "lesson-01", selfTest);
    expect(result.filter((q) => q.question === "shared").length).toBe(1);
  });

  it("caps at 10 questions", () => {
    const mistakes = Array.from({ length: 15 }, (_, i) =>
      makeMistake({ id: `m${i}`, question: `q${i}`, count: 15 - i })
    );
    expect(getReviewQuestions(mistakes, "lesson-01")).toHaveLength(10);
  });
});

describe("markLessonCompleted", () => {
  it("adds lesson to completedLessons", () => {
    const data = makeData();
    const result = markLessonCompleted(data, "lesson-01", 8, 10);
    expect(result.completedLessons).toContain("lesson-01");
    expect(result.lessonProgress["lesson-01"].completed).toBe(true);
    expect(result.lessonProgress["lesson-01"].originalCompletedAt).toBeDefined();
  });

  it("sets nextReviewAt to 1 day from now", () => {
    const data = makeData();
    const result = markLessonCompleted(data, "lesson-01", 8, 10);
    const nextDate = new Date(result.lessonProgress["lesson-01"].nextReviewAt!);
    const now = new Date();
    const diffDays = Math.abs(nextDate.getTime() - now.getTime()) / 86400000;
    expect(diffDays).toBeLessThan(2);
  });

  it("does not reset an existing review schedule", () => {
    const existing = makeProgress({
      review1Day: true,
      nextReviewAt: "2026-07-01T00:00:00.000Z",
    });
    const data = makeData({ lessonProgress: { "lesson-01": existing } });
    const result = markLessonCompleted(data, "lesson-01", 10, 10);
    expect(result.lessonProgress["lesson-01"].review1Day).toBe(true);
    expect(result.lessonProgress["lesson-01"].nextReviewAt).toBe("2026-07-01T00:00:00.000Z");
  });
});

describe("updateLessonScore", () => {
  it("creates progress for new lesson", () => {
    const data = makeData();
    const result = updateLessonScore(data, "lesson-01", 9, 10);
    expect(result.lessonProgress["lesson-01"].bestScore).toBe(9);
    expect(result.lessonProgress["lesson-01"].totalQuestions).toBe(10);
  });

  it("preserves existing bestScore when new score is lower", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({ bestScore: 10, completed: true }),
      },
    });
    const result = updateLessonScore(data, "lesson-01", 5, 10);
    expect(result.lessonProgress["lesson-01"].bestScore).toBe(10);
  });

  it("marks an existing incomplete lesson complete after passing", () => {
    const data = makeData({
      lessonProgress: {
        "lesson-01": makeProgress({ completed: false, bestScore: 3 }),
      },
    });
    const result = updateLessonScore(data, "lesson-01", 8, 10);
    expect(result.lessonProgress["lesson-01"].completed).toBe(true);
  });
});

describe("parseProgress - migration", () => {
  it("parses current version as-is", () => {
    expect(parseProgress(JSON.stringify(getDefaultProgress())).version).toBe(CURRENT_VERSION);
  });

  it("migrates from v1 with originalCompletedAt", () => {
    const result = parseProgress(JSON.stringify(["lesson-01"]));
    expect(result.lessonProgress["lesson-01"].originalCompletedAt).toBeDefined();
  });

  it("migrates v3 to v4 with originalCompletedAt", () => {
    const v3 = {
      version: 3,
      completedLessons: ["lesson-01"],
      lessonProgress: {
        "lesson-01": {
          completed: true, bestScore: 8, totalQuestions: 10,
          lastAttemptAt: "2026-06-20T00:00:00.000Z",
          nextReviewAt: "2026-06-21T00:00:00.000Z",
          review1Day: false, review7Day: false, review30Day: false, mistakeIds: [],
        },
      },
      romanizationPreference: true,
      mistakeRecords: {},
    };
    const result = parseProgress(JSON.stringify(v3));
    expect(result.lessonProgress["lesson-01"].originalCompletedAt).toBe("2026-06-20T00:00:00.000Z");
  });

  it("returns default on invalid JSON", () => {
    expect(parseProgress("not json").version).toBe(CURRENT_VERSION);
  });
});

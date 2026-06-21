# Korean Learning Enhancement Design

**Date**: 2026-06-21
**Scope**: 5 enhancements to the Korean learning feature — error types, smarter review, auto-explanations, output tasks, next-day mastery

---

## Overview

The current Korean learning system has a solid foundation: 7 exercise types, 3-tier spaced repetition (1/7/30-day), mistake tracking by frequency, and a review center. These enhancements add depth to the error tracking, intelligence to the review algorithm, and a production-based output step to each lesson.

**Approach**: Error Type as First-Class Module — new `lib/korean-error-types.ts` module with classification logic and explanation templates, integrated into existing types and UI with minimal disruption.

---

## 1. Error Type System

### New File: `lib/korean-error-types.ts`

**Error type enum:**

```ts
type ErrorType = "pronunciation" | "meaning" | "grammar" | "spelling" | "listening"
```

**Classification strategy** — hybrid (manual tag > auto-inference):

| Exercise type | Auto-inferred error type |
|---|---|
| `listening-choice` wrong answer | `listening` |
| `dictation` wrong answer | `pronunciation` (similar sound) or `spelling` (similar spelling) |
| `fill-in` wrong answer | `grammar` (particle/tense error) or `spelling` |
| `matching` wrong pair | `meaning` |
| `ordering` wrong | `grammar` |
| `reading-choice` / `image-choice` | `meaning` (default) or `grammar` (if grammar keyword in question) |
| `oral-response` low self-assessment | `pronunciation` |
| `sentence-creation` low self-assessment | `grammar` |

**Auto-inference logic** — `inferErrorType(exerciseType, wrongAnswer, correctAnswer, question?)`:

1. If exercise has `errorTag` field set → use it directly
2. Otherwise, compare wrong vs correct answer:
   - Korean character similarity (Levenshtein on hangul decomposition) → `pronunciation` or `spelling`
   - Known grammar pattern detection (particles: 은/는/이/가/을/를/에/에서, verb endings) → `grammar`
   - Matching exercise → `meaning`
   - Default fallback → `meaning`

**Auto-explanation templates** — `generateExplanation(errorType, wrong, correct)`:

| Error type | Template |
|---|---|
| `pronunciation` | "发音混淆：你写的「{wrong}」和正确答案「{correct}」发音相近" |
| `meaning` | "词义理解：「{wrong}」和「{correct}」意思不同" |
| `grammar` | "语法错误：这里应该用「{correct}」的语法形式" |
| `spelling` | "拼写错误：「{correct}」的正确写法需要注意" |
| `listening` | "听辨偏差：你听到的可能是近似音，正确答案是「{correct}」" |

**Color coding for UI badges:**

| Error type | Color | Emoji |
|---|---|---|
| `pronunciation` | `text-red-500 bg-red-50` | 发音 |
| `meaning` | `text-yellow-600 bg-yellow-50` | 词义 |
| `grammar` | `text-blue-500 bg-blue-50` | 语法 |
| `spelling` | `text-green-500 bg-green-50` | 拼写 |
| `listening` | `text-purple-500 bg-purple-50` | 听辨 |

### Changes to `korean-types.ts`

**`KoreanMistakeRecord` additions:**
- `errorType?: ErrorType` — classified error type
- `autoExplanation?: string` — generated explanation text
- `lastReviewedAt?: string` — ISO timestamp of last review session inclusion (for `neverReviewedBonus` scoring)

**`KoreanExerciseBase` addition:**
- `errorTag?: ErrorType` — optional manual override for error type classification

**New source type:**
- `MistakeSourceType` becomes `"practice" | "selfTest" | "mockTest" | "output"`

---

## 2. Enhanced Review Algorithm

### Current Behavior

`getReviewQuestions()` sorts mistakes by `count` descending, caps at 10, pads with self-test if < 3.

### New Scoring Formula

Each mistake gets a priority score:

```
score = (count × 3)                    // frequency weight
      + (daysSinceLastWrong × 2)       // forgetting curve
      + (neverReviewedBonus: 5)        // unreviewed mistakes get priority
```

### Error Type Clustering

When assembling a review session:
- Prefer mixing error types (varied practice)
- Cap at 2 mistakes of the same type per session
- Fill remaining slots with other error types
- This prevents "10 listening errors in one session"

### `getDueReviewQueue()` Enhancement

Add error type metadata to the queue so the review center can show:
> "第3课：2 listening, 1 grammar errors due"

---

## 3. Next-Day Mastery

### Mastery Flow

```
Lesson self-test passed (80%+)
  → status: "学完了" (learned, yellow badge)
  → 1-day review scheduled
  → User passes 1-day review at 80%+
  → status: "已掌握" (mastered, green badge)
  → Continue to 7-day, 30-day spaced repetition
  → Fails 1-day review → stays "学完了", retry in 1 day
```

### Schema Changes

**`LessonProgress` additions:**
- `mastered: boolean` — `false` by default, set `true` when 1-day review passes
- `completed` now means "passed once" (learned)
- `mastered` means "passed again the next day" (truly mastered)

**`completeReview()` changes:**
- After passing review at >=80%:
  - If `review1Day` is false → mark `review1Day = true`, set `mastered = true`, schedule 7-day review
  - If `review7Day` is false → schedule 30-day review
  - If `review30Day` is false → set `nextReviewAt = null` (fully consolidated)
- After failing review (<80%):
  - Keep `mastered = false`, schedule retry at now + 1 day

### Schema Version Bump

`CURRENT_VERSION = 5` with migration from v4:
- Add `mastered: false` to all existing lesson progress entries
- Existing `completed` lessons with `review1Day: true` → set `mastered: true`
- Existing mistake records get `errorType` auto-classified immediately during migration using `inferErrorType()` (reads `exerciseType`, `userAnswer`, `correctAnswer` from each record)
- Existing mistake records get `autoExplanation` generated during migration
- New mistakes (created after migration) get both fields at creation time in `recordMistake()`

---

## 4. Output Tasks

### New Exercise Types

Added to the `KoreanExercise` discriminated union in `korean-types.ts`:

**1. `oral-response`** — Speak/answer aloud

```ts
interface KoreanOralResponse extends KoreanExerciseBase {
  type: "oral-response"
  prompt: string              // e.g., "用韩语自我介绍"
  sampleAnswer: string        // model answer for self-comparison
  keyPhrases: string[]        // must-include phrases
}
```

**2. `sentence-creation`** — Create original sentences

```ts
interface KoreanSentenceCreation extends KoreanExerciseBase {
  type: "sentence-creation"
  targetGrammar: string       // e.g., "은/는 ... 입니다"
  prompts: string[]           // e.g., "描述你的家人"
  sampleAnswers: string[]     // one per prompt
  keyWords: string[]          // vocabulary that should appear
}
```

### New Component: `KoreanStepOutput.tsx`

A new lesson step (step index 6, pushing mock test to 7) that renders one output task per lesson.

**Lesson data schema addition** (`KoreanLesson`):
- `outputTask?: KoreanOralResponse | KoreanSentenceCreation`

**UI flow:**
1. Show prompt + key phrases/grammar target with examples
2. "开始" button — user speaks/writes (self-paced, no timer)
3. Show model answer for comparison
4. Self-assessment: "我完成得怎么样？" with 1-5 stars
5. If self-assessment <= 2: record as `sourceType: "output"` mistake

**Module-appropriate tasks:**

| Module | Task type | Example prompt |
|---|---|---|
| 1 (basics) | `oral-response` | Self-introduction: name, age, nationality |
| 2 (daily life) | `sentence-creation` | Describe daily routine with time expressions |
| 3 (social) | `oral-response` | Ordering food dialogue |
| 4 (travel) | `sentence-creation` | Ask for directions using grammar points |
| 5 (culture) | `oral-response` | Describe Korean cultural experience |
| 6 (advanced) | `sentence-creation` | Express opinions using advanced grammar |

### Step Navigation Changes

`KOREAN_STEP_LABELS` becomes 7 steps:
```
warmup → input → grammar → analysis → practice → output → summary
```

Step purposes for the new output step: "用韩语表达，检验真正的掌握程度"

Mock test (if present) becomes step 8.

**Lessons without output tasks**: If a lesson's `outputTask` is undefined, the output step is skipped entirely — step nav goes directly from practice to summary. This allows incremental rollout (add output tasks to lessons one module at a time).

---

## 5. UI Changes

### `KoreanLessonPage.tsx`

- Objectives card shows mastery status: "学完了" (yellow) vs "已掌握" (green)
- Step nav includes output task step
- Summary step shows "明天再来复习一次才算真正掌握" instead of "完成"

### `KoreanOverview.tsx`

- Lesson cards: `completed` (yellow check) vs `mastered` (green check)
- New "掌握进度" stat alongside completion: "12/30 已掌握"
- Review queue badge shows due count

### `KoreanStepSummary.tsx`

- After passing self-test: show "学好了！明天再来复习巩固一下" with next review time
- No confetti on first pass — only on mastery (next-day review pass)
- Show "掌握!" confetti when `completeReview()` promotes to mastered

### `app/korean/review/page.tsx`

- Mistake book: each mistake shows error type badge (color-coded pill)
- "为什么错" section on each review card showing `autoExplanation`
- Review result page: error type breakdown chart
- Filter mistakes by error type in mistake book view

### `ReviewExerciseCard.tsx`

- Show error type badge on each question card
- After answering wrong: show `autoExplanation` below correct answer
- Show "相近项对比" for choice exercises: display the user's wrong answer and correct answer side-by-side with a short diff (e.g., for pronunciation errors: highlight the specific character(s) that differ; for grammar errors: highlight the particle/ending that's wrong)
- For non-choice exercises (fill-in, dictation): show wrong vs correct with character-level diff highlighting

---

## Files to Create/Modify

| File | Action | Description |
|---|---|---|
| `lib/korean-error-types.ts` | **Create** | Error type enum, inference logic, explanation templates |
| `lib/korean-types.ts` | Modify | Add `errorType`, `autoExplanation`, `errorTag`, output types |
| `lib/korean-progress-core.ts` | Modify | New review scoring, mastery logic, migration v5 |
| `lib/korean-progress.ts` | Modify | Expose new progress methods |
| `components/korean/KoreanStepOutput.tsx` | **Create** | Output task step component |
| `components/korean/KoreanLessonPage.tsx` | Modify | Add output step, mastery display |
| `components/korean/KoreanStepSummary.tsx` | Modify | Mastery-aware completion flow |
| `components/korean/KoreanOverview.tsx` | Modify | Mastery badges,掌握进度 |
| `components/korean/ReviewExerciseCard.tsx` | Modify | Error type badges, explanations |
| `app/korean/review/page.tsx` | Modify | Error type filtering, breakdown chart |
| `korean-lesson-01.ts` through `korean-lesson-30.ts` | Modify | Add `outputTask` to each lesson |

---

## Success Criteria

1. Every wrong answer gets an error type classification (auto or manual)
2. Review sessions show varied error types, not just highest-frequency errors
3. Each mistake displays "为什么错" explanation automatically
4. Every lesson has an output task (oral or sentence creation)
5. "已掌握" badge only appears after passing next-day review
6. Existing progress data migrates cleanly from v4 to v5

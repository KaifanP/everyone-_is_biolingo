# Korean Review/Mistake System Redesign

## Overview

Redesign the Korean lesson review system from passive flashcard-style to active re-answering. Fix critical bugs in mistake recording, implement 80% threshold, separate "mistake book" from "today's review", and cover all exercise types.

## P0: Critical Bug Fixes

### 1. Fix First Mistake Loss
- `recordMistake` must create `LessonProgress` if it doesn't exist
- Must add `mistakeId` to `lessonProgress[lessonId].mistakeIds`
- Stable ID format: `m-{lessonId}-{source}-{exerciseIndex}-{itemIndex}`

### 2. Review Must Require Re-answering
- Review page shows interactive exercises, not flashcards
- Choice questions: re-select
- Fill-in/dictation: re-type
- Ordering: choose correct order (simplified)
- Matching: choose correct pairs (simplified)
- Remove "mark all as understood" logic
- Only actually correct answers count as resolved

### 3. Hide Answers Before Submission
- Initial state shows question + options only, no highlighting
- User answers, then clicks submit
- After submission: show correct answer, user answer, and explanation

### 4. Enforce 80% Threshold
- Score >= 80%: advance review node (1->7->30->mastered)
- Score < 80%: keep wrong questions, `nextReviewAt` = 1 day
- Result page: current score, unmastered questions, next review date

## P1: Complete Learning Loop

### 5. Auto-fill Questions When No Mistakes
- If due lesson has no mistakes, pull from `lesson.summary.selfTest`
- At least 3 questions per review session
- Max 10 questions per session
- Priority: unresolved mistakes -> high-frequency errors -> self-test questions

### 6. Fix 1/7/30 Day Intervals
- First pass: `nextReviewAt` = now + 1 day
- Pass 1-day review: `nextReviewAt` = now + 7 days (day 7 from learning)
- Pass 7-day review: `nextReviewAt` = now + 30 days (day 30 from learning)
- Pass 30-day review: fully mastered, `nextReviewAt` = null

### 7. Separate Two Entry Points
- "Mistake Book" (错题本): all unresolved mistakes, always accessible
- "Today's Review" (今日复习): only courses past their `nextReviewAt`
- Overview page shows both counts separately

### 8. Cover All Exercise Types
- Matching: record each wrong pair, not just final result
- Fill-in: record per blank (itemIndex), not merge all blanks
- Dictation: preserve Korean text, provide ko-KR playback in review
- Mock test: record question number, listening/reading category, explanation

## P2: Data Reliability & Experience

### 9. Stable Question IDs
- ID = `lessonId + source + exerciseIndex + itemIndex`
- No more first-50-char normalization

### 10. Fix Page State Refresh
- Recalculate queue and counts after completing a review group
- "Continue reviewing other courses" doesn't re-show resolved courses
- Cross-tab and refresh data consistency

### 11. Mobile Result Feedback
- Fixed bottom submit button on mobile
- Show current question number, progress, correct count, remaining
- Error feedback explains "why wrong", not just shows answer

## Architecture

### Data Model Changes

```typescript
// New fields on KoreanMistakeRecord
interface KoreanMistakeRecord {
  // ... existing fields
  id: string;              // Changed: stable composite ID
  itemIndex?: number;      // New: sub-question index for fill-in/matching/dictation
  exerciseIndex?: number;  // New: exercise position in original lesson
  matchingWrongPairs?: { left: string; right: string }[];  // New: wrong pairs for matching
  originalExercise?: KoreanExercise;  // New: preserved exercise data for review replay
}

// New type for review session
interface ReviewSession {
  lessonId: string;
  mistakes: KoreanMistakeRecord[];
  currentIndex: number;
  answers: Record<string, { userAnswer: string; isCorrect: boolean }>;
  startedAt: string;
}
```

### Data Migration
- Version 3 -> 4: add new fields with defaults, regenerate stable IDs

### Component Architecture

```
app/korean/review/page.tsx
  ├── ReviewQueueView          -- Queue list (mistake book + today's review)
  ├── LessonReviewView         -- Single lesson review session
  │     ├── ReviewProgress     -- Progress bar + question counter
  │     ├── ReviewExerciseCard -- Dispatches by exerciseType
  │     │     ├── ReviewChoiceCard      -- Choice questions (reuses original styling)
  │     │     ├── ReviewFillInCard      -- Fill-in (reuses original input logic)
  │     │     ├── ReviewDictationCard   -- Dictation (reuses original + ko-KR playback)
  │     │     ├── ReviewMatchingCard    -- Matching (simplified as choice)
  │     │     └── ReviewOrderingCard    -- Ordering (simplified as choice)
  │     └── SubmitButton       -- Fixed bottom submit button
  └── ReviewResultView         -- Result: score, unmastered questions, next date
```

### Key Logic Changes in korean-progress.ts

1. `recordMistake`: create LessonProgress, add to mistakeIds, stable ID
2. `getDueReviewQueue`: separate into `getDueReviews()` and `getUnresolvedMistakes()`
3. `completeReview`: receive actual score, enforce 80% threshold
4. `getReviewQuestions(lessonId)`: select up to 10 questions with priority logic
5. `fillWithSelfTest(lessonId)`: pull from lesson self-test when no mistakes

### Overview Page Changes

```
KoreanOverview:
  Left card: "错题本" -> totalCount unresolved mistakes
  Right card: "今日复习" -> dueReviews count
  Both link to /korean/review with different initial views
```

## Exercise Type Coverage

| Type | Recording | Review Interaction |
|------|-----------|-------------------|
| Choice | Per question | Reuse original component |
| Fill-in | Per blank (itemIndex) | Reuse original input |
| Dictation | Preserve Korean text + audioId | Reuse original + ko-KR playback |
| Matching | Record wrong pairs | Simplified as choice |
| Ordering | Record original order | Simplified as choice order |
| Self-test | sourceType=selfTest | Choice interaction |
| Mock test | Record number + category + explanation | Reuse corresponding type |

## Testing Requirements

- Unit tests: v3->v4 migration, first mistake, duplicate merge, resolve state, 1/7/30 scheduling
- Cover all exercise types
- E2E: first learn wrong -> homepage shows mistake -> review re-answer -> 80% advance -> count decreases
- Pass: material validation, ESLint, TypeScript, production build, 390px mobile

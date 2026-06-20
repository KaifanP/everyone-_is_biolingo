/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const libDir = path.join(__dirname, "..", "lib");
const componentsDir = path.join(__dirname, "..", "components", "korean");
const pagesDir = path.join(__dirname, "..", "app", "korean");

let errors = 0;
let warnings = 0;

function err(msg) {
  console.error(`❌ ERROR: ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`⚠️  WARN: ${msg}`);
  warnings++;
}

function ok(msg) {
  console.log(`✅ ${msg}`);
}

// ============================================================
// 1. Lesson files exist and export correctly
// ============================================================
console.log("\n=== 1. Lesson files ===");
const lessonFiles = [];
for (let i = 1; i <= 30; i++) {
  const id = String(i).padStart(2, "0");
  const filePath = path.join(libDir, `korean-lesson-${id}.ts`);
  if (!fs.existsSync(filePath)) {
    err(`Missing lesson file: korean-lesson-${id}.ts`);
    continue;
  }
  const content = fs.readFileSync(filePath, "utf-8");
  if (!content.includes("KoreanLesson")) {
    err(`korean-lesson-${id}.ts does not import KoreanLesson type`);
  }
  if (!content.includes(`koreanLesson${id}Data`)) {
    err(`korean-lesson-${id}.ts does not export koreanLesson${id}Data`);
  }
  lessonFiles.push({ id, content, filePath });
  ok(`lesson-${id} exists and exports correctly`);
}

// ============================================================
// 2. Romanization policy: lessons 1-5 only
// ============================================================
console.log("\n=== 2. Romanization policy ===");
for (const lesson of lessonFiles) {
  const num = parseInt(lesson.id, 10);
  const romanizationCount = (lesson.content.match(/romanization:/g) || []).length;
  if (num <= 5) {
    if (romanizationCount === 0) {
      warn(`lesson-${lesson.id} (lesson ${num}) should have romanization but has none`);
    } else {
      ok(`lesson-${lesson.id} has ${romanizationCount} romanization fields (expected for lessons 1-5)`);
    }
  } else {
    if (romanizationCount > 0) {
      err(`lesson-${lesson.id} (lesson ${num}) has ${romanizationCount} romanization fields (must be 0 for lessons 6+)`);
    } else {
      ok(`lesson-${lesson.id} has no romanization (correct for lesson ${num})`);
    }
  }
}

// ============================================================
// 3. Known error patterns
// ============================================================
console.log("\n=== 3. Known error patterns ===");
const KNOWN_ERRORS = [
  { pattern: /straight으로/g, desc: "English 'straight' mixed with Korean - should be '직진으로'" },
  { pattern: /가아다/g, desc: "가아다 is not a word - should be '가다' or '가나다'" },
  { pattern: /补助词/g, desc: "补助词 is incorrect terminology - use '补助动词' or '敬语词尾'" },
  { pattern: /TTMIK/g, desc: "TTMIK reference should not appear" },
  { pattern: /talktomeinkorean/gi, desc: "Talk To Me In Korean reference should not appear" },
  { pattern: /어디에요/g, desc: "어디에요 is nonstandard here - use 어디예요" },
  { pattern: /词首发近浊音/g, desc: "word-initial lax stops should not be taught as voiced" },
  { pattern: /도서관이 9시에 열어요/g, desc: "intransitive library opening requires 열려요" },
  { pattern: /korean:\s*"总的来说"/g, desc: "Chinese text found in Korean vocabulary field" },
  { pattern: /基础辅音又称「松音」/g, desc: "not all basic consonants are lax consonants" },
  { pattern: /横写元音（ㅏ/g, desc: "vertical vowels are mislabeled as horizontal" },
  { pattern: /纵写元音（ㅗ/g, desc: "horizontal vowels are mislabeled as vertical" },
  { pattern: /声带不振动/g, desc: "tense consonants must not be reduced to voicelessness" },
  { pattern: /목말르다/g, desc: "misspelling - use 목마르다" },
  { pattern: /PBT：听力10题/g, desc: "site mini-mock counts must not be presented as official PBT format" },
  { pattern: /IBT：听力10题/g, desc: "site mini-mock counts must not be presented as official IBT format" },
];
for (const lesson of lessonFiles) {
  let lessonErrors = 0;
  for (const { pattern, desc } of KNOWN_ERRORS) {
    const matches = lesson.content.match(pattern);
    if (matches) {
      err(`lesson-${lesson.id}: ${desc} (${matches.length} occurrence(s))`);
      lessonErrors++;
    }
  }
  if (lessonErrors === 0) {
    ok(`lesson-${lesson.id}: no known error patterns`);
  }
}

// ============================================================
// 4. Types file
// ============================================================
console.log("\n=== 4. Types file ===");
const typesPath = path.join(libDir, "korean-types.ts");
if (fs.existsSync(typesPath)) {
  const typesContent = fs.readFileSync(typesPath, "utf-8");
  const requiredTypes = [
    "KoreanLesson",
    "KoreanExercise",
    "KoreanVocabularyItem",
    "KoreanDialogueLine",
    "KoreanGrammarPoint",
    "KoreanCommonError",
    "KoreanMockTestQuestion",
    "KoreanMockTestSection",
    "KOREAN_STEP_LABELS",
    "koreanModules",
  ];
  for (const typeName of requiredTypes) {
    if (!typesContent.includes(typeName)) {
      err(`korean-types.ts missing export: ${typeName}`);
    } else {
      ok(`korean-types.ts exports ${typeName}`);
    }
  }
} else {
  err("Missing korean-types.ts");
}

// ============================================================
// 5. Registry
// ============================================================
console.log("\n=== 5. Lesson registry ===");
const registryPath = path.join(libDir, "korean-lesson-data-registry.ts");
if (fs.existsSync(registryPath)) {
  const registryContent = fs.readFileSync(registryPath, "utf-8");
  for (let i = 1; i <= 30; i++) {
    const id = String(i).padStart(2, "0");
    if (!registryContent.includes(`lesson-${id}`)) {
      err(`Registry missing lesson-${id}`);
    }
  }
  if (registryContent.includes("getKoreanLessonData")) {
    ok("Registry exports getKoreanLessonData");
  } else {
    err("Registry missing getKoreanLessonData function");
  }
  if (registryContent.includes("getAllKoreanLessonIds")) {
    ok("Registry exports getAllKoreanLessonIds");
  } else {
    err("Registry missing getAllKoreanLessonIds function");
  }
} else {
  err("Missing korean-lesson-data-registry.ts");
}

// ============================================================
// 6. Progress hook
// ============================================================
console.log("\n=== 6. Progress hook ===");
const progressPath = path.join(libDir, "korean-progress.ts");
if (fs.existsSync(progressPath)) {
  const progressContent = fs.readFileSync(progressPath, "utf-8");
  const requiredExports = [
    "useKoreanProgress",
    "markLessonCompleted",
    "updateLessonScore",
    "getDueReviews",
    "KoreanProgressData",
  ];
  for (const exportName of requiredExports) {
    if (!progressContent.includes(exportName)) {
      err(`korean-progress.ts missing export: ${exportName}`);
    } else {
      ok(`korean-progress.ts exports ${exportName}`);
    }
  }
  if (progressContent.includes("version: 2") || progressContent.includes("CURRENT_VERSION = 2")) {
    ok("Progress data is version 2");
  } else {
    warn("Progress data may not be version 2");
  }
} else {
  err("Missing korean-progress.ts");
}

// ============================================================
// 7. Korean browser speech configuration
// ============================================================
console.log("\n=== 7. Korean browser speech ===");
const audioHooksPath = path.join(libDir, "korean-audio-hooks.ts");
const audioHooksContent = fs.readFileSync(audioHooksPath, "utf-8");
if (audioHooksContent.includes('const TTS_LANG = "ko-KR"')) ok("Browser speech language is fixed to ko-KR");
else err("Browser speech language must be fixed to ko-KR");
if (audioHooksContent.includes("mimo_default") || audioHooksContent.includes("audio/korean")) {
  err("Deprecated MiMo/local Korean audio path is still active");
} else {
  ok("Deprecated MiMo/local audio playback is disabled");
}

// ============================================================
// 8. Components
// ============================================================
console.log("\n=== 8. Components ===");
const requiredComponents = [
  "KoreanOverview.tsx",
  "KoreanLessonPage.tsx",
  "KoreanStepNav.tsx",
  "KoreanStepWarmup.tsx",
  "KoreanStepInput.tsx",
  "KoreanStepGrammar.tsx",
  "KoreanStepAnalysis.tsx",
  "KoreanStepPractice.tsx",
  "KoreanStepSummary.tsx",
  "KoreanMockTest.tsx",
  "KoreanAudioPlayer.tsx",
];
for (const comp of requiredComponents) {
  const compPath = path.join(componentsDir, comp);
  if (!fs.existsSync(compPath)) {
    err(`Missing component: components/korean/${comp}`);
  } else {
    ok(`components/korean/${comp} exists`);
  }
}

// ============================================================
// 9. Pages
// ============================================================
console.log("\n=== 9. Pages ===");
const requiredPages = [
  "page.tsx",
  "[lessonId]/page.tsx",
  "credits/page.tsx",
];
for (const page of requiredPages) {
  const pagePath = path.join(pagesDir, page);
  if (!fs.existsSync(pagePath)) {
    err(`Missing page: app/korean/${page}`);
  } else {
    ok(`app/korean/${page} exists`);
  }
}

// ============================================================
// 10. Exercise validation
// ============================================================
console.log("\n=== 10. Exercise validation ===");
let totalExercises = 0;
const exerciseTypeCounts = {};

for (const lesson of lessonFiles) {
  const content = lesson.content;

  // Count exercise types
  const typeMatches = content.match(/type:\s*"(listening-choice|reading-choice|matching|ordering|fill-in|dictation|image-choice)"/g) || [];
  for (const match of typeMatches) {
    const type = match.match(/"([^"]+)"/)[1];
    exerciseTypeCounts[type] = (exerciseTypeCounts[type] || 0) + 1;
    totalExercises++;
  }

  // Check that image-choice exercises have imageUrl
  const imageChoiceBlocks = content.split('type: "image-choice"');
  for (let i = 1; i < imageChoiceBlocks.length; i++) {
    const block = imageChoiceBlocks[i].slice(0, 500);
    if (!block.includes("imageUrl:")) {
      warn(`lesson-${lesson.id}: image-choice exercise missing imageUrl field`);
    }
  }
}

console.log(`Total exercises: ${totalExercises}`);
for (const [type, count] of Object.entries(exerciseTypeCounts)) {
  console.log(`  ${type}: ${count}`);
}

// ============================================================
// 11. Vocabulary count and uniqueness
// ============================================================
console.log("\n=== 11. Vocabulary ===");
let totalVocab = 0;
const allVocabWords = new Set();
const duplicateVocab = [];

for (const lesson of lessonFiles) {
  const content = lesson.content;
  const vocabSection = content.split("vocabulary:")[1]?.split("],")[0] || "";
  const vocabKorean = vocabSection.match(/korean:\s*"([^"]+)"/g) || [];

  for (const match of vocabKorean) {
    const word = match.match(/korean:\s*"([^"]+)"/)[1];
    totalVocab++;
    if (allVocabWords.has(word)) {
      duplicateVocab.push(word);
    }
    allVocabWords.add(word);
  }
}

console.log(`Total vocabulary items: ${totalVocab}`);
console.log(`Unique vocabulary: ${allVocabWords.size}`);
console.log(`Repeated vocabulary across lessons: ${new Set(duplicateVocab).size} (intentional spaced recycling)`);
if (allVocabWords.size >= 600) ok(`Unique vocabulary count ${allVocabWords.size} meets the A1 course target (600+)`);
else err(`Unique vocabulary count ${allVocabWords.size} below target (600+)`);

// ============================================================
// 12. Mock test validation (lesson 30)
// ============================================================
console.log("\n=== 12. Mock test (lesson 30) ===");
const lesson30 = lessonFiles.find((l) => l.id === "30");
if (lesson30) {
  const content = lesson30.content;

  // Check PBT question count
  const pbtListening = (content.match(/section: "listening"/g) || []).length;
  const pbtReading = (content.match(/section: "reading"/g) || []).length;
  console.log(`  Listening questions: ${pbtListening}`);
  console.log(`  Reading questions: ${pbtReading}`);

  if (pbtListening >= 10) {
    ok(`PBT has ${pbtListening} listening questions (need 10)`);
  } else {
    err(`PBT has only ${pbtListening} listening questions (need 10)`);
  }

  if (pbtReading >= 14) {
    ok(`PBT has ${pbtReading} reading questions (need 14 for PBT, 10 for IBT)`);
  } else {
    err(`PBT has only ${pbtReading} reading questions (need 14 for PBT)`);
  }

  // Check that listening questions have transcript
  if (content.includes("transcript:")) {
    ok("Listening questions have transcript field");
  } else {
    warn("Listening questions may be missing transcript field");
  }

  // Check that listening questions don't have inline transcript
  if (content.includes("[듣기:") || content.includes("[듣기 :")) {
    err("Listening questions have inline transcript in question text - should use transcript field");
  } else {
    ok("No inline transcript in listening question text");
  }

  // Check reading questions have passage
  const readingSection = content.split("readingQuestions:")[1] || "";
  const readingPassages = (readingSection.match(/passage:/g) || []).length;
  if (readingPassages >= 5) {
    ok(`Reading questions have ${readingPassages} passages`);
  } else {
    warn(`Reading questions have only ${readingPassages} passages - may need more`);
  }
} else {
  err("Lesson 30 file not found");
}

// ============================================================
// 13. Audio hooks
// ============================================================
console.log("\n=== 13. Audio hooks ===");
if (fs.existsSync(audioHooksPath)) {
  const hooksContent = fs.readFileSync(audioHooksPath, "utf-8");
  if (hooksContent.includes("useKoreanTTS")) {
    ok("Audio hooks exports useKoreanTTS");
  } else {
    err("Audio hooks missing useKoreanTTS");
  }
  if (hooksContent.includes("useKoreanAudioPlayer")) {
    ok("Audio hooks exports useKoreanAudioPlayer");
  } else {
    err("Audio hooks missing useKoreanAudioPlayer");
  }
  if (hooksContent.includes("TTS_LANG") && hooksContent.includes("ko-KR")) {
    ok("TTS language set to ko-KR");
  } else {
    warn("TTS language may not be set to ko-KR");
  }
} else {
  err("Missing korean-audio-hooks.ts");
}

// ============================================================
// Summary
// ============================================================
console.log("\n=== Validation Summary ===");
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);
if (errors === 0 && warnings === 0) {
  console.log("✅ All validation checks passed!");
  process.exit(0);
} else {
  console.log("❌ Validation failed. Warnings are treated as failures.");
  process.exit(1);
}

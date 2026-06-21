export interface KoreanCourseModule {
  id: string;
  number: number;
  title: string;
  titleEn: string;
  description: string;
  learningOutcome: string;
  prerequisite: string;
  lessons: KoreanLessonInfo[];
}

export interface KoreanLessonInfo {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  titleEn: string;
}

export interface KoreanDialogueLine {
  speaker: string;
  korean: string;
  chinese: string;
  romanization?: string;
}

export interface KoreanVocabularyItem {
  korean: string;
  chinese: string;
  romanization?: string;
  partOfSpeech: string;
  example?: {
    korean: string;
    chinese: string;
  };
}

import type { ErrorType } from "./korean-error-types";
export type { ErrorType };

export type MistakeSourceType = "practice" | "selfTest" | "mockTest" | "output";

export interface KoreanMistakeRecord {
  id: string;
  lessonId: string;
  sourceType: MistakeSourceType;
  exerciseType: string;
  question: string;
  options?: string[];
  userAnswer: string;
  correctAnswer: string;
  count: number;
  createdAt: string;
  lastWrongAt: string;
  resolved: boolean;
  resolvedAt?: string;
  itemIndex?: number;
  exerciseIndex?: number;
  matchingWrongPairs?: { left: string; right: string }[];
  originalExercise?: KoreanExercise;
  errorType?: ErrorType;
  autoExplanation?: string;
  lastReviewedAt?: string;
}

export interface ReviewSession {
  lessonId: string;
  mistakes: KoreanMistakeRecord[];
  currentIndex: number;
  answers: Record<string, { userAnswer: string; isCorrect: boolean }>;
  startedAt: string;
}

export interface KoreanGrammarPoint {
  name: string;
  nameEn: string;
  structure: string;
  meaning: string;
  usage: string;
  examples: {
    korean: string;
    chinese: string;
    note?: string;
  }[];
  chineseTransfer?: string;
}

export interface KoreanCommonError {
  wrong: string;
  correct: string;
  reason: string;
}

export interface KoreanExerciseBase {
  type: string;
  instructions: string;
  instructionsEn: string;
  errorTag?: ErrorType;
}

export interface KoreanListeningChoice extends KoreanExerciseBase {
  type: "listening-choice";
  audioId?: string;
  audioText?: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface KoreanReadingChoice extends KoreanExerciseBase {
  type: "reading-choice";
  passage?: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface KoreanMatching extends KoreanExerciseBase {
  type: "matching";
  pairs: { left: string; right: string }[];
  explanation?: string;
}

export interface KoreanOrdering extends KoreanExerciseBase {
  type: "ordering";
  items: string[];
  correctOrder: string[];
  explanation?: string;
}

export interface KoreanFillIn extends KoreanExerciseBase {
  type: "fill-in";
  sentences: {
    sentence: string;
    answer: string;
    hint?: string;
  }[];
  explanation?: string;
}

export interface KoreanDictation extends KoreanExerciseBase {
  type: "dictation";
  audioId?: string;
  korean?: string;
  chinese?: string;
  sentences?: {
    sentence: string;
    answer: string;
    hint?: string;
    audioId?: string;
  }[];
  explanation?: string;
}

export interface KoreanImageChoice extends KoreanExerciseBase {
  type: "image-choice";
  imageUrl?: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface KoreanOralResponse extends KoreanExerciseBase {
  type: "oral-response";
  prompt: string;
  sampleAnswer: string;
  keyPhrases: string[];
}

export interface KoreanSentenceCreation extends KoreanExerciseBase {
  type: "sentence-creation";
  targetGrammar: string;
  prompts: string[];
  sampleAnswers: string[];
  keyWords: string[];
}

export type KoreanExercise =
  | KoreanListeningChoice
  | KoreanReadingChoice
  | KoreanMatching
  | KoreanOrdering
  | KoreanFillIn
  | KoreanDictation
  | KoreanImageChoice
  | KoreanOralResponse
  | KoreanSentenceCreation;

export interface KoreanAudioAsset {
  id: string;
  text: string;
  file: string;
  source: "human" | "tts";
  sourceUrl?: string;
  author?: string;
  license?: string;
  licenseUrl?: string;
  modified?: string;
  sha256?: string;
}

export interface KoreanMockTestQuestion {
  number: number;
  section: "listening" | "reading";
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
  passage?: string;
  transcript?: string;
}

export interface KoreanMockTestSection {
  mode: "pbt" | "ibt";
  listeningQuestions: KoreanMockTestQuestion[];
  readingQuestions: KoreanMockTestQuestion[];
  timeLimitMinutes: number;
}

export interface KoreanLesson {
  info: KoreanLessonInfo;
  objectives: string[];
  warmup: {
    questions: string[];
    culturalNote?: string;
  };
  input: {
    dialogue: {
      title: string;
      lines: KoreanDialogueLine[];
    };
    vocabulary: KoreanVocabularyItem[];
  };
  grammar: {
    points: KoreanGrammarPoint[];
  };
  analysis: {
    commonErrors: KoreanCommonError[];
    keyQuestions: string[];
  };
  practice: KoreanExercise[];
  outputTask?: KoreanOralResponse | KoreanSentenceCreation;
  summary: {
    keyPoints: { title: string; items: string[] }[];
    mindMap: string;
    selfTest: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
  mockTest?: KoreanMockTestSection;
}

export const KOREAN_STEP_LABELS = [
  { key: "warmup", label: "热身", labelEn: "Warm-up", icon: "🔥" },
  { key: "input", label: "语料输入", labelEn: "Input", icon: "👂" },
  { key: "grammar", label: "规则拆解", labelEn: "Grammar", icon: "📖" },
  { key: "analysis", label: "易错辨析", labelEn: "Analysis", icon: "🔍" },
  { key: "practice", label: "听读练习", labelEn: "Practice", icon: "✏️" },
  { key: "output", label: "输出任务", labelEn: "Output", icon: "🗣️" },
  { key: "summary", label: "检索总结", labelEn: "Summary", icon: "📋" },
] as const;

export type KoreanStepKey = (typeof KOREAN_STEP_LABELS)[number]["key"];

export const koreanModules: KoreanCourseModule[] = [
  {
    id: "01",
    number: 1,
    title: "韩文与发音",
    titleEn: "Hangul & Pronunciation",
    description: "掌握韩文字母和基本发音规则",
    learningOutcome: "能认读所有韩文字母，正确拼读基本音节，理解高频音变",
    prerequisite: "无，零基础可开始",
    lessons: [
      { id: "lesson-01", moduleId: "01", number: 1, title: "韩文字块与基础元音", titleEn: "Hangul Blocks & Basic Vowels" },
      { id: "lesson-02", moduleId: "01", number: 2, title: "基础辅音与拼读", titleEn: "Basic Consonants & Syllable Reading" },
      { id: "lesson-03", moduleId: "01", number: 3, title: "复合元音与送气/紧辅音", titleEn: "Compound Vowels & Aspirated/Tense Consonants" },
      { id: "lesson-04", moduleId: "01", number: 4, title: "收音（终声）", titleEn: "Final Consonants (Batchim)" },
      { id: "lesson-05", moduleId: "01", number: 5, title: "连音与音变规则", titleEn: "Linking & Sound Change Rules" },
    ],
  },
  {
    id: "02",
    number: 2,
    title: "认识人与事物",
    titleEn: "People & Things",
    description: "自我介绍、指示代词、存在表达",
    learningOutcome: "能进行基本自我介绍，描述人和事物",
    prerequisite: "完成模块1或掌握韩文字母",
    lessons: [
      { id: "lesson-06", moduleId: "02", number: 6, title: "问候与自我介绍", titleEn: "Greetings & Self-introduction" },
      { id: "lesson-07", moduleId: "02", number: 7, title: "指示代词与疑问词", titleEn: "Demonstratives & Question Words" },
      { id: "lesson-08", moduleId: "02", number: 8, title: "主题/主语助词与도", titleEn: "Topic/Subject Particles & 도" },
      { id: "lesson-09", moduleId: "02", number: 9, title: "存在表达与位置", titleEn: "Existence & Location" },
      { id: "lesson-10", moduleId: "02", number: 10, title: "汉字词数字与日期", titleEn: "Sino-Korean Numbers & Date" },
    ],
  },
  {
    id: "03",
    number: 3,
    title: "时间与日常行动",
    titleEn: "Time & Daily Actions",
    description: "时间表达、基本动词、否定句",
    learningOutcome: "能描述日常活动和时间安排",
    prerequisite: "完成模块2或掌握基本问候和数字",
    lessons: [
      { id: "lesson-11", moduleId: "03", number: 11, title: "固有词数字与量词", titleEn: "Native Korean Numbers & Counters" },
      { id: "lesson-12", moduleId: "03", number: 12, title: "基本动词活用", titleEn: "Basic Verb Conjugation" },
      { id: "lesson-13", moduleId: "03", number: 13, title: "时间与场所助词", titleEn: "Time & Place Particles" },
      { id: "lesson-14", moduleId: "03", number: 14, title: "否定表达", titleEn: "Negation" },
      { id: "lesson-15", moduleId: "03", number: 15, title: "疑问词与并列", titleEn: "Question Words & Coordination" },
    ],
  },
  {
    id: "04",
    number: 4,
    title: "过去、计划与连接",
    titleEn: "Past, Future & Connection",
    description: "过去时、将来时、愿望、进行、连接词尾",
    learningOutcome: "能描述过去经历和未来计划",
    prerequisite: "完成模块3或掌握基本动词活用",
    lessons: [
      { id: "lesson-16", moduleId: "04", number: 16, title: "过去时", titleEn: "Past Tense" },
      { id: "lesson-17", moduleId: "04", number: 17, title: "将来时与计划", titleEn: "Future Tense & Plans" },
      { id: "lesson-18", moduleId: "04", number: 18, title: "愿望表达", titleEn: "Expressing Desire" },
      { id: "lesson-19", moduleId: "04", number: 19, title: "进行时与频率", titleEn: "Progressive & Frequency" },
      { id: "lesson-20", moduleId: "04", number: 20, title: "连接词尾", titleEn: "Connective Endings" },
    ],
  },
  {
    id: "05",
    number: 5,
    title: "功能表达",
    titleEn: "Functional Expressions",
    description: "请求、许可、义务、比较、修饰语",
    learningOutcome: "能在实际场景中使用功能表达",
    prerequisite: "完成模块4或掌握时态表达",
    lessons: [
      { id: "lesson-21", moduleId: "05", number: 21, title: "请求与命令", titleEn: "Requests & Commands" },
      { id: "lesson-22", moduleId: "05", number: 22, title: "能力与许可", titleEn: "Ability & Permission" },
      { id: "lesson-23", moduleId: "05", number: 23, title: "义务与禁止", titleEn: "Obligation & Prohibition" },
      { id: "lesson-24", moduleId: "05", number: 24, title: "比较与天气", titleEn: "Comparison & Weather" },
      { id: "lesson-25", moduleId: "05", number: 25, title: "修饰语", titleEn: "Modifiers" },
    ],
  },
  {
    id: "06",
    number: 6,
    title: "TOPIK I 基础入门",
    titleEn: "TOPIK I Fundamentals",
    description: "敬语、公共表达、应试策略与模拟测试",
    learningOutcome: "能应对TOPIK I基础考试要求",
    prerequisite: "完成模块5或掌握基本功能表达",
    lessons: [
      { id: "lesson-26", moduleId: "06", number: 26, title: "敬语表达", titleEn: "Honorifics" },
      { id: "lesson-27", moduleId: "06", number: 27, title: "公共生活表达", titleEn: "Public Life Expressions" },
      { id: "lesson-28", moduleId: "06", number: 28, title: "TOPIK阅读策略", titleEn: "TOPIK Reading Strategies" },
      { id: "lesson-29", moduleId: "06", number: 29, title: "TOPIK听力策略", titleEn: "TOPIK Listening Strategies" },
      { id: "lesson-30", moduleId: "06", number: 30, title: "模拟测试与复习", titleEn: "Mock Test & Review" },
    ],
  },
];

export function getKoreanModuleByLessonId(lessonId: string): KoreanCourseModule | undefined {
  return koreanModules.find((mod) =>
    mod.lessons.some((lesson) => lesson.id === lessonId)
  );
}

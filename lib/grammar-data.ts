export interface ModuleInfo {
  id: string;
  number: number;
  title: string;
  titleEn: string;
  description: string;
  units: UnitInfo[];
}

export interface UnitInfo {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  titleEn: string;
}

export const modules: ModuleInfo[] = [
  {
    id: "01",
    number: 1,
    title: "时态与体态",
    titleEn: "Tenses & Aspects",
    description: "掌握英语12种时态，建立时态思维",
    units: [
      { id: "unit-01", moduleId: "01", number: 1, title: "时态体系总览", titleEn: "Tense System Overview" },
      { id: "unit-02", moduleId: "01", number: 2, title: "现在完成时 vs 一般过去时", titleEn: "Present Perfect vs Simple Past" },
      { id: "unit-03", moduleId: "01", number: 3, title: "现在完成进行时", titleEn: "Present Perfect Continuous" },
      { id: "unit-04", moduleId: "01", number: 4, title: "过去完成时", titleEn: "Past Perfect" },
      { id: "unit-05", moduleId: "01", number: 5, title: "过去完成进行时", titleEn: "Past Perfect Continuous" },
      { id: "unit-06", moduleId: "01", number: 6, title: "将来时态系统", titleEn: "Future Tense System" },
      { id: "unit-07", moduleId: "01", number: 7, title: "将来完成时与将来完成进行时", titleEn: "Future Perfect & Future Perfect Continuous" },
      { id: "unit-08", moduleId: "01", number: 8, title: "时态综合与实战", titleEn: "Tenses: Comprehensive Practice" },
    ],
  },
  {
    id: "02",
    number: 2,
    title: "情态动词",
    titleEn: "Modal Verbs",
    description: "掌握情态动词的多种含义与用法",
    units: [
      { id: "unit-09", moduleId: "02", number: 9, title: "情态动词基础：能力与许可", titleEn: "Modals: Ability & Permission" },
      { id: "unit-10", moduleId: "02", number: 10, title: "义务与建议", titleEn: "Obligation & Suggestion" },
      { id: "unit-11", moduleId: "02", number: 11, title: "推测与可能性（现在/将来）", titleEn: "Deduction & Possibility (Present/Future)" },
      { id: "unit-12", moduleId: "02", number: 12, title: "推测与可能性（过去）", titleEn: "Deduction & Possibility (Past)" },
      { id: "unit-13", moduleId: "02", number: 13, title: "情态动词表示习惯与特征", titleEn: "Modals: Habits & Characteristics" },
      { id: "unit-14", moduleId: "02", number: 14, title: "情态动词综合与实战", titleEn: "Modals: Comprehensive Practice" },
    ],
  },
  {
    id: "03",
    number: 3,
    title: "从句系统",
    titleEn: "Clause System",
    description: "掌握名词性从句、定语从句和状语从句",
    units: [
      { id: "unit-15", moduleId: "03", number: 15, title: "从句概述与名词性从句入门", titleEn: "Clause Overview & Noun Clauses" },
      { id: "unit-16", moduleId: "03", number: 16, title: "名词性从句详解", titleEn: "Noun Clauses in Detail" },
      { id: "unit-17", moduleId: "03", number: 17, title: "定语从句入门：限定性定语从句", titleEn: "Relative Clauses: Defining" },
      { id: "unit-18", moduleId: "03", number: 18, title: "定语从句进阶：非限定性定语从句", titleEn: "Relative Clauses: Non-defining" },
      { id: "unit-19", moduleId: "03", number: 19, title: "定语从句高级：特殊用法与缩减", titleEn: "Relative Clauses: Advanced" },
      { id: "unit-20", moduleId: "03", number: 20, title: "状语从句：时间与条件", titleEn: "Adverbial Clauses: Time & Condition" },
      { id: "unit-21", moduleId: "03", number: 21, title: "状语从句：原因、结果、目的", titleEn: "Adverbial Clauses: Cause, Result, Purpose" },
      { id: "unit-22", moduleId: "03", number: 22, title: "状语从句：让步、比较、方式", titleEn: "Adverbial Clauses: Concession, Comparison, Manner" },
      { id: "unit-23", moduleId: "03", number: 23, title: "从句综合与嵌套", titleEn: "Clauses: Comprehensive & Nested" },
      { id: "unit-24", moduleId: "03", number: 24, title: "从句系统实战", titleEn: "Clauses: Practice" },
    ],
  },
  {
    id: "04",
    number: 4,
    title: "被动语态与间接引语",
    titleEn: "Passive Voice & Reported Speech",
    description: "掌握被动语态和间接引语的转换",
    units: [
      { id: "unit-25", moduleId: "04", number: 25, title: "被动语态基础", titleEn: "Passive Voice Basics" },
      { id: "unit-26", moduleId: "04", number: 26, title: "被动语态进阶", titleEn: "Passive Voice Advanced" },
      { id: "unit-27", moduleId: "04", number: 27, title: "间接引语基础", titleEn: "Reported Speech Basics" },
      { id: "unit-28", moduleId: "04", number: 28, title: "间接引语进阶", titleEn: "Reported Speech Advanced" },
      { id: "unit-29", moduleId: "04", number: 29, title: "被动语态与间接引语综合实战", titleEn: "Passive & Reported Speech Practice" },
    ],
  },
  {
    id: "05",
    number: 5,
    title: "非谓语动词",
    titleEn: "Non-finite Verbs",
    description: "掌握不定式、动名词和分词的用法",
    units: [
      { id: "unit-30", moduleId: "05", number: 30, title: "不定式基础", titleEn: "Infinitive Basics" },
      { id: "unit-31", moduleId: "05", number: 31, title: "动名词基础", titleEn: "Gerund Basics" },
      { id: "unit-32", moduleId: "05", number: 32, title: "不定式 vs 动名词", titleEn: "Infinitive vs Gerund" },
      { id: "unit-33", moduleId: "05", number: 33, title: "分词：现在分词与过去分词", titleEn: "Participles: Present & Past" },
      { id: "unit-34", moduleId: "05", number: 34, title: "分词短语与独立主格", titleEn: "Participial Phrases & Absolute Construction" },
      { id: "unit-35", moduleId: "05", number: 35, title: "非谓语动词综合实战", titleEn: "Non-finite Verbs Practice" },
    ],
  },
  {
    id: "06",
    number: 6,
    title: "特殊句式",
    titleEn: "Special Sentence Patterns",
    description: "掌握倒装、强调、虚拟语气等特殊句式",
    units: [
      { id: "unit-36", moduleId: "06", number: 36, title: "倒装句", titleEn: "Inversion" },
      { id: "unit-37", moduleId: "06", number: 37, title: "强调句", titleEn: "Cleft Sentences" },
      { id: "unit-38", moduleId: "06", number: 38, title: "虚拟语气", titleEn: "Subjunctive Mood" },
      { id: "unit-39", moduleId: "06", number: 39, title: "省略与替代", titleEn: "Ellipsis & Substitution" },
    ],
  },
  {
    id: "07",
    number: 7,
    title: "词性与搭配",
    titleEn: "Parts of Speech & Collocations",
    description: "掌握介词、连词、冠词等词性及常见搭配",
    units: [
      { id: "unit-40", moduleId: "07", number: 40, title: "介词与介词短语", titleEn: "Prepositions & Prepositional Phrases" },
      { id: "unit-41", moduleId: "07", number: 41, title: "连词与逻辑关系", titleEn: "Conjunctions & Logic" },
      { id: "unit-42", moduleId: "07", number: 42, title: "冠词与限定词", titleEn: "Articles & Determiners" },
    ],
  },
];

export function getUnitInfo(unitId: string): UnitInfo | undefined {
  for (const mod of modules) {
    const unit = mod.units.find((u) => u.id === unitId);
    if (unit) return unit;
  }
  return undefined;
}

export function getModuleByUnitId(unitId: string): ModuleInfo | undefined {
  return modules.find((m) => m.units.some((u) => u.id === unitId));
}

export function getAllUnitIds(): string[] {
  return modules.flatMap((m) => m.units.map((u) => u.id));
}

export const STEP_LABELS = [
  { key: "leadIn", label: "导入", labelEn: "Lead-in", icon: "💡" },
  { key: "explanation", label: "讲解", labelEn: "Presentation", icon: "📖" },
  { key: "analysis", label: "辨析", labelEn: "Analysis", icon: "🔍" },
  { key: "practice", label: "练习", labelEn: "Practice", icon: "✏️" },
  { key: "production", label: "产出", labelEn: "Production", icon: "🎯" },
  { key: "summary", label: "总结", labelEn: "Summary", icon: "📋" },
] as const;

export type StepKey = (typeof STEP_LABELS)[number]["key"];

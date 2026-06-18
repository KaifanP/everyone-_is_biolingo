import { UnitData } from "./unit-01-data";

export const unit15Data: UnitData = {
  info: {
    id: "unit-15",
    moduleId: "03",
    number: 15,
    title: "从句概述与名词性从句入门",
    titleEn: "Clause Overview & Noun Clause Basics",
  },
  objectives: [
    "理解从句的概念和类型",
    "掌握名词性从句的基本结构",
    "掌握that引导的名词性从句",
    "在句子中正确使用名词性从句",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "<strong>What he said</strong> surprised me.",
        "I don't know <strong>whether he will come</strong>.",
        "The fact is <strong>that he is wrong</strong>.",
        "The news <strong>that he won</strong> made us happy.",
      ],
      answer:
        "这些划线部分在句子中充当名词的角色：<strong>主语从句</strong>（第1句）、<strong>宾语从句</strong>（第2句）、<strong>表语从句</strong>（第3句）、<strong>同位语从句</strong>（第4句）。",
    },
    comparison: {
      chinese: [
        { text: "他说的话让我惊讶。", note: "\"他说的话\"作主语" },
        { text: "我不知道他是否会来。", note: "\"他是否会来\"作宾语" },
        { text: "事实是他错了。", note: "\"他错了\"作表语" },
      ],
      english: [
        { text: "<strong>What he said</strong> surprised me.", note: "主语从句" },
        { text: "I don't know <strong>whether he will come</strong>.", note: "宾语从句" },
        { text: "The fact is <strong>that he is wrong</strong>.", note: "表语从句" },
      ],
      conclusion:
        "中文用短语表达这些含义，英文用<strong>完整的句子（从句）</strong>来充当名词的角色。从句有主语和谓语，但不能独立存在，必须依附于主句。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "概念：什么是从句",
          description: "从句是句子中充当某个成分的句子，有主语和谓语，但不能独立存在",
          example: "I know <strong>that he is right</strong>.（that he is right是从句）",
        },
        {
          label: "三大从句类型",
          description: "名词性从句（作名词）、定语从句（作形容词）、状语从句（作副词）",
          example: "名词性从句：I know <strong>that he is right</strong>. 定语从句：The man <strong>who came</strong>. 状语从句：I'll go <strong>if he goes</strong>.",
        },
        {
          label: "名词性从句的四种类型",
          description: "主语从句、宾语从句、表语从句、同位语从句",
          example: "主语从句：<strong>That he is right</strong> is obvious. 宾语从句：I know <strong>that he is right</strong>.",
        },
      ],
      aspect: [
        {
          label: "主语从句",
          description: "在句子中作主语",
          focus: "That he is right is obvious. / It is obvious that he is right.",
        },
        {
          label: "宾语从句",
          description: "在句子中作宾语",
          focus: "I know that he is right.",
        },
        {
          label: "表语从句",
          description: "在句子中作表语",
          focus: "The fact is that he is wrong.",
        },
        {
          label: "同位语从句",
          description: "解释说明前面的名词",
          focus: "The news that he won made us happy.",
        },
      ],
    },
    matrix: {
      headers: ["从句类型", "功能", "位置", "例句"],
      rows: [
        { time: "主语从句", forms: ["作主语", "句首/it形式主语", "That he is right is obvious."] },
        { time: "宾语从句", forms: ["作宾语", "动词/介词后", "I know that he is right."] },
        { time: "表语从句", forms: ["作表语", "be动词后", "The fact is that he is wrong."] },
        { time: "同位语从句", forms: ["解释名词", "名词后", "The news that he won..."] },
      ],
    },
    tenses: [
      {
        name: "that引导主语从句",
        nameEn: "that-clause as Subject",
        structure: "That + 从句 + 谓语 / It + is + ... + that + 从句",
        usages: [
          { label: "直接作主语", example: "<strong>That he is right</strong> is obvious." },
          { label: "it作形式主语", example: "<strong>It</strong> is obvious <strong>that he is right</strong>." },
          { label: "常用句型", example: "It is + adj. + that... / It + v. + that..." },
        ],
        timeWords: "常用句型：It is important that... / It seems that... / It is a fact that...",
      },
      {
        name: "that引导宾语从句",
        nameEn: "that-clause as Object",
        structure: "主语 + 谓语 + (that) + 从句",
        usages: [
          { label: "that可省略", example: "I know <strong>(that) he is right</strong>." },
          { label: "常见动词", example: "know, think, believe, say, hope, suggest" },
          { label: "正式写作不省略", example: "The report states <strong>that</strong> the results are positive." },
        ],
        timeWords: "that在宾语从句中可以省略，但正式写作中建议保留",
      },
      {
        name: "that引导表语从句",
        nameEn: "that-clause as Predicative",
        structure: "主语 + be + that + 从句",
        usages: [
          { label: "基本用法", example: "The fact is <strong>that he is wrong</strong>." },
          { label: "常见主语", example: "The fact / The problem / My opinion / The reason" },
          { label: "表语从句", example: "The problem is <strong>that we don't have enough time</strong>." },
        ],
        timeWords: "表语从句中that通常不省略",
      },
      {
        name: "that引导同位语从句",
        nameEn: "that-clause as Appositive",
        structure: "名词 + that + 从句",
        usages: [
          { label: "解释名词内容", example: "The news <strong>that he won</strong> made us happy." },
          { label: "常见名词", example: "news, fact, idea, belief, hope, thought, suggestion" },
          { label: "与定语从句区分", example: "同位语：that不作成分；定语：that作成分" },
        ],
        timeWords: "同位语从句的that不作从句中的任何成分，只起连接作用",
      },
      {
        name: "it作形式主语",
        nameEn: "it as Formal Subject",
        structure: "It is/was + adj./n./v. + that + 从句",
        usages: [
          { label: "It is + adj. + that", example: "It is <strong>important</strong> that you study hard." },
          { label: "It is + n. + that", example: "It is <strong>a fact</strong> that the earth is round." },
          { label: "It + v. + that", example: "It <strong>seems</strong> that he is tired." },
        ],
        timeWords: "避免头重脚轻，使句子更平衡",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "主语从句省略that",
        wrong: "<strong>He is right</strong> is obvious.",
        correct: "<strong>That he is right</strong> is obvious.",
        reason: "主语从句中that不可省略。",
      },
      {
        title: "宾语从句用疑问语序",
        wrong: "I know <strong>that is he right</strong>.",
        correct: "I know <strong>that he is right</strong>.",
        reason: "宾语从句用陈述语序，不用疑问语序。",
      },
      {
        title: "同位语从句和定语从句混淆",
        wrong: "The news <strong>that he told me</strong> is true.（想表达\"他赢了的消息\"）",
        correct: "The news <strong>that he won</strong> is true.",
        reason: "同位语从句解释名词内容（that不作成分），定语从句修饰名词（that作成分）。",
      },
      {
        title: "表语从句省略that",
        wrong: "The fact is <strong>he is wrong</strong>.",
        correct: "The fact is <strong>that he is wrong</strong>.",
        reason: "表语从句中that通常不省略。",
      },
    ],
    keyQuestions: [
      "这个从句在句子中充当什么成分？（主语/宾语/表语/同位语）",
      "引导词是什么？（that/whether/what/who等）",
      "that在从句中是否作成分？（区分同位语从句和定语从句）",
    ],
    stateVerbs: {
      categories: [
        { label: "主语从句", verbs: ["That he is right...", "What he said...", "Whether he will come..."] },
        { label: "宾语从句", verbs: ["I know that...", "I think that...", "I wonder whether..."] },
        { label: "表语从句", verbs: ["The fact is that...", "The problem is that...", "My opinion is that..."] },
        { label: "同位语从句", verbs: ["The news that...", "The fact that...", "The idea that..."] },
      ],
      example: {
        wrong: "The news <strong>that he told me</strong> is about his winning.（想表达同位语）",
        correct: "The news <strong>that he won</strong> is about his winning.",
        note: "区分同位语从句和定语从句：看that在从句中是否作成分。",
      },
    },
  },
  practice: [
    {
      title: "名词性从句类型判断",
      titleEn: "Noun Clause Type Identification",
      type: "fill",
      items: [
        { question: "I know ______ he is right. (从句类型)", answer: "宾语从句" },
        { question: "______ he is right is obvious. (从句类型)", answer: "主语从句" },
        { question: "The fact is ______ he is wrong. (从句类型)", answer: "表语从句" },
        { question: "The news ______ he won made us happy. (从句类型)", answer: "同位语从句" },
        { question: "______ is important that you study hard. (从句类型)", answer: "主语从句（it作形式主语）" },
      ],
    },
    {
      title: "句子合并练习",
      titleEn: "Sentence Combining",
      type: "fill",
      items: [
        { question: "He is right. This is obvious. → ______ he is right is obvious. (用that合并)", answer: "That" },
        { question: "She passed the exam. This surprised everyone. → It surprised everyone ______ she passed the exam.", answer: "that" },
        { question: "The earth is round. This is a fact. → It is a fact ______ the earth is round.", answer: "that" },
        { question: "He won the game. The news made us happy. → The news ______ he won the game made us happy.", answer: "that" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "He is right is obvious.", answer: "<strong>That</strong> he is right is obvious.（主语从句that不可省略）" },
        { question: "The fact is he is wrong.", answer: "The fact is <strong>that</strong> he is wrong.（表语从句that通常不省略）" },
        { question: "I know that is he right.", answer: "I know that <strong>he is</strong> right.（从句用陈述语序）" },
        { question: "I suggest that he goes.", answer: "I suggest that he <strong>go</strong>.（虚拟语气用动词原形）" },
      ],
    },
  ],
  production: [
    {
      title: "句子改写",
      titleEn: "Sentence Rewriting",
      description: "用it作形式主语改写以下句子。",
      example: [
        "That he is right is obvious. → <strong>It</strong> is obvious <strong>that he is right</strong>.",
        "That she passed the exam surprised everyone. → <strong>It</strong> surprised everyone <strong>that she passed the exam</strong>.",
        "That the earth is round is a fact. → <strong>It</strong> is a fact <strong>that the earth is round</strong>.",
      ],
    },
    {
      title: "观点表达",
      titleEn: "Express Opinions",
      description: "用名词性从句表达你对以下话题的看法：学习英语、健康生活、成功的要素。",
      example: [
        "I believe <strong>that</strong> education is important.",
        "It is clear <strong>that</strong> he is wrong.",
        "The fact is <strong>that</strong> we need more time.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "从句类型",
        items: ["名词性从句：作名词（主语、宾语、表语、同位语）", "定语从句：作形容词（修饰名词）", "状语从句：作副词（修饰动词、句子）"],
      },
      {
        title: "名词性从句四种类型",
        items: ["主语从句：That he is right is obvious.", "宾语从句：I know that he is right.", "表语从句：The fact is that he is wrong.", "同位语从句：The news that he won is true."],
      },
      {
        title: "that的用法",
        items: ["主语从句：that不可省略", "宾语从句：that可以省略", "表语从句：that通常不省略", "同位语从句：that不作成分"],
      },
      {
        title: "it作形式主语",
        items: ["It is + adj. + that...", "It is + n. + that...", "It + v. + that..."],
      },
    ],
    mindMap: `从句概述
├── 三大从句类型
│   ├── 名词性从句（作名词）
│   ├── 定语从句（作形容词）
│   └── 状语从句（作副词）
├── 名词性从句
│   ├── 主语从句：That he is right is obvious.
│   ├── 宾语从句：I know that he is right.
│   ├── 表语从句：The fact is that he is wrong.
│   └── 同位语从句：The news that he won...
├── that的用法
│   ├── 主语从句：不可省略
│   ├── 宾语从句：可省略
│   ├── 表语从句：通常不省略
│   └── 同位语从句：不作成分
└── it作形式主语
    ├── It is important that...
    ├── It is a fact that...
    └── It seems that...`,
    selfTest: [
      {
        question: "______ he is right is obvious.",
        options: ["That", "What", "Which"],
        answer: "That",
      },
      {
        question: "I know ______ he will come.",
        options: ["that", "what", "which"],
        answer: "that",
      },
      {
        question: "The fact is ______ he is wrong.",
        options: ["that", "what", "which"],
        answer: "that",
      },
      {
        question: "The news ______ he won made us happy.",
        options: ["that", "what", "which"],
        answer: "that",
      },
      {
        question: "______ is important that you study hard.",
        options: ["That", "What", "It"],
        answer: "It",
      },
    ],
  },
};

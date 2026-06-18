import { UnitData } from "./unit-01-data";

export const unit16Data: UnitData = {
  info: {
    id: "unit-16",
    moduleId: "03",
    number: 16,
    title: "名词性从句详解",
    titleEn: "Noun Clauses in Depth",
  },
  objectives: [
    "掌握whether/if引导的名词性从句",
    "掌握wh-词引导的名词性从句",
    "理解名词性从句中的虚拟语气",
    "在复杂语境中正确使用名词性从句",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I don't know <strong>whether he will come</strong>.",
        "I don't know <strong>what he said</strong>.",
        "<strong>Whether he will come</strong> is unknown.",
        "<strong>What he said</strong> surprised me.",
      ],
      answer:
        "这些引导词的作用：<strong>whether</strong>表示\"是否\"，<strong>what</strong>表示\"什么\"（在从句中作成分）。它们引导名词性从句，替代that的功能。",
    },
    comparison: {
      chinese: [
        { text: "我不知道他是否会来。", note: "whether = 是否" },
        { text: "他说了什么让我惊讶。", note: "what = 什么" },
        { text: "谁会来还不知道。", note: "who = 谁" },
      ],
      english: [
        { text: "I don't know <strong>whether he will come</strong>.", note: "whether引导宾语从句" },
        { text: "<strong>What he said</strong> surprised me.", note: "what引导主语从句" },
        { text: "<strong>Who will come</strong> is unknown.", note: "who引导主语从句" },
      ],
      conclusion:
        "中文用\"是否、什么、谁\"等疑问词，英文用<strong>whether/if/what/who/where/when/why/how</strong>引导名词性从句。注意：从句必须用<strong>陈述语序</strong>。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "whether vs if",
          description: "whether和if都表示\"是否\"，但whether可以用在更多位置",
          example: "主语从句只能用<strong>whether</strong>：<strong>Whether he will come</strong> is unknown.",
        },
        {
          label: "wh-词引导名词性从句",
          description: "what/who/where/when/why/how引导名词性从句",
          example: "I don't know <strong>what he said</strong>. / I don't know <strong>where he lives</strong>.",
        },
        {
          label: "语序规则",
          description: "名词性从句用陈述语序，不用疑问语序",
          example: "✗ I don't know where <strong>does he live</strong>. ✓ I don't know where <strong>he lives</strong>.",
        },
      ],
      aspect: [
        {
          label: "whether（正式）",
          description: "可以用在所有名词性从句位置",
          focus: "主语从句、宾语从句、表语从句、同位语从句、介词后",
        },
        {
          label: "if（非正式）",
          description: "只能用在宾语从句位置",
          focus: "只用于动词后的宾语从句",
        },
        {
          label: "what = the thing that",
          description: "what在从句中作成分（主语、宾语、表语）",
          focus: "What he said = The thing that he said",
        },
        {
          label: "虚拟语气",
          description: "suggest/important等后的从句用动词原形",
          focus: "I suggest that he (should) go.",
        },
      ],
    },
    matrix: {
      headers: ["引导词", "含义", "可用位置", "例句"],
      rows: [
        { time: "that", forms: ["（无意义）", "所有位置", "I know that he is right."] },
        { time: "whether", forms: ["是否", "所有位置", "Whether he will come is unknown."] },
        { time: "if", forms: ["是否", "只用于宾语从句", "I don't know if he will come."] },
        { time: "what", forms: ["什么", "所有位置", "What he said surprised me."] },
        { time: "who", forms: ["谁", "所有位置", "Who will come is unknown."] },
        { time: "where", forms: ["哪里", "所有位置", "I don't know where he lives."] },
        { time: "when", forms: ["什么时候", "所有位置", "I don't know when he will come."] },
        { time: "why", forms: ["为什么", "所有位置", "I don't know why he left."] },
        { time: "how", forms: ["怎样", "所有位置", "I don't know how he did it."] },
      ],
    },
    tenses: [
      {
        name: "whether引导名词性从句",
        nameEn: "whether-clause",
        structure: "whether + 主语 + 谓语 + ...",
        usages: [
          { label: "主语从句", example: "<strong>Whether he will come</strong> is unknown." },
          { label: "宾语从句", example: "I don't know <strong>whether he will come</strong>." },
          { label: "表语从句", example: "The question is <strong>whether he will come</strong>." },
          { label: "介词后", example: "It depends on <strong>whether he will come</strong>." },
          { label: "or not紧随", example: "I don't know <strong>whether or not</strong> he will come." },
        ],
        timeWords: "whether可以用在所有名词性从句位置，if只能用在宾语从句",
      },
      {
        name: "if引导宾语从句",
        nameEn: "if-clause",
        structure: "if + 主语 + 谓语 + ...",
        usages: [
          { label: "宾语从句", example: "I don't know <strong>if he will come</strong>." },
          { label: "不能用于主语从句", example: "✗ <strong>If he will come</strong> is unknown." },
          { label: "不能用于介词后", example: "✗ It depends on <strong>if he will come</strong>." },
        ],
        timeWords: "if只能用在动词后的宾语从句中，其他位置用whether",
      },
      {
        name: "what引导名词性从句",
        nameEn: "what-clause",
        structure: "what + 主语 + 谓语 + ...",
        usages: [
          { label: "what = the thing that", example: "<strong>What he said</strong> = The thing that he said" },
          { label: "作主语", example: "<strong>What he said</strong> surprised me." },
          { label: "作宾语", example: "I don't know <strong>what he said</strong>." },
          { label: "作表语", example: "The question is <strong>what he said</strong>." },
        ],
        timeWords: "what在从句中作成分（主语、宾语、表语），that不作成分",
      },
      {
        name: "其他wh-词引导名词性从句",
        nameEn: "wh-clauses",
        structure: "who/where/when/why/how + 主语 + 谓语 + ...",
        usages: [
          { label: "who", example: "<strong>Who will come</strong> is unknown." },
          { label: "where", example: "I don't know <strong>where he lives</strong>." },
          { label: "when", example: "I don't know <strong>when he will come</strong>." },
          { label: "why", example: "I don't know <strong>why he left</strong>." },
          { label: "how", example: "I don't know <strong>how he did it</strong>." },
        ],
        timeWords: "名词性从句用陈述语序，不用疑问语序",
      },
      {
        name: "名词性从句中的虚拟语气",
        nameEn: "Subjunctive in Noun Clauses",
        structure: "suggest/important + that + 主语 + (should) + 动词原形",
        usages: [
          { label: "suggest类动词", example: "I suggest <strong>that he (should) go</strong>." },
          { label: "important类形容词", example: "It is important <strong>that she (should) be</strong> on time." },
          { label: "常见词", example: "suggest, recommend, demand, insist, require, propose, important, necessary, essential" },
        ],
        timeWords: "虚拟语气中用动词原形，不用第三人称单数形式",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "名词性从句用疑问语序",
        wrong: "I don't know <strong>where does he live</strong>.",
        correct: "I don't know <strong>where he lives</strong>.",
        reason: "名词性从句用陈述语序，不用疑问语序。",
      },
      {
        title: "if用于主语从句",
        wrong: "<strong>If he will come</strong> is unknown.",
        correct: "<strong>Whether he will come</strong> is unknown.",
        reason: "主语从句只能用whether，不能用if。",
      },
      {
        title: "虚拟语气中用第三人称单数",
        wrong: "I suggest that he <strong>should goes</strong>.",
        correct: "I suggest that he <strong>(should) go</strong>.",
        reason: "虚拟语气用动词原形，should后也接原形。",
      },
      {
        title: "混淆what和that",
        wrong: "I know <strong>what</strong> he is right.",
        correct: "I know <strong>that</strong> he is right.",
        reason: "that在从句中不作成分；what在从句中作成分。",
      },
    ],
    keyQuestions: [
      "这个引导词在从句中是否作成分？（that不作，what作）",
      "从句用什么语序？（陈述语序）",
      "是否需要虚拟语气？（suggest/important等）",
    ],
    stateVerbs: {
      categories: [
        { label: "whether", verbs: ["whether he will come", "whether or not", "whether he is right"] },
        { label: "what", verbs: ["what he said", "what he did", "what happened"] },
        { label: "虚拟语气", verbs: ["suggest that he go", "important that she be", "demand that they leave"] },
      ],
      example: {
        wrong: "I don't know <strong>what is he doing</strong>.",
        correct: "I don't know <strong>what he is doing</strong>.",
        note: "名词性从句必须用陈述语序。",
      },
    },
  },
  practice: [
    {
      title: "whether/if选择",
      titleEn: "whether vs if",
      type: "fill",
      items: [
        { question: "I don't know ______ he will come.", answer: "whether/if" },
        { question: "______ he will come is unknown.", answer: "Whether" },
        { question: "It depends on ______ he will come.", answer: "whether" },
        { question: "I don't know ______ or not he will come.", answer: "whether" },
        { question: "The question is ______ he will come.", answer: "whether" },
      ],
    },
    {
      title: "语序改正",
      titleEn: "Word Order Correction",
      type: "errorCorrection",
      items: [
        { question: "I don't know where does he live.", answer: "I don't know where <strong>he lives</strong>." },
        { question: "What did he say surprised me.", answer: "<strong>What he said</strong> surprised me." },
        { question: "I don't know what is he doing.", answer: "I don't know what <strong>he is doing</strong>." },
        { question: "I don't know how did he do it.", answer: "I don't know how <strong>he did it</strong>." },
      ],
    },
    {
      title: "虚拟语气练习",
      titleEn: "Subjunctive Mood Practice",
      type: "fill",
      items: [
        { question: "I suggest that he ______ (go).", answer: "(should) go" },
        { question: "It is important that she ______ (be) on time.", answer: "(should) be" },
        { question: "He demanded that she ______ (leave).", answer: "(should) leave" },
        { question: "It is necessary that we ______ (study) hard.", answer: "(should) study" },
        { question: "They insisted that he ______ (come).", answer: "(should) come" },
      ],
    },
  ],
  production: [
    {
      title: "翻译练习",
      titleEn: "Translation Practice",
      description: "将以下中文句子翻译成英文。",
      example: [
        "我不知道他是否会来。→ I don't know <strong>whether/if he will come</strong>.",
        "他说的话让我惊讶。→ <strong>What he said</strong> surprised me.",
        "我建议他努力学习。→ I suggest that he <strong>(should) study</strong> hard.",
        "谁会来还不知道。→ <strong>Who will come</strong> is unknown.",
      ],
    },
    {
      title: "观点表达",
      titleEn: "Express Views",
      description: "用wh-词引导的名词性从句表达你的想法。",
      example: [
        "I don't know <strong>what</strong> the future will bring.",
        "I'm not sure <strong>where</strong> I'll be next year.",
        "I wonder <strong>why</strong> people love traveling.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "whether vs if",
        items: ["whether：所有位置（主语、宾语、表语、介词后）", "if：只用于宾语从句", "or not紧随其后只能用whether"],
      },
      {
        title: "wh-词引导名词性从句",
        items: ["what/who/where/when/why/how", "在从句中作成分", "用陈述语序"],
      },
      {
        title: "语序规则",
        items: ["名词性从句用陈述语序", "不用疑问语序"],
      },
      {
        title: "虚拟语气",
        items: ["suggest/recommend/demand/insist等动词", "important/necessary/essential等形容词", "用动词原形（should + 原形）"],
      },
    ],
    mindMap: `名词性从句详解
├── whether vs if
│   ├── whether：所有位置
│   ├── if：只用于宾语从句
│   └── or not：只能用whether
├── wh-词引导
│   ├── what = the thing that
│   ├── who/whom：谁
│   ├── where：哪里
│   ├── when：什么时候
│   ├── why：为什么
│   └── how：怎样
├── 语序规则
│   └── 陈述语序（不用疑问语序）
└── 虚拟语气
    ├── suggest类动词
    └── important类形容词
    └── 用动词原形`,
    selfTest: [
      {
        question: "I don't know ______ he will come.",
        options: ["that", "whether", "what"],
        answer: "whether",
      },
      {
        question: "______ he said surprised me.",
        options: ["That", "Whether", "What"],
        answer: "What",
      },
      {
        question: "I don't know ______ he lives.",
        options: ["where does he", "where he does", "where he"],
        answer: "where he",
      },
      {
        question: "I suggest that he ______ hard.",
        options: ["studies", "study", "studied"],
        answer: "study",
      },
      {
        question: "______ is important that you study hard.",
        options: ["That", "What", "It"],
        answer: "It",
      },
    ],
  },
};

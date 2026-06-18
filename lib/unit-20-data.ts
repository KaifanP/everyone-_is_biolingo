import { UnitData } from "./unit-01-data";

export const unit20Data: UnitData = {
  info: {
    id: "unit-20",
    moduleId: "03",
    number: 20,
    title: "状语从句——时间与地点",
    titleEn: "Adverbial Clauses: Time & Place",
  },
  objectives: [
    "理解状语从句的概念和功能",
    "掌握时间状语从句的常用引导词",
    "掌握地点状语从句的用法",
    "区分不同时间引导词的细微差别",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I'll call you <strong>when I arrive</strong>.",
        "<strong>While I was sleeping</strong>, the phone rang.",
        "<strong>After he finished</strong> his homework, he went out.",
        "<strong>Wherever you go</strong>, I'll follow you.",
      ],
      answer:
        "这些划线部分都是<strong>状语从句</strong>：<br>when I arrive → 时间状语（当我到达时）<br>While I was sleeping → 时间状语（当我在睡觉时）<br>After he finished → 时间状语（在他完成作业后）<br>Wherever you go → 地点状语（无论你去哪里）",
    },
    comparison: {
      chinese: [
        { text: "当我到达时，他在睡觉。", note: "\"当……时\"表示时间" },
        { text: "无论你去哪里，我都跟着你。", note: "\"无论……\"表示地点" },
      ],
      english: [
        { text: "<strong>When</strong> I arrived, he was sleeping.", note: "when引导时间状语从句" },
        { text: "<strong>Wherever</strong> you go, I'll follow you.", note: "wherever引导地点状语从句" },
      ],
      conclusion:
        "状语从句在句子中充当<strong>副词</strong>的作用，表示动作发生的时间、地点、原因、条件等。本单元重点学习<strong>时间</strong>和<strong>地点</strong>状语从句。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "状语从句的定义",
          description: "状语从句在句子中充当副词，修饰动词、形容词或整个句子",
          example: "I'll call you <strong>when I arrive</strong>.（时间状语修饰call）",
        },
        {
          label: "三大从句对比",
          description: "名词性从句作名词，定语从句作形容词，状语从句作副词",
          example: "I know <strong>that he is right</strong>.（名词性） / The man <strong>who came</strong>.（定语） / I'll go <strong>if he goes</strong>.（状语）",
        },
      ],
      aspect: [
        {
          label: "时间状语从句",
          description: "表示动作发生的时间",
          focus: "when/while/as/before/after/until/since/as soon as",
        },
        {
          label: "地点状语从句",
          description: "表示动作发生的地点",
          focus: "where/wherever",
        },
        {
          label: "时态规则",
          description: "时间状语从句中用一般现在时代替将来时",
          focus: "When he <strong>comes</strong>, I'll go.（不用will come）",
        },
      ],
    },
    matrix: {
      headers: ["引导词", "含义", "时态", "例句"],
      rows: [
        { time: "when", forms: ["当……时", "一般现在时表将来", "When he comes, I'll go."] },
        { time: "while", forms: ["在……期间", "常接进行时", "While I was sleeping..."] },
        { time: "as", forms: ["当……时/随着", "—", "As time passed..."] },
        { time: "before", forms: ["在……之前", "一般现在时表将来", "Before you leave..."] },
        { time: "after", forms: ["在……之后", "一般现在时表将来", "After he arrives..."] },
        { time: "until", forms: ["直到", "—", "Wait until I come."] },
        { time: "since", forms: ["自从", "从句过去时/主句完成时", "Since I was born..."] },
        { time: "as soon as", forms: ["一……就", "一般现在时表将来", "I'll call as soon as I arrive."] },
        { time: "where", forms: ["在……地方", "—", "Where there is a will..."] },
        { time: "wherever", forms: ["无论哪里", "—", "Wherever you go..."] },
      ],
    },
    tenses: [
      {
        name: "when：当……时",
        nameEn: "when — at the time that",
        structure: "when + 从句（可接短暂或持续动作）",
        usages: [
          { label: "短暂动作", example: "<strong>When</strong> I arrived, he was sleeping." },
          { label: "持续动作", example: "<strong>When</strong> I was young, I lived in a village." },
          { label: "突然（= and at that moment）", example: "I was walking <strong>when</strong> I saw a cat." },
        ],
        timeWords: "when可以接短暂动作或持续动作",
      },
      {
        name: "while：在……期间",
        nameEn: "while — during the time that",
        structure: "while + 从句（通常接持续动作）",
        usages: [
          { label: "两个持续动作同时", example: "<strong>While</strong> I was sleeping, the phone rang." },
          { label: "while + 进行时", example: "She listened to music <strong>while</strong> she was studying." },
        ],
        timeWords: "while通常接持续动作，强调两个动作同时进行",
      },
      {
        name: "as：当……时 / 随着",
        nameEn: "as — at the same time / as time passes",
        structure: "as + 从句",
        usages: [
          { label: "同时发生", example: "<strong>As</strong> I was leaving, the phone rang." },
          { label: "一边……一边……", example: "She sang <strong>as</strong> she walked." },
          { label: "随着", example: "<strong>As</strong> time passed, things got better." },
        ],
        timeWords: "as强调两个动作同时发生或伴随",
      },
      {
        name: "before / after",
        nameEn: "before / after — sequence of events",
        structure: "before/after + 从句（用一般现在时代替将来时）",
        usages: [
          { label: "before：在……之前", example: "<strong>Before</strong> you leave, please close the door." },
          { label: "after：在……之后", example: "I'll call you <strong>after</strong> I get home." },
        ],
        timeWords: "before/after引导的从句用一般现在时代替将来时",
      },
      {
        name: "until：直到",
        nameEn: "until — up to the time that",
        structure: "until + 从句 / not...until（直到……才）",
        usages: [
          { label: "肯定句：动作持续到", example: "I waited <strong>until</strong> he came." },
          { label: "not...until：直到……才", example: "I <strong>didn't</strong> go to bed <strong>until</strong> I finished." },
          { label: "否定祈使句", example: "Don't leave <strong>until</strong> I arrive." },
        ],
        timeWords: "not...until是固定结构，not在主句中",
      },
      {
        name: "since：自从",
        nameEn: "since — from that time until now",
        structure: "since + 从句（过去时），主句用现在完成时",
        usages: [
          { label: "since + 过去时间点", example: "I have lived here <strong>since</strong> I was born." },
          { label: "主句用完成时", example: "She has been happy <strong>since</strong> she got the job." },
        ],
        timeWords: "since从句用一般过去时，主句用现在完成时",
      },
      {
        name: "as soon as：一……就",
        nameEn: "as soon as — immediately when",
        structure: "as soon as + 从句（一般现在时代替将来时）",
        usages: [
          { label: "一……就", example: "I'll call you <strong>as soon as</strong> I arrive." },
          { label: "两个紧接着的动作", example: "<strong>As soon as</strong> he heard the news, he called me." },
        ],
        timeWords: "as soon as从句用一般现在时代替将来时",
      },
      {
        name: "where / wherever",
        nameEn: "where / wherever — place clauses",
        structure: "where/wherever + 从句",
        usages: [
          { label: "where：在……地方", example: "I'll meet you <strong>where</strong> we first met." },
          { label: "where + 谚语", example: "<strong>Where</strong> there is a will, there is a way." },
          { label: "wherever：无论哪里", example: "<strong>Wherever</strong> you go, I'll follow you." },
        ],
        timeWords: "wherever = no matter where，表示让步",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "when和while混用",
        wrong: "<strong>While</strong> I opened the door, the cat ran out.",
        correct: "<strong>When</strong> I opened the door, the cat ran out.",
        reason: "while通常接持续动作，when可以接短暂动作。opened是短暂动作，用when。",
      },
      {
        title: "since后的时态错误",
        wrong: "I have lived here <strong>since I live</strong> here.",
        correct: "I have lived here <strong>since I moved</strong> here.",
        reason: "since引导的从句用一般过去时，主句用现在完成时。",
      },
      {
        title: "until的位置错误",
        wrong: "<strong>Until</strong> I finished my work, I didn't go to bed.",
        correct: "I <strong>didn't</strong> go to bed <strong>until</strong> I finished my work.",
        reason: "not...until是固定结构，not在主句中，until引导从句。",
      },
      {
        title: "时间状语从句用将来时",
        wrong: "I'll call you <strong>when I will arrive</strong>.",
        correct: "I'll call you <strong>when I arrive</strong>.",
        reason: "时间状语从句中用一般现在时代替将来时。",
      },
    ],
    keyQuestions: [
      "when接短暂动作还是持续动作？（when两者皆可，while通常接持续）",
      "since从句和主句分别用什么时态？（从句过去时，主句完成时）",
      "not...until的结构是什么？（not在主句，until引导从句）",
      "时间状语从句中能否用将来时？（不能，用一般现在时代替）",
    ],
    stateVerbs: {
      categories: [
        { label: "when vs while", verbs: ["when：短暂或持续", "while：通常持续", "as：同时/伴随"] },
        { label: "since的时态", verbs: ["since + 过去时", "主句 + 现在完成时"] },
        { label: "not...until", verbs: ["not在主句", "until引导从句", "直到……才"] },
      ],
      example: {
        wrong: "<strong>While</strong> I opened the door, the cat ran out.",
        correct: "<strong>When</strong> I opened the door, the cat ran out.",
        note: "opened是短暂动作，用when不用while。",
      },
    },
  },
  practice: [
    {
      title: "时间状语从句填空",
      titleEn: "Time Clause Fill-in",
      type: "fill",
      items: [
        { question: "I'll call you ______ I arrive.", answer: "when" },
        { question: "______ I was sleeping, the phone rang.", answer: "While" },
        { question: "She sang ______ she walked.", answer: "as" },
        { question: "______ you leave, please close the door.", answer: "Before" },
        { question: "I have lived here ______ I was born.", answer: "since" },
        { question: "I'll tell him ______ I see him.", answer: "as soon as" },
      ],
    },
    {
      title: "句子合并",
      titleEn: "Sentence Combining",
      type: "fill",
      items: [
        { question: "She called. I was reading. → ______ she called, I was reading.", answer: "When" },
        { question: "He finished homework. He went out. → ______ he finished his homework, he went out.", answer: "After" },
        { question: "I get home. I'll call you. → I'll call you ______ I get home.", answer: "as soon as" },
        { question: "We met. My life has changed. → ______ we met, my life has changed.", answer: "Since" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "While I opened the door, the cat ran out.", answer: "<strong>When</strong> I opened the door, the cat ran out.（while→when）" },
        { question: "I have lived here since I live here.", answer: "I have lived here <strong>since I moved</strong> here.（live→moved）" },
        { question: "Until I finished my work, I didn't go to bed.", answer: "I didn't go to bed <strong>until</strong> I finished my work.（调整语序）" },
        { question: "I'll call you when I will arrive.", answer: "I'll call you <strong>when I arrive</strong>.（will arrive→arrive）" },
      ],
    },
  ],
  production: [
    {
      title: "日常活动描述",
      titleEn: "Daily Routine Description",
      description: "用时间状语从句（when/before/after/until/as soon as）描述你的一天。",
      example: [
        "<strong>When</strong> I wake up, I brush my teeth.",
        "<strong>Before</strong> I go to work, I have breakfast.",
        "<strong>After</strong> I get home, I cook dinner.",
        "I watch TV <strong>until</strong> I feel sleepy.",
      ],
    },
    {
      title: "地点描述",
      titleEn: "Place Description",
      description: "用where/wherever描述你喜欢的地方或习惯。",
      example: [
        "I like to read <strong>where</strong> it is quiet.",
        "<strong>Wherever</strong> I travel, I try the local food.",
        "Put the flowers <strong>where</strong> there is sunlight.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "时间状语从句引导词",
        items: ["when：当……时（短暂或持续）", "while：在……期间（持续动作）", "as：当……时/随着", "before/after：在……之前/后", "until：直到（not...until）", "since：自从（从句过去时，主句完成时）", "as soon as：一……就"],
      },
      {
        title: "地点状语从句引导词",
        items: ["where：在……地方", "wherever：无论哪里"],
      },
      {
        title: "时态规则",
        items: ["时间状语从句用一般现在时代替将来时", "since从句用过去时，主句用完成时", "not...until是固定结构"],
      },
    ],
    mindMap: `时间与地点状语从句
├── 时间状语从句
│   ├── when（短暂/持续）
│   ├── while（持续）
│   ├── as（同时/伴随）
│   ├── before / after
│   ├── until（not...until）
│   ├── since（过去时+完成时）
│   └── as soon as（一……就）
├── 地点状语从句
│   ├── where（在……地方）
│   └── wherever（无论哪里）
└── 时态规则
    ├── 从句用一般现在时代替将来时
    └── since：从句过去时+主句完成时`,
    selfTest: [
      {
        question: "I'll call you ______ I arrive.",
        options: ["when", "while", "as"],
        answer: "when",
      },
      {
        question: "______ I was sleeping, the phone rang.",
        options: ["When", "While", "As"],
        answer: "While",
      },
      {
        question: "I have lived here ______ I was born.",
        options: ["when", "since", "while"],
        answer: "since",
      },
      {
        question: "______ you go, I'll follow you.",
        options: ["Where", "Wherever", "When"],
        answer: "Wherever",
      },
      {
        question: "I'll tell him ______ I see him.",
        options: ["when", "while", "since"],
        answer: "as soon as",
      },
    ],
  },
};

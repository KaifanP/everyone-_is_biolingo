import { UnitData } from "./unit-01-data";

export const unit07Data: UnitData = {
  info: {
    id: "unit-07",
    moduleId: "01",
    number: 7,
    title: "将来完成时与将来完成进行时",
    titleEn: "Future Perfect & Future Perfect Continuous",
  },
  objectives: [
    "掌握将来完成时的结构和用法",
    "掌握将来完成进行时的结构和用法",
    "区分两种时态的差异",
    "在复杂语境中正确使用这些时态",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "By next year, I <strong>will have finished</strong> my degree.（强调完成）",
        "By next year, I <strong>will have been studying</strong> for five years.（强调持续）",
      ],
      answer:
        "第一句强调<strong>完成的结果</strong>（学位拿到了），第二句强调<strong>持续的过程</strong>（学了五年）。这是将来完成时和将来完成进行时的核心区别。",
    },
    comparison: {
      chinese: [
        { text: "你到的时候，我将做好晚饭。", note: "强调结果" },
        { text: "你到的时候，我将做了两个小时饭。", note: "强调过程" },
      ],
      english: [
        { text: "By the time you arrive, I <strong>will have cooked</strong> dinner.", note: "结果——饭做好了" },
        { text: "By the time you arrive, I <strong>will have been cooking</strong> for two hours.", note: "过程——做了两小时" },
      ],
      conclusion:
        "将来完成时强调<strong>完成的结果</strong>，将来完成进行时强调<strong>持续的过程</strong>。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "将来完成时", description: "在将来某时间之前完成的动作", example: "By next year, I <strong>will have finished</strong> my degree." },
        { label: "将来完成进行时", description: "在将来某时间之前一直在进行的动作", example: "By next year, I <strong>will have been studying</strong> for five years." },
      ],
      aspect: [
        { label: "完成", description: "在将来某时间之前完成", focus: "By the time you arrive, I will have cooked dinner." },
        { label: "持续", description: "在将来某时间之前一直在进行", focus: "By December, I will have been working here for ten years." },
        { label: "推测", description: "对过去事情的推测（不确定）", focus: "She will have arrived by now." },
      ],
    },
    matrix: {
      headers: ["将来完成时", "将来完成进行时"],
      rows: [
        { time: "结构", forms: ["will have done", "will have been doing"] },
        { time: "重点", forms: ["完成的结果", "持续的过程"] },
        { time: "动作是否完成", forms: ["已完成", "可能还在进行"] },
        { time: "状态动词", forms: ["✓ 可用", "✗ 不可用"] },
        { time: "次数/数量", forms: ["✓ 可用", "✗ 不可用"] },
      ],
    },
    tenses: [
      {
        name: "将来完成时",
        nameEn: "Future Perfect",
        structure: "will have + done",
        usages: [
          { label: "在将来某时间之前完成", example: "By next year, I <strong>will have finished</strong> my degree." },
          { label: "对过去的推测（不确定）", example: "She <strong>will have arrived</strong> by now." },
        ],
        timeWords: "by the time, by next year/month, by + 将来时间, by the end of",
      },
      {
        name: "将来完成进行时",
        nameEn: "Future Perfect Continuous",
        structure: "will have been + doing",
        usages: [
          { label: "在将来某时间之前一直在进行", example: "By December, I <strong>will have been working</strong> here for ten years." },
          { label: "强调持续性", example: "By the time she retires, she <strong>will have been teaching</strong> for thirty years." },
        ],
        timeWords: "by the time, by + 将来时间, for + 时间段",
      },
      {
        name: "两者对比",
        nameEn: "Future Perfect vs Continuous",
        structure: "will have done vs will have been doing",
        usages: [
          { label: "完成时=结果/数量", example: "I <strong>will have read</strong> ten books by the end of the year." },
          { label: "完成进行时=持续过程", example: "I <strong>will have been reading</strong> for six months by the end of the year." },
          { label: "状态动词只能用完成时", example: "✓ will have known  ✗ will have been knowing" },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "混淆完成时和完成进行时",
        wrong: "By next year, I <strong>will have been finishing</strong> my degree.（想说\"完成学位\"）",
        correct: "By next year, I <strong>will have finished</strong> my degree.（强调完成）",
        reason: "完成强调结果，完成进行强调持续。",
      },
      {
        title: "状态动词用完成进行时",
        wrong: "By next year, I <strong>will have been knowing</strong> him for ten years.",
        correct: "By next year, I <strong>will have known</strong> him for ten years.",
        reason: "know是状态动词，不能用进行时。",
      },
      {
        title: "忘记have",
        wrong: "By next year, I <strong>will finished</strong> my degree.",
        correct: "By next year, I <strong>will have finished</strong> my degree.",
        reason: "将来完成时的结构是will have + 过去分词，不能省略have。",
      },
      {
        title: "时间从句中用将来完成时",
        wrong: "When I <strong>will have arrived</strong>, I will call you.",
        correct: "When I <strong>arrive</strong>, I will call you.",
        reason: "在when引导的时间从句中，用一般现在时代替将来时。但by the time引导的从句可以用将来完成时。",
      },
    ],
    keyQuestions: [
      "强调完成结果还是持续过程？（结果→完成时，过程→完成进行时）",
      "是不是状态动词？（是→只能用完成时）",
      "是时间段还是次数/数量？（时间段→完成进行时，次数→完成时）",
    ],
    stateVerbs: {
      categories: [
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish"] },
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess"] },
      ],
      example: {
        wrong: "By next year, I <strong>will have been knowing</strong> him for ten years.",
        correct: "By next year, I <strong>will have known</strong> him for ten years.",
        note: "状态动词即使在将来完成进行时中也不能用进行时。",
      },
    },
  },
  practice: [
    {
      title: "完成时 vs 完成进行时",
      titleEn: "Perfect vs Perfect Continuous",
      type: "fill",
      items: [
        { question: "By next year, I ______ (finish) my degree.", answer: "will have finished — 强调完成" },
        { question: "By next year, I ______ (study) for five years.", answer: "will have been studying — 强调持续" },
        { question: "By the time you arrive, I ______ (cook) dinner.", answer: "will have cooked — 强调结果" },
        { question: "By the time you arrive, I ______ (cook) for two hours.", answer: "will have been cooking — 强调过程" },
        { question: "By December, she ______ (work) here for ten years.", answer: "will have been working / will have worked — 两者皆可" },
        { question: "By the end of the month, I ______ (read) ten books.", answer: "will have read — 强调数量" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "By next year, I will finished my degree.", answer: "By next year, I <strong>will have finished</strong> my degree." },
        { question: "By December, I will have been knowing him for ten years.", answer: "By December, I <strong>will have known</strong> him for ten years." },
        { question: "By the time you arrive, I will have been cooking dinner.", answer: "By the time you arrive, I <strong>will have cooked</strong> dinner.（如果强调结果）" },
        { question: "When I will have arrived, I will call you.", answer: "When I <strong>arrive</strong>, I will call you." },
        { question: "By the end of the year, I will have been read ten books.", answer: "By the end of the year, I <strong>will have read</strong> ten books." },
        { question: "By next month, she will have been work here for five years.", answer: "By next month, she <strong>will have been working</strong> here for five years." },
      ],
    },
    {
      title: "句子改写",
      titleEn: "Sentence Rewriting",
      type: "fill",
      items: [
        { question: "She will leave. Then I will arrive.（用by the time）", answer: "<strong>By the time</strong> I arrive, she <strong>will have left</strong>." },
        { question: "He will study for five years. Then he will graduate.", answer: "<strong>By the time</strong> he graduates, he <strong>will have studied</strong> for five years." },
        { question: "They will live in London for ten years. Then they will move.", answer: "<strong>By the time</strong> they move, they <strong>will have been living</strong> in London for ten years." },
        { question: "I will read three books. Then the month will end.", answer: "<strong>By the end of</strong> the month, I <strong>will have read</strong> three books." },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation",
      type: "fill",
      items: [
        { question: "到明年，我将学了十年英语了。", answer: "By next year, I <strong>will have been studying</strong> English for ten years." },
        { question: "你到的时候，我将做完作业了。", answer: "By the time you arrive, I <strong>will have finished</strong> my homework." },
        { question: "到年底，她将在这里工作满五年。", answer: "By the end of the year, she <strong>will have been working</strong> here for five years." },
        { question: "到下个月，我将等了两周了。", answer: "By next month, I <strong>will have been waiting</strong> for two weeks." },
        { question: "他现在应该到了。", answer: "He <strong>will have arrived</strong> by now." },
      ],
    },
  ],
  production: [
    {
      title: "人生规划",
      titleEn: "Life Planning",
      description: "用将来完成时和将来完成进行时描述你的人生规划。",
      example: [
        "By the time I'm 30, I <strong>will have graduated</strong> from college.",
        "By the time I'm 30, I <strong>will have been working</strong> for five years.",
        "By the time I'm 40, I <strong>will have traveled</strong> to 20 countries.",
        "By the time I retire, I <strong>will have saved</strong> enough money.",
      ],
    },
    {
      title: "项目计划",
      titleEn: "Project Planning",
      description: "用将来完成时描述一个项目的计划。",
      example: [
        "By the end of this month, we <strong>will have completed</strong> the research phase.",
        "By next month, we <strong>will have been working</strong> on the project for three months.",
        "By the end of the year, we <strong>will have finished</strong> the entire project.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "将来完成时",
        items: ["will have + 过去分词", "在将来某个时间点之前完成", "强调完成的结果"],
      },
      {
        title: "将来完成进行时",
        items: ["will have been + doing", "在将来某个时间点之前一直在进行", "强调持续的过程"],
      },
      {
        title: "两者对比",
        items: ["完成时：强调结果/数量", "完成进行时：强调过程/持续时间"],
      },
      {
        title: "状态动词",
        items: ["不能用完成进行时", "know, believe, want, like等"],
      },
      {
        title: "时间标志词",
        items: ["by the time, by next year, by + 将来时间, for + 时间段"],
      },
    ],
    mindMap: `将来完成时 vs 将来完成进行时
├── 将来完成时：will have done
│   ├── 完成：By next year, I will have finished my degree.
│   ├── 推测：She will have arrived by now.
│   └── 强调结果/数量
├── 将来完成进行时：will have been doing
│   ├── 持续：By December, I will have been working here for ten years.
│   └── 强调过程/持续时间
├── 对比
│   ├── will have read ten books（数量）
│   └── will have been reading for six months（持续）
└── 状态动词
    └── ✓ will have known ✗ will have been knowing`,
    selfTest: [
      {
        question: "By next year, she ______ (work) here for ten years.",
        options: ["will work", "will have worked", "will have been working"],
        answer: "will have been working",
      },
      {
        question: "By the time you arrive, I ______ (finish) cooking.",
        options: ["will finish", "will have finished", "will have been finishing"],
        answer: "will have finished",
      },
      {
        question: "By December, I ______ (know) him for twenty years.",
        options: ["will know", "will have known", "will have been knowing"],
        answer: "will have known",
      },
      {
        question: "By the end of the month, I ______ (read) five books.",
        options: ["will read", "will have read", "will have been reading"],
        answer: "will have read",
      },
      {
        question: "By next Monday, she ______ (wait) for two weeks.",
        options: ["will wait", "will have waited", "will have been waiting"],
        answer: "will have been waiting",
      },
    ],
  },
};

import { UnitData } from "./unit-01-data";

export const unit11Data: UnitData = {
  info: {
    id: "unit-11",
    moduleId: "02",
    number: 11,
    title: "推测与可能性（现在/将来）",
    titleEn: "Deduction: Present & Future",
  },
  objectives: [
    "掌握must, may, might, could, can't表示推测的用法",
    "理解不同情态动词的推测程度",
    "在现在和将来语境中正确使用推测表达",
    "区分肯定推测和否定推测",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "He <strong>must</strong> be at home.（他一定在家。）",
        "He <strong>may</strong> be at home.（他可能在家。）",
        "He <strong>might</strong> be at home.（他也许在家。）",
        "He <strong>could</strong> be at home.（他可能在家。）",
        "He <strong>can't</strong> be at home.（他不可能在家。）",
      ],
      answer:
        "这些句子都表示<strong>推测</strong>，但确定程度不同：must最确定（一定），may/might/could不太确定（可能），can't最确定的否定（不可能）。推测通常需要<strong>依据（证据）</strong>。",
    },
    comparison: {
      chinese: [
        { text: "他一定在家。（灯亮着）", note: "非常确定" },
        { text: "他可能在家。", note: "不太确定" },
        { text: "他不可能在家。（灯关着）", note: "否定确定" },
      ],
      english: [
        { text: "He <strong>must</strong> be at home.", note: "90-100%" },
        { text: "He <strong>may</strong> be at home.", note: "50%" },
        { text: "He <strong>can't</strong> be at home.", note: "90-100%否定" },
      ],
      conclusion:
        "英文用不同的情态动词来表达<strong>不同的确定程度</strong>，从must（一定）到could（可能）形成一个梯度。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "肯定推测",
          description: "从最确定到最不确定",
          example: "<strong>must</strong> (100%) > <strong>may</strong> (50%) > <strong>might</strong> (30%) > <strong>could</strong> (20%)",
        },
        {
          label: "否定推测",
          description: "非常确定的否定",
          example: "<strong>can't</strong> (100%) > <strong>may not</strong> (50%) > <strong>might not</strong> (30%)",
        },
      ],
      aspect: [
        {
          label: "must：一定",
          description: "非常确定的肯定推测（90-100%）",
          focus: "有证据支持",
        },
        {
          label: "may：可能",
          description: "中等确定（约50%）",
          focus: "不确定",
        },
        {
          label: "might/could：也许",
          description: "不太确定（20-30%）",
          focus: "可能性较小",
        },
        {
          label: "can't：不可能",
          description: "非常确定的否定推测（90-100%）",
          focus: "有证据支持否定",
        },
      ],
    },
    matrix: {
      headers: ["情态动词", "确定程度", "含义", "例句"],
      rows: [
        { time: "must", forms: ["90-100%", "一定", "He must be at home."] },
        { time: "may", forms: ["50%", "可能", "He may be at home."] },
        { time: "might", forms: ["30%", "也许", "He might be at home."] },
        { time: "could", forms: ["20%", "可能", "He could be at home."] },
        { time: "can't", forms: ["90-100%", "不可能", "He can't be at home."] },
      ],
    },
    tenses: [
      {
        name: "must：肯定推测",
        nameEn: "must: Strong Positive Deduction",
        structure: "must + 动词原形/be",
        usages: [
          { label: "一定在家", example: "He <strong>must</strong> be at home. The light is on." },
          { label: "一定知道", example: "She <strong>must</strong> know the answer. She's very smart." },
          { label: "一定很累", example: "They <strong>must</strong> be tired. They've been working all day." },
        ],
        timeWords: "通常有证据支持",
      },
      {
        name: "may：中等推测",
        nameEn: "may: Medium Deduction",
        structure: "may + 动词原形/be",
        usages: [
          { label: "可能在家", example: "He <strong>may</strong> be at home. I'm not sure." },
          { label: "可能知道", example: "She <strong>may</strong> know the answer." },
          { label: "可能下雨", example: "It <strong>may</strong> rain later." },
        ],
        timeWords: "",
      },
      {
        name: "might：较低推测",
        nameEn: "might: Lower Deduction",
        structure: "might + 动词原形/be",
        usages: [
          { label: "也许在家", example: "He <strong>might</strong> be at home." },
          { label: "也许知道", example: "She <strong>might</strong> know the answer." },
        ],
        timeWords: "",
      },
      {
        name: "could：可能",
        nameEn: "could: Possibility",
        structure: "could + 动词原形/be",
        usages: [
          { label: "可能在家", example: "He <strong>could</strong> be at home." },
          { label: "可能下雨", example: "It <strong>could</strong> rain later." },
        ],
        timeWords: "",
      },
      {
        name: "can't：否定推测",
        nameEn: "can't: Strong Negative Deduction",
        structure: "can't + 动词原形/be",
        usages: [
          { label: "不可能在家", example: "He <strong>can't</strong> be at home. The light is off." },
          { label: "不可能知道", example: "She <strong>can't</strong> know the answer. She didn't study." },
          { label: "不可能冷", example: "It <strong>can't</strong> be cold outside. It's summer." },
        ],
        timeWords: "有证据支持否定",
      },
      {
        name: "may not：否定可能",
        nameEn: "may not: Negative Possibility",
        structure: "may not + 动词原形/be",
        usages: [
          { label: "可能不在", example: "He <strong>may not</strong> be at home." },
          { label: "可能不知道", example: "She <strong>may not</strong> know the answer." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "must的否定用mustn't",
        wrong: "He <strong>mustn't</strong> be at home.（想说'不可能在家'）",
        correct: "He <strong>can't</strong> be at home.",
        reason: "must表示推测时，否定用can't，不用mustn't。",
      },
      {
        title: "推测时用进行时",
        wrong: "He <strong>must being</strong> at home.",
        correct: "He <strong>must be</strong> at home.",
        reason: "情态动词后接动词原形，be是原形。",
      },
      {
        title: "过去推测用现在时",
        wrong: "He <strong>must leave</strong> yesterday.",
        correct: "He <strong>must have left</strong> yesterday.",
        reason: "对过去的推测用情态动词 + have + 过去分词。",
      },
      {
        title: "混淆确定和不确定",
        wrong: "He <strong>might</strong> be at home. I'm sure.",
        correct: "He <strong>must</strong> be at home. I'm sure.",
        reason: "确定的情况下用must，不确定时用may/might。",
      },
    ],
    keyQuestions: [
      "是肯定推测还是否定推测？",
      "确定程度有多高？（一定/可能/也许/不可能）",
      "有没有证据（依据）？",
      "是现在还是过去的推测？",
    ],
    stateVerbs: {
      categories: [
        { label: "肯定推测", verbs: ["must be", "must know", "must have"] },
        { label: "不确定推测", verbs: ["may be", "might know", "could have"] },
        { label: "否定推测", verbs: ["can't be", "can't know", "can't have"] },
      ],
      example: {
        wrong: "He <strong>mustn't</strong> be at home.",
        correct: "He <strong>can't</strong> be at home.",
        note: "must推测的否定形式是can't，不是mustn't。",
      },
    },
  },
  practice: [
    {
      title: "选择合适的情态动词",
      titleEn: "Choose the Right Modal",
      type: "fill",
      items: [
        { question: "The light is on. He ______ be at home. (非常确定)", answer: "must" },
        { question: "I'm not sure. She ______ know the answer. (不太确定)", answer: "may / might / could" },
        { question: "It's summer. It ______ be cold outside. (非常确定否定)", answer: "can't" },
        { question: "He's very smart. He ______ pass the exam. (比较确定)", answer: "may / might" },
        { question: "I don't know. She ______ be at work. (不太确定)", answer: "may / might / could" },
      ],
    },
    {
      title: "根据依据推测",
      titleEn: "Deduction with Evidence",
      type: "fill",
      items: [
        { question: "依据：She's wearing a coat. → It ______ be cold.", answer: "must" },
        { question: "依据：He didn't study. → He ______ pass the exam.", answer: "can't / may not" },
        { question: "依据：They've been working all day. → They ______ be tired.", answer: "must" },
        { question: "依据：It's sunny. → It ______ rain.", answer: "won't / may not / might not" },
        { question: "依据：She's very smart. → She ______ know the answer.", answer: "must / may" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "He mustn't be at home. (推测)", answer: "He <strong>can't</strong> be at home.（否定推测用can't）" },
        { question: "She must being tired.", answer: "She <strong>must be</strong> tired.（情态动词后接原形）" },
        { question: "He must be at home yesterday.", answer: "He <strong>must have been</strong> at home yesterday.（过去推测用have done）" },
        { question: "I'm sure. She may know the answer.", answer: "I'm sure. She <strong>must</strong> know the answer.（确定用must）" },
        { question: "It can't raining later.", answer: "It <strong>can't rain</strong> later.（情态动词后接原形）" },
      ],
    },
  ],
  production: [
    {
      title: "观察推测",
      titleEn: "Observe & Deduce",
      description: "观察以下场景，用情态动词进行推测。每个场景给出2-3种推测。",
      example: [
        "看到一个人穿着厚外套：It <strong>must</strong> be cold.",
        "看到一个人眼睛红红的：She <strong>must have been</strong> crying.",
        "看到灯亮着：Someone <strong>must be</strong> at home.",
      ],
    },
    {
      title: "猜测游戏",
      titleEn: "Guessing Game",
      description: "用情态动词猜测以下情况的原因，给出多种可能性。",
      example: [
        "他为什么没来？He <strong>might be</strong> sick. He <strong>could be</strong> busy. He <strong>may have</strong> forgotten.",
        "她为什么看起来很高兴？She <strong>must have received</strong> good news.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "推测程度排序",
        items: ["肯定：must > may > might > could", "否定：can't > may not > might not"],
      },
      {
        title: "must：一定",
        items: ["非常确定的肯定推测（90-100%）", "通常有证据支持"],
      },
      {
        title: "can't：不可能",
        items: ["非常确定的否定推测", "否定推测不用mustn't"],
      },
      {
        title: "推测需要依据",
        items: ["有证据支持的推测更可信", "没有依据时用I think + 从句"],
      },
    ],
    mindMap: `推测与可能性（现在/将来）
├── 肯定推测
│   ├── must：一定（90-100%）
│   ├── may：可能（50%）
│   ├── might：也许（30%）
│   └── could：可能（20%）
├── 否定推测
│   ├── can't：不可能（90-100%）
│   ├── may not：可能不（50%）
│   └── might not：也许不（30%）
├── 推测需要依据
│   ├── 有证据：The light is on → must be at home
│   └── 无证据：I think he is at home
└── 注意事项
    ├── must推测否定用can't
    └── 情态动词后接原形`,
    selfTest: [
      {
        question: "The light is on. He ______ be at home.",
        options: ["must", "may", "can't"],
        answer: "must",
      },
      {
        question: "I'm not sure. She ______ know the answer.",
        options: ["must", "may", "can't"],
        answer: "may",
      },
      {
        question: "It's summer. It ______ be cold outside.",
        options: ["must", "may", "can't"],
        answer: "can't",
      },
      {
        question: "He's very smart. He ______ pass the exam.",
        options: ["must", "may", "can't"],
        answer: "must",
      },
      {
        question: "I don't know. He ______ be at work.",
        options: ["must", "may", "can't"],
        answer: "may",
      },
    ],
  },
};

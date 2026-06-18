import { UnitData } from "./unit-01-data";

export const unit14Data: UnitData = {
  info: {
    id: "unit-14",
    moduleId: "02",
    number: 14,
    title: "情态动词综合与实战",
    titleEn: "Modal Verbs: Comprehensive Practice",
  },
  objectives: [
    "综合运用所有情态动词的用法",
    "在复杂语境中正确选择情态动词",
    "区分情态动词的语气强弱",
    "在写作和口语中灵活运用情态动词",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>can</strong> swim.（能力）",
        "You <strong>may</strong> leave now.（许可）",
        "He <strong>must</strong> be tired.（推测）",
        "You <strong>should</strong> exercise more.（建议）",
        "He <strong>would</strong> sit for hours.（习惯）",
        "You <strong>should have told</strong> me.（过去评价）",
      ],
      answer:
        "同一个情态动词可以有多种含义。例如must可以表示<strong>义务</strong>（必须）或<strong>推测</strong>（一定）。判断含义需要看<strong>上下文</strong>和<strong>动词类型</strong>。",
    },
    comparison: {
      chinese: [
        { text: "他一定很累。（推测）", note: "must + be" },
        { text: "他必须走了。（义务）", note: "must + go" },
        { text: "她可能在家。（推测）", note: "may + be" },
        { text: "你可以走了。（许可）", note: "may + leave" },
      ],
      english: [
        { text: "He <strong>must be</strong> tired.", note: "推测" },
        { text: "He <strong>must go</strong> now.", note: "义务" },
        { text: "She <strong>may be</strong> at home.", note: "推测" },
        { text: "You <strong>may leave</strong>.", note: "许可" },
      ],
      conclusion:
        "情态动词的含义取决于<strong>语境</strong>。状态动词（be, have, know）通常是推测，动作动词（go, do, make）通常是义务/意愿。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "义务/必要性",
          description: "从强到弱",
          example: "<strong>must</strong> > <strong>have to</strong> > <strong>should</strong> > <strong>ought to</strong> > <strong>may</strong>",
        },
        {
          label: "推测/可能性",
          description: "从确定到不确定",
          example: "<strong>must</strong> (100%) > <strong>may</strong> (50%) > <strong>might</strong> (30%) > <strong>could</strong> (20%) > <strong>can't</strong> (0%)",
        },
      ],
      aspect: [
        {
          label: "能力",
          description: "can / could / be able to",
          focus: "现在/过去/将来能力",
        },
        {
          label: "许可",
          description: "may / can / could",
          focus: "正式/非正式/礼貌",
        },
        {
          label: "义务",
          description: "must / have to / should",
          focus: "主观/客观/建议",
        },
        {
          label: "推测",
          description: "must / may / might / could / can't",
          focus: "确定程度不同",
        },
      ],
    },
    matrix: {
      headers: ["情态动词", "能力", "许可", "义务", "推测", "习惯"],
      rows: [
        { time: "can", forms: ["✓", "✓", "—", "理论可能", "—"] },
        { time: "could", forms: ["✓", "✓", "—", "✓", "—"] },
        { time: "may", forms: ["—", "✓", "—", "✓", "—"] },
        { time: "might", forms: ["—", "—", "—", "✓", "—"] },
        { time: "must", forms: ["—", "—", "✓", "✓", "—"] },
        { time: "should", forms: ["—", "—", "✓", "—", "—"] },
        { time: "will", forms: ["—", "—", "—", "—", "✓"] },
        { time: "would", forms: ["—", "—", "—", "—", "✓"] },
      ],
    },
    tenses: [
      {
        name: "can的三种用法",
        nameEn: "can: Three Uses",
        structure: "can + 动词原形",
        usages: [
          { label: "能力", example: "I <strong>can</strong> swim." },
          { label: "许可", example: "You <strong>can</strong> go now." },
          { label: "理论可能", example: "It <strong>can be</strong> very cold in winter." },
        ],
        timeWords: "",
      },
      {
        name: "must的两种用法",
        nameEn: "must: Two Uses",
        structure: "must + 动词原形",
        usages: [
          { label: "义务", example: "You <strong>must</strong> go now." },
          { label: "推测", example: "He <strong>must</strong> be tired." },
        ],
        timeWords: "看动词类型判断：状态动词=推测，动作动词=义务",
      },
      {
        name: "may的两种用法",
        nameEn: "may: Two Uses",
        structure: "may + 动词原形",
        usages: [
          { label: "许可", example: "You <strong>may</strong> leave." },
          { label: "推测", example: "He <strong>may</strong> be at home." },
        ],
        timeWords: "",
      },
      {
        name: "will的多种用法",
        nameEn: "will: Multiple Uses",
        structure: "will + 动词原形",
        usages: [
          { label: "意愿", example: "I <strong>will</strong> help you." },
          { label: "将来", example: "I <strong>will</strong> go tomorrow." },
          { label: "习惯", example: "He <strong>will</strong> sit for hours." },
          { label: "请求", example: "<strong>Will</strong> you help me?" },
        ],
        timeWords: "",
      },
      {
        name: "情态动词+完成时",
        nameEn: "Modal + Have Done",
        structure: "情态动词 + have + 过去分词",
        usages: [
          { label: "过去肯定推测", example: "He <strong>must have left</strong>." },
          { label: "过去不确定推测", example: "He <strong>may have left</strong>." },
          { label: "过去否定推测", example: "He <strong>can't have left</strong>." },
          { label: "过去应该做但没做", example: "You <strong>should have told</strong> me." },
          { label: "本不必做但做了", example: "You <strong>needn't have waited</strong>." },
        ],
        timeWords: "",
      },
      {
        name: "语境判断技巧",
        nameEn: "Context Judgment",
        structure: "三种判断方法",
        usages: [
          { label: "看动词类型", example: "状态动词（be, know）→ 推测；动作动词（go, do）→ 义务" },
          { label: "看上下文", example: "有证据 → 推测；有规则 → 义务；有请求 → 许可" },
          { label: "看时间", example: "现在 → 情态动词 + 原形；过去 → 情态动词 + have done" },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "must的否定",
        wrong: "He <strong>mustn't</strong> be at home.（推测）",
        correct: "He <strong>can't</strong> be at home.",
        reason: "推测用can't，义务用mustn't。",
      },
      {
        title: "should have done的时态",
        wrong: "You <strong>should told</strong> me.",
        correct: "You <strong>should have told</strong> me.",
        reason: "should have + 过去分词，不能省略have。",
      },
      {
        title: "混淆needn't have done和didn't need to",
        wrong: "I <strong>needn't have gone</strong>, so I stayed home.",
        correct: "I <strong>didn't need to</strong> go, so I stayed home.",
        reason: "needn't have done = 做了但不必做；didn't need to = 不必做（通常没做）。",
      },
      {
        title: "could的多种含义混淆",
        wrong: "I <strong>could swim</strong> when I was young.（推测）",
        correct: "I <strong>could swim</strong> when I was young.（能力）",
        reason: "could在这里表示过去的能力，不是推测。看语境判断。",
      },
    ],
    keyQuestions: [
      "这个情态动词表达什么含义？（能力/许可/义务/推测/建议/习惯）",
      "是现在还是过去？",
      "是肯定还是否定？",
      "有什么证据或上下文线索？",
    ],
    stateVerbs: {
      categories: [
        { label: "能力", verbs: ["can swim", "could speak", "be able to"] },
        { label: "许可", verbs: ["may leave", "can go", "could use"] },
        { label: "义务", verbs: ["must go", "have to wear", "should study"] },
        { label: "推测", verbs: ["must be", "may know", "can't have left"] },
        { label: "习惯", verbs: ["will sit", "would play", "used to live"] },
      ],
      example: {
        wrong: "You <strong>should told</strong> me.",
        correct: "You <strong>should have told</strong> me.",
        note: "过去评价用情态动词 + have + 过去分词。",
      },
    },
  },
  practice: [
    {
      title: "情态动词用法判断",
      titleEn: "Identify Modal Usage",
      type: "identify",
      items: [
        { question: "I <strong>can</strong> speak English.", answer: "能力" },
        { question: "You <strong>must</strong> be tired.", answer: "推测" },
        { question: "She <strong>should</strong> exercise more.", answer: "建议" },
        { question: "He <strong>will</strong> sit for hours.", answer: "习惯" },
        { question: "<strong>May</strong> I leave?", answer: "许可" },
        { question: "They <strong>must have</strong> left.", answer: "过去推测" },
        { question: "You <strong>should have</strong> told me.", answer: "过去应该" },
        { question: "I <strong>would</strong> play football when I was young.", answer: "过去习惯" },
      ],
    },
    {
      title: "选择合适的情态动词",
      titleEn: "Choose the Right Modal",
      type: "fill",
      items: [
        { question: "I ______ swim when I was five. (能力)", answer: "could / was able to" },
        { question: "He ______ be at home. The light is on. (推测)", answer: "must" },
        { question: "You ______ exercise more. (建议)", answer: "should / ought to" },
        { question: "______ I use your phone? (礼貌请求)", answer: "Could / May" },
        { question: "She ______ sit for hours reading. (习惯)", answer: "will / would" },
        { question: "You ______ told me. (责备)", answer: "should have" },
        { question: "He ______ have left. His bag is gone. (过去推测)", answer: "must" },
        { question: "I ______ go if I had time. (虚拟)", answer: "would" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "He mustn't be at home. (推测)", answer: "He <strong>can't</strong> be at home.（否定推测用can't）" },
        { question: "You should told me.", answer: "You <strong>should have told</strong> me.（不能省略have）" },
        { question: "I can swim when I was young.", answer: "I <strong>could</strong> swim when I was young.（过去能力用could）" },
        { question: "He must have leave already.", answer: "He must have <strong>left</strong> already.（用过去分词）" },
        { question: "I needn't have go yesterday.", answer: "I needn't have <strong>gone</strong> yesterday.（用过去分词）" },
      ],
    },
  ],
  production: [
    {
      title: "情态动词故事",
      titleEn: "Modal Verb Story",
      description: "用至少6种不同的情态动词写一个故事（80-100词）。",
      example: [
        "I <strong>can</strong> remember the day clearly. It <strong>must have been</strong> a Tuesday.",
        "My friend <strong>would</strong> always call me on Tuesdays.",
        "He <strong>should have</strong> called that day, but he didn't.",
        "I <strong>may have</strong> been worried. I <strong>could have</strong> called him, but I didn't.",
        "Later, I found out he had been sick. I <strong>shouldn't have</strong> waited so long.",
      ],
    },
    {
      title: "建议和推测",
      titleEn: "Suggest & Deduce",
      description: "对以下情况给出推测和建议：朋友说他最近很累，工作压力大。",
      example: [
        "推测：He <strong>must be</strong> under a lot of pressure.",
        "推测：He <strong>may not be</strong> sleeping well.",
        "建议：You <strong>should</strong> take a break.",
        "建议：You <strong>ought to</strong> exercise more.",
        "建议：You <strong>had better</strong> not work too hard.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "语气强弱",
        items: ["义务：must > have to > should > may", "推测：must > may > might > could > can't"],
      },
      {
        title: "多重含义",
        items: ["can：能力/许可/可能", "must：义务/推测", "may：许可/可能", "will：意愿/将来/习惯"],
      },
      {
        title: "情态动词+完成时",
        items: ["must have done：一定做了", "should have done：应该做但没做", "can't have done：不可能做了"],
      },
      {
        title: "语境判断",
        items: ["看动词类型：状态动词→推测，动作动词→义务", "看上下文：证据→推测，规则→义务", "看时间：现在→原形，过去→have done"],
      },
    ],
    mindMap: `情态动词综合
├── 能力：can / could / be able to
├── 许可：may / can / could
├── 义务：must / have to / should / had better
├── 推测（现在）
│   ├── must：一定
│   ├── may/might/could：可能
│   └── can't：不可能
├── 推测（过去）
│   ├── must have done
│   ├── may/might/could have done
│   └── can't have done
├── 评价（过去）
│   ├── should have done：应该做但没做
│   ├── shouldn't have done：不应该做但做了
│   └── needn't have done：本不必做但做了
├── 习惯
│   ├── will：现在习惯
│   ├── would：过去习惯
│   └── used to：过去（现在不再）
└── 语境判断
    ├── 状态动词 → 推测
    ├── 动作动词 → 义务
    └── 有证据 → 推测`,
    selfTest: [
      {
        question: "I ______ swim when I was five.",
        options: ["can", "could", "may"],
        answer: "could",
      },
      {
        question: "He ______ be at home. The light is on.",
        options: ["must", "may", "can't"],
        answer: "must",
      },
      {
        question: "You ______ exercise more. (建议)",
        options: ["must", "should", "will"],
        answer: "should",
      },
      {
        question: "______ I use your phone? (礼貌请求)",
        options: ["Can", "May", "Could"],
        answer: "Could",
      },
      {
        question: "She ______ sit for hours reading. (习惯)",
        options: ["will", "would", "used to"],
        answer: "will",
      },
      {
        question: "You ______ told me. (责备)",
        options: ["should", "should have", "must have"],
        answer: "should have",
      },
      {
        question: "He ______ have left. His bag is gone.",
        options: ["must", "may", "can't"],
        answer: "must",
      },
      {
        question: "I ______ go if I had time. (虚拟)",
        options: ["will", "would", "could"],
        answer: "would",
      },
      {
        question: "You ______ smoke here. It's prohibited.",
        options: ["mustn't", "don't have to", "shouldn't"],
        answer: "mustn't",
      },
      {
        question: "I ______ played football every day when I was young.",
        options: ["will", "would", "used to"],
        answer: "would",
      },
    ],
  },
};

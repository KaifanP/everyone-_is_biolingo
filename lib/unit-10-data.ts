import { UnitData } from "./unit-01-data";

export const unit10Data: UnitData = {
  info: {
    id: "unit-10",
    moduleId: "02",
    number: 10,
    title: "义务与建议",
    titleEn: "Obligation & Suggestion",
  },
  objectives: [
    "掌握must, have to, mustn't, don't have to的区别",
    "掌握should, ought to, had better的用法",
    "理解need, needn't的用法",
    "在不同语境中正确使用表示义务和建议的情态动词",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>must</strong> go now.（我必须走了。）",
        "I <strong>have to</strong> go now.（我不得不走了。）",
        "You <strong>mustn't</strong> smoke here.（你不能在这里吸烟。）",
        "You <strong>don't have to</strong> smoke here.（你不必在这里吸烟。）",
        "You <strong>should</strong> exercise more.（你应该多锻炼。）",
      ],
      answer:
        "must是<strong>主观</strong>必须，have to是<strong>客观</strong>不得不；mustn't是<strong>禁止</strong>，don't have to是<strong>不必</strong>；should是<strong>建议</strong>。这些词的含义和语气差别很大。",
    },
    comparison: {
      chinese: [
        { text: "我必须走了。（自己觉得）", note: "主观" },
        { text: "我不得不走了。（火车要开了）", note: "客观" },
        { text: "你不能在这里吸烟！", note: "禁止" },
        { text: "你明天不必来。", note: "不必" },
      ],
      english: [
        { text: "I <strong>must</strong> go.", note: "主观" },
        { text: "I <strong>have to</strong> go.", note: "客观" },
        { text: "You <strong>mustn't</strong> smoke here.", note: "禁止" },
        { text: "You <strong>don't have to</strong> come.", note: "不必" },
      ],
      conclusion:
        "中文用不同的词（必须、不得不、不能、不必）来表达，英文用<strong>不同的</strong>情态动词组合来区分。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "must：主观义务",
          description: "说话者自己认为必须做",
          example: "I <strong>must</strong> study harder.（自己决定）",
        },
        {
          label: "have to：客观义务",
          description: "外部要求必须做",
          example: "I <strong>have to</strong> wear a uniform.（公司规定）",
        },
        {
          label: "mustn't：禁止",
          description: "绝对不能做",
          example: "You <strong>mustn't</strong> smoke here.",
        },
      ],
      aspect: [
        {
          label: "义务（Obligation）",
          description: "必须做某事",
          focus: "must / have to",
        },
        {
          label: "建议（Suggestion）",
          description: "应该做某事",
          focus: "should / ought to",
        },
        {
          label: "警告（Warning）",
          description: "最好做某事，否则有后果",
          focus: "had better",
        },
        {
          label: "非必要（No necessity）",
          description: "不必做某事",
          focus: "don't have to / needn't",
        },
      ],
    },
    matrix: {
      headers: ["情态动词", "含义", "语气", "来源"],
      rows: [
        { time: "must", forms: ["必须", "强", "主观（自己）"] },
        { time: "have to", forms: ["不得不", "一般", "客观（外部）"] },
        { time: "mustn't", forms: ["禁止", "很强", "主观"] },
        { time: "don't have to", forms: ["不必", "一般", "客观"] },
        { time: "should", forms: ["应该", "一般建议", "主观"] },
        { time: "ought to", forms: ["应该", "正式建议", "主观"] },
        { time: "had better", forms: ["最好", "强烈建议", "主观"] },
      ],
    },
    tenses: [
      {
        name: "must：主观义务",
        nameEn: "must: Subjective Obligation",
        structure: "must + 动词原形",
        usages: [
          { label: "自己认为必须", example: "I <strong>must</strong> study harder." },
          { label: "主观义务", example: "We <strong>must</strong> help him." },
        ],
        timeWords: "只有现在时",
      },
      {
        name: "have to：客观义务",
        nameEn: "have to: Objective Obligation",
        structure: "have to + 动词原形",
        usages: [
          { label: "外部要求", example: "I <strong>have to</strong> wear a uniform at work." },
          { label: "各种时态", example: "I <strong>had to</strong> go yesterday. / I <strong>will have to</strong> go." },
        ],
        timeWords: "各种时态都可用",
      },
      {
        name: "mustn't：禁止",
        nameEn: "mustn't: Prohibition",
        structure: "mustn't + 动词原形",
        usages: [
          { label: "禁止做某事", example: "You <strong>mustn't</strong> smoke here." },
          { label: "禁止", example: "Students <strong>mustn't</strong> cheat." },
        ],
        timeWords: "",
      },
      {
        name: "don't have to：不必",
        nameEn: "don't have to: No Necessity",
        structure: "don't have to + 动词原形",
        usages: [
          { label: "不必做某事", example: "You <strong>don't have to</strong> come tomorrow." },
          { label: "不需要", example: "Students <strong>don't have to</strong> wear uniforms." },
        ],
        timeWords: "",
      },
      {
        name: "should：建议",
        nameEn: "should: Suggestion",
        structure: "should + 动词原形",
        usages: [
          { label: "一般建议", example: "You <strong>should</strong> exercise more." },
          { label: "应该做", example: "You <strong>should</strong> see a doctor." },
          { label: "不应该", example: "You <strong>shouldn't</strong> eat so much sugar." },
        ],
        timeWords: "",
      },
      {
        name: "ought to：正式建议",
        nameEn: "ought to: Formal Suggestion",
        structure: "ought to + 动词原形",
        usages: [
          { label: "正式建议", example: "You <strong>ought to</strong> exercise more." },
          { label: "应该", example: "We <strong>ought to</strong> respect the elderly." },
        ],
        timeWords: "",
      },
      {
        name: "had better：警告",
        nameEn: "had better: Warning",
        structure: "had better + 动词原形",
        usages: [
          { label: "强烈建议/警告", example: "You <strong>had better</strong> study hard, or you'll fail." },
          { label: "否定：had better not", example: "You <strong>had better not</strong> be late." },
        ],
        timeWords: "暗示不做的后果",
      },
      {
        name: "need：需要",
        nameEn: "need: Necessity",
        structure: "情态动词：need + 原形 / 实义动词：need to + 原形",
        usages: [
          { label: "情态动词（否定/疑问）", example: "You <strong>needn't</strong> worry. / <strong>Need</strong> I go?" },
          { label: "实义动词（各种句型）", example: "I <strong>need to</strong> go now." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "混淆mustn't和don't have to",
        wrong: "You <strong>mustn't</strong> come tomorrow.（想说'不必来'）",
        correct: "You <strong>don't have to</strong> come tomorrow.",
        reason: "mustn't是禁止，don't have to是不必。中文'不能'和'不必'容易混淆。",
      },
      {
        title: "had better的否定形式",
        wrong: "You <strong>hadn't better</strong> go.",
        correct: "You <strong>had better not</strong> go.",
        reason: "had better的否定是had better not，不是hadn't better。",
      },
      {
        title: "need的用法混淆",
        wrong: "I <strong>need go</strong> now.（need作实义动词时）",
        correct: "I <strong>need to go</strong> now.",
        reason: "need作实义动词时后接to do；作情态动词时后接原形（通常用于否定/疑问）。",
      },
      {
        title: "should用于过去",
        wrong: "I <strong>should went</strong> to the party yesterday.",
        correct: "I <strong>should have gone</strong> to the party yesterday.",
        reason: "should have + 过去分词表示'过去应该做但没做'。",
      },
    ],
    keyQuestions: [
      "是主观义务还是客观义务？",
      "是禁止还是不必？",
      "是建议还是警告？",
      "是现在还是过去？",
    ],
    stateVerbs: {
      categories: [
        { label: "主观义务", verbs: ["must go", "must study", "must help"] },
        { label: "客观义务", verbs: ["have to wear", "have to take", "have to go"] },
        { label: "建议", verbs: ["should exercise", "ought to respect", "had better hurry"] },
      ],
      example: {
        wrong: "You <strong>mustn't</strong> come tomorrow.",
        correct: "You <strong>don't have to</strong> come tomorrow.",
        note: "想说'不必来'用don't have to，mustn't是'禁止来'。",
      },
    },
  },
  practice: [
    {
      title: "must vs have to",
      titleEn: "must vs have to",
      type: "fill",
      items: [
        { question: "I ______ go now. I have a meeting. (客观要求)", answer: "have to" },
        { question: "I ______ study harder. I want to pass. (主观意愿)", answer: "must" },
        { question: "Students ______ wear uniforms. (学校规定)", answer: "have to" },
        { question: "We ______ help him. He's our friend. (我们认为应该)", answer: "must" },
        { question: "She ______ leave early. Her train leaves at 6. (客观要求)", answer: "has to" },
      ],
    },
    {
      title: "mustn't vs don't have to",
      titleEn: "mustn't vs don't have to",
      type: "fill",
      items: [
        { question: "You ______ smoke here. It's prohibited.", answer: "mustn't" },
        { question: "You ______ come tomorrow if you're busy.", answer: "don't have to" },
        { question: "Students ______ cheat in the exam.", answer: "mustn't" },
        { question: "You ______ buy me a gift. It's not necessary.", answer: "don't have to" },
        { question: "You ______ drive after drinking. It's illegal.", answer: "mustn't" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "You mustn't come tomorrow if you're busy.", answer: "You <strong>don't have to</strong> come tomorrow.（不必来，不是禁止来）" },
        { question: "You hadn't better go there alone.", answer: "You <strong>had better not</strong> go there alone.（否定形式是had better not）" },
        { question: "I need go now.", answer: "I <strong>need to</strong> go now.（实义动词用法） / I <strong>need</strong> go now.（情态动词，但通常用于否定/疑问）" },
        { question: "He must be at home. (否定推测)", answer: "He <strong>can't</strong> be at home.（否定推测用can't）" },
        { question: "I should went to the party yesterday.", answer: "I <strong>should have gone</strong> to the party yesterday.（should have + 过去分词）" },
      ],
    },
  ],
  production: [
    {
      title: "建议练习",
      titleEn: "Give Suggestions",
      description: "用should/ought to/had better给朋友提建议。针对不同场景给出3-4条建议。",
      example: [
        "朋友说最近很累：",
        "You <strong>should</strong> take a break.",
        "You <strong>ought to</strong> exercise more.",
        "You <strong>had better</strong> not work too hard, or you'll get sick.",
      ],
    },
    {
      title: "规则描述",
      titleEn: "Describe Rules",
      description: "用must/have to/should描述学校、公司或交通规则。",
      example: [
        "Students <strong>have to</strong> wear uniforms.",
        "Students <strong>mustn't</strong> use phones in class.",
        "Drivers <strong>must</strong> stop at red lights.",
        "You <strong>should</strong> arrive on time.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "must vs have to",
        items: ["must：主观义务（自己认为）", "have to：客观义务（外部要求）", "must只有现在时，have to各种时态"],
      },
      {
        title: "mustn't vs don't have to",
        items: ["mustn't：禁止（不能做）", "don't have to：不必（不需要做）", "这是中文母语者最容易混淆的"],
      },
      {
        title: "建议表达",
        items: ["should：一般建议", "ought to：正式建议", "had better：强烈建议/警告"],
      },
      {
        title: "need的两种用法",
        items: ["情态动词：needn't + 原形", "实义动词：need to + 原形"],
      },
    ],
    mindMap: `义务与建议
├── 义务
│   ├── must：主观（I must go.）
│   ├── have to：客观（I have to go.）
│   ├── mustn't：禁止（You mustn't smoke.）
│   └── don't have to：不必（You don't have to come.）
├── 建议
│   ├── should：应该（You should go.）
│   ├── ought to：正式建议（You ought to go.）
│   └── had better：警告（You had better go.）
├── need
│   ├── 情态动词：needn't
│   └── 实义动词：need to
└── 过去义务
    ├── had to：过去不得不
    └── should have done：过去应该做但没做`,
    selfTest: [
      {
        question: "You ______ smoke here. It's prohibited.",
        options: ["mustn't", "don't have to", "shouldn't"],
        answer: "mustn't",
      },
      {
        question: "You ______ come tomorrow if you're busy.",
        options: ["mustn't", "don't have to", "shouldn't"],
        answer: "don't have to",
      },
      {
        question: "You ______ see a doctor. You look pale.",
        options: ["must", "have to", "should"],
        answer: "should",
      },
      {
        question: "You ______ study harder, or you'll fail.",
        options: ["should", "had better", "must"],
        answer: "had better",
      },
      {
        question: "He ______ be at home. The light is on.",
        options: ["must", "can't", "mustn't"],
        answer: "must",
      },
    ],
  },
};

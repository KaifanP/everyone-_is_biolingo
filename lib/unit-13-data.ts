import { UnitData } from "./unit-01-data";

export const unit13Data: UnitData = {
  info: {
    id: "unit-13",
    moduleId: "02",
    number: 13,
    title: "情态动词表示习惯与特征",
    titleEn: "Modal Verbs: Habits & Characteristics",
  },
  objectives: [
    "掌握will/would表示习惯的用法",
    "掌握used to表示过去习惯/状态的用法",
    "区分will/would/used to的用法",
    "在真实语境中正确使用这些表达",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "He <strong>will</strong> sit for hours without saying a word.（他能坐几个小时不说话。）",
        "He <strong>would</strong> sit for hours without saying a word.（他过去能坐几个小时不说话。）",
        "He <strong>used to</strong> sit for hours without saying a word.（他过去常常坐几个小时不说话。）",
      ],
      answer:
        "will表示<strong>现在的习惯/特征</strong>，would表示<strong>过去的习惯（回忆）</strong>，used to表示<strong>过去的习惯/状态（现在不再）</strong>。三者都与'习惯'有关，但时间和含义不同。",
    },
    comparison: {
      chinese: [
        { text: "他能坐几个小时不说话。（现在也是）", note: "现在的特征" },
        { text: "他过去常常坐几个小时不说话。（回忆）", note: "过去习惯" },
        { text: "他过去常常坐几个小时不说话。（现在不了）", note: "过去，现在不再" },
      ],
      english: [
        { text: "He <strong>will</strong> sit for hours.", note: "现在" },
        { text: "He <strong>would</strong> sit for hours.", note: "过去回忆" },
        { text: "He <strong>used to</strong> sit for hours.", note: "现在不再" },
      ],
      conclusion:
        "will/would/used to都可以表示习惯，但<strong>时间</strong>和<strong>是否延续到现在</strong>不同。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "will：现在的习惯/特征",
          description: "表示现在的典型行为，有时含不满语气",
          example: "He <strong>will</strong> sit for hours without saying a word.",
        },
        {
          label: "would：过去的习惯（回忆）",
          description: "回忆过去经常做的事",
          example: "When I was young, I <strong>would</strong> play football every day.",
        },
        {
          label: "used to：过去（现在不再）",
          description: "过去的习惯或状态，强调现在不再",
          example: "I <strong>used to</strong> live in London.",
        },
      ],
      aspect: [
        {
          label: "will习惯",
          description: "现在的典型行为",
          focus: "有时含不满/批评语气",
        },
        {
          label: "would习惯",
          description: "回忆过去的习惯",
          focus: "只用于习惯，不用于状态",
        },
        {
          label: "used to习惯/状态",
          description: "过去的习惯或状态",
          focus: "强调现在不再",
        },
        {
          label: "关键区别",
          description: "would vs used to",
          focus: "would只用于习惯，used to习惯和状态都行",
        },
      ],
    },
    matrix: {
      headers: ["表达", "时间", "用于习惯", "用于状态", "现在是否继续"],
      rows: [
        { time: "will", forms: ["现在", "✓", "✗", "是"] },
        { time: "would", forms: ["过去", "✓", "✗", "不确定"] },
        { time: "used to", forms: ["过去", "✓", "✓", "不再"] },
      ],
    },
    tenses: [
      {
        name: "will：现在的习惯",
        nameEn: "will: Present Habit",
        structure: "will + 动词原形",
        usages: [
          { label: "典型行为", example: "He <strong>will</strong> sit for hours without saying a word." },
          { label: "总是做（含不满）", example: "She <strong>will</strong> always complain about the weather." },
          { label: "经常做", example: "She <strong>will</strong> lose her keys every week." },
        ],
        timeWords: "通常带有'总是''经常'的含义",
      },
      {
        name: "would：过去的习惯",
        nameEn: "would: Past Habit (Memory)",
        structure: "would + 动词原形",
        usages: [
          { label: "过去每天做", example: "When I was young, I <strong>would</strong> play football every day." },
          { label: "回忆过去", example: "She <strong>would</strong> sit by the window and read for hours." },
          { label: "每年做", example: "Every summer, we <strong>would</strong> go to the beach." },
        ],
        timeWords: "用于回忆过去的习惯",
      },
      {
        name: "used to：过去的习惯/状态",
        nameEn: "used to: Past Habit/State",
        structure: "used to + 动词原形",
        usages: [
          { label: "过去的习惯", example: "I <strong>used to</strong> play football every day.（现在不踢了）" },
          { label: "过去的状态", example: "She <strong>used to</strong> live in London.（现在不住了）" },
          { label: "过去的样子", example: "He <strong>used to</strong> be very shy.（现在不害羞了）" },
          { label: "过去存在", example: "There <strong>used to</strong> be a park here.（现在没有了）" },
        ],
        timeWords: "强调现在不再",
      },
      {
        name: "would vs used to",
        nameEn: "would vs used to",
        structure: "区别对比",
        usages: [
          { label: "习惯：两者都行", example: "I <strong>would</strong> play football. = I <strong>used to</strong> play football." },
          { label: "状态：只用used to", example: "I <strong>used to</strong> live in London. ✗ I would live in London." },
          { label: "现在是否继续", example: "would不确定；used to强调现在不再" },
        ],
        timeWords: "",
      },
      {
        name: "used to的否定和疑问",
        nameEn: "used to: Negative & Question",
        structure: "didn't use to / Did ... use to",
        usages: [
          { label: "否定", example: "I <strong>didn't use to</strong> like coffee.（现在喜欢了）" },
          { label: "疑问", example: "<strong>Did</strong> you <strong>use to</strong> play football?" },
        ],
        timeWords: "",
      },
      {
        name: "would的其他用法",
        nameEn: "would: Other Uses",
        structure: "would + 动词原形",
        usages: [
          { label: "礼貌请求", example: "<strong>Would</strong> you help me?" },
          { label: "虚拟语气", example: "I <strong>would</strong> go if I had time." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "would用于过去的状态",
        wrong: "I <strong>would</strong> live in London.",
        correct: "I <strong>used to</strong> live in London.",
        reason: "would只用于过去的习惯，不用于状态。状态用used to。",
      },
      {
        title: "used to的否定形式",
        wrong: "I <strong>used not to</strong> like coffee.",
        correct: "I <strong>didn't use to</strong> like coffee.",
        reason: "used to的否定形式是didn't use to。",
      },
      {
        title: "混淆will和would的习惯用法",
        wrong: "When I was young, I <strong>will</strong> play football every day.",
        correct: "When I was young, I <strong>would</strong> play football every day.",
        reason: "过去的习惯用would，不用will。",
      },
      {
        title: "used to用于现在",
        wrong: "I <strong>used to</strong> play football every day now.",
        correct: "I <strong>play</strong> football every day now.",
        reason: "used to只用于过去，现在习惯用一般现在时。",
      },
    ],
    keyQuestions: [
      "是现在的习惯还是过去的习惯？",
      "是习惯还是状态？",
      "现在还在做吗？",
    ],
    stateVerbs: {
      categories: [
        { label: "will习惯", verbs: ["will sit", "will complain", "will lose", "will talk"] },
        { label: "would习惯", verbs: ["would play", "would sit", "would go", "would tell"] },
        { label: "used to", verbs: ["used to play", "used to live", "used to be", "used to have"] },
      ],
      example: {
        wrong: "I <strong>would</strong> live in London.",
        correct: "I <strong>used to</strong> live in London.",
        note: "live是状态动词，表示过去的状态只能用used to。",
      },
    },
  },
  practice: [
    {
      title: "will/would/used to填空",
      titleEn: "will/would/used to Fill-in",
      type: "fill",
      items: [
        { question: "When I was young, I ______ play football every day. (过去的习惯)", answer: "would / used to" },
        { question: "He ______ sit for hours without saying a word. (现在的特征)", answer: "will" },
        { question: "She ______ live in London, but now she lives in Paris. (过去的状态)", answer: "used to" },
        { question: "Every summer, we ______ go to the beach. (回忆过去的习惯)", answer: "would / used to" },
        { question: "He ______ always complain about the weather. (现在的习惯)", answer: "will" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I would live in London when I was young.", answer: "I <strong>used to</strong> live in London.（状态用used to）" },
        { question: "She used not to like coffee.", answer: "She <strong>didn't use to</strong> like coffee.（否定形式是didn't use to）" },
        { question: "When I was young, I will play football every day.", answer: "When I was young, I <strong>would</strong> play football every day.（过去习惯用would）" },
        { question: "He used to play football every day now.", answer: "He <strong>plays</strong> football every day now.（现在习惯用一般现在时）" },
        { question: "I didn't used to like coffee.", answer: "I <strong>didn't use to</strong> like coffee.（use不加d）" },
      ],
    },
    {
      title: "句子改写",
      titleEn: "Sentence Rewrite",
      type: "fill",
      items: [
        { question: "He was very shy. → He ______ very shy. (用used to)", answer: "used to be" },
        { question: "There was a park here. → There ______ a park here. (用used to)", answer: "used to be" },
        { question: "I liked coffee. → I ______ coffee. (用used to)", answer: "used to like" },
        { question: "She exercised every day. → She ______ every day. (用used to)", answer: "used to exercise" },
        { question: "They had a car. → They ______ a car. (用used to)", answer: "used to have" },
      ],
    },
  ],
  production: [
    {
      title: "过去和现在对比",
      titleEn: "Past vs Present",
      description: "用used to和一般现在时对比你过去和现在的5个不同。",
      example: [
        "I <strong>used to</strong> live in Beijing, but now I live in Shanghai.",
        "I <strong>used to</strong> be shy, but now I'm confident.",
        "I <strong>used to</strong> play football every day, but now I only play on weekends.",
      ],
    },
    {
      title: "回忆过去",
      titleEn: "Memories",
      description: "用would回忆你过去的3个习惯。",
      example: [
        "When I was young, I <strong>would</strong> wake up early every morning.",
        "Every summer, I <strong>would</strong> visit my grandparents.",
        "After school, I <strong>would</strong> play with my friends.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "will：现在的习惯/特征",
        items: ["表示现在的典型行为", "有时含不满/批评语气", "He will sit for hours."],
      },
      {
        title: "would：过去的习惯（回忆）",
        items: ["回忆过去经常做的事", "只用于习惯，不用于状态", "When I was young, I would play football."],
      },
      {
        title: "used to：过去（现在不再）",
        items: ["过去的习惯或状态", "强调现在不再", "I used to live in London."],
      },
      {
        title: "would vs used to",
        items: ["习惯：两者都行", "状态：只用used to", "否定：didn't use to"],
      },
    ],
    mindMap: `习惯与特征
├── will：现在习惯
│   ├── He will sit for hours.（特征）
│   ├── She will always complain.（不满）
│   └── 含"总是""经常"之意
├── would：过去习惯（回忆）
│   ├── I would play football.（回忆）
│   ├── 只用于习惯，不用于状态
│   └── Every summer, we would go.
├── used to：过去（现在不再）
│   ├── 习惯：I used to play football.
│   ├── 状态：I used to live in London.
│   └── 否定：didn't use to
└── 关键区别
    ├── would vs used to：习惯都行，状态只用used to
    ├── used to强调现在不再
    └── will用于现在，would用于过去`,
    selfTest: [
      {
        question: "When I was young, I ______ play football every day.",
        options: ["will", "would", "used to"],
        answer: "would",
      },
      {
        question: "She ______ live in London, but now she lives in Paris.",
        options: ["will", "would", "used to"],
        answer: "used to",
      },
      {
        question: "He ______ sit for hours without saying a word. (现在的特征)",
        options: ["will", "would", "used to"],
        answer: "will",
      },
      {
        question: "I ______ like coffee, but now I do.",
        options: ["didn't use to", "wouldn't", "won't"],
        answer: "didn't use to",
      },
      {
        question: "Every summer, we ______ go to the beach. (回忆)",
        options: ["will", "would", "used to"],
        answer: "would",
      },
    ],
  },
};

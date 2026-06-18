import { UnitData } from "./unit-01-data";

export const unit09Data: UnitData = {
  info: {
    id: "unit-09",
    moduleId: "02",
    number: 9,
    title: "情态动词基础与能力/许可",
    titleEn: "Modal Verbs: Basics, Ability & Permission",
  },
  objectives: [
    "理解情态动词的特性和用法规则",
    "掌握can/could/be able to表示能力的用法",
    "掌握can/may/could表示许可的用法",
    "区分不同情态动词的语气强弱",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>can</strong> swim.（我会游泳。）",
        "You <strong>may</strong> leave now.（你现在可以走了。）",
        "<strong>Could</strong> you help me?（你能帮我吗？）",
        "She <strong>must</strong> be tired.（她一定很累。）",
      ],
      answer:
        "这些句子中的情态动词分别表达了：<strong>能力</strong>（can）、<strong>许可</strong>（may）、<strong>请求</strong>（could）、<strong>推测</strong>（must）。情态动词给句子增添了<strong>态度和语气</strong>。",
    },
    comparison: {
      chinese: [
        { text: "我会游泳。", note: "能力" },
        { text: "你可以走了。", note: "许可" },
        { text: "你能帮我吗？", note: "请求" },
      ],
      english: [
        { text: "I <strong>can</strong> swim.", note: "能力" },
        { text: "You <strong>may</strong> leave.", note: "许可" },
        { text: "<strong>Could</strong> you help me?", note: "请求" },
      ],
      conclusion:
        "中文用词汇（会、可以、能）表达这些含义，英文用<strong>情态动词（Modal Verbs）</strong>来表达。情态动词后接<strong>动词原形</strong>，没有人称变化。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "特性1：后接动词原形",
          description: "情态动词后面必须接动词原形",
          example: "I <strong>can swim</strong>. ✗ I can swimming.",
        },
        {
          label: "特性2：没有人称变化",
          description: "情态动词没有第三人称单数形式",
          example: "He <strong>can swim</strong>. ✗ He cans swim.",
        },
        {
          label: "特性3：否定直接加not",
          description: "否定形式在情态动词后加not",
          example: "I <strong>cannot</strong> (can't) swim.",
        },
      ],
      aspect: [
        {
          label: "能力（Ability）",
          description: "表示有能力做某事",
          focus: "can / could / be able to",
        },
        {
          label: "许可（Permission）",
          description: "表示被允许做某事",
          focus: "can / may / could",
        },
        {
          label: "请求（Request）",
          description: "礼貌地请求",
          focus: "can / could / may",
        },
        {
          label: "推测（Deduction）",
          description: "对事实进行推测",
          focus: "must / may / might / can't",
        },
      ],
    },
    matrix: {
      headers: ["情态动词", "过去式", "能力", "许可", "推测"],
      rows: [
        { time: "can", forms: ["could", "✓", "✓（非正式）", "理论可能"] },
        { time: "may", forms: ["might", "—", "✓（正式）", "✓"] },
        { time: "must", forms: ["had to", "—", "—", "✓（一定）"] },
        { time: "could", forms: ["—", "✓（过去）", "✓（礼貌请求）", "✓"] },
        { time: "shall", forms: ["should", "—", "—", "—"] },
        { time: "will", forms: ["would", "—", "—", "—"] },
      ],
    },
    tenses: [
      {
        name: "can：现在能力",
        nameEn: "can: Present Ability",
        structure: "can + 动词原形",
        usages: [
          { label: "现在的能力", example: "I <strong>can speak</strong> English." },
          { label: "否定：不能", example: "I <strong>can't understand</strong> this." },
          { label: "疑问：能…吗？", example: "<strong>Can</strong> you swim?" },
        ],
        timeWords: "",
      },
      {
        name: "could：过去能力",
        nameEn: "could: Past Ability",
        structure: "could + 动词原形",
        usages: [
          { label: "过去的一般能力", example: "I <strong>could swim</strong> when I was five." },
          { label: "过去不能", example: "I <strong>couldn't understand</strong> English at first." },
        ],
        timeWords: "",
      },
      {
        name: "be able to：各种时态",
        nameEn: "be able to: All Tenses",
        structure: "be able to + 动词原形",
        usages: [
          { label: "将来的能力", example: "I <strong>will be able to</strong> help you tomorrow." },
          { label: "现在完成时", example: "She <strong>has been able to</strong> play piano since childhood." },
          { label: "过去成功完成", example: "He <strong>was able to</strong> escape from the fire." },
        ],
        timeWords: "",
      },
      {
        name: "could vs was able to",
        nameEn: "could vs was able to",
        structure: "区别用法",
        usages: [
          { label: "一般能力用could", example: "He <strong>could swim</strong> when he was young." },
          { label: "具体完成用was able to", example: "He <strong>was able to</strong> swim across the river yesterday." },
        ],
        timeWords: "",
      },
      {
        name: "can：非正式许可",
        nameEn: "can: Informal Permission",
        structure: "can + 动词原形",
        usages: [
          { label: "非正式场合", example: "<strong>Can</strong> I use your phone?" },
          { label: "给予许可", example: "You <strong>can</strong> leave now." },
          { label: "拒绝许可", example: "You <strong>can't</strong> park here." },
        ],
        timeWords: "",
      },
      {
        name: "may：正式许可",
        nameEn: "may: Formal Permission",
        structure: "may + 动词原形",
        usages: [
          { label: "正式场合", example: "<strong>May</strong> I use your phone?" },
          { label: "给予许可", example: "You <strong>may</strong> leave now." },
          { label: "拒绝许可", example: "Students <strong>may not</strong> use phones in class." },
        ],
        timeWords: "",
      },
      {
        name: "could：礼貌请求",
        nameEn: "could: Polite Request",
        structure: "could + 主语 + 动词原形",
        usages: [
          { label: "礼貌请求", example: "<strong>Could</strong> you help me?" },
          { label: "请求许可", example: "<strong>Could</strong> I use your phone?" },
          { label: "比can更礼貌", example: "<strong>Could</strong> you open the window?" },
        ],
        timeWords: "",
      },
      {
        name: "can：理论可能性",
        nameEn: "can: Theoretical Possibility",
        structure: "can + 动词原形",
        usages: [
          { label: "一般性陈述", example: "It <strong>can be</strong> very cold in winter." },
          { label: "一般性陈述", example: "Driving <strong>can be</strong> dangerous." },
        ],
        timeWords: "通常用于一般性陈述，不用于具体事件",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "can后加to",
        wrong: "I can <strong>to swim</strong>.",
        correct: "I can <strong>swim</strong>.",
        reason: "情态动词后接动词原形，不加to。",
      },
      {
        title: "could用于过去成功完成",
        wrong: "He <strong>could escape</strong> from the fire yesterday.",
        correct: "He <strong>was able to</strong> escape from the fire yesterday.",
        reason: "具体完成的动作用was able to，不用could。",
      },
      {
        title: "can用于将来能力",
        wrong: "I <strong>can help</strong> you tomorrow.",
        correct: "I <strong>will be able to</strong> help you tomorrow.",
        reason: "将来的能力用will be able to，不用can。",
      },
      {
        title: "混淆can和may的许可用法",
        wrong: "<strong>Can</strong> I leave?（正式场合）",
        correct: "<strong>May</strong> I leave?（正式场合）",
        reason: "正式场合用may，非正式场合用can。",
      },
    ],
    keyQuestions: [
      "这个情态动词表达的是什么含义？（能力/许可/推测/义务）",
      "是什么时态？（现在/过去/将来）",
      "是什么场合？（正式/非正式）",
    ],
    stateVerbs: {
      categories: [
        { label: "能力", verbs: ["can speak", "can swim", "can play", "can drive"] },
        { label: "许可", verbs: ["may leave", "can go", "may use", "can enter"] },
        { label: "请求", verbs: ["could help", "could open", "could pass", "could explain"] },
      ],
      example: {
        wrong: "I <strong>can to swim</strong>.",
        correct: "I <strong>can swim</strong>.",
        note: "情态动词后必须接动词原形，不能加to。",
      },
    },
  },
  practice: [
    {
      title: "can/could/be able to填空",
      titleEn: "can/could/be able to Fill-in",
      type: "fill",
      items: [
        { question: "I ______ swim when I was five.", answer: "could" },
        { question: "She ______ speak three languages.", answer: "can" },
        { question: "He ______ escape from the fire yesterday.", answer: "was able to" },
        { question: "I ______ help you tomorrow.", answer: "will be able to" },
        { question: "She ______ play the piano since childhood.", answer: "has been able to" },
      ],
    },
    {
      title: "许可表达练习",
      titleEn: "Permission Expressions",
      type: "fill",
      items: [
        { question: "Can I use your computer? (更正式)", answer: "May I use your computer?" },
        { question: "Can you pass the salt? (更礼貌)", answer: "Could you pass the salt?" },
        { question: "Can I leave early? (更正式)", answer: "May I leave early?" },
        { question: "Can you explain this? (更礼貌)", answer: "Could you explain this?" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I can to speak English.", answer: "I <strong>can</strong> speak English.（情态动词后接原形，不加to）" },
        { question: "He could escape from the fire yesterday.", answer: "He <strong>was able to</strong> escape from the fire yesterday.（具体完成用was able to）" },
        { question: "She cans play the piano.", answer: "She <strong>can</strong> play the piano.（情态动词没有人称变化）" },
        { question: "Can I leave? (正式场合)", answer: "<strong>May</strong> I leave?（正式场合用may）" },
        { question: "I can help you tomorrow.", answer: "I <strong>will be able to</strong> help you tomorrow.（将来能力用will be able to）" },
      ],
    },
  ],
  production: [
    {
      title: "能力描述",
      titleEn: "Describe Abilities",
      description: "用can/could/be able to描述你或你家人朋友的能力。至少包含5个句子。",
      example: [
        "I <strong>can speak</strong> English and Chinese.",
        "I <strong>could swim</strong> when I was ten.",
        "My mother <strong>can cook</strong> very well.",
        "My friend <strong>was able to</strong> run a marathon last year.",
      ],
    },
    {
      title: "请求练习",
      titleEn: "Request Practice",
      description: "用不同的情态动词提出请求，注意场合（正式/非正式/礼貌）。",
      example: [
        "场景1（向朋友借手机）：<strong>Can</strong> I use your phone?",
        "场景2（向老师借东西）：<strong>May</strong> I borrow your pen?",
        "场景3（请人帮忙）：<strong>Could</strong> you help me with this?",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "情态动词特性",
        items: ["后接动词原形", "没有人称变化", "否定直接加not", "疑问句直接提前"],
      },
      {
        title: "表示能力",
        items: ["can：现在能力", "could：过去能力（一般）", "be able to：各种时态", "was able to：过去具体完成"],
      },
      {
        title: "表示许可",
        items: ["can：非正式", "may：正式", "could：礼貌请求"],
      },
      {
        title: "语气对比",
        items: ["正式程度：may > can", "礼貌程度：could > can", "场合决定用词选择"],
      },
    ],
    mindMap: `情态动词基础
├── 四大特性
│   ├── 后接动词原形
│   ├── 无人称变化
│   ├── 否定加not
│   └── 疑问直接提前
├── 表示能力
│   ├── can：现在
│   ├── could：过去（一般）
│   ├── was able to：过去（具体完成）
│   └── be able to：各种时态
├── 表示许可
│   ├── can：非正式
│   ├── may：正式
│   └── could：礼貌请求
└── can的多重含义
    ├── 能力：I can swim.
    ├── 许可：You can go.
    └── 理论可能：It can be cold.`,
    selfTest: [
      {
        question: "I ______ speak English.",
        options: ["can", "am able", "cans"],
        answer: "can",
      },
      {
        question: "He ______ escape from the fire yesterday.",
        options: ["could", "was able to", "can"],
        answer: "was able to",
      },
      {
        question: "______ I leave now? (正式场合)",
        options: ["Can", "May", "Could"],
        answer: "May",
      },
      {
        question: "She ______ play the piano since childhood.",
        options: ["can", "could", "has been able to"],
        answer: "has been able to",
      },
      {
        question: "______ you help me? (礼貌请求)",
        options: ["Can", "May", "Could"],
        answer: "Could",
      },
    ],
  },
};

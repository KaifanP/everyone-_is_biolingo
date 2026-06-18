import { UnitData } from "./unit-01-data";

export const unit22Data: UnitData = {
  info: {
    id: "unit-22",
    moduleId: "03",
    number: 22,
    title: "状语从句——条件、让步、方式",
    titleEn: "Adverbial Clauses: Condition, Concession & Manner",
  },
  objectives: [
    "掌握条件状语从句的用法（if/unless/provided that）",
    "掌握让步状语从句的用法（although/even though/while/however）",
    "掌握方式状语从句的用法（as/as if/as though）",
    "区分不同引导词的细微差别",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "<strong>If it rains</strong>, we'll stay at home.",
        "<strong>Although he was tired</strong>, he kept working.",
        "He talks <strong>as if he knows everything</strong>.",
        "<strong>Unless you hurry</strong>, you'll be late.",
      ],
      answer:
        "这些状语从句分别表示：<br>If → <strong>条件</strong>（如果下雨）<br>Although → <strong>让步</strong>（虽然他很累）<br>as if → <strong>方式</strong>（好像他知道一切）<br>Unless → <strong>条件</strong>（除非你快点）",
    },
    comparison: {
      chinese: [
        { text: "如果下雨，我们就待在家里。", note: "条件" },
        { text: "虽然他很累，但他继续工作。", note: "让步" },
        { text: "他说话好像他知道一切。", note: "方式" },
      ],
      english: [
        { text: "<strong>If</strong> it rains, we'll stay home.", note: "条件状语从句" },
        { text: "<strong>Although</strong> he was tired, he kept working.", note: "让步状语从句" },
        { text: "He talks <strong>as if</strong> he knows everything.", note: "方式状语从句" },
      ],
      conclusion:
        "条件表示<strong>假设</strong>，让步表示<strong>转折</strong>，方式表示<strong>怎样做</strong>。三者逻辑关系完全不同。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "条件状语从句",
          description: "表示动作发生的条件，回答\"在什么条件下\"",
          example: "<strong>If</strong> it rains, we'll stay home.",
        },
        {
          label: "让步状语从句",
          description: "表示\"虽然……但是……\"，主句与从句形成转折",
          example: "<strong>Although</strong> he was tired, he kept working.",
        },
        {
          label: "方式状语从句",
          description: "表示动作的方式，回答\"怎样\"",
          example: "He talks <strong>as if</strong> he knows everything.",
        },
      ],
      aspect: [
        {
          label: "条件：if/unless/as long as",
          description: "if如果，unless除非，as long as只要",
          focus: "if + 一般现在时代替将来时",
        },
        {
          label: "让步：although/even though/however",
          description: "although虽然，even though即使，however无论多么",
          focus: "although不能与but连用",
        },
        {
          label: "方式：as/as if/as though",
          description: "as按照，as if/as though好像",
          focus: "as if可与虚拟语气连用",
        },
      ],
    },
    matrix: {
      headers: ["类型", "引导词", "含义", "例句"],
      rows: [
        { time: "条件", forms: ["if", "如果", "If it rains, we'll stay home."] },
        { time: "条件", forms: ["unless", "除非（=if...not）", "Unless you hurry, you'll be late."] },
        { time: "条件", forms: ["provided that", "只要（正式）", "I'll help provided that you ask."] },
        { time: "条件", forms: ["as long as", "只要", "You can stay as long as you want."] },
        { time: "条件", forms: ["in case", "以防", "Take an umbrella in case it rains."] },
        { time: "让步", forms: ["although", "虽然", "Although he was tired, he kept working."] },
        { time: "让步", forms: ["even though", "即使（更强）", "I love him even though he has faults."] },
        { time: "让步", forms: ["while", "虽然", "While I understand, I disagree."] },
        { time: "让步", forms: ["however", "无论多么", "However hard he tried, he failed."] },
        { time: "让步", forms: ["whatever/whoever", "无论", "Whatever happens, I'll support you."] },
        { time: "方式", forms: ["as", "按照", "Do as I say."] },
        { time: "方式", forms: ["as if / as though", "好像", "He talks as if he knew everything."] },
      ],
    },
    tenses: [
      {
        name: "if：如果（条件）",
        nameEn: "if — condition",
        structure: "if + 从句（一般现在时代替将来时）",
        usages: [
          { label: "真实条件", example: "<strong>If</strong> it rains, we'll stay home." },
          { label: "从句用一般现在时", example: "I'll go <strong>if he goes</strong>.（不用will go）" },
        ],
        timeWords: "if从句中用一般现在时代替将来时",
      },
      {
        name: "unless：除非",
        nameEn: "unless — if...not",
        structure: "unless + 从句 = if...not",
        usages: [
          { label: "除非", example: "<strong>Unless</strong> you hurry, you'll be late." },
          { label: "= if...not", example: "<strong>If</strong> you <strong>don't</strong> hurry, you'll be late." },
          { label: "否定条件", example: "I won't go <strong>unless</strong> he goes." },
        ],
        timeWords: "unless也用一般现在时代替将来时",
      },
      {
        name: "provided that / as long as：只要",
        nameEn: "provided that / as long as — condition",
        structure: "provided that / as long as + 从句",
        usages: [
          { label: "provided that（正式）", example: "I'll help you <strong>provided that</strong> you ask." },
          { label: "as long as", example: "You can stay <strong>as long as</strong> you want." },
          { label: "in case：以防", example: "Take an umbrella <strong>in case</strong> it rains." },
        ],
        timeWords: "provided that比if更正式，as long as强调持续性",
      },
      {
        name: "although：虽然（让步）",
        nameEn: "although — concession",
        structure: "although + 从句（不与but连用）",
        usages: [
          { label: "虽然", example: "<strong>Although</strong> he was tired, he kept working." },
          { label: "不与but连用", example: "✗ Although...but... ✓ Although..." },
          { label: "even though（更强）", example: "I love him <strong>even though</strong> he has faults." },
        ],
        timeWords: "although不能与but在同一个句子中连用",
      },
      {
        name: "however / whatever / whoever",
        nameEn: "however/whatever/whoever — concession",
        structure: "however + adj./adv. / whatever/whoever + 从句",
        usages: [
          { label: "however + adj.", example: "<strong>However</strong> hard he tried, he failed." },
          { label: "whatever", example: "<strong>Whatever</strong> happens, I'll support you." },
          { label: "whoever", example: "<strong>Whoever</strong> you are, you must follow rules." },
        ],
        timeWords: "however = no matter how, whatever = no matter what",
      },
      {
        name: "as / as if / as though（方式）",
        nameEn: "as / as if / as though — manner",
        structure: "as/as if/as though + 从句",
        usages: [
          { label: "as：按照", example: "Do <strong>as</strong> I say." },
          { label: "as if：好像（可虚拟）", example: "He talks <strong>as if</strong> he <strong>knew</strong> everything.（虚拟）" },
          { label: "as if：好像（可能真实）", example: "He talks <strong>as if</strong> he <strong>knows</strong> everything.（可能真实）" },
        ],
        timeWords: "as if/as though后可用虚拟语气（与事实相反）或陈述语气（可能真实）",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "although和but连用",
        wrong: "<strong>Although</strong> he was tired, <strong>but</strong> he kept working.",
        correct: "<strong>Although</strong> he was tired, he kept working.",
        reason: "although和but不能在同一个句子中连用，二选一。",
      },
      {
        title: "if从句用将来时",
        wrong: "<strong>If it will rain</strong>, we'll stay home.",
        correct: "<strong>If it rains</strong>, we'll stay home.",
        reason: "if从句中用一般现在时代替将来时。",
      },
      {
        title: "unless后用将来时",
        wrong: "I won't go <strong>unless he will go</strong>.",
        correct: "I won't go <strong>unless he goes</strong>.",
        reason: "unless从句也用一般现在时代替将来时。",
      },
      {
        title: "as if后用陈述语气（想表达虚拟）",
        wrong: "He talks <strong>as if he knows</strong> everything.（想表达他其实不知道）",
        correct: "He talks <strong>as if he knew</strong> everything.",
        reason: "表示与事实相反时，as if后用虚拟语气（过去时）。",
      },
    ],
    keyQuestions: [
      "although和but能否连用？（不能，二选一）",
      "if/unless从句中能否用将来时？（不能，用一般现在时代替）",
      "as if后用什么语气？（虚拟用过去时，真实用现在时）",
      "even if和even though有什么区别？（even if假设，even though事实）",
    ],
    stateVerbs: {
      categories: [
        { label: "条件", verbs: ["if（如果）", "unless（除非）", "as long as（只要）", "in case（以防）"] },
        { label: "让步", verbs: ["although（虽然）", "even though（即使）", "however（无论多么）", "whatever（无论什么）"] },
        { label: "方式", verbs: ["as（按照）", "as if/as though（好像）"] },
      ],
      example: {
        wrong: "<strong>Although</strong> he was tired, <strong>but</strong> he kept working.",
        correct: "<strong>Although</strong> he was tired, he kept working.",
        note: "although和but不能在同一个句子中连用。",
      },
    },
  },
  practice: [
    {
      title: "条件状语从句填空",
      titleEn: "Condition Clause Fill-in",
      type: "fill",
      items: [
        { question: "______ it rains, we'll stay at home.", answer: "If" },
        { question: "______ you hurry, you'll be late.", answer: "Unless" },
        { question: "I'll help you ______ you ask.", answer: "as long as" },
        { question: "You can stay ______ you want.", answer: "as long as" },
        { question: "Take an umbrella ______ it rains.", answer: "in case" },
      ],
    },
    {
      title: "让步状语从句填空",
      titleEn: "Concession Clause Fill-in",
      type: "fill",
      items: [
        { question: "______ he was tired, he kept working.", answer: "Although" },
        { question: "I love him ______ he has many faults.", answer: "even though" },
        { question: "______ hard he tried, he couldn't solve it.", answer: "However" },
        { question: "______ happens, I'll support you.", answer: "Whatever" },
        { question: "______ you are, you must follow the rules.", answer: "Whoever" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "Although he was tired, but he kept working.", answer: "<strong>Although</strong> he was tired, he kept working.（去掉but）" },
        { question: "If it will rain, we'll stay home.", answer: "If it <strong>rains</strong>, we'll stay home.（will rain→rains）" },
        { question: "He talks as if he knows everything. (想表达虚拟)", answer: "He talks as if he <strong>knew</strong> everything.（knows→knew）" },
        { question: "Unless he will go, I won't go.", answer: "Unless he <strong>goes</strong>, I won't go.（will go→goes）" },
      ],
    },
  ],
  production: [
    {
      title: "条件与习惯",
      titleEn: "Conditions and Habits",
      description: "用if/unless描述你的日常习惯。",
      example: [
        "<strong>If</strong> I have time, I exercise in the morning.",
        "I don't eat junk food <strong>unless</strong> I'm really hungry.",
        "<strong>As long as</strong> the weather is nice, I walk to work.",
      ],
    },
    {
      title: "让步与转折",
      titleEn: "Concession and Contrast",
      description: "用although/even though描述你克服困难的经历。",
      example: [
        "<strong>Although</strong> I was nervous, I gave a great presentation.",
        "I kept studying <strong>even though</strong> it was difficult.",
        "<strong>However</strong> tired I am, I always read before bed.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "条件状语从句",
        items: ["if：如果（用一般现在时代替将来时）", "unless：除非（= if...not）", "as long as / provided that：只要", "in case：以防"],
      },
      {
        title: "让步状语从句",
        items: ["although：虽然（不与but连用）", "even though：即使（语气更强）", "however：无论多么 + adj./adv.", "whatever/whoever：无论"],
      },
      {
        title: "方式状语从句",
        items: ["as：按照", "as if / as though：好像（可与虚拟语气连用）"],
      },
    ],
    mindMap: `条件·让步·方式状语从句
├── 条件
│   ├── if（如果，用一般现在时）
│   ├── unless（除非 = if...not）
│   ├── as long as / provided that（只要）
│   └── in case（以防）
├── 让步
│   ├── although（虽然，不与but连用）
│   ├── even though（即使）
│   ├── while（虽然）
│   ├── however + adj.（无论多么）
│   └── whatever/whoever（无论）
├── 方式
│   ├── as（按照）
│   └── as if / as though（好像，可虚拟）
└── 注意
    ├── although ≠ but（不连用）
    ├── if/unless从句用一般现在时
    └── as if后可虚拟（过去时）`,
    selfTest: [
      {
        question: "______ it rains, we'll stay at home.",
        options: ["Unless", "If", "Although"],
        answer: "If",
      },
      {
        question: "______ he was tired, he kept working.",
        options: ["Although", "But", "So"],
        answer: "Although",
      },
      {
        question: "______ you hurry, you'll be late.",
        options: ["If", "Unless", "Although"],
        answer: "Unless",
      },
      {
        question: "He talks ______ he knows everything.",
        options: ["as", "as if", "like"],
        answer: "as if",
      },
      {
        question: "______ happens, I'll support you.",
        options: ["However", "Whatever", "Although"],
        answer: "Whatever",
      },
    ],
  },
};

import { UnitData } from "./unit-01-data";

export const unit06Data: UnitData = {
  info: {
    id: "unit-06",
    moduleId: "01",
    number: 6,
    title: "将来时态系统",
    titleEn: "Future Tense System",
  },
  objectives: [
    "掌握英语中表达将来的多种方式",
    "区分will, be going to, 现在进行时的用法",
    "理解将来进行时和将来完成时的用法",
    "在真实语境中正确选择将来时态",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>will help</strong> you.（临时决定）",
        "I <strong>am going to help</strong> you.（计划好的）",
      ],
      answer:
        "will通常用于<strong>临时决定</strong>（说话时决定），be going to用于<strong>计划好的</strong>事情（之前就决定的）。中文都翻译成\"会\"，但英文有不同的含义。",
    },
    comparison: {
      chinese: [
        { text: "我明天要去看电影。", note: "计划好的" },
        { text: "好的，我来帮你。", note: "临时决定" },
      ],
      english: [
        { text: "I <strong>am going to</strong> watch a movie tomorrow.", note: "之前就计划好的" },
        { text: "I <strong>will help</strong> you.", note: "说话时才决定" },
      ],
      conclusion:
        "英文有<strong>4种方式</strong>表达将来：will（临时决定/预测）、be going to（计划/有证据预测）、现在进行时（已安排）、一般现在时（时刻表）。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "will", description: "临时决定、承诺、预测（个人观点）", example: "I <strong>will help</strong> you." },
        { label: "be going to", description: "计划好的、有迹象的预测", example: "It <strong>is going to</strong> rain." },
        { label: "现在进行时", description: "已安排好的计划（通常有具体时间）", example: "I <strong>am meeting</strong> John at 3 pm." },
        { label: "一般现在时", description: "时刻表、固定安排", example: "The train <strong>leaves</strong> at 9 am." },
      ],
      aspect: [
        { label: "临时决定", description: "说话时才做的决定", focus: "\"It's cold.\" \"I will close the window.\"" },
        { label: "计划", description: "之前就决定的事情", focus: "I am going to visit Paris next month." },
        { label: "有证据预测", description: "根据现在的迹象预测", focus: "Look at those clouds. It is going to rain." },
      ],
    },
    matrix: {
      headers: ["", "用法", "决定时间", "例句"],
      rows: [
        { time: "will", forms: ["临时决定/承诺/预测", "说话时", "I will help you."] },
        { time: "be going to", forms: ["计划/有证据预测", "之前", "I am going to visit Paris."] },
        { time: "现在进行时", forms: ["已安排的计划", "之前", "I am meeting John tomorrow."] },
        { time: "一般现在时", forms: ["时刻表/固定安排", "固定", "The train leaves at 9 am."] },
      ],
    },
    tenses: [
      {
        name: "will + 动词原形",
        nameEn: "Simple Future (will)",
        structure: "will + do",
        usages: [
          { label: "临时决定", example: "\"It's cold.\" \"I <strong>will close</strong> the window.\"" },
          { label: "承诺/意愿", example: "I <strong>will help</strong> you with your homework." },
          { label: "预测（个人观点）", example: "I think it <strong>will rain</strong> tomorrow." },
        ],
        timeWords: "I think, probably, maybe, perhaps, I promise",
      },
      {
        name: "be going to + 动词原形",
        nameEn: "Future (be going to)",
        structure: "am/is/are going to + do",
        usages: [
          { label: "计划好的打算", example: "I <strong>am going to visit</strong> my parents next weekend." },
          { label: "有迹象的预测", example: "Look at those clouds. It <strong>is going to</strong> rain." },
        ],
        timeWords: "next week/month/year, tomorrow, this weekend, soon",
      },
      {
        name: "现在进行时表将来",
        nameEn: "Present Continuous for Future",
        structure: "am/is/are + doing",
        usages: [
          { label: "已安排好的计划", example: "I <strong>am meeting</strong> John at 3 pm tomorrow." },
          { label: "已安排的旅行", example: "We <strong>are leaving</strong> for Paris next Monday." },
        ],
        timeWords: "tomorrow, next Monday, this weekend（通常有具体时间）",
      },
      {
        name: "一般现在时表将来",
        nameEn: "Simple Present for Future",
        structure: "do/does",
        usages: [
          { label: "时刻表", example: "The train <strong>leaves</strong> at 9 am tomorrow." },
          { label: "固定安排", example: "School <strong>begins</strong> on September 1st." },
        ],
        timeWords: "",
      },
      {
        name: "将来进行时",
        nameEn: "Future Continuous",
        structure: "will be + doing",
        usages: [
          { label: "将来某时间正在进行", example: "This time tomorrow, I <strong>will be flying</strong> to London." },
          { label: "礼貌询问", example: "<strong>Will</strong> you <strong>be using</strong> the car tonight?" },
        ],
        timeWords: "at this time tomorrow, at 8 pm tonight",
      },
      {
        name: "将来完成时",
        nameEn: "Future Perfect",
        structure: "will have + done",
        usages: [
          { label: "将来某时间之前完成", example: "By next year, I <strong>will have finished</strong> my degree." },
        ],
        timeWords: "by the time, by next year, by + 将来时间",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "will用于计划好的事情",
        wrong: "I <strong>will visit</strong> my parents next weekend.（如果是早就计划好的）",
        correct: "I <strong>am going to visit</strong> / <strong>am visiting</strong> my parents next weekend.",
        reason: "will通常用于临时决定，计划好的事情用be going to或现在进行时。",
      },
      {
        title: "be going to用于临时决定",
        wrong: "\"It's cold.\" \"I <strong>am going to close</strong> the window.\"",
        correct: "\"It's cold.\" \"I <strong>will close</strong> the window.\"",
        reason: "临时决定用will，不用be going to。",
      },
      {
        title: "混淆will和be going to的预测",
        wrong: "Look at those clouds. It <strong>will</strong> rain.",
        correct: "Look at those clouds. It <strong>is going to</strong> rain.",
        reason: "有证据的预测用be going to，个人观点的预测用will。",
      },
      {
        title: "时间从句中用将来时",
        wrong: "I will call you when I <strong>will arrive</strong>.",
        correct: "I will call you when I <strong>arrive</strong>.",
        reason: "在when, if, before, after, until等从句中，用一般现在时代替将来时。",
      },
    ],
    keyQuestions: [
      "是临时决定还是计划好的？（临时→will，计划→be going to/现在进行时）",
      "预测是基于个人观点还是现在的证据？（个人观点→will，证据→be going to）",
      "有没有具体时间安排？（有→现在进行时/一般现在时）",
    ],
    stateVerbs: {
      categories: [
        { label: "时间从句", verbs: ["when", "if", "before", "after", "until", "as soon as"] },
        { label: "条件从句", verbs: ["if", "unless", "provided that"] },
        { label: "固定安排", verbs: ["leave", "start", "begin", "arrive"] },
        { label: "时刻表", verbs: ["train leaves", "flight arrives", "movie starts"] },
      ],
      example: {
        wrong: "I will call you when I <strong>will arrive</strong>.",
        correct: "I will call you when I <strong>arrive</strong>.",
        note: "时间/条件从句中用一般现在时代替将来时。",
      },
    },
  },
  practice: [
    {
      title: "will vs be going to",
      titleEn: "Will or Be Going To",
      type: "fill",
      items: [
        { question: "\"Do you want to go to the cinema?\" \"Sure, I ______ (come).\"", answer: "will come — 临时决定" },
        { question: "I ______ (visit) Paris next month. I've already booked the tickets.", answer: "am going to visit — 计划好的" },
        { question: "Look at those clouds! It ______ (rain).", answer: "is going to rain — 有证据的预测" },
        { question: "I think she ______ (pass) the exam.", answer: "will pass — 个人观点的预测" },
        { question: "\"The phone is ringing.\" \"I ______ (answer) it.\"", answer: "will answer — 临时决定" },
        { question: "We ______ (move) to a new house next year. We signed the contract yesterday.", answer: "are going to move / are moving — 计划好的" },
      ],
    },
    {
      title: "将来时态选择",
      titleEn: "Future Tense Selection",
      type: "fill",
      items: [
        { question: "This time tomorrow, I ______ (fly) to Paris.", answer: "will be flying — 将来进行时" },
        { question: "By next year, she ______ (work) here for ten years.", answer: "will have worked — 将来完成时" },
        { question: "The train ______ (leave) at 9 am tomorrow.", answer: "leaves — 一般现在时表将来" },
        { question: "I ______ (meet) John at 3 pm tomorrow.", answer: "am meeting — 现在进行时表将来" },
        { question: "By the time you arrive, I ______ (finish) cooking.", answer: "will have finished — 将来完成时" },
        { question: "I ______ (see) the doctor next Monday.", answer: "am seeing — 现在进行时表将来" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I will visit my parents next weekend. (计划好的)", answer: "I <strong>am going to visit</strong> / <strong>am visiting</strong> my parents next weekend." },
        { question: "Look! It will rain.", answer: "Look! It <strong>is going to</strong> rain." },
        { question: "I will call you when I will arrive.", answer: "I will call you when I <strong>arrive</strong>." },
        { question: "This time tomorrow, I will fly to London.", answer: "This time tomorrow, I <strong>will be flying</strong> to London." },
        { question: "By next month, I will finish my degree.", answer: "By next month, I <strong>will have finished</strong> my degree." },
        { question: "The movie will start at 7 pm.", answer: "The movie <strong>starts</strong> at 7 pm." },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation",
      type: "fill",
      items: [
        { question: "我明天要去见John。（已安排）", answer: "I <strong>am meeting</strong> John tomorrow. / I <strong>am going to meet</strong> John tomorrow." },
        { question: "我认为明天会下雨。（个人观点）", answer: "I think it <strong>will rain</strong> tomorrow." },
        { question: "看那些乌云！要下雨了。（有证据）", answer: "Look at those clouds! It <strong>is going to</strong> rain." },
        { question: "到明年，我将学了十年英语。", answer: "By next year, I <strong>will have been studying</strong> English for ten years." },
        { question: "明天这个时候，我将在飞机上。", answer: "This time tomorrow, I <strong>will be flying</strong>." },
      ],
    },
  ],
  production: [
    {
      title: "计划描述",
      titleEn: "Describe Your Plans",
      description: "用不同的将来时态描述你的计划。至少使用4种不同的将来时态。",
      example: [
        "I <strong>am going to</strong> graduate next year.（计划）",
        "I <strong>will probably</strong> find a job in Beijing.（预测）",
        "By the time I'm 30, I <strong>will have worked</strong> for five years.（将来完成）",
        "This time next year, I <strong>will be working</strong> at a company.（将来进行）",
      ],
    },
    {
      title: "预测练习",
      titleEn: "Prediction Practice",
      description: "根据以下迹象，用be going to做出预测。",
      example: [
        "看到乌云 → It <strong>is going to</strong> rain.",
        "她看起来很累 → She <strong>is going to</strong> fall asleep.",
        "交通很堵 → We <strong>are going to</strong> be late.",
        "他看起来很开心 → He <strong>is going to</strong> smile.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "四种表达将来的方式",
        items: [
          "will：临时决定、承诺、预测",
          "be going to：计划、有证据的预测",
          "现在进行时：已安排的计划",
          "一般现在时：时刻表、固定安排",
        ],
      },
      {
        title: "will vs be going to",
        items: ["will：说话时决定", "be going to：之前就决定"],
      },
      {
        title: "将来进行时与将来完成时",
        items: ["will be doing：将来某时间正在进行", "will have done：将来某时间之前完成"],
      },
      {
        title: "时间/条件从句",
        items: ["when, if, before, after等从句中用一般现在时代替将来时"],
      },
    ],
    mindMap: `将来时态系统
├── will do
│   ├── 临时决定：I will help you.
│   ├── 承诺：I will never forget you.
│   └── 预测（个人观点）：I think it will rain.
├── be going to do
│   ├── 计划：I am going to visit Paris.
│   └── 有证据预测：It is going to rain.
├── be doing（现在进行时）
│   └── 已安排：I am meeting John tomorrow.
├── do（一般现在时）
│   └── 时刻表：The train leaves at 9 am.
├── will be doing（将来进行时）
│   └── 将来进行：I will be flying tomorrow.
├── will have done（将来完成时）
│   └── 将来完成：I will have finished by then.
└── 时间从句
    └── when/if + 一般现在时（不用将来时）`,
    selfTest: [
      {
        question: "\"Do you want to go out?\" \"Sure, I ______ (come).\"",
        options: ["am going to come", "will come", "am coming"],
        answer: "will come",
      },
      {
        question: "I ______ (visit) Japan next month. I've already booked the flight.",
        options: ["will visit", "am going to visit", "visit"],
        answer: "am going to visit",
      },
      {
        question: "This time tomorrow, I ______ (lie) on the beach.",
        options: ["will lie", "will be lying", "am lying"],
        answer: "will be lying",
      },
      {
        question: "By next year, she ______ (work) here for ten years.",
        options: ["will work", "will have worked", "will be working"],
        answer: "will have worked",
      },
      {
        question: "I will call you when I ______ (arrive).",
        options: ["will arrive", "arrive", "am arriving"],
        answer: "arrive",
      },
    ],
  },
};

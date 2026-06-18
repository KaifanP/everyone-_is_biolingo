export interface UnitData {
  info: {
    id: string;
    moduleId: string;
    number: number;
    title: string;
    titleEn: string;
  };
  objectives: string[];
  leadIn: {
    thinkQuestions: { sentences: string[]; answer: string };
    comparison: { chinese: { text: string; note: string }[]; english: { text: string; note: string }[]; conclusion: string };
  };
  explanation: {
    essence: {
      time: { label: string; description: string; example: string }[];
      aspect: { label: string; description: string; focus: string }[];
    };
    matrix: {
      headers: string[];
      rows: { time: string; forms: string[] }[];
    };
    tenses: {
      name: string;
      nameEn: string;
      structure: string;
      usages: { label: string; example: string }[];
      timeWords: string;
    }[];
  };
  analysis: {
    commonErrors: {
      title: string;
      wrong: string;
      correct: string;
      reason: string;
    }[];
    keyQuestions: string[];
    stateVerbs: {
      categories: { label: string; verbs: string[] }[];
      example: { wrong: string; correct: string; note: string };
    };
  };
  practice: {
    title: string;
    titleEn: string;
    type: "identify" | "fill" | "errorCorrection";
    items: { question: string; answer: string }[];
  }[];
  production: {
    title: string;
    titleEn: string;
    description: string;
    example: string[];
  }[];
  summary: {
    keyPoints: { title: string; items: string[] }[];
    mindMap: string;
    selfTest: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
}

export const unit01Data: UnitData = {
  info: {
    id: "unit-01",
    moduleId: "01",
    number: 1,
    title: "时态体系总览",
    titleEn: "Tense System Overview",
  },
  objectives: [
    "理解英语时态的本质（时间 + 体态）",
    "掌握12种时态的结构和基本用法",
    "建立\u201C时态思维\u201D，克服中文无时态的思维惯性",
    "识别并使用常见的时间标志词",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>eat</strong> breakfast every day.",
        "I <strong>am eating</strong> breakfast now.",
      ],
      answer:
        "第一句描述的是<strong>习惯性动作</strong>（每天如此），第二句描述的是<strong>正在发生的动作</strong>（此刻正在进行）。这种区别就是英语时态的作用。",
    },
    comparison: {
      chinese: [
        { text: "我吃早餐。", note: "现在" },
        { text: "我昨天吃了早餐。", note: "过去" },
        { text: "我明天吃早餐。", note: "将来" },
      ],
      english: [
        { text: "I <strong>eat</strong> breakfast.", note: "现在" },
        { text: "I <strong>ate</strong> breakfast yesterday.", note: "过去" },
        { text: "I <strong>will eat</strong> breakfast tomorrow.", note: "将来" },
      ],
      conclusion: "中文用时间词表示时间，动词不变；英文动词会<strong>变形</strong>来表示时间，这就是<strong>时态（Tense）</strong>。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "过去（Past）", description: "动作发生在过去", example: "I <strong>walked</strong> to school." },
        { label: "现在（Present）", description: "动作发生在现在", example: "I <strong>walk</strong> to school." },
        { label: "将来（Future）", description: "动作发生在将来", example: "I <strong>will walk</strong> to school." },
      ],
      aspect: [
        { label: "一般（Simple）", description: "单纯描述事实", focus: "事实本身" },
        { label: "进行（Continuous）", description: "强调动作正在进行", focus: "动作的持续性" },
        { label: "完成（Perfect）", description: "强调动作已完成或与现在有关", focus: "动作的结果" },
        { label: "完成进行（Perfect Continuous）", description: "强调动作从过去持续到现在", focus: "动作的持续过程" },
      ],
    },
    matrix: {
      headers: ["", "一般（Simple）", "进行（Continuous）", "完成（Perfect）", "完成进行（Perfect Continuous）"],
      rows: [
        { time: "现在", forms: ["do/does", "am/is/are doing", "have/has done", "have/has been doing"] },
        { time: "过去", forms: ["did", "was/were doing", "had done", "had been doing"] },
        { time: "将来", forms: ["will do", "will be doing", "will have done", "will have been doing"] },
      ],
    },
    tenses: [
      {
        name: "一般现在时",
        nameEn: "Simple Present",
        structure: "do/does",
        usages: [
          { label: "习惯性动作", example: "I <strong>drink</strong> coffee every morning." },
          { label: "客观事实", example: "The sun <strong>rises</strong> in the east." },
          { label: "时刻表", example: "The train <strong>leaves</strong> at 9:00." },
        ],
        timeWords: "always, usually, often, sometimes, never, every day/week/month",
      },
      {
        name: "现在进行时",
        nameEn: "Present Continuous",
        structure: "am/is/are + doing",
        usages: [
          { label: "正在进行的动作", example: "I <strong>am reading</strong> a book now." },
          { label: "近期计划", example: "We <strong>are leaving</strong> tomorrow." },
          { label: "临时情况", example: "She <strong>is living</strong> with her parents this month." },
        ],
        timeWords: "now, right now, at the moment, currently, these days",
      },
      {
        name: "现在完成时",
        nameEn: "Present Perfect",
        structure: "have/has + done",
        usages: [
          { label: "过去发生，与现在有关", example: "I <strong>have lost</strong> my key.（现在没钥匙）" },
          { label: "经历", example: "She <strong>has been</strong> to Paris three times." },
          { label: "从过去持续到现在", example: "He <strong>has lived</strong> here since 2010." },
        ],
        timeWords: "already, yet, just, ever, never, since, for, recently, so far",
      },
      {
        name: "现在完成进行时",
        nameEn: "Present Perfect Continuous",
        structure: "have/has been + doing",
        usages: [
          { label: "从过去开始，持续到现在", example: "I <strong>have been waiting</strong> for two hours." },
          { label: "刚结束的动作，结果可见", example: "Your eyes are red. <strong>Have</strong> you <strong>been crying</strong>?" },
        ],
        timeWords: "for, since, all day, all morning, how long",
      },
      {
        name: "一般过去时",
        nameEn: "Simple Past",
        structure: "did（动词过去式）",
        usages: [
          { label: "过去发生的动作", example: "I <strong>visited</strong> Beijing last year." },
          { label: "过去的状态", example: "She <strong>was</strong> a teacher." },
        ],
        timeWords: "yesterday, last week/month/year, ago, in 2010, when I was young",
      },
      {
        name: "过去进行时",
        nameEn: "Past Continuous",
        structure: "was/were + doing",
        usages: [
          { label: "过去某一时刻正在进行", example: "I <strong>was reading</strong> at 8 pm last night." },
          { label: "两个过去动作同时发生", example: "I <strong>was cooking</strong> when the phone <strong>rang</strong>." },
        ],
        timeWords: "at that time, at 8 pm last night, when, while",
      },
      {
        name: "过去完成时",
        nameEn: "Past Perfect",
        structure: "had + done",
        usages: [
          { label: "\u201C过去的过去\u201D", example: "When I arrived, she <strong>had</strong> already <strong>left</strong>." },
          { label: "过去某时间之前完成", example: "By 2010, he <strong>had graduated</strong> from college." },
        ],
        timeWords: "by the time, before, after, already, just, never",
      },
      {
        name: "过去完成进行时",
        nameEn: "Past Perfect Continuous",
        structure: "had been + doing",
        usages: [
          { label: "过去某时间之前一直在做", example: "I <strong>had been waiting</strong> for an hour when he finally came." },
          { label: "过去某动作的原因", example: "She was tired because she <strong>had been working</strong> all day." },
        ],
        timeWords: "",
      },
      {
        name: "一般将来时",
        nameEn: "Simple Future",
        structure: "will + do / be going to + do",
        usages: [
          { label: "will：预测、承诺、临时决定", example: "I <strong>will help</strong> you." },
          { label: "be going to：计划好的、有迹象的预测", example: "It <strong>is going to</strong> rain." },
        ],
        timeWords: "tomorrow, next week, in the future, soon",
      },
      {
        name: "将来进行时",
        nameEn: "Future Continuous",
        structure: "will be + doing",
        usages: [
          { label: "将来某一时刻正在进行", example: "This time tomorrow, I <strong>will be flying</strong> to London." },
          { label: "礼貌询问", example: "<strong>Will</strong> you <strong>be using</strong> the car tonight?" },
        ],
        timeWords: "",
      },
      {
        name: "将来完成时",
        nameEn: "Future Perfect",
        structure: "will have + done",
        usages: [
          { label: "将来某时间之前完成", example: "By next year, I <strong>will have finished</strong> my degree." },
        ],
        timeWords: "by the time, by next year, by 2025",
      },
      {
        name: "将来完成进行时",
        nameEn: "Future Perfect Continuous",
        structure: "will have been + doing",
        usages: [
          { label: "将来某时间之前一直在做", example: "By December, I <strong>will have been working</strong> here for 10 years." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "忘记使用时态",
        wrong: "I <strong>go</strong> to Beijing last year.",
        correct: "I <strong>went</strong> to Beijing last year.",
        reason: "中文动词不变形，所以容易忘记英文动词要变。",
      },
      {
        title: "过度使用进行时",
        wrong: "I <strong>am knowing</strong> the answer.",
        correct: "I <strong>know</strong> the answer.",
        reason: "有些动词（状态动词）不能用进行时，如：know, believe, want, like, belong, own等。",
      },
      {
        title: "混淆完成时和过去时",
        wrong: "I <strong>have gone</strong> to Beijing last year.",
        correct: "I <strong>went</strong> to Beijing last year.",
        reason: "完成时强调与现在的关联，过去时只描述过去的事实。",
      },
    ],
    keyQuestions: [
      "动作发生在什么时候？（过去/现在/将来）",
      "动作处于什么状态？（一般/进行/完成/完成进行）",
      "有没有时间标志词？",
    ],
    stateVerbs: {
      categories: [
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish"] },
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess"] },
      ],
      example: {
        wrong: "I <strong>am seeing</strong> a bird in the tree.",
        correct: "I <strong>see</strong> a bird in the tree.",
        note: "I <strong>am looking at</strong> a bird in the tree.（用动作动词替代）",
      },
    },
  },
  practice: [
    {
      title: "时态识别",
      titleEn: "Tense Identification",
      type: "identify",
      items: [
        { question: "She <strong>has lived</strong> in London for five years.", answer: "现在完成时 —— 从过去持续到现在，用for表示持续时间" },
        { question: "I <strong>was reading</strong> when he called.", answer: "过去进行时 —— 过去某一时刻正在进行的动作" },
        { question: "They <strong>will have finished</strong> by tomorrow.", answer: "将来完成时 —— 将来某时间之前完成的动作" },
        { question: "He <strong>is always complaining</strong> about the weather.", answer: "现在进行时 —— 表示不满/抱怨的情绪（与always连用）" },
        { question: "The earth <strong>goes</strong> around the sun.", answer: "一般现在时 —— 客观事实" },
      ],
    },
    {
      title: "时态填空",
      titleEn: "Tense Fill-in",
      type: "fill",
      items: [
        { question: "She usually ______ (drink) tea in the morning, but today she ______ (drink) coffee.", answer: "drinks, is drinking" },
        { question: "I ______ (not see) John since last Monday.", answer: "haven't seen" },
        { question: "By the time we arrived, the movie ______ (already/start).", answer: "had already started" },
        { question: "This time next week, I ______ (lie) on the beach.", answer: "will be lying" },
        { question: "She ______ (work) here for ten years before she retired.", answer: "had worked / had been working" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I have gone to the cinema last night.", answer: "I <strong>went</strong> to the cinema last night.（last night是过去时间，用过去时）" },
        { question: "She is knowing the answer.", answer: "She <strong>knows</strong> the answer.（know是状态动词，不用进行时）" },
        { question: "He has been leaving in Paris since 2010.", answer: "He <strong>has been living</strong> in Paris since 2010.（live是持续动词，用完成进行时）" },
        { question: "When I arrived, she already left.", answer: "When I arrived, she <strong>had</strong> already <strong>left</strong>.（过去的过去，用过去完成时）" },
        { question: "By next year, I will finish my studies.", answer: "By next year, I <strong>will have finished</strong> my studies.（by+将来时间，用将来完成时）" },
      ],
    },
  ],
  production: [
    {
      title: "描述你的一天",
      titleEn: "Describe Your Day",
      description: "用一般现在时和现在进行时描述你的一天。至少包含5个句子。",
      example: [
        "I usually <strong>wake up</strong> at 7 am.（习惯）",
        "Right now, I <strong>am studying</strong> English.（正在做）",
        "I <strong>have</strong> breakfast at 8 am every day.（习惯）",
        "Today, I <strong>am having</strong> lunch with a friend.（临时安排）",
      ],
    },
    {
      title: "时间线练习",
      titleEn: "Timeline Practice",
      description: "请根据以下时间线，写出正确的句子。",
      example: [
        "2010: 开始学英语 → I <strong>started</strong> learning English in 2010.",
        "2015: 通过六级考试 → I <strong>passed</strong> CET-6 in 2015.",
        "现在: 仍然在学习 → I <strong>have been learning</strong> English for 13 years.",
        "到2020年 → By 2020, I <strong>had passed</strong> CET-6.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "时态 = 时间 + 体态",
        items: ["时间：过去、现在、将来", "体态：一般、进行、完成、完成进行"],
      },
      {
        title: "12种时态",
        items: ["3个时间 × 4个体态"],
      },
      {
        title: "中文无时态",
        items: ["英文动词要变形"],
      },
      {
        title: "状态动词",
        items: ["不能用进行时"],
      },
      {
        title: "选择时态三问",
        items: [
          "动作发生在什么时候？",
          "动作处于什么状态？",
          "有没有时间标志词？",
        ],
      },
    ],
    mindMap: `时态体系
├── 现在时态
│   ├── 一般现在时：do/does（习惯、事实）
│   ├── 现在进行时：am/is/are doing（正在做）
│   ├── 现在完成时：have/has done（与现在有关）
│   └── 现在完成进行时：have/has been doing（持续到现在）
├── 过去时态
│   ├── 一般过去时：did（过去的事实）
│   ├── 过去进行时：was/were doing（过去正在做）
│   ├── 过去完成时：had done（过去的过去）
│   └── 过去完成进行时：had been doing（过去持续）
└── 将来时态
    ├── 一般将来时：will do / be going to do
    ├── 将来进行时：will be doing（将来正在做）
    ├── 将来完成时：will have done（将来完成）
    └── 将来完成进行时：will have been doing（将来持续）`,
    selfTest: [
      {
        question: "She ______ (work) here since 2015.",
        options: ["works", "has worked", "is working", "worked"],
        answer: "has worked",
      },
      {
        question: "I ______ (read) when the phone rang.",
        options: ["read", "was reading", "have read", "had read"],
        answer: "was reading",
      },
      {
        question: "By next month, we ______ (know) each other for 10 years.",
        options: ["know", "will know", "will have known", "have known"],
        answer: "will have known",
      },
      {
        question: "The sun ______ (rise) in the east.",
        options: ["rises", "is rising", "has risen", "rose"],
        answer: "rises",
      },
      {
        question: "She ______ (always/complain) about the food.",
        options: ["always complains", "is always complaining", "has always complained", "always complained"],
        answer: "is always complaining",
      },
    ],
  },
};

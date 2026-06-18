import { UnitData } from "./unit-01-data";

export const unit08Data: UnitData = {
  info: {
    id: "unit-08",
    moduleId: "01",
    number: 8,
    title: "时态综合与实战",
    titleEn: "Tense Integration & Practice",
  },
  objectives: [
    "综合运用所有12种时态",
    "在复杂语境中正确选择时态",
    "分析长难句中的时态使用",
    "在写作和口语中灵活运用时态",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "By the time I <strong>arrived</strong>, the train <strong>had</strong> already <strong>left</strong>.",
        "I <strong>had been waiting</strong> for over an hour, and I <strong>was</strong> exhausted.",
      ],
      answer:
        "这段话中使用了多种时态：<strong>arrived</strong>（过去时）、<strong>had left</strong>（过去完成时）、<strong>had been waiting</strong>（过去完成进行时）、<strong>was</strong>（过去时）。每种时态都有其特定的作用。",
    },
    comparison: {
      chinese: [
        { text: "我到达时，火车已经开走了。", note: "用\"已经\"表示先后" },
        { text: "我已经等了一个多小时，精疲力竭。", note: "用\"已经\"表示持续" },
      ],
      english: [
        { text: "When I <strong>arrived</strong>, the train <strong>had</strong> already <strong>left</strong>.", note: "过去时+过去完成时" },
        { text: "I <strong>had been waiting</strong> for over an hour, and I <strong>was</strong> exhausted.", note: "过去完成进行时+过去时" },
      ],
      conclusion:
        "在复杂叙事中，<strong>多种时态配合使用</strong>，每种时态表达不同的时间关系。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "时态选择三问", description: "动作在什么时候？什么状态？有无标志词？", example: "" },
        { label: "时态一致性", description: "主句过去时，从句也用过去时态", example: "He <strong>said</strong> that he <strong>was</strong> tired." },
        { label: "叙事文时态", description: "主要事件用过去时，背景用过去进行时，更早事件用过去完成时", example: "" },
      ],
      aspect: [
        { label: "主要事件", description: "用一般过去时叙述", focus: "I woke up, had breakfast, went to work." },
        { label: "背景描述", description: "用过去进行时", focus: "It was raining when I left home." },
        { label: "更早事件", description: "用过去完成时", focus: "She had already left when I arrived." },
        { label: "持续动作", description: "用过去完成进行时", focus: "I had been waiting for an hour when he came." },
      ],
    },
    matrix: {
      headers: ["时态", "结构", "用法", "例句"],
      rows: [
        { time: "一般现在时", forms: ["do/does", "习惯、事实", "I work every day."] },
        { time: "现在进行时", forms: ["am/is/are doing", "正在进行", "I am working now."] },
        { time: "现在完成时", forms: ["have/has done", "与现在有关", "I have finished."] },
        { time: "现在完成进行时", forms: ["have/has been doing", "持续到现在", "I have been working."] },
        { time: "一般过去时", forms: ["did", "过去事实", "I worked yesterday."] },
        { time: "过去进行时", forms: ["was/were doing", "过去进行", "I was working at 8 pm."] },
        { time: "过去完成时", forms: ["had done", "过去的过去", "I had finished before."] },
        { time: "过去完成进行时", forms: ["had been doing", "过去持续", "I had been working."] },
        { time: "一般将来时", forms: ["will do", "将来事实", "I will work tomorrow."] },
        { time: "将来进行时", forms: ["will be doing", "将来进行", "I will be working at 8 pm."] },
        { time: "将来完成时", forms: ["will have done", "将来完成", "I will have finished."] },
        { time: "将来完成进行时", forms: ["will have been doing", "将来持续", "I will have been working."] },
      ],
    },
    tenses: [
      {
        name: "时态选择三问",
        nameEn: "Three Questions for Tense Choice",
        structure: "时间 + 状态 + 标志词",
        usages: [
          { label: "动作发生在什么时候？", example: "过去→过去时态，现在→现在时态，将来→将来时态" },
          { label: "动作处于什么状态？", example: "一般→一般时态，进行→进行时态，完成→完成时态" },
          { label: "有没有时间标志词？", example: "有→根据标志词选择，没有→根据语境判断" },
        ],
        timeWords: "",
      },
      {
        name: "时态一致性",
        nameEn: "Sequence of Tenses",
        structure: "主句时态影响从句时态",
        usages: [
          { label: "主句过去时→从句过去时态", example: "He <strong>said</strong> that he <strong>was</strong> tired." },
          { label: "主句现在时→从句可用任何时态", example: "I <strong>think</strong> that he <strong>will come</strong> tomorrow." },
          { label: "客观事实例外", example: "He <strong>said</strong> that the earth <strong>is</strong> round." },
        ],
        timeWords: "",
      },
      {
        name: "叙事文时态配合",
        nameEn: "Tenses in Narratives",
        structure: "多种时态配合",
        usages: [
          { label: "主要事件：一般过去时", example: "I <strong>woke</strong> up, <strong>had</strong> breakfast, <strong>went</strong> to work." },
          { label: "背景：过去进行时", example: "It <strong>was raining</strong> when I left home." },
          { label: "更早事件：过去完成时", example: "She <strong>had</strong> already <strong>left</strong> when I arrived." },
          { label: "持续动作：过去完成进行时", example: "I <strong>had been waiting</strong> for an hour when he came." },
        ],
        timeWords: "",
      },
      {
        name: "学术写作时态",
        nameEn: "Tenses in Academic Writing",
        structure: "按内容选择时态",
        usages: [
          { label: "普遍事实：一般现在时", example: "Water <strong>boils</strong> at 100\u00B0C." },
          { label: "研究方法：一般过去时", example: "We <strong>conducted</strong> an experiment." },
          { label: "已有研究：现在完成时", example: "Previous studies <strong>have shown</strong> that..." },
          { label: "未来研究：将来时", example: "Future research <strong>will focus</strong> on..." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "忘记时态变化",
        wrong: "I <strong>go</strong> to Beijing last year.",
        correct: "I <strong>went</strong> to Beijing last year.",
        reason: "中文动词不变形，所以容易忘记英文动词要变。",
      },
      {
        title: "过度使用进行时",
        wrong: "I <strong>am knowing</strong> the answer.",
        correct: "I <strong>know</strong> the answer.",
        reason: "状态动词不能用进行时。",
      },
      {
        title: "完成时与过去时混淆",
        wrong: "I <strong>have gone</strong> to Beijing last year.",
        correct: "I <strong>went</strong> to Beijing last year.",
        reason: "有明确过去时间用过去时，不用完成时。",
      },
      {
        title: "时间从句中用将来时",
        wrong: "When I <strong>will arrive</strong>, I will call you.",
        correct: "When I <strong>arrive</strong>, I will call you.",
        reason: "时间/条件从句中用一般现在时代替将来时。",
      },
    ],
    keyQuestions: [
      "动作发生在什么时候？（过去/现在/将来）",
      "动作处于什么状态？（一般/进行/完成/完成进行）",
      "有没有时间标志词？",
    ],
    stateVerbs: {
      categories: [
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish"] },
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess"] },
      ],
      example: {
        wrong: "I <strong>am knowing</strong> the answer.",
        correct: "I <strong>know</strong> the answer.",
        note: "状态动词不能用进行时。",
      },
    },
  },
  practice: [
    {
      title: "综合时态填空",
      titleEn: "Comprehensive Tense Fill-in",
      type: "fill",
      items: [
        { question: "By the time I ______ (get) to the airport, the plane ______ (already/leave).", answer: "got, had already left" },
        { question: "She ______ (work) at this company for five years before she ______ (resign).", answer: "had worked / had been working, resigned" },
        { question: "I ______ (read) when the phone ______ (ring).", answer: "was reading, rang" },
        { question: "He ______ (tell) me that he ______ (see) the movie before.", answer: "told, had seen" },
        { question: "By next year, I ______ (live) here for ten years.", answer: "will have been living / will have lived" },
        { question: "She ______ (always/complain) about the weather.", answer: "is always complaining" },
        { question: "I ______ (meet) him at the party, but I ______ (meet) him before that.", answer: "met, had met" },
        { question: "When I ______ (be) young, I ______ (play) football every day.", answer: "was, played" },
        { question: "By the time you ______ (arrive), I ______ (finish) cooking.", answer: "arrive, will have finished" },
        { question: "He ______ (work) all day, so he ______ (be) tired.", answer: "had been working, was" },
      ],
    },
    {
      title: "段落改错",
      titleEn: "Paragraph Error Correction",
      type: "errorCorrection",
      items: [
        { question: "Last week, I go to the cinema. We have decided to see a movie. When we arrive, the movie already start.", answer: "Last week, I <strong>went</strong> to the cinema. We <strong>had decided</strong> to see a movie. When we <strong>arrived</strong>, the movie <strong>had</strong> already <strong>started</strong>." },
        { question: "My friend tell me that he see the movie before. He say it is very good.", answer: "My friend <strong>told</strong> me that he <strong>had seen</strong> the movie before. He <strong>said</strong> it <strong>was</strong> very good." },
        { question: "I enjoy the movie. By the time we leave, we have been there for two hours.", answer: "I <strong>enjoyed</strong> the movie. By the time we <strong>left</strong>, we <strong>had been</strong> there for two hours." },
      ],
    },
    {
      title: "时态综合练习",
      titleEn: "Tense Integration",
      type: "fill",
      items: [
        { question: "I ______ (study) English for ten years, and I ______ (still/learn) new things.", answer: "have been studying, am still learning" },
        { question: "She ______ (work) at the company since 2015, and she ______ (never/think) about leaving.", answer: "has worked / has been working, has never thought" },
        { question: "By the time I ______ (graduate), I ______ (complete) 40 courses.", answer: "graduate, will have completed" },
        { question: "He ______ (always/forget) his keys. He ______ (lose) them three times this week.", answer: "is always forgetting, has lost" },
        { question: "When I ______ (arrive) at the party, everyone ______ (already/eat). They ______ (wait) for me for an hour.", answer: "arrived, had already eaten, had been waiting" },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation",
      type: "fill",
      items: [
        { question: "我一早上都在学习英语。", answer: "I <strong>have been studying</strong> English all morning." },
        { question: "她告诉我她以前去过那里。", answer: "She told me she <strong>had been</strong> there before." },
        { question: "到明年，我将在这里工作满十年。", answer: "By next year, I <strong>will have been working</strong> here for ten years." },
        { question: "我到达时，他已经离开了。", answer: "When I arrived, he <strong>had</strong> already <strong>left</strong>." },
        { question: "她总是在抱怨天气。", answer: "She <strong>is always complaining</strong> about the weather." },
        { question: "我认为明天会下雨。", answer: "I think it <strong>will rain</strong> tomorrow." },
        { question: "他一直在工作，所以他很累。", answer: "He <strong>had been working</strong>, so he was tired." },
        { question: "到月底，我将读完五本书。", answer: "By the end of the month, I <strong>will have read</strong> five books." },
      ],
    },
  ],
  production: [
    {
      title: "故事写作",
      titleEn: "Story Writing",
      description: "用多种时态写一个故事，至少包含6种不同的时态。",
      example: [
        "Last summer, I <strong>went</strong> to Japan.",
        "I <strong>had been planning</strong> the trip for months.",
        "When I <strong>arrived</strong> in Tokyo, it <strong>was raining</strong>.",
        "The driver <strong>told</strong> me that he <strong>had been working</strong> since early morning.",
        "By the time I <strong>got</strong> to the hotel, I <strong>had been traveling</strong> for twelve hours.",
        "I <strong>have been</strong> to Japan twice now, and I <strong>want</strong> to go back again.",
      ],
    },
    {
      title: "时态转换练习",
      titleEn: "Tense Transformation",
      description: "将故事从过去时改为现在时，再从现在时改为将来时。",
      example: [
        "过去时：I <strong>woke</strong> up at 7 am. I <strong>had</strong> breakfast. I <strong>went</strong> to work.",
        "现在时：I <strong>wake</strong> up at 7 am. I <strong>have</strong> breakfast. I <strong>go</strong> to work.",
        "将来时：I <strong>will wake</strong> up at 7 am. I <strong>will have</strong> breakfast. I <strong>will go</strong> to work.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "时态选择三问",
        items: [
          "动作发生在什么时候？",
          "动作处于什么状态？",
          "有没有时间标志词？",
        ],
      },
      {
        title: "时态一致性",
        items: [
          "主句过去时，从句也用过去时态",
          "客观事实例外",
        ],
      },
      {
        title: "叙事文中的时态",
        items: [
          "一般过去时：主要事件",
          "过去进行时：背景描述",
          "过去完成时：更早的事件",
          "过去完成进行时：持续的动作",
        ],
      },
      {
        title: "学术写作中的时态",
        items: [
          "一般现在时：普遍事实",
          "一般过去时：研究方法",
          "现在完成时：已有研究",
        ],
      },
    ],
    mindMap: `时态综合与实战
├── 时态选择三问
│   ├── 什么时候？→ 过去/现在/将来
│   ├── 什么状态？→ 一般/进行/完成/完成进行
│   └── 有无标志词？
├── 时态一致性
│   ├── 主句过去→从句过去
│   └── 客观事实例外
├── 叙事文
│   ├── 主要事件：一般过去时
│   ├── 背景：过去进行时
│   ├── 更早事件：过去完成时
│   └── 持续：过去完成进行时
├── 学术写作
│   ├── 事实：一般现在时
│   ├── 方法：一般过去时
│   ├── 已有研究：现在完成时
│   └── 未来：将来时
└── 12种时态总表
    ├── 现在：do/doing/have done/have been doing
    ├── 过去：did/was doing/had done/had been doing
    └── 将来：will do/will be doing/will have done/will have been doing`,
    selfTest: [
      {
        question: "I ______ (live) in Beijing since 2010.",
        options: ["lived", "have lived", "have been living"],
        answer: "have lived",
      },
      {
        question: "When I arrived, she ______ (leave).",
        options: ["left", "has left", "had left"],
        answer: "had left",
      },
      {
        question: "By next year, I ______ (work) here for ten years.",
        options: ["will work", "will have worked", "will have been working"],
        answer: "will have worked",
      },
      {
        question: "She ______ (always/complain) about the food.",
        options: ["always complains", "is always complaining", "has always complained"],
        answer: "is always complaining",
      },
      {
        question: "I ______ (read) when the phone rang.",
        options: ["read", "was reading", "have been reading"],
        answer: "was reading",
      },
      {
        question: "He ______ (tell) me that he ______ (see) the movie before.",
        options: ["told, saw", "told, had seen", "has told, has seen"],
        answer: "told, had seen",
      },
      {
        question: "______ you ever ______ (be) to Paris?",
        options: ["Did, go", "Have, been", "Have, gone"],
        answer: "Have, been",
      },
      {
        question: "I ______ (finish) my homework an hour ago.",
        options: ["have finished", "finished", "had finished"],
        answer: "finished",
      },
      {
        question: "This time tomorrow, I ______ (fly) to London.",
        options: ["will fly", "will be flying", "am flying"],
        answer: "will be flying",
      },
      {
        question: "She was tired because she ______ (work) all day.",
        options: ["worked", "had worked", "had been working"],
        answer: "had been working",
      },
    ],
  },
};

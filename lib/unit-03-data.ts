import { UnitData } from "./unit-01-data";

export const unit03Data: UnitData = {
  info: {
    id: "unit-03",
    moduleId: "01",
    number: 3,
    title: "现在完成进行时",
    titleEn: "Present Perfect Continuous",
  },
  objectives: [
    "掌握现在完成进行时的结构和用法",
    "区分现在完成时和现在完成进行时",
    "识别不能用进行时的状态动词",
    "在真实语境中正确使用现在完成进行时",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>have read</strong> the book.（我读完了那本书。）",
        "I <strong>have been reading</strong> the book.（我一直在读那本书。）",
      ],
      answer:
        "第一句强调<strong>动作已完成</strong>（有结果），第二句强调<strong>动作的持续性</strong>（可能还没完成）。这就是现在完成时和现在完成进行时的核心区别。",
    },
    comparison: {
      chinese: [
        { text: "她粉刷完了房间。", note: "强调结果" },
        { text: "她一直在粉刷房间。", note: "强调过程" },
      ],
      english: [
        { text: "She <strong>has painted</strong> the room.", note: "完成——结果" },
        { text: "She <strong>has been painting</strong> the room.", note: "完成进行——过程，可能还在刷" },
      ],
      conclusion:
        "中文用\"了\"和\"一直在\"区分，英文用<strong>时态</strong>区分。完成时强调<strong>结果</strong>，完成进行时强调<strong>过程</strong>。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "现在完成时", description: "强调动作的结果或完成", example: "I <strong>have read</strong> three books." },
        { label: "现在完成进行时", description: "强调动作的持续过程，可能还在进行", example: "I <strong>have been reading</strong> for three hours." },
      ],
      aspect: [
        { label: "持续", description: "从过去开始，持续到现在，可能继续", focus: "I have been waiting for two hours." },
        { label: "刚结束可见结果", description: "动作刚结束，结果/影响现在可以看到", focus: "Your eyes are red. Have you been crying?" },
        { label: "重复", description: "从过去到现在重复发生的动作", focus: "I have been going to the gym every day this week." },
      ],
    },
    matrix: {
      headers: ["现在完成时", "现在完成进行时"],
      rows: [
        { time: "结构", forms: ["have/has done", "have/has been doing"] },
        { time: "重点", forms: ["结果/完成", "过程/持续"] },
        { time: "动作是否完成", forms: ["可能已完成", "可能还在进行"] },
        { time: "状态动词", forms: ["✓ 可用", "✗ 不可用"] },
        { time: "次数", forms: ["✓ 可用", "✗ 不可用"] },
        { time: "持续时间", forms: ["可用", "更强调"] },
      ],
    },
    tenses: [
      {
        name: "现在完成进行时",
        nameEn: "Present Perfect Continuous",
        structure: "have/has been + doing",
        usages: [
          { label: "从过去持续到现在（可能继续）", example: "I <strong>have been waiting</strong> for you for two hours." },
          { label: "刚刚结束，结果可见", example: "Your eyes are red. <strong>Have</strong> you <strong>been crying</strong>?" },
          { label: "重复发生的动作", example: "I <strong>have been going</strong> to the gym every day this week." },
        ],
        timeWords: "for, since, all day/morning/week, how long, lately, recently, these days",
      },
      {
        name: "现在完成时（对比）",
        nameEn: "Present Perfect (Comparison)",
        structure: "have/has + done",
        usages: [
          { label: "强调结果", example: "I <strong>have finished</strong> the work." },
          { label: "强调数量/次数", example: "I <strong>have read</strong> three chapters." },
          { label: "状态动词只能用完成时", example: "I <strong>have known</strong> him for ten years." },
        ],
        timeWords: "already, yet, just, ever, never, since, for, recently, so far",
      },
      {
        name: "两者对比：完成 vs 持续",
        nameEn: "Result vs Process",
        structure: "have done vs have been doing",
        usages: [
          { label: "完成时=结果", example: "I <strong>have read</strong> the book.（读完了）" },
          { label: "完成进行时=过程", example: "I <strong>have been reading</strong> the book.（一直在读，可能没完）" },
          { label: "work/live/wait差别不大", example: "I <strong>have worked</strong> here / I <strong>have been working</strong> here for five years." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "状态动词用完成进行时",
        wrong: "I <strong>have been knowing</strong> him for ten years.",
        correct: "I <strong>have known</strong> him for ten years.",
        reason: "know是状态动词，不能用进行时形式。类似的还有believe, want, like, have等。",
      },
      {
        title: "混淆完成时和完成进行时",
        wrong: "I <strong>have been reading</strong> three books.（想说\"读了三本书\"）",
        correct: "I <strong>have read</strong> three books.（强调数量）",
        reason: "强调数量/次数用完成时，强调持续时间用完成进行时。",
      },
      {
        title: "完成进行时用于已完成的动作",
        wrong: "I <strong>have been finishing</strong> my homework.（想说\"已经完成了\"）",
        correct: "I <strong>have finished</strong> my homework.（已完成）",
        reason: "如果动作已经完成，用完成时；如果强调持续过程，用完成进行时。",
      },
      {
        title: "忘记been",
        wrong: "I <strong>have reading</strong> for two hours.",
        correct: "I <strong>have been reading</strong> for two hours.",
        reason: "完成进行时的结构是have/has been + doing，不能省略been。",
      },
    ],
    keyQuestions: [
      "动作是否已完成？（已完成→完成时，还在进行→完成进行时）",
      "强调结果还是过程？（结果→完成时，过程→完成进行时）",
      "是不是状态动词？（是→只能用完成时）",
    ],
    stateVerbs: {
      categories: [
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget", "think (认为)"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish", "prefer"] },
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess", "contain"] },
      ],
      example: {
        wrong: "I <strong>have been knowing</strong> him for ten years.",
        correct: "I <strong>have known</strong> him for ten years.",
        note: "状态动词只能用完成时，不能用完成进行时。",
      },
    },
  },
  practice: [
    {
      title: "完成时 vs 完成进行时",
      titleEn: "Perfect vs Perfect Continuous",
      type: "fill",
      items: [
        { question: "I ______ (read) three chapters so far.", answer: "have read — 强调数量" },
        { question: "I ______ (read) since morning and I'm tired.", answer: "have been reading — 强调持续" },
        { question: "She ______ (learn) English for five years.", answer: "has learned / has been learning — 两者皆可" },
        { question: "She ______ (learn) 500 new words this month.", answer: "has learned — 强调数量" },
        { question: "He ______ (wait) for you for two hours. Where have you been?", answer: "has been waiting — 强调持续" },
        { question: "It ______ (rain) all day. I'm fed up with this weather.", answer: "has been raining — 强调持续" },
        { question: "It ______ (rain). The ground is wet.", answer: "has rained — 强调结果（地湿了）" },
        { question: "I ______ (know) him since childhood.", answer: "have known — 状态动词只能用完成时" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I have been knowing her since childhood.", answer: "I <strong>have known</strong> her since childhood.（状态动词不用进行时）" },
        { question: "She has been finishing her homework.", answer: "She <strong>has finished</strong> her homework.（已完成用完成时）" },
        { question: "He has been read for two hours.", answer: "He <strong>has been reading</strong> for two hours.（缺少been，read要加ing）" },
        { question: "They have been lived here for ten years.", answer: "They <strong>have been living</strong> here for ten years.（live要加ing）" },
        { question: "I have been seeing that movie three times.", answer: "I <strong>have seen</strong> that movie three times.（次数用完成时）" },
        { question: "Have you been wanting some coffee?", answer: "<strong>Would</strong> you <strong>like</strong> some coffee?（want是状态动词，不用进行时）" },
      ],
    },
    {
      title: "情景造句",
      titleEn: "Sentence Making",
      type: "fill",
      items: [
        { question: "你等了一个小时。（强调持续）", answer: "I <strong>have been waiting</strong> for an hour." },
        { question: "她最近一直在锻炼。（强调重复）", answer: "She <strong>has been exercising</strong> a lot recently." },
        { question: "他刚干完活，手上脏。（强调可见结果）", answer: "He has dirty hands. He <strong>has been working</strong>." },
        { question: "他们认识二十年了。（状态动词）", answer: "They <strong>have known</strong> each other for twenty years.（状态动词用完成时）" },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation",
      type: "fill",
      items: [
        { question: "我一早上都在写邮件。", answer: "I <strong>have been writing</strong> emails all morning." },
        { question: "她学英语学了五年了。", answer: "She <strong>has been learning</strong> English for five years." },
        { question: "你的眼睛红了，你哭了吗？", answer: "Your eyes are red. <strong>Have</strong> you <strong>been crying</strong>?" },
        { question: "他刚到。他一直在路上堵车。", answer: "He just arrived. He <strong>has been stuck</strong> in traffic." },
        { question: "我最近一直在考虑换工作。", answer: "I <strong>have been thinking</strong> about changing jobs recently." },
      ],
    },
  ],
  production: [
    {
      title: "描述你的一天",
      titleEn: "Describe Your Day",
      description: "用现在完成进行时描述你今天做了什么。至少包含5个句子。",
      example: [
        "I <strong>have been working</strong> since 9 am.",
        "I <strong>have been drinking</strong> coffee all morning.",
        "I <strong>have been studying</strong> English for two hours.",
        "I <strong>have been talking</strong> on the phone with my friend.",
      ],
    },
    {
      title: "看图说话",
      titleEn: "Describe the Scene",
      description: "想象以下场景，用现在完成进行时描述。",
      example: [
        "一个人满头大汗 → He <strong>has been running</strong>.",
        "一个人手上沾满油漆 → She <strong>has been painting</strong>.",
        "桌上堆满文件，人很累 → He <strong>has been working</strong> on paperwork all day.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "结构",
        items: ["have/has been + doing"],
      },
      {
        title: "三种用法",
        items: [
          "从过去持续到现在（可能继续）",
          "刚刚结束，结果可见",
          "重复发生的动作",
        ],
      },
      {
        title: "完成时 vs 完成进行时",
        items: [
          "完成时：强调结果/完成",
          "完成进行时：强调过程/持续",
        ],
      },
      {
        title: "状态动词",
        items: ["不能用完成进行时", "know, believe, want, like, have等"],
      },
      {
        title: "时间标志词",
        items: ["for, since, all day, how long, lately, recently"],
      },
    ],
    mindMap: `现在完成进行时：have/has been doing
├── 用法
│   ├── 持续：从过去到现在，可能继续
│   │   └── I have been waiting for two hours.
│   ├── 刚结束：结果可见
│   │   └── Have you been crying?（眼睛红了）
│   └── 重复：从过去到现在反复发生
│       └── I have been going to the gym every day.
├── vs 现在完成时
│   ├── 完成时=结果/完成
│   │   └── I have read the book.（读完了）
│   └── 完成进行时=过程/持续
│       └── I have been reading the book.（一直在读）
└── 状态动词
    └── 不能用完成进行时
        └── ✓ have known ✗ have been knowing`,
    selfTest: [
      {
        question: "She ______ (study) English for three hours. She's still studying.",
        options: ["has studied", "has been studying", "studied"],
        answer: "has been studying",
      },
      {
        question: "I ______ (know) him since childhood.",
        options: ["have known", "have been knowing", "knew"],
        answer: "have known",
      },
      {
        question: "Your hands are dirty. What ______ you ______ (do)?",
        options: ["have, done", "have, been doing", "did, do"],
        answer: "have, been doing",
      },
      {
        question: "It ______ (rain) and the streets are wet.",
        options: ["has rained", "has been raining", "rained"],
        answer: "has been raining",
      },
      {
        question: "I ______ (read) five books this month.",
        options: ["have read", "have been reading", "read"],
        answer: "have read",
      },
    ],
  },
};

import { UnitData } from "./unit-01-data";

export const unit02Data: UnitData = {
  info: {
    id: "unit-02",
    moduleId: "01",
    number: 2,
    title: "现在完成时 vs 一般过去时",
    titleEn: "Present Perfect vs Simple Past",
  },
  objectives: [
    "清晰区分现在完成时和一般过去时的核心差异",
    "根据语境正确选择时态",
    "掌握两种时态的时间标志词",
    "避免中文母语者常见错误",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>lost</strong> my key.（我丢了钥匙。）",
        "I <strong>have lost</strong> my key.（我丢了钥匙。）",
      ],
      answer:
        "表面上看中文翻译一样，但英文含义不同。第一句只是陈述<strong>过去发生的事</strong>（也许已经找到了），第二句强调<strong>现在的影响</strong>（现在还没找到，没钥匙用）。",
    },
    comparison: {
      chinese: [
        { text: "她去过巴黎。", note: "两种说法，中文一样" },
        { text: "他丢了钥匙。", note: "两种说法，中文一样" },
      ],
      english: [
        { text: "She <strong>went</strong> to Paris.", note: "过去去了（可能还在那里）" },
        { text: "She <strong>has been</strong> to Paris.", note: "去过（现在回来了，是经历）" },
      ],
      conclusion:
        "中文翻译一样，但英文<strong>时态不同，含义不同</strong>。现在完成时强调与<strong>现在</strong>的关联，一般过去时只描述<strong>过去</strong>的事实。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "一般过去时", description: "只描述过去发生的事，不强调与现在的关系", example: "I <strong>visited</strong> Beijing in 2010." },
        { label: "现在完成时", description: "过去发生的事对现在有影响，或从过去持续到现在", example: "I <strong>have visited</strong> Beijing three times." },
      ],
      aspect: [
        { label: "结果", description: "过去发生，结果影响现在", focus: "I have lost my key.（现在没钥匙用）" },
        { label: "经历", description: "人生中的经历", focus: "I have been to Paris.（去过，回来了）" },
        { label: "持续", description: "从过去持续到现在", focus: "I have lived here since 2010.（现在还住着）" },
      ],
    },
    matrix: {
      headers: ["", "比较项", "一般过去时", "现在完成时"],
      rows: [
        { time: "结构", forms: ["—", "did", "have/has done"] },
        { time: "时间", forms: ["—", "过去（已结束）", "过去 → 现在"] },
        { time: "重点", forms: ["—", "过去事实", "现在关联"] },
        { time: "是否与现在有关", forms: ["—", "❌ 不一定", "✅ 一定有关"] },
        { time: "时间是否结束", forms: ["—", "✅ 结束", "❌ 可能继续"] },
      ],
    },
    tenses: [
      {
        name: "一般过去时",
        nameEn: "Simple Past",
        structure: "did（动词过去式）",
        usages: [
          { label: "过去发生的动作", example: "I <strong>visited</strong> Beijing in 2010." },
          { label: "过去的状态（已结束）", example: "She <strong>lived</strong> in London for ten years.（现在不住了）" },
          { label: "过去的工作经历（已结束）", example: "He <strong>worked</strong> at Google from 2015 to 2020.（现在不工作了）" },
        ],
        timeWords: "yesterday, last night/week/month/year, ago, in + 过去年份, when I was young, just now",
      },
      {
        name: "现在完成时",
        nameEn: "Present Perfect",
        structure: "have/has + done",
        usages: [
          { label: "结果对现在有影响", example: "I <strong>have lost</strong> my key.（过去丢的，现在没钥匙用）" },
          { label: "经历（life experience）", example: "I <strong>have been</strong> to Paris.（人生经历，现在回来了）" },
          { label: "从过去持续到现在", example: "I <strong>have lived</strong> here since 2010.（现在还住着）" },
        ],
        timeWords: "already, yet, just, ever, never, so far, up to now, recently, since + 时间点, for + 时间段",
      },
      {
        name: "since vs for",
        nameEn: "Since vs For",
        structure: "since + 时间点 / for + 时间段",
        usages: [
          { label: "since + 时间点", example: "I have lived here <strong>since 2010</strong>.（从2010年开始）" },
          { label: "for + 时间段", example: "I have lived here <strong>for ten years</strong>.（持续了十年）" },
        ],
        timeWords: "",
      },
      {
        name: "have been to vs have gone to",
        nameEn: "Been to vs Gone to",
        structure: "have been to / have gone to",
        usages: [
          { label: "been to：去过（回来了）", example: "She <strong>has been</strong> to Paris.（她去过巴黎，现在回来了）" },
          { label: "gone to：去了（没回来）", example: "She <strong>has gone</strong> to Paris.（她去巴黎了，现在不在这儿）" },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "过去时间用现在完成时",
        wrong: "I <strong>have gone</strong> to Beijing <strong>last year</strong>.",
        correct: "I <strong>went</strong> to Beijing <strong>last year</strong>.",
        reason: "last year是明确的过去时间，必须用过去时。现在完成时不能与明确的过去时间连用。",
      },
      {
        title: "since/for混淆",
        wrong: "I have lived here <strong>since</strong> five years.",
        correct: "I have lived here <strong>for</strong> five years.",
        reason: "five years是时间段，用for；since后面必须是时间点（如since 2010）。",
      },
      {
        title: "have been to vs have gone to混淆",
        wrong: "She <strong>has been</strong> to Paris.（想说她去巴黎了，现在不在这儿）",
        correct: "She <strong>has gone</strong> to Paris.（去了，还没回来）",
        reason: "been to表示经历（去过，回来了），gone to表示去了（还没回来）。",
      },
      {
        title: "状态动词用完成进行时",
        wrong: "I <strong>have been knowing</strong> him for ten years.",
        correct: "I <strong>have known</strong> him for ten years.",
        reason: "know是状态动词，不能用进行时。类似的还有believe, want, like等。",
      },
    ],
    keyQuestions: [
      "动作是否与现在有关？（有关→完成时，无关→过去时）",
      "有没有明确的过去时间？（有→过去时，没有→可能完成时）",
      "是经历还是具体事件？（经历→完成时，具体事件→过去时）",
    ],
    stateVerbs: {
      categories: [
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish"] },
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess"] },
      ],
      example: {
        wrong: "I <strong>have been knowing</strong> him for ten years.",
        correct: "I <strong>have known</strong> him for ten years.",
        note: "状态动词（know, believe, want等）不能用进行时，包括完成进行时。",
      },
    },
  },
  practice: [
    {
      title: "时态选择",
      titleEn: "Tense Selection",
      type: "fill",
      items: [
        { question: "I ______ (already/finish) my homework. Can I go out?", answer: "have already finished — already是现在完成时标志词" },
        { question: "She ______ (go) to the supermarket ten minutes ago.", answer: "went — ago是过去时标志词" },
        { question: "______ you ever ______ (try) Japanese food?", answer: "Have, ever tried — ever是现在完成时标志词" },
        { question: "He ______ (not/call) me since last Monday.", answer: "hasn't called — since是现在完成时标志词" },
        { question: "We ______ (meet) at the party last night.", answer: "met — last night是过去时标志词" },
        { question: "I ______ (read) three books this month.", answer: "have read — this month还没结束，用现在完成时" },
        { question: "He ______ (live) in Paris for ten years and still lives there.", answer: "has lived — still lives there表明持续到现在" },
        { question: "______ you ______ (see) my phone? I can't find it.", answer: "Have, seen — 强调现在影响（找不到手机）" },
      ],
    },
    {
      title: "since vs for",
      titleEn: "Since or For",
      type: "fill",
      items: [
        { question: "I have lived here ______ 2015.", answer: "since — 2015是时间点" },
        { question: "She has been studying English ______ three years.", answer: "for — three years是时间段" },
        { question: "He has worked at Google ______ last summer.", answer: "since — last summer是时间点" },
        { question: "We have known each other ______ a long time.", answer: "for — a long time是时间段" },
        { question: "They have been married ______ 2010.", answer: "since — 2010是时间点" },
        { question: "I haven't eaten ______ this morning.", answer: "since — this morning是时间点" },
      ],
    },
    {
      title: "have been to vs have gone to",
      titleEn: "Been to or Gone to",
      type: "fill",
      items: [
        { question: "Where is Tom? He ______ the library.", answer: "has gone to — Tom不在这里，去了图书馆" },
        { question: "I ______ Paris twice. It's a beautiful city.", answer: "have been to — 去过巴黎（经历，回来了）" },
        { question: "She ______ the bank. She'll be back in ten minutes.", answer: "has gone to — 她去了银行，还没回来" },
        { question: "______ you ever ______ China?", answer: "Have, been to — 问经历" },
        { question: "He ______ Japan three times on business.", answer: "has been to — 去过三次（经历）" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I have seen him yesterday.", answer: "I <strong>saw</strong> him yesterday.（yesterday是过去时标志词）" },
        { question: "She has gone to Paris last summer.", answer: "She <strong>went</strong> to Paris last summer.（last summer是过去时标志词）" },
        { question: "He has been knowing her since childhood.", answer: "He <strong>has known</strong> her since childhood.（know是状态动词，不用进行时）" },
        { question: "I have lived here since five years.", answer: "I have lived here <strong>for</strong> five years.（five years是时间段，用for）" },
        { question: "They have already left when I arrived.", answer: "They <strong>had</strong> already <strong>left</strong> when I arrived.（过去的过去，用过去完成时）" },
        { question: "Have you finished your homework yet? Yes, I did it an hour ago.", answer: "Have you finished your homework yet? Yes, I <strong>finished</strong> it an hour ago.（ago用过去时）" },
      ],
    },
  ],
  production: [
    {
      title: "经历分享",
      titleEn: "Share Your Experience",
      description: "用现在完成时和一般过去时描述你的经历。至少包含6个句子。",
      example: [
        "I <strong>have been</strong> to five countries.（经历）",
        "I <strong>visited</strong> Japan in 2019.（过去时间）",
        "I <strong>have never seen</strong> snow.（经历）",
        "I <strong>studied</strong> English for ten years.（过去时间段）",
        "I <strong>have known</strong> my best friend since childhood.（持续到现在）",
      ],
    },
    {
      title: "对比写作",
      titleEn: "Contrast Writing",
      description: "请用两种时态描述同一件事，强调不同的重点。",
      example: [
        "一般过去时：I <strong>lost</strong> my wallet yesterday.（只是说事实）",
        "现在完成时：I <strong>have lost</strong> my wallet.（现在还没找到，很着急）",
        "一般过去时：I <strong>ate</strong> lunch at 12.（说过去的事）",
        "现在完成时：I <strong>have eaten</strong> lunch.（现在不饿）",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "一般过去时",
        items: ["只描述过去的事实", "不强调与现在的关系", "有明确的过去时间"],
      },
      {
        title: "现在完成时",
        items: ["强调与现在的关联", "三种用法：结果、经历、持续"],
      },
      {
        title: "时间标志词",
        items: [
          "过去时：yesterday, ago, last, in + 过去年份",
          "现在完成时：already, yet, just, ever, never, since, for",
        ],
      },
      {
        title: "since vs for",
        items: ["since + 时间点（since 2010）", "for + 时间段（for five years）"],
      },
      {
        title: "been to vs gone to",
        items: ["been to：去过（回来了）", "gone to：去了（没回来）"],
      },
    ],
    mindMap: `现在完成时 vs 一般过去时
├── 一般过去时：did
│   ├── 过去的事实
│   ├── 时间已结束
│   └── 标志词：yesterday, ago, last, in + 年份
├── 现在完成时：have/has done
│   ├── 结果对现在有影响
│   │   └── I have lost my key.（现在没钥匙）
│   ├── 经历
│   │   └── I have been to Paris.（去过，回来了）
│   └── 从过去持续到现在
│       └── I have lived here since 2010.
├── since vs for
│   ├── since + 时间点
│   └── for + 时间段
└── been to vs gone to
    ├── been to：去过（回来了）
    └── gone to：去了（没回来）`,
    selfTest: [
      {
        question: "I ______ (not/see) that movie yet.",
        options: ["didn't see", "haven't seen", "don't see"],
        answer: "haven't seen",
      },
      {
        question: "She ______ (go) to the cinema last night.",
        options: ["has gone", "went", "has been"],
        answer: "went",
      },
      {
        question: "He ______ (live) in this city since 2015.",
        options: ["lived", "has lived", "lives"],
        answer: "has lived",
      },
      {
        question: "______ you ever ______ (be) to London?",
        options: ["Did, go", "Have, been", "Have, gone"],
        answer: "Have, been",
      },
      {
        question: "I ______ (finish) my homework an hour ago.",
        options: ["have finished", "finished", "had finished"],
        answer: "finished",
      },
    ],
  },
};

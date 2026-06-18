import { UnitData } from "./unit-01-data";

export const unit05Data: UnitData = {
  info: {
    id: "unit-05",
    moduleId: "01",
    number: 5,
    title: "过去完成进行时",
    titleEn: "Past Perfect Continuous",
  },
  objectives: [
    "掌握过去完成进行时的结构和用法",
    "区分过去完成时和过去完成进行时",
    "在叙事中正确使用过去完成进行时",
    "理解过去完成进行时与现在完成进行时的关系",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I <strong>had waited</strong> for an hour when he finally came.（我等了一个小时他才来。）",
        "I <strong>had been waiting</strong> for an hour when he finally came.（我一直在等，等了一个小时他才来。）",
      ],
      answer:
        "第一句强调<strong>完成的量</strong>（一个小时），第二句强调<strong>持续的过程</strong>（一直在等）。过去完成进行时更强调动作的<strong>持续性</strong>。",
    },
    comparison: {
      chinese: [
        { text: "她工作了一整天，所以很累。", note: "强调持续" },
        { text: "她完成了三个项目。", note: "强调结果" },
      ],
      english: [
        { text: "She <strong>had been working</strong> all day, so she was tired.", note: "持续过程导致累" },
        { text: "She <strong>had worked</strong> on three projects.", note: "完成的结果" },
      ],
      conclusion:
        "过去完成进行时（had been doing）强调<strong>持续过程</strong>，过去完成时（had done）强调<strong>完成结果</strong>。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "过去完成时", description: "强调完成的结果", example: "I <strong>had read</strong> three chapters." },
        { label: "过去完成进行时", description: "强调持续的过程，可能还在进行", example: "I <strong>had been reading</strong> for two hours." },
      ],
      aspect: [
        { label: "持续", description: "在过去某时间之前一直在进行", focus: "I had been waiting for an hour when he came." },
        { label: "原因", description: "导致过去某个状态的原因", focus: "She was tired because she had been working all day." },
        { label: "刚结束可见结果", description: "在过去某时间之前刚结束，结果可见", focus: "His clothes were dirty. He had been working in the garden." },
      ],
    },
    matrix: {
      headers: ["过去完成时", "过去完成进行时"],
      rows: [
        { time: "结构", forms: ["had done", "had been doing"] },
        { time: "重点", forms: ["完成的结果", "持续的过程"] },
        { time: "动作是否完成", forms: ["已完成", "可能还在进行"] },
        { time: "状态动词", forms: ["✓ 可用", "✗ 不可用"] },
        { time: "次数/数量", forms: ["✓ 可用", "✗ 不可用"] },
        { time: "持续时间", forms: ["可用", "更强调"] },
      ],
    },
    tenses: [
      {
        name: "过去完成进行时",
        nameEn: "Past Perfect Continuous",
        structure: "had been + doing",
        usages: [
          { label: "在过去某时间之前持续进行", example: "I <strong>had been waiting</strong> for an hour when he finally came." },
          { label: "过去某动作的原因", example: "She was tired because she <strong>had been working</strong> all day." },
          { label: "刚结束，结果可见", example: "His clothes were dirty. He <strong>had been working</strong> in the garden." },
        ],
        timeWords: "for, since, all day/morning/week, before, when, by the time, how long",
      },
      {
        name: "过去完成时（对比）",
        nameEn: "Past Perfect (Comparison)",
        structure: "had + done",
        usages: [
          { label: "强调结果/数量", example: "I <strong>had read</strong> three chapters when she called." },
          { label: "状态动词只能用完成时", example: "I <strong>had known</strong> him for ten years." },
          { label: "次数", example: "I <strong>had waited</strong> three times." },
        ],
        timeWords: "before, after, when, by the time, already, just, never",
      },
      {
        name: "与现在完成进行时对比",
        nameEn: "vs Present Perfect Continuous",
        structure: "had been doing vs have/has been doing",
        usages: [
          { label: "过去完成进行时：过去某时间之前持续", example: "I <strong>had been waiting</strong> for two hours when he came yesterday." },
          { label: "现在完成进行时：从过去到现在持续", example: "I <strong>have been waiting</strong> for two hours.（现在还在等）" },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "状态动词用完成进行时",
        wrong: "I <strong>had been knowing</strong> him for ten years.",
        correct: "I <strong>had known</strong> him for ten years.",
        reason: "know是状态动词，不能用进行时形式。",
      },
      {
        title: "混淆完成时和完成进行时",
        wrong: "I <strong>had been reading</strong> three chapters.（想说\"读完了三章\"）",
        correct: "I <strong>had read</strong> three chapters.（强调数量）",
        reason: "强调数量/次数用完成时，强调持续时间用完成进行时。",
      },
      {
        title: "忘记been",
        wrong: "I <strong>had waiting</strong> for two hours.",
        correct: "I <strong>had been waiting</strong> for two hours.",
        reason: "过去完成进行时的结构是had been + doing，不能省略been。",
      },
      {
        title: "过度使用",
        wrong: "I <strong>had been getting up</strong> at 7 am yesterday.",
        correct: "I <strong>got up</strong> at 7 am yesterday.",
        reason: "只是描述过去的一个简单动作，不需要用完成进行时。",
      },
    ],
    keyQuestions: [
      "强调持续过程还是完成结果？（持续→完成进行时，结果→完成时）",
      "是不是状态动词？（是→只能用完成时）",
      "是时间段还是次数/数量？（时间段→完成进行时，次数→完成时）",
    ],
    stateVerbs: {
      categories: [
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish"] },
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess"] },
      ],
      example: {
        wrong: "I <strong>had been knowing</strong> him for ten years.",
        correct: "I <strong>had known</strong> him for ten years.",
        note: "状态动词即使在过去完成进行时中也不能用进行时。",
      },
    },
  },
  practice: [
    {
      title: "完成时 vs 完成进行时",
      titleEn: "Perfect vs Perfect Continuous",
      type: "fill",
      items: [
        { question: "She ______ (work) all day, so she was tired.", answer: "had been working — 强调持续，导致累" },
        { question: "She ______ (work) on three projects before the deadline.", answer: "had worked — 强调数量——三个项目" },
        { question: "I ______ (read) for two hours when he called.", answer: "had been reading — 强调持续时间" },
        { question: "I ______ (read) ten pages when he called.", answer: "had read — 强调数量——十页" },
        { question: "It ______ (rain) for three days before the sun came out.", answer: "had been raining — 强调持续时间" },
        { question: "It ______ (rain), so the ground was wet.", answer: "had been raining / had rained — 两者皆可，强调原因" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "I had been knowing him for ten years.", answer: "I <strong>had known</strong> him for ten years.（状态动词不用进行时）" },
        { question: "She had been finished her work before she left.", answer: "She <strong>had finished</strong> her work before she left.（完成时不用been）" },
        { question: "He had been wait for two hours when I arrived.", answer: "He <strong>had been waiting</strong> for two hours when I arrived.（wait要加ing）" },
        { question: "It had been rained all day.", answer: "It <strong>had been raining</strong> all day.（rain要加ing）" },
        { question: "They had been live in Paris before they moved.", answer: "They <strong>had been living</strong> in Paris before they moved.（live要加ing）" },
        { question: "I had been reading three books.", answer: "I <strong>had read</strong> three books.（数量用完成时）/ I <strong>had been reading</strong> for three hours.（持续时间用完成进行时）" },
      ],
    },
    {
      title: "句子合并",
      titleEn: "Sentence Combining",
      type: "fill",
      items: [
        { question: "His eyes were red. He cried.", answer: "His eyes were red because he <strong>had been crying</strong>." },
        { question: "I was late. I waited for the bus.", answer: "I was late because I <strong>had been waiting</strong> for the bus." },
        { question: "The ground was wet. It rained.", answer: "The ground was wet because it <strong>had been raining</strong>." },
        { question: "She was hot. She exercised.", answer: "She was hot because she <strong>had been exercising</strong>." },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation",
      type: "fill",
      items: [
        { question: "她辞职前，在那家公司工作了五年。", answer: "She <strong>had been working</strong> at the company for five years before she resigned." },
        { question: "我一直在等，等了两小时他才来。", answer: "I <strong>had been waiting</strong> for two hours when he finally came." },
        { question: "他的衣服脏了，因为他一直在花园干活。", answer: "His clothes were dirty because he <strong>had been working</strong> in the garden." },
        { question: "到去年为止，我已经学了十年英语。", answer: "By last year, I <strong>had been studying</strong> English for ten years." },
        { question: "她一直在哭，所以眼睛红了。", answer: "Her eyes were red because she <strong>had been crying</strong>." },
      ],
    },
  ],
  production: [
    {
      title: "故事续写",
      titleEn: "Story Continuation",
      description: "用过去完成进行时续写以下故事，至少包含3个过去完成进行时的句子。",
      example: [
        "When I got home last night, my roommate was exhausted.",
        "He <strong>had been working</strong> on his thesis all day.",
        "He <strong>had been drinking</strong> coffee to stay awake.",
        "He <strong>had been trying</strong> to finish the introduction for hours.",
      ],
    },
    {
      title: "原因描述",
      titleEn: "Cause Description",
      description: "用过去完成进行时描述以下情况的原因。",
      example: [
        "地是湿的 → It <strong>had been raining</strong>.",
        "他很累 → He <strong>had been working</strong> all day.",
        "她气喘吁吁 → She <strong>had been running</strong>.",
        "他的手很脏 → He <strong>had been working</strong> in the garden.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "结构",
        items: ["had been + doing"],
      },
      {
        title: "三种用法",
        items: [
          "在过去某时间之前持续进行",
          "过去某动作的原因",
          "刚结束，结果可见",
        ],
      },
      {
        title: "过去完成进行时 vs 过去完成时",
        items: [
          "完成进行时：强调持续过程",
          "完成时：强调完成结果",
        ],
      },
      {
        title: "状态动词",
        items: ["不能用完成进行时", "know, believe, want, like等"],
      },
      {
        title: "时间标志词",
        items: ["for, since, all day, before, when, by the time"],
      },
    ],
    mindMap: `过去完成进行时：had been doing
├── 用法
│   ├── 持续：在过去某时间之前一直在做
│   │   └── I had been waiting for an hour when he came.
│   ├── 原因：导致过去某个状态
│   │   └── She was tired because she had been working all day.
│   └── 刚结束：结果在那时可见
│       └── His clothes were dirty. He had been working.
├── vs 过去完成时
│   ├── 完成进行时=持续过程
│   │   └── I had been reading for two hours.
│   └── 完成时=完成结果
│       └── I had read three chapters.
├── vs 现在完成进行时
│   ├── 过去：had been doing（过去某时间之前）
│   └── 现在：have/has been doing（从过去到现在）
└── 状态动词
    └── 不能用完成进行时`,
    selfTest: [
      {
        question: "She was tired because she ______ (work) all day.",
        options: ["had worked", "had been working", "worked"],
        answer: "had been working",
      },
      {
        question: "I ______ (wait) for two hours when he finally came.",
        options: ["had waited", "had been waiting", "waited"],
        answer: "had been waiting",
      },
      {
        question: "He ______ (know) her for ten years before she moved away.",
        options: ["had known", "had been knowing", "knew"],
        answer: "had known",
      },
      {
        question: "The ground was wet because it ______ (rain).",
        options: ["had rained", "had been raining", "rained"],
        answer: "had been raining",
      },
      {
        question: "By the time she arrived, I ______ (read) for three hours.",
        options: ["had read", "had been reading", "read"],
        answer: "had been reading",
      },
    ],
  },
};

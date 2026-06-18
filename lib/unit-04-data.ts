import { UnitData } from "./unit-01-data";

export const unit04Data: UnitData = {
  info: {
    id: "unit-04",
    moduleId: "01",
    number: 4,
    title: "过去完成时",
    titleEn: "Past Perfect",
  },
  objectives: [
    "理解\"过去的过去\"这个概念",
    "掌握过去完成时的结构和用法",
    "在叙事中正确使用过去完成时",
    "区分过去完成时和一般过去时",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "When I <strong>arrived</strong> at the station, the train <strong>had</strong> already <strong>left</strong>.",
        "I <strong>had missed</strong> it because I <strong>had woken</strong> up late.",
      ],
      answer:
        "arrived是过去某个时间点，had left表示在到达<strong>之前</strong>火车就开走了。这就是<strong>过去的过去</strong>——过去完成时表示在过去某个时间点之前已经完成的动作。",
    },
    comparison: {
      chinese: [
        { text: "我到达时，火车已经开走了。", note: "用\"已经\"表示先后" },
        { text: "我错过火车，因为我起晚了。", note: "用\"因为\"表示因果" },
      ],
      english: [
        { text: "When I <strong>arrived</strong>, the train <strong>had left</strong>.", note: "到达(过去)之前，火车开走(过去的过去)" },
        { text: "I <strong>had missed</strong> the train because I <strong>had woken</strong> up late.", note: "错过和起晚都在到达之前" },
      ],
      conclusion:
        "中文用\"已经\"\"之前\"表示时间顺序，英文用<strong>时态变化</strong>。过去完成时（had done）表示在<strong>过去某个时间之前</strong>发生的动作。",
    },
  },
  explanation: {
    essence: {
      time: [
        { label: "一般过去时", description: "过去发生的事", example: "I <strong>arrived</strong> at the station." },
        { label: "过去完成时", description: "在过去某个时间之前发生的事（过去的过去）", example: "The train <strong>had</strong> already <strong>left</strong>." },
      ],
      aspect: [
        { label: "先发生", description: "在过去某个动作之前完成", focus: "When I arrived, she had left." },
        { label: "持续", description: "在过去某时间之前已经持续的状态", focus: "By 2010, I had lived in Beijing for ten years." },
        { label: "经历", description: "在过去某时间之前的经历", focus: "I had never seen snow before I went to Harbin." },
      ],
    },
    matrix: {
      headers: ["一般过去时", "过去完成时"],
      rows: [
        { time: "结构", forms: ["did", "had done"] },
        { time: "时间", forms: ["过去", "过去的过去"] },
        { time: "含义", forms: ["过去发生的事", "在过去某时间之前发生的事"] },
        { time: "时间轴", forms: ["动作B（后发生）", "动作A（先发生）"] },
      ],
    },
    tenses: [
      {
        name: "过去完成时",
        nameEn: "Past Perfect",
        structure: "had + done（过去分词）",
        usages: [
          { label: "在另一个过去动作之前完成", example: "When I <strong>arrived</strong>, she <strong>had</strong> already <strong>left</strong>." },
          { label: "在过去某时间之前持续的状态", example: "By 2010, I <strong>had lived</strong> in Beijing for ten years." },
          { label: "过去某时间之前的经历", example: "I <strong>had never seen</strong> snow before I went to Harbin." },
        ],
        timeWords: "before, after, when, by the time, already, just, never, until",
      },
      {
        name: "一般过去时（对比）",
        nameEn: "Simple Past (Comparison)",
        structure: "did（动词过去式）",
        usages: [
          { label: "过去发生的事（后发生）", example: "I <strong>arrived</strong> at the station." },
          { label: "按顺序叙述", example: "I <strong>got up</strong>, <strong>brushed</strong> my teeth, and <strong>left</strong>." },
          { label: "时间顺序清楚时可代替过去完成时", example: "After I <strong>locked</strong> the door, I <strong>left</strong>." },
        ],
        timeWords: "yesterday, last week, ago, in 2010, when",
      },
      {
        name: "before/after从句",
        nameEn: "Before/After Clauses",
        structure: "before/after + had done / did",
        usages: [
          { label: "before + 过去时，主句过去完成时", example: "<strong>Before</strong> I <strong>left</strong>, I <strong>had locked</strong> the door." },
          { label: "after + 过去完成时，主句过去时", example: "<strong>After</strong> I <strong>had locked</strong> the door, I <strong>left</strong>." },
          { label: "before/after已表顺序，也可都用过去时", example: "After I <strong>locked</strong> the door, I <strong>left</strong>." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "忘记用过去完成时",
        wrong: "When I arrived, she <strong>left</strong>.",
        correct: "When I arrived, she <strong>had left</strong>.",
        reason: "她离开在我到达之前，是\"过去的过去\"，需要用过去完成时。",
      },
      {
        title: "过度使用过去完成时",
        wrong: "I <strong>had breakfast</strong> at 8 am yesterday.（误以为是过去完成时）",
        correct: "I <strong>had</strong> breakfast at 8 am yesterday.（had是\"吃\"，不是助动词）",
        reason: "had breakfast = 吃早饭，不是过去完成时。只有had + 过去分词才是过去完成时。",
      },
      {
        title: "when从句中错误使用",
        wrong: "<strong>When</strong> I <strong>had arrived</strong>, she left.",
        correct: "When I <strong>arrived</strong>, she <strong>had left</strong>.",
        reason: "when引导的从句通常是后发生的动作，主句是先发生的动作。",
      },
      {
        title: "间接引语中忘记时态后移",
        wrong: "She told me she <strong>has finished</strong> the work.",
        correct: "She told me she <strong>had finished</strong> the work.",
        reason: "间接引语中，have/has要变成had（时态后移）。",
      },
    ],
    keyQuestions: [
      "是否有两个过去的动作？（有→可能需要过去完成时）",
      "哪个动作先发生？（先发生的用过去完成时）",
      "时间顺序是否清楚？（清楚→可以都用过去时）",
    ],
    stateVerbs: {
      categories: [
        { label: "认知", verbs: ["know", "believe", "understand", "remember", "forget"] },
        { label: "情感", verbs: ["love", "hate", "like", "want", "wish"] },
        { label: "感官", verbs: ["see", "hear", "smell", "taste", "feel"] },
        { label: "所有", verbs: ["have", "own", "belong", "possess"] },
      ],
      example: {
        wrong: "I <strong>had been knowing</strong> him for years before that.",
        correct: "I <strong>had known</strong> him for years before that.",
        note: "状态动词即使在过去完成时中也不能用进行时。",
      },
    },
  },
  practice: [
    {
      title: "过去完成时填空",
      titleEn: "Past Perfect Fill-in",
      type: "fill",
      items: [
        { question: "When I arrived at the cinema, the movie ______ (already/start).", answer: "had already started — 火车在我到达之前就开走了" },
        { question: "She ______ (not/see) snow before she went to Harbin.", answer: "hadn't seen — 去哈尔滨之前没见过" },
        { question: "By the time he graduated, he ______ (study) English for ten years.", answer: "had studied / had been studying — 毕业之前已经学了十年" },
        { question: "I ______ (finish) my homework before I went out.", answer: "had finished — 出去之前完成" },
        { question: "He told me that he ______ (meet) her before.", answer: "had met — 间接引语，时态后移" },
        { question: "After she ______ (eat) dinner, she watched TV.", answer: "had eaten — after从句用过去完成时" },
        { question: "They ______ (just/leave) when I called.", answer: "had just left — 我打电话时他们刚离开" },
        { question: "I ______ (never/be) to Japan until last year.", answer: "had never been — 去年之前的经历" },
      ],
    },
    {
      title: "选择正确时态",
      titleEn: "Choose the Right Tense",
      type: "fill",
      items: [
        { question: "I ______ (go) to bed after I ______ (finish) my work.", answer: "went, had finished — 先完成工作，后睡觉" },
        { question: "When she ______ (arrive), the party ______ (already/start).", answer: "arrived, had already started — 先开始，后到达" },
        { question: "He ______ (not/know) the answer because he ______ (not/study).", answer: "didn't know, hadn't studied — 先没学习，后不知道" },
        { question: "By the time I ______ (get) to the airport, the plane ______ (leave).", answer: "got, had left — 先起飞，后到达" },
        { question: "She ______ (tell) me that she ______ (see) the movie before.", answer: "told, had seen — 先看过，后告诉我" },
        { question: "I ______ (meet) him at the party, but I ______ (meet) him before that.", answer: "met, had met — 先见过，后在派对上又见" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "When I arrived, she already left.", answer: "When I arrived, she <strong>had</strong> already <strong>left</strong>.（过去的过去用过去完成时）" },
        { question: "I had saw that movie before.", answer: "I had <strong>seen</strong> that movie before.（see的过去分词是seen）" },
        { question: "By the time I got there, he has left.", answer: "By the time I got there, he <strong>had</strong> left.（过去完成时用had）" },
        { question: "After I had ate dinner, I went for a walk.", answer: "After I had <strong>eaten</strong> dinner, I went for a walk.（eat的过去分词是eaten）" },
        { question: "She told me she has finished the work.", answer: "She told me she <strong>had</strong> finished the work.（间接引语时态后移）" },
        { question: "I had been to Paris before I visit it last year.", answer: "I had been to Paris before I <strong>visited</strong> it last year.（last year用过去时）" },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation",
      type: "fill",
      items: [
        { question: "我到达时，他已经离开了。", answer: "When I arrived, he <strong>had</strong> already <strong>left</strong>." },
        { question: "她告诉我她以前去过那里。", answer: "She told me she <strong>had been</strong> there before." },
        { question: "到2020年时，他已经学了十年英语。", answer: "By 2020, he <strong>had studied</strong> English for ten years." },
        { question: "我做完作业后才出去玩。", answer: "I didn't go out to play until I <strong>had finished</strong> my homework." },
        { question: "要是我早知道就好了。", answer: "If only I <strong>had known</strong> earlier!" },
      ],
    },
  ],
  production: [
    {
      title: "故事续写",
      titleEn: "Story Continuation",
      description: "用过去完成时续写以下故事，至少包含5个过去完成时的句子。",
      example: [
        "When I woke up this morning, I realized I was late.",
        "I <strong>had overslept</strong> because I <strong>had stayed</strong> up late the night before.",
        "I <strong>hadn't set</strong> my alarm clock.",
        "I <strong>had been working</strong> on a project until 2 am.",
        "I rushed to the bus stop, but the bus <strong>had</strong> already <strong>left</strong>.",
      ],
    },
    {
      title: "经历对比",
      titleEn: "Experience Contrast",
      description: "用过去完成时描述你在某个时间点之前的经历。",
      example: [
        "By the time I was 25, I <strong>had graduated</strong> from college.",
        "I <strong>had traveled</strong> to three countries.",
        "I <strong>had started</strong> my first job.",
        "I <strong>had never been</strong> abroad before 2018.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "过去完成时 = 过去的过去",
        items: ["结构：had + 过去分词", "表示在过去某个时间点之前发生的动作"],
      },
      {
        title: "三种用法",
        items: [
          "在另一个过去动作之前完成",
          "在过去某时间之前持续的状态",
          "过去某时间之前的经历",
        ],
      },
      {
        title: "时间标志词",
        items: ["before, after, when, by the time", "already, just, never, until"],
      },
      {
        title: "常见错误",
        items: [
          "忘记用过去完成时",
          "过度使用（had breakfast不是过去完成时）",
          "when从句中的时态",
        ],
      },
    ],
    mindMap: `过去完成时：had done
├── 核心概念：过去的过去
│   ├── 动作A（had done）→ 动作B（did）→ 现在
│   └── 先发生的用过去完成时
├── 用法
│   ├── 先完成：When I arrived, she had left.
│   ├── 持续：By 2010, I had lived here for ten years.
│   └── 经历：I had never seen snow before.
├── 时间标志词
│   └── before, after, when, by the time, already, just, never
└── vs 一般过去时
    ├── 过去时：过去发生的事
    └── 过去完成时：在过去某时间之前发生的事`,
    selfTest: [
      {
        question: "When I ______ (arrive), she ______ (leave).",
        options: ["arrived, left", "arrived, had left", "had arrived, left"],
        answer: "arrived, had left",
      },
      {
        question: "By the time he graduated, he ______ (study) English for ten years.",
        options: ["studied", "has studied", "had studied"],
        answer: "had studied",
      },
      {
        question: "I ______ (never/see) such a beautiful sunset before.",
        options: ["never saw", "have never seen", "had never seen"],
        answer: "had never seen",
      },
      {
        question: "She told me that she ______ (finish) the work.",
        options: ["finished", "has finished", "had finished"],
        answer: "had finished",
      },
      {
        question: "After she ______ (eat) dinner, she watched TV.",
        options: ["ate", "has eaten", "had eaten"],
        answer: "had eaten",
      },
    ],
  },
};

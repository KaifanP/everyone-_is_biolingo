import { UnitData } from "./unit-01-data";

export const unit12Data: UnitData = {
  info: {
    id: "unit-12",
    moduleId: "02",
    number: 12,
    title: "推测与可能性（过去）",
    titleEn: "Deduction: Past",
  },
  objectives: [
    "掌握must have done, may have done, might have done, can't have done的用法",
    "掌握should have done, ought to have done的用法",
    "理解needn't have done的用法",
    "在过去语境中正确使用推测表达",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "He <strong>must have left</strong>.（他一定已经走了。）",
        "She <strong>may have forgotten</strong>.（她可能忘了。）",
        "He <strong>can't have said</strong> that.（他不可能说了那话。）",
        "You <strong>should have told</strong> me.（你本应该告诉我的。）",
      ],
      answer:
        "这些句子都用<strong>情态动词 + have + 过去分词</strong>的结构，用于对<strong>过去发生的事情</strong>进行推测或评价。这是情态动词的高级用法。",
    },
    comparison: {
      chinese: [
        { text: "他一定走了。（包不见了）", note: "过去推测" },
        { text: "她可能忘了。", note: "不确定" },
        { text: "你本应该告诉我的。（但你没说）", note: "后悔/责备" },
      ],
      english: [
        { text: "He <strong>must have left</strong>.", note: "肯定推测" },
        { text: "She <strong>may have forgotten</strong>.", note: "不确定" },
        { text: "You <strong>should have told</strong> me.", note: "责备" },
      ],
      conclusion:
        "英文用<strong>情态动词 + have + 过去分词</strong>来表达对过去的推测（一定做了/可能做了/不可能做了）或评价（应该做但没做）。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "结构",
          description: "情态动词 + have + 过去分词",
          example: "He <strong>must have left</strong>.",
        },
        {
          label: "用途1：对过去的推测",
          description: "推测过去发生了什么",
          example: "It <strong>must have rained</strong> last night.",
        },
        {
          label: "用途2：对过去的评价",
          description: "评价过去应该/不应该做的事",
          example: "You <strong>should have told</strong> me.",
        },
      ],
      aspect: [
        {
          label: "must have done",
          description: "对过去的肯定推测（一定做了）",
          focus: "有证据支持",
        },
        {
          label: "may/might/could have done",
          description: "对过去的不确定推测（可能做了）",
          focus: "不确定",
        },
        {
          label: "can't have done",
          description: "对过去的否定推测（不可能做了）",
          focus: "有证据支持否定",
        },
        {
          label: "should have done",
          description: "过去应该做但没做（责备/后悔）",
          focus: "评价过去",
        },
      ],
    },
    matrix: {
      headers: ["结构", "含义", "例句"],
      rows: [
        { time: "must have done", forms: ["一定做了", "He must have left."] },
        { time: "may have done", forms: ["可能做了", "He may have left."] },
        { time: "might have done", forms: ["也许做了", "He might have left."] },
        { time: "could have done", forms: ["可能做了/本可以", "He could have left."] },
        { time: "can't have done", forms: ["不可能做了", "He can't have left."] },
        { time: "should have done", forms: ["应该做但没做", "You should have told me."] },
        { time: "shouldn't have done", forms: ["不应该做但做了", "You shouldn't have told him."] },
        { time: "needn't have done", forms: ["本不必做但做了", "You needn't have waited."] },
      ],
    },
    tenses: [
      {
        name: "must have done",
        nameEn: "must have done: Past Certainty",
        structure: "must have + 过去分词",
        usages: [
          { label: "一定走了", example: "He <strong>must have left</strong>. His bag is gone." },
          { label: "一定忘了", example: "She <strong>must have forgotten</strong> about the meeting." },
          { label: "一定下雨了", example: "It <strong>must have rained</strong> last night. The ground is wet." },
        ],
        timeWords: "有证据支持",
      },
      {
        name: "may have done",
        nameEn: "may have done: Past Possibility",
        structure: "may have + 过去分词",
        usages: [
          { label: "可能走了", example: "He <strong>may have left</strong>. I'm not sure." },
          { label: "可能忘了", example: "She <strong>may have forgotten</strong> about the meeting." },
        ],
        timeWords: "",
      },
      {
        name: "might have done",
        nameEn: "might have done: Past Possibility",
        structure: "might have + 过去分词",
        usages: [
          { label: "也许走了", example: "He <strong>might have gone</strong> home." },
          { label: "也许忘了", example: "She <strong>might have forgotten</strong>." },
        ],
        timeWords: "",
      },
      {
        name: "can't have done",
        nameEn: "can't have done: Past Impossibility",
        structure: "can't have + 过去分词",
        usages: [
          { label: "不可能走了", example: "He <strong>can't have left</strong>. His bag is still here." },
          { label: "不可能忘了", example: "She <strong>can't have forgotten</strong>. She wrote it down." },
          { label: "不可能下雨", example: "It <strong>can't have rained</strong>. The ground is dry." },
        ],
        timeWords: "有证据支持否定",
      },
      {
        name: "should have done",
        nameEn: "should have done: Past Regret",
        structure: "should have + 过去分词",
        usages: [
          { label: "应该告诉（但没说）", example: "You <strong>should have told</strong> me." },
          { label: "应该学习（但没学）", example: "She <strong>should have studied</strong> harder." },
          { label: "不应该告诉（但说了）", example: "You <strong>shouldn't have told</strong> him." },
        ],
        timeWords: "",
      },
      {
        name: "needn't have done",
        nameEn: "needn't have done: Unnecessary Past Action",
        structure: "needn't have + 过去分词",
        usages: [
          { label: "本不必等（但等了）", example: "You <strong>needn't have waited</strong> for me." },
          { label: "本不必买（但买了）", example: "I <strong>needn't have bought</strong> this book." },
        ],
        timeWords: "做了但不必做",
      },
      {
        name: "could have done",
        nameEn: "could have done: Past Possibility/Regret",
        structure: "could have + 过去分词",
        usages: [
          { label: "本可以帮助（但没帮）", example: "I <strong>could have helped</strong> you, but I didn't know." },
          { label: "本可以通过（但没过）", example: "She <strong>could have passed</strong> if she had studied." },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "混淆must have done和can't have done",
        wrong: "He <strong>mustn't have left</strong> yet.",
        correct: "He <strong>can't have left</strong> yet.",
        reason: "must表示推测时，否定用can't have done。",
      },
      {
        title: "should have done的时态",
        wrong: "You <strong>should told</strong> me.",
        correct: "You <strong>should have told</strong> me.",
        reason: "should have + 过去分词，不能省略have。",
      },
      {
        title: "混淆needn't have done和didn't need to",
        wrong: "I <strong>needn't have gone</strong> yesterday, so I stayed home.",
        correct: "I <strong>didn't need to</strong> go yesterday, so I stayed home.",
        reason: "needn't have done = 做了但不必做；didn't need to = 不必做（通常没做）。",
      },
      {
        title: "过去推测用现在时",
        wrong: "He <strong>must leave</strong> yesterday.",
        correct: "He <strong>must have left</strong> yesterday.",
        reason: "对过去的推测用情态动词 + have + 过去分词。",
      },
    ],
    keyQuestions: [
      "是对过去的推测还是评价？",
      "是肯定还是否定？",
      "做了还是没做？（should have done vs needn't have done）",
    ],
    stateVerbs: {
      categories: [
        { label: "过去肯定推测", verbs: ["must have left", "must have forgotten", "must have arrived"] },
        { label: "过去不确定推测", verbs: ["may have gone", "might have forgotten", "could have arrived"] },
        { label: "过去否定推测", verbs: ["can't have left", "can't have forgotten", "can't have said"] },
        { label: "过去评价", verbs: ["should have told", "shouldn't have eaten", "needn't have waited"] },
      ],
      example: {
        wrong: "He <strong>mustn't have left</strong>.",
        correct: "He <strong>can't have left</strong>.",
        note: "过去否定推测用can't have done，不用mustn't have done。",
      },
    },
  },
  practice: [
    {
      title: "选择合适的情态动词",
      titleEn: "Choose the Right Modal",
      type: "fill",
      items: [
        { question: "The ground is wet. It ______ rained last night. (非常确定)", answer: "must have" },
        { question: "I'm not sure. He ______ left already. (不太确定)", answer: "may have / might have / could have" },
        { question: "His bag is here. He ______ left yet. (非常确定否定)", answer: "can't have" },
        { question: "She didn't study. She ______ passed the exam. (非常确定否定)", answer: "can't have" },
        { question: "I don't know. She ______ forgotten. (不太确定)", answer: "may have / might have / could have" },
      ],
    },
    {
      title: "should have done练习",
      titleEn: "should have done Practice",
      type: "fill",
      items: [
        { question: "You ______ (tell) me about the party. (但你没告诉)", answer: "should have told" },
        { question: "I ______ (eat) so much. (但我吃了)", answer: "shouldn't have eaten" },
        { question: "She ______ (study) harder. (但她没有)", answer: "should have studied" },
        { question: "He ______ (be) more careful. (但他没有)", answer: "should have been" },
        { question: "They ______ (leave) so early. (但他们离开了)", answer: "shouldn't have left" },
      ],
    },
    {
      title: "改错",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "He mustn't have left yet.", answer: "He <strong>can't have</strong> left yet.（否定推测用can't have done）" },
        { question: "You should told me.", answer: "You <strong>should have told</strong> me.（不能省略have）" },
        { question: "She must have forget about the meeting.", answer: "She must have <strong>forgotten</strong> about the meeting.（用过去分词）" },
        { question: "I needn't have go yesterday, so I stayed home.", answer: "I <strong>didn't need to</strong> go yesterday, so I stayed home.（不必做且没做用didn't need to）" },
        { question: "He can have said that.", answer: "He <strong>can't have</strong> said that.（否定推测用can't have done）" },
      ],
    },
  ],
  production: [
    {
      title: "推测过去事件",
      titleEn: "Deduce Past Events",
      description: "根据以下证据，对过去的事情进行推测。每个证据给出2种推测。",
      example: [
        "证据：地上是湿的 → It <strong>must have rained</strong> last night.",
        "证据：他的包还在这儿 → He <strong>can't have left</strong> yet.",
        "证据：她看起来很高兴 → She <strong>must have received</strong> good news.",
      ],
    },
    {
      title: "后悔和责备",
      titleEn: "Regret & Blame",
      description: "用should have done描述你后悔或责备的事情。3件后悔没做的 + 2件不该做的。",
      example: [
        "I <strong>should have studied</strong> harder in college.",
        "You <strong>should have told</strong> me earlier.",
        "I <strong>shouldn't have eaten</strong> so much last night.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "结构",
        items: ["情态动词 + have + 过去分词", "用于对过去事情的推测或评价"],
      },
      {
        title: "过去推测",
        items: ["must have done：一定做了（肯定）", "may/might/could have done：可能做了（不确定）", "can't have done：不可能做了（否定）"],
      },
      {
        title: "过去评价",
        items: ["should have done：应该做但没做", "shouldn't have done：不应该做但做了", "needn't have done：本不必做但做了"],
      },
      {
        title: "易混淆点",
        items: ["否定推测用can't have done，不用mustn't have done", "needn't have done（做了）vs didn't need to（没做）"],
      },
    ],
    mindMap: `推测与可能性（过去）
├── 过去推测
│   ├── must have done：一定做了
│   ├── may have done：可能做了
│   ├── might have done：也许做了
│   ├── could have done：可能做了
│   └── can't have done：不可能做了
├── 过去评价
│   ├── should have done：应该做但没做
│   ├── shouldn't have done：不应该做但做了
│   └── needn't have done：本不必做但做了
└── 注意事项
    ├── 否定推测：can't have done
    ├── should have不能省略have
    └── needn't have done ≠ didn't need to`,
    selfTest: [
      {
        question: "The ground is wet. It ______ rained last night.",
        options: ["must have", "may have", "can't have"],
        answer: "must have",
      },
      {
        question: "His bag is here. He ______ left yet.",
        options: ["must have", "may have", "can't have"],
        answer: "can't have",
      },
      {
        question: "You ______ told me about the party. (但你没告诉)",
        options: ["should have", "shouldn't have", "must have"],
        answer: "should have",
      },
      {
        question: "I ______ eaten so much. (但我吃了)",
        options: ["should have", "shouldn't have", "must have"],
        answer: "shouldn't have",
      },
      {
        question: "You ______ waited for me. (你本不必等)",
        options: ["should have", "shouldn't have", "needn't have"],
        answer: "needn't have",
      },
    ],
  },
};

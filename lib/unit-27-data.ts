import { UnitData } from "./unit-01-data";

export const unit27Data: UnitData = {
  info: {
    id: "unit-27",
    moduleId: "04",
    number: 27,
    title: "间接引语基础（转述陈述句）",
    titleEn: "Reported Speech Basics",
  },
  objectives: [
    "理解直接引语与间接引语的区别：直接引语保留原话，间接引语转述内容",
    "掌握间接引语中人称、时态的变化规则（时态后退原则）",
    "掌握时间状语和地点状语的相应变化",
    "能够将陈述句准确转换为间接引语",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        'Tom said, "I am busy now."',
        "→ Tom said he was busy then.",
        "为什么转述别人的话时，时态需要往后退一步？",
      ],
      answer:
        '因为说话的时间点变了。Tom说"I am busy"的时候是现在，但你转述时已经不是"现在"了，所以时态要后退，体现时间的推移。',
    },
    comparison: {
      chinese: [
        { text: 'Tom说："我很忙。"', note: "直接引语——原封不动引用原话" },
        { text: "Tom说他很忙。", note: "间接引语——转述内容，人称和时态发生变化" },
      ],
      english: [
        { text: 'Tom said, "I am busy."', note: "Direct speech — original words in quotes" },
        {
          text: "Tom said (that) he was busy.",
          note: "Reported speech — no quotes, tense backshifted",
        },
      ],
      conclusion:
        "间接引语的核心变化：去掉引号 → 人称变化 → 时态后退 → 时间/地点状语调整",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "去掉引号",
          description:
            "直接引语用引号保留原话，间接引语用 that 引导（可省略），不再使用引号",
          example: 'He said, "I like it." → He said (that) he liked it.',
        },
        {
          label: "人称变化",
          description:
            "根据转述者的视角，将第一、第二人称改为第三人称（或根据语境调整）",
          example: 'She said, "I will help you." → She said she would help me.',
        },
        {
          label: "时态后退（Backshift）",
          description:
            "间接引语的时态要比直接引语后退一步，体现时间推移",
          example:
            'He said, "I am tired." → He said (that) he was tired.',
        },
      ],
      aspect: [
        {
          label: "say vs tell",
          description:
            "say 后面不直接接人（said that...），tell 后面必须接人（told me that...）",
          focus: 'He said that... / He told me that...（不能说 He said me）',
        },
        {
          label: "that 可省略",
          description:
            "在非正式语境中，引导词 that 通常可以省略",
          focus: 'He said (that) he was tired.',
        },
        {
          label: "universal truths 不后退",
          description:
            "当转述的内容是客观真理、科学事实时，时态不需要后退",
          focus: 'The teacher said, "The Earth is round." → The teacher said the Earth is round.',
        },
      ],
    },
    matrix: {
      headers: ["直接引语", "间接引语", "变化规则"],
      rows: [
        { time: "一般现在时", forms: ["一般过去时", "do/does → did"] },
        { time: "现在进行时", forms: ["过去进行时", "am/is/are doing → was/were doing"] },
        { time: "一般过去时", forms: ["过去完成时", "did → had done"] },
        { time: "现在完成时", forms: ["过去完成时", "have/has done → had done"] },
        { time: "will", forms: ["would", "will do → would do"] },
        { time: "can", forms: ["could", "can do → could do"] },
      ],
    },
    tenses: [
      {
        name: "人称变化规则",
        nameEn: "Person Change Rules",
        structure: "根据转述者视角调整人称代词",
        usages: [
          {
            label: "第一人称 → 第三人称",
            example: 'She said, "I like music." → She said she liked music.',
          },
          {
            label: "第二人称 → 第一/三人称",
            example:
              'He said to me, "You are right." → He told me (that) I was right.',
          },
          {
            label: "物主代词同步变化",
            example:
              'Tom said, "My car is new." → Tom said his car was new.',
          },
        ],
        timeWords: "",
      },
      {
        name: "时态后退规则",
        nameEn: "Tense Backshift Rules",
        structure: "直接引语时态 → 后退一步的时态",
        usages: [
          {
            label: "一般现在 → 一般过去",
            example:
              'He said, "I work here." → He said he worked there.',
          },
          {
            label: "现在进行 → 过去进行",
            example:
              'She said, "I am studying." → She said she was studying.',
          },
          {
            label: "一般过去/现在完成 → 过去完成",
            example:
              'He said, "I finished / have finished." → He said he had finished.',
          },
          {
            label: "will → would / can → could",
            example:
              'She said, "I will come." → She said she would come.',
          },
        ],
        timeWords: "",
      },
      {
        name: "时间状语变化",
        nameEn: "Time Adverb Changes",
        structure: "now → then, today → that day, yesterday → the day before, tomorrow → the next day",
        usages: [
          {
            label: "now → then",
            example: 'He said, "I am busy now." → He said he was busy then.',
          },
          {
            label: "today → that day",
            example:
              'She said, "I will go today." → She said she would go that day.',
          },
          {
            label: "yesterday → the day before",
            example:
              'He said, "I left yesterday." → He said he had left the day before.',
          },
          {
            label: "tomorrow → the next/following day",
            example:
              'She said, "I will come tomorrow." → She said she would come the next day.',
          },
        ],
        timeWords: "now, today, yesterday, tomorrow, last week, next month, ago, this → that",
      },
      {
        name: "地点状语变化",
        nameEn: "Place Adverb Changes",
        structure: "here → there, this → that",
        usages: [
          {
            label: "here → there",
            example:
              'He said, "I live here." → He said he lived there.',
          },
          {
            label: "this → that",
            example:
              'She said, "I want this one." → She said she wanted that one.',
          },
        ],
        timeWords: "here, this",
      },
      {
        name: "say vs tell 区别",
        nameEn: "Say vs Tell",
        structure: "say + that从句（不直接接人） / tell + 人 + that从句",
        usages: [
          {
            label: "say：不直接接人作宾语",
            example: 'He said that he was tired. ✓ / He said me that... ✗',
          },
          {
            label: "tell：必须接人作宾语",
            example: 'He told me that he was tired. ✓ / He told that... ✗',
          },
          {
            label: "常见搭配",
            example:
              "tell the truth / tell a lie / tell a story / tell the time（固定搭配用 tell）",
          },
        ],
        timeWords: "",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "忘记时态后退",
        wrong: "He said that he is happy.",
        correct: "He said that he was happy.",
        reason:
          "转述过去说过的话，is 应后退为 was。直接引语是现在时，间接引语必须后退为过去时。",
      },
      {
        title: "say 后面误接人",
        wrong: "She said me that she was busy.",
        correct: "She told me that she was busy.",
        reason:
          "say 不能直接接人作宾语。如果要指明对象，必须用 tell + 人。",
      },
      {
        title: "过去时 + yesterday 重复",
        wrong: 'He said, "I have finished yesterday."（原话就错）',
        correct:
          'He said he had finished the day before.（现在完成 → 过去完成，yesterday → the day before）',
        reason:
          "yesterday 不能与现在完成时连用（原话错误），转述时过去完成时 + the day before 才正确。",
      },
    ],
    keyQuestions: [
      '何时需要时态后退？——当转述发生在原话之后，且原话的时间对转述者来说已是"过去"时',
      "什么情况下时态不变？——客观真理、科学事实、习惯性动作（如果现在仍然如此）",
      "时间/地点状语怎么处理？——根据转述的时间和地点做相应调整（now→then, here→there 等）",
    ],
    stateVerbs: {
      categories: [
        {
          label: "客观真理（Universal Truths）——不后退",
          verbs: [
            'The teacher said, "Water boils at 100°C." → The teacher said water boils at 100°C.',
          ],
        },
        {
          label: "仍然有效的事实——可不后退",
          verbs: [
            'She said, "I have two brothers." → She said she has two brothers.（如果她现在仍然有两个兄弟）',
          ],
        },
        {
          label: "过去的状态——需要后退",
          verbs: [
            'He said, "I live in Beijing." → He said he lived in Beijing.（如果他当时住在北京）',
          ],
        },
      ],
      example: {
        wrong: 'The scientist said that the Earth was flat.',
        correct: 'The scientist said that the Earth is round.',
        note:
          "客观真理永远用一般现在时，即使转述发生在过去。这是间接引语中时态后退规则的重要例外。",
      },
    },
  },
  practice: [
    {
      title: "时态后退练习",
      titleEn: "Tense Backshift Practice",
      type: "fill",
      items: [
        {
          question: 'He said, "I am tired." → He said he _____ tired.',
          answer: "was",
        },
        {
          question:
            'She said, "I have been to Paris." → She said she _____ been to Paris.',
          answer: "had",
        },
        {
          question:
            'They said, "We will help." → They said they _____ help.',
          answer: "would",
        },
        {
          question:
            'Tom said, "I can swim." → Tom said he _____ swim.',
          answer: "could",
        },
        {
          question:
            'She said, "I was cooking." → She said she _____ cooking.',
          answer: "had been",
        },
      ],
    },
    {
      title: "时间/地点状语变化练习",
      titleEn: "Time/Place Adverb Changes",
      type: "fill",
      items: [
        {
          question:
            'He said, "I will come tomorrow." → He said he would come _____.',
          answer: "the next day",
        },
        {
          question:
            'She said, "I am here now." → She said she was _____ _____.',
          answer: "there then",
        },
        {
          question:
            'He said, "I left yesterday." → He said he had left _____.',
          answer: "the day before",
        },
        {
          question:
            'She said, "I will go today." → She said she would go _____.',
          answer: "that day",
        },
        {
          question:
            'He said, "I like this city." → He said he liked _____ city.',
          answer: "that",
        },
      ],
    },
    {
      title: "综合转换练习",
      titleEn: "Comprehensive Conversion",
      type: "fill",
      items: [
        {
          question:
            'Tom said, "I am reading a book now." → Tom said he _____ _____ a book _____.',
          answer: "was reading, then",
        },
        {
          question:
            'Mary said to me, "I have finished my homework." → Mary told me she _____ _____ her homework.',
          answer: "had finished",
        },
        {
          question:
            'The boy said, "I can\'t find my keys here." → The boy said he _____ find his keys _____.',
          answer: "couldn't, there",
        },
        {
          question:
            'She said, "I will visit my parents tomorrow." → She said she _____ _____ her parents _____.',
          answer: "would visit, the next day",
        },
        {
          question:
            'He said, "I went to the park yesterday." → He said he _____ _____ to the park _____.',
          answer: "had gone, the day before",
        },
      ],
    },
  ],
  production: [
    {
      title: "新闻标题转述",
      titleEn: "News Headline Conversion",
      description:
        "将以下新闻标题中的直接引语转换为间接引语，练习新闻报道中的转述方式",
      example: [
        '原句：President Biden said, "We will protect our democracy."',
        '转述：President Biden said that they would protect their democracy.',
        '原句：The CEO announced, "Our company has reached a new milestone."',
        '转述：The CEO announced that their company had reached a new milestone.',
        '原句：The doctor warned, "People should exercise more now."',
        '转述：The doctor warned that people should exercise more then.（注意：should 不变）',
      ],
    },
    {
      title: "转述一段对话",
      titleEn: "Reporting a Conversation",
      description:
        "你的朋友 Alice 昨天对你说了一段话，请你今天转述给另一位朋友 Bob",
      example: [
        'Alice 原话：',
        '"I am feeling sick today. I went to the hospital yesterday. The doctor told me I should rest. I will stay home tomorrow."',
        "",
        "你转述给 Bob：",
        "Alice said she was feeling sick that day. She said she had gone to the hospital the day before. She said the doctor had told her she should rest. She said she would stay home the next day.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "间接引语核心变化",
        items: [
          "去掉引号，用 that 引导（可省略）",
          "人称根据转述者视角调整",
          "时态后退一步（Backshift）",
          "时间/地点状语相应变化",
        ],
      },
      {
        title: "时态后退速记",
        items: [
          "现在 → 过去（am/is → was, do → did）",
          "进行 → 过去进行（am doing → was doing）",
          "过去/完成 → 过去完成（did/have done → had done）",
          "will → would, can → could",
        ],
      },
      {
        title: "特殊情况",
        items: [
          "客观真理不后退（The Earth is round.）",
          "say 不接人，tell 必须接人",
          "should, might, ought to 等情态动词不变",
        ],
      },
    ],
    mindMap: `
间接引语（Reported Speech）
├── 核心变化
│   ├── 去引号 + that
│   ├── 人称变化
│   ├── 时态后退
│   └── 状语变化
├── 时态后退规则
│   ├── 现在 → 过去
│   ├── 进行 → 过去进行
│   ├── 过去/完成 → 过去完成
│   └── will→would, can→could
├── 状语变化
│   ├── 时间：now→then, today→that day
│   │        yesterday→the day before
│   │        tomorrow→the next day
│   └── 地点：here→there, this→that
├── say vs tell
│   ├── say + that（不接人）
│   └── tell + 人 + that
└── 例外
    ├── 客观真理不后退
    └── 仍然有效的事实可不后退
    `,
    selfTest: [
      {
        question:
          'She said, "I am learning English." → She said she _____ English.',
        options: ["is learning", "was learning", "had learning", "learned"],
        answer: "was learning",
      },
      {
        question: 'Choose the correct form: He _____ me that he was busy.',
        options: ["said", "told", "spoke", "talked"],
        answer: "told",
      },
      {
        question:
          'The teacher said, "Light travels faster than sound." → The teacher said light _____ faster than sound.',
        options: ["traveled", "had traveled", "travels", "would travel"],
        answer: "travels（客观真理不后退）",
      },
    ],
  },
};

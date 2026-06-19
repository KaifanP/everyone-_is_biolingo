import type { UnitData } from "./unit-01-data";

export const unit30Data: UnitData = {
  info: {
    id: "unit-30",
    moduleId: "05",
    number: 30,
    title: "不定式基础",
    titleEn: "Infinitive Basics",
  },
  objectives: [
    "理解不定式的基本形式（to do / 省略 to 的不定式）",
    "掌握不定式作主语、宾语、宾补、定语、状语的功能",
    "熟悉常见接不定式的动词",
    "了解不定式的时态与语态变化",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "为什么有些动词后面接 to do，而另一些接 doing？",
        "\"I want to go\" 和 \"I enjoy going\" 有什么区别？",
      ],
      answer:
        "不同的动词对后面的动词形式有不同的要求，这是英语语法中的固定搭配。不定式（to do）常表示目的、意图或将来，动名词（doing）常表示习惯或已发生的动作。",
    },
    comparison: {
      chinese: [
        { text: "我想去公园。", note: "\"想\" 后面用不定式表示意图" },
        { text: "我喜欢游泳。", note: "\"喜欢\" 后面用动名词表示习惯" },
      ],
      english: [
        { text: "I want to go to the park.", note: "want + to do" },
        { text: "I enjoy swimming.", note: "enjoy + doing" },
      ],
      conclusion:
        "不定式（to do）和动名词（doing）在句中承担不同的语法功能，取决于前面动词的类型。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "基本形式",
          description: "不定式 = to + 动词原形，是动词的非谓语形式之一",
          example: "I want to learn English.",
        },
        {
          label: "省略 to 的不定式",
          description:
            "在 let / make / help / see / hear / watch 等动词后，不定式省略 to",
          example: "She made me laugh.",
        },
        {
          label: "否定形式",
          description: "不定式的否定式为 not to do",
          example: "I decided not to go.",
        },
      ],
      aspect: [
        {
          label: "作主语",
          description: "不定式可以充当句子的主语，常用 it 作形式主语",
          focus: "To learn English is important. / It is important to learn English.",
        },
        {
          label: "作宾语",
          description: "不定式可以跟在某些动词后面作宾语",
          focus: "I want to go.",
        },
        {
          label: "作宾语补足语",
          description: "不定式可以补充说明宾语的动作",
          focus: "I want you to help me.",
        },
        {
          label: "作定语",
          description: "不定式可以修饰名词，放在名词后面",
          focus: "I have a lot of work to do.",
        },
        {
          label: "作状语",
          description: "不定式可以表示目的、原因、结果等",
          focus: "He came here to study English.",
        },
      ],
    },
    matrix: {
      headers: ["功能", "例句", "说明"],
      rows: [
        {
          time: "作主语",
          forms: [
            "To learn English is important.",
            "It is important to learn English.",
            "常用 it 作形式主语，避免头重脚轻",
          ],
        },
        {
          time: "作宾语",
          forms: [
            "I want to go.",
            "She decided to stay.",
            "常见动词：want / hope / decide / plan / agree",
          ],
        },
        {
          time: "作宾补",
          forms: [
            "I want you to help me.",
            "The teacher asked us to be quiet.",
            "宾语 + 不定式构成复合宾语",
          ],
        },
        {
          time: "作定语",
          forms: [
            "I have a lot of work to do.",
            "She is the first person to arrive.",
            "不定式放在被修饰的名词之后",
          ],
        },
        {
          time: "作状语",
          forms: [
            "He came here to study English.",
            "I am glad to see you.",
            "表示目的、原因、结果等",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "不定式的基本形式",
        nameEn: "Basic Infinitive: to do",
        structure: "to + 动词原形",
        usages: [
          { label: "一般式", example: "I want to go home." },
          { label: "表示将来或意图", example: "She plans to travel next month." },
        ],
        timeWords: "常与 want / hope / decide / plan / agree 等动词连用",
      },
      {
        name: "省略 to 的不定式",
        nameEn: "Bare Infinitive",
        structure: "动词原形（省略 to）",
        usages: [
          { label: "let / make + 宾语 + do", example: "She made me laugh." },
          { label: "see / hear / watch + 宾语 + do", example: "I saw him leave." },
          { label: "help + 宾语 + (to) do", example: "She helped me (to) carry the box." },
        ],
        timeWords: "感官动词和使役动词后常省略 to",
      },
      {
        name: "不定式的时态",
        nameEn: "Infinitive Tenses",
        structure: "to do / to have done / to be doing",
        usages: [
          { label: "一般式 to do", example: "I want to go." },
          { label: "完成式 to have done", example: "He seems to have finished the work." },
          { label: "进行式 to be doing", example: "He seems to be sleeping." },
        ],
        timeWords: "完成式表示动作发生在谓语动词之前",
      },
      {
        name: "被动语态中还原 to",
        nameEn: "Passive Voice: to restored",
        structure: "be made / seen / heard + to do",
        usages: [
          { label: "主动：省略 to", example: "She made him work hard." },
          { label: "被动：还原 to", example: "He was made to work hard." },
          { label: "感官动词被动", example: "He was seen to enter the building." },
        ],
        timeWords: "被动语态中，感官动词和使役动词后的 to 需要还原",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "漏掉 to",
        wrong: "I want go home.",
        correct: "I want to go home.",
        reason: "want 后面必须接 to do，不能直接用动词原形",
      },
      {
        title: "使役动词后多加 to",
        wrong: "She made me to work hard.",
        correct: "She made me work hard.",
        reason: "make 作使役动词时，宾语后的不定式省略 to",
      },
      {
        title: "混淆 to do 和 doing",
        wrong: "I enjoy to play basketball.",
        correct: "I enjoy playing basketball.",
        reason: "enjoy 后面接 doing（动名词），不接 to do",
      },
    ],
    keyQuestions: [
      "哪些动词后面只能接 to do，哪些只能接 doing？",
      "在被动语态中，省略 to 的不定式为什么要还原 to？",
      "不定式作主语和动名词作主语有什么区别？",
      "如何判断不定式在句中充当什么成分？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "接 to do 的常见动词（表示意图、计划、决定等）",
          verbs: [
            "want",
            "hope",
            "decide",
            "plan",
            "agree",
            "refuse",
            "promise",
            "offer",
            "try",
            "manage",
            "learn",
            "seem",
            "appear",
            "expect",
            "wish",
            "afford",
            "choose",
            "pretend",
            "fail",
            "happen",
          ],
        },
      ],
      example: {
        wrong: "I enjoy to play basketball.",
        correct: "I enjoy playing basketball.",
        note: "enjoy / finish / mind / practice / suggest 等动词后接 doing",
      },
    },
  },
  practice: [
    {
      title: "选择 to do 或 doing 填空",
      titleEn: "Choose to do or doing",
      type: "fill",
      items: [
        {
          question: "She wants ______ (become) a doctor.",
          answer: "to become",
        },
        {
          question: "I enjoy ______ (read) books in the evening.",
          answer: "reading",
        },
        {
          question: "They decided ______ (not go) to the party.",
          answer: "not to go",
        },
        {
          question: "He made the children ______ (clean) the room.",
          answer: "clean",
        },
        {
          question: "She promised ______ (help) me with my homework.",
          answer: "to help",
        },
      ],
    },
    {
      title: "用不定式完成句子",
      titleEn: "Complete sentences with infinitive",
      type: "fill",
      items: [
        {
          question: "I went to the library ______ (borrow) some books.",
          answer: "to borrow",
        },
        {
          question: "It is difficult ______ (learn) a new language.",
          answer: "to learn",
        },
        {
          question: "She is the first student ______ (finish) the exam.",
          answer: "to finish",
        },
        {
          question: "I have a lot of homework ______ (do) tonight.",
          answer: "to do",
        },
        {
          question: "We were happy ______ (hear) the good news.",
          answer: "to hear",
        },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error correction",
      type: "errorCorrection",
      items: [
        {
          question: "I want go to the park.",
          answer: "I want to go to the park.（want 后接 to do）",
        },
        {
          question: "She made me to clean the house.",
          answer: "She made me clean the house.（make 后省略 to）",
        },
        {
          question: "He enjoys to play football.",
          answer: "He enjoys playing football.（enjoy 后接 doing）",
        },
      ],
    },
  ],
  production: [
    {
      title: "用不定式描述计划",
      titleEn: "Describe plans with infinitive",
      description: "用不定式描述你下周末的计划，至少包含 5 个不定式。",
      example: [
        "I plan to visit my grandparents.",
        "I hope to go hiking in the mountains.",
        "I want to read a new book.",
        "I need to finish my homework first.",
        "I decided to cook dinner for my family.",
      ],
    },
    {
      title: "用不定式给出建议",
      titleEn: "Give advice with infinitive",
      description: "假设你的朋友想学好英语，用不定式给他/她至少 5 条建议。",
      example: [
        "You need to practice speaking every day.",
        "It is important to read English books.",
        "You should try to watch English movies.",
        "I advise you to find a language partner.",
        "You need to learn to use new words in sentences.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "不定式的基本概念",
        items: [
          "不定式 = to + 动词原形",
          "否定形式：not to do",
          "省略 to 的情况：let / make / see / hear / watch + 宾语 + do",
        ],
      },
      {
        title: "不定式的五大功能",
        items: [
          "作主语：To learn English is important.",
          "作宾语：I want to go.",
          "作宾补：I want you to help me.",
          "作定语：I have work to do.",
          "作状语：He came here to study.",
        ],
      },
      {
        title: "常见搭配动词",
        items: [
          "接 to do：want / hope / decide / plan / agree / refuse / promise / try / manage / learn / seem",
          "接 doing：enjoy / finish / mind / practice / suggest",
          "接宾语 + do：let / make / see / hear / watch",
        ],
      },
      {
        title: "时态与语态",
        items: [
          "一般式 to do：表示与谓语动词同时或之后的动作",
          "完成式 to have done：表示发生在谓语动词之前的动作",
          "被动语态中还原 to：He was made to work hard.",
        ],
      },
    ],
    mindMap: `不定式（to do）
├── 基本形式：to + 动词原形
├── 否定：not to do
├── 省略 to：let / make / see / hear / watch + do
├── 五大功能
│   ├── 作主语
│   ├── 作宾语
│   ├── 作宾补
│   ├── 作定语
│   └── 作状语
├── 常见搭配动词
│   ├── 接 to do：want / hope / decide / plan ...
│   ├── 接 doing：enjoy / finish / mind ...
│   └── 接 do：let / make / see / hear ...
└── 时态与语态
    ├── to do（一般式）
    ├── to have done（完成式）
    └── 被动语态还原 to`,
    selfTest: [
      {
        question: "She asked me ______ the door.",
        options: ["close", "to close", "closing", "closed"],
        answer: "to close",
      },
      {
        question: "I saw him ______ across the street.",
        options: ["to run", "running", "run", "runs"],
        answer: "run",
      },
      {
        question: "He was made ______ for 12 hours a day.",
        options: ["work", "to work", "working", "worked"],
        answer: "to work",
      },
    ],
  },
};

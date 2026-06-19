import { UnitData } from "./unit-01-data";

export const unit40Data: UnitData = {
  info: {
    id: "unit-40",
    moduleId: "07",
    number: 40,
    title: "介词与介词搭配",
    titleEn: "Prepositions & Prepositional Collocations",
  },
  objectives: [
    "掌握常用介词的基本含义和用法",
    "熟练运用动词/形容词/名词 + 介词的固定搭配",
    "掌握常见介词短语的含义和用法",
    "在写作和口语中正确使用介词搭配",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "为什么英语中介词用法这么复杂？",
        "怎样才能记住大量的介词搭配？",
        "为什么说 \u2018interested in\u2019 而不是 \u2018interested on\u2019？",
        "\u2018good at\u2019 和 \u2018good in\u2019 有什么区别？",
      ],
      answer:
        "介词用法复杂是因为介词本身没有固定的中文对应，需要根据搭配和语境来判断。记忆搭配的关键是将介词与其搭配词作为一个整体来记忆，例如\u2018interested in\u2019、\u2018good at\u2019、\u2018depend on\u2019、\u2018look forward to\u2019等，而不是单独记忆介词。",
    },
    comparison: {
      chinese: [
        {
          text: "我对英语感兴趣。",
          note: "\u2018对\u2019对应\u2018in\u2019",
        },
        {
          text: "他擅长数学。",
          note: "\u2018擅长\u2019对应\u2018at\u2019",
        },
        {
          text: "我期待见到你。",
          note: "\u2018期待\u2019对应\u2018look forward to\u2019",
        },
      ],
      english: [
        {
          text: "I am interested in English.",
          note: "interested + in (固定搭配)",
        },
        {
          text: "He is good at math.",
          note: "good + at (固定搭配)",
        },
        {
          text: "I look forward to seeing you.",
          note: "look forward to + doing (to是介词)",
        },
      ],
      conclusion:
        "英语中介词搭配是固定的，不能随意替换。需要将\u201C动词/形容词/名词 + 介词\u201D作为一个整体来记忆，而不是逐词翻译中文。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "介词的本质",
          description:
            "介词表示名词或代词与其他词之间的关系，主要表达时间、地点、方式、原因等。介词不能单独使用，必须与名词、代词或动名词构成介词短语。",
          example: "The book is on the table. (地点关系)",
        },
        {
          label: "动词 + 介词搭配",
          description:
            "许多动词需要与特定介词搭配使用，这些搭配是固定的，不能随意替换。常见的有：look at, listen to, wait for, depend on, believe in, look forward to, pay for, apply for等。",
          example: "I am looking forward to hearing from you.",
        },
        {
          label: "形容词 + 介词搭配",
          description:
            "形容词也需要与特定介词搭配。常见的有：interested in, good at, afraid of, proud of, different from, responsible for, familiar with, tired of等。",
          example: "She is afraid of spiders.",
        },
        {
          label: "名词 + 介词搭配",
          description:
            "名词与介词的搭配同样重要。常见的有：reason for, solution to, interest in, experience in, effect on, influence on等。",
          example: "What is the reason for your absence?",
        },
      ],
      aspect: [
        {
          label: "介词表示时间",
          description: "in用于较长时间段，on用于具体日期，at用于精确时间点",
          focus: "in 2020, on Monday, at 3 o\u2019clock",
        },
        {
          label: "介词表示地点",
          description: "in用于内部，on用于表面，at用于具体地点",
          focus: "in the room, on the table, at school",
        },
        {
          label: "动词 + 介词固定搭配",
          description: "动词与介词的搭配是固定的，需要整体记忆",
          focus: "look at, listen to, wait for, depend on",
        },
        {
          label: "形容词 + 介词固定搭配",
          description: "形容词与介词的搭配同样是固定的",
          focus: "interested in, good at, afraid of, proud of",
        },
      ],
    },
    matrix: {
      headers: ["介词", "基本含义", "例句"],
      rows: [
        {
          time: "in",
          forms: ["里面/时间段", "in the room, in 2020, in the morning"],
        },
        {
          time: "on",
          forms: ["上面/具体日期", "on the table, on Monday, on July 4th"],
        },
        {
          time: "at",
          forms: ["地点/精确时间", "at school, at 3 o\u2019clock, at home"],
        },
        {
          time: "by",
          forms: ["通过/到\u2026时", "by bus, by then, by the window"],
        },
        {
          time: "with",
          forms: ["和/用", "with friends, with a pen, with pleasure"],
        },
        {
          time: "for",
          forms: ["为了/持续", "for you, for two hours, for example"],
        },
        {
          time: "from",
          forms: ["从/来自", "from China, from now on, far from"],
        },
        {
          time: "to",
          forms: ["到/向", "to school, to the point, look forward to"],
        },
      ],
    },
    tenses: [
      {
        name: "常用介词含义",
        nameEn: "Common Preposition Meanings",
        structure: "in/on/at/by/with/for/from/to + 名词",
        usages: [
          {
            label: "in 表示在\u2026里面/在\u2026时间段",
            example: "She is in the classroom. / I was born in 1995.",
          },
          {
            label: "on 表示在\u2026上面/在\u2026具体日期",
            example: "The book is on the desk. / We meet on Friday.",
          },
          {
            label: "at 表示在\u2026地点/在\u2026时间点",
            example: "He is at the bus stop. / The class starts at 8 a.m.",
          },
          {
            label: "by 表示通过\u2026方式/到\u2026时为止",
            example: "I go to school by bike. / By then, he had left.",
          },
        ],
        timeWords: "根据时间、地点、方式等语境选择正确的介词",
      },
      {
        name: "动词 + 介词搭配",
        nameEn: "Verb + Preposition Collocations",
        structure: "动词 + 介词 + 宾语",
        usages: [
          {
            label: "look at (看)",
            example: "Look at the blackboard, please.",
          },
          {
            label: "listen to (听)",
            example: "I like listening to music.",
          },
          {
            label: "wait for (等待)",
            example: "I am waiting for the bus.",
          },
          {
            label: "depend on (依靠/取决于)",
            example: "Success depends on hard work.",
          },
          {
            label: "believe in (相信/信仰)",
            example: "I believe in you.",
          },
          {
            label: "look forward to (期待)",
            example: "I look forward to meeting you.",
          },
          {
            label: "pay for (支付)",
            example: "How much did you pay for the book?",
          },
          {
            label: "apply for (申请)",
            example: "I want to apply for the job.",
          },
        ],
        timeWords: "动词搭配中的介词不能随意替换，需整体记忆",
      },
      {
        name: "形容词 + 介词搭配",
        nameEn: "Adjective + Preposition Collocations",
        structure: "be + 形容词 + 介词 + 名词/动名词",
        usages: [
          {
            label: "interested in (对\u2026感兴趣)",
            example: "I am interested in Chinese culture.",
          },
          {
            label: "good at (擅长)",
            example: "She is good at playing the piano.",
          },
          {
            label: "afraid of (害怕)",
            example: "He is afraid of the dark.",
          },
          {
            label: "proud of (为\u2026自豪)",
            example: "We are proud of our country.",
          },
          {
            label: "different from (与\u2026不同)",
            example: "His idea is different from mine.",
          },
          {
            label: "responsible for (对\u2026负责)",
            example: "Who is responsible for this project?",
          },
          {
            label: "familiar with (熟悉)",
            example: "Are you familiar with this software?",
          },
          {
            label: "tired of (厌倦)",
            example: "I am tired of eating the same food.",
          },
        ],
        timeWords: "形容词搭配中的介词同样是固定的，不能随意替换",
      },
      {
        name: "名词 + 介词搭配",
        nameEn: "Noun + Preposition Collocations",
        structure: "名词 + 介词 + 名词",
        usages: [
          {
            label: "reason for (\u2026的原因)",
            example: "What is the reason for being late?",
          },
          {
            label: "solution to (\u2026的解决方案)",
            example: "We need to find a solution to this problem.",
          },
          {
            label: "interest in (对\u2026的兴趣)",
            example: "She has a strong interest in art.",
          },
          {
            label: "experience in (在\u2026方面的经验)",
            example: "He has rich experience in teaching.",
          },
          {
            label: "effect on (对\u2026的影响)",
            example: "The policy has a great effect on the economy.",
          },
          {
            label: "influence on (对\u2026的影响)",
            example: "Parents have a big influence on children.",
          },
        ],
        timeWords: "名词搭配中的介词同样需要整体记忆",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "interested 的介词搭配错误",
        wrong: "I am interested on English.",
        correct: "I am interested in English.",
        reason:
          "\u2018interested\u2019 固定搭配介词 \u2018in\u2019，表示\u2018对\u2026感兴趣\u2019。不能用 \u2018on\u2019 替换。",
      },
      {
        title: "good 的介词搭配错误",
        wrong: "She is good in math.",
        correct: "She is good at math.",
        reason:
          "\u2018good\u2019 固定搭配介词 \u2018at\u2019，表示\u2018擅长\u2026\u2019。不能用 \u2018in\u2019 替换。",
      },
      {
        title: "look forward to 后接动名词错误",
        wrong: "I look forward to see you.",
        correct: "I look forward to seeing you.",
        reason:
          "\u2018look forward to\u2019 中的 \u2018to\u2019 是介词，不是不定式符号，后面必须接动名词（doing），不能接动词原形。",
      },
    ],
    keyQuestions: [
      "如何区分 at/in/on 的时间用法？→ at 用于时间点，on 用于具体日期，in 用于较长时间段",
      "如何区分 at/in/on 的地点用法？→ at 用于具体地点，on 用于表面，in 用于内部",
      "\u2018look forward to\u2019 中的 \u2018to\u2019 为什么接动名词？→ 这里的 \u2018to\u2019 是介词，不是不定式符号",
      "如何记忆大量介词搭配？→ 将搭配作为一个整体记忆，多读多用，形成语感",
    ],
    stateVerbs: {
      categories: [
        {
          label: "时间介词",
          verbs: ["at (时间点)", "on (具体日期)", "in (时间段)", "by (到\u2026时)", "for (持续)", "since (自从)"],
        },
        {
          label: "地点介词",
          verbs: ["at (具体地点)", "on (表面)", "in (内部)", "by (旁边)", "between (之间)", "among (之中)"],
        },
        {
          label: "方式介词",
          verbs: ["by (通过)", "with (用)", "in (用\u2026方式)", "through (通过)"],
        },
        {
          label: "易混淆搭配",
          verbs: ["interested in (非 on)", "good at (非 in)", "look forward to doing (非 do)", "depend on (非 of)"],
        },
      ],
      example: {
        wrong: "I look forward to hear from you.",
        correct: "I look forward to hearing from you.",
        note: "\u2018look forward to\u2019 中的 \u2018to\u2019 是介词，后接动名词 hearing",
      },
    },
  },
  practice: [
    {
      title: "选择正确的介词",
      titleEn: "Choose the Correct Preposition",
      type: "identify",
      items: [
        {
          question: "I am interested ___ Chinese culture. (in / on / at)",
          answer: "in",
        },
        {
          question: "She is good ___ playing the piano. (at / in / on)",
          answer: "at",
        },
        {
          question: "We are looking forward ___ seeing you. (to / for / at)",
          answer: "to",
        },
        {
          question: "The book is ___ the table. (in / on / at)",
          answer: "on",
        },
        {
          question: "He goes to school ___ bus. (by / on / with)",
          answer: "by",
        },
        {
          question: "I was born ___ 2005. (at / on / in)",
          answer: "in",
        },
        {
          question: "The class starts ___ 8 a.m. (at / on / in)",
          answer: "at",
        },
        {
          question: "Success depends ___ hard work. (of / on / in)",
          answer: "on",
        },
      ],
    },
    {
      title: "完成介词搭配",
      titleEn: "Complete the Collocation",
      type: "fill",
      items: [
        {
          question: "I am tired ___ eating the same food every day.",
          answer: "of",
        },
        {
          question: "Who is responsible ___ this project?",
          answer: "for",
        },
        {
          question: "His idea is different ___ mine.",
          answer: "from",
        },
        {
          question: "She has a strong interest ___ art.",
          answer: "in",
        },
        {
          question: "We need to find a solution ___ this problem.",
          answer: "to",
        },
        {
          question: "He is afraid ___ the dark.",
          answer: "of",
        },
        {
          question: "Are you familiar ___ this software?",
          answer: "with",
        },
        {
          question: "The policy has a great effect ___ the economy.",
          answer: "on",
        },
      ],
    },
    {
      title: "改正介词错误",
      titleEn: "Fix the Preposition Errors",
      type: "errorCorrection",
      items: [
        {
          question: "I am interested on learning English.",
          answer: "I am interested in learning English. (on \u2192 in)",
        },
        {
          question: "She is good in math.",
          answer: "She is good at math. (in \u2192 at)",
        },
        {
          question: "I look forward to see you soon.",
          answer: "I look forward to seeing you soon. (see \u2192 seeing)",
        },
        {
          question: "He is afraid about spiders.",
          answer: "He is afraid of spiders. (about \u2192 of)",
        },
        {
          question: "What is the reason of being late?",
          answer: "What is the reason for being late? (of \u2192 for)",
        },
        {
          question: "We meet on 3 o\u2019clock.",
          answer: "We meet at 3 o\u2019clock. (on \u2192 at)",
        },
      ],
    },
  ],
  production: [
    {
      title: "自我介绍中的介词搭配",
      titleEn: "Self-Introduction with Collocations",
      description:
        "用至少 5 个介词搭配写一段自我介绍，包括兴趣爱好、擅长的事情、来自哪里等信息。",
      example: [
        "I am from Beijing, China. I am interested in music and I am good at playing the guitar. I am proud of my family. In my free time, I look forward to traveling to different countries. I believe in the power of education.",
      ],
    },
    {
      title: "描述你的城市",
      titleEn: "Describe Your City with Collocations",
      description:
        "用至少 5 个介词搭配描述你居住的城市，包括位置、特色、你的感受等。",
      example: [
        "I live in a beautiful city in the south of China. The city is famous for its delicious food. I am familiar with every corner of the city. I am proud of its history and culture. The city has a great effect on my life. I look forward to seeing it develop further.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "常用介词含义",
        items: [
          "in: 里面/时间段 (in the room, in 2020)",
          "on: 上面/具体日期 (on the table, on Monday)",
          "at: 地点/时间点 (at school, at 3 o\u2019clock)",
          "by: 通过/到\u2026时 (by bus, by then)",
          "with: 和/用 (with friends, with a pen)",
          "for: 为了/持续 (for you, for two hours)",
          "from: 从/来自 (from China, from now on)",
          "to: 到/向 (to school, look forward to)",
        ],
      },
      {
        title: "动词 + 介词搭配",
        items: [
          "look at (看), listen to (听), wait for (等待)",
          "depend on (依靠), believe in (相信)",
          "look forward to (期待), pay for (支付), apply for (申请)",
        ],
      },
      {
        title: "形容词 + 介词搭配",
        items: [
          "interested in, good at, afraid of, proud of",
          "different from, responsible for, familiar with, tired of",
        ],
      },
      {
        title: "名词 + 介词搭配",
        items: [
          "reason for, solution to, interest in, experience in",
          "effect on, influence on",
        ],
      },
    ],
    mindMap:
      "介词搭配\n" +
      "├── 常用介词\n" +
      "│   ├── in (里面/时间)\n" +
      "│   ├── on (上面/日期)\n" +
      "│   ├── at (地点/时间点)\n" +
      "│   ├── by (通过/到…时)\n" +
      "│   ├── with (和/用)\n" +
      "│   ├── for (为了/持续)\n" +
      "│   ├── from (从/来自)\n" +
      "│   └── to (到/向)\n" +
      "├── 动词+介词 ── look at, listen to, wait for, depend on\n" +
      "├── 形容词+介词 ── interested in, good at, afraid of\n" +
      "└── 名词+介词 ── reason for, solution to, interest in",
    selfTest: [
      {
        question: "Which is correct?",
        options: [
          "A. interested on",
          "B. interested in",
          "C. interested at",
          "D. interested for",
        ],
        answer: "B",
      },
      {
        question: "I look forward to ___ from you.",
        options: ["A. hear", "B. hearing", "C. heard", "D. hears"],
        answer: "B",
      },
      {
        question: "The meeting starts ___ 3 p.m.",
        options: ["A. in", "B. on", "C. at", "D. by"],
        answer: "C",
      },
      {
        question: "She is good ___ solving problems.",
        options: ["A. in", "B. on", "C. for", "D. at"],
        answer: "D",
      },
      {
        question: "What is the solution ___ this problem?",
        options: ["A. of", "B. for", "C. to", "D. on"],
        answer: "C",
      },
    ],
  },
};

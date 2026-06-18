import { UnitData } from "./unit-01-data";

export const unit41Data: UnitData = {
  info: {
    id: "unit-41",
    moduleId: "07",
    number: 41,
    title: "连词与句子连接",
    titleEn: "Conjunctions & Sentence Connection",
  },
  objectives: [
    "掌握并列连词的用法与搭配",
    "掌握从属连词引导各类从句的用法",
    "理解连词在句子连接中的作用",
    "能够使用连词写出复合句",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "What is the difference between coordinating and subordinating conjunctions?",
        "How do conjunctions help connect ideas in a sentence?",
        "Can you use two conjunctions with opposite meanings in one sentence?",
      ],
      answer:
        "并列连词连接对等的词、短语或句子（如and/but/or），从属连词连接主句和从句（如because/when/if）。并列连词不改变句子地位，从属连词使一个句子从属于另一个。不能在同一个句子中同时使用意思相反的连词（如although...but不能连用）。",
    },
    comparison: {
      chinese: [
        { text: "我喜欢茶，他喜欢咖啡。", note: "并列关系，地位对等" },
        { text: "我待在家里，因为下雨了。", note: "主从关系，原因从句" },
        { text: "如果明天不下雨，我们就去公园。", note: "条件从句，表假设" },
      ],
      english: [
        {
          text: "I like tea, and he likes coffee.",
          note: "Coordinating: equal elements joined by \u2018and\u2019",
        },
        {
          text: "I stayed home because it was raining.",
          note: "Subordinating: \u2018because\u2019 introduces a reason clause",
        },
        {
          text: "If it does not rain tomorrow, we will go to the park.",
          note: "Subordinating: \u2018if\u2019 introduces a condition clause",
        },
      ],
      conclusion:
        "并列连词连接对等成分，从属连词连接主从关系。掌握连词的分类和用法是写出流畅复合句的关键。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "并列连词",
          description:
            "并列连词连接对等的词、短语或句子。常见的并列连词有：and（和）、but（但是）、or（或者）、so（所以）、yet（然而）、for（因为）。它们连接的两个部分语法地位相同。",
          example:
            "She sings well, and she dances beautifully.",
        },
        {
          label: "时间从属连词",
          description:
            "时间从属连词引导时间状语从句，表示主句动作发生的时间。常见连词：when（当...时）、while（在...期间）、before（在...之前）、after（在...之后）、until（直到）、since（自从）、as soon as（一...就）。",
          example:
            "When I arrived, the meeting had already started.",
        },
        {
          label: "原因/条件从属连词",
          description:
            "原因从属连词引导原因状语从句：because（因为）、since（既然）、as（由于）。条件从属连词引导条件状语从句：if（如果）、unless（除非）、as long as（只要）。",
          example:
            "Since you are tired, you should rest.",
        },
        {
          label: "让步从属连词",
          description:
            '让步从属连词引导让步状语从句，表示"虽然...但是..."。常见连词：although（虽然）、even though（即使）。注意：although/even though不能与but同时使用。',
          example:
            "Although it was cold, we went outside.",
        },
        {
          label: "目的/结果从属连词",
          description:
            "目的从属连词：so that（以便）。结果从属连词：so...that（如此...以至于）、such...that（如此...以至于）。so修饰形容词/副词，such修饰名词。",
          example:
            "He studied hard so that he could pass the exam.",
        },
      ],
      aspect: [
        {
          label: "并列连词的用法",
          description: "连接对等的词、短语或句子",
          focus: "and/but/or/so/yet/for，注意逗号的使用",
        },
        {
          label: "时间从属连词的用法",
          description: "引导时间状语从句，注意主从句时态搭配",
          focus: "when/while/before/after/until/since/as soon as",
        },
        {
          label: "原因/条件从属连词的用法",
          description: "引导原因或条件状语从句",
          focus: "because/since/as, if/unless/as long as",
        },
        {
          label: "让步从属连词的用法",
          description: "引导让步状语从句，不能与but连用",
          focus: "although/even though，不能与but同时使用",
        },
        {
          label: "目的/结果从属连词的用法",
          description: "引导目的或结果状语从句",
          focus: "so that/so...that/such...that",
        },
      ],
    },
    matrix: {
      headers: ["类型", "连词", "例句"],
      rows: [
        {
          time: "并列连词",
          forms: [
            "and, but, or, so, yet, for",
            "She likes music, but she can\u2019t sing.",
          ],
        },
        {
          time: "时间从属连词",
          forms: [
            "when, while, before, after, until, since, as soon as",
            "As soon as he heard the news, he called me.",
          ],
        },
        {
          time: "原因从属连词",
          forms: [
            "because, since, as",
            "Because it was late, we decided to go home.",
          ],
        },
        {
          time: "条件从属连词",
          forms: [
            "if, unless, as long as",
            "Unless you hurry, you will miss the bus.",
          ],
        },
        {
          time: "让步从属连词",
          forms: [
            "although, even though",
            "Even though he was busy, he helped me.",
          ],
        },
        {
          time: "目的/结果从属连词",
          forms: [
            "so that, so...that, such...that",
            "It was such a good movie that I watched it twice.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "并列连词",
        nameEn: "Coordinating Conjunctions",
        structure: "and / but / or / so / yet / for",
        usages: [
          {
            label: "and（和，并且）",
            example:
              "He is smart and hardworking.",
          },
          {
            label: "but（但是）",
            example:
              "I wanted to go, but I was too tired.",
          },
          {
            label: "or（或者，否则）",
            example:
              "Hurry up, or you will be late.",
          },
          {
            label: "so（所以）",
            example:
              "It rained, so we stayed inside.",
          },
          {
            label: "yet（然而）",
            example:
              "He is rich, yet he is not happy.",
          },
        ],
        timeWords: "用于连接对等的词、短语或句子",
      },
      {
        name: "时间从属连词",
        nameEn: "Time Subordinating Conjunctions",
        structure: "when / while / before / after / until / since / as soon as",
        usages: [
          {
            label: "when（当...时）",
            example:
              "When I was young, I lived in the countryside.",
          },
          {
            label: "while（在...期间）",
            example:
              "While she was reading, the phone rang.",
          },
          {
            label: "before / after",
            example:
              "Before you leave, please close the window.",
          },
          {
            label: "until（直到）",
            example:
              "Wait here until I come back.",
          },
          {
            label: "as soon as（一...就）",
            example:
              "I will call you as soon as I arrive.",
          },
        ],
        timeWords: "主句用将来时，时间从句用一般现在时",
      },
      {
        name: "原因/条件从属连词",
        nameEn: "Reason/Condition Subordinating Conjunctions",
        structure: "because / since / as; if / unless / as long as",
        usages: [
          {
            label: "because（因为）",
            example:
              "I stayed home because it was raining.",
          },
          {
            label: "since / as（既然/由于）",
            example:
            "Since you are tired, you should rest.",
          },
          {
            label: "if（如果）",
            example:
              "If it rains tomorrow, we will cancel the trip.",
          },
          {
            label: "unless（除非）",
            example:
              "Unless you study harder, you will fail the exam.",
          },
          {
            label: "as long as（只要）",
            example:
              "As long as you try your best, I will be proud of you.",
          },
        ],
        timeWords: "条件从句用一般现在时表示将来",
      },
      {
        name: "让步从属连词",
        nameEn: "Concession Subordinating Conjunctions",
        structure: "although / even though",
        usages: [
          {
            label: "although（虽然）",
            example:
              "Although he is young, he is very mature.",
          },
          {
            label: "even though（即使）",
            example:
            "Even though it was raining, we went hiking.",
          },
          {
            label: "注意：不能与but连用",
            example:
              "\u2717 Although it was cold, but we went outside. \u2713 Although it was cold, we went outside.",
          },
        ],
        timeWords: "让步从句不能与but同时使用",
      },
      {
        name: "目的/结果从属连词",
        nameEn: "Purpose/Result Subordinating Conjunctions",
        structure: "so that / so...that / such...that",
        usages: [
          {
            label: "so that（以便）",
            example:
              "He spoke slowly so that everyone could understand.",
          },
          {
            label: "so + adj./adv. + that",
            example:
              "The box was so heavy that I couldn\u2019t lift it.",
          },
          {
            label: "such + noun + that",
            example:
              "It was such a beautiful day that we decided to go out.",
          },
        ],
        timeWords: "so修饰形容词/副词，such修饰名词",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "although...but 不能连用",
        wrong: "Although it was raining, but we still went out.",
        correct: "Although it was raining, we still went out.",
        reason:
          "although和but都表示转折，不能同时使用。选择其中一个即可：Although.../...but...",
      },
      {
        title: "because...so 不能连用",
        wrong: "Because I was tired, so I went to bed early.",
        correct: "Because I was tired, I went to bed early.",
        reason:
          "because和so都表示原因，不能同时使用。选择其中一个即可：Because.../...so...",
      },
      {
        title: "条件从句用将来时（误）",
        wrong: "If it will not rain tomorrow, we will go hiking.",
        correct: "If it does not rain tomorrow, we will go hiking.",
        reason:
          "在条件状语从句中，用一般现在时表示将来，不能用will。这是英语语法的重要规则。",
      },
      {
        title: "because / since / as 的区别",
        wrong: "As I love you, I will always be there for you. (用于强调原因)",
        correct: "Because I love you, I will always be there for you.",
        reason:
          "because语气最强，用于直接原因和强调；since表示已知原因；as表示显而易见的原因。表达强烈感情用because。",
      },
    ],
    keyQuestions: [
      "并列连词和从属连词的区别？→ 并列连词连接对等成分，从属连词连接主从关系",
      "although和but能否同时使用？→ 不能，选择其中一个",
      "条件从句用什么时态？→ 一般现在时表示将来",
      "because / since / as 如何区分？→ because最强，since已知，as显而易见",
      "so...that 和 such...that 的区别？→ so修饰形容词/副词，such修饰名词",
    ],
    stateVerbs: {
      categories: [
        {
          label: "并列连词",
          verbs: ["and", "but", "or", "so", "yet", "for", "both...and", "not only...but also", "either...or", "neither...nor"],
        },
        {
          label: "时间从属连词",
          verbs: ["when", "while", "before", "after", "until", "since", "as soon as", "by the time"],
        },
        {
          label: "原因/条件从属连词",
          verbs: ["because", "since", "as", "if", "unless", "as long as", "provided that"],
        },
        {
          label: "让步从属连词",
          verbs: ["although", "even though", "while"],
        },
        {
          label: "目的/结果从属连词",
          verbs: ["so that", "so...that", "such...that", "in order that"],
        },
      ],
      example: {
        wrong: "Because he was late, so we missed the train.",
        correct: "Because he was late, we missed the train.",
        note: "because和so不能同时使用，选择其中一个",
      },
    },
  },
  practice: [
    {
      title: "选择正确的连词",
      titleEn: "Choose the Correct Conjunction",
      type: "identify",
      items: [
        {
          question: "I like tea ___ she likes coffee. (and/but/so)",
          answer: "but",
        },
        {
          question: "___ it was raining, we stayed inside. (Because/Although/So)",
          answer: "Because",
        },
        {
          question: "He will pass the exam ___ he studies hard. (if/but/although)",
          answer: "if",
        },
        {
          question: "___ she is young, she is very responsible. (Because/Although/So)",
          answer: "Although",
        },
        {
          question: "Hurry up, ___ you will miss the bus. (and/or/but)",
          answer: "or",
        },
      ],
    },
    {
      title: "用连词连接句子",
      titleEn: "Connect Sentences with Conjunctions",
      type: "fill",
      items: [
        {
          question: "He was tired. He continued working. (用although连接)",
          answer: "Although he was tired, he continued working.",
        },
        {
          question: "She studied hard. She passed the exam. (用so连接)",
          answer: "She studied hard, so she passed the exam.",
        },
        {
          question: "It rained heavily. We went to school. (用although连接)",
          answer: "Although it rained heavily, we went to school.",
        },
        {
          question: "You don\u2019t hurry. You will be late. (用unless连接)",
          answer: "Unless you hurry, you will be late.",
        },
        {
          question: "He spoke slowly. Everyone could understand. (用so that连接)",
          answer: "He spoke slowly so that everyone could understand.",
        },
      ],
    },
    {
      title: "改正连词使用错误",
      titleEn: "Fix Conjunction Errors",
      type: "errorCorrection",
      items: [
        {
          question: "Although it was cold, but we went outside.",
          answer: "Although it was cold, we went outside. (去掉but)",
        },
        {
          question: "Because I was tired, so I went to bed early.",
          answer: "Because I was tired, I went to bed early. (去掉so)",
        },
        {
          question: "If it will rain tomorrow, we will cancel the trip.",
          answer: "If it rains tomorrow, we will cancel the trip. (will rain \u2192 rains)",
        },
        {
          question: "The movie was so interesting that I watched it twice. (判断正误)",
          answer: "正确。so + adj. + that 结构正确。",
        },
        {
          question: "He is such tall that he can touch the ceiling.",
          answer: "He is so tall that he can touch the ceiling. (such \u2192 so，tall是形容词)",
        },
      ],
    },
  ],
  production: [
    {
      title: "用连词写复合句",
      titleEn: "Write Compound Sentences",
      description:
        "用所给的连词写出复合句，要求使用不同类型的连词（并列连词、时间从属连词、原因从属连词、让步从属连词）。",
      example: [
        "I wanted to go to the party, but I had too much homework.",
        "When I got home, my mother was cooking dinner.",
        "Because it was raining, we decided to stay indoors.",
        "Although he is young, he is very mature for his age.",
      ],
    },
    {
      title: "用连词写段落",
      titleEn: "Write a Paragraph with Conjunctions",
      description:
        "写一段话描述你的一天，要求至少使用5个不同类型的连词（并列连词、时间连词、原因连词、条件连词、让步连词）。",
      example: [
        "I woke up early this morning because I had an important meeting. Although I was tired, I got dressed quickly and had breakfast. As soon as I arrived at the office, my boss called me. If I finish my work early, I will go to the gym. I like my job, but sometimes it is very stressful.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "并列连词要点",
        items: [
          "连接对等的词、短语或句子",
          "常见连词：and, but, or, so, yet, for",
          "注意逗号的使用规则",
        ],
      },
      {
        title: "从属连词要点",
        items: [
          "时间：when, while, before, after, until, since, as soon as",
          "原因：because, since, as",
          "条件：if, unless, as long as",
          "让步：although, even though",
          "目的/结果：so that, so...that, such...that",
        ],
      },
      {
        title: "常见错误",
        items: [
          "although...but 不能连用",
          "because...so 不能连用",
          "条件从句用一般现在时表示将来",
          "because语气最强，since已知原因，as显而易见原因",
        ],
      },
      {
        title: "写作应用",
        items: [
          "使用连词使文章逻辑更清晰",
          "避免连词重复，多样化表达",
          "注意并列连词和从属连词的搭配使用",
        ],
      },
    ],
    mindMap:
      "连词与句子连接 ─┬── 并列连词 ── and/but/or/so/yet/for ── 连接对等成分\n" +
      "              ├── 时间从属连词 ── when/while/before/after/until/since/as soon as\n" +
      "              ├── 原因从属连词 ── because/since/as\n" +
      "              ├── 条件从属连词 ── if/unless/as long as\n" +
      "              ├── 让步从属连词 ── although/even though（不与but连用）\n" +
      "              └── 目的/结果从属连词 ── so that/so...that/such...that",
    selfTest: [
      {
        question: "___ he was tired, he continued working. (选择正确连词)",
        options: [
          "A. Although",
          "B. But",
          "C. Because",
          "D. So",
        ],
        answer: "A",
      },
      {
        question: "If it ___ (rain) tomorrow, we will stay at home.",
        options: [
          "A. will rain",
          "B. rains",
          "C. rained",
          "D. raining",
        ],
        answer: "B",
      },
      {
        question: "Which sentence is correct?",
        options: [
          "A. Although it was cold, but we went outside.",
          "B. Although it was cold, we went outside.",
          "C. Although it was cold, so we went outside.",
          "D. Although it was cold, and we went outside.",
        ],
        answer: "B",
      },
      {
        question: "The box was ___ heavy ___ I couldn\u2019t lift it.",
        options: [
          "A. such...that",
          "B. so...that",
          "C. too...that",
          "D. very...that",
        ],
        answer: "B",
      },
      {
        question: "___ you don\u2019t hurry, you will miss the bus.",
        options: [
          "A. If",
          "B. Unless",
          "C. Although",
          "D. Because",
        ],
        answer: "B",
      },
    ],
  },
};

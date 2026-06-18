import { UnitData } from "./unit-01-data";

export const unit39Data: UnitData = {
  info: {
    id: "unit-39",
    moduleId: "06",
    number: 39,
    title: "特殊句式综合与实战",
    titleEn: "Special Sentence Patterns Comprehensive Practice",
  },
  objectives: [
    "综合运用倒装、强调、省略三大特殊句式",
    "在写作中恰当应用特殊句式提升表达效果",
    "掌握特殊句式在考试中的常见题型与解题策略",
    "在阅读理解中快速识别并理解特殊句式",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "How do special sentence patterns enhance writing?",
        "Why do writers choose inversion over normal order?",
        "What makes a cleft sentence more powerful than a plain statement?",
      ],
      answer:
        "特殊句式通过改变常规语序或结构来增强表达效果。倒装句用于强调和平衡（尤其在议论文中），强调句用于突出焦点（尤其在记叙文中），省略句用于简洁（适用于各种文体）。掌握这些句式能让写作更有表现力，阅读更高效。",
    },
    comparison: {
      chinese: [
        {
          text: "只有通过努力，我们才能成功。",
          note: "倒装强调条件",
        },
        {
          text: "是老师改变了我的人生。",
          note: "强调句突出主语",
        },
        {
          text: "如果可能的话，明天完成。",
          note: "省略使表达简洁",
        },
      ],
      english: [
        {
          text: "Only through hard work can we succeed.",
          note: "倒装强调条件",
        },
        {
          text: "It was the teacher who changed my life.",
          note: "强调句突出焦点",
        },
        {
          text: "If possible, finish it tomorrow.",
          note: "省略使表达简洁",
        },
      ],
      conclusion:
        "三种特殊句式各有其修辞效果：倒装 = 强调 + 平衡，强调句 = 突出焦点，省略 = 简洁。在写作和阅读中灵活运用，能显著提升语言能力。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "倒装的修辞效果",
          description:
            "倒装句通过将谓语或部分谓语提前，达到强调和平衡的修辞效果。在议论文中，倒装可以使论点更加有力，句子结构更加平衡。",
          example: "Not only does exercise improve health, but it also boosts mood.",
        },
        {
          label: "强调句的修辞效果",
          description:
            "强调句（It is/was...that/who...）通过突出句子的某个成分，使焦点更加明确。在记叙文中，强调句可以突出关键人物或事件。",
          example: "It was in the park that I first met her.",
        },
        {
          label: "省略的修辞效果",
          description:
            "省略通过删除重复或可推断的成分，使表达更加简洁。省略适用于各种文体，尤其在口语和非正式写作中常见。",
          example: "When (I was) young, I loved reading.",
        },
        {
          label: "综合应用",
          description:
            "在实际写作中，三种句式常常结合使用。例如，在议论文中可以用倒装开头引出论点，用强调句突出关键论据，用省略使表达简洁有力。",
          example:
            "It is education that shapes the future. Only by investing in it can we build a better society.",
        },
      ],
      aspect: [
        {
          label: "写作中的倒装应用",
          description: "在议论文中使用倒装句增强说服力",
          focus: "将否定词或only短语置于句首，引起部分倒装",
        },
        {
          label: "写作中的强调句应用",
          description: "在记叙文中使用强调句突出关键信息",
          focus: "使用It is/was...that/who...结构强调主语、宾语或状语",
        },
        {
          label: "写作中的省略应用",
          description: "在各种文体中使用省略使表达简洁",
          focus: "在状语从句、并列句中省略重复成分",
        },
        {
          label: "阅读中的句式识别",
          description: "快速识别特殊句式以理解文意",
          focus: "找否定词/only开头（倒装），It is/was...that（强调），缺失成分（省略）",
        },
      ],
    },
    matrix: {
      headers: ["句式", "修辞效果", "适用文体", "识别方法"],
      rows: [
        {
          time: "倒装",
          forms: ["强调 + 平衡", "议论文、诗歌", "否定词/Only开头"],
        },
        {
          time: "强调句",
          forms: ["突出焦点", "记叙文、散文", "It is/was...that"],
        },
        {
          time: "省略",
          forms: ["简洁明快", "各种文体", "缺失主语/谓语"],
        },
      ],
    },
    tenses: [
      {
        name: "修辞效果",
        nameEn: "Rhetorical Effects",
        structure: "倒装 = 强调 + 平衡；强调句 = 突出焦点；省略 = 简洁",
        usages: [
          {
            label: "倒装的强调效果",
            example:
              "Never have I seen such a beautiful sunset. (强调惊讶)",
          },
          {
            label: "强调句的焦点效果",
            example:
              "It was Mary who solved the problem. (突出人物)",
          },
          {
            label: "省略的简洁效果",
            example:
              "He works hard and she (works hard) too. (避免重复)",
          },
        ],
        timeWords: "根据文体和表达需要选择",
      },
      {
        name: "写作应用",
        nameEn: "Writing Applications",
        structure: "议论文用倒装，记叙文用强调，各文体用省略",
        usages: [
          {
            label: "议论文用倒装",
            example:
              "Only when we face challenges can we truly grow.",
          },
          {
            label: "记叙文用强调",
            example:
              "It was that rainy night that changed everything.",
          },
          {
            label: "各文体用省略",
            example:
              "Though tired, he continued working.",
          },
        ],
        timeWords: "写作时根据表达目的选择句式",
      },
      {
        name: "阅读识别",
        nameEn: "Reading Identification",
        structure: "倒装找否定词/only开头；强调找It is/was...that；省略找缺失成分",
        usages: [
          {
            label: "识别倒装句",
            example:
              "Seldom does he complain. → 找到seldom在句首，判断为倒装",
          },
          {
            label: "识别强调句",
            example:
              "It was John who called. → 找到It was...who，判断为强调句",
          },
          {
            label: "识别省略句",
            example:
              "If necessary, call me. → 还原为If it is necessary",
          },
        ],
        timeWords: "阅读时注意特殊句式标志词",
      },
      {
        name: "考试题型",
        nameEn: "Exam Patterns",
        structure: "语法填空、改错、句型转换、写作加分",
        usages: [
          {
            label: "语法填空",
            example:
              "Not only ___ he study hard, but he also helps others. (did)",
          },
          {
            label: "改错题",
            example:
              "It was John which broke the window. → who/that",
          },
          {
            label: "写作加分",
            example:
              "用倒装或强调句替换普通句式，提升作文档次",
          },
        ],
        timeWords: "考试中注意特殊句式的正确形式",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "倒装句主谓语序错误",
        wrong: "Not only he came, but he also helped.",
        correct: "Not only did he come, but he also helped.",
        reason:
          "Not only置于句首时，主句需部分倒装（助动词提前）。原句未倒装，属于语法错误。",
      },
      {
        title: "强调句连接词错误",
        wrong: "It was John which broke the window.",
        correct: "It was John who/that broke the window.",
        reason:
          "强调人时用who或that，不能用which。which用于强调物。",
      },
      {
        title: "省略句主语不一致",
        wrong: "When young, my father taught me to swim.",
        correct: "When young, I was taught to swim by my father.",
        reason:
          "省略句中，从句主语必须与主句主语一致。原句暗示my father was young，逻辑错误。",
      },
    ],
    keyQuestions: [
      "如何判断何时使用倒装句？→ 当否定词或only短语置于句首时",
      "强调句和定语从句如何区分？→ 去掉It is/was...that后句子是否完整",
      "省略的条件是什么？→ 从句主语与主句主语一致，且从句含be动词",
      "如何在写作中恰当使用特殊句式？→ 根据文体和表达目的选择，避免过度使用",
    ],
    stateVerbs: {
      categories: [
        {
          label: "否定词引起的倒装",
          verbs: ["never", "seldom", "rarely", "hardly", "scarcely", "no sooner", "not until", "by no means"],
        },
        {
          label: "only引起的倒装",
          verbs: ["only then", "only when", "only by", "only in this way"],
        },
        {
          label: "强调句型",
          verbs: ["It is/was...that", "It is/was...who", "It is/was...which"],
        },
        {
          label: "省略条件",
          verbs: ["when/while/if/unless + doing/done", "主语一致 + be动词省略"],
        },
      ],
      example: {
        wrong: "Not only he speaks English, but also French.",
        correct: "Not only does he speak English, but also French.",
        note: "Not only引起倒装，需将助动词does提前",
      },
    },
  },
  practice: [
    {
      title: "用特殊句式改写句子",
      titleEn: "Rewrite with Special Patterns",
      type: "fill",
      items: [
        {
          question: "He not only studied hard but also helped others. (用倒装句改写)",
          answer: "Not only did he study hard, but he also helped others.",
        },
        {
          question: "I first met her in the park. (用强调句改写，强调地点)",
          answer: "It was in the park that I first met her.",
        },
        {
          question: "Though he was tired, he continued working. (用省略句改写)",
          answer: "Though tired, he continued working.",
        },
        {
          question: "We can succeed only through hard work. (用倒装句改写)",
          answer: "Only through hard work can we succeed.",
        },
        {
          question: "The teacher changed my life. (用强调句改写，强调主语)",
          answer: "It was the teacher who changed my life.",
        },
      ],
    },
    {
      title: "选择正确形式",
      titleEn: "Choose the Correct Form",
      type: "identify",
      items: [
        {
          question: "Not only ___ (he speak) English, but also French.",
          answer: "does he speak",
        },
        {
          question: "It was Mary ___ solved the problem. (who/which)",
          answer: "who",
        },
        {
          question: "When ___ (I was) young, I loved reading.",
          answer: "young",
        },
        {
          question: "Seldom ___ (he complain) about anything.",
          answer: "does he complain",
        },
        {
          question: "It is education ___ shapes the future. (that/which)",
          answer: "that",
        },
      ],
    },
    {
      title: "综合填空",
      titleEn: "Comprehensive Fill",
      type: "fill",
      items: [
        {
          question: "Only when the war was over ___ he return to his homeland.",
          answer: "did",
        },
        {
          question: "It was at midnight ___ we heard the strange noise.",
          answer: "that",
        },
        {
          question: "If ___ (it is) possible, please come earlier.",
          answer: "possible",
        },
        {
          question: "No sooner ___ he arrived than it started to rain.",
          answer: "had",
        },
        {
          question: "While ___ (he was) walking in the park, he met an old friend.",
          answer: "walking",
        },
      ],
    },
  ],
  production: [
    {
      title: "议论文写作",
      titleEn: "Argumentative Paragraph",
      description:
        "写一段议论文，讨论\u201C教育的重要性\u201D，要求至少使用一个倒装句和一个强调句。",
      example: [
        "Education is the foundation of a nation. Only by investing in education can we build a prosperous society. It is education that gives people the power to think critically and solve problems. Not only does it benefit individuals, but it also strengthens the whole community.",
      ],
    },
    {
      title: "记叙文写作",
      titleEn: "Narrative Paragraph",
      description:
        "写一段记叙文，描述一次难忘的经历，要求至少使用一个强调句和一个省略句。",
      example: [
        "It was a rainy night that I will never forget. While walking home, I noticed a small kitten shivering under a tree. Though frightened, it let me pick it up. That night changed my life — it was then that I decided to become a veterinarian.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "倒装句要点",
        items: [
          "否定词/only短语置于句首时需倒装",
          "修辞效果：强调 + 平衡",
          "适用于议论文，增强说服力",
        ],
      },
      {
        title: "强调句要点",
        items: [
          "结构：It is/was...that/who...",
          "修辞效果：突出焦点",
          "适用于记叙文，突出关键信息",
        ],
      },
      {
        title: "省略句要点",
        items: [
          "条件：从句主语与主句主语一致，且含be动词",
          "修辞效果：简洁",
          "适用于各种文体",
        ],
      },
      {
        title: "考试策略",
        items: [
          "语法填空：注意倒装的助动词、强调句的连接词",
          "改错题：检查主谓语序、连接词、主语一致性",
          "写作：恰当使用特殊句式加分",
        ],
      },
    ],
    mindMap:
      "特殊句式综合 ─┬── 倒装句 ── 否定词/only开头 ── 强调+平衡 ── 议论文\n" +
      "              ├── 强调句 ── It is/was...that/who ── 突出焦点 ── 记叙文\n" +
      "              └── 省略句 ── 主语一致+be省略 ── 简洁 ── 各种文体",
    selfTest: [
      {
        question: "Not only ___ (he come) early, but he also helped set up.",
        options: [
          "A. he came",
          "B. did he come",
          "C. he did come",
          "D. comes he",
        ],
        answer: "B",
      },
      {
        question: "It was Tom ___ broke the window.",
        options: ["A. which", "B. what", "C. who", "D. he"],
        answer: "C",
      },
      {
        question: "When ___ (I was) a child, I lived in the countryside.",
        options: ["A. I was", "B. was", "C. a child", "D. being"],
        answer: "C",
      },
      {
        question: "Only after the meeting ___ we realize the importance of the issue.",
        options: ["A. we did", "B. did we", "C. we", "D. do we"],
        answer: "B",
      },
      {
        question: "Which sentence uses ellipsis correctly?",
        options: [
          "A. Though he was tired, he worked on.",
          "B. Though tired, he worked on.",
          "C. Though he tired, he worked on.",
          "D. Though tiring, he worked on.",
        ],
        answer: "B",
      },
    ],
  },
};

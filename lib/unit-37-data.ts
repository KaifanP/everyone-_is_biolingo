import { UnitData } from "./unit-01-data";

export const unit37Data: UnitData = {
  info: {
    id: "unit-37",
    moduleId: "06",
    number: 37,
    title: "强调句",
    titleEn: "Cleft Sentences",
  },
  objectives: [
    "掌握 It is/was...that/who 强调句型的基本结构",
    "理解 do/does/did 对谓语动词的强调用法",
    "能够区分强调句与其他相似句型（如主语从句）",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "John broke the window yesterday.",
        "如何强调这句话中的不同成分？",
        "强调主语、宾语、时间分别该怎么说？",
      ],
      answer:
        "使用强调句型可以突出句子的不同成分：It was John who/that broke the window yesterday.（强调主语）/ It was the window that John broke yesterday.（强调宾语）/ It was yesterday that John broke the window.（强调时间）",
    },
    comparison: {
      chinese: [
        {
          text: "约翰昨天打破了窗户。",
          note: "普通陈述句，没有特别强调某个成分",
        },
        {
          text: "是约翰昨天打破了窗户。",
          note: "强调主语\u{201C}约翰\u{201D}，暗示不是别人",
        },
        {
          text: "约翰昨天打破的是窗户。",
          note: "强调宾语\u{201C}窗户\u{201D}，暗示不是别的东西",
        },
      ],
      english: [
        {
          text: "John broke the window yesterday.",
          note: "普通陈述句",
        },
        {
          text: "It was John who/that broke the window yesterday.",
          note: "强调主语 John",
        },
        {
          text: "It was the window that John broke yesterday.",
          note: "强调宾语 the window",
        },
      ],
      conclusion:
        "强调句（Cleft Sentence）通过 It is/was...that/who 结构，将句子某一成分置于焦点位置，起到强调对比的作用。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "基本结构",
          description:
            "It is/was + 被强调部分 + that/who + 句子剩余部分。去掉强调结构后，句子仍然完整。",
          example: "It was Tom who/that helped me yesterday.",
        },
        {
          label: "强调人",
          description: "被强调的部分是人时，可以用 who 或 that。",
          example: "It is my mother who/that cooks for us every day.",
        },
        {
          label: "强调物/时间/地点",
          description:
            "被强调的部分是物、时间或地点时，只能用 that（不用 which/when/where）。",
          example: "It was at 8 o\u{0027}clock that we met.",
        },
      ],
      aspect: [
        {
          label: "do/does/did 强调谓语",
          description:
            "在谓语动词前加 do/does/did 表示强调，意为\u{201C}确实、的确\u{201D}。动词用原形。",
          focus: "I do like English. / He does work hard. / She did come yesterday.",
        },
        {
          label: "判断方法",
          description:
            "去掉 It is/was...that/who 后，看剩余部分是否构成完整句子。完整 → 强调句；不完整 → 主语从句。",
          focus:
            "It is clear that he is right.（去掉后不完整，是主语从句）vs It is he that is right.（去掉后完整，是强调句）",
        },
      ],
    },
    matrix: {
      headers: ["强调对象", "结构", "例句"],
      rows: [
        {
          time: "强调主语",
          forms: [
            "It is/was + 主语 + that/who + ...",
            "It was John who/that broke the window.",
          ],
        },
        {
          time: "强调宾语",
          forms: [
            "It is/was + 宾语 + that + ...",
            "It was the window that John broke.",
          ],
        },
        {
          time: "强调时间",
          forms: [
            "It is/was + 时间 + that + ...",
            "It was yesterday that John broke the window.",
          ],
        },
        {
          time: "强调地点",
          forms: [
            "It is/was + 地点 + that + ...",
            "It was at school that I met her.",
          ],
        },
        {
          time: "强调谓语（do/does/did）",
          forms: [
            "主语 + do/does/did + 动词原形 + ...",
            "I do like English. / He does work hard. / She did come.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "强调句基本结构",
        nameEn: "Cleft Sentence Structure",
        structure: "It is/was + 被强调部分 + that/who + 其余部分",
        usages: [
          {
            label: "强调主语",
            example: "It was Tom who/that helped me.",
          },
          {
            label: "强调宾语",
            example: "It was the book that I wanted.",
          },
          {
            label: "强调时间/地点",
            example: "It was in London that they first met.",
          },
        ],
        timeWords: "根据句意判断用 is（现在）或 was（过去）",
      },
      {
        name: "强调句的疑问形式",
        nameEn: "Question Form of Cleft Sentences",
        structure: "Was/Is it + 被强调部分 + that/who + ...? / 特殊疑问词 + is/was it that + ...?",
        usages: [
          {
            label: "一般疑问句",
            example: "Was it John that broke the window?",
          },
          {
            label: "特殊疑问句",
            example: "Who was it that broke the window?",
          },
          {
            label: "强调时间的特殊疑问句",
            example: "When was it that you arrived?",
          },
        ],
        timeWords: "疑问句中也遵循 is/was 的时态选择",
      },
      {
        name: "强调句的否定形式",
        nameEn: "Negative Form of Cleft Sentences",
        structure: "It is/was not + 被强调部分 + that/who + ...",
        usages: [
          {
            label: "否定被强调部分",
            example: "It was not John that broke the window.",
          },
          {
            label: "否定强调句的疑问形式",
            example: "Was it not Tom that called you?",
          },
        ],
        timeWords: "not 放在被强调部分之前",
      },
      {
        name: "do/does/did 强调谓语",
        nameEn: "Emphatic Do/Does/Did",
        structure: "主语 + do/does/did + 动词原形 + ...",
        usages: [
          {
            label: "一般现在时强调（do/does）",
            example: "I do enjoy reading. / She does speak French.",
          },
          {
            label: "一般过去时强调（did）",
            example: "I did see him yesterday.",
          },
          {
            label: "祈使句强调",
            example: "Do be careful!",
          },
        ],
        timeWords: "do/does 用于现在时，did 用于过去时",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "强调人时误用 which",
        wrong: "It was John which broke the window.",
        correct: "It was John who/that broke the window.",
        reason: "强调人时用 who 或 that，不用 which。",
      },
      {
        title: "强调物时误用 what",
        wrong: "It is English what I like best.",
        correct: "It is English that I like best.",
        reason: "强调句中连接词只用 that（物/时间/地点）或 who（人），不用 what。",
      },
      {
        title: "强调时间时误用 when",
        wrong: "It was yesterday when he arrived.",
        correct: "It was yesterday that he arrived.",
        reason: "强调句中强调时间不用 when，只用 that。",
      },
      {
        title: "强调地点时误用 where",
        wrong: "It was in the park where we met.",
        correct: "It was in the park that we met.",
        reason: "强调句中强调地点不用 where，只用 that。",
      },
    ],
    keyQuestions: [
      "如何区分强调句和主语从句？→ 去掉 It is/was...that，看剩余部分是否完整。完整是强调句，不完整是主语从句。",
      "强调人时 who 和 that 都可以用吗？→ 是的，强调人时 who 和 that 都可以用。",
      "do/does/did 强调时动词用什么形式？→ 动词用原形。",
    ],
    stateVerbs: {
      categories: [
        {
          label: "强调句与主语从句的区分",
          verbs: [
            "去掉 It is/was...that 后句子完整 → 强调句",
            "去掉 It is/was...that 后句子不完整 → 主语从句",
          ],
        },
      ],
      example: {
        wrong: "It is known to all that the earth is round.（这不是强调句）",
        correct:
          "It is the earth that is round.（这才是强调句，去掉结构后 the earth is round 完整）",
        note:
          "主语从句中 it 是形式主语，真正的主语是 that 从句；强调句中 it 没有实际含义，去掉结构后句子仍然完整。",
      },
    },
  },
  practice: [
    {
      title: "用强调句强调不同成分",
      titleEn: "Emphasize Different Parts with Cleft Sentences",
      type: "fill",
      items: [
        {
          question: "用强调句强调主语 Tom：Tom met Mary at the station.",
          answer: "It was Tom who/that met Mary at the station.",
        },
        {
          question: "用强调句强调宾语 Mary：Tom met Mary at the station.",
          answer: "It was Mary that Tom met at the station.",
        },
        {
          question: "用强调句强调地点 at the station：Tom met Mary at the station.",
          answer: "It was at the station that Tom met Mary.",
        },
        {
          question: "用 do/does/did 强调谓语 like：I like English very much.",
          answer: "I do like English very much.",
        },
      ],
    },
    {
      title: "判断是强调句还是主语从句",
      titleEn: "Cleft Sentence or Subject Clause",
      type: "identify",
      items: [
        {
          question:
            "判断句子类型：It is important that we study hard.",
          answer:
            "主语从句。去掉 It is...that 后变为 important we study hard，不完整。",
        },
        {
          question:
            "判断句子类型：It was the teacher that helped us.",
          answer:
            "强调句。去掉 It was...that 后变为 the teacher helped us，完整。",
        },
        {
          question:
            "判断句子类型：It is known that he is a good student.",
          answer:
            "主语从句。去掉 It is...that 后变为 known he is a good student，不完整。",
        },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        {
          question: "It was the book which I bought yesterday.",
          answer: "It was the book that I bought yesterday.（强调物用 that，不用 which）",
        },
        {
          question: "It was in 2020 when we graduated.",
          answer: "It was in 2020 that we graduated.（强调时间用 that，不用 when）",
        },
        {
          question: "He did went to school yesterday.",
          answer: "He did go to school yesterday.（did 后用动词原形）",
        },
        {
          question: "It is him who broke the window.",
          answer: "It is he who broke the window.（强调句中被强调的主语用主格）",
        },
      ],
    },
  ],
  production: [
    {
      title: "强调成分练习",
      titleEn: "Emphasis Practice",
      description:
        "将下列句子分别用强调句强调主语、宾语、时间和地点（如适用）。然后用 do/does/did 改写强调谓语。",
      example: [
        "原句：Mary bought a red dress at the mall last Sunday.",
        "强调主语：It was Mary who/that bought a red dress at the mall last Sunday.",
        "强调宾语：It was a red dress that Mary bought at the mall last Sunday.",
        "强调地点：It was at the mall that Mary bought a red dress last Sunday.",
        "强调时间：It was last Sunday that Mary bought a red dress at the mall.",
        "强调谓语：Mary did buy a red dress at the mall last Sunday.",
      ],
    },
    {
      title: "用强调句写作",
      titleEn: "Writing with Cleft Sentences",
      description:
        "写一段 5-6 句的短文，描述一次难忘的经历，至少使用 3 个强调句和 1 个 do/does/did 强调。注意使用强调句来突出关键信息。",
      example: [
        "It was last summer that I went to Beijing for the first time.",
        "It was the Great Wall that impressed me most.",
        "It was my father who/that took me there.",
        "I did enjoy every moment of the trip.",
        "It was the delicious food that I still remember clearly.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "强调句基本结构",
        items: [
          "It is/was + 被强调部分 + that/who + 其余部分",
          "强调人用 who 或 that；强调物/时间/地点只用 that",
          "去掉强调结构后句子仍完整",
        ],
      },
      {
        title: "do/does/did 强调谓语",
        items: [
          "do/does 用于一般现在时，did 用于一般过去时",
          "强调后动词用原形",
          "表示\u{201C}确实、的确\u{201D}的含义",
        ],
      },
      {
        title: "区分强调句与主语从句",
        items: [
          "去掉 It is/was...that 后句子完整 → 强调句",
          "去掉后不完整 → 主语从句（it 是形式主语）",
        ],
      },
    ],
    mindMap:
      "强调句 (Cleft Sentences)\n├── It is/was...that/who 结构\n│   ├── 强调主语：It was Tom who/that...\n│   ├── 强调宾语：It was the book that...\n│   ├── 强调时间：It was yesterday that...\n│   └── 强调地点：It was at school that...\n├── do/does/did 强调谓语\n│   ├── do/does + 动词原形（现在时）\n│   └── did + 动词原形（过去时）\n└── 易错点\n    ├── who/that（人）vs that（物/时间/地点）\n    ├── 不用 which/what/when/where\n    └── 区分强调句与主语从句",
    selfTest: [
      {
        question: "It was Tom _____ helped me yesterday.",
        options: ["A. which", "B. what", "C. who/that", "D. when"],
        answer: "C. who/that（强调人用 who 或 that）",
      },
      {
        question: "It is English _____ I like best. 填入正确的连接词。",
        options: ["A. which", "B. what", "C. who", "D. that"],
        answer: "D. that（强调物只用 that）",
      },
      {
        question: "He _____ like playing basketball. 用 do/does/did 强调。",
        options: ["A. do", "B. does", "C. did", "D. doing"],
        answer: "B. does（主语 he 是第三人称单数，用 does 强调，后接动词原形）",
      },
      {
        question:
          "判断：It is obvious that he is lying. 这是强调句吗？",
        options: ["A. 是强调句", "B. 不是，是主语从句"],
        answer:
          "B. 不是，是主语从句。去掉 It is...that 后 obvious he is lying 不完整。",
      },
    ],
  },
};

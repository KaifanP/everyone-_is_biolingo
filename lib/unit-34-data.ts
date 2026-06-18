import { UnitData } from "./unit-01-data";

export const unit34Data: UnitData = {
  info: {
    id: "unit-34",
    moduleId: "05",
    number: 34,
    title: "分词短语与独立主格结构",
    titleEn: "Participial Phrases & Absolute Construction",
  },
  objectives: [
    "掌握分词短语作状语的用法",
    "理解独立主格结构的构成与功能",
    "掌握 with + 独立主格结构",
    "避免悬垂分词错误",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "\u201CWalking down the street, the trees were beautiful.\u201D \u2014 这句话正确吗？",
        "\u201CThe weather being fine, we went for a walk.\u201D \u2014 和 \u201CThe weather fine, we went for a walk.\u201D 有什么区别？",
        "\u201CHe sat with his eyes closed.\u201D \u2014 with 结构起了什么作用？",
      ],
      answer:
        "第一句是错误的！trees 不能 walk，这是悬垂分词（dangling participle）错误。分词短语的逻辑主语必须与主句主语一致。独立主格结构有自己的主语，不受此限制。",
    },
    comparison: {
      chinese: [
        {
          text: "分词短语：主语必须与主句一致",
          note: "Walking down the street, I met an old friend. (I 走路，I 遇见朋友)",
        },
        {
          text: "独立主格：有自己独立的主语",
          note: "The weather being fine, we went out. (天气好，我们出门)",
        },
        {
          text: "with 结构：with + 名词 + 分词/形容词/介词短语",
          note: "He sat with his eyes closed. (他闭着眼坐着)",
        },
      ],
      english: [
        {
          text: "Participial phrases share the same subject as the main clause",
          note: "分词作状语",
        },
        {
          text: "Absolute construction has its own subject",
          note: "独立主格",
        },
        {
          text: "With + absolute structure adds detail or manner",
          note: "过去分词作宾补",
        },
      ],
      conclusion:
        "分词短语要求逻辑主语一致，独立主格有自己的主语，with 结构是最常见的独立主格形式。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "分词短语的本质",
          description:
            "分词短语 = 分词 + 宾语/状语。逻辑主语必须与主句主语一致。可表时间、原因、条件、伴随。",
          example: "Walking down the street, I met an old friend.",
        },
        {
          label: "独立主格的本质",
          description:
            "独立主格 = 名词/代词 + 分词/形容词/副词/介词短语。有自己的主语，不依赖主句。",
          example: "The weather being fine, we went for a walk.",
        },
        {
          label: "with 结构的本质",
          description:
            "with + 名词/代词 + 分词/形容词/介词短语。是独立主格的常见变体。",
          example: "He sat with his eyes closed.",
        },
        {
          label: "悬垂分词的本质",
          description:
            "分词短语的逻辑主语与主句主语不一致，导致语义荒谬。",
          example: "Walking down the street, the trees were beautiful. (错误：树不能走路)",
        },
      ],
      aspect: [
        {
          label: "分词短语作状语",
          description: "现在分词表主动/进行，过去分词表被动/完成",
          focus: "逻辑主语必须与主句主语一致",
        },
        {
          label: "独立主格结构",
          description: "名词/代词 + 分词/形容词/介词短语",
          focus: "有自己的主语，可表时间、原因、条件、伴随",
        },
        {
          label: "with + 独立主格",
          description: "with + 名词 + 分词/形容词/介词短语",
          focus: "补充说明、伴随状态、方式",
        },
        {
          label: "避免悬垂分词",
          description: "确保分词短语的逻辑主语与主句主语一致",
          focus: "不一致时改用独立主格结构",
        },
      ],
    },
    matrix: {
      headers: ["类型", "结构", "例句"],
      rows: [
        {
          time: "分词短语",
          forms: [
            "V-ing / V-ed + 其他",
            "Walking down the street, I met an old friend.",
          ],
        },
        {
          time: "独立主格",
          forms: [
            "名词/代词 + V-ing/V-ed/形容词/介词短语",
            "The weather being fine, we went for a walk.",
          ],
        },
        {
          time: "with 结构",
          forms: [
            "with + 名词 + V-ing/V-ed/形容词/介词短语",
            "He sat with his eyes closed.",
          ],
        },
        {
          time: "悬垂分词错误",
          forms: [
            "V-ing + 主句（主语不一致）",
            "Walking down the street, the trees were beautiful. (错误)",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "分词短语作状语",
        nameEn: "Participial Phrases as Adverbials",
        structure: "V-ing (现在分词) / V-ed (过去分词) + 宾语/状语",
        usages: [
          {
            label: "表时间",
            example: "Hearing the news, she burst into tears.",
          },
          {
            label: "表原因",
            example: "Being ill, he stayed at home.",
          },
          {
            label: "表条件",
            example: "Working harder, you will succeed.",
          },
          {
            label: "表伴随",
            example: "She sat there, reading a book.",
          },
        ],
        timeWords: "逻辑主语必须与主句主语一致",
      },
      {
        name: "独立主格结构",
        nameEn: "Absolute Construction",
        structure: "名词/代词 + V-ing / V-ed / 形容词 / 介词短语",
        usages: [
          {
            label: "名词 + 现在分词（主动）",
            example: "The sun rising, the fog dispersed.",
          },
          {
            label: "名词 + 过去分词（被动）",
            example: "The work done, they went home.",
          },
          {
            label: "名词 + 形容词",
            example: "He sat there, his mouth open.",
          },
          {
            label: "名词 + 介词短语",
            example: "Book in hand, he entered the room.",
          },
        ],
        timeWords: "有自己独立的主语，不依赖主句主语",
      },
      {
        name: "with + 独立主格结构",
        nameEn: "With + Absolute Construction",
        structure: "with + 名词/代词 + V-ing / V-ed / 形容词 / 介词短语",
        usages: [
          {
            label: "with + 名词 + 现在分词",
            example: "He slept with the window open.",
          },
          {
            label: "with + 名词 + 过去分词",
            example: "With the work done, he went home.",
          },
          {
            label: "with + 名词 + 形容词",
            example: "She sat with her eyes wide open.",
          },
          {
            label: "with + 名词 + 介词短语",
            example: "He came in with a book in his hand.",
          },
        ],
        timeWords: "补充说明、伴随状态、方式",
      },
      {
        name: "悬垂分词与修正",
        nameEn: "Dangling Participles & Corrections",
        structure: "确保分词短语逻辑主语 = 主句主语",
        usages: [
          {
            label: "错误识别",
            example: "Walking down the street, the trees were beautiful. (错误)",
          },
          {
            label: "修正方法一：改变主句主语",
            example: "Walking down the street, I found the trees beautiful.",
          },
          {
            label: "修正方法二：改为独立主格",
            example: "With me walking down the street, the trees were beautiful.",
          },
          {
            label: "修正方法三：改为状语从句",
            example: "When I walked down the street, the trees were beautiful.",
          },
        ],
        timeWords: "分词短语的逻辑主语必须与主句主语一致",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "悬垂分词（Dangling Participle）",
        wrong: "Walking down the street, the trees were beautiful.",
        correct: "Walking down the street, I found the trees beautiful.",
        reason:
          "trees 不能 walk，分词短语的逻辑主语与主句主语不一致。应将主句主语改为 I。",
      },
      {
        title: "缺少 being 的独立主格",
        wrong: "The weather fine, we went for a walk.",
        correct: "The weather being fine, we went for a walk.",
        reason:
          "独立主格中，名词 + 形容词时，通常需要加 being（可省略的情况较少）。此处应加 being。",
      },
      {
        title: "with 结构中分词形式错误",
        wrong: "He sat with his eyes closing.",
        correct: "He sat with his eyes closed.",
        reason:
          "眼睛是被闭上的（被动），应用过去分词 closed，而非现在分词 closing。",
      },
    ],
    keyQuestions: [
      "如何判断分词短语是否悬垂？检查分词短语的逻辑主语是否与主句主语一致。",
      "独立主格和分词短语有什么区别？独立主格有自己的主语，分词短语共享主句主语。",
      "with 结构可以省略 with 吗？可以，省略后变为普通独立主格结构。",
    ],
    stateVerbs: {
      categories: [
        {
          label: "现在分词（表主动/进行）",
          verbs: ["walking", "seeing", "being", "having"],
        },
        {
          label: "过去分词（表被动/完成）",
          verbs: ["seen", "done", "closed", "written"],
        },
        {
          label: "独立主格常用形容词",
          verbs: ["open", "closed", "ready", "present", "absent"],
        },
        {
          label: "独立主格常用介词短语",
          verbs: ["in hand", "on top", "at hand", "in front"],
        },
      ],
      example: {
        wrong: "Walking down the street, the trees were beautiful.",
        correct: "Walking down the street, I found the trees beautiful.",
        note: "分词短语的逻辑主语必须与主句主语一致，否则句子语义荒谬。",
      },
    },
  },
  practice: [
    {
      title: "判断正误",
      titleEn: "Judge Correctness",
      type: "identify",
      items: [
        {
          question:
            "判断正误：Walking down the street, the trees were beautiful.",
          answer:
            "错误。trees 不能 walk，这是悬垂分词。应改为：Walking down the street, I found the trees beautiful.",
        },
        {
          question:
            "判断正误：The weather being fine, we went for a walk.",
          answer: "正确。独立主格结构，The weather 是独立主语。",
        },
        {
          question:
            "判断正误：He sat with his eyes closing.",
          answer:
            "错误。应用过去分词 closed（被动）。应改为：He sat with his eyes closed.",
        },
      ],
    },
    {
      title: "用独立主格改写句子",
      titleEn: "Rewrite with Absolute Construction",
      type: "fill",
      items: [
        {
          question:
            "用独立主格改写：Because the weather was fine, we went for a walk.",
          answer: "The weather being fine, we went for a walk.",
        },
        {
          question:
            "用独立主格改写：He came in. He held a book in his hand.",
          answer: "He came in, book in hand. / Book in hand, he came in.",
        },
        {
          question:
            "用 with 结构改写：She sat there. Her eyes were wide open.",
          answer: "She sat with her eyes wide open.",
        },
      ],
    },
    {
      title: "完成 with 结构",
      titleEn: "Complete With-Structures",
      type: "fill",
      items: [
        {
          question: "填空：He slept _____ the window _____. (开着窗户睡觉)",
          answer: "He slept with the window open.",
        },
        {
          question:
            "填空：_____ the work _____, he went home. (工作完成后)",
          answer: "With the work done, he went home.",
        },
        {
          question:
            "填空：She sat _____ a book _____ her _____. (手里拿着书)",
          answer: "She sat with a book in her hand.",
        },
      ],
    },
  ],
  production: [
    {
      title: "场景描写练习",
      titleEn: "Scene Description with Absolute Construction",
      description:
        "用独立主格结构描写一个场景（如：清晨的公园、雨后的街道、考试后的教室）。至少使用 3 个独立主格结构。",
      example: [
        "The sun rising in the east, the park woke up. Birds singing in the trees, children ran on the grass. With the morning dew still on the flowers, the air smelled fresh. An old man sat on the bench, a newspaper in his hand.",
        "The rain having stopped, the streets were wet. Puddles reflecting the sky, people walked carefully. With umbrellas closed, they hurried along. The sun breaking through the clouds, a rainbow appeared.",
      ],
    },
    {
      title: "日记写作练习",
      titleEn: "Diary Writing with With-Structures",
      description:
        "用 with 结构写一篇简短日记，描述你的一天。至少使用 3 个 with 结构。",
      example: [
        "Today was a busy day. I woke up with the alarm ringing loudly. I went to school with my bag on my back. In class, I listened carefully with my eyes on the teacher. After school, I did my homework with music playing in the background.",
        "I had a great day today. I left home with a smile on my face. I met my friends with excitement in my heart. We played together with joy in our eyes. I came home with a sense of satisfaction.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "分词短语作状语",
        items: [
          "逻辑主语必须与主句主语一致",
          "现在分词表主动/进行，过去分词表被动/完成",
          "可表时间、原因、条件、伴随",
          "不一致时会导致悬垂分词错误",
        ],
      },
      {
        title: "独立主格结构",
        items: [
          "名词/代词 + 分词/形容词/介词短语",
          "有自己的独立主语，不依赖主句",
          "可表时间、原因、条件、伴随",
          "有时可省略 being",
        ],
      },
      {
        title: "with + 独立主格",
        items: [
          "with + 名词 + 分词/形容词/介词短语",
          "补充说明、伴随状态、方式",
          "是独立主格的常见变体",
          "with 可省略，变为普通独立主格",
        ],
      },
      {
        title: "避免悬垂分词",
        items: [
          "检查分词短语逻辑主语是否与主句主语一致",
          "不一致时改变主句主语",
          "或改为独立主格结构",
          "或改为状语从句",
        ],
      },
    ],
    mindMap:
      "分词短语与独立主格结构\n\u251c\u2500\u2500 分词短语作状语\n\u2502   \u251c\u2500\u2500 现在分词（主动/进行）\n\u2502   \u2514\u2500\u2500 过去分词（被动/完成）\n\u251c\u2500\u2500 独立主格结构\n\u2502   \u251c\u2500\u2500 名词 + 分词\n\u2502   \u251c\u2500\u2500 名词 + 形容词\n\u2502   \u2514\u2500\u2500 名词 + 介词短语\n\u251c\u2500\u2500 with 结构\n\u2502   \u251c\u2500\u2500 with + 名词 + 现在分词\n\u2502   \u251c\u2500\u2500 with + 名词 + 过去分词\n\u2502   \u251c\u2500\u2500 with + 名词 + 形容词\n\u2502   \u2514\u2500\u2500 with + 名词 + 介词短语\n\u2514\u2500\u2500 悬垂分词\n    \u251c\u2500\u2500 错误识别\n    \u2514\u2500\u2500 修正方法",
    selfTest: [
      {
        question: "下面哪句话是正确的？",
        options: [
          "A. Walking down the street, the trees were beautiful.",
          "B. Walking down the street, I found the trees beautiful.",
          "C. The trees beautiful, walking down the street.",
          "D. Walking down the street, beautiful the trees were.",
        ],
        answer: "B. 分词短语的逻辑主语必须与主句主语一致。I 是 walking 的逻辑主语。",
      },
      {
        question: "\u201CThe weather being fine\u201D 是什么结构？",
        options: [
          "A. 分词短语",
          "B. 独立主格结构",
          "C. with 结构",
          "D. 状语从句",
        ],
        answer: "B. 名词 + 分词（being fine）是独立主格结构。",
      },
      {
        question: "下面 with 结构哪句是正确的？",
        options: [
          "A. He sat with his eyes closing.",
          "B. He sat with his eyes closed.",
          "C. He sat with his eyes close.",
          "D. He sat with his eyes closes.",
        ],
        answer: "B. 眼睛是被闭上的（被动），应用过去分词 closed。",
      },
    ],
  },
};

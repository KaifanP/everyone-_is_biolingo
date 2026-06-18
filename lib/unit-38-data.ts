import { UnitData } from "./unit-01-data";

export const unit38Data: UnitData = {
  info: {
    id: "unit-38",
    moduleId: "06",
    number: 38,
    title: "省略句与替代",
    titleEn: "Ellipsis & Substitution",
  },
  objectives: [
    "掌握常见的省略句型（并列句、状语从句、定语从句、不定式省略）",
    "理解省略的条件：省略后句意清晰、语法正确",
    "掌握替代词 do/so/not/one 的用法",
    "在阅读和写作中灵活运用省略与替代，使表达更简洁地道",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "为什么英语要省略重复的部分？省略后句意会不清楚吗？",
        "'He is a student and she is too.' 和重复说 'she is a student too' 哪个更简洁？",
        "你能举出日常生活中中文也省略重复成分的例子吗？",
      ],
      answer:
        "英语中省略重复成分是为了简洁高效。例如 'He is a student and she is too.' 比重复说 'she is a student too' 更精炼。省略的前提是上下文能让读者/听者明白被省略的内容。",
    },
    comparison: {
      chinese: [
        {
          text: "他喜欢音乐，她也喜欢音乐。",
          note: "重复\"喜欢音乐\"，略显冗余",
        },
        {
          text: "他喜欢音乐，她也是。",
          note: "省略重复部分，表达更简洁",
        },
      ],
      english: [
        {
          text: "He likes music and she likes music too.",
          note: "Repeating \u2018likes music\u2019 is redundant",
        },
        {
          text: "He likes music and she does too.",
          note: "Use substitution (does) to replace \u2018likes music\u2019 \u2014 concise",
        },
      ],
      conclusion:
        "省略与替代的核心目的：避免重复，使句子更简洁、更地道。省略是\"删掉\"重复成分，替代是用一个词\"代替\"重复成分。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "第一步：识别省略类型",
          description: "判断省略发生在并列句、状语从句、定语从句还是不定式结构中",
          example: "He can swim and (he can) dive.（并列句省略主语和助动词）",
        },
        {
          label: "第二步：确认省略条件",
          description: "省略必须满足：上下文清晰、语法正确、不影响理解",
          example: "When (I was) young, I liked reading.（主语一致时可省略主语+be）",
        },
        {
          label: "第三步：选择替代词",
          description: "do/does/did 替代动词；so/not 替代从句；one/ones 替代名词",
          example: "He speaks English better than I do.（do 替代 speak）",
        },
      ],
      aspect: [
        {
          label: "写作应用：精简表达",
          description: "用省略和替代避免重复，让句子更紧凑",
          focus: "He works harder than I do.（替代） / When young, I loved reading.（省略）",
        },
        {
          label: "阅读识别：还原省略",
          description: "在阅读中遇到省略结构时，能还原被省略的部分以准确理解句意",
          focus: "He can speak French and (he can speak) German. 还原后更易理解。",
        },
        {
          label: "口语应用：自然流畅",
          description: "口语中大量使用省略和替代，是地道表达的关键",
          focus: "\"Will it rain?\" \"I think so.\" / \"I hope not.\"",
        },
      ],
    },
    matrix: {
      headers: ["类型", "省略内容", "例句"],
      rows: [
        {
          time: "并列句省略",
          forms: [
            "主语/谓语/宾语",
            "He can swim and (he can) dive.",
            "I like coffee and (I like) tea.",
          ],
        },
        {
          time: "状语从句省略",
          forms: [
            "主语 + be（主语一致时）",
            "When (I was) young, I lived in London.",
            "While (he was) reading, he fell asleep.",
          ],
        },
        {
          time: "定语从句省略",
          forms: [
            "关系代词作宾语",
            "The book (which/that) I bought is interesting.",
            "The man (who/whom) you met is my uncle.",
          ],
        },
        {
          time: "不定式省略",
          forms: [
            "重复的动词（保留 to）",
            "You can go if you want to (go).",
            "He didn\u2019t come, though I asked him to (come).",
          ],
        },
        {
          time: "替代词",
          forms: [
            "do/so/not/one 替代重复成分",
            "He runs faster than I do.（do 替代 run）",
            "\"Is she coming?\" \"I think so.\"（so 替代 she is coming）",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "并列句省略",
        nameEn: "Ellipsis in Compound Sentences",
        structure: "A and/but/or B — 省略 B 中与 A 相同的成分",
        usages: [
          {
            label: "省略主语",
            example: "He sang and (he) danced all night.",
          },
          {
            label: "省略谓语",
            example: "John can swim and Tom can (swim) too.",
          },
          {
            label: "省略宾语",
            example: "I like English and she likes (English) too.",
          },
        ],
        timeWords: "并列连词 and, but, or, nor 连接的句子",
      },
      {
        name: "状语从句省略",
        nameEn: "Ellipsis in Adverbial Clauses",
        structure: "When/While/If/Although + adj./分词（主语一致时省略主语+be）",
        usages: [
          {
            label: "时间状语省略",
            example: "When (I was) young, I liked football.",
          },
          {
            label: "条件状语省略",
            example: "If (it is) possible, please come early.",
          },
          {
            label: "让步状语省略",
            example: "Although (he was) tired, he kept working.",
          },
          {
            label: "方式状语省略",
            example: "He looked at me as if (he was) surprised.",
          },
        ],
        timeWords: "when, while, if, although, unless, as if 等引导的状语从句",
      },
      {
        name: "定语从句省略",
        nameEn: "Ellipsis in Relative Clauses",
        structure: "关系代词作宾语时可省略",
        usages: [
          {
            label: "关系代词作动词宾语",
            example: "The book (that/which) you recommended is great.",
          },
          {
            label: "关系代词作介词宾语",
            example: "The person (who/whom) I spoke to is a doctor.",
          },
          {
            label: "不能省略的情况",
            example: "The man who is standing there is my teacher.（关系代词作主语，不可省略）",
          },
        ],
        timeWords: "限定性定语从句中关系代词作宾语时",
      },
      {
        name: "不定式省略",
        nameEn: "Ellipsis after To",
        structure: "省略 to 后面重复的动词，保留 to",
        usages: [
          {
            label: "want/hope/expect 后省略",
            example: "\"Will you come?\" \"I\u2019d like to (come).\"",
          },
          {
            label: "ask/tell/order 后省略",
            example: "Don\u2019t stop unless you have to (stop).",
          },
          {
            label: "be going to / used to 后省略",
            example: "She doesn\u2019t sing as she used to (sing).",
          },
        ],
        timeWords: "口语和书面语中均可使用",
      },
      {
        name: "替代词",
        nameEn: "Substitution Words",
        structure: "do/does/did 替代动词；so/not 替代从句；one/ones 替代名词",
        usages: [
          {
            label: "do 替代动词",
            example: "He speaks English better than I do.（do = speak）",
          },
          {
            label: "so 替代肯定从句",
            example: "\"Is it going to rain?\" \"I think so.\"（so = it is going to rain）",
          },
          {
            label: "not 替代否定从句",
            example: "\"Will he come?\" \"I hope not.\"（not = he will not come）",
          },
          {
            label: "one/ones 替代名词",
            example: "I need a pen. Can you lend me one?（one = a pen）",
          },
        ],
        timeWords: "常用于比较句、口语问答、避免名词重复",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "状语从句省略主语不一致",
        wrong: "When young, my father liked football.",
        correct: "When young, I liked football.",
        reason: "省略状语从句的主语必须与主句主语一致。原句省略了主语，但 'when young' 的隐含主语是 'I'，而主句主语是 'my father'，造成逻辑错误。",
      },
      {
        title: "比较句中未用替代词 do",
        wrong: "He works harder than I work.",
        correct: "He works harder than I do.",
        reason: "比较句中第二个动词与第一个相同时，应用 do/does/did 替代，避免重复。'work' 对应 'do'。",
      },
      {
        title: "替代词 so/not 位置错误",
        wrong: "I think not so.",
        correct: "I think not. / I don\u2019t think so.",
        reason: "替代从句时，否定形式为 'I think not' 或 'I don\u2019t think so'，不能说 'I think not so'。注意：believe, suppose, expect, hope, guess 等动词也有类似用法。",
      },
    ],
    keyQuestions: [
      "省略的条件是什么？（上下文清晰、语法正确、不影响理解）",
      "状语从句省略时，主语必须满足什么条件？（与主句主语一致）",
      "定语从句中关系代词什么时候可以省略？（作宾语时可以省略，作主语时不可）",
      "do/does/did 替代什么？so/not 替代什么？one/ones 替代什么？",
      "哪些动词可以用 so/not 替代从句？（think, believe, suppose, expect, hope, guess, be afraid 等）",
    ],
    stateVerbs: {
      categories: [
        {
          label: "可用 so/not 替代从句的动词",
          verbs: ["think", "believe", "suppose", "expect", "hope", "guess", "be afraid", "be afraid"],
        },
        {
          label: "可用 to 省略的结构",
          verbs: ["want to", "hope to", "expect to", "would like to", "be going to", "used to", "have to", "ought to"],
        },
        {
          label: "可替代名词的词",
          verbs: ["one（单数可数名词）", "ones（复数可数名词）", "that（特指单数）", "those（特指复数）"],
        },
      ],
      example: {
        wrong: "\"Is she coming?\" \"I think not so.\"",
        correct: "\"Is she coming?\" \"I think so.\" / \"I think not.\" / \"I don\u2019t think so.\"",
        note: "肯定用 I think so；否定用 I think not 或 I don\u2019t think so。注意 hope, be afraid 等也遵循此规则，但 hope 一般不说 I don\u2019t hope so。",
      },
    },
  },
  practice: [
    {
      title: "补全省略部分",
      titleEn: "Fill in the ellipsis",
      type: "fill",
      items: [
        {
          question: "1. He can speak French and ______ German.（补全省略的主语和助动词）",
          answer: "he can（并列句省略主语和助动词：He can speak French and he can speak German.）",
        },
        {
          question: "2. ______ (be) careful, you can avoid mistakes.（补全省略的主语和be）",
          answer: "If you are（条件状语从句省略：If (you are) careful, you can avoid mistakes.）",
        },
        {
          question: "3. The film ______ I watched last night was exciting.（补全省略的关系代词）",
          answer: "that/which（定语从句关系代词作宾语可省略：The film (that/which) I watched last night was exciting.）",
        },
        {
          question: "4. \"Will you help me?\" \"I\u2019m willing to ______.\"（补全省略的动词）",
          answer: "help（不定式省略：I\u2019m willing to (help).）",
        },
        {
          question: "5. She plays the piano better than her sister ______.（补全省略的替代词）",
          answer: "does（替代词 do 替代 plays：She plays the piano better than her sister does.）",
        },
      ],
    },
    {
      title: "用替代词改写句子",
      titleEn: "Rewrite with substitution words",
      type: "fill",
      items: [
        {
          question: "1. He likes coffee and she likes coffee too.（用 does 替代）",
          answer: "He likes coffee and she does too.",
        },
        {
          question: "2. \"Is it going to snow?\" \"I believe it is going to snow.\"（用 so 替代从句）",
          answer: "\"Is it going to snow?\" \"I believe so.\"",
        },
        {
          question: "3. I don\u2019t have a dictionary. Can you lend me a dictionary?（用 one 替代名词）",
          answer: "I don\u2019t have a dictionary. Can you lend me one?",
        },
        {
          question: "4. \"Will he fail the exam?\" \"I\u2019m afraid he will fail the exam.\"（用 not 替代从句）",
          answer: "\"Will he fail the exam?\" \"I\u2019m afraid not.\"",
        },
      ],
    },
    {
      title: "判断下列句子是否正确",
      titleEn: "Judge correctness",
      type: "errorCorrection",
      items: [
        {
          question: "1. When walking in the park, the rain started.（判断正误）",
          answer: "错误。省略的主语应与主句主语一致。改为：When I was walking in the park, the rain started. 或 When walking in the park, I got caught in the rain.",
        },
        {
          question: "2. The book that you lent me is very interesting.（判断正误）",
          answer: "正确。关系代词 that 作宾语，也可省略：The book you lent me is very interesting.",
        },
        {
          question: "3. He runs faster than me run.（判断正误）",
          answer: "错误。应改为：He runs faster than I do.（用 do 替代 run，且比较句中用主格 I）",
        },
        {
          question: "4. \"Does she like it?\" \"I don\u2019t think so.\"（判断正误）",
          answer: "正确。否定替代用 I don\u2019t think so 或 I think not。",
        },
      ],
    },
  ],
  production: [
    {
      title: "用省略简化段落",
      titleEn: "Simplify a paragraph with ellipsis",
      description:
        "将以下段落中可以省略的部分省略，使文章更简洁：\n\nWhen I was young, I liked reading. My sister who was two years older than me also liked reading. We often went to the library that was near our school. If it was possible, we went there every day. She preferred novels and I preferred comics.",
      example: [
        "When young, I liked reading. My sister, two years older than me, also liked reading. We often went to the library near our school. If possible, we went there every day. She preferred novels and I (preferred) comics.",
      ],
    },
    {
      title: "用省略与替代写对话",
      titleEn: "Write a dialogue with ellipsis and substitution",
      description:
        "写一段6-8句的对话，至少包含以下3种省略或替代：\n1. 并列句省略（and/or/but）\n2. 替代词（do/so/not/one）\n3. 不定式省略（want to / hope to 等）",
      example: [
        "A: Do you like this movie?",
        "B: Yes, I think so. It\u2019s better than the one I watched last week.",
        "A: I agree. The acting is great and the story (is) interesting too.",
        "B: Would you like to watch it again?",
        "A: I\u2019d love to. Let\u2019s go this weekend.",
        "B: Great! I\u2019ll book the tickets if you want me to.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "省略的四大类型",
        items: [
          "并列句省略：省略与前文相同的主语、谓语或宾语",
          "状语从句省略：主语一致时省略主语 + be（When young, If possible）",
          "定语从句省略：关系代词作宾语时可省略（The book you lent me）",
          "不定式省略：省略重复动词，保留 to（I\u2019d like to.）",
        ],
      },
      {
        title: "替代词的三种用法",
        items: [
          "do/does/did：替代重复的动词（He works harder than I do.）",
          "so/not：替代整个从句（I think so. / I hope not.）",
          "one/ones：替代可数名词（I need a pen. Can you lend me one?）",
        ],
      },
      {
        title: "常见错误提醒",
        items: [
          "状语从句省略主语必须与主句主语一致",
          "比较句中用 do/does/did 替代重复动词，不能直接重复",
          "否定替代用 I think not 或 I don\u2019t think so，不能说 I think not so",
          "关系代词作主语时不可省略",
        ],
      },
    ],
    mindMap:
      "省略与替代\n\u251c\u2500\u2500 省略 (Ellipsis)\n\u2502   \u251c\u2500\u2500 并列句省略\n\u2502   \u2502   \u251c\u2500\u2500 省略主语：He sang and (he) danced.\n\u2502   \u2502   \u251c\u2500\u2500 省略谓语：Tom can swim and Jack can (swim) too.\n\u2502   \u2502   \u2514\u2500\u2500 省略宾语：I like tea and she likes (tea) too.\n\u2502   \u251c\u2500\u2500 状语从句省略\n\u2502   \u2502   \u251c\u2500\u2500 When (I was) young, ...\n\u2502   \u2502   \u251c\u2500\u2500 If (it is) possible, ...\n\u2502   \u2502   \u2514\u2500\u2500 Although (he was) tired, ...\n\u2502   \u251c\u2500\u2500 定语从句省略\n\u2502   \u2502   \u2514\u2500\u2500 关系代词作宾语：The book (that) you lent me\n\u2502   \u2514\u2500\u2500 不定式省略\n\u2502       \u2514\u2500\u2500 保留 to：I\u2019d like to. / I used to.\n\u251c\u2500\u2500 替代 (Substitution)\n\u2502   \u251c\u2500\u2500 do/does/did \u2192 替代动词\n\u2502   \u2502   \u2514\u2500\u2500 He runs faster than I do.\n\u2502   \u251c\u2500\u2500 so/not \u2192 替代从句\n\u2502   \u2502   \u2514\u2500\u2500 I think so. / I hope not.\n\u2502   \u2514\u2500\u2500 one/ones \u2192 替代名词\n\u2502       \u2514\u2500\u2500 Can you lend me one?\n\u2514\u2500\u2500 注意事项\n    \u251c\u2500\u2500 省略后句意必须清晰\n    \u251c\u2500\u2500 状语从句省略主语须与主句一致\n    \u2514\u2500\u2500 关系代词作主语不可省略",
    selfTest: [
      {
        question: "When ______ (be) a child, she loved dancing.",
        options: ["A. she was", "B. was", "C. /", "D. being"],
        answer: "C. /（状语从句省略：When (she was) a child, she loved dancing. 主语一致，省略主语+be）",
      },
      {
        question: "\"Will he come tomorrow?\" \"I ______ so.\"",
        options: ["A. hope", "B. think", "C. say", "D. Both A and B"],
        answer: "D. Both A and B（think so 和 hope so 都是正确的替代用法）",
      },
      {
        question: "The girl ______ I met yesterday is my classmate.",
        options: ["A. who", "B. whom", "C. /", "D. All of the above"],
        answer: "D. All of the above（关系代词作宾语，who/whom/省略均可）",
      },
      {
        question: "He didn\u2019t pass the exam, though I told him ______.",
        options: ["A. to", "B. to do", "C. to pass", "D. do it"],
        answer: "A. to（不定式省略：told him to (pass the exam)，保留 to）",
      },
      {
        question: "My shoes are old. I need new ______.",
        options: ["A. shoes", "B. ones", "C. one", "D. it"],
        answer: "B. ones（ones 替代复数可数名词 shoes）",
      },
    ],
  },
};

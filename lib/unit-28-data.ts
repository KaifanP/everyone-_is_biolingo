import { UnitData } from "./unit-01-data";

export const unit28Data: UnitData = {
  info: {
    id: "unit-28",
    moduleId: "04",
    number: 28,
    title: "间接引语进阶（转述疑问句和祈使句）",
    titleEn: "Advanced Reported Speech",
  },
  objectives: [
    "学会转述一般疑问句和特殊疑问句（ask + if/whether 或 wh-词 + 陈述语序）",
    "学会转述祈使句和否定祈使句（tell/ask + sb + to do / not to do）",
    "选择正确的转述动词（tell, ask, order, advise, warn, remind）",
    "学会转述感叹句和其他句型",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        'When we report a question, do we keep the question word order?',
        'Compare: "Where do you live?" — if you report this, is it "He asked where did I live" or "He asked where I lived"?',
        'What about commands? "Open the door!" — how do you report this?',
      ],
      answer:
        "When reporting questions, we do NOT keep question word order. We change to statement order. For example: \"Where do you live?\" → He asked where I lived. For commands, we use tell/ask + someone + to do: \"Open the door!\" → He told me to open the door.",
    },
    comparison: {
      chinese: [
        {
          text: "直接引语中的疑问句有倒装语序（如 do you, is he）",
          note: "转述时必须改为陈述语序",
        },
        {
          text: "直接引语中的祈使句用动词原形",
          note: "转述时改为 to do 结构",
        },
        {
          text: "转述动词的选择取决于原话的意图",
          note: "疑问用 ask，命令用 tell/order，建议用 advise",
        },
      ],
      english: [
        {
          text: '"Do you like coffee?" → He asked if I liked coffee.',
          note: "Yes/No questions: if/whether + statement order",
        },
        {
          text: '"Where is the station?" → She asked where the station was.',
          note: "Wh-questions: wh-word + statement order",
        },
        {
          text: '"Sit down." → The teacher told us to sit down.',
          note: "Commands: told/asked + sb + to do",
        },
      ],
      conclusion:
        "转述疑问句和祈使句的关键：疑问句去掉倒装改为陈述语序，用 if/whether 或 wh-词引导；祈使句用 to do 结构，根据语气选择 tell, ask, order 等转述动词。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "Yes/No 疑问句转述",
          description:
            "一般疑问句转述时，用 asked + if/whether + 陈述语序。人称和时态要做相应变化。",
          example: '"Do you like tea?" → He asked if I liked tea.',
        },
        {
          label: "Wh- 疑问句转述",
          description:
            "特殊疑问句转述时，保留疑问词（what, where, when, who, how 等），后接陈述语序，不再用倒装。",
          example: '"Where do you live?" → She asked where I lived.',
        },
        {
          label: "肯定祈使句转述",
          description:
            "祈使句转述用 told/asked + 宾语 + to do。语气强硬用 told/ordered，客气请求用 asked。",
          example: '"Open the window." → He told me to open the window.',
        },
        {
          label: "否定祈使句转述",
          description:
            "否定祈使句转述用 told/asked + 宾语 + not + to do。",
          example: '"Don\'t touch that!" → She told me not to touch that.',
        },
      ],
      aspect: [
        {
          label: "语序变化",
          description: "疑问句的倒装语序在间接引语中必须改为陈述语序。",
          focus: "Do you like…? → if I liked…（不是 if did I like）",
        },
        {
          label: "引导词选择",
          description:
            "一般疑问句用 if 或 whether；特殊疑问句保留原来的疑问词。",
          focus: "Is he coming? → if/whether he was coming",
        },
        {
          label: "转述动词",
          description:
            "根据说话人的意图选择不同动词：ask（提问）、tell（告知/命令）、order（命令）、advise（建议）、warn（警告）、remind（提醒）。",
          focus: '"Be careful!" → He warned me to be careful.',
        },
        {
          label: "时态后移",
          description:
            "与转述陈述句相同，时态通常后移：do/does → did, will → would, can → could。",
          focus: '"Can you help?" → She asked if I could help.',
        },
      ],
    },
    matrix: {
      headers: ["句型", "直接引语", "间接引语"],
      rows: [
        {
          time: "一般疑问句",
          forms: [
            '"Do you like coffee?"',
            "He asked if/whether I liked coffee.",
          ],
        },
        {
          time: "特殊疑问句",
          forms: [
            '"Where are you going?"',
            "She asked where I was going.",
          ],
        },
        {
          time: "肯定祈使句",
          forms: [
            '"Please sit down."',
            "He asked me to sit down.",
          ],
        },
        {
          time: "否定祈使句",
          forms: [
            '"Don\'t be late."',
            "She told me not to be late.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "一般疑问句转述",
        nameEn: "Reporting Yes/No Questions",
        structure: "asked + (sb) + if/whether + 陈述语序",
        usages: [
          {
            label: "用 if 引导",
            example: '"Is he coming?" → She asked if he was coming.',
          },
          {
            label: "用 whether 引导",
            example: '"Do you agree?" → He asked whether I agreed.',
          },
          {
            label: "间接一般疑问句",
            example: '"Can you swim?" → They asked me if I could swim.',
          },
          {
            label: "选择疑问句",
            example:
              '"Tea or coffee?" → She asked whether I wanted tea or coffee.',
          },
        ],
        timeWords: "if, whether",
      },
      {
        name: "特殊疑问句转述",
        nameEn: "Reporting Wh- Questions",
        structure: "asked + (sb) + wh-词 + 陈述语序",
        usages: [
          {
            label: "what 引导",
            example: '"What is this?" → He asked what that was.',
          },
          {
            label: "where 引导",
            example: '"Where do you live?" → She asked where I lived.',
          },
          {
            label: "when/why/how 引导",
            example: '"Why are you late?" → He asked why I was late.',
          },
          {
            label: "who 引导",
            example: '"Who is that man?" → She asked who that man was.',
          },
        ],
        timeWords: "what, where, when, why, who, how, which",
      },
      {
        name: "祈使句转述",
        nameEn: "Reporting Commands and Requests",
        structure: "told/asked/ordered + sb + (not) + to do",
        usages: [
          {
            label: "命令（用 told/ordered）",
            example: '"Be quiet!" → He told us to be quiet.',
          },
          {
            label: "请求（用 asked）",
            example: '"Please help me." → She asked me to help her.',
          },
          {
            label: "否定祈使句",
            example: '"Don\'t move!" → He told me not to move.',
          },
          {
            label: "建议（用 advised）",
            example:
              '"You should see a doctor." → She advised me to see a doctor.',
          },
        ],
        timeWords: "to + 动词原形",
      },
      {
        name: "常用转述动词",
        nameEn: "Common Reporting Verbs",
        structure: "根据语境选择合适的转述动词",
        usages: [
          {
            label: "tell — 告知/命令",
            example: '"Go away." → He told me to go away.',
          },
          {
            label: "ask — 请求/询问",
            example: '"Could you repeat that?" → She asked me to repeat that.',
          },
          {
            label: "order — 严厉命令",
            example: '"Stand up immediately!" → The officer ordered us to stand up.',
          },
          {
            label: "advise/warn/remind — 建议/警告/提醒",
            example:
              '"Be careful with that knife." → She warned me to be careful with that knife.',
          },
        ],
        timeWords: "tell, ask, order, advise, warn, remind, suggest, insist",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "疑问句转述保留倒装（常见错误）",
        wrong: 'He asked where did I live.',
        correct: "He asked where I lived.",
        reason:
          "间接引语中的特殊疑问句必须用陈述语序，不能保留助动词的倒装（did/do/does）。",
      },
      {
        title: "tell 后面多加 to",
        wrong: "He told to me to open the door.",
        correct: "He told me to open the door.",
        reason:
          "tell 是及物动词，直接接宾语（tell sb），不需要介词 to。但 said to sb 是可以的。",
      },
      {
        title: "一般疑问句用 that 引导",
        wrong: "She asked me that I was ready.",
        correct: "She asked me if/whether I was ready.",
        reason:
          "一般疑问句转述用 if 或 whether 引导，不能用 that。that 用于转述陈述句。",
      },
    ],
    keyQuestions: [
      "How to report Yes/No questions? — 用 asked + if/whether + 陈述语序",
      "How to report commands and requests? — 用 told/asked/ordered + sb + to do",
      "Which verbs to use for different speech acts? — ask 用于提问，tell 用于告知/命令，order 用于严厉命令，advise 用于建议，warn 用于警告",
    ],
    stateVerbs: {
      categories: [
        {
          label: "提问（Questions）",
          verbs: ["ask", "want to know", "wonder"],
        },
        {
          label: "告知/命令（Statements / Commands）",
          verbs: ["tell", "say", "order", "command"],
        },
        {
          label: "请求（Requests）",
          verbs: ["ask", "beg", "request"],
        },
        {
          label: "建议（Suggestions）",
          verbs: ["advise", "suggest", "recommend"],
        },
        {
          label: "警告/提醒（Warnings / Reminders）",
          verbs: ["warn", "remind", "caution"],
        },
      ],
      example: {
        wrong: '"Don\'t go there." → He suggested me not to go there.',
        correct: '"Don\'t go there." → He warned me not to go there.',
        note: "suggest 后接 doing 或 that 从句，不接 sb + to do。警告含义用 warn + sb + to do。",
      },
    },
  },
  practice: [
    {
      title: "转述一般疑问句",
      titleEn: "Report Yes/No Questions",
      type: "fill",
      items: [
        {
          question: '"Is she a teacher?" → He asked __________.',
          answer: "He asked if/whether she was a teacher.",
        },
        {
          question: '"Have you finished your homework?" → Mom asked __________.',
          answer: "Mom asked if/whether I had finished my homework.",
        },
        {
          question: '"Will they come tomorrow?" → She asked __________.',
          answer: "She asked if/whether they would come the next day.",
        },
        {
          question: '"Can you speak French?" → He asked __________.',
          answer: "He asked if/whether I could speak French.",
        },
        {
          question: '"Did she pass the exam?" → They asked __________.',
          answer: "They asked if/whether she had passed the exam.",
        },
      ],
    },
    {
      title: "转述特殊疑问句",
      titleEn: "Report Wh- Questions",
      type: "fill",
      items: [
        {
          question: '"Where do you work?" → She asked __________.',
          answer: "She asked where I worked.",
        },
        {
          question: '"What are you doing?" → He asked __________.',
          answer: "He asked what I was doing.",
        },
        {
          question: '"Why didn\'t you call me?" → Mom asked __________.',
          answer: "Mom asked why I hadn't called her.",
        },
        {
          question: '"When does the train leave?" → She asked __________.',
          answer: "She asked when the train left.",
        },
        {
          question: '"How old are you?" → He asked __________.',
          answer: "He asked how old I was.",
        },
      ],
    },
    {
      title: "转述祈使句",
      titleEn: "Report Commands and Requests",
      type: "fill",
      items: [
        {
          question: '"Close the door." → The teacher told __________.',
          answer: "The teacher told us to close the door.",
        },
        {
          question: '"Please don\'t make noise." → She asked __________.',
          answer: "She asked me/us not to make noise.",
        },
        {
          question: '"Run faster!" → The coach ordered __________.',
          answer: "The coach ordered us to run faster.",
        },
        {
          question: '"Be careful with the knife." → Mom warned __________.',
          answer: "Mom warned me to be careful with the knife.",
        },
        {
          question: '"Don\'t forget your keys." → He reminded __________.',
          answer: "He reminded me not to forget my keys.",
        },
      ],
    },
  ],
  production: [
    {
      title: "采访转述",
      titleEn: "Interview Reporting",
      description:
        "你的同学采访了三位同学，问了一些问题。请根据回答内容，用间接引语转述采访结果。注意疑问句的语序变化和时态后移。",
      example: [
        'Interviewer: "Do you like this school?" Student A: "Yes, I do."',
        "Reported: The interviewer asked Student A if he/she liked the school. Student A said that he/she did.",
        'Interviewer: "Where are you from?" Student B: "I\'m from Beijing."',
        "Reported: The interviewer asked Student B where he/she was from. Student B said that he/she was from Beijing.",
        'Interviewer: "What do you want to be?" Student C: "I want to be a doctor."',
        "Reported: The interviewer asked Student C what he/she wanted to be. Student C said that he/she wanted to be a doctor.",
      ],
    },
    {
      title: "命令转述",
      titleEn: "Command and Instruction Reporting",
      description:
        "老师和家长经常给出指令。请将以下直接引语的命令/请求/建议转述为间接引语，选择合适的转述动词。",
      example: [
        'Teacher: "Open your books to page 50."',
        "Reported: The teacher told us to open our books to page 50.",
        'Mom: "Don\'t stay up too late."',
        "Reported: Mom warned me not to stay up too late.",
        'Doctor: "You should drink more water."',
        "Reported: The doctor advised me to drink more water.",
        'Dad: "Remember to lock the door."',
        "Reported: Dad reminded me to lock the door.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "疑问句转述规则",
        items: [
          "一般疑问句 → asked + if/whether + 陈述语序",
          "特殊疑问句 → asked + wh-词 + 陈述语序（不倒装）",
          "时态后移：do/does → did, will → would, can → could",
          "人称和时间/地点要做相应变化",
        ],
      },
      {
        title: "祈使句转述规则",
        items: [
          "肯定祈使句 → told/asked/ordered + sb + to do",
          "否定祈使句 → told/asked + sb + not + to do",
          "语气决定动词选择：ask（客气）→ tell（一般）→ order（强硬）",
          "建议用 advise，警告用 warn，提醒用 remind",
        ],
      },
      {
        title: "常见错误提醒",
        items: [
          "间接引语中疑问句不倒装！（不是 asked where did I go）",
          "tell 后面直接接宾语，不加 to（tell me, 不是 tell to me）",
          "一般疑问句用 if/whether，不用 that",
        ],
      },
    ],
    mindMap:
      "间接引语进阶\n├── 疑问句转述\n│   ├── 一般疑问句: asked + if/whether + 陈述语序\n│   │   例: \"Do you like it?\" → asked if I liked it\n│   └── 特殊疑问句: asked + wh-词 + 陈述语序\n│       例: \"Where do you live?\" → asked where I lived\n├── 祈使句转述\n│   ├── 肯定: told/asked + sb + to do\n│   │   例: \"Sit down.\" → told me to sit down\n│   └── 否定: told/asked + sb + not + to do\n│       例: \"Don't go.\" → told me not to go\n└── 转述动词选择\n    ├── ask — 提问/请求\n    ├── tell — 告知/命令\n    ├── order — 严厉命令\n    ├── advise — 建议\n    ├── warn — 警告\n    └── remind — 提醒",
    selfTest: [
      {
        question: '"Are you coming to the party?" → She asked __________.',
        options: [
          "A. that I was coming to the party",
          "B. if I was coming to the party",
          "C. if was I coming to the party",
          "D. that was I coming to the party",
        ],
        answer: "B. if I was coming to the party（一般疑问句用 if + 陈述语序）",
      },
      {
        question: '"What time does the movie start?" → He asked __________.',
        options: [
          "A. what time did the movie start",
          "B. what time the movie starts",
          "C. what time the movie started",
          "D. what time does the movie start",
        ],
        answer: "C. what time the movie started（wh-词 + 陈述语序 + 时态后移）",
      },
      {
        question: '"Don\'t touch the fire!" → Mom __________.',
        options: [
          "A. told me don't touch the fire",
          "B. told me to not touch the fire",
          "C. told me not to touch the fire",
          "D. said me not to touch the fire",
        ],
        answer: "C. told me not to touch the fire（否定祈使句: told + sb + not + to do）",
      },
    ],
  },
};

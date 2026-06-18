import { UnitData } from "./unit-01-data";

export const unit26Data: UnitData = {
  info: {
    id: "unit-26",
    moduleId: "04",
    number: 26,
    title: "被动语态进阶",
    titleEn: "Advanced Passive Voice",
  },
  objectives: [
    "掌握双宾语动词的两种被动语态形式",
    "掌握情态动词被动语态的构成与用法",
    "理解 get + 过去分词构成的被动语态",
    "了解不能使用被动语态的动词类型",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "She was given a book by her teacher.",
        "A book was given to her by her teacher.",
        "The accident happened yesterday.",
      ],
      answer:
        "双宾语动词（如 give）有两种被动形式：可以用间接宾语或直接宾语作主语。但 happen 是不及物动词，不能用被动语态。",
    },
    comparison: {
      chinese: [
        {
          text: "她被老师给了一本书。（人作主语）",
          note: "间接宾语 her 变成主语 she",
        },
        {
          text: "一本书被老师给了她。（物作主语）",
          note: "直接宾语 a book 变成主语",
        },
        { text: "事故发生了。（不能说\u201C被发生\u201D）", note: "happen 是不及物动词" },
      ],
      english: [
        { text: "She was given a book.", note: "间接宾语作主语" },
        {
          text: "A book was given to her.",
          note: "直接宾语作主语",
        },
        { text: "The accident happened.", note: "不及物动词" },
      ],
      conclusion:
        "双宾语动词有两种被动形式，但不及物动词和系动词不能用于被动语态。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "双宾语被动",
          description:
            "give, send, tell, show 等双宾语动词可以有两种被动形式：间接宾语作主语或直接宾语作主语",
          example: "He gave me a book. \u2192 I was given a book. / A book was given to me.",
        },
        {
          label: "情态动词被动",
          description: "情态动词 + be + 过去分词，表示\u201C必须/能够/应该被……\u201D",
          example: "The work must be finished today.",
        },
        {
          label: "get-被动",
          description: "get + 过去分词，常用于表示意外、不幸事件，语气更口语化",
          example: "He got hurt in the accident.",
        },
        {
          label: "不可用被动的动词",
          description:
            "不及物动词（happen, appear, belong, consist 等）没有宾语，不能使用被动语态",
          example: "The accident happened. (NOT: The accident was happened.)",
        },
      ],
      aspect: [
        {
          label: "双宾语动词",
          description: "可接两个宾语的动词",
          focus: "give, send, tell, show, teach, offer, bring, buy",
        },
        {
          label: "情态动词",
          description: "can, may, must, should, will 等",
          focus: "情态动词 + be + done",
        },
        {
          label: "get-被动",
          description: "get 替代 be 构成被动",
          focus: "强调状态变化，常用于不幸事件",
        },
        {
          label: "不及物动词",
          description: "不能接宾语的动词",
          focus: "happen, appear, belong, consist, die, arrive",
        },
      ],
    },
    matrix: {
      headers: ["类型", "结构", "例句"],
      rows: [
        {
          time: "双宾语-人作主语",
          forms: [
            "sb + be + given + sth",
            "I was given a book by the teacher.",
          ],
        },
        {
          time: "双宾语-物作主语",
          forms: [
            "sth + be + given + to + sb",
            "A book was given to me by the teacher.",
          ],
        },
        {
          time: "情态动词被动",
          forms: [
            "modal + be + done",
            "The report must be submitted before Friday.",
          ],
        },
        {
          time: "get-被动",
          forms: [
            "get + past participle",
            "She got promoted last month.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "双宾语被动",
        nameEn: "Double-Object Passive",
        structure: "sb + be + V(pp) + sth / sth + be + V(pp) + to/for + sb",
        usages: [
          {
            label: "间接宾语作主语",
            example: "She told us the truth. \u2192 We were told the truth.",
          },
          {
            label: "直接宾语作主语",
            example: "She told us the truth. \u2192 The truth was told to us.",
          },
          {
            label: "带 for 的动词",
            example: "He bought me a gift. \u2192 A gift was bought for me.",
          },
        ],
        timeWords: "buy, make, cook, find 等用 for；give, send, tell, show 等用 to",
      },
      {
        name: "情态动词被动",
        nameEn: "Modal Verb Passive",
        structure: "modal + be + past participle",
        usages: [
          {
            label: "must be done（必须被）",
            example: "Rules must be followed.",
          },
          {
            label: "can be done（能够被）",
            example: "The problem can be solved easily.",
          },
          {
            label: "should be done（应该被）",
            example: "The environment should be protected.",
          },
        ],
        timeWords: "can, could, may, might, must, shall, should, will, would",
      },
      {
        name: "get-被动",
        nameEn: "Get-Passive",
        structure: "get + past participle",
        usages: [
          {
            label: "意外/不幸事件",
            example: "He got injured in the game.",
          },
          {
            label: "状态变化",
            example: "She got married last year.",
          },
          {
            label: "口语化表达",
            example: "We got stuck in traffic.",
          },
        ],
        timeWords: "常与 suddenly, accidentally 等连用",
      },
      {
        name: "不能用被动的动词",
        nameEn: "Verbs That Cannot Be Passive",
        structure: "subject + intransitive/linking verb",
        usages: [
          {
            label: "不及物动词",
            example: "The accident happened. (NOT: was happened)",
          },
          {
            label: "系动词",
            example: "The food tastes good. (NOT: is tasted good)",
          },
          {
            label: "表示\u201C属于/包含\u201D的动词",
            example: "The book belongs to me. (NOT: is belonged to me)",
          },
        ],
        timeWords: "happen, appear, belong, consist, die, arrive, exist, seem, taste, smell, sound",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "不及物动词误用被动",
        wrong: "The accident was happened yesterday.",
        correct: "The accident happened yesterday.",
        reason: "happen 是不及物动词，没有宾语，不能使用被动语态",
      },
      {
        title: "不及物动词误用被动",
        wrong: "He was died in 2020.",
        correct: "He died in 2020.",
        reason: "die 是不及物动词，不能使用被动语态",
      },
      {
        title: "双宾语被动结构错误",
        wrong: "She was told to me the secret.",
        correct: "I was told the secret (by her). / The secret was told to me (by her).",
        reason: "双宾语被动时，只能选择一个宾语作主语，不能同时保留两个宾语",
      },
    ],
    keyQuestions: [
      "哪些动词有两种被动形式？",
      "什么时候使用 get-被动？",
      "为什么不及物动词不能用被动语态？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "表示\u201C发生/出现\u201D",
          verbs: ["happen", "occur", "appear", "disappear"],
        },
        {
          label: "表示\u201C属于/包含\u201D",
          verbs: ["belong", "consist", "contain"],
        },
        {
          label: "表示\u201C存在/到达\u201D",
          verbs: ["exist", "arrive", "die", "rise"],
        },
      ],
      example: {
        wrong: "The accident was happened suddenly.",
        correct: "The accident happened suddenly.",
        note: "happen 等不及物动词没有宾语，无法构成被动语态。记住：被动语态必须有宾语才能转换",
      },
    },
  },
  practice: [
    {
      title: "双宾语被动改写",
      titleEn: "Double-Object Passive Rewrite",
      type: "fill",
      items: [
        {
          question: "改写为被动语态（两种形式）：The teacher gave us some advice.",
          answer: "We were given some advice (by the teacher). / Some advice was given to us (by the teacher).",
        },
        {
          question: "改写为被动语态（两种形式）：She sent him a letter.",
          answer: "He was sent a letter (by her). / A letter was sent to him (by her).",
        },
        {
          question: "改写为被动语态（两种形式）：My mother bought me a new phone.",
          answer: "I was bought a new phone (by my mother). / A new phone was bought for me (by my mother).",
        },
      ],
    },
    {
      title: "情态动词被动填空",
      titleEn: "Modal Verb Passive Fill-in",
      type: "fill",
      items: [
        {
          question: "The environment ________ (should / protect) by everyone.",
          answer: "should be protected",
        },
        {
          question: "This problem ________ (can / solve) with modern technology.",
          answer: "can be solved",
        },
        {
          question: "All students ________ (must / follow) the school rules.",
          answer: "must follow",
        },
      ],
    },
    {
      title: "判断能否使用被动语态",
      titleEn: "Judge If Passive Is Possible",
      type: "identify",
      items: [
        {
          question: "判断正误：The meeting was happened at 3 p.m.",
          answer: "错误。happen 是不及物动词，应改为：The meeting happened at 3 p.m.",
        },
        {
          question: "判断正误：The cake was tasted delicious.",
          answer: "错误。taste 作系动词时不能用被动，应改为：The cake tasted delicious.",
        },
        {
          question: "判断正误：The book was belonged to the library.",
          answer: "错误。belong 是不及物动词，应改为：The book belonged to the library.",
        },
      ],
    },
  ],
  production: [
    {
      title: "用情态动词被动描述校规",
      titleEn: "Describe School Rules Using Modal Passives",
      description:
        "用情态动词被动语态描述学校的规章制度，如：Uniforms must be worn every day.",
      example: [
        "Mobile phones must be turned off during class.",
        "Homework should be handed in on time.",
        "Library books can be borrowed for two weeks.",
        "School gates must be closed by 6 p.m.",
      ],
    },
    {
      title: "用 get-被动写事故报告",
      titleEn: "Write an Accident Report Using Get-Passive",
      description:
        "用 get + 过去分词描述一起意外事故的经过，注意 get-被动常用于表示不幸事件。",
      example: [
        "Yesterday afternoon, a student got hurt during PE class.",
        "He got hit by a ball while playing basketball.",
        "His arm got injured and was taken to hospital.",
        "Luckily, he got treated quickly and got discharged the next day.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "双宾语被动",
        items: [
          "间接宾语作主语：sb + be + V(pp) + sth",
          "直接宾语作主语：sth + be + V(pp) + to/for + sb",
          "常见动词：give, send, tell, show, teach, buy, make",
        ],
      },
      {
        title: "情态动词被动",
        items: [
          "结构：情态动词 + be + 过去分词",
          "must be done, can be done, should be done",
          "表示必须/能够/应该被做某事",
        ],
      },
      {
        title: "get-被动与不可用被动的动词",
        items: [
          "get + 过去分词：常用于意外、不幸事件",
          "不及物动词（happen, die, arrive）不能用被动",
          "系动词（taste, smell, sound）不能用被动",
        ],
      },
    ],
    mindMap:
      "被动语态进阶\n\u251C\u2500\u2500 双宾语被动\n\u2502   \u251C\u2500\u2500 人作主语：sb be given sth\n\u2502   \u2514\u2500\u2500 物作主语：sth be given to sb\n\u251C\u2500\u2500 情态动词被动\n\u2502   \u2514\u2500\u2500 modal + be + done\n\u251C\u2500\u2500 get-被动\n\u2502   \u2514\u2500\u2500 get + done（不幸/意外）\n\u2514\u2500\u2500 不可用被动\n    \u2514\u2500\u2500 不及物动词 / 系动词",
    selfTest: [
      {
        question: "\u201CHe showed me the way.\u201D 的被动语态正确的是？",
        options: [
          "I was showed the way.",
          "I was shown the way.",
          "The way was showed to me.",
          "I was shown the way to.",
        ],
        answer: "I was shown the way.",
      },
      {
        question: "下列哪个句子不能使用被动语态？",
        options: [
          "The book was read by many people.",
          "The accident was happened suddenly.",
          "The work must be finished today.",
          "She got promoted last month.",
        ],
        answer: "The accident was happened suddenly.",
      },
      {
        question: "\u201CThe door ________ (can / open) from the inside.\u201D 填入正确形式：",
        options: [
          "can open",
          "can be opened",
          "can be open",
          "can opened",
        ],
        answer: "can be opened",
      },
    ],
  },
};

import { UnitData } from "./unit-01-data";

export const unit19Data: UnitData = {
  info: {
    id: "unit-19",
    moduleId: "03",
    number: 19,
    title: "定语从句高级——特殊用法与缩减",
    titleEn: "Relative Clauses: Advanced Usage & Reduction",
  },
  objectives: [
    "掌握定语从句的特殊用法",
    "理解定语从句的缩减方法",
    "在写作中灵活运用定语从句",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "The man <strong>who is standing there</strong> is my friend.",
        "The book <strong>which was written by him</strong> is interesting.",
        "The house <strong>which was built in 1990</strong> is old.",
      ],
      answer:
        "这些定语从句可以<strong>简化</strong>：<br>The man <strong>standing there</strong> is my friend.<br>The book <strong>written by him</strong> is interesting.<br>The house <strong>built in 1990</strong> is old.",
    },
    comparison: {
      chinese: [
        { text: "站在那里的那个人是我的朋友。", note: "\"站在那里的\"可以简化" },
        { text: "他写的书很有趣。", note: "\"他写的\"可以简化" },
      ],
      english: [
        { text: "The man <strong>who is standing there</strong> is my friend.", note: "完整定语从句" },
        { text: "The man <strong>standing there</strong> is my friend.", note: "缩减为分词短语" },
      ],
      conclusion:
        "定语从句可以<strong>缩减为短语</strong>，使句子更简洁。规则：关系代词 + be动词 → 省略；主动动词 → 现在分词；被动动词 → 过去分词。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "缩减规则1：省略关系代词和be动词",
          description: "关系代词作主语 + be动词 → 省略两者",
          example: "The man <strong>who is standing there</strong> → The man <strong>standing there</strong>",
        },
        {
          label: "缩减规则2：主动动词→现在分词",
          description: "关系代词作主语 + 主动动词 → 现在分词",
          example: "The students <strong>who study hard</strong> → The students <strong>studying hard</strong>",
        },
        {
          label: "缩减规则3：被动动词→过去分词",
          description: "关系代词作主语 + 被动动词 → 过去分词",
          example: "The book <strong>which was written by him</strong> → The book <strong>written by him</strong>",
        },
      ],
      aspect: [
        {
          label: "可以缩减",
          description: "关系代词作主语 + be动词/主动/被动",
          focus: "The man who is standing → The man standing",
        },
        {
          label: "不能缩减：关系代词作宾语",
          description: "关系代词作宾语时不能缩减为分词短语",
          focus: "The book that I bought → 不能缩减",
        },
        {
          label: "不能缩减：关系副词",
          description: "关系副词引导的定语从句不能缩减",
          focus: "The city where I live → 不能缩减",
        },
        {
          label: "特殊用法",
          description: "介词+关系代词、名词+of+关系代词、the way",
          focus: "both of whom, some of which, the way he talks",
        },
      ],
    },
    matrix: {
      headers: ["情况", "原句", "缩减后", "是否可缩减"],
      rows: [
        { time: "who is standing", forms: ["The man who is standing there", "The man standing there", "✓"] },
        { time: "who study hard", forms: ["The students who study hard", "The students studying hard", "✓"] },
        { time: "which was written", forms: ["The book which was written", "The book written", "✓"] },
        { time: "that I bought", forms: ["The book that I bought", "—", "✗"] },
        { time: "where I live", forms: ["The city where I live", "—", "✗"] },
        { time: "who lives in London", forms: ["My brother, who lives in London", "—", "✗（非限定性）"] },
      ],
    },
    tenses: [
      {
        name: "定语从句的缩减规则",
        nameEn: "Clause Reduction Rules",
        structure: "关系代词 + be动词 → 省略",
        usages: [
          { label: "省略who is/are", example: "The man <strong>who is standing there</strong> → The man <strong>standing there</strong>" },
          { label: "省略which was/were", example: "The book <strong>which was written by him</strong> → The book <strong>written by him</strong>" },
          { label: "主动→现在分词", example: "The students <strong>who study hard</strong> → The students <strong>studying hard</strong>" },
          { label: "被动→过去分词", example: "The house <strong>which was built in 1990</strong> → The house <strong>built in 1990</strong>" },
        ],
        timeWords: "只能缩减关系代词作主语的情况",
      },
      {
        name: "不能缩减的情况",
        nameEn: "Cannot Reduce",
        structure: "关系代词作宾语 / 关系副词 / 非限定性",
        usages: [
          { label: "关系代词作宾语", example: "The book <strong>that I bought</strong> → 不能缩减" },
          { label: "关系副词引导", example: "The city <strong>where I live</strong> → 不能缩减" },
          { label: "非限定性定语从句", example: "My brother, <strong>who lives in London</strong> → 不能缩减" },
        ],
        timeWords: "这三种情况不能缩减为分词短语",
      },
      {
        name: "介词 + 关系代词",
        nameEn: "Preposition + Relative Pronoun",
        structure: "先行词 + 介词 + whom/which + 从句",
        usages: [
          { label: "介词+whom", example: "The man <strong>to whom I talked</strong> is my friend." },
          { label: "介词+which", example: "The book <strong>in which I found the answer</strong> is old." },
          { label: "介词可后置", example: "The man <strong>(who/whom) I talked to</strong> is my friend." },
        ],
        timeWords: "介词+关系代词比介词后置更正式",
      },
      {
        name: "名词/代词 + of + 关系代词",
        nameEn: "Noun/Pronoun + of + whom/which",
        structure: "先行词 + 名词/代词 + of + whom/which + 从句",
        usages: [
          { label: "both of whom", example: "I have two brothers, <strong>both of whom</strong> are doctors." },
          { label: "some of which", example: "There are many books, <strong>some of which</strong> are old." },
          { label: "none of whom", example: "He has many friends, <strong>none of whom</strong> I know." },
          { label: "most of whom", example: "There are 50 students, <strong>most of whom</strong> are from China." },
        ],
        timeWords: "这种结构表示部分与整体的关系",
      },
      {
        name: "the way + 定语从句",
        nameEn: "the way + Relative Clause",
        structure: "the way + (that/in which) + 从句",
        usages: [
          { label: "省略关系词", example: "I don't like <strong>the way he talks</strong>." },
          { label: "用that", example: "I don't like <strong>the way that he talks</strong>." },
          { label: "用in which", example: "I don't like <strong>the way in which he talks</strong>." },
        ],
        timeWords: "the way后不能用how",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "不能缩减的定语从句强行缩减",
        wrong: "The city <strong>where I live</strong> → ~~The city living~~",
        correct: "The city <strong>where I live</strong>（不能缩减）",
        reason: "关系副词引导的定语从句不能缩减。",
      },
      {
        title: "介词位置错误",
        wrong: "The man <strong>whom I talked to him</strong> is my friend.",
        correct: "The man <strong>whom I talked to</strong> is my friend.",
        reason: "关系代词作宾语时不能同时保留代词。",
      },
      {
        title: "of whom/of which用法错误",
        wrong: "I have two brothers, <strong>both of they</strong> are doctors.",
        correct: "I have two brothers, <strong>both of whom</strong> are doctors.",
        reason: "of后用whom/which，不用they/them。",
      },
      {
        title: "the way后用how",
        wrong: "The way <strong>how he talks</strong> is strange.",
        correct: "The way <strong>(that/in which) he talks</strong> is strange.",
        reason: "the way后不能用how，用that/in which或省略。",
      },
    ],
    keyQuestions: [
      "关系代词在从句中作什么成分？（主语可缩减，宾语不可）",
      "是关系代词还是关系副词？（关系副词不可缩减）",
      "是限定性还是非限定性？（非限定性不可缩减）",
    ],
    stateVerbs: {
      categories: [
        { label: "可缩减", verbs: ["who is standing → standing", "which was written → written", "who study hard → studying hard"] },
        { label: "不可缩减", verbs: ["that I bought", "where I live", "who lives in London (非限定性)"] },
        { label: "特殊结构", verbs: ["both of whom", "some of which", "the way he talks"] },
      ],
      example: {
        wrong: "The city <strong>where I live</strong> → The city living.",
        correct: "The city <strong>where I live</strong>（不能缩减）",
        note: "关系副词引导的定语从句不能缩减为分词短语。",
      },
    },
  },
  practice: [
    {
      title: "定语从句缩减",
      titleEn: "Clause Reduction",
      type: "fill",
      items: [
        { question: "The man who is standing there is my friend. → The man ______ there is my friend.", answer: "standing" },
        { question: "The book which was written by him is interesting. → The book ______ by him is interesting.", answer: "written" },
        { question: "The students who study hard will pass. → The students ______ hard will pass.", answer: "studying" },
        { question: "The house which was built in 1990 is old. → The house ______ in 1990 is old.", answer: "built" },
      ],
    },
    {
      title: "of whom/of which练习",
      titleEn: "of whom/of which Practice",
      type: "fill",
      items: [
        { question: "I have two brothers, both ______ are doctors.", answer: "of whom" },
        { question: "There are many books, some ______ are old.", answer: "of which" },
        { question: "He has many friends, none ______ I know.", answer: "of whom" },
        { question: "There are 50 students, most ______ are from China.", answer: "of whom" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "The man whom I talked to him is my friend.", answer: "The man <strong>whom I talked to</strong> is my friend.（去掉him）" },
        { question: "I have two brothers, both of they are doctors.", answer: "I have two brothers, <strong>both of whom</strong> are doctors." },
        { question: "The way how he talks is strange.", answer: "The way <strong>(that/in which) he talks</strong> is strange.（去掉how）" },
        { question: "The book that I bought interesting.", answer: "The book <strong>that I bought</strong> is interesting.（加is）" },
      ],
    },
  ],
  production: [
    {
      title: "句子缩减练习",
      titleEn: "Sentence Reduction",
      description: "将以下定语从句缩减为短语。",
      example: [
        "The girl who is singing is my sister. → The girl <strong>singing</strong> is my sister.",
        "The book which was published last year is a bestseller. → The book <strong>published last year</strong> is a bestseller.",
      ],
    },
    {
      title: "写作练习",
      titleEn: "Writing Practice",
      description: "用of whom/of which和the way结构写一段话描述你的班级或公司。",
      example: [
        "I have many classmates, <strong>most of whom</strong> are from China.",
        "There are many courses, <strong>some of which</strong> are very difficult.",
        "I like <strong>the way</strong> she teaches.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "缩减规则",
        items: ["关系代词 + be动词 → 省略", "主动动词 → 现在分词", "被动动词 → 过去分词"],
      },
      {
        title: "不能缩减的情况",
        items: ["关系代词作宾语", "关系副词引导", "非限定性定语从句"],
      },
      {
        title: "特殊用法",
        items: ["介词 + 关系代词（to whom, in which）", "名词/代词 + of + whom/which", "the way + 定语从句（不能用how）"],
      },
    ],
    mindMap: `定语从句高级
├── 缩减规则
│   ├── who is standing → standing
│   ├── which was written → written
│   └── who study hard → studying hard
├── 不能缩减
│   ├── 关系代词作宾语
│   ├── 关系副词引导
│   └── 非限定性定语从句
├── 特殊用法
│   ├── 介词 + whom/which
│   ├── both of whom / some of which
│   └── the way (that/in which)
└── 注意事项
    ├── of后用whom/which
    └── the way后不用how`,
    selfTest: [
      {
        question: "The man ______ is standing there is my friend.",
        options: ["who", "standing", "stood"],
        answer: "who",
      },
      {
        question: "The book ______ by him is interesting.",
        options: ["writing", "written", "wrote"],
        answer: "written",
      },
      {
        question: "I have two brothers, both ______ are doctors.",
        options: ["of them", "of whom", "of who"],
        answer: "of whom",
      },
      {
        question: "The way ______ he talks is strange.",
        options: ["how", "that", "which"],
        answer: "that",
      },
      {
        question: "The city ______ I live is beautiful.",
        options: ["where", "which", "that"],
        answer: "where",
      },
    ],
  },
};

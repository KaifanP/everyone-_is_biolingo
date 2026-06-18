import { UnitData } from "./unit-01-data";

export const unit17Data: UnitData = {
  info: {
    id: "unit-17",
    moduleId: "03",
    number: 17,
    title: "定语从句入门——限定性定语从句",
    titleEn: "Relative Clauses: Defining",
  },
  objectives: [
    "理解定语从句的概念和功能",
    "掌握关系代词who/whom/whose/which/that的用法",
    "掌握关系副词where/when/why的用法",
    "在句子中正确使用限定性定语从句",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "The man <strong>who came</strong> is my friend.",
        "The book <strong>that I bought</strong> is interesting.",
        "The city <strong>where I live</strong> is beautiful.",
        "The time <strong>when we met</strong> was special.",
      ],
      answer:
        "这些划线部分都是<strong>定语从句</strong>，用来修饰前面的名词：<strong>who came</strong>修饰the man，<strong>that I bought</strong>修饰the book，<strong>where I live</strong>修饰the city，<strong>when we met</strong>修饰the time。",
    },
    comparison: {
      chinese: [
        { text: "昨天来的那个人是我的朋友。", note: "\"昨天来的\"修饰\"那个人\"" },
        { text: "我买的书很有趣。", note: "\"我买的\"修饰\"书\"" },
        { text: "我住的城市很美。", note: "\"我住的\"修饰\"城市\"" },
      ],
      english: [
        { text: "The man <strong>who came yesterday</strong> is my friend.", note: "who引导定语从句" },
        { text: "The book <strong>that I bought</strong> is interesting.", note: "that引导定语从句" },
        { text: "The city <strong>where I live</strong> is beautiful.", note: "where引导定语从句" },
      ],
      conclusion:
        "中文用\"……的\"来修饰名词，英文用<strong>定语从句（Relative Clause）</strong>来修饰名词。定语从句放在被修饰的名词（先行词）后面，由<strong>关系代词或关系副词</strong>引导。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "概念：什么是定语从句",
          description: "定语从句是修饰名词的从句，相当于形容词的作用",
          example: "The man <strong>who came yesterday</strong> is my friend.（who came yesterday修饰the man）",
        },
        {
          label: "先行词",
          description: "被定语从句修饰的名词叫先行词",
          example: "The man who came...（the man是先行词）",
        },
        {
          label: "关系词的作用",
          description: "关系词引导定语从句，并在从句中充当成分",
          example: "The man <strong>who</strong> came...（who在从句中作主语）",
        },
      ],
      aspect: [
        {
          label: "关系代词",
          description: "who/whom/whose/which/that",
          focus: "在从句中作主语、宾语、定语",
        },
        {
          label: "关系副词",
          description: "where/when/why",
          focus: "在从句中作状语",
        },
        {
          label: "that vs which",
          description: "限定性定语从句中通常可互换，但有特殊规则",
          focus: "不定代词/序数词/最高级后只能用that",
        },
        {
          label: "省略关系词",
          description: "关系代词作宾语时可以省略",
          focus: "The man (who/whom/that) I met is my friend.",
        },
      ],
    },
    matrix: {
      headers: ["关系词", "指代", "在从句中作", "例句"],
      rows: [
        { time: "who", forms: ["人", "主语/宾语", "The man who came is my friend."] },
        { time: "whom", forms: ["人", "宾语", "The man whom I met is my friend."] },
        { time: "whose", forms: ["人/物", "定语", "The man whose car is red..."] },
        { time: "which", forms: ["物", "主语/宾语", "The book which I bought..."] },
        { time: "that", forms: ["人/物", "主语/宾语", "The book that I bought..."] },
        { time: "where", forms: ["地点", "状语", "The city where I live..."] },
        { time: "when", forms: ["时间", "状语", "The time when we met..."] },
        { time: "why", forms: ["原因", "状语", "The reason why he left..."] },
      ],
    },
    tenses: [
      {
        name: "who/that指人作主语",
        nameEn: "who/that as Subject (person)",
        structure: "先行词 + who/that + 谓语 + ...",
        usages: [
          { label: "作主语", example: "The man <strong>who/that came</strong> is my friend." },
          { label: "进行时", example: "The girl <strong>who/that is singing</strong> is my sister." },
          { label: "被动语态", example: "The student <strong>who/that was chosen</strong> is happy." },
        ],
        timeWords: "who和that在指人作主语时可互换",
      },
      {
        name: "who/whom/that指人作宾语",
        nameEn: "who/whom/that as Object (person)",
        structure: "先行词 + who/whom/that + 主语 + 谓语 + ...",
        usages: [
          { label: "作宾语", example: "The man <strong>(who/whom/that) I met</strong> is my friend." },
          { label: "可省略", example: "The man <strong>I met</strong> is my friend." },
          { label: "介词后用whom", example: "The man <strong>to whom I talked</strong> is my friend." },
        ],
        timeWords: "作宾语时关系代词可以省略",
      },
      {
        name: "whose表示所属",
        nameEn: "whose for Possession",
        structure: "先行词 + whose + 名词 + ...",
        usages: [
          { label: "指人", example: "The man <strong>whose car is red</strong> is my friend." },
          { label: "指物", example: "The book <strong>whose cover is blue</strong> is mine." },
          { label: "所属关系", example: "The student <strong>whose father is a doctor</strong> studies hard." },
        ],
        timeWords: "whose表示\"谁的\"，可以指人也可以指物",
      },
      {
        name: "which/that指物",
        nameEn: "which/that for Things",
        structure: "先行词 + which/that + 主语 + 谓语 + ...",
        usages: [
          { label: "作主语", example: "The book <strong>which/that is on the desk</strong> is mine." },
          { label: "作宾语", example: "The book <strong>(which/that) I bought</strong> is interesting." },
          { label: "可省略", example: "The book <strong>I bought</strong> is interesting." },
        ],
        timeWords: "which和that在限定性定语从句中通常可互换",
      },
      {
        name: "where/when/why关系副词",
        nameEn: "where/when/why",
        structure: "先行词 + where/when/why + 主语 + 谓语 + ...",
        usages: [
          { label: "where = in/at which", example: "The city <strong>where I live</strong> is beautiful." },
          { label: "when = in/on which", example: "The time <strong>when we met</strong> was special." },
          { label: "why = for which", example: "The reason <strong>why he left</strong> is unknown." },
        ],
        timeWords: "关系副词在从句中作状语，不能省略",
      },
      {
        name: "只能用that的情况",
        nameEn: "Only that",
        structure: "先行词 + that + ...",
        usages: [
          { label: "不定代词后", example: "Everything <strong>that he said</strong> is true." },
          { label: "序数词后", example: "The first thing <strong>that I did</strong> was to call him." },
          { label: "最高级后", example: "The best movie <strong>that I've seen</strong> is Inception." },
          { label: "the only/very/same后", example: "The only person <strong>that I trust</strong> is my mother." },
          { label: "既有人又有物", example: "The man and his dog <strong>that I saw</strong> were walking." },
        ],
        timeWords: "这些情况下不能用which替代that",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "关系代词和人称代词重复",
        wrong: "The man <strong>who he came</strong> is my friend.",
        correct: "The man <strong>who came</strong> is my friend.",
        reason: "关系代词已经代替了人称代词，不能重复。",
      },
      {
        title: "关系副词和介词重复",
        wrong: "The city <strong>where I live in</strong> is beautiful.",
        correct: "The city <strong>where I live</strong> is beautiful.",
        reason: "where已经包含了介词的含义，不能重复。",
      },
      {
        title: "that和which混用",
        wrong: "Everything <strong>which he said</strong> is true.",
        correct: "Everything <strong>that he said</strong> is true.",
        reason: "先行词是不定代词时只能用that。",
      },
      {
        title: "关系代词作宾语时重复",
        wrong: "The book <strong>that I bought it</strong> is interesting.",
        correct: "The book <strong>that I bought</strong> is interesting.",
        reason: "关系代词作宾语时不能同时保留代词。",
      },
    ],
    keyQuestions: [
      "先行词是人还是物？（决定用who/which/that）",
      "关系词在从句中作什么成分？（主语/宾语/状语）",
      "是否属于只能用that的情况？",
    ],
    stateVerbs: {
      categories: [
        { label: "指人", verbs: ["who came", "whom I met", "whose car is red"] },
        { label: "指物", verbs: ["which I bought", "that is on the desk", "whose cover is blue"] },
        { label: "关系副词", verbs: ["where I live", "when we met", "why he left"] },
      ],
      example: {
        wrong: "The man <strong>who he came</strong> is my friend.",
        correct: "The man <strong>who came</strong> is my friend.",
        note: "关系代词已经代替了人称代词，不能重复使用。",
      },
    },
  },
  practice: [
    {
      title: "关系代词填空",
      titleEn: "Relative Pronoun Fill-in",
      type: "fill",
      items: [
        { question: "The man ______ came is my friend.", answer: "who/that" },
        { question: "The book ______ I bought is interesting.", answer: "which/that" },
        { question: "The city ______ I live is beautiful.", answer: "where" },
        { question: "The reason ______ he left is unknown.", answer: "why" },
        { question: "The girl ______ father is a doctor studies hard.", answer: "whose" },
        { question: "Everything ______ he said is true.", answer: "that" },
      ],
    },
    {
      title: "句子合并",
      titleEn: "Sentence Combining",
      type: "fill",
      items: [
        { question: "The book is interesting. I bought it yesterday. → The book ______ I bought yesterday is interesting.", answer: "that/which" },
        { question: "The city is beautiful. I live there. → The city ______ I live is beautiful.", answer: "where" },
        { question: "The student will pass. He studies hard. → The student ______ studies hard will pass.", answer: "who/that" },
        { question: "The reason is unknown. He left for that reason. → The reason ______ he left is unknown.", answer: "why" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "The man who he came is my friend.", answer: "The man <strong>who</strong> came is my friend.（去掉he）" },
        { question: "The city where I live in is beautiful.", answer: "The city <strong>where</strong> I live is beautiful.（去掉in）" },
        { question: "Everything which he said is true.", answer: "Everything <strong>that</strong> he said is true.（不定代词后用that）" },
        { question: "The book that I bought it is interesting.", answer: "The book <strong>that</strong> I bought is interesting.（去掉it）" },
      ],
    },
  ],
  production: [
    {
      title: "描述身边的人和物",
      titleEn: "Describe People and Things",
      description: "用定语从句描述你身边的人和物。至少包含5个句子。",
      example: [
        "The teacher <strong>who teaches us English</strong> is very kind.",
        "The book <strong>that I'm reading</strong> is about history.",
        "The city <strong>where I was born</strong> is small.",
        "The reason <strong>why I study English</strong> is to travel the world.",
      ],
    },
    {
      title: "句子合并练习",
      titleEn: "Sentence Combining",
      description: "用定语从句将两个简单句合并为一个复合句。",
      example: [
        "The man is my friend. He came yesterday. → The man <strong>who came yesterday</strong> is my friend.",
        "The book is interesting. I bought it. → The book <strong>that I bought</strong> is interesting.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "关系代词",
        items: ["who/whom：指人", "which：指物", "that：指人或物", "whose：表示所属"],
      },
      {
        title: "关系副词",
        items: ["where：地点 (= in/at which)", "when：时间 (= in/on which)", "why：原因 (= for which)"],
      },
      {
        title: "只能用that",
        items: ["不定代词后（everything, anything等）", "序数词/最高级后", "the only/very/same后", "既有人又有物"],
      },
      {
        title: "省略规则",
        items: ["关系代词作宾语时可省略", "关系副词不能省略"],
      },
    ],
    mindMap: `限定性定语从句
├── 关系代词
│   ├── who/whom：指人
│   ├── which：指物
│   ├── that：指人或物
│   └── whose：所属
├── 关系副词
│   ├── where：地点
│   ├── when：时间
│   └── why：原因
├── 只能用that
│   ├── 不定代词后
│   ├── 序数词/最高级后
│   ├── the only/very/same后
│   └── 既有人又有物
└── 省略规则
    └── 作宾语时可省略`,
    selfTest: [
      {
        question: "The man ______ came is my friend.",
        options: ["who", "which", "where"],
        answer: "who",
      },
      {
        question: "The book ______ I bought is interesting.",
        options: ["who", "which", "where"],
        answer: "which",
      },
      {
        question: "The city ______ I live is beautiful.",
        options: ["who", "which", "where"],
        answer: "where",
      },
      {
        question: "Everything ______ he said is true.",
        options: ["which", "that", "where"],
        answer: "that",
      },
      {
        question: "The girl ______ father is a doctor studies hard.",
        options: ["who", "whose", "which"],
        answer: "whose",
      },
    ],
  },
};

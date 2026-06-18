import { UnitData } from "./unit-01-data";

export const unit18Data: UnitData = {
  info: {
    id: "unit-18",
    moduleId: "03",
    number: 18,
    title: "定语从句进阶——非限定性定语从句",
    titleEn: "Relative Clauses: Non-defining",
  },
  objectives: [
    "理解限定性和非限定性定语从句的区别",
    "掌握非限定性定语从句的用法",
    "理解which指代整个句子的用法",
    "在写作中正确使用非限定性定语从句",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "The students <strong>who passed the exam</strong> are happy.",
        "The students, <strong>who passed the exam</strong>, are happy.",
        "My brother <strong>who lives in London</strong> is a doctor.",
        "My brother, <strong>who lives in London</strong>, is a doctor.",
      ],
      answer:
        "第1、3句是<strong>限定性</strong>定语从句（无逗号），限定先行词；第2、4句是<strong>非限定性</strong>定语从句（有逗号），补充说明先行词。限定性区分\"哪些\"，非限定性补充信息。",
    },
    comparison: {
      chinese: [
        { text: "通过考试的学生很高兴。", note: "\"通过考试的\"限定\"哪些学生\"" },
        { text: "学生们很高兴，他们都通过了考试。", note: "\"都通过了考试\"补充说明" },
      ],
      english: [
        { text: "The students <strong>who passed</strong> are happy.", note: "限定性：区分哪些学生" },
        { text: "The students, <strong>who passed</strong>, are happy.", note: "非限定性：补充说明" },
      ],
      conclusion:
        "限定性定语从句<strong>区分先行词</strong>（无逗号），非限定性定语从句<strong>补充说明</strong>（有逗号）。非限定性定语从句<strong>不能用that</strong>。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "限定性定语从句",
          description: "限定先行词，区分\"哪些\"，无逗号",
          example: "The students <strong>who passed</strong> are happy.（限定\"哪些学生\"）",
        },
        {
          label: "非限定性定语从句",
          description: "补充说明先行词，有逗号，省略后意思完整",
          example: "The students, <strong>who passed</strong>, are happy.（补充说明\"学生们都通过了\"）",
        },
        {
          label: "which指代整个句子",
          description: "非限定性定语从句中which可以指代前面整个句子",
          example: "He passed the exam, <strong>which surprised everyone</strong>.（which指代\"他通过考试\"这件事）",
        },
      ],
      aspect: [
        {
          label: "限定性（无逗号）",
          description: "限定先行词，不能省略",
          focus: "The students who passed are happy.",
        },
        {
          label: "非限定性（有逗号）",
          description: "补充说明，可省略",
          focus: "My brother, who lives in London, is a doctor.",
        },
        {
          label: "which指代句子",
          description: "which指代整个主句",
          focus: "He passed, which surprised everyone.",
        },
        {
          label: "不能用that",
          description: "非限定性定语从句不能用that",
          focus: "✗ My brother, that lives in London...",
        },
      ],
    },
    matrix: {
      headers: ["", "限定性", "非限定性"],
      rows: [
        { time: "功能", forms: ["限定先行词", "补充说明"] },
        { time: "逗号", forms: ["无", "有"] },
        { time: "that", forms: ["可用", "不可用"] },
        { time: "省略", forms: ["意思不完整", "意思完整"] },
        { time: "which指代句子", forms: ["不可以", "可以"] },
      ],
    },
    tenses: [
      {
        name: "非限定性定语从句：补充说明",
        nameEn: "Non-defining: Additional Info",
        structure: "先行词, + 关系词 + 从句, + 主句",
        usages: [
          { label: "补充说明人", example: "My brother, <strong>who lives in London</strong>, is a doctor." },
          { label: "补充说明物", example: "The book, <strong>which I bought yesterday</strong>, is interesting." },
          { label: "补充说明地点", example: "Beijing, <strong>which is the capital of China</strong>, is a big city." },
        ],
        timeWords: "非限定性定语从句必须用逗号隔开",
      },
      {
        name: "which指代整个句子",
        nameEn: "which for Whole Sentence",
        structure: "主句, + which + 谓语 + ...",
        usages: [
          { label: "指代整个句子", example: "He passed the exam, <strong>which surprised everyone</strong>." },
          { label: "表示结果", example: "She didn't come, <strong>which made me sad</strong>." },
          { label: "表示评价", example: "He won the game, <strong>which was unexpected</strong>." },
        ],
        timeWords: "which指代整个主句时，从句谓语用单数",
      },
      {
        name: "非限定性定语从句的关系词",
        nameEn: "Relative Words in Non-defining",
        structure: "先行词, + who/whom/whose/which/where/when + 从句",
        usages: [
          { label: "who", example: "My brother, <strong>who lives in London</strong>, is a doctor." },
          { label: "whom", example: "My brother, <strong>whom I love</strong>, is kind." },
          { label: "whose", example: "My brother, <strong>whose wife is a teacher</strong>, is kind." },
          { label: "which", example: "The book, <strong>which I bought</strong>, is interesting." },
          { label: "where", example: "Beijing, <strong>where I live</strong>, is big." },
          { label: "when", example: "Last year, <strong>when I graduated</strong>, was special." },
        ],
        timeWords: "非限定性定语从句不能用that",
      },
      {
        name: "介词 + which",
        nameEn: "Preposition + which",
        structure: "先行词, + 介词 + which + 从句",
        usages: [
          { label: "介词+which", example: "The book, <strong>in which I found the answer</strong>, is old." },
          { label: "with whom", example: "My brother, <strong>with whom I live</strong>, is a doctor." },
          { label: "更正式", example: "介词+which比介词+关系代词更正式" },
        ],
        timeWords: "介词+which是非限定性定语从句的常见结构",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "非限定性定语从句用that",
        wrong: "My brother, <strong>that lives in London</strong>, is a doctor.",
        correct: "My brother, <strong>who lives in London</strong>, is a doctor.",
        reason: "非限定性定语从句不能用that。",
      },
      {
        title: "缺少逗号",
        wrong: "My brother who lives in London is a doctor.（想表达非限定性）",
        correct: "My brother, <strong>who lives in London</strong>, is a doctor.",
        reason: "非限定性定语从句必须用逗号隔开。",
      },
      {
        title: "which指代不清",
        wrong: "He passed the exam, which was good.",
        correct: "He passed the exam, <strong>which surprised everyone</strong>.",
        reason: "which指代整个句子时，从句要有明确的含义。",
      },
    ],
    keyQuestions: [
      "是限定性还是非限定性？（看逗号）",
      "非限定性定语从句能否省略？（能省略说明是非限定性）",
      "which指代什么？（先行词还是整个句子）",
    ],
    stateVerbs: {
      categories: [
        { label: "限定性", verbs: ["who passed", "that I bought", "where I live"] },
        { label: "非限定性", verbs: ["who lives in London", "which I bought", "where I live"] },
        { label: "which指代句子", verbs: ["which surprised everyone", "which made me sad", "which was unexpected"] },
      ],
      example: {
        wrong: "My brother, <strong>that lives in London</strong>, is a doctor.",
        correct: "My brother, <strong>who lives in London</strong>, is a doctor.",
        note: "非限定性定语从句不能用that，只能用who/whom/which等。",
      },
    },
  },
  practice: [
    {
      title: "限定性 vs 非限定性判断",
      titleEn: "Defining vs Non-defining",
      type: "fill",
      items: [
        { question: "The students who passed are happy. (限定性/非限定性)", answer: "限定性" },
        { question: "The students, who passed, are happy. (限定性/非限定性)", answer: "非限定性" },
        { question: "My brother who lives in London is a doctor. (限定性/非限定性)", answer: "限定性" },
        { question: "My brother, who lives in London, is a doctor. (限定性/非限定性)", answer: "非限定性" },
      ],
    },
    {
      title: "非限定性定语从句填空",
      titleEn: "Non-defining Clause Fill-in",
      type: "fill",
      items: [
        { question: "My brother, ______ lives in London, is a doctor.", answer: "who" },
        { question: "The book, ______ I bought yesterday, is interesting.", answer: "which" },
        { question: "He passed the exam, ______ surprised everyone.", answer: "which" },
        { question: "Beijing, ______ is the capital of China, is a big city.", answer: "which" },
        { question: "Last year, ______ I graduated, was special.", answer: "when" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "My brother, that lives in London, is a doctor.", answer: "My brother, <strong>who</strong> lives in London, is a doctor.（非限定性不能用that）" },
        { question: "The students who passed, are happy.", answer: "The students<strong>,</strong> who passed<strong>,</strong> are happy.（非限定性加逗号）" },
        { question: "He passed the exam that surprised everyone.", answer: "He passed the exam<strong>,</strong> which surprised everyone.（非限定性加逗号）" },
        { question: "The book, which I bought it, is interesting.", answer: "The book, which I bought, is interesting.（去掉it）" },
      ],
    },
  ],
  production: [
    {
      title: "句子合并",
      titleEn: "Sentence Combining",
      description: "用非限定性定语从句合并两个句子。",
      example: [
        "My brother is a doctor. He lives in London. → My brother, <strong>who lives in London</strong>, is a doctor.",
        "The book is interesting. I bought it yesterday. → The book, <strong>which I bought yesterday</strong>, is interesting.",
        "He passed the exam. This surprised everyone. → He passed the exam, <strong>which surprised everyone</strong>.",
      ],
    },
    {
      title: "写作练习",
      titleEn: "Writing Practice",
      description: "用非限定性定语从句描述你的家人、朋友或城市。",
      example: [
        "My mother, <strong>who is a teacher</strong>, is very kind.",
        "My hometown, <strong>where I grew up</strong>, is beautiful.",
        "I passed the exam, <strong>which made my parents happy</strong>.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "限定性 vs 非限定性",
        items: ["限定性：无逗号，限定先行词", "非限定性：有逗号，补充说明", "非限定性省略后意思完整"],
      },
      {
        title: "非限定性规则",
        items: ["不能用that", "必须用逗号隔开", "which可以指代整个句子"],
      },
      {
        title: "which指代句子",
        items: ["He passed, which surprised everyone.", "从句谓语用单数", "表示结果或评价"],
      },
      {
        title: "介词+which",
        items: ["in which, with whom等", "比介词+关系代词更正式"],
      },
    ],
    mindMap: `非限定性定语从句
├── 限定性 vs 非限定性
│   ├── 限定性：无逗号，限定
│   └── 非限定性：有逗号，补充
├── 非限定性规则
│   ├── 不能用that
│   ├── 必须有逗号
│   └── 可省略
├── which指代句子
│   ├── He passed, which surprised...
│   └── 从句谓语用单数
└── 介词+which
    ├── in which
    ├── with whom
    └── 更正式`,
    selfTest: [
      {
        question: "My brother, ______ lives in London, is a doctor.",
        options: ["who", "that", "which"],
        answer: "who",
      },
      {
        question: "He passed the exam, ______ surprised everyone.",
        options: ["that", "which", "who"],
        answer: "which",
      },
      {
        question: "The students ______ passed are happy. (限定性)",
        options: ["who", ", who,", "that"],
        answer: "who",
      },
      {
        question: "The book, ______ I bought, is interesting.",
        options: ["that", "which", "who"],
        answer: "which",
      },
      {
        question: "My brother ______ lives in London is a doctor. (限定性)",
        options: ["who", ", who,", "that"],
        answer: "who",
      },
    ],
  },
};

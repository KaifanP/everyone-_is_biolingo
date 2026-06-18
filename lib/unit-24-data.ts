import { UnitData } from "./unit-01-data";

export const unit24Data: UnitData = {
  info: {
    id: "unit-24",
    moduleId: "03",
    number: 24,
    title: "从句综合与实战",
    titleEn: "Clauses: Comprehensive Review & Practice",
  },
  objectives: [
    "综合运用名词性从句、定语从句和状语从句",
    "在复杂语境中选择正确的从句类型",
    "在写作中灵活运用各种从句",
    "在考试中准确完成从句相关题目",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I know <strong>that he is right</strong>.",
        "The man <strong>who came</strong> is my friend.",
        "I'll go <strong>if he goes</strong>.",
        "<strong>What he said</strong> surprised me.",
        "The city <strong>where I live</strong> is beautiful.",
        "<strong>Although he was tired</strong>, he kept working.",
      ],
      answer:
        "这些句子分别包含三种从句：<br>that he is right → <strong>名词性从句</strong>（宾语从句）<br>who came → <strong>定语从句</strong><br>if he goes → <strong>状语从句</strong>（条件）<br>What he said → <strong>名词性从句</strong>（主语从句）<br>where I live → <strong>定语从句</strong><br>Although... → <strong>状语从句</strong>（让步）",
    },
    comparison: {
      chinese: [
        { text: "我知道他是对的。", note: "名词性从句——作宾语" },
        { text: "昨天来的那个人是我的朋友。", note: "定语从句——修饰人" },
        { text: "如果他去，我就去。", note: "状语从句——条件" },
      ],
      english: [
        { text: "I know <strong>that he is right</strong>.", note: "名词性从句" },
        { text: "The man <strong>who came</strong> is my friend.", note: "定语从句" },
        { text: "I'll go <strong>if he goes</strong>.", note: "状语从句" },
      ],
      conclusion:
        "三大从句的区别在于<strong>功能</strong>：名词性从句作名词，定语从句作形容词（修饰名词），状语从句作副词（修饰动词/句子）。正确判断从句类型是选择引导词的关键。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "名词性从句",
          description: "作名词——主语、宾语、表语、同位语",
          example: "I know <strong>that he is right</strong>.（宾语从句）",
        },
        {
          label: "定语从句",
          description: "作形容词——修饰名词",
          example: "The man <strong>who came</strong> is my friend.（修饰the man）",
        },
        {
          label: "状语从句",
          description: "作副词——修饰动词或整个句子",
          example: "I'll go <strong>if he goes</strong>.（条件状语）",
        },
      ],
      aspect: [
        {
          label: "判断从句功能",
          description: "作名词→名词性从句；修饰名词→定语从句；修饰动词→状语从句",
          focus: "看从句在句子中充当什么成分",
        },
        {
          label: "选择引导词",
          description: "名词性：that/whether/what；定语：who/which/where；状语：if/when/because",
          focus: "引导词取决于从句类型和含义",
        },
        {
          label: "从句嵌套",
          description: "一个句子中可以包含多个不同类型的从句",
          focus: "I know that the man who came is my friend.",
        },
      ],
    },
    matrix: {
      headers: ["从句类型", "功能", "引导词", "例句"],
      rows: [
        { time: "名词性", forms: ["作名词", "that/whether/what/who等", "I know that he is right."] },
        { time: "名词性", forms: ["主语从句", "What/That/Whether", "What he said surprised me."] },
        { time: "名词性", forms: ["宾语从句", "that/whether/what", "I don't know whether he will come."] },
        { time: "名词性", forms: ["同位语从句", "that", "The news that he won made us happy."] },
        { time: "定语", forms: ["修饰名词", "who/which/that/where/when", "The man who came is my friend."] },
        { time: "定语", forms: ["限定性", "who/which/that", "The book that I bought is interesting."] },
        { time: "定语", forms: ["非限定性", "who/which（不能用that）", "My brother, who lives in London, is a doctor."] },
        { time: "状语", forms: ["时间", "when/while/as/before/after", "When he comes, I'll go."] },
        { time: "状语", forms: ["条件", "if/unless/as long as", "If it rains, we'll stay home."] },
        { time: "状语", forms: ["原因", "because/since/as", "Because it rained, we stayed home."] },
        { time: "状语", forms: ["让步", "although/even though", "Although he was tired, he kept working."] },
      ],
    },
    tenses: [
      {
        name: "名词性从句引导词",
        nameEn: "Noun Clause Markers",
        structure: "that / whether / what / who / where / when / why / how",
        usages: [
          { label: "that（陈述句）", example: "I know <strong>that</strong> he is right." },
          { label: "whether（是否）", example: "I don't know <strong>whether</strong> he will come." },
          { label: "what（在从句中作成分）", example: "<strong>What</strong> he said surprised me." },
          { label: "who/where/when/why/how", example: "I don't know <strong>where</strong> he lives." },
        ],
        timeWords: "what = the thing that，在从句中作成分；that不作成分",
      },
      {
        name: "定语从句引导词",
        nameEn: "Relative Clause Markers",
        structure: "who/whom/which/that/whose/where/when/why",
        usages: [
          { label: "who/whom（人）", example: "The man <strong>who</strong> came is my friend." },
          { label: "which（物）", example: "The book <strong>which</strong> I bought is interesting." },
          { label: "that（人/物）", example: "Everything <strong>that</strong> he said is true." },
          { label: "where（地点）", example: "The city <strong>where</strong> I live is beautiful." },
          { label: "when（时间）", example: "I remember the day <strong>when</strong> we met." },
          { label: "why（原因）", example: "The reason <strong>why</strong> he left is unknown." },
        ],
        timeWords: "非限定性定语从句不能用that",
      },
      {
        name: "状语从句引导词",
        nameEn: "Adverbial Clause Markers",
        structure: "when/if/because/although/as...等",
        usages: [
          { label: "时间", example: "<strong>When</strong> he comes, I'll go." },
          { label: "条件", example: "<strong>If</strong> it rains, we'll stay home." },
          { label: "原因", example: "<strong>Because</strong> it rained, we stayed home." },
          { label: "让步", example: "<strong>Although</strong> he was tired, he kept working." },
          { label: "目的", example: "He spoke quietly <strong>so that</strong> no one could hear." },
          { label: "结果", example: "It was <strong>so cold that</strong> the river froze." },
        ],
        timeWords: "状语从句引导词的选择取决于逻辑关系",
      },
      {
        name: "从句选择策略",
        nameEn: "Clause Selection Strategy",
        structure: "第一步：判断功能 → 第二步：选择引导词",
        usages: [
          { label: "作名词→名词性从句", example: "I know <strong>that</strong> he is right.（宾语）" },
          { label: "修饰名词→定语从句", example: "The man <strong>who</strong> came is my friend." },
          { label: "修饰动词→状语从句", example: "I'll go <strong>if</strong> he goes." },
        ],
        timeWords: "先判断从句功能，再选择正确的引导词",
      },
      {
        name: "从句嵌套",
        nameEn: "Nested Clauses",
        structure: "一个句子中包含多个从句",
        usages: [
          { label: "名词性+定语", example: "I know <strong>that</strong> the man <strong>who came</strong> is my friend." },
          { label: "状语+名词性", example: "<strong>Although</strong> he was tired, he told me <strong>that</strong> he would come." },
          { label: "定语+状语", example: "The book <strong>that</strong> I bought <strong>when</strong> I was in London is interesting." },
        ],
        timeWords: "分析从句层次：先找主句，再逐层分析从句",
      },
      {
        name: "考试常见考点",
        nameEn: "Common Exam Points",
        structure: "引导词选择 / 语序 / that vs which / 时态一致",
        usages: [
          { label: "引导词选择", example: "I don't know <strong>whether</strong> he will come.（不用that）" },
          { label: "从句语序", example: "I don't know <strong>where he lives</strong>.（陈述语序）" },
          { label: "that vs which", example: "Everything <strong>that</strong> he said is true.（不定代词用that）" },
          { label: "非限定性", example: "My brother, <strong>who</strong> lives in London, is a doctor.（不用that）" },
          { label: "时态一致", example: "I'll call you when I <strong>arrive</strong>.（不用will arrive）" },
        ],
        timeWords: "这些是考试中最常见的从句考点",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "从句类型混淆",
        wrong: "I know <strong>what</strong> he is right.",
        correct: "I know <strong>that</strong> he is right.",
        reason: "what在从句中作成分，that不作成分。\"他是对的\"是完整句子，不需要what。",
      },
      {
        title: "定语从句和状语从句混淆",
        wrong: "The reason <strong>because</strong> he left is unknown.",
        correct: "The reason <strong>why</strong> he left is unknown.",
        reason: "reason后用why引导定语从句，不用because。",
      },
      {
        title: "从句语序错误",
        wrong: "I don't know <strong>where does he live</strong>.",
        correct: "I don't know <strong>where he lives</strong>.",
        reason: "名词性从句用陈述语序，不用疑问语序。",
      },
      {
        title: "非限定性定语从句用that",
        wrong: "My brother, <strong>that</strong> lives in London, is a doctor.",
        correct: "My brother, <strong>who</strong> lives in London, is a doctor.",
        reason: "非限定性定语从句不能用that引导。",
      },
      {
        title: "时间状语从句用将来时",
        wrong: "I'll call you when I <strong>will arrive</strong>.",
        correct: "I'll call you when I <strong>arrive</strong>.",
        reason: "时间状语从句中用一般现在时代替将来时。",
      },
    ],
    keyQuestions: [
      "从句在句子中作什么成分？（名词→名词性从句；修饰名词→定语；修饰动词→状语）",
      "引导词在从句中是否作成分？（what作成分，that不作）",
      "是限定性还是非限定性定语从句？（非限定性不能用that）",
      "从句用什么语序？（名词性从句用陈述语序）",
    ],
    stateVerbs: {
      categories: [
        { label: "名词性从句", verbs: ["that（不作成分）", "what（作成分）", "whether（是否）", "who/where/when/why/how"] },
        { label: "定语从句", verbs: ["who/whom（人）", "which（物）", "that（人/物）", "where/when/why", "非限定性不用that"] },
        { label: "状语从句", verbs: ["when/while（时间）", "if/unless（条件）", "because（原因）", "although（让步）"] },
      ],
      example: {
        wrong: "I know <strong>what</strong> he is right.",
        correct: "I know <strong>that</strong> he is right.",
        note: "\"他是对的\"是完整句子，用that（不作成分），不用what（需作成分）。",
      },
    },
  },
  practice: [
    {
      title: "从句类型判断",
      titleEn: "Clause Type Identification",
      type: "fill",
      items: [
        { question: "I know that he is right. → ______ 从句", answer: "名词性（宾语）" },
        { question: "The man who came is my friend. → ______ 从句", answer: "定语" },
        { question: "I'll go if he goes. → ______ 从句", answer: "状语（条件）" },
        { question: "What he said surprised me. → ______ 从句", answer: "名词性（主语）" },
        { question: "The city where I live is beautiful. → ______ 从句", answer: "定语" },
        { question: "Although he was tired, he kept working. → ______ 从句", answer: "状语（让步）" },
      ],
    },
    {
      title: "引导词选择",
      titleEn: "Marker Selection",
      type: "fill",
      items: [
        { question: "I don't know ______ he will come.", answer: "whether" },
        { question: "The man ______ came is my friend.", answer: "who/that" },
        { question: "I'll go ______ he goes.", answer: "if" },
        { question: "______ he said surprised me.", answer: "What" },
        { question: "The city ______ I live is beautiful.", answer: "where" },
        { question: "______ he was tired, he kept working.", answer: "Although" },
        { question: "The news ______ he won made us happy.", answer: "that" },
        { question: "It was ______ cold ______ the river froze.", answer: "so...that" },
      ],
    },
    {
      title: "复合句分析",
      titleEn: "Complex Sentence Analysis",
      type: "fill",
      items: [
        { question: "I know that the man who came is my friend. → 包含______个从句", answer: "2" },
        { question: "I know that the man who came is my friend. → that引导______从句", answer: "宾语" },
        { question: "I know that the man who came is my friend. → who引导______从句", answer: "定语" },
        { question: "Although he was tired, he told me that he would come. → that引导______从句", answer: "宾语" },
      ],
    },
    {
      title: "综合练习（考试模拟）",
      titleEn: "Comprehensive Practice",
      type: "fill",
      items: [
        { question: "I don't know ______ he will come. (A.that B.whether C.what)", answer: "B" },
        { question: "The man ______ came is my friend. (A.which B.who C.where)", answer: "B" },
        { question: "______ he said surprised me. (A.That B.Whether C.What)", answer: "C" },
        { question: "My brother, ______ lives in London, is a doctor. (A.that B.who C.which)", answer: "B" },
        { question: "I'll call you when I ______ home. (A.will arrive B.arrive C.arrived)", answer: "B" },
      ],
    },
  ],
  production: [
    {
      title: "段落写作",
      titleEn: "Paragraph Writing",
      description: "用至少3种不同类型的从句（名词性、定语、状语）写一段话描述你的学习经历。",
      example: [
        "I believe <strong>that</strong> learning English is important <strong>because</strong> it opens doors to many opportunities.",
        "The book <strong>that</strong> I'm reading, <strong>which</strong> was recommended by my teacher, has helped me understand grammar better.",
        "<strong>Although</strong> it's difficult, I'll keep studying <strong>until</strong> I become fluent.",
      ],
    },
    {
      title: "考试模拟",
      titleEn: "Exam Simulation",
      description: "完成10道综合题目，覆盖名词性从句、定语从句和状语从句。",
      example: [
        "1. I don't know <strong>whether</strong> he will come.（名词性从句）",
        "2. The man <strong>who</strong> came is my friend.（定语从句）",
        "3. <strong>If</strong> it rains, we'll stay home.（状语从句）",
        "4. My brother, <strong>who</strong> lives in London, is a doctor.（非限定性）",
        "5. I'll call you when I <strong>arrive</strong>.（时态一致）",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "三大从句类型",
        items: ["名词性从句：作名词（主语、宾语、表语、同位语）", "定语从句：作形容词（修饰名词）", "状语从句：作副词（修饰动词、句子）"],
      },
      {
        title: "从句选择策略",
        items: ["第一步：判断从句在句子中的作用", "第二步：选择正确的引导词"],
      },
      {
        title: "常见考点",
        items: ["引导词选择", "从句语序（陈述语序）", "that vs which（非限定性不用that）", "时态一致（时间状语从句用一般现在时）"],
      },
      {
        title: "写作应用",
        items: ["名词性从句：表达观点、事实", "定语从句：提供细节、描述", "状语从句：表达逻辑关系"],
      },
    ],
    mindMap: `从句综合与实战
├── 名词性从句（作名词）
│   ├── 主语从句：What he said surprised me.
│   ├── 宾语从句：I know that he is right.
│   ├── 表语从句：The problem is that...
│   └── 同位语从句：The news that...
├── 定语从句（修饰名词）
│   ├── 限定性：The man who came...
│   ├── 非限定性：My brother, who lives...
│   └── 特殊：of whom/which, the way
├── 状语从句（修饰动词）
│   ├── 时间：when/while/as/before/after
│   ├── 条件：if/unless/as long as
│   ├── 原因：because/since/as
│   ├── 让步：although/even though
│   └── 结果：so...that/such...that
└── 考试要点
    ├── 引导词选择
    ├── 陈述语序
    ├── that vs which
    └── 时态一致`,
    selfTest: [
      {
        question: "I know ______ he is right.",
        options: ["that", "what", "which"],
        answer: "that",
      },
      {
        question: "The man ______ came is my friend.",
        options: ["which", "who", "where"],
        answer: "who",
      },
      {
        question: "______ he said surprised me.",
        options: ["That", "Whether", "What"],
        answer: "What",
      },
      {
        question: "I don't know ______ he will come.",
        options: ["that", "whether", "what"],
        answer: "whether",
      },
      {
        question: "The city ______ I live is beautiful.",
        options: ["which", "where", "when"],
        answer: "where",
      },
      {
        question: "______ he was tired, he kept working.",
        options: ["Although", "But", "So"],
        answer: "Although",
      },
      {
        question: "The news ______ he won made us happy.",
        options: ["which", "what", "that"],
        answer: "that",
      },
      {
        question: "It was ______ cold ______ the river froze.",
        options: ["such...that", "so...that", "so...so"],
        answer: "so...that",
      },
      {
        question: "My brother, ______ lives in London, is a doctor.",
        options: ["that", "who", "which"],
        answer: "who",
      },
      {
        question: "I'll call you when I ______ home.",
        options: ["will arrive", "arrive", "arrived"],
        answer: "arrive",
      },
    ],
  },
};

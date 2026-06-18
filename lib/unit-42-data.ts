import { UnitData } from "./unit-01-data";

export const unit42Data: UnitData = {
  info: {
    id: "unit-42",
    moduleId: "07",
    number: 42,
    title: "词性与搭配综合与实战",
    titleEn: "Parts of Speech & Collocations Comprehensive Practice",
  },
  objectives: [
    "综合运用介词与连词的搭配规则",
    "掌握常见词性转换规律（动词→名词、形容词→名词、动词→形容词、名词→形容词）",
    "熟悉考试常见题型与解题策略",
    "提升阅读与写作中的词性运用准确性",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "How does word formation help in writing?",
        "Can you change the word form to make a sentence more formal?",
      ],
      answer:
        "词性转换可以让写作更加多样化，避免重复使用同一词性，提升文章的正式感和表达层次。",
    },
    comparison: {
      chinese: [
        {
          text: "他对音乐感兴趣（形容词 interested）",
          note: "口语化表达，使用形容词短语",
        },
        {
          text: "他对音乐有兴趣（名词 interest）",
          note: "更正式的表达，使用名词短语",
        },
      ],
      english: [
        {
          text: "He is interested in music.",
          note: "形容词形式（非正式）",
        },
        {
          text: "He has interest in music.",
          note: "名词形式（正式，词性转换）",
        },
      ],
      conclusion:
        "通过词性转换，同一含义可以用不同词性表达，增强语言的灵活性和正式度。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "动词→名词",
          description: "通过添加后缀将动词转换为名词",
          example: "decide → decision, develop → development, happy → happiness",
        },
        {
          label: "形容词→名词",
          description: "通过添加后缀将形容词转换为名词",
          example: "happy → happiness, important → importance, different → difference, possible → possibility",
        },
        {
          label: "动词→形容词",
          description: "通过添加-ing/-ed后缀将动词转换为形容词",
          example: "interest → interesting / interested, excite → exciting / excited",
        },
        {
          label: "名词→形容词",
          description: "通过添加后缀将名词转换为形容词",
          example: "beauty → beautiful, care → careless, help → helpful",
        },
      ],
      aspect: [
        {
          label: "常见搭配模式",
          description: "动词+形容词、形容词+形容词、名词+介词等固定搭配",
          focus: "feel happy, important information, interest in, depend on",
        },
        {
          label: "写作应用",
          description: "避免重复、增加多样性、提升正式语体",
          focus: "用不同词性表达相同含义，使文章更丰富",
        },
        {
          label: "考试重点",
          description: "词性填空、搭配选择、词性转换题",
          focus: "根据上下文判断正确词性，注意后缀变化规律",
        },
      ],
    },
    matrix: {
      headers: ["原始词性", "目标词性", "后缀", "例词"],
      rows: [
        { time: "动词→名词", forms: ["-tion", "decision", "-ment", "development", "-ness", "happiness"] },
        { time: "形容词→名词", forms: ["-ness", "happiness", "-ance", "importance", "-ence", "difference", "-ity", "possibility"] },
        { time: "动词→形容词", forms: ["-ing", "interesting", "-ed", "interested"] },
        { time: "名词→形容词", forms: ["-ful", "beautiful", "-less", "careless"] },
      ],
    },
    tenses: [
      {
        name: "词性转换规律",
        nameEn: "Word Formation Rules",
        structure: "词根 + 后缀 → 新词性",
        usages: [
          { label: "动词→名词 (-tion/-ment/-ness)", example: "decide → decision, develop → development" },
          { label: "形容词→名词 (-ness/-ance/-ence/-ity)", example: "happy → happiness, important → importance" },
          { label: "动词→形容词 (-ing/-ed)", example: "interest → interesting / interested" },
          { label: "名词→形容词 (-ful/-less)", example: "beauty → beautiful, care → careless" },
        ],
        timeWords: "写作、阅读理解、完形填空中频繁出现",
      },
      {
        name: "常见搭配",
        nameEn: "Common Collocations",
        structure: "verb+prep, adj+prep, noun+prep",
        usages: [
          { label: "动词+介词", example: "depend on, look at, listen to, belong to" },
          { label: "形容词+介词", example: "interested in, good at, afraid of, different from" },
          { label: "名词+介词", example: "interest in, reason for, solution to, effect on" },
        ],
        timeWords: "考试搭配填空与选择题中常考",
      },
      {
        name: "写作中的应用",
        nameEn: "Writing Applications",
        structure: "词性转换实现表达多样化",
        usages: [
          { label: "避免重复", example: "He decided → He made a decision (动词→名词短语)" },
          { label: "增加多样性", example: "It is important → It is of great importance (形容词→介词短语)" },
          { label: "正式语体", example: "We must develop → Development is necessary (动词→名词作主语)" },
        ],
        timeWords: "学术写作与正式文体中尤为重要",
      },
      {
        name: "考试考点",
        nameEn: "Exam Patterns",
        structure: "根据语境判断词性与搭配",
        usages: [
          { label: "词性填空", example: "He made a ______ (decide) to study abroad. → decision" },
          { label: "搭配选择", example: "She is interested ______ music. → in" },
          { label: "词性转换", example: "The film is very ______ (interest). → interesting" },
        ],
        timeWords: "中考、高考、四六级等考试高频考点",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "动词误用为名词",
        wrong: "make a decide",
        correct: "make a decision",
        reason: "decide 是动词，名词形式为 decision，需使用正确的名词后缀 -sion",
      },
      {
        title: "形容词误用为名词修饰语",
        wrong: "importance information",
        correct: "important information",
        reason: "importance 是名词，修饰名词需用形容词 important",
      },
      {
        title: "混淆 -ing 与 -ed 形容词",
        wrong: "interesting in music",
        correct: "interested in music",
        reason: "-ing 形容词描述事物特征，-ed 形容词描述人的感受，此处描述人的兴趣应用 interested",
      },
    ],
    keyQuestions: [
      "如何根据句子成分判断所需词性？",
      "常见的动词→名词后缀有哪些？",
      "-ing 和 -ed 形容词的区别是什么？",
      "写作中如何通过词性转换提升正式感？",
    ],
    stateVerbs: {
      categories: [
        { label: "动词→名词后缀", verbs: ["-tion (decide→decision)", "-ment (develop→development)", "-ness (happy→happiness)"] },
        { label: "形容词→名词后缀", verbs: ["-ness (happy→happiness)", "-ance (important→importance)", "-ence (different→difference)", "-ity (possible→possibility)"] },
        { label: "动词→形容词后缀", verbs: ["-ing (interest→interesting)", "-ed (interest→interested)"] },
        { label: "名词→形容词后缀", verbs: ["-ful (beauty→beautiful)", "-less (care→careless)"] },
      ],
      example: {
        wrong: "He has a good decision-making ability.",
        correct: "He has good decision-making ability.",
        note: "ability 为不可数名词时前面不加 a，此处 decision-making 作复合形容词修饰 ability",
      },
    },
  },
  practice: [
    {
      title: "词性转换练习",
      titleEn: "Word Formation",
      type: "fill",
      items: [
        { question: "He made a ______ (decide) to study abroad.", answer: "decision" },
        { question: "The ______ (develop) of technology is rapid.", answer: "development" },
        { question: "She felt great ______ (happy) when she heard the news.", answer: "happiness" },
        { question: "It is ______ (importance) to learn English.", answer: "important" },
        { question: "There are many ______ (differ) between the two cultures.", answer: "differences" },
        { question: "The movie is very ______ (interest).", answer: "interesting" },
        { question: "She is ______ (interest) in painting.", answer: "interested" },
        { question: "What a ______ (beauty) day it is!", answer: "beautiful" },
        { question: "He is a ______ (care) person and often makes mistakes.", answer: "careless" },
        { question: "We need to find a ______ (solve) to the problem.", answer: "solution" },
      ],
    },
    {
      title: "选择正确词性",
      titleEn: "Choose Correct Form",
      type: "identify",
      items: [
        { question: "Choose the correct form: The ______ (important/importantly) of education cannot be ignored.", answer: "importance" },
        { question: "Choose the correct form: She looked ______ (happy/happily) at the result.", answer: "happy" },
        { question: "Choose the correct form: His ______ (explain/explanation) was very clear.", answer: "explanation" },
        { question: "Choose the correct form: I am ______ (boring/bored) with this movie.", answer: "bored" },
        { question: "Choose the correct form: The ______ (arrive/arrival) of the train was delayed.", answer: "arrival" },
        { question: "Choose the correct form: This book is very ______ (use/useful).", answer: "useful" },
        { question: "Choose the correct form: She showed great ______ (kind/kindness) to strangers.", answer: "kindness" },
        { question: "Choose the correct form: He was ______ (deep/deeply) moved by the story.", answer: "deeply" },
      ],
    },
    {
      title: "完成搭配",
      titleEn: "Complete Collocations",
      type: "fill",
      items: [
        { question: "She is interested ______ (介词) music.", answer: "in" },
        { question: "We depend ______ (介词) our parents for support.", answer: "on" },
        { question: "He is good ______ (介词) mathematics.", answer: "at" },
        { question: "There is a reason ______ (介词) his absence.", answer: "for" },
        { question: "They found a solution ______ (介词) the problem.", answer: "to" },
        { question: "The film had a great effect ______ (介词) the audience.", answer: "on" },
        { question: "She is afraid ______ (介词) darkness.", answer: "of" },
        { question: "His idea is different ______ (介词) mine.", answer: "from" },
      ],
    },
  ],
  production: [
    {
      title: "词性转换练习",
      titleEn: "Word Conversion Practice",
      description: "将下列句子中的指定词转换为要求的词性，保持句意基本不变。",
      example: [
        "Original: He decided to go abroad. (→ noun) → He made a decision to go abroad.",
        "Original: She is a beautiful girl. (→ noun) → She is a girl of great beauty.",
        "Original: The news excited everyone. (→ adj) → The news was exciting for everyone.",
        "Original: He explained the problem clearly. (→ noun) → He gave a clear explanation of the problem.",
      ],
    },
    {
      title: "多样化写作练习",
      titleEn: "Writing with Variety",
      description: "使用词性转换技巧，改写以下段落，避免重复使用相同词性，使文章更加正式和多样化。",
      example: [
        "Original: He decided to develop a new plan. The plan was important. He was happy with the result.",
        "Rewritten: He made a decision to develop a new plan. The plan was of great importance. He felt happiness with the result.",
        "Original: She explained the difference between the two options. The explanation was helpful.",
        "Rewritten: She gave an explanation of the difference between the two options. The explanation was of great help.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "词性转换核心规律",
        items: [
          "动词→名词: -tion (decision), -ment (development), -ness (happiness)",
          "形容词→名词: -ness (happiness), -ance (importance), -ence (difference), -ity (possibility)",
          "动词→形容词: -ing (interesting, 描述事物), -ed (interested, 描述人的感受)",
          "名词→形容词: -ful (beautiful), -less (careless)",
        ],
      },
      {
        title: "常见搭配模式",
        items: [
          "动词+介词: depend on, look at, listen to, belong to",
          "形容词+介词: interested in, good at, afraid of, different from",
          "名词+介词: interest in, reason for, solution to, effect on",
        ],
      },
      {
        title: "写作与考试技巧",
        items: [
          "写作中通过词性转换避免重复、增加表达多样性",
          "考试中根据句子成分判断所需词性",
          "注意 -ing 与 -ed 形容词的区别: -ing 描述事物特征，-ed 描述人的感受",
          "常见错误: 动词误用为名词（make a decide → decision）",
        ],
      },
    ],
    mindMap: `词性与搭配综合与实战
├── 词性转换规律
│   ├── 动词→名词 (-tion/-ment/-ness)
│   ├── 形容词→名词 (-ness/-ance/-ence/-ity)
│   ├── 动词→形容词 (-ing/-ed)
│   └── 名词→形容词 (-ful/-less)
├── 常见搭配
│   ├── 动词+介词 (depend on, look at)
│   ├── 形容词+介词 (interested in, good at)
│   └── 名词+介词 (interest in, reason for)
├── 写作应用
│   ├── 避免重复
│   ├── 增加多样性
│   └── 正式语体
└── 考试考点
    ├── 词性填空
    ├── 搭配选择
    └── 词性转换`,
    selfTest: [
      {
        question: "He made a ______ (decide) to study abroad. 填入正确的名词形式。",
        options: ["decide", "decision", "deciding", "decided"],
        answer: "decision",
      },
      {
        question: "She is ______ (interest) in music. 选择正确的形容词形式。",
        options: ["interesting", "interested", "interest", "interestingly"],
        answer: "interested",
      },
      {
        question: "The ______ (develop) of technology is rapid. 填入正确的名词形式。",
        options: ["develop", "developer", "development", "developing"],
        answer: "development",
      },
      {
        question: "It is ______ (importance) to learn English. 选择正确的形容词形式。",
        options: ["importance", "important", "importantly", "import"],
        answer: "important",
      },
      {
        question: "He is good ______ mathematics. 选择正确的介词。",
        options: ["in", "at", "on", "for"],
        answer: "at",
      },
      {
        question: "What a ______ (beauty) day it is! 填入正确的形容词形式。",
        options: ["beauty", "beautiful", "beautifully", "beautify"],
        answer: "beautiful",
      },
    ],
  },
};

import { UnitData } from "./unit-01-data";

export const unit25Data: UnitData = {
  info: {
    id: "unit-25",
    moduleId: "04",
    number: 25,
    title: "被动语态基础",
    titleEn: "Passive Voice Basics",
  },
  objectives: [
    "理解被动语态的构成原理（be + 过去分词）",
    "掌握不同时态下被动语态的变化形式",
    "学会在合适语境中使用被动语态",
    "能够熟练进行主动语态与被动语态的转换",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "The cat <strong>ate</strong> the fish.",
        "The fish <strong>was eaten</strong> by the cat.",
        "English <strong>is spoken</strong> all over the world.",
        "The bridge <strong>was built</strong> in 1990.",
      ],
      answer:
        "前两句意思相同，但重点不同：第一句强调<strong>猫</strong>（动作执行者），第二句强调<strong>鱼</strong>（动作承受者）。后两句使用被动语态，因为执行者不重要或不明确。英语被动语态比中文\u201C被\u201D字句使用更频繁、更中性。",
    },
    comparison: {
      chinese: [
        { text: "猫吃了鱼。", note: "主动：猫是主语" },
        { text: "鱼被猫吃了。", note: "\u201C被\u201D字句：鱼是主语" },
        { text: "这座桥建于1990年。", note: "无\u201C被\u201D字，但隐含被动" },
        { text: "英语在全世界被使用。", note: "\u201C被\u201D字句" },
      ],
      english: [
        { text: "The cat ate the fish.", note: "主动语态：cat是主语" },
        { text: "The fish was eaten by the cat.", note: "被动语态：fish是主语" },
        { text: "The bridge was built in 1990.", note: "被动语态：无需by短语" },
        { text: "English is spoken all over the world.", note: "被动语态：无需by短语" },
      ],
      conclusion:
        "中文的\u201C被\u201D字句常带有<strong>不幸、不如意</strong>的感情色彩，而英语被动语态是<strong>中性的</strong>，广泛用于正式文体、科技文章和新闻报道中。英语被动语态结构固定：be + 过去分词。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "强调动作承受者",
          description: "当我们更关注动作的对象而非执行者时",
          example: "The window <strong>was broken</strong>.",
        },
        {
          label: "执行者未知或不重要",
          description: "不知道谁做的，或者谁做的不重要",
          example: "My bike <strong>was stolen</strong> last night.",
        },
        {
          label: "执行者显而易见",
          description: "执行者是泛指的人人，不需要说明",
          example: "The murderer <strong>was arrested</strong>.",
        },
        {
          label: "客观陈述/正式文体",
          description: "科技文章、新闻报道等正式场合",
          example: "The experiment <strong>was conducted</strong> in 2020.",
        },
      ],
      aspect: [
        {
          label: "主动语态",
          description: "主语是动作的执行者",
          focus: "谁做了这件事",
        },
        {
          label: "被动语态",
          description: "主语是动作的承受者",
          focus: "什么事发生了",
        },
      ],
    },
    matrix: {
      headers: ["时态", "主动语态", "被动语态"],
      rows: [
        {
          time: "一般现在时",
          forms: ["Workers make cars.", "Cars <strong>are made</strong> by workers."],
        },
        {
          time: "一般过去时",
          forms: ["Workers made cars.", "Cars <strong>were made</strong> by workers."],
        },
        {
          time: "现在完成时",
          forms: ["Workers have made cars.", "Cars <strong>have been made</strong> by workers."],
        },
        {
          time: "过去完成时",
          forms: ["Workers had made cars.", "Cars <strong>had been made</strong> by workers."],
        },
        {
          time: "现在进行时",
          forms: ["Workers are making cars.", "Cars <strong>are being made</strong> by workers."],
        },
        {
          time: "过去进行时",
          forms: ["Workers were making cars.", "Cars <strong>were being made</strong> by workers."],
        },
        {
          time: "一般将来时",
          forms: ["Workers will make cars.", "Cars <strong>will be made</strong> by workers."],
        },
        {
          time: "情态动词",
          forms: ["Workers can make cars.", "Cars <strong>can be made</strong> by workers."],
        },
      ],
    },
    tenses: [
      {
        name: "一般现在时被动",
        nameEn: "Simple Present Passive",
        structure: "am/is/are + done",
        usages: [
          { label: "经常性或习惯性的被动动作", example: "English <strong>is spoken</strong> in many countries." },
          { label: "客观事实", example: "The earth <strong>is surrounded</strong> by air." },
          { label: "制度、规则", example: "Mobile phones <strong>are not allowed</strong> in the exam." },
        ],
        timeWords: "always, usually, often, every day, generally",
      },
      {
        name: "一般过去时被动",
        nameEn: "Simple Past Passive",
        structure: "was/were + done",
        usages: [
          { label: "过去发生的被动动作", example: "The letter <strong>was written</strong> by Shakespeare." },
          { label: "过去的状态", example: "The building <strong>was destroyed</strong> in the earthquake." },
          { label: "历史事件", example: "America <strong>was discovered</strong> in 1492." },
        ],
        timeWords: "yesterday, last week, in 1990, ago, when I was young",
      },
      {
        name: "现在完成时被动",
        nameEn: "Present Perfect Passive",
        structure: "have/has been + done",
        usages: [
          { label: "已完成且与现在有关", example: "The homework <strong>has been finished</strong>." },
          { label: "经历", example: "This book <strong>has been translated</strong> into many languages." },
          { label: "结果延续到现在", example: "He <strong>has been elected</strong> as class monitor." },
        ],
        timeWords: "already, yet, just, ever, never, recently, so far, since, for",
      },
      {
        name: "进行时被动",
        nameEn: "Continuous Passive",
        structure: "be + being + done",
        usages: [
          { label: "现在进行时被动", example: "The bridge <strong>is being built</strong> now." },
          { label: "过去进行时被动", example: "The bridge <strong>was being built</strong> at that time." },
          { label: "强调动作正在进行", example: "The problem <strong>is being discussed</strong> by the committee." },
        ],
        timeWords: "now, at the moment, at that time, when, while",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "被动语态时态错误",
        wrong: "The house <strong>is built</strong> last year.",
        correct: "The house <strong>was built</strong> last year.",
        reason: "last year表示过去时间，被动语态的be动词也要用过去时was，不能用is。",
      },
      {
        title: "过去分词形式错误",
        wrong: "English <strong>is spoke</strong> in many countries.",
        correct: "English <strong>is spoken</strong> in many countries.",
        reason: "被动语态需要用过去分词spoken，而不是过去式spoke。speak\u2192spoke\u2192spoken。",
      },
      {
        title: "不规则动词过去分词错误",
        wrong: "The book <strong>has been wrote</strong> by a famous author.",
        correct: "The book <strong>has been written</strong> by a famous author.",
        reason: "write的过去分词是written，不是wrote。write\u2192wrote\u2192written，这是不规则动词变化。",
      },
    ],
    keyQuestions: [
      "什么时候应该使用被动语态？",
      "如何在不同时态中构成被动语态？",
      "哪些动词不能使用被动语态？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "可使用被动语态的常见动词",
          verbs: ["build", "make", "write", "speak", "teach", "find", "give", "tell", "show", "send"],
        },
        {
          label: "不及物动词（不能用被动语态）",
          verbs: ["happen", "appear", "disappear", "belong", "consist", "exist", "occur", "take place"],
        },
        {
          label: "系动词（不能用被动语态）",
          verbs: ["be", "become", "seem", "look", "feel", "sound", "smell", "taste"],
        },
      ],
      example: {
        wrong: "The accident <strong>was happened</strong> at midnight.",
        correct: "The accident <strong>happened</strong> at midnight.",
        note: "happen是不及物动词，没有宾语，因此不能使用被动语态。类似的还有：appear, disappear, belong等。",
      },
    },
  },
  practice: [
    {
      title: "主动语态转换为被动语态",
      titleEn: "Active to Passive Conversion",
      type: "fill",
      items: [
        { question: "People speak English all over the world. → English ______ all over the world.", answer: "is spoken" },
        { question: "Someone stole my bicycle yesterday. → My bicycle ______ yesterday.", answer: "was stolen" },
        { question: "They have built a new hospital. → A new hospital ______.", answer: "has been built" },
      ],
    },
    {
      title: "选择正确的被动形式",
      titleEn: "Choose the Correct Passive Form",
      type: "identify",
      items: [
        { question: "The letter ______ (write) by my grandmother last week.", answer: "was written —— last week表示过去，用was + 过去分词" },
        { question: "A new bridge ______ (build) over the river now.", answer: "is being built —— now表示正在进行，用is being + 过去分词" },
        { question: "The homework ______ already ______ (finish).", answer: "has already been finished —— already表示已完成，用has been + 过去分词" },
      ],
    },
    {
      title: "填入正确的被动语态形式",
      titleEn: "Fill in the Correct Passive Form",
      type: "fill",
      items: [
        { question: "This song ______ (sing) by millions of people every day.", answer: "is sung" },
        { question: "The window ______ (break) by the ball yesterday.", answer: "was broken" },
        { question: "The project ______ (complete) by the end of next month.", answer: "will be completed" },
      ],
    },
  ],
  production: [
    {
      title: "用被动语态描述建筑物",
      titleEn: "Describe Buildings Using Passive Voice",
      description: "用被动语态描述3座著名建筑。注意使用不同时态的被动语态。",
      example: [
        "The Great Wall <strong>was built</strong> over 2,000 years ago.（一般过去时被动）",
        "The Eiffel Tower <strong>is visited</strong> by millions of tourists every year.（一般现在时被动）",
        "A new museum <strong>is being built</strong> in the city center.（现在进行时被动）",
        "The old library <strong>has been renovated</strong> recently.（现在完成时被动）",
      ],
    },
    {
      title: "新闻报道写作",
      titleEn: "News Report Writing",
      description: "用被动语态写一篇简短的新闻报道（至少5句），内容可以是校园事件、科技新闻或社会事件。被动语态在新闻报道中非常常见。",
      example: [
        "A new student center <strong>was opened</strong> by the school last Monday.",
        "The opening ceremony <strong>was attended</strong> by over 500 students.",
        "The building <strong>was designed</strong> by a famous architect.",
        "It <strong>is said</strong> that the center <strong>will be used</strong> for student activities.",
        "More facilities <strong>are expected</strong> to be added next year.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "被动语态基本结构",
        items: ["主语 + be + 过去分词（+ by + 执行者）", "be动词体现时态，过去分词不变"],
      },
      {
        title: "时态变化规律",
        items: ["只改变be动词的形式", "一般现在：am/is/are done", "一般过去：was/were done", "完成时：have/has been done", "进行时：be being done", "将来时：will be done"],
      },
      {
        title: "使用场景",
        items: ["强调动作承受者", "执行者未知或不重要", "客观陈述、正式文体", "科技文章、新闻报道"],
      },
      {
        title: "注意事项",
        items: ["不及物动词没有被动语态（happen, appear等）", "系动词没有被动语态（be, become等）", "不规则动词的过去分词需要记忆"],
      },
    ],
    mindMap: `被动语态
├── 基本结构
│   ├── 主语 + be + 过去分词
│   └── by + 执行者（可省略）
├── 时态变化
│   ├── 一般现在时：am/is/are done
│   ├── 一般过去时：was/were done
│   ├── 现在完成时：have/has been done
│   ├── 过去完成时：had been done
│   ├── 现在进行时：am/is/are being done
│   ├── 过去进行时：was/were being done
│   ├── 一般将来时：will be done
│   └── 情态动词：can/must/should be done
├── 使用场景
│   ├── 强调承受者
│   ├── 执行者未知/不重要
│   └── 正式文体/客观陈述
└── 不能用被动的动词
    ├── 不及物动词：happen, appear, belong
    └── 系动词：be, become, seem`,
    selfTest: [
      {
        question: "The cake ______ by my mother yesterday.",
        options: ["was made", "is made", "has been made", "will be made"],
        answer: "was made",
      },
      {
        question: "English ______ in many countries around the world.",
        options: ["is spoken", "is spoke", "was spoken", "has been spoke"],
        answer: "is spoken",
      },
      {
        question: "The new library ______ by the end of this year.",
        options: ["will build", "will be built", "is built", "was built"],
        answer: "will be built",
      },
    ],
  },
};

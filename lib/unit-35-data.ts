import { UnitData } from "./unit-01-data";

export const unit35Data: UnitData = {
  info: {
    id: "unit-35",
    moduleId: "05",
    number: 35,
    title: "非谓语动词综合与实战",
    titleEn: "Non-finite Verbs Comprehensive Practice",
  },
  objectives: [
    "综合运用不定式、动名词和分词三种非谓语动词",
    "在写作中正确使用非谓语动词简化句子",
    "掌握考试中非谓语动词的常见题型与解题策略",
    "在阅读中快速识别非谓语动词结构并理解句意",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "为什么英语中需要用非谓语动词？它能让句子变得更简洁吗？",
        "对比完整从句和分词短语，哪种表达更高效？",
        "你能在一篇短文中同时用到不定式、动名词和分词吗？",
      ],
      answer:
        "非谓语动词能让句子更紧凑、信息密度更高。例如 'Because he was tired, he went to bed.' 可简化为 'Being tired, he went to bed.'，用分词短语替代从句，表达更精炼。",
    },
    comparison: {
      chinese: [
        {
          text: "因为他对这个话题感兴趣，所以他决定研究它。",
          note: "使用完整从句：因为……所以……",
        },
        {
          text: "对这个话题感兴趣，他决定研究它。",
          note: "使用分词短语简化，省略主语和连词",
        },
      ],
      english: [
        {
          text: "Because he was interested in the topic, he decided to research it.",
          note: "完整从句",
        },
        {
          text: "Interested in the topic, he decided to research it.",
          note: "分词短语替代从句",
        },
      ],
      conclusion:
        "非谓语动词的核心价值：用更少的词传递相同甚至更丰富的信息，是英语书面表达的高级技巧。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "第一步：确定功能",
          description: "判断非谓语在句中充当什么成分（主语、宾语、定语、状语、补语）",
          example: "Reading books is fun.（动名词作主语）",
        },
        {
          label: "第二步：检查语态",
          description: "判断逻辑主语与非谓语动词之间是主动还是被动关系",
          example: "The book written by him is popular.（过去分词表被动）",
        },
        {
          label: "第三步：检查时间",
          description: "判断非谓语动词表示的动作与谓语动词的时间先后关系",
          example: "Having finished the work, he went home.（完成式表先发生）",
        },
      ],
      aspect: [
        {
          label: "写作应用：简化句子",
          description: "用非谓语短语替代从句，减少冗余",
          focus: "Because she wanted to learn more, she enrolled in the course. → Wanting to learn more, she enrolled in the course.",
        },
        {
          label: "写作应用：增加信息",
          description: "用分词短语添加伴随、原因、结果等附加信息",
          focus: "He sat by the window, reading a novel.（伴随状语）",
        },
        {
          label: "阅读识别",
          description: "在复杂句中快速定位非谓语结构，理清句子主干",
          focus: "看到 to do / doing / done 开头的短语，先识别其功能，再理解整句。",
        },
      ],
    },
    matrix: {
      headers: ["非谓语形式", "作主语", "作宾语", "作定语", "作状语", "作补语"],
      rows: [
        { time: "不定式 (to do)", forms: ["✅", "✅", "✅", "✅", "✅"] },
        { time: "动名词 (doing)", forms: ["✅", "✅", "❌", "❌", "❌"] },
        { time: "现在分词 (doing)", forms: ["❌", "❌", "✅", "✅", "✅"] },
        { time: "过去分词 (done)", forms: ["❌", "❌", "✅", "✅", "✅"] },
      ],
    },
    tenses: [
      {
        name: "选择策略",
        nameEn: "Selection Strategy",
        structure: "功能 → 语态 → 时间",
        usages: [
          {
            label: "确定句法功能",
            example: "作主语：To learn / Learning a language takes time.",
          },
          {
            label: "判断主动/被动",
            example: "主动：I saw him crossing the road. / 被动：I saw him knocked down by a car.",
          },
          {
            label: "确定时间先后",
            example: "同时：I enjoy reading. / 先发生：Having read the book, I returned it.",
          },
        ],
        timeWords: "根据句意和上下文判断，无固定时间标志词",
      },
      {
        name: "写作应用：简化句子",
        nameEn: "Writing Application: Simplify",
        structure: "从句 → 非谓语短语",
        usages: [
          {
            label: "原因从句简化",
            example: "Because he didn't know the answer, he kept silent. → Not knowing the answer, he kept silent.",
          },
          {
            label: "时间从句简化",
            example: "When I walked along the river, I saw a beautiful bird. → Walking along the river, I saw a beautiful bird.",
          },
          {
            label: "定语从句简化",
            example: "The man who is standing there is my teacher. → The man standing there is my teacher.",
          },
        ],
        timeWords: "适用于书面表达、学术写作",
      },
      {
        name: "写作应用：丰富表达",
        nameEn: "Writing Application: Enrich",
        structure: "非谓语短语作附加成分",
        usages: [
          {
            label: "伴随状语",
            example: "She walked into the room, smiling at everyone.",
          },
          {
            label: "结果状语",
            example: "The fire lasted two hours, destroying the entire building.",
          },
          {
            label: "目的状语",
            example: "He went to the library to borrow some books.",
          },
        ],
        timeWords: "用于增加句子信息量和表现力",
      },
      {
        name: "考试常见题型",
        nameEn: "Common Exam Patterns",
        structure: "四大高频考点",
        usages: [
          {
            label: "动词搭配",
            example: "enjoy / finish / mind + doing; want / decide / hope + to do",
          },
          {
            label: "分词作定语",
            example: "The girl singing on the stage is my sister.（现在分词表主动）",
          },
          {
            label: "分词短语作状语",
            example: "Seen from the hill, the city looks beautiful.（过去分词表被动）",
          },
          {
            label: "悬垂分词辨析",
            example: "❌ Walking in the park, the flowers were beautiful. → ✅ Walking in the park, I found the flowers beautiful.",
          },
        ],
        timeWords: "高考、四六级、雅思写作高频考点",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "动词搭配错误：enjoy 后接不定式",
        wrong: "I enjoy to play basketball with my friends.",
        correct: "I enjoy playing basketball with my friends.",
        reason: "enjoy 后必须接动名词（doing），不能接不定式（to do）。类似动词还有 finish, mind, practice, avoid 等。",
      },
      {
        title: "悬垂分词错误",
        wrong: "Being tired, the bed was very comfortable.",
        correct: "Being tired, I found the bed very comfortable.",
        reason: "分词短语的逻辑主语必须与句子主语一致。原句中 'being tired' 的逻辑主语应该是人，而不是床。",
      },
      {
        title: "过去分词与现在分词混淆",
        wrong: "The book writing by him is very popular.",
        correct: "The book written by him is very popular.",
        reason: "book 与 write 之间是被动关系（书被写），应用过去分词 written 表被动。现在分词 writing 表主动。",
      },
    ],
    keyQuestions: [
      "非谓语动词在句中充当什么成分？如何快速判断？",
      "如何区分现在分词和动名词？（看功能：作主语/宾语→动名词；作定语/状语/补语→现在分词）",
      "什么时候用完成式非谓语（having done）？",
      "如何避免悬垂分词的错误？",
      "在写作中如何用非谓语动词让句子更高级？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "只能接动名词的动词",
          verbs: ["enjoy", "finish", "mind", "practice", "avoid", "suggest", "consider", "imagine", "deny", "escape"],
        },
        {
          label: "只能接不定式的动词",
          verbs: ["want", "decide", "hope", "plan", "promise", "refuse", "agree", "expect", "afford", "manage"],
        },
        {
          label: "两者皆可但意义不同",
          verbs: ["remember", "forget", "stop", "try", "regret", "go on", "mean"],
        },
      ],
      example: {
        wrong: "I stopped to smoke a cigarette.（我想表达：我停止了抽烟）",
        correct: "I stopped smoking a cigarette.（我戒烟了） / I stopped to smoke a cigarette.（我停下来去抽烟）",
        note: "stop doing = 停止做某事；stop to do = 停下来去做某事。类似地：remember to do = 记得要做（未做）；remember doing = 记得做过（已做）。",
      },
    },
  },
  practice: [
    {
      title: "选择正确的非谓语形式",
      titleEn: "Choose the correct non-finite form",
      type: "fill",
      items: [
        {
          question: "1. I look forward to ______ (hear) from you soon.",
          answer: "hearing（look forward to 中的 to 是介词，后接动名词）",
        },
        {
          question: "2. The teacher asked us ______ (finish) the homework before Friday.",
          answer: "to finish（ask sb. to do sth. 固定搭配）",
        },
        {
          question: "3. ______ (see) from the top of the mountain, the city looks tiny.",
          answer: "Seen（the city 与 see 之间是被动关系，用过去分词）",
        },
        {
          question: "4. ______ (not know) what to do, he turned to his teacher for help.",
          answer: "Not knowing（he 与 know 之间是主动关系，否定形式直接加 not）",
        },
        {
          question: "5. The boy ______ (stand) at the gate is my brother.",
          answer: "standing（the boy 与 stand 之间是主动关系，用现在分词作定语）",
        },
      ],
    },
    {
      title: "用非谓语动词改写句子",
      titleEn: "Rewrite sentences using non-finite verbs",
      type: "fill",
      items: [
        {
          question: "1. Because he was ill, he didn't attend the meeting.（用分词短语改写）",
          answer: "Being ill, he didn't attend the meeting.",
        },
        {
          question: "2. The girl who is dancing on the stage is my friend.（用分词短语改写）",
          answer: "The girl dancing on the stage is my friend.",
        },
        {
          question: "3. He raised his voice so that he could make himself heard.（用不定式改写）",
          answer: "He raised his voice to make himself heard.",
        },
        {
          question: "4. After she had finished her homework, she went out to play.（用完成式分词改写）",
          answer: "Having finished her homework, she went out to play.",
        },
      ],
    },
    {
      title: "综合填空：在语境中选择正确形式",
      titleEn: "Comprehensive fill-in: choose the correct form in context",
      type: "fill",
      items: [
        {
          question: "1. ______ (write) in simple English, the book is suitable for beginners.\n2. He spent two hours ______ (prepare) for the exam.\n3. My dream is ______ (become) a scientist.\n4. I saw the thief ______ (run) away when I arrived.\n5. ______ (complete) the project, the team celebrated their success.",
          answer: "1. Written（被动） 2. preparing（spend time doing） 3. to become（主语补语/表语） 4. running（see sb. doing 表正在进行） 5. Having completed（先完成再庆祝，用完成式）",
        },
      ],
    },
  ],
  production: [
    {
      title: "非谓语动词写作练习",
      titleEn: "Non-finite verbs writing practice",
      description: "写一段80词左右的短文，主题为\"我的学习方法\"，要求至少使用3种不同的非谓语动词形式（不定式、动名词、分词各至少一次）。",
      example: [
        "To improve my English, I practice speaking every day. Reading English novels is one of my favorite ways to learn new words. Feeling confident after months of practice, I decided to take the TOEFL exam. Having prepared carefully, I got a high score. I enjoy learning languages because it opens doors to new cultures.",
      ],
    },
    {
      title: "从句改写为非谓语",
      titleEn: "Rewrite clauses as non-finite structures",
      description: "将以下复合句中的从句改写为非谓语动词短语，使句子更简洁：\n1. When I walked along the beach, I found a beautiful shell.\n2. Because she didn't receive the invitation, she felt upset.\n3. The students who are sitting in the front row can hear clearly.\n4. He worked hard so that he could pass the exam.",
      example: [
        "1. Walking along the beach, I found a beautiful shell.",
        "2. Not receiving the invitation, she felt upset.",
        "3. The students sitting in the front row can hear clearly.",
        "4. He worked hard to pass the exam.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "三种非谓语动词的核心区别",
        items: [
          "不定式 (to do)：功能最全面，可作主、宾、定、状、补",
          "动名词 (doing)：相当于名词，作主语和宾语",
          "现在分词 (doing) / 过去分词 (done)：相当于形容词或副词，作定语、状语、补语",
        ],
      },
      {
        title: "选择策略三步法",
        items: [
          "Step 1：确定功能——非谓语在句中做什么成分？",
          "Step 2：检查语态——逻辑主语与动词是主动还是被动？",
          "Step 3：检查时间——动作与谓语动词同时发生还是先后发生？",
        ],
      },
      {
        title: "写作与考试要点",
        items: [
          "写作中用非谓语简化从句，提升文章档次",
          "注意悬垂分词错误，确保逻辑主语一致",
          "掌握高频搭配：enjoy/finish/mind + doing; want/decide/hope + to do",
          "阅读中识别非谓语结构有助于快速理解长难句",
        ],
      },
    ],
    mindMap:
      "非谓语动词综合体系\n├── 不定式 (to do)\n│   ├── 作主语：To learn English is important.\n│   ├── 作宾语：I want to go.\n│   ├── 作定语：I have something to do.\n│   ├── 作状语：He came to help us.\n│   └── 作补语：I asked him to leave.\n├── 动名词 (doing)\n│   ├── 作主语：Swimming is fun.\n│   └── 作宾语：I enjoy reading.\n├── 现在分词 (doing)\n│   ├── 作定语：the running water\n│   ├── 作状语：Walking along the street, ...\n│   └── 作补语：I saw him running.\n├── 过去分词 (done)\n│   ├── 作定语：the broken window\n│   ├── 作状语：Seen from the hill, ...\n│   └── 作补语：I had my hair cut.\n└── 选择策略\n    ├── Step 1: 功能判断\n    ├── Step 2: 语态判断\n    └── Step 3: 时间判断",
    selfTest: [
      {
        question: "______ (give) more time, we could have done it better.",
        options: ["A. Giving", "B. Given", "C. To give", "D. Having given"],
        answer: "B. Given（we 与 give 之间是被动关系——我们被给予更多时间，用过去分词）",
      },
      {
        question: "The problem ______ (discuss) at the meeting now is very important.",
        options: ["A. discussed", "B. being discussed", "C. discussing", "D. to discuss"],
        answer: "B. being discussed（now 表示正在进行，problem 与 discuss 之间是被动关系，用现在分词的被动式）",
      },
      {
        question: "I remember ______ (lock) the door before I left, but it was open this morning.",
        options: ["A. to lock", "B. locking", "C. to have locked", "D. locked"],
        answer: "B. locking（remember doing = 记得做过某事，已经做了）",
      },
      {
        question: "He hurried to the station, only ______ (find) the train had left.",
        options: ["A. finding", "B. found", "C. to find", "D. having found"],
        answer: "C. to find（only to do 表示出乎意料的结果）",
      },
      {
        question: "The teacher had the students ______ (write) a composition in class.",
        options: ["A. to write", "B. writing", "C. written", "D. write"],
        answer: "D. write（have sb. do sth. 使某人做某事，省略 to 的不定式）",
      },
    ],
  },
};

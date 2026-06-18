import { UnitData } from "./unit-01-data";

export const unit33Data: UnitData = {
  info: {
    id: "unit-33",
    moduleId: "05",
    number: 33,
    title: "现在分词与过去分词",
    titleEn: "Present Participle vs Past Participle",
  },
  objectives: [
    "区分 -ing 形容词和 -ed 形容词的用法与含义",
    "掌握分词作定语、状语和补语的三种功能",
    "理解分词的时态与语态变化规律",
    "在真实语境中正确选用现在分词或过去分词",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "\"interesting\" 和 \"interested\" 有什么区别？",
        "\"the broken window\" 和 \"the breaking news\" 中的分词分别表示什么？",
        "为什么我们说 \"I am interested\" 而不说 \"I am interesting\"？",
      ],
      answer:
        "-ing 形式表示事物本身的特征（令人……的），-ed 形式表示人的感受（感到……的）。broken 表示被动完成（被打碎的），breaking 表示主动进行（正在发生的）。我们用 interested 描述人的感受，而不是用 interesting。",
    },
    comparison: {
      chinese: [
        { text: "这部电影很有趣。", note: "事物本身的特征 → -ing" },
        { text: "我对这部电影感兴趣。", note: "人的感受 → -ed" },
        { text: "打碎的窗户", note: "被动完成 → 过去分词" },
      ],
      english: [
        { text: "The movie is interesting.", note: "-ing 描述事物特征" },
        { text: "I am interested in the movie.", note: "-ed 描述人的感受" },
        { text: "The broken window", note: "过去分词表被动" },
      ],
      conclusion:
        "-ing 分词描述事物的性质（令人……的），表示主动或进行；-ed 分词描述人的感受（感到……的），表示被动或完成。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "现在分词（-ing）的主动含义",
          description:
            "现在分词表示主动关系，即分词所描述的动作是由中心词发出的。如 \"the running water\" 中，water 是 run 的执行者。",
          example: "The running water sounds peaceful.（流水发出的声音）",
        },
        {
          label: "过去分词（-ed）的被动含义",
          description:
            "过去分词表示被动关系，即中心词承受分词所描述的动作。如 \"the broken window\" 中，window 是 break 的承受者。",
          example: "The broken window was repaired yesterday.（被打碎的窗户）",
        },
        {
          label: "-ing 形容词描述事物特征",
          description:
            "-ing 形容词用来描述事物本身具有的令人产生某种情感的特征，主语通常是物。",
          example: "The news is exciting.（这条新闻令人兴奋）",
        },
        {
          label: "-ed 形容词描述人的感受",
          description:
            "-ed 形容词用来描述人对某事物产生的感受或状态，主语通常是人。",
          example: "I am excited about the news.（我对这条新闻感到兴奋）",
        },
      ],
      aspect: [
        {
          label: "语态区分",
          description: "现在分词 = 主动，过去分词 = 被动",
          focus: "判断分词与所修饰名词之间的主被动关系",
        },
        {
          label: "时间区分",
          description: "现在分词 = 进行，过去分词 = 完成",
          focus: "判断动作是正在进行还是已经完成",
        },
        {
          label: "情感形容词",
          description: "-ing = 令人……的（事物），-ed = 感到……的（人）",
          focus: "判断主语是事物还是人",
        },
        {
          label: "句法功能",
          description: "分词可作定语、状语、补语",
          focus: "判断分词在句中充当什么成分",
        },
      ],
    },
    matrix: {
      headers: ["特征", "现在分词(-ing)", "过去分词(-ed)"],
      rows: [
        {
          time: "语态",
          forms: ["主动（动作由中心词发出）", "被动（中心词承受动作）"],
        },
        {
          time: "时间",
          forms: ["进行（动作正在进行）", "完成（动作已经完成）"],
        },
        {
          time: "情感形容词",
          forms: [
            "令人……的（修饰事物） exciting, interesting, boring",
            "感到……的（修饰人） excited, interested, bored",
          ],
        },
        {
          time: "作定语",
          forms: [
            "the rising sun（升起的太阳）",
            "the fallen leaves（落叶）",
          ],
        },
        {
          time: "作状语",
          forms: [
            "Walking down the street, I met an old friend.",
            "Told to wait, the students sat down quietly.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "-ing 与 -ed 形容词",
        nameEn: "-ing vs -ed Adjectives",
        structure: "主语 + be + -ing/-ed 形容词",
        usages: [
          {
            label: "-ing 描述事物特征",
            example: "The book is interesting.（这本书很有趣）",
          },
          {
            label: "-ed 描述人的感受",
            example: "I am interested in the book.（我对这本书感兴趣）",
          },
          {
            label: "-ing 描述事物（令人……）",
            example: "The result is disappointing.（结果令人失望）",
          },
          {
            label: "-ed 描述人的状态（感到……）",
            example: "She was disappointed with the result.（她对结果感到失望）",
          },
          {
            label: "常见配对词",
            example:
              "exciting/excited, surprising/surprised, confusing/confused, tiring/tired, frightening/frightened, amazing/amazed",
          },
        ],
        timeWords:
          "interesting/interested, exciting/excited, boring/bored, surprising/surprised, disappointing/disappointed, confusing/confused",
      },
      {
        name: "分词作定语",
        nameEn: "Participle as Attributive",
        structure: "现在分词/过去分词 + 名词（前置定语）；名词 + 分词短语（后置定语）",
        usages: [
          {
            label: "现在分词作前置定语（主动/进行）",
            example: "running water（流水）, a sleeping baby（熟睡的婴儿）",
          },
          {
            label: "过去分词作前置定语（被动/完成）",
            example: "a broken window（打碎的窗户）, fallen leaves（落叶）",
          },
          {
            label: "现在分词短语作后置定语",
            example:
              "The man standing at the door is my teacher.（站在门口的那个人是我的老师）",
          },
          {
            label: "过去分词短语作后置定语",
            example:
              "The letter written in English is from my pen pal.（用英语写的那封信来自我的笔友）",
          },
        ],
        timeWords:
          "running water, sleeping baby, broken window, fallen leaves, the man standing..., the letter written...",
      },
      {
        name: "分词作状语",
        nameEn: "Participle as Adverbial",
        structure: "分词/分词短语, 主句（或主句 + 分词/分词短语）",
        usages: [
          {
            label: "现在分词作时间状语",
            example:
              "Walking down the street, I met an old friend.（走在街上时，我遇到了一个老朋友）",
          },
          {
            label: "现在分词作原因状语",
            example:
              "Being ill, he didn't come to school.（因为生病，他没来上学）",
          },
          {
            label: "过去分词作原因状语",
            example:
              "Told to wait, the students sat down quietly.（被告知等候，学生们安静地坐下）",
          },
          {
            label: "过去分词作条件状语",
            example:
              "Given more time, I could have done it better.（如果给我更多时间，我能做得更好）",
          },
        ],
        timeWords:
          "Walking..., Seeing..., Hearing..., Told..., Given..., Faced with...",
      },
      {
        name: "分词作补语",
        nameEn: "Participle as Complement",
        structure: "感官动词/使役动词 + 宾语 + 现在分词/过去分词",
        usages: [
          {
            label: "现在分词作宾补（动作正在进行）",
            example:
              "I saw him crossing the street.（我看见他正在过马路）",
          },
          {
            label: "过去分词作宾补（被动/完成）",
            example:
              "She had her hair cut yesterday.（她昨天剪了头发）",
          },
          {
            label: "感官动词 + 宾语 + 现在分词",
            example:
              "I heard her singing in the next room.（我听到她正在隔壁唱歌）",
          },
          {
            label: "使役动词 + 宾语 + 过去分词",
            example:
              "He had his car repaired.（他让人修了车）",
          },
        ],
        timeWords:
          "see/hear/watch/notice/feel + sb + doing/done, have/get/make + sth + done",
      },
      {
        name: "感官动词用法规则",
        nameEn: "Usage Rules for Sensory Verbs",
        structure: "感官动词 + 宾语 + 现在分词/不带to的不定式/过去分词",
        usages: [
          {
            label: "感官动词 + doing（强调动作正在进行）",
            example: "I saw him crossing the street.（看见他正在过马路）",
          },
          {
            label: "感官动词 + do（强调动作全过程）",
            example: "I saw him cross the street.（看见他过了马路）",
          },
          {
            label: "感官动词 + done（强调被动）",
            example: "I saw the thief caught by the police.（看见小偷被警察抓住了）",
          },
          {
            label: "have + 宾语 + done（让别人做/遭遇）",
            example: "I had my watch repaired.（我让人修了手表）",
          },
        ],
        timeWords:
          "see, hear, watch, notice, feel, observe, listen to, look at, have, get",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "-ing 与 -ed 形容词混淆",
        wrong: "He is interesting in music.",
        correct: "He is interested in music.",
        reason:
          "interesting 描述事物特征（令人感兴趣的），interested 描述人的感受（对……感兴趣的）。主语 He 是人，应用 interested。",
      },
      {
        title: "事物作主语误用 -ed 形容词",
        wrong: "The news is excited.",
        correct: "The news is exciting.",
        reason:
          "excited 用于描述人的感受，exciting 用于描述事物的特征。主语 The news 是事物，应用 exciting。",
      },
      {
        title: "感官动词后误用过去分词",
        wrong: "I saw him crossed the street.",
        correct: "I saw him crossing the street.",
        reason:
          "感官动词 see 后接宾语 + 现在分词表示动作正在进行，宾语 him 是 cross 的执行者（主动关系），应用 crossing 而非 crossed。",
      },
      {
        title: "分词作状语逻辑主语错误",
        wrong: "Walking down the street, the trees were beautiful.",
        correct: "Walking down the street, I found the trees beautiful.",
        reason:
          "分词作状语时，其逻辑主语应与句子主语一致。walking 的逻辑主语应该是人，不能是 trees。",
      },
    ],
    keyQuestions: [
      "如何判断用 -ing 还是 -ed 形容词？",
      "分词作定语时前置和后置有什么区别？",
      "感官动词后用现在分词和不定式有什么不同？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "常见 -ing/-ed 形容词配对",
          verbs: [
            "interesting/interested",
            "exciting/excited",
            "boring/bored",
            "surprising/surprised",
            "disappointing/disappointed",
            "confusing/confused",
            "tiring/tired",
            "frightening/frightened",
            "amazing/amazed",
            "embarrassing/embarrassed",
          ],
        },
        {
          label: "感官动词",
          verbs: [
            "see",
            "hear",
            "watch",
            "notice",
            "feel",
            "observe",
            "listen to",
            "look at",
          ],
        },
        {
          label: "使役动词",
          verbs: ["have", "get", "make", "leave", "keep"],
        },
      ],
      example: {
        wrong: "I am very interesting in this topic.",
        correct: "I am very interested in this topic.",
        note:
          "区分 -ing 和 -ed 形容词的关键：看主语是「事物」还是「人」。事物用 -ing（令人……的），人用 -ed（感到……的）。",
      },
    },
  },
  practice: [
    {
      title: "选择正确的分词形式",
      titleEn: "Choose the Correct Participle Form",
      type: "fill",
      items: [
        {
          question: "The movie was so _______ that everyone fell asleep. (boring/bored)",
          answer: "boring（-ing 形容词描述事物特征，movie 是事物）",
        },
        {
          question: "I was _______ by the loud noise. (frightening/frightened)",
          answer: "frightened（-ed 形容词描述人的感受，主语 I 是人）",
        },
        {
          question: "The _______ water is not safe to drink. (boiling/boiled)",
          answer: "boiling（现在分词表主动/进行，水正在沸腾）",
        },
        {
          question: "She had her car _______ last week. (repairing/repaired)",
          answer: "repaired（过去分词表被动，车被修理）",
        },
        {
          question: "_______ down the street, I saw an old friend. (Walking/Walked)",
          answer: "Walking（现在分词作状语，主语 I 主动执行 walk 动作）",
        },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        {
          question: "找出并纠正错误：The students were boring during the lecture.",
          answer: "The students were bored during the boring lecture.（学生感到无聊用 bored，讲座令人无聊用 boring）",
        },
        {
          question: "找出并纠正错误：I saw him to cross the street.",
          answer: "I saw him crossing the street.（感官动词 see 后接 doing 表示正在进行，不加 to）",
        },
        {
          question: "找出并纠正错误：Written in a hurry, the teacher found many mistakes in the essay.",
          answer: "Written in a hurry, the essay had many mistakes.（分词作状语的逻辑主语应与句子主语一致）",
        },
        {
          question: "找出并纠正错误：The situation is quite disappointed.",
          answer: "The situation is quite disappointing.（situation 是事物，用 -ing 形式）",
        },
      ],
    },
    {
      title: "分词功能识别",
      titleEn: "Identify Participle Functions",
      type: "identify",
      items: [
        {
          question: "判断分词功能：The sleeping baby looks peaceful.（sleeping 是什么成分？）",
          answer: "定语（现在分词 sleeping 修饰名词 baby，表示主动/进行）",
        },
        {
          question: "判断分词功能：Seen from the hill, the city looks beautiful.（seen 是什么成分？）",
          answer: "状语（过去分词 seen 作时间/条件状语，表示被动）",
        },
        {
          question: "判断分词功能：I found the door locked.（locked 是什么成分？）",
          answer: "宾语补足语（过去分词 locked 补充说明宾语 the door 的状态）",
        },
        {
          question: "判断分词功能：The girl wearing a red dress is my sister.（wearing 是什么成分？）",
          answer: "后置定语（现在分词短语 wearing a red dress 修饰 the girl）",
        },
      ],
    },
  ],
  production: [
    {
      title: "描述图片场景",
      titleEn: "Describe a Picture Scene",
      description:
        "用分词作定语和状语描述一张你熟悉的场景照片（如公园、教室、街道等），至少使用 3 个分词结构。",
      example: [
        "Walking through the park on a sunny afternoon, I saw children playing on the grass.",
        "The fallen leaves covered the ground, creating a beautiful golden carpet.",
        "A group of excited tourists were taking photos of the blooming flowers.",
        "Tired from the long walk, we sat on a bench surrounded by singing birds.",
      ],
    },
    {
      title: "区分 -ing 和 -ed 写作练习",
      titleEn: "-ing vs -ed Writing Practice",
      description:
        "用以下形容词对各写一个句子，注意主语是人还是事物：interesting/interested, surprising/surprised, disappointing/disappointed, confusing/confused。",
      example: [
        "The documentary about space is very interesting. / I am very interested in space exploration.",
        "The test results are surprising. / The teacher was surprised by the students\u2019 progress.",
        "The cancellation of the trip is disappointing. / We were disappointed about the cancellation.",
        "The instructions are confusing. / The students were confused by the instructions.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-ing 与 -ed 形容词",
        items: [
          "-ing 形容词描述事物本身的特征（令人……的），主语通常是物",
          "-ed 形容词描述人的感受（感到……的），主语通常是人",
          "口诀：事物-ing，人用-ed；令人……的 vs 感到……的",
        ],
      },
      {
        title: "分词作定语",
        items: [
          "现在分词作定语表示主动或正在进行（the rising sun）",
          "过去分词作定语表示被动或已完成（the fallen leaves）",
          "分词短语作后置定语相当于一个定语从句",
        ],
      },
      {
        title: "分词作状语",
        items: [
          "分词作状语时逻辑主语必须与句子主语一致",
          "现在分词作状语表示主动关系",
          "过去分词作状语表示被动关系",
        ],
      },
      {
        title: "分词作补语",
        items: [
          "感官动词 + doing 表示动作正在进行",
          "感官动词 + do 表示动作全过程",
          "have/get + 宾语 + done 表示让别人做或遭遇某事",
        ],
      },
      {
        title: "常见错误提醒",
        items: [
          "不要混淆 -ing 和 -ed 形容词（interesting ≠ interested）",
          "分词作状语时注意逻辑主语一致性",
          "感官动词后不要加 to（see sb do/doing，不是 see sb to do）",
        ],
      },
    ],
    mindMap:
      "现在分词与过去分词\n├── -ing 与 -ed 形容词\n│   ├── -ing：事物特征（令人……的） exciting, interesting\n│   └── -ed：人的感受（感到……的） excited, interested\n├── 分词作定语\n│   ├── 前置定语：running water / broken window\n│   └── 后置定语：the man standing... / the letter written...\n├── 分词作状语\n│   ├── 现在分词（主动）：Walking down the street, ...\n│   └── 过去分词（被动）：Told to wait, ...\n├── 分词作补语\n│   ├── 感官动词 + doing/do/done\n│   └── 使役动词 + have/get + done\n└── 关键判断\n    ├── 主动 vs 被动\n    ├── 进行 vs 完成\n    └── 事物 vs 人",
    selfTest: [
      {
        question: "The game was _______. We were all _______. 选择正确的形容词：",
        options: [
          "exciting, exciting",
          "excited, excited",
          "exciting, excited",
          "excited, exciting",
        ],
        answer: "exciting, excited（游戏令人兴奋 → exciting；我们感到兴奋 → excited）",
      },
      {
        question: "_______ from the top of the mountain, the city looks tiny. 选择正确的分词：",
        options: ["Seeing", "Seen", "To see", "Saw"],
        answer: "Seen（城市是被看的，被动关系，用过去分词 seen）",
      },
      {
        question: "I heard her _______ a beautiful song in the next room. 选择正确形式：",
        options: ["sing", "sang", "singing", "sung"],
        answer: "singing（感官动词 hear + 宾语 + doing 表示动作正在进行）",
      },
    ],
  },
};

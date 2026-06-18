import { UnitData } from "./unit-01-data";

export const unit36Data: UnitData = {
  info: {
    id: "unit-36",
    moduleId: "06",
    number: 36,
    title: "倒装句",
    titleEn: "Inversion",
  },
  objectives: [
    "理解全部倒装与部分倒装的区别",
    "掌握常见倒装触发条件与句型",
    "在写作中正确运用倒装句增强表达",
    "熟悉考试中倒装句的常见考查方式",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I have never seen such a beautiful sunset.",
        "Never have I seen such a beautiful sunset.",
        "两个句子意思相同，为什么第二句要把助动词提到主语前面？",
      ],
      answer:
        "倒装句通过改变语序来强调否定、条件等含义，使句子更具表现力和正式感。第二句使用部分倒装，将否定词 Never 置于句首，助动词 have 提前，增强了语气和修辞效果。",
    },
    comparison: {
      chinese: [
        {
          text: "他从没去过巴黎。",
          note: "正常语序，陈述事实",
        },
        {
          text: "从没去过巴黎，他。",
          note: "倒装语序，强调否定",
        },
      ],
      english: [
        {
          text: "He has never been to Paris.",
          note: "正常语序",
        },
        {
          text: "Never has he been to Paris.",
          note: "倒装语序",
        },
      ],
      conclusion:
        "英语中的倒装句是一种修辞手段，通过将谓语（全部或部分）提到主语之前，达到强调、平衡或衔接上下文的效果。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "全部倒装",
          description:
            "整个谓语动词提到主语之前。常见于方位副词（Here/There/Away）或表语前置的句子。",
          example: "Here comes the bus. / Present at the meeting was the headmaster.",
        },
        {
          label: "部分倒装",
          description:
            "只将助动词/情态动词提到主语之前，实义动词仍在主语之后。常见于否定词、Only、So/Such 等置于句首时。",
          example: "Never have I seen such a thing. / Only then did I realize the truth.",
        },
        {
          label: "代词主语不倒装",
          description:
            "当主语是代词时，全部倒装句型不倒装，保持正常语序。",
          example: "Here it comes. ✅ / Here comes it. ❌",
        },
      ],
      aspect: [
        {
          label: "否定词触发",
          description: "否定词或否定短语置于句首，主句使用部分倒装",
          focus: "Never / Seldom / Hardly / No sooner / Not only / Not until 等置于句首时，句子部分倒装",
        },
        {
          label: "Only 触发",
          description: "Only + 状语置于句首，主句使用部分倒装",
          focus: "Only then / Only in this way / Only by... 等置于句首时，句子部分倒装",
        },
        {
          label: "So/Such 触发",
          description: "So + adj. 或 Such + n. 置于句首表示强调，主句使用部分倒装",
          focus: "So + adj. / Such + n. 置于句首表示强调时，句子部分倒装",
        },
        {
          label: "省略 if 的虚拟条件句",
          description: "虚拟条件句省略 if 时，将 Had / Were / Should 提前至句首",
          focus: "Had / Were / Should 省略 if 置于句首时，句子部分倒装",
        },
      ],
    },
    matrix: {
      headers: ["类型", "触发条件", "例句"],
      rows: [
        {
          time: "全部倒装",
          forms: [
            "方位副词（Here/There/Away）",
            "Here comes the bus. / Away flew the bird.",
          ],
        },
        {
          time: "全部倒装",
          forms: [
            "表语前置",
            "Present at the meeting was the headmaster.",
          ],
        },
        {
          time: "部分倒装",
          forms: [
            "否定词（Never/Seldom/Hardly/No sooner/Not only/Not until）",
            "Never have I seen such a thing. / Hardly had he arrived when it began to rain.",
          ],
        },
        {
          time: "部分倒装",
          forms: [
            "Only + 状语",
            "Only then did I realize my mistake. / Only in this way can we succeed.",
          ],
        },
        {
          time: "部分倒装",
          forms: [
            "So/Such 强调",
            "So beautiful was the sunset that we stopped to watch. / Such was his anger that he could not speak.",
          ],
        },
        {
          time: "部分倒装",
          forms: [
            "也（so / neither / nor）",
            "He is tall, and so am I. / I cannot swim, neither can she.",
          ],
        },
        {
          time: "部分倒装",
          forms: [
            "虚拟省略 if",
            "Had I known the truth, I would have told you. / Were I you, I would accept the offer.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "全部倒装（方位副词）",
        nameEn: "Full Inversion (Locative Adverbs)",
        structure: "方位副词（Here/There/Away/Out/In...）+ 动词 + 主语",
        usages: [
          { label: "方位副词开头", example: "Here comes the bus." },
          { label: "方位副词 + 动词 + 主语（名词）", example: "Away flew the bird." },
          { label: "主语为代词时不倒装", example: "Here it comes. / Away it flew." },
        ],
        timeWords: "Here, There, Away, Out, In, Up, Down 等方位副词置于句首",
      },
      {
        name: "全部倒装（表语前置）",
        nameEn: "Full Inversion (Fronted Predicative)",
        structure: "表语 + 系动词 + 主语",
        usages: [
          { label: "形容词短语作表语前置", example: "Present at the meeting was the headmaster." },
          { label: "介词短语作表语前置", example: "On the wall hangs a famous painting." },
          { label: "分词短语作表语前置", example: "Gone are the days when we had to walk miles." },
        ],
        timeWords: "表语前置用于强调、描写场景或使句子结构平衡",
      },
      {
        name: "否定词倒装",
        nameEn: "Negative Word Inversion",
        structure: "否定词/短语 + 助动词 + 主语 + 实义动词",
        usages: [
          { label: "Never", example: "Never have I seen such a beautiful place." },
          { label: "Seldom / Rarely", example: "Seldom does he go out on weekdays." },
          { label: "Hardly...when / No sooner...than", example: "Hardly had he arrived when it began to rain." },
          { label: "Not only...but also", example: "Not only did he pass the exam, but he also got full marks." },
          { label: "Not until", example: "Not until midnight did he finish his work." },
        ],
        timeWords: "Never, Seldom, Rarely, Hardly, Scarcely, No sooner, Not only, Not until, Little, Few, At no time, In no way, By no means",
      },
      {
        name: "Only 倒装",
        nameEn: "Only Inversion",
        structure: "Only + 状语 + 助动词 + 主语 + 实义动词",
        usages: [
          { label: "Only then", example: "Only then did I realize my mistake." },
          { label: "Only + 介词短语", example: "Only in this way can we solve the problem." },
          { label: "Only + 状语从句（主句倒装）", example: "Only when he returned did I learn the truth." },
        ],
        timeWords: "Only then, Only by, Only in, Only when, Only after, Only if, Only at, Only with",
      },
      {
        name: "So/Such 倒装 + So/Neither/Nor + 虚拟省略 if",
        nameEn: "So/Such Inversion + So/Neither/Nor + If-subjunctive",
        structure: "So/Such... + 助动词 + 主语；So/Neither/Nor + 助动词 + 主语；Had/Were/Should + 主语 + ...",
        usages: [
          { label: "So + adj. 强调", example: "So beautiful was the sunset that we stopped to watch." },
          { label: "Such 强调", example: "Such was his anger that he could not speak." },
          { label: "So 表示\"也\"", example: "He likes coffee, and so do I." },
          { label: "Neither/Nor 表示\"也不\"", example: "I cannot swim, neither can she." },
          { label: "省略 if 的虚拟（Had）", example: "Had I known the truth, I would have told you." },
          { label: "省略 if 的虚拟（Were）", example: "Were I you, I would accept the offer." },
          { label: "省略 if 的虚拟（Should）", example: "Should it rain tomorrow, we would cancel the trip." },
        ],
        timeWords: "So, Such, Neither, Nor, Had, Were, Should（虚拟条件句省略 if）",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "否定词倒装时助动词未提前",
        wrong: "Never I have seen such a beautiful place.",
        correct: "Never have I seen such a beautiful place.",
        reason:
          "否定词 Never 置于句首时，必须使用部分倒装，将助动词 have 提到主语 I 之前。",
      },
      {
        title: "代词主语错误倒装",
        wrong: "Here comes it.",
        correct: "Here it comes.",
        reason:
          "当主语是代词时，方位副词开头的句子不使用倒装，保持正常语序。",
      },
      {
        title: "Only 倒装时助动词未提前",
        wrong: "Only then I realized my mistake.",
        correct: "Only then did I realize my mistake.",
        reason:
          "Only + 状语置于句首时，主句必须部分倒装，需添加助动词 did 并将动词还原为原形。",
      },
    ],
    keyQuestions: [
      "如何判断一个句子是全部倒装还是部分倒装？",
      "为什么代词作主语时方位副词句不倒装？",
      "Not until 置于句首时，主句还是从句倒装？",
      "Had I known = If I had known，两者在什么语境下可以互换？",
      "So do I 和 Neither do I 的区别是什么？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "全部倒装触发词",
          verbs: ["Here", "There", "Away", "Out", "In", "Up", "Down", "Now", "Then"],
        },
        {
          label: "部分倒装触发词",
          verbs: [
            "Never",
            "Seldom",
            "Rarely",
            "Hardly",
            "Scarcely",
            "No sooner",
            "Not only",
            "Not until",
            "Little",
            "Few",
            "At no time",
            "In no way",
            "By no means",
            "Only",
            "So",
            "Such",
            "Neither",
            "Nor",
          ],
        },
      ],
      example: {
        wrong: "Not only he passed the exam, but he also got full marks.",
        correct: "Not only did he pass the exam, but he also got full marks.",
        note: "Not only 置于句首时，Not only 所在分句需部分倒装。",
      },
    },
  },
  practice: [
    {
      title: "改写倒装句",
      titleEn: "Rewrite as Inversion",
      type: "fill",
      items: [
        {
          question: "I have never seen such a beautiful sunset.（用 Never 开头）",
          answer: "Never have I seen such a beautiful sunset.",
        },
        {
          question: "He realized his mistake only then.（用 Only then 开头）",
          answer: "Only then did he realize his mistake.",
        },
        {
          question: "The bus comes here.（用 Here 开头）",
          answer: "Here comes the bus.",
        },
        {
          question: "If I had known the truth, I would have told you.（省略 if）",
          answer: "Had I known the truth, I would have told you.",
        },
        {
          question: "The weather was so cold that we stayed indoors.（用 So cold 开头）",
          answer: "So cold was the weather that we stayed indoors.",
        },
        {
          question: "He can\\u2019t speak French, and she can\\u2019t either.（用 Neither 开头）",
          answer: "He can\\u2019t speak French, neither can she.",
        },
      ],
    },
    {
      title: "选择正确形式",
      titleEn: "Choose the Correct Form",
      type: "identify",
      items: [
        {
          question: "Seldom _____ (he goes / does he go) to the cinema on weekdays.",
          answer: "does he go",
        },
        {
          question: "Here _____ (comes the teacher / the teacher comes).",
          answer: "comes the teacher",
        },
        {
          question: "Only when he explained _____ (I understood / did I understand) the problem.",
          answer: "did I understand",
        },
        {
          question: "Not only _____ (she sings / does she sing), but she also dances beautifully.",
          answer: "does she sing",
        },
        {
          question: "Hardly _____ (had he sat / he had sat) down when the phone rang.",
          answer: "had he sat",
        },
        {
          question: "On the wall _____ (hangs a painting / a painting hangs).",
          answer: "hangs a painting",
        },
      ],
    },
    {
      title: "改正错误",
      titleEn: "Fix the Errors",
      type: "errorCorrection",
      items: [
        {
          question: "Never I have seen such a mess.",
          answer: "Never have I seen such a mess.",
        },
        {
          question: "Here comes he with his friends.",
          answer: "Here he comes with his friends.",
        },
        {
          question: "Only by working hard you can succeed.",
          answer: "Only by working hard can you succeed.",
        },
        {
          question: "So fast he ran that nobody could catch him.",
          answer: "So fast did he run that nobody could catch him.",
        },
        {
          question: "If were I you, I would apologize.",
          answer: "Were I you, I would apologize.",
        },
        {
          question: "Not until he spoke I realized he was foreign.",
          answer: "Not until he spoke did I realize he was foreign.",
        },
      ],
    },
  ],
  production: [
    {
      title: "用倒装句写作",
      titleEn: "Write with Inversions",
      description:
        "使用至少三种不同类型的倒装句（全部倒装、否定词倒装、Only 倒装、So/Such 倒装等）写一段 80 词左右的短文，主题为一次难忘的经历。",
      example: [
        "Never had I imagined that a simple camping trip would change my life so profoundly.",
        "Not only did we get lost in the forest, but we also encountered a fierce storm.",
        "So terrified was I that I could barely move.",
        "Only when the rescue team arrived did we feel a sense of relief.",
        "Such was the experience that I would never forget it.",
      ],
    },
    {
      title: "改写段落",
      titleEn: "Rewrite the Paragraph",
      description:
        "将以下段落中的画线部分改写为倒装句，使文章更具表现力和正式感。",
      example: [
        "原文: I had hardly arrived at the station when the train left. I had never felt so frustrated. The situation was so bad that I almost cried. I only realized later that there was another train in 30 minutes.",
        "改写: Hardly had I arrived at the station when the train left. Never had I felt so frustrated. So bad was the situation that I almost cried. Only later did I realize that there was another train in 30 minutes.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "全部倒装",
        items: [
          "方位副词（Here/There/Away...）+ 动词 + 主语（名词）",
          "代词作主语时不倒装：Here it comes ✅ / Here comes it ❌",
          "表语前置：Present at the meeting was the headmaster.",
        ],
      },
      {
        title: "部分倒装",
        items: [
          "否定词开头：Never / Seldom / Hardly / No sooner / Not only / Not until + 助动词 + 主语",
          "Only + 状语开头：Only then did I realize...",
          "So/Such 强调：So beautiful was the sunset that...",
          "也/也不：So do I / Neither can she",
          "虚拟省略 if：Had I known / Were I you / Should it rain",
        ],
      },
      {
        title: "注意事项",
        items: [
          "否定词倒装只倒主句，从句不变",
          "Not only...but also 中只有 Not only 部分倒装",
          "Hardly...when / No sooner...than 中 Hardly/No sooner 部分倒装，用过去完成时",
          "Only + 状语从句时，主句倒装，从句不变",
        ],
      },
    ],
    mindMap:
      "倒装句 → 全部倒装（方位副词 / 表语前置） + 部分倒装（否定词 / Only / So+Such / 也 / 虚拟省略if）\n" +
      "  全部倒装: Here/There/Away + V + S（代词不倒装）; 表语/介词短语 + be + S\n" +
      "  部分倒装: Never/Seldom/Hardly/No sooner/Not only/Not until + 助V + S + V; Only + 状语 + 助V + S + V; So/Such...that 助V + S + V; So/Neither/Nor + 助V + S; Had/Were/Should + S + V（省略if）",
    selfTest: [
      {
        question: "Seldom _____ out on weekdays.",
        options: ["he goes", "does he go", "he does go", "goes he"],
        answer: "does he go",
      },
      {
        question: "Not until midnight _____ finish his work.",
        options: ["he did", "did he", "he", "does he"],
        answer: "did he",
      },
      {
        question: "_____ I known the truth, I would have told you.",
        options: ["If have", "Had", "Have", "If had"],
        answer: "Had",
      },
      {
        question: "Here _____.（代词主语）",
        options: ["comes it", "it comes", "does it come", "coming it"],
        answer: "it comes",
      },
      {
        question: "So absorbed _____ in her book that she didn\\u2019t hear the doorbell.",
        options: ["she was", "was she", "she did", "did she"],
        answer: "was she",
      },
    ],
  },
};

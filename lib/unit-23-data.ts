import { UnitData } from "./unit-01-data";

export const unit23Data: UnitData = {
  info: {
    id: "unit-23",
    moduleId: "03",
    number: 23,
    title: "状语从句高级——特殊结构",
    titleEn: "Adverbial Clauses: Advanced Structures",
  },
  objectives: [
    "掌握状语从句中的倒装结构",
    "掌握状语从句中的省略结构",
    "理解比较状语从句的用法",
    "在写作中灵活运用状语从句的特殊结构",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "<strong>Had I known</strong>, I would have helped.",
        "<strong>Although tired</strong>, he kept working.",
        "<strong>The more</strong> you practice, <strong>the better</strong> you'll become.",
        "<strong>So beautiful was</strong> the view that we stopped to admire it.",
      ],
      answer:
        "这些句子都使用了<strong>特殊结构</strong>：<br>Had I known → <strong>倒装</strong>（省略if）<br>Although tired → <strong>省略</strong>（省略he was）<br>The more...the better → <strong>比较</strong>结构<br>So beautiful was → <strong>倒装</strong>（so...that的倒装）",
    },
    comparison: {
      chinese: [
        { text: "如果我知道，我就帮你了。", note: "可以用倒装" },
        { text: "虽然累了，他继续工作。", note: "可以省略" },
        { text: "练习越多，进步越大。", note: "the more...the more" },
      ],
      english: [
        { text: "<strong>Had I known</strong>, I would have helped.", note: "倒装 = If I had known" },
        { text: "<strong>Although tired</strong>, he kept working.", note: "省略 = Although he was tired" },
        { text: "<strong>The more</strong> you practice, <strong>the better</strong> you'll become.", note: "比较结构" },
      ],
      conclusion:
        "状语从句的<strong>特殊结构</strong>（倒装、省略、比较）使句子更简洁、更正式，在写作和考试中非常重要。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "倒装结构",
          description: "省略if，将had/were/should提前；或so...that的倒装",
          example: "<strong>Had I known</strong> = If I had known",
        },
        {
          label: "省略结构",
          description: "从句主语与主句相同且含be动词时，可省略主语和be",
          example: "<strong>Although tired</strong> = Although he was tired",
        },
        {
          label: "比较结构",
          description: "the more...the more / as...as / than",
          example: "<strong>The more</strong> you practice, <strong>the better</strong> you'll become.",
        },
      ],
      aspect: [
        {
          label: "条件从句倒装",
          description: "Had/Were/Should + 主语 + ...（省略if）",
          focus: "Had I known = If I had known",
        },
        {
          label: "让步从句倒装",
          description: "adj./adv./v. + as + 主语 + ...",
          focus: "Tired as he was = Although he was tired",
        },
        {
          label: "省略条件",
          description: "从句主语 = 主句主语 + 从句含be动词",
          focus: "Although (he was) tired, he kept working.",
        },
      ],
    },
    matrix: {
      headers: ["结构", "原句", "特殊形式", "说明"],
      rows: [
        { time: "条件倒装", forms: ["If I had known", "Had I known", "省略if，had提前"] },
        { time: "条件倒装", forms: ["If I were you", "Were I you", "省略if，were提前"] },
        { time: "条件倒装", forms: ["If you should need", "Should you need", "省略if，should提前"] },
        { time: "让步倒装", forms: ["Although he was tired", "Tired as he was", "adj. + as + 主语"] },
        { time: "让步倒装", forms: ["Although he tried hard", "Hard as he tried", "adv. + as + 主语"] },
        { time: "让步倒装", forms: ["Although he might try", "Try as he might", "v. + as + 主语"] },
        { time: "so...that倒装", forms: ["The view was so beautiful that", "So beautiful was the view that", "so + adj. + be + 主语"] },
        { time: "省略", forms: ["Although he was tired", "Although tired", "省略主语+be"] },
        { time: "省略", forms: ["While I was sleeping", "While sleeping", "省略主语+be"] },
        { time: "比较", forms: ["You practice more, you become better", "The more you practice, the better you become", "the + 比较级..., the + 比较级"] },
      ],
    },
    tenses: [
      {
        name: "条件状语从句的倒装",
        nameEn: "Conditional Inversion",
        structure: "Had/Were/Should + 主语 + ...（省略if）",
        usages: [
          { label: "Had + 主语 + 过去分词", example: "<strong>Had I known</strong> the truth, I would have told you." },
          { label: "Were + 主语 + ...", example: "<strong>Were I you</strong>, I would accept the offer." },
          { label: "Should + 主语 + ...", example: "<strong>Should you need</strong> help, please call me." },
        ],
        timeWords: "倒装结构比if更正式，常用于书面语",
      },
      {
        name: "让步状语从句的倒装",
        nameEn: "Concessive Inversion",
        structure: "adj./adv./v. + as + 主语 + 谓语",
        usages: [
          { label: "adj. + as", example: "<strong>Tired as he was</strong>, he kept working." },
          { label: "adv. + as", example: "<strong>Hard as he tried</strong>, he couldn't solve it." },
          { label: "v. + as", example: "<strong>Try as he might</strong>, he couldn't open the door." },
        ],
        timeWords: "这种倒装表示让步，相当于although",
      },
      {
        name: "so...that的倒装",
        nameEn: "so...that Inversion",
        structure: "so + adj./adv. + be/v. + 主语 + that",
        usages: [
          { label: "so + adj. + be + 主语", example: "<strong>So beautiful was the view</strong> that we stopped to admire it." },
          { label: "so + adv. + did + 主语", example: "<strong>So fast did he run</strong> that no one could catch him." },
          { label: "such + be + 主语", example: "<strong>Such was his anger</strong> that he couldn't speak." },
        ],
        timeWords: "so/such提前时，主句倒装",
      },
      {
        name: "no sooner...than / hardly...when",
        nameEn: "no sooner...than / hardly...when",
        structure: "No sooner/Hardly + had + 主语 + 过去分词 + than/when",
        usages: [
          { label: "no sooner...than", example: "<strong>No sooner had I arrived than</strong> it started raining." },
          { label: "hardly...when", example: "<strong>Hardly had I arrived when</strong> it started raining." },
        ],
        timeWords: "这两个结构都表示\"一……就\"，且需要倒装",
      },
      {
        name: "状语从句中的省略",
        nameEn: "Ellipsis in Adverbial Clauses",
        structure: "省略条件：从句主语 = 主句主语 + 从句含be动词",
        usages: [
          { label: "时间省略", example: "<strong>When (I was) young</strong>, I lived in a village." },
          { label: "条件省略", example: "<strong>If (it is) possible</strong>, please come early." },
          { label: "让步省略", example: "<strong>Although (he was) tired</strong>, he kept working." },
          { label: "方式省略", example: "He acted <strong>as if (he was) surprised</strong>." },
        ],
        timeWords: "省略后句子更简洁，但必须满足两个条件",
      },
      {
        name: "比较状语从句",
        nameEn: "Comparative Clauses",
        structure: "than / as...as / the more...the more",
        usages: [
          { label: "than：比", example: "He is taller <strong>than</strong> I (am)." },
          { label: "as...as：和……一样", example: "She runs <strong>as fast as</strong> he (does)." },
          { label: "the more...the more", example: "<strong>The more</strong> you practice, <strong>the better</strong> you'll become." },
        ],
        timeWords: "the more...the more是固定结构，不能省略the",
      },
      {
        name: "其他特殊结构",
        nameEn: "Other Advanced Structures",
        structure: "in that / now that / seeing that",
        usages: [
          { label: "in that：在于", example: "This book is different <strong>in that</strong> it uses simple language." },
          { label: "now that：既然", example: "<strong>Now that</strong> you're here, let's start." },
          { label: "seeing/given that：鉴于", example: "<strong>Given that</strong> he's young, he did a good job." },
        ],
        timeWords: "这些结构在正式写作中很常见",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "倒装结构中忘记省略if",
        wrong: "<strong>If had I known</strong>, I would have helped.",
        correct: "<strong>Had I known</strong>, I would have helped.",
        reason: "倒装结构中省略if，直接将had/were/should提前。",
      },
      {
        title: "省略结构中主语不一致",
        wrong: "<strong>Although tired</strong>, the work was finished.",
        correct: "<strong>Although tired</strong>, he finished the work.",
        reason: "省略结构中，从句主语必须与主句主语相同。",
      },
      {
        title: "the more...the more语序错误",
        wrong: "<strong>More</strong> you practice, <strong>better</strong> you'll become.",
        correct: "<strong>The more</strong> you practice, <strong>the better</strong> you'll become.",
        reason: "the more...the more是固定结构，不能省略the。",
      },
      {
        title: "比较结构中代词格错误",
        wrong: "He is taller than <strong>me</strong>.（正式英语）",
        correct: "He is taller than <strong>I</strong> (am).",
        reason: "正式英语中，than后用主格代词。",
      },
    ],
    keyQuestions: [
      "倒装条件句怎么构成？（Had/Were/Should提前，省略if）",
      "省略的条件是什么？（从句主语=主句主语 + 从句含be动词）",
      "the more...the more能省略the吗？（不能）",
      "so...that的倒装怎么构成？（so + adj. + be/v. + 主语 + that）",
    ],
    stateVerbs: {
      categories: [
        { label: "条件倒装", verbs: ["Had I known", "Were I you", "Should you need"] },
        { label: "让步倒装", verbs: ["Tired as he was", "Hard as he tried", "Try as he might"] },
        { label: "省略", verbs: ["Although tired", "While sleeping", "If possible"] },
        { label: "比较", verbs: ["the more...the more", "as...as", "than"] },
      ],
      example: {
        wrong: "<strong>If had I known</strong>, I would have helped.",
        correct: "<strong>Had I known</strong>, I would have helped.",
        note: "倒装结构中省略if，直接将had提前。",
      },
    },
  },
  practice: [
    {
      title: "倒装结构练习",
      titleEn: "Inversion Practice",
      type: "fill",
      items: [
        { question: "If I had known → ______ I known", answer: "Had" },
        { question: "If I were you → ______ I you", answer: "Were" },
        { question: "Although he was tired → ______ as he was", answer: "Tired" },
        { question: "Although he tried hard → ______ as he tried", answer: "Hard" },
        { question: "The view was so beautiful that → So beautiful ______ the view that", answer: "was" },
      ],
    },
    {
      title: "省略结构练习",
      titleEn: "Ellipsis Practice",
      type: "fill",
      items: [
        { question: "When I was young → When ______ young", answer: "" },
        { question: "While he was sleeping → While ______ sleeping", answer: "" },
        { question: "Although she was busy → Although ______ busy", answer: "" },
        { question: "If it is possible → If ______ possible", answer: "" },
        { question: "He acted as if he was surprised → He acted as if ______ surprised", answer: "" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "If had I known, I would have helped.", answer: "<strong>Had I known</strong>, I would have helped.（去掉If）" },
        { question: "Although tired, the work was finished.", answer: "<strong>Although tired</strong>, he finished the work.（主语不一致）" },
        { question: "More you practice, better you become.", answer: "<strong>The more</strong> you practice, <strong>the better</strong> you become.（加the）" },
        { question: "He is taller than me. (正式英语)", answer: "He is taller than <strong>I</strong> (am).（me→I）" },
      ],
    },
  ],
  production: [
    {
      title: "倒装结构写作",
      titleEn: "Inversion Writing",
      description: "用倒装结构写一段话描述你的经历。",
      example: [
        "<strong>Had I known</strong> how difficult it would be, I wouldn't have started.",
        "<strong>Tired as I was</strong>, I finished the marathon.",
        "<strong>So beautiful was the sunset</strong> that I took many photos.",
      ],
    },
    {
      title: "比较结构写作",
      titleEn: "Comparative Writing",
      description: "用the more...the more写一段话描述学习的经验。",
      example: [
        "<strong>The more</strong> I study English, <strong>the better</strong> I become.",
        "<strong>The harder</strong> I work, <strong>the more</strong> confident I feel.",
        "<strong>The more</strong> I read, <strong>the more</strong> I understand.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "倒装结构",
        items: ["条件句：Had/Were/Should + 主语（省略if）", "让步句：adj./adv./v. + as + 主语", "so...that：So + adj. + be/v. + 主语 + that", "no sooner...than / hardly...when"],
      },
      {
        title: "省略结构",
        items: ["条件：从句主语 = 主句主语 + 从句含be动词", "省略主语和be动词"],
      },
      {
        title: "比较结构",
        items: ["than：比", "as...as：和……一样", "the more...the more：越……越"],
      },
      {
        title: "其他结构",
        items: ["in that：在于", "now that：既然", "seeing/given that：鉴于"],
      },
    ],
    mindMap: `状语从句高级结构
├── 倒装
│   ├── 条件句：Had/Were/Should + 主语
│   ├── 让步句：adj./adv./v. + as + 主语
│   ├── so...that：So + adj. + be/v. + 主语
│   └── no sooner...than / hardly...when
├── 省略
│   ├── 条件：主语相同 + be动词
│   └── 省略主语和be
├── 比较
│   ├── than
│   ├── as...as
│   └── the more...the more
└── 其他
    ├── in that（在于）
    ├── now that（既然）
    └── seeing/given that（鉴于）`,
    selfTest: [
      {
        question: "______ I known, I would have helped.",
        options: ["If had", "Had", "Have"],
        answer: "Had",
      },
      {
        question: "______ tired, he kept working.",
        options: ["Although he was", "Although", "Tired as he was"],
        answer: "Tired as he was",
      },
      {
        question: "______ you practice, ______ you'll become.",
        options: ["More...better", "The more...the better", "The more...better"],
        answer: "The more...the better",
      },
      {
        question: "He is taller ______ I am.",
        options: ["than", "as", "from"],
        answer: "than",
      },
      {
        question: "______ you're here, let's start.",
        options: ["Now that", "Since that", "Because that"],
        answer: "Now that",
      },
    ],
  },
};

import { UnitData } from "./unit-01-data";

export const unit21Data: UnitData = {
  info: {
    id: "unit-21",
    moduleId: "03",
    number: 21,
    title: "状语从句——原因、目的、结果",
    titleEn: "Adverbial Clauses: Cause, Purpose & Result",
  },
  objectives: [
    "掌握原因状语从句的引导词（because/since/as/for）",
    "掌握目的状语从句的用法（so that/in order that）",
    "掌握结果状语从句的用法（so...that/such...that）",
    "区分不同引导词的语气和用法",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I stayed at home <strong>because I was sick</strong>.",
        "<strong>Since you are tired</strong>, let's take a break.",
        "He spoke quietly <strong>so that no one could hear</strong>.",
        "It was <strong>so cold that</strong> the river froze.",
      ],
      answer:
        "这些状语从句分别表示：<br>because → <strong>原因</strong>（因为我生病了）<br>Since → <strong>原因</strong>（既然你累了）<br>so that → <strong>目的</strong>（以便没人听到）<br>so...that → <strong>结果</strong>（冷到河流结冰）",
    },
    comparison: {
      chinese: [
        { text: "因为下雨，我们待在家里。", note: "原因" },
        { text: "她努力学习以便通过考试。", note: "目的" },
        { text: "天太冷了，以至于河流结冰了。", note: "结果" },
      ],
      english: [
        { text: "We stayed home <strong>because</strong> it rained.", note: "原因状语从句" },
        { text: "She studied hard <strong>so that</strong> she could pass.", note: "目的状语从句" },
        { text: "It was <strong>so cold that</strong> the river froze.", note: "结果状语从句" },
      ],
      conclusion:
        "原因、目的、结果状语从句分别回答<strong>为什么</strong>、<strong>为了什么</strong>、<strong>导致什么</strong>。引导词不同，逻辑关系完全不同。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "原因状语从句",
          description: "表示动作发生的原因，回答\"为什么\"",
          example: "I stayed home <strong>because</strong> I was sick.",
        },
        {
          label: "目的状语从句",
          description: "表示动作的目的，回答\"为了什么\"",
          example: "He spoke quietly <strong>so that</strong> no one could hear.",
        },
        {
          label: "结果状语从句",
          description: "表示动作的结果，回答\"导致什么\"",
          example: "It was <strong>so cold that</strong> the river froze.",
        },
      ],
      aspect: [
        {
          label: "原因：语气强弱",
          description: "because最强（直接原因）→ since/as（已知原因）→ for最弱（补充说明）",
          focus: "because > since/as > for",
        },
        {
          label: "目的 vs 结果",
          description: "目的：so that + 情态动词；结果：so...that/such...that + 无情态动词",
          focus: "so that he <strong>could</strong> hear（目的） vs so cold <strong>that</strong> it froze（结果）",
        },
        {
          label: "so vs such",
          description: "so + adj./adv.；such + n.短语",
          focus: "so cold that / such a cold day that",
        },
      ],
    },
    matrix: {
      headers: ["类型", "引导词", "语气/用法", "例句"],
      rows: [
        { time: "原因", forms: ["because", "最强，直接原因", "Because it rained, we stayed home."] },
        { time: "原因", forms: ["since", "较弱，已知原因", "Since you're tired, let's rest."] },
        { time: "原因", forms: ["as", "较弱，已知原因", "As it was dark, we went home."] },
        { time: "原因", forms: ["for", "最弱，补充说明", "He's home, for the light is on."] },
        { time: "目的", forms: ["so that", "以便（+情态动词）", "I'll give you my number so that you can call."] },
        { time: "目的", forms: ["in order that", "为了（更正式）", "He worked hard in order that he could support his family."] },
        { time: "结果", forms: ["so...that", "如此……以至于", "It was so cold that the river froze."] },
        { time: "结果", forms: ["such...that", "如此……以至于", "It was such a cold day that the river froze."] },
      ],
    },
    tenses: [
      {
        name: "because：因为",
        nameEn: "because — direct cause",
        structure: "because + 从句（语气最强）",
        usages: [
          { label: "直接原因", example: "I stayed at home <strong>because</strong> I was sick." },
          { label: "回答why", example: "Why did you stay home? — <strong>Because</strong> I was sick." },
          { label: "注意：不与so连用", example: "✗ Because...so... ✓ Because.../ ...so..." },
        ],
        timeWords: "because不能与so在同一个句子中连用",
      },
      {
        name: "since / as：既然 / 由于",
        nameEn: "since / as — known cause",
        structure: "since/as + 从句（语气较弱）",
        usages: [
          { label: "since：已知原因", example: "<strong>Since</strong> you are tired, let's take a break." },
          { label: "as：已知原因", example: "<strong>As</strong> it was getting dark, we went home." },
        ],
        timeWords: "since/as表示已知或显而易见的原因",
      },
      {
        name: "for：因为（补充说明）",
        nameEn: "for — additional explanation",
        structure: "句子 + for + 从句（不能放句首）",
        usages: [
          { label: "补充说明原因", example: "He must be at home, <strong>for</strong> the light is on." },
          { label: "推理依据", example: "She must be sick, <strong>for</strong> she looks pale." },
        ],
        timeWords: "for是并列连词，只能放在句中，不能放句首",
      },
      {
        name: "so that：以便（目的）",
        nameEn: "so that — purpose",
        structure: "so that + 从句（常用can/could/will/would/may/might）",
        usages: [
          { label: "以便", example: "He spoke quietly <strong>so that</strong> no one <strong>could</strong> hear." },
          { label: "为了", example: "I'll give you my number <strong>so that</strong> you <strong>can</strong> call me." },
        ],
        timeWords: "目的状语从句中通常需要情态动词",
      },
      {
        name: "so...that：如此……以至于（结果）",
        nameEn: "so...that — result",
        structure: "so + adj./adv. + that + 从句",
        usages: [
          { label: "so + adj. + that", example: "It was <strong>so cold that</strong> the river froze." },
          { label: "so + adv. + that", example: "He ran <strong>so fast that</strong> no one could catch him." },
          { label: "so + many/much/few/little + n.", example: "There were <strong>so many people that</strong> I couldn't find her." },
        ],
        timeWords: "so后接形容词/副词，不接名词",
      },
      {
        name: "such...that：如此……以至于（结果）",
        nameEn: "such...that — result",
        structure: "such + (a/an) + adj. + n. + that + 从句",
        usages: [
          { label: "such + a/an + adj. + n.", example: "It was <strong>such a cold day that</strong> the river froze." },
          { label: "such + adj. + 复数n.", example: "He told <strong>such funny jokes that</strong> everyone laughed." },
          { label: "such + adj. + 不可数n.", example: "It was <strong>such bad weather that</strong> we stayed home." },
        ],
        timeWords: "such后接名词短语",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "because和so连用",
        wrong: "<strong>Because</strong> it was raining, <strong>so</strong> we stayed home.",
        correct: "<strong>Because</strong> it was raining, we stayed home.",
        reason: "because和so不能在同一个句子中连用，二选一。",
      },
      {
        title: "so...that和such...that混淆",
        wrong: "It was <strong>such cold</strong> that the river froze.",
        correct: "It was <strong>so cold</strong> that the river froze.",
        reason: "so后接形容词/副词，such后接名词短语。cold是形容词，用so。",
      },
      {
        title: "目的状语从句没有情态动词",
        wrong: "He spoke quietly <strong>so that</strong> no one heard.",
        correct: "He spoke quietly <strong>so that</strong> no one <strong>could</strong> hear.",
        reason: "目的状语从句通常需要情态动词（can/could/will/would等）。",
      },
      {
        title: "for放在句首",
        wrong: "<strong>For</strong> it was raining, we stayed home.",
        correct: "We stayed home, <strong>for</strong> it was raining.",
        reason: "for是并列连词，不能放在句首，只能放在句中。",
      },
    ],
    keyQuestions: [
      "because和so能否连用？（不能，二选一）",
      "so后接什么？such后接什么？（so+adj./adv.，such+n.短语）",
      "目的状语从句需要什么？（通常需要情态动词）",
      "for能放在句首吗？（不能，只能放在句中）",
    ],
    stateVerbs: {
      categories: [
        { label: "原因：语气强弱", verbs: ["because（最强）", "since/as（较弱）", "for（最弱，不放句首）"] },
        { label: "目的 vs 结果", verbs: ["so that + 情态动词（目的）", "so...that / such...that（结果）"] },
        { label: "so vs such", verbs: ["so + adj./adv.", "such + n.短语", "so + many/much/few/little + n."] },
      ],
      example: {
        wrong: "<strong>Because</strong> it rained, <strong>so</strong> we stayed home.",
        correct: "<strong>Because</strong> it rained, we stayed home.",
        note: "because和so不能在同一个句子中连用。",
      },
    },
  },
  practice: [
    {
      title: "原因状语从句填空",
      titleEn: "Cause Clause Fill-in",
      type: "fill",
      items: [
        { question: "I stayed at home ______ I was sick.", answer: "because" },
        { question: "______ you are tired, let's take a break.", answer: "Since" },
        { question: "______ it was getting dark, we went home.", answer: "As" },
        { question: "He must be at home, ______ the light is on.", answer: "for" },
      ],
    },
    {
      title: "so...that / such...that填空",
      titleEn: "Result Clause Fill-in",
      type: "fill",
      items: [
        { question: "It was ______ cold ______ the river froze.", answer: "so...that" },
        { question: "It was ______ a cold day ______ the river froze.", answer: "such...that" },
        { question: "He ran ______ fast ______ no one could catch him.", answer: "so...that" },
        { question: "She told ______ a funny joke ______ everyone laughed.", answer: "such...that" },
        { question: "There were ______ many people ______ I couldn't find her.", answer: "so...that" },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        { question: "Because it was raining, so we stayed home.", answer: "<strong>Because</strong> it was raining, we stayed home.（去掉so）" },
        { question: "It was such cold that the river froze.", answer: "It was <strong>so cold</strong> that the river froze.（such→so）" },
        { question: "He spoke quietly so that no one heard.", answer: "He spoke quietly so that no one <strong>could</strong> hear.（加情态动词）" },
        { question: "For it was late, we went home.", answer: "We went home, <strong>for</strong> it was late.（调整位置）" },
      ],
    },
  ],
  production: [
    {
      title: "因果关系表达",
      titleEn: "Cause and Effect",
      description: "用because/since/as描述你最近做的一件事的原因。",
      example: [
        "I stayed at home yesterday <strong>because</strong> I was sick.",
        "<strong>Since</strong> the weather was nice, I went for a walk.",
        "I decided to study English <strong>because</strong> I want to travel abroad.",
      ],
    },
    {
      title: "目的与结果",
      titleEn: "Purpose and Result",
      description: "用so that/so...that/such...that描述你的经历。",
      example: [
        "I studied hard <strong>so that</strong> I could pass the exam.",
        "The movie was <strong>so boring that</strong> I fell asleep.",
        "It was <strong>such a beautiful day that</strong> we went to the park.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "原因状语从句",
        items: ["because：最强，直接原因（不与so连用）", "since：已知原因", "as：已知原因", "for：补充说明（不放句首）"],
      },
      {
        title: "目的状语从句",
        items: ["so that：以便（+情态动词）", "in order that：为了（更正式）"],
      },
      {
        title: "结果状语从句",
        items: ["so + adj./adv. + that", "such + n.短语 + that", "so + many/much/few/little + n. + that"],
      },
    ],
    mindMap: `原因·目的·结果状语从句
├── 原因
│   ├── because（最强，直接原因）
│   ├── since（已知原因）
│   ├── as（已知原因）
│   └── for（补充说明，不放句首）
├── 目的
│   ├── so that（+情态动词）
│   └── in order that（更正式）
├── 结果
│   ├── so + adj./adv. + that
│   ├── such + n. + that
│   └── so + many/much/few/little + n. + that
└── 注意
    ├── because ≠ so（不连用）
    ├── so + adj. / such + n.
    └── 目的从句需情态动词`,
    selfTest: [
      {
        question: "I stayed at home ______ I was sick.",
        options: ["because", "so", "for"],
        answer: "because",
      },
      {
        question: "______ you are tired, let's take a break.",
        options: ["Because", "Since", "So"],
        answer: "Since",
      },
      {
        question: "It was ______ cold ______ the river froze.",
        options: ["such...that", "so...that", "so...so"],
        answer: "so...that",
      },
      {
        question: "He spoke quietly ______ no one could hear.",
        options: ["so that", "so...that", "because"],
        answer: "so that",
      },
      {
        question: "It was ______ a cold day ______ the river froze.",
        options: ["so...that", "such...that", "so...so"],
        answer: "such...that",
      },
    ],
  },
};

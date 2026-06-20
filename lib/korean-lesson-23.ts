import { KoreanLesson } from "./korean-types";

export const koreanLesson23Data: KoreanLesson = {
  info: {
    id: "lesson-23",
    moduleId: "05",
    number: 23,
    title: "-아/어야 해요、-(으)면 안 돼요",
    titleEn: "-아/어야 해요 & -(으)면 안 돼요 (Must/Must Not)",
  },
  objectives: [
    "掌握-아/어야 해요表示必须",
    "掌握-(으)면 안 돼요表示禁止",
    "能用这些表达描述义务和禁止",
  ],
  warmup: {
    questions: [
      "怎么用韩语表达'必须做某事'？",
      "怎么用韩语表达'不能做某事'？",
    ],
  },
  input: {
    dialogue: {
      title: "规则",
      lines: [
        { speaker: "A", korean: "여기서 담배 피워도 돼요?", chinese: "这里可以抽烟吗？" },
        { speaker: "B", korean: "안 돼요. 여기서 담배 피우면 안 돼요.", chinese: "不行。这里不能抽烟。" },
        { speaker: "A", korean: "그러면 어디에서 피워야 해요?", chinese: "那应该在哪里抽？" },
        { speaker: "B", korean: "밖에 나가서 피워야 해요.", chinese: "应该出去抽。" },
      ],
    },
    vocabulary: [
      { korean: "-아/어야 하다", chinese: "必须", partOfSpeech: "补助动词" },
      { korean: "-(으)면 안 되다", chinese: "不能", partOfSpeech: "补助动词" },
      { korean: "담배", chinese: "烟", partOfSpeech: "名词" },
      { korean: "피우다", chinese: "抽（烟）", partOfSpeech: "动词" },
      { korean: "규칙", chinese: "规则", partOfSpeech: "名词" },
      { korean: "규율", chinese: "纪律", partOfSpeech: "名词" },
      { korean: "법", chinese: "法律", partOfSpeech: "名词" },
      { korean: "금지", chinese: "禁止", partOfSpeech: "名词" },
      { korean: "금지하다", chinese: "禁止", partOfSpeech: "动词" },
      { korean: "의무", chinese: "义务", partOfSpeech: "名词" },
      { korean: "책임", chinese: "责任", partOfSpeech: "名词" },
      { korean: "준수하다", chinese: "遵守", partOfSpeech: "动词" },
      { korean: "어기다", chinese: "违反", partOfSpeech: "动词" },
      { korean: "벌금", chinese: "罚款", partOfSpeech: "名词" },
      { korean: "안전", chinese: "安全", partOfSpeech: "名词" },
      { korean: "안전하다", chinese: "安全", partOfSpeech: "形容词" },
      { korean: "위험하다", chinese: "危险", partOfSpeech: "形容词" },
      { korean: "위험", chinese: "危险", partOfSpeech: "名词" },
      { korean: "약", chinese: "药", partOfSpeech: "名词" },
      { korean: "먹다", chinese: "吃", partOfSpeech: "动词" },
      { korean: "운동", chinese: "运动", partOfSpeech: "名词" },
      { korean: "운동하다", chinese: "运动", partOfSpeech: "动词" },
      { korean: "일찍", chinese: "早点", partOfSpeech: "副词" },
      { korean: "늦게", chinese: "晚", partOfSpeech: "副词" },
      { korean: "숙제", chinese: "作业", partOfSpeech: "名词" },
      { korean: "출근", chinese: "上班", partOfSpeech: "名词" },
      { korean: "출근하다", chinese: "上班", partOfSpeech: "动词" },
      { korean: "지각", chinese: "迟到", partOfSpeech: "名词" },
      { korean: "지각하다", chinese: "迟到", partOfSpeech: "动词" },
      { korean: "결석", chinese: "缺席", partOfSpeech: "名词" },
      { korean: "결석하다", chinese: "缺席", partOfSpeech: "动词" },
      { korean: "복장", chinese: "着装", partOfSpeech: "名词" },
      { korean: "건강", chinese: "健康", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-아/어야 해요",
        nameEn: "-아/어야 해요 (must)",
        structure: "动词词干 + 아/어야 해요",
        meaning: "表示'必须做某事'。",
        usage: "用于义务和必要性。",
        examples: [
          { korean: "공부해야 해요.", chinese: "必须学习。" },
          { korean: "일찍 일어나야 해요.", chinese: "必须早起。" },
          { korean: "약을 먹어야 해요.", chinese: "必须吃药。" },
        ],
        chineseTransfer: "类似中文的'必须'，但韩语是动词变形。",
      },
      {
        name: "-(으)면 안 돼요",
        nameEn: "-(으)면 안 돼요 (must not)",
        structure: "动词词干 + (으)면 안 돼요",
        meaning: "表示'不能做某事'（禁止）。",
        usage: "用于禁止和不允许。",
        examples: [
          { korean: "여기서 담배 피우면 안 돼요.", chinese: "这里不能抽烟。" },
          { korean: "이것을 먹으면 안 돼요.", chinese: "不能吃这个。" },
          { korean: "늦게 자면 안 돼요.", chinese: "不能晚睡。" },
        ],
        chineseTransfer: "类似中文的'不能'，但韩语更强调禁止。",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-아/어야 해요和-(으)면 안 돼요混用",
        correct: "-아/어야 해요是必须，-(으)면 안 돼요是禁止",
        reason: "两者意思相反，不能随意替换。",
      },
      {
        wrong: "把-(으)면 안 돼요说成-(으)면 안 해요",
        correct: "-(으)면 안 돼요是固定搭配",
        reason: "안 돼요是'不行'，안 해요是'不做'。",
      },
    ],
    keyQuestions: [
      "-아/어야 해요和-(으)면 안 돼요的区别是什么？",
      "怎么表达'必须做某事'？",
      "怎么表达'不能做某事'？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的表达。",
      instructionsEn: "Listen and choose the correct expression.",
      question: "听到的表达是？",
      options: ["해야 해요", "하면 안 돼요", "하고 싶어요", "할 거예요"],
      answer: "해야 해요",
    },
    {
      type: "fill-in",
      instructions: "用-아/어야 해요或-(으)면 안 돼요填空。",
      instructionsEn: "Fill in with -아/어야 해요 or -(으)면 안 돼요.",
      sentences: [
        { sentence: "공부___", answer: "해야 해요", hint: "必须学习" },
        { sentence: "여기서 담배 피우___", answer: "면 안 돼요", hint: "不能抽烟" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "공부해야 해요. 的意思是？",
        options: ["学习了。", "必须学习。", "想学习。", "可以学习。"],
      answer: "必须学习。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "必须表达",
        items: [
          "-아/어야 해요：必须",
          "用于义务和必要性",
          "공부해야 해요",
        ],
      },
      {
        title: "禁止表达",
        items: [
          "-(으)면 안 돼요：不能",
          "用于禁止和不允许",
          "담배 피우면 안 돼요",
        ],
      },
    ],
    mindMap: `义务与禁止
├─ -아/어야 해요
│  ├─ 必须
│  └─ 공부해야 해요
└─ -(으)면 안 돼요
   ├─ 不能（禁止）
   └─ 담배 피우면 안 돼요`,
    selfTest: [
      {
        question: "-아/어야 해요表示什么？",
        options: ["必须", "禁止", "愿望", "计划"],
        answer: "必须",
      },
      {
        question: "여기서 담배 피우면 안 돼요的意思是？",
        options: ["这里可以抽烟。", "这里不能抽烟。", "这里想抽烟。", "这里必须抽烟。"],
        answer: "这里不能抽烟。",
      },
      {
        question: "-(으)면 안 돼요的固定搭配是？",
        options: ["안 해요", "안 돼요", "안 해요都可以", "都可以"],
        answer: "안 돼요",
      },
    ],
  },
};

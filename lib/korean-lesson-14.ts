import { KoreanLesson } from "./korean-types";

export const koreanLesson14Data: KoreanLesson = {
  info: {
    id: "lesson-14",
    moduleId: "03",
    number: 14,
    title: "안/못/-지 않아요否定",
    titleEn: "안/못/-지 않아요 Negation",
  },
  objectives: [
    "掌握三种否定形式：안、못、-지 않아요",
    "理解三种否定的区别和使用场景",
    "能正确使用否定表达",
  ],
  warmup: {
    questions: [
      "韩语有几种否定形式？",
      "안和못的区别是什么？",
    ],
  },
  input: {
    dialogue: {
      title: "日常对话",
      lines: [
        { speaker: "A", korean: "오늘 영화 봐요?", chinese: "今天看电影吗？" },
        { speaker: "B", korean: "아니요, 안 봐요.", chinese: "不，不看。" },
        { speaker: "A", korean: "왜요?", chinese: "为什么？" },
        { speaker: "B", korean: "시간이 없어요.", chinese: "没有时间。" },
      ],
    },
    vocabulary: [
      { korean: "안", chinese: "不（主观否定）", partOfSpeech: "副词" },
      { korean: "못", chinese: "不能（客观否定）", partOfSpeech: "副词" },
      { korean: "-지 않다", chinese: "不（否定）", partOfSpeech: "否定词尾" },
      { korean: "영화", chinese: "电影", partOfSpeech: "名词" },
      { korean: "보다", chinese: "看", partOfSpeech: "动词" },
      { korean: "알다", chinese: "知道", partOfSpeech: "动词" },
      { korean: "모르다", chinese: "不知道", partOfSpeech: "动词" },
      { korean: "할 수 있다", chinese: "能做", partOfSpeech: "动词" },
      { korean: "이해하다", chinese: "理解", partOfSpeech: "动词" },
      { korean: "기억하다", chinese: "记得", partOfSpeech: "动词" },
      { korean: "잊다", chinese: "忘", partOfSpeech: "动词" },
      { korean: "믿다", chinese: "相信", partOfSpeech: "动词" },
      { korean: "걱정하다", chinese: "担心", partOfSpeech: "动词" },
      { korean: "말하다", chinese: "说", partOfSpeech: "动词" },
      { korean: "듣다", chinese: "听", partOfSpeech: "动词" },
      { korean: "쓰다", chinese: "写", partOfSpeech: "动词" },
      { korean: "전화하다", chinese: "打电话", partOfSpeech: "动词" },
      { korean: "운동하다", chinese: "运动", partOfSpeech: "动词" },
      { korean: "일하다", chinese: "工作", partOfSpeech: "动词" },
      { korean: "피곤하다", chinese: "累", partOfSpeech: "形容词" },
      { korean: "바쁘다", chinese: "忙", partOfSpeech: "形容词" },
      { korean: "쉽다", chinese: "容易", partOfSpeech: "形容词" },
      { korean: "어렵다", chinese: "难", partOfSpeech: "形容词" },
      { korean: "가능하다", chinese: "可能", partOfSpeech: "形容词" },
      { korean: "불가능하다", chinese: "不可能", partOfSpeech: "形容词" },
      { korean: "잘", chinese: "好（副词）", partOfSpeech: "副词" },
      { korean: "자주", chinese: "经常", partOfSpeech: "副词" },
      { korean: "가끔", chinese: "有时", partOfSpeech: "副词" },
      { korean: "항상", chinese: "总是", partOfSpeech: "副词" },
      { korean: "전혀", chinese: "完全不", partOfSpeech: "副词" },
      { korean: "조금", chinese: "一点", partOfSpeech: "副词" },
      { korean: "많이", chinese: "很多", partOfSpeech: "副词" },
      { korean: "일찍", chinese: "早", partOfSpeech: "副词" },
      { korean: "늦게", chinese: "晚", partOfSpeech: "副词" },
      { korean: "빨리", chinese: "快", partOfSpeech: "副词" },
      { korean: "천천히", chinese: "慢慢", partOfSpeech: "副词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "안否定",
        nameEn: "안 Negation",
        structure: "안 + 动词/形容词",
        meaning: "主观上不愿意或选择不做。",
        usage: "안 먹어요（不吃）；안 가요（不去）。",
        examples: [
          { korean: "안 먹어요.", chinese: "不吃。（主观不想吃）" },
          { korean: "안 가요.", chinese: "不去。（主观不想去）" },
          { korean: "안 봐요.", chinese: "不看。（主观不想看）" },
        ],
        chineseTransfer: "类似中文的'不'，表示主观否定。",
      },
      {
        name: "못否定",
        nameEn: "못 Negation",
        structure: "못 + 动词",
        meaning: "客观上不能做或做不到。",
        usage: "못 먹어요（不能吃）；못 가요（不能去）。",
        examples: [
          { korean: "못 먹어요.", chinese: "不能吃。（客观原因）" },
          { korean: "못 가요.", chinese: "不能去。（客观原因）" },
          { korean: "못 봐요.", chinese: "不能看。（客观原因）" },
        ],
        chineseTransfer: "类似中文的'不能'，表示客观否定。",
      },
      {
        name: "-지 않아요否定",
        nameEn: "-지 않아요 Negation",
        structure: "动词/形容词词干 + 지 않아요",
        meaning: "更正式的否定形式，语气更委婉。",
        usage: "보다 → 보지 않아요（不看）；가다 → 가지 않아요（不去）。",
        examples: [
          { korean: "보지 않아요.", chinese: "不看。（正式）" },
          { korean: "가지 않아요.", chinese: "不去。（正式）" },
          { korean: "먹지 않아요.", chinese: "不吃。（正式）" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把안和못混用",
        correct: "안是主观否定，못是客观否定",
        reason: "两者意思不同，不能随意替换。",
      },
      {
        wrong: "在形容词前用못",
        correct: "못只能用于动词，形容词用안",
        reason: "못表示能力不足，形容词没有能力问题。",
      },
      {
        wrong: "把-지 않아요说成-지 않아요요",
        correct: "-지 않아요已经是敬语形式",
        reason: "不需要再加요。",
      },
    ],
    keyQuestions: [
      "안和못的区别是什么？",
      "什么时候用-지 않아요？",
      "形容词可以用못否定吗？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的否定形式。",
      instructionsEn: "Listen and choose the correct negation.",
      question: "听到的否定形式是？",
      options: ["안 먹어요", "못 먹어요", "먹지 않아요", "먹어요"],
      answer: "안 먹어요",
    },
    {
      type: "fill-in",
      instructions: "用안或못填空。",
      instructionsEn: "Fill in with 안 or 못.",
      sentences: [
        { sentence: "매운 음식을 ___ 먹어요.", answer: "안", hint: "主观不想吃" },
        { sentence: "한국어를 ___ 해요.", answer: "못", hint: "客观不会" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "영화를 안 봐요. 的意思是？",
      options: ["不看电影。（主观）", "不能看电影。（客观）", "看电影。", "想看电影。"],
      answer: "不看电影。（主观）",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "三种否定形式",
        items: [
          "안：主观否定（不想做）",
          "못：客观否定（不能做）",
          "-지 않아요：正式否定",
        ],
      },
      {
        title: "使用场景区别",
        items: [
          "안用于主观选择",
          "못用于能力不足",
          "-지 않아요更正式",
        ],
      },
    ],
    mindMap: `否定形式
├─ 안：主观否定
│  └─ 안 먹어요（不吃）
├─ 못：客观否定
│  └─ 못 먹어요（不能吃）
└─ -지 않아요：正式否定
   └─ 먹지 않아요（不吃）`,
    selfTest: [
      {
        question: "안和못的区别是什么？",
        options: ["没有区别", "안是主观，못是客观", "안是客观，못是主观", "안更正式"],
        answer: "안是主观，못是客观",
      },
      {
        question: "한국어를 ___ 해요. 应该填什么？",
        options: ["안", "못", "안和못都可以", "都不对"],
        answer: "못",
      },
      {
        question: "보지 않아요的意思是？",
        options: ["看", "不看", "不能看", "想看"],
        answer: "不看",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用否定表达造句",
    instructionsEn: "Create sentences using negation",
    targetGrammar: "안 + 动词, 动词 + 지 않다",
    prompts: ["说你不做什么", "说什么东西不是什么", "说你不喜欢什么"],
    sampleAnswers: ["커피를 안 마셔요.", "이것은 사과가 아니에요.", "매운 음식을 좋아하지 않아요."],
    keyWords: ["안", "아니에요", "않아요", "못"],
  },
};

import { KoreanLesson } from "./korean-types";

export const koreanLesson07Data: KoreanLesson = {
  info: {
    id: "lesson-07",
    moduleId: "02",
    number: 7,
    title: "이/그/저、人物与事物疑问词",
    titleEn: "이/그/저 & Question Words for People/Things",
  },
  objectives: [
    "掌握指示代词이/그/저的用法和区别",
    "掌握常用疑问词：무엇/뭐、누구、어디、언제",
    "能用疑问词进行简单提问",
  ],
  warmup: {
    questions: [
      "中文的'这'和'那'在韩语里有几个对应词？",
      "韩语的疑问词放在句子的什么位置？",
    ],
  },
  input: {
    dialogue: {
      title: "在教室",
      lines: [
        { speaker: "A", korean: "이것이 뭐예요?", chinese: "这是什么？" },
        { speaker: "B", korean: "이것은 책이에요.", chinese: "这是书。" },
        { speaker: "A", korean: "저것은 뭐예요?", chinese: "那是什么？" },
        { speaker: "B", korean: "저것은 가방이에요.", chinese: "那是包。" },
      ],
    },
    vocabulary: [
      { korean: "이것", chinese: "这个", partOfSpeech: "代词" },
      { korean: "그것", chinese: "那个（近听者）", partOfSpeech: "代词" },
      { korean: "저것", chinese: "那个（远双方）", partOfSpeech: "代词" },
      { korean: "무엇/뭐", chinese: "什么", partOfSpeech: "代词" },
      { korean: "누구", chinese: "谁", partOfSpeech: "代词" },
      { korean: "어디", chinese: "哪里", partOfSpeech: "代词" },
      { korean: "언제", chinese: "什么时候", partOfSpeech: "代词" },
      { korean: "이 사람", chinese: "这个人", partOfSpeech: "代词" },
      { korean: "그 사람", chinese: "那个人（近听者）", partOfSpeech: "代词" },
      { korean: "저 사람", chinese: "那个人（远双方）", partOfSpeech: "代词" },
      { korean: "이곳", chinese: "这里", partOfSpeech: "代词" },
      { korean: "그곳", chinese: "那里（近听者）", partOfSpeech: "代词" },
      { korean: "저곳", chinese: "那里（远双方）", partOfSpeech: "代词" },
      { korean: "책", chinese: "书", partOfSpeech: "名词" },
      { korean: "가방", chinese: "包", partOfSpeech: "名词" },
      { korean: "연필", chinese: "铅笔", partOfSpeech: "名词" },
      { korean: "볼펜", chinese: "圆珠笔", partOfSpeech: "名词" },
      { korean: "공책", chinese: "笔记本", partOfSpeech: "名词" },
      { korean: "지우개", chinese: "橡皮", partOfSpeech: "名词" },
      { korean: "컴퓨터", chinese: "电脑", partOfSpeech: "名词" },
      { korean: "휴대폰", chinese: "手机", partOfSpeech: "名词" },
      { korean: "시계", chinese: "手表/钟", partOfSpeech: "名词" },
      { korean: "우산", chinese: "雨伞", partOfSpeech: "名词" },
      { korean: "얼마예요", chinese: "多少钱", partOfSpeech: "代词" },
      { korean: "몇", chinese: "多少/几", partOfSpeech: "代词" },
      { korean: "어느", chinese: "哪个", partOfSpeech: "代词" },
      { korean: "왜", chinese: "为什么", partOfSpeech: "代词" },
      { korean: "어떻게", chinese: "怎么样/怎么", partOfSpeech: "代词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "指示代词이/그/저",
        nameEn: "Demonstratives 이/그/저",
        structure: "이/그/저 + 것/사람/곳",
        meaning: "이=近说话者，그=近听者，저=远双方。",
        usage: "이것=这个，그것=那个（近你），저것=那个（远你我）。",
        examples: [
          { korean: "이것은 책이에요.", chinese: "这是书。" },
          { korean: "그것은 연필이에요.", chinese: "那是铅笔。（近你）" },
          { korean: "저것은 가방이에요.", chinese: "那是包。（远你我）" },
        ],
        chineseTransfer: "类似中文的'这'和'那'，但韩语分三个距离层级。",
      },
      {
        name: "人物与事物疑问词",
        nameEn: "Question Words",
        structure: "무엇/뭐、누구、어디、언제",
        meaning: "무엇/뭐=什么，누구=谁，어디=哪里，언제=什么时候。",
        usage: "疑问词通常放在谓语位置，句子用陈述语序。",
        examples: [
          { korean: "이것이 뭐예요?", chinese: "这是什么？" },
          { korean: "누구예요?", chinese: "是谁？" },
          { korean: "어디예요?", chinese: "在哪里？" },
          { korean: "언제예요?", chinese: "什么时候？" },
        ],
        chineseTransfer: "中文疑问词在句首，韩语疑问词在谓语位置。",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把이/그/저混用",
        correct: "이=近我，그=近你，저=远你我",
        reason: "韩语的指示代词比中文更细致。",
      },
      {
        wrong: "把疑问词放在句首",
        correct: "韩语疑问词在谓语位置",
        reason: "韩语是SOV语言，疑问词不提前。",
      },
      {
        wrong: "把'뭐'和'무엇'混用",
        correct: "'뭐'是'무엇'的缩略形式，口语常用",
        reason: "正式场合用'무엇'，日常用'뭐'。",
      },
    ],
    keyQuestions: [
      "이/그/저的区别是什么？",
      "韩语疑问词的位置和中文有什么不同？",
      "뭐和무엇有什么区别？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的回答。",
      instructionsEn: "Listen and choose the correct response.",
      question: "听到'이것이 뭐예요?'，应该回答什么？",
      options: ["이것은 책이에요.", "이것이 뭐예요?", "네.", "아니에요."],
      answer: "이것은 책이에요.",
    },
    {
      type: "matching",
      instructions: "将疑问词与对应的意思配对。",
      instructionsEn: "Match question words to meanings.",
      pairs: [
        { left: "무엇/뭐", right: "什么" },
        { left: "누구", right: "谁" },
        { left: "어디", right: "哪里" },
        { left: "언제", right: "什么时候" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "저것은 가방이에요. 的意思是？",
      options: ["这是包。", "那是包。（近你）", "那是包。（远你我）", "包在哪里？"],
      answer: "那是包。（远你我）",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "指示代词",
        items: [
          "이=近说话者（이것=这个）",
          "그=近听者（그것=那个）",
          "저=远双方（저것=那个）",
        ],
      },
      {
        title: "疑问词",
        items: [
          "무엇/뭐=什么",
          "누구=谁",
          "어디=哪里",
          "언제=什么时候",
        ],
      },
    ],
    mindMap: `指示代词
├─ 이：近说话者 → 이것/이사람/이곳
├─ 그：近听者 → 그것/그사람/그곳
└─ 저：远双方 → 저것/저사람/저곳
疑问词
├─ 무엇/뭐：什么
├─ 누구：谁
├─ 어디：哪里
└─언제：什么时候`,
    selfTest: [
      {
        question: "이/그/저中，哪个指离说话者最近的事物？",
        options: ["이", "그", "저", "모두"],
        answer: "이",
      },
      {
        question: "韩语疑问词'谁'是？",
        options: ["무엇", "누구", "어디", "언제"],
        answer: "누구",
      },
      {
        question: "'이것이 뭐예요?'的正确回答是？",
        options: ["이것이 뭐예요?", "이것은 책이에요.", "네.", "아니에요."],
        answer: "이것은 책이에요.",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用指示代词造句",
    instructionsEn: "Create sentences using demonstratives",
    targetGrammar: "이/그/저 + 名词",
    prompts: ["介绍你身边的一样东西", "指远处的一样东西", "问一个问题"],
    sampleAnswers: ["이것은 책입니다.", "저것은 컴퓨터입니다.", "이게 뭐예요?"],
    keyWords: ["이것", "그것", "저것", "이", "그", "저"],
  },
};

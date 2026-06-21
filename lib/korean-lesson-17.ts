import { KoreanLesson } from "./korean-types";

export const koreanLesson17Data: KoreanLesson = {
  info: {
    id: "lesson-17",
    moduleId: "04",
    number: 17,
    title: "-(으)ㄹ 거예요未来与计划",
    titleEn: "-(으)ㄹ 거예요 Future & Plans",
  },
  objectives: [
    "掌握-(으)ㄹ 거예요未来时的变形规则",
    "能用未来时表达计划和打算",
    "理解未来时和现在时的区别",
  ],
  warmup: {
    questions: [
      "韩语未来时的变形规则是什么？",
      "怎么表达'打算做某事'？",
    ],
  },
  input: {
    dialogue: {
      title: "周末计划",
      lines: [
        { speaker: "A", korean: "이번 주말에 뭐 할 거예요?", chinese: "这个周末打算做什么？" },
        { speaker: "B", korean: "친구를 만날 거예요.", chinese: "打算见朋友。" },
        { speaker: "A", korean: "어디에서 만날 거예요?", chinese: "打算在哪里见面？" },
        { speaker: "B", korean: "카페에서 만날 거예요.", chinese: "打算在咖啡店见面。" },
      ],
    },
    vocabulary: [
      { korean: "이번", chinese: "这次", partOfSpeech: "冠词" },
      { korean: "할", chinese: "做的（修饰形）", partOfSpeech: "冠词形" },
      { korean: "만날", chinese: "见的（修饰形）", partOfSpeech: "冠词形" },
      { korean: "계획", chinese: "计划", partOfSpeech: "名词" },
      { korean: "내일", chinese: "明天", partOfSpeech: "副词" },
      { korean: "다음주", chinese: "下周", partOfSpeech: "名词" },
      { korean: "다음달", chinese: "下个月", partOfSpeech: "名词" },
      { korean: "내년", chinese: "明年", partOfSpeech: "名词" },
      { korean: "모레", chinese: "后天", partOfSpeech: "副词" },
      { korean: "이번 주말", chinese: "这个周末", partOfSpeech: "名词" },
      { korean: "여행하다", chinese: "旅行", partOfSpeech: "动词" },
      { korean: "출장", chinese: "出差", partOfSpeech: "名词" },
      { korean: "취직하다", chinese: "就业", partOfSpeech: "动词" },
      { korean: "졸업하다", chinese: "毕业", partOfSpeech: "动词" },
      { korean: "준비하다", chinese: "准备", partOfSpeech: "动词" },
      { korean: "결혼하다", chinese: "结婚", partOfSpeech: "动词" },
      { korean: "이사하다", chinese: "搬家", partOfSpeech: "动词" },
      { korean: "시험", chinese: "考试", partOfSpeech: "名词" },
      { korean: "회사", chinese: "公司", partOfSpeech: "名词" },
      { korean: "대학교", chinese: "大学", partOfSpeech: "名词" },
      { korean: "날씨", chinese: "天气", partOfSpeech: "名词" },
      { korean: "비", chinese: "雨", partOfSpeech: "名词" },
      { korean: "눈", chinese: "雪", partOfSpeech: "名词" },
      { korean: "바람", chinese: "风", partOfSpeech: "名词" },
      { korean: "맑다", chinese: "晴朗", partOfSpeech: "形容词" },
      { korean: "흐리다", chinese: "阴天", partOfSpeech: "形容词" },
      { korean: "덥다", chinese: "热", partOfSpeech: "形容词" },
      { korean: "춥다", chinese: "冷", partOfSpeech: "形容词" },
      { korean: "따뜻하다", chinese: "温暖", partOfSpeech: "形容词" },
      { korean: "시원하다", chinese: "凉爽", partOfSpeech: "形容词" },
      { korean: "비행기", chinese: "飞机", partOfSpeech: "名词" },
      { korean: "호텔", chinese: "酒店", partOfSpeech: "名词" },
      { korean: "공항", chinese: "机场", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-(으)ㄹ 거예요未来时",
        nameEn: "-(으)ㄹ 거예요 Future Tense",
        structure: "动词词干 + (으)ㄹ 거예요",
        meaning: "表示未来的动作或计划。",
        usage: "收音后+을 거예요，元音后+ㄹ 거예요。",
        examples: [
          { korean: "가다 → 갈 거예요", chinese: "打算去" },
          { korean: "오다 → 올 거예요", chinese: "打算来" },
          { korean: "먹다 → 먹을 거예요", chinese: "打算吃" },
          { korean: "마시다 → 마실 거예요", chinese: "打算喝" },
        ],
        chineseTransfer: "类似中文的'打算做'，但韩语是动词变形。",
      },
      {
        name: "未来时时间词",
        nameEn: "Future Time Words",
        structure: "내일/다음주/다음달/내년",
        meaning: "내일=明天，다음주=下周，다음달=下个月，내년=明年。",
        usage: "和未来时一起使用。",
        examples: [
          { korean: "내일 영화를 볼 거예요.", chinese: "明天打算看电影。" },
          { korean: "다음주에 친구를 만날 거예요.", chinese: "下周打算见朋友。" },
          { korean: "내년에 한국에 갈 거예요.", chinese: "明年打算去韩国。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "收音后用ㄹ 거예요",
        correct: "收音后用을 거예요",
        reason: "这是语音规律，为了发音顺畅。",
      },
      {
        wrong: "把-(으)ㄹ 거예요说成-(으)ㄹ 거에요",
        correct: "거예요是正确形式",
        reason: "거예요是固定搭配，不能拆开。",
      },
      {
        wrong: "未来时和现在时混用",
        correct: "未来时用于计划和打算，现在时用于现在的动作",
        reason: "时态要和时间词一致。",
      },
    ],
    keyQuestions: [
      "-(으)ㄹ 거예요的变形规则是什么？",
      "未来时常用的时间词有哪些？",
      "怎么表达'打算做某事'？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的未来时变形。",
      instructionsEn: "Listen and choose the correct future tense.",
      question: "听到的未来时变形是？",
      options: ["갈 거예요", "갈 거에요", "갈 거이에요", "갈 거요"],
      answer: "갈 거예요",
    },
    {
      type: "fill-in",
      instructions: "用-(으)ㄹ 거예요变形下列动词。",
      instructionsEn: "Conjugate the verbs with -(으)ㄹ 거예요.",
      sentences: [
        { sentence: "먹다 → ___", answer: "먹을 거예요", hint: "먹有收音" },
        { sentence: "가다 → ___", answer: "갈 거예요", hint: "가无收音" },
        { sentence: "마시다 → ___", answer: "마실 거예요", hint: "시无收音" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "내일 영화를 볼 거예요. 的意思是？",
      options: ["昨天看了电影。", "今天看电影。", "明天打算看电影。", "想看电影。"],
      answer: "明天打算看电影。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-(으)ㄹ 거예요变形规则",
        items: [
          "收音后 + 을 거예요",
          "元音后 + ㄹ 거예요",
          "表示未来的动作或计划",
        ],
      },
      {
        title: "未来时应用",
        items: [
          "用于计划和打算",
          "和未来时间词一起使用",
          "내일/다음주/다음달/내년",
        ],
      },
    ],
    mindMap: `未来时
├─ 变形规则
│  ├─ 收音后 + 을 거예요
│  └─ 元音后 + ㄹ 거예요
└─ 时间词
   ├─ 내일：明天
   ├─ 다음주：下周
   ├─ 다음달：下个月
   └─ 내년：明年`,
    selfTest: [
      {
        question: "먹다的未来时是？",
        options: ["먹아요", "먹을 거예요", "먹었어요", "먹어요"],
        answer: "먹을 거예요",
      },
      {
        question: "내일的意思是？",
        options: ["今天", "昨天", "明天", "后天"],
        answer: "明天",
      },
      {
        question: "-(으)ㄹ 거예요表示什么时态？",
        options: ["过去", "现在", "未来", "不确定"],
        answer: "未来",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用将来时和计划表达造句",
    instructionsEn: "Create sentences about future plans",
    targetGrammar: "-(으)ㄹ 거예요, -(으)려고 하다",
    prompts: ["说你明天打算做什么", "说你假期计划做什么", "说你将来想做什么"],
    sampleAnswers: ["내일 친구를 만날 거예요.", "방학에 여행을 갈 거예요.", "나중에 선생님이 되려고 해요."],
    keyWords: ["거예요", "려고", "계획", "打算"],
  },
};

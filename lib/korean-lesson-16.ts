import { KoreanLesson } from "./korean-types";

export const koreanLesson16Data: KoreanLesson = {
  info: {
    id: "lesson-16",
    moduleId: "04",
    number: 16,
    title: "-았/었어요过去时",
    titleEn: "-았/었어요 Past Tense",
  },
  objectives: [
    "掌握-았/었어요过去时的变形规则",
    "能用过去时描述过去的动作和状态",
    "理解过去时和现在时的区别",
  ],
  warmup: {
    questions: [
      "韩语过去时的变形规则是什么？",
      "过去时和现在时有什么区别？",
    ],
  },
  input: {
    dialogue: {
      title: "昨天做了什么",
      lines: [
        { speaker: "A", korean: "어제 뭐 했어요?", chinese: "昨天做了什么？" },
        { speaker: "B", korean: "친구를 만났어요.", chinese: "见了朋友。" },
        { speaker: "A", korean: "어디에서 만났어요?", chinese: "在哪里见面的？" },
        { speaker: "B", korean: "카페에서 만났어요.", chinese: "在咖啡店见面的。" },
      ],
    },
    vocabulary: [
      { korean: "어제", chinese: "昨天", partOfSpeech: "副词" },
      { korean: "만나다", chinese: "见面", partOfSpeech: "动词" },
      { korean: "먹다", chinese: "吃", partOfSpeech: "动词" },
      { korean: "가다", chinese: "去", partOfSpeech: "动词" },
      { korean: "보다", chinese: "看", partOfSpeech: "动词" },
      { korean: "마시다", chinese: "喝", partOfSpeech: "动词" },
      { korean: "읽다", chinese: "读", partOfSpeech: "动词" },
      { korean: "쓰다", chinese: "写", partOfSpeech: "动词" },
      { korean: "듣다", chinese: "听", partOfSpeech: "动词" },
      { korean: "자다", chinese: "睡觉", partOfSpeech: "动词" },
      { korean: "일어나다", chinese: "起床", partOfSpeech: "动词" },
      { korean: "운동하다", chinese: "运动", partOfSpeech: "动词" },
      { korean: "공부하다", chinese: "学习", partOfSpeech: "动词" },
      { korean: "쇼핑하다", chinese: "购物", partOfSpeech: "动词" },
      { korean: "요리하다", chinese: "做饭", partOfSpeech: "动词" },
      { korean: "전화하다", chinese: "打电话", partOfSpeech: "动词" },
      { korean: "선물하다", chinese: "送礼物", partOfSpeech: "动词" },
      { korean: "그저께", chinese: "前天", partOfSpeech: "副词" },
      { korean: "작년", chinese: "去年", partOfSpeech: "名词" },
      { korean: "지난주", chinese: "上周", partOfSpeech: "名词" },
      { korean: "지난달", chinese: "上个月", partOfSpeech: "名词" },
      { korean: "아침", chinese: "早上", partOfSpeech: "名词" },
      { korean: "점심", chinese: "中午", partOfSpeech: "名词" },
      { korean: "저녁", chinese: "晚上", partOfSpeech: "名词" },
      { korean: "영화", chinese: "电影", partOfSpeech: "名词" },
      { korean: "카페", chinese: "咖啡店", partOfSpeech: "名词" },
      { korean: "식당", chinese: "餐厅", partOfSpeech: "名词" },
      { korean: "도서관", chinese: "图书馆", partOfSpeech: "名词" },
      { korean: "공원", chinese: "公园", partOfSpeech: "名词" },
      { korean: "빵", chinese: "面包", partOfSpeech: "名词" },
      { korean: "커피", chinese: "咖啡", partOfSpeech: "名词" },
      { korean: "과일", chinese: "水果", partOfSpeech: "名词" },
      { korean: "선생님", chinese: "老师", partOfSpeech: "名词" },
      { korean: "친구", chinese: "朋友", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-았/었어요过去时",
        nameEn: "-았/었어요 Past Tense",
        structure: "动词词干 + 았/었어요",
        meaning: "表示过去的动作或状态。",
        usage: "ㅏ/ㅗ词干+았어요，其他+었어요；하다→했어요。",
        examples: [
          { korean: "가다 → 갔어요", chinese: "去了" },
          { korean: "오다 → 왔어요", chinese: "来了" },
          { korean: "먹다 → 먹었어요", chinese: "吃了" },
          { korean: "마시다 → 마셨어요", chinese: "喝了" },
          { korean: "하다 → 했어요", chinese: "做了" },
        ],
        chineseTransfer: "类似中文的'了'，但韩语的过去时是动词变形。",
      },
      {
        name: "过去时时间词",
        nameEn: "Past Time Words",
        structure: "어제/그저께/작년/지난주",
        meaning: "어제=昨天，그저께=前天，작년=去年，지난주=上周。",
        usage: "和过去时一起使用。",
        examples: [
          { korean: "어제 영화를 봤어요.", chinese: "昨天看了电影。" },
          { korean: "그저께 친구를 만났어요.", chinese: "前天见了朋友。" },
          { korean: "작년에 한국에 갔어요.", chinese: "去年去了韩国。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "ㅏ/ㅗ词干后用었어요",
        correct: "ㅏ/ㅗ词干后用았어요",
        reason: "这是语音规律，为了发音顺畅。",
      },
      {
        wrong: "하다说成하았어요",
        correct: "하다的过去时是했어요",
        reason: "하다是特殊变形，必须记住。",
      },
      {
        wrong: "过去时和现在时混用",
        correct: "过去时用于过去的动作，现在时用于现在的动作",
        reason: "时态要和时间词一致。",
      },
    ],
    keyQuestions: [
      "-았/었어요的变形规则是什么？",
      "하다的过去时是什么？",
      "过去时常用的时间词有哪些？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的过去时变形。",
      instructionsEn: "Listen and choose the correct past tense.",
      question: "听到的过去时变形是？",
      options: ["갔어요", "가았어요", "가었어요", "가요"],
      answer: "갔어요",
    },
    {
      type: "fill-in",
      instructions: "用-았/었어요变形下列动词。",
      instructionsEn: "Conjugate the verbs with -았/었어요.",
      sentences: [
        { sentence: "먹다 → ___", answer: "먹었어요", hint: "먹不是ㅏ/ㅗ" },
        { sentence: "가다 → ___", answer: "갔어요", hint: "가是ㅏ词干" },
        { sentence: "하다 → ___", answer: "했어요", hint: "特殊变形" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "어제 친구를 만났어요. 的意思是？",
      options: ["今天见了朋友。", "昨天见了朋友。", "明天见朋友。", "想见朋友。"],
      answer: "昨天见了朋友。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-았/었어요变形规则",
        items: [
          "ㅏ/ㅗ词干 + 았어요",
          "其他词干 + 었어요",
          "하다 → 했어요（特殊）",
        ],
      },
      {
        title: "过去时应用",
        items: [
          "用于过去的动作或状态",
          "和过去时间词一起使用",
          "어제/그저께/작년/지난주",
        ],
      },
    ],
    mindMap: `过去时
├─ 变形规则
│  ├─ ㅏ/ㅗ + 았어요
│  ├─ 其他 + 었어요
│  └─ 하다 → 했어요
└─ 时间词
   ├─ 어제：昨天
   ├─ 그저께：前天
   ├─ 작년：去年
   └─ 지난주：上周`,
    selfTest: [
      {
        question: "먹다的过去时是？",
        options: ["먹아요", "먹었어요", "먹이요", "먹에요"],
        answer: "먹었어요",
      },
      {
        question: "어제的意思是？",
        options: ["今天", "昨天", "明天", "后天"],
        answer: "昨天",
      },
      {
        question: "하다的过去时是？",
        options: ["하아요", "하여요", "했어요", "하에요"],
        answer: "했어요",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用过去时造句",
    instructionsEn: "Create sentences using past tense",
    targetGrammar: "았/었어요",
    prompts: ["说你昨天做了什么", "说你上周末做了什么", "说你小时候喜欢做什么"],
    sampleAnswers: ["어제 영화를 봤어요.", "지난주말에 친구를 만났어요.", "어릴 때 축구를 좋아했어요."],
    keyWords: ["봤어요", "먹었어요", "갔어요", "했어요", "였어요"],
  },
};

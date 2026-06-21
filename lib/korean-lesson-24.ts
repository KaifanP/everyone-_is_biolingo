import { KoreanLesson } from "./korean-types";

export const koreanLesson24Data: KoreanLesson = {
  info: {
    id: "lesson-24",
    moduleId: "05",
    number: 24,
    title: "보다/더/제일、天气、服饰和比较",
    titleEn: "보다/더/제일, Weather, Clothing & Comparison",
  },
  objectives: [
    "掌握比较级和最高级的表达",
    "掌握天气和服饰相关词汇",
    "能进行简单的比较描述",
  ],
  warmup: {
    questions: [
      "韩语怎么表达'比……更……'？",
      "韩语怎么表达'最……'？",
    ],
  },
  input: {
    dialogue: {
      title: "天气和穿着",
      lines: [
        { speaker: "A", korean: "오늘 날씨가 어때요?", chinese: "今天天气怎么样？" },
        { speaker: "B", korean: "어제보다 더워요.", chinese: "比昨天热。" },
        { speaker: "A", korean: "그러면 뭘 입을 거예요?", chinese: "那打算穿什么？" },
        { speaker: "B", korean: "반바지를 입을 거예요.", chinese: "打算穿短裤。" },
      ],
    },
    vocabulary: [
      { korean: "날씨", chinese: "天气", partOfSpeech: "名词" },
      { korean: "덥다", chinese: "热", partOfSpeech: "形容词" },
      { korean: "춥다", chinese: "冷", partOfSpeech: "形容词" },
      { korean: "입다", chinese: "穿", partOfSpeech: "动词" },
      { korean: "반바지", chinese: "短裤", partOfSpeech: "名词" },
      { korean: "더", chinese: "更", partOfSpeech: "副词" },
      { korean: "제일", chinese: "最", partOfSpeech: "副词" },
      { korean: "비", chinese: "雨", partOfSpeech: "名词" },
      { korean: "눈", chinese: "雪", partOfSpeech: "名词" },
      { korean: "바람", chinese: "风", partOfSpeech: "名词" },
      { korean: "구름", chinese: "云", partOfSpeech: "名词" },
      { korean: "맑다", chinese: "晴朗", partOfSpeech: "形容词" },
      { korean: "흐리다", chinese: "阴天", partOfSpeech: "形容词" },
      { korean: "따뜻하다", chinese: "温暖", partOfSpeech: "形容词" },
      { korean: "시원하다", chinese: "凉爽", partOfSpeech: "形容词" },
      { korean: "쌀쌀하다", chinese: "凉飕飕", partOfSpeech: "形容词" },
      { korean: "봄", chinese: "春天", partOfSpeech: "名词" },
      { korean: "여름", chinese: "夏天", partOfSpeech: "名词" },
      { korean: "가을", chinese: "秋天", partOfSpeech: "名词" },
      { korean: "겨울", chinese: "冬天", partOfSpeech: "名词" },
      { korean: "옷", chinese: "衣服", partOfSpeech: "名词" },
      { korean: "바지", chinese: "裤子", partOfSpeech: "名词" },
      { korean: "치마", chinese: "裙子", partOfSpeech: "名词" },
      { korean: "셔츠", chinese: "衬衫", partOfSpeech: "名词" },
      { korean: "코트", chinese: "外套", partOfSpeech: "名词" },
      { korean: "자켓", chinese: "夹克", partOfSpeech: "名词" },
      { korean: "신발", chinese: "鞋子", partOfSpeech: "名词" },
      { korean: "모자", chinese: "帽子", partOfSpeech: "名词" },
      { korean: "목도리", chinese: "围巾", partOfSpeech: "名词" },
      { korean: "장갑", chinese: "手套", partOfSpeech: "名词" },
      { korean: "우산", chinese: "雨伞", partOfSpeech: "名词" },
      { korean: "선글라스", chinese: "太阳镜", partOfSpeech: "名词" },
      { korean: "무겁다", chinese: "重", partOfSpeech: "形容词" },
      { korean: "가볍다", chinese: "轻", partOfSpeech: "形容词" },
      { korean: "길다", chinese: "长", partOfSpeech: "形容词" },
      { korean: "짧다", chinese: "短", partOfSpeech: "形容词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "比较级-보다",
        nameEn: "Comparison with -보다",
        structure: "名词 + 보다 + 形容词",
        meaning: "表示'比……更……'。",
        usage: "用于两者之间的比较。",
        examples: [
          { korean: "어제보다 더워요.", chinese: "比昨天热。" },
          { korean: "이것이 저것보다 좋아요.", chinese: "这个比那个好。" },
          { korean: "한국이 중국보다 작아요.", chinese: "韩国比中国小。" },
        ],
        chineseTransfer: "类似中文的'比……更……'，但韩语把'比'放在名词后。",
      },
      {
        name: "最高级-제일",
        nameEn: "Superlative with 제일",
        structure: "제일 + 形容词",
        meaning: "表示'最……'。",
        usage: "用于三者以上的比较。",
        examples: [
          { korean: "이것이 제일 좋아요.", chinese: "这个最好。" },
          { korean: "오늘이 제일 더워요.", chinese: "今天最热。" },
          { korean: "이것이 제일 비싸요.", chinese: "这个最贵。" },
        ],
      },
      {
        name: "天气表达",
        nameEn: "Weather Expressions",
        structure: "날씨가 + 形容词",
        meaning: "描述天气状况。",
        usage: "常用形容词：덥다/춥다/좋다/나쁘다。",
        examples: [
          { korean: "날씨가 좋아요.", chinese: "天气好。" },
          { korean: "날씨가 나빠요.", chinese: "天气不好。" },
          { korean: "비가 와요.", chinese: "下雨。" },
          { korean: "눈이 와요.", chinese: "下雪。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-보다放在形容词后",
        correct: "-보다放在名词后",
        reason: "-보다是比较助词，放在名词后。",
      },
      {
        wrong: "把제일放在形容词后",
        correct: "제일放在形容词前",
        reason: "제일是副词，放在形容词前。",
      },
    ],
    keyQuestions: [
      "-보다的用法是什么？",
      "제일的用法是什么？",
      "怎么描述天气？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的比较表达。",
      instructionsEn: "Listen and choose the correct comparison.",
      question: "听到的比较表达是？",
      options: ["더워요", "더 더워요", "제일 더워요", "더웠어요"],
      answer: "더 더워요",
    },
    {
      type: "fill-in",
      instructions: "用-보다或제일填空。",
      instructionsEn: "Fill in with -보다 or 제일.",
      sentences: [
        { sentence: "어제___ 더워요.", answer: "보다", hint: "比昨天热" },
        { sentence: "이것이___ 좋아요.", answer: "제일", hint: "这个最好" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "어제보다 더워요. 的意思是？",
      options: ["昨天很热。", "比昨天热。", "今天最热。", "明天会热。"],
      answer: "比昨天热。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "比较级和最高级",
        items: [
          "-보다：比……更……",
          "제일：最……",
          "用于两者或三者以上的比较",
        ],
      },
      {
        title: "天气和服饰",
        items: [
          "날씨가 좋아요/나빠요",
          "비/눈이 와요",
          "옷을 입다：穿衣服",
        ],
      },
    ],
    mindMap: `比较与天气
├─ 比较级
│  ├─ -보다：比……更……
│  └─ 어제보다 더워요
├─ 最高级
│  ├─ 제일：最……
│  └─ 제일 좋아요
└─ 天气
   ├─ 날씨가 좋아요
   ├─ 비가 와요
   └─ 눈이 와요`,
    selfTest: [
      {
        question: "-보다放在什么位置？",
        options: ["形容词前", "名词后", "动词前", "句尾"],
        answer: "名词后",
      },
      {
        question: "이것이 제일 좋아요的意思是？",
        options: ["这个好。", "这个更好。", "这个最好。", "这个不好。"],
        answer: "这个最好。",
      },
      {
        question: "비가 와요的意思是？",
        options: ["下雨。", "下雪。", "天气好。", "天气不好。"],
        answer: "下雨。",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用比较和天气表达造句",
    instructionsEn: "Create sentences about comparison and weather",
    targetGrammar: "보다, 더/덜, 날씨가 ...다",
    prompts: ["比较两样东西", "说天气怎么样", "说你喜欢什么更多"],
    sampleAnswers: ["사과가 바나나보다 맛있어요.", "오늘 날씨가 추워요.", "여름보다 겨울을 더 좋아해요."],
    keyWords: ["보다", "더", "덜", "날씨"],
  },
};

import { KoreanLesson } from "./korean-types";

export const koreanLesson18Data: KoreanLesson = {
  info: {
    id: "lesson-18",
    moduleId: "04",
    number: 18,
    title: "-고 싶어요愿望",
    titleEn: "-고 싶어요 (want to)",
  },
  objectives: [
    "掌握-고 싶어요的用法",
    "能用-고 싶어요表达愿望和想要做的事",
    "理解-고 싶어요和-(으)ㄹ 거예요的区别",
  ],
  warmup: {
    questions: [
      "怎么用韩语表达'想做某事'？",
      "-고 싶어요和-(으)ㄹ 거예요有什么区别？",
    ],
  },
  input: {
    dialogue: {
      title: "愿望",
      lines: [
        { speaker: "A", korean: "뭐 하고 싶어요?", chinese: "想做什么？" },
        { speaker: "B", korean: "한국에 가고 싶어요.", chinese: "想去韩国。" },
        { speaker: "A", korean: "왜요?", chinese: "为什么？" },
        { speaker: "B", korean: "한국 음식을 먹고 싶어요.", chinese: "想吃韩国食物。" },
      ],
    },
    vocabulary: [
      { korean: "싶다", chinese: "想", partOfSpeech: "形容词" },
      { korean: "한국", chinese: "韩国", partOfSpeech: "名词" },
      { korean: "음식", chinese: "食物", partOfSpeech: "名词" },
      { korean: "여행", chinese: "旅行", partOfSpeech: "名词" },
      { korean: "배우다", chinese: "学", partOfSpeech: "动词" },
      { korean: "만들다", chinese: "做/制作", partOfSpeech: "动词" },
      { korean: "사다", chinese: "买", partOfSpeech: "动词" },
      { korean: "팔다", chinese: "卖", partOfSpeech: "动词" },
      { korean: "노래하다", chinese: "唱歌", partOfSpeech: "动词" },
      { korean: "춤추다", chinese: "跳舞", partOfSpeech: "动词" },
      { korean: "그림 그리다", chinese: "画画", partOfSpeech: "动词" },
      { korean: "사진 찍다", chinese: "拍照", partOfSpeech: "动词" },
      { korean: "등산하다", chinese: "登山", partOfSpeech: "动词" },
      { korean: "수영하다", chinese: "游泳", partOfSpeech: "动词" },
      { korean: "자전거 타다", chinese: "骑自行车", partOfSpeech: "动词" },
      { korean: "피아노 치다", chinese: "弹钢琴", partOfSpeech: "动词" },
      { korean: "요리", chinese: "料理/烹饪", partOfSpeech: "名词" },
      { korean: "미국", chinese: "美国", partOfSpeech: "名词" },
      { korean: "일본", chinese: "日本", partOfSpeech: "名词" },
      { korean: "중국", chinese: "中国", partOfSpeech: "名词" },
      { korean: "유럽", chinese: "欧洲", partOfSpeech: "名词" },
      { korean: "바다", chinese: "大海", partOfSpeech: "名词" },
      { korean: "산", chinese: "山", partOfSpeech: "名词" },
      { korean: "박물관", chinese: "博物馆", partOfSpeech: "名词" },
      { korean: "음악", chinese: "音乐", partOfSpeech: "名词" },
      { korean: "스포츠", chinese: "运动/体育", partOfSpeech: "名词" },
      { korean: "게임", chinese: "游戏", partOfSpeech: "名词" },
      { korean: "책", chinese: "书", partOfSpeech: "名词" },
      { korean: "라면", chinese: "拉面", partOfSpeech: "名词" },
      { korean: "피자", chinese: "披萨", partOfSpeech: "名词" },
      { korean: "치킨", chinese: "炸鸡", partOfSpeech: "名词" },
      { korean: "아이스크림", chinese: "冰淇淋", partOfSpeech: "名词" },
      { korean: "좋아하다", chinese: "喜欢", partOfSpeech: "动词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-고 싶어요",
        nameEn: "-고 싶어요 (want to)",
        structure: "动词词干 + 고 싶어요",
        meaning: "表示'想做某事'。",
        usage: "表达愿望和想要做的事。",
        examples: [
          { korean: "한국에 가고 싶어요.", chinese: "想去韩国。" },
          { korean: "한국 음식을 먹고 싶어요.", chinese: "想吃韩国食物。" },
          { korean: "한국어를 배우고 싶어요.", chinese: "想学韩语。" },
        ],
        chineseTransfer: "类似中文的'想做'，但韩语是动词变形。",
      },
      {
        name: "-고 싶어요的否定",
        nameEn: "Negation of -고 싶어요",
        structure: "안 + 动词 + 고 싶어요",
        meaning: "表示'不想做某事'。",
        usage: "否定形式用안。",
        examples: [
          { korean: "한국에 안 가고 싶어요.", chinese: "不想去韩国。" },
          { korean: "한국 음식을 안 먹고 싶어요.", chinese: "不想吃韩国食物。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-고 싶어요说成-고 싶다",
        correct: "-고 싶어요是敬语形式",
        reason: "日常对话用-고 싶어요，不用-고 싶다。",
      },
      {
        wrong: "把-고 싶어요和-(으)ㄹ 거예요混用",
        correct: "-고 싶어요是愿望，-(으)ㄹ 거예요是计划",
        reason: "两者意思不同，不能随意替换。",
      },
    ],
    keyQuestions: [
      "-고 싶어요的用法是什么？",
      "-고 싶어요和-(으)ㄹ 거예요的区别是什么？",
      "-고 싶어요的否定形式是什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的愿望表达。",
      instructionsEn: "Listen and choose the correct expression of desire.",
      question: "听到的愿望表达是？",
      options: ["가고 싶어요", "갈 거예요", "갔어요", "가요"],
      answer: "가고 싶어요",
    },
    {
      type: "fill-in",
      instructions: "用-고 싶어요表达愿望。",
      instructionsEn: "Express desires with -고 싶어요.",
      sentences: [
        { sentence: "한국에 ___", answer: "가고 싶어요", hint: "想去韩国" },
        { sentence: "한국 음식을 ___", answer: "먹고 싶어요", hint: "想吃韩国食物" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "한국에 가고 싶어요. 的意思是？",
      options: ["去了韩国。", "想去韩国。", "打算去韩国。", "不能去韩国。"],
      answer: "想去韩国。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-고 싶어요用法",
        items: [
          "动词词干 + 고 싶어요",
          "表示'想做某事'",
          "表达愿望和想要做的事",
        ],
      },
      {
        title: "愿望表达",
        items: [
          "肯定：가고 싶어요（想去）",
          "否定：안 가고 싶어요（不想去）",
          "和-(으)ㄹ 거예요区别",
        ],
      },
    ],
    mindMap: `愿望表达
├─ -고 싶어요
│  ├─ 动词词干 + 고 싶어요
│  └─ 表示'想做某事'
├─ 否定形式
│  └─ 안 + 动词 + 고 싶어요
└─ 与时态区别
   ├─ -고 싶어요：愿望
   └─ -(으)ㄹ 거예요：计划`,
    selfTest: [
      {
        question: "-고 싶어요表示什么？",
        options: ["过去", "现在", "愿望", "计划"],
        answer: "愿望",
      },
      {
        question: "한국에 가고 싶어요的意思是？",
        options: ["去了韩国", "想去韩国", "打算去韩国", "不能去韩国"],
        answer: "想去韩国",
      },
      {
        question: "-고 싶어요的否定形式是？",
        options: ["안 가고 싶어요", "못 가고 싶어요", "가고 싶지 않아요", "안 가고 싶어요都可以"],
        answer: "안 가고 싶어요",
      },
    ],
  },
};

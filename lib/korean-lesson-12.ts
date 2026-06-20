import { KoreanLesson } from "./korean-types";

export const koreanLesson12Data: KoreanLesson = {
  info: {
    id: "lesson-12",
    moduleId: "03",
    number: 12,
    title: "-아요/어요现在礼貌体、을/를",
    titleEn: "-아요/어요 Present Polite & 을/를 Object Particles",
  },
  objectives: [
    "掌握-아요/어요现在礼貌体的变形规则",
    "掌握宾格助词을/를的用法",
    "能用-아요/어요表达现在的动作和状态",
  ],
  warmup: {
    questions: [
      "韩语动词有几种时态变化？",
      "-아요/어요的变形规则是什么？",
    ],
  },
  input: {
    dialogue: {
      title: "日常生活",
      lines: [
        { speaker: "A", korean: "매일 뭐 해요?", chinese: "每天做什么？" },
        { speaker: "B", korean: "아침에 커피를 마셔요.", chinese: "早上喝咖啡。" },
        { speaker: "A", korean: "저녁에 뭐 해요?", chinese: "晚上做什么？" },
        { speaker: "B", korean: "책을 읽어요.", chinese: "看书。" },
      ],
    },
    vocabulary: [
      { korean: "하다", chinese: "做", partOfSpeech: "动词" },
      { korean: "마시다", chinese: "喝", partOfSpeech: "动词" },
      { korean: "읽다", chinese: "读", partOfSpeech: "动词" },
      { korean: "먹다", chinese: "吃", partOfSpeech: "动词" },
      { korean: "가다", chinese: "去", partOfSpeech: "动词" },
      { korean: "오다", chinese: "来", partOfSpeech: "动词" },
      { korean: "쓰다", chinese: "写", partOfSpeech: "动词" },
      { korean: "걷다", chinese: "走", partOfSpeech: "动词" },
      { korean: "앉다", chinese: "坐", partOfSpeech: "动词" },
      { korean: "서다", chinese: "站", partOfSpeech: "动词" },
      { korean: "자다", chinese: "睡觉", partOfSpeech: "动词" },
      { korean: "일어나다", chinese: "起床", partOfSpeech: "动词" },
      { korean: "입다", chinese: "穿", partOfSpeech: "动词" },
      { korean: "벗다", chinese: "脱", partOfSpeech: "动词" },
      { korean: "사다", chinese: "买", partOfSpeech: "动词" },
      { korean: "팔다", chinese: "卖", partOfSpeech: "动词" },
      { korean: "열다", chinese: "开", partOfSpeech: "动词" },
      { korean: "닫다", chinese: "关", partOfSpeech: "动词" },
      { korean: "주다", chinese: "给", partOfSpeech: "动词" },
      { korean: "받다", chinese: "收", partOfSpeech: "动词" },
      { korean: "배우다", chinese: "学", partOfSpeech: "动词" },
      { korean: "가르치다", chinese: "教", partOfSpeech: "动词" },
      { korean: "요리하다", chinese: "做菜", partOfSpeech: "动词" },
      { korean: "청소하다", chinese: "打扫", partOfSpeech: "动词" },
      { korean: "운동하다", chinese: "运动", partOfSpeech: "动词" },
      { korean: "노래하다", chinese: "唱歌", partOfSpeech: "动词" },
      { korean: "춤추다", chinese: "跳舞", partOfSpeech: "动词" },
      { korean: "좋다", chinese: "好", partOfSpeech: "形容词" },
      { korean: "나쁘다", chinese: "坏", partOfSpeech: "形容词" },
      { korean: "크다", chinese: "大", partOfSpeech: "形容词" },
      { korean: "작다", chinese: "小", partOfSpeech: "形容词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-아요/어요现在礼貌体",
        nameEn: "-아요/어요 Present Polite",
        structure: "动词词干 + 아요/어요",
        meaning: "表示现在的动作或状态，敬语形式。",
        usage: "ㅏ/ㅗ词干+아요，其他+어요；하다→해요。",
        examples: [
          { korean: "가다 → 가요", chinese: "去" },
          { korean: "오다 → 와요", chinese: "来" },
          { korean: "먹다 → 먹어요", chinese: "吃" },
          { korean: "마시다 → 마셔요", chinese: "喝" },
          { korean: "하다 → 해요", chinese: "做" },
        ],
        chineseTransfer: "类似中文的'正在做'，但韩语不需要'正在'这个词。",
      },
      {
        name: "宾格助词을/를",
        nameEn: "Object Particle 을/를",
        structure: "名词 + 을/를",
        meaning: "标示动词的宾语，收音后用을，元音后用를。",
        usage: "밥을 먹어요（吃饭）；물을 마셔요（喝水）。",
        examples: [
          { korean: "밥을 먹어요.", chinese: "吃饭。" },
          { korean: "물을 마셔요.", chinese: "喝水。" },
          { korean: "책을 읽어요.", chinese: "看书。" },
          { korean: "음악을 들어요.", chinese: "听音乐。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "ㅏ/ㅗ词干后用어요",
        correct: "ㅏ/ㅗ词干后用아요",
        reason: "这是语音规律，为了发音顺畅。",
      },
      {
        wrong: "하다说成하아요",
        correct: "하다的变形是해요",
        reason: "하다是特殊变形，必须记住。",
      },
      {
        wrong: "收音后用를",
        correct: "收音后用을，元音后用를",
        reason: "这是助词选择的基本规则。",
      },
    ],
    keyQuestions: [
      "-아요/어요的变形规则是什么？",
      "을/를的区别是什么？",
      "하다的变形是什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的动词变形。",
      instructionsEn: "Listen and choose the correct verb conjugation.",
      question: "听到的动词变形是？",
      options: ["가요", "가아요", "가어요", "가에요"],
      answer: "가요",
    },
    {
      type: "fill-in",
      instructions: "用-아요/어요变形下列动词。",
      instructionsEn: "Conjugate the verbs with -아요/어요.",
      sentences: [
        { sentence: "먹다 → ___", answer: "먹어요", hint: "먹不是ㅏ/ㅗ" },
        { sentence: "가다 → ___", answer: "가요", hint: "가是ㅏ词干" },
        { sentence: "하다 → ___", answer: "해요", hint: "特殊变形" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "책을 읽어요. 的意思是？",
      options: ["看书。", "读书。", "写书。", "买书。"],
      answer: "看书。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-아요/어요变形规则",
        items: [
          "ㅏ/ㅗ词干 + 아요",
          "其他词干 + 어요",
          "하다 → 해요（特殊）",
        ],
      },
      {
        title: "宾格助词을/를",
        items: [
          "收音后：을",
          "元音后：를",
          "标示动词的宾语",
        ],
      },
    ],
    mindMap: `现在礼貌体
├─ 变形规则
│  ├─ ㅏ/ㅗ + 아요
│  ├─ 其他 + 어요
│  └─ 하다 → 해요
└─ 宾格助词
   ├─ 收音后：을
   └─ 元音后：를`,
    selfTest: [
      {
        question: "먹다的现在礼貌体是？",
        options: ["먹아요", "먹어요", "먹이요", "먹에요"],
        answer: "먹어요",
      },
      {
        question: "물___ 마셔요. 应该填什么？",
        options: ["은", "는", "이", "를"],
        answer: "를",
      },
      {
        question: "하다的变形是？",
        options: ["하아요", "하여요", "해요", "하에요"],
        answer: "해요",
      },
    ],
  },
};

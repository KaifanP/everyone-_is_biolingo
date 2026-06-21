import { KoreanLesson } from "./korean-types";

export const koreanLesson19Data: KoreanLesson = {
  info: {
    id: "lesson-19",
    moduleId: "04",
    number: 19,
    title: "-고 있어요、频率和时间表达",
    titleEn: "-고 있어요, Frequency & Time Expressions",
  },
  objectives: [
    "掌握-고 있어요进行时的用法",
    "掌握常用频率副词",
    "能描述正在进行的动作和频率",
  ],
  warmup: {
    questions: [
      "韩语进行时的变形规则是什么？",
      "怎么表达'正在做某事'？",
    ],
  },
  input: {
    dialogue: {
      title: "打电话",
      lines: [
        { speaker: "A", korean: "지금 뭐 해요?", chinese: "现在在做什么？" },
        { speaker: "B", korean: "공부하고 있어요.", chinese: "正在学习。" },
        { speaker: "A", korean: "매일 공부해요?", chinese: "每天学习吗？" },
        { speaker: "B", korean: "네, 매일 공부해요.", chinese: "是的，每天学习。" },
      ],
    },
    vocabulary: [
      { korean: "지금", chinese: "现在", partOfSpeech: "副词" },
      { korean: "매일", chinese: "每天", partOfSpeech: "副词" },
      { korean: "가끔", chinese: "有时", partOfSpeech: "副词" },
      { korean: "자주", chinese: "经常", partOfSpeech: "副词" },
      { korean: "항상", chinese: "总是", partOfSpeech: "副词" },
      { korean: "때때로", chinese: "有时候", partOfSpeech: "副词" },
      { korean: "보통", chinese: "通常", partOfSpeech: "副词" },
      { korean: "별로", chinese: "不怎么", partOfSpeech: "副词" },
      { korean: "거의", chinese: "几乎", partOfSpeech: "副词" },
      { korean: "아침마다", chinese: "每天早上", partOfSpeech: "副词" },
      { korean: "저녁마다", chinese: "每天晚上", partOfSpeech: "副词" },
      { korean: "주말마다", chinese: "每周末", partOfSpeech: "副词" },
      { korean: "일주일에 두 번", chinese: "一周两次", partOfSpeech: "副词" },
      { korean: "운동하다", chinese: "运动", partOfSpeech: "动词" },
      { korean: "요리하다", chinese: "做饭", partOfSpeech: "动词" },
      { korean: "청소하다", chinese: "打扫", partOfSpeech: "动词" },
      { korean: "빨래하다", chinese: "洗衣服", partOfSpeech: "动词" },
      { korean: "샤워하다", chinese: "洗澡", partOfSpeech: "动词" },
      { korean: "전화하다", chinese: "打电话", partOfSpeech: "动词" },
      { korean: "산책하다", chinese: "散步", partOfSpeech: "动词" },
      { korean: "춤추다", chinese: "跳舞", partOfSpeech: "动词" },
      { korean: "노래하다", chinese: "唱歌", partOfSpeech: "动词" },
      { korean: "게임하다", chinese: "玩游戏", partOfSpeech: "动词" },
      { korean: "책 읽다", chinese: "读书", partOfSpeech: "动词" },
      { korean: "음악 듣다", chinese: "听音乐", partOfSpeech: "动词" },
      { korean: "아침", chinese: "早上", partOfSpeech: "名词" },
      { korean: "점심", chinese: "中午", partOfSpeech: "名词" },
      { korean: "저녁", chinese: "晚上", partOfSpeech: "名词" },
      { korean: "주말", chinese: "周末", partOfSpeech: "名词" },
      { korean: "평일", chinese: "平日", partOfSpeech: "名词" },
      { korean: "방학", chinese: "假期", partOfSpeech: "名词" },
      { korean: "시간", chinese: "时间", partOfSpeech: "名词" },
      { korean: "일과", chinese: "日程", partOfSpeech: "名词" },
      { korean: "취미", chinese: "兴趣/爱好", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-고 있어요进行时",
        nameEn: "-고 있어요 Present Progressive",
        structure: "动词词干 + 고 있어요",
        meaning: "表示'正在做某事'。",
        usage: "描述正在进行的动作。",
        examples: [
          { korean: "공부하고 있어요.", chinese: "正在学习。" },
          { korean: "밥을 먹고 있어요.", chinese: "正在吃饭。" },
          { korean: "영화를 보고 있어요.", chinese: "正在看电影。" },
        ],
        chineseTransfer: "类似中文的'正在做'，但韩语是动词变形。",
      },
      {
        name: "频率副词",
        nameEn: "Frequency Adverbs",
        structure: "항상/자주/가끔/매일",
        meaning: "항상=总是，자주=经常，가끔=有时，매일=每天。",
        usage: "放在动词前，表示动作的频率。",
        examples: [
          { korean: "항상 공부해요.", chinese: "总是学习。" },
          { korean: "자주 운동해요.", chinese: "经常运动。" },
          { korean: "가끔 영화를 봐요.", chinese: "有时看电影。" },
          { korean: "매일 커피를 마셔요.", chinese: "每天喝咖啡。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-고 있어요说成-고 있다",
        correct: "-고 있어요是敬语形式",
        reason: "日常对话用-고 있어요，不用-고 있다。",
      },
      {
        wrong: "频率副词放在动词后",
        correct: "频率副词放在动词前",
        reason: "韩语是SOV语言，副词在动词前。",
      },
    ],
    keyQuestions: [
      "-고 있어요的用法是什么？",
      "常用频率副词有哪些？",
      "频率副词放在句子的什么位置？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的进行时表达。",
      instructionsEn: "Listen and choose the correct progressive expression.",
      question: "听到的进行时表达是？",
      options: ["공부해요", "공부하고 있어요", "공부했어요", "공부할 거예요"],
      answer: "공부하고 있어요",
    },
    {
      type: "matching",
      instructions: "将频率副词与对应的意思配对。",
      instructionsEn: "Match frequency adverbs to meanings.",
      pairs: [
        { left: "항상", right: "总是" },
        { left: "자주", right: "经常" },
        { left: "가끔", right: "有时" },
        { left: "매일", right: "每天" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "공부하고 있어요. 的意思是？",
      options: ["学习了。", "正在学习。", "打算学习。", "想学习。"],
      answer: "正在学习。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-고 있어요进行时",
        items: [
          "动词词干 + 고 있어요",
          "表示'正在做某事'",
          "描述正在进行的动作",
        ],
      },
      {
        title: "频率副词",
        items: [
          "항상：总是",
          "자주：经常",
          "가끔：有时",
          "매일：每天",
        ],
      },
    ],
    mindMap: `进行时与频率
├─ -고 있어요
│  ├─ 动词词干 + 고 있어요
│  └─ 表示'正在做某事'
└─ 频率副词
   ├─ 항상：总是
   ├─ 자주：经常
   ├─ 가끔：有时
   └─ 매일：每天`,
    selfTest: [
      {
        question: "-고 있어요表示什么？",
        options: ["过去", "现在进行", "未来", "愿望"],
        answer: "现在进行",
      },
      {
        question: "자주의意思是？",
        options: ["总是", "经常", "有时", "每天"],
        answer: "经常",
      },
      {
        question: "频率副词放在句子的什么位置？",
        options: ["动词前", "动词后", "句首", "句尾"],
        answer: "动词前",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用进行时和频率表达造句",
    instructionsEn: "Create sentences using progressive and frequency expressions",
    targetGrammar: "고 있다, 자주/가끔/매일",
    prompts: ["说你现在正在做什么", "说你经常做什么", "说你偶尔做什么"],
    sampleAnswers: ["지금 책을 읽고 있어요.", "매일 운동해요.", "가끔 영화를 봐요."],
    keyWords: ["있어요", "매일", "자주", "가끔", "보통"],
  },
};

import { KoreanLesson } from "./korean-types";

export const koreanLesson22Data: KoreanLesson = {
  info: {
    id: "lesson-22",
    moduleId: "05",
    number: 22,
    title: "-(으)ㄹ 수 있어요、-아/어도 돼요",
    titleEn: "-(으)ㄹ 수 있어요 & -아/어도 돼요 (Can/May)",
  },
  objectives: [
    "掌握-(으)ㄹ 수 있어요表示能力",
    "掌握-아/어도 돼요表示许可",
    "能用这些表达描述能力和许可",
  ],
  warmup: {
    questions: [
      "怎么用韩语表达'能做某事'？",
      "怎么用韩语表达'可以做某事'？",
    ],
  },
  input: {
    dialogue: {
      title: "能力与许可",
      lines: [
        { speaker: "A", korean: "한국어 할 수 있어요?", chinese: "会说韩语吗？" },
        { speaker: "B", korean: "네, 조금 할 수 있어요.", chinese: "是的，会一点。" },
        { speaker: "A", korean: "여기서 사진 찍어도 돼요?", chinese: "这里可以拍照吗？" },
        { speaker: "B", korean: "네, 괜찮아요.", chinese: "是的，没关系。" },
      ],
    },
    vocabulary: [
      { korean: "-(으)ㄹ 수 있다", chinese: "能/会", partOfSpeech: "补助动词" },
      { korean: "-아/어도 되다", chinese: "可以", partOfSpeech: "补助动词" },
      { korean: "조금", chinese: "一点", partOfSpeech: "副词" },
      { korean: "사진", chinese: "照片", partOfSpeech: "名词" },
      { korean: "찍다", chinese: "拍", partOfSpeech: "动词" },
      { korean: "운전하다", chinese: "开车", partOfSpeech: "动词" },
      { korean: "운전", chinese: "驾驶", partOfSpeech: "名词" },
      { korean: "요리하다", chinese: "做饭", partOfSpeech: "动词" },
      { korean: "요리", chinese: "料理/烹饪", partOfSpeech: "名词" },
      { korean: "수영하다", chinese: "游泳", partOfSpeech: "动词" },
      { korean: "수영", chinese: "游泳", partOfSpeech: "名词" },
      { korean: "노래하다", chinese: "唱歌", partOfSpeech: "动词" },
      { korean: "노래", chinese: "歌", partOfSpeech: "名词" },
      { korean: "춤추다", chinese: "跳舞", partOfSpeech: "动词" },
      { korean: "춤", chinese: "舞蹈", partOfSpeech: "名词" },
      { korean: "그림", chinese: "画", partOfSpeech: "名词" },
      { korean: "그리다", chinese: "画", partOfSpeech: "动词" },
      { korean: "운동하다", chinese: "运动", partOfSpeech: "动词" },
      { korean: "운동", chinese: "运动", partOfSpeech: "名词" },
      { korean: "자전거", chinese: "自行车", partOfSpeech: "名词" },
      { korean: "타다", chinese: "骑/乘坐", partOfSpeech: "动词" },
      { korean: "피아노", chinese: "钢琴", partOfSpeech: "名词" },
      { korean: "치다", chinese: "弹/打", partOfSpeech: "动词" },
      { korean: "게임", chinese: "游戏", partOfSpeech: "名词" },
      { korean: "독서", chinese: "读书", partOfSpeech: "名词" },
      { korean: "등산", chinese: "登山", partOfSpeech: "名词" },
      { korean: "여행", chinese: "旅行", partOfSpeech: "名词" },
      { korean: "여행하다", chinese: "旅行", partOfSpeech: "动词" },
      { korean: "사용하다", chinese: "使用", partOfSpeech: "动词" },
      { korean: "금연", chinese: "禁烟", partOfSpeech: "名词" },
      { korean: "촬영", chinese: "拍摄", partOfSpeech: "名词" },
      { korean: "출입", chinese: "出入", partOfSpeech: "名词" },
      { korean: "허가", chinese: "许可", partOfSpeech: "名词" },
      { korean: "프로", chinese: "专业", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-(으)ㄹ 수 있어요",
        nameEn: "-(으)ㄹ 수 있어요 (can)",
        structure: "动词词干 + (으)ㄹ 수 있어요",
        meaning: "表示'能/会做某事'。",
        usage: "收音后+을 수 있어요，元音后+ㄹ 수 있어요。",
        examples: [
          { korean: "한국어 할 수 있어요.", chinese: "会说韩语。" },
          { korean: "운전할 수 있어요.", chinese: "会开车。" },
          { korean: "요리할 수 있어요.", chinese: "会做饭。" },
        ],
        chineseTransfer: "类似中文的'能/会'，但韩语是动词变形。",
      },
      {
        name: "-아/어도 돼요",
        nameEn: "-아/어도 돼요 (may)",
        structure: "动词词干 + 아/어도 돼요",
        meaning: "表示'可以做某事'（许可）。",
        usage: "用于请求许可或给予许可。",
        examples: [
          { korean: "여기서 사진 찍어도 돼요?", chinese: "这里可以拍照吗？" },
          { korean: "앉아도 돼요?", chinese: "可以坐吗？" },
          { korean: "가도 돼요?", chinese: "可以走吗？" },
        ],
        chineseTransfer: "类似中文的'可以'，但韩语更礼貌。",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-(으)ㄹ 수 있어요和-아/어도 돼요混用",
        correct: "-(으)ㄹ 수 있어요是能力，-아/어도 돼요是许可",
        reason: "两者意思不同，不能随意替换。",
      },
      {
        wrong: "收音后用ㄹ 수 있어요",
        correct: "收音后用을 수 있어요",
        reason: "这是语音规律，为了发音顺畅。",
      },
    ],
    keyQuestions: [
      "-(으)ㄹ 수 있어요和-아/어도 돼요的区别是什么？",
      "怎么表达'能做某事'？",
      "怎么表达'可以做某事'？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的表达。",
      instructionsEn: "Listen and choose the correct expression.",
      question: "听到的表达是？",
      options: ["할 수 있어요", "해도 돼요", "하고 싶어요", "할 거예요"],
      answer: "할 수 있어요",
    },
    {
      type: "fill-in",
      instructions: "用-(으)ㄹ 수 있어요或-아/어도 돼요填空。",
      instructionsEn: "Fill in with -(으)ㄹ 수 있어요 or -아/어도 돼요.",
      sentences: [
        { sentence: "한국어 ___", answer: "할 수 있어요", hint: "会说韩语" },
        { sentence: "여기서 사진 ___", answer: "찍어도 돼요", hint: "可以拍照" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "한국어 할 수 있어요. 的意思是？",
      options: ["说韩语。", "会说韩语。", "想说韩语。", "可以说韩语。"],
      answer: "会说韩语。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "能力表达",
        items: [
          "-(으)ㄹ 수 있어요：能/会",
          "收音后用을 수 있어요",
          "元音后用ㄹ 수 있어요",
        ],
      },
      {
        title: "许可表达",
        items: [
          "-아/어도 돼요：可以",
          "用于请求或给予许可",
          "更礼貌的表达",
        ],
      },
    ],
    mindMap: `能力与许可
├─ -(으)ㄹ 수 있어요
│  ├─ 能力：能/会
│  └─ 할 수 있어요
└─ -아/어도 돼요
   ├─ 许可：可以
   └─ 해도 돼요`,
    selfTest: [
      {
        question: "-(으)ㄹ 수 있어요表示什么？",
        options: ["能力", "许可", "愿望", "计划"],
        answer: "能力",
      },
      {
        question: "여기서 사진 찍어도 돼요?的意思是？",
        options: ["这里可以拍照吗？", "这里会拍照吗？", "这里想拍照吗？", "这里打算拍照吗？"],
        answer: "这里可以拍照吗？",
      },
      {
        question: "收音后用什么形式表示能力？",
        options: ["ㄹ 수 있어요", "을 수 있어요", "할 수 있어요", "都可以"],
        answer: "을 수 있어요",
      },
    ],
  },
};

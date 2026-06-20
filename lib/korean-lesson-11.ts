import { KoreanLesson } from "./korean-types";

export const koreanLesson11Data: KoreanLesson = {
  info: {
    id: "lesson-11",
    moduleId: "03",
    number: 11,
    title: "固有数词、量词和时间",
    titleEn: "Native Korean Numbers, Counters & Time",
  },
  objectives: [
    "掌握固有数词1-10的读法",
    "掌握常用量词：개、명、잔、병、시",
    "能用固有数词+量词表达数量和时间",
  ],
  warmup: {
    questions: [
      "固有数词和汉字数词有什么区别？",
      "什么时候用固有数词？",
    ],
  },
  input: {
    dialogue: {
      title: "在餐厅点餐",
      lines: [
        { speaker: "顾客", korean: "물 두 잔 주세요.", chinese: "请给我两杯水。" },
        { speaker: "店员", korean: "네, 알겠습니다.", chinese: "好的，知道了。" },
        { speaker: "顾客", korean: "비빔밥 하나하고 냉면 하나 주세요.", chinese: "请给我一份拌饭和一份冷面。" },
      ],
    },
    vocabulary: [
      { korean: "하나", chinese: "一个", partOfSpeech: "数词" },
      { korean: "둘", chinese: "两个", partOfSpeech: "数词" },
      { korean: "셋", chinese: "三个", partOfSpeech: "数词" },
      { korean: "개", chinese: "个（量词）", partOfSpeech: "量词" },
      { korean: "명", chinese: "名（量词）", partOfSpeech: "量词" },
      { korean: "잔", chinese: "杯（量词）", partOfSpeech: "量词" },
      { korean: "병", chinese: "瓶（量词）", partOfSpeech: "量词" },
      { korean: "시", chinese: "时（量词）", partOfSpeech: "量词" },
      { korean: "넷", chinese: "四个", partOfSpeech: "数词" },
      { korean: "다섯", chinese: "五个", partOfSpeech: "数词" },
      { korean: "여섯", chinese: "六个", partOfSpeech: "数词" },
      { korean: "일곱", chinese: "七个", partOfSpeech: "数词" },
      { korean: "여덟", chinese: "八个", partOfSpeech: "数词" },
      { korean: "아홉", chinese: "九个", partOfSpeech: "数词" },
      { korean: "열", chinese: "十个", partOfSpeech: "数词" },
      { korean: "권", chinese: "本（书的量词）", partOfSpeech: "量词" },
      { korean: "벌", chinese: "套（衣服量词）", partOfSpeech: "量词" },
      { korean: "마리", chinese: "只（动物量词）", partOfSpeech: "量词" },
      { korean: "장", chinese: "张（纸的量词）", partOfSpeech: "量词" },
      { korean: "통", chinese: "通（电话量词）", partOfSpeech: "量词" },
      { korean: "번", chinese: "次", partOfSpeech: "量词" },
      { korean: "층", chinese: "层（楼层量词）", partOfSpeech: "量词" },
      { korean: "살", chinese: "岁（年龄量词）", partOfSpeech: "量词" },
      { korean: "켤레", chinese: "双（鞋袜量词）", partOfSpeech: "量词" },
      { korean: "모금", chinese: "口（喝的量词）", partOfSpeech: "量词" },
      { korean: "분", chinese: "分", partOfSpeech: "量词" },
      { korean: "초", chinese: "秒", partOfSpeech: "量词" },
      { korean: "월", chinese: "月", partOfSpeech: "名词" },
      { korean: "일", chinese: "日", partOfSpeech: "名词" },
      { korean: "주", chinese: "周", partOfSpeech: "名词" },
      { korean: "시간", chinese: "时间", partOfSpeech: "名词" },
      { korean: "반", chinese: "半", partOfSpeech: "数词" },
      { korean: "쯤", chinese: "左右（大约）", partOfSpeech: "助词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "固有数词1-10",
        nameEn: "Native Korean Numbers 1-10",
        structure: "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열",
        meaning: "1하나 2둘 3셋 4넷 5다섯 6여섯 7일곱 8여덟 9아홉 10열",
        usage: "用于数量、年龄、时间等。",
        examples: [
          { korean: "사과 두 개", chinese: "两个苹果" },
          { korean: "학생 세 명", chinese: "三名学生" },
          { korean: "물 다섯 잔", chinese: "五杯水" },
        ],
        chineseTransfer: "固有数词是韩语特有的，中文没有对应系统。",
      },
      {
        name: "量词",
        nameEn: "Counters",
        structure: "数词 + 量词",
        meaning: "不同事物用不同量词。",
        usage: "개=个，명=名，잔=杯，병=瓶，시=时。",
        examples: [
          { korean: "사과 하나", chinese: "一个苹果" },
          { korean: "사람 두 명", chinese: "两个人" },
          { korean: "물 한 잔", chinese: "一杯水" },
          { korean: "맥주 세 병", chinese: "三瓶啤酒" },
        ],
      },
      {
        name: "时间表达",
        nameEn: "Time Expression",
        structure: "固有数词 + 시 + 汉字数词 + 분",
        meaning: "时用固有数词，分用汉字数词。",
        usage: "한 시=1点，두 시=2点；十分=10分。",
        examples: [
          { korean: "한 시", chinese: "1点" },
          { korean: "두 시 삼십 분", chinese: "2点30分" },
          { korean: "세 시 십오 분", chinese: "3点15分" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "用汉字数词表达数量",
        correct: "数量用固有数词+量词",
        reason: "价格用汉字数词，数量用固有数词。",
      },
      {
        wrong: "시간用汉字数词",
        correct: "时用固有数词，分用汉字数词",
        reason: "时间表达混合使用两套数词。",
      },
      {
        wrong: "量词用错",
        correct: "不同事物用不同量词",
        reason: "韩语量词比中文更细致。",
      },
    ],
    keyQuestions: [
      "固有数词和汉字数词的使用场景区别是什么？",
      "常用的量词有哪些？",
      "时间表达怎么混合使用两套数词？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的数量。",
      instructionsEn: "Listen and choose the correct quantity.",
      question: "听到的数量是？",
      options: ["하나", "둘", "셋", "넷"],
      answer: "둘",
    },
    {
      type: "matching",
      instructions: "将量词与对应的事物配对。",
      instructionsEn: "Match counters to items.",
      pairs: [
        { left: "개", right: "苹果" },
        { left: "명", right: "学生" },
        { left: "잔", right: "水" },
        { left: "병", right: "啤酒" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "물 두 잔 주세요. 的意思是？",
      options: ["请给我两杯水。", "请给我两瓶水。", "请给我两个苹果。", "请给我两杯咖啡。"],
      answer: "请给我两杯水。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "固有数词",
        items: [
          "하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열",
          "用于数量、年龄、时间",
          "和量词一起使用",
        ],
      },
      {
        title: "量词和时间",
        items: [
          "개/명/잔/병/시",
          "时用固有数词，分用汉字数词",
          "不同事物用不同量词",
        ],
      },
    ],
    mindMap: `固有数词系统
├─ 基本：하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열
├─ 量词
│  ├─ 개：个
│  ├─ 명：名
│  ├─ 잔：杯
│  └─ 병：瓶
└─ 时间
   ├─ 시：时（固有数词）
   └─ 분：分（汉字数词）`,
    selfTest: [
      {
        question: "2的固有数词是？",
        options: ["이", "둘", "두", "둘 다"],
        answer: "둘",
      },
      {
        question: "学生三名应该怎么说？",
        options: ["학생 삼 명", "학생 세 명", "학생 셋 명", "학생 세사람"],
        answer: "학생 세 명",
      },
      {
        question: "2点30分应该怎么说？",
        options: ["두 시 삼십 분", "이 시 삼십 분", "두 시 서른 분", "이 시 서른 분"],
        answer: "두 시 삼십 분",
      },
    ],
  },
};

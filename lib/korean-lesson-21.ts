import { KoreanLesson } from "./korean-types";

export const koreanLesson21Data: KoreanLesson = {
  info: {
    id: "lesson-21",
    moduleId: "05",
    number: 21,
    title: "주세요、-(으)세요请求与点餐购物",
    titleEn: "주세요, -(으)세요 Requests & Ordering",
  },
  objectives: [
    "掌握주세요的用法",
    "掌握-(으)세요请求形式",
    "能用请求形式点餐和购物",
  ],
  warmup: {
    questions: [
      "韩语怎么礼貌地请求别人做某事？",
      "点餐时应该用什么表达？",
    ],
  },
  input: {
    dialogue: {
      title: "在餐厅点餐",
      lines: [
        { speaker: "店员", korean: "뭐 드릴까요?", chinese: "要点什么？" },
        { speaker: "顾客", korean: "비빔밥 하나 주세요.", chinese: "请给我一份拌饭。" },
        { speaker: "店员", korean: "음료는 뭐로 하시겠어요?", chinese: "饮料要什么？" },
        { speaker: "顾客", korean: "물 주세요.", chinese: "请给我水。" },
      ],
    },
    vocabulary: [
      { korean: "주세요", chinese: "请给我", partOfSpeech: "请求表达" },
      { korean: "-(으)세요", chinese: "请……（敬语）", partOfSpeech: "敬语词尾" },
      { korean: "드릴까요", chinese: "要点什么？（敬语）", partOfSpeech: "动词" },
      { korean: "음료", chinese: "饮料", partOfSpeech: "名词" },
      { korean: "메뉴판", chinese: "菜单", partOfSpeech: "名词" },
      { korean: "주문", chinese: "点餐", partOfSpeech: "名词" },
      { korean: "주문하다", chinese: "点餐", partOfSpeech: "动词" },
      { korean: "계산", chinese: "结账", partOfSpeech: "名词" },
      { korean: "계산하다", chinese: "结账", partOfSpeech: "动词" },
      { korean: "영수증", chinese: "发票/收据", partOfSpeech: "名词" },
      { korean: "포장", chinese: "打包", partOfSpeech: "名词" },
      { korean: "포장하다", chinese: "打包", partOfSpeech: "动词" },
      { korean: "추천", chinese: "推荐", partOfSpeech: "名词" },
      { korean: "추천하다", chinese: "推荐", partOfSpeech: "动词" },
      { korean: "웨이터", chinese: "服务员", partOfSpeech: "名词" },
      { korean: "손님", chinese: "客人/顾客", partOfSpeech: "名词" },
      { korean: "식당", chinese: "餐厅", partOfSpeech: "名词" },
      { korean: "카페", chinese: "咖啡厅", partOfSpeech: "名词" },
      { korean: "편의점", chinese: "便利店", partOfSpeech: "名词" },
      { korean: "백화점", chinese: "百货商店", partOfSpeech: "名词" },
      { korean: "사이즈", chinese: "尺寸", partOfSpeech: "名词" },
      { korean: "색깔", chinese: "颜色", partOfSpeech: "名词" },
      { korean: "가격", chinese: "价格", partOfSpeech: "名词" },
      { korean: "할인", chinese: "折扣", partOfSpeech: "名词" },
      { korean: "비싸다", chinese: "贵", partOfSpeech: "形容词" },
      { korean: "싸다", chinese: "便宜", partOfSpeech: "形容词" },
      { korean: "카드", chinese: "卡", partOfSpeech: "名词" },
      { korean: "현금", chinese: "现金", partOfSpeech: "名词" },
      { korean: "배달", chinese: "配送", partOfSpeech: "名词" },
      { korean: "배달하다", chinese: "配送", partOfSpeech: "动词" },
      { korean: "도와주세요", chinese: "请帮忙", partOfSpeech: "动词" },
      { korean: "잠깐만요", chinese: "请稍等", partOfSpeech: "感叹词" },
      { korean: "감사합니다", chinese: "谢谢", partOfSpeech: "惯用表达" },
    ],
  },
  grammar: {
    points: [
      {
        name: "주세요",
        nameEn: "주세요 (please give)",
        structure: "名词 + 주세요",
        meaning: "表示'请给我……'。",
        usage: "用于请求物品。",
        examples: [
          { korean: "물 주세요.", chinese: "请给我水。" },
          { korean: "메뉴판 주세요.", chinese: "请给我菜单。" },
          { korean: "영수증 주세요.", chinese: "请给我发票。" },
        ],
        chineseTransfer: "类似中文的'请给我'，但韩语更礼貌。",
      },
      {
        name: "-(으)세요请求",
        nameEn: "-(으)세요 Request",
        structure: "动词词干 + (으)세요",
        meaning: "表示'请……'，敬语请求形式。",
        usage: "收音后+으세요，元音后+세요。",
        examples: [
          { korean: "앉으세요.", chinese: "请坐。" },
          { korean: "말씀하세요.", chinese: "请说。" },
          { korean: "드세요.", chinese: "请吃。" },
          { korean: "마시세요.", chinese: "请喝。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把주세요说成주다",
        correct: "주세요是敬语形式",
        reason: "日常对话用주세요，不用주다。",
      },
      {
        wrong: "收音后用세요",
        correct: "收音后用으세요",
        reason: "这是语音规律，为了发音顺畅。",
      },
    ],
    keyQuestions: [
      "주세요的用法是什么？",
      "-(으)세요的变形规则是什么？",
      "点餐时应该用什么表达？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的请求形式。",
      instructionsEn: "Listen and choose the correct request form.",
      question: "听到的请求形式是？",
      options: ["주세요", "-(으)세요", "-고 싶어요", "-(으)ㄹ 거예요"],
      answer: "주세요",
    },
    {
      type: "fill-in",
      instructions: "用주세요或-(으)세요填空。",
      instructionsEn: "Fill in with 주세요 or -(으)세요.",
      sentences: [
        { sentence: "물 ___", answer: "주세요", hint: "请给我水" },
        { sentence: "앉___", answer: "으세요", hint: "请坐" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "비빔밥 하나 주세요. 的意思是？",
      options: ["一份拌饭。", "请给我一份拌饭。", "拌饭好吃吗？", "想吃拌饭。"],
      answer: "请给我一份拌饭。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "请求形式",
        items: [
          "주세요：请给我……（物品）",
          "-(으)세요：请……（动作）",
          "收音后用으세요，元音后用세요",
        ],
      },
      {
        title: "点餐购物",
        items: [
          "물 주세요：请给我水",
          "비빔밥 하나 주세요：请给我一份拌饭",
          "礼貌请求",
        ],
      },
    ],
    mindMap: `请求形式
├─ 주세요
│  ├─ 名词 + 주세요
│  └─ 请给我……
├─ -(으)세요
│  ├─ 动词 + (으)세요
│  └─ 请……
└─ 点餐购物
   ├─ 물 주세요
   └─ 비빔밥 하나 주세요`,
    selfTest: [
      {
        question: "주세요的用法是什么？",
        options: ["请给我……", "请……", "想……", "打算……"],
        answer: "请给我……",
      },
      {
        question: "앉으세요的意思是？",
        options: ["坐", "请坐", "想坐", "不能坐"],
        answer: "请坐",
      },
      {
        question: "收音后用什么请求形式？",
        options: ["세요", "으세요", "주세요", "都可以"],
        answer: "으세요",
      },
    ],
  },
  outputTask: {
    type: "oral-response",
    instructions: "练习请求和命令表达",
    instructionsEn: "Practice requests and commands",
    prompt: "请用韩语说以下句子：请给我一杯水 / 请等一下 / 请帮我看看这个",
    sampleAnswer: "물 한 잔 주세요. / 잠깐만 기다려 주세요. / 이것 좀 봐 주세요.",
    keyPhrases: ["주세요", "기다려 주세요", "봐 주세요"],
  },
};

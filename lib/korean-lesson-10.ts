import { KoreanLesson } from "./korean-types";

export const koreanLesson10Data: KoreanLesson = {
  info: {
    id: "lesson-10",
    moduleId: "02",
    number: 10,
    title: "汉字数词：价格、日期、电话号码",
    titleEn: "Sino-Korean Numbers: Price, Date & Phone Numbers",
  },
  objectives: [
    "掌握汉字数词1-10的读法",
    "能用汉字数词表达价格、日期和电话号码",
    "理解汉字数词和固有数词的使用场景区别",
  ],
  warmup: {
    questions: [
      "韩语为什么有两套数词系统？",
      "什么时候用汉字数词，什么时候用固有数词？",
    ],
  },
  input: {
    dialogue: {
      title: "购物",
      lines: [
        { speaker: "顾客", korean: "이것은 얼마예요?", chinese: "这个多少钱？" },
        { speaker: "店员", korean: "오천 원이에요.", chinese: "五千韩元。" },
        { speaker: "顾客", korean: "저것은요?", chinese: "那个呢？" },
        { speaker: "店员", korean: "삼천 원이에요.", chinese: "三千韩元。" },
      ],
    },
    vocabulary: [
      { korean: "얼마", chinese: "多少钱", partOfSpeech: "代词" },
      { korean: "원", chinese: "韩元", partOfSpeech: "名词" },
      { korean: "천", chinese: "千", partOfSpeech: "数词" },
      { korean: "만", chinese: "万", partOfSpeech: "数词" },
      { korean: "월", chinese: "月", partOfSpeech: "名词" },
      { korean: "일", chinese: "日", partOfSpeech: "名词" },
      { korean: "년", chinese: "年", partOfSpeech: "名词" },
      { korean: "시", chinese: "时/点", partOfSpeech: "名词" },
      { korean: "분", chinese: "分", partOfSpeech: "名词" },
      { korean: "초", chinese: "秒", partOfSpeech: "名词" },
      { korean: "백", chinese: "百", partOfSpeech: "数词" },
      { korean: "억", chinese: "亿", partOfSpeech: "数词" },
      { korean: "일요일", chinese: "星期日", partOfSpeech: "名词" },
      { korean: "월요일", chinese: "星期一", partOfSpeech: "名词" },
      { korean: "화요일", chinese: "星期二", partOfSpeech: "名词" },
      { korean: "수요일", chinese: "星期三", partOfSpeech: "名词" },
      { korean: "목요일", chinese: "星期四", partOfSpeech: "名词" },
      { korean: "금요일", chinese: "星期五", partOfSpeech: "名词" },
      { korean: "토요일", chinese: "星期六", partOfSpeech: "名词" },
      { korean: "오늘", chinese: "今天", partOfSpeech: "名词" },
      { korean: "어제", chinese: "昨天", partOfSpeech: "名词" },
      { korean: "내일", chinese: "明天", partOfSpeech: "名词" },
      { korean: "이번 주", chinese: "这周", partOfSpeech: "名词" },
      { korean: "다음 주", chinese: "下周", partOfSpeech: "名词" },
      { korean: "지난달", chinese: "上个月", partOfSpeech: "名词" },
      { korean: "다음 달", chinese: "下个月", partOfSpeech: "名词" },
      { korean: "가격", chinese: "价格", partOfSpeech: "名词" },
      { korean: "돈", chinese: "钱", partOfSpeech: "名词" },
      { korean: "전화번호", chinese: "电话号码", partOfSpeech: "名词" },
      { korean: "주소", chinese: "地址", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "汉字数词1-10",
        nameEn: "Sino-Korean Numbers 1-10",
        structure: "일 이 삼 사 오 육 칠 팔 구 십",
        meaning: "1일 2이 3삼 4사 5오 6육 7칠 8팔 9구 10십",
        usage: "用于价格、日期、电话号码、楼层等。",
        examples: [
          { korean: "오천 원", chinese: "五千韩元" },
          { korean: "삼월 십오일", chinese: "三月十五日" },
          { korean: "공일공-일이삼사-오육칠팔", chinese: "010-1234-5678" },
        ],
        chineseTransfer: "汉字数词和中文数字发音相似，容易记忆。",
      },
      {
        name: "价格表达",
        nameEn: "Price Expression",
        structure: "数字 + 원",
        meaning: "韩元单位是원，千以上用천、만。",
        usage: "천=千，만=万，억=亿。",
        examples: [
          { korean: "천 원", chinese: "一千韩元" },
          { korean: "오천 원", chinese: "五千韩元" },
          { korean: "만 원", chinese: "一万韩元" },
          { korean: "삼만 오천 원", chinese: "三万五千韩元" },
        ],
      },
      {
        name: "日期表达",
        nameEn: "Date Expression",
        structure: "년 + 월 + 일",
        meaning: "年=년，月=월，日=일。",
        usage: "년和월后用일表示日期。",
        examples: [
          { korean: "이천이십오년", chinese: "2025年" },
          { korean: "삼월", chinese: "三月" },
          { korean: "십오일", chinese: "十五日" },
        ],
      },
      {
        name: "电话号码",
        nameEn: "Phone Numbers",
        structure: "数字逐个读出",
        meaning: "电话号码逐个数字读出，用'-'分隔。",
        usage: "0读作'공'，不是'영'。",
        examples: [
          { korean: "공일공-일이삼사-오육칠팔", chinese: "010-1234-5678" },
          { korean: "이삼사-오육칠팔", chinese: "234-5678" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把0读作'영'",
        correct: "电话号码中0读作'공'",
        reason: "这是韩语的习惯，电话号码用'공'。",
      },
      {
        wrong: "用固有数词表达价格",
        correct: "价格用汉字数词",
        reason: "固有数词用于数量（个、杯等），价格用汉字数词。",
      },
      {
        wrong: "日期顺序和中文一样",
        correct: "韩语日期顺序是년월일（年月日）",
        reason: "和中文顺序相同，但发音不同。",
      },
    ],
    keyQuestions: [
      "什么时候用汉字数词，什么时候用固有数词？",
      "电话号码中的0怎么读？",
      "韩元的单位是什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的价格。",
      instructionsEn: "Listen and choose the correct price.",
      question: "听到的价格是？",
      options: ["천 원", "오천 원", "만 원", "삼만 원"],
      answer: "오천 원",
    },
    {
      type: "fill-in",
      instructions: "用汉字数词填空。",
      instructionsEn: "Fill in with Sino-Korean numbers.",
      sentences: [
        { sentence: "삼월 ___일 (15日)", answer: "십오", hint: "15的汉字数词" },
        { sentence: "오___ 원 (5000韩元)", answer: "천", hint: "千的汉字数词" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "이것은 얼마예요? 的意思是？",
      options: ["这是什么？", "这个多少钱？", "这是谁的？", "这是哪里？"],
      answer: "这个多少钱？",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "汉字数词1-10",
        items: [
          "일 이 삼 사 오 육 칠 팔 구 십",
          "用于价格、日期、电话号码",
          "和中文数字发音相似",
        ],
      },
      {
        title: "实际应用",
        items: [
          "价格：数字 + 원",
          "日期：년 + 월 + 일",
          "电话号码：逐个读出，0读作공",
        ],
      },
    ],
    mindMap: `汉字数词
├─ 基本：일 이 삼 사 오 육 칠 팔 구 십
├─ 价格
│  ├─ 천：千
│  ├─ 만：万
│  └─ 원：韩元
├─ 日期
│  ├─ 년：年
│  ├─ 월：月
│  └─ 일：日
└─ 电话号码
   └─ 0读作공`,
    selfTest: [
      {
        question: "5的汉字数词是？",
        options: ["오", "다섯", "육", "여섯"],
        answer: "오",
      },
      {
        question: "电话号码中的0读作什么？",
        options: ["영", "공", "령", "리"],
        answer: "공",
      },
      {
        question: "삼만 오천 원是多少？",
        options: ["3500韩元", "35000韩元", "350000韩元", "3500000韩元"],
        answer: "35000韩元",
      },
    ],
  },
};

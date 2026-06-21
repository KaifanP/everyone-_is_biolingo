import { KoreanLesson } from "./korean-types";

export const koreanLesson27Data: KoreanLesson = {
  info: {
    id: "lesson-27",
    moduleId: "06",
    number: 27,
    title: "부터/까지、에게/한테、(으)로及公共生活语境",
    titleEn: "부터/까지, 에게/한테, (으)로 & Public Life Contexts",
  },
  objectives: [
    "掌握부터/까지表示范围",
    "掌握에게/한테表示对象",
    "掌握(으)로表示方向和工具",
  ],
  warmup: {
    questions: [
      "부터和까지的用法是什么？",
      "에게和한테有什么区别？",
    ],
  },
  input: {
    dialogue: {
      title: "寄包裹",
      lines: [
        { speaker: "A", korean: "이 소포를 어디까지 보내실 거예요?", chinese: "这个包裹寄到哪里？" },
        { speaker: "B", korean: "부산까지 보내실 거예요.", chinese: "寄到釜山。" },
        { speaker: "A", korean: "무엇으로 보내실 거예요?", chinese: "用什么寄？" },
        { speaker: "B", korean: "택시로 보내실 거예요.", chinese: "用出租车寄。" },
      ],
    },
    vocabulary: [
      { korean: "부터", chinese: "从", partOfSpeech: "助词" },
      { korean: "까지", chinese: "到", partOfSpeech: "助词" },
      { korean: "에게/한테", chinese: "给", partOfSpeech: "助词" },
      { korean: "(으)로", chinese: "用/往", partOfSpeech: "助词" },
      { korean: "소포", chinese: "包裹", partOfSpeech: "名词" },
      { korean: "우체국", chinese: "邮局", partOfSpeech: "名词" },
      { korean: "은행", chinese: "银行", partOfSpeech: "名词" },
      { korean: "병원", chinese: "医院", partOfSpeech: "名词" },
      { korean: "약국", chinese: "药店", partOfSpeech: "名词" },
      { korean: "경찰서", chinese: "警察局", partOfSpeech: "名词" },
      { korean: "시청", chinese: "市政府", partOfSpeech: "名词" },
      { korean: "주민센터", chinese: "居民中心", partOfSpeech: "名词" },
      { korean: "엘리베이터", chinese: "电梯", partOfSpeech: "名词" },
      { korean: "에스컬레이터", chinese: "扶梯", partOfSpeech: "名词" },
      { korean: "출구", chinese: "出口", partOfSpeech: "名词" },
      { korean: "입구", chinese: "入口", partOfSpeech: "名词" },
      { korean: "횡단보도", chinese: "人行横道", partOfSpeech: "名词" },
      { korean: "신호등", chinese: "红绿灯", partOfSpeech: "名词" },
      { korean: "버스 정류장", chinese: "公交车站", partOfSpeech: "名词" },
      { korean: "지하철역", chinese: "地铁站", partOfSpeech: "名词" },
      { korean: "창구", chinese: "窗口", partOfSpeech: "名词" },
      { korean: "번호표", chinese: "号码牌", partOfSpeech: "名词" },
      { korean: "접수처", chinese: "接待处", partOfSpeech: "名词" },
      { korean: "민원실", chinese: "民愿室", partOfSpeech: "名词" },
      { korean: "양식", chinese: "表格", partOfSpeech: "名词" },
      { korean: "신분증", chinese: "身份证", partOfSpeech: "名词" },
      { korean: "수수료", chinese: "手续费", partOfSpeech: "名词" },
      { korean: "영수증", chinese: "收据", partOfSpeech: "名词" },
      { korean: "왼쪽", chinese: "左边", partOfSpeech: "名词" },
      { korean: "오른쪽", chinese: "右边", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "부터/까지",
        nameEn: "부터/까지 (from/to)",
        structure: "名词 + 부터/까지",
        meaning: "부터=从，까지=到。",
        usage: "表示时间和空间的范围。",
        examples: [
          { korean: "9시부터 5시까지", chinese: "从9点到5点" },
          { korean: "서울부터 부산까지", chinese: "从首尔到釜山" },
        ],
        chineseTransfer: "类似中文的'从……到……'。",
      },
      {
        name: "에게/한테",
        nameEn: "에게/한테 (to)",
        structure: "名词 + 에게/한테",
        meaning: "表示动作的对象（给谁）。",
        usage: "에게更正式，한테更口语。",
        examples: [
          { korean: "친구에게/한테 선물을 줘요.", chinese: "给朋友礼物。" },
          { korean: "선생님에게 물어봐요.", chinese: "问老师。" },
        ],
      },
      {
        name: "(으)로",
        nameEn: "(으)로 (with/to)",
        structure: "名词 + (으)로",
        meaning: "表示工具、方向或方式。",
        usage: "收音后+으로，元音后+로。",
        examples: [
          { korean: "택시로 가요.", chinese: "坐出租车去。" },
          { korean: "한국으로 가요.", chinese: "去韩国。" },
          { korean: "젓가락으로 먹어요.", chinese: "用筷子吃。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把부터和에서混用",
        correct: "부터是'从'，에서是'在'",
        reason: "两者意思不同，不能随意替换。",
      },
      {
        wrong: "收音后用로",
        correct: "收音后用으로",
        reason: "这是语音规律，为了发音顺畅。",
      },
    ],
    keyQuestions: [
      "부터和까지的用法是什么？",
      "에게和한테的区别是什么？",
      "(으)로可以表示哪几种意思？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的助词。",
      instructionsEn: "Listen and choose the correct particle.",
      question: "9시___ 5시___ 应该填什么？",
      options: ["부터/까지", "에서/까지", "부터/에", "에서/에"],
      answer: "부터/까지",
    },
    {
      type: "fill-in",
      instructions: "用适当的助词填空。",
      instructionsEn: "Fill in with appropriate particles.",
      sentences: [
        { sentence: "친구___ 선물을 줘요.", answer: "에게/한테", hint: "给朋友" },
        { sentence: "택시___ 가요.", answer: "로", hint: "坐出租车" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "9시부터 5시까지 的意思是？",
      options: ["从9点到5点", "从5点到9点", "9点和5点", "9点或5点"],
      answer: "从9点到5点",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "范围助词",
        items: [
          "부터：从",
          "까지：到",
          "表示时间和空间范围",
        ],
      },
      {
        title: "对象和工具",
        items: [
          "에게/한테：给（对象）",
          "(으)로：用/往（工具/方向）",
          "收音后用으로",
        ],
      },
    ],
    mindMap: `公共生活助词
├─ 范围
│  ├─ 부터：从
│  └─ 까지：到
├─ 对象
│  └─에게/한테：给
└─ 工具/方向
   └─ (으)로：用/往`,
    selfTest: [
      {
        question: "부터的意思是？",
        options: ["从", "到", "给", "用"],
        answer: "从",
      },
      {
        question: "에게和한테的区别是？",
        options: ["没有区别", "에게更正式", "한테更正式", "用法不同"],
        answer: "에게更正式",
      },
      {
        question: "收音后用什么表示工具？",
        options: ["로", "으로", "에게", "한테"],
        answer: "으로",
      },
    ],
  },
  outputTask: {
    type: "oral-response",
    instructions: "练习公共场所表达",
    instructionsEn: "Practice public life expressions",
    prompt: "请用韩语说：请问最近的地铁站在哪里？/ 我想买去釜山的票 / 请问这个多少钱？",
    sampleAnswer: "가장 가까운 지하철역이 어디예요? / 부산으로 가는 표를 사고 싶어요. / 이거 얼마예요?",
    keyPhrases: ["어디예요", "사고 싶어요", "얼마예요"],
  },
};

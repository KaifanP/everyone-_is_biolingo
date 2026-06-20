import { KoreanLesson } from "./korean-types";

export const koreanLesson13Data: KoreanLesson = {
  info: {
    id: "lesson-13",
    moduleId: "03",
    number: 13,
    title: "에/에서、移动、交通和日常活动",
    titleEn: "에/에서, Movement, Transportation & Daily Activities",
  },
  objectives: [
    "掌握助词에和에서的区别",
    "掌握常用移动动词：가다/오다/타다",
    "能描述交通方式和日常活动",
  ],
  warmup: {
    questions: [
      "에和에서有什么区别？",
      "韩语怎么表达'坐公交车'？",
    ],
  },
  input: {
    dialogue: {
      title: "问路",
      lines: [
        { speaker: "A", korean: "학교에 어떻게 가요?", chinese: "学校怎么去？" },
        { speaker: "B", korean: "버스를 타고 가요.", chinese: "坐公交车去。" },
        { speaker: "A", korean: "버스 정류장이 어디예요?", chinese: "公交车站在哪里？" },
        { speaker: "B", korean: "직진으로 가세요.", chinese: "请直走。" },
      ],
    },
    vocabulary: [
      { korean: "어떻게", chinese: "怎么", partOfSpeech: "副词" },
      { korean: "버스", chinese: "公交车", partOfSpeech: "名词" },
      { korean: "타다", chinese: "坐/乘", partOfSpeech: "动词" },
      { korean: "정류장", chinese: "车站", partOfSpeech: "名词" },
      { korean: "지하철", chinese: "地铁", partOfSpeech: "名词" },
      { korean: "택시", chinese: "出租车", partOfSpeech: "名词" },
      { korean: "기차", chinese: "火车", partOfSpeech: "名词" },
      { korean: "비행기", chinese: "飞机", partOfSpeech: "名词" },
      { korean: "배", chinese: "船", partOfSpeech: "名词" },
      { korean: "자전거", chinese: "自行车", partOfSpeech: "名词" },
      { korean: "오토바이", chinese: "摩托车", partOfSpeech: "名词" },
      { korean: "길", chinese: "路", partOfSpeech: "名词" },
      { korean: "교차로", chinese: "十字路口", partOfSpeech: "名词" },
      { korean: "횡단보도", chinese: "人行横道", partOfSpeech: "名词" },
      { korean: "왼쪽", chinese: "左边", partOfSpeech: "名词" },
      { korean: "오른쪽", chinese: "右边", partOfSpeech: "名词" },
      { korean: "앞", chinese: "前", partOfSpeech: "名词" },
      { korean: "뒤", chinese: "后", partOfSpeech: "名词" },
      { korean: "옆", chinese: "旁边", partOfSpeech: "名词" },
      { korean: "근처", chinese: "附近", partOfSpeech: "名词" },
      { korean: "건너다", chinese: "过（马路）", partOfSpeech: "动词" },
      { korean: "돌아가다", chinese: "绕行", partOfSpeech: "动词" },
      { korean: "오르다", chinese: "上（坡/楼梯）", partOfSpeech: "动词" },
      { korean: "내리다", chinese: "下", partOfSpeech: "动词" },
      { korean: "출발하다", chinese: "出发", partOfSpeech: "动词" },
      { korean: "도착하다", chinese: "到达", partOfSpeech: "动词" },
      { korean: "달리다", chinese: "跑", partOfSpeech: "动词" },
      { korean: "멀다", chinese: "远", partOfSpeech: "形容词" },
      { korean: "가깝다", chinese: "近", partOfSpeech: "形容词" },
      { korean: "빠르다", chinese: "快", partOfSpeech: "形容词" },
      { korean: "느리다", chinese: "慢", partOfSpeech: "形容词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "助词에和에서",
        nameEn: "Particles 에 and 에서",
        structure: "名词 + 에/에서",
        meaning: "에：去/来/在的目的地或位置；에서：在某个地方做某事。",
        usage: "학교에 가요（去学校）；학교에서 공부해요（在学校学习）。",
        examples: [
          { korean: "학교에 가요.", chinese: "去学校。" },
          { korean: "집에 와요.", chinese: "回家。" },
          { korean: "학교에서 공부해요.", chinese: "在学校学习。" },
          { korean: "식당에서 밥을 먹어요.", chinese: "在餐厅吃饭。" },
        ],
        chineseTransfer: "에类似中文的'到/在'，에서类似'在……（做某事）'。",
      },
      {
        name: "移动动词",
        nameEn: "Movement Verbs",
        structure: "가다/오다/타다",
        meaning: "가다=去，오다=来，타다=坐/乘。",
        usage: "버스를 타다=坐公交车；지하철을 타다=坐地铁。",
        examples: [
          { korean: "학교에 가요.", chinese: "去学校。" },
          { korean: "집에 와요.", chinese: "回家。" },
          { korean: "버스를 타요.", chinese: "坐公交车。" },
          { korean: "지하철을 타요.", chinese: "坐地铁。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "在'에서'后用'에'",
        correct: "在某个地方做某事用'에서'",
        reason: "에表示目的地或位置，에서表示动作发生的场所。",
      },
      {
        wrong: "把'타다'说成'앉다'",
        correct: "타다是坐/乘交通工具，앉다是坐下",
        reason: "两者意思不同，不能混用。",
      },
    ],
    keyQuestions: [
      "에和에서的区别是什么？",
      "怎么表达坐公交车/地铁？",
      "가다和오다的区别是什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的助词。",
      instructionsEn: "Listen and choose the correct particle.",
      question: "학교___ 가요. 应该填什么？",
      options: ["에", "에서", "은", "는"],
      answer: "에",
    },
    {
      type: "matching",
      instructions: "将交通方式与对应的韩语配对。",
      instructionsEn: "Match transportation to Korean.",
      pairs: [
        { left: "公交车", right: "버스" },
        { left: "地铁", right: "지하철" },
        { left: "出租车", right: "택시" },
        { left: "飞机", right: "비행기" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "학교에서 공부해요. 的意思是？",
      options: ["去学校。", "在学校学习。", "从学校来。", "学校在哪里？"],
      answer: "在学校学习。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "助词에和에서",
        items: [
          "에：目的地/位置（학교에 가요）",
          "에서：动作场所（학교에서 공부해요）",
          "两者不能互换",
        ],
      },
      {
        title: "移动和交通",
        items: [
          "가다=去，오다=来",
          "타다=坐/乘",
          "버스/지하철/택시 + 을/를 + 타다",
        ],
      },
    ],
    mindMap: `移动与交通
├─ 助词
│  ├─ 에：目的地/位置
│  └─ 에서：动作场所
├─ 移动动词
│  ├─ 가다：去
│  ├─ 오다：来
│  └─ 타다：坐/乘
└─ 交通方式
   ├─ 버스：公交车
   ├─ 지하철：地铁
   └─ 택시：出租车`,
    selfTest: [
      {
        question: "학교___ 공부해요. 应该填什么？",
        options: ["에", "에서", "은", "는"],
        answer: "에서",
      },
      {
        question: "公交车的韩语是？",
        options: ["지하철", "버스", "택시", "비행기"],
        answer: "버스",
      },
      {
        question: "타다的意思是？",
        options: ["去", "来", "坐/乘", "走"],
        answer: "坐/乘",
      },
    ],
  },
};

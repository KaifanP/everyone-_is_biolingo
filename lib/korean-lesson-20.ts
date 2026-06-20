import { KoreanLesson } from "./korean-types";

export const koreanLesson20Data: KoreanLesson = {
  info: {
    id: "lesson-20",
    moduleId: "04",
    number: 20,
    title: "-고、-아/어서、先后顺序和简单原因",
    titleEn: "-고, -아/어서, Sequence & Simple Reasons",
  },
  objectives: [
    "掌握-고和-아/어서的用法",
    "能描述动作的先后顺序",
    "能表达简单的原因",
  ],
  warmup: {
    questions: [
      "-고和-아/어서有什么区别？",
      "怎么用韩语表达'因为……所以……'？",
    ],
  },
  input: {
    dialogue: {
      title: "一天的生活",
      lines: [
        { speaker: "A", korean: "아침에 뭐 해요?", chinese: "早上做什么？" },
        { speaker: "B", korean: "일어나서 세수해요.", chinese: "起床后洗脸。" },
        { speaker: "A", korean: "그 다음에 뭐 해요?", chinese: "然后做什么？" },
        { speaker: "B", korean: "밥을 먹고 학교에 가요.", chinese: "吃饭后去学校。" },
      ],
    },
    vocabulary: [
      { korean: "일어나다", chinese: "起床", partOfSpeech: "动词" },
      { korean: "세수하다", chinese: "洗脸", partOfSpeech: "动词" },
      { korean: "그 다음", chinese: "然后", partOfSpeech: "副词" },
      { korean: "피곤하다", chinese: "累", partOfSpeech: "形容词" },
      { korean: "씻다", chinese: "洗", partOfSpeech: "动词" },
      { korean: "양치하다", chinese: "刷牙", partOfSpeech: "动词" },
      { korean: "옷 입다", chinese: "穿衣服", partOfSpeech: "动词" },
      { korean: "아침 먹다", chinese: "吃早饭", partOfSpeech: "动词" },
      { korean: "출근하다", chinese: "上班", partOfSpeech: "动词" },
      { korean: "퇴근하다", chinese: "下班", partOfSpeech: "动词" },
      { korean: "쉬다", chinese: "休息", partOfSpeech: "动词" },
      { korean: "눕다", chinese: "躺", partOfSpeech: "动词" },
      { korean: "앉다", chinese: "坐", partOfSpeech: "动词" },
      { korean: "서다", chinese: "站", partOfSpeech: "动词" },
      { korean: "전화하다", chinese: "打电话", partOfSpeech: "动词" },
      { korean: "약속하다", chinese: "约定", partOfSpeech: "动词" },
      { korean: "기다리다", chinese: "等待", partOfSpeech: "动词" },
      { korean: "고맙다", chinese: "感谢", partOfSpeech: "形容词" },
      { korean: "미안하다", chinese: "对不起", partOfSpeech: "形容词" },
      { korean: "행복하다", chinese: "幸福", partOfSpeech: "形容词" },
      { korean: "슬프다", chinese: "伤心", partOfSpeech: "形容词" },
      { korean: "화나다", chinese: "生气", partOfSpeech: "形容词" },
      { korean: "아프다", chinese: "疼/不舒服", partOfSpeech: "形容词" },
      { korean: "배고프다", chinese: "饿", partOfSpeech: "形容词" },
      { korean: "목말르다", chinese: "渴", partOfSpeech: "形容词" },
      { korean: "바쁘다", chinese: "忙", partOfSpeech: "形容词" },
      { korean: "편하다", chinese: "舒服/方便", partOfSpeech: "形容词" },
      { korean: "아침", chinese: "早上", partOfSpeech: "名词" },
      { korean: "점심", chinese: "中午", partOfSpeech: "名词" },
      { korean: "저녁", chinese: "晚上", partOfSpeech: "名词" },
      { korean: "학교", chinese: "学校", partOfSpeech: "名词" },
      { korean: "집", chinese: "家", partOfSpeech: "名词" },
      { korean: "병원", chinese: "医院", partOfSpeech: "名词" },
      { korean: "약국", chinese: "药店", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-고连接",
        nameEn: "-고 Connection",
        structure: "动词1词干 + 고 + 动词2",
        meaning: "连接两个动作，表示'做A和做B'（先后或并列）。",
        usage: "밥을 먹고 학교에 가요（吃饭后去学校）。",
        examples: [
          { korean: "밥을 먹고 학교에 가요.", chinese: "吃饭后去学校。" },
          { korean: "공부하고 운동해요.", chinese: "学习后运动。" },
          { korean: "영화를 보고 잤어요.", chinese: "看电影后睡觉了。" },
        ],
        chineseTransfer: "类似中文的'……后……'，但韩语放在动词之间。",
      },
      {
        name: "-아/어서连接",
        nameEn: "-아/어서 Connection",
        structure: "动词/形容词词干 + 아/어서",
        meaning: "表示原因或时间顺序。",
        usage: "비가 와서 집에 있어요（因为下雨所以在家里）。",
        examples: [
          { korean: "비가 와서 집에 있어요.", chinese: "因为下雨所以在家里。" },
          { korean: "피곤해서 일찍 잤어요.", chinese: "因为累所以早睡了。" },
          { korean: "일어나서 세수해요.", chinese: "起床后洗脸。" },
        ],
        chineseTransfer: "类似中文的'因为……所以……'或'……后……'。",
      },
      {
        name: "-고和-아/어서的区别",
        nameEn: "Difference between -고 and -아/어서",
        structure: "-고 vs -아/어서",
        meaning: "-고是并列或先后，-아/어서是原因或紧密先后。",
        usage: "-고可以交换顺序，-아/어서不能交换顺序。",
        examples: [
          { korean: "밥을 먹고 학교에 가요.", chinese: "吃饭后去学校。（可交换）" },
          { korean: "비가 와서 집에 있어요.", chinese: "因为下雨所以在家里。（不可交换）" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-아/어서用于交换顺序",
        correct: "-아/어서不能交换顺序",
        reason: "-아/어서表示原因或紧密先后，顺序固定。",
      },
      {
        wrong: "把-고和-아/어서混用",
        correct: "-고是并列，-아/어서是原因",
        reason: "两者功能不同，不能随意替换。",
      },
    ],
    keyQuestions: [
      "-고和-아/어서的区别是什么？",
      "什么时候用-아/어서？",
      "怎么表达'因为……所以……'？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的连接词。",
      instructionsEn: "Listen and choose the correct connector.",
      question: "听到的连接词是？",
      options: ["-고", "-아/어서", "-고 싶어요", "-(으)ㄹ 거예요"],
      answer: "-아/어서",
    },
    {
      type: "fill-in",
      instructions: "用-고或-아/어서填空。",
      instructionsEn: "Fill in with -고 or -아/어서.",
      sentences: [
        { sentence: "비가 와___ 집에 있어요.", answer: "서", hint: "原因" },
        { sentence: "밥을 먹___ 학교에 가요.", answer: "고", hint: "先后" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "피곤해서 일찍 잤어요. 的意思是？",
      options: ["累所以早睡了。", "累所以晚睡了。", "不累所以早睡了。", "累但是不想睡。"],
      answer: "累所以早睡了。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-고和-아/어서",
        items: [
          "-고：并列或先后（可交换顺序）",
          "-아/어서：原因或紧密先后（不可交换）",
          "两者功能不同",
        ],
      },
      {
        title: "原因表达",
        items: [
          "비가 와서 집에 있어요",
          "피곤해서 일찍 잤어요",
          "表示'因为……所以……'",
        ],
      },
    ],
    mindMap: `连接词
├─ -고
│  ├─ 并列或先后
│  └─ 可交换顺序
├─ -아/어서
│  ├─ 原因或紧密先后
│  └─ 不可交换顺序
└─ 区别
   ├─ -고：吃饭后去学校
   └─ -아/서：因为下雨在家`,
    selfTest: [
      {
        question: "-고和-아/어서的区别是什么？",
        options: ["没有区别", "-고是并列，-아/어서是原因", "-고是原因，-아/어서是并列", "-고更正式"],
        answer: "-고是并列，-아/어서是原因",
      },
      {
        question: "비가 와___ 집에 있어요. 应该填什么？",
        options: ["고", "아/어서", "고 싶어요", "(으)ㄹ 거예요"],
        answer: "아/어서",
      },
      {
        question: "피곤해서 일찍 잤어요的意思是？",
        options: ["累所以早睡了", "累所以晚睡了", "不累所以早睡了", "累但是不想睡"],
        answer: "累所以早睡了",
      },
    ],
  },
};

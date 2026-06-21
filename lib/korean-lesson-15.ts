import { KoreanLesson } from "./korean-types";

export const koreanLesson15Data: KoreanLesson = {
  info: {
    id: "lesson-15",
    moduleId: "03",
    number: 15,
    title: "疑问词、并列助词和基础会话组织",
    titleEn: "Question Words, Coordination & Basic Conversation",
  },
  objectives: [
    "掌握常用疑问词的扩展用法",
    "掌握并列助词-고的用法",
    "能组织简单的韩语会话",
  ],
  warmup: {
    questions: [
      "韩语的疑问词有哪些？",
      "怎么用-고连接两个动词？",
    ],
  },
  input: {
    dialogue: {
      title: "周末计划",
      lines: [
        { speaker: "A", korean: "주말에 뭐 해요?", chinese: "周末做什么？" },
        { speaker: "B", korean: "친구를 만나고 영화를 봐요.", chinese: "见朋友和看电影。" },
        { speaker: "A", korean: "어디에서 만나요?", chinese: "在哪里见面？" },
        { speaker: "B", korean: "카페에서 만나요.", chinese: "在咖啡店见面。" },
      ],
    },
    vocabulary: [
      { korean: "주말", chinese: "周末", partOfSpeech: "名词" },
      { korean: "친구", chinese: "朋友", partOfSpeech: "名词" },
      { korean: "만나다", chinese: "见面", partOfSpeech: "动词" },
      { korean: "카페", chinese: "咖啡店", partOfSpeech: "名词" },
      { korean: "그리고", chinese: "而且", partOfSpeech: "连接词" },
      { korean: "누구", chinese: "谁", partOfSpeech: "疑问词" },
      { korean: "무엇", chinese: "什么", partOfSpeech: "疑问词" },
      { korean: "어디", chinese: "哪里", partOfSpeech: "疑问词" },
      { korean: "언제", chinese: "什么时候", partOfSpeech: "疑问词" },
      { korean: "왜", chinese: "为什么", partOfSpeech: "疑问词" },
      { korean: "몇", chinese: "几", partOfSpeech: "疑问词" },
      { korean: "얼마", chinese: "多少（钱）", partOfSpeech: "疑问词" },
      { korean: "어느", chinese: "哪个", partOfSpeech: "疑问词" },
      { korean: "하지만", chinese: "但是", partOfSpeech: "连接词" },
      { korean: "그러나", chinese: "然而", partOfSpeech: "连接词" },
      { korean: "그러면", chinese: "那么", partOfSpeech: "连接词" },
      { korean: "그러니까", chinese: "所以", partOfSpeech: "连接词" },
      { korean: "아니면", chinese: "或者", partOfSpeech: "连接词" },
      { korean: "또는", chinese: "或", partOfSpeech: "连接词" },
      { korean: "쇼핑하다", chinese: "购物", partOfSpeech: "动词" },
      { korean: "요리하다", chinese: "做菜", partOfSpeech: "动词" },
      { korean: "산책하다", chinese: "散步", partOfSpeech: "动词" },
      { korean: "수영하다", chinese: "游泳", partOfSpeech: "动词" },
      { korean: "게임하다", chinese: "打游戏", partOfSpeech: "动词" },
      { korean: "사진을 찍다", chinese: "拍照", partOfSpeech: "动词" },
      { korean: "전화하다", chinese: "打电话", partOfSpeech: "动词" },
      { korean: "쉬다", chinese: "休息", partOfSpeech: "动词" },
      { korean: "여행하다", chinese: "旅行", partOfSpeech: "动词" },
      { korean: "영화관", chinese: "电影院", partOfSpeech: "名词" },
      { korean: "도서관", chinese: "图书馆", partOfSpeech: "名词" },
      { korean: "공원", chinese: "公园", partOfSpeech: "名词" },
      { korean: "쇼핑몰", chinese: "商场", partOfSpeech: "名词" },
      { korean: "식당", chinese: "餐厅", partOfSpeech: "名词" },
      { korean: "미용실", chinese: "理发店", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "并列助词-고",
        nameEn: "Coordination Particle -고",
        structure: "动词1词干 + 고 + 动词2",
        meaning: "连接两个动作，表示'做A和做B'。",
        usage: "밥을 먹고 커피를 마셔요（吃饭和喝咖啡）。",
        examples: [
          { korean: "친구를 만나고 영화를 봐요.", chinese: "见朋友和看电影。" },
          { korean: "밥을 먹고 커피를 마셔요.", chinese: "吃饭和喝咖啡。" },
          { korean: "공부하고 운동해요.", chinese: "学习和运动。" },
        ],
        chineseTransfer: "类似中文的'和'，但放在动词之间。",
      },
      {
        name: "疑问词扩展",
        nameEn: "Extended Question Words",
        structure: "왜/몇/얼마/어느",
        meaning: "왜=为什么，몇=几个，얼마=多少钱，어느=哪个。",
        usage: "用于更具体的提问。",
        examples: [
          { korean: "왜요?", chinese: "为什么？" },
          { korean: "몇 시에 만나요?", chinese: "几点见面？" },
          { korean: "얼마예요?", chinese: "多少钱？" },
          { korean: "어느 나라 사람이에요?", chinese: "是哪国人？" },
        ],
      },
      {
        name: "그리고/그래서",
        nameEn: "그리고/그래서 (and/so)",
        structure: "句子1 + 그리고/그래서 + 句子2",
        meaning: "그리고=而且，그래서=所以。",
        usage: "连接两个句子，表示并列或因果。",
        examples: [
          { korean: "비가 와요. 그래서 집에 있어요.", chinese: "下雨了。所以在家里。" },
          { korean: "공부해요. 그리고 운동해요.", chinese: "学习。而且运动。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-고放在名词后",
        correct: "-고放在动词词干后",
        reason: "-고是动词连接助词，不能用于名词。",
      },
      {
        wrong: "把그리고和그래서混用",
        correct: "그리고是并列，그래서是因果",
        reason: "两者功能不同，不能随意替换。",
      },
    ],
    keyQuestions: [
      "-고的用法是什么？",
      "그리고和그래서的区别是什么？",
      "常用疑问词有哪些？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的连接词。",
      instructionsEn: "Listen and choose the correct connector.",
      question: "听到的连接词是？",
      options: ["-고", "그리고", "그래서", "-아서"],
      answer: "-고",
    },
    {
      type: "fill-in",
      instructions: "用-고连接下列动词。",
      instructionsEn: "Connect the verbs with -고.",
      sentences: [
        { sentence: "밥을 먹___ 커피를 마셔요.", answer: "고", hint: "连接两个动作" },
        { sentence: "공부___ 운동해요.", answer: "하고", hint: "하다 + 고" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "주말에 뭐 해요? 的意思是？",
      options: ["今天做什么？", "周末做什么？", "明天做什么？", "晚上做什么？"],
      answer: "周末做什么？",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "并列助词-고",
        items: [
          "动词1词干 + 고 + 动词2",
          "表示'做A和做B'",
          "连接两个动作",
        ],
      },
      {
        title: "连接词和疑问词",
        items: [
          "그리고：而且（并列）",
          "그래서：所以（因果）",
          "왜/몇/얼마/어느：疑问词扩展",
        ],
      },
    ],
    mindMap: `会话组织
├─ 并列助词-고
│  └─ 动词1고 + 动词2
├─ 连接词
│  ├─ 그리고：而且
│  └─ 그래서：所以
└─ 疑问词扩展
   ├─ 왜：为什么
   ├─ 몇：几个
   ├─ 얼마：多少钱
   └─ 어느：哪个`,
    selfTest: [
      {
        question: "-고放在什么位置？",
        options: ["名词后", "动词词干后", "形容词后", "句子末尾"],
        answer: "动词词干后",
      },
      {
        question: "그리고的功能是？",
        options: ["因果", "并列", "转折", "否定"],
        answer: "并列",
      },
      {
        question: "为什么的韩语是？",
        options: ["몇", "얼마", "왜", "어느"],
        answer: "왜",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用疑问词和并列表达造句",
    instructionsEn: "Create sentences with question words and coordination",
    targetGrammar: "무엇/어디/누구/언제, 그리고/하지만",
    prompts: ["问对方喜欢什么", "说你去了哪里但是...", "问对方是谁"],
    sampleAnswers: ["뭘 좋아해요?", "서울에 갔지만 비가 왔어요.", "이 사람이 누구예요?"],
    keyWords: ["뭐", "어디", "누구", "언제", "그리고", "하지만"],
  },
};

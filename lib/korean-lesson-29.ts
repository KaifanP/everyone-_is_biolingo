import { KoreanLesson } from "./korean-types";

export const koreanLesson29Data: KoreanLesson = {
  info: {
    id: "lesson-29",
    moduleId: "06",
    number: 29,
    title: "图片题、应答题、对话内容与听力干扰项",
    titleEn: "Picture, Response, Dialogue & Listening Distractors",
  },
  objectives: [
    "掌握TOPIK听力常见题型",
    "能识别听力干扰项",
    "能完成图片题和应答题",
  ],
  warmup: {
    questions: [
      "TOPIK听力有哪些常见题型？",
      "如何识别听力干扰项？",
    ],
  },
  input: {
    dialogue: {
      title: "听力练习",
      lines: [
        { speaker: "A", korean: "이 그림에서 여자가 뭐 하고 있어요?", chinese: "这张图里女人在做什么？" },
        { speaker: "B", korean: "요리하고 있어요.", chinese: "在做饭。" },
      ],
    },
    vocabulary: [
      { korean: "그림", chinese: "图", partOfSpeech: "名词" },
      { korean: "여자", chinese: "女人", partOfSpeech: "名词" },
      { korean: "남자", chinese: "男人", partOfSpeech: "名词" },
      { korean: "듣기", chinese: "听力", partOfSpeech: "名词" },
      { korean: "대화", chinese: "对话", partOfSpeech: "名词" },
      { korean: "질문", chinese: "问题", partOfSpeech: "名词" },
      { korean: "답", chinese: "答案", partOfSpeech: "名词" },
      { korean: "선택", chinese: "选择", partOfSpeech: "名词" },
      { korean: "상황", chinese: "情况", partOfSpeech: "名词" },
      { korean: "장소", chinese: "场所", partOfSpeech: "名词" },
      { korean: "시간", chinese: "时间", partOfSpeech: "名词" },
      { korean: "감사합니다", chinese: "谢谢", partOfSpeech: "惯用语" },
      { korean: "아니에요", chinese: "不客气/哪里的话（常用回应）", partOfSpeech: "惯用语" },
      { korean: "실례합니다", chinese: "打扰一下", partOfSpeech: "惯用语" },
      { korean: "죄송합니다", chinese: "对不起", partOfSpeech: "惯用语" },
      { korean: "괜찮습니다", chinese: "没关系", partOfSpeech: "惯用语" },
      { korean: "네, 알겠습니다", chinese: "好的，知道了", partOfSpeech: "惯用语" },
      { korean: "잠깐만요", chinese: "请稍等", partOfSpeech: "惯用语" },
      { korean: "다시 한번요?", chinese: "请再说一遍？", partOfSpeech: "惯用语" },
      { korean: "잘 모르겠어요", chinese: "不太清楚", partOfSpeech: "惯用语" },
      { korean: "맞아요", chinese: "对的", partOfSpeech: "惯用语" },
      { korean: "아니에요", chinese: "不是的", partOfSpeech: "惯用语" },
      { korean: "그렇군요", chinese: "原来如此", partOfSpeech: "惯用语" },
      { korean: "정말요?", chinese: "真的吗？", partOfSpeech: "惯用语" },
      { korean: "어디", chinese: "哪里", partOfSpeech: "疑问词" },
      { korean: "무엇", chinese: "什么", partOfSpeech: "疑问词" },
      { korean: "언제", chinese: "什么时候", partOfSpeech: "疑问词" },
      { korean: "왜", chinese: "为什么", partOfSpeech: "疑问词" },
      { korean: "몇", chinese: "几/多少", partOfSpeech: "疑问词" },
      { korean: "어느", chinese: "哪个", partOfSpeech: "疑问词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "图片题技巧",
        nameEn: "Picture Question Tips",
        structure: "看图 + 听问题 + 选答案",
        meaning: "图片题需要仔细看图，听清问题。",
        usage: "注意人物动作、地点和时间。",
        examples: [
          { korean: "여자가 뭐 하고 있어요?", chinese: "女人在做什么？" },
          { korean: "남자는 어디에 있어요?", chinese: "男人在哪里？" },
        ],
      },
      {
        name: "应答题技巧",
        nameEn: "Response Question Tips",
        structure: "听前半句 + 选合适的回应",
        meaning: "应答题需要根据语境选择合适的回答。",
        usage: "注意语气和敬语层级。",
        examples: [
          { korean: "A: 감사합니다. B: ___.", chinese: "A: 谢谢。B: ___。" },
          { korean: "정말 고마워요.", chinese: "真的谢谢你。" },
          { korean: "아니에요.", chinese: "不客气。" },
        ],
      },
      {
        name: "干扰项识别",
        nameEn: "Distractor Recognition",
        structure: "相似音、相似义、部分正确",
        meaning: "干扰项通常利用相似音、相似义或部分正确信息。",
        usage: "仔细听完整句，不要只听关键词。",
        examples: [
          { korean: "가다/가나다 (相似音)", chinese: "去/加（相似音）" },
          { korean: "좋다/많다 (相似义)", chinese: "好/多（相似义）" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "只听关键词就选答案",
        correct: "听完整句再选答案",
        reason: "干扰项通常利用关键词误导。",
      },
      {
        wrong: "忽略语气和敬语层级",
        correct: "语气和敬语层级决定回答方式",
        reason: "不同语气需要不同回答。",
      },
    ],
    keyQuestions: [
      "图片题的解题技巧是什么？",
      "应答题需要注意什么？",
      "如何识别听力干扰项？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的回答。",
      instructionsEn: "Listen and choose the correct response.",
      question: "감사합니다. 应回答什么？",
      options: ["네.", "아니에요.", "괜찮아요.", "안녕하세요."],
      answer: "아니에요.",
    },
    {
      type: "image-choice",
      instructions: "看图，选择正确的描述。",
      instructionsEn: "Look at the picture, choose the correct description.",
      imageUrl: "/images/korean/lesson-29-cooking.svg",
      question: "图中女人在做什么？",
      options: ["读书", "做饭", "看电视", "打电话"],
      answer: "做饭",
    },
    {
      type: "fill-in",
      instructions: "选择正确的回答。",
      instructionsEn: "Choose the correct response.",
      sentences: [
        { sentence: "A: 실례합니다. B: ___", answer: "네?", hint: "听到'打扰一下'应该回应" },
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "图片题和应答题",
        items: [
          "图片题：看图+听问题",
          "应答题：听前半句+选回应",
          "注意语气和敬语层级",
        ],
      },
      {
        title: "干扰项识别",
        items: [
          "相似音、相似义、部分正确",
          "听完整句再选答案",
          "不要只听关键词",
        ],
      },
    ],
    mindMap: `TOPIK听力技巧
├─ 图片题
│  ├─ 看图
│  └─ 听问题
├─ 应答题
│  ├─ 听前半句
│  └─ 选回应
└─ 干扰项识别
   ├─ 相似音
   ├─ 相似义
   └─ 部分正确`,
    selfTest: [
      {
        question: "图片题的解题技巧是？",
        options: ["只听关键词", "看图+听问题", "忽略图片", "只听答案"],
        answer: "看图+听问题",
      },
      {
        question: "감사합니다的回答是？",
        options: ["네.", "아니에요.", "괜찮아요.", "안녕하세요."],
        answer: "아니에요.",
      },
      {
        question: "干扰项通常利用什么？",
        options: ["相似音", "相似义", "部分正确", "以上都是"],
        answer: "以上都是",
      },
    ],
  },
};

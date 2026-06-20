import { KoreanLesson } from "./korean-types";

export const koreanLesson09Data: KoreanLesson = {
  info: {
    id: "lesson-09",
    moduleId: "02",
    number: 9,
    title: "있어요/없어요、位置词和助词에",
    titleEn: "있어요/없어요, Location Words & Particle 에",
  },
  objectives: [
    "掌握있어요/없어요的用法",
    "掌握常用位置词：위/아래/앞/뒤/옆/안/밖",
    "理解助词에表示位置和时间的用法",
  ],
  warmup: {
    questions: [
      "中文说'有'和'没有'，韩语怎么说？",
      "韩语的位置词和中文有什么对应关系？",
    ],
  },
  input: {
    dialogue: {
      title: "在图书馆",
      lines: [
        { speaker: "A", korean: "교실에 학생이 있어요?", chinese: "教室里有学生吗？" },
        { speaker: "B", korean: "네, 학생이 있어요.", chinese: "是的，有学生。" },
        { speaker: "A", korean: "책상 위에 책이 있어요?", chinese: "桌子上有书吗？" },
        { speaker: "B", korean: "아니에요, 책이 없어요.", chinese: "不是，没有书。" },
      ],
    },
    vocabulary: [
      { korean: "있어요", chinese: "有/在", partOfSpeech: "形容词" },
      { korean: "없어요", chinese: "没有/不在", partOfSpeech: "形容词" },
      { korean: "위", chinese: "上面", partOfSpeech: "名词" },
      { korean: "아래", chinese: "下面", partOfSpeech: "名词" },
      { korean: "앞", chinese: "前面", partOfSpeech: "名词" },
      { korean: "뒤", chinese: "后面", partOfSpeech: "名词" },
      { korean: "옆", chinese: "旁边", partOfSpeech: "名词" },
      { korean: "안", chinese: "里面", partOfSpeech: "名词" },
      { korean: "밖", chinese: "外面", partOfSpeech: "名词" },
      { korean: "사이", chinese: "之间", partOfSpeech: "名词" },
      { korean: "왼쪽", chinese: "左边", partOfSpeech: "名词" },
      { korean: "오른쪽", chinese: "右边", partOfSpeech: "名词" },
      { korean: "건너편", chinese: "对面", partOfSpeech: "名词" },
      { korean: "근처", chinese: "附近", partOfSpeech: "名词" },
      { korean: "교실", chinese: "教室", partOfSpeech: "名词" },
      { korean: "도서관", chinese: "图书馆", partOfSpeech: "名词" },
      { korean: "식당", chinese: "餐厅", partOfSpeech: "名词" },
      { korean: "카페", chinese: "咖啡厅", partOfSpeech: "名词" },
      { korean: "은행", chinese: "银行", partOfSpeech: "名词" },
      { korean: "병원", chinese: "医院", partOfSpeech: "名词" },
      { korean: "약국", chinese: "药店", partOfSpeech: "名词" },
      { korean: "편의점", chinese: "便利店", partOfSpeech: "名词" },
      { korean: "슈퍼마켓", chinese: "超市", partOfSpeech: "名词" },
      { korean: "우체국", chinese: "邮局", partOfSpeech: "名词" },
      { korean: "경찰서", chinese: "警察局", partOfSpeech: "名词" },
      { korean: "역", chinese: "车站", partOfSpeech: "名词" },
      { korean: "공항", chinese: "机场", partOfSpeech: "名词" },
      { korean: "방", chinese: "房间", partOfSpeech: "名词" },
      { korean: "거실", chinese: "客厅", partOfSpeech: "名词" },
      { korean: "침실", chinese: "卧室", partOfSpeech: "名词" },
      { korean: "부엌", chinese: "厨房", partOfSpeech: "名词" },
      { korean: "화장실", chinese: "洗手间", partOfSpeech: "名词" },
      { korean: "책상", chinese: "书桌", partOfSpeech: "名词" },
      { korean: "의자", chinese: "椅子", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "있어요/없어요",
        nameEn: "있어요/없어요 (exist/not exist)",
        structure: "名词 + 이/가 + 있어요/없어요",
        meaning: "表示'有/没有'或'在/不在'。",
        usage: "收音后用이 있어요/없어요，元音后用가 있어요/없어요。",
        examples: [
          { korean: "학생이 있어요.", chinese: "有学生。" },
          { korean: "학생이 없어요.", chinese: "没有学生。" },
          { korean: "책이 있어요.", chinese: "有书。" },
          { korean: "책이 없어요.", chinese: "没有书。" },
        ],
        chineseTransfer: "类似中文的'有/没有'，但韩语的있어요/없어요是形容词。",
      },
      {
        name: "位置词",
        nameEn: "Location Words",
        structure: "名词 + 위/아래/앞/뒤/옆/안/밖",
        meaning: "表示物体在某个位置。",
        usage: "位置词通常和에一起使用。",
        examples: [
          { korean: "책상 위에 책이 있어요.", chinese: "桌子上有书。" },
          { korean: "의자 아래에 고양이가 있어요.", chinese: "椅子下面有猫。" },
          { korean: "학교 앞에 버스 정류장이 있어요.", chinese: "学校前面有公交车站。" },
        ],
      },
      {
        name: "助词에",
        nameEn: "Particle 에 (at/in/on)",
        structure: "名词 + 에",
        meaning: "表示位置（在……）或时间（在……时候）。",
        usage: "位置：교실에（在教室）；시간：3시에（在3点）。",
        examples: [
          { korean: "교실에 학생이 있어요.", chinese: "教室里有学生。" },
          { korean: "3시에 만나요.", chinese: "3点见面。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把있어요说成'있다'",
        correct: "있다是词典形，있어요是敬语形式",
        reason: "日常对话用있어요，不用있다。",
      },
      {
        wrong: "位置词后不加에",
        correct: "位置词后必须加에",
        reason: "에是位置和时间的标志助词。",
      },
      {
        wrong: "把위和아래混用",
        correct: "위=上面，아래=下面",
        reason: "位置词方向相反，不能混用。",
      },
    ],
    keyQuestions: [
      "있어요和없어요的区别是什么？",
      "에可以表示哪两种意思？",
      "常用的位置词有哪些？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的回答。",
      instructionsEn: "Listen and choose the correct response.",
      question: "听到'교실에 학생이 있어요?'，应该回答什么？",
      options: ["네, 있어요.", "아니에요.", "감사합니다.", "안녕하세요."],
      answer: "네, 있어요.",
    },
    {
      type: "matching",
      instructions: "将位置词与对应的意思配对。",
      instructionsEn: "Match location words to meanings.",
      pairs: [
        { left: "위", right: "上面" },
        { left: "아래", right: "下面" },
        { left: "앞", right: "前面" },
        { left: "뒤", right: "后面" },
        { left: "옆", right: "旁边" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "책상 위에 책이 있어요. 的意思是？",
      options: ["桌子下面有书。", "桌子上面有书。", "桌子旁边有书。", "桌子里面没有书。"],
      answer: "桌子上面有书。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "있어요/없어요",
        items: [
          "있어요：有/在",
          "없어요：没有/不在",
          "收音后用이，元音后用가",
        ],
      },
      {
        title: "位置词和助词에",
        items: [
          "위/아래/앞/뒤/옆/안/밖",
          "에：在……（位置/时间）",
          "位置词后必须加에",
        ],
      },
    ],
    mindMap: `存在与位置
├─ 있어요/없어요
│  ├─ 있어요：有/在
│  └─ 없어요：没有/不在
├─ 位置词
│  ├─ 위：上面
│  ├─ 아래：下面
│  ├─ 앞：前面
│  ├─ 뒤：后面
│  ├─ 옆：旁边
│  ├─ 안：里面
│  └─ 밖：外面
└─ 助词에
   ├─ 位置：교실에
   └─ 时间：3시에`,
    selfTest: [
      {
        question: "없어요的意思是？",
        options: ["有", "没有", "在", "不在"],
        answer: "没有",
      },
      {
        question: "위的意思是？",
        options: ["下面", "上面", "前面", "后面"],
        answer: "上面",
      },
      {
        question: "에可以表示什么？",
        options: ["位置", "时间", "位置和时间", "主语"],
        answer: "位置和时间",
      },
    ],
  },
};

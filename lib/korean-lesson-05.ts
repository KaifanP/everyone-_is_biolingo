import { KoreanLesson } from "./korean-types";

export const koreanLesson05Data: KoreanLesson = {
  info: {
    id: "lesson-05",
    moduleId: "01",
    number: 5,
    title: "连音、鼻音化、紧音化等高频音变与听写",
    titleEn: "Linking, Nasalization, Tensification & Dictation Practice",
  },
  objectives: [
    "掌握连音（연음）规则：收音后接元音时如何连接",
    "掌握鼻音化（비음화）和紧音化（경音화）规则",
    "理解送气音化（격음화）和腭音化（구개음화）规则",
    "能进行简单的韩语听写练习",
  ],
  warmup: {
    questions: [
      "为什么'한국어'听起来像'한구거'？",
      "韩语的音变规则是固定的还是有例外？",
      "音变是人为规定的还是自然发生的？",
    ],
  },
  input: {
    dialogue: {
      title: "在餐厅",
      lines: [
        { speaker: "顾客", korean: "메뉴판 주세요.", chinese: "请给我菜单。", romanization: "Menyupan juseyo." },
        { speaker: "店员", korean: "여기 있습니다.", chinese: "在这里。", romanization: "Yeogi isseumnida." },
        { speaker: "顾客", korean: "비빔밥 하나 주세요.", chinese: "请给我一份拌饭。", romanization: "Bibimbap hana juseyo." },
        { speaker: "店员", korean: "네, 잠시만요.", chinese: "好的，请稍等。", romanization: "Ne, jamsimanyo." },
      ],
    },
    vocabulary: [
      { korean: "메뉴판", chinese: "菜单", romanization: "menyupan", partOfSpeech: "名词" },
      { korean: "여기", chinese: "这里", romanization: "yeogi", partOfSpeech: "代词" },
      { korean: "있다", chinese: "有/在", romanization: "itda", partOfSpeech: "形容词" },
      { korean: "비빔밥", chinese: "拌饭", romanization: "bibimbap", partOfSpeech: "名词" },
      { korean: "잠시만요", chinese: "请稍等", romanization: "jamsimanyo", partOfSpeech: "惯用表达" },
    ],
  },
  grammar: {
    points: [
      {
        name: "连音规则",
        nameEn: "Linking (연음)",
        structure: "收音 + 元音 → 收音移到下一音节",
        meaning: "当一个音节有收音，下一个音节以ㅇ开头时，收音字母移到下一个音节作为初声。\n\n这是韩语最基本的音变规则，几乎所有韩语句子都会发生。",
        usage: "规则：收音字母 → 下一音节初声\n\n示例：\n• 한국어 → 한구거（ㄱ移到거）\n• 음악 → 우막（ㅁ移到막）\n• 먹어요 → 머거요（ㄱ移到거）\n• 있어요 → 이써요（ㅅ移到써）\n\n注意：ㅇ收音不发生连音（因为ㅇ已经是[ng]）",
        examples: [
          { korean: "한국어", chinese: "hangugeo → 实际发音 hangugeo" },
          { korean: "음악", chinese: "eumak → 实际发音 eumak" },
          { korean: "밥을", chinese: "babeul → 实际发音 bap-eul" },
          { korean: "책이", chinese: "chaegi → 实际发音 chae-gi" },
        ],
        chineseTransfer: "类似中文的儿化音，但规则更系统。连音是韩语口语的核心，不掌握连音就听不懂韩语。",
      },
      {
        name: "鼻音化",
        nameEn: "Nasalization (비음화)",
        structure: "ㄱ/ㄷ/ㅂ + ㄴ/ㅁ → ㅇ/ㄴ/ㅁ",
        meaning: "收音ㄱ/ㄷ/ㅂ在鼻音ㄴ/ㅁ前变为鼻音ㅇ/ㄴ/ㅁ。\n\n这是为了让发音更顺畅（同化现象）。",
        usage: "规则：\n• ㄱ + ㄴ/ㅁ → ㅇ + ㄴ/ㅁ\n• ㄷ + ㄴ/ㅁ → ㄴ + ㄴ/ㅁ\n• ㅂ + ㄴ/ㅁ → ㅁ + ㄴ/ㅁ\n\n示例：\n• 학년 → 항년（ㄱ→ㅇ）\n• 먹는 → 멍는（ㄱ→ㅇ）\n• 받는 → 받는（ㄷ→ㄴ）\n• 밥만 → 밤만（ㅂ→ㅁ）",
        examples: [
          { korean: "학년", chinese: "haknyeon → 实际发音 hangnyeon" },
          { korean: "먹는", chinese: "meongneun → 实际发音 meongneun" },
          { korean: "국물", chinese: "gungmul → 实际发音 gungmul" },
        ],
      },
      {
        name: "紧音化",
        nameEn: "Tensification (경음화)",
        structure: "ㄱ/ㄷ/ㅂ + ㄱ/ㄷ/ㅂ/ㅅ/ㅈ → ㄲ/ㄸ/ㅃ/ㅆ/ㅉ",
        meaning: "收音ㄱ/ㄷ/ㅂ后接松音ㄱ/ㄷ/ㅂ/ㅅ/ㅈ时，松音变紧音。\n\n这是因为两个辅音相遇时，后面的辅音被'挤紧'。",
        usage: "规则：\n• ㄱ + ㄱ/ㄷ/ㅂ/ㅅ/ㅈ → ㄱ + ㄲ/ㄸ/ㅃ/ㅆ/ㅉ\n• ㄷ + ㄱ/ㄷ/ㅂ/ㅅ/ㅈ → ㄷ + ㄲ/ㄸ/ㅃ/ㅆ/ㅉ\n• ㅂ + ㄱ/ㄷ/ㅂ/ㅅ/ㅈ → ㅂ + ㄲ/ㄸ/ㅃ/ㅆ/ㅉ\n\n示例：\n• 학교 → 학꾜（ㄱ+ㄱ→ㄱ+ㄲ）\n• 국밥 → 국빱（ㄱ+ㅂ→ㄱ+ㅃ）\n• 학생 → 학쌩（ㄱ+ㅅ→ㄱ+ㅆ）",
        examples: [
          { korean: "학교", chinese: "hakgyo → 实际发音 hakkyo" },
          { korean: "국밥", chinese: "gukbap → 实际发音 gukbap" },
          { korean: "학생", chinese: "haksaeng → 实际发音 hakssaeng" },
          { korean: "맞다", chinese: "matda → 实际发音 matta" },
        ],
      },
      {
        name: "送气音化",
        nameEn: "Aspiration (격음화)",
        structure: "ㄱ/ㄷ/ㅂ + ㅎ → ㅋ/ㅌ/ㅍ",
        meaning: "收音ㄱ/ㄷ/ㅂ后接ㅎ时，ㄱ/ㄷ/ㅂ变为送气音ㅋ/ㅌ/ㅍ。\n\n反过来，ㅎ + ㄱ/ㄷ/ㅂ也会发生同样的变化。",
        usage: "规则：\n• ㄱ + ㅎ → ㅋ\n• ㄷ + ㅎ → ㅌ\n• ㅂ + ㅎ → ㅍ\n• ㅎ + ㄱ/ㄷ/ㅂ → ㅋ/ㅌ/ㅍ\n\n示例：\n• 좋다 → 조타（ㅎ+ㄷ→ㅌ）\n• 놓고 → 노코（ㅎ+ㄱ→ㅋ）",
        examples: [
          { korean: "좋다", chinese: "jota → 实际发音 jota" },
          { korean: "놓고", chinese: "noko → 实际发音 noko" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "忽略连音，把한국어读成三个独立音节",
        correct: "한국어实际发音是한구거，ㄱ移到거",
        reason: "连音是韩语最基本的音变规则，必须掌握。",
      },
      {
        wrong: "把鼻音化后的音发成原来的收音",
        correct: "학년的ㄱ在ㄴ前变为ㅇ",
        reason: "鼻音化是为了发音顺畅，不变化会很拗口。",
      },
      {
        wrong: "忽略紧音化，把학교读成학교",
        correct: "학교的ㄱ在ㄱ前变为ㄲ",
        reason: "紧音化是自动发生的音变，不能忽略。",
      },
      {
        wrong: "把送气音化忽略，把좋다读成좋다",
        correct: "좋다的ㅎ+ㄷ变为ㅌ，读作조타",
        reason: "送气音化是ㅎ和其他辅音相遇时的自然变化。",
      },
    ],
    keyQuestions: [
      "连音发生的条件是什么？",
      "鼻音化和紧音化的区别是什么？",
      "送气音化在什么情况下发生？",
      "为什么韩语有这么多音变规则？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择你听到的实际发音。",
      instructionsEn: "Listen and choose the actual pronunciation.",
      question: "한국어的实际发音是？",
      options: ["한국어", "한구거", "한구어", "한국거"],
      answer: "한구거",
    },
    {
      type: "matching",
      instructions: "将音变类型与规则配对。",
      instructionsEn: "Match sound change types to their rules.",
      pairs: [
        { left: "连音", right: "收音+元音→移位" },
        { left: "鼻音化", right: "ㄱ/ㄷ/ㅂ+ㄴ/ㅁ→ㅇ/ㄴ/ㅁ" },
        { left: "紧音化", right: "ㄱ/ㄷ/ㅂ+ㄱ/ㄷ/ㅂ/ㅅ/ㅈ→紧音" },
        { left: "送气音化", right: "ㄱ/ㄷ/ㅂ+ㅎ→ㅋ/ㅌ/ㅍ" },
      ],
    },
    {
      type: "fill-in",
      instructions: "写出下列单词的实际发音。",
      instructionsEn: "Write the actual pronunciation.",
      sentences: [
        { sentence: "음악的实际发音是？", answer: "음악", hint: "收音ㅁ移到下一音节" },
        { sentence: "학년的实际发音是？", answer: "항년", hint: "ㄱ在ㄴ前变ㅇ" },
        { sentence: "학교的实际发音是？", answer: "학교", hint: "ㄱ在ㄱ前变ㄲ" },
        { sentence: "좋다的实际发音是？", answer: "조타", hint: "ㅎ+ㄷ→ㅌ" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的读音。",
      instructionsEn: "Choose the correct reading.",
      question: "비빔밥 的意思是？",
      options: ["拌饭", "泡菜", "烤肉", "冷面"],
      answer: "拌饭",
    },
    {
      type: "dictation",
      instructions: "听录音，写出你听到的韩文。",
      instructionsEn: "Listen and write the Korean you hear.",
      sentences: [
        { sentence: "听到的是哪个单词？", answer: "메뉴판", hint: "意思是'菜单'" },
        { sentence: "听到的是哪个单词？", answer: "비빔밥", hint: "意思是'拌饭'" },
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "连音规则（最常用）",
        items: [
          "收音 + 元音 → 收音移到下一音节",
          "한국어 → 한구거",
          "最基本的音变规则，口语必备",
          "ㅇ收音不发生连音",
        ],
      },
      {
        title: "鼻音化和紧音化",
        items: [
          "鼻音化：ㄱ/ㄷ/ㅂ + ㄴ/ㅁ → ㅇ/ㄴ/ㅁ",
          "紧音化：ㄱ/ㄷ/ㅂ + ㄱ/ㄷ/ㅂ/ㅅ/ㅈ → 紧音",
          "自动发生的音变，必须掌握",
        ],
      },
      {
        title: "送气音化",
        items: [
          "ㄱ/ㄷ/ㅂ + ㅎ → ㅋ/ㅌ/ㅍ",
          "ㅎ + ㄱ/ㄷ/ㅂ → ㅋ/ㅌ/ㅍ",
          "좋다 → 조타",
        ],
      },
    ],
    mindMap: `音变规则
├─ 连音（연음）★最常用
│  ├─ 收音 + 元音 → 移位
│  └─ 한국어 → 한구거
├─ 鼻音化（비음화）
│  ├─ ㄱ/ㄷ/ㅂ + ㄴ/ㅁ → ㅇ/ㄴ/ㅁ
│  └─ 학년 → 항년
├─ 紧音化（경음화）
│  ├─ ㄱ/ㄷ/ㅂ + ㄱ/ㄷ/ㅂ/ㅅ/ㅈ → 紧音
│  └─ 학교 → 학꾜
└─ 送气音化（격음화）
   ├─ ㄱ/ㄷ/ㅂ + ㅎ → ㅋ/ㅌ/ㅍ
   └─ 좋다 → 조타`,
    selfTest: [
      {
        question: "连音发生的条件是什么？",
        options: ["收音 + 辅音", "收音 + 元音", "元音 + 辅音", "元音 + 元音"],
        answer: "收音 + 元音",
      },
      {
        question: "한국어的实际发音是？",
        options: ["한국어", "한구거", "한구어", "한국거"],
        answer: "한구거",
      },
      {
        question: "鼻音化时，ㄱ在ㄴ前变成什么？",
        options: ["ㄴ", "ㅁ", "ㅇ", "ㅎ"],
        answer: "ㅇ",
      },
      {
        question: "紧音化时，ㄱ在ㄱ前变成什么？",
        options: ["ㄱ", "ㅋ", "ㄲ", "ㅇ"],
        answer: "ㄲ",
      },
      {
        question: "좋다的实际发音是？",
        options: ["좋다", "조타", "조다", "좋타"],
        answer: "조타",
      },
    ],
  },
  outputTask: {
    type: "oral-response",
    instructions: "练习连音和音变",
    instructionsEn: "Practice linking and sound changes",
    prompt: "请大声读出以下词组，注意连音：한국어, 읽어요, 먹었어요",
    sampleAnswer: "한국어(한구거), 읽어요(일거요), 먹었어요(머거써요)",
    keyPhrases: ["한국어", "읽어요", "먹었어요"],
  },
};

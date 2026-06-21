import { KoreanLesson } from "./korean-types";

export const koreanLesson08Data: KoreanLesson = {
  info: {
    id: "lesson-08",
    moduleId: "02",
    number: 8,
    title: "은/는、이/가、도及个人信息",
    titleEn: "은/는, 이/가, 도 & Personal Information",
  },
  objectives: [
    "掌握主题助词은/는的用法",
    "掌握主格助词이/가的用法",
    "理解助词도的含义和用法",
    "能用这些助词介绍个人信息",
  ],
  warmup: {
    questions: [
      "中文没有助词，韩语为什么需要助词？",
      "은/는和이/가有什么区别？",
    ],
  },
  input: {
    dialogue: {
      title: "填写表格",
      lines: [
        { speaker: "职员", korean: "이름이 뭐예요?", chinese: "名字是什么？" },
        { speaker: "A", korean: "제 이름은 왕밍이에요.", chinese: "我的名字是王明。" },
        { speaker: "职员", korean: "나라가 어디예요?", chinese: "国家是哪里？" },
        { speaker: "A", korean: "중국 사람이에요.", chinese: "是中国人。" },
      ],
    },
    vocabulary: [
      { korean: "은/는", chinese: "主题助词", partOfSpeech: "助词" },
      { korean: "이/가", chinese: "主格助词", partOfSpeech: "助词" },
      { korean: "도", chinese: "也", partOfSpeech: "助词" },
      { korean: "중국", chinese: "中国", partOfSpeech: "名词" },
      { korean: "고양이", chinese: "猫", partOfSpeech: "名词" },
      { korean: "강아지", chinese: "小狗", partOfSpeech: "名词" },
      { korean: "물", chinese: "水", partOfSpeech: "名词" },
      { korean: "밥", chinese: "饭", partOfSpeech: "名词" },
      { korean: "빵", chinese: "面包", partOfSpeech: "名词" },
      { korean: "사과", chinese: "苹果", partOfSpeech: "名词" },
      { korean: "바나나", chinese: "香蕉", partOfSpeech: "名词" },
      { korean: "커피", chinese: "咖啡", partOfSpeech: "名词" },
      { korean: "차", chinese: "茶", partOfSpeech: "名词" },
      { korean: "우유", chinese: "牛奶", partOfSpeech: "名词" },
      { korean: "꽃", chinese: "花", partOfSpeech: "名词" },
      { korean: "나무", chinese: "树", partOfSpeech: "名词" },
      { korean: "집", chinese: "家", partOfSpeech: "名词" },
      { korean: "학교", chinese: "学校", partOfSpeech: "名词" },
      { korean: "공원", chinese: "公园", partOfSpeech: "名词" },
      { korean: "크다", chinese: "大", partOfSpeech: "形容词" },
      { korean: "작다", chinese: "小", partOfSpeech: "形容词" },
      { korean: "좋다", chinese: "好", partOfSpeech: "形容词" },
      { korean: "나쁘다", chinese: "坏", partOfSpeech: "形容词" },
      { korean: "예쁘다", chinese: "漂亮", partOfSpeech: "形容词" },
      { korean: "맛있다", chinese: "好吃", partOfSpeech: "形容词" },
      { korean: "재미있다", chinese: "有趣", partOfSpeech: "形容词" },
      { korean: "바쁘다", chinese: "忙", partOfSpeech: "形容词" },
      { korean: "덥다", chinese: "热", partOfSpeech: "形容词" },
      { korean: "춥다", chinese: "冷", partOfSpeech: "形容词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "主题助词은/는",
        nameEn: "Topic Particle 은/는",
        structure: "名词 + 은/는",
        meaning: "标示句子的主题，收音后用은，元音后用는。",
        usage: "介绍已知信息、对比、强调。",
        examples: [
          { korean: "저는 학생이에요.", chinese: "我是学生。（主题：我）" },
          { korean: "이름은 왕밍이에요.", chinese: "名字是王明。（主题：名字）" },
          { korean: "나라는 중국이에요.", chinese: "国家是中国。（主题：国家）" },
        ],
        chineseTransfer: "类似中文的'……是……'句式中的主语，但韩语更强调'主题'。",
      },
      {
        name: "主格助词이/가",
        nameEn: "Subject Particle 이/가",
        structure: "名词 + 이/가",
        meaning: "标示句子的主语，收音后用이，元音后用가。",
        usage: "新信息、强调主语、回答'谁'的问题。",
        examples: [
          { korean: "이름이 뭐예요?", chinese: "名字是什么？（主语：名字）" },
          { korean: "나라가 어디예요?", chinese: "国家是哪里？（主语：国家）" },
          { korean: "선생님이 오셨어요.", chinese: "老师来了。（强调主语）" },
        ],
      },
      {
        name: "助词도",
        nameEn: "Particle 도 (also)",
        structure: "名词 + 도",
        meaning: "表示'也'，替代은/는或이/가。",
        usage: "不说'나는도'，直接用'나도'。",
        examples: [
          { korean: "저도 학생이에요.", chinese: "我也是学生。" },
          { korean: "중국 사람이에요. 저도 중국 사람이에요.", chinese: "是中国人。我也是中国人。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "은/는和이/가混用",
        correct: "은/는标示主题（已知），이/가标示主语（新信息）",
        reason: "两者功能不同，不能随意替换。",
      },
      {
        wrong: "说'나는도'",
        correct: "도替代은/는，直接说'나도'",
        reason: "도和其他助词不能同时使用。",
      },
      {
        wrong: "收音后用는",
        correct: "收音后用은，元音后用는",
        reason: "这是语音规律，为了发音顺畅。",
      },
    ],
    keyQuestions: [
      "은/는和이/가的主要区别是什么？",
      "什么时候用도？",
      "助词可以省略吗？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的助词。",
      instructionsEn: "Listen and choose the correct particle.",
      question: "저___ 학생이에요. 应该填什么？",
      options: ["은", "는", "이", "가"],
      answer: "는",
    },
    {
      type: "fill-in",
      instructions: "用은/는、이/가或도填空。",
      instructionsEn: "Fill in with 은/는, 이/가, or 도.",
      sentences: [
        { sentence: "저___ 학생이에요.", answer: "는", hint: "저无收音" },
        { sentence: "이름___ 뭐예요?", answer: "이", hint: "이름有收音" },
        { sentence: "저___ 중국 사람이에요.", answer: "도", hint: "表示'也'" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "제 이름은 왕밍이에요. 的意思是？",
      options: ["我的名字是王明。", "你是王明。", "王明是学生。", "我的名字是什么？"],
      answer: "我的名字是王明。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "助词分类",
        items: [
          "은/는：主题助词（已知信息）",
          "이/가：主格助词（新信息）",
          "도：也（替代은/는或이/가）",
        ],
      },
      {
        title: "助词选择",
        items: [
          "收音后：은/이",
          "元音后：는/가",
          "도直接加名词后",
        ],
      },
    ],
    mindMap: `助词系统
├─ 主题助词：은/는
│  ├─ 收音后：은
│  └─ 元音后：는
├─ 主格助词：이/가
│  ├─ 收音后：이
│  └─ 元音后：가
└─ 也：도
   └─ 替代은/는或이/가`,
    selfTest: [
      {
        question: "은/는的主要功能是什么？",
        options: ["标示主语", "标示主题", "表示'也'", "表示否定"],
        answer: "标示主题",
      },
      {
        question: "이름___ 뭐예요? 应该填什么？",
        options: ["은", "는", "이", "가"],
        answer: "이",
      },
      {
        question: "도可以和은/는一起使用吗？",
        options: ["可以", "不可以", "有时可以", "看情况"],
        answer: "不可以",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用은/는, 이/가, 도造句",
    instructionsEn: "Create sentences using topic/subject particles and 도",
    targetGrammar: "은/는, 이/가, 도",
    prompts: ["介绍你的身份", "说某样东西也在", "描述什么是什么"],
    sampleAnswers: ["저는 학생입니다.", "고양이도 좋아해요.", "이것이 사과입니다."],
    keyWords: ["은", "는", "이", "가", "도"],
  },
};

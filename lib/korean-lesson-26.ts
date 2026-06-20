import { KoreanLesson } from "./korean-types";

export const koreanLesson26Data: KoreanLesson = {
  info: {
    id: "lesson-26",
    moduleId: "06",
    number: 26,
    title: "-(으)시-敬语和高频特殊敬语词",
    titleEn: "-(으)시- Honorific & Special Honorific Vocabulary",
  },
  objectives: [
    "掌握-(으)시-敬语动词变形",
    "掌握高频特殊敬语词",
    "能正确使用敬语进行交流",
  ],
  warmup: {
    questions: [
      "韩语的敬语系统复杂吗？",
      "什么时候需要使用敬语？",
    ],
  },
  input: {
    dialogue: {
      title: "和长辈对话",
      lines: [
        { speaker: "A", korean: "어디에 가세요?", chinese: "去哪里？" },
        { speaker: "B", korean: "회사에 가요.", chinese: "去公司。" },
        { speaker: "A", korean: "무슨 일을 하세요?", chinese: "做什么工作？" },
        { speaker: "B", korean: "선생님이에요.", chinese: "是老师。" },
      ],
    },
    vocabulary: [
      { korean: "-(으)시-", chinese: "敬语词尾", partOfSpeech: "敬语词尾" },
      { korean: "말씀하다", chinese: "说（敬语）", partOfSpeech: "动词" },
      { korean: "드리다", chinese: "给（敬语）", partOfSpeech: "动词" },
      { korean: "계시다", chinese: "在（敬语）", partOfSpeech: "动词" },
      { korean: "잡수시다", chinese: "吃（敬语）", partOfSpeech: "动词" },
      { korean: "뵙다", chinese: "见（敬语）", partOfSpeech: "动词" },
      { korean: "여쭙다", chinese: "问（敬语）", partOfSpeech: "动词" },
      { korean: "주무시다", chinese: "睡（敬语）", partOfSpeech: "动词" },
      { korean: "데리다", chinese: "带（敬语）", partOfSpeech: "动词" },
      { korean: "모시다", chinese: "侍奉/陪同（敬语）", partOfSpeech: "动词" },
      { korean: "올리다", chinese: "呈上（敬语）", partOfSpeech: "动词" },
      { korean: "드리다", chinese: "奉献（敬语）", partOfSpeech: "动词" },
      { korean: "존댓말", chinese: "敬语/礼貌用语", partOfSpeech: "名词" },
      { korean: "반말", chinese: "平语/非敬语", partOfSpeech: "名词" },
      { korean: "어르신", chinese: "长辈/老人", partOfSpeech: "名词" },
      { korean: "선배", chinese: "前辈", partOfSpeech: "名词" },
      { korean: "후배", chinese: "后辈", partOfSpeech: "名词" },
      { korean: "부장님", chinese: "部长", partOfSpeech: "名词" },
      { korean: "과장님", chinese: "科长", partOfSpeech: "名词" },
      { korean: "사장님", chinese: "社长/老板", partOfSpeech: "名词" },
      { korean: "선생님", chinese: "老师", partOfSpeech: "名词" },
      { korean: "아버지", chinese: "父亲", partOfSpeech: "名词" },
      { korean: "어머니", chinese: "母亲", partOfSpeech: "名词" },
      { korean: "할아버지", chinese: "爷爷", partOfSpeech: "名词" },
      { korean: "할머니", chinese: "奶奶", partOfSpeech: "名词" },
      { korean: "댁", chinese: "家（敬语）", partOfSpeech: "名词" },
      { korean: "진지", chinese: "饭（敬语）", partOfSpeech: "名词" },
      { korean: "연세", chinese: "年龄（敬语）", partOfSpeech: "名词" },
      { korean: "성함", chinese: "名字（敬语）", partOfSpeech: "名词" },
      { korean: "말씀", chinese: "话（敬语）", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "-(으)시-敬语",
        nameEn: "-(으)시- Honorific",
        structure: "动词词干 + (으)시-",
        meaning: "表示对主语的尊敬。",
        usage: "收音后+으시，元音后+시。",
        examples: [
          { korean: "가다 → 가세요", chinese: "去（敬语）" },
          { korean: "먹다 → 드세요/잡수세요", chinese: "吃（敬语）" },
          { korean: "말하다 → 말씀하세요", chinese: "说（敬语）" },
          { korean: "있다 → 계세요", chinese: "在（敬语）" },
        ],
        chineseTransfer: "中文没有系统的敬语变形，韩语的敬语更复杂。",
      },
      {
        name: "特殊敬语词",
        nameEn: "Special Honorific Vocabulary",
        structure: "普通词 → 敬语词",
        meaning: "一些常用词有专门的敬语形式。",
        usage: "밥/진지, 집/댁, 나이/연세, 이름/성함。",
        examples: [
          { korean: "밥 → 진지", chinese: "饭（敬语）" },
          { korean: "집 → 댁", chinese: "家（敬语）" },
          { korean: "나이 → 연세", chinese: "年龄（敬语）" },
          { korean: "이름 → 성함", chinese: "名字（敬语）" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "对自己使用敬语",
        correct: "敬语只用于对方或第三方",
        reason: "韩语敬语是对他人的尊敬，不能用于自己。",
      },
      {
        wrong: "把普通词和敬语词混用",
        correct: "对长辈用敬语词，对朋友用普通词",
        reason: "敬语层级要一致。",
      },
    ],
    keyQuestions: [
      "-(으)시-的用法是什么？",
      "常用特殊敬语词有哪些？",
      "什么时候使用敬语？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的敬语形式。",
      instructionsEn: "Listen and choose the correct honorific form.",
      question: "听到的敬语形式是？",
      options: ["가세요", "가요", "가아요", "가었어요"],
      answer: "가세요",
    },
    {
      type: "matching",
      instructions: "将普通词与对应的敬语词配对。",
      instructionsEn: "Match plain words to honorific forms.",
      pairs: [
        { left: "밥", right: "진지" },
        { left: "집", right: "댁" },
        { left: "나이", right: "연세" },
        { left: "이름", right: "성함" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "어디에 가세요? 的意思是？",
      options: ["去哪里？", "去公司。", "做什么？", "是谁？"],
      answer: "去哪里？",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "-(으)시-敬语",
        items: [
          "动词词干 + (으)시-",
          "表示对主语的尊敬",
          "收音后用으시，元音后用시",
        ],
      },
      {
        title: "特殊敬语词",
        items: [
          "밥 → 진지",
          "집 →댁",
          "나이 → 연세",
          "이름 → 성함",
        ],
      },
    ],
    mindMap: `敬语系统
├─ -(으)시-敬语
│  ├─ 动词词干 + (으)시-
│  └─ 가다 → 가세요
└─ 特殊敬语词
   ├─ 밥 → 진지
   ├─ 집 → 댁
   ├─ 나이 → 연세
   └─ 이름 → 성함`,
    selfTest: [
      {
        question: "-(으)시-表示什么？",
        options: ["过去", "现在", "尊敬", "否定"],
        answer: "尊敬",
      },
      {
        question: "饭的敬语是？",
        options: ["밥", "진지", "음식", "식사"],
        answer: "진지",
      },
      {
        question: "对自己应该使用敬语吗？",
        options: ["应该", "不应该", "有时应该", "看情况"],
        answer: "不应该",
      },
    ],
  },
};

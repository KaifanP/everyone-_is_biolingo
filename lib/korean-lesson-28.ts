import { KoreanLesson } from "./korean-types";

export const koreanLesson28Data: KoreanLesson = {
  info: {
    id: "lesson-28",
    moduleId: "06",
    number: 28,
    title: "TOPIK告示、广告、排序、完形与主旨阅读",
    titleEn: "TOPIK Notices, Ads, Sequencing, Cloze & Main Idea",
  },
  objectives: [
    "掌握TOPIK阅读常见题型",
    "能读懂告示和广告",
    "能完成排序、完形和主旨题",
  ],
  warmup: {
    questions: [
      "TOPIK阅读有哪些常见题型？",
      "告示和广告的语言特点是什么？",
    ],
  },
  input: {
    dialogue: {
      title: "看告示",
      lines: [
        { speaker: "A", korean: "이 공지 봤어요?", chinese: "看到这个告示了吗？" },
        { speaker: "B", korean: "아니요, 뭐라고 쓰여 있어요?", chinese: "没有，写的什么？" },
        { speaker: "A", korean: "다음 주부터 도서관이 9시에 열려요.", chinese: "下周开始图书馆9点开门。" },
      ],
    },
    vocabulary: [
      { korean: "공지", chinese: "告示", partOfSpeech: "名词" },
      { korean: "도서관", chinese: "图书馆", partOfSpeech: "名词" },
      { korean: "열다", chinese: "开", partOfSpeech: "动词" },
      { korean: "닫다", chinese: "关", partOfSpeech: "动词" },
      { korean: "접수", chinese: "受理/报名", partOfSpeech: "名词" },
      { korean: "마감", chinese: "截止", partOfSpeech: "名词" },
      { korean: "모집", chinese: "招募", partOfSpeech: "名词" },
      { korean: "할인", chinese: "折扣", partOfSpeech: "名词" },
      { korean: "무료", chinese: "免费", partOfSpeech: "名词" },
      { korean: "유료", chinese: "收费", partOfSpeech: "名词" },
      { korean: "이용", chinese: "使用", partOfSpeech: "名词" },
      { korean: "안내", chinese: "指南/引导", partOfSpeech: "名词" },
      { korean: "주의", chinese: "注意", partOfSpeech: "名词" },
      { korean: "금지", chinese: "禁止", partOfSpeech: "名词" },
      { korean: "신청", chinese: "申请", partOfSpeech: "名词" },
      { korean: "등록", chinese: "登记/注册", partOfSpeech: "名词" },
      { korean: "발표", chinese: "发表/公布", partOfSpeech: "名词" },
      { korean: "행사", chinese: "活动", partOfSpeech: "名词" },
      { korean: "강연", chinese: "讲座", partOfSpeech: "名词" },
      { korean: "세미나", chinese: "研讨会", partOfSpeech: "名词" },
      { korean: "공모전", chinese: "征集比赛", partOfSpeech: "名词" },
      { korean: "먼저", chinese: "首先", partOfSpeech: "副词" },
      { korean: "그 다음", chinese: "然后", partOfSpeech: "副词" },
      { korean: "마지막", chinese: "最后", partOfSpeech: "名词" },
      { korean: "그러나", chinese: "但是", partOfSpeech: "连词" },
      { korean: "따라서", chinese: "因此", partOfSpeech: "连词" },
      { korean: "예를 들면", chinese: "例如", partOfSpeech: "副词" },
      { korean: "전체적으로", chinese: "总的来说", partOfSpeech: "副词" },
      { korean: "요약하면", chinese: "概括来说", partOfSpeech: "副词" },
      { korean: "문의", chinese: "咨询", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "告示阅读技巧",
        nameEn: "Notice Reading Tips",
        structure: "告示标题 + 内容 + 时间/地点",
        meaning: "告示通常包含主题、时间、地点和注意事项。",
        usage: "先看标题，再找关键信息。",
        examples: [
          { korean: "도서관 이용 안내", chinese: "图书馆使用指南" },
          { korean: "다음 주부터 9시에 열려요.", chinese: "下周开始9点开门。" },
        ],
      },
      {
        name: "广告阅读技巧",
        nameEn: "Ad Reading Tips",
        structure: "产品/服务 + 优点 + 价格/联系方式",
        meaning: "广告通常突出产品优点和促销信息。",
        usage: "注意价格、优惠和联系方式。",
        examples: [
          { korean: "신제품 출시!", chinese: "新品上市！" },
          { korean: "지금 주문하면 20% 할인!", chinese: "现在下单打8折！" },
        ],
      },
      {
        name: "排序题技巧",
        nameEn: "Sequencing Tips",
        structure: "找时间词或逻辑顺序",
        meaning: "排序题需要找到时间或逻辑线索。",
        usage: "注意먼저/그 다음/마지막等词。",
        examples: [
          { korean: "먼저 → 그 다음 → 마지막", chinese: "先→然后→最后" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "逐字阅读告示",
        correct: "先看标题，再找关键信息",
        reason: "时间有限，需要快速定位信息。",
      },
      {
        wrong: "忽略广告中的价格信息",
        correct: "价格是广告的核心信息",
        reason: "价格通常是考题重点。",
      },
    ],
    keyQuestions: [
      "告示阅读的技巧是什么？",
      "广告阅读需要注意什么？",
      "排序题的解题策略是什么？",
    ],
  },
  practice: [
    {
      type: "reading-choice",
      instructions: "阅读告示，回答问题。",
      instructionsEn: "Read the notice and answer.",
      passage: "도서관 이용 안내\n다음 주부터 도서관이 9시에 열려요.\n월요일~금요일: 오전 9시~오후 6시\n토요일: 오전 9시~오후 1시\n일요일: 쉽니다.",
      question: "토요일에 도서관은 몇 시에 닫아요?",
      options: ["오후 1시", "오후 6시", "오전 9시", " 쉽니다"],
      answer: "오후 1시",
    },
    {
      type: "reading-choice",
      instructions: "阅读广告，回答问题。",
      instructionsEn: "Read the ad and answer.",
      passage: "신제품 출시!\n지금 주문하면 20% 할인!\n전화: 02-1234-5678",
      question: "지금 주문하면 어떻게 해요?",
      options: ["20% 할인", "무료 배송", "사은품 증정", "포장 서비스"],
      answer: "20% 할인",
    },
    {
      type: "ordering",
      instructions: "将下列句子按正确顺序排列。",
      instructionsEn: "Put the sentences in correct order.",
      items: ["그 다음에 밥을 먹어요.", "먼저 일어나요.", "마지막에 학교에 가요."],
      correctOrder: ["먼저 일어나요.", "그 다음에 밥을 먹어요.", "마지막에 학교에 가요."],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "告示和广告",
        items: [
          "告示：主题+时间+地点",
          "广告：产品+优点+价格",
          "快速定位关键信息",
        ],
      },
      {
        title: "排序和完形",
        items: [
          "找时间词或逻辑顺序",
          "注意먼저/그 다음/마지막",
          "完形填空看上下文",
        ],
      },
    ],
    mindMap: `TOPIK阅读技巧
├─ 告示
│  ├─ 先看标题
│  └─ 找时间/地点
├─ 广告
│  ├─ 看产品优点
│  └─ 注意价格
├─ 排序题
│  ├─ 找时间词
│  └─ 먼저/그 다음/마지막
└─ 完形填空
   └─ 看上下文`,
    selfTest: [
      {
        question: "告示阅读的技巧是什么？",
        options: ["逐字阅读", "先看标题再找信息", "只看价格", "忽略时间"],
        answer: "先看标题再找信息",
      },
      {
        question: "广告中的核心信息是？",
        options: ["产品名称", "价格和优惠", "联系方式", "公司地址"],
        answer: "价格和优惠",
      },
      {
        question: "排序题的关键是？",
        options: ["找时间词", "找名词", "找动词", "找形容词"],
        answer: "找时间词",
      },
    ],
  },
};

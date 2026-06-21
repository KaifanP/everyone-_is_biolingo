import { KoreanLesson } from "./korean-types";

export const koreanLesson25Data: KoreanLesson = {
  info: {
    id: "lesson-25",
    moduleId: "05",
    number: 25,
    title: "动词与形容词定语形、人物和物品描述",
    titleEn: "Verb/Adjective Modifiers & Descriptions",
  },
  objectives: [
    "掌握动词和形容词的定语形（-는/-(으)ㄴ/-(으)ㄹ）",
    "能用定语形修饰名词",
    "能描述人物和物品的特征",
  ],
  warmup: {
    questions: [
      "韩语怎么修饰名词？",
      "动词和形容词的定语形有什么区别？",
    ],
  },
  input: {
    dialogue: {
      title: "描述人和物",
      lines: [
        { speaker: "A", korean: "어떤 사람이 좋아요?", chinese: "喜欢什么样的人？" },
        { speaker: "B", korean: "웃는 사람이 좋아요.", chinese: "喜欢笑的人。" },
        { speaker: "A", korean: "어떤 음식을 좋아해요?", chinese: "喜欢什么样的食物？" },
        { speaker: "B", korean: "매운 음식을 좋아해요.", chinese: "喜欢辣的食物。" },
      ],
    },
    vocabulary: [
      { korean: "-는", chinese: "正在……的（定语形）", partOfSpeech: "助词" },
      { korean: "-(으)ㄴ", chinese: "……的（过去定语形）", partOfSpeech: "助词" },
      { korean: "-(으)ㄹ", chinese: "……的（未来定语形）", partOfSpeech: "助词" },
      { korean: "웃다", chinese: "笑", partOfSpeech: "动词" },
      { korean: "맵다", chinese: "辣", partOfSpeech: "形容词" },
      { korean: "달다", chinese: "甜", partOfSpeech: "形容词" },
      { korean: "시다", chinese: "酸", partOfSpeech: "形容词" },
      { korean: "쓰다", chinese: "苦", partOfSpeech: "形容词" },
      { korean: "짜다", chinese: "咸", partOfSpeech: "形容词" },
      { korean: "맛있다", chinese: "好吃", partOfSpeech: "形容词" },
      { korean: "맛없다", chinese: "不好吃", partOfSpeech: "形容词" },
      { korean: "예쁘다", chinese: "漂亮", partOfSpeech: "形容词" },
      { korean: "못생기다", chinese: "丑", partOfSpeech: "形容词" },
      { korean: "키가 크다", chinese: "个子高", partOfSpeech: "形容词" },
      { korean: "키가 작다", chinese: "个子矮", partOfSpeech: "形容词" },
      { korean: "뚱뚱하다", chinese: "胖", partOfSpeech: "形容词" },
      { korean: "날씬하다", chinese: "瘦", partOfSpeech: "形容词" },
      { korean: "똑똑하다", chinese: "聪明", partOfSpeech: "形容词" },
      { korean: "친절하다", chinese: "亲切", partOfSpeech: "形容词" },
      { korean: "착하다", chinese: "善良", partOfSpeech: "形容词" },
      { korean: "성실하다", chinese: "诚实/勤勉", partOfSpeech: "形容词" },
      { korean: "부지런하다", chinese: "勤劳", partOfSpeech: "形容词" },
      { korean: "게으르다", chinese: "懒", partOfSpeech: "形容词" },
      { korean: "조용하다", chinese: "安静", partOfSpeech: "形容词" },
      { korean: "시끄럽다", chinese: "吵闹", partOfSpeech: "形容词" },
      { korean: "빠르다", chinese: "快", partOfSpeech: "形容词" },
      { korean: "느리다", chinese: "慢", partOfSpeech: "形容词" },
      { korean: "어렵다", chinese: "难", partOfSpeech: "形容词" },
      { korean: "쉽다", chinese: "容易", partOfSpeech: "形容词" },
      { korean: "편하다", chinese: "舒服", partOfSpeech: "形容词" },
      { korean: "불편하다", chinese: "不舒服", partOfSpeech: "形容词" },
      { korean: "신선하다", chinese: "新鲜", partOfSpeech: "形容词" },
      { korean: "뜨겁다", chinese: "烫/热", partOfSpeech: "形容词" },
      { korean: "차갑다", chinese: "凉/冷", partOfSpeech: "形容词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "动词定语形-는",
        nameEn: "Verb Modifier -는",
        structure: "动词词干 + 는",
        meaning: "表示'正在……的'，修饰名词。",
        usage: "用于现在进行的动作。",
        examples: [
          { korean: "웃는 사람", chinese: "正在笑的人" },
          { korean: "공부하는 학생", chinese: "正在学习的学生" },
          { korean: "먹는 음식", chinese: "正在吃的食物" },
        ],
        chineseTransfer: "类似中文的'正在……的'，但韩语放在名词前。",
      },
      {
        name: "形容词定语形-(으)ㄴ",
        nameEn: "Adjective Modifier -(으)ㄴ",
        structure: "形容词词干 + (으)ㄴ",
        meaning: "表示'……的'，修饰名词。",
        usage: "用于描述名词的特征。",
        examples: [
          { korean: "매운 음식", chinese: "辣的食物" },
          { korean: "예쁜 여자", chinese: "漂亮的女人" },
          { korean: "큰 집", chinese: "大的房子" },
        ],
      },
      {
        name: "过去定语形-(으)ㄴ",
        nameEn: "Past Modifier -(으)ㄴ",
        structure: "动词词干 + (으)ㄴ",
        meaning: "表示'做了……的'，修饰名词。",
        usage: "用于过去的动作。",
        examples: [
          { korean: "먹은 음식", chinese: "吃了的食物" },
          { korean: "간 사람", chinese: "去了的人" },
          { korean: "본 영화", chinese: "看了的电影" },
        ],
      },
      {
        name: "未来定语形-(으)ㄹ",
        nameEn: "Future Modifier -(으)ㄹ",
        structure: "动词词干 + (으)ㄹ",
        meaning: "表示'将要……的'，修饰名词。",
        usage: "用于未来的动作。",
        examples: [
          { korean: "먹을 음식", chinese: "将要吃的食物" },
          { korean: "갈 사람", chinese: "将要去的人" },
          { korean: "볼 영화", chinese: "将要看的电影" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把-는和-(으)ㄴ混用",
        correct: "-는是现在进行，-(으)ㄴ是过去或形容词",
        reason: "两者时态不同，不能随意替换。",
      },
      {
        wrong: "定语形放在名词后",
        correct: "定语形放在名词前",
        reason: "韩语是修饰语在前的语言。",
      },
    ],
    keyQuestions: [
      "动词和形容词的定语形有什么区别？",
      "什么时候用-는，什么时候用-(으)ㄴ？",
      "怎么描述人物特征？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的定语形。",
      instructionsEn: "Listen and choose the correct modifier.",
      question: "听到的定语形是？",
      options: ["웃는", "웃은", "웃을", "웃어"],
      answer: "웃는",
    },
    {
      type: "fill-in",
      instructions: "用正确的定语形填空。",
      instructionsEn: "Fill in with the correct modifier.",
      sentences: [
        { sentence: "___ 사람 (正在笑的人)", answer: "웃는", hint: "现在进行" },
        { sentence: "___ 음식 (辣的食物)", answer: "매운", hint: "形容词" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "웃는 사람 的意思是？",
      options: ["笑的人", "正在笑的人", "笑过的人", "将要笑的人"],
      answer: "正在笑的人",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "定语形分类",
        items: [
          "-는：现在进行（动词）",
          "-(으)ㄴ：过去/形容词",
          "-(으)ㄹ：未来（动词）",
        ],
      },
      {
        title: "描述人物和物品",
        items: [
          "웃는 사람：正在笑的人",
          "매운 음식：辣的食物",
          "定语形在名词前",
        ],
      },
    ],
    mindMap: `定语形
├─ 动词定语形
│  ├─ -는：现在进行
│  ├─ -(으)ㄴ：过去
│  └─ -(으)ㄹ：未来
├─ 形容词定语形
│  └─ -(으)ㄴ：特征
└─ 描述
   ├─ 웃는 사람
   └─ 매운 음식`,
    selfTest: [
      {
        question: "动词现在进行的定语形是？",
        options: ["-는", "-(으)ㄴ", "-(으)ㄹ", "-아/어요"],
        answer: "-는",
      },
      {
        question: "매운 음식的意思是？",
        options: ["吃的食物", "辣的食物", "将要吃的食物", "好吃的食物"],
        answer: "辣的食物",
      },
      {
        question: "定语形放在名词的什么位置？",
        options: ["前面", "后面", "上面", "下面"],
        answer: "前面",
      },
    ],
  },
  outputTask: {
    type: "sentence-creation",
    instructions: "用修饰语造句",
    instructionsEn: "Create sentences using modifiers",
    targetGrammar: "-(으)ㄴ/는/(으)ㄹ + 名词",
    prompts: ["描述你认识的人", "描述你去过的地方", "描述你想买的东西"],
    sampleAnswers: ["제가 아는 사람이에요.", "작년에 갔던 곳이에요.", "사고 싶은 책이에요."],
    keyWords: ["은", "는", "ㄴ", "ㄹ"],
  },
};

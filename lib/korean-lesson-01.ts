import { KoreanLesson } from "./korean-types";

export const koreanLesson01Data: KoreanLesson = {
  info: {
    id: "lesson-01",
    moduleId: "01",
    number: 1,
    title: "韩文字块与基础元音",
    titleEn: "Hangul Blocks & Basic Vowels",
  },
  objectives: [
    "理解韩文字块的组合原理（辅音+元音=音节）",
    "认读并书写10个基本元音：ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
    "掌握竖形元音写在辅音右侧、横形元音写在辅音下方的位置规则",
    "能拼读含占位辅音ㅇ的简单音节",
  ],
  warmup: {
    questions: [
      "你觉得韩文是象形文字还是拼音文字？",
      "一个韩文方块里最多能装几个字母符号？",
      "韩文字母是谁创制的？",
    ],
    culturalNote: "韩文字母（한글）由世宗大王于1443年创制，是世界上少数有明确创制者的文字系统。10月9日是韩文日（한글날）。",
  },
  input: {
    dialogue: {
      title: "第一次见面",
      lines: [
        { speaker: "A", korean: "안녕하세요.", chinese: "你好。", romanization: "Annyeonghaseyo." },
        { speaker: "B", korean: "안녕하세요. 저는 리나예요.", chinese: "你好。我是丽娜。", romanization: "Annyeonghaseyo. Jeoneun rinayeyo." },
        { speaker: "A", korean: "만나서 반가워요.", chinese: "认识你很高兴。", romanization: "Mannaseo bangawoyo." },
      ],
    },
    vocabulary: [
      { korean: "안녕하세요", chinese: "你好（敬语）", romanization: "annyeonghaseyo", partOfSpeech: "感叹词" },
      { korean: "저는", chinese: "我（谦称+主题助词）", romanization: "jeoneun", partOfSpeech: "代词+助词" },
      { korean: "이에요", chinese: "是（敬语）", romanization: "ieyo", partOfSpeech: "系词表达" },
      { korean: "만나서 반가워요", chinese: "认识你很高兴", romanization: "mannaseo bangawoyo", partOfSpeech: "惯用表达" },
    ],
  },
  grammar: {
    points: [
      {
        name: "韩文字块结构",
        nameEn: "Hangul Block Structure",
        structure: "初声（辅音）+ 中声（元音）= 音节块",
        meaning: "每个韩文方块由辅音和元音组合而成。最少2个符号（初声+中声），最多4个符号（初声+中声+终声）。",
        usage: "初声在左/上，中声在右/下；终声（收音）在最下方（后续学习）。\n\n书写顺序：先写辅音，再写元音。",
        examples: [
          { korean: "아", chinese: "ㅏ + ㅇ = a（ㅇ在初声位置不发音，纯占位）" },
          { korean: "오", chinese: "ㅗ + ㅇ = o" },
          { korean: "이", chinese: "ㅣ + ㅇ = i" },
          { korean: "우", chinese: "ㅜ + ㅇ = u" },
        ],
        chineseTransfer: "韩文是表音文字，类似汉语拼音；但每个音节写成一个方块，类似汉字的视觉单位。这和中文一个字=一个音节的规律相同。",
      },
      {
        name: "10个基本元音",
        nameEn: "10 Basic Vowels",
        structure: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
        meaning: "10个基本元音包括：ㅏ(a) ㅑ(ya) ㅓ(eo) ㅕ(yeo) ㅗ(o) ㅛ(yo) ㅜ(u) ㅠ(yu) ㅡ(eu) ㅣ(i)。",
        usage: "发音要领：\n• ㅏ：嘴张大，舌放低，短促地发a\n• ㅓ：嘴半开，舌中低，介于「哦」和「呃」之间\n• ㅗ：圆唇，舌后高\n• ㅜ：圆唇，舌后最高\n• ㅡ：展唇，舌中平\n• ㅣ：展唇，舌前高\n• ㅑ/ㅕ/ㅛ/ㅠ：分别在ㅏ/ㅓ/ㅗ/ㅜ前加入短促的y滑音",
        examples: [
          { korean: "아이", chinese: "孩子 (a-i)" },
          { korean: "오이", chinese: "黄瓜 (o-i)" },
          { korean: "우유", chinese: "牛奶 (u-yu)" },
          { korean: "야", chinese: "呀 (ya)" },
          { korean: "여우", chinese: "狐狸 (yeo-u)" },
        ],
        chineseTransfer: "ㅏ/ㅓ/ㅗ/ㅜ和中文的a/e/o/u接近但不完全相同；ㅑ/ㅕ/ㅛ/ㅠ要先发一个很短的y滑音。",
      },
      {
        name: "元音书写位置规则",
        nameEn: "Vowel Writing Position",
        structure: "竖形元音 → 写在辅音右边\n横形元音 → 写在辅音下方",
        meaning: "竖形元音：ㅏ ㅑ ㅓ ㅕ ㅣ\n横形元音：ㅗ ㅛ ㅜ ㅠ ㅡ",
        usage: "ㅏ/ㅑ/ㅓ/ㅕ/ㅣ写在辅音右边；ㅗ/ㅛ/ㅜ/ㅠ/ㅡ写在辅音下方。判断依据是元音字母的主干方向。",
        examples: [
          { korean: "가", chinese: "ㄱ(左) + ㅏ(右) = ga" },
          { korean: "고", chinese: "ㄱ(上) + ㅗ(下) = go" },
          { korean: "거", chinese: "ㄱ(左) + ㅓ(右) = geo" },
          { korean: "구", chinese: "ㄱ(上) + ㅜ(下) = gu" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把ㅏ读成中文的'啊'（带声调）",
        correct: "ㅏ是短促的a，没有声调起伏",
        reason: "韩语没有声调，元音长度比中文更均匀。",
      },
      {
        wrong: "把ㅓ读成中文的'哦'",
        correct: "ㅓ是介于'哦'和'呃'之间的音，嘴型比'哦'更扁",
        reason: "ㅓ的舌位比中文的'哦'更低、更靠前。",
      },
    ],
    keyQuestions: [
      "为什么ㅇ在音节开头不发音？",
      "元音ㅏ和ㅓ的主要区别是什么？",
      "横写元音和纵写元音的书写位置有什么不同？",
      "ㅑ/ㅕ/ㅛ/ㅠ与ㅏ/ㅓ/ㅗ/ㅜ相比多了什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择你听到的元音。",
      instructionsEn: "Listen and choose the vowel you hear.",
      question: "听到的是哪个元音？",
      options: ["ㅏ", "ㅓ", "ㅗ", "ㅜ"],
      answer: "ㅏ",
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的读音。",
      instructionsEn: "Choose the correct reading.",
      question: "아이 的意思是？",
      options: ["孩子", "黄瓜", "牛奶", "医生"],
      answer: "孩子",
    },
    {
      type: "matching",
      instructions: "将韩文元音与对应的罗马音配对。",
      instructionsEn: "Match vowels to romanization.",
      pairs: [
        { left: "ㅏ", right: "a" },
        { left: "ㅑ", right: "ya" },
        { left: "ㅓ", right: "eo" },
        { left: "ㅕ", right: "yeo" },
        { left: "ㅗ", right: "o" },
        { left: "ㅛ", right: "yo" },
        { left: "ㅜ", right: "u" },
        { left: "ㅠ", right: "yu" },
        { left: "ㅡ", right: "eu" },
        { left: "ㅣ", right: "i" },
      ],
    },
    {
      type: "fill-in",
      instructions: "写出下列音节的罗马音。",
      instructionsEn: "Write the romanization of the following syllables.",
      sentences: [
        { sentence: "아 = ?", answer: "a", hint: "ㅏ + ㅇ" },
        { sentence: "오 = ?", answer: "o", hint: "ㅗ + ㅇ" },
        { sentence: "이 = ?", answer: "i", hint: "ㅣ + ㅇ" },
        { sentence: "우 = ?", answer: "u", hint: "ㅜ + ㅇ" },
        { sentence: "여 = ?", answer: "yeo", hint: "ㅕ + ㅇ" },
      ],
    },
    {
      type: "dictation",
      instructions: "听录音，写出你听到的韩文。",
      instructionsEn: "Listen and write the Korean you hear.",
      sentences: [
        { sentence: "听到的是哪个音节？", answer: "아이", hint: "意思是'孩子'" },
        { sentence: "听到的是哪个音节？", answer: "오이", hint: "意思是'黄瓜'" },
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "韩文字块原理",
        items: [
          "辅音（初声）+ 元音（中声）= 一个音节块",
          "每个方块最多4个符号（初声+中声+终声/收音）",
          "ㅇ在初声位置不发音，纯占位用",
          "书写顺序：先辅音后元音",
        ],
      },
      {
        title: "10个基本元音",
        items: [
          "基本元音：ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
          "竖形元音（ㅏㅑㅓㅕㅣ）写在辅音右边",
          "横形元音（ㅗㅛㅜㅠㅡ）写在辅音下方",
          "注意ㅓ和ㅗ、ㅕ和ㅛ的区分",
        ],
      },
    ],
    mindMap: `韩文字块
├─ 初声（辅音）: ㅇ(占位) / ㄱ ㄴ ㄷ ...
├─ 中声（元音）
│  ├─ 竖形: ㅏ ㅑ ㅓ ㅕ ㅣ → 右边
│  └─ 横形: ㅗ ㅛ ㅜ ㅠ ㅡ → 下方
└─ 终声（收音）: 后续学习`,
    selfTest: [
      {
        question: "韩文一个音节块最少由几个符号组成？",
        options: ["1个", "2个", "3个", "4个"],
        answer: "2个",
      },
      {
        question: "아이 的意思是？",
        options: ["黄瓜", "孩子", "牛奶", "医生"],
        answer: "孩子",
      },
      {
        question: "哪个元音的发音最接近中文的'衣'？",
        options: ["ㅏ", "ㅓ", "ㅣ", "ㅡ"],
        answer: "ㅣ",
      },
      {
        question: "ㅇ在音节开头的作用是什么？",
        options: ["发ng音", "不发音，占位", "发m音", "发h音"],
        answer: "不发音，占位",
      },
      {
        question: "竖形元音应该写在辅音的哪个位置？",
        options: ["左边", "右边", "上边", "下边"],
        answer: "右边",
      },
    ],
  },
};

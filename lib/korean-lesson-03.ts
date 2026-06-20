import { KoreanLesson } from "./korean-types";

export const koreanLesson03Data: KoreanLesson = {
  info: {
    id: "lesson-03",
    moduleId: "01",
    number: 3,
    title: "复合元音、送气音和紧音",
    titleEn: "Compound Vowels, Aspirated & Tense Consonants",
  },
  objectives: [
    "掌握11个复合元音：ㅐ ㅒ ㅔ ㅖ ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ",
    "掌握4个送气音：ㅋ ㅌ ㅍ ㅊ，并区分摩擦音ㅎ",
    "掌握5个紧音：ㄲ ㄸ ㅃ ㅆ ㅉ",
    "能区分松音、送气音和紧音的发音差异",
  ],
  warmup: {
    questions: [
      "中文有送气和不送气的区别，韩语有几种辅音类型？",
      "紧音和松音的主要区别是什么？",
      "复合元音是两个元音简单相加吗？",
    ],
  },
  input: {
    dialogue: {
      title: "在咖啡店",
      lines: [
        { speaker: "顾客", korean: "아메리카노 하나 주세요.", chinese: "请给我一杯美式咖啡。", romanization: "Americano hana juseyo." },
        { speaker: "店员", korean: "따뜻한 거요? 차가운 거요?", chinese: "热的还是冰的？", romanization: "Ttatteushan geoyeo? Chagaun geoyeo?" },
        { speaker: "顾客", korean: "차가운 거로 주세요.", chinese: "请给我冰的。", romanization: "Chagaun georo juseyo." },
      ],
    },
    vocabulary: [
      { korean: "아메리카노", chinese: "美式咖啡", romanization: "amerikano", partOfSpeech: "名词" },
      { korean: "하나", chinese: "一个", romanization: "hana", partOfSpeech: "数词" },
      { korean: "주세요", chinese: "请给我", romanization: "juseyo", partOfSpeech: "补助动词" },
      { korean: "따뜻하다", chinese: "热的", romanization: "ttatteushada", partOfSpeech: "形容词" },
      { korean: "차갑다", chinese: "冷的", romanization: "chagapda", partOfSpeech: "形容词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "11个复合元音",
        nameEn: "11 Compound Vowels",
        structure: "ㅐ ㅒ ㅔ ㅖ ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ",
        meaning: "本课的11个复合元音为：ㅐ(ae)、ㅒ(yae)、ㅔ(e)、ㅖ(ye)、ㅘ(wa)、ㅙ(wae)、ㅚ(oe/we)、ㅝ(wo)、ㅞ(we)、ㅟ(wi)、ㅢ(eui)。",
        usage: "发音要领：\n• ㅐ/ㅔ在现代标准口语中常不区分\n• ㅒ/ㅖ分别带y滑音\n• ㅘ/ㅙ/ㅚ与ㅝ/ㅞ/ㅟ带w滑音\n• ㅢ的实际读音随位置和语法功能变化",
        examples: [
          { korean: "애", chinese: "ㅐ + ㅇ = ae" },
          { korean: "예", chinese: "ㅖ + ㅇ = ye" },
          { korean: "와", chinese: "ㅘ + ㅇ = wa（哇）" },
          { korean: "왜", chinese: "ㅙ + ㅇ = wae（外）" },
          { korean: "워", chinese: "ㅝ + ㅇ = wo（窝）" },
          { korean: "위", chinese: "ㅟ + ㅇ = wi（威）" },
          { korean: "의", chinese: "ㅢ + ㅇ = eui（呃衣）" },
        ],
        chineseTransfer: "复合元音常包含y或w滑音，但不要直接套用汉语拼音；ㅢ的实际读音还会随词中位置和助词用法变化。",
      },
      {
        name: "送气音",
        nameEn: "Aspirated Consonants",
        structure: "ㅋ ㅌ ㅍ ㅊ",
        meaning: "4个送气音（격음）发音时有明显气流送出：\n• ㅋ(kh) = ㄱ + 强气流\n• ㅌ(th) = ㄷ + 强气流\n• ㅍ(ph) = ㅂ + 强气流\n• ㅊ(ch) = ㅈ + 强气流\n\nㅎ是喉部摩擦音，不计入这组对应的送气音。",
        usage: "发音方法：\n• ㅋ：类似英文k，有强气流\n• ㅌ：类似英文t，有强气流\n• ㅍ：类似英文p，有强气流\n• ㅊ：类似英文ch，有强气流\n\n和松音的区别：把手掌放在嘴前，送气音能感到明显气流，松音几乎没有。",
        examples: [
          { korean: "카", chinese: "ㅋ + ㅏ = ka（强送气）" },
          { korean: "타", chinese: "ㅌ + ㅏ = ta（强送气）" },
          { korean: "차", chinese: "ㅊ + ㅏ = cha（强送气）" },
          { korean: "커피", chinese: "keo-pi（咖啡）" },
          { korean: "토마토", chinese: "to-ma-to（番茄）" },
        ],
        chineseTransfer: "送气音类似中文的k、t、p、ch，但气流更强。中文的k/t/p是送气音，g/d/b是不送气音；韩语则有三类：松音、送气音、紧音。",
      },
      {
        name: "紧音",
        nameEn: "Tense Consonants",
        structure: "ㄲ ㄸ ㅃ ㅆ ㅉ",
        meaning: "紧音（경음）发音时喉部紧缩：\n• ㄲ(kk) = ㄱ的紧音\n• ㄸ(tt) = ㄷ的紧音\n• ㅃ(pp) = ㅂ的紧音\n• ㅆ(ss) = ㅅ的紧音\n• ㅉ(jj) = ㅈ的紧音",
        usage: "发音方法：\n• 喉部肌肉收紧，声带不振动\n• 不送气（气流很弱）\n• 类似用力挤喉时发出的音\n\n和松音/送气音对比：\n• ㄱ（松）→ ㅋ（送气）→ ㄲ（紧）\n• ㄷ（松）→ ㅌ（送气）→ ㄸ（紧）\n• ㅂ（松）→ ㅍ（送气）→ ㅃ（紧）",
        examples: [
          { korean: "까", chinese: "ㄲ + ㅏ = kka" },
          { korean: "따", chinese: "ㄸ + ㅏ = tta" },
          { korean: "싸", chinese: "ㅆ + ㅏ = ssa" },
          { korean: "짜다", chinese: "짜 = 咸的" },
          { korean: "빵", chinese: "빵 = 面包" },
        ],
        chineseTransfer: "紧音在中文里没有对应音，需要刻意收紧喉部肌肉。可以用发中文上声（第三声）时喉部紧缩的感觉来体会。",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把ㅋ发成ㄱ",
        correct: "ㅋ有强气流，ㄱ几乎没有气流",
        reason: "送气音和松音的区别在于气流强度。",
      },
      {
        wrong: "把ㄲ发成ㄱ或ㅋ",
        correct: "ㄲ喉部紧缩，不送气，声带不振动",
        reason: "紧音需要肌肉紧张，和松音、送气音都不同。",
      },
      {
        wrong: "把ㅘ发成ㅗ+ㅏ两个音",
        correct: "ㅘ是一个复合元音，发音为wa，一个音",
        reason: "ㅘ是整体认读，不是两个元音的简单拼合。",
      },
      {
        wrong: "把ㅢ发成'衣'",
        correct: "ㅢ先发ㅡ再滑向ㅣ，类似'呃衣'连读",
        reason: "ㅢ是复合元音，不是简单的ㅣ。",
      },
    ],
    keyQuestions: [
      "松音、送气音、紧音三者的主要区别是什么？",
      "如何快速区分ㄱ/ㅋ/ㄲ的发音？",
      "复合元音ㅘ和ㅗ+ㅏ有什么区别？",
      "怎么用手掌测试送气音？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择你听到的辅音类型。",
      instructionsEn: "Listen and choose the consonant type.",
      question: "听到的是哪种类型的辅音？",
      options: ["松音ㄱ", "送气音ㅋ", "紧音ㄲ", "鼻音ㄴ"],
      answer: "送气音ㅋ",
    },
    {
      type: "matching",
      instructions: "将送气音与对应的松音配对。",
      instructionsEn: "Match aspirated consonants to their lax counterparts.",
      pairs: [
        { left: "ㅋ", right: "ㄱ" },
        { left: "ㅌ", right: "ㄷ" },
        { left: "ㅍ", right: "ㅂ" },
        { left: "ㅊ", right: "ㅈ" },
      ],
    },
    {
      type: "matching",
      instructions: "将紧音与对应的松音配对。",
      instructionsEn: "Match tense consonants to their lax counterparts.",
      pairs: [
        { left: "ㄲ", right: "ㄱ" },
        { left: "ㄸ", right: "ㄷ" },
        { left: "ㅃ", right: "ㅂ" },
        { left: "ㅆ", right: "ㅅ" },
        { left: "ㅉ", right: "ㅈ" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的读音。",
      instructionsEn: "Choose the correct reading.",
      question: "차가운 的意思是？",
      options: ["热的", "冷的", "温的", "凉的"],
      answer: "冷的",
    },
    {
      type: "fill-in",
      instructions: "写出下列复合元音的罗马音。",
      instructionsEn: "Write the romanization of the following compound vowels.",
      sentences: [
        { sentence: "야 = ?", answer: "ya", hint: "y + ㅏ" },
        { sentence: "왜 = ?", answer: "wae", hint: "w + ㅐ" },
        { sentence: "위 = ?", answer: "wi", hint: "w + ㅣ" },
        { sentence: "의 = ?", answer: "eui", hint: "ㅡ + ㅣ" },
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "三类辅音对比",
        items: [
          "松音：ㄱ ㄷ ㅂ ㅅ ㅈ（气流弱，声带微振）",
          "送气音：ㅋ ㅌ ㅍ ㅊ（强气流）",
          "紧音：ㄲ ㄸ ㅃ ㅆ ㅉ（喉部紧缩，无气流）",
          "测试方法：手掌放嘴前，送气音有明显气流",
        ],
      },
      {
        title: "11个复合元音",
        items: [
          "+y系列：ㅑ ㅕ ㅛ ㅠ ㅒ ㅖ（6个）",
          "+w系列：ㅘ ㅙ ㅝ ㅞ（4个）",
          "特殊：ㅢ = ㅡ + ㅣ（1个）",
          "整体认读，不拆分",
        ],
      },
    ],
    mindMap: `辅音分类
├─ 松音: ㄱ ㄷ ㅂ ㅅ ㅈ
├─ 送气音: ㅋ ㅌ ㅍ ㅊ
├─ 紧音: ㄲ ㄸ ㅃ ㅆ ㅉ
└─ 鼻音/闪音: ㄴ ㅁ ㄹ ㅎ
复合元音（11个）
├─ +y: ㅑ ㅕ ㅛ ㅠ ㅒ ㅖ
├─ +w: ㅘ ㅙ ㅝ ㅞ
└─ 特殊: ㅢ(eui)`,
    selfTest: [
      {
        question: "ㅋ属于哪种类型的辅音？",
        options: ["松音", "送气音", "紧音", "鼻音"],
        answer: "送气音",
      },
      {
        question: "ㄲ的发音特点是？",
        options: ["强气流", "喉部紧缩，不送气", "声带振动", "鼻音"],
        answer: "喉部紧缩，不送气",
      },
      {
        question: "ㅘ的正确读音是？",
        options: ["o-a", "wa", "wo", "ao"],
        answer: "wa",
      },
      {
        question: "韩语辅音有几类？",
        options: ["2类", "3类", "4类", "5类"],
        answer: "3类（松音、送气音、紧音）",
      },
      {
        question: "ㅢ的正确读法是？",
        options: ["衣", "呃衣连读", "外", "威"],
        answer: "呃衣连读",
      },
    ],
  },
};

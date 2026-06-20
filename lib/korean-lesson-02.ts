import { KoreanLesson } from "./korean-types";

export const koreanLesson02Data: KoreanLesson = {
  info: {
    id: "lesson-02",
    moduleId: "01",
    number: 2,
    title: "基础辅音与音节拼合",
    titleEn: "Basic Consonants & Syllable Blending",
  },
  objectives: [
    "认读并书写10个基础辅音：ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ",
    "掌握辅音与元音的拼合规则（横写/纵写）",
    "理解松音的发音特点（介于清浊之间）",
    "能拼读简单韩语音节和单词",
  ],
  warmup: {
    questions: [
      "韩语的ㄱ听起来像中文的'g'还是'k'？",
      "韩语辅音有几类发音方式？",
      "ㄱ在词首和词尾的发音一样吗？",
    ],
  },
  input: {
    dialogue: {
      title: "自我介绍",
      lines: [
        { speaker: "A", korean: "이름이 뭐예요?", chinese: "名字是什么？", romanization: "Ireumi mwoyeyo?" },
        { speaker: "B", korean: "저는 마이클이에요.", chinese: "我是迈克尔。", romanization: "Jeoneun maikeullieyo." },
        { speaker: "A", korean: "어느 나라 사람이에요?", chinese: "是哪国人？", romanization: "Eoneu nara saramieyo?" },
        { speaker: "B", korean: "미국 사람이에요.", chinese: "是美国人。", romanization: "Miguk saramieyo." },
      ],
    },
    vocabulary: [
      { korean: "이름", chinese: "名字", romanization: "ireum", partOfSpeech: "名词" },
      { korean: "뭐", chinese: "什么", romanization: "mwo", partOfSpeech: "代词" },
      { korean: "어느", chinese: "哪个", romanization: "eoneu", partOfSpeech: "冠词" },
      { korean: "나라", chinese: "国家", romanization: "nara", partOfSpeech: "名词" },
      { korean: "사람", chinese: "人", romanization: "saram", partOfSpeech: "名词" },
      { korean: "미국", chinese: "美国", romanization: "miguk", partOfSpeech: "名词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "10个基础辅音",
        nameEn: "10 Basic Consonants",
        structure: "ㄱ(g/k) ㄴ(n) ㄷ(d/t) ㄹ(r/l) ㅁ(m) ㅂ(b/p) ㅅ(s) ㅇ(ng/∅) ㅈ(j) ㅎ(h)",
        meaning: "基础辅音又称「松音」（평달음），发音时喉部放松，气流较弱。\n\nㄱ是松音，介于g和k之间\nㄷ是松音，介于d和t之间\nㅂ是松音，介于b和p之间\nㅅ是松音，类似s但舌尖更靠前\nㅈ是松音，介于j和ch之间\nㅎ是松音，气流弱于英语h",
        usage: "发音规律：\n• ㄱ/ㄷ/ㅂ在词首通常为清音，送气弱于ㅋ/ㅌ/ㅍ\n• 在元音之间常发生浊化，听起来更接近g/d/b\n• 词尾按收音规则读作[k̚]/[t̚]/[p̚]\n• ㅇ在初声不发音，在终声发[ng]\n• ㄹ在元音间多为闪音，收音位置多为边音[l]",
        examples: [
          { korean: "가", chinese: "ㄱ + ㅏ = ga" },
          { korean: "나", chinese: "ㄴ + ㅏ = na" },
          { korean: "다", chinese: "ㄷ + ㅏ = da" },
          { korean: "라", chinese: "ㄹ + ㅏ = ra" },
          { korean: "마", chinese: "ㅁ + ㅏ = ma" },
          { korean: "바", chinese: "ㅂ + ㅏ = ba" },
          { korean: "사", chinese: "ㅅ + ㅏ = sa" },
          { korean: "아", chinese: "ㅇ + ㅏ = a" },
          { korean: "자", chinese: "ㅈ + ㅏ = ja" },
          { korean: "하", chinese: "ㅎ + ㅏ = ha" },
        ],
        chineseTransfer: "韩语的ㄱ/ㄷ/ㅂ比中文的g/d/b更松，比k/t/p更浊，需要多听模仿。ㄹ不是中文的l或r，而是弹舌音。",
      },
      {
        name: "音节拼合规则",
        nameEn: "Syllable Blending Rules",
        structure: "辅音在左/上 + 元音在右/下",
        meaning: "拼合方式取决于元音类型：\n• 横写元音（ㅏㅓㅐㅔ）：辅音在左，元音在右\n• 纵写元音（ㅗㅜㅡㅣ）：辅音在上，元音在下",
        usage: "拼读方法：先发辅音，立刻滑入元音，形成一个完整音节。不要在辅音后加元音（如ㄱ不要读成'哥'）。",
        examples: [
          { korean: "가나다", chinese: "ga-na-da（三个音节）" },
          { korean: "모모", chinese: "mo-mo" },
          { korean: "비누", chinese: "bi-nu（肥皂）" },
          { korean: "사과", chinese: "sa-gwa（苹果）" },
          { korean: "주스", chinese: "ju-seu（果汁）" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把ㄱ发成中文的'哥'",
        correct: "ㄱ是松音，比'哥'的g更轻，声带振动更弱",
        reason: "中文g是不送气清音，韩语ㄱ是松音，两者不同。",
      },
      {
        wrong: "把ㄹ发成中文的'了'",
        correct: "ㄹ词首发r（闪音，舌尖弹一下上颚），词尾发l（边音）",
        reason: "ㄹ不是中文的l或r，而是弹舌音。",
      },
      {
        wrong: "把ㅈ发成中文的'鸡'",
        correct: "ㅈ是松音，介于j和ch之间，比'鸡'的j更轻",
        reason: "中文j是不送气清音，韩语ㅈ是松音。",
      },
      {
        wrong: "把ㅅ发成中文的'思'",
        correct: "ㅅ是松音s，舌尖比中文的s更靠前，接近齿音",
        reason: "韩语ㅅ的舌位比中文的s更接近牙齿。",
      },
    ],
    keyQuestions: [
      "ㄱ在词首和词尾的发音有何不同？",
      "横向元音和纵向元音的书写位置有什么区别？",
      "为什么ㄹ有时像r，有时像l？",
      "ㅇ在初声和终声位置的发音有什么不同？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择你听到的辅音。",
      instructionsEn: "Listen and choose the consonant you hear.",
      question: "听到的是哪个辅音？",
      options: ["ㄱ", "ㄴ", "ㄷ", "ㅁ"],
      answer: "ㄱ",
    },
    {
      type: "matching",
      instructions: "将韩文辅音与对应的罗马音配对。",
      instructionsEn: "Match consonants to romanization.",
      pairs: [
        { left: "ㄱ", right: "g/k" },
        { left: "ㄴ", right: "n" },
        { left: "ㄷ", right: "d/t" },
        { left: "ㄹ", right: "r/l" },
        { left: "ㅁ", right: "m" },
        { left: "ㅂ", right: "b/p" },
        { left: "ㅅ", right: "s" },
        { left: "ㅇ", right: "∅/ng" },
        { left: "ㅈ", right: "j" },
        { left: "ㅎ", right: "h" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的读音。",
      instructionsEn: "Choose the correct reading.",
      question: "사람 的意思是？",
      options: ["名字", "国家", "人", "什么"],
      answer: "人",
    },
    {
      type: "fill-in",
      instructions: "写出下列音节的辅音。",
      instructionsEn: "Write the consonant of the following syllables.",
      sentences: [
        { sentence: "가 = ? + ㅏ", answer: "ㄱ", hint: "松音g/k" },
        { sentence: "나 = ? + ㅏ", answer: "ㄴ", hint: "鼻音n" },
        { sentence: "자 = ? + ㅏ", answer: "ㅈ", hint: "松音j" },
        { sentence: "하 = ? + ㅏ", answer: "ㅎ", hint: "松音h" },
      ],
    },
    {
      type: "dictation",
      instructions: "听录音，写出你听到的韩文。",
      instructionsEn: "Listen and write the Korean you hear.",
      sentences: [
        { sentence: "听到的是哪个单词？", answer: "나라", hint: "意思是'国家'" },
        { sentence: "听到的是哪个单词？", answer: "사람", hint: "意思是'人'" },
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "10个基础辅音（松音）",
        items: [
          "ㄱ(g/k) ㄴ(n) ㄷ(d/t) ㄹ(r/l) ㅁ(m) ㅂ(b/p) ㅅ(s) ㅇ(∅/ng) ㅈ(j) ㅎ(h)",
          "松音发音时喉部放松，气流较弱",
          "ㄱ/ㄷ/ㅂ词首通常为弱送气清音，元音之间常浊化",
          "ㄹ词首发r（闪音），词尾发l（边音）",
          "ㅇ在初声不发音，在终声发[ng]",
        ],
      },
      {
        title: "音节拼合",
        items: [
          "辅音+元音=一个音节块",
          "横写元音（ㅏㅓㅐㅔ）→ 写在辅音右边",
          "纵向元音（ㅗㅜㅡㅣ）→ 写在辅音下方",
          "先辅音后元音，快速滑入",
        ],
      },
    ],
    mindMap: `基础辅音（松音）
├─ 爆破音: ㄱ(g/k) ㄷ(d/t) ㅂ(b/p)
├─ 摩擦音: ㅅ(s) ㅎ(h)
├─ 塞擦音: ㅈ(j)
├─ 鼻音: ㄴ(n) ㅁ(m)
├─ 闪音: ㄹ(r/l)
└─ 占位/鼻音: ㅇ(∅/ng)
音节拼合
├─ 横写元音: ㅏ ㅓ ㅐ ㅔ → 右边
└─ 纵向元音: ㅗ ㅜ ㅡ ㅣ → 下方`,
    selfTest: [
      {
        question: "ㄱ的发音最接近中文的哪个音？",
        options: ["g", "k", "介于g和k之间", "h"],
        answer: "介于g和k之间",
      },
      {
        question: "ㄹ在词首发什么音？",
        options: ["l", "r", "闪音（类似r）", "鼻音"],
        answer: "闪音（类似r）",
      },
      {
        question: "横向元音应该写在辅音的哪边？",
        options: ["左边", "右边", "上边", "下边"],
        answer: "右边",
      },
      {
        question: "ㅇ在终声位置发什么音？",
        options: ["不发音", "ng", "m", "h"],
        answer: "ng",
      },
    ],
  },
};

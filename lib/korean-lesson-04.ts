import { KoreanLesson } from "./korean-types";

export const koreanLesson04Data: KoreanLesson = {
  info: {
    id: "lesson-04",
    moduleId: "01",
    number: 4,
    title: "收音（终声）及七种代表音",
    titleEn: "Final Consonants (받침) & 7 Representative Sounds",
  },
  objectives: [
    "理解收音（终声/받침）的概念和书写位置",
    "掌握7种收音代表音及其对应的收音字母",
    "能正确发出带收音的音节",
    "理解双收音（겹받침）的概念",
  ],
  warmup: {
    questions: [
      "中文有韵尾，韩语的收音和韵尾有什么异同？",
      "一个韩语音节最多能有几个收音符号？",
      "为什么不同的收音字母只对应7种发音？",
    ],
  },
  input: {
    dialogue: {
      title: "问路",
      lines: [
        { speaker: "A", korean: "실례합니다. 서울역이 어디예요?", chinese: "打扰一下。首尔站在哪里？", romanization: "Sillyehamnida. Seouryeogi eodiyeyo?" },
        { speaker: "B", korean: "직진으로 가세요.", chinese: "请直走。", romanization: "Jikjineuro gaseyo." },
        { speaker: "A", korean: "감사합니다.", chinese: "谢谢。", romanization: "Gamsahamnida." },
      ],
    },
    vocabulary: [
      { korean: "실례합니다", chinese: "打扰一下", romanization: "sillyehamnida", partOfSpeech: "惯用表达" },
      { korean: "서울역", chinese: "首尔站", romanization: "seoulyeok", partOfSpeech: "名词" },
      { korean: "어디", chinese: "哪里", romanization: "eodi", partOfSpeech: "代词" },
      { korean: "직진으로", chinese: "直走", romanization: "jikjineuro", partOfSpeech: "副词" },
      { korean: "감사합니다", chinese: "谢谢（敬语）", romanization: "gamsahamnida", partOfSpeech: "惯用表达" },
    ],
  },
  grammar: {
    points: [
      {
        name: "收音概念",
        nameEn: "Final Consonant (받침) Concept",
        structure: "音节块下方的辅音 = 收音（终声/받침）",
        meaning: "收音是音节末尾的辅音，决定音节的'闭合'方式。\n\n有收音的音节：闭音节（如밥、국）\n无收音的音节：开音节（如바、구）",
        usage: "书写位置：收音写在音节块的下方。\n\n有收音的音节比没有收音的音节更'重'、更短促。\n\n收音不释放气流：\n• 收音ㄱ：舌根抵住软腭，不释放\n• 收音ㄷ：舌尖抵住上齿龈，不释放\n• 收音ㅂ：双唇闭合，不释放",
        examples: [
          { korean: "밥", chinese: "饭（有收音ㅂ）" },
          { korean: "바", chinese: "场地（无收音）" },
          { korean: "국", chinese: "汤（有收音ㄱ）" },
          { korean: "구", chinese: "九（无收音）" },
          { korean: "꽃", chinese: "花（有收音ㅊ→ㄷ类）" },
        ],
        chineseTransfer: "类似汉语的韵尾n/ng，但韩语收音有7种实际发音，种类更多。",
      },
      {
        name: "7种收音代表音",
        nameEn: "7 Representative Final Sounds",
        structure: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ",
        meaning: "所有收音字母都归入这7种实际发音：\n\nㄱ类收音 → [k]：ㄱ ㅋ ㄲ ㄳ ㄺ\nㄴ类收音 → [n]：ㄴ ㄵ ㄶ\nㄷ类收音 → [t]：ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ\nㄹ类收音 → [l]：ㄹ ㄻ ㄼ ㅀ\nㅁ类收音 → [m]：ㅁ\nㅂ类收音 → [p]：ㅂ ㅍ ㄿ ㅄ\nㅇ类收音 → [ng]：ㅇ",
        usage: "发音要点：\n• ㄱ类：舌根抵软腭，不释放，类似'k'的口型\n• ㄴ类：舌尖抵上齿龈，鼻音\n• ㄷ类：舌尖抵上齿龈，不释放，类似't'的口型\n• ㄹ类：舌尖抵上齿龈，边音\n• ㅁ类：双唇闭合，鼻音\n• ㅂ类：双唇闭合，不释放，类似'p'的口型\n• ㅇ类：舌根抵软腭，鼻音[ng]",
        examples: [
          { korean: "읽", chinese: "读（ㄱ类收音→[k]）" },
          { korean: "앉", chinese: "坐（ㄴ类收音→[n]）" },
          { korean: "닭", chinese: "鸡（ㄱ类收音→[k]）" },
          { korean: "삶", chinese: "生活（ㄹ类收音→[l]）" },
          { korean: "없", chinese: "没有（ㅂ类收音→[p]）" },
        ],
        chineseTransfer: "中文韵尾只有n和ng两种，韩语收音有7种。韩语收音都不释放气流，这是和中文韵尾最大的区别。",
      },
      {
        name: "双收音",
        nameEn: "Double Final Consonants (겹받침)",
        structure: "两个辅音字母在收音位置",
        meaning: "双收音（겹받침）由两个辅音字母组成，但实际发音只取其中一个。\n\n常见双收音：\n• ㄳ：发ㄱ（如읽다→익다）\n• ㄵ：发ㄴ（如앉다→안다）\n• ㄶ：发ㄴ（如많다→만다）\n• ㄺ：发ㄱ（如닭→닥）\n• ㄻ：发ㅁ（如삶→삼）\n• ㄼ：发ㄹ或ㅂ（如넓다→넓다）\n• ㅀ：发ㄹ（如싫다→실타）\n• ㄿ：发ㅂ（如없다→업다）\n• ㅄ：发ㅂ（如없다→업다）",
        usage: "判断方法：看下一个音节的初声。\n• 如果下一个音节以ㅇ开头（开音节），双收音中右边的字母连到下一音节\n• 如果下一个音节以辅音开头（闭音节），双收音中左边的字母保留",
        examples: [
          { korean: "읽어요", chinese: "读（ㄱ连到어→일거요）" },
          { korean: "앉아요", chinese: "坐（ㄴ连到아→안자요）" },
          { korean: "닭고기", chinese: "鸡肉（ㄱ保留→닥고기）" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "把收音ㄱ发成'哥'",
        correct: "收音ㄱ是无声的[k]，舌根抵住软腭，不释放气流",
        reason: "收音ㄱ不释放气流，和初声ㄱ完全不同。",
      },
      {
        wrong: "忽略收音，直接读元音",
        correct: "有收音的音节必须闭合，不能省略",
        reason: "收音是音节的一部分，省略会改变意思（如밥→바）。",
      },
      {
        wrong: "把收音ㅇ发成'ng'的鼻音（在初声位置）",
        correct: "收音ㅇ确实是[ng]，但初声ㅇ不发音",
        reason: "同一个ㅇ在初声和收音位置发音不同。",
      },
      {
        wrong: "双收音两个字母都发出来",
        correct: "双收音实际只发一个音",
        reason: "双收音的两个字母中，只有一个代表实际发音。",
      },
    ],
    keyQuestions: [
      "收音ㄱ和初声ㄱ的发音有什么区别？",
      "为什么多个不同的收音符号只对应7种发音？",
      "如何区分有收音和无收音的音节？",
      "双收音的发音规则是什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择你听到的收音类型。",
      instructionsEn: "Listen and choose the final consonant type.",
      question: "听到的收音是哪种？",
      options: ["ㄱ类", "ㄴ类", "ㄷ类", "ㄹ类"],
      answer: "ㄱ类",
    },
    {
      type: "matching",
      instructions: "将收音符号与代表音配对。",
      instructionsEn: "Match final consonants to representative sounds.",
      pairs: [
        { left: "ㄱ ㅋ ㄲ", right: "ㄱ [k]" },
        { left: "ㄴ ㄵ ㄶ", right: "ㄴ [n]" },
        { left: "ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ", right: "ㄷ [t]" },
        { left: "ㄹ ㄻ ㄼ ㅀ", right: "ㄹ [l]" },
        { left: "ㅁ", right: "ㅁ [m]" },
        { left: "ㅂ ㅍ ㄿ ㅄ", right: "ㅂ [p]" },
        { left: "ㅇ", right: "ㅇ [ng]" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的读音。",
      instructionsEn: "Choose the correct reading.",
      question: "밥 的意思是？",
      options: ["爸爸", "饭", "船", "夜晚"],
      answer: "饭",
    },
    {
      type: "fill-in",
      instructions: "写出下列单词的收音代表音。",
      instructionsEn: "Write the representative final sound.",
      sentences: [
        { sentence: "읽 的收音是？", answer: "ㄱ", hint: "ㄱ类收音" },
        { sentence: "삶 的收音是？", answer: "ㄹ", hint: "ㄹ类收音" },
        { sentence: "없 的收音是？", answer: "ㅂ", hint: "ㅂ类收音" },
        { sentence: "강 的收音是？", answer: "ㅇ", hint: "ㅇ类收音" },
      ],
    },
    {
      type: "dictation",
      instructions: "听录音，写出你听到的韩文。",
      instructionsEn: "Listen and write the Korean you hear.",
      sentences: [
        { sentence: "听到的是哪个单词？", answer: "밥", hint: "意思是'饭'" },
        { sentence: "听到的是哪个单词？", answer: "국", hint: "意思是'汤'" },
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "收音概念",
        items: [
          "收音是音节末尾的辅音，写在音节块下方",
          "决定音节的闭合方式（开音节/闭音节）",
          "收音不释放气流，和初声发音不同",
          "有收音的音节更短促、更'重'",
        ],
      },
      {
        title: "7种代表音",
        items: [
          "ㄱ[k] ㄴ[n] ㄷ[t] ㄹ[l] ㅁ[m] ㅂ[p] ㅇ[ng]",
          "所有收音字母归入这7种发音",
          "ㄱ类：ㄱ ㅋ ㄲ ㄳ ㄺ",
          "ㄷ类：ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ（最多）",
          "双收音实际只发一个音",
        ],
      },
    ],
    mindMap: `收音（终声/받침）
├─ 位置: 音节块下方
├─ 作用: 闭合音节
├─ 7种代表音
│  ├─ ㄱ类: ㄱ ㅋ ㄲ ㄳ ㄺ → [k]
│  ├─ ㄴ类: ㄴ ㄵ ㄶ → [n]
│  ├─ ㄷ类: ㄷ ㅌ ㅅ ㅆ ㅈ ㅊ ㅎ → [t]
│  ├─ ㄹ类: ㄹ ㄻ ㄼ ㅀ → [l]
│  ├─ ㅁ类: ㅁ → [m]
│  ├─ ㅂ类: ㅂ ㅍ ㄿ ㅄ → [p]
│  └─ ㅇ类: ㅇ → [ng]
└─ 双收音（겹받침）
   ├─ ㄳ ㄵ ㄶ ㄺ ㄻ ㄼ ㅀ ㄿ ㅄ
   └─ 实际只发一个音`,
    selfTest: [
      {
        question: "收音ㄱ的发音特点是？",
        options: ["和初声ㄱ相同", "无声[k]，不释放", "发'哥'音", "不发音"],
        answer: "无声[k]，不释放",
      },
      {
        question: "韩语收音有几种实际发音？",
        options: ["5种", "7种", "14种", "19种"],
        answer: "7种",
      },
      {
        question: "밥的收音是哪种代表音？",
        options: ["ㄱ类", "ㄴ类", "ㅂ类", "ㅇ类"],
        answer: "ㅂ类",
      },
      {
        question: "双收音읽的实际发音是？",
        options: ["읽", "익", "일", "인"],
        answer: "익（ㄱ类收音）",
      },
    ],
  },
  outputTask: {
    type: "oral-response",
    instructions: "练习收音发音",
    instructionsEn: "Practice final consonant (batchim) pronunciation",
    prompt: "请大声读出以下带收音的音节：밥, 책, 집, 꽃, 숲, 앉",
    sampleAnswer: "밥(bap), 책(chaek), 집(jip), 꽃(kkot), 숲(sup), 앉(an)",
    keyPhrases: ["밥", "책", "집", "꽃", "숲", "앉"],
  },
};

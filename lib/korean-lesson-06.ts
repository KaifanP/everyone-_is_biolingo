import { KoreanLesson } from "./korean-types";

export const koreanLesson06Data: KoreanLesson = {
  info: {
    id: "lesson-06",
    moduleId: "02",
    number: 6,
    title: "问候、礼貌体、이에요/예요、아니에요",
    titleEn: "Greetings, Polite Speech, 이에요/예요 & 아니에요",
  },
  objectives: [
    "掌握常用问候语和告别语",
    "理解敬语层级和礼貌体的使用场景",
    "能用이에요/예요和아니에요进行肯定和否定回答",
  ],
  warmup: {
    questions: [
      "中文的'你好'和韩语的'안녕하세요'有什么使用差异？",
      "韩语的敬语层级比中文复杂吗？",
    ],
  },
  input: {
    dialogue: {
      title: "初次见面",
      lines: [
        { speaker: "A", korean: "안녕하세요. 저는 왕밍이에요.", chinese: "你好。我是王明。" },
        { speaker: "B", korean: "안녕하세요. 저는 사라예요.", chinese: "你好。我是莎拉。" },
        { speaker: "A", korean: "미국 사람이에요?", chinese: "是美国人吗？" },
        { speaker: "B", korean: "아니에요. 캐나다 사람이에요.", chinese: "不是。是加拿大人。" },
      ],
    },
    vocabulary: [
      { korean: "안녕하세요", chinese: "你好（敬语）", partOfSpeech: "感叹词" },
      { korean: "저는", chinese: "我（谦称+主题助词）", partOfSpeech: "代词+助词" },
      { korean: "이에요", chinese: "是（敬语）", partOfSpeech: "形容词" },
      { korean: "아니에요", chinese: "不是（敬语）", partOfSpeech: "形容词" },
      { korean: "캐나다", chinese: "加拿大", partOfSpeech: "名词" },
      { korean: "안녕히 가세요", chinese: "请慢走（告别语）", partOfSpeech: "感叹词" },
      { korean: "안녕히 계세요", chinese: "请留步（告别语）", partOfSpeech: "感叹词" },
      { korean: "감사합니다", chinese: "谢谢（敬语）", partOfSpeech: "感叹词" },
      { korean: "고마워요", chinese: "谢谢（平语）", partOfSpeech: "感叹词" },
      { korean: "죄송합니다", chinese: "对不起（敬语）", partOfSpeech: "感叹词" },
      { korean: "미안해요", chinese: "对不起（平语）", partOfSpeech: "感叹词" },
      { korean: "네", chinese: "是的", partOfSpeech: "感叹词" },
      { korean: "아니요", chinese: "不是/不", partOfSpeech: "感叹词" },
      { korean: "잠깐만요", chinese: "请稍等", partOfSpeech: "感叹词" },
      { korean: "잘 부탁합니다", chinese: "请多关照", partOfSpeech: "感叹词" },
      { korean: "처음 뵙겠습니다", chinese: "初次见面", partOfSpeech: "感叹词" },
      { korean: "이름", chinese: "名字", partOfSpeech: "名词" },
      { korean: "사람", chinese: "人", partOfSpeech: "名词" },
      { korean: "학생", chinese: "学生", partOfSpeech: "名词" },
      { korean: "선생님", chinese: "老师（敬语）", partOfSpeech: "名词" },
      { korean: "의사", chinese: "医生", partOfSpeech: "名词" },
      { korean: "회사원", chinese: "公司职员", partOfSpeech: "名词" },
      { korean: "미국", chinese: "美国", partOfSpeech: "名词" },
      { korean: "일본", chinese: "日本", partOfSpeech: "名词" },
      { korean: "한국", chinese: "韩国", partOfSpeech: "名词" },
      { korean: "영어", chinese: "英语", partOfSpeech: "名词" },
      { korean: "한국어", chinese: "韩语", partOfSpeech: "名词" },
      { korean: "중국어", chinese: "中文", partOfSpeech: "名词" },
      { korean: "어느 나라", chinese: "哪个国家", partOfSpeech: "代词" },
      { korean: "뭐 해요", chinese: "做什么工作", partOfSpeech: "动词" },
    ],
  },
  grammar: {
    points: [
      {
        name: "问候语",
        nameEn: "Greetings",
        structure: "안녕하세요",
        meaning: "最常用的问候语，用于白天见面。",
        usage: "早上、下午、晚上都可以用；晚上告别时用'안녕히 가세요'。",
        examples: [
          { korean: "안녕하세요.", chinese: "你好。" },
          { korean: "안녕히 가세요.", chinese: "请慢走。（对离开的人说）" },
          { korean: "안녕히 계세요.", chinese: "请留步。（对留下的人说）" },
        ],
      },
      {
        name: "이에요/예요",
        nameEn: "이에요/예요 (to be)",
        structure: "名词 + 이에요/예요",
        meaning: "表示'是……'，敬语形式。",
        usage: "收音后用이에요，元音后用예요。",
        examples: [
          { korean: "저는 학생이에요.", chinese: "我是学生。（有收音）" },
          { korean: "저는 선생님이에요.", chinese: "我是老师。（有收音）" },
          { korean: "저는 의사예요.", chinese: "我是医生。（无收音）" },
        ],
        chineseTransfer: "类似中文的'是'，但韩语的이에요/예요是形容词，不是动词。",
      },
      {
        name: "아니에요",
        nameEn: "아니에요 (not to be)",
        structure: "名词 + 아니에요",
        meaning: "表示'不是……'，敬语形式。",
        usage: "直接加在名词后，不需要变化。",
        examples: [
          { korean: "저는 학생이 아니에요.", chinese: "我不是学生。" },
          { korean: "미국 사람이 아니에요.", chinese: "不是美国人。" },
        ],
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        wrong: "用'나는'代替'저는'",
        correct: "对长辈或不熟悉的人用'저는'，对朋友用'나는'",
        reason: "韩语有谦称和普通称之分，用错会显得不礼貌。",
      },
      {
        wrong: "收音后用'예요'",
        correct: "收音后用'이에요'，元音后用'예요'",
        reason: "这是韩语的语音规律，为了发音顺畅。",
      },
      {
        wrong: "把'아니에요'说成'아니요'",
        correct: "'아니요'是'不'，'아니에요'是'不是'",
        reason: "两者意思不同，不能混用。",
      },
    ],
    keyQuestions: [
      "什么时候用'저는'，什么时候用'나는'？",
      "이에요和예요的区别是什么？",
      "아니에요和아니요的区别是什么？",
    ],
  },
  practice: [
    {
      type: "listening-choice",
      instructions: "听录音，选择正确的回答。",
      instructionsEn: "Listen and choose the correct response.",
      question: "听到'미국 사람이에요?'，应该回答什么？",
      options: ["아니에요.", "안녕하세요.", "감사합니다.", "네."],
      answer: "아니에요.",
    },
    {
      type: "fill-in",
      instructions: "用이에요/예요或아니에요填空。",
      instructionsEn: "Fill in with 이에요/예요 or 아니에요.",
      sentences: [
        { sentence: "저는 학생___", answer: "이에요", hint: "학생有收音" },
        { sentence: "저는 의사___", answer: "예요", hint: "의사无收音" },
        { sentence: "미국 사람이___", answer: "아니에요", hint: "否定形式" },
      ],
    },
    {
      type: "reading-choice",
      instructions: "看韩文，选择正确的意思。",
      instructionsEn: "Choose the correct meaning.",
      question: "저는 사라예요. 的意思是？",
      options: ["我是莎拉。", "你是莎拉。", "她是莎拉。", "莎拉是学生。"],
      answer: "我是莎拉。",
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "问候语",
        items: [
          "안녕하세요：你好（敬语）",
          "안녕히 가세요：请慢走",
          "안녕히 계세요：请留步",
        ],
      },
      {
        title: "이에요/예요 & 아니에요",
        items: [
          "이에요：收音后（학생이에요）",
          "예요：元音后（의사예요）",
          "아니에요：否定形式",
        ],
      },
    ],
    mindMap: `问候与自我介绍
├─ 问候语
│  ├─ 안녕하세요：你好
│  ├─ 안녕히 가세요：请慢走
│  └─ 안녕히 계세요：请留步
├─ 肯定：이에요/예요
│  ├─ 收音后：이에요
│  └─ 元音后：예요
└─ 否定：아니에요`,
    selfTest: [
      {
        question: "对老师应该用哪个代词？",
        options: ["나는", "저는", "너는", "그는"],
        answer: "저는",
      },
      {
        question: "의사后应该用哪个词？",
        options: ["이에요", "예요", "아니에요", "아니요"],
        answer: "예요",
      },
      {
        question: "안녕히 가세요是对谁说的？",
        options: ["离开的人", "留下的人", "老师", "朋友"],
        answer: "离开的人",
      },
    ],
  },
};

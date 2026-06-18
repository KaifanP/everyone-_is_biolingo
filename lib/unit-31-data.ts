import { UnitData } from "./unit-01-data";

export const unit31Data: UnitData = {
  info: {
    id: "unit-31",
    moduleId: "05",
    number: 31,
    title: "动名词基础",
    titleEn: "Gerund Basics",
  },
  objectives: [
    "掌握动名词的基本形式（动词 + -ing）",
    "理解动名词作主语、宾语、表语和介词宾语的功能",
    "熟悉常见接动名词作宾语的动词",
    "掌握介词后使用动名词的规则",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "\"Swimming is good exercise.\" 中的 swimming 是什么词性？",
        "\"He is swimming.\" 中的 swimming 又是什么词性？",
        "两者形式相同，如何区分动名词和现在分词？",
      ],
      answer:
        "动名词（Gerund）和现在分词（Present Participle）形式都是动词 + -ing，但功能不同。动名词具有名词性质，在句中充当名词角色（如主语、宾语）；现在分词具有形容词或副词性质，常用于构成进行时态或作定语。\"Swimming is good exercise\" 中 swimming 作主语，是动名词；\"He is swimming\" 中 swimming 与 is 构成现在进行时，是现在分词。",
    },
    comparison: {
      chinese: [
        { text: "游泳是一项好运动。", note: "动名词作主语" },
        { text: "他正在游泳。", note: "现在分词构成进行时" },
        { text: "我喜欢阅读。", note: "动名词作宾语" },
      ],
      english: [
        { text: "Swimming is good exercise.", note: "动名词作主语" },
        { text: "He is swimming.", note: "现在分词表进行" },
        { text: "I enjoy reading.", note: "动名词作宾语" },
      ],
      conclusion:
        "判断 -ing 形式是动名词还是现在分词，关键看它在句中是否充当名词角色。如果能用名词替换，就是动名词。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "动名词的本质",
          description:
            "动名词 = 动词原形 + -ing，兼具名词和动词的双重特征。作为名词，它可以作主语、宾语、表语；作为动词，它可以带宾语、被状语修饰。",
          example: "Reading books is my favorite hobby.（reading 带宾语 books，整体作主语）",
        },
        {
          label: "作主语",
          description:
            "动名词作主语表示一般性、习惯性的动作。常用 it 作形式主语，将动名词后置。",
          example: "Learning English takes time. / It is no use crying over spilt milk.",
        },
        {
          label: "作宾语",
          description:
            "某些动词后只能接动名词作宾语，不能接不定式。常见动词：enjoy, finish, avoid, suggest, mind, keep, imagine, risk, practice, deny, admit, consider, delay, escape, miss, quit, give up。",
          example: "I enjoy reading novels. She finished writing her essay.",
        },
        {
          label: "介词宾语",
          description:
            "介词后面必须接动名词（不能接不定式）。常见搭配：be good at, be interested in, look forward to, instead of, without, before, after, by, for。",
          example: "She is good at singing. I look forward to meeting you.",
        },
      ],
      aspect: [
        {
          label: "名词功能",
          description: "动名词在句中充当名词角色",
          focus: "主语、宾语、表语、介词宾语",
        },
        {
          label: "动词特征",
          description: "动名词保留动词的部分特征",
          focus: "可带宾语、可被状语修饰",
        },
        {
          label: "常见搭配",
          description: "固定接动名词的动词和介词短语",
          focus: "enjoy/finish/avoid + V-ing; 介词 + V-ing",
        },
        {
          label: "否定形式",
          description: "动名词的否定式在前面加 not",
          focus: "not + V-ing",
        },
      ],
    },
    matrix: {
      headers: ["功能", "例句", "说明"],
      rows: [
        {
          time: "作主语",
          forms: [
            "Swimming is good for health.",
            "动名词作主语，谓语用单数",
          ],
        },
        {
          time: "作宾语",
          forms: [
            "I enjoy reading books.",
            "动名词作某些动词的宾语",
          ],
        },
        {
          time: "作表语",
          forms: [
            "My hobby is collecting stamps.",
            "动名词作表语，说明主语内容",
          ],
        },
        {
          time: "介词宾语",
          forms: [
            "She is interested in learning Chinese.",
            "介词后必须接动名词",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "动名词作主语",
        nameEn: "Gerund as Subject",
        structure: "V-ing + 谓语动词（单数）+ 其他",
        usages: [
          { label: "直接作主语", example: "Swimming is good exercise." },
          { label: "it 作形式主语", example: "It is no use arguing with him." },
          { label: "there is no 结构", example: "There is no point in waiting." },
        ],
        timeWords: "表示一般性、习惯性动作时使用",
      },
      {
        name: "常见动词 + 动名词",
        nameEn: "Common Verbs + Gerund",
        structure: "主语 + V（enjoy/finish/avoid/suggest/mind/keep/imagine/risk）+ V-ing",
        usages: [
          { label: "enjoy", example: "I enjoy listening to music." },
          { label: "finish", example: "She finished cleaning the house." },
          { label: "avoid", example: "He avoids making the same mistake." },
          { label: "suggest", example: "I suggest going to the park." },
          { label: "mind", example: "Do you mind opening the window?" },
          { label: "keep", example: "Keep practicing and you will improve." },
          { label: "imagine", example: "Can you imagine living on the moon?" },
          { label: "risk", example: "You risk losing everything." },
        ],
        timeWords: "这些动词后只能接动名词，不能接不定式",
      },
      {
        name: "介词 + 动名词",
        nameEn: "Preposition + Gerund",
        structure: "主语 + be/动词 + 介词 + V-ing",
        usages: [
          { label: "be good at", example: "She is good at drawing." },
          { label: "be interested in", example: "He is interested in learning Japanese." },
          { label: "look forward to", example: "I look forward to seeing you." },
          { label: "instead of", example: "I walked instead of taking a bus." },
          { label: "without", example: "He left without saying goodbye." },
        ],
        timeWords: "介词后必须接动名词形式，不能接不定式",
      },
      {
        name: "动名词的否定",
        nameEn: "Gerund Negation",
        structure: "not + V-ing",
        usages: [
          { label: "否定动名词", example: "I apologize for not telling you the truth." },
          { label: "否定作主语的动名词", example: "Not getting enough sleep is bad for your health." },
          { label: "mind 的否定回答", example: "Would you mind not smoking here?" },
        ],
        timeWords: "not 放在动名词前面",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "enjoy 后误用不定式",
        wrong: "I enjoy to read books.",
        correct: "I enjoy reading books.",
        reason: "enjoy 后必须接动名词，不能接不定式。",
      },
      {
        title: "suggest 后误用不定式",
        wrong: "She suggested to go to the movies.",
        correct: "She suggested going to the movies.",
        reason: "suggest 后必须接动名词，不能接不定式。",
      },
      {
        title: "look forward to 后误用动词原形",
        wrong: "I look forward to see you.",
        correct: "I look forward to seeing you.",
        reason: "look forward to 中的 to 是介词，后面必须接动名词。",
      },
      {
        title: "介词后误用不定式",
        wrong: "She is interested in to learn Chinese.",
        correct: "She is interested in learning Chinese.",
        reason: "介词后必须接动名词，不能接不定式。",
      },
      {
        title: "finish 后误用不定式",
        wrong: "I finished to do my homework.",
        correct: "I finished doing my homework.",
        reason: "finish 后必须接动名词，不能接不定式。",
      },
    ],
    keyQuestions: [
      "如何判断一个动词后应该接动名词还是不定式？",
      "\"to\" 什么时候是介词（后接动名词），什么时候是不定式标志（后接动词原形）？",
      "有些动词后既可接动名词又可接不定式，意义有什么区别？（如 remember, forget, stop, try）",
      "动名词和不定式作主语时有什么区别？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "只能接动名词的动词",
          verbs: [
            "enjoy",
            "finish",
            "avoid",
            "suggest",
            "mind",
            "keep",
            "imagine",
            "risk",
            "practice",
            "deny",
            "admit",
            "consider",
            "delay",
            "escape",
            "miss",
            "quit",
            "give up",
            "can't help",
            "feel like",
            "it's no use",
            "it's worth",
          ],
        },
        {
          label: "介词后接动名词",
          verbs: [
            "be good at",
            "be interested in",
            "look forward to",
            "instead of",
            "without",
            "before",
            "after",
            "by",
            "for",
            "be used to",
            "pay attention to",
            "be tired of",
            "be afraid of",
            "be proud of",
          ],
        },
      ],
      example: {
        wrong: "I can't help to laugh when I see his face.",
        correct: "I can't help laughing when I see his face.",
        note: "can't help 意为\"忍不住\"，后接动名词。can't help to do 意为\"不能帮忙做\"，意义不同。",
      },
    },
  },
  practice: [
    {
      title: "选择正确形式",
      titleEn: "Choose the Correct Form",
      type: "identify",
      items: [
        {
          question: "I enjoy _____ (read/reading) novels before bed.",
          answer: "reading",
        },
        {
          question: "She suggested _____ (take/taking) a different route.",
          answer: "taking",
        },
        {
          question: "He left without _____ (say/saying) goodbye.",
          answer: "saying",
        },
        {
          question: "_____ (Swim/Swimming) is a great form of exercise.",
          answer: "Swimming",
        },
        {
          question: "I look forward to _____ (meet/meeting) you soon.",
          answer: "meeting",
        },
        {
          question: "They finished _____ (build/building) the house last month.",
          answer: "building",
        },
        {
          question: "She is good at _____ (play/playing) the piano.",
          answer: "playing",
        },
        {
          question: "Would you mind _____ (close/closing) the door?",
          answer: "closing",
        },
      ],
    },
    {
      title: "改错练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        {
          question: "I enjoy to play basketball with my friends.",
          answer: "I enjoy playing basketball with my friends.",
        },
        {
          question: "She suggested to eat at the new restaurant.",
          answer: "She suggested eating at the new restaurant.",
        },
        {
          question: "He is interested in to learn about different cultures.",
          answer: "He is interested in learning about different cultures.",
        },
        {
          question: "I finished to write my report yesterday.",
          answer: "I finished writing my report yesterday.",
        },
        {
          question: "We look forward to hear from you.",
          answer: "We look forward to hearing from you.",
        },
      ],
    },
    {
      title: "完成句子",
      titleEn: "Complete the Sentences",
      type: "fill",
      items: [
        {
          question: "My favorite hobby is _____ (collect) stamps.",
          answer: "collecting",
        },
        {
          question: "_____ (learn) a new language takes time and effort.",
          answer: "Learning",
        },
        {
          question: "Instead of _____ (complain), why don't you do something about it?",
          answer: "complaining",
        },
        {
          question: "I can't risk _____ (lose) my job.",
          answer: "losing",
        },
        {
          question: "She left the room without _____ (turn) off the lights.",
          answer: "turning",
        },
      ],
    },
  ],
  production: [
    {
      title: "描述你的爱好",
      titleEn: "Describe Your Hobbies",
      description:
        "用动名词描述你的三个爱好或兴趣。每个句子至少使用一个不同的动名词功能（作主语、作宾语、介词宾语）。",
      example: [
        "Swimming is my favorite sport.（动名词作主语）",
        "I enjoy reading science fiction novels.（动名词作宾语）",
        "I am interested in learning new languages.（介词 + 动名词）",
      ],
    },
    {
      title: "给出建议",
      titleEn: "Give Advice",
      description:
        "你的朋友想提高英语水平，请用包含动名词的句子给出至少三条建议。使用 suggest, keep, practice, try, look forward to 等表达。",
      example: [
        "I suggest reading English books every day.",
        "Keep practicing speaking with native speakers.",
        "Look forward to using English in real-life situations.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "动名词的形式",
        items: [
          "动名词 = 动词原形 + -ing",
          "兼具名词和动词的双重特征",
          "否定形式：not + V-ing",
        ],
      },
      {
        title: "动名词的四大功能",
        items: [
          "作主语：Swimming is good exercise.",
          "作宾语：I enjoy reading.",
          "作表语：My hobby is collecting stamps.",
          "介词宾语：She is interested in learning Chinese.",
        ],
      },
      {
        title: "只能接动名词的常见动词",
        items: [
          "enjoy, finish, avoid, suggest, mind, keep, imagine, risk",
          "practice, deny, admit, consider, delay, escape, miss, quit",
          "can't help, feel like, give up",
        ],
      },
      {
        title: "介词后必须接动名词",
        items: [
          "be good at, be interested in, look forward to",
          "instead of, without, before, after, by, for",
          "注意 look forward to 中的 to 是介词，后接 V-ing",
        ],
      },
    ],
    mindMap:
      "动名词（Gerund）\n├── 形式：V-ing\n├── 功能\n│   ├── 主语：Swimming is fun.\n│   ├── 宾语：I enjoy reading.\n│   ├── 表语：My hobby is cooking.\n│   └── 介词宾语：good at singing\n├── 固定搭配\n│   ├── 动词 + V-ing：enjoy/finish/avoid/suggest/mind/keep/imagine/risk\n│   └── 介词 + V-ing：at/in/to/of/without/by/for\n└── 否定：not + V-ing",
    selfTest: [
      {
        question: "下列哪个句子中的 -ing 形式是动名词？",
        options: [
          "He is swimming in the pool.",
          "Swimming is good for your health.",
          "The swimming boy is my brother.",
          "I saw him swimming yesterday.",
        ],
        answer: "Swimming is good for your health.（swimming 作主语，是动名词）",
      },
      {
        question: "选择正确的形式：I look forward to _____ you.",
        options: ["meet", "meeting", "met", "meets"],
        answer: "meeting（look forward to 中的 to 是介词，后接动名词）",
      },
      {
        question: "下列哪个动词后只能接动名词？",
        options: ["want", "enjoy", "decide", "hope"],
        answer: "enjoy（enjoy 后只能接动名词，其他三个后接不定式）",
      },
      {
        question: "改错：She suggested to go to the park.",
        options: [
          "She suggested going to the park.",
          "She suggested go to the park.",
          "She suggested goes to the park.",
          "原句正确",
        ],
        answer: "She suggested going to the park.（suggest 后接动名词）",
      },
    ],
  },
};

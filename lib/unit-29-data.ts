import { UnitData } from "./unit-01-data";

export const unit29Data: UnitData = {
  info: {
    id: "unit-29",
    moduleId: "04",
    number: 29,
    title: "被动语态与间接引语综合实战",
    titleEn: "Passive & Reported Speech Comprehensive Practice",
  },
  objectives: [
    "掌握被动语态与间接引语的综合运用技巧",
    "能够在真实语境中灵活运用被动语态和间接引语",
    "熟悉考试中常见的被动语态与间接引语综合题型",
    "提高学术写作和新闻报道中的语言准确性",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "为什么新闻报道中经常使用被动语态？",
        "间接引语在学术写作中起什么作用？",
        "\"It was announced that the president would resign.\" 这句话有什么特点？",
      ],
      answer:
        "新闻常用被动语态来强调事件本身而非动作执行者，间接引语帮助学术写作保持客观性。例句同时运用了被动语态（It was announced）和间接引语（would resign），展示了两种语法结构的综合运用。",
    },
    comparison: {
      chinese: [
        { text: "据说他是一位天才。", note: "被动引述 + 间接引语" },
        { text: "据报道事故发生在午夜。", note: "新闻报道中的被动结构" },
        { text: "人们相信这项研究将改变医学。", note: "主动引述转被动引述" },
      ],
      english: [
        { text: "It is said that he is a genius.", note: "It is said that... 结构" },
        { text: "It was reported that the accident happened at midnight.", note: "过去时被动引述" },
        { text: "It is believed that this research will change medicine.", note: "学术写作常用结构" },
      ],
      conclusion:
        "被动语态与间接引语的结合是英语高级表达的核心技能，在新闻、学术和正式场合中广泛使用。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "It is said that... 结构",
          description:
            "将主动语态的引述动词（People say...）转换为被动语态（It is said that...），使表达更正式、客观。",
          example: "People say that he is rich. → It is said that he is rich.",
        },
        {
          label: "新闻报道中的被动",
          description:
            "新闻标题和报道常用被动语态来强调事件本身，淡化消息来源或动作执行者。",
          example:
            "It was announced that the new law would take effect next month.",
        },
        {
          label: "学术写作中的间接引语",
          description:
            "学术论文使用间接引语引用他人观点，配合被动语态保持客观中立的语气。",
          example:
            "It has been suggested that climate change affects biodiversity.",
        },
        {
          label: "时态一致性规则",
          description:
            "当主句动词为过去时时，从句通常需要进行时态后移（backshift），但陈述客观事实时例外。",
          example:
            "He said, \"I am tired.\" → He said that he was tired. BUT: The teacher said, \"The Earth is round.\" → The teacher said that the Earth is round.",
        },
      ],
      aspect: [
        {
          label: "被动引述结构",
          description: "It is/was said/believed/reported/known/thought that...",
          focus: "引述动词的被动形式",
        },
        {
          label: "不定式结构",
          description: "主语 + is/was said/believed/reported + to do/to be/to have done",
          focus: "另一种被动引述方式",
        },
        {
          label: "时态后移",
          description: "间接引语中从句时态向过去推移一步",
          focus: "保持时态一致性",
        },
        {
          label: "情态动词变化",
          description: "can→could, may→might, will→would, shall→should",
          focus: "情态动词的过去形式",
        },
      ],
    },
    matrix: {
      headers: ["主动形式", "被动形式", "例句"],
      rows: [
        {
          time: "People say that...",
          forms: [
            "It is said that...",
            "He is said to...",
            "It is said that she speaks five languages.",
          ],
        },
        {
          time: "People believe that...",
          forms: [
            "It is believed that...",
            "He is believed to...",
            "It is believed that the cure will be found soon.",
          ],
        },
        {
          time: "People report that...",
          forms: [
            "It is reported that...",
            "He is reported to...",
            "It was reported that the storm had caused great damage.",
          ],
        },
        {
          time: "People think that...",
          forms: [
            "It is thought that...",
            "He is thought to...",
            "It is thought that the painting is worth millions.",
          ],
        },
        {
          time: "People know that...",
          forms: [
            "It is known that...",
            "He is known to...",
            "It is known that exercise improves health.",
          ],
        },
      ],
    },
    tenses: [
      {
        name: "It is said that... 结构",
        nameEn: "It is said that... Structure",
        structure: "It is/was + 过去分词 + that 从句",
        usages: [
          {
            label: "现在时被动引述",
            example: "It is said that he is a brilliant scientist.",
          },
          {
            label: "过去时被动引述",
            example: "It was said that the castle was haunted.",
          },
          {
            label: "完成时被动引述",
            example: "It has been reported that the team has won the championship.",
          },
        ],
        timeWords: "said, believed, reported, thought, known, expected, estimated",
      },
      {
        name: "新闻报道中的被动",
        nameEn: "Passive in News Reports",
        structure: "It was/were + 过去分词 + that 从句（常含间接引语）",
        usages: [
          {
            label: "宣布事件",
            example: "It was announced that the election would be held in December.",
          },
          {
            label: "报道事故",
            example:
              "It was reported that three people had been injured in the crash.",
          },
          {
            label: "官方声明",
            example:
              "It was confirmed that the president had signed the agreement.",
          },
        ],
        timeWords: "announced, confirmed, revealed, disclosed, stated, declared",
      },
      {
        name: "学术写作中的间接引语",
        nameEn: "Reported Speech in Academic Writing",
        structure: "It has been + 过去分词 + that 从句",
        usages: [
          {
            label: "引用研究成果",
            example:
              "It has been shown that regular exercise reduces the risk of heart disease.",
          },
          {
            label: "提出理论观点",
            example:
              "It has been argued that language acquisition is an innate ability.",
          },
          {
            label: "报告实验结论",
            example:
              "It was found that the substance reacted differently under extreme conditions.",
          },
        ],
        timeWords: "shown, demonstrated, argued, suggested, proposed, found, concluded",
      },
      {
        name: "时态一致性规则",
        nameEn: "Tense Agreement Rules",
        structure: "主句过去时 → 从句时态后移（客观事实除外）",
        usages: [
          {
            label: "一般现在 → 一般过去",
            example:
              "He said, \"I work hard.\" → He said that he worked hard.",
          },
          {
            label: "现在完成 → 过去完成",
            example:
              "She said, \"I have finished.\" → She said that she had finished.",
          },
          {
            label: "客观事实不后移",
            example:
              "He said, \"Water boils at 100\u00b0C.\" → He said that water boils at 100\u00b0C.",
          },
          {
            label: "情态动词后移",
            example:
              "She said, \"I will help.\" → She said that she would help.",
          },
        ],
        timeWords: "said, told, mentioned, explained, stated, claimed",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "时态后移过度",
        wrong: "It is said that he was a genius.",
        correct: "It is said that he is a genius.",
        reason:
          "如果所述内容仍然成立（他现在仍然是天才），间接引语中不需要时态后移。was 暗示他已不是天才或已去世。",
      },
      {
        title: "不定式结构误用",
        wrong: "The president was said to resign.",
        correct: "The president was said to be going to resign.",
        reason:
          "表示将来动作时，不定式应使用 to be going to do 或 to be about to do，而非直接用 to do。",
      },
      {
        title: "被动语态在间接引语中的滥用",
        wrong: "He said, \"The letter was written by me.\" → He said that the letter had been written by him.",
        correct:
          "He said that he had written the letter.",
        reason:
          "在间接引语中，如果主动语态更自然简洁，应避免不必要的被动语态转换。",
      },
    ],
    keyQuestions: [
      "如何将被动语态与间接引语结合使用？",
      "什么情况下时态不需要后移？",
      "如何在学术写作中正确使用这些结构？",
    ],
    stateVerbs: {
      categories: [
        {
          label: "学术引述动词（被动形式）",
          verbs: [
            "It has been suggested that...",
            "It has been argued that...",
            "It has been demonstrated that...",
            "It has been proposed that...",
            "It has been observed that...",
            "It has been concluded that...",
          ],
        },
        {
          label: "新闻报道动词（被动形式）",
          verbs: [
            "It was announced that...",
            "It was reported that...",
            "It was confirmed that...",
            "It was revealed that...",
            "It was disclosed that...",
            "It was stated that...",
          ],
        },
        {
          label: "一般引述动词（被动形式）",
          verbs: [
            "It is said that...",
            "It is believed that...",
            "It is thought that...",
            "It is known that...",
            "It is expected that...",
            "It is estimated that...",
          ],
        },
      ],
      example: {
        wrong: "People think that the Earth is flat. → The Earth is thought to be flat by people.",
        correct:
          "It is thought that the Earth is round. / The Earth is thought to be round.",
        note:
          "被动引述结构中通常省略 by people 等施动者，使用 It is thought that... 或 主语 + is thought to be... 更自然。",
      },
    },
  },
  practice: [
    {
      title: "综合改写练习",
      titleEn: "Comprehensive Rewrite",
      type: "fill",
      items: [
        {
          question: "People say that the CEO has resigned.（改为被动引述结构）",
          answer: "It is said that the CEO has resigned. / The CEO is said to have resigned.",
        },
        {
          question: "They believe that the experiment was successful.（改为被动引述结构）",
          answer: "It is believed that the experiment was successful. / The experiment is believed to have been successful.",
        },
        {
          question: "He said, \"I am writing a research paper.\"（改为间接引语）",
          answer: "He said that he was writing a research paper.",
        },
        {
          question: "She said, \"The results have been published.\"（改为间接引语）",
          answer: "She said that the results had been published.",
        },
        {
          question: "People report that the building was destroyed in the fire.（综合改写）",
          answer: "It was reported that the building had been destroyed in the fire. / The building was reported to have been destroyed in the fire.",
        },
      ],
    },
    {
      title: "新闻报道改写",
      titleEn: "News Report Rewrite",
      type: "fill",
      items: [
        {
          question: "将以下主动新闻改写为被动形式：\"The government announced that taxes would increase next year.\"",
          answer: "It was announced by the government that taxes would increase next year. / It was announced that taxes would increase next year.",
        },
        {
          question: "将以下直接引语改写为间接引语：The witness said, \"I saw the accident happen at noon.\"",
          answer: "The witness said that he/she had seen the accident happen at noon.",
        },
        {
          question: "综合改写：People know that the scientist discovered a new species.（被动引述 + 间接引语）",
          answer: "It is known that the scientist discovered a new species. / The scientist is known to have discovered a new species.",
        },
      ],
    },
    {
      title: "错误纠正练习",
      titleEn: "Error Correction",
      type: "errorCorrection",
      items: [
        {
          question: "找出并纠正错误：It was said that she can speak ten languages.",
          answer: "It was said that she could speak ten languages.（can 应改为 could，时态后移）",
        },
        {
          question: "找出并纠正错误：He told me that the Earth was round.",
          answer: "He told me that the Earth is round.（客观事实不需要时态后移）",
        },
        {
          question: "找出并纠正错误：It has been reported that the accident was happened yesterday.",
          answer: "It has been reported that the accident happened yesterday.（happen 是不及物动词，不能用被动语态）",
        },
      ],
    },
  ],
  production: [
    {
      title: "撰写新闻报道",
      titleEn: "Write a News Report",
      description:
        "使用被动引述结构（It was announced/reported/confirmed that...）和间接引语撰写一篇简短的新闻报道，主题自选。",
      example: [
        "It was announced yesterday that the city council had approved a new environmental policy.",
        "It was reported that the policy would reduce carbon emissions by 30% over the next five years.",
        "The mayor stated that the government was committed to protecting the environment.",
        "It is believed that this initiative will inspire other cities to follow suit.",
      ],
    },
    {
      title: "学术风格改写",
      titleEn: "Academic Style Rewrite",
      description:
        "将以下口语化段落改写为学术风格，使用被动引述结构和间接引语，保持客观中立的语气。原文：\"Scientists think that global warming is a serious problem. They say that we need to act now. Many people believe that technology can solve this issue.\"",
      example: [
        "It is thought that global warming poses a serious threat to the planet.",
        "It has been argued that immediate action is required to address this crisis.",
        "It is widely believed that technological innovation may offer viable solutions to this issue.",
        "It has been suggested that a combination of policy changes and scientific research is necessary to combat climate change effectively.",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "被动引述结构",
        items: [
          "It is/was said/believed/reported/thought/known that... 是最常见的被动引述结构",
          "主语 + is/was said/believed/reported + to do/to be/to have done 是另一种表达方式",
          "被动引述结构通常省略施动者（by people/they），使表达更正式",
        ],
      },
      {
        title: "间接引语时态规则",
        items: [
          "主句为过去时时，从句时态通常需要后移一步",
          "客观事实、普遍真理不需要时态后移",
          "情态动词也需要后移：can→could, will→would, may→might",
        ],
      },
      {
        title: "综合运用要点",
        items: [
          "新闻报道常用被动语态强调事件，配合间接引语引用消息来源",
          "学术写作使用被动引述结构保持客观中立",
          "注意区分 It is said that...（现在引述）和 It was said that...（过去引述）的用法",
        ],
      },
      {
        title: "常见错误提醒",
        items: [
          "避免对仍然成立的事实进行不必要的时态后移",
          "不定式结构中表示将来要用 to be going to do，不能直接用 to do",
          "不及物动词（如 happen, occur）不能使用被动语态",
        ],
      },
    ],
    mindMap:
      "被动语态与间接引语综合实战\n\u251c\u2500\u2500 被动引述结构\n\u2502   \u251c\u2500\u2500 It is said that...\n\u2502   \u251c\u2500\u2500 It was reported that...\n\u2502   \u2514\u2500\u2500 It has been suggested that...\n\u251c\u2500\u2500 不定式结构\n\u2502   \u251c\u2500\u2500 He is said to be...\n\u2502   \u2514\u2500\u2500 He is said to have done...\n\u251c\u2500\u2500 间接引语规则\n\u2502   \u251c\u2500\u2500 时态后移\n\u2502   \u251c\u2500\u2500 情态动词变化\n\u2502   \u2514\u2500\u2500 客观事实不后移\n\u2514\u2500\u2500 应用场景\n    \u251c\u2500\u2500 新闻报道\n    \u251c\u2500\u2500 学术写作\n    \u2514\u2500\u2500 正式场合",
    selfTest: [
      {
        question: "People believe that the Earth is 4.5 billion years old. 改为被动引述结构是？",
        options: [
          "It is believed that the Earth is 4.5 billion years old.",
          "It was believed that the Earth was 4.5 billion years old.",
          "The Earth is believed that it is 4.5 billion years old.",
        ],
        answer: "It is believed that the Earth is 4.5 billion years old.（客观事实不需要时态后移）",
      },
      {
        question: "He said, \"I will finish the project tomorrow.\" 改为间接引语是？",
        options: [
          "He said that he will finish the project tomorrow.",
          "He said that he would finish the project the next day.",
          "He said that he would finish the project tomorrow.",
        ],
        answer: "He said that he would finish the project the next day.（will→would, tomorrow→the next day）",
      },
      {
        question: "以下哪个句子正确使用了被动引述结构？",
        options: [
          "It was happened that the bridge collapsed.",
          "It was reported that the bridge had collapsed.",
          "The bridge was reported that it collapsed.",
        ],
        answer: "It was reported that the bridge had collapsed.（happen 不能用被动，report 可以用被动引述结构）",
      },
    ],
  },
};

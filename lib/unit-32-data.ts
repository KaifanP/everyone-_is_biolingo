import { UnitData } from "./unit-01-data";

export const unit32Data: UnitData = {
  info: {
    id: "unit-32",
    moduleId: "05",
    number: 32,
    title: "不定式vs动名词：意义差异",
    titleEn: "Infinitive vs Gerund: Meaning Differences",
  },
  objectives: [
    "掌握同一动词后接to do和doing意义不同的情况",
    "理解remember/forget/stop/try等动词后接两种形式的含义差异",
    "能够根据上下文和时间顺序选择正确的形式",
  ],
  leadIn: {
    thinkQuestions: {
      sentences: [
        "I stopped smoking.",
        "I stopped to smoke.",
      ],
      answer:
        "第一句表示\u201c我戒烟了\u201d（停止吸烟这个习惯），第二句表示\u201c我停下来去抽烟\u201d（暂停正在做的事，去做另一件事）。同一个动词stop，后接doing和to do意思完全不同！",
    },
    comparison: {
      chinese: [
        { text: "我记得关了门。", note: "已经关了门，回忆这件事" },
        { text: "我记得要去关门。", note: "还没关，提醒自己去做" },
      ],
      english: [
        { text: "I remember closing the door.", note: "已经关了，回忆做过的事" },
        { text: "I remember to close the door.", note: "还没关，记得要去做" },
      ],
      conclusion:
        "某些动词后接to do和doing会产生完全不同的含义，这与时间顺序和动作是否完成密切相关。",
    },
  },
  explanation: {
    essence: {
      time: [
        {
          label: "remember to do vs remember doing",
          description:
            "remember to do = 记得要去做某事（尚未做）；remember doing = 记得做过某事（已做完）",
          example:
            "I remember to lock the door. (记得要去锁门) vs I remember locking the door. (记得锁过门)",
        },
        {
          label: "forget to do vs forget doing",
          description:
            "forget to do = 忘记要去做某事（未做）；forget doing = 忘记做过某事（做了但忘了）",
          example:
            "I forgot to turn off the lights. (忘记关灯了) vs I forgot turning off the lights. (忘记自己关过灯了)",
        },
        {
          label: "stop to do vs stop doing",
          description:
            "stop to do = 停下来去做另一件事；stop doing = 停止正在做的事",
          example:
            "I stopped to drink water. (停下来去喝水) vs I stopped drinking water. (停止喝水)",
        },
        {
          label: "try to do vs try doing",
          description:
            "try to do = 努力去做（强调努力）；try doing = 尝试做（强调试验）",
          example:
            "I tried to open the door. (努力开门) vs I tried opening the door. (试试开门看会怎样)",
        },
      ],
      aspect: [
        {
          label: "时间先后",
          description:
            "to do通常表示动作尚未发生，doing通常表示动作已经发生或正在进行",
          focus: "关注动作与说话时间的先后关系",
        },
        {
          label: "意图vs经历",
          description:
            "to do侧重意图、计划、目的；doing侧重经历、回忆、事实",
          focus: "关注是表达意愿还是描述经历",
        },
      ],
    },
    matrix: {
      headers: ["动词", "+ to do", "+ doing"],
      rows: [
        { time: "remember", forms: ["记得要去做（未做）", "记得做过（已做）"] },
        { time: "forget", forms: ["忘记要去做（未做）", "忘记做过（已做）"] },
        { time: "stop", forms: ["停下来去做（另一事）", "停止做（同一事）"] },
        { time: "try", forms: ["努力去做（尝试努力）", "试着做（试验一下）"] },
        { time: "go on", forms: ["接着做（另一件事）", "继续做（同一件事）"] },
        { time: "regret", forms: ["遗憾地说/做", "后悔做过"] },
      ],
    },
    tenses: [
      {
        name: "remember",
        nameEn: "remember",
        structure: "remember to do / remember doing",
        usages: [
          {
            label: "to do = 未做",
            example: "Please remember to bring your textbook tomorrow. (记得明天带课本)",
          },
          {
            label: "doing = 已做",
            example: "I remember meeting her at the party. (我记得在派对上见过她)",
          },
        ],
        timeWords: "to do常搭配将来时间；doing常搭配过去时间",
      },
      {
        name: "forget",
        nameEn: "forget",
        structure: "forget to do / forget doing",
        usages: [
          {
            label: "to do = 未做",
            example: "I forgot to submit my homework. (我忘记交作业了)",
          },
          {
            label: "doing = 已做",
            example: "I will never forget visiting the Great Wall. (我永远不会忘记去过长城)",
          },
        ],
        timeWords: "to do常搭配表示遗憾的语境；doing常搭配never forget",
      },
      {
        name: "stop",
        nameEn: "stop",
        structure: "stop to do / stop doing",
        usages: [
          {
            label: "to do = 停去做另一事",
            example: "He stopped to answer the phone. (他停下来去接电话)",
          },
          {
            label: "doing = 停止做",
            example: "She stopped eating chocolate. (她不再吃巧克力了)",
          },
        ],
        timeWords: "to do表示暂停当前动作去做另一件事；doing表示彻底放弃某习惯",
      },
      {
        name: "try",
        nameEn: "try",
        structure: "try to do / try doing",
        usages: [
          {
            label: "to do = 努力",
            example: "I tried to lift the heavy box. (我努力抬起那个重箱子)",
          },
          {
            label: "doing = 尝试",
            example: "Try adding some salt to the soup. (试试往汤里加点盐)",
          },
        ],
        timeWords: "to do强调付出努力；doing强调探索性尝试",
      },
      {
        name: "go on",
        nameEn: "go on",
        structure: "go on to do / go on doing",
        usages: [
          {
            label: "to do = 接着另一事",
            example: "After reading, he went on to write a summary. (读完之后，他接着写了摘要)",
          },
          {
            label: "doing = 继续同一事",
            example: "He went on reading for another hour. (他又继续读了一个小时)",
          },
        ],
        timeWords: "to do表示转换到新任务；doing表示延续当前任务",
      },
      {
        name: "regret",
        nameEn: "regret",
        structure: "regret to do / regret doing",
        usages: [
          {
            label: "to do = 遗憾地做",
            example: "I regret to tell you that you failed the exam. (我很遗憾地告诉你，你考试没通过)",
          },
          {
            label: "doing = 后悔做过",
            example: "I regret telling her the secret. (我后悔告诉了她那个秘密)",
          },
        ],
        timeWords: "to do常用于正式通知坏消息；doing表达对过去行为的后悔",
      },
    ],
  },
  analysis: {
    commonErrors: [
      {
        title: "remember/forget混淆to do和doing的时间指向",
        wrong: "I remember to close the window yesterday.",
        correct: "I remember closing the window yesterday.",
        reason: "yesterday表示过去已发生的事，应该用doing表示记得做过",
      },
      {
        title: "stop后接doing误用为to do",
        wrong: "He stopped to smoke when the doctor told him to.",
        correct: "He stopped smoking when the doctor told him to.",
        reason: "医生让他戒烟，表示停止吸烟这个习惯，应该用doing",
      },
      {
        title: "try to do和try doing混淆",
        wrong: "I tried to restart the computer, and it worked.",
        correct: "I tried restarting the computer, and it worked.",
        reason: "这里是试验性尝试，试试看重启电脑会不会好，应该用doing",
      },
      {
        title: "go on to do和go on doing混淆",
        wrong: "After finishing math, we went on doing English.",
        correct: "After finishing math, we went on to do English.",
        reason: "数学和英语是不同的科目，表示转换到新任务，应该用to do",
      },
      {
        title: "regret to do和regret doing混淆",
        wrong: "I regret to tell her the truth yesterday.",
        correct: "I regret telling her the truth yesterday.",
        reason: "昨天已经告诉了，表示后悔做过这件事，应该用doing",
      },
    ],
    keyQuestions: [
      "这个动作是否已经发生？\u2014\u2014已发生用doing，未发生用to do",
      "说话人是在回忆经历还是表达意图？\u2014\u2014回忆用doing，意图用to do",
      "是停止一件事去做另一件事，还是停止同一件事？\u2014\u2014前者用to do，后者用doing",
      "是努力尝试还是试验性尝试？\u2014\u2014努力用to do，试验用doing",
      "是继续同一件事还是转做另一件事？\u2014\u2014同一事用doing，另一事用to do",
    ],
    stateVerbs: {
      categories: [
        { label: "未做/将做类", verbs: ["remember to do", "forget to do", "stop to do", "go on to do", "regret to do"] },
        { label: "已做/经历类", verbs: ["remember doing", "forget doing", "stop doing", "go on doing", "regret doing"] },
        { label: "努力/试验类", verbs: ["try to do (努力)", "try doing (试验)"] },
      ],
      example: {
        wrong: "I will never forget to see that movie. It was amazing.",
        correct: "I will never forget seeing that movie. It was amazing.",
        note: "电影已经看过并且很精彩，表示不会忘记这个经历，应该用seeing",
      },
    },
  },
  practice: [
    {
      title: "选择正确形式",
      titleEn: "Choose the correct form",
      type: "fill",
      items: [
        {
          question: "I remember _____ (lock) the door before leaving. (已经锁了)",
          answer: "locking",
        },
        {
          question: "Don't forget _____ (turn) off the lights when you leave. (还没关)",
          answer: "to turn",
        },
        {
          question: "He stopped _____ (smoke) last year for health reasons. (戒烟了)",
          answer: "smoking",
        },
        {
          question: "She stopped _____ (buy) some flowers on her way home. (停下来去买)",
          answer: "to buy",
        },
        {
          question: "I tried _____ (open) the window but it was stuck. (努力开)",
          answer: "to open",
        },
        {
          question: "Why not try _____ (add) some sugar? Maybe it will taste better. (试试看)",
          answer: "adding",
        },
        {
          question: "After introducing himself, he went on _____ (explain) the purpose of his visit. (接着说另一件事)",
          answer: "to explain",
        },
        {
          question: "I regret _____ (not study) harder when I was young. (后悔没做)",
          answer: "not studying",
        },
      ],
    },
    {
      title: "翻译练习",
      titleEn: "Translation practice",
      type: "fill",
      items: [
        {
          question: "请翻译：我记得在机场见过她。(remember)",
          answer: "I remember meeting/seeing her at the airport.",
        },
        {
          question: "请翻译：别忘了给我打电话。(forget)",
          answer: "Don't forget to call me.",
        },
        {
          question: "请翻译：他停下来欣赏风景。(stop)",
          answer: "He stopped to enjoy the scenery.",
        },
        {
          question: "请翻译：她试着用另一种方法解决这个问题。(try)",
          answer: "She tried solving the problem in a different way.",
        },
        {
          question: "请翻译：我很遗憾地通知你，你的申请被拒绝了。(regret)",
          answer: "I regret to inform you that your application has been rejected.",
        },
      ],
    },
    {
      title: "语境选择",
      titleEn: "Contextual choice",
      type: "identify",
      items: [
        {
          question: "根据语境选择正确形式：A: Do you want to play tennis? B: No, I tried _____ (play) it once but I didn\u2019t like it.",
          answer: "playing \u2014 这里是试验性尝试，试试看打网球，结果不喜欢",
        },
        {
          question: "根据语境选择正确形式：I remember _____ (see) you at the conference last year. You gave a great speech.",
          answer: "seeing \u2014 回忆去年在会议上见过你，已发生的经历",
        },
        {
          question: "根据语境选择正确形式：The teacher went on _____ (give) more examples after explaining the rule.",
          answer: "to give \u2014 讲完规则后转换到举例，是做另一件事",
        },
        {
          question: "根据语境选择正确形式：He tried _____ (reach) the book on the top shelf but he was too short.",
          answer: "to reach \u2014 努力去够书架上的书，强调付出努力",
        },
      ],
    },
  ],
  production: [
    {
      title: "日记写作",
      titleEn: "Diary writing",
      description:
        "写一篇日记，描述你昨天一天的经历，要求至少使用5个不同的动词后接to do或doing，并体现它们的含义差异（如：I remember doing... / I forgot to do... / I stopped to do... 等）。",
      example: [
        "Today was a busy day. I forgot to set my alarm last night, so I woke up late. I remember promising my friend to meet at 9, but I was already late. I stopped to buy some coffee on the way. I tried calling her but she didn\u2019t answer. After arriving, I went on to finish the group project. I regret telling her I would be on time.",
        "今天是忙碌的一天。我昨晚忘了设闹钟，所以起晚了。我记得答应过朋友9点见面，但已经迟了。我在路上停下来买了杯咖啡。我试着给她打电话但她没接。到了之后，我接着完成了小组作业。我后悔告诉她我会准时到。",
      ],
    },
    {
      title: "建议与提醒",
      titleEn: "Advice giving",
      description:
        "你的朋友准备参加英语考试，用今天学的句型给他/她提建议。至少使用4个不同的动词+to do/doing结构。例如：Remember to... / Don't forget to... / Try doing... / Stop doing... 等。",
      example: [
        "Here is my advice for your English exam:",
        "1. Remember to review all the grammar rules before the exam.",
        "2. Don\u2019t forget to bring your student ID and pencils.",
        "3. Try reading the questions carefully before answering.",
        "4. Stop worrying about the listening section. You have practiced a lot.",
        "5. After finishing the reading part, go on to do the writing section.",
        "6. You will never regret working so hard for this exam!",
      ],
    },
  ],
  summary: {
    keyPoints: [
      {
        title: "意义差异对照表",
        items: [
          "remember to do = 记得要去做（未做） vs remember doing = 记得做过（已做）",
          "forget to do = 忘记去做（未做） vs forget doing = 忘记做过（已做）",
          "stop to do = 停下来去做另一事 vs stop doing = 停止做某事",
          "try to do = 努力去做 vs try doing = 试着做做看",
          "go on to do = 接着做另一事 vs go on doing = 继续做同一事",
          "regret to do = 遗憾地做 vs regret doing = 后悔做过",
        ],
      },
      {
        title: "判断方法",
        items: [
          "看时间：动作已发生\u2192doing，未发生\u2192to do",
          "看意图：表达意愿/目的\u2192to do，回忆经历\u2192doing",
          "看语境：同一事\u2192doing，另一事\u2192to do",
        ],
      },
    ],
    mindMap:
      "不定式vs动名词意义差异\n\u251c\u2500\u2500 时间类：remember / forget\n\u2502   \u251c\u2500\u2500 to do \u2192 未做（前瞻）\n\u2502   \u2514\u2500\u2500 doing \u2192 已做（回顾）\n\u251c\u2500\u2500 动作类：stop / go on\n\u2502   \u251c\u2500\u2500 to do \u2192 另一件事\n\u2502   \u2514\u2500\u2500 doing \u2192 同一件事\n\u251c\u2500\u2500 尝试类：try\n\u2502   \u251c\u2500\u2500 to do \u2192 努力（困难）\n\u2502   \u2514\u2500\u2500 doing \u2192 试验（探索）\n\u2514\u2500\u2500 情感类：regret\n    \u251c\u2500\u2500 to do \u2192 遗憾地通知\n    \u2514\u2500\u2500 doing \u2192 后悔做过",
    selfTest: [
      {
        question: "I remember _____ the door, so it must be locked.",
        options: ["A. to lock", "B. locking", "C. to locking", "D. lock"],
        answer: "B \u2014 门已经锁了，remember doing表示记得做过",
      },
      {
        question: "Don\u2019t forget _____ your passport when you go to the airport.",
        options: ["A. taking", "B. taken", "C. to take", "D. take"],
        answer: "C \u2014 还没去机场，forget to do表示忘记去做",
      },
      {
        question: "The baby stopped _____ when his mother picked him up.",
        options: ["A. cry", "B. to cry", "C. crying", "D. to crying"],
        answer: "C \u2014 婴儿停止哭泣，stop doing表示停止做某事",
      },
      {
        question: "She went on _____ about her vacation for hours.",
        options: ["A. talk", "B. to talk", "C. talking", "D. to talking"],
        answer: "C \u2014 继续谈论同一个话题，go on doing表示继续做同一事",
      },
    ],
  },
};

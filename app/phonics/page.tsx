"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// ============================================================
// 类型定义
// ============================================================
interface PhonicsItem {
  text: string;
  ipa: string;
  examples: string[];
  type: 'vowel' | 'consonant' | 'blend' | 'digraph';
  mouthGuide: string;
  detailedGuide?: string;  // 详细讲解
  commonMistakes?: string;  // 常见错误
  tips?: string;  // 学习技巧
}

interface PracticeQuestion {
  type: 'listen' | 'match' | 'fill';
  question: string;
  options: string[];
  answer: string;
  hint: string;
  word?: string;
}

interface Lesson {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  guideline: string;
  detailedExplanation: string;  // 详细讲解
  keyPoints: string[];  // 要点列表
  examples: string[];  // 详细示例
  commonPatterns: string;  // 常见模式
  emoji: string;
  items: PhonicsItem[];
  practice: PracticeQuestion[];
  sentences?: string[];
}

// ============================================================
// 完整课程数据
// ============================================================
const lessons: Lesson[] = [
  // ---- Level 0: 字母表发音 ----
  {
    id: 'alphabet',
    title: '字母表发音',
    titleEn: 'Alphabet Sounds',
    emoji: '🔤',
    description: '先建立“字母名称”和“字母在单词中的常见发音”之间的联系。一个字母可能对应不止一个音，本课先学习最常见、最适合入门拼读的对应关系。',
    guideline: '拼读单词时，不要逐个念字母名称；要根据单词中的字母组合调用对应的音。例如 cat 读 /k/ + /æ/ + /t/。注意：A 不总是 /æ/，本课学习的是它在 apple 等词中的常见短音。',
    detailedExplanation: `🎯 什么是字母发音？

英语字母有两个相关但不同的概念：
1. **字母名称** (Letter Name)：就是你唱字母歌时听到的音，比如 A 读作 /eɪ/
2. **字母在词中的发音** (Letter Sound)：字母或字母组合在具体单词里代表的音，比如 A 在 "apple" 中读作 /æ/

📝 **为什么要区分？**
- 当你看到单词 "cat" 时，你不能读成 "see-ay-tee"
- 你应该调用这个单词里的**音**：/k/ + /æ/ + /t/ = cat
- 同一个字母会因位置和组合而变化，例如 a 在 cat、cake、about 中并不相同

🔍 **元音 vs 辅音**
- **元音字母 (Vowel Letters)**：A, E, I, O, U；Y 在部分单词中也承担元音功能
- **辅音字母 (Consonant Letters)**：其余字母通常代表辅音
- 每个音节通常有一个元音音素，但拼写中的元音字母和实际听到的元音不是简单的一一对应

💡 **学习技巧**
1. 先听示范，再观察口型和气流
2. 用短音和常见辅音练习简单单词
3. 遇到新组合时学习新规则，不把本课的入门音套到所有单词`,
    keyPoints: [
      '字母名称和字母在词中的发音不是一回事',
      '拼读时调用音，不逐个念字母名称',
      '同一个字母可能代表多个音，要结合位置和字母组合判断',
      '每个音节通常有元音音素；字母 Y 有时也承担元音功能',
    ],
    examples: [
      '字母 A：名称是 /eɪ/（像 "eight"），声音是 /æ/（像 "apple"）',
      '字母 B：名称是 /biː/（像 "bee"），声音是 /b/（像 "ball"）',
      '字母 C：名称是 /siː/（像 "see"），声音是 /k/（像 "cat"）',
    ],
    commonPatterns: '本课先学最常见的入门对应关系。辅音通常比元音稳定，但 C、G、X、Y 等字母会随位置改变；元音字母的变化更多，需要在后续规则中继续学习。',
    sentences: [
      'A big cat sat on a mat.',
      'I have a red pen and a map.',
      'The dog can run fast.',
      'We see a big fish in the sun.',
      'Mom made a cup of hot tea.',
    ],
    items: [
      { text: 'A', ipa: '/æ/', examples: ['Apple', 'Ant', 'Alligator'], type: 'vowel', mouthGuide: '嘴巴张大，舌头放平', detailedGuide: '嘴巴张大，舌头放平，发出短促的 /æ/ 音。这是英语中最常见的元音之一。', commonMistakes: '容易读成字母名称 /eɪ/，记住：拼读时用声音 /æ/', tips: '想象你去看医生，医生让你张嘴说"啊"' },
      { text: 'B', ipa: '/b/', examples: ['Ball', 'Boy', 'Banana'], type: 'consonant', mouthGuide: '双唇闭合，然后张开', detailedGuide: '双唇闭合，憋住气，然后突然张开嘴巴，让气流冲出来。声带振动。', commonMistakes: '不要读成 /biː/，记住：拼读时只发 /b/', tips: '想象你在说"拜拜"时的第一个音' },
      { text: 'C', ipa: '/k/', examples: ['Cat', 'Car', 'Cup'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '舌根抬起抵住软腭（口腔后部），憋住气，然后突然放开。声带不振动。', commonMistakes: 'C 有两种发音：/k/（cat）和 /s/（city）。在 a, o, u 前读 /k/', tips: '想象你在咳嗽时的发音' },
      { text: 'D', ipa: '/d/', examples: ['Dog', 'Dad', 'Duck'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '舌尖抵住上齿龈（上牙后面的小突起），憋住气，然后突然放开。声带振动。', commonMistakes: '不要读成 /diː/，记住：拼读时只发 /d/', tips: '想象你在说"的"字时的发音' },
      { text: 'E', ipa: '/ɛ/', examples: ['Egg', 'Elephant', 'End'], type: 'vowel', mouthGuide: '嘴巴半开，舌头稍高', detailedGuide: '嘴巴半开，舌头位置比 /æ/ 稍高，嘴角微微向两边拉。', commonMistakes: '容易读成字母名称 /iː/，记住：拼读时用声音 /ɛ/', tips: '想象你在说"诶"时的发音' },
      { text: 'F', ipa: '/f/', examples: ['Fish', 'Fun', 'Fox'], type: 'consonant', mouthGuide: '上齿轻咬下唇', detailedGuide: '上齿轻轻咬住下唇，让气流从缝隙中挤出来。声带不振动。', commonMistakes: '不要读成 /ɛf/，记住：拼读时只发 /f/', tips: '想象你在吹蜡烛时的发音' },
      { text: 'G', ipa: '/ɡ/', examples: ['Go', 'Green', 'Gift'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '舌根抬起抵住软腭，憋住气，然后突然放开。声带振动。', commonMistakes: 'G 有两种发音：/ɡ/（go）和 /dʒ/（gem）。在 e, i, y 前可能读 /dʒ/', tips: '想象你在说"哥"字时的发音' },
      { text: 'H', ipa: '/h/', examples: ['Hat', 'Hot', 'Hand'], type: 'consonant', mouthGuide: '嘴巴张开，轻轻呼气', detailedGuide: '嘴巴自然张开，轻轻呼气，就像在哈气一样。声带不振动。', commonMistakes: '不要读成 /eɪtʃ/，记住：拼读时只发 /h/', tips: '想象你在哈气暖手时的发音' },
      { text: 'I', ipa: '/ɪ/', examples: ['Ink', 'Insect', 'Igloo'], type: 'vowel', mouthGuide: '嘴巴微开，舌头稍高', detailedGuide: '嘴巴微微张开，舌头位置较高，声音短促、放松。', commonMistakes: '本卡学习短音 /ɪ/；在 ice、island 中，i 读 /aɪ/，不能套用本卡短音。', tips: '先模仿录音，不要把它直接等同于汉语“一”' },
      { text: 'J', ipa: '/dʒ/', examples: ['Jump', 'Juice', 'Jet'], type: 'consonant', mouthGuide: '舌面抵住硬腭', detailedGuide: '舌面抬起抵住硬腭，憋住气，然后突然放开，同时有 /ʃ/ 的摩擦音。声带振动。', commonMistakes: '不要读成 /dʒeɪ/，记住：拼读时只发 /dʒ/', tips: '想象你在说"举"字时的发音' },
      { text: 'K', ipa: '/k/', examples: ['Kit', 'King', 'Key'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '舌根抬起抵住软腭，憋住气，然后突然放开。声带不振动。和 C 的硬音相同。', commonMistakes: '不要读成 /keɪ/，记住：拼读时只发 /k/', tips: '想象你在说"科"字时的发音' },
      { text: 'L', ipa: '/l/', examples: ['Lion', 'Lamp', 'Leaf'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '舌尖抵住上齿龈，让气流从舌头两边流出来。声带振动。', commonMistakes: '不要读成 /ɛl/，记住：拼读时只发 /l/', tips: '想象你在说"了"字时的发音' },
      { text: 'M', ipa: '/m/', examples: ['Man', 'Map', 'Moon'], type: 'consonant', mouthGuide: '双唇闭合，从鼻子出气', detailedGuide: '双唇闭合，让气流从鼻子里出来。声带振动。', commonMistakes: '不要读成 /ɛm/，记住：拼读时只发 /m/', tips: '想象你在说"嗯"时的发音' },
      { text: 'N', ipa: '/n/', examples: ['Net', 'Nose', 'Nut'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '舌尖抵住上齿龈，让气流从鼻子里出来。声带振动。', commonMistakes: '不要读成 /ɛn/，记住：拼读时只发 /n/', tips: '想象你在说"呢"字时的发音' },
      { text: 'O', ipa: '/ɑ/', examples: ['Ox', 'Octopus', 'On'], type: 'vowel', mouthGuide: '嘴巴张开，舌位较低', detailedGuide: '本课采用通用美式示范：嘴巴张开，舌位较低，发 /ɑ/。不同英语口音的短 o 会有差异。', commonMistakes: '本卡学习短音 /ɑ/；字母 o 还可能发 /oʊ/、/ʌ/ 等其他音。', tips: '先听示范并模仿，不要直接等同于汉语“哦”' },
      { text: 'P', ipa: '/p/', examples: ['Pen', 'Pig', 'Park'], type: 'consonant', mouthGuide: '双唇闭合，然后张开', detailedGuide: '双唇闭合，憋住气，然后突然张开嘴巴，让气流冲出来。声带不振动。', commonMistakes: '不要读成 /piː/，记住：拼读时只发 /p/', tips: '想象你在说"扑"字时的发音' },
      { text: 'Q', ipa: '/kw/', examples: ['Queen', 'Quick', 'Quiz'], type: 'consonant', mouthGuide: '舌根发 /k/，再迅速圆唇', detailedGuide: '在多数常见英语词中，q 后接 u，qu 通常发 /kw/：先发 /k/，再快速滑到 /w/。', commonMistakes: '不要说成字母名称 /kjuː/。少数外来词中 q 的拼写与读音会不同，先掌握常见 qu。', tips: '把 /k/ 和 /w/ 连成一个紧凑的音群' },
      { text: 'R', ipa: '/r/', examples: ['Red', 'Run', 'Rain'], type: 'consonant', mouthGuide: '舌尖抬起或略向后收，但不碰上颚', detailedGuide: '舌尖抬起或略向后收，与上颚保持空隙；嘴唇可轻微收圆，声带振动。不要弹舌。', commonMistakes: '英语 /r/ 不等于汉语“日”，舌尖也不要碰到上齿龈。', tips: '保持舌尖悬空，直接滑向后面的元音' },
      { text: 'S', ipa: '/s/', examples: ['Sun', 'Sit', 'Snake'], type: 'consonant', mouthGuide: '舌尖靠近上齿龈', detailedGuide: '舌尖靠近上齿龈，让气流从缝隙中挤出来。声带不振动。', commonMistakes: '不要读成 /ɛs/，记住：拼读时只发 /s/', tips: '想象蛇发出的"嘶嘶"声' },
      { text: 'T', ipa: '/t/', examples: ['Top', 'Toy', 'Tiger'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '舌尖抵住上齿龈，憋住气，然后突然放开。声带不振动。', commonMistakes: '不要读成 /tiː/，记住：拼读时只发 /t/', tips: '想象你在说"特"字时的发音' },
      { text: 'U', ipa: '/ʌ/', examples: ['Up', 'Umbrella', 'Under'], type: 'vowel', mouthGuide: '嘴巴微开，舌头放平', detailedGuide: '嘴巴微微张开，舌头放平，嘴唇自然放松。', commonMistakes: '容易读成字母名称 /juː/，记住：拼读时用声音 /ʌ/', tips: '想象你在说"啊"时的发音，但更短促' },
      { text: 'V', ipa: '/v/', examples: ['Van', 'Vest', 'Violin'], type: 'consonant', mouthGuide: '上齿轻咬下唇', detailedGuide: '上齿轻轻咬住下唇，让气流从缝隙中挤出来。声带振动。和 F 相似，但 V 有振动。', commonMistakes: '不要读成 /viː/，记住：拼读时只发 /v/', tips: '想象你在说"呜"时，上齿咬住下唇' },
      { text: 'W', ipa: '/w/', examples: ['Win', 'Water', 'Wolf'], type: 'consonant', mouthGuide: '双唇圆起', detailedGuide: '双唇圆起，像要吹口哨一样，然后快速滑到后面的元音。', commonMistakes: '不要读成 /ˈdʌbljuː/，记住：拼读时只发 /w/', tips: '想象你在说"呜"时的发音' },
      { text: 'X', ipa: '/ks/', examples: ['Fox', 'Box', 'Six'], type: 'consonant', mouthGuide: '舌根 + 舌尖', detailedGuide: 'X 发两个音：先发 /k/，再发 /s/。快速连在一起。', commonMistakes: '不要读成 /ɛks/，记住：拼读时只发 /ks/', tips: '想象你在说"克斯"时的快速发音' },
      { text: 'Y', ipa: '/j/', examples: ['Yes', 'Yellow', 'Yarn'], type: 'consonant', mouthGuide: '舌面靠近硬腭', detailedGuide: '舌面抬起靠近硬腭，但不要碰到。快速滑到后面的元音。', commonMistakes: 'Y 有时是元音（如 my, gym），有时是辅音（如 yes）', tips: '想象你在说"耶"时的发音' },
      { text: 'Z', ipa: '/z/', examples: ['Zoo', 'Zero', 'Zip'], type: 'consonant', mouthGuide: '舌尖靠近上齿龈', detailedGuide: '舌尖靠近上齿龈，让气流从缝隙中挤出来。声带振动。和 S 相似，但 Z 有振动。', commonMistakes: '不要读成 /zɛd/ 或 /ziː/，记住：拼读时只发 /z/', tips: '想象蜜蜂发出的"嗡嗡"声' },
    ],
    practice: [
      { type: 'listen', question: '听示例词开头的音，选择对应字母', options: ['A', 'E', 'I'], answer: 'A', hint: '示例词是 apple，开头是短音 /æ/。', word: 'apple' },
      { type: 'listen', question: '听示例词开头的音，选择对应字母', options: ['B', 'D', 'P'], answer: 'B', hint: '示例词是 ball，开头是 /b/。', word: 'ball' },
      { type: 'listen', question: '听示例词开头的音，选择对应字母', options: ['M', 'N', 'L'], answer: 'M', hint: '示例词是 moon，开头是 /m/。', word: 'moon' },
    ]
  },

  // ---- Level 1: 短元音 CVC ----
  {
    id: 'short-vowels',
    title: '短元音 CVC 词',
    titleEn: 'Short Vowels (CVC Words)',
    emoji: '📝',
    description: 'CVC 词由“辅音音素 + 短元音 + 辅音音素”构成，是练习从单个音到整词合成的理想起点。',
    guideline: '在许多规则、单音节 CVC 词中，如 cat、bed、sit，中心元音通常读短音。先检查字母是否真的只代表三个音；含 sh、ch、ck 或 silent e 的词要用对应的新规则。',
    detailedExplanation: `🎯 什么是 CVC 词？

CVC = Consonant + Vowel + Consonant（辅音 + 元音 + 辅音）

📝 **CVC 词的结构**
- 第一个字母：辅音（如 c）
- 中间字母：元音（如 a）
- 最后一个字母：辅音（如 t）
- 组合起来：c-a-t = cat（猫）

🔍 **为什么叫"短元音"？**
- 元音在规则 CVC 词中通常发短音（short vowel）
- “短元音”是音类名称，不是简单地把声音读得更短
- 后面会学习 silent e、元音组合和例外词，不能只凭“夹在辅音中间”机械判断

💡 **如何读 CVC 词？**
1. 先读第一个辅音：/k/
2. 再读中间的元音：/æ/
3. 最后读后一个辅音：/t/
4. 快速连起来：/k/ + /æ/ + /t/ = cat

🎯 **5 个短元音对照表**
| 元音 | 发音 | 口型 | 例词 |
|------|------|------|------|
| a | /æ/ | 嘴巴张大 | cat, bat, mat |
| e | /ɛ/ | 嘴巴半开 | bed, hen, pen |
| i | /ɪ/ | 嘴巴微开 | pig, sit, hit |
| o | /ɑ/ | 嘴巴张开、舌位低 | hot, pot, top |
| u | /ʌ/ | 嘴巴放松 | bug, cup, sun |`,
    keyPoints: [
      'CVC = 辅音 + 元音 + 辅音',
      '规则 CVC 词的中心元音通常发短音',
      '从左到右依次读出每个字母的声音',
      '快速连起来就是一个完整的单词',
    ],
    examples: [
      'cat: /k/ + /æ/ + /t/ = 猫',
      'hot: /h/ + /ɑ/ + /t/ = 热的',
      'sun: /s/ + /ʌ/ + /n/ = 太阳',
    ],
    commonPatterns: '这是高频而有用的入门模式，不是对所有拼写的绝对定律。先用 cat、bed、sit、hot、sun 等规则词练熟，再单独学习字母组合和例外。',
    sentences: [
      'The cat sat on the mat.',
      'A big pig is in the mud.',
      'The dog can run and jump.',
      'Mom has a red cup.',
      'I see a fat hen on the log.',
    ],
    items: [
      { text: 'a', ipa: '/æ/', examples: ['Cat', 'Bat', 'Mat', 'Dad', 'Ran', 'Map'], type: 'vowel', mouthGuide: '嘴巴张大，舌头放平', detailedGuide: '嘴巴张大，舌头放平，发出短促的 /æ/ 音。想象你在说"啊"，但更短。', commonMistakes: '不要读成 /eɪ/（字母 A 的名称），记住：CVC 中的 a 发 /æ/', tips: '想象猫咪被踩到尾巴时发出的"啊"' },
      { text: 'e', ipa: '/ɛ/', examples: ['Bed', 'Hen', 'Pen', 'Red', 'Ten', 'Net'], type: 'vowel', mouthGuide: '嘴巴半开，舌头稍高', detailedGuide: '嘴巴半开，舌头位置比 /æ/ 稍高，嘴角微微向两边拉。', commonMistakes: '不要读成 /iː/（字母 E 的名称），记住：CVC 中的 e 发 /ɛ/', tips: '想象你在说"诶"时的发音' },
      { text: 'i', ipa: '/ɪ/', examples: ['Pig', 'Sit', 'Hit', 'Big', 'Fin', 'Pin'], type: 'vowel', mouthGuide: '嘴巴微开，舌头稍高', detailedGuide: '嘴巴微微张开，舌头位置较高，嘴角微微向两边拉。', commonMistakes: '不要读成 /aɪ/（字母 I 的名称），记住：CVC 中的 i 发 /ɪ/', tips: '想象你在说"一"时的发音，但更短促' },
      { text: 'o', ipa: '/ɑ/', examples: ['Hot', 'Pot', 'Top', 'Mom', 'Cot', 'Nod'], type: 'vowel', mouthGuide: '嘴巴张开，舌位较低', detailedGuide: '本课采用通用美式短 o /ɑ/。嘴巴张开，舌头放低，声音短促。', commonMistakes: '不要读成长音 /oʊ/。注意不同地区口音中短 o 的音质会略有差异。', tips: '以录音为准，保持下巴放松' },
      { text: 'u', ipa: '/ʌ/', examples: ['Bug', 'Cup', 'Sun', 'Run', 'Bus', 'Fun'], type: 'vowel', mouthGuide: '嘴巴微开，舌头放平', detailedGuide: '嘴巴微微张开，舌头放平，嘴唇自然放松。', commonMistakes: '不要读成 /juː/（字母 U 的名称），记住：CVC 中的 u 发 /ʌ/', tips: '想象你在说"啊"时的发音，但更短促' },
    ],
    practice: [
      { type: 'fill', question: '补全单词：c _ t', options: ['a', 'e', 'i'], answer: 'a', hint: '这是 Cat，猫咪。CVC 词中的元音发短音。', word: 'cat' },
      { type: 'fill', question: '补全单词：d _ g', options: ['a', 'o', 'u'], answer: 'o', hint: '这是 Dog，小狗。CVC 词中的元音发短音。', word: 'dog' },
      { type: 'fill', question: '补全单词：s _ n', options: ['a', 'e', 'u'], answer: 'u', hint: '这是 Sun，太阳。CVC 词中的元音发短音。', word: 'sun' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Cat', 'Cut', 'Cot'], answer: 'Cat', hint: '这是猫咪。注意听中间的元音。' },
    ]
  },

  // ---- Level 2: 辅音二合字母 ----
  {
    id: 'digraphs',
    title: '辅音二合字母',
    titleEn: 'Consonant Digraphs',
    emoji: '🤝',
    description: '两个字母共同代表一个主要音。识别时把它们看成一个拼读单元，不要逐个念字母名称。',
    guideline: '当你看到 sh, ch, th, wh, ck 在一起时，它们发出一个全新的声音，不是两个字母的简单组合。',
    detailedExplanation: `🎯 什么是辅音二合字母？

Digraph = Di（两个）+ Graph（字母）= 两个字母组成一个新声音

📝 **二合字母 vs 混合**
- **二合字母 (Digraph)**：两个字母发出一个**全新的**声音，你听不到原来的声音
  - 例如：sh → /ʃ/（不是 /s/ + /h/，而是一个全新的声音）
- **混合 (Blend)**：两个字母发出两个声音，你能听到两个声音
  - 例如：bl → /b/ + /l/（你能听到两个声音）

🔍 **5 个常见的二合字母**
| 组合 | 发音 | 口型 | 例词 |
|------|------|------|------|
| sh | /ʃ/ | 嘴唇微圆，舌头抬起 | ship, shop, fish |
| ch | /tʃ/ | 舌面抵住硬腭 | chip, chat, much |
| th | /θ/ | 舌尖伸出，轻咬舌尖 | think, thin, bath |
| wh | /w/ | 双唇圆起 | what, when, whale |
| ck | /k/ | 舌根抵住软腭 | kick, duck, back |

💡 **学习技巧**
1. 把二合字母当作一个整体，不要分开读
2. 多听多模仿，直到能快速识别
3. 注意：ck 只出现在单词中间或结尾`,
    keyPoints: [
      '二合字母 = 两个字母共同代表一个主要音',
      '不要分开读，要当作一个整体',
      'th 有清音 /θ/ 和浊音 /ð/ 两种常见读法',
      'ck 只出现在单词中间或结尾',
    ],
    examples: [
      'sh: ship（船）, shop（商店）, fish（鱼）',
      'ch: chip（薯片）, chat（聊天）, much（很多）',
      'th: think /θ/（思考）, this /ð/（这个）',
    ],
    commonPatterns: 'sh 和 ch 是最常见的二合字母，th 在英语中也非常常见。',
    sentences: [
      'The ship has a big flag.',
      'Chat with your friend.',
      'I think this path is long.',
      'What do you see?',
      'Kick the ball back to me.',
    ],
    items: [
      { text: 'sh', ipa: '/ʃ/', examples: ['Ship', 'Shop', 'Fish', 'Push', 'Shell', 'Wish'], type: 'digraph', mouthGuide: '嘴唇微圆，舌头抬起', detailedGuide: '嘴唇微微圆起，舌头抬起接近硬腭，让气流从缝隙中挤出来。声带不振动。', commonMistakes: '不要读成 /s/ + /h/，sh 是一个全新的声音', tips: '想象你在说"嘘"时的发音' },
      { text: 'ch', ipa: '/tʃ/', examples: ['Chip', 'Chat', 'Much', 'Chin', 'Lunch', 'Church'], type: 'digraph', mouthGuide: '舌面抵住硬腭', detailedGuide: '舌面抬起抵住硬腭，憋住气，然后突然放开，同时有 /ʃ/ 的摩擦音。声带不振动。', commonMistakes: '不要读成 /k/ + /h/，ch 是一个全新的声音', tips: '想象你在说"吃"字时的发音' },
      { text: 'th', ipa: '/θ/', examples: ['Think', 'Thin', 'Bath', 'Math', 'Path', 'Thumb'], type: 'digraph', mouthGuide: '舌尖伸出，轻咬舌尖', detailedGuide: '舌尖伸出，轻轻咬住舌尖，让气流从缝隙中挤出来。声带不振动。', commonMistakes: '不要读成 /t/ + /h/，th 是一个全新的声音', tips: '想象你在说"思"字时，舌尖伸出' },
      { text: 'th (voiced)', ipa: '/ð/', examples: ['This', 'That', 'The', 'These', 'Those', 'Them'], type: 'digraph', mouthGuide: '舌尖轻触上下齿之间，声带振动', detailedGuide: '口型和 /θ/ 相近，但声带要振动。可把手放在喉咙上感受振动。', commonMistakes: '不要读成 /d/ 或 /z/；保持舌尖可见，并让气流持续通过。', tips: '先交替练 /θ/—/ð/，感受“无振动—有振动”' },
      { text: 'wh', ipa: '/w/', examples: ['What', 'When', 'Whale', 'White', 'Wheel', 'Whisper'], type: 'digraph', mouthGuide: '双唇圆起', detailedGuide: '双唇圆起，像要吹口哨一样，然后快速滑到后面的元音。', commonMistakes: '不要读成 /w/ + /h/，wh 的发音和 /w/ 相同', tips: '想象你在说"呜"时的发音' },
      { text: 'ck', ipa: '/k/', examples: ['Kick', 'Duck', 'Back', 'Sock', 'Neck', 'Lock'], type: 'digraph', mouthGuide: '舌根抵住软腭', detailedGuide: '舌根抬起抵住软腭，憋住气，然后突然放开。声带不振动。', commonMistakes: '不要读成 /k/ + /k/，ck 只发一个 /k/ 音', tips: '想象你在说"克"字时的发音' },
    ],
    practice: [
      { type: 'match', question: '选择正确的二合字母：_ ip (小船)', options: ['sh', 'ch', 'th'], answer: 'sh', hint: 'Ship，小船。sh 发 /ʃ/ 音。' },
      { type: 'match', question: '选择正确的二合字母：_ ink (思考)', options: ['sh', 'ch', 'th'], answer: 'th', hint: 'Think，思考。th 发 /θ/ 音。' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Ship', 'Chip', 'Tip'], answer: 'Ship', hint: '这是小船。注意听 sh 的发音。' },
    ]
  },

  // ---- Level 3: 辅音混合 ----
  {
    id: 'blends',
    title: '辅音混合',
    titleEn: 'Consonant Blends',
    emoji: '🔗',
    description: '两个或三个辅音紧挨在一起，你能听到每个辅音的声音，它们混合在一起！',
    guideline: '当你看到两个辅音挤在一起，但还能听到两个声音（如 bl 在 blue 中），这就是混合。和二合字母不同，混合能听到两个声音。',
    detailedExplanation: `🎯 什么是辅音混合？

Blend = 两个或三个辅音紧挨在一起，你能听到**每个**辅音的声音

📝 **混合 vs 二合字母**
- **混合 (Blend)**：你能听到两个声音
  - 例如：bl → /b/ + /l/（你能听到 b 和 l 的声音）
- **二合字母 (Digraph)**：你只能听到一个新声音
  - 例如：sh → /ʃ/（你听不到 s 和 h 的声音）

🔍 **4 种常见的混合类型**
| 类型 | 组合 | 例词 |
|------|------|------|
| L-Blends | bl, cl, fl, gl, pl, sl | blue, clip, flag |
| R-Blends | br, cr, dr, fr, gr, pr, tr | bring, crab, drum |
| S-Blends | sc, sk, sl, sm, sn, sp, st, sw | scarf, skip, slip |
| End Blends | nd, nt, nk, mp, st, lt | hand, tent, sink |

💡 **如何读混合？**
1. 先读第一个辅音：/b/
2. 再读第二个辅音：/l/
3. 快速连起来，不要停顿：/bl/
4. 然后读后面的元音和辅音

🎯 **学习技巧**
- 混合要快速连读，不要停顿
- 多练习，直到能快速识别
- 注意：混合中的每个字母都要发音`,
    keyPoints: [
      '混合 = 两个辅音紧挨，每个都发音',
      '和二合字母不同，混合能听到两个声音',
      '要快速连读，不要停顿',
      'L-Blends, R-Blends, S-Blends, End Blends 是最常见的',
    ],
    examples: [
      'bl: blue（蓝色）, block（块）, black（黑色）',
      'cr: crab（螃蟹）, cry（哭）, cream（奶油）',
      'st: stop（停止）, star（星星）, step（步骤）',
    ],
    commonPatterns: 'L-Blends 和 R-Blends 在单词开头最常见，End Blends 在单词结尾最常见。',
    sentences: [
      'The blue flag is on the grass.',
      'My frog can jump fast.',
      'Stop and smell the flower.',
      'The clown has a big smile.',
      'I slept in a soft tent.',
    ],
    items: [
      { text: 'L-Blends', ipa: 'bl, cl, fl, gl, pl, sl', examples: ['Blue', 'Clip', 'Flag', 'Glad', 'Play', 'Sleep'], type: 'blend', mouthGuide: '舌尖抵住上齿龈', detailedGuide: 'L-Blends 是以 l 结尾的混合。舌尖抵住上齿龈，先发第一个辅音，再快速滑到 l。', commonMistakes: '不要漏掉 l 的发音，要快速连读', tips: '想象你在说"不啦"时的快速发音' },
      { text: 'R-Blends', ipa: 'br, cr, dr, fr, gr, pr, tr', examples: ['Bring', 'Crab', 'Drum', 'Frog', 'Grape', 'Tree'], type: 'blend', mouthGuide: '舌尖抬起但不碰上颚', detailedGuide: '先发第一个辅音，再迅速滑向 /r/；舌尖保持悬空，不要插入额外元音。', commonMistakes: '不要把 br 读成 /bə-r/；两个辅音之间没有“呃”音。', tips: '先慢速连滑，再逐渐缩短两个音之间的间隔' },
      { text: 'S-Blends', ipa: 'sc, sk, sl, sm, sn, sp, st, sw', examples: ['Scarf', 'Skip', 'Slip', 'Smile', 'Snack', 'Spin'], type: 'blend', mouthGuide: '舌尖靠近上齿龈', detailedGuide: 'S-Blends 是以 s 开头的混合。舌尖靠近上齿龈，先发 s，再快速滑到后面的辅音。', commonMistakes: '不要漏掉 s 的发音，要快速连读', tips: '想象蛇发出的"嘶嘶"声，然后快速接后面的音' },
      { text: 'End Blends', ipa: 'nd, nt, nk, mp, st, lt', examples: ['Hand', 'Tent', 'Sink', 'Jump', 'Fast', 'Belt'], type: 'blend', mouthGuide: '舌尖 + 舌根', detailedGuide: 'End Blends 是在单词结尾的混合。先读前面的元音，再快速连读结尾的两个辅音。', commonMistakes: '不要漏掉结尾的辅音，要快速连读', tips: '想象你在说"安的"时的快速发音' },
    ],
    practice: [
      { type: 'match', question: '选择正确的混合：_ ue (蓝色)', options: ['bl', 'cl', 'fl'], answer: 'bl', hint: 'Blue，蓝色。bl 是 L-Blend。' },
      { type: 'match', question: '选择正确的混合：_ og (青蛙)', options: ['br', 'fr', 'gr'], answer: 'fr', hint: 'Frog，青蛙。fr 是 R-Blend。' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Bring', 'Ring', 'King'], answer: 'Bring', hint: '这是带来。注意听 br 的发音。' },
    ]
  },

  // ---- Level 4: Magic E ----
  {
    id: 'magic-e',
    title: '魔法 E',
    titleEn: 'Silent E / Magic E',
    emoji: '✨',
    description: '在许多“元音 + 辅音 + e”的单音节词中，结尾 e 不发音，却提示前面的元音读长音。',
    guideline: '看到元音 + 辅音 + e（如 cape、time、note）时，可以先尝试长元音；再用整词发音核对。have、give、love 等常见词不遵循这一模式，需要单独学习。',
    detailedExplanation: `🎯 什么是魔法 E？

Magic E = 一个神奇的 e，它不发音，但能改变前面元音的声音

📝 **魔法 E 的规则**
- 在许多“元音 + 辅音 + e”的单音节词中，e 不发音
- 但 e 会"跳过"辅音，让前面的元音发长音
- 例如：cap → cape
  - cap: /k/ + /æ/ + /p/（短音）
  - cape: /k/ + /eɪ/ + /p/（长音）

🔍 **魔法 E 如何工作？**
1. 看到单词：cape
2. 发现结尾是 "辅音 + e"
3. e 不发音，但让 a 变成长音 /eɪ/
4. 读作：/k/ + /eɪ/ + /p/ = cape

🎯 **4 种常见的魔法 E 模式**
| 模式 | 短音词 | 长音词 | 变化 |
|------|--------|--------|------|
| a_e | cap | cape | /æ/ → /eɪ/ |
| i_e | bit | bite | /ɪ/ → /aɪ/ |
| o_e | not | note | /ɑ/ → /oʊ/ |
| u_e | cut | cute | /ʌ/ → /juː/ |

💡 **学习技巧**
1. 看到结尾的 e，先不读它
2. 让前面的元音发长音（字母名称）
3. 然后读后面的辅音
4. 多练习对比：cap vs cape`,
    keyPoints: [
      '魔法 E 不发音，但改变前面元音的声音',
      '元音从短音变成长音（字母名称）',
      '常见字形：元音 + 辅音 + e；结尾 e 通常不单独发音',
      '这是高频模式而非绝对规则，要同时学习 have、give、love 等例外',
    ],
    examples: [
      'cap → cape: 帽子 → 斗篷',
      'bit → bite: 一点 → 咬',
      'not → note: 不 → 笔记',
      'cut → cute: 切 → 可爱',
    ],
    commonPatterns: 'Silent e 是高频拼写模式，适合用成对词学习（cap/cape、kit/kite）。先用规则尝试，再用听音与词义核对。',
    sentences: [
      'I like to bake a cake.',
      'The white kite is on the lake.',
      'My home is on a wide road.',
      'This cute cat likes to hide.',
      'Take a note and make a name.',
    ],
    items: [
      { text: 'a_e', ipa: '/eɪ/', examples: ['Cake', 'Name', 'Snake', 'Lake', 'Game', 'Make'], type: 'vowel', mouthGuide: '嘴巴从大到小滑动', detailedGuide: '嘴巴从大到小滑动，发 /eɪ/ 音。这是字母 A 的名称。', commonMistakes: '不要读成 /æ/，记住：魔法 E 让 a 变成长音', tips: '想象你在说"诶"时的发音' },
      { text: 'i_e', ipa: '/aɪ/', examples: ['Bike', 'Kite', 'Time', 'Smile', 'Hide', 'Five'], type: 'vowel', mouthGuide: '嘴巴从大到小滑动', detailedGuide: '嘴巴从大到小滑动，发 /aɪ/ 音。这是字母 I 的名称。', commonMistakes: '不要读成 /ɪ/，记住：魔法 E 让 i 变成长音', tips: '想象你在说"爱"时的发音' },
      { text: 'o_e', ipa: '/oʊ/', examples: ['Bone', 'Home', 'Hope', 'Rose', 'Note', 'Coke'], type: 'vowel', mouthGuide: '双唇逐渐收圆', detailedGuide: '本课采用通用美式长 o /oʊ/：从较放松的位置滑向更圆、更紧的唇形。', commonMistakes: '不要读成短音 /ɑ/；结尾 e 本身不单独发音。', tips: '先读短词 not，再对比长音词 note' },
      { text: 'u_e', ipa: '/juː/', examples: ['Cube', 'Cute', 'Huge', 'Mute', 'Use', 'Fuse'], type: 'vowel', mouthGuide: '嘴巴从开到合', detailedGuide: '嘴巴从开到合，发 /juː/ 音。这是字母 U 的名称。', commonMistakes: '不要读成 /ʌ/，记住：魔法 E 让 u 变成长音', tips: '想象你在说"优"时的发音' },
    ],
    practice: [
      { type: 'fill', question: '补全单词：c _ p → c _ p e', options: ['a', 'e', 'i'], answer: 'a', hint: 'cap（帽子）→ cape（斗篷）。魔法 E 让 a 变成长音。', word: 'cape' },
      { type: 'fill', question: '补全单词：h _ m → h _ m e', options: ['a', 'o', 'u'], answer: 'o', hint: 'home（家）。魔法 E 让 o 变成长音。', word: 'home' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Cap', 'Cape', 'Cup'], answer: 'Cape', hint: '这是斗篷。注意听长音。' },
    ]
  },

  // ---- Level 5: 元音组合 ----
  {
    id: 'vowel-teams',
    title: '元音组合',
    titleEn: 'Vowel Teams',
    emoji: '👥',
    description: '元音组合是需要整体识别的常见拼写模式。不同组合可能代表长元音或双元音，同一组合也可能有不止一种读法。',
    guideline: '看到 ai、ee、oa 等组合时，把它当作一个拼读单元，再根据已学模式和具体单词判断。不要把“第一个元音说了算”当成适用于所有单词的规则。',
    detailedExplanation: `🎯 什么是元音组合？

Vowel Team = 两个元音紧挨在一起，一起工作

📝 **元音组合的学习方法**
- 把组合整体识别，不逐个念元音字母名称
- 先学习高频对应，如 ai/ay → /eɪ/、ee → /iː/、oi/oy → /ɔɪ/
- 同一拼写可能有多个读音，例如 ea 在 eat、bread、great 中不同
- 所以口诀只能帮助记住少数模式，不能替代听音和词汇积累

🔍 **常见的元音组合**
| 组合 | 发音 | 例词 |
|------|------|------|
| ai, ay | /eɪ/ (Long A) | rain, play |
| ee, ea | /iː/ (Long E) | see, eat |
| igh, ie | /aɪ/ (Long I) | light, pie |
| oa, ow | /oʊ/ (Long O) | boat, snow |
| ue, ew | /juː/ (Long U) | blue, new |
| oi, oy | /ɔɪ/ (Diphthong) | oil, boy |
| ou, ow | /aʊ/ (Diphthong) | out, cow |

💡 **特殊情况**
- ea 有时发 /ɛ/（如 bread, head）
- ow 有时发 /aʊ/（如 cow, now）
- 需要多练习，记住常见单词

🎯 **学习技巧**
1. 先学会常见的元音组合
2. 多读多练，直到能快速识别
3. 注意特殊情况，需要单独记忆`,
    keyPoints: [
      '元音组合要作为一个拼读单元整体识别',
      '不同组合可以代表长元音或双元音',
      '同一组合可能有多个读音，不能机械套用口诀',
      '用“高频模式 + 例外词对比”建立可靠记忆',
    ],
    examples: [
      'ai: rain（雨）, train（火车）, pain（疼痛）',
      'ee: see（看见）, tree（树）, bee（蜜蜂）',
      'oa: boat（船）, coat（外套）, goat（山羊）',
    ],
    commonPatterns: 'ai 和 ay 都发 /eɪ/，但 ai 在单词中间，ay 在单词结尾。',
    sentences: [
      'The rain fell on the train.',
      'I see a green tree by the sea.',
      'The light is bright at night.',
      'The boat floats on the snow.',
      'The boy found a new toy.',
    ],
    items: [
      { text: 'Long A', ipa: 'ai, ay', examples: ['Rain', 'Train', 'Play', 'Stay', 'Day', 'Paint'], type: 'vowel', mouthGuide: '嘴巴从大到小滑动', detailedGuide: '嘴巴从大到小滑动，发 /eɪ/ 音。ai 在单词中间，ay 在单词结尾。', commonMistakes: '不要读成 /æ/，记住：元音组合发长音', tips: '想象你在说"诶"时的发音' },
      { text: 'Long E', ipa: 'ee, ea', examples: ['See', 'Tree', 'Eat', 'Team', 'Read', 'Bean'], type: 'vowel', mouthGuide: '嘴巴微笑', detailedGuide: '嘴巴微笑，发 /iː/ 音。ee 和 ea 都发 /iː/。', commonMistakes: 'ea 有时发 /ɛ/（如 bread），需要单独记忆', tips: '想象你在说"衣"时的发音' },
      { text: 'Long I', ipa: 'igh, ie', examples: ['Light', 'Night', 'Pie', 'Tie', 'Die', 'High'], type: 'vowel', mouthGuide: '嘴巴从大到小滑动', detailedGuide: '嘴巴从大到小滑动，发 /aɪ/ 音。igh 在单词中间或结尾，ie 在单词结尾。', commonMistakes: '不要读成 /ɪ/，记住：元音组合发长音', tips: '想象你在说"爱"时的发音' },
      { text: 'Long O', ipa: 'oa, ow', examples: ['Boat', 'Coat', 'Snow', 'Grow', 'Show', 'Road'], type: 'vowel', mouthGuide: '双唇逐渐收圆', detailedGuide: '通用美式中常读 /oʊ/。oa 常见于词中，ow 常见于词尾，但位置只是提示，不是绝对规则。', commonMistakes: 'ow 也常发 /aʊ/（如 cow、now），需要按单词判断。', tips: '对比 snow /oʊ/ 与 cow /aʊ/' },
      { text: 'Long U', ipa: 'ue, ew', examples: ['Blue', 'True', 'New', 'Few', 'Dew', 'Cue'], type: 'vowel', mouthGuide: '嘴巴从开到合', detailedGuide: '嘴巴从开到合，发 /juː/ 音。ue 和 ew 都发 /juː/。', commonMistakes: '不要读成 /ʌ/，记住：元音组合发长音', tips: '想象你在说"优"时的发音' },
      { text: 'Diphthongs', ipa: 'oi, oy, ou, ow', examples: ['Oil', 'Boy', 'Out', 'Cow', 'Toy', 'Cloud'], type: 'vowel', mouthGuide: '发音时口型从一个位置滑向另一个位置', detailedGuide: 'oi/oy 常读 /ɔɪ/，ou/ow 常读 /aʊ/。听清滑动过程，不要拆成两个汉语音节。', commonMistakes: 'ou/ow 还有其他读音，例如 soul /oʊ/、young /ʌ/。', tips: '先慢速听辨，再一次连续滑完' },
    ],
    practice: [
      { type: 'match', question: '选择正确的元音组合：r _ n (雨)', options: ['ai', 'ea', 'oa'], answer: 'ai', hint: 'Rain，雨。ai 发 /eɪ/ 音。' },
      { type: 'match', question: '选择正确的元音组合：b _ t (船)', options: ['ai', 'ea', 'oa'], answer: 'oa', hint: 'Boat，船。通用美式中 oa 发 /oʊ/。' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Rain', 'Ran', 'Run'], answer: 'Rain', hint: 'Rain 中 ai 读 /eɪ/。Rain 和 rein 是同音词，不能只靠听音区分拼写。' },
    ]
  },

  // ---- Level 6: R控制元音 ----
  {
    id: 'r-controlled',
    title: 'R控制元音',
    titleEn: 'R-Controlled Vowels (Bossy R)',
    emoji: '👑',
    description: '当元音后面紧跟 r 时，元音和 r 往往形成一个新的读音模式。按组合整体学习，比先读元音再加 r 更可靠。',
    guideline: '本课以通用美式发音为示范：ar 常读 /ɑr/，or 常读 /ɔr/，er/ir/ur 在重读音节中常读 /ɝ/。其他英语口音可能不读词尾 r。',
    detailedExplanation: `🎯 什么是 R 控制元音？

R-Controlled Vowels = 元音后面跟着 r，两者共同形成新的读音模式

📝 **为什么要整体学习？**
- ar、or、er、ir、ur 的读音不能由短元音简单相加得到
- 看见元音 + r 时，先识别组合，再调用整组的声音
- 本课采用通用美式读音；英式等非卷舌口音的词尾 r 会不同

🔍 **5 种 R 控制元音**
| 组合 | 发音 | 口型 | 例词 |
|------|------|------|------|
| ar | /ɑr/ | 嘴巴张开，舌尖抬起但不触碰上颚 | car, star, farm |
| er | /ɝ/ | 嘴巴放松，舌身略向后收 | her, fern, term |
| ir | /ɝ/ | 嘴巴放松，舌身略向后收 | bird, girl, shirt |
| or | /ɔr/ | 嘴唇略圆，舌尖保持悬空 | for, corn, horse |
| ur | /ɝ/ | 嘴巴放松，舌身略向后收 | burn, fur, turn |

💡 **特殊情况**
- 在通用美式重读音节中，er、ir、ur 常发 /ɝ/，听起来相同
- ar 常发 /ɑr/
- or 常发 /ɔr/

🎯 **学习技巧**
1. 看到元音 + r，就知道元音要变音
2. er, ir, ur 发音相同，需要通过单词来记忆
3. 多读多练，直到能快速识别`,
    keyPoints: [
      'R 控制元音 = 元音 + r',
      '元音 + r 要作为一个组合整体识别',
      '通用美式中，重读 er、ir、ur 常发 /ɝ/',
      '通用美式中，ar 常发 /ɑr/，or 常发 /ɔr/',
    ],
    examples: [
      'ar: car（车）, star（星星）, farm（农场）',
      'er: her（她）, fern（蕨类）, term（学期）',
      'ir: bird（鸟）, girl（女孩）, shirt（衬衫）',
    ],
    commonPatterns: '通用美式中，重读 er、ir、ur 常同音；ar 和 or 通常不同。非重读 er 常弱化为 /ɚ/，不同英语口音对 r 的处理也会不同。',
    sentences: [
      'The car is in the park.',
      'Her bird is on the fern.',
      'The girl has a purple shirt.',
      'A horse ran to the farm.',
      'Turn left at the big tree.',
    ],
    items: [
      { text: 'ar', ipa: '/ɑr/', examples: ['Car', 'Star', 'Farm', 'Park', 'Shark', 'Dark'], type: 'vowel', mouthGuide: '嘴巴张开，舌尖抬起但不碰上颚', detailedGuide: '先形成 /ɑ/ 的开放口型，再让舌身略后收进入美式 /r/；整个音连续完成。', commonMistakes: '不要把它读成 /æ/，也不要在元音和 r 之间加入额外音节。', tips: '保持舌尖悬空，连续读完整个组合' },
      { text: 'er', ipa: '/ɝ/', examples: ['Her', 'Fern', 'Term', 'Verb', 'Nerd', 'Herb'], type: 'vowel', mouthGuide: '嘴巴放松，舌身略向后收', detailedGuide: '重读 er 在通用美式中常发 /ɝ/。舌尖抬起但不碰上颚，声带持续振动。', commonMistakes: '不要先读 /e/ 再加 /r/；这是一个整体音。', tips: '与 bird、turn 对比，体会三种拼写可以同音' },
      { text: 'ir', ipa: '/ɝ/', examples: ['Bird', 'Girl', 'Shirt', 'Stir', 'First', 'Birth'], type: 'vowel', mouthGuide: '嘴巴放松，舌身略向后收', detailedGuide: '重读 ir 在通用美式中常发 /ɝ/，与重读 er、ur 同音。', commonMistakes: '不要保留短 i 的 /ɪ/；把 ir 当作一个整体。', tips: '用 bird—her—turn 做同音核心对比' },
      { text: 'or', ipa: '/ɔr/', examples: ['For', 'Corn', 'Horse', 'Sport', 'Born', 'Form'], type: 'vowel', mouthGuide: '嘴唇略圆，舌尖保持悬空', detailedGuide: '嘴唇略圆，从 /ɔ/ 平滑进入美式 /r/。不同单词和口音可能略有变化。', commonMistakes: '不要把 o 和 r 拆成两个音节。', tips: '对比 corn 与 car，听清 /ɔr/ 和 /ɑr/' },
      { text: 'ur', ipa: '/ɝ/', examples: ['Burn', 'Fur', 'Turn', 'Nurse', 'Hurt', 'Surf'], type: 'vowel', mouthGuide: '嘴巴放松，舌身略向后收', detailedGuide: '重读 ur 在通用美式中常发 /ɝ/，与重读 er、ir 同音。', commonMistakes: '不要先读 /ʌ/ 再加 /r/；把 ur 当作一个整体。', tips: '用 turn—term—bird 练习相同核心音' },
    ],
    practice: [
      { type: 'match', question: '选择正确的 R控制元音：c _ (车)', options: ['ar', 'er', 'or'], answer: 'ar', hint: 'Car，车。通用美式中 ar 发 /ɑr/。' },
      { type: 'match', question: '选择正确的 R控制元音：b _ d (鸟)', options: ['ar', 'ir', 'ur'], answer: 'ir', hint: 'Bird，鸟。通用美式中重读 ir 发 /ɝ/。' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Car', 'Cur', 'Cir'], answer: 'Car', hint: '这是车。注意听 ar 的发音。' },
    ]
  },

  // ---- Level 7: 双音节词 ----
  {
    id: 'two-syllable',
    title: '双音节词',
    titleEn: 'Two-Syllable Words',
    emoji: '✂️',
    description: '双音节词包含两个元音核心。先听出两个节拍，再用常见拼写切分模式帮助解码，最后回到整词重音。',
    guideline: '先说或听整词，拍手找音节；再识别元音字母或元音组合。VC/CV、V/CV、VC/V 是尝试切分的策略，不是永远正确的发音定律；试读后要用熟词或录音核对。',
    detailedExplanation: `🎯 什么是双音节词？

双音节词就是有两个"拍子"（音节）的单词。每个音节都包含一个元音声音。

📝 **为什么要学习切分单词？**
- 长单词看起来很难，但切成小块就简单了
- 每个小块（音节）都可以用前面学过的规则来读
- 例如：basket = bas + ket，两个小块都很容易读

🔍 **三种切分规则**
1. **VC/CV 规则（Rabbit 规则）**：两个辅音中间切
   - 例：rabbit = rab + bit，sunset = sun + set
2. **V/CV 规则（Tiger 规则）**：第一个元音后切
   - 例：tiger = ti + ger，pilot = pi + lot
3. **VC/V 规则（Lemon 规则）**：辅音后切
   - 例：lemon = le + mon，camel = ca + mel

💡 **学习技巧**
1. 先听整词并拍手，确认有几个音节
2. 找到代表元音音素的字母或字母组合
3. 尝试常见切分方式并读出两个音节
4. 合回整词，注意重读音节通常更清晰、更响亮`,
    keyPoints: [
      '双音节词有两个"拍子"（音节）',
      '每个音节包含一个元音声音',
      'VC/CV：两个辅音中间切（rabbit）',
      'V/CV：第一个元音后切（tiger）',
      'VC/V：辅音后切（lemon）',
    ],
    examples: [
      'Compound（复合词）：sunflower = sun + flower，两个词组合成新词',
      'VC/CV：basket = bas + ket，两个辅音 s-k 中间切',
      'V/CV：music = mu + sic，第一个元音 u 后切',
      'VC/V：lemon = le + mon，辅音 m 后切',
    ],
    commonPatterns: '大多数双音节词可以用 VC/CV 规则。复合词是最简单的，因为它们本来就是两个词组合的。',
    sentences: [
      'The rabbit is in the basket.',
      'I see a rainbow and a sunset.',
      'My robot can play music.',
      'The camel is a big animal.',
      'I am running and jumping.',
    ],
    items: [
      { text: 'Compound', ipa: '2 words', examples: ['Sunflower', 'Rainbow', 'Cupcake', 'Doghouse', 'Bedroom', 'Football'], type: 'blend', mouthGuide: '两个词组合', detailedGuide: '复合词是由两个独立的单词组合而成的新词。每个部分都可以单独读出来。', commonMistakes: '不要把复合词当成一个整体来读，要分开读两个部分', tips: '先读第一个词，再读第二个词，然后连起来' },
      { text: 'VC/CV', ipa: 'Rabbit Rule', examples: ['Rabbit', 'Sunset', 'Basket', 'Magnet', 'Napkin', 'Problem'], type: 'blend', mouthGuide: '两个辅音中间切', detailedGuide: '当两个元音之间有两个辅音时，在这两个辅音中间切分。第一个音节通常是闭音节（短元音）。', commonMistakes: '容易在第一个辅音后切分，记住：两个辅音中间切', tips: '找到两个辅音，在它们中间画一条线' },
      { text: 'V/CV', ipa: 'Tiger Rule', examples: ['Tiger', 'Pilot', 'Music', 'Baby', 'Robot', 'Lemon'], type: 'blend', mouthGuide: '第一个元音后切', detailedGuide: '当两个元音之间只有一个辅音时，通常在第一个元音后切分。第一个音节通常是开音节（长元音）。', commonMistakes: '有时会在辅音后切分（VC/V），需要多读多记', tips: '先试 V/CV，如果读起来不对，再试 VC/V' },
      { text: 'VC/V', ipa: 'Lemon Rule', examples: ['Lemon', 'Camel', 'Robot', 'Visit', 'Habit', 'Cabin'], type: 'blend', mouthGuide: '辅音后切', detailedGuide: '有些单词虽然只有一个辅音，但需要在辅音后切分。第一个音节是闭音节（短元音）。', commonMistakes: '容易和 V/CV 规则混淆，需要通过阅读来记忆', tips: '如果 V/CV 读起来不对，就试 VC/V' },
      { text: 'Suffixes', ipa: '-ing, -ed, -er', examples: ['Running', 'Hopping', 'Wanted', 'Started', 'Player', 'Faster'], type: 'blend', mouthGuide: '先识别词根，再处理后缀', detailedGuide: '后缀能帮助识别结构，但不一定单独形成音节。-ing 通常构成一个音节；-ed 只在 /t/ 或 /d/ 后读 /ɪd/ 并增加音节，如 wanted、started。', commonMistakes: '不要把所有 -ed 都读成一个额外音节；jumped 仍是一个音节。', tips: '先找词根，再数实际听到的元音核心' },
    ],
    practice: [
      { type: 'match', question: '这个单词怎么切分？Sunset', options: ['Sun-set', 'Su-nset', 'Suns-et'], answer: 'Sun-set', hint: '两个辅音中间切（VC/CV 规则）' },
      { type: 'match', question: '这个单词怎么切分？Tiger', options: ['Tig-er', 'Ti-ger', 'Tige-r'], answer: 'Ti-ger', hint: '第一个元音后切（V/CV 规则）' },
      { type: 'listen', question: '听发音，选择正确的拼写', options: ['Rabbit', 'Rabit', 'Rabbitt'], answer: 'Rabbit', hint: 'Rabbit 的拼写中间是双写 bb，可用 VC/CV 方式辅助解码：rab-bit。' },
    ]
  },

  // ---- Level 8: 高频词/例外词 ----
  {
    id: 'sight-words',
    title: '高频词/例外词',
    titleEn: 'Sight Words & Exceptions',
    emoji: '👁️',
    description: '高频词只是“出现得多”，不等于“完全不能拼读”。学习时要保留可拼读的部分，只把真正不规则的字母标成需要特别记忆的部分。',
    guideline: '先说出整词，再把听到的音和字母逐一对应；能用已学规则解释的部分照常拼读，只圈出不规则部分。最后放进短句中反复检索。',
    detailedExplanation: `🎯 什么是高频词/例外词？

高频词是文本中经常出现的词；“例外词”则包含暂时无法用已学规则解释的拼写。两者不是同一个概念。

📝 **为什么需要单独学习？**
- 快速识别高频词能减少阅读时的停顿
- 很多高频词完全可以拼读，如 in、and、went
- 即使是不规则词，也通常只有一部分需要特别记忆，如 said 中 s 和 d 都是规则对应

🔍 **“心词”记忆法（Heart Word）**
1. 先听并说出单词，分出音素
2. 把每个音和对应字母连起来
3. 规则部分照常拼读
4. 只把不规则部分标记为“需要用心记”的部分

💡 **学习技巧**
1. 不要只靠整词形状或死记字母顺序
2. 大声说、逐音对应、遮住后默写
3. 放入短句练习，避免脱离语境
4. 间隔复习：当天、隔天、一周后再认读`,
    keyPoints: [
      '高频词和不规则词不是同一个概念',
      '先映射能拼读的部分，只记真正不规则的部分',
      '用“听音—逐音对应—遮住默写—放入句子”建立稳定记忆',
      '通过间隔复习形成自动识别，而不是一次反复抄写',
    ],
    examples: [
      'the：最常见的英语单词，发音 /ðə/',
      'said：拼写是 s-a-i-d，但发音是 /sɛd/，不是 /saɪd/',
      'was：通用美式常读 /wʌz/，字母 w 和 s/z 的对应可以保留，只需特别记中间元音',
    ],
    commonPatterns: '高频不等于不规则。学习每个词时都先寻找已知的字母—音素对应；只把暂时无法解释的部分作为例外记忆。',
    sentences: [
      'The cat is on the bed.',
      'He said he was here.',
      'I have some water, please.',
      'Come here and look at this.',
      'They said there is a dog.',
    ],
    items: [
      { text: 'the', ipa: '/ðə/, /ði/', examples: ['the cat', 'the apple', 'the answer'], type: 'consonant', mouthGuide: '舌尖轻触上下齿之间，声带振动', detailedGuide: '常见弱读是 /ðə/；元音音素前常见 /ði/，强调时也可读 /ðiː/。', commonMistakes: '不要把 /ð/ 替换成 /d/ 或 /z/。实际语流中读音会受后续声音和强调影响。', tips: '对比 the cat 与 the apple，听连接变化' },
      { text: 'was', ipa: '/wʌz/', examples: ['I was', 'he was', 'it was'], type: 'consonant', mouthGuide: '先圆唇发 /w/，再放松到 /ʌ/', detailedGuide: '通用美式中常读 /wʌz/；词尾 s 在这里发浊音 /z/。', commonMistakes: '不要按字面读成 /wæs/；重点记中间 a 的非常规对应。', tips: '保留规则的 /w/ 和 /z/，只特别记 /ʌ/' },
      { text: 'said', ipa: '/sɛd/', examples: ['he said', 'she said'], type: 'consonant', mouthGuide: '舌尖靠近上齿龈', detailedGuide: '发音时舌尖靠近上齿龈，发出 /s/ 音，然后是 /ɛd/。', commonMistakes: '容易读成 /saɪd/，记住：ai 在这里发 /ɛ/ 音，不是 /aɪ/', tips: '想象你在说"他说"时的发音' },
      { text: 'have', ipa: '/hæv/', examples: ['I have', 'you have'], type: 'consonant', mouthGuide: '嘴巴张大', detailedGuide: '发音时嘴巴张大，发出 /h/ 音，然后是 /æv/。', commonMistakes: '容易读成 /heɪv/，记住：a 在这里发 /æ/ 音', tips: '想象你在说"我有"时的发音' },
      { text: 'come', ipa: '/kʌm/', examples: ['come here', 'come back'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '发音时舌根抵住软腭，发出 /k/ 音，然后是 /ʌm/。', commonMistakes: '容易读成 /koʊm/，记住：o 在这里发 /ʌ/ 音，不是 /oʊ/', tips: '想象你在说"来"时的发音' },
      { text: 'some', ipa: '/sʌm/', examples: ['some water', 'some food'], type: 'consonant', mouthGuide: '舌尖靠近上齿龈', detailedGuide: '发音时舌尖靠近上齿龈，发出 /s/ 音，然后是 /ʌm/。', commonMistakes: '容易读成 /soʊm/，记住：o 在这里发 /ʌ/ 音', tips: '想象你在说"一些"时的发音' },
      { text: 'there', ipa: '/ðɛr/', examples: ['over there', 'there is'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '发音时舌尖伸出，轻轻咬住舌尖，发出 /ð/ 音，然后是 /ɛr/。', commonMistakes: '容易读成 /ðiːr/，记住：e 在这里发 /ɛ/ 音', tips: '想象你在说"那里"时的发音' },
      { text: 'where', ipa: '/wɛr/', examples: ['where is', 'where are'], type: 'consonant', mouthGuide: '双唇圆起', detailedGuide: '发音时双唇圆起，发出 /w/ 音，然后是 /ɛr/。', commonMistakes: '容易读成 /wiːr/，记住：e 在这里发 /ɛ/ 音', tips: '想象你在说"哪里"时的发音' },
      { text: 'who', ipa: '/huː/', examples: ['who is', 'who are'], type: 'consonant', mouthGuide: '嘴巴张开', detailedGuide: '发音时嘴巴张开，发出 /h/ 音，然后是 /uː/。', commonMistakes: '容易读成 /hoʊ/，记住：o 在这里发 /uː/ 音', tips: '想象你在说"谁"时的发音' },
      { text: 'what', ipa: '/wʌt/', examples: ['what is', 'what are'], type: 'consonant', mouthGuide: '先圆唇发 /w/，再放松到中心元音', detailedGuide: '通用美式常读 /wʌt/；部分口音或说话者会有不同音质。', commonMistakes: '不要机械按字母 a 读 /æ/；先模仿整词。', tips: '在短语 what is 中练习自然连接' },
      { text: 'your', ipa: '/jʊr/, /jər/', examples: ['your name', 'your book'], type: 'consonant', mouthGuide: '从 /j/ 滑向带 r 色彩的元音', detailedGuide: '通用美式重读时常读 /jʊr/，弱读时可接近 /jər/。', commonMistakes: '不要把自然弱读当成错误；根据句子重音调整。', tips: '对比单独强调 YOUR 与短语 your book' },
      { text: 'they', ipa: '/ðeɪ/', examples: ['they are', 'they go'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '发音时舌尖伸出，轻轻咬住舌尖，发出 /ð/ 音，然后是 /eɪ/。', commonMistakes: '容易读成 /ðiː/，记住：ey 在这里发 /eɪ/ 音', tips: '想象你在说"他们"时的发音' },
      { text: 'to', ipa: '/tuː/, /tə/', examples: ['to school', 'go to', 'to the store'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈后迅速放开', detailedGuide: '强调或单独读时常为 /tuː/；自然语流中经常弱读为 /tə/。', commonMistakes: '不要每次都重读 /tuː/；功能词在句中常弱读。', tips: '对比 “Where are you going TO?” 与 “go to school”' },
      { text: 'for', ipa: '/fɔr/, /fɚ/', examples: ['for you', 'for me', 'for the cat'], type: 'consonant', mouthGuide: '上齿轻触下唇，再进入 r 音', detailedGuide: '通用美式重读时可读 /fɔr/，自然语流中常弱读为 /fɚ/。', commonMistakes: '不要强迫每次都读完整重读形式；根据句子重音变化。', tips: '在 for you 中练习弱读与连贯' },
      { text: 'of', ipa: '/əv/, /ʌv/', examples: ['cup of tea', 'lot of fun', 'piece of cake'], type: 'consonant', mouthGuide: '结尾用 /v/，声带振动', detailedGuide: '自然语流中常弱读 /əv/，强调时可读 /ʌv/；结尾字母 f 在这里发 /v/。', commonMistakes: '不要读成 /ɑf/；注意词尾是有振动的 /v/。', tips: '把 cup of 连起来练，不要每个词都重读' },
      { text: 'are', ipa: '/ɑr/, /ɚ/', examples: ['we are', 'they are', 'you are'], type: 'consonant', mouthGuide: '舌尖抬起但不碰上颚', detailedGuide: '通用美式重读时常读 /ɑr/，自然语流中可弱读为 /ɚ/。', commonMistakes: '不要把弱读误认为“吞音”；它是英语节奏的一部分。', tips: '对比 “Yes, we ARE.” 与 “We are ready.”' },
      { text: 'this', ipa: '/ðɪs/', examples: ['this cat', 'this book', 'this is'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '发音时舌尖伸出，轻轻咬住舌尖，发出 /ð/ 音，然后是 /ɪs/。', commonMistakes: '不要读成 /ðis/，记住：i 发 /ɪ/', tips: '想象你在说"利斯"时的快速发音' },
      { text: 'do', ipa: '/duː/', examples: ['do it', 'do this', 'do that'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '发音时舌尖抵住上齿龈，发出 /d/ 音，然后是 /uː/。', commonMistakes: '不要读成 /dɒ/，记住：o 在这里发 /uː/ 音', tips: '想象你在说"度"时的发音' },
      { text: 'go', ipa: '/ɡoʊ/', examples: ['go home', 'go to school', 'let us go'], type: 'consonant', mouthGuide: '舌根释放 /ɡ/ 后双唇逐渐收圆', detailedGuide: '通用美式中读 /ɡoʊ/，元音有连续滑动。', commonMistakes: '不要读成短 o /ɡɑ/；也不要拆成两个音节。', tips: '听清 /oʊ/ 的滑动，再连接 go home' },
    ],
    practice: [
      { type: 'listen', question: '听发音，选择正确的单词', options: ['the', 'they', 'there'], answer: 'the', hint: '这是最常见的词，发音 /ðə/' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['was', 'has', 'his'], answer: 'was', hint: '这是“曾经是”，通用美式常读 /wʌz/。' },
      { type: 'match', question: '这个单词怎么读？said', options: ['/sɛd/', '/saɪd/', '/sæd/'], answer: '/sɛd/', hint: '注意：ai 在这里发 /ɛ/ 的音，不是 /aɪ/' },
      { type: 'match', question: '选出正确的拼写：表示"的、那个"', options: ['the', 'tha', 'teh'], answer: 'the', hint: '这是英语中最常见的词' },
      { type: 'match', question: '选择适合句子的词：This gift is ___ you.', options: ['for', 'four', 'fore'], answer: 'for', hint: 'for 表示“给、为了”。for、four、fore 是同音词，不能只靠听音判断拼写。' },
      { type: 'match', question: '选出正确的拼写：表示"是"（复数）', options: ['are', 'or', 'arr'], answer: 'are', hint: 'they are, we are, you are' },
    ]
  },
];

function renderInlineLearningText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="font-bold text-gray-800">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function RichLessonText({ text }: { text: string }) {
  const lines = text.split('\n');

  return (
    <div className="space-y-2 text-gray-600 leading-relaxed">
      {lines.map((rawLine, index) => {
        const line = rawLine.trim();
        if (!line) return <div key={index} className="h-1" aria-hidden="true" />;
        if (/^\|[-|\s]+\|$/.test(line)) return null;

        if (line.startsWith('|') && line.endsWith('|')) {
          const cells = line.slice(1, -1).split('|').map((cell) => cell.trim());
          const isHeader = Boolean(lines[index + 1]?.trim().match(/^\|[-|\s]+\|$/));
          return (
            <div
              key={index}
              className={`grid overflow-hidden rounded-lg border border-gray-200 ${isHeader ? 'bg-blue-50 font-bold text-blue-800' : 'bg-gray-50'}`}
              style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))` }}
            >
              {cells.map((cell, cellIndex) => (
                <span key={cellIndex} className="border-r border-gray-200 px-2 py-2 text-center text-xs last:border-r-0">
                  {renderInlineLearningText(cell)}
                </span>
              ))}
            </div>
          );
        }

        if (/^[🎯📝🔍💡]\s/.test(line)) {
          return (
            <h3 key={index} className="pt-2 text-base font-bold text-gray-900">
              {renderInlineLearningText(line)}
            </h3>
          );
        }

        const numbered = line.match(/^(\d+)\.\s+(.*)$/);
        if (numbered) {
          return (
            <div key={index} className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                {numbered[1]}
              </span>
              <p>{renderInlineLearningText(numbered[2])}</p>
            </div>
          );
        }

        if (line.startsWith('- ')) {
          return (
            <div key={index} className="flex items-start gap-2 pl-1">
              <span className="text-blue-500">•</span>
              <p>{renderInlineLearningText(line.slice(2))}</p>
            </div>
          );
        }

        return <p key={index}>{renderInlineLearningText(line)}</p>;
      })}
    </div>
  );
}

// ============================================================
// 自定义 Hook: 从 localStorage 加载进度
// ============================================================
function loadProgressFromStorage() {
  if (typeof window === 'undefined') {
    return { activeLesson: 0, completed: [] as string[] };
  }
  try {
    const saved = localStorage.getItem('phonics-progress');
    if (saved) {
      const data = JSON.parse(saved);
      return {
        activeLesson: data.activeLesson || 0,
        completed: data.completed || []
      };
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return { activeLesson: 0, completed: [] as string[] };
}

// ============================================================
// 主页面组件
// ============================================================
export default function PhonicsPage() {
  // 使用初始化函数从 localStorage 加载进度
  const [activeLesson, setActiveLesson] = useState(() => loadProgressFromStorage().activeLesson);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => new Set(loadProgressFromStorage().completed));

  const [practiceMode, setPracticeMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const [blendWord, setBlendWord] = useState<string | null>(null);
  const [blendStep, setBlendStep] = useState(-1);
  const [errorCounts, setErrorCounts] = useState<Record<string, number>>({});
  const [showSentences, setShowSentences] = useState(false);

  const lesson = lessons[activeLesson];

  // 保存进度到 localStorage
  const saveProgress = useCallback(() => {
    try {
      localStorage.setItem('phonics-progress', JSON.stringify({
        completed: Array.from(completedLessons),
        activeLesson,
        lastUpdated: new Date().toISOString()
      }));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [completedLessons, activeLesson]);

  useEffect(() => {
    saveProgress();
  }, [saveProgress]);

  // 发音功能
  const speak = (text: string, rate: number = 0.9) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // 混合动画功能
  const startBlend = (word: string) => {
    setBlendWord(word);
    setBlendStep(-1);
    const letters = word.split('');
    letters.forEach((_, i) => {
      setTimeout(() => {
        setBlendStep(i);
        if (i === letters.length - 1) {
          setTimeout(() => speak(word, 0.6), 300);
        }
      }, (i + 1) * 500);
    });
  };

  const isVowel = (char: string) => /[aeiou]/i.test(char);

  // 获取总错误数
  const totalErrors = Object.values(errorCounts).reduce((a, b) => a + b, 0);

  // 获取颜色类名
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vowel': return 'bg-red-50 border-red-200 text-red-700';
      case 'consonant': return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'blend': return 'bg-purple-50 border-purple-200 text-purple-700';
      case 'digraph': return 'bg-green-50 border-green-200 text-green-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  // 获取类型标签
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'vowel': return '元音';
      case 'consonant': return '辅音';
      case 'blend': return '混合';
      case 'digraph': return '二合';
      default: return '';
    }
  };

  // 完成课程
  const completeLesson = () => {
    setCompletedLessons(prev => new Set([...prev, lesson.id]));
  };

  // 开始练习
  const startPractice = () => {
    setPracticeMode(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowHint(false);
    setFeedback(null);
  };

  // 选择答案
  const selectAnswer = (answer: string) => {
    if (feedback !== null) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === lesson.practice[currentQuestion].answer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
      const q = lesson.practice[currentQuestion].question;
      setErrorCounts(prev => ({ ...prev, [q]: (prev[q] || 0) + 1 }));
    }

  };

  // 让学习者先阅读反馈，再主动进入下一题
  const advancePractice = () => {
    if (currentQuestion < lesson.practice.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setFeedback(null);
      setShowHint(false);
    } else {
      setShowResult(true);
      if (score >= Math.ceil(lesson.practice.length * 0.8)) {
        completeLesson();
      }
    }
  };

  // 重新练习
  const resetPractice = () => {
    setPracticeMode(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowHint(false);
    setFeedback(null);
  };

  // 进度百分比
  const progress = (completedLessons.size / lessons.length) * 100;
  const masteryThreshold = Math.ceil(lesson.practice.length * 0.8);

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* 侧边栏 */}
      <div className="w-80 bg-white border-r p-6 hidden md:block shadow-lg">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
            &larr; 返回首页
          </Link>
        </div>

        {/* 进度条 */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>学习进度</span>
            <span>{completedLessons.size}/{lessons.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 完成庆祝 */}
        {completedLessons.size === lessons.length && (
          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-300 text-center">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="font-bold text-yellow-800 text-lg">恭喜完成！</h3>
            <p className="text-yellow-700 text-sm">你已经掌握了所有自然拼读规则！</p>
          </div>
        )}

        <h2 className="font-bold text-xl mb-4 text-gray-800">📚 学习路径</h2>
        <nav className="space-y-2">
          {lessons.map((l, idx) => (
            <button
              key={l.id}
              onClick={() => {
                setActiveLesson(idx);
                setPracticeMode(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                activeLesson === idx 
                  ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="text-xl">{l.emoji}</span>
              <div className="flex-1">
                <div className="text-sm">{l.title}</div>
                <div className="text-xs text-gray-400">{l.titleEn}</div>
              </div>
              {completedLessons.has(l.id) && (
                <span className="text-green-500 text-lg">✓</span>
              )}
            </button>
          ))}
        </nav>

        {/* 颜色图例 */}
        <div className="mt-6 pt-6 border-t">
          <h3 className="font-semibold text-sm text-gray-700 mb-3">颜色图例</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-200" />
              <span className="text-gray-600">元音 (Vowel)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-200" />
              <span className="text-gray-600">辅音 (Consonant)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-200" />
              <span className="text-gray-600">二合字母 (Digraph)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-200" />
              <span className="text-gray-600">混合 (Blend)</span>
            </div>
          </div>
        </div>

        {/* 困难词追踪 */}
        {totalErrors > 0 && (
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold text-sm text-red-600 mb-3">⚠️ 需要复习 ({totalErrors} 次错误)</h3>
            <div className="space-y-2 text-sm max-h-40 overflow-y-auto">
              {Object.entries(errorCounts).slice(0, 8).map(([q, count]) => (
                <div key={q} className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                  <span className="text-red-700 truncate text-xs">{q}</span>
                  <span className="text-red-500 font-bold ml-2">{count}×</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 主内容区 */}
      <div className="flex-1 p-8 md:p-12 max-w-5xl mx-auto">
        {/* 移动端返回按钮 */}
        <div className="md:hidden mb-6">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; 返回首页
          </Link>
        </div>

        {!practiceMode ? (
          <>
            {/* 课程内容 */}
            <header className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{lesson.emoji}</span>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{lesson.title}</h1>
                  <p className="text-lg text-gray-500">{lesson.titleEn}</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{lesson.description}</p>

              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold text-blue-700">1 · 先听</p>
                  <p className="mt-1 text-xs leading-5 text-gray-600">不看中文谐音，先听两遍并观察口型与气流。</p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold text-purple-700">2 · 再合成</p>
                  <p className="mt-1 text-xs leading-5 text-gray-600">把音连起来读整词，避免逐个念字母名称。</p>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold text-emerald-700">3 · 后检索</p>
                  <p className="mt-1 text-xs leading-5 text-gray-600">合上讲解做练习；达到 80% 后隔天再测。</p>
                </div>
              </div>
              
              {/* 使用指南 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r shadow-sm mb-4">
                <p className="text-yellow-800 font-medium">
                  <span className="font-bold">📌 何时使用：</span> {lesson.guideline}
                </p>
              </div>

              {/* 详细讲解 */}
              {lesson.detailedExplanation && (
                <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">📖 详细讲解</h2>
                  <RichLessonText text={lesson.detailedExplanation} />
                </div>
              )}

              {/* 要点列表 */}
              {lesson.keyPoints && lesson.keyPoints.length > 0 && (
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r shadow-sm mb-4">
                  <h3 className="font-bold text-green-800 mb-2">🎯 要点总结</h3>
                  <ul className="text-green-700 space-y-1">
                    {lesson.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 详细示例 */}
              {lesson.examples && lesson.examples.length > 0 && (
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r shadow-sm mb-4">
                  <h3 className="font-bold text-purple-800 mb-2">💡 详细示例</h3>
                  <ul className="text-purple-700 space-y-1">
                    {lesson.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-500">→</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 常见模式 */}
              {lesson.commonPatterns && (
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r shadow-sm mb-4">
                  <h3 className="font-bold text-orange-800 mb-2">🔍 常见模式</h3>
                  <p className="text-orange-700">{lesson.commonPatterns}</p>
                </div>
              )}

              {/* 发音提示 */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r shadow-sm">
                <p className="text-blue-800 font-medium">
                  <span className="font-bold">👄 发音提示：</span> 点击卡片听示例词，先模仿声音，再对照口型。中文联想只用于提醒动作，不能替代真实英语发音。
                </p>
              </div>
            </header>

            {/* 发音卡片网格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {lesson.items.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => speak(item.examples.join(', '), 0.85)}
                  className={`${getTypeColor(item.type)} p-6 rounded-xl border-2 shadow-sm hover:shadow-lg transition-all cursor-pointer group hover:scale-105`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-4xl font-bold">{item.text}</span>
                      <div className="text-xs mt-1 opacity-75">{getTypeLabel(item.type)}</div>
                    </div>
                    <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-mono shadow-sm">
                      {item.ipa}
                    </span>
                  </div>
                  
                  <div className="border-t border-current/20 pt-4 mt-2">
                    <div className="text-sm font-medium mb-2">示例单词：</div>
                    <div className="text-sm leading-relaxed">
                      {item.examples.join(', ')}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/20">
                    <div className="text-xs opacity-75">
                      👄 {item.mouthGuide}
                    </div>
                  </div>

                  {/* 详细讲解（如果有的话） */}
                  {item.detailedGuide && (
                    <div className="mt-3 pt-3 border-t border-current/20">
                      <div className="text-xs opacity-90 leading-relaxed">
                        📝 {item.detailedGuide}
                      </div>
                    </div>
                  )}

                  {/* 常见错误（如果有的话） */}
                  {item.commonMistakes && (
                    <div className="mt-2">
                      <div className="text-xs text-red-600 opacity-90">
                        ⚠️ {item.commonMistakes}
                      </div>
                    </div>
                  )}

                  {/* 学习技巧（如果有的话） */}
                  {item.tips && (
                    <div className="mt-2">
                      <div className="text-xs text-green-600 opacity-90">
                        💡 {item.tips}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 音素混合板 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {lesson.id === 'short-vowels' ? '🔊 三音合成练习' : '🔊 字形观察与整词听辨'}
                </h2>
                <span className="text-sm text-gray-500">
                  {lesson.id === 'short-vowels' ? '看字母、想声音，再连成整词' : '点击单词，观察拼写后听整词'}
                </span>
              </div>
              {lesson.id !== 'short-vowels' && (
                <p className="mb-4 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
                  提醒：动画展示字母出现顺序，不表示每个字母都要单独发音。遇到 sh、ch、元音组合或 silent e 时，要把组合当作一个拼读单元。
                </p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {lesson.items.slice(0, 6).map((item, idx) =>
                  item.examples.slice(0, 3).map((word, widx) => (
                    <button
                      key={`${idx}-${widx}`}
                      onClick={() => startBlend(word.toLowerCase())}
                      className={`px-4 py-2 rounded-lg font-mono text-sm border-2 transition-all ${
                        blendWord === word.toLowerCase()
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 bg-gray-50 text-gray-700'
                      }`}
                    >
                      {word.toLowerCase()}
                    </button>
                  ))
                )}
              </div>

              {blendWord && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {blendWord.split('').map((char, i) => (
                      <div
                        key={i}
                        className={`w-12 h-14 rounded-lg flex items-center justify-center text-2xl font-bold font-mono transition-all duration-300 ${
                          blendStep >= i
                            ? isVowel(char)
                              ? 'bg-red-200 text-red-700 scale-110 shadow-md'
                              : 'bg-blue-200 text-blue-700 scale-110 shadow-md'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {char.toUpperCase()}
                      </div>
                    ))}
                    <div className="text-2xl text-gray-400 mx-2">→</div>
                    <div className={`px-4 py-3 rounded-lg text-xl font-bold transition-all duration-500 ${
                      blendStep === blendWord.length - 1
                        ? 'bg-green-200 text-green-700 scale-110 shadow-md'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {blendWord.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => speak(blendWord, 0.6)}
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-md transition-all font-semibold"
                    >
                      🔊 听完整发音
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 句子朗读练习 */}
            {lesson.sentences && lesson.sentences.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
                <button
                  onClick={() => setShowSentences(!showSentences)}
                  className="flex items-center justify-between w-full"
                >
                  <h2 className="text-xl font-bold text-gray-800">📖 句子朗读练习</h2>
                  <span className="text-blue-500 text-sm">{showSentences ? '收起' : '展开'}</span>
                </button>
                
                {showSentences && (
                  <div className="mt-4 space-y-3">
                    {lesson.sentences.map((sentence, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                        <span className="text-gray-400 font-mono text-sm w-6">{idx + 1}.</span>
                        <p className="flex-1 text-lg text-gray-800 font-medium">{sentence}</p>
                        <button
                          onClick={() => speak(sentence, 0.8)}
                          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all flex items-center gap-2 text-sm"
                        >
                          🔊 朗读
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 练习按钮 */}
            <div className="flex gap-4">
              <button
                onClick={startPractice}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                🎯 开始练习 ({lesson.practice.length} 道题)
              </button>
              
              {activeLesson < lessons.length - 1 && (
                <button
                  onClick={() => {
                    setActiveLesson((prev: number) => prev + 1);
                  }}
                  className="px-6 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  暂时跳到下一课 →
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {/* 练习模式 */}
            {!showResult ? (
              <div className="max-w-2xl mx-auto">
                {/* 练习头部 */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">🎯 练习时间</h2>
                    <p className="text-gray-500">{lesson.title}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">题目</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {currentQuestion + 1}/{lesson.practice.length}
                    </div>
                  </div>
                </div>

                {/* 进度条 */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / lesson.practice.length) * 100}%` }}
                  />
                </div>

                {/* 问题卡片 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {lesson.practice[currentQuestion].type === 'listen' && '👂 听音选词'}
                    {lesson.practice[currentQuestion].type === 'fill' && '✏️ 填空拼写'}
                    {lesson.practice[currentQuestion].type === 'match' && '🔗 配对选择'}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {lesson.practice[currentQuestion].question}
                  </h3>

                  {/* 听音按钮 */}
                  {lesson.practice[currentQuestion].type === 'listen' && (
                    <button
                      onClick={() => speak(lesson.practice[currentQuestion].word ?? lesson.practice[currentQuestion].answer, 0.7)}
                      className="mb-6 px-6 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all flex items-center gap-2"
                    >
                      🔊 再听一次
                    </button>
                  )}

                  {/* 选项 */}
                  <div className="grid grid-cols-1 gap-3">
                    {lesson.practice[currentQuestion].options.map((option, idx) => {
                      const isSelected = selectedAnswer === option;
                      const isCorrect = option === lesson.practice[currentQuestion].answer;
                      
                      let buttonClass = 'border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50';
                      
                      if (feedback !== null) {
                        if (isCorrect) {
                          buttonClass = 'border-2 border-green-500 bg-green-50 text-green-700';
                        } else if (isSelected && !isCorrect) {
                          buttonClass = 'border-2 border-red-500 bg-red-50 text-red-700';
                        }
                      } else if (isSelected) {
                        buttonClass = 'border-2 border-blue-500 bg-blue-50';
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => selectAnswer(option)}
                          disabled={feedback !== null}
                          className={`w-full text-left px-6 py-4 rounded-xl transition-all ${buttonClass}`}
                        >
                          <span className="font-mono text-lg">{option}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* 提示 */}
                  <div className="mt-6">
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      {showHint ? '💡 隐藏提示' : '💡 显示提示'}
                    </button>
                    {showHint && (
                      <div className="mt-2 p-3 bg-yellow-50 rounded-lg text-sm text-yellow-800">
                        {lesson.practice[currentQuestion].hint}
                      </div>
                    )}
                  </div>
                </div>

                {/* 反馈 */}
                {feedback && (
                  <div className={`p-5 rounded-xl text-center ${
                    feedback === 'correct' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    <p className="text-lg font-semibold">
                      {feedback === 'correct' ? '✅ 正确！' : `❌ 正确答案：${lesson.practice[currentQuestion].answer}`}
                    </p>
                    <p className="mt-2 text-sm font-normal leading-6">
                      {lesson.practice[currentQuestion].hint}
                    </p>
                    <button
                      onClick={advancePractice}
                      className={`mt-4 rounded-lg px-5 py-2 text-sm font-bold text-white ${feedback === 'correct' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                    >
                      {currentQuestion < lesson.practice.length - 1 ? '我看懂了，下一题 →' : '查看本轮结果 →'}
                    </button>
                  </div>
                )}

                {/* 返回按钮 */}
                <button
                  onClick={resetPractice}
                  className="mt-6 text-gray-500 hover:text-gray-700"
                >
                  ← 返回课程内容
                </button>
              </div>
            ) : (
              /* 练习结果 */
              <div className="max-w-md mx-auto text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-6xl mb-4">
                    {score === lesson.practice.length ? '🎉' : score >= lesson.practice.length / 2 ? '👍' : '💪'}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">练习完成！</h2>
                  <p className="text-gray-600 mb-6">{lesson.title}</p>
                  
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {score}/{lesson.practice.length}
                  </div>
                  <p className="text-gray-500 mb-8">
                    {score === lesson.practice.length 
                      ? '本轮满分。请隔天再测一次，并尝试朗读一个新词。'
                      : score >= masteryThreshold
                        ? '本轮已达到 80% 掌握线。隔天复测，确认不是短期记忆。'
                        : `本轮掌握线是 ${masteryThreshold}/${lesson.practice.length}。先回到讲解定位错因，再重新练习。`}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={startPractice}
                      className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all"
                    >
                      再试一次
                    </button>
                    <button
                      onClick={resetPractice}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                    >
                      返回课程
                    </button>
                  </div>

                  {score >= masteryThreshold && activeLesson < lessons.length - 1 && (
                    <button
                      onClick={() => {
                        setActiveLesson((prev: number) => prev + 1);
                        setPracticeMode(false);
                      }}
                      className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      下一课 →
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

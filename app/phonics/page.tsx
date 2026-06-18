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
    description: '每个字母都有自己的声音，这是所有拼读的基础。学会这些声音，你就能开始读英语单词了！',
    guideline: '当你看到单个字母时，发它的"声音"（不是字母名称）。例如：A 的声音是 /æ/（像 apple），不是 /eɪ/（字母 A 的名称）。',
    detailedExplanation: `🎯 什么是字母发音？

英语字母有两个"身份"：
1. **字母名称** (Letter Name)：就是你唱字母歌时听到的音，比如 A 读作 /eɪ/
2. **字母声音** (Letter Sound)：就是这个字母在单词中实际发出的音，比如 A 在 "apple" 中读作 /æ/

📝 **为什么要区分？**
- 当你看到单词 "cat" 时，你不能读成 "see-ay-tee"
- 你应该读出每个字母的**声音**：/k/ + /æ/ + /t/ = cat

🔍 **元音 vs 辅音**
- **元音 (Vowels)**：A, E, I, O, U —— 这 5 个字母是英语的"灵魂"，每个单词都必须有元音
- **辅音 (Consonants)**：其余 21 个字母 —— 它们围绕在元音周围，帮助构成单词

💡 **学习技巧**
1. 先学会 5 个元音的声音
2. 再学辅音的声音
3. 把它们组合起来读单词`,
    keyPoints: [
      '字母有两个身份：名称和声音',
      '拼读时用"声音"，不用"名称"',
      'A, E, I, O, U 是元音，其余是辅音',
      '每个单词都必须有元音',
    ],
    examples: [
      '字母 A：名称是 /eɪ/（像 "eight"），声音是 /æ/（像 "apple"）',
      '字母 B：名称是 /biː/（像 "bee"），声音是 /b/（像 "ball"）',
      '字母 C：名称是 /siː/（像 "see"），声音是 /k/（像 "cat"）',
    ],
    commonPatterns: '大多数辅音的发音比较稳定，但 C 和 G 有两种发音（硬音和软音）。',
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
      { text: 'I', ipa: '/ɪ/', examples: ['Ice', 'Ink', 'Island'], type: 'vowel', mouthGuide: '嘴巴微开，舌头稍高', detailedGuide: '嘴巴微微张开，舌头位置较高，嘴角微微向两边拉。', commonMistakes: '容易读成字母名称 /aɪ/，记住：拼读时用声音 /ɪ/', tips: '想象你在说"一"时的发音，但更短促' },
      { text: 'J', ipa: '/dʒ/', examples: ['Jump', 'Juice', 'Jet'], type: 'consonant', mouthGuide: '舌面抵住硬腭', detailedGuide: '舌面抬起抵住硬腭，憋住气，然后突然放开，同时有 /ʃ/ 的摩擦音。声带振动。', commonMistakes: '不要读成 /dʒeɪ/，记住：拼读时只发 /dʒ/', tips: '想象你在说"举"字时的发音' },
      { text: 'K', ipa: '/k/', examples: ['Kit', 'King', 'Key'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '舌根抬起抵住软腭，憋住气，然后突然放开。声带不振动。和 C 的硬音相同。', commonMistakes: '不要读成 /keɪ/，记住：拼读时只发 /k/', tips: '想象你在说"科"字时的发音' },
      { text: 'L', ipa: '/l/', examples: ['Lion', 'Lamp', 'Leaf'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '舌尖抵住上齿龈，让气流从舌头两边流出来。声带振动。', commonMistakes: '不要读成 /ɛl/，记住：拼读时只发 /l/', tips: '想象你在说"了"字时的发音' },
      { text: 'M', ipa: '/m/', examples: ['Man', 'Map', 'Moon'], type: 'consonant', mouthGuide: '双唇闭合，从鼻子出气', detailedGuide: '双唇闭合，让气流从鼻子里出来。声带振动。', commonMistakes: '不要读成 /ɛm/，记住：拼读时只发 /m/', tips: '想象你在说"嗯"时的发音' },
      { text: 'N', ipa: '/n/', examples: ['Net', 'Nose', 'Nut'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '舌尖抵住上齿龈，让气流从鼻子里出来。声带振动。', commonMistakes: '不要读成 /ɛn/，记住：拼读时只发 /n/', tips: '想象你在说"呢"字时的发音' },
      { text: 'O', ipa: '/ɒ/', examples: ['Orange', 'Ox', 'Ostrich'], type: 'vowel', mouthGuide: '嘴巴圆张', detailedGuide: '嘴巴张圆，舌头放低，嘴唇呈圆形。', commonMistakes: '容易读成字母名称 /əʊ/，记住：拼读时用声音 /ɒ/', tips: '想象你在说"哦"时的发音' },
      { text: 'P', ipa: '/p/', examples: ['Pen', 'Pig', 'Park'], type: 'consonant', mouthGuide: '双唇闭合，然后张开', detailedGuide: '双唇闭合，憋住气，然后突然张开嘴巴，让气流冲出来。声带不振动。', commonMistakes: '不要读成 /piː/，记住：拼读时只发 /p/', tips: '想象你在说"扑"字时的发音' },
      { text: 'Q', ipa: '/kw/', examples: ['Queen', 'Quick', 'Quiz'], type: 'consonant', mouthGuide: '舌根 + 双唇', detailedGuide: 'Q 几乎总是和 U 一起出现，发 /kw/ 的音。先发 /k/，再发 /w/。', commonMistakes: 'Q 总是和 U 配对，不要单独用 Q', tips: '想象你在说"夸"字时的发音' },
      { text: 'R', ipa: '/r/', examples: ['Red', 'Run', 'Rain'], type: 'consonant', mouthGuide: '舌头卷起', detailedGuide: '舌头卷起，舌尖接近上齿龈，但不要碰到。声带振动。', commonMistakes: '不要读成 /ɑːr/，记住：拼读时只发 /r/', tips: '想象你在说"日"字时的发音，但舌头更卷' },
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
      { type: 'listen', question: '听发音，选择正确的字母', options: ['A', 'E', 'I'], answer: 'A', hint: '这是 apple 的第一个音' },
      { type: 'listen', question: '听发音，选择正确的字母', options: ['B', 'D', 'P'], answer: 'B', hint: '这是 ball 的第一个音' },
      { type: 'listen', question: '听发音，选择正确的字母', options: ['M', 'N', 'L'], answer: 'M', hint: '这是 moon 的第一个音' },
    ]
  },

  // ---- Level 1: 短元音 CVC ----
  {
    id: 'short-vowels',
    title: '短元音 CVC 词',
    titleEn: 'Short Vowels (CVC Words)',
    emoji: '📝',
    description: 'CVC 词是最简单的单词：辅音 + 元音 + 辅音。元音发短音（懒音）。这是阅读的基础！',
    guideline: '当你看到一个元音被两个辅音夹在中间时（如 c-a-t），元音发短音。记住：元音是懒惰的，只发短短的声音。',
    detailedExplanation: `🎯 什么是 CVC 词？

CVC = Consonant + Vowel + Consonant（辅音 + 元音 + 辅音）

📝 **CVC 词的结构**
- 第一个字母：辅音（如 c）
- 中间字母：元音（如 a）
- 最后一个字母：辅音（如 t）
- 组合起来：c-a-t = cat（猫）

🔍 **为什么叫"短元音"？**
- 元音在 CVC 词中发"短音"（lazy sound）
- 短音就是嘴巴只张开一下，很快就闭上
- 和"长音"（后面会学）不同，长音要拖长

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
| o | /ɒ/ | 嘴巴圆张 | hot, pot, dog |
| u | /ʌ/ | 嘴巴放松 | bug, cup, sun |`,
    keyPoints: [
      'CVC = 辅音 + 元音 + 辅音',
      '元音发短音（懒音）',
      '从左到右依次读出每个字母的声音',
      '快速连起来就是一个完整的单词',
    ],
    examples: [
      'cat: /k/ + /æ/ + /t/ = 猫',
      'dog: /d/ + /ɒ/ + /ɡ/ = 狗',
      'sun: /s/ + /ʌ/ + /n/ = 太阳',
    ],
    commonPatterns: '所有 CVC 词都遵循这个规律：元音在两个辅音中间时发短音。',
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
      { text: 'o', ipa: '/ɒ/', examples: ['Hot', 'Pot', 'Dog', 'Log', 'Mom', 'Cot'], type: 'vowel', mouthGuide: '嘴巴圆张', detailedGuide: '嘴巴张圆，舌头放低，嘴唇呈圆形。', commonMistakes: '不要读成 /əʊ/（字母 O 的名称），记住：CVC 中的 o 发 /ɒ/', tips: '想象你在说"哦"时的发音' },
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
    description: '两个字母手拉手，一起发出一个全新的声音。它们是好朋友，永远不分开！',
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
      '二合字母 = 两个字母组成一个新声音',
      '不要分开读，要当作一个整体',
      'sh, ch, th, wh, ck 是最常见的二合字母',
      'ck 只出现在单词中间或结尾',
    ],
    examples: [
      'sh: ship（船）, shop（商店）, fish（鱼）',
      'ch: chip（薯片）, chat（聊天）, much（很多）',
      'th: think（思考）, thin（瘦）, bath（洗澡）',
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
      { text: 'R-Blends', ipa: 'br, cr, dr, fr, gr, pr, tr', examples: ['Bring', 'Crab', 'Drum', 'Frog', 'Grape', 'Tree'], type: 'blend', mouthGuide: '舌头卷起', detailedGuide: 'R-Blends 是以 r 结尾的混合。舌头卷起，先发第一个辅音，再快速滑到 r。', commonMistakes: '不要漏掉 r 的发音，要快速连读', tips: '想象你在说"不日"时的快速发音' },
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
    description: '结尾的 e 不发音，但它跳过辅音，让前面的元音说出自己的名字（长音）！',
    guideline: '当单词以"辅音 + e"结尾时，e 不发音，但让前面的元音变成长音。例如：cap → cape，a 从 /æ/ 变成 /eɪ/。',
    detailedExplanation: `🎯 什么是魔法 E？

Magic E = 一个神奇的 e，它不发音，但能改变前面元音的声音

📝 **魔法 E 的规则**
- 当单词以"辅音 + e"结尾时，e 不发音
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
| o_e | not | note | /ɒ/ → /əʊ/ |
| u_e | cut | cute | /ʌ/ → /juː/ |

💡 **学习技巧**
1. 看到结尾的 e，先不读它
2. 让前面的元音发长音（字母名称）
3. 然后读后面的辅音
4. 多练习对比：cap vs cape`,
    keyPoints: [
      '魔法 E 不发音，但改变前面元音的声音',
      '元音从短音变成长音（字母名称）',
      '规则：辅音 + e 结尾',
      '多练习对比短音词和长音词',
    ],
    examples: [
      'cap → cape: 帽子 → 斗篷',
      'bit → bite: 一点 → 咬',
      'not → note: 不 → 笔记',
      'cut → cute: 切 → 可爱',
    ],
    commonPatterns: '魔法 E 是英语中最常见的拼写规则之一，掌握它能帮你读很多单词。',
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
      { text: 'o_e', ipa: '/əʊ/', examples: ['Bone', 'Home', 'Hope', 'Rose', 'Note', 'Coke'], type: 'vowel', mouthGuide: '嘴巴从圆到小', detailedGuide: '嘴巴从圆到小，发 /əʊ/ 音。这是字母 O 的名称。', commonMistakes: '不要读成 /ɒ/，记住：魔法 E 让 o 变成长音', tips: '想象你在说"哦"时的发音，但嘴巴要收小' },
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
    description: '两个元音一起工作。通常第一个元音说话，第二个元音沉默。记住口诀："两个元音一起走，第一个元音说了算！"',
    guideline: '当你看到两个元音紧挨在一起（ai, ea, oa, ee），通常第一个元音发长音，第二个不发音。',
    detailedExplanation: `🎯 什么是元音组合？

Vowel Team = 两个元音紧挨在一起，一起工作

📝 **元音组合的规则**
- 通常第一个元音发长音（字母名称）
- 第二个元音不发音
- 口诀："When two vowels go walking, the first one does the talking."
  （两个元音一起走，第一个元音说了算！）

🔍 **常见的元音组合**
| 组合 | 发音 | 例词 |
|------|------|------|
| ai, ay | /eɪ/ (Long A) | rain, play |
| ee, ea | /iː/ (Long E) | see, eat |
| igh, ie | /aɪ/ (Long I) | light, pie |
| oa, ow | /əʊ/ (Long O) | boat, snow |
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
      '元音组合 = 两个元音紧挨在一起',
      '通常第一个元音发长音，第二个不发音',
      '口诀：两个元音一起走，第一个元音说了算',
      '注意特殊情况，需要单独记忆',
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
      { text: 'Long O', ipa: 'oa, ow', examples: ['Boat', 'Coat', 'Snow', 'Grow', 'Show', 'Road'], type: 'vowel', mouthGuide: '嘴巴圆起', detailedGuide: '嘴巴圆起，发 /əʊ/ 音。oa 在单词中间，ow 在单词结尾。', commonMistakes: 'ow 有时发 /aʊ/（如 cow），需要单独记忆', tips: '想象你在说"哦"时的发音，但嘴巴要收小' },
      { text: 'Long U', ipa: 'ue, ew', examples: ['Blue', 'True', 'New', 'Few', 'Dew', 'Cue'], type: 'vowel', mouthGuide: '嘴巴从开到合', detailedGuide: '嘴巴从开到合，发 /juː/ 音。ue 和 ew 都发 /juː/。', commonMistakes: '不要读成 /ʌ/，记住：元音组合发长音', tips: '想象你在说"优"时的发音' },
      { text: 'Diphthongs', ipa: 'oi, oy, ou, ow', examples: ['Oil', 'Boy', 'Out', 'Cow', 'Toy', 'Cloud'], type: 'vowel', mouthGuide: '嘴巴滑动', detailedGuide: '嘴巴从一个位置滑到另一个位置，发双元音。oi/oy 发 /ɔɪ/，ou/ow 发 /aʊ/。', commonMistakes: 'ou/ow 有时发 /əʊ/（如 soul），需要单独记忆', tips: '想象你在说"奥伊"或"奥乌"时的发音' },
    ],
    practice: [
      { type: 'match', question: '选择正确的元音组合：r _ n (雨)', options: ['ai', 'ea', 'oa'], answer: 'ai', hint: 'Rain，雨。ai 发 /eɪ/ 音。' },
      { type: 'match', question: '选择正确的元音组合：b _ t (船)', options: ['ai', 'ea', 'oa'], answer: 'oa', hint: 'Boat，船。oa 发 /əʊ/ 音。' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Rain', 'Rein', 'Ran'], answer: 'Rain', hint: '这是雨。注意听长音。' },
    ]
  },

  // ---- Level 6: R控制元音 ----
  {
    id: 'r-controlled',
    title: 'R控制元音',
    titleEn: 'R-Controlled Vowels (Bossy R)',
    emoji: '👑',
    description: '当 r 跟在元音后面时，它会"欺负"元音，改变元音的声音！r 是霸道的！',
    guideline: '当元音后面紧跟一个 r 时，r 会改变元音的声音。ar, er, ir, or, ur 都有不同的发音。',
    detailedExplanation: `🎯 什么是 R 控制元音？

R-Controlled Vowels = 元音后面跟着 r，r 会"欺负"元音，改变它的声音

📝 **为什么叫"霸道的 R"？**
- 正常情况下，元音发自己的声音
- 但当 r 跟在后面时，r 会"控制"元音，让元音发出不同的声音
- 所以我们叫它 "Bossy R"（霸道的 R）

🔍 **5 种 R 控制元音**
| 组合 | 发音 | 口型 | 例词 |
|------|------|------|------|
| ar | /ɑːr/ | 嘴巴张大，舌头卷起 | car, star, farm |
| er | /ɜːr/ | 嘴巴微开，舌头卷起 | her, fern, term |
| ir | /ɜːr/ | 嘴巴微开，舌头卷起 | bird, girl, shirt |
| or | /ɔːr/ | 嘴巴圆张，舌头卷起 | for, corn, horse |
| ur | /ɜːr/ | 嘴巴微开，舌头卷起 | burn, fur, turn |

💡 **特殊情况**
- er, ir, ur 都发 /ɜːr/，听起来一样
- ar 发 /ɑːr/，嘴巴张大
- or 发 /ɔːr/，嘴巴圆张

🎯 **学习技巧**
1. 看到元音 + r，就知道元音要变音
2. er, ir, ur 发音相同，需要通过单词来记忆
3. 多读多练，直到能快速识别`,
    keyPoints: [
      'R 控制元音 = 元音 + r',
      'r 会"欺负"元音，改变它的声音',
      'er, ir, ur 都发 /ɜːr/',
      'ar 发 /ɑːr/，or 发 /ɔːr/',
    ],
    examples: [
      'ar: car（车）, star（星星）, farm（农场）',
      'er: her（她）, fern（蕨类）, term（学期）',
      'ir: bird（鸟）, girl（女孩）, shirt（衬衫）',
    ],
    commonPatterns: 'er, ir, ur 发音相同，需要通过单词来记忆。ar 和 or 发音不同。',
    sentences: [
      'The car is in the park.',
      'Her bird is on the fern.',
      'The girl has a purple shirt.',
      'A horse ran to the farm.',
      'Turn left at the big tree.',
    ],
    items: [
      { text: 'ar', ipa: '/ɑːr/', examples: ['Car', 'Star', 'Farm', 'Park', 'Shark', 'Dark'], type: 'vowel', mouthGuide: '嘴巴张大，舌头卷起', detailedGuide: '嘴巴张大，舌头卷起，发 /ɑːr/ 音。这是 R 控制元音中最容易辨认的。', commonMistakes: '不要读成 /æ/，记住：r 会让元音变音', tips: '想象你在说"啊"时，舌头卷起' },
      { text: 'er', ipa: '/ɜːr/', examples: ['Her', 'Fern', 'Term', 'Verb', 'Nerd', 'Herb'], type: 'vowel', mouthGuide: '嘴巴微开，舌头卷起', detailedGuide: '嘴巴微开，舌头卷起，发 /ɜːr/ 音。和 ir, ur 发音相同。', commonMistakes: '不要读成 /ɛ/，记住：r 会让元音变音', tips: '想象你在说"额"时，舌头卷起' },
      { text: 'ir', ipa: '/ɜːr/', examples: ['Bird', 'Girl', 'Shirt', 'Stir', 'First', 'Birth'], type: 'vowel', mouthGuide: '嘴巴微开，舌头卷起', detailedGuide: '嘴巴微开，舌头卷起，发 /ɜːr/ 音。和 er, ur 发音相同。', commonMistakes: '不要读成 /ɪ/，记住：r 会让元音变音', tips: '想象你在说"额"时，舌头卷起' },
      { text: 'or', ipa: '/ɔːr/', examples: ['For', 'Corn', 'Horse', 'Sport', 'Born', 'Form'], type: 'vowel', mouthGuide: '嘴巴圆张，舌头卷起', detailedGuide: '嘴巴圆张，舌头卷起，发 /ɔːr/ 音。嘴巴比 ar 更圆。', commonMistakes: '不要读成 /ɒ/，记住：r 会让元音变音', tips: '想象你在说"哦"时，舌头卷起' },
      { text: 'ur', ipa: '/ɜːr/', examples: ['Burn', 'Fur', 'Turn', 'Nurse', 'Hurt', 'Surf'], type: 'vowel', mouthGuide: '嘴巴微开，舌头卷起', detailedGuide: '嘴巴微开，舌头卷起，发 /ɜːr/ 音。和 er, ir 发音相同。', commonMistakes: '不要读成 /ʌ/，记住：r 会让元音变音', tips: '想象你在说"额"时，舌头卷起' },
    ],
    practice: [
      { type: 'match', question: '选择正确的 R控制元音：c _ (车)', options: ['ar', 'er', 'or'], answer: 'ar', hint: 'Car，车。ar 发 /ɑːr/ 音。' },
      { type: 'match', question: '选择正确的 R控制元音：b _ d (鸟)', options: ['ar', 'ir', 'ur'], answer: 'ir', hint: 'Bird，鸟。ir 发 /ɜːr/ 音。' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Car', 'Cur', 'Cir'], answer: 'Car', hint: '这是车。注意听 ar 的发音。' },
    ]
  },

  // ---- Level 7: 双音节词 ----
  {
    id: 'two-syllable',
    title: '双音节词',
    titleEn: 'Two-Syllable Words',
    emoji: '✂️',
    description: '有两个"拍子"的单词。我们把它们切成两部分来读，就像吃面包要切开一样！',
    guideline: '看到长单词时，先找两个元音，然后根据规则切分：两个辅音中间切（Rabbit），元音后切（Tiger），或辅音后切（Lemon）。',
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
1. 先找到单词中的元音字母
2. 看元音之间的辅音数量
3. 根据规则切分
4. 分别读每个音节，然后连起来`,
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
      { text: 'Suffixes', ipa: '-ing, -ed', examples: ['Running', 'Jumped', 'Hopping', 'Wanted', 'Playing', 'Started'], type: 'blend', mouthGuide: '词尾加后缀', detailedGuide: '后缀是加在词尾的部分，如 -ing, -ed, -er, -est。切分时，后缀单独成为一个音节。', commonMistakes: '不要把后缀和词根混在一起读', tips: '先找到后缀，把它切出来，然后读词根部分' },
    ],
    practice: [
      { type: 'match', question: '这个单词怎么切分？Sunset', options: ['Sun-set', 'Su-nset', 'Suns-et'], answer: 'Sun-set', hint: '两个辅音中间切（VC/CV 规则）' },
      { type: 'match', question: '这个单词怎么切分？Tiger', options: ['Tig-er', 'Ti-ger', 'Tige-r'], answer: 'Ti-ger', hint: '第一个元音后切（V/CV 规则）' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['Rabbit', 'Rab-bit', 'Ra-bbit'], answer: 'Rabbit', hint: '这是兔子，用 VC/CV 规则切分' },
    ]
  },

  // ---- Level 8: 高频词/例外词 ----
  {
    id: 'sight-words',
    title: '高频词/例外词',
    titleEn: 'Sight Words & Exceptions',
    emoji: '👁️',
    description: '这些词很常见，但不能用拼读规则来读。你需要用眼睛记住它们，看到就知道怎么读！',
    guideline: '这些词出现频率很高，但发音不规则。最好的方法是：看到就读出来，不要试图拼读。多读几次就记住了！',
    detailedExplanation: `🎯 什么是高频词/例外词？

高频词 (Sight Words) 是英语中出现频率最高的词，它们通常不能用自然拼读规则来读。

📝 **为什么需要单独学习？**
- 这些词在每本书、每篇文章中都会出现
- 它们占了英语文本的 50-75%
- 但它们的发音往往不规则，不能用拼读规则来读

🔍 **两类高频词**
1. **Dolch 词表**：由 Edward Dolch 在 1930 年代编写的 220 个高频词
2. **Fry 词表**：由 Edward Fry 在 1950 年代编写的 1000 个高频词

💡 **学习技巧**
1. 不要试图拼读这些词，直接记忆
2. 用闪卡反复练习
3. 在阅读中遇到时特别注意
4. 写句子时多使用这些词`,
    keyPoints: [
      '高频词出现频率极高，占文本的 50-75%',
      '大多数不能用拼读规则来读',
      '需要直接记忆，不要拼读',
      'Dolch 词表有 220 个词，Fry 词表有 1000 个词',
    ],
    examples: [
      'the：最常见的英语单词，发音 /ðə/',
      'said：拼写是 s-a-i-d，但发音是 /sɛd/，不是 /saɪd/',
      'was：拼写是 w-a-s，但发音是 /wɒz/，不是 /wæs/',
    ],
    commonPatterns: '大多数高频词的拼写和发音不一致，这就是为什么需要单独记忆。有些词（如 the, a, is）几乎出现在每个句子中。',
    sentences: [
      'The cat is on the bed.',
      'He said he was here.',
      'I have some water, please.',
      'Come here and look at this.',
      'They said there is a dog.',
    ],
    items: [
      { text: 'the', ipa: '/ðə/', examples: ['the cat', 'the dog', 'the sun'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '这是英语中最常见的词。发音时舌尖伸出，轻轻咬住舌尖。', commonMistakes: '容易读成 /ðiː/，记住：在辅音前读 /ðə/，在元音前读 /ðiː/', tips: '想象你在说"这个"时的发音' },
      { text: 'was', ipa: '/wɒz/', examples: ['I was', 'he was', 'it was'], type: 'consonant', mouthGuide: '双唇圆起', detailedGuide: '发音时双唇圆起，发出 /w/ 音，然后是 /ɒz/。', commonMistakes: '容易读成 /wæs/，记住：a 在这里发 /ɒ/ 音', tips: '想象你在说"我曾经是"时的发音' },
      { text: 'said', ipa: '/sɛd/', examples: ['he said', 'she said'], type: 'consonant', mouthGuide: '舌尖靠近上齿龈', detailedGuide: '发音时舌尖靠近上齿龈，发出 /s/ 音，然后是 /ɛd/。', commonMistakes: '容易读成 /saɪd/，记住：ai 在这里发 /ɛ/ 音，不是 /aɪ/', tips: '想象你在说"他说"时的发音' },
      { text: 'have', ipa: '/hæv/', examples: ['I have', 'you have'], type: 'consonant', mouthGuide: '嘴巴张大', detailedGuide: '发音时嘴巴张大，发出 /h/ 音，然后是 /æv/。', commonMistakes: '容易读成 /heɪv/，记住：a 在这里发 /æ/ 音', tips: '想象你在说"我有"时的发音' },
      { text: 'come', ipa: '/kʌm/', examples: ['come here', 'come back'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '发音时舌根抵住软腭，发出 /k/ 音，然后是 /ʌm/。', commonMistakes: '容易读成 /koʊm/，记住：o 在这里发 /ʌ/ 音，不是 /oʊ/', tips: '想象你在说"来"时的发音' },
      { text: 'some', ipa: '/sʌm/', examples: ['some water', 'some food'], type: 'consonant', mouthGuide: '舌尖靠近上齿龈', detailedGuide: '发音时舌尖靠近上齿龈，发出 /s/ 音，然后是 /ʌm/。', commonMistakes: '容易读成 /soʊm/，记住：o 在这里发 /ʌ/ 音', tips: '想象你在说"一些"时的发音' },
      { text: 'there', ipa: '/ðɛr/', examples: ['over there', 'there is'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '发音时舌尖伸出，轻轻咬住舌尖，发出 /ð/ 音，然后是 /ɛr/。', commonMistakes: '容易读成 /ðiːr/，记住：e 在这里发 /ɛ/ 音', tips: '想象你在说"那里"时的发音' },
      { text: 'where', ipa: '/wɛr/', examples: ['where is', 'where are'], type: 'consonant', mouthGuide: '双唇圆起', detailedGuide: '发音时双唇圆起，发出 /w/ 音，然后是 /ɛr/。', commonMistakes: '容易读成 /wiːr/，记住：e 在这里发 /ɛ/ 音', tips: '想象你在说"哪里"时的发音' },
      { text: 'who', ipa: '/huː/', examples: ['who is', 'who are'], type: 'consonant', mouthGuide: '嘴巴张开', detailedGuide: '发音时嘴巴张开，发出 /h/ 音，然后是 /uː/。', commonMistakes: '容易读成 /hoʊ/，记住：o 在这里发 /uː/ 音', tips: '想象你在说"谁"时的发音' },
      { text: 'what', ipa: '/wɒt/', examples: ['what is', 'what are'], type: 'consonant', mouthGuide: '双唇圆起', detailedGuide: '发音时双唇圆起，发出 /w/ 音，然后是 /ɒt/。', commonMistakes: '容易读成 /wæt/，记住：a 在这里发 /ɒ/ 音', tips: '想象你在说"什么"时的发音' },
      { text: 'your', ipa: '/jɔːr/', examples: ['your name', 'your book'], type: 'consonant', mouthGuide: '舌面靠近硬腭', detailedGuide: '发音时舌面靠近硬腭，发出 /j/ 音，然后是 /ɔːr/。', commonMistakes: '容易读成 /jʊr/，记住：ou 在这里发 /ɔː/ 音', tips: '想象你在说"你的"时的发音' },
      { text: 'they', ipa: '/ðeɪ/', examples: ['they are', 'they go'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '发音时舌尖伸出，轻轻咬住舌尖，发出 /ð/ 音，然后是 /eɪ/。', commonMistakes: '容易读成 /ðiː/，记住：ey 在这里发 /eɪ/ 音', tips: '想象你在说"他们"时的发音' },
      { text: 'to', ipa: '/tuː/', examples: ['to school', 'go to', 'to the store'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '发音时舌尖抵住上齿龈，发出 /t/ 音，然后是 /uː/。', commonMistakes: '不要读成 /tɒ/，记住：o 在这里发 /uː/ 音', tips: '想象你在说"吐"时的发音' },
      { text: 'for', ipa: '/fɔːr/', examples: ['for you', 'for me', 'for the cat'], type: 'consonant', mouthGuide: '上齿轻咬下唇', detailedGuide: '发音时上齿轻咬下唇，发出 /f/ 音，然后是 /ɔːr/。', commonMistakes: '不要读成 /fɒr/，记住：or 发 /ɔːr/', tips: '想象你在说"佛"时的发音' },
      { text: 'of', ipa: '/ʌv/', examples: ['cup of tea', 'lot of fun', 'piece of cake'], type: 'consonant', mouthGuide: '上齿轻咬下唇', detailedGuide: '发音时上齿轻咬下唇，发出 /ʌ/ 音，然后是 /v/。', commonMistakes: '不要读成 /ɒf/，记住：o 发 /ʌ/，f 发 /v/', tips: '想象你在说"阿夫"时的快速发音' },
      { text: 'are', ipa: '/ɑːr/', examples: ['we are', 'they are', 'you are'], type: 'consonant', mouthGuide: '嘴巴张大，舌头卷起', detailedGuide: '发音时嘴巴张大，舌头卷起，发 /ɑːr/ 音。', commonMistakes: '不要读成 /ɛr/，记住：are 发 /ɑːr/ 音', tips: '想象你在说"啊"时舌头卷起' },
      { text: 'this', ipa: '/ðɪs/', examples: ['this cat', 'this book', 'this is'], type: 'consonant', mouthGuide: '舌尖伸出', detailedGuide: '发音时舌尖伸出，轻轻咬住舌尖，发出 /ð/ 音，然后是 /ɪs/。', commonMistakes: '不要读成 /ðis/，记住：i 发 /ɪ/', tips: '想象你在说"利斯"时的快速发音' },
      { text: 'do', ipa: '/duː/', examples: ['do it', 'do this', 'do that'], type: 'consonant', mouthGuide: '舌尖抵住上齿龈', detailedGuide: '发音时舌尖抵住上齿龈，发出 /d/ 音，然后是 /uː/。', commonMistakes: '不要读成 /dɒ/，记住：o 在这里发 /uː/ 音', tips: '想象你在说"度"时的发音' },
      { text: 'go', ipa: '/ɡəʊ/', examples: ['go home', 'go to school', 'let us go'], type: 'consonant', mouthGuide: '舌根抵住软腭', detailedGuide: '发音时舌根抵住软腭，发出 /g/ 音，然后是 /əʊ/。', commonMistakes: '不要读成 /ɡɒ/，记住：o 在结尾发 /əʊ/', tips: '想象你在说"够"时的发音' },
    ],
    practice: [
      { type: 'listen', question: '听发音，选择正确的单词', options: ['the', 'they', 'there'], answer: 'the', hint: '这是最常见的词，发音 /ðə/' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['was', 'has', 'his'], answer: 'was', hint: '这是"曾经是"，发音 /wɒz/' },
      { type: 'match', question: '这个单词怎么读？said', options: ['/sɛd/', '/saɪd/', '/sæd/'], answer: '/sɛd/', hint: '注意：ai 在这里发 /ɛ/ 的音，不是 /aɪ/' },
      { type: 'match', question: '选出正确的拼写：表示"的、那个"', options: ['the', 'tha', 'teh'], answer: 'the', hint: '这是英语中最常见的词' },
      { type: 'listen', question: '听发音，选择正确的单词', options: ['for', 'four', 'fore'], answer: 'for', hint: '这是"为了"的意思，发音 /fɔːr/' },
      { type: 'match', question: '选出正确的拼写：表示"是"（复数）', options: ['are', 'or', 'arr'], answer: 'are', hint: 'they are, we are, you are' },
    ]
  },
];

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

    // 自动进入下一题
    setTimeout(() => {
      if (currentQuestion < lesson.practice.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setFeedback(null);
        setShowHint(false);
      } else {
        setShowResult(true);
        completeLesson();
      }
    }, 1500);
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
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {lesson.detailedExplanation}
                  </div>
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
                  <span className="font-bold">👄 发音提示：</span> 点击卡片听发音，注意口型提示
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
                <h2 className="text-xl font-bold text-gray-800">🔊 音素混合练习</h2>
                <span className="text-sm text-gray-500">点击单词，看着我拼在一起！</span>
              </div>
              
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
                    completeLesson();
                    setActiveLesson((prev: number) => prev + 1);
                  }}
                  className="px-6 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  下一课 →
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
                      onClick={() => speak(lesson.practice[currentQuestion].answer, 0.7)}
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
                  <div className={`p-4 rounded-xl text-center font-semibold text-lg ${
                    feedback === 'correct' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {feedback === 'correct' ? '✅ 正确！太棒了！' : `❌ 答案是：${lesson.practice[currentQuestion].answer}`}
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
                      ? '完美！你已经掌握了这个规则！' 
                      : score >= lesson.practice.length / 2 
                        ? '做得不错！继续练习会更好！' 
                        : '别灰心，多练习几次就会了！'}
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

                  {activeLesson < lessons.length - 1 && (
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

export type ErrorType = "pronunciation" | "meaning" | "grammar" | "spelling" | "listening";

export const ERROR_TYPE_CONFIG: Record<ErrorType, { label: string; labelEn: string; color: string; bgColor: string }> = {
  pronunciation: { label: "发音", labelEn: "Pronunciation", color: "text-red-600", bgColor: "bg-red-50" },
  meaning: { label: "词义", labelEn: "Meaning", color: "text-yellow-600", bgColor: "bg-yellow-50" },
  grammar: { label: "语法", labelEn: "Grammar", color: "text-blue-600", bgColor: "bg-blue-50" },
  spelling: { label: "拼写", labelEn: "Spelling", color: "text-green-600", bgColor: "bg-green-50" },
  listening: { label: "听辨", labelEn: "Listening", color: "text-purple-600", bgColor: "bg-purple-50" },
};

// Decompose Korean syllable into jamo for similarity comparison
function decomposeHangul(char: string): string {
  const code = char.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return char;
  const offset = code - 0xac00;
  const initial = Math.floor(offset / 588);
  const medial = Math.floor((offset % 588) / 28);
  const final_ = offset % 28;
  const initials = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
  const medials = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
  const finals = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  return initials[initial] + medials[medial] + (finals[final_] || "");
}

function hangulSimilarity(a: string, b: string): number {
  const da = [...a].map(decomposeHangul).join("");
  const db = [...b].map(decomposeHangul).join("");
  if (da === db) return 1;
  const maxLen = Math.max(da.length, db.length);
  if (maxLen === 0) return 1;
  // Simple Levenshtein distance
  const m = da.length;
  const n = db.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = da[i - 1] === db[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return 1 - dp[m][n] / maxLen;
}

const GRAMMAR_PATTERNS = [
  /은|는|이|가|을|를|에|에서|으로|로|와|과|도|만|부터|까지|마다|처럼|보다|한테|에게/,
  /습니다|ㅂ니다|아요|어요|였|었|겠|ㄹ|ㄴ|ㅁ|기/,
  /입니다|이다|아니다|있다|없다|하다/,
];

function hasGrammarPattern(text: string): boolean {
  return GRAMMAR_PATTERNS.some((p) => p.test(text));
}

export function inferErrorType(
  exerciseType: string,
  userAnswer: string,
  correctAnswer: string,
  question?: string,
  errorTag?: ErrorType
): ErrorType {
  if (errorTag) return errorTag;

  const wrong = userAnswer.trim();
  const correct = correctAnswer.trim();

  switch (exerciseType) {
    case "listening-choice":
      return "listening";
    case "matching":
      return "meaning";
    case "ordering":
      return "grammar";
    case "dictation": {
      const sim = hangulSimilarity(wrong, correct);
      if (sim > 0.6) return "pronunciation";
      return "spelling";
    }
    case "fill-in": {
      if (hasGrammarPattern(wrong) || hasGrammarPattern(correct)) return "grammar";
      const sim = hangulSimilarity(wrong, correct);
      if (sim > 0.5) return "spelling";
      return "grammar";
    }
    case "reading-choice":
    case "image-choice": {
      if (question && hasGrammarPattern(question)) return "grammar";
      return "meaning";
    }
    case "oral-response":
      return "pronunciation";
    case "sentence-creation":
      return "grammar";
    default:
      return "meaning";
  }
}

export function generateExplanation(errorType: ErrorType, wrong: string, correct: string): string {
  const templates: Record<ErrorType, string> = {
    pronunciation: `发音混淆：你写的「${wrong}」和正确答案「${correct}」发音相近`,
    meaning: `词义理解：「${wrong}」和「${correct}」意思不同`,
    grammar: `语法错误：这里应该用「${correct}」的语法形式`,
    spelling: `拼写错误：「${correct}」的正确写法需要注意`,
    listening: `听辨偏差：你听到的可能是近似音，正确答案是「${correct}」`,
  };
  return templates[errorType];
}

export function getErrorTypeStats(mistakes: { errorType?: ErrorType }[]): Record<ErrorType, number> {
  const stats: Record<ErrorType, number> = { pronunciation: 0, meaning: 0, grammar: 0, spelling: 0, listening: 0 };
  for (const m of mistakes) {
    if (m.errorType) stats[m.errorType]++;
  }
  return stats;
}

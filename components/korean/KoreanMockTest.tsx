"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { KoreanMockTestSection, MistakeSourceType } from "@/lib/korean-types";
import { useKoreanProgress } from "@/lib/korean-progress";
import KoreanAudioPlayer from "./KoreanAudioPlayer";
import confetti from "canvas-confetti";

interface Props {
  mockTest: KoreanMockTestSection;
  lessonId: string;
}

export default function KoreanMockTest({ mockTest, lessonId }: Props) {
  const [phase, setPhase] = useState<"select" | "test" | "result">("select");
  const [selectedMode, setSelectedMode] = useState<"pbt" | "ibt">("pbt");
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [showExplanations, setShowExplanations] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { updateLessonScore, recordMistake } = useKoreanProgress();

  const getQuestions = useCallback((mode: "pbt" | "ibt") => {
    return mode === "pbt"
      ? [...mockTest.listeningQuestions, ...mockTest.readingQuestions]
      : [...mockTest.listeningQuestions.slice(0, 10), ...mockTest.readingQuestions.slice(0, 10)];
  }, [mockTest]);

  const questions = getQuestions(selectedMode);
  const totalTime = selectedMode === "pbt" ? 35 * 60 : 27 * 60;

  const startTest = useCallback((mode: "pbt" | "ibt") => {
    setSelectedMode(mode);
    setTimeLeft(mode === "pbt" ? 35 * 60 : 27 * 60);
    setAnswers({});
    setScore(0);
    setShowExplanations(false);
    setPhase("test");
  }, []);

  const finishTest = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.number] === q.answer) correct++;
    });
    setScore(correct);
    updateLessonScore(lessonId, correct, questions.length);
    questions.forEach((q, qi) => {
      if (answers[q.number] !== q.answer) {
        recordMistake(
          lessonId,
          "mockTest" as MistakeSourceType,
          `mock-${q.section}`,
          q.question,
          answers[q.number] ?? "",
          q.answer,
          q.options,
          qi,
        );
      }
    });
    if (correct === questions.length) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.7 } });
    }
    setPhase("result");
  }, [answers, questions, lessonId, updateLessonScore, recordMistake]);

  useEffect(() => {
    if (phase !== "test") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          finishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, finishTest]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  if (phase === "select") {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
          <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">
            🎯 TOPIK I 迷你模拟测试
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            选择练习模式开始测试。以下题量与时间是本站压缩配置，并非正式TOPIK考试规格；计时开始后不可暂停。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => startTest("pbt")}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-red-300 dark:border-red-700 hover:border-red-500 dark:hover:border-red-500 transition-colors text-left"
            >
              <div className="text-2xl font-bold text-red-700 dark:text-red-300 mb-2">纸笔风格 · 迷你</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>听力 10题 + 阅读 14题 = 24题</p>
                <p>时间：35分钟</p>
                <p>本站练习分：按答对题数计算</p>
              </div>
            </button>
            <button
              onClick={() => startTest("ibt")}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors text-left"
            >
              <div className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">机考风格 · 迷你</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>听力 10题 + 阅读 10题 = 20题</p>
                <p>时间：27分钟</p>
                <p>本站练习分：按答对题数计算</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    const percentage = Math.round((score / questions.length) * 100);
    const listeningQs = questions.filter((q) => q.section === "listening");
    const readingQs = questions.filter((q) => q.section === "reading");
    const listeningCorrect = listeningQs.filter((q) => answers[q.number] === q.answer).length;
    const readingCorrect = readingQs.filter((q) => answers[q.number] === q.answer).length;
    const listeningPct = listeningQs.length > 0 ? Math.round((listeningCorrect / listeningQs.length) * 100) : 0;
    const readingPct = readingQs.length > 0 ? Math.round((readingCorrect / readingQs.length) * 100) : 0;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
            {percentage >= 70 ? "🎉" : percentage >= 40 ? "👍" : "💪"} 测试结果
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">{score}/{questions.length}</div>
              <div className="text-sm text-gray-500">总分</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-purple-600">{listeningCorrect}/{listeningQs.length}</div>
              <div className="text-sm text-gray-500">听力 {listeningPct}%</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-orange-600">{readingCorrect}/{readingQs.length}</div>
              <div className="text-sm text-gray-500">阅读 {readingPct}%</div>
            </div>
          </div>
          <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl mb-4 border border-amber-200 dark:border-amber-800/30">
            <p className="text-sm text-amber-700 dark:text-amber-300">
              ⚠️ 本测试仅为练习表现估计，不构成正式TOPIK等级认定。正式成绩以TOPIK官方为准。
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowExplanations(!showExplanations)}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          {showExplanations ? "隐藏解析" : "查看详细解析"}
        </button>

        {showExplanations && (
          <div className="space-y-4">
            {questions.map((q) => {
              const isCorrect = answers[q.number] === q.answer;
              return (
                <div
                  key={q.number}
                  className={`p-4 rounded-xl border ${
                    isCorrect
                      ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className={`text-lg ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                      {isCorrect ? "✓" : "✗"}
                    </span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      第{q.number}题 [{q.section === "listening" ? "听力" : "阅读"}]
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{q.question}</p>
                  <div className="text-sm space-y-1">
                    {q.transcript && (
                      <p className="text-gray-500 dark:text-gray-400">听力原文：{q.transcript}</p>
                    )}
                    <p>
                      你的答案：<span className={isCorrect ? "text-green-600" : "text-red-600"}>
                        {answers[q.number] || "未作答"}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-green-600">正确答案：{q.answer}</p>
                    )}
                    {q.explanation && (
                      <p className="text-gray-500 dark:text-gray-400">解析：{q.explanation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={() => setPhase("select")}
          className="w-full py-3 px-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors font-medium"
        >
          重新测试
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 -mx-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {selectedMode.toUpperCase()} 模式
          </span>
          <span
            className={`text-lg font-mono font-bold ${
              timeLeft < 60 ? "text-red-600 animate-pulse" : "text-blue-600"
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">
          已答 {Object.keys(answers).length}/{questions.length} 题
        </div>
      </div>

      <div className="space-y-8">
        {["listening", "reading"].map((section) => {
          const sectionQs = questions.filter((q) => q.section === section);
          if (sectionQs.length === 0) return null;
          return (
            <div key={section}>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                {section === "listening" ? "🎧" : "📖"}
                {section === "listening" ? "듣기 (听力)" : "읽기 (阅读)"}
              </h3>
              <div className="space-y-6">
                {sectionQs.map((q) => (
                  <div
                    key={q.number}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                      {q.number}. {q.question}
                    </div>
                    {q.section === "listening" && q.transcript && (
                      <div className="mb-3">
                        <KoreanAudioPlayer audioId={`mock-${q.number}`} text={q.transcript} label="播放听力" size="sm" />
                      </div>
                    )}
                    {q.passage && (
                      <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/30">
                        <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">阅读文章</p>
                        <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{q.passage}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAnswers((prev) => ({ ...prev, [q.number]: opt }))}
                          className={`p-3 rounded-lg border text-left text-sm transition-colors ${
                            answers[q.number] === opt
                              ? "bg-blue-100 dark:bg-blue-900/30 border-blue-500 text-blue-800 dark:text-blue-200"
                              : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={finishTest}
        className="w-full py-4 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-bold text-lg"
      >
        交卷
      </button>
    </div>
  );
}

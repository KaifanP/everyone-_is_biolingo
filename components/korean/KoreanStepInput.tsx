"use client";

import { motion } from "framer-motion";
import { KoreanLesson } from "@/lib/korean-types";
import { useKoreanProgress } from "@/lib/korean-progress";
import KoreanAudioPlayer from "./KoreanAudioPlayer";

interface Props {
  data: KoreanLesson;
}

export default function KoreanStepInput({ data }: Props) {
  const { input, info } = data;
  const { romanizationPreference, setRomanizationPreference } = useKoreanProgress();
  const isLesson1to5 = info.number <= 5;
  const showRomanization = isLesson1to5 && romanizationPreference;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/40 rounded-lg text-sm">
              💬
            </span>
            {input.dialogue.title}
          </h3>
          {isLesson1to5 && (
            <button
              onClick={() => setRomanizationPreference(!romanizationPreference)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all border ${
                romanizationPreference
                  ? "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                  : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
              }`}
            >
              罗马音 {romanizationPreference ? "ON" : "OFF"}
            </button>
          )}
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-5 border border-orange-100 dark:border-orange-800/30">
          <div className="space-y-3">
            {input.dialogue.lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`p-3 rounded-xl ${
                  i % 2 === 0
                    ? "bg-orange-100/50 dark:bg-orange-900/30 ml-0 mr-12"
                    : "bg-amber-100/50 dark:bg-amber-900/30 ml-12 mr-0"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-bold text-orange-600 dark:text-orange-400">
                    {line.speaker}
                  </p>
                  <KoreanAudioPlayer audioId={`${info.id}-dlg-${i}`} text={line.korean} size="sm" />
                </div>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {line.korean}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {line.chinese}
                </p>
                {showRomanization && line.romanization && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 italic">
                    {line.romanization}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 rounded-lg text-sm">
            📚
          </span>
          词汇
        </h3>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800/30">
          <div className="space-y-2">
            {input.vocabulary.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-emerald-50 dark:border-emerald-900/20"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {item.korean}
                  </span>
                  {showRomanization && item.romanization && (
                    <span className="text-xs text-gray-400 dark:text-gray-500 italic">
                      {item.romanization}
                    </span>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.chinese}
                  </span>
                  <KoreanAudioPlayer audioId={`${info.id}-voc-${i}`} text={item.korean} size="sm" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {item.partOfSpeech}
                  {item.example && ` · 例：${item.example.korean}`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

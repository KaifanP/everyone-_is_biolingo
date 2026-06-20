"use client";

import { useKoreanAudioPlayer } from "@/lib/korean-audio-hooks";
import { getAudioEntry } from "@/lib/korean-audio-manifest";

interface KoreanAudioPlayerProps {
  audioId?: string;
  text: string;
  label?: string;
  size?: "sm" | "md";
}

export default function KoreanAudioPlayer({ audioId, text, label, size = "md" }: KoreanAudioPlayerProps) {
  const { play, stop, isPlaying, error } = useKoreanAudioPlayer();
  const entry = audioId ? getAudioEntry(audioId) : undefined;
  const isLocalTTS = entry?.source === "tts";

  const handleClick = () => {
    if (isPlaying) {
      stop();
    } else {
      const audioFile = entry?.file;
      play(text, audioFile);
    }
  };

  const iconSize = size === "sm" ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm";

  return (
    <span className="inline-flex items-center gap-1.5">
      <button
        onClick={handleClick}
        className={`${iconSize} flex items-center justify-center rounded-full transition-all ${
          isPlaying
            ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse"
            : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50"
        }`}
        title={isPlaying ? "停止" : `播放: ${text}`}
      >
        {isPlaying ? "⏹" : "▶"}
      </button>
      {(isLocalTTS || !entry) && (
        <span className="text-[10px] text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-full">
          {isLocalTTS ? "MiMo 合成语音" : "浏览器合成语音"}
        </span>
      )}
      {error && (
        <span className="text-[10px] text-red-500 dark:text-red-400">
          {error}
        </span>
      )}
      {label && size === "md" && (
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {label}
        </span>
      )}
    </span>
  );
}

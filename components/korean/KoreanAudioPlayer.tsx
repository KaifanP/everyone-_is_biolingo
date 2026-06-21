"use client";

import { useKoreanAudioPlayer } from "@/lib/korean-audio-hooks";

interface KoreanAudioPlayerProps {
  audioId?: string;
  text: string;
  label?: string;
  size?: "sm" | "md";
}

export default function KoreanAudioPlayer({ text, label, size = "md" }: KoreanAudioPlayerProps) {
  const { play, stop, isPlaying, voiceName, error } = useKoreanAudioPlayer();

  const handleClick = () => {
    if (isPlaying) {
      stop();
    } else {
      void play(text);
    }
  };

  const iconSize = size === "sm" ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm";

  return (
    <span className="inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={handleClick}
        className={`${iconSize} flex items-center justify-center rounded-full transition-all ${
          isPlaying
            ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 animate-pulse"
            : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50"
        }`}
        title={isPlaying ? "停止" : `播放: ${text}`}
        aria-label={isPlaying ? "停止韩语音频" : `播放韩语：${text}`}
      >
        {isPlaying ? "⏹" : "▶"}
      </button>
      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded-full">
        {voiceName ?? "韩语声线 ko-KR"}
      </span>
      {error && (
        <span className="text-[10px] text-red-500 dark:text-red-400" role="alert">
          {error}（请在系统语音设置中安装韩语）
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

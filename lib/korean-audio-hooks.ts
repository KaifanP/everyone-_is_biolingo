"use client";

import { useCallback, useRef, useState } from "react";

const TTS_LANG = "ko-KR";

export function useKoreanTTS() {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback((text: string) => {
    if (typeof window === "undefined") return false;
    window.speechSynthesis.cancel();

    const koreanVoices = window.speechSynthesis.getVoices().filter((voice) =>
      voice.lang.toLowerCase().replaceAll("_", "-").startsWith("ko")
    );
    const koVoice =
      koreanVoices.find((voice) => voice.name.toLowerCase().includes("yuna")) ??
      koreanVoices.find((voice) => voice.localService) ??
      koreanVoices[0];

    if (!koVoice) return false;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = TTS_LANG;
    utterance.rate = 0.85;
    utterance.voice = koVoice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    return true;
  }, []);

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  return { play, stop, isPlaying };
}

export function useKoreanAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tts = useKoreanTTS();

  const play = useCallback(
    (text: string) => {
      setError(null);
      if (tts.play(text)) {
        setIsPlaying(true);
      } else {
        setError("此设备没有可用的 ko-KR 韩语声线");
      }
    },
    [tts]
  );

  const stop = useCallback(() => {
    tts.stop();
    setIsPlaying(false);
  }, [tts]);

  return { play, stop, isPlaying, error };
}

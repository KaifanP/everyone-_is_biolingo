"use client";

import { useCallback, useRef, useState } from "react";

const TTS_LANG = "ko-KR";

function findKoreanVoice(voices: SpeechSynthesisVoice[]) {
  const koreanVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().replaceAll("_", "-").startsWith("ko")
  );
  return (
    koreanVoices.find((voice) => voice.name.toLowerCase().includes("yuna")) ??
    koreanVoices.find((voice) => voice.localService) ??
    koreanVoices[0]
  );
}

function waitForKoreanVoice(): Promise<SpeechSynthesisVoice | undefined> {
  const immediate = findKoreanVoice(window.speechSynthesis.getVoices());
  if (immediate) return Promise.resolve(immediate);

  return new Promise((resolve) => {
    const finish = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
      window.clearTimeout(timeoutId);
      resolve(findKoreanVoice(window.speechSynthesis.getVoices()));
    };
    const handleVoicesChanged = () => finish();
    const timeoutId = window.setTimeout(finish, 1200);
    window.speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged, { once: true });
  });
}

export function useKoreanTTS() {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(async (text: string) => {
    if (typeof window === "undefined") return false;
    window.speechSynthesis.cancel();

    const koVoice = await waitForKoreanVoice();

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
  const [error, setError] = useState<string | null>(null);
  const tts = useKoreanTTS();

  const play = useCallback(
    async (text: string) => {
      setError(null);
      if (!(await tts.play(text))) {
        setError("此设备没有可用的 ko-KR 韩语声线");
      }
    },
    [tts]
  );

  const stop = useCallback(() => {
    tts.stop();
  }, [tts]);

  return { play, stop, isPlaying: tts.isPlaying, error };
}

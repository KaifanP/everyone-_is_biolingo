"use client";

import { useCallback, useRef, useState, useEffect } from "react";

const TTS_LANG = "ko-KR";

export function useKoreanTTS() {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTTS, setHasTTS] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkTTS = () => {
      const voices = window.speechSynthesis.getVoices();
      setHasTTS(voices.some((v) => v.lang.startsWith("ko")));
    };
    checkTTS();
    window.speechSynthesis.onvoiceschanged = checkTTS;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const play = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = TTS_LANG;
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find((v) => v.lang.startsWith("ko"));
    if (koVoice) utterance.voice = koVoice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  return { play, stop, isPlaying, hasTTS };
}

export function useKoreanAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tts = useKoreanTTS();

  const play = useCallback(
    (text: string) => {
      setError(null);
      if (tts.hasTTS) {
        tts.play(text);
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

  return { play, stop, isPlaying, error, hasTTS: tts.hasTTS };
}

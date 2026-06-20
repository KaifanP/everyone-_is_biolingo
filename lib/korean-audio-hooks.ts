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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const tts = useKoreanTTS();

  const basePath = "/everyone-_is_biolingo";

  const play = useCallback(
    (text: string, audioFile?: string) => {
      setError(null);

      if (audioFile) {
        const audio = new Audio(`${basePath}/audio/korean/${audioFile}`);
        audioRef.current = audio;

        audio.onplay = () => setIsPlaying(true);
        audio.onended = () => setIsPlaying(false);
        audio.onerror = () => {
          setIsPlaying(false);
          if (tts.hasTTS) {
            tts.play(text);
            setIsPlaying(true);
          } else {
            setError("韩语语音不可用");
          }
        };

        audio.play().catch(() => {
          if (tts.hasTTS) {
            tts.play(text);
            setIsPlaying(true);
          } else {
            setError("韩语语音不可用");
          }
        });
      } else if (tts.hasTTS) {
        tts.play(text);
        setIsPlaying(true);
      } else {
        setError("韩语语音不可用");
      }
    },
    [tts, basePath]
  );

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    tts.stop();
    setIsPlaying(false);
  }, [tts]);

  return { play, stop, isPlaying, error, hasTTS: tts.hasTTS };
}

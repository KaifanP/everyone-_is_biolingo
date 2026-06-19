"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "biolingo_grammar_progress";
const CHANGE_EVENT = "biolingo-grammar-progress-change";

function getProgressSnapshot() {
  if (typeof window === "undefined") return "[]";
  return localStorage.getItem(STORAGE_KEY) ?? "[]";
}

function getServerSnapshot() {
  return "[]";
}

function subscribeToProgress(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
  };
}

export function useGrammarProgress() {
  const progressSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerSnapshot
  );

  const completedUnits = useMemo(() => {
    try {
      const parsed = JSON.parse(progressSnapshot);
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
    } catch {
      return [];
    }
  }, [progressSnapshot]);

  const markUnitCompleted = useCallback((unitId: string) => {
    let current: string[] = [];
    try {
      const parsed = JSON.parse(getProgressSnapshot());
      if (Array.isArray(parsed)) current = parsed.filter((item): item is string => typeof item === "string");
    } catch {
      current = [];
    }

    if (current.includes(unitId)) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, unitId]));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { completedUnits, markUnitCompleted };
}

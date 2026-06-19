"use client";
import { useState, useEffect } from "react";

export function useGrammarProgress() {
  const [completedUnits, setCompletedUnits] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("biolingo_grammar_progress");
    if (saved) {
      try {
        setCompletedUnits(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse grammar progress", e);
      }
    }
  }, []);

  const markUnitCompleted = (unitId: string) => {
    setCompletedUnits((prev) => {
      if (prev.includes(unitId)) return prev;
      const next = [...prev, unitId];
      localStorage.setItem("biolingo_grammar_progress", JSON.stringify(next));
      return next;
    });
  };

  return { completedUnits, markUnitCompleted };
}

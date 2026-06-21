"use client";

import { useState } from "react";
import KoreanReviewCenter from "@/components/korean/KoreanReviewCenter";

export default function KoreanReviewEmbed() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="korean-review" className="border-y border-indigo-100 bg-indigo-50/50 dark:border-indigo-900/50 dark:bg-indigo-950/20">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">韩语学习工具</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight">复习中心就在这里</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              查看到期复习和错题本，无需离开网站首页。
            </p>
          </div>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="embedded-korean-review"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
          >
            {expanded ? "收起复习中心" : "在首页打开复习中心"}
          </button>
        </div>

        {expanded && (
          <div id="embedded-korean-review" className="mt-8 rounded-3xl border border-indigo-100 bg-white shadow-xl shadow-indigo-900/5 dark:border-indigo-900/50 dark:bg-slate-950">
            <KoreanReviewCenter embedded onExit={() => setExpanded(false)} />
          </div>
        )}
      </div>
    </section>
  );
}

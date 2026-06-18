"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { modules } from "@/lib/grammar-data";

const MODULE_GRADIENTS = [
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
  "from-fuchsia-500 to-rose-600",
];

export default function GrammarOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm flex items-center gap-1 w-fit"
          >
            ← 返回首页
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
            中级英语语法课程
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Intermediate English Grammar Course
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            7个模块 · 42个单元 · 面向中文母语者
          </p>
        </motion.div>

        <div className="space-y-8">
          {modules.map((mod, mi) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mi * 0.08 }}
              className="bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 overflow-hidden backdrop-blur-sm"
            >
              <div className={`bg-gradient-to-r ${MODULE_GRADIENTS[mi]} p-5`}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-sm">
                    {mod.number}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      模块{mod.number}：{mod.title}
                    </h2>
                    <p className="text-sm text-white/80">
                      {mod.titleEn} · {mod.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mod.units.map((unit, ui) => (
                    <motion.div
                      key={unit.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: mi * 0.08 + ui * 0.03 }}
                    >
                      <Link
                        href={`/grammar/${unit.id}`}
                        className="block p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1">
                              第{unit.number}单元
                            </p>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {unit.title}
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                              {unit.titleEn}
                            </p>
                          </div>
                          <span className="text-gray-300 dark:text-gray-600 group-hover:text-blue-400 dark:group-hover:text-blue-500 transition-colors mt-1">
                            →
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

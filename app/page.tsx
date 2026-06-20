import Link from "next/link";

const learningLoop = [
  {
    number: "01",
    title: "先判断，不急着看答案",
    description: "用问题激活已有知识。先做一次预测，哪怕答错，也比直接阅读更容易形成记忆。",
  },
  {
    number: "02",
    title: "理解规则背后的选择",
    description: "把语音或语法放进真实语境，弄清“为什么这样说”，而不是只背一条公式。",
  },
  {
    number: "03",
    title: "练习、纠错、再表达",
    description: "通过辨析、闭卷练习和自主造句，把“看得懂”推进到“自己会用”。",
  },
  {
    number: "04",
    title: "隔天再测一次",
    description: "一次满分不等于长期掌握。24 小时后重新自测，才能看见真正留下来的知识。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fc] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50 via-indigo-50/50 to-transparent dark:from-blue-950/30 dark:via-indigo-950/10" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pb-28">
          <nav className="flex items-center justify-between">
            <div>
              <p className="text-lg font-black tracking-tight text-blue-700 dark:text-blue-300">BioLingo</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">英语与韩语学习课 · 为中文母语者设计</p>
            </div>
            <Link
              href="/grammar"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              英语语法课程
            </Link>
          </nav>

          <div className="mx-auto mt-20 max-w-4xl text-center sm:mt-24">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              From knowing to using
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              不只记住英语规则，
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                更要学会在真实表达中调用它
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              从“看见单词会读”到“遇到语境会选”，每一课都沿着观察、理解、辨错、检索、产出和自测展开。
              课程专门回应中文母语者常见的发音与语法迁移问题。
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/phonics"
                className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
              >
                从自然拼读开始
              </Link>
              <Link
                href="/grammar"
                className="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-900"
              >
                进入中级语法课程
              </Link>
              <Link
                href="/korean"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 sm:w-auto"
              >
                开始韩语入门
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">先选对起点</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">你现在最想解决什么问题？</h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            三条路径可以独立学习。发音基础薄弱时先走自然拼读；已经能阅读、但表达常卡在结构选择时，直接进入语法；想学韩语则从入门开始。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <Link
            href="/phonics"
            className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 dark:border-blue-900/50 dark:from-blue-950/30 dark:to-slate-900"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/60 dark:text-blue-200">
                  零基础 · 读音入门
                </span>
                <h3 className="mt-5 text-2xl font-black">自然拼读 Phonics</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  适合“认识字母，却不会把声音连成单词”的学习者。通过听辨、口型、拼读规则和短句朗读建立字形—音素联系。
                </p>
              </div>
              <span className="text-3xl transition group-hover:translate-x-1">→</span>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-2 border-t border-blue-100 pt-5 text-center text-xs text-slate-600 dark:border-blue-900/50 dark:text-slate-300">
              <span><strong className="block text-base text-slate-900 dark:text-white">9</strong> 个学习阶段</span>
              <span><strong className="block text-base text-slate-900 dark:text-white">听 → 拼</strong> 双通道</span>
              <span><strong className="block text-base text-slate-900 dark:text-white">即时</strong> 错题追踪</span>
            </div>
          </Link>

          <Link
            href="/grammar"
            className="group rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-7 transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-600/10 dark:border-violet-900/50 dark:from-violet-950/30 dark:to-slate-900"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-900/60 dark:text-violet-200">
                  中级 · 系统表达
                </span>
                <h3 className="mt-5 text-2xl font-black">英语语法 Grammar</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  适合“规则背过不少，写句子时仍会犹豫”的学习者。用对比和语境建立选择依据，再把规则迁移到口语与写作。
                </p>
              </div>
              <span className="text-3xl transition group-hover:translate-x-1">→</span>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-2 border-t border-violet-100 pt-5 text-center text-xs text-slate-600 dark:border-violet-900/50 dark:text-slate-300">
              <span><strong className="block text-base text-slate-900 dark:text-white">7</strong> 个知识模块</span>
              <span><strong className="block text-base text-slate-900 dark:text-white">42</strong> 个完整单元</span>
              <span><strong className="block text-base text-slate-900 dark:text-white">6 步</strong> 学习闭环</span>
            </div>
          </Link>

          <Link
            href="/korean"
            className="group rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-600/10 dark:border-indigo-900/50 dark:from-indigo-950/30 dark:to-slate-900"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-200">
                  零基础 · TOPIK I
                </span>
                <h3 className="mt-5 text-2xl font-black">韩语入门 Korean</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  适合想系统学习韩语的中文母语者。从韩文字母到TOPIK I基础水平，30课覆盖发音、语法和应试入门。
                </p>
              </div>
              <span className="text-3xl transition group-hover:translate-x-1">→</span>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-2 border-t border-indigo-100 pt-5 text-center text-xs text-slate-600 dark:border-indigo-900/50 dark:text-slate-300">
              <span><strong className="block text-base text-slate-900 dark:text-white">6</strong> 个学习模块</span>
              <span><strong className="block text-base text-slate-900 dark:text-white">30</strong> 课完整内容</span>
              <span><strong className="block text-base text-slate-900 dark:text-white">6 步</strong> 学习闭环</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-violet-600 dark:text-violet-400">更有效的学习方式</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">一节课不是“看完”，而是完成一次学习循环</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learningLoop.map((step) => (
              <div key={step.number} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                <p className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">{step.number}</p>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
            <strong>掌握标准：</strong>不是“感觉看懂了”，而是合上讲解后仍能正确作答，并能用自己的例句解释为什么这样选择。
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-slate-400">
        <p>BioLingo · 让英语和韩语知识变成可以调用的能力</p>
        <p>建议每次学习 20–30 分钟，少量、主动、反复。</p>
      </footer>
    </main>
  );
}

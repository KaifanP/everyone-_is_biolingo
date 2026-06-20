import Link from "next/link";

export default function KoreanCreditsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/korean"
            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm flex items-center gap-1 w-fit"
          >
            ← 返回课程概览
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          音频资源与致谢
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            音频来源说明
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              本课程韩语音频采用以下策略：
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>所有播放按钮均强制请求浏览器的 ko-KR 韩语声线</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>不再使用 MiMo 的英文默认声线朗读韩文</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>实际音色由操作系统或浏览器提供，因设备而异</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>音频仅用于教育目的，不用于商业用途</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            合成语音说明
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              当前使用 Web Speech API，并将语言固定为 ko-KR；系统会优先选择已安装的韩语声线。
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              如果设备没有安装韩语语音包，页面会明确提示“没有可用的 ko-KR 韩语声线”，不会退回英文声线。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            致谢
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              感谢以下组织和资源为韩语学习提供的参考：
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• 世宗学堂（세종学堂）— 韩语教育标准参考</li>
              <li>• TOPIK 官方考试大纲 — 题型和分级标准参考</li>
            </ul>
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              先前生成的 MiMo 英文声线音频已停止在课程中使用；后续只加入经过韩语母语者抽检的固定音频。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

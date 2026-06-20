import Link from "next/link";
import { koreanAudioManifest } from "@/lib/korean-audio-manifest";

export default function KoreanCreditsPage() {
  const humanAudios = koreanAudioManifest.filter((a) => a.source === "human");
  const ttsAudios = koreanAudioManifest.filter((a) => a.source === "tts");

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
                <span>课程对话、核心听力、听写和模拟听力使用本地 MiMo 2.5 TTS 音频</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>未收录本地文件的词汇卡会降级使用浏览器 ko-KR SpeechSynthesis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>每个本地音频均记录模型、生成日期和 SHA-256 校验值</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>音频仅用于教育目的，不用于商业用途</span>
              </li>
            </ul>
          </div>
        </section>

        {humanAudios.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              真人录音（{humanAudios.length} 条）
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                {humanAudios.map((audio) => (
                  <div key={audio.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <p className="font-bold text-gray-800 dark:text-gray-200 text-sm">
                      {audio.text}
                    </p>
                    <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>文件：{audio.file}</span>
                      <span>作者：{audio.author ?? "未知"}</span>
                      <span>许可：{audio.license ?? "未知"}</span>
                      {audio.sourceUrl && (
                        <span>
                          来源：
                          <a href={audio.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                            链接
                          </a>
                        </span>
                      )}
                      {audio.licenseUrl && (
                        <span>
                          许可链接：
                          <a href={audio.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                            链接
                          </a>
                        </span>
                      )}
                      {audio.modified && <span>处理：{audio.modified}</span>}
                      {audio.sha256 && <span>校验：{audio.sha256.slice(0, 16)}…</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            合成语音说明
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {ttsAudios.length > 0
                ? `当前有 ${ttsAudios.length} 条本地音频由 MiMo 2.5 TTS 生成，界面会标注“MiMo 合成语音”。`
                : "当前课程暂无合成语音音频。"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              本地音频可直接播放；只有缺少本地文件时才依赖浏览器韩语 TTS。生成方法见小米 MiMo 官方语音合成文档。
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
              MiMo 音频属于合成语音，不冒充真人录音；后续可逐步加入明确授权的真人发音。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

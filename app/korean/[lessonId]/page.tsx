import { use } from "react";
import { notFound } from "next/navigation";
import { getKoreanLessonData } from "@/lib/korean-lesson-data-registry";
import { getKoreanModuleByLessonId } from "@/lib/korean-types";
import KoreanLessonPage from "@/components/korean/KoreanLessonPage";

const ALL_LESSONS = Array.from({ length: 30 }, (_, i) => `lesson-${String(i + 1).padStart(2, "0")}`);

export function generateStaticParams() {
  return ALL_LESSONS.map((lessonId) => ({ lessonId }));
}

export default function LessonRoute({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = use(params);
  const data = getKoreanLessonData(lessonId);
  const moduleInfo = getKoreanModuleByLessonId(lessonId);

  if (!data || !moduleInfo) {
    notFound();
  }

  return <KoreanLessonPage data={data} moduleTitle={`模块${moduleInfo.number}：${moduleInfo.title}`} />;
}

import { KoreanLesson } from "./korean-types";
import { koreanLesson01Data } from "./korean-lesson-01";
import { koreanLesson02Data } from "./korean-lesson-02";
import { koreanLesson03Data } from "./korean-lesson-03";
import { koreanLesson04Data } from "./korean-lesson-04";
import { koreanLesson05Data } from "./korean-lesson-05";
import { koreanLesson06Data } from "./korean-lesson-06";
import { koreanLesson07Data } from "./korean-lesson-07";
import { koreanLesson08Data } from "./korean-lesson-08";
import { koreanLesson09Data } from "./korean-lesson-09";
import { koreanLesson10Data } from "./korean-lesson-10";
import { koreanLesson11Data } from "./korean-lesson-11";
import { koreanLesson12Data } from "./korean-lesson-12";
import { koreanLesson13Data } from "./korean-lesson-13";
import { koreanLesson14Data } from "./korean-lesson-14";
import { koreanLesson15Data } from "./korean-lesson-15";
import { koreanLesson16Data } from "./korean-lesson-16";
import { koreanLesson17Data } from "./korean-lesson-17";
import { koreanLesson18Data } from "./korean-lesson-18";
import { koreanLesson19Data } from "./korean-lesson-19";
import { koreanLesson20Data } from "./korean-lesson-20";
import { koreanLesson21Data } from "./korean-lesson-21";
import { koreanLesson22Data } from "./korean-lesson-22";
import { koreanLesson23Data } from "./korean-lesson-23";
import { koreanLesson24Data } from "./korean-lesson-24";
import { koreanLesson25Data } from "./korean-lesson-25";
import { koreanLesson26Data } from "./korean-lesson-26";
import { koreanLesson27Data } from "./korean-lesson-27";
import { koreanLesson28Data } from "./korean-lesson-28";
import { koreanLesson29Data } from "./korean-lesson-29";
import { koreanLesson30Data } from "./korean-lesson-30";

const koreanLessonDataMap: Record<string, KoreanLesson> = {
  "lesson-01": koreanLesson01Data,
  "lesson-02": koreanLesson02Data,
  "lesson-03": koreanLesson03Data,
  "lesson-04": koreanLesson04Data,
  "lesson-05": koreanLesson05Data,
  "lesson-06": koreanLesson06Data,
  "lesson-07": koreanLesson07Data,
  "lesson-08": koreanLesson08Data,
  "lesson-09": koreanLesson09Data,
  "lesson-10": koreanLesson10Data,
  "lesson-11": koreanLesson11Data,
  "lesson-12": koreanLesson12Data,
  "lesson-13": koreanLesson13Data,
  "lesson-14": koreanLesson14Data,
  "lesson-15": koreanLesson15Data,
  "lesson-16": koreanLesson16Data,
  "lesson-17": koreanLesson17Data,
  "lesson-18": koreanLesson18Data,
  "lesson-19": koreanLesson19Data,
  "lesson-20": koreanLesson20Data,
  "lesson-21": koreanLesson21Data,
  "lesson-22": koreanLesson22Data,
  "lesson-23": koreanLesson23Data,
  "lesson-24": koreanLesson24Data,
  "lesson-25": koreanLesson25Data,
  "lesson-26": koreanLesson26Data,
  "lesson-27": koreanLesson27Data,
  "lesson-28": koreanLesson28Data,
  "lesson-29": koreanLesson29Data,
  "lesson-30": koreanLesson30Data,
};

export function getKoreanLessonData(lessonId: string): KoreanLesson | undefined {
  return koreanLessonDataMap[lessonId];
}

export function getAllKoreanLessonIds(): string[] {
  return Array.from({ length: 30 }, (_, i) =>
    `lesson-${String(i + 1).padStart(2, "0")}`
  );
}

"use client";

import { useParams } from "next/navigation";
import { getChapter } from "@/lib/chapters";
import DocLayout from "@/components/learn/DocLayout";
import Chapter1 from "./chapters/Chapter1";
import Chapter2 from "./chapters/Chapter2";
import Chapter3 from "./chapters/Chapter3";
import Chapter4 from "./chapters/Chapter4";
import Chapter5 from "./chapters/Chapter5";
import Chapter6 from "./chapters/Chapter6";
import Chapter7 from "./chapters/Chapter7";
import Link from "next/link";

const chapterComponents: Record<number, React.ComponentType> = {
  1: Chapter1,
  2: Chapter2,
  3: Chapter3,
  4: Chapter4,
  5: Chapter5,
  6: Chapter6,
  7: Chapter7,
};

export default function ChapterPage() {
  const params = useParams();
  const stepId = parseInt(params.step as string);
  const chapter = getChapter(stepId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">챕터를 찾을 수 없습니다.</p>
        <Link href="/learn" className="text-primary hover:underline">
          학습 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const ChapterContent = chapterComponents[stepId];

  if (!ChapterContent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">콘텐츠 준비 중입니다.</p>
        <Link href="/learn" className="text-primary hover:underline">
          학습 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <DocLayout chapter={chapter}>
      <ChapterContent />
    </DocLayout>
  );
}

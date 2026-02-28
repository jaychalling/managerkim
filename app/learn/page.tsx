"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { ChevronRight, Home } from "lucide-react";

export default function LearnPage() {
  const [progress, setProgress] = useState<Record<string, number[]>>({});

  useEffect(() => {
    const newProgress: Record<string, number[]> = {};
    courses.forEach((course) => {
      const saved = localStorage.getItem(`progress-${course.id}`);
      if (saved) {
        newProgress[course.id] = JSON.parse(saved);
      } else {
        newProgress[course.id] = [];
      }
    });
    setProgress(newProgress);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition mb-4"
          >
            <Home size={18} />
            <span className="text-sm">홈으로</span>
          </Link>
          <h1 className="text-3xl font-extrabold">학습하기</h1>
          <p className="text-gray-500 mt-2">
            단계별로 따라하며 업무 자동화를 배워보세요
          </p>
        </div>
      </header>

      {/* Course List */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="space-y-6">
          {courses.map((course) => {
            const completed = progress[course.id]?.length || 0;
            const total = course.steps.length;
            const percent = Math.round((completed / total) * 100);
            const nextStep = completed < total ? completed + 1 : total;

            return (
              <Link
                key={course.id}
                href={`/learn/${course.id}/${nextStep}`}
                className="block bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{course.emoji}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition">
                        {course.title}
                      </h2>
                      <p className="text-gray-500 mt-1">{course.description}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        {total}단계 • {completed}/{total} 완료
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    size={24}
                    className="text-gray-400 group-hover:text-primary transition mt-2"
                  />
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Coming Soon */}
        <div className="mt-10 text-center">
          <p className="text-gray-500">더 많은 코스가 준비 중이에요</p>
          <p className="text-gray-400 text-sm mt-2">
            Gmail 자동화, 보고서 자동 생성, 웹 스크래핑...
          </p>
        </div>
      </div>
    </main>
  );
}

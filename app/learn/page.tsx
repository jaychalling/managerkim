"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { chapters } from "@/lib/chapters";
import { ChevronRight, Home, BookOpen, CheckCircle2 } from "lucide-react";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import SectionBadge from "@/components/ui/SectionBadge";

export default function LearnPage() {
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("progress-guide");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const percent = Math.round((completed.length / chapters.length) * 100);

  return (
    <main className="min-h-screen bg-base">
      <NavBar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-caption hover:text-heading transition mb-6"
          >
            <Home size={18} />
            <span className="text-sm">홈으로</span>
          </Link>

          <SectionBadge>학습 가이드</SectionBadge>

          <h1 className="text-3xl md:text-4xl font-extrabold text-heading tracking-heading mt-4 mb-2">
            AI 업무 자동화 가이드
          </h1>
          <p className="text-body text-lg">
            에이전틱 AI의 개념부터 Gmail, 엑셀, PPT 자동화까지 — 코딩 경험 없이
            따라할 수 있는 실전 가이드
          </p>

          {/* Overall progress */}
          {completed.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-caption mb-2">
                <span>전체 진행률</span>
                <span>
                  {completed.length}/{chapters.length} 챕터 완료
                </span>
              </div>
              <div className="h-2 bg-border-subtle rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-500 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Chapter List */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {chapters.map((ch) => {
              const isComplete = completed.includes(ch.id);

              return (
                <Link
                  key={ch.id}
                  href={`/learn/basics/${ch.id}`}
                  className="flex items-center gap-5 p-5 rounded-card bg-elevated border border-border-subtle hover:shadow-md transition group"
                >
                  {/* Number / Check */}
                  <div className="flex-shrink-0">
                    {isComplete ? (
                      <div className="w-10 h-10 rounded-md bg-accent-light flex items-center justify-center">
                        <CheckCircle2 size={22} className="text-accent" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-subtle flex items-center justify-center transition">
                        <span className="text-sm font-bold text-caption group-hover:text-heading transition">
                          {ch.id}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-heading group-hover:text-accent transition">
                      {ch.emoji} {ch.title}
                    </h2>
                    <p className="text-sm text-caption mt-0.5">
                      {ch.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    size={20}
                    className="text-border-default group-hover:text-heading transition flex-shrink-0"
                  />
                </Link>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="text-caption text-sm">
              더 많은 코스가 준비 중이에요 — Gmail 심화, 엑셀 마스터, 업무
              파이프라인 구축
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getCourse, getStep } from "@/lib/courses";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Copy,
  Check,
  HelpCircle,
  Home,
} from "lucide-react";
import Link from "next/link";

export default function LearnStep() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.course as string;
  const stepId = parseInt(params.step as string);

  const course = getCourse(courseId);
  const step = getStep(courseId, stepId);

  const [showHints, setShowHints] = useState(false);
  const [copied, setCopied] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [os, setOs] = useState<"mac" | "windows">("windows");

  useEffect(() => {
    const saved = localStorage.getItem(`progress-${courseId}`);
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  }, [courseId]);

  if (!course || !step) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>코스를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const totalSteps = course.steps.length;
  const progress = (stepId / totalSteps) * 100;
  const isCompleted = completedSteps.includes(stepId);
  const isLastStep = stepId === totalSteps;

  const handleComplete = () => {
    if (!completedSteps.includes(stepId)) {
      const newCompleted = [...completedSteps, stepId];
      setCompletedSteps(newCompleted);
      localStorage.setItem(`progress-${courseId}`, JSON.stringify(newCompleted));
    }

    if (!isLastStep) {
      router.push(`/learn/${courseId}/${stepId + 1}`);
    }
  };

  const getCode = () => {
    if (step.codeMac && step.codeWindows) {
      return os === "mac" ? step.codeMac : step.codeWindows;
    }
    return step.code;
  };

  const handleCopy = () => {
    const code = getCode();
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasOsSpecificCode = step.codeMac && step.codeWindows;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link
              href="/learn"
              className="flex items-center gap-2 text-gray-500 hover:text-primary transition"
            >
              <Home size={18} />
              <span className="text-sm">코스 목록</span>
            </Link>
            <span className="text-sm text-gray-500">
              Step {stepId}/{totalSteps}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-28 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Step Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
            {step.title}
          </h1>

          {/* Concept Section */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              개념 설명
            </h2>
            <div className="space-y-4">
              {step.concept.map((text, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2">
              미션
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-xl font-medium text-gray-900">{step.mission}</p>
            </div>
          </section>

          {/* Code Block */}
          {(step.code || hasOsSpecificCode) && (
            <section className="mb-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
                  {hasOsSpecificCode ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setOs("windows")}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition cursor-pointer ${
                          os === "windows"
                            ? "bg-primary text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Windows
                      </button>
                      <button
                        onClick={() => setOs("mac")}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition cursor-pointer ${
                          os === "mac"
                            ? "bg-primary text-white"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Mac
                      </button>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">터미널 명령어</span>
                  )}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-accent" />
                        복사됨
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        복사
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-lg text-green-400">{getCode()}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Hints Section */}
          <section className="mb-10">
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition cursor-pointer"
            >
              <Lightbulb size={20} />
              <span className="font-medium">
                {showHints ? "힌트 숨기기" : "힌트 보기"}
              </span>
            </button>
            {showHints && (
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <ul className="space-y-2">
                  {step.hints.map((hint, i) => (
                    <li key={i} className="text-amber-800 flex items-start gap-2">
                      <span>•</span>
                      <span>{hint}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Previous Button */}
            {stepId > 1 ? (
              <Link
                href={`/learn/${courseId}/${stepId - 1}`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              >
                <ChevronLeft size={20} />
                이전
              </Link>
            ) : (
              <div />
            )}

            {/* Complete Button */}
            <button
              onClick={handleComplete}
              className={`flex-1 max-w-xs flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition cursor-pointer ${
                isLastStep
                  ? "bg-accent hover:bg-green-600"
                  : "bg-primary hover:bg-blue-700"
              } text-white shadow-lg`}
            >
              {isLastStep ? (
                "완료!"
              ) : (
                <>
                  완료했어요
                  <ChevronRight size={20} />
                </>
              )}
            </button>

            {/* Help Button */}
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition cursor-pointer">
              <HelpCircle size={20} />
              도움
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

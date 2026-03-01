"use client";

import { useState } from "react";
import { CheckCircle, Star, ChevronRight } from "lucide-react";

const NEXT_TOPICS = [
  { value: "excel", label: "📊 엑셀 자동화" },
  { value: "report", label: "📝 보고서 자동 생성" },
  { value: "email", label: "📧 메일 자동 발송" },
  { value: "research", label: "🔍 리서치 자동화" },
  { value: "file", label: "📁 파일 정리·변환" },
  { value: "schedule", label: "📅 일정·알림 자동화" },
];

export default function SurveyPage() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [helpful, setHelpful] = useState("");
  const [improvement, setImprovement] = useState("");
  const [nextTopics, setNextTopics] = useState<string[]>([]);
  const [nextTopicsOther, setNextTopicsOther] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleTopic = (val: string) => {
    setNextTopics((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) { setError("만족도를 선택해주세요"); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, helpful, improvement, nextTopics, nextTopicsOther, name, email }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-base flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-accent rounded-md flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-heading mb-4">감사합니다!</h1>
          <p className="text-body text-lg leading-relaxed mb-6">
            소중한 의견 잘 받았습니다.<br />
            여러분의 답변을 바탕으로<br />
            <strong className="text-heading">맞춤 강의를 만들어 연락드릴게요</strong>
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent-dark transition"
          >
            홈으로 <ChevronRight size={18} />
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base py-16 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-accent font-semibold text-xs uppercase tracking-[0.15em] mb-4">
            워크샵 후기
          </span>
          <h1 className="text-3xl font-extrabold text-heading mb-2">
            2분이면 됩니다
          </h1>
          <p className="text-caption">
            여러분의 답변이 다음 강의를 만듭니다
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Q1: 만족도 */}
          <div className="bg-elevated rounded-card p-6 border border-border-subtle">
            <p className="font-bold text-heading mb-4">
              1. 오늘 강의 전체 만족도는요? <span className="text-accent">*</span>
            </p>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={40}
                    className={
                      n <= (hovered || rating)
                        ? "fill-accent text-accent"
                        : "text-border-default"
                    }
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-sm text-caption mt-2">
                {["", "아쉬웠어요", "조금 아쉬웠어요", "보통이에요", "좋았어요", "완전 좋았어요!"][rating]}
              </p>
            )}
          </div>

          {/* Q2: 가장 도움이 된 내용 */}
          <div className="bg-elevated rounded-card p-6 border border-border-subtle">
            <p className="font-bold text-heading mb-3">
              2. 가장 도움이 된 내용은요?
            </p>
            <textarea
              value={helpful}
              onChange={(e) => setHelpful(e.target.value)}
              placeholder="예: Gmail 자동화, 터미널 사용법, 프롬프트 작성법..."
              rows={3}
              className="w-full border border-border-default bg-subtle/30 rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {/* Q3: 아쉬웠던 점 */}
          <div className="bg-elevated rounded-card p-6 border border-border-subtle">
            <p className="font-bold text-heading mb-3">
              3. 아쉬웠던 점이 있다면?{" "}
              <span className="text-caption font-normal text-sm">(선택)</span>
            </p>
            <textarea
              value={improvement}
              onChange={(e) => setImprovement(e.target.value)}
              placeholder="솔직하게 적어주세요. 다음 강의에 반영할게요"
              rows={3}
              className="w-full border border-border-default bg-subtle/30 rounded-md p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {/* Q4: 다음에 배우고 싶은 것 */}
          <div className="bg-elevated rounded-card p-6 border border-border-subtle">
            <p className="font-bold text-heading mb-1">
              4. 다음에 어떤 자동화가 필요하세요?
            </p>
            <p className="text-sm text-caption mb-4">
              선택한 주제로 강의를 만들어 연락드릴게요
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {NEXT_TOPICS.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => toggleTopic(t.value)}
                  className={`text-left px-4 py-3 rounded-md border-2 text-sm font-medium transition ${
                    nextTopics.includes(t.value)
                      ? "border-accent bg-accent-light text-accent"
                      : "border-border-subtle text-body hover:border-border-default"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <input
              value={nextTopicsOther}
              onChange={(e) => setNextTopicsOther(e.target.value)}
              placeholder="기타 — 직접 입력 (예: Slack 알림 자동화)"
              className="w-full border border-border-default bg-subtle/30 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {/* Q5: 연락처 */}
          <div className="bg-elevated rounded-card p-6 border border-border-subtle">
            <p className="font-bold text-heading mb-1">
              5. 연락처{" "}
              <span className="text-caption font-normal text-sm">(선택)</span>
            </p>
            <p className="text-sm text-caption mb-4">
              맞춤 강의가 완성되면 가장 먼저 알려드릴게요
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              className="w-full border border-border-default bg-subtle/30 rounded-md p-3 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소"
              type="email"
              className="w-full border border-border-default bg-subtle/30 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white py-4 rounded-md text-lg font-bold hover:bg-accent-dark transition disabled:opacity-50"
          >
            {loading ? "제출 중..." : "제출하기 →"}
          </button>

          <p className="text-center text-xs text-caption">
            수집된 정보는 강의 개선 및 후속 안내에만 사용됩니다
          </p>
        </form>
      </div>
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Terminal,
  Rocket,
  ArrowRight,
  ArrowDown,
  Minus,
  Plus,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Accordion from "@/components/ui/Accordion";
import { chapters } from "@/lib/chapters";

/* ─── Fade-in observer hook ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: "코딩을 전혀 모르는데 따라할 수 있나요?",
    answer:
      "네, 가능합니다. 모든 내용은 코딩 경험 없는 직장인 기준으로 작성했습니다. 터미널 여는 것부터 하나씩 따라하면 됩니다.",
  },
  {
    question: "Claude Code가 뭔가요?",
    answer:
      "Anthropic이 만든 AI 코딩 에이전트입니다. 터미널에서 자연어로 지시하면, 파일 생성·수정, API 연동, 데이터 분석까지 직접 실행합니다.",
  },
  {
    question: "무료로 사용할 수 있나요?",
    answer:
      "Claude Pro($20/월) 또는 Max($100/월) 구독이 필요합니다. 학습 콘텐츠 자체는 모두 무료입니다.",
  },
  {
    question: "회사에서 바로 쓸 수 있나요?",
    answer:
      "네. Gmail 자동 정리, 엑셀 집계, 보고서 생성 등 실제 업무에 바로 적용 가능한 내용입니다.",
  },
  {
    question: "어떤 OS를 지원하나요?",
    answer:
      "Windows와 Mac 모두 지원합니다. 각 단계마다 OS별 가이드를 제공합니다.",
  },
  {
    question: "VPS가 꼭 필요한가요?",
    answer:
      "아닙니다. PC에서 충분히 실습 가능합니다. VPS는 자동화를 24시간 돌리고 싶을 때 필요합니다.",
  },
];

/* ─── Portfolio items ─── */
const showcaseItems = [
  {
    title: "Gmail 자동 분류·정리",
    desc: "매일 아침 8시, 메일함 라벨링 + 읽음처리 + 답장 초안",
  },
  {
    title: "주간 보고서 자동 생성",
    desc: "데이터 수집 → 분석 → PPT까지 한 번에",
  },
  {
    title: "경쟁사 가격 모니터링",
    desc: "웹 스크래핑 + 변동 감지 → 슬랙 알림",
  },
  {
    title: "엑셀 데이터 집계·차트",
    desc: "여러 시트 합치기, 피벗, 차트 자동 생성",
  },
];

/* ─── Pricing items ─── */
const pricingPlans = [
  {
    name: "Claude Pro",
    price: "$20",
    period: "/월",
    features: [
      "Claude Code 사용 가능",
      "월 제한 있음 (일반 사용 충분)",
      "웹 + 모바일 + 터미널",
      "입문용으로 추천",
    ],
    recommended: false,
  },
  {
    name: "Claude Max",
    price: "$100",
    period: "/월",
    features: [
      "Claude Code 무제한",
      "Opus 모델 사용 가능",
      "에이전트 팀 기능",
      "헤비 유저용, 압도적 생산성",
    ],
    recommended: true,
  },
];

/* ─── ROI Calculator ─── */
function RoiCalculator() {
  const [hours, setHours] = useState(2);
  const savedPerYear = Math.round(hours * 0.7 * 250);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-center gap-6 mb-8">
        <button
          onClick={() => setHours(Math.max(1, hours - 1))}
          className="w-12 h-12 rounded-md border border-border-default flex items-center justify-center text-caption hover:border-heading transition cursor-pointer"
        >
          <Minus size={20} />
        </button>
        <span className="text-7xl font-extrabold text-heading tracking-heading">
          {hours}
        </span>
        <button
          onClick={() => setHours(Math.min(8, hours + 1))}
          className="w-12 h-12 rounded-md border border-border-default flex items-center justify-center text-caption hover:border-heading transition cursor-pointer"
        >
          <Plus size={20} />
        </button>
      </div>
      <p className="text-caption text-center mb-6">반복 업무에 하루 {hours}시간</p>
      <div className="text-center">
        <p className="text-5xl font-extrabold text-accent mb-2">
          연간 {savedPerYear}시간
        </p>
        <p className="text-caption">
          절약 가능 · 약 {Math.round(savedPerYear / 8)}일의 업무일
        </p>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* ═══ 1. Hero — 풀스크린, 결과를 먼저 ═══ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-heading tracking-heading leading-[1.1] mb-6">
            반복 업무,
            <br />
            <span className="text-accent">AI가 대신</span>합니다
          </h1>

          <p className="text-lg md:text-xl text-body max-w-lg mx-auto mb-10">
            코딩 경험 없이도 Gmail, 엑셀, PPT 자동화를
            <br className="hidden md:block" />
            직접 만들 수 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/learn/basics/1"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-accent-dark transition"
            >
              무료로 시작하기
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-heading text-heading px-8 py-4 rounded-md text-lg font-medium hover:bg-heading hover:text-white transition"
            >
              가이드 둘러보기
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-caption" />
        </div>
      </section>

      {/* ═══ 2. 결과물 쇼케이스 — 풀스크린 ═══ */}
      <section className="min-h-screen flex items-center px-6 bg-subtle">
        <FadeSection className="w-full">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-caption mb-4">What you can build</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading mb-16">
              이런 자동화를 만들 수 있습니다
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {showcaseItems.map((item, i) => (
                <div key={i} className="bg-white rounded-card p-8">
                  <h3 className="text-xl font-bold text-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/learn/basics/1"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                직접 만들어보기
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ═══ 3. 프로세스 — 풀스크린, 극도로 심플 ═══ */}
      <section className="min-h-screen flex items-center px-6">
        <FadeSection className="w-full">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-caption mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading mb-20">
              3단계로 완성합니다
            </h2>

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {[
                { icon: <BookOpen size={32} />, step: "01", title: "학습", desc: "에이전틱 AI 개념부터 설치까지" },
                { icon: <Terminal size={32} />, step: "02", title: "실습", desc: "Gmail, 엑셀, PPT 자동화 직접 만들기" },
                { icon: <Rocket size={32} />, step: "03", title: "적용", desc: "내 실제 업무에 자동화 적용" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-subtle rounded-2xl flex items-center justify-center mx-auto mb-6 text-heading">
                    {item.icon}
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-caption mb-2">{item.step}</p>
                  <h3 className="text-2xl font-bold text-heading mb-2">{item.title}</h3>
                  <p className="text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ═══ 4. 커리큘럼 — 풀스크린 ═══ */}
      <section className="min-h-screen flex items-center px-6 bg-subtle">
        <FadeSection className="w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-caption mb-4">Curriculum</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading mb-4">
              6개 챕터
            </h2>
            <p className="text-body text-lg mb-16">코딩 경험 없어도 됩니다</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapters.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/learn/basics/${ch.id}`}
                  className="group bg-white rounded-card p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl font-extrabold text-muted">
                      {String(ch.id).padStart(2, "0")}
                    </span>
                    <ChevronRight
                      size={18}
                      className="text-border-default group-hover:text-accent group-hover:translate-x-0.5 transition-all mt-2"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-heading mb-1">
                    {ch.emoji} {ch.title}
                  </h3>
                  <p className="text-sm text-caption">{ch.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ═══ 5. ROI — 풀스크린, 숫자 강조 ═══ */}
      <section className="min-h-screen flex items-center px-6">
        <FadeSection className="w-full">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-caption mb-4">Impact</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading mb-4">
              자동화하면 얼마나 절약될까?
            </h2>
            <p className="text-body text-lg mb-16">주당 반복 업무 시간을 조절해보세요</p>

            <RoiCalculator />
          </div>
        </FadeSection>
      </section>

      {/* ═══ 6. 가격 비교 — 풀스크린 ═══ */}
      <section className="min-h-screen flex items-center px-6 bg-subtle">
        <FadeSection className="w-full">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-caption mb-4">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading mb-4">
              Claude 구독 비교
            </h2>
            <p className="text-body text-lg mb-16">학습 콘텐츠는 무료 · Claude Code 사용에는 구독이 필요합니다</p>

            <div className="grid md:grid-cols-2 gap-6">
              {pricingPlans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-card p-8 border-2 ${
                    plan.recommended
                      ? "border-accent"
                      : "border-transparent"
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-md">
                      추천
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-heading mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-heading">
                      {plan.price}
                    </span>
                    <span className="text-caption">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Sparkles
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${
                            plan.recommended ? "text-accent" : "text-caption"
                          }`}
                        />
                        <span className="text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ═══ 7. FAQ — compact ═══ */}
      <section className="py-24 px-6">
        <FadeSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-caption mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading tracking-heading mb-12">
              자주 묻는 질문
            </h2>
            <Accordion items={faqItems} />
          </div>
        </FadeSection>
      </section>

      {/* ═══ 8. Final CTA — 풀스크린 ═══ */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-body text-lg mb-10">
            코딩 경험 없이도 업무 자동화를 만들 수 있습니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/learn/basics/1"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-accent-dark transition"
            >
              무료 학습 시작
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-heading text-heading px-8 py-4 rounded-md text-lg font-medium hover:bg-heading hover:text-white transition"
            >
              가이드 둘러보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

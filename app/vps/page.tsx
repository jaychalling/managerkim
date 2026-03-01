"use client";

import { useState } from "react";
import {
  Server,
  Clock,
  Zap,
  Shield,
  Check,
  ArrowRight,
  Bot,
  Terminal,
  Globe,
  Cpu,
  HardDrive,
  MessageCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import SectionBadge from "@/components/ui/SectionBadge";
import CtaBanner from "@/components/ui/CtaBanner";

export default function VPSPage() {
  const [toast, setToast] = useState(false);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  const plans = [
    {
      name: "Starter",
      price: "9,900",
      specs: {
        cpu: "2 vCPU",
        ram: "4GB RAM",
        storage: "40GB SSD",
        traffic: "무제한 트래픽",
      },
      features: [
        "Claude Code 자동화 실행",
        "Python 스크립트 24시간 가동",
        "Gmail 자동화 호스팅",
      ],
      recommended: false,
      cta: "시작하기",
    },
    {
      name: "Pro",
      price: "19,900",
      specs: {
        cpu: "4 vCPU",
        ram: "8GB RAM",
        storage: "80GB SSD",
        traffic: "무제한 트래픽",
      },
      features: [
        "Starter 모든 기능",
        "Ollama 로컬 AI 실행",
        "Docker 컨테이너 지원",
        "헤드리스 브라우저 자동화",
      ],
      recommended: true,
      cta: "가장 인기",
    },
    {
      name: "Business",
      price: "39,900",
      specs: {
        cpu: "8 vCPU",
        ram: "16GB RAM",
        storage: "160GB SSD",
        traffic: "무제한 트래픽",
      },
      features: [
        "Pro 모든 기능",
        "대용량 AI 모델 실행",
        "다중 자동화 동시 실행",
        "우선 기술 지원",
      ],
      recommended: false,
      cta: "문의하기",
    },
  ];

  const presets = [
    { icon: Bot, name: "Ollama", desc: "로컬 AI 모델 실행" },
    { icon: Terminal, name: "Docker", desc: "컨테이너 환경 구성" },
    { icon: Globe, name: "Playwright", desc: "헤드리스 브라우저" },
    { icon: Zap, name: "Python 3.12", desc: "자동화 스크립트 실행" },
  ];

  return (
    <main className="min-h-screen bg-base">
      <NavBar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionBadge>AI-Ready VPS</SectionBadge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-heading tracking-heading leading-tight mt-6 mb-6">
            만든 자동화,
            <br />
            <span className="text-accent">24시간</span> 돌리세요
          </h1>
          <p className="text-xl text-body leading-relaxed mb-10">
            PC 끄면 멈추는 자동화?
            <br />
            VPS에 올리면 <strong className="text-heading">잠자는 동안에도</strong>{" "}
            일합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-accent-dark transition cursor-pointer"
            >
              요금제 보기
              <ArrowRight size={20} />
            </a>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 border border-heading text-heading px-8 py-4 rounded-md text-lg font-medium hover:bg-heading hover:text-white transition"
            >
              먼저 자동화 배우기
            </Link>
          </div>
        </div>
      </section>

      {/* Why VPS */}
      <section className="py-20 px-6 bg-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionBadge>왜 VPS인가</SectionBadge>
            <h2 className="text-3xl font-extrabold text-heading tracking-heading mt-4 mb-2">
              왜 VPS가 필요한가요?
            </h2>
            <p className="text-caption">
              만든 자동화, 이대로 끝내기 아깝잖아요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "24시간 무중단",
                desc: "내 PC가 꺼져도, 잠을 자도 자동화는 계속 돌아갑니다",
              },
              {
                icon: Zap,
                title: "빠른 실행 속도",
                desc: "독일 Hetzner 데이터센터, 안정적인 서버 성능",
              },
              {
                icon: Shield,
                title: "안전한 분리",
                desc: "회사 PC에 설치 없이, 별도 서버에서 안전하게 실행",
              },
              {
                icon: Bot,
                title: "AI 모델 실행",
                desc: "Ollama로 로컬 AI 모델도 돌릴 수 있어요",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 bg-white p-6 rounded-card"
              >
                <div className="w-12 h-12 bg-subtle rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-heading" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading mb-1">{item.title}</h3>
                  <p className="text-caption">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presets */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionBadge>프리셋</SectionBadge>
            <h2 className="text-3xl font-extrabold text-heading tracking-heading mt-4 mb-2">
              AI-Ready 프리셋
            </h2>
            <p className="text-caption">
              복잡한 설치 없이, 바로 사용 가능한 환경
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {presets.map((preset, i) => (
              <div
                key={i}
                className="bg-subtle rounded-card p-6 text-center"
              >
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <preset.icon size={28} className="text-heading" />
                </div>
                <h3 className="font-bold text-heading mb-1">{preset.name}</h3>
                <p className="text-sm text-caption">{preset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 px-6 bg-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionBadge>요금제</SectionBadge>
            <h2 className="text-3xl font-extrabold text-heading tracking-heading mt-4 mb-2">
              요금제
            </h2>
            <p className="text-caption">업무 자동화 수강생 전용 특가</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-card p-6 border-2 ${
                  plan.recommended
                    ? "border-accent shadow-lg"
                    : "border-border-subtle"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-md">
                    추천
                  </div>
                )}
                <h3 className="text-xl font-bold text-heading mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-heading">
                    {plan.price}
                  </span>
                  <span className="text-caption">원/월</span>
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b border-border-subtle">
                  <div className="flex items-center gap-2 text-sm text-body">
                    <Cpu size={16} className="text-caption" />
                    <span>{plan.specs.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-body">
                    <HardDrive size={16} className="text-caption" />
                    <span>{plan.specs.ram}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-body">
                    <Server size={16} className="text-caption" />
                    <span>{plan.specs.storage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-body">
                    <Globe size={16} className="text-caption" />
                    <span>{plan.specs.traffic}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span className="text-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={showToast}
                  className={`block w-full text-center py-3 rounded-md font-semibold transition cursor-pointer ${
                    plan.recommended
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "bg-subtle text-heading hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionBadge>활용 사례</SectionBadge>
            <h2 className="text-3xl font-extrabold text-heading tracking-heading mt-4">
              이런 자동화를 24시간 돌리세요
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Gmail 자동 정리",
                desc: "매일 아침 8시, 메일함 자동 분류 및 라벨링",
              },
              {
                title: "정기 보고서 생성",
                desc: "매주 월요일, 데이터 수집 → 분석 → 보고서 자동 생성",
              },
              {
                title: "웹 모니터링",
                desc: "경쟁사 가격, 재고 변동 실시간 감지 및 알림",
              },
              {
                title: "SNS 자동 포스팅",
                desc: "예약된 콘텐츠 자동 발행",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-subtle p-5 rounded-card"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-heading" />
                </div>
                <div>
                  <h3 className="font-bold text-heading">{item.title}</h3>
                  <p className="text-sm text-caption">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-subtle rounded-2xl flex items-center justify-center mx-auto mb-6 border border-border-subtle">
            <MessageCircle size={40} className="text-heading" />
          </div>
          <h2 className="text-3xl font-extrabold text-heading tracking-heading mb-4">
            궁금한 게 있으신가요?
          </h2>
          <p className="text-xl text-caption mb-8">
            카카오톡으로 편하게 문의하세요
            <br />
            자동화 상담도 함께 해드립니다
          </p>
          <button
            onClick={showToast}
            className="inline-flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-10 py-5 rounded-md text-xl font-bold hover:bg-yellow-400 transition cursor-pointer"
          >
            카카오톡 상담하기
          </button>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setToast(false)}>
          <div className="bg-white rounded-card p-8 shadow-xl max-w-sm mx-4 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-2xl font-extrabold text-heading mb-2">준비중입니다</p>
            <p className="text-caption mb-6">곧 오픈 예정입니다. 조금만 기다려주세요!</p>
            <button
              onClick={() => setToast(false)}
              className="bg-accent text-white px-6 py-2.5 rounded-md font-semibold hover:bg-accent-dark transition cursor-pointer"
            >
              확인
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

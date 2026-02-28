"use client";

import {
  Server,
  Clock,
  Zap,
  Shield,
  Check,
  ArrowRight,
  Home,
  Bot,
  Terminal,
  HardDrive,
  Cpu,
  Globe,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function VPSPage() {
  const kakaoUrl = "#"; // 카카오톡 오픈채팅 링크

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
    {
      icon: Bot,
      name: "Ollama",
      desc: "로컬 AI 모델 실행",
    },
    {
      icon: Terminal,
      name: "Docker",
      desc: "컨테이너 환경 구성",
    },
    {
      icon: Globe,
      name: "Playwright",
      desc: "헤드리스 브라우저",
    },
    {
      icon: Zap,
      name: "Python 3.12",
      desc: "자동화 스크립트 실행",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gray-900">
            Manager<span className="text-primary">Kim</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/learn"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              무료 학습
            </Link>
            <a
              href={kakaoUrl}
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              상담하기
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Server size={16} />
            AI-Ready VPS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            만든 자동화,
            <br />
            <span className="text-primary">24시간</span> 돌리세요
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            PC 끄면 멈추는 자동화?
            <br />
            VPS에 올리면 <strong className="text-gray-900">잠자는 동안에도</strong>{" "}
            일합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition cursor-pointer"
            >
              요금제 보기
              <ArrowRight size={20} />
            </a>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition"
            >
              먼저 자동화 배우기
            </Link>
          </div>
        </div>
      </section>

      {/* Why VPS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            왜 VPS가 필요한가요?
          </h2>
          <p className="text-gray-500 text-center mb-12">
            워크샵에서 만든 자동화, 이대로 끝내기 아깝잖아요
          </p>

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
                className="flex gap-4 bg-white p-6 rounded-2xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presets */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            AI-Ready 프리셋
          </h2>
          <p className="text-gray-500 text-center mb-12">
            복잡한 설치 없이, 바로 사용 가능한 환경
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {presets.map((preset, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <preset.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{preset.name}</h3>
                <p className="text-sm text-gray-500">{preset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">요금제</h2>
          <p className="text-gray-500 text-center mb-12">
            업무 자동화 수강생 전용 특가
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-6 border-2 ${
                  plan.recommended
                    ? "border-primary shadow-lg"
                    : "border-gray-200"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    추천
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">원/월</span>
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Cpu size={16} className="text-gray-400" />
                    <span>{plan.specs.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <HardDrive size={16} className="text-gray-400" />
                    <span>{plan.specs.ram}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Server size={16} className="text-gray-400" />
                    <span>{plan.specs.storage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Globe size={16} className="text-gray-400" />
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
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={kakaoUrl}
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition cursor-pointer ${
                    plan.recommended
                      ? "bg-primary text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            이런 자동화를 24시간 돌리세요
          </h2>

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
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-5 rounded-2xl"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            궁금한 게 있으신가요?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            카카오톡으로 편하게 문의하세요
            <br />
            자동화 상담도 함께 해드립니다
          </p>
          <a
            href={kakaoUrl}
            className="inline-flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-400 transition cursor-pointer"
          >
            카카오톡 상담하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-bold text-gray-900 mb-2">
            Manager<span className="text-primary">Kim</span>
          </p>
          <p className="text-gray-500 text-sm">업무 자동화하는 회사원 김과장</p>
          <p className="text-gray-400 text-xs mt-4">
            © 2026 ManagerKim. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

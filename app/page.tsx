"use client";

import {
  Mail,
  Globe,
  Play,
  FileText,
  RefreshCw,
  Smartphone,
  Rocket,
  DollarSign,
  Briefcase,
  Building2,
  Bot,
  CheckCircle,
  XCircle,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { docSections } from "@/lib/docs";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">
            Manager<span className="text-primary">Kim</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/learn"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              무료 학습
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              가이드
            </Link>
            <Link
              href="/vps"
              className="text-gray-600 hover:text-primary font-medium transition"
            >
              VPS
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-lg mb-4">안녕하세요 👋</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            업무 자동화하는 회사원
            <br />
            <span className="text-primary">김과장</span>입니다
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <Building2 size={18} className="text-primary" />
              <span className="text-sm font-medium">대기업 연구원 10년차</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <Bot size={18} className="text-accent" />
              <span className="text-sm font-medium">반복 업무 줄이려고 AI 독학</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            "매일 똑같은 보고서, 메일 정리...
            <br />
            AI한테 시키면 안 되나? 해봤더니 <strong className="text-gray-900">진짜 됩니다.</strong>"
          </p>
          <Link
            href="/learn/basics/1"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/25"
          >
            무료로 시작하기 →
          </Link>
        </div>
      </section>

      {/* 차별화 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            🙅 이건 그런 강의 아닙니다
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Smartphone, text: "앱 만들기 강의" },
              { icon: Rocket, text: "인디해커 되는 법" },
              { icon: DollarSign, text: "부업 수익화" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200"
              >
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <item.icon size={20} className="text-red-500" />
                </div>
                <span className="text-gray-500 font-medium">❌ {item.text}</span>
              </div>
            ))}
          </div>
          <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
              <Briefcase size={28} className="text-white" />
            </div>
            <div>
              <p className="text-accent font-semibold mb-1">✅ 당신이 매일 하는 업무를</p>
              <p className="text-2xl font-extrabold text-gray-900">
                AI가 대신하게 만듭니다 🤖
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 실습 내용 */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 text-center mb-2">📚 이날 뭘 하나요?</p>
          <h2 className="text-3xl font-extrabold text-center mb-12">
            3시간 동안 직접 해봅니다
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                color: "bg-primary",
                title: "📧 Gmail 자동 정리",
                desc: "API로 이메일 자동 관리",
              },
              {
                icon: Globe,
                color: "bg-accent",
                title: "🌐 웹페이지 만들기",
                desc: "프롬프트만으로 HTML 생성",
              },
              {
                icon: Play,
                color: "bg-amber-500",
                title: "🚀 브라우저에서 실행",
                desc: "만든 거 직접 띄워보기",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-gray-50 p-5 rounded-2xl"
              >
                <div
                  className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">{item.title}</p>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold">
              💡 코딩 경험 없어도 됩니다
            </span>
          </div>
        </div>
      </section>

      {/* 타겟 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            🎯 이런 분께 딱입니다
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { icon: FileText, text: "매주 같은 보고서 쓰는 분" },
              { icon: RefreshCw, text: "반복 작업에 지친 직장인" },
              { icon: Mail, text: "메일 정리에 시간 쓰는 분" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-accent/10 border-2 border-accent p-4 rounded-xl"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <item.icon size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  <CheckCircle size={18} className="inline text-accent mr-2" />
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-gray-500 text-center mb-4">
            🙅 이런 분은 안 맞아요
          </p>
          <div className="space-y-3">
            {[
              "앱 만들어서 수익화 목표",
              "이미 코딩 잘 하시는 분",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle size={24} className="text-red-400" />
                </div>
                <span className="text-lg font-medium text-gray-500">
                  ❌ {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 무료 학습 */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 text-center mb-2">🎓 먼저 맛보기</p>
          <h2 className="text-3xl font-extrabold text-center mb-4">
            무료로 시작해보세요
          </h2>
          <p className="text-gray-600 text-center mb-10">
            설치부터 첫 자동화까지, 단계별로 따라해보세요
          </p>

          <Link
            href="/learn/basics/1"
            className="block bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-blue-500/20 transition group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <BookOpen size={32} />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">12단계 무료 코스</p>
                  <h3 className="text-2xl font-bold">🚀 업무 자동화 기초</h3>
                  <p className="text-blue-100 mt-1">
                    Claude Code 설치부터 첫 자동화까지
                  </p>
                </div>
              </div>
              <ChevronRight
                size={32}
                className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition"
              />
            </div>
          </Link>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 rounded-xl p-5 opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-gray-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-700">📧 Gmail 자동화</p>
                  <p className="text-sm text-gray-500">준비 중...</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-5 opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <FileText size={24} className="text-gray-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-700">📝 보고서 자동 생성</p>
                  <p className="text-sm text-gray-500">준비 중...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claude Code 가이드 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 text-center mb-2">📚 기능 가이드</p>
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Claude Code, 이런 것도 됩니다
          </h2>
          <p className="text-gray-600 text-center mb-10">
            워크샵 참가자를 위한 주요 기능 설명서
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {docSections.slice(0, 6).map((section) => (
              <Link
                key={section.slug}
                href={`/docs/${section.slug}`}
                className="group flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-primary hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {section.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {section.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition"
            >
              전체 가이드 보기
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* VPS Promotion */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 mb-2">24시간 자동화</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            만든 자동화, 계속 돌리고 싶다면?
          </h2>
          <p className="text-blue-100 mb-8">
            PC 끄면 멈추는 자동화. VPS에 올리면 잠자는 동안에도 일합니다.
          </p>
          <Link
            href="/vps"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition"
          >
            AI-Ready VPS 알아보기
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-bold text-gray-900 mb-2">
            Manager<span className="text-primary">Kim</span>
          </p>
          <p className="text-gray-500 text-sm">
            업무 자동화하는 회사원 김과장
          </p>
          <p className="text-gray-400 text-xs mt-4">
            © 2026 ManagerKim. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

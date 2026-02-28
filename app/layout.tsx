import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ManagerKim | 업무 자동화하는 회사원 김과장",
  description: "앱 만들기? 부업 수익화? 그런 거 안 합니다. 당신이 매일 하는 업무를, AI가 대신하게 만듭니다.",
  keywords: ["업무 자동화", "Claude Code", "AI 자동화", "직장인", "김과장"],
  openGraph: {
    title: "ManagerKim | 업무 자동화하는 회사원 김과장",
    description: "당신이 매일 하는 업무를, AI가 대신하게 만듭니다.",
    url: "https://managerkim.com",
    siteName: "ManagerKim",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}

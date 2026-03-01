import Link from "next/link";
import { Home, ExternalLink } from "lucide-react";
import { toolCategories } from "@/lib/tools";
import SectionBadge from "@/components/ui/SectionBadge";
import Footer from "@/components/ui/Footer";

const tagStyles: Record<string, string> = {
  추천: "bg-subtle text-heading border border-border-default",
  입문용: "bg-accent-light text-accent border border-accent/20",
  무료: "bg-subtle text-body border border-border-default",
};

function getTagStyle(tag: string): string {
  return tagStyles[tag] ?? "bg-subtle text-caption border border-border-default";
}

const totalTools = toolCategories.reduce(
  (sum, cat) => sum + cat.tools.length,
  0,
);

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-base">
      {/* Header */}
      <header className="border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-caption hover:text-heading transition mb-4"
          >
            <Home size={18} />
            <span className="text-sm">홈으로</span>
          </Link>
          <SectionBadge>도구 카탈로그</SectionBadge>
          <h1 className="text-3xl font-extrabold text-heading tracking-heading mt-3 mb-2">
            무료 &amp; 저렴한 서비스 카탈로그
          </h1>
          <p className="text-body">
            업무 자동화에 필요한 서비스를 무료 티어 중심으로 정리했습니다
          </p>
          <p className="text-sm text-caption mt-2">
            총 {totalTools}개 서비스
          </p>
        </div>
      </header>

      {/* Category Tab Nav — sticky */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {toolCategories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium border border-border-subtle text-body hover:bg-subtle hover:text-heading transition whitespace-nowrap"
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Category Sections */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-14">
        {toolCategories.map((cat) => (
          <section key={cat.slug}>
            <h2
              id={cat.slug}
              className="scroll-mt-24 text-2xl font-bold text-heading flex items-center gap-2 mb-6"
            >
              <span className="text-3xl">{cat.icon}</span>
              {cat.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {cat.tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 bg-elevated border border-border-subtle rounded-card p-5 hover:shadow-md transition"
                >
                  {/* Header row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-2xl leading-none">{tool.icon}</span>
                    <span className="font-bold text-heading">
                      {tool.name}
                    </span>
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-md font-semibold ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                    <ExternalLink
                      size={14}
                      className="ml-auto text-border-default group-hover:text-heading transition flex-shrink-0"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-body leading-relaxed">
                    {tool.desc}
                  </p>

                  {/* Free tier box */}
                  <div className="bg-subtle rounded-lg px-4 py-3">
                    <p className="text-xs font-semibold text-heading mb-1">
                      무료 티어
                    </p>
                    <p className="text-sm text-body">{tool.free}</p>
                  </div>

                  {/* Paid info */}
                  {tool.paid && (
                    <p className="text-xs text-caption">
                      유료: {tool.paid}
                    </p>
                  )}

                  {/* Limits */}
                  {tool.limits.length > 0 && (
                    <ul className="space-y-1">
                      {tool.limits.map((limit, i) => (
                        <li
                          key={i}
                          className="text-xs text-caption flex items-start gap-1.5"
                        >
                          <span className="text-border-default mt-0.5 flex-shrink-0">
                            &bull;
                          </span>
                          {limit}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Verdict */}
                  <p className="text-sm font-medium text-heading mt-auto pt-1 border-t border-border-subtle">
                    {tool.verdict}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}

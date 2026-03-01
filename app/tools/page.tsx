import Link from "next/link";
import { Home, ExternalLink } from "lucide-react";
import { toolCategories } from "@/lib/tools";

const tagStyles: Record<string, string> = {
  추천: "bg-blue-100 text-blue-700 border border-blue-200",
  입문용: "bg-green-100 text-green-700 border border-green-200",
  무료: "bg-emerald-100 text-emerald-700 border border-emerald-200",
};

function getTagStyle(tag: string): string {
  return tagStyles[tag] ?? "bg-gray-100 text-gray-600 border border-gray-200";
}

const totalTools = toolCategories.reduce(
  (sum, cat) => sum + cat.tools.length,
  0,
);

export default function ToolsPage() {
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
          <h1 className="text-3xl font-extrabold mb-2">
            무료 &amp; 저렴한 서비스 카탈로그
          </h1>
          <p className="text-gray-500">
            업무 자동화에 필요한 서비스를 무료 티어 중심으로 정리했습니다
          </p>
          <p className="text-sm text-gray-400 mt-2">
            총 {totalTools}개 서비스
          </p>
        </div>
      </header>

      {/* Category Tab Nav — sticky */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {toolCategories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gray-50 border border-gray-200 text-gray-700 hover:bg-primary/5 hover:border-primary hover:text-primary transition whitespace-nowrap"
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
              className="scroll-mt-24 text-2xl font-bold flex items-center gap-2 mb-6"
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
                  className="group flex flex-col gap-3 bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
                >
                  {/* Header row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-2xl leading-none">{tool.icon}</span>
                    <span className="font-bold text-gray-900">
                      {tool.name}
                    </span>
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-full font-semibold ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                    <ExternalLink
                      size={14}
                      className="ml-auto text-gray-300 group-hover:text-primary transition flex-shrink-0"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tool.desc}
                  </p>

                  {/* Free tier box */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                    <p className="text-xs font-semibold text-emerald-700 mb-1">
                      무료 티어
                    </p>
                    <p className="text-sm text-emerald-900">{tool.free}</p>
                  </div>

                  {/* Paid info */}
                  {tool.paid && (
                    <p className="text-xs text-gray-400">
                      유료: {tool.paid}
                    </p>
                  )}

                  {/* Limits */}
                  {tool.limits.length > 0 && (
                    <ul className="space-y-1">
                      {tool.limits.map((limit, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-500 flex items-start gap-1.5"
                        >
                          <span className="text-gray-300 mt-0.5 flex-shrink-0">
                            &bull;
                          </span>
                          {limit}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Verdict */}
                  <p className="text-sm font-medium text-gray-800 mt-auto pt-1 border-t border-gray-100">
                    {tool.verdict}
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

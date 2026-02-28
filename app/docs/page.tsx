import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { docSections, DocTag } from "@/lib/docs";

function TagBadge({ tag }: { tag?: DocTag }) {
  if (!tag) return null;
  const styles: Record<DocTag, string> = {
    NEW: "bg-green-100 text-green-700 border border-green-200",
    IMPROVED: "bg-blue-100 text-blue-700 border border-blue-200",
    EXPERIMENTAL: "bg-amber-100 text-amber-700 border border-amber-200",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${styles[tag]}`}>
      {tag}
    </span>
  );
}

export default function DocsPage() {
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
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold">Claude Code 기능 가이드</h1>
          </div>
          <p className="text-gray-500">
            워크샵 참가자를 위한 Claude Code 주요 기능 설명서
          </p>
        </div>
      </header>

      {/* Grid */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-4">
          {docSections.map((section, i) => (
            <Link
              key={section.slug}
              href={`/docs/${section.slug}`}
              className="group flex flex-col gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-primary hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-gray-400 font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <TagBadge tag={section.tag} />
                    </div>
                    <h2 className="font-bold text-gray-900 group-hover:text-primary transition">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className="text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition mt-1 flex-shrink-0"
                />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {section.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

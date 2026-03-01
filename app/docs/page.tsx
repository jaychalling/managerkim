import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { docSections, DocTag } from "@/lib/docs";
import SectionBadge from "@/components/ui/SectionBadge";
import Footer from "@/components/ui/Footer";

function TagBadge({ tag }: { tag?: DocTag }) {
  if (!tag) return null;
  const styles: Record<DocTag, string> = {
    NEW: "bg-accent-light text-accent border border-accent/20",
    IMPROVED: "bg-subtle text-heading border border-border-default",
    EXPERIMENTAL: "bg-subtle text-body border border-border-default",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-md font-semibold ${styles[tag]}`}>
      {tag}
    </span>
  );
}

export default function DocsPage() {
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
          <SectionBadge>기능 가이드</SectionBadge>
          <h1 className="text-3xl font-extrabold text-heading tracking-heading mt-3 mb-2">
            Claude Code 기능 가이드
          </h1>
          <p className="text-body">
            Claude Code 주요 기능 설명서
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
              className="group flex flex-col gap-3 bg-elevated border border-border-subtle rounded-card p-5 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-subtle rounded-lg flex items-center justify-center text-2xl">
                    {section.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-caption font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <TagBadge tag={section.tag} />
                    </div>
                    <h2 className="font-bold text-heading group-hover:text-accent transition">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className="text-border-default group-hover:text-heading group-hover:translate-x-0.5 transition mt-1 flex-shrink-0"
                />
              </div>
              <p className="text-sm text-caption leading-relaxed">
                {section.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

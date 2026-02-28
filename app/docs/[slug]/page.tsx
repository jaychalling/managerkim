import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { getDocSection, docSections, DocTag } from "@/lib/docs";

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

export function generateStaticParams() {
  return docSections.map((s) => ({ slug: s.slug }));
}

export default function DocDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const section = getDocSection(params.slug);
  if (!section) return notFound();

  const currentIndex = docSections.findIndex((s) => s.slug === params.slug);
  const prev = currentIndex > 0 ? docSections[currentIndex - 1] : null;
  const next =
    currentIndex < docSections.length - 1
      ? docSections[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition"
          >
            <ChevronLeft size={18} />
            <span className="text-sm">목록으로</span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-primary transition">
            <Home size={18} />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{section.icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TagBadge tag={section.tag} />
            </div>
            <h1 className="text-3xl font-extrabold">{section.title}</h1>
          </div>
        </div>
        <p className="text-gray-500 mt-3 mb-10 text-lg leading-relaxed">
          {section.summary}
        </p>

        {/* Content Blocks */}
        <div className="space-y-6">
          {section.content.map((block, i) => {
            if (block.type === "desc") {
              return (
                <p key={i} className="text-gray-600 text-lg leading-relaxed">
                  {block.text}
                </p>
              );
            }
            if (block.type === "card") {
              return (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5"
                >
                  {block.title && (
                    <h3 className="font-bold text-gray-900 mb-3">
                      {block.title}
                    </h3>
                  )}
                  <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            }
            if (block.type === "tip") {
              return (
                <div
                  key={i}
                  className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3"
                >
                  <span className="text-xl">💡</span>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            }
            if (block.type === "example") {
              return (
                <div
                  key={i}
                  className="border-l-4 border-primary bg-primary/5 rounded-r-2xl p-5"
                >
                  {block.label && (
                    <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                      {block.label}
                    </p>
                  )}
                  <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                    {block.text}
                  </p>
                </div>
              );
            }
            if (block.type === "code") {
              return (
                <div
                  key={i}
                  className="bg-gray-900 rounded-2xl overflow-hidden"
                >
                  {block.title && (
                    <div className="px-5 py-2 border-b border-gray-700">
                      <span className="text-xs text-gray-400 font-medium">{block.title}</span>
                    </div>
                  )}
                  <pre className="p-5 overflow-x-auto text-sm">
                    <code className="text-green-400">{block.text}</code>
                  </pre>
                </div>
              );
            }
            if (block.type === "list") {
              return (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5"
                >
                  {block.title && (
                    <h3 className="font-bold text-gray-900 mb-3">{block.title}</h3>
                  )}
                  <ul className="space-y-2">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-16 flex gap-3">
          {prev ? (
            <Link
              href={`/docs/${prev.slug}`}
              className="flex-1 flex items-center gap-2 border border-gray-200 rounded-xl p-4 hover:border-primary hover:bg-gray-50 transition group"
            >
              <ChevronLeft
                size={18}
                className="text-gray-400 group-hover:text-primary flex-shrink-0"
              />
              <div>
                <p className="text-xs text-gray-400">이전</p>
                <p className="font-medium text-gray-700 group-hover:text-primary text-sm">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/docs/${next.slug}`}
              className="flex-1 flex items-center justify-end gap-2 border border-gray-200 rounded-xl p-4 hover:border-primary hover:bg-gray-50 transition group text-right"
            >
              <div>
                <p className="text-xs text-gray-400">다음</p>
                <p className="font-medium text-gray-700 group-hover:text-primary text-sm">
                  {next.title}
                </p>
              </div>
              <ChevronRight
                size={18}
                className="text-gray-400 group-hover:text-primary flex-shrink-0"
              />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </main>
  );
}

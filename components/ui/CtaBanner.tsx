import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({
  title,
  description,
  buttonText = "지금 시작하기",
  href = "/learn/basics/1",
}: {
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-heading tracking-heading mb-4">
          {title}
        </h2>
        <p className="text-caption text-lg mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-accent-dark transition"
          >
            {buttonText}
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
  );
}

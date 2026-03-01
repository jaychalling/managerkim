import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NumberedCard({
  number,
  title,
  description,
  href,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <span className="text-5xl font-extrabold text-muted tracking-heading">
          {number}
        </span>
        {icon && (
          <div className="w-10 h-10 bg-subtle rounded-lg flex items-center justify-center text-heading">
            {icon}
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-heading tracking-subheading mb-2">
        {title}
      </h3>
      <p className="text-sm text-caption leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
          자세히 보기
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      )}
    </>
  );

  const cls =
    "group bg-elevated rounded-card p-6 hover:shadow-md transition-all";

  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return <div className={cls}>{content}</div>;
}

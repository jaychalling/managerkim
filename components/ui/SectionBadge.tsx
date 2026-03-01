export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs text-caption uppercase tracking-[0.15em] font-medium">
      {children}
    </span>
  );
}

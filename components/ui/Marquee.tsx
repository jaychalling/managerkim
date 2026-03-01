export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-8 bg-subtle/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-lg font-semibold text-caption/40 select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

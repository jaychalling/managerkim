"use client";

import { useEffect, useRef } from "react";

export default function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p ref={ref} className={`animated-text ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block opacity-0 translate-y-2 transition-all duration-500"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
      <style jsx>{`
        .animated-text.is-visible span {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </p>
  );
}

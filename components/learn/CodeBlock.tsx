"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CodeBlock({
  children,
  title,
  copyText,
}: {
  children: string;
  title?: string;
  copyText?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText || children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 rounded-xl overflow-hidden bg-primary border border-primary/80">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
          <span className="text-xs font-medium text-primary-light">{title}</span>
        </div>
      )}
      <div className="relative group">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="text-green-400">{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-primary-light hover:text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
          aria-label="복사"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
}

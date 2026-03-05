"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function OsTabs({
  windows,
  mac,
  title,
}: {
  windows: string;
  mac: string;
  title?: string;
}) {
  const [os, setOs] = useState<"windows" | "mac">("windows");

  return (
    <div className="my-5">
      {title && (
        <p className="text-sm font-medium text-caption mb-2">{title}</p>
      )}
      <div className="flex gap-1 mb-0">
        <button
          onClick={() => setOs("windows")}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition cursor-pointer ${
            os === "windows"
              ? "bg-primary text-white"
              : "bg-subtle text-caption hover:bg-muted"
          }`}
        >
          Windows
        </button>
        <button
          onClick={() => setOs("mac")}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition cursor-pointer ${
            os === "mac"
              ? "bg-primary text-white"
              : "bg-subtle text-caption hover:bg-muted"
          }`}
        >
          Mac
        </button>
      </div>
      <div className="-mt-0">
        <CodeBlock>{os === "windows" ? windows : mac}</CodeBlock>
      </div>
    </div>
  );
}

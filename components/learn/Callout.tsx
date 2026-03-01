"use client";

import { Info, Lightbulb, AlertTriangle, Terminal } from "lucide-react";

type CalloutType = "tip" | "info" | "warning" | "terminal";

const config: Record<
  CalloutType,
  { icon: typeof Info; bg: string; border: string; iconColor: string }
> = {
  tip: {
    icon: Lightbulb,
    bg: "bg-primary-lighter",
    border: "border-primary-light",
    iconColor: "text-primary",
  },
  info: {
    icon: Info,
    bg: "bg-primary-lighter",
    border: "border-primary-light",
    iconColor: "text-primary-light",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-500",
    iconColor: "text-amber-600",
  },
  terminal: {
    icon: Terminal,
    bg: "bg-subtle",
    border: "border-border-default",
    iconColor: "text-caption",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  const c = config[type];
  const Icon = c.icon;

  return (
    <div
      className={`${c.bg} border-l-4 ${c.border} rounded-r-lg p-4 my-6`}
    >
      <div className="flex gap-3">
        <Icon size={20} className={`${c.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="text-sm leading-relaxed text-body">
          {title && (
            <p className="font-semibold text-heading mb-1">{title}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { AlertTriangle, Info, Lightbulb, XCircle } from "lucide-react";
import type { ReactNode } from "react";

type CalloutType = "tip" | "info" | "warn" | "danger";

const styles: Record<
  CalloutType,
  { border: string; bg: string; icon: typeof Info; iconClass: string }
> = {
  tip: {
    border: "border-l-[var(--accent-gold)]",
    bg: "bg-[rgba(232,184,75,0.06)]",
    icon: Lightbulb,
    iconClass: "text-[var(--accent-gold)]",
  },
  info: {
    border: "border-l-[var(--accent-info)]",
    bg: "bg-[rgba(56,189,248,0.06)]",
    icon: Info,
    iconClass: "text-[var(--accent-info)]",
  },
  warn: {
    border: "border-l-[var(--accent-warn)]",
    bg: "bg-[rgba(251,191,36,0.08)]",
    icon: AlertTriangle,
    iconClass: "text-[var(--accent-warn)]",
  },
  danger: {
    border: "border-l-[var(--accent-danger)]",
    bg: "bg-[rgba(248,113,113,0.08)]",
    icon: XCircle,
    iconClass: "text-[var(--accent-danger)]",
  },
};

export function Callout({
  type = "tip",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[type];
  const Icon = s.icon;

  return (
    <aside
      className={cn(
        "my-6 rounded-r-[var(--radius-md)] border-l-4 px-4 py-3",
        s.border,
        s.bg,
      )}
    >
      <div className="flex gap-2">
        <Icon className={cn("mt-0.5 size-4 shrink-0", s.iconClass)} />
        <div>
          {title ? (
            <p className="mb-1 font-medium text-[var(--text-primary)]">
              {title}
            </p>
          ) : null}
          <div className="text-sm text-[var(--text-secondary)] [&_p]:my-1">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}

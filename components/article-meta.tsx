import { levelLabels, type DocLevel } from "@/lib/site";
import { Clock, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArticleMeta({
  level,
  duration,
  official,
}: {
  level: DocLevel;
  duration: number;
  official: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-[var(--border-subtle)] pb-6">
      <span
        className={cn(
          "rounded-full px-2.5 py-0.5 text-xs font-medium",
          level === "beginner" && "bg-[rgba(74,222,128,0.12)] text-[var(--accent-success)]",
          level === "intermediate" &&
            "bg-[rgba(232,184,75,0.12)] text-[var(--accent-gold)]",
          level === "advanced" &&
            "bg-[rgba(248,113,113,0.12)] text-[var(--accent-danger)]",
        )}
      >
        {levelLabels[level]}
      </span>
      <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
        <Clock className="size-3.5" />
        约 {duration} 分钟
      </span>
      <a
        href={official}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto flex items-center gap-1 text-sm text-[var(--accent-gold)] hover:underline"
      >
        官方文档
        <ExternalLink className="size-3.5" />
      </a>
    </div>
  );
}

import { ExternalLink } from "lucide-react";

export function OfficialDocBanner({ href }: { href: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 rounded-[var(--radius-md)] border border-[rgba(232,184,75,0.25)] bg-[rgba(232,184,75,0.08)] px-4 py-3 text-sm text-[var(--text-secondary)]">
      <span>
        本文内容译自 Nous Research 官方文档，技术细节以英文原文为准。
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium text-[var(--accent-gold)] hover:underline"
      >
        对照官方文档
        <ExternalLink className="size-3.5" />
      </a>
    </div>
  );
}

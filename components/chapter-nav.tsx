import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ChapterNav({
  prev,
  next,
}: {
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}) {
  if (!prev && !next) return null;

  return (
    <nav
      className="mt-12 grid gap-4 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-2"
      aria-label="章节导航"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 transition hover:border-[rgba(232,184,75,0.4)]"
        >
          <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
            <ChevronLeft className="size-3.5" /> 上一章
          </span>
          <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-right transition hover:border-[rgba(232,184,75,0.4)] sm:col-start-2"
        >
          <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
            下一章 <ChevronRight className="size-3.5" />
          </span>
          <span className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

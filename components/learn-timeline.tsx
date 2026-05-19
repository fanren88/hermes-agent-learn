"use client";

import Link from "next/link";
import { learnChapters, levelLabels } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hermes-learn-progress";

export function LearnTimeline() {
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(new Set(JSON.parse(raw) as string[]));
    } catch {
      /* ignore */
    }
  }, []);

  function toggle(slug: string) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }

  return (
    <ol className="relative space-y-0 border-l border-[var(--border-subtle)] pl-8">
      {learnChapters.map((ch, i) => {
        const completed = done.has(ch.slug);
        return (
          <li key={ch.slug} className="relative pb-10 last:pb-0">
            <span
              className={cn(
                "absolute -left-[2.125rem] top-1 flex size-4 items-center justify-center rounded-full border-2 bg-[var(--bg-base)]",
                completed
                  ? "border-[var(--accent-gold)] bg-[var(--accent-gold)]"
                  : "border-[var(--text-muted)]",
              )}
              aria-hidden
            />
            <article className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition hover:border-[rgba(232,184,75,0.35)]">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  第 {i + 1} 章
                </span>
                <span className="rounded-full bg-[rgba(232,184,75,0.12)] px-2 py-0.5 text-[10px] text-[var(--accent-gold)]">
                  {levelLabels[ch.level]}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  约 {ch.duration} 分钟
                </span>
              </div>
              <h2 className="font-display text-xl font-medium">
                <Link
                  href={`/learn/${ch.slug}`}
                  className="text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
                >
                  {ch.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {ch.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={`/learn/${ch.slug}`}
                  className="text-sm font-medium text-[var(--accent-gold)] hover:underline"
                >
                  阅读教程 →
                </Link>
                <label className="flex cursor-pointer items-center gap-2 text-xs text-[var(--text-muted)]">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => toggle(ch.slug)}
                    className="rounded border-[var(--border-subtle)]"
                  />
                  标记完成
                </label>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

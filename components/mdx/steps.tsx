import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="my-8 space-y-6 border-l border-[var(--border-subtle)] pl-0 [counter-reset:step]">
      {children}
    </ol>
  );
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="relative ml-8 list-none [counter-increment:step]">
      <span
        className="absolute -left-8 flex size-7 items-center justify-center rounded-full bg-[var(--accent-gold)] text-xs font-semibold text-[#0a0a0a] before:content-[counter(step)]"
        aria-hidden
      />
      <h3 className="mb-2 font-display text-lg font-medium text-[var(--text-primary)]">
        {title}
      </h3>
      <div
        className={cn(
          "text-sm text-[var(--text-secondary)]",
          "[&_p]:my-2 [&_pre]:my-3",
        )}
      >
        {children}
      </div>
    </li>
  );
}

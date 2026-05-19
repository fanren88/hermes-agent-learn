"use client";

import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TerminalBlock({
  title = "终端",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const text =
    typeof children === "string"
      ? children
      : extractText(children);

  async function copy() {
    await navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-2">
        <span className="font-mono text-xs text-[var(--text-muted)]">
          {title}
        </span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1 rounded-[var(--radius-sm)] px-2 py-1 text-xs text-[var(--text-secondary)] transition hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--accent-gold)]"
          aria-label="复制命令"
        >
          {copied ? (
            <>
              <Check className="size-3.5" /> 已复制
            </>
          ) : (
            <>
              <Copy className="size-3.5" /> 复制
            </>
          )}
        </button>
      </div>
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono text-sm leading-relaxed text-[var(--text-primary)]",
          "[&_code]:bg-transparent [&_code]:p-0",
        )}
      >
        {children}
      </pre>
    </div>
  );
}

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = node.props as { children?: ReactNode };
    return extractText(props.children);
  }
  return "";
}

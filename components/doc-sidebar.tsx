"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Root } from "fumadocs-core/page-tree";
import { cn } from "@/lib/utils";

function TreeNode({ item, base }: { item: Root["children"][number]; base: string }) {
  const pathname = usePathname();

  if (item.type === "folder") {
    return (
      <div className="mt-4">
        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          {item.name}
        </p>
        <ul className="space-y-0.5">
          {item.children.map((child, i) => (
            <TreeNode
              key={"$id" in child && child.$id ? String(child.$id) : `node-${i}`}
              item={child}
              base={base}
            />
          ))}
        </ul>
      </div>
    );
  }

  if (item.type !== "page" || !item.url) return null;

  const active = pathname === item.url;
  return (
    <li>
      <Link
        href={item.url}
        className={cn(
          "block rounded-[var(--radius-sm)] px-2 py-1.5 text-sm transition",
          active
            ? "bg-[rgba(232,184,75,0.12)] text-[var(--accent-gold)]"
            : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--text-primary)]",
        )}
      >
        {item.name}
      </Link>
    </li>
  );
}

export function DocSidebar({ tree, title }: { tree: Root; title: string }) {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-[var(--border-subtle)] bg-[var(--bg-elevated)] lg:block">
      <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
        <p className="mb-4 px-2 font-display text-sm font-medium text-[var(--accent-gold)]">
          {title}
        </p>
        <ul>
          {tree.children.map((item, i) => (
            <TreeNode
              key={"$id" in item && item.$id ? String(item.$id) : `root-${i}`}
              item={item}
              base=""
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const nav = [
  { href: "/learn", label: "学习路径" },
  { href: "/roadmap", label: "学习路线" },
  { href: "/scenarios", label: "场景教程" },
  { href: "/labs", label: "实战工坊" },
  { href: "/reading", label: "延伸阅读" },
  { href: "/resources", label: "资源" },
  { href: "/cheatsheet", label: "命令速查" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-[var(--border-subtle)] bg-[rgba(8,9,10,0.85)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)]"
        >
          Hermes <span className="text-[var(--accent-gold)]">中文指南</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition hover:text-[var(--accent-gold)]",
                pathname.startsWith(item.href)
                  ? "text-[var(--accent-gold)]"
                  : "text-[var(--text-secondary)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-[var(--radius-sm)] p-2 text-[var(--text-secondary)] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="打开菜单"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

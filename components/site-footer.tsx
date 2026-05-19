import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm text-[var(--text-muted)]">
          本站为社区中文学习指南，<strong>非</strong> Nous Research 官方站点。内容基于{" "}
          <a
            href={siteConfig.github}
            className="text-[var(--accent-gold)] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT 许可
          </a>{" "}
          下的官方文档学习性改写。
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link
            href={siteConfig.officialDocs}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            target="_blank"
          >
            官方英文文档
          </Link>
          <Link
            href={siteConfig.nous}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            target="_blank"
          >
            Nous Research
          </Link>
          <Link href="/roadmap" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            学习路线
          </Link>
          <Link href="/glossary" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            术语表
          </Link>
          <Link href="/faq" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            常见问题
          </Link>
        </div>
        <p className="mt-6 text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Hermes Agent 中文学习指南
        </p>
      </div>
    </footer>
  );
}

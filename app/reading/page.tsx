import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";
import {
  curatedArticles,
  languageLabels,
} from "@/lib/curated-articles";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "延伸阅读",
  description: "社区精选的 Hermes Agent 深度文章与教程（外链）",
};

export default function ReadingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">延伸阅读</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        站主筛选的第三方深度文章。均为外链原文，技术细节仍以{" "}
        <a
          href={siteConfig.officialDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent-gold)] hover:underline"
        >
          Nous 官方文档
        </a>{" "}
        为准。
      </p>

      <div className="mt-6 rounded-[var(--radius-md)] border border-[rgba(232,184,75,0.2)] bg-[rgba(232,184,75,0.06)] px-4 py-3 text-sm text-[var(--text-secondary)]">
        <p className="flex items-start gap-2">
          <Sparkles className="mt-0.5 size-4 shrink-0 text-[var(--accent-gold)]" />
          <span>
            收录标准：与 Hermes 强相关、有完整论述、且能补充本站教程未展开的角度。数量会刻意控制，避免变成链接收藏夹。
          </span>
        </p>
      </div>

      <ul className="mt-10 space-y-6">
        {curatedArticles.map((article) => (
          <li
            key={article.id}
            className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-medium text-[var(--text-primary)]">
                  {article.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {article.authorUrl ? (
                    <a
                      href={article.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent-gold)]"
                    >
                      {article.author}
                    </a>
                  ) : (
                    article.author
                  )}
                  {" · "}
                  {languageLabels[article.language]} · {article.source}
                </p>
              </div>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 rounded-[var(--radius-sm)] border border-[rgba(232,184,75,0.35)] px-3 py-1.5 text-sm font-medium text-[var(--accent-gold)] transition hover:bg-[rgba(232,184,75,0.1)]"
              >
                阅读原文
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            <p className="mt-4 text-[var(--text-secondary)]">{article.summary}</p>

            <p className="mt-3 text-sm text-[var(--text-muted)]">
              <span className="text-[var(--text-secondary)]">适合：</span>
              {article.audience}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {article.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-[rgba(255,255,255,0.06)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
                >
                  {topic}
                </span>
              ))}
            </div>

            {article.relatedPaths.length > 0 ? (
              <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                  建议对照本站章节
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {article.relatedPaths.map((path) => (
                    <li key={path.href}>
                      <Link
                        href={path.href}
                        className="text-sm text-[var(--accent-gold)] hover:underline"
                      >
                        {path.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-[var(--text-muted)]">
        想推荐文章？可在{" "}
        <a
          href={`${siteConfig.github}/issues`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent-gold)] hover:underline"
        >
          GitHub Issues
        </a>{" "}
        留言，说明链接与推荐理由。
      </p>
    </div>
  );
}

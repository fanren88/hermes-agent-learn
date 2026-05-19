import { ArticleMeta } from "@/components/article-meta";
import { ChapterNav } from "@/components/chapter-nav";
import { OfficialDocBanner } from "@/components/official-doc-banner";
import type { DocLevel } from "@/lib/site";
import type { ReactNode } from "react";

export function DocPageShell({
  title,
  description,
  level,
  duration,
  official,
  children,
  prev,
  next,
}: {
  title: string;
  description?: string;
  level: DocLevel;
  duration: number;
  official: string;
  children: ReactNode;
  prev?: { href: string; title: string };
  next?: { href: string; title: string };
}) {
  return (
    <article className="prose-hermes mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 text-lg text-[var(--text-secondary)]">{description}</p>
        ) : null}
      </header>
      <ArticleMeta level={level} duration={duration} official={official} />
      <OfficialDocBanner href={official} />
      {children}
      <ChapterNav prev={prev} next={next} />
    </article>
  );
}

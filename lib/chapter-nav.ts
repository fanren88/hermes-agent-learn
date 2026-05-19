export function getChapterNav<T extends { slug: string; title: string }>(
  chapters: readonly T[],
  slug: string | undefined,
  basePath: string,
) {
  const idx = chapters.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: undefined, next: undefined };
  const prev = idx > 0 ? chapters[idx - 1] : undefined;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : undefined;
  return {
    prev: prev ? { href: `${basePath}/${prev.slug}`, title: prev.title } : undefined,
    next: next ? { href: `${basePath}/${next.slug}`, title: next.title } : undefined,
  };
}

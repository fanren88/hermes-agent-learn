import { learnSource } from "@/lib/source";
import { learnChapters } from "@/lib/site";
import { DocPageShell } from "@/components/doc-page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMDXComponents } from "@/mdx-components";
import type { ComponentType } from "react";

export default async function LearnDocPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = learnSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body as ComponentType<{ components?: Record<string, unknown> }>;
  const meta = learnChapters.find((c) => c.slug === page.slugs.at(-1));
  const idx = learnChapters.findIndex((c) => c.slug === page.slugs.at(-1));
  const prev = idx > 0 ? learnChapters[idx - 1] : undefined;
  const next =
    idx >= 0 && idx < learnChapters.length - 1 ? learnChapters[idx + 1] : undefined;

  return (
    <DocPageShell
      title={page.data.title}
      description={page.data.description}
      level={meta?.level ?? "beginner"}
      duration={meta?.duration ?? 15}
      official={meta?.official ?? "https://hermes-agent.nousresearch.com/docs/"}
      prev={prev ? { href: `/learn/${prev.slug}`, title: prev.title } : undefined}
      next={next ? { href: `/learn/${next.slug}`, title: next.title } : undefined}
    >
      <MDX components={getMDXComponents()} />
    </DocPageShell>
  );
}

export async function generateStaticParams() {
  return learnSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = learnSource.getPage(params.slug);
  if (!page) return {};
  return {
    title: page.data.title,
    description: page.data.description,
  };
}

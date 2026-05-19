import { scenariosSource } from "@/lib/source";
import { scenarioChapters } from "@/lib/site";
import { getChapterNav } from "@/lib/chapter-nav";
import { DocPageShell } from "@/components/doc-page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMDXComponents } from "@/mdx-components";
import type { ComponentType } from "react";

export default async function ScenarioDocPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = scenariosSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body as ComponentType<{ components?: Record<string, unknown> }>;
  const slug = page.slugs.at(-1);
  const meta = scenarioChapters.find((c) => c.slug === slug);
  const { prev, next } = getChapterNav(scenarioChapters, slug, "/scenarios");

  return (
    <DocPageShell
      title={page.data.title}
      description={page.data.description}
      level={meta?.level ?? "intermediate"}
      duration={meta?.duration ?? 20}
      official={meta?.official ?? "https://hermes-agent.nousresearch.com/docs/"}
      prev={prev}
      next={next}
    >
      <MDX components={getMDXComponents()} />
    </DocPageShell>
  );
}

export async function generateStaticParams() {
  return scenariosSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = scenariosSource.getPage(params.slug);
  if (!page) return {};
  return { title: page.data.title, description: page.data.description };
}

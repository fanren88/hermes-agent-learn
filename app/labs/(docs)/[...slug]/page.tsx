import { labsSource } from "@/lib/source";
import { labChapters } from "@/lib/site";
import { getChapterNav } from "@/lib/chapter-nav";
import { DocPageShell } from "@/components/doc-page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMDXComponents } from "@/mdx-components";
import type { ComponentType } from "react";

export default async function LabDocPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const page = labsSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body as ComponentType<{ components?: Record<string, unknown> }>;
  const slug = page.slugs.at(-1);
  const meta = labChapters.find((c) => c.slug === slug);
  const { prev, next } = getChapterNav(labChapters, slug, "/labs");

  return (
    <DocPageShell
      title={page.data.title}
      description={page.data.description}
      level={meta?.level ?? "intermediate"}
      duration={meta?.duration ?? 40}
      official={meta?.official ?? "https://hermes-agent.nousresearch.com/docs/"}
      prev={prev}
      next={next}
    >
      <MDX components={getMDXComponents()} />
    </DocPageShell>
  );
}

export async function generateStaticParams() {
  return labsSource.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = labsSource.getPage(params.slug);
  if (!page) return {};
  return { title: page.data.title, description: page.data.description };
}

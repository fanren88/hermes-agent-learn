import { DocSidebar } from "@/components/doc-sidebar";
import type { SectionSource } from "@/lib/source";
import type { ReactNode } from "react";

export function SectionDocsLayout({
  source,
  title,
  children,
}: {
  source: SectionSource;
  title: string;
  children: ReactNode;
}) {
  const tree = source.pageTree;

  return (
    <div className="mx-auto flex w-full max-w-6xl">
      <DocSidebar tree={tree} title={title} />
      <div className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-10">{children}</div>
    </div>
  );
}

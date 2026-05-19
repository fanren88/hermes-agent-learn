import { SectionDocsLayout } from "@/components/docs-layout";
import { learnSource } from "@/lib/source";

export default function LearnDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionDocsLayout source={learnSource} title="学习路径">
      {children}
    </SectionDocsLayout>
  );
}

import { SectionDocsLayout } from "@/components/docs-layout";
import { labsSource } from "@/lib/source";

export default function LabsDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionDocsLayout source={labsSource} title="实战工坊">
      {children}
    </SectionDocsLayout>
  );
}

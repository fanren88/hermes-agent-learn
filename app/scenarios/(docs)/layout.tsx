import { SectionDocsLayout } from "@/components/docs-layout";
import { scenariosSource } from "@/lib/source";

export default function ScenariosDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SectionDocsLayout source={scenariosSource} title="场景教程">
      {children}
    </SectionDocsLayout>
  );
}

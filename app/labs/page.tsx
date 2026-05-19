import Link from "next/link";
import { audienceLabels, labChapters, levelLabels } from "@/lib/site";

export const metadata = {
  title: "实战工坊",
  description: "跟着完整案例搭建 Hermes 自动化项目",
};

export default function LabsHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">实战工坊</h1>
      <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
        每个项目都有明确成果：做完你能得到可运行的自动化，而不只是概念介绍。
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labChapters.map((lab) => (
          <Link
            key={lab.slug}
            href={`/labs/${lab.slug}`}
            className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition hover:border-[rgba(232,184,75,0.4)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--accent-gold)]">
                {levelLabels[lab.level]}
              </span>
              <span className="rounded-full bg-[rgba(255,255,255,0.06)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
                {audienceLabels[lab.audience]}
              </span>
            </div>
            <h2 className="mt-2 font-display text-lg font-medium">{lab.title}</h2>
            <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)]">
              {lab.description}
            </p>
            <p className="mt-4 text-xs font-medium text-[var(--accent-success)]">
              成果：{lab.outcome}
            </p>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              约 {lab.duration} 分钟
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

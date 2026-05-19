import { LearnTimeline } from "@/components/learn-timeline";
import Link from "next/link";

export const metadata = {
  title: "学习路径",
  description: "从零开始掌握 Hermes Agent 的安装、配置与 CLI 使用",
};

export default function LearnHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">
        Learning Path
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
        入门学习路径
      </h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        按顺序完成以下四章，即可在本地跑通 Hermes 并完成基础配置。预计约 1 小时。
      </p>
      <Link
        href="/learn/install"
        className="mt-6 inline-flex rounded-[var(--radius-md)] bg-[var(--accent-gold)] px-4 py-2 text-sm font-semibold text-[#0a0a0a]"
      >
        从安装开始
      </Link>
      <div className="mt-12">
        <LearnTimeline />
      </div>
    </div>
  );
}

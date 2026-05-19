import { Hero } from "@/components/hero";
import { PathCard } from "@/components/path-card";
import { FeatureStrip } from "@/components/feature-strip";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
          选择你的学习路径
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
          按目标拆分：先跑通环境，再接入消息平台，最后用实战项目巩固。
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PathCard
            href="/learn"
            title="入门路径"
            description="安装、第一次对话、配置模型与 CLI 基础"
            count="4 篇教程"
            duration="约 1 小时"
            variant="learn"
            index={0}
          />
          <PathCard
            href="/scenarios"
            title="场景教程"
            description="工具、技能、记忆、安全、语音、MCP 与消息网关"
            count="12 篇教程"
            duration="约 4 小时"
            variant="scenarios"
            index={1}
          />
          <PathCard
            href="/labs"
            title="实战工坊"
            description="每日简报、团队助手、PR 审查等完整案例"
            count="6 个项目"
            duration="约 4+ 小时"
            variant="labs"
            index={2}
          />
        </div>
        <p className="mt-12 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-muted)]">
          需要完整命令参考与环境变量？请查阅{" "}
          <a
            href={siteConfig.officialDocs}
            className="text-[var(--accent-gold)] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hermes 官方英文文档
          </a>
          。
        </p>
      </section>
    </>
  );
}

import Link from "next/link";

const phases = [
  {
    week: "第 1 周",
    title: "跑通环境",
    duration: "约 1 小时",
    chapters: [
      { href: "/learn/install", title: "安装与环境" },
      { href: "/learn/quickstart", title: "第一次对话" },
      { href: "/learn/config", title: "配置与选模型" },
      { href: "/learn/cli-basics", title: "CLI 基础用法" },
    ],
    lab: null,
  },
  {
    week: "第 2 周",
    title: "记忆与性格",
    duration: "约 2 小时",
    chapters: [
      { href: "/scenarios/memory-skills", title: "记忆与技能入门" },
      { href: "/scenarios/context-soul", title: "上下文与 SOUL.md" },
      { href: "/scenarios/security-basics", title: "个人使用安全设置" },
    ],
    lab: { href: "/labs/personal-memory-assistant", title: "个人知识助手" },
  },
  {
    week: "第 3 周",
    title: "自动化与扩展",
    duration: "约 3 小时",
    chapters: [
      { href: "/scenarios/cron", title: "定时自动化" },
      { href: "/scenarios/skills-authoring", title: "编写自己的技能" },
      { href: "/scenarios/tools", title: "内置工具怎么用" },
      { href: "/scenarios/mcp", title: "MCP 扩展" },
      { href: "/scenarios/voice-mode", title: "语音模式入门" },
    ],
    lab: { href: "/labs/custom-skill-workflow", title: "定制技能工作流" },
  },
];

export const metadata = {
  title: "学习路线图",
  description: "面向个人用户的 Hermes Agent 三周学习路径",
};

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">
        Roadmap
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">个人学习路线图</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        按周推进，每周有推荐阅读与可选实战 Lab。仅 CLI 使用可跳过网关相关章节。
      </p>
      <div className="mt-10 space-y-10">
        {phases.map((phase) => (
          <section
            key={phase.week}
            className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-display text-xl font-medium">
                {phase.week} · {phase.title}
              </h2>
              <span className="text-xs text-[var(--text-muted)]">{phase.duration}</span>
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
              {phase.chapters.map((ch) => (
                <li key={ch.href}>
                  <Link href={ch.href} className="text-[var(--accent-gold)] hover:underline">
                    {ch.title}
                  </Link>
                </li>
              ))}
            </ol>
            {phase.lab ? (
              <p className="mt-4 text-sm">
                <span className="text-[var(--text-muted)]">推荐 Lab：</span>
                <Link
                  href={phase.lab.href}
                  className="text-[var(--accent-gold)] hover:underline"
                >
                  {phase.lab.title}
                </Link>
              </p>
            ) : null}
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-[var(--text-muted)]">
        可选进阶：<Link href="/labs/voice-daily-checkin" className="text-[var(--accent-gold)] hover:underline">语音 + 定时自检</Link>
        、<Link href="/glossary" className="text-[var(--accent-gold)] hover:underline">术语表</Link>
        、<Link href="/faq" className="text-[var(--accent-gold)] hover:underline">常见问题</Link>。
      </p>
    </div>
  );
}

import Link from "next/link";

const terms = [
  {
    term: "Memory / 记忆",
    en: "Memory",
    desc: "跨会话保留的事实与偏好，由 Agent 策展写入 MEMORY.md 等。",
    href: "/scenarios/memory-skills",
  },
  {
    term: "Skill / 技能",
    en: "Skill",
    desc: "SKILL.md 描述的「怎么做」流程，匹配任务时按需加载。",
    href: "/scenarios/skills-authoring",
  },
  {
    term: "SOUL.md",
    en: "SOUL",
    desc: "全局性格与原则文件，塑造默认语气与边界。",
    href: "/scenarios/context-soul",
  },
  {
    term: "Context Files / 上下文文件",
    en: "Context Files",
    desc: "项目级 .hermes.md、AGENTS.md 等，每轮对话注入的固定背景。",
    href: "/scenarios/context-soul",
  },
  {
    term: "Gateway / 消息网关",
    en: "Messaging Gateway",
    desc: "连接 Telegram、飞书等 IM 的进程，与 CLI 共享配置与记忆。",
    href: "/scenarios/messaging-overview",
  },
  {
    term: "MCP",
    en: "Model Context Protocol",
    desc: "连接外部工具服务器的开放协议，扩展 Hermes 能力。",
    href: "/scenarios/mcp",
  },
  {
    term: "Tool / 工具",
    en: "Tool",
    desc: "Agent 可调用的能力单元，如读文件、执行命令、搜索。",
    href: "/scenarios/tools",
  },
  {
    term: "Toolset / 工具集",
    en: "Toolset",
    desc: "当前会话启用的工具子集，用于限制权限。",
    href: "/scenarios/tools",
  },
  {
    term: "Subagent / 子代理",
    en: "Subagent",
    desc: "主 Agent 派出的隔离子任务执行体，可并行工作。",
    href: "/scenarios/subagents",
  },
  {
    term: "Cron",
    en: "Cron",
    desc: "内置调度器，按自然语言描述周期执行任务。",
    href: "/scenarios/cron",
  },
  {
    term: "Provider",
    en: "Provider",
    desc: "模型 API 供应方，如 OpenRouter、DeepSeek、通义等。",
    href: "/learn/config",
  },
];

export const metadata = {
  title: "术语表",
  description: "Hermes Agent 核心概念中英文对照与简短解释",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">术语表</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        快速查阅 Hermes 文档中的核心概念。点击链接进入对应教程。
      </p>
      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
              <th className="py-3 pr-4 font-medium">中文</th>
              <th className="py-3 pr-4 font-medium">英文</th>
              <th className="py-3 font-medium">说明</th>
            </tr>
          </thead>
          <tbody>
            {terms.map((row) => (
              <tr
                key={row.term}
                className="border-b border-[var(--border-subtle)] text-[var(--text-secondary)]"
              >
                <td className="py-4 pr-4 align-top">
                  <Link href={row.href} className="text-[var(--accent-gold)] hover:underline">
                    {row.term}
                  </Link>
                </td>
                <td className="py-4 pr-4 align-top font-mono text-xs">{row.en}</td>
                <td className="py-4 align-top">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

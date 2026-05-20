export const siteConfig = {
  name: "Hermes Agent 中文学习指南",
  description:
    "面向中文用户的 Hermes Agent 实战教程：安装、配置、消息网关、自动化与项目案例。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hermes-learn-zh.vercel.app",
  github: "https://github.com/NousResearch/hermes-agent",
  officialDocs: "https://hermes-agent.nousresearch.com/docs/",
} as const;

export type DocLevel = "beginner" | "intermediate" | "advanced";
export type LabAudience = "personal" | "team";

export const learnChapters = [
  {
    slug: "install",
    title: "安装与环境",
    description: "一行命令完成安装，并了解目录布局与前置依赖",
    duration: 10,
    level: "beginner" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/getting-started/installation",
  },
  {
    slug: "quickstart",
    title: "第一次对话",
    description: "选模型、跑通首轮对话，并验证会话可恢复",
    duration: 15,
    level: "beginner" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/getting-started/quickstart",
  },
  {
    slug: "config",
    title: "配置与选模型",
    description: "config.yaml 与 .env 分工，以及国内常用 Provider",
    duration: 20,
    level: "beginner" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/configuration",
  },
  {
    slug: "cli-basics",
    title: "CLI 基础用法",
    description: "命令、斜杠指令、多行输入与中断任务",
    duration: 15,
    level: "beginner" as const,
    official: "https://hermes-agent.nousresearch.com/docs/user-guide/cli",
  },
] as const;

export const scenarioChapters = [
  {
    slug: "messaging-overview",
    title: "消息网关总览",
    description: "从 CLI 到 Telegram、飞书等 20+ 平台的架构",
    duration: 12,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index",
  },
  {
    slug: "feishu",
    title: "接入飞书",
    description: "面向国内团队的飞书机器人配置要点",
    duration: 25,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/index",
  },
  {
    slug: "telegram",
    title: "接入 Telegram",
    description: "创建 Bot、配置 gateway 与权限白名单",
    duration: 20,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram",
  },
  {
    slug: "cron",
    title: "定时自动化",
    description: "用自然语言创建 cron，并投递到任意平台",
    duration: 18,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/cron",
  },
  {
    slug: "memory-skills",
    title: "记忆与技能入门",
    description: "跨会话记忆、技能包与何时该用哪一种",
    duration: 20,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory",
  },
  {
    slug: "tools",
    title: "内置工具怎么用",
    description: "理解 Agent 能做什么，以及如何限制危险工具",
    duration: 18,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/tools",
  },
  {
    slug: "skills-authoring",
    title: "编写自己的技能",
    description: "把重复流程固化成 SKILL.md，让助手越用越顺手",
    duration: 25,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills",
  },
  {
    slug: "context-soul",
    title: "上下文与 SOUL.md",
    description: "项目级上下文与全局性格，让回复更像你的风格",
    duration: 20,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files",
  },
  {
    slug: "security-basics",
    title: "个人使用安全设置",
    description: "命令审批、白名单与 Docker 隔离等个人场景要点",
    duration: 18,
    level: "intermediate" as const,
    official: "https://hermes-agent.nousresearch.com/docs/user-guide/security",
  },
  {
    slug: "subagents",
    title: "子代理与并行任务",
    description: "大任务拆分委托，何时让子代理并行工作",
    duration: 20,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/tools",
  },
  {
    slug: "voice-mode",
    title: "语音模式入门",
    description: "CLI 与 Telegram 下的免打字语音交互",
    duration: 18,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/voice-mode",
  },
  {
    slug: "mcp",
    title: "MCP 扩展",
    description: "连接外部工具服务器并安全过滤工具",
    duration: 22,
    level: "intermediate" as const,
    official:
      "https://hermes-agent.nousresearch.com/docs/guides/use-mcp-with-hermes",
  },
] as const;

export const labChapters = [
  {
    slug: "personal-memory-assistant",
    title: "个人知识助手",
    description: "用记忆与上下文文件，让助手长期了解你的偏好与项目",
    duration: 40,
    level: "intermediate" as const,
    audience: "personal" as const,
    outcome: "助手能稳定记住你的偏好、常用工具与当前项目背景",
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory",
  },
  {
    slug: "custom-skill-workflow",
    title: "定制技能工作流",
    description: "为每周复盘、读书摘要等重复任务编写专属技能",
    duration: 35,
    level: "intermediate" as const,
    audience: "personal" as const,
    outcome: "拥有一个可被 Agent 自动匹配并执行的个人技能",
    official:
      "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills",
  },
  {
    slug: "voice-daily-checkin",
    title: "语音 + 定时自检",
    description: "早晨语音提问 + Cron 推送今日待办摘要",
    duration: 40,
    level: "intermediate" as const,
    audience: "personal" as const,
    outcome: "每天早晨收到待办摘要，并可用语音快速追问",
    official:
      "https://hermes-agent.nousresearch.com/docs/guides/use-voice-mode-with-hermes",
  },
  {
    slug: "daily-briefing",
    title: "每日简报机器人",
    description: "定时研究主题并推送到 Telegram 或 Discord",
    duration: 45,
    level: "intermediate" as const,
    audience: "personal" as const,
    outcome: "每天早上自动收到一份结构化简报",
    official:
      "https://hermes-agent.nousresearch.com/docs/guides/daily-briefing-bot",
  },
  {
    slug: "team-telegram",
    title: "团队 Telegram 助手",
    description: "多人共用的代码与研究助手",
    duration: 40,
    level: "intermediate" as const,
    audience: "team" as const,
    outcome: "团队可在群里向 Hermes 提问并获得工具调用",
    official:
      "https://hermes-agent.nousresearch.com/docs/guides/team-telegram-assistant",
  },
  {
    slug: "pr-review",
    title: "GitHub PR 自动审查",
    description: "监听仓库并对 Pull Request 给出审查意见",
    duration: 50,
    level: "advanced" as const,
    audience: "team" as const,
    outcome: "PR 打开后自动收到 AI 代码审查评论",
    official:
      "https://hermes-agent.nousresearch.com/docs/guides/github-pr-review-agent",
  },
] as const;

export const levelLabels: Record<DocLevel, string> = {
  beginner: "入门",
  intermediate: "进阶",
  advanced: "高级",
};

export const audienceLabels: Record<LabAudience, string> = {
  personal: "个人",
  team: "团队向",
};

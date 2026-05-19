import { CopyButton } from "@/components/copy-button";

const commands = [
  {
    group: "入门",
    items: [
      { cmd: "hermes", desc: "启动对话（经典 CLI）" },
      { cmd: "hermes --tui", desc: "启动现代 TUI 界面" },
      { cmd: "hermes setup", desc: "完整配置向导" },
      { cmd: "hermes model", desc: "选择模型与 Provider" },
      { cmd: "hermes doctor", desc: "诊断环境与配置" },
      { cmd: "hermes update", desc: "更新 Hermes" },
    ],
  },
  {
    group: "斜杠指令（对话内）",
    items: [
      { cmd: "/help", desc: "显示所有斜杠命令" },
      { cmd: "/tools", desc: "列出当前可用工具" },
      { cmd: "/model", desc: "交互切换模型" },
      { cmd: "/skills", desc: "浏览已安装技能" },
      { cmd: "/save", desc: "保存当前对话" },
      { cmd: "/voice on", desc: "开启语音模式" },
    ],
  },
  {
    group: "会话",
    items: [
      { cmd: "hermes --continue", desc: "恢复最近一次会话" },
      { cmd: "hermes sessions list", desc: "列出历史会话" },
    ],
  },
  {
    group: "配置",
    items: [
      { cmd: "hermes config set <key> <value>", desc: "写入 config 或 .env" },
      { cmd: "hermes config check", desc: "校验配置文件" },
      { cmd: "hermes config migrate", desc: "升级后迁移配置项" },
    ],
  },
  {
    group: "记忆与技能",
    items: [
      { cmd: "hermes skills search <关键词>", desc: "搜索社区技能" },
      { cmd: "hermes skills install <path>", desc: "安装技能" },
      { cmd: "hermes tools", desc: "按平台配置工具集" },
    ],
  },
  {
    group: "网关与 Cron",
    items: [
      { cmd: "hermes gateway setup", desc: "配置消息平台" },
      { cmd: "hermes gateway status", desc: "查看网关状态" },
    ],
  },
  {
    group: "排错三连",
    items: [
      { cmd: "hermes doctor", desc: "第一步：环境与依赖" },
      { cmd: "hermes config check", desc: "第二步：配置完整性" },
      { cmd: "hermes gateway status", desc: "第三步：网关（若使用）" },
    ],
  },
];

export const metadata = {
  title: "命令速查",
  description: "Hermes Agent 常用 CLI 命令一览",
};

export default function CheatsheetPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">命令速查</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        常用命令速查。完整参考请查阅官方文档。
      </p>
      <div className="mt-10 space-y-10">
        {commands.map((section) => (
          <section key={section.group}>
            <h2 className="mb-4 font-display text-lg text-[var(--accent-gold)]">
              {section.group}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.cmd}
                  className="flex flex-col gap-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <code className="font-mono text-sm text-[var(--text-primary)]">
                    {item.cmd}
                  </code>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--text-muted)]">{item.desc}</span>
                    <CopyButton text={item.cmd} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-12 text-sm text-[var(--text-muted)]">
        <a
          href="https://hermes-agent.nousresearch.com/docs/reference/cli-commands"
          className="text-[var(--accent-gold)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看官方 CLI 完整参考 →
        </a>
      </p>
    </div>
  );
}

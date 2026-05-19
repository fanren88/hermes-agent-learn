const faqCategories = [
  {
    title: "安装与 PATH",
    items: [
      {
        q: "hermes: command not found",
        a: "安装后执行 source ~/.bashrc 或 source ~/.zshrc 刷新 PATH。若仍无效，确认 ~/.local/bin 在 PATH 中。",
      },
      {
        q: "安装脚本执行失败 / 权限不足",
        a: "不要用 sudo 运行安装脚本。若目录权限异常，检查 ~/.hermes 是否可被当前用户读写。",
      },
      {
        q: "hermes doctor 报 Python 或依赖缺失",
        a: "按 doctor 提示安装缺失依赖，或重新运行官方安装脚本。macOS 建议用 Homebrew 安装 python@3.11+。",
      },
    ],
  },
  {
    title: "模型与 API Key",
    items: [
      {
        q: "API key not set / 无法回复",
        a: "运行 hermes model 配置 Provider，或使用 hermes config set 将 Key 写入 ~/.hermes/.env。",
      },
      {
        q: "国内 Provider 连不上或 401",
        a: "确认用的是中国区 endpoint 与对应环境变量名（如 DASHSCOPE_API_KEY、DEEPSEEK_API_KEY）。详见配置教程。",
      },
      {
        q: "模型上下文不足",
        a: "Hermes 要求至少 64K 上下文。请换用更大上下文的模型，或本地运行时提高 --ctx-size。",
      },
      {
        q: "hermes model 里找不到想要的模型",
        a: "OpenRouter 可路由多模型；直连 Provider 需在 config 中配置对应 endpoint。见官方 Providers 文档。",
      },
    ],
  },
  {
    title: "会话与 CLI",
    items: [
      {
        q: "hermes --continue 找不到会话",
        a: "确认未切换 profile，并运行 hermes sessions list 查看会话是否已保存。",
      },
      {
        q: "斜杠命令 /tools 没有反应",
        a: "确认在对话界面输入（非 shell）。部分命令需先完成 model 配置。",
      },
      {
        q: "Agent 执行太久无法停止",
        a: "直接输入新消息并回车可中断当前任务；Ctrl+C 同样有效。",
      },
    ],
  },
  {
    title: "记忆与技能",
    items: [
      {
        q: "说了「记住这个」但下次对话忘了",
        a: "检查 MEMORY.md / USER.md 是否写入（可在 ~/.hermes 查看）。复杂事实建议明确说「写入长期记忆」。",
      },
      {
        q: "安装了技能但 Agent 从不使用",
        a: "技能描述需与任务关键词匹配。用 hermes skills search 确认已安装，对话中可明确要求「按某某技能执行」。",
      },
      {
        q: "SOUL.md 或 .hermes.md 不生效",
        a: "确认文件在正确目录（全局 SOUL 在 ~/.hermes/，项目级在项目根）。修改后新开一轮对话测试。",
      },
    ],
  },
  {
    title: "网关（可跳过，若只用 CLI）",
    items: [
      {
        q: "网关启动但收不到消息",
        a: "重新运行 hermes gateway setup，检查 bot token、白名单与 hermes gateway status。个人仅 CLI 使用可暂不配置网关。",
      },
      {
        q: "Telegram bot 无响应",
        a: "确认已向 bot 发送过 /start，且你的 user id 在白名单中。token 勿泄露到公开仓库。",
      },
    ],
  },
  {
    title: "MCP 与工具",
    items: [
      {
        q: "MCP 工具列表为空",
        a: "检查 config.yaml 中 mcp_servers 配置，环境变量是否在 .env，修改后重启 hermes 或 gateway。",
      },
      {
        q: "Agent 调用了不该执行的危险命令",
        a: "启用命令审批、将 terminal.backend 设为 docker，并限制 toolset。见安全设置教程。",
      },
      {
        q: "子代理任务卡住不返回",
        a: "主会话发送新消息可中断。复杂任务拆小步，避免一次委托过多并行子代理。",
      },
    ],
  },
];

export const metadata = {
  title: "常见问题",
  description: "Hermes Agent 安装与使用中的高频问题",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">常见问题</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        安装与排错速查，按主题分类。个人用户若只用 CLI，网关相关条目可跳过。
      </p>
      <div className="mt-10 space-y-10">
        {faqCategories.map((cat) => (
          <section key={cat.title}>
            <h2 className="font-display text-lg text-[var(--accent-gold)]">{cat.title}</h2>
            <dl className="mt-4 space-y-4">
              {cat.items.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5"
                >
                  <dt className="font-medium text-[var(--text-primary)]">{item.q}</dt>
                  <dd className="mt-2 text-sm text-[var(--text-secondary)]">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
      <p className="mt-10 text-sm">
        <a
          href="https://hermes-agent.nousresearch.com/docs/reference/faq"
          className="text-[var(--accent-gold)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          官方完整 FAQ →
        </a>
      </p>
    </div>
  );
}

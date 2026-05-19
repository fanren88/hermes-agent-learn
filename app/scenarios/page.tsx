import { ScenarioTimeline } from "@/components/scenario-timeline";
import Link from "next/link";

export const metadata = {
  title: "场景教程",
  description: "消息网关、自动化、记忆技能、工具集与 MCP 等实战场景",
};

export default function ScenariosHubPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">
        Scenarios
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
        场景教程
      </h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        在跑通入门路径后，按场景学习消息网关、自动化、记忆与扩展能力。个人用户可优先学习记忆、技能与工具相关章节。
      </p>
      <Link
        href="/scenarios/messaging-overview"
        className="mt-6 inline-flex rounded-[var(--radius-md)] bg-[var(--accent-gold)] px-4 py-2 text-sm font-semibold text-[#0a0a0a]"
      >
        从消息网关总览开始
      </Link>
      <div className="mt-12">
        <ScenarioTimeline />
      </div>
    </div>
  );
}

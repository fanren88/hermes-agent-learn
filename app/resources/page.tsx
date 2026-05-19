import { ExternalLink, Github, BookOpen, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/site";

const sections = [
  {
    title: "官方资源",
    icon: BookOpen,
    links: [
      {
        label: "Hermes Agent 官方文档（英文）",
        href: siteConfig.officialDocs,
        sub: "hermes-agent.nousresearch.com",
      },
      {
        label: "GitHub 仓库",
        href: siteConfig.github,
        sub: "NousResearch/hermes-agent",
      },
      {
        label: "Nous Research",
        href: siteConfig.nous,
        sub: "nousresearch.com",
      },
    ],
  },
  {
    title: "视频教程",
    icon: Youtube,
    links: [
      {
        label: "Hermes Agent 教程与用例（YouTube 播放列表）",
        href: "https://www.youtube.com/channel/UCqB1bhMwGsW-yefBxYwFCCg",
        sub: "Onchain AI Garage 等社区教程",
      },
    ],
  },
  {
    title: "社区",
    icon: Github,
    links: [
      {
        label: "GitHub Discussions",
        href: "https://github.com/NousResearch/hermes-agent/discussions",
        sub: "提问与功能讨论",
      },
      {
        label: "Skills Hub",
        href: "https://github.com/NousResearch/hermes-agent/discussions/categories/skills-hub",
        sub: "社区技能分享",
      },
    ],
  },
];

export const metadata = {
  title: "资源",
  description: "官方文档、视频教程与社区链接",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">资源角</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        官方文档、视频与社区入口。本站教程无法覆盖的细节，请以下列资源为准。
      </p>
      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg text-[var(--accent-gold)]">
              <section.icon className="size-5" />
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 transition hover:border-[rgba(232,184,75,0.4)]"
                  >
                    <div>
                      <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">
                        {link.label}
                      </p>
                      <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                        {link.sub}
                      </p>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-[var(--text-muted)]" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

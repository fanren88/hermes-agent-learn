export type CuratedArticle = {
  id: string;
  title: string;
  author: string;
  authorUrl?: string;
  language: "en" | "zh";
  href: string;
  source: string;
  summary: string;
  audience: string;
  topics: string[];
  relatedPaths: { href: string; label: string }[];
};

export const curatedArticles: CuratedArticle[] = [
  {
    id: "akshay-hermes-masterclass",
    title: "Hermes Agent Masterclass",
    author: "Akshay Pachaar",
    authorUrl: "https://x.com/akshay_pachaar",
    language: "en",
    href: "https://x.com/i/article/2053698458230702080",
    source: "X 长文",
    summary:
      "从自进化 skills、三层记忆、GEPA 优化到多 Agent 协作，系统讲解如何理解与定制 Hermes Agent。",
    audience: "已跑通入门路径、想深入记忆/技能/多 Agent 的读者",
    topics: ["Skills", "Memory", "GEPA", "Multi-Agent"],
    relatedPaths: [
      { href: "/scenarios/memory-skills", label: "记忆与技能入门" },
      { href: "/scenarios/skills-authoring", label: "编写自己的技能" },
      { href: "/scenarios/subagents", label: "子代理与并行任务" },
      { href: "/scenarios/context-soul", label: "上下文与 SOUL.md" },
    ],
  },
];

export const languageLabels: Record<CuratedArticle["language"], string> = {
  en: "英文",
  zh: "中文",
};

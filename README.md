# Hermes Agent 中文学习指南

面向中文用户的 Hermes Agent **纯学习站**（非官方文档镜像）。基于 [Nous Research 官方文档](https://hermes-agent.nousresearch.com/docs/) 学习性改写。

## 本地开发

```bash
pnpm install
pnpm dev
```

访问 http://localhost:3000

## 构建

```bash
pnpm build
pnpm start
```

## 内容结构

| 目录 | 路由 |
|------|------|
| `content/learn/` | `/learn/*` 入门路径（4 篇） |
| `content/scenarios/` | `/scenarios/*` 场景教程（12 篇） |
| `content/labs/` | `/labs/*` 实战工坊（6 篇） |
| `app/reading/` | `/reading` 延伸阅读（社区精选外链） |
| `app/roadmap/` | `/roadmap` 个人学习路线图 |
| `app/glossary/` | `/glossary` 术语表 |

新增教程：在对应目录添加 `.mdx` 并更新 `meta.json` 的 `pages` 数组。

新增延伸阅读：编辑 `lib/curated-articles.ts` 中的 `curatedArticles` 数组。

## 部署到 Vercel

1. 将仓库推送到 GitHub
2. 在 [Vercel](https://vercel.com) Import 项目
3. Framework Preset: **Next.js**
4. 可选环境变量：`NEXT_PUBLIC_SITE_URL=https://你的域名`

## 技术栈

- Next.js 15 · Fumadocs · Tailwind CSS v4 · MDX

## 免责声明

本站为社区学习资源，**非** Nous Research 官方站点。完整参考请查阅[官方英文文档](https://hermes-agent.nousresearch.com/docs/)。

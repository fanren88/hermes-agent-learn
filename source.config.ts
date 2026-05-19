import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const learn = defineDocs({
  dir: "content/learn",
});

export const scenarios = defineDocs({
  dir: "content/scenarios",
});

export const labs = defineDocs({
  dir: "content/labs",
});

export default defineConfig();

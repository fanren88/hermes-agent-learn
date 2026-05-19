import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/mdx/callout";
import { Steps, Step } from "@/components/mdx/steps";
import { TerminalBlock } from "@/components/mdx/terminal-block";
import { ProviderTable } from "@/components/mdx/provider-table";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2
        className="mt-10 mb-4 font-display text-2xl font-medium text-[var(--text-primary)]"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mt-8 mb-3 font-display text-xl font-medium text-[var(--text-primary)]"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="my-4 text-[var(--text-secondary)]" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-[var(--text-secondary)]" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-[var(--text-secondary)]" {...props}>
        {children}
      </ol>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-[var(--accent-gold)] underline-offset-2 hover:underline"
        {...props}
      >
        {children}
      </a>
    ),
    table: ({ children, ...props }) => (
      <div className="my-6 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
        <table className="w-full text-left text-sm" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-2 font-medium text-[var(--text-secondary)]"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border-b border-[var(--border-subtle)] px-4 py-2 text-[var(--text-secondary)]"
        {...props}
      >
        {children}
      </td>
    ),
    Callout,
    Steps,
    Step,
    TerminalBlock,
    ProviderTable,
    ...components,
  };
}

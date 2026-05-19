import { cn } from "@/lib/utils";

export type ProviderRow = {
  name: string;
  env?: string;
  note: string;
  cn?: boolean;
};

export function ProviderTable({ rows }: { rows: ProviderRow[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
      <table className="w-full min-w-[32rem] text-left text-sm">
        <thead>
          <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
            <th className="px-4 py-3 font-medium text-[var(--text-secondary)]">
              提供商
            </th>
            <th className="px-4 py-3 font-medium text-[var(--text-secondary)]">
              环境变量
            </th>
            <th className="px-4 py-3 font-medium text-[var(--text-secondary)]">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-[var(--border-subtle)] last:border-0"
            >
              <td className="px-4 py-3 text-[var(--text-primary)]">
                <span className="inline-flex items-center gap-2">
                  {row.name}
                  {row.cn ? (
                    <span className="rounded bg-[rgba(232,184,75,0.15)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-gold)]">
                      CN
                    </span>
                  ) : null}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-[var(--accent-info)]">
                {row.env ?? "—"}
              </td>
              <td
                className={cn(
                  "px-4 py-3 text-[var(--text-secondary)]",
                )}
              >
                {row.note}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

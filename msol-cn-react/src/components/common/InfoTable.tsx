import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export type InfoRow = { label: string; value: ReactNode };

/** 还原原站 c-table：左侧标签、右侧内容的信息表格，用于公司概要/发展历程等页面 */
export function InfoTable({ rows }: { rows: InfoRow[] }) {
  return (
    <Reveal type="fade" as="div">
      <dl className="divide-y divide-line border-y border-line">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-col gap-2 py-4 md:flex-row md:gap-8">
            <dt className="shrink-0 text-sm font-bold text-ink md:w-40">{row.label}</dt>
            <dd className="text-sm leading-relaxed text-ink/80">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

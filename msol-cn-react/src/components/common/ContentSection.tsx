import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type ContentSectionProps = {
  title: string;
  /** 标题上方的小标签，对应原站 p-section-heading__sub（如 品牌 / 使命 / 愿景） */
  sub?: string;
  /** 标题配色：默认 ink（深灰），corp 为品牌深蓝，对应官网 -corp 标题 */
  tone?: 'ink' | 'corp';
  children: ReactNode;
  className?: string;
};

/** 还原原站 c-section-1 + c-heading-2：长文页面里的小节标题 + 正文段落容器 */
export function ContentSection({
  title,
  sub,
  tone = 'ink',
  children,
  className = '',
}: ContentSectionProps) {
  return (
    <section className={`py-8 first:pt-0 ${className}`}>
      {sub && (
        <Reveal type="fade">
          <span className="mb-3 block text-xs font-bold tracking-widest text-ink/50">
            {sub}
          </span>
        </Reveal>
      )}
      <Reveal type="fade" delay={sub ? 1 : 0}>
        <h2
          className={
            tone === 'corp'
              ? 'text-xl font-bold leading-snug text-primary-dark md:text-2xl'
              : 'text-xl font-bold text-ink md:text-2xl'
          }
        >
          {title}
        </h2>
      </Reveal>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80 md:text-base">
        {children}
      </div>
    </section>
  );
}

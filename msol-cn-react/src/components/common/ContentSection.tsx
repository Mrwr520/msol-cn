import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type ContentSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

/** 还原原站 c-section-1 + c-heading-2：长文页面里的小节标题 + 正文段落容器 */
export function ContentSection({ title, children, className = '' }: ContentSectionProps) {
  return (
    <section className={`py-8 first:pt-0 ${className}`}>
      <Reveal type="fade">
        <h2 className="text-xl font-bold text-ink md:text-2xl">{title}</h2>
      </Reveal>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80 md:text-base">
        {children}
      </div>
    </section>
  );
}

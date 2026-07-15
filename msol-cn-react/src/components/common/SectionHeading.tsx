import { Reveal } from './Reveal';

type SectionHeadingProps = {
  sub?: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
};

/** 还原原站 p-section-heading：小标题（sub）+ 主标题（main），滚入淡入 */
export function SectionHeading({
  sub,
  title,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {sub && (
        <Reveal type="fade">
          <span className="mb-2 block text-sm font-bold tracking-wide text-primary">
            {sub}
          </span>
        </Reveal>
      )}
      <Reveal type="fade" delay={2}>
        <h2 className="text-xl font-bold leading-relaxed text-ink md:text-2xl">{title}</h2>
      </Reveal>
    </div>
  );
}

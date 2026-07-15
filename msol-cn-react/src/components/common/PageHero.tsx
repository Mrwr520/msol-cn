import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

type Crumb = { label: string; to?: string };

type PageHeroProps = {
  title: string;
  subtitle?: ReactNode;
  crumbs: Crumb[];
  align?: 'left' | 'center';
};

/** 通用二级页面头部：面包屑 + 大标题 + 副标题说明，取代原站零散的 p-page-visual */
export function PageHero({ title, subtitle, crumbs, align = 'left' }: PageHeroProps) {
  return (
    <div className="border-b border-line bg-line/10">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:py-14">
        <nav className="mb-4 flex items-center gap-1 text-xs text-ink/50">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span>/</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-primary">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <Reveal type="fade" className={align === 'center' ? 'text-center' : ''}>
          <h1 className="text-2xl font-bold text-ink md:text-3xl lg:text-4xl">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal
            type="fade"
            delay={2}
            className={`mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 md:text-base ${
              align === 'center' ? 'mx-auto text-center' : ''
            }`}
          >
            {subtitle}
          </Reveal>
        )}
      </div>
    </div>
  );
}

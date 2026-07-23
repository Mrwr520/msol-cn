import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';
import { Arrow } from './Arrow';
import { assetUrl } from '../../utils/asset';

export type LinkCardItem = {
  to: string;
  title: string;
  desc: string;
  current?: boolean;
  img?: string;
  icon?: string;
};

type LinkCardListProps = {
  items: LinkCardItem[];
  columns?: 2 | 3;
  /** variant="solid" 还原首页深蓝底大卡片风格，适合作为页面主要入口展示 */
  variant?: 'outline' | 'solid';
  /** horizontal=true 时图片在左、文字在右，横向长方形卡片 */
  horizontal?: boolean;
};

/**
 * 还原原站 p-link-desc：底部「了解有关MSOL的更多信息」关联链接卡片组。
 * current=true 的项对应原站 -current 状态（不可点击，仅展示）。
 */
export function LinkCardList({ items, columns = 3, variant = 'outline', horizontal = false }: LinkCardListProps) {
  const isSolid = variant === 'solid';

  return (
    <ul className={`grid grid-cols-1 gap-4 md:gap-6 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
      {items.map((item, i) => {
        const content = horizontal ? (
          <div className="flex items-center gap-4">
            {item.img && (
              <div className="w-24 shrink-0 overflow-hidden rounded sm:w-28">
                <img src={assetUrl(item.img)} alt="" className="h-16 w-full object-cover sm:h-20" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <span
                className={`flex items-center text-base font-bold md:text-lg ${
                  isSolid ? 'text-white' : 'text-primary'
                }`}
              >
                {item.title}
                {!item.current && <Arrow />}
              </span>
              <span
                className={`mt-2 block text-sm leading-relaxed ${
                  isSolid ? 'text-white/80' : 'text-ink/70'
                }`}
              >
                {item.desc}
              </span>
            </div>
          </div>
        ) : (
          <>
            {item.img && (
              <div className="mb-4 overflow-hidden rounded">
                <img src={assetUrl(item.img)} alt="" className="h-32 w-full object-cover" />
              </div>
            )}
            {item.icon && (
              <span
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                  isSolid ? 'bg-white/15' : 'bg-primary/10'
                }`}
              >
                <img src={assetUrl(item.icon)} alt="" className="h-7 w-7" />
              </span>
            )}
            <span
              className={`flex items-center text-base font-bold md:text-lg ${
                isSolid ? 'text-white' : 'text-primary'
              }`}
            >
              {item.title}
              {!item.current && <Arrow />}
            </span>
            <span
              className={`mt-2 block text-sm leading-relaxed ${
                isSolid ? 'text-white/80' : 'text-ink/70'
              }`}
            >
              {item.desc}
            </span>
          </>
        );

        const baseClass = isSolid
          ? 'group relative block h-full overflow-hidden rounded-lg bg-primary-dark p-6 transition-colors'
          : 'group block h-full rounded-lg border border-line p-6 transition-colors hover:border-primary hover:bg-primary/5';

        return (
          <Reveal key={item.to} type="swipe" delay={i + 1} as="li">
            {item.current ? (
              <div className={isSolid ? 'block h-full rounded-lg bg-line/20 p-6' : 'block h-full rounded-lg border border-line bg-line/10 p-6'}>
                {content}
              </div>
            ) : (
              <Link to={item.to} className={baseClass}>
                {isSolid && (
                  <span className="absolute inset-0 z-0 -translate-x-full bg-primary-mid transition-transform duration-400 ease-msol group-hover:translate-x-0" />
                )}
                <span className="relative z-10 block">{content}</span>
              </Link>
            )}
          </Reveal>
        );
      })}
    </ul>
  );
}

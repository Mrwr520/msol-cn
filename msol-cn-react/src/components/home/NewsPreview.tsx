import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Arrow } from '../common/Arrow';
import { NEWS_LIST } from '../../data/news';

/** 还原原站首页 p-corp-news / 通知区块：新闻预览 + 查看清单入口 */
export function NewsPreview() {
  const latest = NEWS_LIST[0];

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Reveal type="fade">
        <h2 className="text-center text-xl font-bold text-ink md:text-2xl">通知</h2>
      </Reveal>
      {latest && (
        <Reveal type="swipe" delay={2} className="mt-6">
          <Link
            to={`/news/${latest.slug}`}
            className="group flex items-center justify-between gap-4 border-b border-line py-4 text-sm"
          >
            <time className="shrink-0 text-ink/60">{latest.date}</time>
            <span className="flex-1 text-ink group-hover:text-primary">{latest.title}</span>
            <Arrow />
          </Link>
        </Reveal>
      )}
      <Reveal type="fade" delay={4} className="mt-6 text-center">
        <Link
          to="/news"
          className="group inline-flex items-center text-sm font-bold text-primary"
        >
          查看清单
          <Arrow />
        </Link>
      </Reveal>
    </div>
  );
}

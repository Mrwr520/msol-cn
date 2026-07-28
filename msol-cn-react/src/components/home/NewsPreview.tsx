import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Arrow } from '../common/Arrow';
import { NEWS_LIST } from '../../data/news';

/** 首页新闻区块：显示最近5条新闻 + 查看清单入口 */
export function NewsPreview() {
  const latestNews = [...NEWS_LIST].sort((a, b) => a.isoDate.localeCompare(b.isoDate)).slice(0, 5);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <Reveal type="fade">
        <h2 className="text-center text-xl font-bold text-ink md:text-2xl">新闻</h2>
      </Reveal>
      <div className="mt-6">
        {latestNews.map((news, index) => (
          <Reveal key={news.slug} type="swipe" delay={Math.min(index + 1, 4)}>
            <Link
              to={`/news/${news.slug}`}
              className="group flex items-center justify-between gap-4 border-b border-line py-4 text-sm"
            >
              <time className="shrink-0 text-ink/60">{news.date}</time>
              <span className="flex-1 truncate text-ink group-hover:text-primary">{news.title}</span>
              <Arrow />
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal type="fade" delay={4} className="mt-6 text-center">
        <Link
          to="/news"
          className="group inline-flex items-center text-sm font-bold text-primary"
        >
          查看更多
          <Arrow />
        </Link>
      </Reveal>
    </div>
  );
}

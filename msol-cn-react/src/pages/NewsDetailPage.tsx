import { useEffect, lazy, Suspense } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { Arrow } from '../components/common/Arrow';
import { ContactCta } from '../components/common/ContactCta';
import { NEWS_LIST } from '../data/news';
import { assetUrl } from '../utils/asset';

const NewsSoftwareConference2024Page = lazy(() => import('./NewsSoftwareConference2024Page'));
const NewsPmiConference2024Page = lazy(() => import('./NewsPmiConference2024Page'));
const NewsCiie2024Page = lazy(() => import('./NewsCiie2024Page'));
const NewsPmiConference2023Page = lazy(() => import('./NewsPmiConference2023Page'));
const NewsPmiConference2025Page = lazy(() => import('./NewsPmiConference2025Page'));
const NewsPmiSalon2023Page = lazy(() => import('./NewsPmiSalon2023Page'));
const NewsPmiRep2023Page = lazy(() => import('./NewsPmiRep2023Page'));
const NewsSoftwareAnnual2021Page = lazy(() => import('./NewsSoftwareAnnual2021Page'));
const NewsPmiRep2021Page = lazy(() => import('./NewsPmiRep2021Page'));

/** 富内容新闻页映射：slug -> 专用组件 */
const RICH_NEWS_PAGES: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'pmi-conference-2025': NewsPmiConference2025Page,
  'pmi-conference-2024': NewsPmiConference2024Page,
  'ciie-2024': NewsCiie2024Page,
  'software-conference-2024': NewsSoftwareConference2024Page,
  'pmi-conference-2023': NewsPmiConference2023Page,
  'pmi-salon-2023': NewsPmiSalon2023Page,
  'pmi-rep-2023': NewsPmiRep2023Page,
  'software-annual-2021': NewsSoftwareAnnual2021Page,
  'pmi-rep-2021': NewsPmiRep2021Page,
};

export default function NewsDetailPage() {
  const { slug } = useParams();
  const news = NEWS_LIST.find((item) => item.slug === slug);

  // 如果有专用富内容页，直接渲染
  const RichPage = slug ? RICH_NEWS_PAGES[slug] : undefined;
  if (RichPage) {
    return (
      <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><span className="text-ink/40">加载中...</span></div>}>
        <RichPage />
      </Suspense>
    );
  }

  useEffect(() => {
    if (news) {
      document.title = `${news.title} | 新闻 | Management Solutions （MSOL）`;
    }
  }, [news]);

  if (!news) {
    return <Navigate to="/news" replace />;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark pb-24 text-white md:pb-32 lg:pb-40">
        <div className="absolute -right-32 -top-44 h-[480px] w-[480px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 lg:pt-16">
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link to="/" className="text-white/55 hover:text-white">首页</Link>
            <span>/</span>
            <Link to="/news" className="text-white/55 hover:text-white">新闻</Link>
            <span>/</span>
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">{news.title}</span>
          </nav>
          <Reveal type="fade">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">{news.category}</span>
            </div>
            <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
              {news.title}
            </h1>
            <time dateTime={news.isoDate} className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">{news.date}</time>
          </Reveal>
        </div>
      </section>

      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal type="swipe" className="-mt-12 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <article>
              <header className="mb-10 border-b border-primary-dark/10 pb-7">
                <p className="text-xs font-bold tracking-[0.22em] text-primary">PRESS RELEASE</p>
              </header>
              {news.image && (
                <img
                  src={assetUrl(news.image)}
                  alt={news.title}
                  className="mb-8 w-full rounded-lg"
                />
              )}
              <div className="space-y-7 text-base leading-8 text-ink/75 md:text-[17px] md:leading-9">
                {news.body.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'border-l-2 border-accent pl-5 font-medium text-ink' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                {news.sourceUrl && (
                  <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                    <span className="font-bold text-ink/70">资料来源</span>
                    {news.sourceUrl.startsWith('/') ? (
                      <Link to={news.sourceUrl} className="text-primary hover:text-primary-dark">
                        {news.sourceLabel ?? 'MSOL 官方资料'}
                      </Link>
                    ) : (
                      <a
                        href={news.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:text-primary-dark"
                      >
                        {news.sourceLabel ?? '公开资料'} ↗
                      </a>
                    )}
                  </div>
                )}
                <Link to="/news" className="group inline-flex items-center text-sm font-bold text-primary-dark">
                  <span className="mr-3 inline-block rotate-180"><Arrow /></span>
                  返回新闻列表
                </Link>
              </footer>
            </article>
          </Reveal>
        </div>
      </main>

      <ContactCta />
    </>
  );
}

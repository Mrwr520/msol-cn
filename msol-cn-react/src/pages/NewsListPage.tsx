import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { Arrow } from '../components/common/Arrow';
import { ContactCta } from '../components/common/ContactCta';
import { NEWS_LIST } from '../data/news';

export default function NewsListPage() {
  useEffect(() => {
    document.title = '新闻 | Management Solutions （MSOL）';
  }, []);

  const newsItems = [...NEWS_LIST].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const latest = newsItems[0];

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="absolute -right-6 -top-16 h-[260px] w-[260px] rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-[12%] h-px w-40 bg-accent" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-24">
          <nav className="mb-10 flex items-center gap-2 text-xs text-white/55">
            <Link to="/" className="text-white/55 hover:text-white">首页</Link>
            <span>/</span>
            <span>新闻</span>
          </nav>
          <Reveal type="fade">
            <p className="mb-4 text-xs font-bold tracking-[0.32em] text-[#7ba5e2]">NEWS &amp; INSIGHTS</p>
            <h1 className="text-4xl font-bold tracking-[0.12em] text-white md:text-5xl lg:text-6xl">新闻动态</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              了解 MSOL 的企业动态、重要公告与最新信息。
            </p>
          </Reveal>
          <span className="pointer-events-none absolute -bottom-7 right-4 hidden text-[132px] font-black leading-none tracking-tighter text-white/[0.035] lg:block">
            NEWS
          </span>
        </div>
      </section>

      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        {latest && (
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <Reveal type="swipe" className="-mt-8 lg:-mt-12">
              <Link
                to={`/news/${latest.slug}`}
                className="group grid overflow-hidden bg-white shadow-[0_20px_60px_rgba(1,57,109,0.12)] md:grid-cols-[minmax(240px,0.78fr)_1.45fr]"
              >
                <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden bg-primary-mid p-7 text-white md:min-h-[320px] md:p-10">
                  <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 ease-msol group-hover:scale-110" />
                  <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full border border-white/15 transition-transform duration-700 ease-msol group-hover:scale-110" />
                  <span className="relative text-xs font-bold tracking-[0.25em] text-white/70">LATEST NEWS</span>
                  <div className="relative">
                    <span className="block text-5xl font-light tracking-tight text-white md:text-6xl">{latest.date.slice(0, 4)}</span>
                    <span className="mt-2 block text-sm tracking-[0.2em] text-white/65">{latest.date.slice(5)}</span>
                  </div>
                </div>
                <div className="flex min-h-[260px] flex-col justify-center p-7 md:p-10 lg:p-14">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-8 bg-accent" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{latest.category}</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold leading-relaxed text-ink transition-colors duration-150 group-hover:text-primary md:text-3xl">
                    {latest.title}
                  </h2>
                  <p className="mt-4 line-clamp-2 text-sm leading-7 text-ink/60 md:text-base">{latest.body[0]}</p>
                  <span className="mt-8 inline-flex items-center text-sm font-bold text-primary-dark">
                    阅读详情 <Arrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        )}

        <section className={`mx-auto max-w-6xl px-6 ${latest ? 'pt-4 lg:pt-8' : 'pt-16 lg:pt-24'}`}>
          <Reveal type="fade" className="flex items-end justify-between border-b border-primary-dark/15 pb-6">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-primary">ALL NEWS</p>
              <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">全部新闻</h2>
            </div>
            <span className="text-sm tabular-nums text-ink/40">{String(newsItems.length).padStart(2, '0')}</span>
          </Reveal>

          {newsItems.length > 0 ? (
            <ul className="divide-y divide-primary-dark/10">
              {newsItems.map((news, index) => (
                <Reveal key={news.slug} type="swipe" delay={Math.min(index + 1, 5)} as="li">
                  <Link
                    to={`/news/${news.slug}`}
                    className="group grid gap-4 py-7 md:grid-cols-[8rem_7rem_1fr_auto] md:items-center md:gap-6 md:py-9"
                  >
                    <time dateTime={news.isoDate} className="text-sm tabular-nums tracking-wide text-ink/50">{news.date}</time>
                    <span className="w-fit border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-wider text-primary">{news.category}</span>
                    <h3 className="text-base font-bold leading-7 text-ink transition-colors duration-100 group-hover:text-primary md:text-lg">{news.title}</h3>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-dark/15 transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Arrow color="ink" className="lg:group-hover:border-white" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          ) : (
            <p className="py-16 text-center text-sm text-ink/50">暂无新闻</p>
          )}
        </section>
      </main>

      <ContactCta />
    </>
  );
}

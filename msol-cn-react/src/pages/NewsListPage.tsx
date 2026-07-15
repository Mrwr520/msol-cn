import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { Arrow } from '../components/common/Arrow';
import { ContactCta } from '../components/common/ContactCta';
import { NEWS_LIST } from '../data/news';

export default function NewsListPage() {
  useEffect(() => { document.title = '新闻 | Management Solutions （MSOL）'; }, []);
  const newsItems = [...NEWS_LIST].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="absolute -right-6 -top-16 h-[260px] w-[260px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-24">
          <nav className="mb-10 flex items-center gap-2 text-xs text-white/55"><Link to="/" className="text-white/55 hover:text-white">首页</Link><span>/</span><span>新闻</span></nav>
          <Reveal type="fade"><p className="mb-4 text-xs font-bold tracking-[0.32em] text-[#7ba5e2]">NEWS &amp; INSIGHTS</p><h1 className="text-4xl font-bold tracking-[0.12em] text-white md:text-5xl lg:text-6xl">新闻动态</h1><p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">汇集 MSOL 企业动态、集团发展节点与产品服务信息。</p></Reveal>
          <span className="pointer-events-none absolute -bottom-7 right-4 hidden text-[132px] font-black leading-none tracking-tighter text-white/[0.035] lg:block">NEWS</span>
        </div>
      </section>

      <main className="bg-[#f3f7fb] py-16 lg:py-24">
        <section className="mx-auto max-w-6xl px-6">
          <Reveal type="fade" className="mb-10 flex items-end justify-between border-b border-primary-dark/15 pb-6 md:mb-12"><div><p className="text-xs font-bold tracking-[0.24em] text-primary">LATEST STORIES</p><h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">最新动态</h2></div><span className="text-sm tabular-nums text-ink/40">{String(newsItems.length).padStart(2, '0')}</span></Reveal>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {newsItems.map((news, index) => (
              <Reveal key={news.slug} type="swipe" delay={Math.min(index + 1, 4)} as="li" className="h-full">
                <Link to={`/news/${news.slug}`} className="group relative block min-h-[360px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(1,57,109,0.08)] transition-[transform,box-shadow] duration-500 ease-msol lg:hover:-translate-y-2 lg:hover:shadow-[0_24px_60px_rgba(1,57,109,0.18)]">
                  <div className="absolute inset-0 p-7 md:p-8"><div className="flex items-start justify-between"><span className="border-l-2 border-accent pl-3 text-[11px] font-bold tracking-[0.16em] text-primary">{news.category}</span><span className="text-xs tabular-nums tracking-wider text-ink/40">{news.date}</span></div><span className="absolute bottom-16 right-3 text-[92px] font-black leading-none text-primary-dark/[0.035]">{String(index + 1).padStart(2, '0')}</span><h3 className="relative mt-16 text-xl font-bold leading-[1.65] text-ink md:text-[22px]">{news.title}</h3><div className="absolute bottom-0 left-0 h-1 w-full bg-line"><span className="block h-full w-0 bg-accent transition-all duration-500 group-hover:w-full" /></div></div>
                  <div className="absolute inset-0 flex translate-y-0 flex-col justify-between bg-primary-dark p-7 text-white transition-transform duration-500 ease-msol lg:translate-y-[calc(100%-4.75rem)] lg:group-hover:translate-y-0 md:p-8"><div><div className="flex h-5 items-center justify-between"><span className="text-[11px] font-bold tracking-[0.2em] text-[#7ba5e2]">VIEW STORY</span><time dateTime={news.isoDate} className="text-xs text-white/50">{news.date}</time></div><div className="mt-8 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:delay-0 lg:group-hover:opacity-100 lg:group-hover:delay-150"><span className="text-xs font-bold tracking-[0.18em] text-accent">{news.category}</span><h3 className="mt-4 text-xl font-bold leading-[1.6] text-white">{news.title}</h3><p className="mt-5 text-sm leading-7 text-white/68">{news.summary}</p></div></div><span className="inline-flex items-center text-sm font-bold text-white">阅读完整内容 <Arrow /></span></div>
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal type="fade" className="mt-10 text-xs leading-6 text-ink/45">部分集团动态根据 MSOL 官方公司沿革及公开披露资料整理，详情页附有来源。</Reveal>
        </section>
      </main>
      <ContactCta />
    </>
  );
}

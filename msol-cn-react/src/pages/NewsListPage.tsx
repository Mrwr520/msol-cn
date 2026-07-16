import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { Arrow } from '../components/common/Arrow';
import { ContactCta } from '../components/common/ContactCta';
import { NEWS_LIST } from '../data/news';

const PAGE_SIZE = 6;

export default function NewsListPage() {
  useEffect(() => { document.title = '新闻 | Management Solutions （MSOL）'; }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const listRef = useRef<HTMLElement>(null);
  const newsItems = [...NEWS_LIST].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const years = [...new Set(newsItems.map((item) => item.isoDate.slice(0, 4)))];
  const categories = [...new Set(newsItems.map((item) => item.category))];
  const selectedYear = years.includes(searchParams.get('year') ?? '') ? searchParams.get('year') ?? '' : '';
  const selectedCategory = categories.includes(searchParams.get('category') ?? '') ? searchParams.get('category') ?? '' : '';
  const filteredItems = newsItems.filter((item) =>
    (!selectedYear || item.isoDate.startsWith(selectedYear)) &&
    (!selectedCategory || item.category === selectedCategory),
  );
  const pageCount = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  const requestedPage = Number(searchParams.get('page') ?? '1');
  const currentPage = Number.isInteger(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), pageCount)
    : 1;
  const pageItems = filteredItems.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const updateParams = (updates: Record<string, string>) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => value ? next.set(key, value) : next.delete(key));
    setSearchParams(next);
  };

  const changeFilter = (key: 'year' | 'category', value: string) => {
    updateParams({ [key]: value, page: '' });
  };

  const goToPage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), pageCount);
    updateParams({ page: nextPage === 1 ? '' : String(nextPage) });
    requestAnimationFrame(() => listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

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
        <section ref={listRef} className="mx-auto max-w-6xl scroll-mt-20 px-6">
          <Reveal type="fade" className="mb-8 flex items-end justify-between border-b border-primary-dark/15 pb-6"><div><p className="text-xs font-bold tracking-[0.24em] text-primary">LATEST STORIES</p><h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">最新动态</h2></div><span className="text-sm tabular-nums text-ink/40">{String(filteredItems.length).padStart(2, '0')} / {String(newsItems.length).padStart(2, '0')}</span></Reveal>

          <Reveal type="fade" delay={1} className="mb-10 md:mb-12">
            <div className="relative overflow-hidden border border-primary-dark/10 bg-white shadow-[0_8px_30px_rgba(1,57,109,0.06)]">
              <span className="absolute left-0 top-0 h-full w-1 bg-primary" />
              <div className="grid gap-0 md:grid-cols-[1fr_1fr_auto] md:items-end">
                <label className="border-b border-line px-6 py-5 md:border-b-0 md:border-r md:px-7">
                  <span className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-primary">YEAR</span>
                  <span className="relative block">
                    <select value={selectedYear} onChange={(event) => changeFilter('year', event.target.value)} className="h-10 w-full cursor-pointer appearance-none bg-transparent pr-10 text-base font-bold text-ink outline-none focus:text-primary-dark" aria-label="按年份筛选新闻">
                      <option value="">全部年份</option>
                      {years.map((year) => <option key={year} value={year}>{year} 年</option>)}
                    </select>
                    <svg aria-hidden="true" viewBox="0 0 12 8" className="pointer-events-none absolute right-1 top-1/2 h-2 w-3 -translate-y-1/2 text-primary-dark"><path d="M1 1.25 6 6.25l5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                  </span>
                </label>
                <label className="border-b border-line px-6 py-5 md:border-b-0 md:border-r md:px-7">
                  <span className="mb-2 block text-[11px] font-bold tracking-[0.18em] text-primary">CATEGORY</span>
                  <span className="relative block">
                    <select value={selectedCategory} onChange={(event) => changeFilter('category', event.target.value)} className="h-10 w-full cursor-pointer appearance-none bg-transparent pr-10 text-base font-bold text-ink outline-none focus:text-primary-dark" aria-label="按分类筛选新闻">
                      <option value="">全部分类</option>
                      {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                    </select>
                    <svg aria-hidden="true" viewBox="0 0 12 8" className="pointer-events-none absolute right-1 top-1/2 h-2 w-3 -translate-y-1/2 text-primary-dark"><path d="M1 1.25 6 6.25l5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                  </span>
                </label>
                <button type="button" onClick={() => updateParams({ year: '', category: '', page: '' })} disabled={!selectedYear && !selectedCategory} className="h-full min-h-[72px] px-7 text-sm font-bold text-primary-dark transition-colors duration-150 hover:bg-primary hover:text-white disabled:cursor-default disabled:text-ink/25 disabled:hover:bg-transparent">重置筛选</button>
              </div>
            </div>
          </Reveal>

          {pageItems.length > 0 ? (
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {pageItems.map((news, index) => (
                <Reveal key={`${currentPage}-${news.slug}`} type="swipe" delay={Math.min(index + 1, 4)} as="li" className="h-full">
                  <Link to={`/news/${news.slug}`} className="group relative block min-h-[360px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(1,57,109,0.08)] transition-shadow duration-500 ease-msol lg:hover:shadow-[0_24px_60px_rgba(1,57,109,0.18)]">
                    <div className="absolute inset-0 p-7 md:p-8"><div className="flex items-start justify-between"><span className="border-l-2 border-accent pl-3 text-[11px] font-bold tracking-[0.16em] text-primary">{news.category}</span><span className="text-xs tabular-nums tracking-wider text-ink/40">{news.date}</span></div><span className="absolute bottom-16 right-3 text-[92px] font-black leading-none text-primary-dark/[0.035]">{String((currentPage - 1) * PAGE_SIZE + index + 1).padStart(2, '0')}</span><h3 className="relative mt-16 text-xl font-bold leading-[1.65] text-ink md:text-[22px]">{news.title}</h3><div className="absolute bottom-0 left-0 h-1 w-full bg-line"><span className="block h-full w-0 bg-accent transition-all duration-500 group-hover:w-full" /></div></div>
                    <div className="absolute inset-0 flex translate-y-0 flex-col justify-between bg-primary-dark p-7 text-white transition-transform duration-500 ease-msol lg:translate-y-[calc(100%-4.75rem)] lg:group-hover:translate-y-0 md:p-8"><div><div className="flex h-5 items-center justify-between"><span className="text-[11px] font-bold tracking-[0.2em] text-[#7ba5e2]">VIEW STORY</span><time dateTime={news.isoDate} className="text-xs text-white/50">{news.date}</time></div><div className="mt-8 opacity-100 transition-opacity duration-300 lg:opacity-0 lg:delay-0 lg:group-hover:opacity-100 lg:group-hover:delay-150"><span className="text-xs font-bold tracking-[0.18em] text-accent">{news.category}</span><h3 className="mt-4 text-xl font-bold leading-[1.6] text-white">{news.title}</h3><p className="mt-5 text-sm leading-7 text-white/68">{news.summary}</p></div></div><span className="inline-flex items-center text-sm font-bold text-white">阅读完整内容 <Arrow /></span></div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="border border-primary-dark/10 bg-white px-6 py-16 text-center"><p className="text-lg font-bold text-ink">没有符合条件的新闻</p><p className="mt-2 text-sm text-ink/50">请调整年份或分类后重试。</p><button type="button" onClick={() => updateParams({ year: '', category: '', page: '' })} className="mt-6 text-sm font-bold text-primary hover:text-primary-dark">查看全部新闻</button></div>
          )}

          {pageCount > 1 && (
            <nav aria-label="新闻分页" className="mt-12 flex items-center justify-center gap-2 md:mt-16">
              <button type="button" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="group flex h-11 min-w-11 items-center justify-center border border-primary-dark/15 bg-white px-3 text-sm font-bold text-primary-dark transition-colors duration-150 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-primary-dark/15 disabled:hover:bg-white disabled:hover:text-primary-dark" aria-label="上一页"><span className="inline-block rotate-180"><Arrow color="ink" className="group-hover:border-white" /></span></button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => <button key={page} type="button" onClick={() => goToPage(page)} aria-current={page === currentPage ? 'page' : undefined} className={`h-11 min-w-11 border px-3 text-sm font-bold tabular-nums transition-colors duration-150 ${page === currentPage ? 'border-primary-dark bg-primary-dark text-white' : 'border-primary-dark/15 bg-white text-primary-dark hover:border-primary hover:bg-primary hover:text-white'}`}>{String(page).padStart(2, '0')}</button>)}
              <button type="button" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pageCount} className="group flex h-11 min-w-11 items-center justify-center border border-primary-dark/15 bg-white px-3 text-sm font-bold text-primary-dark transition-colors duration-150 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-primary-dark/15 disabled:hover:bg-white disabled:hover:text-primary-dark" aria-label="下一页"><Arrow color="ink" className="group-hover:border-white" /></button>
            </nav>
          )}
          <Reveal type="fade" className="mt-10 text-xs leading-6 text-ink/45">部分集团动态根据 MSOL 官方公司沿革及公开披露资料整理，详情页附有来源。</Reveal>
        </section>
      </main>
      <ContactCta />
    </>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { Arrow } from '../components/common/Arrow';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

export type BookItem = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  cover: string;
  summary: string;
};

/** 图书推荐列表，后续新增图书只需追加条目 */
export const BOOKS_LIST: BookItem[] = [
  {
    slug: 'pmo-guide',
    title: '项目管理办公室(PMO)实践指南',
    date: '2023.10.08',
    isoDate: '2023-10-08',
    cover: '/images/books/img_00.png',
    summary: '本书系统介绍了PMO的核心职能、组织定位、实施策略与管理工具，为PMO从业者与项目管理专业人员提供全面实操参考。',
  },
];

export default function BooksListPage() {
  useEffect(() => {
    document.title = '图书推荐 | Management Solutions (MSOL)';
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="absolute -right-6 -top-16 h-[260px] w-[260px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20 lg:py-24">
          <nav className="mb-10 flex items-center gap-2 text-xs text-white/55">
            <Link to="/" className="text-white/55 hover:text-white">首页</Link>
            <span>/</span>
            <span>图书推荐</span>
          </nav>
          <Reveal type="fade">
            <p className="mb-4 text-xs font-bold tracking-[0.32em] text-[#7ba5e2]">BOOK RECOMMENDATIONS</p>
            <h1 className="text-4xl font-bold tracking-[0.12em] text-white md:text-5xl lg:text-6xl">图书推荐</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              精选项目管理与PMO领域优秀书籍，助力专业能力提升。
            </p>
          </Reveal>
          <span className="pointer-events-none absolute -bottom-7 right-4 hidden text-[132px] font-black leading-none tracking-tighter text-white/[0.035] lg:block">BOOKS</span>
        </div>
      </section>

      {/* Book Grid */}
      <main className="bg-[#f3f7fb] py-16 lg:py-24">
        <section className="mx-auto max-w-6xl px-6">
          <Reveal type="fade" className="mb-8 flex items-end justify-between border-b border-primary-dark/15 pb-6">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-primary">RECOMMENDED</p>
              <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">推荐书目</h2>
            </div>
            <span className="text-sm tabular-nums text-ink/40">
              {String(BOOKS_LIST.length).padStart(2, '0')} 本
            </span>
          </Reveal>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BOOKS_LIST.map((book, index) => (
              <Reveal key={book.slug} type="swipe" delay={Math.min(index + 1, 4)} as="li" className="h-full">
                <Link
                  to={`/books/${book.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden bg-white shadow-[0_12px_40px_rgba(1,57,109,0.08)] transition-shadow duration-500 ease-msol lg:hover:shadow-[0_24px_60px_rgba(1,57,109,0.18)]"
                >
                  {/* 封面 */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#edf2f7]">
                    <img
                      src={assetUrl(book.cover)}
                      alt={book.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* 文字区 */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 text-xs tabular-nums tracking-wider text-ink/40">{book.date}</span>
                    <h3 className="text-lg font-bold leading-[1.6] text-ink group-hover:text-primary-dark">
                      {book.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-ink/60">{book.summary}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-bold text-primary-dark">
                      查看详情 <Arrow />
                    </span>
                  </div>
                  {/* 底部进度条 */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-line">
                    <span className="block h-full w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </section>
      </main>

      <ContactCta />
    </>
  );
}

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
  /** 外部跳转链接（如微信公众号文章）；配置后卡片点击将在新标签页打开该链接 */
  href?: string;
  /** 封面缩放系数，用于对齐留白较多的立体书封面视觉大小，默认 1 */
  coverScale?: number;
  /** 平面封面图，需要添加阴影效果 */
  flatCover?: boolean;
};

/** 图书推荐列表，后续新增图书只需追加条目 */
export const BOOKS_LIST: BookItem[] = [
  {
    slug: 'pmo-guide',
    title: '项目管理办公室（PMO）实践指南',
    date: '2018.04',
    isoDate: '2018-04-01',
    cover: assetUrl('/images/books/img_01.png'),
    summary: '汇集300余家国际企业导入PMO的实际案例。从人、组织、流程与工具四个维度，探讨PMO架构的最佳指导书。',
    href: 'https://mp.weixin.qq.com/s/3N6VdElTWX7PuA4Y1r-ydQ',
  },
  {
    slug: 'pmo-100-rules',
    title: 'PMO不败法则：100个完美收工技巧',
    date: '2019.09',
    isoDate: '2019-09-01',
    cover: assetUrl('/images/books/img_02.png'),
    summary: '集精彩观点整合、实战案例和精辟分析于一体，为国内PMO从业者打开另一扇窗，帮助其成长，最终达到成功的大智慧。',
    href: 'https://mp.weixin.qq.com/s/Fxir6TgwBsV-M9yOrgxR8g',
  },
  {
    slug: 'agile-breakthrough',
    title: '突破敏捷困境：来自敏捷实践的144个提示',
    date: '2025.11',
    isoDate: '2025-11-01',
    cover: assetUrl('/images/books/img_03.png'),
    summary: '敏捷管理的实战宝典！汇集多行业实战经验，144个提示直击实践痛点。融合西方敏捷理念、日本精益思维与中国古代管理智慧，适配当下多变的国际形势与技术浪潮。',
    href: 'https://mp.weixin.qq.com/s/f9UkOdznHF_clB9R3WytYA',
    coverScale: 0.84,
    flatCover: true,
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
          <span className="pointer-events-none absolute -bottom-7 right-4 hidden text-[132px] font-black leading-none tracking-tighter text-white/[0.08] lg:block">BOOKS</span>
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

          </Reveal>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BOOKS_LIST.map((book, index) => {
              const cardClass =
                'group relative flex h-full flex-col overflow-hidden bg-white';
              const inner = (
                <>
                  {/* 封面 */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#edf2f7]">
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{
                        transform: book.flatCover 
                          ? `translateY(-3%)${book.coverScale ? ` scale(${book.coverScale})` : ''}`
                          : `translateX(6%)${book.coverScale ? ` scale(${book.coverScale})` : ''}`,
                      }}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                          book.coverScale ? 'object-contain' : 'object-cover'
                        } ${book.flatCover ? 'drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]' : ''}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* 文字区 */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 text-2xl font-bold tabular-nums tracking-wider text-primary">{book.date}</span>
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
                </>
              );
              return (
                <Reveal key={book.slug} type="swipe" delay={Math.min(index + 1, 4)} as="li" className="h-full">
                  {book.href ? (
                    <a href={book.href} target="_blank" rel="noreferrer" className={cardClass}>
                      {inner}
                    </a>
                  ) : (
                    <Link to={`/books/${book.slug}`} className={cardClass}>
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </section>
      </main>

      <ContactCta />
    </>
  );
}

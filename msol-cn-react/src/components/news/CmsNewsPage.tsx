import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlockRenderer } from './BlockRenderer';
import { ContactCta } from '../common/ContactCta';
import { assetUrl } from '../../utils/asset';
import type { CmsNewsArticle } from '../../types/cms';

/**
 * CMS 驱动的新闻详情页。
 * 当前从 public/data/news/{slug}.json 加载数据。
 * 后续接入 Strapi 后，改为调用 API 即可，渲染逻辑不变。
 */
export function CmsNewsPage({ slug }: { slug: string }) {
  const [article, setArticle] = useState<CmsNewsArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(assetUrl(`/data/news/${slug}.json`))
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data: CmsNewsArticle) => {
        setArticle(data);
        document.title = `${data.title} | 新闻 | Management Solutions （MSOL）`;
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="text-ink/40">加载中...</span>
      </div>
    );
  }

  if (error || !article) {
    return null; // 返回 null 让 NewsDetailPage fallback 到原有逻辑
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark pb-24 text-white md:pb-32 lg:pb-40">
        <div className="absolute -right-32 -top-44 h-[480px] w-[480px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 lg:pt-16">
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link to="/" className="text-white/55 hover:text-white">首页</Link>
            <span>/</span>
            <Link to="/news" className="text-white/55 hover:text-white">新闻</Link>
            <span>/</span>
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">{article.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">
              {article.category}
            </span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <time
            dateTime={article.isoDate}
            className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55"
          >
            {article.date}
          </time>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="relative -mt-12 overflow-hidden bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-primary/10 to-transparent" />

            <article className="relative">
              {article.heroImage && (
                <div className="-mx-7 -mt-10 mb-12 md:-mx-14 md:-mt-14 lg:-mx-20 lg:-mt-16">
                  <img src={assetUrl(article.heroImage)} alt="" className="w-full" loading="eager" />
                </div>
              )}

              <BlockRenderer blocks={article.blocks} />

              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <Link to="/news" className="group inline-flex items-center text-sm font-bold text-primary-dark">
                  <span className="mr-3 inline-block rotate-180">
                    <svg viewBox="0 0 18 12" fill="none" className="h-3 w-4">
                      <path d="M1 6h16M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  返回新闻列表
                </Link>
              </footer>
            </article>
          </div>
        </div>
      </main>

      <ContactCta />
    </>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/common/Reveal';
import { ContactCta } from '../components/common/ContactCta';

const IMG_BASE = '/images/books';

export default function BookPmoGuidePage() {
  useEffect(() => {
    document.title = '图书推荐：项目管理办公室(PMO)实践指南 | Management Solutions (MSOL)';
  }, []);

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
            <Link to="/books" className="text-white/55 hover:text-white">图书推荐</Link>
            <span>/</span>
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">项目管理办公室(PMO)实践指南</span>
          </nav>
          <Reveal type="fade">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">图书推荐</span>
            </div>
            <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
              《项目管理办公室(PMO)实践指南》
            </h1>
            <time dateTime="2023-10-08" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2023.10.08</time>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal type="swipe" className="-mt-12 overflow-hidden bg-white shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16">
            <article>
              {/* 封面图 */}
              <div>
                <img src={`${IMG_BASE}/img_00.png`} alt="《项目管理办公室(PMO)实践指南》封面" className="w-full" loading="eager" />
              </div>

              <div className="px-7 py-10 md:px-14 md:py-14 lg:px-20 lg:py-16">
                {/* 书名高亮卡片 */}
                <div className="mb-10 rounded-xl bg-[#edf2f7] px-8 py-6 text-center md:px-12 md:py-8">
                  <p className="text-xl font-bold leading-9 text-primary-dark md:text-2xl md:leading-10">
                    项目管理办公室(PMO)实践指南
                  </p>
                  <p className="mt-3 text-sm text-primary-dark/60">PMO达人阁 推荐</p>
                </div>

                {/* 内容图片展示 */}
                <div className="space-y-6">
                  <img src={`${IMG_BASE}/img_01.png`} alt="书籍介绍 第1页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_02.png`} alt="书籍介绍 第2页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_03.png`} alt="书籍介绍 第3页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_04.png`} alt="书籍介绍 第4页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_05.png`} alt="书籍介绍 第5页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_06.png`} alt="书籍介绍 第6页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_07.png`} alt="书籍介绍 第7页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_08.png`} alt="书籍介绍 第8页" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_09.png`} alt="书籍介绍 第9页" className="w-full rounded-lg" loading="lazy" />
                  <a href="https://weidian.com/item.html?itemID=2534020820" target="_blank" rel="noreferrer" className="block">
                    <img src={`${IMG_BASE}/img_10.png`} alt="官方微店购买" className="w-full rounded-lg transition-opacity hover:opacity-80" loading="lazy" />
                  </a>
                  <a href="https://item.jd.com/12356935.html" target="_blank" rel="noreferrer" className="block">
                    <img src={`${IMG_BASE}/img_11.png`} alt="京东购买" className="w-full rounded-lg transition-opacity hover:opacity-80" loading="lazy" />
                  </a>
                  <a href="http://product.dangdang.com/25276649.html" target="_blank" rel="noreferrer" className="block">
                    <img src={`${IMG_BASE}/img_12.png`} alt="当当网购买" className="w-full rounded-lg transition-opacity hover:opacity-80" loading="lazy" />
                  </a>
                  <img src={`${IMG_BASE}/img_13.gif`} alt="购买渠道" className="w-full rounded-lg" loading="lazy" />
                </div>

                {/* Footer */}
                <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                  <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                    <span className="font-bold text-ink/70">来源</span>
                    <a
                      href="https://mp.weixin.qq.com/s/yJMb37eg2ojm0GnFrl08XQ"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary-dark"
                    >
                      PMO达人阁 微信公众号 ↗
                    </a>
                  </div>
                  <Link to="/books" className="group inline-flex items-center text-sm font-bold text-primary-dark">
                    <span className="mr-3 inline-block rotate-180">
                      <svg viewBox="0 0 18 12" fill="none" className="h-3 w-4"><path d="M1 6h16M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    返回图书推荐
                  </Link>
                </footer>
              </div>
            </article>
          </Reveal>
        </div>
      </main>

      <ContactCta />
    </>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const IMG_BASE = assetUrl('/images/news/pmi-2025');

export default function NewsPmiConference2025Page() {
  useEffect(() => {
    document.title = '新书首发 · 大咖力荐 | 2025 PMI项目管理大会在深圳圆满举行！ | 新闻 | Management Solutions （MSOL）';
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
            <Link to="/news" className="text-white/55 hover:text-white">新闻</Link>
            <span>/</span>
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">2025 PMI项目管理大会</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            新书首发 · 大咖力荐 | 2025 PMI项目管理大会在深圳圆满举行！
          </h1>
          <time dateTime="2025-11-13" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2025.11.13</time>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="-mt-12 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <article>

              {/* Banner Image */}
              <div className="-mx-7 -mt-10 mb-10 md:-mx-14 md:-mt-14 lg:-mx-20 lg:-mt-16">
                <img
                  src={`${IMG_BASE}/img_01.jpg`}
                  alt="2025 PMI项目管理大会"
                  className="w-full"
                  loading="eager"
                />
              </div>

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  2025年11月8日至9日，项目管理协会(Project Management Institute, PMI)主办的2025 PMI项目管理大会，在深圳精彩启幕。本届大会以 <strong className="text-primary">"智驱万象 项启新篇"</strong> 为核心主题，深度聚焦AI时代项目管理的创新实践与未来走向，不仅汇聚了全球及中国项目管理领域的顶尖专家学者、企业高管、行业领袖、院校代表、资深实践者与媒体人等千余名线下参会者，更吸引数万观众在线同步围观，众人携手探讨新质生产力背景下商业生态的重塑路径与项目管理新范式。
                </p>
              </section>

              {/* 大会现场直击 Section */}
              <section className="mb-16">
                <div className="mb-8 rounded-xl bg-gradient-to-r from-primary-dark to-primary px-6 py-5 text-white shadow-lg md:px-8">
                  <h2 className="text-xl font-bold md:text-2xl">大会现场直击</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <img src={`${IMG_BASE}/img_02.jpg`} alt="大会现场" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                  <img src={`${IMG_BASE}/img_03.jpg`} alt="大会现场" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                  <img src={`${IMG_BASE}/img_04.jpg`} alt="大会现场" className="col-span-2 w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                </div>
                {/* 现场视频 */}
                <div className="mt-6">
                  <video
                    src={`${IMG_BASE}/video.mp4`}
                    controls
                    className="w-full rounded-lg"
                    poster={`${IMG_BASE}/img_02.jpg`}
                  >
                    您的浏览器不支持视频播放
                  </video>
                </div>
              </section>

              {/* 聚焦未来 Section */}
              <section className="mb-16">
                <div className="mb-8 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-5 text-white shadow-lg md:px-8">
                  <h2 className="text-xl font-bold md:text-2xl">聚焦未来：AI时代的项目管理重构</h2>
                </div>
                <div className="space-y-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <p>
                    在大会开幕式上，中国国际人才交流基金会主任刘东金先生作大会致辞，对PMI与基金会在中国推动项目管理教育与人才认证体系建设的长期合作给予肯定。
                  </p>
                  <p>
                    随后，PMI中国区总裁王梦妍女士发表致辞。她指出，全球正经历深刻的经济与技术变革，而中国正成为其中的核心引擎。
                  </p>
                  <p>
                    PMI全球学习与发展副总裁Kelly Heuer博士在演讲中指出，项目管理正成为驱动全球变革的关键力量，而在充满不确定性的环境下，提升项目成功率、掌握AI赋能、保持持续学习是未来项目管理专业发展的三大核心方向。
                  </p>
                </div>

                {/* 大会主会场图片 */}
                <div className="mt-8 space-y-4">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">大会主会场</span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <img src={`${IMG_BASE}/img_06.jpg`} alt="大会主会场" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                    <img src={`${IMG_BASE}/img_07.jpg`} alt="大会主会场" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <p className="text-center text-xs italic text-ink/50">* 图片来源PMI官方</p>
                </div>
              </section>

              {/* AI × PMO Section */}
              <section className="mb-16">
                <div className="mb-8 rounded-xl bg-gradient-to-r from-accent to-primary px-6 py-5 text-white shadow-lg md:px-8">
                  <h2 className="text-xl font-bold md:text-2xl">AI × PMO：助推企业数转与项管智进</h2>
                </div>
                <div className="space-y-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <p>
                    MSOL首席PMO咨询师罗晨在分论坛发表主题演讲，以 <strong className="text-accent">"当AI接管80%，我们PMO的价值，恰好在那20%"</strong> 为核心，引发全场深度思考。
                  </p>
                  <p>
                    演讲中，罗晨老师聚焦PMO不可替代的20%核心价值，从第三方咨询顾问视角复盘PMO价值定位，结合真实"人机协同"PoC项目诊断案例展开深度解析。他与现场嘉宾共探索：未来高价值PMO如何深度融合敏捷思维与AI能力，回归"驱动商业成果、成就团队"的本质，构建以"情感价值"为核心的持续竞争力，绘制PMO未来角色进化蓝图，打造AI时代的专属生存策略。
                  </p>
                </div>

                {/* 罗晨演讲图片 */}
                <div className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <img src={`${IMG_BASE}/img_08.png`} alt="罗晨演讲" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                    <img src={`${IMG_BASE}/img_09.png`} alt="罗晨演讲" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-ink">MSOL首席PMO咨询师 罗晨</p>
                    <p className="text-xs text-ink/50">Chief PMO Consultant Roger</p>
                  </div>
                </div>
              </section>

              {/* 新书首发 Section */}
              <section className="mb-16">
                <div className="mb-8 rounded-xl bg-gradient-to-r from-primary-dark to-accent px-6 py-5 text-white shadow-lg md:px-8">
                  <h2 className="text-xl font-bold md:text-2xl">新书首发引热潮：译者现场互动，人气爆棚！</h2>
                </div>
                <div className="space-y-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <p>
                    本次大会现场，MSOL受邀参展，并重磅推出了11月首发新书<strong className="text-primary">《突破敏捷困境——来自敏捷实践的144个提示》</strong>。该书由日本敏捷领军人物执笔，汇集多行业实战经验，144个提示直击实践痛点。书中融合西方敏捷理念、日本精益思维与中国古代管理智慧，适配当下多变的国际形势与技术浪潮。
                  </p>
                  <p>
                    大会期间，参会嘉宾与译者面对面深度交流，围绕"PMO 日常操作中如何运用敏捷"展开热烈讨论。现场人潮涌动，新书凭借其实用价值收获一致好评！不少嘉宾还如愿获得译者亲笔签名，现场互动热火朝天。
                  </p>
                </div>

                {/* 新书展示图片 - 左边签名书，右边两张展位图 */}
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <img src={`${IMG_BASE}/img_05.jpg`} alt="译者签名书页" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                  <div className="flex flex-col gap-4">
                    <img src={`${IMG_BASE}/img_06.jpg`} alt="展位交流" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                    <img src={`${IMG_BASE}/img_07.jpg`} alt="展位交流" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                  </div>
                </div>
              </section>

              {/* 惊喜福利 Section */}
              <section className="mb-14 overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">惊喜福利</span>
                  </div>
                  <div className="space-y-4 text-base leading-8 text-ink/90">
                    <p>本篇文章一键三连+留言：</p>
                    <p className="text-center text-lg font-bold text-primary">你想说的话</p>
                    <p className="text-center">留言点赞排名前3名即可获得译者亲签版书籍</p>
                    <div className="rounded-lg bg-white/70 p-4 text-center text-sm leading-7 text-ink/70">
                      <p>每人仅限免费获赠一本，包邮到你家！</p>
                      <p className="font-bold text-accent">活动截止时间：11月30日下午17:00</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <img src={`${IMG_BASE}/img_12.gif`} alt="动态图" className="mx-auto w-full max-w-md rounded-lg" loading="lazy" />
                  </div>
                </div>
              </section>

              {/* 联系方式 Section */}
              <section className="mb-10 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8">
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                  <div className="flex-shrink-0">
                    <img src={`${IMG_BASE}/img_11.png`} alt="小麦同学二维码" className="h-32 w-32 rounded-lg" loading="lazy" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-lg font-bold text-ink">小麦同学</p>
                    <p className="text-sm text-ink/60">PMO AI智能推荐官</p>
                    <p className="mt-4 text-sm text-ink/80">更多咨询可长按识别二维码<br />添加MSOL官方客服</p>
                    <p className="mt-2 text-sm text-accent">也可获取译者专属优惠购书折扣</p>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/HFw6O-kyfWQ-mAskvniGag"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-dark"
                  >
                    PMO达人阁 微信公众号 ↗
                  </a>
                </div>
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

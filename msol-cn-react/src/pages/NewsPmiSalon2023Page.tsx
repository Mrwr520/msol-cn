import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const IMG_BASE = assetUrl('/images/news/pmi-salon-2023');

export default function NewsPmiSalon2023Page() {
  useEffect(() => {
    document.title = 'MSOL受邀参加~2023PMI项目管理沙龙~对日企业项目管理实践 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">2023PMI项目管理沙龙</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            MSOL受邀参加~2023PMI项目管理沙龙~对日企业项目管理实践
          </h1>
          <time dateTime="2023-05-12" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2023.05.12</time>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="-mt-12 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <article>

              {/* Banner Image */}
              <figure className="-mx-7 -mt-10 mb-10 md:-mx-14 md:-mt-14 lg:-mx-20 lg:-mt-16">
                <img
                  src={`${IMG_BASE}/img_00.jpg`}
                  alt="2023PMI项目管理沙龙现场"
                  className="w-full"
                  loading="eager"
                />
                <figcaption className="mt-3 px-7 text-center text-xs italic text-primary-dark/60 md:px-14 lg:px-20">
                  该沙龙在成都市高新区中日会客厅举办
                </figcaption>
              </figure>

              {/* Intro */}
              <section className="mb-14">
                <p className="text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  PMI于5月12日在成都高新区举办了2023 PMONG (PMO Networking Group)项目管理沙龙。麦嵩隆(MSOL)受邀参加本次活动，分享了全新的服务概念PMOaaS®(PMO as a Service)。
                </p>
              </section>

              {/* Decorative divider */}
              <div className="mb-14 flex items-center gap-4">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                <span className="h-2 w-2 rounded-full bg-accent/60" />
                <span className="h-[2px] flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
              </div>

              {/* Section: 开场致辞 */}
              <section className="mb-14">
                <h2 className="mb-6 text-xl font-bold text-slate-800 md:text-2xl">开场致辞</h2>
                <div className="md:flex md:items-start md:gap-8">
                  <div className="mb-6 md:mb-0 md:flex-1">
                    <p className="text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                      活动开场，PMI(中国)董事总经理陈永涛先生首先进行致辞。陈永涛先生表示项目管理没有国界，而本次沙龙是一个非常好的平台，可以分享PMI最核心的价值即知识体系的标准。
                    </p>
                  </div>
                  <figure className="md:w-[45%] md:flex-shrink-0">
                    <img
                      src={`${IMG_BASE}/img_01.jpg`}
                      alt="PMI(中国)董事总经理陈永涛先生进行发言"
                      className="w-full rounded-lg shadow-md"
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-center text-xs italic text-primary-dark/60">
                      PMI(中国)董事总经理陈永涛先生进行发言
                    </figcaption>
                  </figure>
                </div>
              </section>

              {/* Decorative divider */}
              <div className="mb-14 flex items-center gap-4">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                <span className="h-2 w-2 rounded-full bg-primary/50" />
                <span className="h-[2px] flex-1 bg-gradient-to-l from-accent/30 to-transparent" />
              </div>

              {/* Section: 主题演讲 — PMOaaS® (highlighted) */}
              <section className="relative mb-14 overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.03] to-primary/[0.05] p-6 md:p-10">
                {/* Highlight ribbon */}
                <div className="absolute -right-10 top-5 rotate-45 bg-accent px-10 py-1 text-xs font-bold text-white shadow-md">
                  PMOaaS®
                </div>

                <h2 className="mb-2 text-xl font-bold text-slate-800 md:text-2xl">主题演讲 — PMOaaS®</h2>
                <p className="mb-6 text-sm text-primary/70">助推项目零失败</p>

                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  在下午的主题发言中，麦嵩隆管理咨询总经理高桥先生，就《助推项目零失败~PMOaaS®》这一议题发表了演讲。
                </p>

                <figure className="mb-8">
                  <img
                    src={`${IMG_BASE}/img_02.jpg`}
                    alt="麦嵩隆管理咨询总经理高桥先生发表演讲"
                    className="w-full rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-center text-xs italic text-primary-dark/60">
                    麦嵩隆管理咨询总经理高桥先生发表演讲
                  </figcaption>
                </figure>

                <p className="mb-4 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  麦嵩隆意识到企业在项目管理中常常面临人员匮乏，过程混乱，技术落后等问题，导致项目无法顺利推进。为了应对这些困境，麦嵩隆提出了全新的服务概念PMOaaS®。
                </p>
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  PMOaaS®是基于麦嵩隆集团二十多年的项目管理经验提出的解决方案。本次分享主要就人员，过程，技术数据三个方面进行介绍。
                </p>

                <figure className="mb-8">
                  <img
                    src={`${IMG_BASE}/img_03.png`}
                    alt="PMOaaS介绍"
                    className="w-full rounded-lg shadow-md"
                    loading="lazy"
                  />
                </figure>

                {/* Key points highlight card */}
                <div className="mb-8 rounded-lg border-l-4 border-primary bg-white/80 p-5 shadow-sm">
                  <ul className="space-y-3 text-base leading-8 text-primary-dark/90">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>从人员角度，麦嵩隆独特的4大人才层级，对应了PMBOK第七版中的PMO关键能力</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>从过程角度，提出标准化、专业化、定制化概念以满足客户多样的需求</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>从技术和数据角度，通过导入最新技术，简化项目集管理、实现云协同管理、知识库标准化</span>
                    </li>
                  </ul>
                </div>

                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  PMOaaS®通过提供专业的一体化PMO咨询服务，支持企业降低项目管理成本，提高项目成功率，实现可持续发展。
                </p>

                <figure>
                  <img
                    src={`${IMG_BASE}/img_04.jpg`}
                    alt="MSOL总经理高桥先生就现场观众提问进行解答"
                    className="w-full rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-center text-xs italic text-primary-dark/60">
                    MSOL总经理高桥先生就现场观众提问进行解答
                  </figcaption>
                </figure>
              </section>

              {/* Decorative divider */}
              <div className="mb-14 flex items-center gap-4">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                <span className="h-2 w-2 rounded-full bg-accent/60" />
                <span className="h-[2px] flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
              </div>

              {/* Section: 媒体采访 */}
              <section className="mb-14">
                <h2 className="mb-6 text-xl font-bold text-slate-800 md:text-2xl">媒体采访</h2>
                <div className="md:flex md:flex-row-reverse md:items-start md:gap-8">
                  <div className="mb-6 md:mb-0 md:flex-1">
                    <p className="text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                      演讲结束后，高桥先生还接受了成都高新区的采访，针对中日企业合作需特别关注的要点，成都高新区企业开展中日企业合作的前景等问题，分享了多年的行业经验并提出了看法。
                    </p>
                  </div>
                  <figure className="md:w-[45%] md:flex-shrink-0">
                    <img
                      src={`${IMG_BASE}/img_05.jpg`}
                      alt="麦嵩隆管理咨询总经理高桥先生接受采访"
                      className="w-full rounded-lg shadow-md"
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-center text-xs italic text-primary-dark/60">
                      麦嵩隆管理咨询总经理高桥先生接受采访
                    </figcaption>
                  </figure>
                </div>
              </section>

              {/* Decorative divider */}
              <div className="mb-14 flex items-center gap-4">
                <span className="h-[2px] flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                <span className="h-2 w-2 rounded-full bg-primary/50" />
                <span className="h-[2px] flex-1 bg-gradient-to-l from-accent/30 to-transparent" />
              </div>

              {/* Section: 圆满结束 */}
              <section className="mb-14">
                <h2 className="mb-6 text-xl font-bold text-slate-800 md:text-2xl">圆满结束</h2>
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  活动最后，PMI西南地区负责人Mary女士对参与演讲的各位老师进行了颁奖，本次活动就此圆满结束。
                </p>
                <figure>
                  <img
                    src={`${IMG_BASE}/img_06.jpg`}
                    alt="颁奖合影"
                    className="w-full rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-center text-xs italic text-primary-dark/60">
                    左一：麦嵩隆管理咨询总经理高桥先生 左二：PMI西南地区负责人Mary女士
                  </figcaption>
                </figure>
              </section>

              {/* Closing text */}
              <section className="mb-10 rounded-lg border-l-4 border-accent bg-gradient-to-r from-accent/5 to-transparent py-5 pl-5 pr-4">
                <p className="text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  非常感谢PMI的邀请，麦嵩隆作为国内一家第三方PMO咨询服务企业，除了致力于向企业提供专业的咨询服务以外，也积极投身于分享PMO知识体系，行业信息等各项活动，为推动中国PMO事业的发展贡献一份力量。
                </p>
              </section>

              {/* Decorative GIF */}
              <div className="-mx-7 mb-12 md:-mx-14 lg:-mx-20">
                <img
                  src={`${IMG_BASE}/img_07.gif`}
                  alt="装饰动画"
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Footer */}
              <footer className="border-t border-slate-200 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-primary-dark/60 sm:flex-row sm:items-center">
                  <span className="font-bold text-slate-600">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/jD-sxnDJnfYKC04VAhh0fA"
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

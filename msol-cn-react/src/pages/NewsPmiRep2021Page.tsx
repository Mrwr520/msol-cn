import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';

const IMG_BASE = '/images/news/pmi-rep-2021';

/* ─── Newspaper-style decorative divider with center star ─── */
function StarDivider() {
  return (
    <div className="my-14 flex items-center justify-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/40" />
      <span className="text-lg text-[#d4af37]">★</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/40" />
    </div>
  );
}

/* ─── Section header with ★ ornament ─── */
function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-primary-dark md:text-2xl">
      <span className="text-[#d4af37]">★</span>
      <span>{children}</span>
    </h3>
  );
}

export default function NewsPmiRep2021Page() {
  useEffect(() => {
    document.title = 'MSOL应邀参加2021 PMI(中国) R.E.P大会 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">MSOL应邀参加2021 PMI(中国) R.E.P大会</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            MSOL应邀参加~2021 PMI(中国) R.E.P大会！
          </h1>
          <time dateTime="2021-04-26" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2021.04.26</time>
        </div>
      </section>

      {/* Content */}
      <main className="relative bg-[#fdfcfa] pb-16 lg:pb-24">
        {/* Subtle paper texture pattern via repeating radial gradient */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #8b7355 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="-mt-12 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <article>

              {/* Full-bleed banner */}
              <div className="-mx-7 -mt-10 mb-12 md:-mx-14 md:-mt-14 lg:-mx-20 lg:-mt-16">
                <img
                  src={`${IMG_BASE}/img_01.png`}
                  alt="2021 PMI(中国) R.E.P大会"
                  className="w-full"
                  loading="eager"
                />
              </div>

              {/* Section: 大会概要 */}
              <section className="mb-10">
                <SectionHeader>大会概要</SectionHeader>

                {/* Drop-cap first paragraph */}
                <p className="mb-6 text-base leading-8 text-ink/90 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-primary-dark md:text-[17px] md:leading-9">
                  2021年PMI（中国）注册教育机构合作伙伴大会（以下简称：R.E.P大会）于2021年4月26日在深圳大梅沙隆重举行，MSOL受邀参加本次大会。本次大会上，PMI（中国）董事总经理陈永涛先生、中国国际人才交流基金会副主任万金发先生、全美在线（北京）教育科技股份有限公司CEO丁建民先生先后上台致辞。
                </p>

                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  中国国际人才交流基金会副主任万金发先生在大会致辞中指出，PMP®认证引进中国21年，为国家培养出大量专业化人才，截止目前，中国大陆区参考PMI®认证人数已经超过74.5万人，有效持证人证达到43万人，占全球认证人数据的三分之一。
                </p>

                <figure className="my-10 mx-auto max-w-xl overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                  <img
                    src={`${IMG_BASE}/img_02.jpg`}
                    alt="PMI（中国）董事总经理陈永涛先生 致词"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-3 text-center text-sm text-ink/55">
                    PMI（中国）董事总经理陈永涛先生 致词
                  </figcaption>
                </figure>

                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  PMI（中国）董事总经理陈永涛先生在大会致辞中表示，截止目前，国内已经有120家R.E.P机构，分布在17个省份，23个城市。当前企业对项目管理的需求和项目经理的要求越来越高，这就需要R.E.P.机构在提升PMP®培训人员数量的同时，更加提升培训质量。随着报考人数规模扩大，经摸底全国现有PMP讲师约360人，今年内会启动PMP讲师的认证工作，把控培训市场的教学质量。
                </p>
              </section>

              <StarDivider />

              {/* Section: MSOL所得荣誉 — highlight gradient border box */}
              <section className="mb-10">
                <SectionHeader>MSOL所得荣誉</SectionHeader>

                <div className="rounded-xl p-[2px] bg-gradient-to-br from-[#d4af37] via-primary-dark to-[#d4af37]">
                  <div className="rounded-[10px] bg-white px-6 py-8 md:px-10 md:py-10">
                    <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      在本次大会上，PMI颁发了优秀R.E.P奖，杰出R.E.P奖，PMI(中国)项目管理大会最佳支持奖。MSOL中国荣获2020年PMI(中国)项目管理大会最佳支持奖。MSOL中国总经理高桥辰生先生代表公司上台领奖。
                    </p>

                    <figure className="overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                      <img
                        src={`${IMG_BASE}/img_03.jpg`}
                        alt="MSOL中国总经理高桥辰生先生代表公司上台领奖"
                        className="w-full"
                        loading="lazy"
                      />
                      <figcaption className="px-5 py-3 text-center text-sm text-ink/55">
                        MSOL中国总经理高桥辰生先生代表公司上台领奖
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </section>

              <StarDivider />

              {/* Section: MSOL项目管理培训服务 */}
              <section className="mb-10">
                <SectionHeader>敬请期待！MSOL项目管理培训服务</SectionHeader>

                <p className="mb-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  麦嵩隆管理咨询(上海)有限公司是日本著名管理咨询公司MSOL集团在中国的子公司。MSOL中国自2018年创立至今，秉承&ldquo;让管理、成为推动世界进步的引擎&rdquo;的经营理念，专注于第三方PMO咨询服务，已经助推多家客户的项目走向成功。随着MSOL中国的快速发展壮大，我们意识到作为专业的PMO咨询服务公司，除了为我们的企业客户提供专业的项目管理知识培训之外，我们也有责任充当社会的PMO，为所有有志于从事项目管理工作的人士，或正在从事项目管理的职场人员提供一个学习的平台。
                </p>

                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  区别于传统的纯理论型、应试型项目管理教育培训，MSOL中国希望通过该平台将我们基于实践的项目管理成功经验分享给社会大众。通过我们提供的培训服务，您可以学习并掌握能够立即用于实践的项目管理方法和工具。目前MSOL中国已经在积极申请成为PMI(中国)注册教育机构，敬请期待！
                </p>

                {/* Inset centered image */}
                <div className="my-10 flex justify-center">
                  <img
                    src={`${IMG_BASE}/img_04.png`}
                    alt="MSOL培训服务介绍"
                    className="max-w-md w-full rounded-lg border border-ink/5"
                    loading="lazy"
                  />
                </div>
              </section>

              <StarDivider />

              {/* Section: PMONG活跃企业成员 */}
              <section className="mb-10">
                <SectionHeader>MSOL被评为PMONG活跃企业成员</SectionHeader>

                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  PMO交流社区(Project Management Office Networking Group，简称PMONG)是PMI(中国)为组织和企业专门搭建的沟通平台，旨在提供企业PMO管理人员及管理团队一个多元化的跨行业交流圈。MSOL作为一家提供第三方PMO咨询服务公司一直以来都非常积极地参与PMONG组织的各类活动，与国内外一些著名企业的PMO高层管理人员或组织共同探讨释疑，交流分享PMO项目管理知识和成功经验。在本次大会上，PMI(中国)也将MSOL评为PMONG活跃企业成员的一员。
                </p>

                {/* Full-width image */}
                <div className="-mx-7 mb-8 md:-mx-14 lg:-mx-20">
                  <img
                    src={`${IMG_BASE}/img_05.jpg`}
                    alt="PMONG活跃企业成员"
                    className="w-full"
                    loading="lazy"
                  />
                </div>

                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  作为PMONG的活跃企业，MSOL今后会以上海地区为中心积极协助PMONG推进、组织各类PMO交流、分享活动。想要及时了解相关活动信息，快关注MSOL官方微信公众号吧！
                </p>
              </section>

              {/* Closing decorations */}
              <div className="-mx-7 my-10 md:-mx-14 lg:-mx-20">
                <img
                  src={`${IMG_BASE}/img_00.gif`}
                  alt=""
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="-mx-7 mb-10 md:-mx-14 lg:-mx-20">
                <img
                  src={`${IMG_BASE}/img_06.gif`}
                  alt=""
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <div className="-mx-7 mb-10 md:-mx-14 lg:-mx-20">
                <img
                  src={`${IMG_BASE}/img_07.png`}
                  alt=""
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Footer */}
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/nwQqoNsjybnaSyC6AqEwNw"
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

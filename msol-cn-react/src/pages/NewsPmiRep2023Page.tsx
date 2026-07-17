import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';

const IMG_BASE = '/images/news/pmi-rep-2023';

export default function NewsPmiRep2023Page() {
  useEffect(() => {
    document.title = 'MSOL受邀参加2023 PMI(中国) R.E.P大会 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">MSOL受邀参加2023 PMI(中国) R.E.P大会</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            MSOL受邀参加~2023 PMI(中国) R.E.P大会！
          </h1>
          <time dateTime="2023-03-17" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2023.03.17</time>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="-mt-12 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <article>

              {/* Banner Image */}
              <div className="-mx-7 -mt-10 mb-12 md:-mx-14 md:-mt-14 lg:-mx-20 lg:-mt-16">
                <img
                  src={`${IMG_BASE}/img_00.jpg`}
                  alt="2023 PMI(中国) R.E.P大会"
                  className="w-full"
                  loading="eager"
                />
              </div>

              {/* Opening / Intro */}
              <section className="mb-14">
                <h2 className="mb-6 text-2xl font-bold leading-snug text-primary-dark md:text-3xl">
                  麦嵩隆管理咨询受邀参加2023年PMI(中国)R.E.P大会
                </h2>
                <p className="mb-5 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  时隔两年，PMI(中国)注册教育机构合作伙伴大会于2023年3月17日在北京嘉里大酒店举行。麦嵩隆管理咨询作为合作伙伴之一受邀参加了本次大会。
                </p>
                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  大会上PMI(中国)董事总经理陈永涛先生，中国国际人才交流基金会主任刘东金先生，PMI总裁兼首席执行官Pierre Le Manh先生依次上台致辞，就项目管理在中国地区的推广和未来发展趋势进行了重要发言。
                </p>
              </section>

              {/* Divider */}
              <div className="mb-14 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              </div>

              {/* Section: 陈永涛先生致辞 */}
              <section className="mb-14">
                <h3 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-ink md:text-2xl">
                  陈永涛先生致辞
                </h3>
                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  PMI(中国)董事总经理陈永涛先生在大会上致欢迎词，PMP认证自1999年引进中国以来，为我国培养了大批国际化项目管理专业人才。截至目前，全球总持证人数约为150万人，中国大陆地区有效持证人数已超过50万人，占全球总人数的三分之一以上。
                </p>
                <figure className="overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                  <img
                    src={`${IMG_BASE}/img_01.jpg`}
                    alt="PMI(中国)董事总经理陈永涛先生致辞"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-3 text-center text-sm text-ink/55">
                    PMI(中国)董事总经理陈永涛先生致辞
                  </figcaption>
                </figure>
              </section>

              {/* Divider */}
              <div className="mb-14 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              </div>

              {/* Section: Pierre Le Manh先生致辞 */}
              <section className="mb-14">
                <h3 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-ink md:text-2xl">
                  Pierre Le Manh先生致辞
                </h3>
                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  PMI总裁兼首席执行官Pierre Le Manh先生在致辞中表示，PMI不只是一个组织，更是创造了一个生态社区系统，时至今日，中国已成为世界领先的项目管理专业区之一。中国本土有全球最具创新力的项目，因此需要对项目管理进行更有力的推广，期待更多的项目管理专业人士在数字化建设中贡献更大的力量。尤其在人工智能领域，以敏捷的方法来应对快速变化的国际环境。
                </p>
                <figure className="overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                  <img
                    src={`${IMG_BASE}/img_02.jpg`}
                    alt="PMI总裁兼首席执行官Pierre Le Manh先生致辞"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-3 text-center text-sm text-ink/55">
                    PMI总裁兼首席执行官Pierre Le Manh先生致辞
                  </figcaption>
                </figure>
              </section>

              {/* Pull Quote */}
              <blockquote className="my-14 border-l-4 border-accent bg-[#f8fafb] px-8 py-6 text-center md:px-12">
                <p className="text-lg font-medium leading-9 text-primary-dark md:text-xl md:leading-10">
                  "中国已成为世界领先的项目管理专业区之一，期待更多的项目管理专业人士在数字化建设中贡献更大的力量。"
                </p>
                <cite className="mt-4 block text-sm not-italic text-ink/50">—— Pierre Le Manh, PMI总裁兼首席执行官</cite>
              </blockquote>

              {/* Divider */}
              <div className="mb-14 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              </div>

              {/* Section: 签约仪式 */}
              <section className="mb-14">
                <h3 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-ink md:text-2xl">
                  签约仪式
                </h3>
                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  本次大会上还进行了PMI(中国)和中国国际人才交流基金会的"PMI认证项目合作协议签约仪式"，通过开展更加深入及长期的合作，助力项目管理专业人士为中国信息技术、能源、金融服务、工程建筑、航天、政府等各行各业组织的发展贡献力量。
                </p>
                <figure className="overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                  <img
                    src={`${IMG_BASE}/img_03.jpg`}
                    alt="PMI认证项目合作协议签约仪式"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-3 text-center text-sm text-ink/55">
                    PMI认证项目合作协议签约仪式
                  </figcaption>
                </figure>
              </section>

              {/* Divider */}
              <div className="mb-14 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              </div>

              {/* Section: PMI全球最新发展 */}
              <section className="mb-14">
                <h3 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-ink md:text-2xl">
                  PMI全球最新发展
                </h3>
                <p className="mb-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  下午的会议上，PMI(中国)渠道部经理邵华嫣女士对PMI全球最新发展做了分享。中国大陆PMP认证考试将新版考试内容贯穿价值交付范围，包括预测、敏捷和混合的方法，分布在三个考试领域。新版PMI人才三角变更为：工作方式Ways of Working、商业敏锐度Business Acumen、影响力技能Power Skills。
                </p>
                <figure className="mb-8 overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                  <img
                    src={`${IMG_BASE}/img_04.jpg`}
                    alt="PMI（中国）渠道部经理邵华嫣女士发言"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-3 text-center text-sm text-ink/55">
                    PMI（中国）渠道部经理邵华嫣女士发言
                  </figcaption>
                </figure>

                <p className="mb-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  《PMBOK指南(第七版)》的中文版和英文版书籍已正式引入中国大陆地区，并将从2023年8月起，成为项目管理专业人士(PMP)认证考试等PMI认证的考试参考资料之一。
                </p>

                {/* Styled bullet points */}
                <div className="rounded-lg bg-[#f5f8fb] px-6 py-6 md:px-8">
                  <ul className="space-y-5">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-base leading-8 text-ink/90">
                        《PMBOK指南（第六版）》中的关键知识仍然有效。同时，PMI认可和支持第六版中的过程组模型的有效性和可靠性，正在开发过程组新资源，希望可以尽快面世。
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-base leading-8 text-ink/90">
                        PMI的认证考试是给予各项认证的《考试内容大纲》，并从现实工作生活实践中汲取的行业知识而制定的，而非来自于《PMBOK指南》本身。
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-base leading-8 text-ink/90">
                        考生可基于当前版本《考试内容大纲》了解备考信息。如果未来《PMP考试内容大纲》等更新，PMI将另行发布。
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Divider */}
              <div className="mb-14 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              </div>

              {/* Section: 颁奖 */}
              <section className="mb-14">
                <h3 className="mb-6 border-l-4 border-accent pl-4 text-xl font-bold text-ink md:text-2xl">
                  颁奖
                </h3>
                <p className="mb-8 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  大会上对2022年度和2023年度的优秀机构进行了颁奖，麦嵩隆管理咨询在本次大会上荣获2023年度"大型活动最佳支持奖"。
                </p>
                <figure className="overflow-hidden rounded-lg border border-ink/5 bg-[#fafbfc]">
                  <img
                    src={`${IMG_BASE}/img_05.jpg`}
                    alt="PMI总裁兼首席执行官Pierre Le Manh先生，PMI（中国）董事总经理陈永涛先生为获奖机构颁奖"
                    className="w-full"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-4 text-center text-sm leading-6 text-ink/55">
                    <p>PMI总裁兼首席执行官Pierre Le Manh先生，PMI（中国）董事总经理陈永涛先生为获奖机构颁奖</p>
                    <p className="mt-1 text-xs text-ink/45">
                      PMI（中国）董事总经理陈永涛先生（左一），麦嵩隆管理咨询董事总经理高桥辰生先生（右二），PMI总裁兼首席执行官Pierre Le Manh先生（右一）
                    </p>
                  </figcaption>
                </figure>
              </section>

              {/* Pull Quote - Award highlight */}
              <blockquote className="my-14 border-l-4 border-primary bg-[#f8fafb] px-8 py-6 text-center md:px-12">
                <p className="text-lg font-medium leading-9 text-primary-dark md:text-xl md:leading-10">
                  "麦嵩隆管理咨询荣获2023年度'大型活动最佳支持奖'"
                </p>
              </blockquote>

              {/* Closing */}
              <section className="mb-10">
                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  感谢PMI对麦嵩隆的认可，麦嵩隆作为国内首家第三方PMO咨询公司，今后也将以更专业的态度向企业提供PMO咨询服务，建立更为高效的管理过程以助力项目的成功。
                </p>
              </section>

              {/* Decorative GIF */}
              <div className="-mx-7 mb-10 md:-mx-14 lg:-mx-20">
                <img
                  src={`${IMG_BASE}/img_06.gif`}
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
                    href="https://mp.weixin.qq.com/s/1mYwLO53RmLCarpihfyssQ"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary-dark"
                  >
                    微信公众号 ↗
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

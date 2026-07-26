import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const IMG_BASE = assetUrl('/images/news/pmi-2024');

export default function NewsPmiConference2024Page() {
  useEffect(() => {
    document.title = '【项有所成・行以致远】2024年PMI项目管理大会亮点集锦 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">2024年PMI项目管理大会亮点集锦</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            【项有所成・行以致远】2024年PMI项目管理大会亮点集锦
          </h1>
          <time dateTime="2024-11-21" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2024.11.21</time>
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
                  src={`${IMG_BASE}/img_01.png`}
                  alt="2024年PMI项目管理大会"
                  className="w-full"
                  loading="eager"
                />
              </div>

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  PMI(中国)大会于2024年11月9日至10日，首次在美丽的花城广州隆重召开，来自政府机构、PMI全球、世界500强企业、各大高校重磅嘉宾及业内杰出实践者和项目管理专家，与千余名项目管理从业者齐聚一堂，共同探讨专业人士如何在当前环境下最大化实现项目成功，实现项目与职业生涯长远发展。
                </p>
                <p className="mt-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <strong className="text-primary">麦嵩隆管理咨询</strong>作为合作伙伴之一，荣幸受邀参加本次大会。
                </p>
              </section>

              {/* Timeline Content */}
              <div className="relative ml-4 border-l-2 border-primary/20 pl-8 md:ml-6 md:pl-10">

                {/* Item 01 */}
                <div className="relative mb-12">
                  <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">01</span>
                  <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    中国国际人才交流基金会主任<strong>刘东金先生</strong>在致辞中回顾了PMI先进知识体系引入中国25年来的演变历程。展望未来，基金会还将和PMI深化合作，引进PMO知识体系和认证，与各方一道，共同谱写项目管理发展的新篇章，从更大范围、更宽领域、更深层次拓展国际先进知识体系的引进、推广交流和国际化人才培养工作。
                  </p>
                  <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                    <img src={`${IMG_BASE}/img_02.png`} alt="刘东金先生致辞" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                  </div>
                </div>

                {/* Item 02 */}
                <div className="relative mb-12">
                  <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">02</span>
                  <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    PMI副总裁・PMI(中国)董事总经理<strong>陈永涛先生</strong>立足中国，详细阐述了PMI在中国的发展历程。并重申PMI愿同中国国际人才交流基金会和各方一道，为广大项目人提供资源和技术支持，推动组织新技术和项目人才能力提升，实现中国项目管理长远发展。
                  </p>
                  <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                    <img src={`${IMG_BASE}/img_03.png`} alt="陈永涛先生演讲" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                  </div>
                </div>

                {/* Item 03 */}
                <div className="relative mb-12">
                  <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">03</span>
                  <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    PMI Chief of Staff to the CEO <strong>Lenka Pincot女士</strong>则从全球视角出发，分享了PMI在全球项目管理领域的思想领导力和核心洞察。
                  </p>
                  <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                    <img src={`${IMG_BASE}/img_04.png`} alt="Lenka Pincot女士演讲" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                  </div>
                </div>

                {/* Item 04 */}
                <div className="relative mb-12">
                  <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">04</span>
                  <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    Oracle Vice President Asia, Construction and Engineering <strong>Boris Marrone先生</strong>聚焦工程项目管理的技术应用，带来了《关键数据驱动成功 - 从F1赛场到工程项目管理的制胜之道》的主题分享。
                  </p>
                  <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                    <img src={`${IMG_BASE}/img_05.png`} alt="Boris Marrone先生演讲" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                  </div>
                </div>

                {/* Item 05 */}
                <div className="relative mb-12">
                  <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">05</span>
                  <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    2024年度PMI(中国)项目管理大奖年度PMO和年度项目大奖得主代表也分别进行了题为《集成整合下的国际化项目管理实践》《"智·融·通"释放新质生产力，打造马来西亚第一电信网络》的国之重器行业实践分享，并与PMI(中国)项目管理大奖评审委员，清华大学长聘教授、博士生导师<strong>强茂山先生</strong>展开了一场超级项目高峰对话。与会者全神贯注，时而凝神倾听，时而举起手机拍照记录，现场气氛十分热烈。
                  </p>
                  <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                    <img src={`${IMG_BASE}/img_06.png`} alt="超级项目高峰对话" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                  </div>
                </div>

                {/* Item 06 */}
                <div className="relative mb-12">
                  <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">06</span>
                  <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    围绕大会主题<strong className="text-primary">"项有所成，行以致远"</strong>，大会共邀请了36位海内外项目管理专家、500强企业高管、行业卓越实践者，从趋势解读、组织最佳实践、个人职业发展路径与方式等诸多领域，分别在主论坛和三大分论坛进行现场分享。
                  </p>
                  <p className="mb-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    参会嘉宾们不仅能现场聆听精彩的演讲，还可以利用会间休息的时间和演讲嘉宾互动交流。每一场演讲结束，都能看到众多参会人根据个人感兴趣的演讲主题在不同分论坛之间穿梭，不愿错过任何一场精彩分享。
                  </p>

                  {/* 图片组 with captions */}
                  <div className="space-y-6">
                    <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_07.png`} alt="高桥辰生先生和陈永涛先生亲切交谈" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                        麦嵩隆管理咨询总裁高桥辰生先生和陈永涛先生亲切交谈
                      </figcaption>
                    </figure>
                    <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_08.png`} alt="钟一鸣先生分享" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                        以PMI 亚洲区导师钟一鸣先生为代表的人才技能相关主题分享
                      </figcaption>
                    </figure>
                    <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_09.png`} alt="参会人员络绎不绝" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                        参会人员络绎不绝
                      </figcaption>
                    </figure>
                    <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_10.png`} alt="会场入口" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                        会场入口
                      </figcaption>
                    </figure>
                  </div>
                </div>

              </div>

              {/* Closing */}
              <section className="mb-10 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8">
                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  至此，2024年度PMI项目管理大会成功闭幕，各行业领军人物和学术界精英带来的分享给大家留下了深刻的印象。<strong className="text-primary">期待明年2025 PMI项目管理大会再次相聚!</strong>
                </p>
              </section>

              {/* QR Code Section */}
              <section className="mb-10 text-center">
                <p className="mb-4 text-sm text-ink/70">更多有趣的PMO项目管理实战干货内容</p>
                <p className="mb-4 text-sm text-ink/70">请关注【PMO达人阁】公众号 & 视频号~</p>
                <img src={`${IMG_BASE}/img_11.png`} alt="PMO达人阁二维码" className="mx-auto h-32 w-32 rounded-lg" loading="lazy" />
              </section>

              {/* Footer */}
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/r89mm7YBNPCY8DtEPypNOQ"
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

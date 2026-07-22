import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const IMG_BASE = assetUrl('/images/news/pmi-conference-2023');

export default function NewsPmiConference2023Page() {
  useEffect(() => {
    document.title = '【数智时代・汇创未来】2023年PMI项目管理大会亮点集锦 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">2023年PMI项目管理大会亮点集锦</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            【数智时代・汇创未来】2023年PMI项目管理大会亮点集锦
          </h1>
          <time dateTime="2023-11-20" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2023.11.20</time>
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
                  src={`${IMG_BASE}/img_00.jpg`}
                  alt="2023年PMI项目管理大会"
                  className="w-full"
                  loading="eager"
                />
              </div>

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  暌违2年，2023年11月18日，PMI项目管理大会再次回归，本次大会在中国最大的经济中心——上海召开。大会邀请了标杆企业、行业领袖、权威专家、业界翘楚以及众多项目管理从业者。
                </p>
              </section>

              {/* 精彩预告 Tip Box */}
              <section className="mb-14 overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">精彩预告</span>
                  </div>
                  <img src={`${IMG_BASE}/img_01.png`} alt="精彩预告装饰" className="mx-auto mb-5 w-full max-w-sm" loading="lazy" />
                  <p className="mb-5 text-base leading-8 text-ink/90">
                    为响应参会粉丝的强烈要求，麦嵩隆后续会在微信公众号分享本次演讲的PMOaaS的详细内容。关注了麦嵩隆公众号的粉丝还能获得完整PMO成熟度报告！
                  </p>
                  <img src={`${IMG_BASE}/img_02.jpg`} alt="抽奖通知" className="mb-5 w-full rounded-lg" loading="lazy" />
                  <p className="rounded-lg bg-white/70 p-4 text-sm leading-7 text-ink/70">
                    ※本次PMI大会麦嵩隆展台共抽出2名大奖，分别是280号（已领取）和181号（未领取），请拿到贴有181号标签文件夹的幸运粉丝私信联系我们，确认奖品发放事宜。
                  </p>
                </div>
              </section>

              {/* DAY 1 Section */}
              <section className="mb-16">
                <div className="mb-10 rounded-xl bg-gradient-to-r from-primary-dark to-primary px-6 py-5 text-white shadow-lg md:px-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">DAY 1</p>
                  <h2 className="mt-1 text-xl font-bold md:text-2xl">2023/11/18 首日亮点活动</h2>
                </div>

                {/* Timeline */}
                <div className="relative ml-4 border-l-2 border-primary/20 pl-8 md:ml-6 md:pl-10">

                  {/* Item 01 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">01</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      13:30，随着大会正式开幕，PMI(中国)董事总经理陈永涛先生首先进行了欢迎致辞。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_03.jpg`} alt="陈永涛先生欢迎致辞" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 02 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">02</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      中国国际人才交流基金会主任刘东金先生发表了大会致辞。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_04.jpg`} alt="刘东金先生大会致辞" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 03 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">03</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      14:00，Lenka Pincot女士，作为PMI Chief of Staff to the CEO分享了全球项目管理前沿趋势。她的演讲中介绍了项目管理的演变，帮助大家理解终身学习的重要性。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_05.jpg`} alt="Lenka Pincot女士演讲" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 04 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">04</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      甲骨文亚洲副总裁Boris Marrone先生分享了借助项目与组合管理来优化资产投资项目与控制风险的四个方法。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_06.jpg`} alt="Boris Marrone先生演讲" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 05 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">05</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      演讲结束后，令人激动人心的一刻来临——2023年度PMI(中国)项目管理大奖颁奖典礼。这次揭晓的奖项分别有高校PMO管理创新奖、优秀PMO奖、杰出PMO奖等多个奖项。这些奖项表彰他们在项目管理领域中做出的贡献。
                    </p>
                    <div className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_07.jpg`} alt="颁奖典礼" className="mb-3 w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <div className="grid grid-cols-2 gap-3 px-7 md:px-14 lg:px-20">
                        <img src={`${IMG_BASE}/img_08.jpg`} alt="颁奖现场" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                        <img src={`${IMG_BASE}/img_09.jpg`} alt="颁奖现场" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  {/* Item 06 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">06</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      短暂的茶歇后，首都信息发展股份有限公司原董事长陈信祥先生开始了题为国之重器行业前沿的分享。演讲揉合了易经、现代物理学、心理学、项目管理理论，提出寻求全面定量评估和提升项目领导力的方法的重要性。围绕国之重器的主题，中国三峡建工（集团）有限公司董事长李斌先生、科大讯飞股份有限公司董事、高级副总裁兼CFO段大为先生、中兴通讯高级副总裁和全球服务总裁孙方平先生也分别进行了分享。
                    </p>
                    <div className="-mx-7 md:-mx-14 lg:-mx-20">
                      <div className="grid grid-cols-2 gap-3 px-7 md:px-14 lg:px-20">
                        <img src={`${IMG_BASE}/img_10.jpg`} alt="国之重器分享" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                        <img src={`${IMG_BASE}/img_11.jpg`} alt="国之重器分享" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3 px-7 md:px-14 lg:px-20">
                        <img src={`${IMG_BASE}/img_12.jpg`} alt="高峰对话" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                        <img src={`${IMG_BASE}/img_13.jpg`} alt="高峰对话" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  {/* Item 07 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">07</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      第一天的大会活动过半，Benjamin Breen，PMI的Global Director Construction带来了PMI最新的建筑认证——PMI-CPTM来塑造行业未来，打造卓越的项目。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_14.jpg`} alt="Benjamin Breen演讲" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 08 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md md:-left-[3.35rem]">08</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      第一天大会终于接近尾声，在超级项目高峰对话环节，由清华大学教授强茂山先生对话PMI(中国)项目管理大奖获奖企业代表。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_15.jpg`} alt="超级项目高峰对话" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 09 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">09</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      晚上18:00，PMI项目管理大会首日顺利结束。第二天有更多精彩的活动！
                    </p>
                    <div className="space-y-5">
                      <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                        <img src={`${IMG_BASE}/img_16.jpg`} alt="陈永涛先生、Lenka Pincot女士光临麦嵩隆展位合影" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                        <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                          陈永涛先生、Lenka Pincot女士光临麦嵩隆(MSOL)展位，并与麦嵩隆中国总裁高桥辰生先生合影
                        </figcaption>
                      </figure>
                      <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                        <img src={`${IMG_BASE}/img_17.jpg`} alt="麦嵩隆管理层合影" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                        <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                          左起：麦嵩隆中国总裁高桥辰生先生、麦嵩隆日本董事长兼CEO高桥信也先生、麦嵩隆日本专务董事兼CFO玉井邦昌先生
                        </figcaption>
                      </figure>
                      <figure className="-mx-7 md:-mx-14 lg:-mx-20">
                        <img src={`${IMG_BASE}/img_18.jpg`} alt="高桥辰生先生签名售书" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                        <figcaption className="mt-2 px-7 text-center text-xs italic text-ink/50 md:px-14 lg:px-20">
                          麦嵩隆展位上，麦嵩隆中国总裁高桥辰生先生为热心观众签名售书
                        </figcaption>
                      </figure>
                    </div>
                  </div>

                </div>
              </section>

              {/* DAY 2 Section */}
              <section className="mb-16">
                <div className="mb-10 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-5 text-white shadow-lg md:px-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">DAY 2</p>
                  <h2 className="mt-1 text-xl font-bold md:text-2xl">2023/11/19 终日亮点活动</h2>
                </div>

                <p className="mb-10 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  2023年11月19日，PMI项目管理大会的第二天，当天的日程分为四大分论坛，分别是：PMO论坛、行业风云、职业脉搏和制胜未来。每个分论坛都邀请了行业巨擘发表了演讲。
                </p>

                {/* Timeline */}
                <div className="relative ml-4 border-l-2 border-accent/30 pl-8 md:ml-6 md:pl-10">

                  {/* Item 01 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">01</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      9:10，在PMO论坛，PMI(中国)董事总经理陈永涛先生、PMI Chief of Staff to the CEO Lenka Pincot女士、麦嵩隆管理咨询(上海)有限公司总裁高桥辰生先生逐一畅谈了PMO国内外趋势。陈永涛先生首先分享了中国PMO的发展趋势，谈到了PMO重要性的同时也谈到了PMO遇到的挑战。他说到，需要企业高层认识到PMO的重要性并提供支持，以及PMO人才的稀缺。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_19.jpg`} alt="PMO论坛 陈永涛先生" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 02 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">02</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      PMI Chief of Staff to the CEO，Lenka Pincot女士从全球视角介绍了PMO的趋势。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_20.jpg`} alt="Lenka Pincot女士 PMO趋势" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 03 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">03</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      最后，麦嵩隆管理咨询(上海)有限公司总裁高桥辰生先生发表了题为《项目管理的推进力~ PMO as a Service (PMOaaS®)》的演讲，为大家带了PMOaaS这个崭新的理念，PMOaaS相较于传统PMO的优势点以及麦嵩隆的PMOaaS落地方案。
                    </p>
                    <div className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_21.jpg`} alt="高桥辰生先生 PMOaaS演讲" className="mb-3 w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <img src={`${IMG_BASE}/img_22.jpg`} alt="PMOaaS演讲现场" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 04 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">04</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      MSOL是全球首家专注于提供第三方PMO咨询的上市公司Management Solutions Co., Ltd.（简称MSOL，股票代号7033.T）。本次MSOL中国分公司作为PMI项目管理大会的钻石赞助商出席大会，并在现场设置了展位，吸引了络绎不绝的观众前来交流。展台上我司从业PMO十数年的专业人员接待来宾的问询和业务洽谈。我司出版的项目管理书籍也让对PMO有浓厚兴趣的来宾争相购买。
                    </p>
                    <div className="-mx-7 md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_23.jpg`} alt="MSOL展位" className="mb-3 w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                      <div className="grid grid-cols-2 gap-3 px-7 md:px-14 lg:px-20">
                        <img src={`${IMG_BASE}/img_24.jpg`} alt="展位交流" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                        <img src={`${IMG_BASE}/img_25.jpg`} alt="展位交流" className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  {/* Item 05 */}
                  <div className="relative mb-12">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md md:-left-[3.35rem]">05</span>
                    <p className="mb-4 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                      11月19日当天，MSOL展位上还设置了2场抽奖环节，为到场的来宾送出了苹果大奖。
                    </p>
                    <div className="-mx-7 overflow-hidden md:-mx-14 lg:-mx-20">
                      <img src={`${IMG_BASE}/img_26.jpg`} alt="抽奖环节" className="w-full transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </div>
                  </div>

                  {/* Item 06 */}
                  <div className="relative mb-4">
                    <span className="absolute -left-[2.85rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary-dark text-xs font-bold text-white shadow-md md:-left-[3.35rem]">06</span>
                    <div className="rounded-lg border-l-4 border-accent bg-gradient-to-r from-accent/5 to-transparent py-4 pl-5 pr-4">
                      <p className="text-base leading-8 text-ink/80 md:text-[17px] md:leading-9">
                        至此，2023年度PMI项目管理大会圆满结束。各行业领军人物和学术界精英带来的分享应该也为大家带了深刻的印象，让各位大有启发。我们明年2024 PMI项目管理大会再见！
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* Footer */}
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/ifN70VL1il_sl1tw48u5gw"
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

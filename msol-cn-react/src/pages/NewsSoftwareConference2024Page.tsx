import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const IMG_BASE = assetUrl('/images/news/software-conference-2024');

export default function NewsSoftwareConference2024Page() {
  useEffect(() => {
    document.title = 'MSOL助力第三届中国国际软件发展大会高峰论坛 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">MSOL助力第三届中国国际软件发展大会高峰论坛</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            【发现机遇】MSOL助力第三届中国国际软件发展大会高峰论坛
          </h1>
          <time dateTime="2024-04-25" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2024.04.25</time>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="-mt-12 bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <article>

              {/* 头图区域：背景图 + gif覆盖 + 文字 */}
              <div className="relative mb-10 overflow-hidden rounded-lg">
                <img src={`${IMG_BASE}/img_02.jpg`} alt="第三届中国国际软件发展大会高峰论坛现场" className="w-full" loading="lazy" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  <img src={`${IMG_BASE}/img_00.gif`} alt="装饰动画" className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-80" loading="lazy" />
                  <div className="relative z-10 text-center text-white">
                    <p className="text-sm tracking-widest md:text-base">发现机遇</p>
                    <p className="mt-1 text-xs text-white/70">-</p>
                    <p className="mt-2 text-lg font-bold md:text-2xl">MSOL助力</p>
                    <p className="text-lg font-bold md:text-2xl">第三届中国国际软件发展大会高峰论坛</p>
                  </div>
                </div>
              </div>

              {/* 分隔装饰 */}
              <div className="mb-8 text-center">
                <img src={`${IMG_BASE}/img_01.gif`} alt="装饰" className="mx-auto w-full max-w-xs" loading="lazy" />
              </div>

              {/* Section 1: 会议梗概 */}
              <section className="mb-12">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">1</span>
                  <h2 className="text-2xl font-bold text-ink">会议梗概</h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <p>
                    第三届中国国际软件发展大会高峰论坛于4月24-25日，在北京国家会议中心隆重举行。会议由中国软件行业协会主办，同时也是中国软件行业协会成立40周年的纪念。
                  </p>
                  <p>
                    本届大会不仅聚焦国内，同时放眼海外，邀请了日本信息服务产业协会的专家，来进行大会讲题的分享。会议围绕"智能时代的软件产业"为主题，聚焦软件根技术、开源软件和生成式人工智能对全行业的根本性变革，探讨数据要素和未来产业对全行业的深远影响。
                  </p>
                </div>
              </section>

              {/* Section 2: MSOL-受邀演讲 */}
              <section className="mb-12">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">2</span>
                  <h2 className="text-2xl font-bold text-ink">MSOL - 受邀演讲</h2>
                </div>

                {/* 演讲现场照片 */}
                <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                  <img src={`${IMG_BASE}/img_03.jpg`} alt="高桥信也先生演讲现场" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_04.jpg`} alt="演讲现场" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_05.jpg`} alt="演讲现场" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_06.jpg`} alt="演讲现场" className="w-full rounded-lg" loading="lazy" />
                </div>
                <p className="mb-6 text-center text-xs text-ink/40">（向右滑动查看更多照片）</p>

                <div className="mb-6 rounded-lg bg-[#f0f5fa] p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary-dark">高桥信也先生演讲</h3>
                  <p className="text-sm font-medium text-primary">PMO的市场扩大和PMO的未来</p>
                </div>

                <div className="space-y-5 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <p>
                    Management Solutions Co.,Ltd.（下称MSOL）会长高桥信也先生，也受邀作为本次高峰论坛的讲者，就PMO市场的现状进行了阐述，对于PMO未来的市场情况进行了展望。同时就AI在咨询以及项目管理中的应用进行了说明。随着市场需求量的上升，对于如何进行精准的项目管理，AI软件和专业的咨询管理团队是不可或缺的。
                  </p>
                </div>

                {/* PROEVER */}
                <div className="mt-8 overflow-hidden rounded-lg border border-primary/20 bg-white">
                  <img src={`${IMG_BASE}/img_07.png`} alt="PROEVER介绍" className="w-full" loading="lazy" />
                  <div className="p-6">
                    <p className="text-base leading-8 text-ink/90">
                      <span className="font-bold text-ink">PROEVER®</span>是MSOL自行开发的一款AI软件，旨在提高组织成熟度，引领项目走向成功。
                    </p>
                  </div>
                </div>

                {/* PMOaaS */}
                <div className="mt-6 overflow-hidden rounded-lg border border-primary/20 bg-white">
                  <img src={`${IMG_BASE}/img_08.jpg`} alt="PMOaaS介绍" className="w-full" loading="lazy" />
                  <div className="p-6">
                    <p className="text-base leading-8 text-ink/90">
                      <span className="font-bold text-ink">PMOaaS®</span>，即PMO as a Service，这是MSOL提出的全新和灵活的PMO服务理念，可以使管理更快、更有效。
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                      <div className="rounded-md bg-[#f0f5fa] px-3 py-4">
                        <p className="text-sm font-bold text-primary-dark">服务多样</p>
                      </div>
                      <div className="rounded-md bg-[#f0f5fa] px-3 py-4">
                        <p className="text-sm font-bold text-primary-dark">人才丰富</p>
                      </div>
                      <div className="rounded-md bg-[#f0f5fa] px-3 py-4">
                        <p className="text-sm font-bold text-primary-dark">场地自由</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 更多现场照片 */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <img src={`${IMG_BASE}/img_09.jpg`} alt="现场瞬间" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_10.jpg`} alt="现场瞬间" className="w-full rounded-lg" loading="lazy" />
                  <img src={`${IMG_BASE}/img_11.jpg`} alt="现场瞬间" className="w-full rounded-lg" loading="lazy" />
                </div>
                <p className="mt-3 text-center text-xs text-ink/40">（向右滑动查看更多照片）</p>
                <p className="mt-1 text-center text-sm font-medium text-ink">更多现场瞬间一览</p>

                {/* MSOL社长 */}
                <div className="mt-8">
                  <img src={`${IMG_BASE}/img_12.jpg`} alt="MSOL社长金子啓先生" className="mb-4 w-full rounded-lg" loading="lazy" />
                  <p className="mb-4 text-sm font-bold text-ink">MSOL社长金子啓先生</p>
                  <div className="space-y-5 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                    <p>
                      在这个时代下，企业在追求业务精益求精的同时，对咨询管理服务也有了更高的需求。所以，搭配MSOL提出的"阁楼式"PMOaaS®解决方案，企业无需在组织内建立和维护完整的PMO团队，却可以更好地管理项目，提高项目交付效率和成果，同时降低不必要的成本支出。
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: 更多精彩 */}
              <section className="mb-12">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-ink">更多精彩</h2>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_13.jpg`} alt="吕卫锋发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">中国软件行业协会副理事长兼秘书长 吕卫锋</span> 正在进行开幕式发言
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_14.jpg`} alt="川本淳也发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">日本信息服务产业协会国际部部长 川本淳也</span> 正在进行开幕式发言
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_15.jpg`} alt="周密发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">IMPA SIG Software Global Head / 中国软协日本代表处主任 / 中国软协项目管理专委会副主任委员 周密</span> 正在进行开幕式发言
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_16.jpg`} alt="陈信祥发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">中国软协项目管理专委会专家组长 / 首信集团名誉董事长 陈信祥</span> 正在进行开幕式发言
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_17.jpg`} alt="陈宝国发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">中国软协常务副秘书长 / 中国软协项目管理专委会主任委员 陈宝国</span> 正在进行开幕式发言
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_18.jpg`} alt="张智祥发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">全国科技振兴城市经济研究会副秘书长 / 中国软协项目管理专委会专家 张智祥</span>
                        <br />他提出运用第三方PMO视角来帮助公司项目落地，成功率可以高达71%以上
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-lg bg-[#f0f5fa]">
                    <img src={`${IMG_BASE}/img_19.jpg`} alt="强茂山教授发言" className="w-full" loading="lazy" />
                    <div className="p-5">
                      <p className="text-sm leading-7 text-ink/70">
                        <span className="font-bold text-ink">中国软协项目管理专委会CPMM评估首席专家 / 清华大学强茂山教授</span> 为大会做了闭幕式发言
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 结语 */}
              <section className="mb-10 border-l-4 border-accent pl-6">
                <div className="space-y-5 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                  <p>
                    随着数智化时代的来临，怎样结合更有效，更精准的项目管理运营方式，对企业战略，组织和人才管理进行添砖加瓦，这是一次机遇，也是未来我们可以深度探讨的课题。
                  </p>
                  <p>
                    MSOL是全球首家专注于提供第三方PMO咨询的上市公司，Management Solutions Co.,Ltd.（简称MSOL，股票代号7033.T）。若有企业项目管理咨询需求，也可以直接联系我们，我们会有专人和您联络。
                  </p>
                </div>
              </section>

              {/* 尾部装饰 */}
              <div className="mb-8 text-center">
                <img src={`${IMG_BASE}/img_20.gif`} alt="装饰" className="mx-auto w-full max-w-xs" loading="lazy" />
              </div>
              <div className="-mx-7 mb-8 md:-mx-14 lg:-mx-20">
                <img src={`${IMG_BASE}/img_21.gif`} alt="装饰动画" className="w-full" loading="lazy" />
              </div>
              <div className="mb-8 text-center">
                <img src={`${IMG_BASE}/img_22.png`} alt="PMO达人阁" className="mx-auto w-32" loading="lazy" />
              </div>

              {/* Footer */}
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/dT9tIoiYqirhr7Wbuc4PGA"
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

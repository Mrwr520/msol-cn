import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const IMG_BASE = assetUrl('/images/news/ciie-2024');

export default function NewsCiie2024Page() {
  useEffect(() => {
    document.title = '邀请函 | 麦嵩隆管理咨询将首次亮相中国国际进口博览会 | 新闻 | Management Solutions （MSOL）';
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
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">进博会邀请函</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            邀请函 | 麦嵩隆管理咨询将首次亮相中国国际进口博览会
          </h1>
          <time dateTime="2024-10-31" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2024.10.31</time>
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
                  alt="进博会邀请函"
                  className="w-full"
                  loading="eager"
                />
              </div>

              {/* Invitation Images */}
              <div className="mb-10 space-y-4">
                <img src={`${IMG_BASE}/img_02.png`} alt="邀请函" className="w-full rounded-lg" loading="lazy" />
              </div>

              {/* Content */}
              <div className="space-y-6 text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                <p>嘿，项目小能手们！🎉</p>
                
                <p>你是否曾在项目执行的海洋中感到迷失方向，像是在玩一场"首尾难顾"的杂技？🤹‍♂️🤹‍♀️</p>
                
                <p>是否觉得每天的工作像复读机一样枯燥，即使拼尽全力，项目还是像顽皮的小猫一样乱窜，拖延成了家常便饭？🐈💨</p>
                
                <div className="rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 p-6 text-center">
                  <p className="text-xl font-bold text-primary">🚀 别担心，我们这里有解药！🚀</p>
                </div>
                
                <p>跳脱出你的工作椅，带上你的好奇心，来我们的展台一探究竟吧！我们将揭开项目管理办公室（PMO）的神秘面纱，带你领略如何用独立第三方的火眼金睛，洞察项目的每一个角落，解决那些让人头疼的疑难杂症，让项目像火箭一样直冲云霄，顺利成功！🚀🌈</p>
                
                <p className="text-center text-lg font-bold text-primary">👀 想要变身项目管理的超级英雄吗？🦸‍♂️🦸‍♀️</p>
              </div>

              {/* Event Details */}
              <div className="my-10 overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="p-6 md:p-8">
                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">📅</span>
                      <div>
                        <p className="text-xs text-ink/50">日期</p>
                        <p className="font-bold text-ink">2024年11月5日至10日</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">📍</span>
                      <div>
                        <p className="text-xs text-ink/50">地点</p>
                        <p className="font-bold text-ink">上海国家会展中心</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/70 p-4 text-center">
                    <p className="text-sm text-ink/70">展位号</p>
                    <p className="text-xl font-bold text-primary">3H馆_临港展示区7号展台</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                我们在这里等你，一起把项目管理变得轻松愉快，让成功不再是遥不可及的梦想！🎉🥳
              </p>
              
              <p className="mt-4 text-center text-base leading-8 text-ink/90 md:text-[17px] md:leading-9">
                期待在展会上与你相遇，一起探索项目管理的新天地！
              </p>

              {/* Contact Info */}
              <div className="mt-10 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 text-center md:p-8">
                <p className="text-lg font-bold text-primary">🌟 麦嵩隆管理咨询(上海)有限公司</p>
                <div className="mt-4 space-y-2 text-sm text-ink/70">
                  <p>电话：400-666-7959</p>
                  <p>邮箱：info@cn.msols.com</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="mt-8">
                <img src={`${IMG_BASE}/img_03.png`} alt="二维码" className="mx-auto max-w-md rounded-lg" loading="lazy" />
              </div>

              {/* Footer */}
              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a
                    href="https://mp.weixin.qq.com/s/Kiwz9ffm52piVWmhTevehQ"
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

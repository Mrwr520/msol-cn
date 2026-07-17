import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';

const IMG_BASE = '/images/news/software-annual-2021';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[2px] flex-1 bg-gradient-to-r from-primary to-primary/60" />
        <span className="h-3 w-3 rounded-full bg-primary" />
        <span className="h-[2px] flex-1 bg-gradient-to-l from-primary to-primary/60" />
      </div>
      <h3 className="text-center text-xl font-bold text-primary-dark md:text-2xl">{children}</h3>
      <div className="mt-4 flex items-center gap-3">
        <span className="h-[2px] flex-1 bg-gradient-to-r from-primary to-primary/60" />
        <span className="h-[2px] flex-1 bg-gradient-to-l from-primary to-primary/60" />
      </div>
    </div>
  );
}

function CaptionedImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-8 mx-auto max-w-2xl overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
      <img src={src} alt={alt} className="w-full" loading="lazy" />
      <figcaption className="px-5 py-3 text-center text-sm leading-6 text-primary-dark/70">{caption}</figcaption>
    </figure>
  );
}

export default function NewsSoftwareAnnual2021Page() {
  useEffect(() => {
    document.title = 'MSOL受邀参加2021中国软件产业年会 | 新闻 | Management Solutions (MSOL)';
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark pb-24 text-white md:pb-32 lg:pb-40">
        <div className="absolute -right-32 -top-44 h-[480px] w-[480px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-5xl px-6 pt-12 lg:pt-16">
          <nav className="mb-12 flex flex-wrap items-center gap-2 text-xs text-white/55">
            <Link to="/" className="text-white/55 hover:text-white">首页</Link>
            <span>/</span>
            <Link to="/news" className="text-white/55 hover:text-white">新闻</Link>
            <span>/</span>
            <span className="max-w-[16rem] truncate text-white/75 md:max-w-md">MSOL受邀参加2021中国软件产业年会</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7ba5e2]">活动资讯</span>
          </div>
          <h1 className="mt-7 max-w-4xl text-3xl font-bold leading-[1.45] tracking-wide text-white md:text-4xl lg:text-5xl">
            MSOL受邀参加～2021中国软件产业年会
          </h1>
          <time dateTime="2021-04-07" className="mt-8 block text-sm tabular-nums tracking-[0.16em] text-white/55">2021.04.07</time>
        </div>
      </section>

      <main className="bg-[#f5f8fb] pb-16 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="relative -mt-12 overflow-hidden bg-white px-7 py-10 shadow-[0_20px_60px_rgba(1,57,109,0.1)] md:-mt-16 md:px-14 md:py-14 lg:px-20 lg:py-16">
            <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-primary/10 to-transparent" />

            <article className="relative">
              <div className="-mx-7 -mt-10 mb-12 md:-mx-14 md:-mt-14 lg:-mx-20 lg:-mt-16">
                <img src={`${IMG_BASE}/img_00.png`} alt="大会现场" className="w-full" loading="eager" />
              </div>

              {/* 标题高亮卡片 */}
              <div className="my-10 rounded-xl bg-[#edf2f7] px-8 py-6 text-center md:px-12 md:py-8">
                <p className="text-xl font-bold leading-9 text-primary-dark md:text-2xl md:leading-10">
                  麦嵩隆受邀参加<br />2021中国软件产业年会
                </p>
              </div>
              <p className="mb-10 text-center text-base font-medium text-primary-dark/70">
                项目管理高峰论坛～"聚焦软件项目管理"
              </p>

              {/* 大会概要 */}
              <section className="mb-12">
                <SectionTitle>大会概要</SectionTitle>
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  2021年4月7日，中国软件产业年会在京开幕。大会由中国软件行业协会主办，是我国软件行业的专业会议。大会以"数字经济新时代～软件产业赋能高质量发展"为主题，共探"十四五"时期，软件行业发展新趋势与新机遇。
                </p>
                <div className="my-8 overflow-hidden rounded-lg">
                  <img src={`${IMG_BASE}/img_01.png`} alt="会场" className="w-full" loading="lazy" />
                </div>
                <p className="text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  作为2021年中国软件产业年会的项目管理高峰论坛，以"聚焦软件项目管理"为主题，邀请了项目管理业界专家、学者、企业高管共聚一堂，聚焦软件项目管理，结合国内外项目管理理论，分享软件与产业融合成功实践经验，共同推进中国软件项目管理能力的发展，为产业数字化转型注入新动能。
                </p>
              </section>

              {/* MSOL主题演讲 */}
              <section className="mb-12 -mx-7 rounded-lg bg-[#f7f9fc] px-7 py-10 md:-mx-14 md:px-14 md:py-12 lg:-mx-20 lg:px-20">
                <SectionTitle>MSOL主题演讲<br />PMO～引领项目取得成功</SectionTitle>
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  麦嵩隆管理咨询(上海)有限公司(公司英文简称MSOL)总经理高桥辰生先生受邀出席了本次项目管理高峰论坛，并发表了"PMO～引领项目取得成功"的主题演讲！分享了MSOL在PMO咨询服务行业中的经验和成果。
                </p>
                <div className="my-8 overflow-hidden rounded-lg">
                  <img src={`${IMG_BASE}/img_02.png`} alt="演讲横幅" className="w-full" loading="lazy" />
                </div>
                <div className="my-8 overflow-hidden rounded-lg">
                  <img src={`${IMG_BASE}/img_03.png`} alt="演讲现场" className="w-full" loading="lazy" />
                </div>
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  以下是高桥先生演讲当中的部分精彩内容:
                </p>
                <CaptionedImage src={`${IMG_BASE}/img_04.png`} alt="PMO六大职能" caption="MSOL定义的PMO六大职能：策略中心、规范中心、信息中心、协调中心、知识中心、能力中心" />
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  MSOL作为一家第三方PMO咨询服务公司，按照PMO的知识、技能、经验分为PMC、PMA、PJC、PJA四种类型。高桥先生也强调基于这个PMO能力模型，MSOL可以为我们的客户提供更加全面、精细化的咨询服务，传递更大的价值。
                </p>
                <CaptionedImage src={`${IMG_BASE}/img_05.png`} alt="PMO能力模型" caption="MSOL按PMO知识、技能、经验分为PMC、PMA、PJC、PJA四种类型" />
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  随后，高桥先生还介绍了当前MSOL的PMO所参与的各类咨询场景。主张MSOL的PMO有足够能力，在各种类型项目环境下以及在各种复杂协作的场景下，为我们客户提供作为PMO应该提供的支持。
                </p>
                <CaptionedImage src={`${IMG_BASE}/img_06.jpg`} alt="PMO咨询场景" caption="MSOL的PMO参与的各类咨询场景" />
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  最后，高桥先生的演讲在各位嘉宾及参与者的热烈掌声中结束。演讲结束后，主办方为高桥先生颁发了感谢状。
                </p>
                <div className="my-8 overflow-hidden rounded-lg">
                  <img src={`${IMG_BASE}/img_07.png`} alt="颁奖" className="w-full" loading="lazy" />
                </div>
              </section>

              {/* 精彩瞬间 */}
              <section className="mb-12">
                <SectionTitle>2021项目管理高峰论坛 精彩瞬间</SectionTitle>
                <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  在"聚焦软件项目管理"— 2021项目管理高峰论坛上，还邀请了多位嘉宾进行精彩致辞演讲。
                </p>
                <CaptionedImage src={`${IMG_BASE}/img_08.png`} alt="万金发先生致词" caption="中国国际人才交流基金会副主任万金发先生 致词" />
                <CaptionedImage src={`${IMG_BASE}/img_09.png`} alt="陈宝国先生致词" caption="中国软件行业协会常务副秘书长兼项目管理专业委员会主任委员陈宝国先生 致词" />
                <CaptionedImage src={`${IMG_BASE}/img_10.png`} alt="郭桂蓉院士致词" caption="中国工程院郭桂蓉院士 致词" />
                <CaptionedImage src={`${IMG_BASE}/img_11.png`} alt="陈永涛先生演讲" caption="PMI(中国)董事总经理陈永涛先生从国际视野阐述软件产业未来发展方向" />
                <p className="text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
                  作为软件项目管理专委会的专家组组长，首席名誉董事长陈信祥博士出席论坛并带来了《数字化转型与组织项目管理》主题演讲，对组织如何应对复杂的项目组合，如何有效加快数字化转型进行了精彩论述。
                </p>
              </section>

              {/* 尾部装饰 */}
              <div className="-mx-7 my-10 md:-mx-14 lg:-mx-20">
                <img src={`${IMG_BASE}/img_12.gif`} alt="" className="w-full" loading="lazy" />
              </div>
              <div className="-mx-7 mb-10 md:-mx-14 lg:-mx-20">
                <img src={`${IMG_BASE}/img_13.png`} alt="" className="w-full" loading="lazy" />
              </div>

              <footer className="mt-14 border-t border-primary-dark/10 pt-8">
                <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
                  <span className="font-bold text-ink/70">来源</span>
                  <a href="https://mp.weixin.qq.com/s/TqCRKIiZ64yEmZgyS5fHTg" target="_blank" rel="noreferrer" className="text-primary hover:text-primary-dark">PMO达人阁 微信公众号 ↗</a>
                </div>
                <Link to="/news" className="group inline-flex items-center text-sm font-bold text-primary-dark">
                  <span className="mr-3 inline-block rotate-180">
                    <svg viewBox="0 0 18 12" fill="none" className="h-3 w-4"><path d="M1 6h16M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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

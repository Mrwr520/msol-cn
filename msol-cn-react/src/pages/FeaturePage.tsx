import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { Arrow } from '../components/common/Arrow';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const COMPANY_LINKS = [
  {
    href: 'https://www.msols.com/business/',
    title: '业务介绍',
    desc: '除了主营的PMO咨询服务之外，我们还有培训体系搭建、系统软件交付等其他业务模块。',
  },
  {
    href: 'https://www.msols.com/company/',
    title: '公司信息',
    desc: '依托管理之力，为社会创造幸福价值。详解MSOL的组织架构、企业概况与发展沿革等内容。',
  },
  {
    href: 'https://www.msols.com/news/',
    title: '新闻',
    desc: '为您介绍MSOL参与各类研讨活动与最新动态。',
  },
];

const TROUBLES = [
  '虽然已经接受过咨询服务，却不知该如何落地运用咨询成果……',
  '项目经理人手匮乏，可托付的骨干人才稀缺，却有大量项目要同步启动……',
  '公司整体项目进度未能统一管控，导致决策滞后，陷入被动……',
  '课题的解决方向不明确，甚至无法理清核心问题……',
  '接受咨询服务后，对方仅提交改善方案，后续全盘甩手不管，方案落地事宜全部交由我方自行处理……',
  '项目需求界定含糊便仓促开工，致使整体项目偏离方向、举步维艰……',
];

const STRENGTHS = [
  {
    n: 1,
    title: '专注项目落地执行支援',
    main: '从客户的角度出发，全程护航方案导入至项目落地全流程。',
    desc: '我们的咨询服务绝不止步于方案提案。始终立足客户视角、紧贴客户需求，我们坚信：咨询真正的价值，在于从体系导入到项目落地的全程陪伴与帮扶。',
  },
  {
    n: 2,
    title: '深耕 PMO 专业赛道，积淀专业知识与实战经验',
    main: '我们拥有深耕 PMO 专业领域积淀的理论体系与实战经验。',
    desc: '早在业界普遍倡导落地执行支援理念之前，我们便以专业 PMO 的身份，持续化解因管理缺位滋生的各类项目难题。依托扎根一线打磨而来的实战经验，致力于不断提升项目落地成功率。',
  },
  {
    n: 3,
    title: '具备跨行业洞察的咨询专家顾问团队',
    main: 'MSOL团队汇聚了一众拥有跨行业深度洞察的咨询专家。',
    desc: '迄今已为各行各业累计承接了超 500 个项目咨询服务。因此无论您身处何种行业，我们都有经验丰厚、深谙行业规律的咨询专家团队，全程主导、引领贵司各类项目稳步推进。',
  },
];

const TRUST_POINTS = [
  {
    head: '东京证券交易所第一部的上市企业、经营稳定、业务正在扩大',
    desc: '作为所有企业的管理平台，我们实现了稳定增长和持续的业务扩展。',
  },
  {
    head: '顾客的回头率在95%以上',
    desc: '我们和客户不仅仅是单个的项目的关系，作为帮助客户充实管理能力的不可或缺的业务伙伴，我们获得了客户的好评。',
  },
  {
    head: '500多个项目管理的实际经验',
    desc: '我们为客户的各种项目提供支持服务，涵盖了从新业务开发、经营改革、到系统开发等广泛的领域。',
  },
  {
    head: '作为管理界的顶级公司出版了各种书籍',
    desc: '以本公司代表人高桥先生为首，我们通过出版管理相关的各种书籍以及向Web媒体投稿，发布了管理上所必须的方方面面的信息。',
  },
];

export default function FeaturePage() {
  const scrollToStrength = (n: number) => {
    const el = document.getElementById(`strength-${n}`);
    if (!el) return;
    const headerOffset = 96; // 固定头部高度补偿
    const target = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    const start = window.scrollY;
    const distance = target - start;
    if (Math.abs(distance) < 1) return;
    const duration = 600;
    let startTime: number | null = null;
    // easeInOutCubic 缓动
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, start + distance * ease(elapsed));
      if (elapsed < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    document.title = '我们的特长 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="我们的核心优势"
        subtitle="身处瞬息万变的商业环境之下，MSOL 能够备受青睐，自有其独到缘由。"
        crumbs={[{ label: '首页', to: '/' }, { label: '特长' }]}
      />

      {/* 常见的烦恼 */}
      <section
        className="relative bg-primary-dark bg-cover bg-center py-[5.25rem] text-white"
        style={{ backgroundImage: "url('/img/feature/img_main_01@2x.jpg')" }}
      >
        <div className="bg-black/40 py-4">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal type="fade">
              <span className="text-sm font-bold text-white/80">常见的困扰</span>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                您在项目推进的过程中，是否也遇到过这些难题？
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <ul className="flex flex-col gap-4">
          {TROUBLES.map((t, i) => (
            <Reveal key={t} type="swipe" delay={i + 1} as="li">
              <p className="whitespace-nowrap text-center text-sm leading-relaxed text-ink/80 md:text-base">
                {t}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <SectionHeading
            sub="这些难题MSOL来破解"
            title="我们充分利用3大优势，全程助力客户直至项目落地执行。"
          />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STRENGTHS.map((s) => (
            <Reveal key={`card-${s.n}`} type="swipe" delay={s.n} as="li">
              <button
                type="button"
                onClick={() => scrollToStrength(s.n)}
                className="group relative flex h-full w-full flex-col items-center overflow-hidden rounded-lg bg-primary-dark p-8 text-center text-white transition-colors"
              >
                <span className="absolute inset-0 z-0 -translate-x-full bg-primary-mid transition-transform duration-400 ease-msol group-hover:translate-x-0" />
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-primary-dark">
                  {s.n}
                </span>
                <span className="relative z-10 mt-5 flex flex-1 items-center text-lg font-bold leading-snug">
                  {s.title}
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="relative z-10 mt-4 h-5 w-5 text-accent transition-transform group-hover:translate-y-1"
                >
                  <path
                    d="M5 9l7 7 7-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-12 space-y-8">
          {STRENGTHS.map((s) => (
            <Reveal key={s.n} type="swipe" delay={s.n} as="li">
              <div
                id={`strength-${s.n}`}
                className="flex scroll-mt-24 flex-col gap-4 rounded border border-line p-6 md:flex-row md:items-start md:gap-8"
              >
                <div className="flex shrink-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {s.n}
                  </span>
                  <span className="text-base font-bold text-ink md:hidden">{s.title}</span>
                </div>
                <div>
                  <span className="hidden text-base font-bold text-ink md:block">{s.title}</span>
                  <p className="mt-2 font-bold text-ink">{s.main}</p>
                  <p className="mt-1 text-sm text-ink/70">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* 信赖度 */}
      <section
        className="relative bg-primary-dark bg-cover bg-center py-[5.25rem] text-white"
        style={{ backgroundImage: "url('/img/feature/img_main_02@2x.jpg')" }}
      >
        <div className="bg-black/40 py-4">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal type="fade">
              <span className="text-sm font-bold text-white/80">信赖度</span>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                贵公司真的是有业绩、值得信赖的企业吗？
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <SectionHeading
          sub="值得信赖的依据"
          title="作为项目管理公司，我们在提供定制化实施支持方面取得了业绩，获得了很高的评价。"
        />
        <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {TRUST_POINTS.map((p, i) => (
            <Reveal key={p.head} type="swipe" delay={i + 1} as="li">
              <div className="border-t border-line pt-6">
                <h4 className="flex items-start gap-3 text-base font-bold text-ink md:text-lg">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-6 w-6 shrink-0 text-accent"
                  >
                    <path
                      d="M4 12.5l5 5L20 6.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{p.head}</span>
                </h4>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            columns={3}
            items={[
              {
                to: '/feature/mission',
                title: 'MSOL的使命',
                desc: '介绍MSOL的品牌、使命以及未来发展愿景。',
                img: '/img/feature/img_mission@2x.jpg',
              },
              {
                to: '/feature/mission',
                title: '品牌之路',
                desc: '展现MSOL品牌所秉持的重要理念与追求，以及为达成使命愿景而铸就的品牌故事。',
                img: '/img/feature/img_brand@2x.jpg',
              },
              {
                to: '/books',
                title: '书籍·报道介绍',
                desc: '为您介绍MSOL创始人高桥的著作，以及杂志专访报道等内容。',
                img: '/img/feature/img_books@2x.jpg',
              },
            ]}
          />
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            sub="了解更多企业详情"
            title="MSOL的事业内容以及企业经营信息等多类资讯，均在此公开。"
            align="left"
          />
          <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {COMPANY_LINKS.map((c, i) => (
              <Reveal key={c.href} type="swipe" delay={i + 1} as="li">
                <a href={c.href} target="_blank" rel="noreferrer" className="group block">
                  <span className="flex items-center text-base font-bold text-primary-dark">
                    {c.title}
                    <Arrow />
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink/60">
                    {c.desc}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

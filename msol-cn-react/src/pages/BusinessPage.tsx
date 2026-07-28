import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 96;
  const target = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  const start = window.scrollY;
  const distance = target - start;
  if (Math.abs(distance) < 1) return;
  const duration = 600;
  let startTime: number | null = null;
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const step = (now: number) => {
    if (startTime === null) startTime = now;
    const elapsed = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(elapsed));
    if (elapsed < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const SERVICES = [
  {
    icon: '/icons/icon_service_1.svg',
    bg: '#014C85',
    tag: '项目管理落地支持',
    title: 'PMO服务',
    scope: '全企业 / 部门级 / 独立项目 / 项目诊断 / 管理标准',
    desc: '全程陪同项目从策划、方案制定直至收尾全流程，助力各类项目圆满落地。可为集团整体、各业务部门、单个独立项目等所有层级提供 PMO 赋能服务，同时可根据不同应用场景、各行各业定制专属支持方案。',
    href: 'https://service.msols.com/service/pmo/',
    download: {
      label: '免费下载：PMO 入门指南（适用于初次接触 PMO 的人群）',
      href: 'https://service.msols.com/download/pmoframework/?channel=corp_service_text',
    },
  },
  {
    icon: '/icons/icon_service_2.svg',
    bg: '#7C95CD',
    tag: '跨项目统筹管理落地支持',
    title: 'EPMO / 部门PMO',
    scope: '全企业 / 单部门 or 多部门 / 多项目统筹（项目集管理）/ 管理标准',
    desc: '支持多项目统筹以及跨组织综合管理工作（EPMO / 部门 PMO）。结合客户企业自身特点与组织现存问题，梳理界定所需岗位权责与职能体系，为客户搭建可面向全组织输出价值的企业级 PMO 及部门 PMO 架构方案。',
    href: 'https://service.msols.com/service/epmo',
  },
  {
    icon: '/icons/icon_service_5.svg',
    bg: '#0080C7',
    tag: '项目管理平台',
    title: 'PROEVER',
    scope: '软件系统 / 项目报告 / 跨项目统筹管理 / 风险分析 / AI',
    desc: '我们打造全新模式 AI 企业级 PMO（AI EPMO）：将全域企业项目统筹管控能力（EPMO）与人工智能深度融合。依托 AI 赋能，加快组织决策效率，助推企业顺利达成各项战略目标。产品同时支持全球化使用，可跨越地域无缝运行；搭载多语言体系，能够实现与海外分支机构高效协同协作。',
    href: 'https://proever.com/',
  },
  {
    icon: '/icons/icon_service_6.svg',
    bg: '#80AAEF',
    tag: 'PMO 基础与实战培训课程',
    title: '培训',
    scope: '人才培养 / 线下授课',
    desc: '我们依托 MSOL 自研的项目管理理论与方法论体系，开设兼具理论学习与实操属性的培训课程，既可帮助学员夯实基础专业能力，也能直接应用于日常各类项目工作当中。',
    href: 'https://service.msols.com/service/training/',
  },
];

const CASES = [
  {
    img: '/img/case01.jpg',
    points: ['改善进度延期问题', '实现项目可视化', '管理流程标准化'],
    solution: 'PMO 服务为您提供解决方案 ›',
    title: 'PMO 服务',
    href: 'https://service.msols.com/service/pmo/',
  },
  {
    img: '/img/case02.jpg',
    points: ['统筹管理多个项目', '向经营管理层准确汇报项目整体状况'],
    solution: 'EPMO / 部门PMO服务为您提供解决方案 ›',
    title: 'EPMO / 部门 PMO',
    href: 'https://service.msols.com/service/epmo',
  },
  {
    img: '/img/case05.jpg',
    points: ['预判项目成败', '项目风险分析', '管理能力可视化'],
    solution: 'PROEVER 软件为您提供解决方案 ›',
    title: 'PROEVER',
    href: 'https://proever.com/',
  },
  {
    img: '/img/case04.jpg',
    points: ['提升公司 / 部门整体管理水平', '掌握管理相关专业技能'],
    solution: '培训为您提供解决方案 ›',
    title: '培训',
    href: 'https://service.msols.com/service/training/',
  },
];

export default function BusinessPage() {
  useEffect(() => {
    document.title = '业务介绍 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="业务介绍"
        subtitle={
          <>
            作为专业的项目管理公司，我们以 PMO 服务为核心主营业务；
            <br />
            同时依托项目沉淀的专业经验，推出管理能力提升软件、贴合实战场景的培训课程等多元化配套服务。
          </>
        }
        crumbs={[{ label: '首页', to: '/' }, { label: '业务介绍' }]}
      />

      {/* 业务介绍四卡片 */}
      <section className="bg-line/10 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading sub="SERVICE" title="业务介绍" />
          <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} type="swipe" delay={i + 1} as="li" className="flex flex-col">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-lg p-6 text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: s.bg }}
                >
                  <img
                    src={assetUrl(s.icon)}
                    alt=""
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-white/85 md:text-base">{s.tag}</span>
                    <span className="mt-1 block text-xl font-bold leading-snug">{s.title}</span>
                  </span>
                  <span aria-hidden className="shrink-0 text-xl text-white/70">›</span>
                </a>
                <p className="mt-2 text-xs font-medium text-primary">{s.scope}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                {s.download && (
                  <a
                    href={s.download.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-4 inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark"
                  >
                    {s.download.label}
                    <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-1">›</span>
                  </a>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 按需选择 */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading sub="" title="按需选择" />
          <div className="mx-auto mt-3 h-1 w-12 rounded bg-primary-dark" />
          <ul className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal key={c.title} type="swipe" delay={i + 1} as="li" className="flex flex-col">
                <img
                  src={assetUrl(c.img)}
                  alt=""
                  className="h-48 w-full rounded-lg object-cover"
                />
                <div className="mt-5 flex flex-1 justify-center">
                  <ul className="space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-center text-base font-bold text-primary underline decoration-primary underline-offset-4">
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.solution}
                  </a>
                </p>
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => smoothScrollTo('footer-social')}
                    className="group inline-flex w-full max-w-[240px] items-center justify-center rounded-lg border-[3px] border-[#f08200] bg-[#f08200] px-10 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#f08200]"
                  >
                    联系我们
                    <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">›</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

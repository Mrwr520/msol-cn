import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { Reveal } from '../components/common/Reveal';
import { ContactCta } from '../components/common/ContactCta';
import { SectionHeading } from '../components/common/SectionHeading';
import { assetUrl } from '../utils/asset';

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

export default function BusinessTrainingPage() {
  useEffect(() => {
    document.title = '培训 | 业务介绍 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="培训"
        subtitle="以项目管理理论・方法论为基础，提供实战课程。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '业务介绍', to: '/business' },
          { label: '培训' },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 py-14">
        <ContentSection title="培训计划">
          <p>
            我们的培训课程以项目管理的理论・方法论为基础，结合实践应用。不限时间地点，且价格优惠的网上课程，包含风险管理，逻辑思维，教练技术，范围管理等多款课程供您选择。
          </p>
          <Reveal type="fade">
            <img
              src={assetUrl('/img/training/img_training-program_cn.jpg')}
              alt="培训计划图片"
              className="mx-auto w-full max-w-4xl rounded"
            />
          </Reveal>
        </ContentSection>
      </div>

      {/* 服务介绍 */}
      <section className="border-t border-line bg-line/10 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            sub="SERVICE"
            title="业务介绍"
          />
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

      <ContactCta />
    </>
  );
}

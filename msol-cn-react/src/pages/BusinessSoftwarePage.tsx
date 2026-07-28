import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const SERVICES = [
  { icon: '/icons/icon_service_1.svg', bg: '#014C85', tag: '项目管理落地支持', title: 'PMO服务', scope: '全企业 / 部门级 / 独立项目 / 项目诊断 / 管理标准', desc: '全程陪同项目从策划、方案制定直至收尾全流程，助力各类项目圆满落地。可为集团整体、各业务部门、单个独立项目等所有层级提供 PMO 赋能服务，同时可根据不同应用场景、各行各业定制专属支持方案。', href: 'https://service.msols.com/service/pmo/', download: { label: '免费下载：PMO 入门指南（适用于初次接触 PMO 的人群）', href: 'https://service.msols.com/download/pmoframework/?channel=corp_service_text' } },
  { icon: '/icons/icon_service_2.svg', bg: '#7C95CD', tag: '跨项目统筹管理落地支持', title: 'EPMO / 部门PMO', scope: '全企业 / 单部门 or 多部门 / 多项目统筹（项目集管理）/ 管理标准', desc: '支持多项目统筹以及跨组织综合管理工作（EPMO / 部门 PMO）。结合客户企业自身特点与组织现存问题，梳理界定所需岗位权责与职能体系，为客户搭建可面向全组织输出价值的企业级 PMO 及部门 PMO 架构方案。', href: 'https://service.msols.com/service/epmo' },
  { icon: '/icons/icon_service_5.svg', bg: '#0080C7', tag: '项目管理平台', title: 'PROEVER', scope: '软件系统 / 项目报告 / 跨项目统筹管理 / 风险分析 / AI', desc: '我们打造全新模式 AI 企业级 PMO（AI EPMO）：将全域企业项目统筹管控能力（EPMO）与人工智能深度融合。依托 AI 赋能，加快组织决策效率，助推企业顺利达成各项战略目标。产品同时支持全球化使用，可跨越地域无缝运行；搭载多语言体系，能够实现与海外分支机构高效协同协作。', href: 'https://proever.com/' },
  { icon: '/icons/icon_service_6.svg', bg: '#80AAEF', tag: 'PMO 基础与实战培训课程', title: '培训', scope: '人才培养 / 线下授课', desc: '我们依托 MSOL 自研的项目管理理论与方法论体系，开设兼具理论学习与实操属性的培训课程，既可帮助学员夯实基础专业能力，也能直接应用于日常各类项目工作当中。', href: 'https://service.msols.com/service/training/' },
];

const SOLUTIONS = [
  {
    head: '组织',
    items: ['看不到项⽬全局⽽发愁', '⽅针决策不够果断迅速', '过去的教训不能得到有效的借鉴', '很多项⽬夭折'],
  },
  {
    head: '流程',
    items: ['直到问题出现了才开始制定策略', '报/联/商（汇报/联系/商量）不及时（没有）', '⽆法做出基于正确信息的决策'],
  },
  {
    head: '人',
    items: ['难以培养项⽬管理⼈才', '项⽬交给属下后总觉得不放⼼', '过分依赖个别掌握专业技术的⼈员', '项⽬管理这个词⼀听就觉得很难'],
  },
  {
    head: '管理工具',
    items: ['⼯具功能太多，没法有效利⽤', '看不到项⽬进⾏的实时状况', '希望能同时看到多个项⽬的进度状况', '镀⾦管理过多'],
  },
];

export default function BusinessSoftwarePage() {
  useEffect(() => {
    document.title = 'PROEVER | 业务介绍 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="PROEVER"
        subtitle="集中了专业项⽬管理公司积累的经验知识与⽅法论。PROEVER是⼀款引领项⽬成功，提升员⼯项⽬管理技能的软件。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '业务介绍', to: '/business' },
          { label: 'PROEVER' },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 py-14">
        <ContentSection title="引领项目走向成功。">
          <Reveal type="fade">
            <video
              className="w-full rounded"
              controls
              preload="auto"
              poster={assetUrl('/img/img_main_movie_sp_05.jpg')}
            >
              <source src={assetUrl('/video/movie-04.mp4')} type="video/mp4" />
            </video>
          </Reveal>
        </ContentSection>

        <ContentSection title="助推项⽬【0】失败。">
          <Reveal type="fade">
            <img src={assetUrl('/img/software/img_proever_function.png')} alt="" className="w-full rounded" />
          </Reveal>
          <p>
            ⻨嵩隆是⼀家专注于项⽬管理的咨询公司，多年来以⼤中型企业为中⼼，在项⽬管理⽅⾯积累了⼤量丰富经验与知识。
            PROEVER正是汇集了本公司知识与经验⽽研发完成的专业项⽬管理软件。通过项⽬可视化，导航等多种⽤户界⾯，提供包括利⽤过去的成败教训提取风险的风险管理，知识共享，相关⽅管理在内的各项功能，为您提供全⽅位项⽬管理⽀援。
          </p>
          <p>
            PROEVER各项功能都融⼊了我们过去各项⽬⽀援实践中积累起来的经验，⽤户在使⽤的过程中能⾃然地掌握或者提升项⽬管理的流程及知识体系。此外，⽤户还能通过知识库功能积累过去的成败经验教训形成企业资产，借鉴并找出解决问题的最佳策略。
          </p>
          <p>PROEVER还可以帮助您培养专业项⽬经理和PMO，从⽽提升企业项⽬管理的整体⽔平，引领项⽬成功。</p>
          <Reveal type="fade">
            <img src={assetUrl('/img/software/img_proever_release.png')} alt="" className="w-full rounded" />
          </Reveal>
        </ContentSection>

        <ContentSection title="您是否有这样的烦恼呢？PROEVER来为您解决。">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.head} type="swipe" delay={i + 1} className="rounded border border-line p-5">
                <span className="font-bold text-primary">{s.head}</span>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/80">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="数字手册">
          <Reveal type="fade" className="rounded border border-line p-6 text-center">
            <p className="font-bold text-ink">PROEVER 产品手册</p>
            <a
              href={assetUrl('/pdf/20200527cn.pdf')}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-primary underline"
            >
              下载 PDF [5.85 MB]
            </a>
          </Reveal>
        </ContentSection>
      </div>

      {/* 业务一览 */}
      <section className="border-t border-line bg-line/10 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading sub="" title="业务一览" />
          <div className="mx-auto mt-3 h-1 w-12 rounded bg-primary-dark" />
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
                  <img src={assetUrl(s.icon)} alt="" className="h-14 w-14 shrink-0 object-contain" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-white/85 md:text-base">{s.tag}</span>
                    <span className="mt-1 block text-xl font-bold leading-snug">{s.title}</span>
                  </span>
                  <span aria-hidden className="shrink-0 text-xl text-white/70">›</span>
                </a>
                <p className="mt-2 text-xs font-medium text-primary">{s.scope}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                {s.download && (
                  <a href={s.download.href} target="_blank" rel="noreferrer" className="group mt-4 inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark">
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

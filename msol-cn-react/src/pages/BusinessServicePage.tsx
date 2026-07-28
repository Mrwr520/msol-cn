import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { ContactCta } from '../components/common/ContactCta';
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

export default function BusinessServicePage() {
  useEffect(() => {
    document.title = 'PMO 服务 | 业务介绍 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="PMO 服务"
        subtitle="凭借丰富的项目管理经验和业绩，MSOL提供全方位的管理咨询，引领项目走向成功。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '业务介绍', to: '/business' },
          { label: 'PMO 服务' },
        ]}
      />

      <div className="mx-auto max-w-5xl px-6 py-14">
        <ContentSection title="项目管理执行支援（PMO）">
          <p>
            不同组织在项目管理中遭遇的问题和痛点各不相同。作为一家专业的项目管理公司，我们在大量的实践中积累了丰富的知识和经验，针对客户的烦恼和问题提供解决方案。为公司/部门/项目等各个组织层级提供PMO支持服务，通过项目目标统一，计划制定，项目状态可视化，决策支持等的PMO实际支援，以提高企业管理成熟度，并提升项目的成功率。我们以部分上市企业的大型项目为中心，已为众多客户提供了项目管理咨询服务。无论项目场景（运营维护、商务、全球化）、无论客户行业（金融、能源、制药、汽车、其他），我们都可以提供高品质的PMO支援服务。
          </p>
          <p>结合过去的实战经验，我们能够根据贵司的实际情况制定不同的可实施的解决方案。</p>
          <Reveal type="fade" className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <img src={assetUrl('/img/service/img_pmo-pyramid_cn@2x.png')} alt="该图说明了每个层的PMO执行支持" className="w-full rounded" />
            <img src={assetUrl('/img/service/img_pmo-approach_cn@2x.png')} alt="该图以解决特定问题的方式解释了PMO实施支持" className="w-full rounded" />
          </Reveal>
          <div className="rounded border border-line p-5">
            <h3 className="font-bold text-ink">项目管理支援示例</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/80">
              <li>促成项目目标/交付成果的统一认知</li>
              <li>制定计划/确认合理性</li>
              <li>项目状态的可视化（定量/定性）</li>
              <li>问题解决实施推进</li>
              <li>项目管理报告</li>
              <li>决策支持</li>
              <li>组织过程资产，经验教训的积累・利用（回顾）</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection title="PMO在线咨询服务（PMO ONLINE）">
          <p>
            通过在线「共享PMO」，将PMO咨询服务与搭载了可视化功能的项目管理工具「PROEVER」相结合，以高质量及合理的价格为您提供项目管理咨询服务。
          </p>
          <Reveal type="fade">
            <img
              src={assetUrl('/img/service/img_shared_cn.png')}
              alt="有关共享PMO服务的主要功能的图像"
              className="mx-auto w-full rounded"
            />
          </Reveal>
        </ContentSection>

        <ContentSection title="MSOL Digital 服务">
          <p>
            在多年项目管理支援的实施过程中，MSOL顺应时代的变化，在多元化跨行业的商务环境下，参与用户的「数字化变革」(DX-Digital
            Transformation)，并提供高质量的咨询服务。
          </p>
          <p>
            为了稳步推进数字化变革，并着眼于中长期发展，"数字化推进体制构建"、"数字化推进流程建立"、"数字化人才培养"、"与尖端IT合作伙伴的积极配合"是成功的必要条件。
            事业部门和IT部门联合作为「变革创新型IT」积极推进数字化变革，与此同时，对主干系统，IT基础设施，安全等的「安全稳健型IT」的恰当投资也是必要的。
          </p>
          <p>
            目前，在人工智能、物联网等领域不断涌现的技术革新下，为了将数字化变革、IT现代化等多元商务问题的解决转化为用户的机会，MSOL
            Digital与专业合作伙伴携手，提出解决方案、构筑数字服务。作为DSIer(数字解决方案集成商)助力数字化变革的推进，提供数字化人才培养和成长的道场。
          </p>
          <Reveal type="fade">
            <img src={assetUrl('/img/service/img_msol-digital_cn.png')} alt="MSOL数码影像" className="w-full rounded" />
          </Reveal>
        </ContentSection>

        <ContentSection title="管理咨询">
          <p className="font-bold text-ink">建立提高变革成功率的管理机制</p>
          <p>
            随着以不确定性及创新为特点的变革项目的增加，项目的成功率正在急剧下降。同时，大型项目也存在同样的趋势。其主要原因是，对于即使完美实施项目管理仍然会发生的风险，及时进行范围变更/期限变更/追加投资/项目中止等经营决策的机制=管理系统非常脆弱，或者说，各种管理机制独立运行而没有互相关联。其结果是，管理层进行决策所需要的信息缺失，计划变更的决策则受制于过于繁琐的流程和冗余的信息，导致项目的成功率无法提升，投资无法及时止损的情况频发。
          </p>
          <p>
            日本企业认为，比起在经营战略和变革项目的方针制定中出现的错误，为落实方针所采用的管理系统中存在的问题，更容易导致企业在世界性的变革浪潮中停滞不前。
          </p>
          <p>为了解决这个问题，MSOL着眼于新业务，新项目等「非常规业务」的「管理机制」，实施管理咨询。</p>
          <Reveal type="fade">
            <img src={assetUrl('/img/service/img_management-consulting_01_cn.png')} alt="管理咨询形象1" className="w-full rounded" />
          </Reveal>
          <p>
            MSOL的管理咨询服务，深入到企业整体的「管理机制」。包括管理层对于变革的价值判断和资源的优化及流程再造，项目正确执行与否的管理层早期判断流程，维持并提高公司内外成员挑战性和创造性的组织结构和制度等。我们的服务使用复合型管理框架，将用户的各方面现状可视化，渐进式推动实现用户目标。
          </p>
          <Reveal type="fade">
            <img src={assetUrl('/img/service/img_management-consulting_02_cn.png')} alt="管理咨询形象2" className="w-full rounded" />
          </Reveal>
          <div className="rounded border border-line p-5">
            <h3 className="font-bold text-ink">主要实施案例</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/80">
              <li>针对DX(数字化变革)等组织整体变革时的管理机制确立</li>
              <li>基于基础系统变更等超大型项目时的管理机制确立</li>
              <li>既有管理机制中流程执行和政策实施的冲突协调</li>
            </ul>
          </div>
        </ContentSection>
      </div>

      {/* 业务介绍四卡片 */}
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

import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';

interface JobPosition {
  title: string;
  responsibilities: string[];
  requirements: string[];
  language: string[];
  benefits: string[];
}

const POSITIONS: JobPosition[] = [
  {
    title: '管理定着型PMO',
    responsibilities: [
      '支持客户建立和执行复杂的项目，从理念到落地，作为PMO引导项目成功',
      '深入洞察，通过有效沟通了解并塑造客户需求，为项目管理工作提供创新方案',
      '精心策划项目相关会议，精确记录，确保项目信息的流畅沟通和有效跟进',
      '深谙项目进度、日程管理之道，胜任项目变革的推手和流程的把控者',
      '设计和优化项目管理流程，提供策略性建议，并确保方案的高效实施',
      '为项目指导委员会呈现精准的管理报告，为决策提供强有力的数据支持',
      '在项目管理的全过程中提供专业咨询，助力项目经理明智决策，确保项目顺利进行',
    ],
    requirements: [
      '深度了解项目管理理论与实践，持有PMP资格证书或Agile证书者优先',
      '在IT领域拥有深厚的项目管理经验，熟悉技术的同时懂得人性化管理',
      '作为沟通的高手和情商的典范，能够在各种商业环境中游刃有余',
      '工作严谨而细致，具备出色的分析判断力和解决复杂问题的智慧',
      '若您有PMO实战经验，您将是我们团队中的宝贵资产',
      '如果您对咨询行业有着无限热情，并具备相关工作经历，您就是我们寻找的人才',
    ],
    language: [
      '日语或英语，能以商务水平的流利程度进行交流',
      '日本の留学・就職経験者優先',
    ],
    benefits: [
      '保险：养老保险、医疗保险、补充医疗保险、失业保险、生育保险、工伤保险、公积金',
      '其他补助：通讯补助、交通补助、出差补助',
      '休息休假：双休日、国定假期、法定假期、带薪假期、婚丧假、特别假期等',
    ],
  },
  {
    title: '业务拓展经理/销售开拓主管',
    responsibilities: [
      '市场开拓：重点开拓有项目管理咨询需求或数字化转型痛点的日系客户，挖掘潜在商机',
      '客户经营：维护客户高层人脉资源（C-Level/VP级别），通过长周期经营，将单次项目合作转化为年度框架或长期咨询协议',
      '需求分析与提案：深入理解客户在项目交付中的痛点，结合公司项目管理服务体系，为客户提供定制化解决方案',
      '商务推进与交付协同：独立完成提案、报价、谈判及合同签署，并协同内部交付团队确保项目顺利落地与回款',
    ],
    requirements: [
      '具备IT服务、系统集成（SI）或管理咨询行业的销售经验',
      '拥有日资企业客户资源，熟悉日企采购流程、决策链文化及商务习惯，有日本留学或工作背景者优先',
      '理解项目管理基本逻辑，具备独立提案能力',
      '具有主观能动性和较强的抗压能力',
    ],
    language: [
      '日语流利，具备商务交流能力',
      '英语可达基本交流程度',
    ],
    benefits: [
      '保险：养老保险、医疗保险、补充医疗保险、失业保险、生育保险、工伤保险、公积金',
      '稳固底薪叠加多重绩效薪酬，年终奖金上不封顶',
    ],
  },
];

function JobCard({ job, index }: { job: JobPosition; index: number }) {
  return (
    <Reveal type="fade" delay={index * 2}>
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
        <div className="bg-primary-dark px-6 py-4">
          <h3 className="text-xl font-bold text-white">{job.title}</h3>
        </div>
        <div className="space-y-6 p-6">
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-primary-dark">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">1</span>
              职责描述
            </h4>
            <ul className="space-y-2 pl-8">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="relative text-sm text-ink/80 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-primary-dark">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">2</span>
              经验/技能要求
            </h4>
            <ul className="space-y-2 pl-8">
              {job.requirements.map((item, i) => (
                <li key={i} className="relative text-sm text-ink/80 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-primary-dark">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">3</span>
              语言技能
            </h4>
            <ul className="space-y-2 pl-8">
              {job.language.map((item, i) => (
                <li key={i} className="relative text-sm text-ink/80 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-primary-dark">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">4</span>
              福利待遇
            </h4>
            <ul className="space-y-2 pl-8">
              {job.benefits.map((item, i) => (
                <li key={i} className="relative text-sm text-ink/80 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function CareersPage() {
  useEffect(() => {
    document.title = '加入我们 | Management Solutions (MSOL)';
  }, []);

  return (
    <>
      <PageHero
        title="加入我们"
        subtitle="与MSOL一起，开启您的职业新篇章"
        crumbs={[{ label: '首页', to: '/' }, { label: '加入我们' }]}
        align="center"
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Reveal type="fade">
          <h2 className="mb-4 text-2xl font-bold text-primary-dark">诚邀优秀人才加入</h2>
          <p className="text-ink/80">
            MSOL是一家专注于项目管理咨询的专业公司，我们致力于为客户提供卓越的PMO服务。
            如果您对项目管理充满热情，渴望在专业领域持续成长，欢迎加入我们的团队！
          </p>
        </Reveal>
      </section>

      {/* Job Positions */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <Reveal type="fade">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary-dark">招聘职位</h2>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2">
          {POSITIONS.map((job, index) => (
            <JobCard key={job.title} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-line/30 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Reveal type="fade">
            <h2 className="mb-4 text-xl font-bold text-primary-dark">如何申请</h2>
            <p className="mb-6 text-ink/80">
              请将您的简历发送至以下邮箱，我们会尽快与您联系。
            </p>
            <a
              href="mailto:info@cn.msols.com"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-bold text-white transition-colors hover:bg-primary-dark"
            >
              info@cn.msols.com
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

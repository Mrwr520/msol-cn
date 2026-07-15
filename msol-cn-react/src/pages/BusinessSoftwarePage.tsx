import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';

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

      <div className="mx-auto max-w-3xl px-6 py-14">
        <ContentSection title="引领项目走向成功。">
          <Reveal type="fade">
            <video
              className="w-full rounded"
              controls
              preload="auto"
              poster="/img/img_main_movie_sp_05.jpg"
            >
              <source src="/video/movie-04.mp4" type="video/mp4" />
            </video>
          </Reveal>
        </ContentSection>

        <ContentSection title="助推项⽬【0】失败。">
          <Reveal type="fade">
            <img src="/img/software/img_proever_function.png" alt="" className="w-full rounded" />
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
            <img src="/img/software/img_proever_release.png" alt="" className="w-full rounded" />
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
              href="/pdf/20200527cn.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-primary underline"
            >
              下载 PDF [5.85 MB]
            </a>
          </Reveal>
        </ContentSection>
      </div>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            items={[
              { to: '/business/service', title: '服务', desc: '作为项目管理专家公司，我们在大量实践中积攒了丰富经验和知识，为客户的烦恼和问题提供解决方案，实行项目支持。' },
              { to: '/business/training', title: '培训', desc: '基于MSOL丰富严谨的项目管理理论和方法论，我们提供的培训课程包含从基本能力训练的初阶课程，到项目实战训练的高阶课程。' },
              { to: '/business/software', title: 'PROEVER', desc: '我们提供专业软件「PROEVER」，轻松实现问题管理·风险管理·知识共享·项目可视化等功能，帮助您顺利推动项目。', current: true },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

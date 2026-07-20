import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const TROUBLES = [
  '虽然接受了咨询，但是不清楚自己该如何有效应用……',
  '项目经理人手不足，没有可用的人才，但是又需要上马很多项目……',
  '未对公司整体的项目进行统一管理，决策滞后、陷入被动……',
  '课题的解决方向不明确，不清楚有多少个重要的课题……',
  '虽然接受了咨询，但咨询公司只是提出了改善方案，之后就不管了……',
  '项目的需求分析做的不清楚，项目摇摆不定……',
];

const STRENGTHS = [
  {
    n: 1,
    title: '定制化项目实施支持',
    main: '我们想客户之所想，为项目从引进到实施提供支持。',
    desc: '和客户一起携手推进项目，站在客户的立场来运营项目。',
  },
  {
    n: 2,
    title: '项目管理的专业知识和技能',
    main: '我们拥有在项目管理专业实践中培育起来的知识和技能。',
    desc: '凭借我们在大量过往项目中积累的知识和技能，和客户一起携手推动项目走向成功。',
  },
  {
    n: 3,
    title: '拥有对行业有广泛而深入见解的咨询专家',
    main: '我们聚集了一批对行业有广泛而深入见解的咨询专家。',
    desc: '凭借从500多个项目中获得的知识，由各行业的专家领导客户的项目。',
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
  useEffect(() => {
    document.title = '我们的特长 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="我们的特长"
        subtitle="在瞬息万变的商业环境中，客户选择MSOL咨询是有理由的。"
        crumbs={[{ label: '首页', to: '/' }, { label: '特长' }]}
      />

      {/* 常见的烦恼 */}
      <section
        className="relative bg-primary-dark bg-cover bg-center py-14 text-white"
        style={{ backgroundImage: `url('${assetUrl('/img/feature/img_main_01@2x.jpg')}')` }}
      >
        <div className="bg-black/40 py-4">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal type="fade">
              <span className="text-sm font-bold text-white/80">常见的烦恼</span>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                您在推进项目时有没有遇到这样的烦恼呢？
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {TROUBLES.map((t, i) => (
            <Reveal key={t} type="swipe" delay={i + 1} as="li">
              <div className="rounded border border-line bg-line/10 p-4 text-sm leading-relaxed text-ink/80">
                {t}
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <SectionHeading
            sub="这些问题MSOL为您解决"
            title="我们充分利用3大优势，为项目从引进到实施提供支持。"
          />
        </div>

        <ul className="mt-10 space-y-8">
          {STRENGTHS.map((s) => (
            <Reveal key={s.n} type="swipe" delay={s.n} as="li">
              <div className="flex flex-col gap-4 rounded border border-line p-6 md:flex-row md:items-start md:gap-8">
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
        className="relative bg-primary-dark bg-cover bg-center py-14 text-white"
        style={{ backgroundImage: `url('${assetUrl('/img/feature/img_main_02@2x.jpg')}')` }}
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

      <section className="mx-auto max-w-5xl px-6 py-14">
        <SectionHeading
          sub="信赖度证明"
          title="作为项目管理公司，我们在提供定制化实施支持方面取得了业绩，获得了很高的评价。"
        />
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {TRUST_POINTS.map((p, i) => (
            <Reveal key={p.head} type="swipe" delay={i + 1} as="li">
              <div className="rounded border border-line p-5">
                <h4 className="font-bold text-ink">{p.head}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            columns={2}
            items={[
              {
                to: '/feature/mission',
                title: 'MSOL的使命',
                desc: '介绍MSOL的品牌，使命和未来发展愿景。',
                img: '/img/feature/img_mission@2x.jpg',
              },
              {
                to: '/business',
                title: '业务介绍',
                desc: '我们是一家管理专业公司，主要从事PMO服务的同时，在活用专业技术利于实践的研修安排方面，以及提高管理能力的软件提供等方面也均有涉猎。',
              },
              {
                to: '/company',
                title: '公司信息',
                desc: '在此为您介绍MSOL的组织体制、公司概要和发展历程等，MSOL以管理之力为社会的幸福度作出了贡献。',
              },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

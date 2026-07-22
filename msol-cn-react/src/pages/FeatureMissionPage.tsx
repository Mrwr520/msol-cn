import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';

const WAVES = [
  { era: '第一浪潮', year: '1950年代～', label: '战略咨询' },
  { era: '第二浪潮', year: '1990年代～', label: 'IT咨询' },
  { era: '第三浪潮', year: '2010年代～', label: '战略落地型管理咨询' },
];

export default function FeatureMissionPage() {
  useEffect(() => {
    document.title = 'MSOL的使命 | 我们的特长 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="MSOL的使命"
        subtitle="为您介绍 MSOL 企业理念、使命宗旨以及未来发展愿景与布局规划。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '特长', to: '/feature' },
          { label: 'MSOL的使命' },
        ]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        {/* 顶部细分割线，还原官网 */}
        <div className="mb-12 h-px w-12 bg-ink/30" />

        <ContentSection tone="corp" sub="我们的使命" title="以管理之力，为社会的幸福贡献力量">
          <p>
            通过彼得·德鲁克销量突破百万册的《管理》一书可见，"管理"已日益成为人们关注的焦点。借助管理的各类手段，将人与组织维系于最佳状态，从而缔造幸福的成果，是对社会本质的理解与贡献。然而，传统的管理手法已然陈旧，在瞬息万变的现代组织中，能够创造成果的管理愈发重要。与此同时，在个人生活层面，管理同样是一项必备技能，能够提供学习的具体场景亦成为一种需求。MSOL集团全体成员致力于创造出各式各样的管理"理念·手段·落地工具"，全力为实现全社会的幸福贡献力量。
          </p>
        </ContentSection>

        <ContentSection
          tone="corp"
          sub="我们的愿景"
          title="打造融合人与技术的管理型社会平台，推动组织变革与价值创造，赋能个体自主成长"
        >
          <p>
            MSOL的长远发展目标，是不仅面向各类企业输出可落地的管理解决方案，同时赋能个人成长，成长为全球化的综合管理平台企业。以
            <a
              href="https://service.msols.com/service/pmo/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              项目管理
            </a>
            业务为例：我们推出的解决方案，既能提升企业整体管理成熟度，也可助力每一位一线员工精进专业技能。面向个人层面，我们布局职业管理方案、
            <a
              href="https://service.msols.com/service/training/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              多元化培训
            </a>
            课程，同时自研上线项目管理效能提升软件"
            <a
              href="https://proever.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              PROEVER
            </a>
            "，依托各类产品稳步推进全球化业务布局。未来我们将持续迭代研发全新解决方案，倾力打造真正意义上的全域管理生态平台。
          </p>
        </ContentSection>

        <ContentSection
          tone="corp"
          sub="我们的定位"
          title="依托战略落地型管理咨询这一核心优势，树立专属独特品牌。"
        >
          <div className="my-6 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <ul className="w-full space-y-5 md:w-auto">
              {WAVES.map((w) => (
                <li key={w.era} className="flex items-baseline gap-4">
                  <span className="w-24 shrink-0 text-sm font-bold text-primary">
                    {w.era}
                    <span className="mt-0.5 block text-xs font-normal text-ink/50">{w.year}</span>
                  </span>
                  <span className="text-base font-bold text-ink">{w.label}</span>
                </li>
              ))}
            </ul>
            <img
              src="/img/feature/img_wave@2x.png"
              alt="MSOL 波浪标识"
              className="h-28 w-auto shrink-0 object-contain"
            />
          </div>
          <p>
            第一浪潮：战略咨询业务由此诞生，此时机构以经营战略专家的身份开展服务。进入90年代，迎来第二浪潮：伴随信息技术革新与企业全面信息化的浪潮，壮大了IT咨询赛道。而2010年后，迈入第三浪潮：也就是我们深耕的战略落地型管理咨询——全方位覆盖企业管理层至一线现场的全层级，通过一体化的助力，化解企业各类经营管理难题。
          </p>
        </ContentSection>
      </div>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            sub="了解更多MSOL特长"
            title="我们备有丰富的内容，助您更深入地了解MSOL。"
            align="left"
          />
          <div className="mt-10">
            <LinkCardList
              columns={3}
              items={[
                {
                  to: '/feature/mission',
                  title: 'MSOL的使命',
                  desc: '介绍MSOL的品牌、使命以及未来发展愿景。',
                  img: '/img/feature/img_mission@2x.jpg',
                  current: true,
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
        </div>
      </section>

      <ContactCta />
    </>
  );
}

import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

const WAVES = [
  { era: '第一浪潮', year: '1950年代～', label: '战略咨询业务' },
  { era: '第二浪潮', year: '1990年代～', label: 'IT咨询业务' },
  { era: '第三浪潮', year: '2010年代～', label: '战略落地型管理咨询业务' },
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

      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* 顶部细分割线，还原官网 */}
        <div className="mb-12 h-px w-12 bg-ink/30" />

        <ContentSection tone="corp" sub="我们的使命" title="以管理之力，贡献社会幸福">
          <p>
            彼得・德鲁克所著《管理》相关书籍销量突破百万册，足以证明管理如今备受关注。借助管理这一工具，能够使人与组织达到最佳状态，收获圆满幸福的成果。但传统管理方式已然滞后，在瞬息万变的现代组织环境中，企业亟需可以切实创造价值、产出成果的现代化管理体系。与此同时，管理也已成为每个人日常生活不可或缺的必备能力，大众迫切需要专业场景来系统学习掌握这项技能。MSOL 依托整个集团综合实力，打造多元化落地管理模式，全力以赴推动社会幸福愿景落地实现。
          </p>
        </ContentSection>

        <ContentSection
          tone="corp"
          sub="我们的愿景"
          title="打造融汇人与技术的管理型社会平台，推动组织变革与价值创造，赋能个体自主成长"
        >
          <p>
            MSOL 的长远发展目标：不仅面向各类企业输出可落地管理解决方案，同时赋能个人成长，成长为全球化综合管理平台企业。以
            <a
              href="https://service.msols.com/service/pmo/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              PMO
            </a>
            业务为例：我们推出的解决方案，既能提升企业整体管理成熟度，也可助力每一位一线员工精进专业技能。面向个人层面，我们布局职业规划管理方案、
            <a
              href="https://service.msols.com/service/training/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              多元化培训
            </a>
            课程，同时自研上线项目管理效能提升软件
            <a
              href="https://proever.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              PROEVER
            </a>
            ，依托各类产品稳步推进全球化业务布局。未来我们将持续迭代研发全新解决方案，倾力打造真正意义上的全域管理生态平台。
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
              src={assetUrl('/img/feature/img_wave@2x.png')}
              alt="MSOL 波浪标识"
              className="h-28 w-auto shrink-0 object-contain"
            />
          </div>
          <p>
            第一浪潮：战略咨询业务诞生，此时机构以经营战略专家的身份开展服务。进入 90 年代，迎来第二浪潮：伴随信息技术革新、企业全面信息化浪潮，壮大了 IT 咨询赛道。而 2010 年后，迈入第三浪潮：也就是我们深耕的战略落地型管理咨询：全方位覆盖企业管理层至一线现场全层级，通过一体化助力，化解企业各类经营管理难题。
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
              columns={2}
              horizontal
              items={[
                {
                  to: '/feature/mission',
                  title: 'MSOL 的使命',
                  desc: '为您介绍 MSOL 企业理念、使命宗旨以及未来发展愿景与布局规划。',
                  img: '/img/feature/img_mission@2x.jpg',
                  current: true,
                },
                {
                  to: '/feature/brand',
                  title: 'MSOL 的宗旨',
                  desc: '诠释 MSOL 企业核心意义与发展目标，赋能使命与愿景落地的品牌故事。',
                  img: '/img/feature/img_brand@2x.jpg',
                },
                {
                  to: '/books',
                  title: '图书推荐',
                  desc: '精选项目管理与 PMO 领域优秀书籍，助力专业能力提升。',
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

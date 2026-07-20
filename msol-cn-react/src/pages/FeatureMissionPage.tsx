import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';
import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/asset';

export default function FeatureMissionPage() {
  useEffect(() => {
    document.title = 'MSOL的使命 | 我们的特长 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="MSOL的使命"
        subtitle="介绍MSOL的品牌，使命和未来发展愿景。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '特长', to: '/feature' },
          { label: 'MSOL的使命' },
        ]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <ContentSection title="咨询行业的第三波浪潮">
          <Reveal type="fade">
            <img
              src={assetUrl('/img/feature/img_mission@2x.jpg')}
              alt="该图解释了第三波"
              className="w-full rounded"
            />
          </Reveal>
          <p>
            作为经营战略专家诞生的战略咨询事业掀起了1st wave，在1990年代之后出现的2nd
            wave，则是指伴随信息技术革新"IT化"，由系统集成商和会计事务所促进了IT顾问事业的成长。其后，于2010年代后出现的3rd
            wave，即战略执行型管理顾问，则是指对企业组织展开从经营层到现场层的广泛支援从而解决各种问题的咨询顾问。
          </p>
        </ContentSection>

        <ContentSection title="通过高效管理，促进社会的和谐幸福">
          <p>
            通过彼得·德鲁克的销量突破百万的《管理》一书，可见"管理"已成为人们日趋关心的对象。通过管理的各种手段，将人和组织维系至最佳状态，从而创造出和谐幸福的结果，是对社会的本质理解和贡献。然而，以往的管理手法过于陈旧，在瞬息万变的现代社会组织中，能缔造结果的管理变得日益重要。此外，在个人生活中，管理也是一项必须的技巧，对能提供学习的具体场所也成为了一种需求。MSOL集团全体成员致力于创造出各式各样的管理"理念/手段/落地工具"，努力为实现社会全体的和谐幸福做出贡献。
          </p>
        </ContentSection>

        <ContentSection title="我们希望成为管理方面的社会平台，促进组织的变革与个人的独立成长">
          <p>
            MSOL所追求的目标姿态是，将具有具体形态的解决方案不仅仅提供给企业组织，也提供给个人，成为不局限于日本，而是放眼全球的平台企业。例如：
            <Link to="/business/service" className="text-primary underline">
              项目管理
            </Link>
            。我们不仅提供能提升企业层面管理成熟度的解决方案，也提供能提升现场个人相关技能的解决方案。同时，我们还提供面向个人层级的职业管理咨询和各种
            <Link to="/business/training" className="text-primary underline">
              培训
            </Link>
            。此外，我们不局限于单纯的项目管理，还通过培养项目管理者·PMO、以及提供能够提高项目管理成熟度的软件"
            <a
              href="https://score-top.proever.com/cn/index.html"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              PROEVER
            </a>
            "等，开展着全球化的活动。今后我们也将不断创造出新的解决方案，致力于成为真正的管理平台。
          </p>
        </ContentSection>
      </div>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            columns={2}
            items={[
              { to: '/business', title: '业务介绍', desc: '我们是一家管理专业公司，主要从事PMO服务的同时，在活用专业技术利于实践的研修安排方面，以及提高管理能力的软件提供等方面也均有涉猎。' },
              { to: '/company', title: '公司信息', desc: '在此为您介绍MSOL的组织体制、公司概要和发展历程等，MSOL以管理之力为社会的幸福度作出了贡献。' },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

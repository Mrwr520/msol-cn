import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';
import { SectionHeading } from '../components/common/SectionHeading';

export default function BusinessPage() {
  useEffect(() => {
    document.title = '业务介绍 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="业务介绍"
        subtitle="作为专业的项目管理公司，我们的主营业务是PMO咨询服务。同时，凭借着在实践中积攒的经验和知识，我们还提供具有实战价值的培训课程，以及提高项目管理能力的软件导入等服务。"
        crumbs={[{ label: '首页', to: '/' }, { label: '业务介绍' }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-14">
        <SectionHeading sub="MSOL 的业务" title="三大核心业务，助力企业项目管理能力全面升级。" />
        <div className="mt-10">
          <LinkCardList
            variant="solid"
            items={[
              {
                to: '/business/service',
                title: '服务',
                desc: '作为专业的项目管理公司，我们在大量实践中积攒了丰富的知识和经验，为客户的烦恼和问题提供解决方案，实行项目的落地支援。',
                icon: '/icons/icon_service.svg',
              },
              {
                to: '/business/training',
                title: '培训',
                desc: '于MSOL丰富严谨的项目管理理论和方法论，我们提供的培训课程包含基本能力训练的初阶课程，以及项目实战训练的高阶课程。',
                icon: '/icons/icon_training.svg',
              },
              {
                to: '/business/software',
                title: 'PROEVER',
                desc: '我们提供专业软件「PROEVER」，可以便捷地实现问题管理·风险管理·知识共享·项目可视化等功能，帮助您顺利推动项目。',
                icon: '/icons/icon_software.svg',
              },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

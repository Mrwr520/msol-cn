import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';

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

      <div className="mx-auto max-w-3xl px-6 py-14">
        <ContentSection title="培训计划">
          <p>
            我们的培训课程以项目管理的理论・方法论为基础，结合实践应用。通过我们的网上课程和团体研修课，您能够获取PDU积分以维持PMP®等PMI专业资格。作为教育机构，我们经过PMI官方认证，所授课程具备发放PDU（或PMP考试所需的培训证明）的资质。不限时间地点，且价格优惠的网上课程，包含风险管理，逻辑思维，教练技术，范围管理等多款课程供您选择。
          </p>
          <Reveal type="fade">
            <img
              src="/img/training/img_training-program_cn.jpg"
              alt="培训计划图片"
              className="mx-auto w-full max-w-2xl rounded"
            />
          </Reveal>
        </ContentSection>

        <Reveal type="fade" className="flex flex-col items-center gap-4 rounded border border-line p-6 md:flex-row md:items-start">
          <img src="/img/logo_pmi.png" alt="项目管理协会徽标" className="h-14 w-auto shrink-0" />
          <p className="text-xs leading-relaxed text-ink/60">
            MBOK、PMP是项目管理协会(Project Management Institute,Inc)的注册商标。 PMI Registered Education
            Provider标志是项目管理协会(Project Management Institute,Inc.)的注册商标。MSOL经PMI批准，作为R.E.P提供培训课程并发行PDU。
          </p>
        </Reveal>
      </div>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            items={[
              { to: '/business/service', title: '服务', desc: '作为项目管理专家公司，我们在大量实践中积攒了丰富经验和知识，为客户的烦恼和问题提供解决方案，实行项目支持。' },
              { to: '/business/training', title: '培训', desc: '基于MSOL丰富严谨的项目管理理论和方法论，我们提供的培训课程包含从基本能力训练的初阶课程，到项目实战训练的高阶课程。', current: true },
              { to: '/business/software', title: 'PROEVER', desc: '我们提供专业软件「PROEVER」，轻松实现问题管理·风险管理·知识共享·项目可视化等功能，帮助您顺利推动项目。' },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

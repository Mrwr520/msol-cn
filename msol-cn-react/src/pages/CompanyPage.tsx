import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';
import { SectionHeading } from '../components/common/SectionHeading';

export default function CompanyPage() {
  useEffect(() => {
    document.title = '公司信息 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="公司信息"
        subtitle="麦嵩隆管理咨询（上海）有限公司是一家专注于PMO咨询服务的公司。公司总部设立在日本东京，是全球唯一一家通过提供PMO咨询服务而上市的咨询公司。※东京证券交易所 市场第一部(证券代码:7033)"
        crumbs={[{ label: '首页', to: '/' }, { label: '公司信息' }]}
      />

      <section className="mx-auto max-w-5xl px-6 py-14">
        <SectionHeading sub="了解 MSOL" title="从公司概要到董事团队，全面了解我们的组织与发展。" />
        <div className="mt-10">
          <LinkCardList
            variant="solid"
            items={[
              {
                to: '/company/company-data',
                title: '公司概要',
                desc: 'MSOL集团的规模、成立时间、管理层、公司所在地等。',
                icon: '/icons/icon_data.svg',
              },
              {
                to: '/company/history',
                title: '发展历程',
                desc: '为您介绍MSOL自2005年成立以来，发展至今的公司历程。',
                icon: '/icons/icon_history.svg',
              },
              {
                to: '/company/director',
                title: '董事信息',
                desc: '为您介绍公司董事。',
                icon: '/icons/icon_director.svg',
              },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

import { useEffect } from 'react';
import { HeroVideo } from '../components/home/HeroVideo';
import { HeroSlide } from '../components/home/HeroSlide';
import { SectionHeading } from '../components/common/SectionHeading';
import { BusinessList } from '../components/home/BusinessList';
import { NewsPreview } from '../components/home/NewsPreview';
import { ContactCta } from '../components/common/ContactCta';

export default function HomePage() {
  useEffect(() => {
    document.title = 'MSOL助推项目0失败';
  }, []);

  return (
    <>
      <HeroVideo />
      <HeroSlide />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
        <SectionHeading
          sub="MSOL 的业务"
          title="我们凭借作为专业的管理咨询公司积累的知识经验和技巧，解决客户的课题、为客户提供各种支援。"
        />
        <div className="mt-10">
          <BusinessList />
        </div>
      </section>

      <section className="bg-line/20 py-16">
        <NewsPreview />
      </section>

      <ContactCta />
    </>
  );
}

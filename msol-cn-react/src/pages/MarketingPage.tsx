import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { VideoSection } from '../components/common/VideoSection';

export default function MarketingPage() {
  useEffect(() => {
    document.title = '麦嵩隆管理咨询 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="麦嵩隆管理咨询"
        subtitle="引领PMO时代的项目管理咨询公司"
        crumbs={[{ label: '首页', to: '/' }, { label: '公司及产品的视频介绍' }]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <VideoSection
          title="公司介绍"
          src="/video/MSOL_Company_Profile_CN.mp4"
          poster="/img/img_main_movie_sp_01.jpg"
        />
        <VideoSection
          title="PROEVER助推项目「０」失败"
          src="/video/PROEVER_INTRO_CN.mp4"
          poster="/img/img_main_movie_sp_02.jpg"
        />
      </div>
    </>
  );
}

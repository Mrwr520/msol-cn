import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { VideoSection } from '../components/common/VideoSection';

export default function TvcmPage() {
  useEffect(() => {
    document.title = 'TV CM | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="TV CM"
        subtitle="MSOL引领PMO时代的项目管理咨询公司"
        crumbs={[{ label: '首页', to: '/' }, { label: 'TV CM' }]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <VideoSection
          title="「PMO ってなんなんだ？」編（30秒）"
          src="/video/movie-01.mp4"
          poster="/img/img_main_movie_sp_01.jpg"
        />
        <VideoSection
          title="「PMO ってなんなんだ？」親子共演編（30秒）"
          src="/video/movie-02.mp4"
          poster="/img/img_main_movie_sp_02.jpg"
        />
        <VideoSection
          title="メイキング・インタビュー"
          src="/video/movie-03.mp4"
          poster="/img/img_main_movie_sp_03.jpg"
        />
      </div>
    </>
  );
}

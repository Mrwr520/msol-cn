import { Reveal } from './Reveal';

type VideoSectionProps = {
  title: string;
  src: string;
  poster?: string;
};

/** 还原原站 c-section-1 + video.js 播放区块，用于宣传视频/公司介绍视频列表 */
export function VideoSection({ title, src, poster }: VideoSectionProps) {
  return (
    <section className="py-8">
      <Reveal type="fade">
        <h2 className="text-xl font-bold text-ink md:text-2xl">{title}</h2>
      </Reveal>
      <Reveal type="fade" delay={2} className="mt-5">
        <video className="w-full rounded" controls preload="auto" poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
      </Reveal>
    </section>
  );
}

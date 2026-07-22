import { Reveal } from '../common/Reveal';
import { Button } from '../common/Button';
import { assetUrl } from '../../utils/asset';

/**
 * 首页首屏视频背景，还原原站 p-grand-visual.-video：
 * 自动播放、静音、循环的背景视频 + 叠加文案 + CTA 按钮。
 * 原站用 video.js 只是为了统一控件外观，这里 controls=false 时用原生 <video> 即可，
 * 移动端设备很多浏览器策略上仍允许 muted+autoPlay+playsInline 自动播放。
 */
export function HeroVideo() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-primary-dark text-white lg:min-h-[80vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        poster={assetUrl('/img/img_main_movie_sp_05.jpg')}
      >
        <source src={assetUrl('/video/movie-04.mp4')} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center">
        <Reveal type="fade">
          <p className="text-2xl font-bold leading-relaxed md:text-4xl">
            让管理、成为推动世界进步的引擎
          </p>
        </Reveal>
        <Reveal type="fade" delay={5}>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed md:text-base">
            无论是经营层，还是基层
            <br className="hidden md:block" />
            无论您的项目规模是大，是小
            <br className="hidden md:block" />
            我们，将以行业最前线的实力
            <br className="hidden md:block" />
            以客观的角度，运用灵活地分析及处理能力，
            <br className="hidden md:block" />
            推进式落地支援、助您引领项目走向成功
          </p>
        </Reveal>
        <Reveal type="fade" delay={10} className="mt-8 inline-block">
          <Button
            href="https://score-top.proever.com/cn/index.html"
            target="_blank"
            variant="darkblue"
            className="!w-auto px-8"
          >
            项目管理能力诊断
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

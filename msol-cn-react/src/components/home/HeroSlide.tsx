import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Arrow } from '../common/Arrow';
import { assetUrl } from '../../utils/asset';

/** 还原原站第二个 p-grand-visual：大图背景 + 标题文案 + 「MSOL 的特色」入口 */
export function HeroSlide() {
  return (
    <section className="relative overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcSet={assetUrl('/img/img_main_01@2x.jpg')} />
        <img
          src={assetUrl('/img/img_main_01_sp@2x.jpg')}
          alt=""
          className="h-[70vw] w-full object-cover md:h-[36vw] md:max-h-[560px]"
        />
      </picture>
      <div className="absolute inset-0 flex items-center bg-black/25">
        <div className="mx-auto w-full max-w-5xl px-6 text-white">
          <Reveal type="swipe">
            <p className="text-xl font-bold leading-relaxed md:text-3xl">
              让管理成为驱动世界发展的原动力。
            </p>
          </Reveal>
          <Reveal type="swipe" delay={10} className="mt-4 max-w-xl">
            <p className="text-sm leading-relaxed md:text-base">
              作为一家专注于项目管理咨询服务的集团公司，我们将充分运用客观的视角及灵活的分析处理能力提供实际支援，从而引领企业各个层级不同项目走向成功。
            </p>
          </Reveal>
          <Reveal type="swipe" delay={10} className="mt-6">
            <Link
              to="/feature"
              className="group inline-flex items-center rounded bg-primary-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-mid"
            >
              MSOL 的特色
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

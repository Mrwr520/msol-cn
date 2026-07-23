import { assetUrl } from '../../utils/asset';

/**
 * 首页首屏：地球主视觉作背景，20 周年 KV 叠加在上方。
 * 整块可点击，跳转到 20 周年特设站。
 */
export function HeroVideo() {
  return (
    <section className="relative overflow-hidden bg-primary-dark">
      {/* 地球背景大图 */}
      <img
        src={assetUrl('/img/img_hero_bg.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* 20 周年 KV，叠加在地球上 */}
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 lg:min-h-[80vh]">
        <img
          src={assetUrl('/img/img_20th_kv.png')}
          alt="MSOL 20th Anniversary"
          className="w-full max-w-5xl drop-shadow-2xl"
        />
        <a
          href="https://www.msols.com/20th/"
          target="_blank"
          rel="noreferrer"
          className="group mt-16 inline-flex w-full max-w-md items-center justify-center gap-2 rounded border-2 border-[#b8964d] bg-white/5 px-12 py-6 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
        >
          查看 20 周年特设站
          <span aria-hidden className="text-[#b8964d] transition-transform group-hover:translate-x-1">›</span>
        </a>
      </div>
    </section>
  );
}

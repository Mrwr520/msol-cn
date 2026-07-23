import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * 还原原站 l-page-top：滚动超过一屏后出现的回到顶部按钮。
 * 原站背景不是静态色块，而是三层不同颜色/透明度的圆形持续旋转叠加，
 * 形成水波蠕动效果（.l-page-top__wave span:nth-child(1/2/3) 分别以
 * 5s/8s/2s 的速度线性无限旋转），hover 时波纹层整体上滑、箭头上跳。
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="回到顶部"
      onClick={() => {
        const start = window.scrollY;
        if (start < 1) return;
        const duration = 600;
        let startTime: number | null = null;
        const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        const step = (now: number) => {
          if (startTime === null) startTime = now;
          const elapsed = Math.min((now - startTime) / duration, 1);
          window.scrollTo(0, start * (1 - ease(elapsed)));
          if (elapsed < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }}
      className={`group fixed bottom-6 right-6 z-[150] h-[60px] w-[60px] overflow-hidden rounded bg-primary-mid shadow-lg transition-all duration-400 ease-msol ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[10px] opacity-0 pointer-events-none'
      }`}
    >
      {/* 波纹层：hover 时整体上滑，露出下方箭头动效空间 */}
      <span className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-[2500ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:-translate-y-[150%]">
        <motion.span
          className="absolute inset-0 rounded-[70%] bg-primary-dark opacity-100"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className="absolute inset-0 rounded-[40%] bg-white opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className="absolute inset-0 rounded-[43%] bg-yellow-300 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </span>

      {/* 箭头：hover 时上移 4px */}
      <span className="absolute left-1/2 top-[55%] z-30 block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l-2 border-t-2 border-white transition-transform duration-250 ease-msol group-hover:-translate-y-[calc(50%+4px)]" />
    </button>
  );
}

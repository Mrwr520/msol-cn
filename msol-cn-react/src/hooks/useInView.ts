import { useEffect, useRef, useState } from 'react';

/**
 * 还原原站 ScrollUpdater 的行为：元素滚入视口一次性触发动画，
 * 触发后断开观察（对应原站 js-scrollup-container 逻辑，不会反复播放）。
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 减少动态判断带来的复杂度：如果元素已经在视口内（比如首屏内容），直接显示
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/nav';
import { assetUrl } from '../../utils/asset';

/** 对应原站 HeaderScroll 的触发阈值（scrollTop > 200 时收缩+变色） */
const SCROLL_THRESHOLD = 200;

/**
 * 还原原站 l-header：桌面端固定顶部导航 + 移动端汉堡菜单（侧滑抽屉）。
 * 原站 CSS 断点 64em(≈1024px) 是 PC/SP 切换点，这里对应 Tailwind 的 lg。
 * 桌面端滚动超过阈值后，header 会收缩高度（76px→44px）+ 背景变深蓝 +
 * logo 从彩色版本交叉淡出淡入切换成白色版本 + 导航文字变浅蓝，对应原站
 * HeaderScroll 类的 -fixed 状态，仅在 lg 及以上断点生效。
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((prev) => (prev === label ? null : label));
  };

  return (
    <header className="relative z-[200] w-full bg-white lg:fixed lg:z-[1000] lg:bg-primary-dark lg:after:absolute lg:after:bottom-[-4px] lg:after:left-0 lg:after:z-[1] lg:after:h-1 lg:after:w-full lg:after:bg-primary-dark">
      {/*
        PC 端始终以深蓝作为安全底色，白色覆盖层在滚动后以顶部为原点收起：
        覆盖层的底边向上移动，因此视觉上是深蓝从下往上出现。
        即使快速跨过阈值或高度正在收缩，露出的也只会是深蓝，不会闪出白底。
      */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 hidden origin-top transform-gpu bg-white transition-transform duration-[450ms] ease-msol lg:block ${
          scrolled ? 'scale-y-0' : 'scale-y-100'
        }`}
      />

      <div
        className={`relative z-10 mx-auto flex h-[60px] items-center justify-between px-4 transition-[height] duration-[400ms] ease-msol lg:px-8 ${
          scrolled ? 'lg:h-11 lg:delay-[50ms]' : 'lg:h-[76px] lg:delay-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <Link to="/" className="relative block h-8 overflow-hidden lg:h-9">
            <img
              src={assetUrl('/icons/logo.svg')}
              alt="MSOL徽标"
              className={`h-8 transform-gpu transition-[opacity,transform] duration-300 ease-msol lg:h-9 ${
                scrolled
                  ? 'lg:-translate-y-2 lg:opacity-0 lg:delay-[120ms]'
                  : 'lg:translate-y-0 lg:opacity-100 lg:delay-[100ms]'
              }`}
            />
            <img
              src={assetUrl('/icons/logo_white.svg')}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 hidden h-8 transform-gpu transition-[opacity,transform] duration-300 ease-msol lg:block lg:h-9 ${
                scrolled
                  ? 'lg:translate-y-0 lg:opacity-100 lg:delay-[180ms]'
                  : 'lg:-translate-y-2 lg:opacity-0 lg:delay-0'
              }`}
            />
          </Link>
          <div className="relative block h-8 translate-y-[2px] overflow-hidden lg:h-9">
            <img
              src={assetUrl('/icons/msol_20th-logo.svg')}
              alt="MSOL 20周年"
              className={`h-8 transform-gpu transition-[opacity,transform] duration-300 ease-msol lg:h-9 ${
                scrolled
                  ? 'lg:-translate-y-2 lg:opacity-0 lg:delay-[120ms]'
                  : 'lg:translate-y-0 lg:opacity-100 lg:delay-[100ms]'
              }`}
            />
            <img
              src={assetUrl('/icons/msol_20th-logo_white.svg')}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 hidden h-8 transform-gpu transition-[opacity,transform] duration-300 ease-msol lg:block lg:h-9 ${
                scrolled
                  ? 'lg:translate-y-0 lg:opacity-100 lg:delay-[180ms]'
                  : 'lg:-translate-y-2 lg:opacity-0 lg:delay-0'
              }`}
            />
          </div>
        </div>

        {/* SP 汉堡按钮 */}
        <button
          type="button"
          aria-label="菜单开关"
          aria-expanded={menuOpen}
          className="relative z-[210] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block h-[2px] w-6 bg-primary-dark transition-transform duration-250 ease-msol ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-primary-dark transition-opacity duration-250 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-primary-dark transition-transform duration-250 ease-msol ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* PC 导航：lg 下使用紧凑间距，确保 1024px 宽度可完整容纳语言入口 */}
        <nav className="hidden items-center gap-3 lg:flex xl:gap-6">
          <ul className="flex items-center gap-4 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className={`py-2 text-sm font-bold transition-colors duration-100 delay-0 ${
                    scrolled
                      ? 'text-[#7ba5e2] hover:text-white'
                      : 'text-ink hover:text-primary-dark'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-30 min-w-[180px] rounded bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        {child.to.startsWith('http') ? (
                          <a
                            href={child.to}
                            target="_blank"
                            rel="noreferrer"
                            className="block whitespace-nowrap px-4 py-2 text-sm text-ink hover:bg-line/40 hover:text-primary-dark"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            to={child.to}
                            className="block whitespace-nowrap px-4 py-2 text-sm text-ink hover:bg-line/40 hover:text-primary-dark"
                          >
                            {child.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/*
            桌面语言切换：details 提供原生点击/键盘开合；hover 与 focus-within
            同时显示选项，避免仅依赖鼠标。下拉使用高层级覆盖 Header 底部蓝线。
          */}
          <details className="group relative shrink-0">
            <summary
              className={`flex min-w-[68px] cursor-pointer list-none items-center justify-center gap-1 rounded border px-3 py-[7px] text-sm font-bold outline-none transition-[color,background-color,border-color] duration-100 [&::-webkit-details-marker]:hidden ${
                scrolled
                  ? 'border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/70'
                  : 'border-primary-dark/20 bg-white/80 text-primary-dark hover:border-primary hover:bg-[#eef5ff] focus-visible:ring-2 focus-visible:ring-primary/40'
              }`}
              aria-label="选择网站语言，当前为中文"
            >
              中文
              <svg
                aria-hidden="true"
                viewBox="0 0 12 8"
                className="h-2 w-3 transition-transform duration-150 group-open:rotate-180"
              >
                <path
                  d="M1 1.25 6 6.25l5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </summary>
            <div className="invisible absolute right-0 top-[calc(100%+8px)] z-[100] w-[148px] translate-y-1 overflow-hidden rounded-md border border-line bg-white py-1 opacity-0 shadow-[0_12px_32px_rgba(0,38,89,0.2)] transition-[opacity,transform,visibility] duration-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-open:visible group-open:translate-y-0 group-open:opacity-100">
              <span
                aria-current="true"
                className="flex items-center justify-between px-4 py-2.5 text-sm font-bold text-primary-dark"
              >
                中文
                <span className="text-[10px] font-semibold text-primary">当前</span>
              </span>
              <a
                href="https://www.msols.com/"
                target="_blank"
                rel="noreferrer"
                className="block border-t border-line/70 px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-100 hover:bg-[#eef5ff] hover:text-primary-dark focus:bg-[#eef5ff] focus:text-primary-dark focus:outline-none"
              >
                日本語
              </a>
              <a
                href="https://www.msols.com/en/"
                target="_blank"
                rel="noreferrer"
                className="block border-t border-line/70 px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-100 hover:bg-[#eef5ff] hover:text-primary-dark focus:bg-[#eef5ff] focus:text-primary-dark focus:outline-none"
              >
                English
              </a>
            </div>
          </details>
        </nav>
      </div>

      {/* SP 抽屉菜单 */}
      <div
        className={`fixed inset-0 z-[205] bg-black/40 transition-opacity duration-250 lg:hidden ${
          menuOpen ? 'opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`fixed right-0 top-0 z-[206] h-full w-[280px] overflow-y-auto bg-white transition-transform duration-250 ease-msol lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col pt-[70px]">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="border-b border-line">
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold text-ink"
                    onClick={() => toggleAccordion(item.label)}
                  >
                    {item.label}
                    <span
                      className={`transition-transform duration-250 ${
                        openAccordion === item.label ? 'rotate-180' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden bg-line/20 transition-all duration-250 ${
                      openAccordion === item.label ? 'max-h-[300px]' : 'max-h-0'
                    }`}
                  >
                    {item.children.map((child) =>
                      child.to.startsWith('http') ? (
                        <a
                          key={child.to}
                          href={child.to}
                          target="_blank"
                          rel="noreferrer"
                          className="block px-8 py-3 text-sm text-ink"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-8 py-3 text-sm text-ink"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className="block px-5 py-4 text-sm font-bold text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* SP 独立语言区：触屏直接呈现全部选项，无需 hover */}
        <div className="mx-5 mb-6 mt-4 border-t border-primary-dark/15 pt-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-dark/55">
            Language
          </p>
          <div className="grid grid-cols-1 overflow-hidden rounded-md border border-line">
            <span
              aria-current="true"
              className="flex items-center justify-between bg-[#eef5ff] px-4 py-3 text-sm font-bold text-primary-dark"
            >
              中文
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white">
                当前
              </span>
            </span>
            <a
              href="https://www.msols.com/"
              target="_blank"
              rel="noreferrer"
              className="border-t border-line px-4 py-3 text-sm font-medium text-ink active:bg-[#eef5ff]"
            >
              日本語
            </a>
            <a
              href="https://www.msols.com/en/"
              target="_blank"
              rel="noreferrer"
              className="border-t border-line px-4 py-3 text-sm font-medium text-ink active:bg-[#eef5ff]"
            >
              English
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

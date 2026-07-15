import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, CONTACT_LINK } from '../../data/nav';

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
        <Link to="/" className="relative block h-8 overflow-hidden lg:h-9">
          <img
            src="/icons/logo.svg"
            alt="MSOL徽标"
            className={`h-8 transform-gpu transition-[opacity,transform] duration-300 ease-msol lg:h-9 ${
              scrolled
                ? 'lg:-translate-y-2 lg:opacity-0 lg:delay-[120ms]'
                : 'lg:translate-y-0 lg:opacity-100 lg:delay-[100ms]'
            }`}
          />
          <img
            src="/icons/logo_white.svg"
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 hidden h-8 transform-gpu transition-[opacity,transform] duration-300 ease-msol lg:block lg:h-9 ${
              scrolled
                ? 'lg:translate-y-0 lg:opacity-100 lg:delay-[180ms]'
                : 'lg:-translate-y-2 lg:opacity-0 lg:delay-0'
            }`}
          />
        </Link>

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

        {/* PC 导航 */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          <ul className="flex items-center gap-5 xl:gap-7">
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
                        <Link
                          to={child.to}
                          className="block whitespace-nowrap px-4 py-2 text-sm text-ink hover:bg-line/40 hover:text-primary-dark"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            to={CONTACT_LINK.to}
            className="rounded bg-primary px-5 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            {CONTACT_LINK.label}
          </Link>
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
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-8 py-3 text-sm text-ink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
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
          <li>
            <Link
              to={CONTACT_LINK.to}
              className="block px-5 py-4 text-sm font-bold text-primary-dark"
              onClick={() => setMenuOpen(false)}
            >
              {CONTACT_LINK.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

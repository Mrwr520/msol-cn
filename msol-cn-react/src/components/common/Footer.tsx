import { Link } from 'react-router-dom';
import { assetUrl } from '../../utils/asset';
import { NAV_ITEMS, CONTACT_LINK } from '../../data/nav';

const SOCIAL_LINKS = [
  { label: '微信', icon: '/icons/icon_wechat.png', qr: '/img/qr_wechat.jpg', tall: false },
  { label: '小红书', icon: '/icons/icon_xiaohongshu.png', qr: '/img/qr_xiaohongshu.jpg', tall: true },
  { label: '抖音', icon: '/icons/icon_douyin.png', qr: '/img/qr_douyin.jpg', tall: true },
];

/** 底部导航列：特长 / 业务介绍 / 公司信息 / 新闻 / 联系我们，还原原站 l-footer-nav 五栏结构 */
function FooterNavColumns() {
  const columns: { label: string; to: string; children?: { label: string; to: string }[] }[] = [
    ...NAV_ITEMS.filter((item) => item.to !== '/'),
    CONTACT_LINK,
  ];

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
      {columns.map((item) => (
        <div key={item.to}>
          <Link to={item.to} className="text-sm font-bold text-ink hover:text-primary">
            {item.label}
          </Link>
          {'children' in item && item.children && (
            <ul className="mt-3 space-y-2">
              {item.children.map((child: { label: string; to: string }) => (
                <li key={child.to}>
                  <Link to={child.to} className="text-sm text-ink/70 hover:text-primary">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/** 社交账号图标组，鼠标悬停/移动端点击显示对应二维码 */
function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map((s) => (
        <div key={s.label} className="group relative">
          <span
            className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg"
            aria-label={s.label}
          >
            <img src={assetUrl(s.icon)} alt={s.label} className="h-full w-full object-cover" />
          </span>
          {/* 移动端：屏幕居中弹出，避免溢出；桌面端：图标正上方弹出 */}
          <div className="pointer-events-none fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:absolute sm:bottom-[calc(100%+16px)] sm:left-1/2 sm:top-auto sm:-translate-x-1/2 sm:translate-y-0">
            <div className="rounded-lg border border-line bg-white p-2 shadow-xl">
              <img
                src={assetUrl(s.qr)}
                alt={`${s.label}二维码`}
                className={`block w-64 max-w-none rounded object-contain ${s.tall ? 'h-80' : 'h-64'}`}
              />
              <span className="mt-1 block text-center text-xs text-ink/70">{s.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** 还原原站 l-footer：导航列 + 公司信息/logo/社交账号 + 备案信息 */
export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white pt-10 lg:mt-24 lg:pt-16">
      <div className="mx-auto max-w-5xl px-4 pb-10">
        <FooterNavColumns />

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 lg:flex-row lg:items-start lg:justify-between">
          <ul className="space-y-1 text-xs text-ink/80">
            <li>麦嵩隆管理咨询(上海)有限公司</li>
            <li>邮编:200040</li>
            <li>地址:上海市静安区 静安中华大厦2610室</li>
            <li>电话:400-666-7959</li>
            <li>邮件地址:info@cn.msols.com</li>
          </ul>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link to="/">
              <img src={assetUrl('/icons/logo.svg')} alt="MSOL徽标" className="h-8" />
            </Link>
            <SocialIcons />
          </div>
        </div>

        <div id="footer-social" className="scroll-mt-24" />

        <div className="mt-6 text-center">
          <Link to="/privacy" className="text-xs text-ink underline hover:text-primary">
            隐私条款
          </Link>
        </div>
      </div>

      <div className="border-t border-line py-6 text-center text-xs text-ink/60">
        <p>&copy; Management Solutions co., ltd. / 麦嵩隆管理咨询(上海)有限公司</p>
        <p className="mt-2">沪ICP备20004330</p>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602005510"
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center justify-center gap-2"
        >
          <img src={assetUrl('/img/beian.png')} alt="" className="h-5" />
          <span>沪公网安备 31010602005510号</span>
        </a>
      </div>
    </footer>
  );
}

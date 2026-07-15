import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { label: '首页', to: '/' },
  { label: '特长', to: '/feature' },
  { label: '业务介绍', to: '/business' },
  { label: '公司信息', to: '/company' },
  { label: '通知', to: '/news' },
  { label: '联系我们', to: '/contact' },
];

/** 还原原站 l-footer：链接列表 + 公司信息 + 备案信息 */
export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white pt-10 lg:mt-24 lg:pt-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 pb-10 lg:flex-row lg:items-start lg:justify-between">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm lg:justify-start">
          {FOOTER_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-ink hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-3 text-center text-xs text-ink/80 lg:items-end lg:text-right">
          <Link to="/">
            <img src="/icons/logo.svg" alt="MSOL徽标" className="h-7" />
          </Link>
          <ul className="space-y-1">
            <li>麦嵩隆管理咨询(上海)有限公司</li>
            <li>邮编:200040</li>
            <li>地址:上海市静安区 静安中华大厦2610室</li>
            <li>电话:400-666-7959</li>
            <li>邮件地址:info@cn.msols.com</li>
            <li>
              <Link to="/privacy" className="text-ink underline hover:text-primary">
                隐私条款
              </Link>
            </li>
          </ul>
          <img src="/img/logo_pmi.png" alt="项目管理协会徽标" className="h-10" />
          <p>&copy; Management Solutions co., ltd. / 麦嵩隆管理咨询(上海)有限公司</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-line py-4 text-[11px] text-ink/60">
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602005510"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <img src="/img/beian.png" alt="" className="h-5" />
          <span>沪公网安备 31010602005510号 沪ICP备20004330</span>
        </a>
      </div>
    </footer>
  );
}

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

/** 对应原站 l-header__nav 主菜单结构 */
export const NAV_ITEMS: NavItem[] = [
  { label: '首页', to: '/' },
  {
    label: '特长',
    to: '/feature',
    children: [
      { label: '特长', to: '/feature' },
      { label: 'MSOL的使命', to: '/feature/mission' },
    ],
  },
  {
    label: '业务介绍',
    to: '/business',
    children: [
      { label: '业务介绍', to: '/business' },
      { label: '服务', to: '/business/service' },
      { label: 'PROEVER', to: '/business/software' },
      { label: '培训', to: '/business/training' },
    ],
  },
  {
    label: '公司信息',
    to: '/company',
    children: [
      { label: '公司信息', to: '/company' },
      { label: '公司概要', to: '/company/company-data' },
      { label: '董事信息', to: '/company/director' },
      { label: '发展历程', to: '/company/history' },
    ],
  },
  { label: '新闻', to: '/news' },
  { label: '图书推荐', to: '/books' },
];

export const CONTACT_LINK = { label: '联系我们', to: '/contact' };

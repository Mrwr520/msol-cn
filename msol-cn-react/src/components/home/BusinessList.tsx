import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Arrow } from '../common/Arrow';
import { assetUrl } from '../../utils/asset';

const BUSINESS_ITEMS = [
  {
    to: '/business/service',
    img: '/img/img_approach_01.svg',
    label: 'PMO',
    desc: '人力托举项目成功',
    links: [
      { label: '什么是PMO？', to: '/business/service' },
      { label: 'EPMO/部门项目管理办公室', to: '/business/service' },
    ],
  },
  {
    to: '/business/software',
    img: '/img/img_approach_02.svg',
    label: 'PROEVER',
    desc: '软件优化管理效率',
    links: [{ label: 'PROEVER', to: '/business/software' }],
  },
  {
    to: '/business/training',
    img: '/img/img_approach_03.svg',
    label: 'TRAINING',
    desc: '培训构筑管理未来',
    links: [{ label: '训练', to: '/business/training' }],
  },
];

/**
 * 首页业务入口：还原官网 p-approach 三栏插画样式。
 * 浅底卡片，顶部英文小标题 + 圆形插画 + 中文文案 + 底部子链接组，栏间竖分割线。
 */
export function BusinessList() {
  return (
    <ul className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
      {BUSINESS_ITEMS.map((item, i) => (
        <Reveal key={item.to} type="swipe" delay={i + 1} as="li" className="h-full">
          <div className="flex h-full flex-col items-center px-6 py-8 text-center">
            <Link to={item.to} className="group flex flex-col items-center">
              <span className="text-lg font-bold tracking-wide text-primary-dark">
                {item.label}
              </span>
              <img
                src={assetUrl(item.img)}
                alt=""
                className="my-6 h-40 w-auto transition-transform duration-400 ease-msol group-hover:scale-105"
              />
              <span className="text-base font-bold text-primary-dark">{item.desc}</span>
            </Link>

            <ul className="mt-6 w-full max-w-[280px] space-y-2">
              {item.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between border-b border-line py-2 text-left text-sm text-ink/70 transition-colors hover:text-primary"
                  >
                    <span>- {link.label}</span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

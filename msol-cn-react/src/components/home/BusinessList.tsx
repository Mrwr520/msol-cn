import { Link } from 'react-router-dom';
import { Reveal } from '../common/Reveal';
import { Arrow } from '../common/Arrow';
import { assetUrl } from '../../utils/asset';

const BUSINESS_ITEMS = [
  {
    to: '/business/service',
    icon: '/icons/icon_service.svg',
    name: '服务',
    desc: '以中立第三方的视角，根据客户需求进行可实施的项目管理咨询，推进项目并引领项目走向成功',
  },
  {
    to: '/business/software',
    icon: '/icons/icon_software.svg',
    name: 'PROEVER',
    desc: '新一代项目管理软件，能让您无师自通，更好的提升项目管理能力，助推项目「零」失败',
  },
  {
    to: '/business/training',
    icon: '/icons/icon_training.svg',
    name: '培训',
    desc: '在理论・方法论的基础上，提供案例与项目管理实践知识',
  },
];

/**
 * 还原原站 p-business-list：三张业务卡片，深蓝底色，
 * hover 时 :before 渐变层从左侧滑入（对应原站 -webkit-transform: translate(-100%,0)→(0,0)）。
 */
export function BusinessList() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {BUSINESS_ITEMS.map((item, i) => (
        <Reveal key={item.to} type="swipe" delay={i + 1} as="li">
          <Link
            to={item.to}
            className="group relative flex min-h-[120px] items-center overflow-hidden rounded bg-primary-dark px-4 py-5 text-white md:block md:min-h-[360px] md:px-3 md:pt-[87px] md:text-center"
          >
            <span className="absolute inset-0 z-0 -translate-x-full bg-primary-mid transition-transform duration-400 ease-msol group-hover:translate-x-0" />
            <span className="relative z-10 mr-4 flex h-[45px] w-[45px] shrink-0 items-center justify-center md:mx-auto md:mb-6 md:h-[85px] md:w-auto">
              <img src={assetUrl(item.icon)} alt="" className="h-full w-auto" />
            </span>
            <span className="relative z-10">
              <span className="flex items-center text-base font-bold md:justify-center md:text-lg">
                {item.name}
                <Arrow />
              </span>
              <span className="mt-2 block text-sm leading-relaxed opacity-90 md:mt-3">
                {item.desc}
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

export default function CompanyPage() {
  useEffect(() => {
    document.title = '公司信息 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      {/* 面包屑导航 */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-5xl px-6 py-3">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">首页</Link>
            <span className="mx-2">&gt;</span>
            <span>公司信息</span>
          </nav>
        </div>
      </div>

      {/* 主内容区域 */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* 左侧：标题 + 链接列表 */}
            <div className="flex-1">
              {/* 标题区域 */}
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                公司信息
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed mb-10">
                为您介绍以管理之力创造社会幸福的 MSOL，包含组织架构、公司概况、发展历程等相关信息。
              </p>

              {/* 分隔线 */}
              <div className="w-12 h-[3px] bg-primary mb-8"></div>

              {/* 链接列表 */}
              <div className="space-y-8">
                {/* 公司简介 */}
                <Link
                  to="/company/company-data"
                  className="group block"
                >
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:underline">
                    公司简介 <span className="text-yellow-500">›</span>
                  </h3>
                  <p className="text-sm text-gray-500">全面介绍 MSOL 的经营资质信息。如成立日期、企业地址、注册资本等。</p>
                </Link>

                {/* 三ZERO宣言 */}
                <a
                  href="https://www.msols.com/company/3zero/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:underline">
                    三ZERO宣言 <span className="text-yellow-500">›</span>
                  </h3>
                  <p className="text-sm text-gray-500">介绍落地健康经营理念的 "三ZERO" 相关举措。</p>
                </a>

                {/* MSOL的健康经营 */}
                <a
                  href="https://www.msols.com/company/health/"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:underline">
                    MSOL的健康经营 <span className="text-yellow-500">›</span>
                  </h3>
                  <p className="text-sm text-gray-500">介绍 MSOL 在健康经营方面开展的各项举措。</p>
                </a>

                {/* 发展历程 */}
                <Link
                  to="/company/history"
                  className="group block"
                >
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:underline">
                    发展历程 <span className="text-yellow-500">›</span>
                  </h3>
                  <p className="text-sm text-gray-500">梳理介绍 MSOL 自 2005 年成立至今的企业发展历程。</p>
                </Link>
              </div>
            </div>

            {/* 右侧：图片 */}
            <div className="md:w-[280px] lg:w-[340px] flex-shrink-0">
              <img
                src={assetUrl('/img/company_hero.png')}
                alt="公司信息"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

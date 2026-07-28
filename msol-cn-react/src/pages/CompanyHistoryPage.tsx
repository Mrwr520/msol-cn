import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { InfoTable } from '../components/common/InfoTable';
import { ContactCta } from '../components/common/ContactCta';

const HISTORY = [
  { label: '2005年6月', value: '公司正式成立' },
  { label: '2007年5月', value: '正式对外提供，"PMO"导入管理咨询服务' },
  { label: '2008年5月', value: '以"PMO"管理咨询为主，进一步细分行业提升管理咨询服务范围' },
  { label: '2010年7月', value: '《项目管理办公室(PMO)实践指南》日本版出版' },
  { label: '2012年11月', value: '美国子公司（MSOL INC）正式成立' },
  { label: '2013年5月', value: '在中部名古屋以汽车行业为主，中部分公司正式成立' },
  { label: '2014年8月', value: '《项目管理办公室(PMO)实践指南》英文版出版' },
  { label: '2014年11月', value: '管理咨询服务的扩大，总公司迁址六本木' },
  { label: '2015年11月', value: '台湾子公司 元嵩管理顧問股份有限公司 正式成立' },
  { label: '2016年10月', value: '《项目管理办公室(PMO)实践指南》中文（繁体字）版出版' },
  { label: '2018年4月', value: '《项目管理办公室(PMO)实践指南》中文（简体字）版出版' },
  { label: '2018年6月', value: 'MI SERIES《汽车行业mobility shift》日本版出版' },
  { label: '2018年7月', value: '东京证券交易所 MOTHERS（创业板）上市' },
  { label: '2018年11月', value: '中国子公司 麦嵩隆管理咨询(上海)有限公司 正式成立' },
  { label: '2019年9月', value: '项目管理软件PROEVER（北极星）SaaS 正式上线' },
  { label: '', value: '《PMO不败法则：100个完美收工技巧》中文（简体字）版出版' },
  { label: '2019年10月', value: '东京证券交易所市场第一部上市' },
  { label: '2019年11月', value: 'MI SERIES《赢得国际竞争的管理法》日文版出版' },
  { label: '2020年6月', value: '远程办公时代的全新管理模式『PMO ONLINE』正式上线' },
  { label: '2020年8月', value: '项目管理能力诊断『PROEVER管理评分（Management Score）』正式上线' },
  { label: '2021年7月', value: '《新式自上而下经营指南》日本版出版' },
  { label: '2021年10月', value: '收购株式会社TETRA Software' },
  { label: '2022年4月', value: '东京证券交易所 Prime 主板市场调整变更' },
  { label: '', value: '合并设立株式会社TETRA Digital' },
  { label: '2024年1月', value: '数字化业务分拆剥离，成立株式会社MSOL Digital' },
  { label: '2024年7月', value: '关西分公司正式成立' },
  { label: '2024年10月', value: '麦嵩隆管理咨询首次亮相CIIE' },
  { label: '2024年11月', value: '获得PMI项目管理大会"优秀合作伙伴"' },
  { label: '2025年11月', value: '《突破敏捷困境：来自敏捷实践的144个提示》中文（简体字）版出版' },
  { label: '', value: '新书亮相PMI大会，首届签售会圆满落幕' },
  { label: '2026年3月', value: '业务范围扩大，麦嵩隆管理咨询搬迁新址' },
];

export default function CompanyHistoryPage() {
  useEffect(() => {
    document.title = '发展历程 | 业务介绍 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="发展历程"
        subtitle="为您介绍自2005年以来MSOL集团的发展历程。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '公司信息', to: '/company' },
          { label: '发展历程' },
        ]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <InfoTable rows={HISTORY} />
      </div>

      {/* 深入了解 MSOL */}
      <section className="py-14 md:py-20 border-t border-line">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-gray-500 text-sm mb-4">深入了解 MSOL</p>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-12">
            公司工作氛围灵活自由，员工可随时迎接新挑战，拥有充足自主决策权开展工作。
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <a href="https://www.msols.com/company/health/" target="_blank" rel="noopener noreferrer" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                MSOL的健康经营 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">介绍 MSOL 在健康经营方面开展的各项举措。</p>
            </a>
            <Link to="/company/3zero" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                三ZERO宣言 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">介绍落地健康经营理念的"三ZERO"相关举措。</p>
            </Link>
            <Link to="/company/company-data" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                公司简介 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">全面介绍 MSOL 的经营资质信息。如成立日期、企业地址、注册资本等。</p>
            </Link>
            <Link to="/company/history" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                发展历程 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">梳理介绍 MSOL 自 2005 年成立至今的企业发展历程。</p>
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

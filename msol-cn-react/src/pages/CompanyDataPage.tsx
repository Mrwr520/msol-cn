import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { InfoTable } from '../components/common/InfoTable';
import { ContactCta } from '../components/common/ContactCta';

export default function CompanyDataPage() {
  useEffect(() => {
    document.title = '组织架构 | 公司信息 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="组织架构"
        subtitle="MSOL集团全称、成立日期、管理层人员、企业地址等企业相关营业信息公示。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '公司信息', to: '/company' },
          { label: '组织架构' },
        ]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <InfoTable
          rows={[
            {
              label: '公司名称',
              value: (
                <>
                  株式会社Management Solutions（简称：MSOL）
                  <br />
                  <span className="text-gray-500">英文名：Management Solutions Co., Ltd.</span>
                </>
              ),
            },
            {
              label: '成立日期',
              value: (
                <>
                  2005年7月（日本总部成立）
                  <br />
                  2018年11月（中国上海分公司成立）
                </>
              ),
            },
            {
              label: '董事信息（日本）',
              value: (
                <table className="text-left">
                  <tbody>
                    <tr><td className="pr-4 py-0.5">董事长兼CEO：</td><td>高桥　信也</td></tr>
                    <tr><td className="pr-4 py-0.5">常务董事兼CFO：</td><td>玉井　邦昌</td></tr>
                    <tr><td className="pr-4 py-0.5">董事：</td><td>赤羽　具永</td></tr>
                    <tr><td className="pr-4 py-0.5">董事：</td><td>田矢　彻司</td></tr>
                    <tr><td className="pr-4 py-0.5">董事（审计委员）：</td><td>渡边　彻</td></tr>
                    <tr><td className="pr-4 py-0.5">董事（审计委员）：</td><td>木村　稔</td></tr>
                    <tr><td className="pr-4 py-0.5">董事（审计委员）：</td><td>稻垣　隆一</td></tr>
                  </tbody>
                </table>
              ),
            },
            {
              label: '董事信息（中国）',
              value: (
                <table className="text-left">
                  <tbody>
                    <tr><td className="pr-4 py-0.5">董事长兼总经理：</td><td>高桥　辰生</td></tr>
                    <tr><td className="pr-4 py-0.5">董事兼副总经理：</td><td>张　磊</td></tr>
                    <tr><td className="pr-4 py-0.5">董事：</td><td>内山　铁朗</td></tr>
                    <tr><td className="pr-4 py-0.5">董事：</td><td>田中　悠策</td></tr>
                    <tr><td className="pr-4 py-0.5">监事：</td><td>渡边　彻</td></tr>
                  </tbody>
                </table>
              ),
            },
            {
              label: '总公司',
              value: (
                <>
                  邮编：1076229
                  <br />
                  地址：东京都港区赤坂 9 丁目 7 番 1 号 中城大厦 29 层
                </>
              ),
            },
            {
              label: '分公司',
              value: (
                <div className="space-y-4">
                  <div>
                    <strong>中部分公司</strong>
                    <br />
                    邮编：4506315
                    <br />
                    地址：日本爱知县名古屋市名古屋站 1-1-1 名古屋 JP 大厦 15 层
                    <br />
                    TEL：<a href="tel:+81528547756" className="text-primary underline">+81-52-854-7756</a>
                  </div>
                  <div>
                    <strong>关西分公司</strong>
                    <br />
                    邮编：5300001
                    <br />
                    地址：大阪府大阪市北区梅田 3 丁目 2 番 2 号，大阪 JP 大厦 18 层
                    <br />
                    TEL：<a href="tel:+81672220266" className="text-primary underline">+81-6-7222-0266</a>
                  </div>
                </div>
              ),
            },
            {
              label: '集团企业',
              value: (
                <div className="space-y-4">
                  <div>
                    <strong>麦嵩隆管理咨询(上海)有限公司</strong>
                    <br />
                    邮编：200040
                    <br />
                    地址：上海市静安区静安中华大厦2602室
                    <br />
                    TEL：<a href="tel:+862162300900" className="text-primary underline">+86-21-6230-0900</a>
                  </div>
                  <div>
                    <a
                      href="https://www.msoldigi.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline font-bold"
                    >
                      株式会社MSOL Digital
                    </a>
                    <br />
                    邮编：1076229
                    <br />
                    地址：东京都港区赤坂 9 丁目 7 番 1 号 中城大厦 29 层
                    <br />
                    TEL：<a href="tel:+81367747138" className="text-primary underline">+81-3-6774-7138</a>
                  </div>
                  <div>
                    <a
                      href="https://www.tetracom.co.jp/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline font-bold"
                    >
                      株式会社TETRA communication
                    </a>
                    <br />
                    邮编：1076229
                    <br />
                    地址：东京都港区赤坂 9 丁目 7 番 1 号 中城大厦 29 层
                    <br />
                    TEL：<a href="tel:+81362656663" className="text-primary underline">+81-3-6265-6663</a>
                  </div>
                  <div>
                    <strong>MSOL Inc.（美国）</strong>
                    <br />
                    地址：221 River Street. Hoboken, NJ 07030, USA
                  </div>
                </div>
              ),
            },
            {
              label: '事业内容（中国）',
              value: (
                <ul className="space-y-1">
                  <li>・PMO项目管理执行支援</li>
                  <li>・PMO体系架构建立及导入</li>
                  <li>・PMO ONLINE服务</li>
                  <li>・项目管理工具PROEVER的销售和运营</li>
                  <li>・培训・实践指导</li>
                </ul>
              ),
            },
            {
              label: '加盟团体',
              value: (
                <a
                  href="https://juas.or.jp/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  日本情報システム・ユーザー協会（JUAS）
                </a>
              ),
            },
            { label: '注册资本金', value: '7.13亿日币' },
            { label: '集团人数', value: '1,642 人(统计时间截止至2026年3月)' },
            {
              label: '资质认证',
              value: (
                <ul className="space-y-1">
                  <li>劳务派遣业务（派 13-303234）</li>
                  <li>隐私保护认证（17004224）　2021 年 11 月</li>
                  <li>信息安全管理体系　ISO/IEC 27001:2022（IS 785994）　2023 年 10 月</li>
                  <li>云服务信息安全管理体系　ISO/IEC 27017:2015（CLOUD 785995）　2023 年 10 月</li>
                </ul>
              ),
            },
          ]}
        />
      </div>

      {/* 深入了解 MSOL 区域 */}
      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-gray-500 mb-3">深入了解 MSOL</p>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-12">
            公司工作氛围灵活自由，员工可随时迎接新挑战，拥有充足自主决策权开展工作。
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <a href="https://www.msols.com/company/health/" target="_blank" rel="noreferrer" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                MSOL的健康经营 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">介绍 MSOL 在健康经营方面开展的各项举措。</p>
            </a>
            <a href="https://www.msols.com/company/3zero/" target="_blank" rel="noreferrer" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                三ZERO宣言 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">介绍落地健康经营理念的 "三ZERO" 相关举措。</p>
            </a>
            <a href="/company" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                公司简介 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">全面介绍 MSOL 的经营资质信息。如成立日期、企业地址、注册资本等。</p>
            </a>
            <a href="/company/history" className="group block border-b border-line pb-6">
              <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                发展历程 <span className="text-yellow-500">›</span>
              </h3>
              <p className="text-xs text-gray-500">为您介绍 MSOL 集团自 2005 年成立至今的企业发展历程。</p>
            </a>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

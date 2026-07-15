import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { InfoTable } from '../components/common/InfoTable';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';

export default function CompanyDataPage() {
  useEffect(() => {
    document.title = '公司概要 | 公司信息 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="公司概要"
        subtitle="MSOL集团的规模、成立时间、管理层、公司所在地等。"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '公司信息', to: '/company' },
          { label: '公司概要' },
        ]}
      />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <InfoTable
          rows={[
            { label: '公司名称', value: '株式会社Management Solutions（简称：MSOL）' },
            { label: '设立', value: '2005年7月' },
            {
              label: '日本',
              value: (
                <ul className="space-y-1">
                  <li>董事长兼CEO：高桥 信也</li>
                  <li>董事兼CFO：福岛 润一</li>
                  <li>董事：后藤 年成</li>
                </ul>
              ),
            },
            {
              label: '中国',
              value: (
                <ul className="space-y-1">
                  <li>董事长：高桥 信也</li>
                  <li>董事兼CEO：高桥 辰生</li>
                  <li>董事：金子 啓</li>
                </ul>
              ),
            },
            {
              label: '总公司',
              value: (
                <>
                  <a
                    href="https://www.msols.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    总公司
                  </a>
                  <br />
                  邮编:1076223
                  <br />
                  地址:東京都港区赤坂9-7-1　ミッドタウン・タワー29F
                  <br />
                  TEL：<a href="tel:+810354138808" className="text-primary underline">+81-3-5413-8808</a>
                </>
              ),
            },
            {
              label: '分公司',
              value: (
                <>
                  <a
                    href="https://www.msols.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    中部分公司
                  </a>
                  <br />
                  邮编:4500003
                  <br />
                  爱知县名古屋市中村区名驿站南1-24-20 名古屋三井大厦新馆7F
                  <br />
                  TEL：<a href="tel:0524466271" className="text-primary underline">+81-52-446-6271</a>
                </>
              ),
            },
            {
              label: '子公司',
              value: (
                <div className="space-y-4">
                  <div>
                    <a
                      href="http://www.msols.cn/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      麦嵩隆管理咨询(上海)有限公司
                    </a>
                    <br />
                    邮编:200040
                    <br />
                    上海市静安区静安中华大厦2610室
                    <br />
                    TEL：<a href="tel:400-666-7959" className="text-primary underline">400-666-7959</a>
                  </div>
                  <div>
                    <a
                      href="https://www.msol.tw/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      元嵩管理顾问股份有限公司
                    </a>
                    <br />
                    邮编:10477
                    <br />
                    台北市中山區民權東路三段58號7樓之5
                    <br />
                    TEL：<a href="tel:+886225000625" className="text-primary underline">+886-2-2500-0625</a>
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
                  <li>・北极星(项目管理工具PROEVER)的销售和运营</li>
                  <li>・培训・实践指导</li>
                </ul>
              ),
            },
            {
              label: '加盟团体',
              value: (
                <>
                  <a
                    href="https://www.keidanren.or.jp/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    日本経済団体連合会
                  </a>
                  {'　'}
                  <a
                    href="https://www.pmi-japan.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    PMI日本支部
                  </a>
                </>
              ),
            },
            { label: '资本金', value: '6.2 亿日币' },
            { label: '交易金融机关', value: '瑞穗银行、三井住友银行、其他' },
            { label: '主要股东', value: '高桥信也、董事会成员、其他' },
          ]}
        />
      </div>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            items={[
              { to: '/company/company-data', title: '公司概要', desc: 'MSOL集团的规模、成立时间、管理层、公司所在地等。', current: true },
              { to: '/company/history', title: '发展历程', desc: '为您介绍自2005年以来MSOL集团的发展历程。' },
              { to: '/company/director', title: '董事信息', desc: '为您介绍公司董事。' },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

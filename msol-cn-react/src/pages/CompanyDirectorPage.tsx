import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';

const DIRECTORS = [
  {
    img: '/img/director/img_director_01.jpg',
    name: '髙橋 信也',
    position: '董事长',
    desc: '福冈县出身。修猷馆高中毕业，上智大学经济学部毕业。研究课题为组织学理论及日本经营。大学毕业后，进入安盛咨询公司（现埃森哲公司）工作。曾参与C及C++的计算机编程和业务设计等广泛的工程项目。自2001年起作为凯捷公司（Capgemini）的管理人员，参与了经营管理和业绩管理的咨询项目。作为顾问，不仅是要站在外部的角度，还应该在公司内部积累管理经验，出于这种想法，加入了 SONY Global Solutions 公司，成为了最年轻的项目经理。作为全球系统开发项目的项目主管，表现出色。此外，还参与过印度的离岸开发项目。2005年 成立株式会社Management Solutions，直至今日。',
  },
  {
    img: '/img/director/img_director_02.jpg',
    name: '髙橋 辰生',
    position: '董事总经理',
    desc: '出生于上海市，毕业于日本关西私立四大名校，关西大学工学部电子工学科，工学学士及工学硕士。毕业后加入日本综合研究所，在日本大阪，东京，美国纽约，新泽西州等地长期担任金融项目管理工作。2018年加入MSOL后，组织创建麦嵩隆管理咨询(上海)有限公司，负责大中华地区的PMO事业拓展和新公司运营事项。任麦嵩隆管理咨询公司总裁，至今。',
  },
  {
    img: '/img/director/img_director_03.jpg',
    name: '金子 啓',
    position: '董事',
    desc: '出生于东京。就职于富士通先进工程有限公司。在公司大型企划中，多次解决关键问题，充分认识到经营管理的重要性。2007年，与 MSOL 管理顾问股份有限公司共同参与策划零售商品流转、金融、制造、娱乐等多个大型项目，并以 PMO项目经理的身份，为项目的成功做出贡献。此外，还组建了 PMO（ EPMO、PgMO）部门，对测评服务也深有了解。担任执行董事、PM 事业本部总经理至今。',
  },
];

export default function CompanyDirectorPage() {
  useEffect(() => {
    document.title = '公司概要 | 董事信息 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="董事信息"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '公司信息', to: '/company' },
          { label: '董事信息' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <ul className="space-y-10">
          {DIRECTORS.map((d, i) => (
            <Reveal key={d.name} type="swipe" delay={i + 1} as="li">
              <div className="flex flex-col gap-6 md:flex-row">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-40 w-40 shrink-0 rounded object-cover md:h-48 md:w-48"
                />
                <div>
                  <p className="text-lg font-bold text-ink">{d.name}</p>
                  <p className="mt-1 text-sm font-bold text-primary">{d.position}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <section className="border-t border-line py-14">
        <div className="mx-auto max-w-5xl px-6">
          <LinkCardList
            items={[
              { to: '/company/company-data', title: '公司概要', desc: 'MSOL集团的规模、成立时间、管理层、公司所在地等。' },
              { to: '/company/history', title: '发展历程', desc: '为您介绍自2005年以来MSOL集团的发展历程。' },
              { to: '/company/director', title: '董事信息', desc: '为您介绍公司董事。', current: true },
            ]}
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}

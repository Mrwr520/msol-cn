import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';

const PARAGRAPHS = [
  ['世界正以惊人的速度变化着。'],
  [
    '每天都有新的规范层出不穷，',
    '昨天的规范转瞬即逝。',
    '工作变得越来越庞大和复杂，与此同时，人们对改进的工作方法、更高的质量和更大的效率也提出了更高的要求。',
  ],
  [
    '在当今世界，哪怕片刻的放松警惕，都可能让我们忽略真正重要的东西。',
    '我们真心相信，“管理”是打破这种局面的唯一途径。',
  ],
  ['“管理”一词及其概念可能尚未被社会完全理解。'],
  ['然而，“管理时代”无疑已经到来。'],
  [
    '有些项目规模很小，仅涉及个人；有些项目则足以改变整个公司。',
    '有些项目的规模之大，甚至可以改变日本乃至世界。',
    '毫不夸张地说，世界是由无数个“项目”构成的。',
  ],
  ['我们懂得如何运用管理的力量，从始至终精心支持和指导每一个项目走向成功。'],
  [
    '凭借我们卓越的管理专长，我们致力于与合作伙伴携手',
    '，不断为社会各方面创造最佳解决方案。我们相信，这将引领我们走向一个每个人的幸福都紧密相连的世界。',
  ],
];

export default function FeatureBrandPage() {
  useEffect(() => {
    document.title = '品牌宗旨 | 我们的特长 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="品牌宗旨"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '特长', to: '/feature' },
          { label: '品牌宗旨' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <Reveal type="fade">
          <div
            className="rounded-lg px-8 py-14 text-white md:px-16 md:py-20"
            style={{ background: 'linear-gradient(25deg, #00182f, #01396d)' }}
          >
            <div className="space-y-7 text-sm leading-relaxed text-white/85 md:text-base">
              {PARAGRAPHS.map((group, gi) => (
                <p key={gi}>
                  {group.map((line, li) => (
                    <span key={li} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <p className="mt-12 text-xl font-bold text-white md:text-2xl">
              让管理成为驱动世界的引擎。
            </p>

            <div className="mt-10 flex w-full justify-end">
              <img
                src="/img/feature/img_logo_white@2x.png"
                alt="MSOL 徽标"
                className="ml-auto h-10 w-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            sub="了解更多MSOL特长"
            title="我们备有丰富的内容，助您更深入地了解MSOL。"
            align="left"
          />
          <div className="mt-10">
            <LinkCardList
              columns={3}
              items={[
                {
                  to: '/feature/mission',
                  title: 'MSOL的使命',
                  desc: '介绍MSOL的品牌、使命以及未来发展愿景。',
                  img: '/img/feature/img_mission@2x.jpg',
                },
                {
                  to: '/feature/brand',
                  title: '品牌之路',
                  desc: '展现MSOL品牌所秉持的重要理念与追求，以及为达成使命愿景而铸就的品牌故事。',
                  img: '/img/feature/img_brand@2x.jpg',
                  current: true,
                },
                {
                  to: '/books',
                  title: '书籍·报道介绍',
                  desc: '为您介绍MSOL创始人高桥的著作，以及杂志专访报道等内容。',
                  img: '/img/feature/img_books@2x.jpg',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}

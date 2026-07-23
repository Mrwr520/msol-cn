import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { LinkCardList } from '../components/common/LinkCardList';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

/** 每一行由若干片段组成，片段 b=true 时加粗白色显示 */
type Segment = { t: string; b?: boolean };
type Line = Segment[];

const PARAGRAPHS: Line[][] = [
  [[{ t: '当下的世界，瞬息万变、永不停歇。' }]],
  [
    [{ t: '全新的行业准则日复一日不断涌现，' }],
    [{ t: '昨日尚且通用的固有认知，转瞬便沦为过时之物。' }],
    [{ t: '企业业务持续趋于庞大繁杂，与此同时，职场模式革新、工作品质提升、运营效率优化，已然成为硬性要求。' }],
  ],
  [
    [{ t: '身处这样的时代，稍有松懈，便极易迷失事物的核心本质。' }],
    [
      { t: '我们由衷坚信：能够打破当下困境的独一无二的途径，便是' },
      { t: '管理', b: true },
      { t: '。' },
    ],
  ],
  [
    [
      { t: '“' },
      { t: '管理', b: true },
      { t: '”这个词与整套理念，或许至今仍未在全社会彻底深入人心。' },
    ],
    [
      { t: '但毋庸置疑，' },
      { t: '属于管理的时代，已然到来。', b: true },
    ],
  ],
  [
    [{ t: '管理的适用范围包罗万象：小至单个项目落地，大至统筹整个企业运转；' }],
    [{ t: '体量宏大者，足以驱动日本乃至全球前行。' }],
    [{ t: '毫不夸张地讲，世间万事万物，本质上都可以视作一个个项目。' }],
  ],
  [
    [{ t: '而我们深谙一套方法：依托管理的力量，全程细致陪伴、帮扶每一个项目，指引其走向最终成功。' }],
  ],
  [
    [{ t: '我们希望以管理为利器，' }],
    [{ t: '携手所有合作伙伴，持续为社会各类课题打磨最优解决方案。' }],
    [{ t: '我们始终相信，在这一切的尽头，终将构筑起人人收获幸福的美好世界。' }],
  ],
];

export default function FeatureBrandPage() {
  useEffect(() => {
    document.title = 'MSOL 的宗旨 | 我们的特长 | Management Solutions （MSOL）';
  }, []);

  return (
    <>
      <PageHero
        title="MSOL 的宗旨"
        crumbs={[
          { label: '首页', to: '/' },
          { label: '特长', to: '/feature' },
          { label: 'MSOL 的宗旨' },
        ]}
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <Reveal type="fade">
          <div
            className="rounded-lg px-8 py-14 text-white md:px-16 md:py-20"
            style={{ background: 'linear-gradient(25deg, #0a1f4d, #143D96)' }}
          >
            <div className="space-y-7 text-sm leading-relaxed text-white/85 md:text-base">
              {PARAGRAPHS.map((group, gi) => (
                <p key={gi}>
                  {group.map((line, li) => (
                    <span key={li} className="block">
                      {line.map((seg, si) =>
                        seg.b ? (
                          <strong key={si} className="font-bold text-white">
                            {seg.t}
                          </strong>
                        ) : (
                          <span key={si}>{seg.t}</span>
                        ),
                      )}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <p className="mt-12 text-2xl font-bold text-white md:text-4xl">
              让管理，成为推动世界进步的引擎。
            </p>

            <div className="mt-10 flex w-full justify-end">
              <img
                src={assetUrl('/img/feature/img_logo_white@2x.png')}
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
              columns={2}
              horizontal
              items={[
                {
                  to: '/feature/mission',
                  title: 'MSOL 的使命',
                  desc: '为您介绍 MSOL 企业理念、使命宗旨以及未来发展愿景与布局规划。',
                  img: '/img/feature/img_mission@2x.jpg',
                },
                {
                  to: '/feature/brand',
                  title: 'MSOL 的宗旨',
                  desc: '诠释 MSOL 企业核心意义与发展目标，赋能使命与愿景落地的品牌故事。',
                  img: '/img/feature/img_brand@2x.jpg',
                  current: true,
                },
                {
                  to: '/books',
                  title: '图书推荐',
                  desc: '精选项目管理与 PMO 领域优秀书籍，助力专业能力提升。',
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

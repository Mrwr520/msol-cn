import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactCta } from '../components/common/ContactCta';
import { assetUrl } from '../utils/asset';

export default function ThreeZeroPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [clipRect, setClipRect] = useState({ top: 0, bottom: 100 });

  useEffect(() => {
    document.title = '三ZERO宣言 | 公司信息 | Management Solutions （MSOL）';
  }, []);

  // 计算内容区域相对于视口的位置，用于裁剪大0的显示范围
  useEffect(() => {
    const updateClip = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        // 使用视口坐标，因为fixed元素是相对于视口定位的
        setClipRect({
          top: Math.max(0, rect.top),
          bottom: Math.max(0, rect.bottom)
        });
      }
    };

    updateClip();
    window.addEventListener('scroll', updateClip);
    window.addEventListener('resize', updateClip);
    return () => {
      window.removeEventListener('scroll', updateClip);
      window.removeEventListener('resize', updateClip);
    };
  }, []);

  return (
    <>
      {/* 固定的大0 - 只在内容区域可见 */}
      <div 
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        style={{ 
          zIndex: 1,
          clipPath: `polygon(0 ${clipRect.top}px, 100% ${clipRect.top}px, 100% ${clipRect.bottom}px, 0 ${clipRect.bottom}px)`
        }}
      >
        <img
          src={assetUrl('/img/bg_3zero.svg')}
          alt=""
          className="w-[200px] md:w-[270px] lg:w-[330px]"
        />
      </div>

      {/* 面包屑导航 */}
      <div className="border-b border-line bg-white relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-3">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">首页</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/company" className="hover:text-primary">公司信息</Link>
            <span className="mx-2">&gt;</span>
            <span>三ZERO宣言</span>
          </nav>
        </div>
      </div>

      {/* 内容区域容器 */}
      <div ref={contentRef} className="relative bg-transparent">
        {/* Hero 区域 */}
        <section className="py-16 md:py-20 relative z-10">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-ink mb-4">
              MSOL 的"三大ZERO目标"
              <br />
              践行健康经营宣言
            </h1>
            <p className="text-gray-500 text-base md:text-lg">～ 2020 年代，开启全新生活方式与工作模式 ～</p>
          </div>
        </section>

        {/* 三个ZERO卡片 */}
        <section className="relative z-10 py-4">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 加班 ZERO */}
              <div className="text-center py-20 md:py-24 px-6 flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(1, 57, 109, 0.9)' }}>
                <p className="text-sm mb-3 italic" style={{ color: '#ccad7a', fontFamily: 'serif' }}>Overtime work</p>
                <p className="text-2xl md:text-3xl font-bold mb-1 text-white">加班</p>
                <p className="text-3xl md:text-4xl font-bold text-white">ZERO</p>
              </div>
              
              {/* 吸烟率 ZERO */}
              <div className="text-center py-20 md:py-24 px-6 flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(1, 57, 109, 0.9)' }}>
                <p className="text-sm mb-3 italic" style={{ color: '#ccad7a', fontFamily: 'serif' }}>Smoking rate</p>
                <p className="text-2xl md:text-3xl font-bold mb-1 text-white">吸烟率</p>
                <p className="text-3xl md:text-4xl font-bold text-white">ZERO</p>
              </div>
              
              {/* 体检漏检 ZERO */}
              <div className="text-center py-20 md:py-24 px-6 flex flex-col items-center justify-center" style={{ backgroundColor: 'rgba(1, 57, 109, 0.9)' }}>
                <p className="text-sm mb-3 italic" style={{ color: '#ccad7a', fontFamily: 'serif' }}>Health checkup</p>
                <p className="text-2xl md:text-3xl font-bold mb-1 text-white">体检漏检</p>
                <p className="text-3xl md:text-4xl font-bold text-white">ZERO</p>
              </div>
            </div>
          </div>
        </section>

        {/* 第一部分：维持身心健康 */}
        <section className="py-14 md:py-10 relative z-10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-8">
              维持身心健康，是职场专业人士的职责
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-loose text-sm md:text-base [&>p]:indent-[2em]">
              <p>
                在各类管理工作场景中，MSOL 的使命是以专业身份创造附加价值，助力解决合作企业的经营难题与社会重大议题。这绝不轻松，员工时常需要在身心承压的状态下投入高强度工作。而 MSOL 自 2005 年创立之初便秉持一套理念：<strong className="text-ink">守护自身健康同样是企业的使命。我们始终拒绝无意义的超负荷加班。</strong>
              </p>
              
              <p>
                商业环境中长期存在一种固有误区：无论对内协作还是对外往来，不少人认为长久相伴共事才能稳固人际关系。<strong className="text-ink">但 MSOL 始终清醒认知，我们依靠脑力生产力创造价值、兑现责任。</strong>我们坚信，只要充分调动所有人的思维效率，就完全有能力管控劳动时长。
              </p>
              
              <p>
                每个人都拥有独属于自己的价值观、理想与期许，本应陪伴家人，奔赴属于自己的幸福生活。唯有适配个人幸福追求的工作模式，懂得尊重、信任他人、凝聚团队，做好自我管理，才有资格成为一名管理领域的专业从业者。<strong className="text-ink">因此我们始终坚定倡导：无论工作多繁忙，守护身心健康，是所有专业从业者的分内职责。</strong>
              </p>
            </div>
          </div>
        </section>

        {/* 第二部分：健康经营落地 */}
        <section className="py-14 md:py-20 relative z-10">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-8">
              健康经营落地：实现三大目标清零
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-loose text-sm md:text-base [&>p]:indent-[2em]">
              <p>
                步入 2020 年，全人类迎来前所未有的公共健康挑战。相关病毒难以在短短五到十年内彻底根除，人类必须做好与病毒长期共存的准备，各行各业、生活模式都将迎来巨大变革。商业模式、办事方法、企业经营模式、工作方式，乃至亲友相处模式都会随之改变。借此契机，MSOL 下定决心将健康经营推进落实到更深层面。为打造能坦然面向员工、客户乃至全世界的健康经营体系，我们最终决定深耕落地 <strong className="text-ink">"三大目标清零"</strong> 举措。
              </p>
              
              <p>
                <strong className="text-ink">全员体检漏检清零：</strong>目前该目标已实现，我们郑重宣誓，未来持续保持零漏检。<strong className="text-ink">吸烟率清零：</strong>现阶段公司吸烟比例已极低。我们不再将吸烟简单视作个人爱好与自由，而是认定吸烟切实损害自身健康、危及生命，同时危害身边人群，因此全面推动控烟禁烟。<strong className="text-ink">加班清零：</strong>一线咨询顾问的工作节奏受客户需求影响，我们预估需要一定周期才能完全实现加班清零。但如前文所述，我们的核心是交付价值，价值产出多少绝不依靠工作时长衡量。当下不少合作企业也逐步认同这套理念。我们愿以合作伙伴的身份，与客户一同追求效益最大化，主动优化日式传统工作模式。
              </p>
              
              <p>
                如今我们身处与病毒共存的时代，同时也是全社会携手推进 SDGs 可持续发展目标、解决全球性社会课题的时代。MSOL 以 <strong className="text-ink">"三大目标清零"</strong> 宣言为依托，向往幸福社会，倡导良性企业经营模式与专业人群健康的工作方式。期待能够获得更多人的认同与支持。
              </p>
            </div>
          </div>
        </section>

        {/* 深入了解 MSOL */}
        <section className="py-14 md:py-20 border-t border-line relative z-10">
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
              <a href="/company/3zero" className="group block border-b border-line pb-6">
                <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                  三ZERO宣言 <span className="text-yellow-500">›</span>
                </h3>
                <p className="text-xs text-gray-500">介绍落地健康经营理念的"三ZERO"相关举措。</p>
              </a>
              <a href="/company/company-data" className="group block border-b border-line pb-6">
                <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                  公司简介 <span className="text-yellow-500">›</span>
                </h3>
                <p className="text-xs text-gray-500">全面介绍 MSOL 的经营资质信息。如成立日期、企业地址、注册资本等。</p>
              </a>
              <a href="/company/history" className="group block border-b border-line pb-6">
                <h3 className="text-primary text-sm font-normal mb-2 group-hover:underline">
                  发展历程 <span className="text-yellow-500">›</span>
                </h3>
                <p className="text-xs text-gray-500">梳理介绍 MSOL 自 2005 年成立至今的企业发展历程。</p>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10 bg-white">
        <ContactCta />
      </div>
    </>
  );
}

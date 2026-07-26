import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { assetUrl } from '../utils/asset';

export default function ContactPage() {
  useEffect(() => {
    document.title = '联系我们 | Management Solutions (MSOL)';
  }, []);

  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="扫码二维码，关注微信公众账号与我们联系"
        crumbs={[{ label: '首页', to: '/' }, { label: '联系我们' }]}
        align="center"
      />

      <div className="mx-auto max-w-md px-6 py-14 text-center">
        <Reveal type="fade">
          <img
            src={assetUrl('/img/contact/MSOL-CHINA-QR.jpg')}
            alt="微信公众账号"
            className="mx-auto h-48 w-48 rounded"
          />
        </Reveal>

        <Reveal type="fade" delay={2} className="mt-10 space-y-2 text-sm text-ink/80">
          <p className="font-bold text-ink">麦嵩隆管理咨询(上海)有限公司</p>
          <p>邮编:200040</p>
          <p>
            地址:上海市静安区 静安中华大厦2602室{' '}
            <a
              href="https://j.map.baidu.com/ab/wq4"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              地图
            </a>
          </p>
          <p>电话:86-21-62300900</p>
          <p>
            邮件地址:{' '}
            <a href="mailto:info@cn.msols.com" className="text-primary underline">
              info@cn.msols.com
            </a>
          </p>
          <p>
            <Link to="/privacy" className="text-primary underline">
              隐私条款
            </Link>
          </p>
        </Reveal>
      </div>
    </>
  );
}

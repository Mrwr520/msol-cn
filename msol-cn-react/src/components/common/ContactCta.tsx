import { RevealEach } from './Reveal';
import { Reveal } from './Reveal';
import { Button } from './Button';

/** 还原原站 l-contact：深蓝底联系我们 CTA 区块，标题逐字级联淡入 */
export function ContactCta() {
  const titleChars = Array.from('点此联系我们');

  return (
    <section className="mt-16 bg-primary-dark py-14 text-white lg:mt-24 lg:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <RevealEach
            items={titleChars}
            speed="superslow"
            as="h2"
            itemAs="span"
            className="text-2xl font-bold lg:text-3xl"
          />
          <Reveal type="fade" delay={3} className="mt-3">
            <p className="text-sm leading-relaxed opacity-90">
              如需咨询 MSOL 或有任何疑问
              <br />
              请填写此表随时联系我们。
            </p>
          </Reveal>
        </div>
        <Reveal type="fade" delay={3} className="w-full lg:w-auto">
          <Button
            href="/contact"
            variant="darkblue-inverted"
            size="large"
            className="!w-auto px-10"
          >
            联系我们
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { ContentSection } from '../components/common/ContentSection';
import { ContactCta } from '../components/common/ContactCta';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = '隐私条款 | Management Solutions (MSOL)';
  }, []);

  return (
    <>
      <PageHero title="隐私条款" crumbs={[{ label: '首页', to: '/' }, { label: '隐私条款' }]} />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <ContentSection title="隐私条款">
          <p>在使用本网站之前，请仔细阅读下列使用规则并严格遵守。</p>
        </ContentSection>

        <ContentSection title="使用禁止事项">
          <p>使用本网站时，不得为下列行为：</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>侵害本公司或第三方的财产或隐私等行为或有可能导致上述结果的行为；</li>
            <li>给本公司或第三方造成损失或损害的行为，或有可能导致上述结果的行为；</li>
            <li>其他违反法律等的行为，或可能导致上述结果的行为；</li>
            <li>上述以外本公司认为不恰当的行为</li>
          </ol>
        </ContentSection>

        <ContentSection title="著作权/商标">
          <p>
            除另行作出明确表示之外，本网站内容（信息・资料・图像・声音等）的著作权均归本公司所有。未经本公司事先书面同意，不论是否以营利为目的，均不准许超出法律允许的范围对本网站内容进行复制、引用、销售等行为，或对内容加以变形、变更、添加修改、改编等行为
          </p>
        </ContentSection>

        <ContentSection title="个人信息保护">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              本网的个人信息保护安全规则
              <br />
              本公司认识到通过姓名，出生年月日及其他记述等能够识别特定个人的信息（个人信息），对用户而言是重要的隐私信息。用户访问本网站无需披露自己的个人信息，如仅浏览本网站，用户的个人信息不会被收集。
            </li>
            <li>
              关于使用IP地址
              <br />
              为了本网站作统计性倾向的分析，本公司会记录IP地址和网域，但用于该分析的信息不包含个人信息。
            </li>
          </ol>
        </ContentSection>

        <ContentSection title="链接条件">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              若希望粘贴本网站的链接，请务必联系本公司相关部门。
              <br />
              对于因未经本公司同意，擅自粘贴访问本网站链接而给贵公司或您造成的损害，本公司概不负责。
            </li>
            <li>
              如本网站上粘贴了从本网站访问本网站以外的网站（以下称"其他网站"）的链接，并不意味着本公司推荐其他网站的使用或登载内容等，并且除另行作出明确表示外，并不意味着其他网站或其运营商与本公司之间存在任何合作关系等特殊关系。
            </li>
            <li>
              本网站上粘贴链接的其他网站，或粘贴了访问本网站链接的其他网站，是分别由不同于本公司的其他网站开设者负责管理运营的。因此，使用其他网站时请遵守其他网站的使用条件。本公司对其他网站的内容，概不作出任何保证，对伴随其使用发生的任何损害概不负责。
            </li>
          </ol>
        </ContentSection>

        <ContentSection title="于媒体上的登载">
          <p>希望在杂志书籍，广告等出版物上登载本网站的人士，请通过"联系我们"事先提出申请。</p>
        </ContentSection>

        <ContentSection title="免责声明">
          <p>
            本公司虽密切注意，努力使本网站登载的信息为最新且正确的信息，但，除另行作出明确表示之外，对于本网站内容的合理性及正确性等，本公司未作出任何保证，不承担任何责任。
            <br />
            本网站的内容或网址可能不经预告而发生变更，中断或中止，敬请谅解。对于因任何原因造成的本网站内容的变更及本网站运营的中断，中止引起的任何损害，本公司概不负责。
          </p>
        </ContentSection>

        <ContentSection title="依据法及管辖法院">
          <p>
            本网站的使用及使用规则的解释、执行，除另行作出明确表示之外，均适用中国人民共和国法律法规・法规条文及上海市地方政府的法规・行政规定。另，若因使用本网站时发生纠纷，除另行作出明确表示之外，应向本公司总公司所在地的人民法院提起诉讼。
          </p>
        </ContentSection>
      </div>

      <ContactCta />
    </>
  );
}

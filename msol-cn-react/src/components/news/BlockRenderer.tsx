import type { ContentBlock } from '../../types/cms';
import { assetUrl } from '../../utils/asset';

/**
 * CMS 内容块渲染器
 * 将 JSON 格式的内容块数组渲染为与现有新闻页面一致的样式。
 * 后续接入 Strapi 后，只需把数据源从 JSON 文件换成 API 即可。
 */

function SectionTitle({ text }: { text: string }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[2px] flex-1 bg-gradient-to-r from-primary to-primary/60" />
        <span className="h-3 w-3 rounded-full bg-primary" />
        <span className="h-[2px] flex-1 bg-gradient-to-l from-primary to-primary/60" />
      </div>
      <h3
        className="text-center text-xl font-bold text-primary-dark md:text-2xl"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="mt-4 flex items-center gap-3">
        <span className="h-[2px] flex-1 bg-gradient-to-r from-primary to-primary/60" />
        <span className="h-[2px] flex-1 bg-gradient-to-l from-primary to-primary/60" />
      </div>
    </div>
  );
}

function CaptionedImage({ src, alt, caption }: { src: string; alt?: string; caption: string }) {
  return (
    <figure className="my-8 mx-auto max-w-2xl overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
      <img src={assetUrl(src)} alt={alt ?? ''} className="w-full" loading="lazy" />
      <figcaption className="px-5 py-3 text-center text-sm leading-6 text-primary-dark/70">
        {caption}
      </figcaption>
    </figure>
  );
}

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="mb-6 text-base leading-8 text-primary-dark/90 md:text-[17px] md:leading-9">
          {block.text}
        </p>
      );

    case 'heading':
      if (block.level === 2)
        return <h2 className="mb-4 mt-10 text-2xl font-bold text-primary-dark">{block.text}</h2>;
      if (block.level === 3)
        return <h3 className="mb-3 mt-8 text-xl font-bold text-primary-dark">{block.text}</h3>;
      return <h4 className="mb-2 mt-6 text-lg font-bold text-primary-dark">{block.text}</h4>;

    case 'section-title':
      return <SectionTitle text={block.text} />;

    case 'image':
      return (
        <div className={`my-8 overflow-hidden rounded-lg ${block.fullBleed ? '-mx-7 md:-mx-14 lg:-mx-20' : ''}`}>
          <img src={assetUrl(block.src)} alt={block.alt ?? ''} className="w-full" loading="lazy" />
        </div>
      );

    case 'captioned-image':
      return <CaptionedImage src={block.src} alt={block.alt} caption={block.caption} />;

    case 'highlight-card':
      return (
        <div className="my-10 rounded-xl bg-[#edf2f7] px-8 py-6 text-center md:px-12 md:py-8">
          <p
            className="text-xl font-bold leading-9 text-primary-dark md:text-2xl md:leading-10"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        </div>
      );

    case 'quote':
      return (
        <blockquote className="my-8 border-l-4 border-accent pl-5">
          <p className="text-base italic leading-8 text-primary-dark/80">{block.text}</p>
          {block.author && (
            <cite className="mt-2 block text-sm text-ink/50">— {block.author}</cite>
          )}
        </blockquote>
      );

    case 'section':
      return (
        <section
          className={`mb-12 -mx-7 rounded-lg px-7 py-10 md:-mx-14 md:px-14 md:py-12 lg:-mx-20 lg:px-20 ${
            block.background === 'gray' ? 'bg-[#f7f9fc]' : 'bg-white'
          }`}
        >
          {block.blocks.map((b, i) => (
            <RenderBlock key={i} block={b} />
          ))}
        </section>
      );

    case 'source':
      return (
        <div className="mb-8 flex flex-col gap-2 text-xs leading-6 text-ink/50 sm:flex-row sm:items-center">
          <span className="font-bold text-ink/70">来源</span>
          <a
            href={block.url}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primary-dark"
          >
            {block.label} ↗
          </a>
        </div>
      );

    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <RenderBlock key={index} block={block} />
      ))}
    </>
  );
}

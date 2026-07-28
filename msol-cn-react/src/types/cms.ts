/**
 * CMS 内容块类型定义
 * 对应 Strapi Dynamic Zone 的各类组件，后续接 API 时结构一致
 */

export type ParagraphBlock = {
  type: 'paragraph';
  text: string;
};

export type HeadingBlock = {
  type: 'heading';
  level: 2 | 3 | 4;
  text: string;
};

export type SectionTitleBlock = {
  type: 'section-title';
  text: string;
};

export type ImageBlock = {
  type: 'image';
  src: string;
  alt?: string;
  fullBleed?: boolean;
};

export type CaptionedImageBlock = {
  type: 'captioned-image';
  src: string;
  alt?: string;
  caption: string;
};

export type HighlightCardBlock = {
  type: 'highlight-card';
  text: string;
};

export type QuoteBlock = {
  type: 'quote';
  text: string;
  author?: string;
};

export type SectionBlock = {
  type: 'section';
  background?: 'gray' | 'white';
  blocks: ContentBlock[];
};

export type SourceBlock = {
  type: 'source';
  label: string;
  url: string;
};

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | SectionTitleBlock
  | ImageBlock
  | CaptionedImageBlock
  | HighlightCardBlock
  | QuoteBlock
  | SectionBlock
  | SourceBlock;

/** CMS 新闻文章结构，对应 Strapi 的 content-type */
export type CmsNewsArticle = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  heroImage?: string;
  blocks: ContentBlock[];
};

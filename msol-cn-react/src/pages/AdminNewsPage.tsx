import { useState, useCallback } from 'react';
import type { ContentBlock, CmsNewsArticle } from '../types/cms';
import { BlockRenderer } from '../components/news/BlockRenderer';

/** 可添加的块类型 */
const BLOCK_TYPES = [
  { type: 'paragraph', label: '段落' },
  { type: 'heading', label: '标题' },
  { type: 'section-title', label: '装饰标题' },
  { type: 'image', label: '图片' },
  { type: 'captioned-image', label: '图片+说明' },
  { type: 'highlight-card', label: '高亮卡片' },
  { type: 'quote', label: '引用' },
  { type: 'source', label: '来源链接' },
] as const;

function createEmptyBlock(type: string): ContentBlock {
  switch (type) {
    case 'paragraph': return { type: 'paragraph', text: '' };
    case 'heading': return { type: 'heading', level: 2, text: '' };
    case 'section-title': return { type: 'section-title', text: '' };
    case 'image': return { type: 'image', src: '', alt: '', fullBleed: false };
    case 'captioned-image': return { type: 'captioned-image', src: '', alt: '', caption: '' };
    case 'highlight-card': return { type: 'highlight-card', text: '' };
    case 'quote': return { type: 'quote', text: '', author: '' };
    case 'source': return { type: 'source', label: '', url: '' };
    default: return { type: 'paragraph', text: '' };
  }
}

/** 单个块的编辑表单 */
function BlockEditor({
  block,
  index,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  block: ContentBlock;
  index: number;
  onChange: (index: number, block: ContentBlock) => void;
  onRemove: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const labelMap: Record<string, string> = {
    paragraph: '段落',
    heading: '标题',
    'section-title': '装饰标题',
    image: '图片',
    'captioned-image': '图片+说明',
    'highlight-card': '高亮卡片',
    quote: '引用',
    source: '来源链接',
  };

  return (
    <div className="rounded border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold text-primary">{labelMap[block.type] ?? block.type}</span>
        <div className="flex gap-1">
          <button onClick={() => onMoveUp(index)} disabled={isFirst} className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 disabled:opacity-30">↑</button>
          <button onClick={() => onMoveDown(index)} disabled={isLast} className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-100 disabled:opacity-30">↓</button>
          <button onClick={() => onRemove(index)} className="rounded px-2 py-1 text-xs text-red-500 hover:bg-red-50">删除</button>
        </div>
      </div>

      {block.type === 'paragraph' && (
        <textarea
          className="w-full rounded border border-gray-300 p-2 text-sm"
          rows={3}
          placeholder="输入段落内容..."
          value={block.text}
          onChange={(e) => onChange(index, { ...block, text: e.target.value })}
        />
      )}

      {block.type === 'heading' && (
        <div className="space-y-2">
          <select
            className="rounded border border-gray-300 p-1 text-sm"
            value={block.level}
            onChange={(e) => onChange(index, { ...block, level: Number(e.target.value) as 2 | 3 | 4 })}
          >
            <option value={2}>H2 大标题</option>
            <option value={3}>H3 中标题</option>
            <option value={4}>H4 小标题</option>
          </select>
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="标题文字..."
            value={block.text}
            onChange={(e) => onChange(index, { ...block, text: e.target.value })}
          />
        </div>
      )}

      {block.type === 'section-title' && (
        <input
          className="w-full rounded border border-gray-300 p-2 text-sm"
          placeholder="装饰标题文字（支持<br/>换行）..."
          value={block.text}
          onChange={(e) => onChange(index, { ...block, text: e.target.value })}
        />
      )}

      {block.type === 'image' && (
        <div className="space-y-2">
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="图片路径，如 /images/news/xxx/img_01.png"
            value={block.src}
            onChange={(e) => onChange(index, { ...block, src: e.target.value })}
          />
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="alt 描述（可选）"
            value={block.alt ?? ''}
            onChange={(e) => onChange(index, { ...block, alt: e.target.value })}
          />
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={block.fullBleed ?? false}
              onChange={(e) => onChange(index, { ...block, fullBleed: e.target.checked })}
            />
            全出血（超出内容区宽度）
          </label>
        </div>
      )}

      {block.type === 'captioned-image' && (
        <div className="space-y-2">
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="图片路径"
            value={block.src}
            onChange={(e) => onChange(index, { ...block, src: e.target.value })}
          />
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="alt 描述"
            value={block.alt ?? ''}
            onChange={(e) => onChange(index, { ...block, alt: e.target.value })}
          />
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="图片说明文字"
            value={block.caption}
            onChange={(e) => onChange(index, { ...block, caption: e.target.value })}
          />
        </div>
      )}

      {block.type === 'highlight-card' && (
        <textarea
          className="w-full rounded border border-gray-300 p-2 text-sm"
          rows={2}
          placeholder="高亮文字（支持<br/>换行）..."
          value={block.text}
          onChange={(e) => onChange(index, { ...block, text: e.target.value })}
        />
      )}

      {block.type === 'quote' && (
        <div className="space-y-2">
          <textarea
            className="w-full rounded border border-gray-300 p-2 text-sm"
            rows={2}
            placeholder="引用内容..."
            value={block.text}
            onChange={(e) => onChange(index, { ...block, text: e.target.value })}
          />
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="作者（可选）"
            value={block.author ?? ''}
            onChange={(e) => onChange(index, { ...block, author: e.target.value })}
          />
        </div>
      )}

      {block.type === 'source' && (
        <div className="space-y-2">
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="来源名称"
            value={block.label}
            onChange={(e) => onChange(index, { ...block, label: e.target.value })}
          />
          <input
            className="w-full rounded border border-gray-300 p-2 text-sm"
            placeholder="链接 URL"
            value={block.url}
            onChange={(e) => onChange(index, { ...block, url: e.target.value })}
          />
        </div>
      )}
    </div>
  );
}

export default function AdminNewsPage() {
  const [meta, setMeta] = useState({
    slug: '',
    title: '',
    date: '',
    isoDate: '',
    category: '活动资讯',
    heroImage: '',
  });
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const addBlock = (type: string) => {
    setBlocks([...blocks, createEmptyBlock(type)]);
  };

  const updateBlock = useCallback((index: number, block: ContentBlock) => {
    setBlocks((prev) => prev.map((b, i) => (i === index ? block : b)));
  }, []);

  const removeBlock = useCallback((index: number) => {
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const moveUp = useCallback((index: number) => {
    if (index === 0) return;
    setBlocks((prev) => {
      const arr = [...prev];
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      return arr;
    });
  }, []);

  const moveDown = useCallback((index: number) => {
    setBlocks((prev) => {
      if (index >= prev.length - 1) return prev;
      const arr = [...prev];
      [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
      return arr;
    });
  }, []);

  const generateJson = (): CmsNewsArticle => ({
    slug: meta.slug,
    title: meta.title,
    date: meta.date,
    isoDate: meta.isoDate,
    category: meta.category,
    ...(meta.heroImage ? { heroImage: meta.heroImage } : {}),
    blocks,
  });

  const copyJson = () => {
    const json = JSON.stringify(generateJson(), null, 2);
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJson = () => {
    const json = JSON.stringify(generateJson(), null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${meta.slug || 'news-article'}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-lg font-bold text-primary-dark">新闻管理（测试版）</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              {showPreview ? '编辑模式' : '预览模式'}
            </button>
            <button
              onClick={copyJson}
              className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              {copied ? '已复制 ✓' : '复制 JSON'}
            </button>
            <button
              onClick={downloadJson}
              className="rounded bg-primary-dark px-4 py-2 text-sm font-medium text-white hover:bg-primary"
            >
              下载 JSON
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-6">
        {showPreview ? (
          /* 预览模式 */
          <div className="rounded-lg border border-gray-200 bg-[#f5f8fb] p-8">
            <div className="mx-auto max-w-4xl bg-white px-7 py-10 shadow-sm md:px-14 md:py-14">
              {meta.heroImage && (
                <div className="-mx-7 -mt-10 mb-12 md:-mx-14 md:-mt-14">
                  <img src={meta.heroImage} alt="" className="w-full" />
                </div>
              )}
              <BlockRenderer blocks={blocks} />
            </div>
          </div>
        ) : (
          /* 编辑模式 */
          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              {/* 基本信息 */}
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h2 className="mb-4 text-sm font-bold text-gray-700">文章基本信息</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">Slug（URL标识）</label>
                    <input
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      placeholder="如: pmi-conference-2025"
                      value={meta.slug}
                      onChange={(e) => setMeta({ ...meta, slug: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">分类</label>
                    <select
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      value={meta.category}
                      onChange={(e) => setMeta({ ...meta, category: e.target.value })}
                    >
                      <option value="活动资讯">活动资讯</option>
                      <option value="企业动态">企业动态</option>
                      <option value="集团战略">集团战略</option>
                      <option value="产品服务">产品服务</option>
                      <option value="全球布局">全球布局</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block text-xs text-gray-500">文章标题</label>
                    <input
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      placeholder="新闻标题"
                      value={meta.title}
                      onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">显示日期</label>
                    <input
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      placeholder="2025.01.15"
                      value={meta.date}
                      onChange={(e) => setMeta({ ...meta, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-gray-500">ISO日期</label>
                    <input
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      placeholder="2025-01-15"
                      value={meta.isoDate}
                      onChange={(e) => setMeta({ ...meta, isoDate: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block text-xs text-gray-500">顶部大图（可选）</label>
                    <input
                      className="w-full rounded border border-gray-300 p-2 text-sm"
                      placeholder="/images/news/xxx/hero.png"
                      value={meta.heroImage}
                      onChange={(e) => setMeta({ ...meta, heroImage: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* 内容块列表 */}
              <div className="space-y-3">
                {blocks.map((block, index) => (
                  <BlockEditor
                    key={index}
                    block={block}
                    index={index}
                    onChange={updateBlock}
                    onRemove={removeBlock}
                    onMoveUp={moveUp}
                    onMoveDown={moveDown}
                    isFirst={index === 0}
                    isLast={index === blocks.length - 1}
                  />
                ))}
              </div>

              {blocks.length === 0 && (
                <div className="rounded-lg border-2 border-dashed border-gray-300 p-10 text-center text-gray-400">
                  点击右侧按钮添加内容块
                </div>
              )}
            </div>

            {/* 右侧工具栏 */}
            <div className="space-y-2 lg:sticky lg:top-20 lg:self-start">
              <p className="mb-2 text-xs font-bold text-gray-500">添加内容块</p>
              {BLOCK_TYPES.map((bt) => (
                <button
                  key={bt.type}
                  onClick={() => addBlock(bt.type)}
                  className="w-full rounded border border-gray-200 bg-white px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:border-primary hover:bg-primary/5 hover:text-primary"
                >
                  + {bt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

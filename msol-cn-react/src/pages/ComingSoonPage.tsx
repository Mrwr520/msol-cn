/** 临时占位页面：尚未迁移完成的页面先用它兜底，避免路由 404 */
export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-2xl font-bold text-ink">{title}</h1>
      <p className="mt-4 text-sm text-ink/60">该页面正在迁移中，敬请期待。</p>
    </div>
  );
}

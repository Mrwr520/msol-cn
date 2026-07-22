/**
 * 拼接静态资源路径，自动加上 base 前缀，解决 GitHub Pages 部署路径问题
 */
const base = import.meta.env.BASE_URL

export function assetUrl(path: string): string {
  // 去掉开头的 / 避免重复
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}

# MSOL 中文官网 React 重构 - 需求文档

## 背景
现有官网 `msol-cn` 为纯静态 HTML + jQuery/webpack 打包 JS 的多页站点，部署方式是手工 pscp 上传到腾讯云 Linux 服务器（Apache + Docker）。本项目目标是用 React + Tailwind CSS 重写该站点的**中文版**，保持内容、视觉动画、色系与图标基本一致，允许对整体布局排版做适度优化，最终以静态构建产物部署到腾讯云服务器。

## 范围
- 仅重构 `cn/` 目录下的中文站点（不含 en 日文跳转站）。
- 逐页迁移，一个页面一个页面对照抠，不做内容删减或新增，只做布局优化和技术栈替换。
- 保留原站的滚动出现动画（fade-in / swipe-in / fade-each）、按钮 hover 动画（背景滑动、箭头位移）、首屏视频背景等关键动效。
- 适配桌面端与移动端（原站断点：47.9375em / 48em / 63.9375em / 64em，換算 Tailwind breakpoint）。

## 页面清单（对应原站 htm 文件）
| # | 路由 | 原文件 | 说明 |
|---|------|--------|------|
| 1 | `/` | `cn/index.htm` | 首页：视频首屏 + 大图轮播文案 + 业务三卡片 + 新闻 + 联系CTA |
| 2 | `/feature` | `cn/feature/index.htm` | 特长页 |
| 3 | `/feature/mission` | `cn/feature/mission/index.htm` | MSOL的使命 |
| 4 | `/business` | `cn/business/index.htm` | 业务介绍总览 |
| 5 | `/business/service` | `cn/business/service/index.htm` | 服务详情 |
| 6 | `/business/software` | `cn/business/software/index.htm` | PROEVER 软件介绍 |
| 7 | `/business/training` | `cn/business/training/index.htm` | 培训 |
| 8 | `/company` | `cn/company/index.htm` | 公司信息总览 |
| 9 | `/company/company-data` | `cn/company/company_data/index.htm` | 公司概要 |
| 10 | `/company/director` | `cn/company/director/index.htm` | 董事信息 |
| 11 | `/company/history` | `cn/company/history/index.htm` | 发展历程 |
| 12 | `/news` | `cn/news/index.htm` | 新闻列表 |
| 13 | `/news/:slug` | `cn/news/20181116_1440.html` 等 | 新闻详情 |
| 14 | `/contact` | `cn/contact/index.htm` | 联系我们 |
| 15 | `/privacy` | `cn/privacy/index.htm` | 隐私条款 |
| 16 | `/marketing` | `cn/marketing/index.htm` | 营销落地页 |
| 17 | `/tvcm` | `cn/tvcm/index.htm` | 宣传视频页 |

页头导航、页脚固定在所有页面复用（Header / Footer 组件）。

## 视觉与动效需求（必须还原）
1. **配色**：从 `common/css/app-2.css` 中提取的品牌色系，作为 Tailwind 主题色：
   - `primary` = `#006dac`（主蓝，正文链接 hover、按钮基础色）
   - `primary-dark` = `#01396d`（深蓝，header/footer 强调条、联系区背景）
   - `primary-mid` = `#1b5597`（渐变中间色，darkblue 按钮渐变起点）
   - `accent` = `#f08201`（橙色箭头/图标强调色，对应原站命名的 "-yellow" 系列）
   - `ink` = `#333333`（正文黑）
   - `line` = `#e5e5e5`（分隔线/边框）
2. **滚动进入动画**：还原原站 `u-fade-in` / `u-swipe-in` / `u-fade-each` 类的行为——用 `IntersectionObserver` 一次性触发 `.-visible` 效果：
   - fade-in: `opacity 0→1`，`0.25s linear`，支持 `-delay01` ~ `-delay20`（0.1s 步长）
   - swipe-in: `opacity 0→1` + `translateY(20px)→0`，`cubic-bezier(0.215,0.61,0.355,1)`，默认 0.25s，`-slow` 0.4s（近似），`-superslow` 0.85s
   - fade-each: 逐字/逐段淡入（用于标题），子元素级联 delay
3. **按钮动效**：
   - `-darkblue` 按钮：背景为双色渐变（`#1b5597` → `#01396d`），hover 时 `background-position` 从 right 滑到 left，配合 `color` 过渡，0.4s 缓动
   - 通用按钮 hover：`:before` 黑色层从左侧滑入（`translateX(-100%)→0`），0.4s
   - 箭头图标 hover 位移：`translate(4px,0) rotate(45deg)`，0.25s
4. **首屏视频**：首页顶部视频背景自动播放、静音、循环（对应 `video-04.mp4` + video.js），移动端用海报图替代或降级播放。
5. **响应式断点**（对应 Tailwind config 自定义）：
   - `sm`: 0–767px（原 max-width 47.9375em ≈ 767px，SP）
   - `md`: 768–1023px（原 48em 起，≈768px）
   - `lg`: 1024px 起（原 64em ≈1024px，PC hover 动效生效点）

## 非视觉需求
- 使用 React 18 + TypeScript + Vite + React Router + Tailwind CSS 3。
- 图片/视频等静态资源从原目录复制到 React 项目 `public/` 下，路径结构尽量保持可识别（如 `public/img/`, `public/video/`, `public/business/...`）。
- SEO 基础信息（title、meta description、OG）逐页保留，用 React 方式（`<title>`/`document.title` 或简单 head 管理）设置。
- 联系表单页保留表单结构（可先做静态展示，不接后端，因原站也是外部跳转表单/或简单展示）。
- 构建产物为纯静态文件（`vite build`），可直接被 Apache/Nginx 托管，适配现有腾讯云 Linux 服务器部署方式。

## 明确不做的事
- 不做后端/CMS 接口对接（原站新闻列表为手工 HTML，保持静态数据数组即可）。
- 不引入日文站（en/整体只有跳转页，不在本次范围）。
- 不做自动化 CI/CD（除非用户后续提出）。

## 验收标准
- 每个页面路由可访问，视觉结构、文案、图片与原站页面对应一致（允许排版微调但信息不丢失）。
- 滚动动画在桌面端和移动端均可触发一次性播放，效果与原站方向/时长基本一致。
- 首页视频背景可正常自动播放（桌面端），移动端有静态降级。
- 页面在 375px（手机）、768px（平板）、1440px（桌面）三个视口下无明显布局错乱。
- `npm run build` 产物可用本地静态服务器直接跑通预览。

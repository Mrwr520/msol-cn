# MSOL 中文官网 React 重构 - 设计文档

## 技术栈

- React 18/19 + TypeScript + Vite（脚手架已生成于 `msol-cn-react/`）
- React Router v6（多页路由，`createBrowserRouter` 或 `<Routes>`）
- Tailwind CSS 3（自定义主题色 + 断点）
- 动画库：`motion`（原 framer-motion，新包名体积更小）。选型原因：本项目动效需求都是"滚入视口→一次性 fade/swipe/stagger 播放"，属于 motion 的 `whileInView` + `viewport.once` 声明式写法的甜蜜区；相比手写 IntersectionObserver 或 GSAP 的命令式时间轴+手动清理，声明式组件更适合被批量、重复地生成到十几个页面中，出错时也只影响视觉效果，不会引入清理逻辑遗漏导致的隐蔽 bug。GSAP 在 scrub/pin/复杂时间轴编排场景优势明显，但本项目暂无此类需求，故不引入以控制体积和复杂度。

## 目录结构（msol-cn-react/src）

```
src/
  main.tsx
  App.tsx                 # 路由表
  layouts/
    RootLayout.tsx         # Header + <Outlet/> + Footer + PageTop 按钮
  components/
    common/
      Header.tsx
      Footer.tsx
      Button.tsx           # c-button 等价组件，支持 variant: darkblue/inverted/border
      Arrow.tsx             # c-arrow 等价组件，支持 color: yellow(accent)/gray
      SectionHeading.tsx    # p-section-heading 等价
      Reveal.tsx            # motion 滚动动画组件：Reveal（fade/swipe）+ RevealEach（逐项级联，还原 fade-each）
    home/
      HeroVideo.tsx
      HeroSlide.tsx
      BusinessList.tsx
      NewsPreview.tsx
    ...按页面拆分子组件
  pages/
    HomePage.tsx
    FeaturePage.tsx
    FeatureMissionPage.tsx
    BusinessPage.tsx
    BusinessServicePage.tsx
    BusinessSoftwarePage.tsx
    BusinessTrainingPage.tsx
    CompanyPage.tsx
    CompanyDataPage.tsx
    CompanyDirectorPage.tsx
    CompanyHistoryPage.tsx
    NewsListPage.tsx
    NewsDetailPage.tsx
    ContactPage.tsx
    PrivacyPage.tsx
    MarketingPage.tsx
    TvcmPage.tsx
  data/
    news.ts                # 新闻静态数据数组
  styles/
    index.css              # tailwind 指令 + 全局字体 + keyframes
```

## Tailwind 主题配置（tailwind.config.js）

```js
theme: {
  extend: {
    colors: {
      primary: '#006dac',
      'primary-dark': '#01396d',
      'primary-mid': '#1b5597',
      accent: '#f08201',
      ink: '#333333',
      line: '#e5e5e5',
    },
    fontFamily: {
      sans: ['"webfontSourceHanSansSC"', '"Microsoft YaHei"', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    transitionTimingFunction: {
      msol: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    },
    keyframes: {
      msolFadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      msolSwipeIn: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  }
}
```

字体文件（`SourceHanSansCN-*.woff`）从 `common/font/SansCN/` 复制到 `msol-cn-react/public/fonts/`，`@font-face` 写入 `src/styles/index.css`。

## 动画方案：`motion` + `Reveal` / `RevealEach` 组件

已改用 `motion`（`npm install motion`）实现，不再手写 IntersectionObserver。

### Reveal.tsx / RevealEach.tsx（实际实现，位于 `src/components/common/Reveal.tsx`）

`Reveal` 组件，还原原站 `u-fade-in` / `u-swipe-in`：

- `type="fade"` → `opacity 0→1`
- `type="swipe"` → `opacity 0→1` + `y: 20→0`
- 底层用 `motion.div`（或 `as` prop 指定的标签）的 `initial` / `whileInView` / `viewport={{ once: true }}` 实现一次性触发，`transition.ease` 用原站的 `cubic-bezier(0.215, 0.61, 0.355, 1)` 数组形式 `[0.215, 0.61, 0.355, 1]`。
- `delay` prop 对应原站 `-delay01`~`-delay20`（数值 1~20，对应 0.1s \* n）。
- `speed` prop 对应 `-slow`(400ms) / `-superslow`(850ms)，默认 250ms。

`RevealEach` 组件，还原原站 `u-fade-each`（标题逐字/逐段级联淡入）：

- 接收 `items: ReactNode[]`，用 motion 的 `variants` + `staggerChildren` 实现逐项级联，比手写 stagger 逻辑更精确，无需简化为整体动画。
- `stagger` prop 控制每项间隔（默认 0.08s），`speed` 复用同一套 duration 映射。

两者都不需要手动清理副作用（`viewport.once: true` 由 motion 内部管理），批量套用到十几个页面时心智负担和出错率都更低。

## 按钮 / 箭头组件

`Button.tsx` 还原 `.c-button.-darkblue` 的渐变滑动 hover：

```tsx
// variant=darkblue: bg-gradient-to-r from-primary-mid via-primary-mid to-primary-dark, bg-[length:200%_100%] bg-right
// hover: bg-left  (通过 group-hover / hover: 类实现 background-position 过渡)
```

用 Tailwind 任意值 + `transition-[background-position]` 实现，还原 0.4s cubic-bezier 曲线。

`Arrow.tsx` 用一个 8x8px 旋转 45deg 的边框三角（border-t-2 border-r-2），颜色 `accent`，hover 位移 `translate-x-1`。

## 页面级动效映射表（示例：首页）

| 原站元素         | 原 class                       | React 实现                                                                                                       |
| ---------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 首屏大标题       | `js-scrollup u-fade-in`        | `<Reveal type="fade">`                                                                                           |
| 副标题（延迟）   | `u-fade-in -delay10`           | `<Reveal type="fade" delay={10}>`                                                                                |
| 业务列表 li      | `js-scrollup u-swipe-in`       | `<Reveal type="swipe">`（可加 stagger：index\*1 作为 delay）                                                     |
| 区块标题（逐字） | `u-fade-each -superslow`       | `<RevealEach items={[...]} speed="superslow">`（用 motion staggerChildren 精确还原逐项级联，不再简化为整体动画） |
| 首屏视频         | `video.js` autoplay muted loop | 原生 `<video autoPlay muted loop playsInline>`，移除 video.js 依赖（无 UI 控件需求，原设置 controls=false）      |

> 更新说明：得益于 `motion` 的 `staggerChildren`，`u-fade-each` 的逐字/逐段级联淡入效果可以被精确还原，不再需要像早期方案那样简化为整体块级动画。

## 资源迁移策略

1. 原 `cn/**/img/*`、根目录 `business|company|feature|img|video` 下的静态资源，按页面路由复制到 `msol-cn-react/public/assets/<page>/`。
2. SVG 图标（`common/svg/*.svg`, `img/icon_*.svg`）复制到 `public/icons/`，用 `<img src>` 或转 React 组件按需。
3. 字体文件复制到 `public/fonts/`。
4. 不迁移 `common/js/*`（jQuery/webpack bundle、video.js）——全部用 React 原生实现替代。
5. 不迁移 `eir_*.css`（IR/投资者关系样式，中文站首页未见引用主体内容，若后续发现被引用页面需要，再单独迁移）。

## 路由与部署

- React Router 使用浏览器路由（history API），部署到 Apache 需要配置 fallback 到 `index.html`（`.htaccess` 或 Apache `mod_rewrite`），会在 tasks 中记录部署配置产出物 `deploy/.htaccess` 示例。
- `vite build` 输出 `dist/`，即为上传到腾讯云服务器 `htdocs/cn/` 的产物（后续可与现有 pscp 流程结合）。

## 逐页迁移顺序（对照 requirements 页面清单，从上到下）

1. 全局：Tailwind 配置、字体、Header/Footer、Button/Arrow/Reveal 基础组件
2. 首页 `/`
3. 特长 `/feature`、`/feature/mission`
4. 业务总览 `/business`、`/business/service`、`/business/software`、`/business/training`
5. 公司信息 `/company` 及子页
6. 新闻 `/news` 列表 + 详情
7. 联系我们 `/contact`
8. 隐私条款 `/privacy`
9. 营销页 `/marketing`、宣传视频页 `/tvcm`
10. 移动端适配复查 + 动效统一走查 + 构建验证

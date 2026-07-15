# 实施任务清单

- [x] 1. 项目初始化：Vite + React + TS 脚手架（`msol-cn-react/`）
- [x] 2. 安装 Tailwind CSS 3 / PostCSS / Autoprefixer / react-router-dom / motion
- [x] 3. 配置 Tailwind（主题色、断点、字体、自定义 transition）
- [x] 4. 迁移字体文件到 public/fonts，写 @font-face
- [x] 5. 基础组件：Reveal/RevealEach（motion）、Button、Arrow、SectionHeading、PageHero、LinkCardList、InfoTable、ContentSection、VideoSection
- [x] 6. 全局布局：Header（含移动端菜单）、Footer、BackToTop、RootLayout、路由表 App.tsx
- [x] 7. 首页 `/`：视频首屏 + 大图文案 + 业务三卡片 + 新闻预览 + 联系CTA
- [x] 8. 特长页 `/feature` + `/feature/mission`
- [x] 9. 业务总览 `/business`
- [x] 10. 业务-服务 `/business/service`
- [x] 11. 业务-软件 PROEVER `/business/software`
- [x] 12. 业务-培训 `/business/training`
- [x] 13. 公司信息总览 `/company`
- [x] 14. 公司概要 `/company/company-data`
- [x] 15. 董事信息 `/company/director`
- [x] 16. 发展历程 `/company/history`
- [x] 17. 新闻列表 `/news` + 新闻详情 `/news/:slug`
- [x] 18. 联系我们 `/contact`
- [x] 19. 隐私条款 `/privacy`
- [x] 20. 营销页 `/marketing` + 宣传视频页 `/tvcm`
- [x] 21. 移动端断点复查（375/768/1440）+ 动效统一走查
- [~] 22. 生产构建验证（`npm run build` + 本地静态服务器预览）+ Apache 部署配置示例（`.htaccess`）

> 进度约定：每完成一个页面任务，勾选对应项并做一次视觉抽查（对照原站截图/预览）。
> 已知修复记录：Header 下拉菜单 z-index 层叠问题、全局 a:hover/a:visited 选择器特异性覆盖 Tailwind 颜色类问题、BackToTop 波纹动画缺失/底色缺失问题，均已在 common 组件中修复。

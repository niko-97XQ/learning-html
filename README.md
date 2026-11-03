# 许强 / Qiang Xu · 个人作品与研究

## 2026-10-28 本地视觉改版

当前编辑目录为桌面 `网站设计/my-site`。采用灰白、黑字和少量蓝色的简洁布局，包含首页的项目界面示意、滚动淡入，以及页尾自动关机的无用机器。原来的打印机实验仍可从首页进入。

网站继续使用老师课件的 HTML/CSS/JavaScript 基础结构，没有引入框架。课件与实现的逐项对应见 [COURSE-NOTES.md](COURSE-NOTES.md)。本版本用于 Learning HTML 提交，源码保存在私有仓库。

新增 `motion.js`（渐进式滚动动效）和 `nothing.js`（页尾机器交互）。在系统中开启“减少动态效果”后，动画会自动简化。页面交互支持鼠标、触屏与键盘。

计算机科学本科生的个人网站，展示 AI 应用项目、具身空间记忆检索研究、Citi Bike 时空预测和学习经历。

## 本地运行

使用 VS Code 打开本目录，右键 `index.html` → **Open with Live Server**。通过 HTTP 访问，不能使用 `file://`，因为导航和页脚需要 fetch 加载。

## 页面

- `index.html`：个人介绍与精选作品。
- `project.html`：三个真实项目，提供 AI 应用 / 网站设计筛选。
- `research.html`：已录用论文与进行中的研究。
- `about.html`：教育、课程、技能、竞赛与联系。
- `quotes.html`：保留的课堂引用练习档案。

原生 HTML、CSS、JavaScript，无构建依赖。`nav.html` 与 `footer.html` 由 `nav.js` 共享加载，延续课程 DRY 结构。`projects.js` 实现筛选；禁用 JavaScript 时，项目内容仍完整可读。图片、样式与脚本均为本地资源。

## 内容与设计

2026 年 10 月更新：依据个人最新简历整理教育、项目、科研和竞赛；原始简历及手机号未加入仓库。录用论文与进行中的研究分开呈现，ForThatDay 品牌站的公开地址仍待发布。

网站由本人经历与 AI 辅助实现组成。首页两个项目示意图由 HTML/CSS 绘制，用来解释工作流，并非产品截图。个人肖像来自本人简历。分享封面为 1200×630 JPG，图标包含 32×32 与 180×180 PNG。

## GitHub 与后续

仓库：https://github.com/niko-97XQ/learning-html

保留初始课堂版本的 Git 历史。代码上传不等于开启 GitHub Pages；尚未配置自动部署。启用静态托管后可补充每页 canonical 和 og:url。

## 课程来源

- [Recap 2–4：初始完整代码](https://webtech.landrock.io/slides/recap-2-4.html)
- [Your Project：课程要求](https://webtech.landrock.io/slides/project.html)

最终网站要求包括至少四页、语义化结构、移动端适配、交互、持续 Git 历史和真实线上地址。引用练习沿用课程示例及其来源标注。


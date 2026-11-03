# 课件结构与本项目

基础代码参考 [Recap 2–4: Your site, by hand](https://webtech.landrock.io/slides/recap-2-4.html)，2026-10-28 核对。

| 课程示例 | 本项目对应 |
| --- | --- |
| `<!DOCTYPE html>`、`lang`、`meta charset`、`meta viewport` | 每个完整 HTML 页面 |
| `header`、`main`、`section`、`article`、`footer` | 页面和作品的语义结构 |
| 每页链接 `style.css` | 全站共享排版、Flexbox、Grid、媒体查询 |
| `nav.html` / `footer.html` 片段 | 只写一次导航与页脚，不重复整页结构 |
| `function load(file, target)` → `fetch` → `.text()` → `innerHTML` | `nav.js`，额外加入请求失败处理和 `aria-current` |
| `load('nav.html', 'site-header')`、`load('footer.html', 'site-footer')` | 原样保留两次调用 |
| 通过 Live Server 访问 | 必须使用 HTTP；直接双击 HTML 无法加载共享片段 |

设计扩展没有引入 React、构建工具或动画库：

- `style.css`：灰白底、系统字体、胶囊按钮、半透明导航；使用 CSS 画项目示意界面。
- `motion.js`：IntersectionObserver + Web Animations API。内容默认可见，进入视口播放一次，不劫持滚动。
- `nothing.js`：按钮 click → data-phase 状态 → CSS transition。过程为 idle → thinking → opening → reaching → returning → closing → idle。
- 原来的 `machine.html/css/js` 保留，首页“另一个没用的发明”可以进入。
- 所有动效尊重 `prefers-reduced-motion`；开关可用 Tab、空格和 Enter 操作。

本次是本地预览改版，没有向 GitHub 推送。

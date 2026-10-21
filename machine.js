// 四个状态：待机 idle → 打印 printing → 审核 judging → 回收 retracting → 待机。
const stage = document.getElementById('machine-stage'); // 外壳的 data-state 决定 CSS 画面。
const button = document.getElementById('make-meaning'); // 唯一的操作按钮。
const screen = document.getElementById('machine-screen'); // 机器上的小屏幕。
const status = document.getElementById('machine-status'); // 同时给读屏软件播报状态。
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)'); // 尊重系统动画偏好。
let state = 'idle'; // 只保存当前状态，不累计分数或点击次数。
let timer = null; // 整个流程共用一个定时器，避免连点产生多个循环。

function show(next, display, description) { // 状态、屏幕与说明在同一个地方更新。
  state = next; // 先更新逻辑状态，下一次点击立刻能读到。
  stage.dataset.state = next; // CSS 根据它打印、盖章或收纸。
  screen.textContent = display; // 用 textContent 更新纯文字。
  status.textContent = description; // role=status 会温和地读出这句话。
  button.setAttribute('aria-disabled', String(next !== 'idle')); // 忙时保留键盘焦点，但表示暂不可再启动。
}

function after(delay, action) { // 每个阶段只安排下一步，不一次堆满定时器。
  window.clearTimeout(timer); // 即使意外重复调用，也只保留一个后续动作。
  timer = window.setTimeout(action, delay); // 延迟后运行指定函数。
}

function reset() { // 每轮结束必须完整回到最初状态。
  window.clearTimeout(timer); // 清掉尚未执行的动作。
  timer = null; // 不再持有定时器编号。
  show('idle', '等待一点期待_', '待机。按下按钮，看看会发生什么。'); // 恢复所有可见状态。
}

function makeMeaning() { // 鼠标、触屏、Enter 和空格都会触发原生按钮的 click。
  if (state !== 'idle') return; // 忙时忽略重复点击，保证永远只有一轮。
  show('printing', '正在制造意义…', '正在制造意义。请稍候，它很认真。'); // 纸从插槽里升起。
  after(reducedMotion.matches ? 900 : 1600, () => { // 留出打印与阅读时间；减少动画时不必等纸移动。
    show('judging', '警告：过于有用！', '审核结果：过于有用。盖章作废。'); // 意外发生：自己的产出被自己否定。
    after(1350, () => { // 停一下，让人看清作废章。
      show('retracting', '回收意义，请勿挽留。', '正在回收刚刚制造的意义。一切即将恢复原状。'); // 把纸吞回原处。
      after(reducedMotion.matches ? 650 : 1300, reset); // 回收完成，准备再白忙一次。
    });
  });
}

button.addEventListener('click', makeMeaning); // 不写仅对鼠标有效的 hover 逻辑。
document.addEventListener('visibilitychange', () => { // 切走标签页时，浏览器可能降低计时频率。
  if (document.hidden) reset(); // 立即复位，回来时不会困在中间状态。
});
window.addEventListener('pagehide', reset); // 离开或进入往返缓存之前也复位。
reset(); // 初次加载和后续循环使用完全相同的初态。

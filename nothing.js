// 页尾无用机器：事件监听 → 修改状态 → CSS 动画，沿用课堂的原生 JS。
const nothingMachine = document.querySelector('.nothing-machine');
if (nothingMachine) {
  const toggle = nothingMachine.querySelector('button');
  const status = document.getElementById('nothing-status');
  const counter = document.getElementById('nothing-count');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const replies = ['好了，关掉了。', '再开一次？那我再关一次。', '我很忙。忙着什么也不做。', '今天的工作：到此为止。', '谢谢。下次也不一定。'];
  let busy = false;
  let count = 0;
  let timers = [];
  function later(action, delay) { timers.push(window.setTimeout(action, delay)); }
  function reset() {
    timers.forEach(window.clearTimeout);
    timers = [];
    busy = false;
    nothingMachine.dataset.phase = 'idle';
    toggle.setAttribute('aria-checked', 'false');
    toggle.removeAttribute('aria-disabled');
  }
  toggle.addEventListener('click', () => {
    if (busy) return; // 连续点击不叠加计时器。
    busy = true;
    toggle.setAttribute('aria-disabled', 'true');
    toggle.setAttribute('aria-checked', 'true');
    nothingMachine.dataset.phase = 'thinking';
    status.textContent = count === 0 ? '嗯？谁把我打开了。' : '怎么又是你。';
    const speed = reduced.matches ? 0.25 : 1;
    later(() => { nothingMachine.dataset.phase = 'opening'; status.textContent = '稍等，我来关。'; }, 600 * speed);
    later(() => { nothingMachine.dataset.phase = 'reaching'; }, 1100 * speed);
    later(() => {
      toggle.setAttribute('aria-checked', 'false');
      count += 1;
      counter.textContent = count;
      status.textContent = replies[(count - 1) % replies.length];
      nothingMachine.dataset.phase = 'returning';
    }, 1800 * speed);
    later(() => { nothingMachine.dataset.phase = 'closing'; }, 2300 * speed);
    later(reset, 2800 * speed);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && busy) { reset(); status.textContent = '你离开的时候，它已经下班了。'; }
  });
  window.addEventListener('pagehide', reset);
}

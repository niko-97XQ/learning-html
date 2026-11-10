// The useless machine in the footer: event listener → state change → CSS animation, using plain JS from class.
const nothingMachine = document.querySelector('.nothing-machine');
if (nothingMachine) {
  const toggle = nothingMachine.querySelector('button');
  const status = document.getElementById('nothing-status');
  const counter = document.getElementById('nothing-count');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const replies = ['There. Off again.', 'Turn it on again? I will turn it off again.', 'I am busy. Busy doing nothing.', "Today's work: officially done.", 'Thanks. Maybe next time. Maybe not.'];
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
    if (busy) return; // Repeated clicks never stack timers.
    busy = true;
    toggle.setAttribute('aria-disabled', 'true');
    toggle.setAttribute('aria-checked', 'true');
    nothingMachine.dataset.phase = 'thinking';
    status.textContent = count === 0 ? 'Hm? Who turned me on.' : 'You again.';
    const speed = reduced.matches ? 0.25 : 1;
    later(() => { nothingMachine.dataset.phase = 'opening'; status.textContent = 'One moment, coming to switch it off.'; }, 600 * speed);
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
    if (document.hidden && busy) { reset(); status.textContent = 'While you were away, it clocked out.'; }
  });
  window.addEventListener('pagehide', reset);
}

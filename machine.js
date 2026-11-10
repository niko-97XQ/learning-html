// Four states: idle → printing → judging → retracting → idle again.
const stage = document.getElementById('machine-stage'); // The data-state on the shell drives the CSS scene.
const button = document.getElementById('make-meaning'); // The one and only control.
const screen = document.getElementById('machine-screen'); // The little screen on the machine.
const status = document.getElementById('machine-status'); // Also announces state to screen readers.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)'); // Respect the system motion preference.
let state = 'idle'; // Only tracks the current state; no score, no click counter.
let timer = null; // One shared timer for the whole flow, so double clicks cannot stack loops.

function show(next, display, description) { // State, screen and description all update in one place.
  state = next; // Update the logical state first so the next click reads it immediately.
  stage.dataset.state = next; // CSS prints, stamps or retracts based on this.
  screen.textContent = display; // Plain text updated via textContent.
  status.textContent = description; // role=status gently reads this sentence aloud.
  button.setAttribute('aria-disabled', String(next !== 'idle')); // While busy, keep keyboard focus but signal it cannot start again.
}

function after(delay, action) { // Each phase only schedules the next step, never a pile of timers.
  window.clearTimeout(timer); // Even if called twice by accident, only one follow-up survives.
  timer = window.setTimeout(action, delay); // Run the given function after the delay.
}

function reset() { // Every round must return fully to the initial state.
  window.clearTimeout(timer); // Drop any pending action.
  timer = null; // No timer id held anymore.
  show('idle', 'Waiting for a little hope_', 'Standing by. Press the button and see what happens.'); // Restore every visible state.
}

function makeMeaning() { // Mouse, touch, Enter and Space all fire the native button click.
  if (state !== 'idle') return; // Ignore repeated clicks while busy, so there is always exactly one round.
  show('printing', 'Manufacturing meaning…', 'Manufacturing meaning. Please wait — it is being very earnest.'); // The paper rises from the slot.
  after(reducedMotion.matches ? 900 : 1600, () => { // Leave time for printing and reading; with reduced motion, no need to wait for the paper to move.
    show('judging', 'Warning: too useful!', 'Review result: too useful. Stamped void.'); // The accident: its own output, rejected by itself.
    after(1350, () => { // Pause so the void stamp can be seen clearly.
      show('retracting', 'Reclaiming meaning. No appeals.', 'Reclaiming the meaning it just made. Everything will return to normal.'); // Swallow the paper back in.
      after(reducedMotion.matches ? 650 : 1300, reset); // Reclaim complete, ready to waste effort again.
    });
  });
}

button.addEventListener('click', makeMeaning); // No mouse-only hover logic.
document.addEventListener('visibilitychange', () => { // When the tab is hidden, the browser may throttle timers.
  if (document.hidden) reset(); // Reset immediately so nobody gets stuck mid-state on return.
});
window.addEventListener('pagehide', reset); // Also reset before leaving or entering the back-forward cache.
reset(); // First load and every later loop share exactly the same initial state.

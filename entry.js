// The home-page intro gate appears only on the first visit of this browser tab; add ?intro=1 to replay it.
(() => {
  const gate = document.getElementById('entry-gate');
  if (!gate) return;

  const replay = new URLSearchParams(window.location.search).get('intro') === '1';
  let seen = false;
  try { seen = window.sessionStorage.getItem('qiang-xu-entry-seen') === '1'; } catch (_) { /* Entering still works when storage is disabled */ }
  if (seen && !replay) {
    gate.remove();
    return;
  }

  const button = gate.querySelector('.entry-button');
  const background = [document.querySelector('.skip-link'), document.getElementById('site-header'), document.getElementById('main'), document.getElementById('site-footer')].filter(Boolean);
  const priorInert = background.map(element => element.inert);
  background.forEach(element => { element.inert = true; });
  document.documentElement.classList.add('entry-active');
  gate.hidden = false;
  button.focus({ preventScroll: true });

  let leaving = false;
  button.addEventListener('click', () => {
    if (leaving) return;
    leaving = true;
    try { window.sessionStorage.setItem('qiang-xu-entry-seen', '1'); } catch (_) { /* Entering does not depend on storage */ }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) gate.classList.add('is-exiting');
    window.setTimeout(() => {
      gate.remove();
      document.documentElement.classList.remove('entry-active');
      background.forEach((element, index) => { element.inert = priorInert[index]; });
      const main = document.getElementById('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
        main.addEventListener('blur', () => main.removeAttribute('tabindex'), { once: true });
      }
    }, reduced ? 0 : 980);
  });
})();

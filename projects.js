// Filter projects with buttons; aria-pressed tells assistive technology which filter is active.
const bar = document.querySelector('.filter-bar');
const cards = [...document.querySelectorAll('[data-category]')];
if (bar) {
  bar.hidden = false;
  bar.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      bar.querySelectorAll('button').forEach(item => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      let count = 0;
      cards.forEach(card => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
        if (!card.hidden) count += 1;
      });
      document.getElementById('filter-status').textContent = `Showing ${count} projects`;
    });
  });
}

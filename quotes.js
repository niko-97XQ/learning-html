// Quotes hero: pick one random quote from the grid below, so the list stays the single source of truth.
const heroText = document.getElementById('hero-quote-text');
const heroSource = document.getElementById('hero-quote-source');
const quotes = [...document.querySelectorAll('.quote-grid .quote')];
if (heroText && heroSource && quotes.length) {
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  const text = pick.querySelector('blockquote p');
  const source = pick.querySelector('footer');
  if (text && source) {
    heroText.textContent = text.textContent;
    heroSource.textContent = source.textContent;
  }
}

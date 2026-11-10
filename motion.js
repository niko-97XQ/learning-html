// Progressive enhancement: content is visible by default, fades in once when entering the viewport, and never hijacks scrolling.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (!motionPreference.matches) {
        entry.target.animate(
          [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 750, easing: 'cubic-bezier(.2,.7,.2,1)' }
        );
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('[data-reveal]').forEach(section => observer.observe(section));
}

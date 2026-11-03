// 渐进增强：内容默认可见，进入视口后只播放一次淡入，不劫持滚动。
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

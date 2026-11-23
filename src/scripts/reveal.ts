// Fades elements in as they scroll into view.
export function initReveal() {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.15 },
  );
  targets.forEach((el) => observer.observe(el));
}

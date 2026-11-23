// Scroll-driven timeline: fills the rail, lights up reached entries,
// highlights the active one and swaps the sticky year marker.

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

export function initTimeline() {
  const root = document.querySelector<HTMLElement>('[data-timeline]');
  if (!root) return;

  const fill = root.querySelector<HTMLElement>('[data-tl-fill]');
  const yearLabel = root.querySelector<HTMLElement>('[data-tl-year]');
  const items = [...root.querySelectorAll<HTMLElement>('[data-tl-item]')];
  let ticking = false;

  function update() {
    ticking = false;
    const marker = window.innerHeight * 0.5; // reading line
    const rect = root!.getBoundingClientRect();
    const progress = clamp((marker - rect.top) / rect.height, 0, 1);
    if (fill) fill.style.height = `${progress * 100}%`;

    let active: HTMLElement | null = null;
    items.forEach((item) => {
      const reached = item.getBoundingClientRect().top <= marker;
      item.classList.toggle('is-reached', reached);
      if (reached) active = item;
    });
    items.forEach((item) => item.classList.toggle('is-active', item === active));

    const year = (active ?? items[0])?.dataset.year ?? '';
    if (yearLabel && yearLabel.textContent !== year) {
      yearLabel.classList.remove('is-swapping');
      void yearLabel.offsetWidth; // restart the CSS animation
      yearLabel.textContent = year;
      yearLabel.classList.add('is-swapping');
    }
  }

  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

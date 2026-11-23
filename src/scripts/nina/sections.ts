// Works out which [data-nina] section is under the "reading line" and reports changes.

export function watchSections(onChange: (key: string) => void) {
  const sections = [...document.querySelectorAll<HTMLElement>('[data-nina]')];
  if (!sections.length) return;

  let current = '';
  let ticking = false;

  function check() {
    ticking = false;
    const line = window.innerHeight * 0.45;
    let best: HTMLElement | null = null;
    let bestHeight = Infinity;
    for (const el of sections) {
      const r = el.getBoundingClientRect();
      // Smallest element containing the line wins, so nested sections beat their parents.
      if (r.top <= line && r.bottom >= line && r.height < bestHeight) { best = el; bestHeight = r.height; }
    }
    const key = best?.dataset.nina;
    if (key && key !== current) { current = key; onChange(key); }
  }

  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  check();
}

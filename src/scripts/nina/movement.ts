// Nina trots after the cursor (fine pointers only). On touch devices she stays
// in the corner and trots in place while the page scrolls.

const SPEED = 320; // px per second, top speed
const SIZE = { w: 100, h: 115 };

export function initMovement(root: HTMLElement, sprite: HTMLElement) {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canFollow = matchMedia('(pointer: fine)').matches && !reduceMotion;
  const small = () => window.innerWidth < 600;
  const size = () => (small() ? { w: 72, h: 83 } : SIZE);

  const home = () => ({ x: window.innerWidth - size().w - 16, y: window.innerHeight - size().h - 16 });
  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

  let pos = home();
  let target = home();
  let facing = -1; // leans left at home, toward the page
  let last = 0;
  let raf = 0;
  let walking = false;

  function setWalking(on: boolean) {
    if (on === walking) return;
    walking = on;
    root.classList.toggle('is-walking', on);
  }

  function render() {
    root.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    sprite.style.setProperty('--face', String(facing));
    const { w } = size();
    root.classList.toggle('bubble-left', pos.x < 190);
    root.classList.toggle('bubble-right', pos.x > window.innerWidth - w - 190);
    root.classList.toggle('bubble-below', pos.y < 170);
  }

  function tick(now: number) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const dx = target.x - pos.x;
    const dy = target.y - pos.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 4) {
      const step = Math.min(SPEED * dt, dist * Math.min(1, dt * 6) + 0.5);
      pos = { x: pos.x + (dx / dist) * step, y: pos.y + (dy / dist) * step };
      if (Math.abs(dx) > 12) facing = dx > 0 ? 1 : -1;
      setWalking(dist > 20);
      render();
      raf = requestAnimationFrame(tick);
    } else {
      setWalking(false);
      raf = 0;
    }
  }

  function wake() {
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
  }

  function followPointer(e: PointerEvent) {
    const { w, h } = size();
    // Sit a little behind and below the cursor, on the side she's approaching from.
    const side = e.clientX > pos.x + w / 2 ? -1 : 1;
    target = {
      x: clamp(e.clientX + side * 56 - w / 2, 8, window.innerWidth - w - 8),
      y: clamp(e.clientY + 28 - h / 2, 80, window.innerHeight - h - 8),
    };
    wake();
  }

  if (canFollow) {
    window.addEventListener('pointermove', followPointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', () => { target = home(); wake(); });
  } else if (!reduceMotion) {
    let stopTimer = 0;
    window.addEventListener('scroll', () => {
      setWalking(true);
      window.clearTimeout(stopTimer);
      stopTimer = window.setTimeout(() => setWalking(false), 500);
    }, { passive: true });
  }

  window.addEventListener('resize', () => {
    if (!canFollow) pos = target = home();
    pos = { x: clamp(pos.x, 8, window.innerWidth - size().w - 8), y: clamp(pos.y, 8, window.innerHeight - size().h - 8) };
    render();
  });

  render();
}

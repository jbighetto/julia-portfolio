import { createBubble } from './bubble';
import { nextFact } from './facts';
import { initMovement } from './movement';
import { watchSections } from './sections';

const STORAGE_KEY = 'nina';
const MIN_GAP_MS = 4000; // minimum time between automatic facts

function setEnabled(on: boolean) {
  document.documentElement.dataset.nina = on ? 'on' : 'off';
  try { localStorage.setItem(STORAGE_KEY, on ? 'on' : 'off'); } catch { /* storage unavailable */ }
  document.querySelectorAll('[data-nina-toggle]').forEach((b) => b.setAttribute('aria-pressed', String(on)));
}

export function initNina() {
  const root = document.querySelector<HTMLElement>('[data-nina-root]');
  const sprite = root?.querySelector<HTMLElement>('[data-nina-sprite]');
  const button = root?.querySelector<HTMLElement>('[data-nina-pet]');
  if (!root || !sprite || !button) return;

  const enabled = () => document.documentElement.dataset.nina !== 'off';
  document.querySelectorAll('[data-nina-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(enabled()));
    b.addEventListener('click', () => setEnabled(!enabled()));
  });

  initMovement(root, sprite);
  const bubble = createBubble(root);

  let key = 'default';
  let lastAuto = 0;
  const seen = new Set<string>();
  let pending = 0;

  button.addEventListener('click', () => bubble.show(nextFact(key)));
  root.querySelector('[data-nina-next]')?.addEventListener('click', () => bubble.show(nextFact(key)));

  watchSections((newKey) => {
    key = newKey;
    window.clearTimeout(pending);
    if (!enabled() || seen.has(key)) return;
    const wait = Math.max(seen.size === 0 ? 1200 : 600, MIN_GAP_MS - (Date.now() - lastAuto));
    pending = window.setTimeout(() => {
      seen.add(key);
      lastAuto = Date.now();
      bubble.show(nextFact(key));
    }, wait);
  });
}

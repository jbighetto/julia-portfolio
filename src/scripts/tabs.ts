// Tiny accessible tab widget shared by the company logos and the career journey.
// Markup: [data-tabs] > [data-tab] buttons + [data-panel] panels (matched by index).
// Sets --progress (0..1) on the root so CSS can draw progress bars.

export function initTabs() {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-tab]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];

    function select(index: number, focus = false) {
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
        if (on && focus) tab.focus();
      });
      panels.forEach((panel, i) => { panel.hidden = i !== index; });
      root.style.setProperty('--progress', String(tabs.length > 1 ? index / (tabs.length - 1) : 1));
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(i));
      tab.addEventListener('keydown', (e) => {
        const step = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
        if (step) { e.preventDefault(); select((i + step + tabs.length) % tabs.length, true); }
      });
    });

    select(Number(root.dataset.start ?? 0));
  });
}

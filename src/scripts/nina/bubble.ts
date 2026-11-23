// Speech bubble: show a fact, auto-hide after a while.

export function createBubble(root: HTMLElement) {
  const bubble = root.querySelector<HTMLElement>('[data-nina-bubble]')!;
  const text = root.querySelector<HTMLElement>('[data-nina-text]')!;
  let timer = 0;

  function hide() {
    window.clearTimeout(timer);
    bubble.classList.remove('is-open');
    root.classList.remove('is-happy');
  }

  function show(message: string, visibleMs = 9000) {
    window.clearTimeout(timer);
    text.textContent = message;
    bubble.classList.add('is-open');
    root.classList.add('is-happy');
    timer = window.setTimeout(hide, visibleMs);
  }

  root.querySelector('[data-nina-close]')?.addEventListener('click', hide);
  return { show, hide };
}

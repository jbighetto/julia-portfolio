// Flip cards: any [data-flip-toggle] inside a [data-flip] card flips it.
export function initFlipCards() {
  document.querySelectorAll<HTMLElement>('[data-flip]').forEach((card) => {
    card.querySelectorAll<HTMLElement>('[data-flip-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const flipped = card.classList.toggle('is-flipped');
        card.querySelector<HTMLElement>(flipped ? '.back [data-flip-toggle]' : '.front [data-flip-toggle]')?.focus({ preventScroll: true });
      });
    });
  });
}

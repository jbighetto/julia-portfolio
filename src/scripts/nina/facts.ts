// Hands out facts without repeating until a section's list is used up.
import { ninaFacts } from '../../data/ninaFacts';

const queues = new Map<string, string[]>();

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function nextFact(key: string): string {
  const pool = ninaFacts[key] ?? ninaFacts.default;
  let queue = queues.get(key);
  if (!queue?.length) { queue = shuffle(pool); queues.set(key, queue); }
  return queue.pop()!;
}

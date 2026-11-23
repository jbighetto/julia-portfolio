// Companies Julia admires. Official marks come from simple-icons when available;
// the rest fall back to a styled wordmark until an official SVG is added.
import { siSpotify, siNetflix, siNubank, siRevolut } from 'simple-icons';

export interface TargetCompany {
  id: string;
  name: string;
  color: string; // brand color (light mode)
  colorDark?: string; // brand color on dark backgrounds, when different
  iconPath?: string; // 24x24 SVG path
  wordmark?: string; // fallback when there's no official icon
  why: string;
}

export const targetCompanies: TargetCompany[] = [
  {
    id: 'spotify', name: 'Spotify', color: `#${siSpotify.hex}`, iconPath: siSpotify.path,
    why: 'Spotify turned an overwhelming amount of music into something personal. Features like Discover Weekly make millions of people feel understood by a product.',
  },
  {
    id: 'netflix', name: 'Netflix', color: `#${siNetflix.hex}`, iconPath: siNetflix.path,
    why: 'Netflix changed how stories reach people, with obsessive product thinking and data behind everything from the interface to its global content strategy.',
  },
  {
    id: 'disney', name: 'Disney', color: '#113ccf', colorDark: '#7fa0ff', wordmark: 'Disney',
    why: 'Few companies build stories that last across generations. I love the mix of craft, technology and emotion behind every Disney experience.',
  },
  {
    id: 'scopely', name: 'Scopely', color: '#1d1d1b', colorDark: '#f3e9dc', wordmark: 'SCOPELY',
    why: 'Scopely turns beloved franchises into mobile games people play every day, a great example of fun, community and live product operations done well.',
  },
  {
    id: 'itau', name: 'Itaú', color: '#ec7000', wordmark: 'itaú',
    why: 'I started as an intern at Itaú in 2017 and came back in 2026. The scale of the bank and the pace of its digital transformation make it a place where product work reaches millions of people.',
  },
  {
    id: 'nubank', name: 'Nubank', color: `#${siNubank.hex}`, colorDark: '#b66cf0', iconPath: siNubank.path,
    why: 'Nubank made banking friendlier for millions of Brazilians and beyond, proving that great design and customer care can reshape an entire industry.',
  },
  {
    id: 'revolut', name: 'Revolut', color: `#${siRevolut.hex}`, colorDark: '#f3e9dc', iconPath: siRevolut.path,
    why: 'Revolut ships at remarkable speed and has turned money management into one global app. It’s the product ambition I want to learn from.',
  },
];

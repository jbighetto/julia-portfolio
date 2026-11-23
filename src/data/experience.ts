// Work history, newest first. All highlights are placeholders for now.

export interface Role {
  title: string;
  start: string; // display string, e.g. "2021"
}

export interface Experience {
  id: string;
  company: string;
  kind: 'full-time' | 'internship' | 'education';
  period: string; // display string
  year: string; // shown in the sticky year marker
  roles: Role[]; // oldest -> newest; one entry for single-role stints
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: 'mba',
    company: 'MBA, Barcelona',
    kind: 'education',
    period: 'Present',
    year: 'Now',
    roles: [{ title: 'MBA Student', start: 'Now' }],
    highlights: ['Placeholder: school, focus areas, and what I’m exploring.'],
  },
  {
    id: 'itau-2026',
    company: 'Itaú',
    kind: 'internship',
    period: 'Jun – Aug 2026',
    year: '2026',
    roles: [{ title: 'Intern', start: '2026' }],
    highlights: ['Placeholder: what I worked on.', 'Placeholder: impact or lesson learned.'],
  },
  {
    id: 'uhc',
    company: 'UnitedHealthcare',
    kind: 'full-time',
    period: '2020 – Aug 2025',
    year: '2025',
    roles: [
      { title: 'Associate Software Engineer', start: '2020' },
      { title: 'Software Engineer', start: '2021' },
      { title: 'Manager of Software Engineering', start: '2024' },
    ],
    highlights: [
      'Placeholder: products or systems I built.',
      'Placeholder: teams I led and how they grew.',
      'Placeholder: measurable outcome.',
    ],
  },
  {
    id: 'aphasia-lab',
    company: 'Aphasia Lab',
    kind: 'internship',
    period: '2019 – 2020',
    year: '2019',
    roles: [{ title: 'Intern', start: '2019' }],
    highlights: ['Placeholder: research or engineering work.'],
  },
  {
    id: '18-moons',
    company: '18 Moons',
    kind: 'internship',
    period: '2018',
    year: '2018',
    roles: [{ title: 'Intern', start: '2018' }],
    highlights: ['Placeholder: what I worked on.'],
  },
  {
    id: 'itau-2017',
    company: 'Itaú',
    kind: 'internship',
    period: '2017',
    year: '2017',
    roles: [{ title: 'Intern', start: '2017' }],
    highlights: ['Placeholder: where it all started.'],
  },
];

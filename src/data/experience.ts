// Timeline entries, newest first.

export type Highlight = string | { text: string; href: string };

export interface Role {
  title: string;
  start: string; // display string, e.g. "2021"
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  kind: 'full-time' | 'internship' | 'education';
  period: string; // display string
  year: string; // shown in the sticky year marker
  roles: Role[]; // oldest -> newest; one entry for single-role stints
  highlights: Highlight[];
}

export const experience: Experience[] = [
  {
    id: 'iese',
    company: 'IESE Business School',
    location: 'Barcelona, Spain',
    kind: 'education',
    period: '2025 – 2027',
    year: 'Now',
    roles: [{ title: 'MBA Candidate', start: '2025' }],
    highlights: [
      'IESE Women in STEM Scholarship · Forté Fellow',
      {
        text: 'VP of Conference, Women in Business Conference 2027',
        href: 'https://www.wib-conference-iese.com/',
      },
      'VP of External Relations, Brazilian Business Club',
      'VP of Upskilling, Tech Club',
      'Co-President, Salsa Club',
    ],
  },
  {
    id: 'itau-2026',
    company: 'Itaú Unibanco',
    location: 'São Paulo, Brazil',
    kind: 'internship',
    period: 'Jun – Aug 2026',
    year: '2026',
    roles: [{ title: 'MBA Intern, AI & Product Strategy', start: '2026' }],
    highlights: [
      'Led an AI-adoption study that identified token and tooling-access limits as the top barriers to scale, and turned it into a 6-initiative product roadmap.',
      'Directed a 12-week cross-functional GenAI transformation across Fraud/AML, built on engineering data, usage analytics and 100+ employee interviews.',
      'Presented an AI transformation roadmap to a 225-person tech org, targeting 2x faster delivery and 3x token efficiency within 12 months.',
      'Built a 0-to-1 executive analytics platform that replaced a 30–45 minute manual process with instant, data-driven investment decisions.',
    ],
  },
  {
    id: 'optum',
    company: 'Optum · UnitedHealth Group',
    location: 'Boston, United States',
    kind: 'full-time',
    period: 'Jun 2020 – Aug 2025',
    year: '2025',
    roles: [
      { title: 'Associate Software Engineer', start: '2020' },
      { title: 'Software Engineer', start: '2021' },
      { title: 'Manager of Software Engineering', start: '2024' },
    ],
    highlights: [
      'Delivered an automated audit solution covering 100% of UHC billing and invoicing, generating ~$1M in annual savings.',
      'Led a 10-person engineering team on UHC’s multicarrier quoting platform: 100+ features shipped and NPS up 15 points.',
      'Launched a web app that simplified UHC’s sales experience and cut quoting time by 30%.',
      'Built Java/SQL back-end services for the Risk Audit platform, halving eligibility review time for auditors.',
    ],
  },
  {
    id: 'aphasia-lab',
    company: 'Aphasia Lab',
    location: 'Boston, United States',
    kind: 'internship',
    period: '2019 – 2020',
    year: '2019',
    roles: [{ title: 'Intern', start: '2019' }],
    highlights: ['Placeholder: research or engineering work.'],
  },
  {
    id: '18-moons',
    company: '18 Moons',
    location: 'TBD',
    kind: 'internship',
    period: '2018',
    year: '2018',
    roles: [{ title: 'Intern', start: '2018' }],
    highlights: ['Placeholder: what I worked on.'],
  },
  {
    id: 'itau-2017',
    company: 'Itaú Unibanco',
    location: 'São Paulo, Brazil',
    kind: 'internship',
    period: '2017',
    year: '2017',
    roles: [{ title: 'Data Intern', start: '2017' }],
    highlights: [
      'Analyzed data from 10+ databases to design and prototype a Facebook chatbot, piloted publicly to 12M+ people in São Paulo.',
    ],
  },
  {
    id: 'bu',
    company: 'Boston University',
    location: 'Boston, United States',
    kind: 'education',
    period: '2016 – 2020',
    year: '2016',
    roles: [{ title: 'B.A. Computer Science · B.S. Communications', start: '2016' }],
    highlights: [
      'Venue Director, Brazil Conference 2019: a 3-day event for 900+ in-person and 30k+ online attendees.',
      'Programming Director, SheHacks Boston 2018: a 36-hour hackathon for 1k+ women and non-binary participants.',
    ],
  },
];

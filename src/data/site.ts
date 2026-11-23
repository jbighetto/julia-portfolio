// Site-wide content. Edit here; no layout code needs to change.

export const site = {
  name: 'Julia Bighetto',
  monogram: 'JB',
  catchphrase: {
    lead: 'Engineer by training, product-minded by choice.',
    emphasis: 'Making the world a little better day by day.',
  },
  bioShort:
    'Hi, I’m Julia! I’m a retired Software Engineer who left the world of Healthcare to become an MBA student in Barcelona.',
  email: 'julia.bighetto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/julia-bighetto',
  resume: '/resume.pdf',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog', badge: 'WIP' },
];

export const careerPath = [
  {
    label: 'Software Engineer',
    years: '2020 – 2024',
    text: 'I started at Optum building Java/SQL back-end services for the Risk Audit platform, then moved to a Node/JavaScript platform that gave partners real-time visibility into group insurance installations.',
  },
  {
    label: 'Engineering Manager',
    years: '2024 – 2025',
    text: 'I led a 10-person engineering team on UnitedHealthcare’s multicarrier quoting platform: 100+ features shipped and NPS up 15 points. Turns out I love growing teams as much as products.',
  },
  {
    label: 'Technical Product Owner',
    years: 'Along the way',
    text: 'Between engineering and the business, I shaped what to build and why. One result: a web app that simplified UHC’s sales experience and cut quoting time by 30%.',
  },
  {
    label: 'MBA at IESE',
    years: '2025 – 2027',
    text: 'Now in Barcelona on a Women in STEM scholarship and as a Forté Fellow. I interned at Itaú on AI and product strategy, and I’m leading the Women in Business Conference 2027.',
  },
];

// Placeholder: replace with the real bio when ready.
export const bio = [
  {
    heading: 'My story',
    text: 'Placeholder. A few paragraphs about where I grew up, how I found my way into software, and what pulled me toward product.',
  },
  {
    heading: 'What drives me',
    text: 'Placeholder. I want to make the world a better place by building products that change people’s lives for the better.',
  },
];

export const quickFacts = [
  { label: 'Languages', value: 'Portuguese (native), English (native), Spanish (B2)' },
  { label: 'Education', value: 'MBA, IESE · B.A. Computer Science & B.S. Communications, Boston University' },
  { label: 'Tech', value: 'JavaScript, TypeScript, Java, MongoDB · Python, SQL' },
  { label: 'Certifications', value: 'Google Cloud Leadership (2025) · Scrum Master & Agile (2021)' },
  { label: 'Work authorization', value: 'European Union, United States, Brazil' },
];

// "Outside of work" flip cards on the About page.
export interface OutsideItem {
  icon: string;
  title: string;
  teaser: string;
  detail: string;
  link?: { label: string; href: string };
  progress?: { from: string; to: string; value: number }; // value 0..1
}

export const outsideWork: OutsideItem[] = [
  {
    icon: '🏃‍♀️',
    title: 'Running',
    teaser: 'Lacing up in Barcelona',
    detail: 'I ran a 15k in August, and now I’m training for a half marathon in February 2027.',
    progress: { from: '15k · August ✓', to: 'Half marathon · Feb 2027', value: 15 / 21.1 },
  },
  {
    icon: '🎤',
    title: 'Women in Business',
    teaser: 'Leading WiB Conference 2027',
    detail: 'I’m VP of Conference for IESE’s Women in Business Conference 2027.',
    link: { label: 'Visit the conference site', href: 'https://www.wib-conference-iese.com/' },
  },
  {
    icon: '💃',
    title: 'Salsa',
    teaser: 'Dancing through the streets',
    detail: 'I dance salsa through the streets of Barcelona, and I co-preside the Salsa club at IESE.',
  },
  {
    icon: '📚',
    title: 'Reading',
    teaser: 'Reading, reading, reading!',
    detail: 'Always mid-book. Ask me for a recommendation, or send me yours.',
  },
];

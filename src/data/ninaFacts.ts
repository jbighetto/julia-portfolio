// Nina's fun facts, keyed by the data-nina="..." attribute on each page section.
// Add or edit facts freely; `default` is used when a section has none.

export const ninaFacts: Record<string, string[]> = {
  default: [
    'A dog’s nose print is unique, just like a human fingerprint.',
    'Dogs have up to ~300 million scent receptors. Humans have about 6 million.',
  ],

  // Home
  'home-hero': [
    'Woof! I’m Nina, Julia’s chief morale officer. Click me anytime for another fun fact.',
    'A dog’s nose print is unique, just like a human fingerprint. Mine is excellent, by the way.',
    'Dogs have up to ~300 million scent receptors. Humans have about 6 million. I can smell this whole page.',
  ],
  'home-focus': [
    'Netflix started out as a DVD-by-mail rental service before becoming a streaming giant.',
    'Brazil’s Pix instant payment system launched in November 2020 and changed how Brazilians pay for just about everything.',
    '“Fintech” is just “financial technology” squished together, a bit like “hackathon”.',
  ],
  'home-path': [
    'Scrum is named after rugby: a team packing together to move the ball forward. (Not a dog sport, sadly.)',
    'The first computer “bug” was a real moth, taped into the Harvard Mark II logbook in 1947.',
  ],

  // About
  'about-intro': [
    'Barcelona’s Sagrada Família has been under construction since 1882.',
    'Barcelona’s Eixample district has street corners cut at an angle on purpose, so every intersection has extra room.',
    'IESE Business School was founded in Barcelona in 1958.',
  ],
  'about-facts': [
    'Julia speaks Portuguese, English and Spanish. I speak fluent “treat?”.',
    'JavaScript was famously prototyped in about ten days, back in 1995.',
    'Java was almost named Oak, after a tree outside its creator’s window.',
  ],

  // Blog
  blog: ['No posts yet. Julia is still deciding if I get a byline.'],

  // Work timeline
  'work-intro': [
    'Follow the line! The timeline runs from Julia’s first internship all the way to the MBA.',
    'The Agile Manifesto was written in 2001 by 17 people at a ski lodge in Utah.',
  ],
  'work-iese': [
    'Salsa means “sauce” in Spanish. The music took off under that name in New York in the 1960s and ’70s, with Caribbean roots.',
    'Brazil is the largest Portuguese-speaking country in the world, with more than 200 million people.',
  ],
  'work-itau-2026': [
    'In AI-land, a “token” is a chunk of text, usually around three-quarters of a word in English.',
    'São Paulo is the biggest city in Brazil, and in the whole Southern Hemisphere.',
  ],
  'work-optum': [
    'NPS, the Net Promoter Score, runs from -100 to +100. Julia’s team lifted one by 15 points.',
    'Boston’s Tremont Street subway opened in 1897. It’s the oldest subway tunnel in North America.',
  ],
  'work-aphasia-lab': ['Aphasia affects language, not intelligence. It often follows a stroke.'],
  'work-18-moons': ['The very first .com domain ever registered was symbolics.com, back in 1985.'],
  'work-itau-2017': ['Chatbots go back to 1966, when MIT’s ELIZA pretended to be a therapist.'],
  'work-bu': [
    'A “hackathon” is “hack” plus “marathon”. SheHacks ran for 36 hours straight.',
    'Boston University’s main campus sits right along the Charles River.',
  ],

  // Footer
  contact: [
    'Some dogs, like the border collie Chaser, have learned the names of more than 1,000 objects.',
    'Send Julia a note! If she’s slow to reply, I’ll supply a head tilt.',
  ],
};

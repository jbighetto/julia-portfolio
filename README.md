# Julia Bighetto: portfolio

Astro + plain CSS. Static, fast, no framework runtime.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Where things live
| Path | What |
|---|---|
| `src/data/site.ts` | Name, catchphrase, links, bio, focus areas. **Edit content here.** |
| `src/data/experience.ts` | Work timeline entries |
| `src/styles/tokens.css` | Colors and fonts (burgundy + earthy palette, light/dark) |
| `src/components/` | Small reusable pieces (Nav, Footer, Hero, Timeline...) |
| `src/data/ninaFacts.ts` | Nina the dog's fun facts, keyed by `data-nina` section attributes |
| `src/scripts/` | Small browser scripts (theme, scroll reveal, timeline) |
| `src/pages/` | One file per route |
| `public/` | Static files. Put `resume.pdf` here. |

## TODO
- Replace placeholder bio and the Aphasia Lab / 18 Moons highlights
- Add a photo to the About page
- Add GitHub link once the portfolio has projects
- Deploy: connect the repo to Netlify (`netlify.toml` is already set)

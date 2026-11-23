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
| `src/scripts/` | Small browser scripts (theme, scroll reveal, timeline) |
| `src/pages/` | One file per route |
| `public/` | Static files. Put `resume.pdf` here. |

## TODO
- Add `public/resume.pdf`
- Set the real LinkedIn URL in `src/data/site.ts`
- Replace placeholder bio and job highlights
- Deploy: connect the repo to Netlify (`netlify.toml` is already set)

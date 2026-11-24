# Oversight Validity Lab — site

Two static pages for GitHub Pages, with no build step.

- `index.html`: the home page, seven screens: hero, the problem, why it matters, what we build, the first study, proof and team, and who it's for.
- `research.html`: method detail. Covers the first study, mitigations, the incident experiment, who changes what, the landscape, the 12-month plan and sources.
- `styles.css`: all styles.
- `main.js`: one scroll animation on the study diagram. It is skipped when the system's reduced-motion setting is on.

## Visual system (from Varad's notes)

- **Colours:** Ink `#0F1B2D`, Paper `#F6F5F0`, Paper 2 `#ECEAE2`, Accent orange `#D9541E`, Blue `#2F6B8A`.
- **Orange means what was missed or isn't measured.** It is used for the "?" boxes, the dashed exits and the dot in the logo. Primary buttons also use a slightly darker orange so the text keeps 4.5:1 contrast.
- **Blue means the system as designed and what OVL measures.**
- **Type:** DM Sans 700 for headings, IBM Plex Sans for body text, JetBrains Mono 700 for statistics only.
- **Dark screens:** "Why it matters" and the closing screen only. Everything is left-aligned.
- **Diagrams:** inline SVG. The hero always uses the vertical pipeline. The study diagram is horizontal on wide screens and vertical below 980px.

## Open items

- [ ] Contact address (`mailto:TODO-contact@example.org`).
- [ ] Logo: rebuilt from a description. Replace it with Varad's `ovl-mark.svg` files.
- [ ] The 6 Oct incident: the deck names it "GPT-6 Astra". Add a source link, then the name.
- [ ] The Meta incident has no linked source.
- [ ] Source 5 links to metirai.com, not metr.org.
- [ ] Each person to confirm their title and line. This especially applies to Cassie (employer and recusal).
- [ ] Sampura Research: one line for the landscape table (a comment in `research.html`).
- [ ] Research page items not yet written: the 24-month timeline (only the 12-month plan exists) and "what would make us wrong".
- [ ] Two-pager PDF link, once the PDF exists.
- [ ] The repository is public. `noindex` keeps it out of search engines but doesn't hide it.

# Oversight Validity Lab — site

A single static page (GitHub Pages). No build step, no JavaScript.

- `index.html` — all content, in story order
- `styles.css` — all styles

## How the page is organised

The page tells one story, top to bottom. Each section makes one claim in its heading and carries it with one figure.

| Section | Claim | Figure |
|---|---|---|
| Hero (`#top`) | Labs publish monitor coverage, not miss rates | Oversight pipeline, with the two unmeasured exits marked "?" |
| `#incidents` | 2026 incidents got past oversight | Timeline, May–Oct 2026 |
| `#tests` | Models can tell tests from deployment | AUROC dot plot (0.5 = chance) |
| `#study` | What the first study varies and measures | The same pipeline, annotated with contrasts A/B/C |
| `#impact` | Who changes what because of the findings | Output → reaches → what changes |
| `#fit` | How OVL relates to existing evaluators | Comparison table |
| `#plan` | Twelve-month plan with a month-3 seed checkpoint | Milestone stepper |
| `#team`, `#contact` | Team as proposed; contact; sources | — |

## Visual grammar (please keep it consistent)

- **Ochre, dashed and hatched** (`--unknown`): something nobody measures or publishes.
- **Verdigris, solid** (`--measured`): something OVL will measure. The lettered pins A/B/C are the study's three contrasts.
- Everything else is ink on paper. Filled dot = incident; hollow circle = evidence about monitors.
- No cards, badges or uppercase labels; hierarchy comes from type size and hairline rules.

The pipeline diagrams are inline SVG, with a separate vertical version for screens narrower than 980px (`.fig-desktop` / `.fig-mobile`). If you change a label in one, change it in the other.

## Facts

Every sentence traces to the founding summary (6 Nov 2026), except the "Design notes under discussion" block in `#study` (added in its own commit so it can be dropped), which holds proposed reviewer-protocol additions and open design questions.

## Open items before sharing more widely

- [ ] Contact address (`mailto:TODO-contact@example.org` in `#contact`).
- [ ] Source 5 (METR/Redwood monitor red-team) links to metirai.com, not metr.org. Confirm the primary source.
- [ ] Meta incident and "monitoring removed" timeline items have no linked source.
- [ ] The founding summary says Meta disclosed "a fourth incident" but lists three.
- [ ] Team: Cassie to consent to being listed; role labels to be confirmed; adviser omitted until public naming is agreed.
- [ ] The repository is public. `noindex` keeps the page out of search engines but does not hide it.

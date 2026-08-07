# Claude Code brief — data corrections + reading companion

**Repo:** `dk_balkans_trip_2026` · live at `indexhtml-tawny-seven.vercel.app`
**Date written:** 8 Aug 2026 (departure day)

---

## Read this first

There are **two independent tasks** here. Do them in order, commit separately, and do not start Task B until Task A is committed and verified.

- **Task A — data corrections.** Six text-only string edits in `trip-data.js`. Zero structural risk. Do these regardless.
- **Task B — layer in the reading companion.** A new feature. Optional. Three approach options below, ranked simplest first. Pick the simplest one that meets the need and say which you picked before writing code.

### Standing constraints (from `CLAUDE.md`)

- **Work on a branch.** `main` auto-deploys to the live site.
- **Do not touch** the JSONBin sync logic, the `syncFromRemote()` / `suppressSave` flow, the debounced `scheduleSave()` calls, or the stable item key scheme `${leg.id}_d${day.n}_s${setIndex}_i${itemIndex}`. Adding array items to `opts` **shifts** `i${itemIndex}` for everything after it and silently breaks saved cross-device state. If a task requires inserting into an existing `items` array, append to the end rather than inserting in the middle.
- **Never put secrets in client-side code.** The JSONBin key lives in a Vercel env var behind `api/state.js`.
- **Propose a plan and show diffs before rewriting anything.** Work incrementally.

---

## Task A — data corrections in `trip-data.js`

Six issues, all text-only. Each is a literal find-and-replace.

### A1. Autocamp Sirena is north of Brela, not south (**highest priority — will misdirect at a junction**)

Lokva Rogoznica sits between Omiš and Brela, roughly 20 minutes *up* the coast from Punta Rata. The coordinates in the file are correct; the description is not.

- **Find:** `Lokva Rogoznica, ~10 min south of Brela.`
- **Replace:** `Lokva Rogoznica, ~20 min north of Brela toward Omiš.`

### A2. Day 4 body references a day number that no longer exists

The trip is now 16 days. Day 14 is Mostar → Sarajevo; the long final push is Day 16, Salzburg → Rotterdam.

- **Find:** `treat it like Day 14's Munich–Rotterdam haul, not a casual drive`
- **Replace:** `treat it like Day 16's Salzburg–Rotterdam haul, not a casual drive`

### A3. `CHARGE_STOPS` header comment overstates coverage

Only days 1 and 2 have entries. There are no day-3 charge stops (correctly so — the comment itself notes the Julian Alps have none).

- **Find:** `Only days 1-3 are populated so far.`
- **Replace:** `Only days 1-2 are populated so far.`

### A4 + A5. Day 15 uses the old day numbering for the return split

Two separate occurrences, both in the `home` leg, day `n:15`.

- **Find:** `This is really a question of where the 14/15 split falls`
- **Replace:** `This is really a question of where the 15/16 split falls`

- **Find:** `Roughly splits Sarajevo → Rotterdam into 14/15 evenly.`
- **Replace:** `Roughly splits Sarajevo → Rotterdam into 15/16 evenly.`

### A6. Punta Rata is not walkable from the booked campsite

Day 5's Punta Rata entry says it is walkable from most of the listed campsites. That was true when the shortlist was Brela-centred, but the **booked** site (Autocamp Sirena, Lokva Rogoznica) is ~15 km north — a drive, not a walk. Same root cause as A1.

- **Find:** `pebble beach around the small pine-covered islet Kamen Brela, walkable from most of the campsites on the list.`
- **Replace:** `pebble beach around the small pine-covered islet Kamen Brela. Note: ~20 min drive south from Autocamp Sirena, not walkable from the booked pitch.`

### Verification for Task A

After the edits, confirm the file still parses (`node -e "require('./trip-data.js')"` or load the page and check the console is clean), then check that the Day 4, Day 5 and Day 15 cards render the corrected text.

---

## Task A-bis — three items to raise with the user, not fix

Do **not** change these. Surface them and wait for a decision.

1. **Ostrog Monastery is absent from the data entirely.** It was in earlier planning and sits on the Danilovgrad road between Podgorica and Nikšić — plausibly on the Day 10 Kotor → Žabljak run depending on which line is taken. Ask whether it was deliberately cut or dropped by accident. If it goes back in, it belongs as an **appended** item on Day 10 (see the key-shifting constraint above).

2. **Vintgar Gorge and Lake Bohinj appear on both Day 2 and Day 3.** Identical entries in both `opts` arrays. This may be intentional (either day can absorb them) but it means the budget tally can double-count them if both are ticked. Ask whether to dedupe or to leave it.

3. **Two map pins drift by roughly half a kilometre.** Blagaj Tekija is at `43.2572, 17.9032`; the tekke is nearer `43.2569, 17.8931`. Počitelj is at `43.1344, 17.7318`; the old town is nearer `43.1352, 17.7386`. Neither breaks navigation, but both drop the pin off the actual site on a zoomed-in map. Low priority.

---

## Task B — layer in the reading companion

### The asset

A single self-contained HTML file, `balkans-companion.html` (~100 KB), containing long-form reading material for every stop: history, local knowledge, practical notes and heads-up flags. No external dependencies except one Google Font with a system fallback, so **it works fully offline**. That offline property is the point — it must not be broken.

It has 20 sections with stable anchor IDs `#s00` through `#s19`.

### Approach options — pick the simplest that works

**Option 1 — static file plus deep links (recommended).**
Drop `balkans-companion.html` into the repo so it is served as a static route, and add one small "Read about this stop" link to each day card that opens the companion at the right anchor in a new tab. No change to the `LEGS` data model, no change to item keys, no risk to sync. Roughly 15–25 lines of change.

**Option 2 — add a `read` field per day.**
Add `read:"s04"` (etc.) to each day object in `trip-data.js` and have the day card render the link from that field. Slightly cleaner separation, but it touches `trip-data.js` structurally. Only worth it if the mapping needs to be editable without touching render code.

**Option 3 — inline the prose into `trip-data.js` and render in a drawer.**
Do not do this unless explicitly asked. It roughly triples the size of `trip-data.js`, ships ~100 KB of prose on every page load including mobile data in Montenegro, and duplicates content that already exists in a working standalone file.

**Default to Option 1.** State which you chose before writing code.

### Day → anchor mapping

| Day | Date | Anchors |
|---|---|---|
| — | (always available) | `s00` — practical primer: money, borders, language, driving, EV |
| 1 | Sat 8 Aug | `s01` |
| 2 | Sun 9 Aug | `s02`, `s03` |
| 3 | Mon 10 Aug | `s04` |
| 4 | Tue 11 Aug | `s05`, `s06` |
| 5 | Wed 12 Aug | `s06` |
| 6 | Thu 13 Aug | `s07` |
| 7 | Fri 14 Aug | `s08`, `s09` |
| 8 | Sat 15 Aug | `s11`, `s12` |
| 9 | Sun 16 Aug | `s10` |
| 10 | Mon 17 Aug | `s13`, `s14` |
| 11 | Tue 18 Aug | `s14` |
| 12 | Wed 19 Aug | `s14` |
| 13 | Thu 20 Aug | `s15` *(only if routing Option C)*, `s16` |
| 14 | Fri 21 Aug | `s17`, `s18` |
| 15 | Sat 22 Aug | `s19` |
| 16 | Sun 23 Aug | `s19` |

Where a day maps to two anchors, link the first and let the reader scroll — do not build a multi-link UI for it.

### Behaviour requirements

- Link opens in a new tab (`target="_blank" rel="noopener"`). Do not replace the planner view.
- Must degrade to nothing if the file is missing — no thrown errors, no broken layout.
- Do not add a service worker, a build step, or a bundler. The app is deliberately single-file-ish and dependency-light.
- Do not modify the companion file's own markup or styles.

### Content the companion covers that the planner currently does not

Useful if the user later wants to pull specific facts back into `hist` blocks. Do **not** do this automatically.

- Maria Laach — the Laacher See is a live volcanic caldera; CO₂ still surfaces on the southeastern shore
- Radovljica Beekeeping Museum — 10 min from the Kamna Gorica camp; Anton Janša, World Bee Day, painted hive panels
- Kamna Gorica itself — a protected medieval nail-forging village with the water channels still visible
- The Russian Chapel is reachable from Kranjska Gora **without** crossing Vršič (this does **not** re-open the killed Vršič leg — do not resurrect it in `KILLED`)
- Via ferrata safety — why an energy-absorbing lanyard is not substitutable, and absorber weight ranges
- Risan — Illyrian capital, Queen Teuta, the in-situ Hypnos mosaic
- Herceg Novi — founded by Tvrtko I of Bosnia, the only major town on this coast not founded by Rome or Venice
- Neum — a deliberate 1699 Ragusan buffer against Venice, not a Yugoslav accident
- Kravica — same tufa geology as the cut Plitvice, with swimming
- Jablanica — the bridge in the river is the 1968 film's replacement, not the wartime original
- Salzburg — the salt arc closing back to Ston; the Festival almost certainly running on 22 Aug
- Day 16 is a Sunday — German and Austrian HGV bans make it the best day of the week for that corridor

---

## Suggested commit sequence

1. `fix: correct six stale descriptions in trip-data.js` (Task A)
2. Verify on the branch preview deploy
3. `feat: link day cards to offline reading companion` (Task B, Option 1)
4. Verify, then merge

Do not merge both in one commit.

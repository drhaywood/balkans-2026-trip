# Balkans 2026 Road Trip — Route Map

Interactive route-planning map for a 14-day EV road trip, **8–21 Aug 2026**:
Rotterdam → Munich → Slovenia → Croatia → Montenegro → Bosnia → Rotterdam.
Built for two people (Dave + partner) to plan against together from separate
devices. Static site, no build step — Vercel auto-deploys on push to `main`
(repo: `drhaywood/balkans-2026-trip`, live at `indexhtml-tawny-seven.vercel.app`).

## Files

- `index.html` — page structure, CSS, and all rendering/interaction logic
  (map, day cards, budget panel, sync). Edit behavior here.
- `trip-data.js` — loaded via `<script src>` before `index.html`'s inline
  script. Holds the actual trip content: `ORIGIN`, `CHARGE_STOPS`, `LEGS`.
  Edit trip content here, not in index.html.
- `api/state.js` — Vercel serverless function. The only code allowed to
  talk to JSONBin directly.

## Data shape (trip-data.js)

`LEGS` is an array of legs (countries/regions), each with a `days:` array:

```js
{ id, name, color, meta,
  route:[[lat,lng],...],      // waypoints — OSRM fallback input only
  geometry:[[lat,lng],...],   // baked-in road-shaped line; legs without this
                               // fall back to a live OSRM fetch on load
  days:[
    { n, date, title, lat, lng, from:{name,lat,lng}, body, pills:[[type,text]],
      opts:{ label, items:[{n,d,t,cost,unit,star,lat,lng}], foot } // optional
    }
  ]
}
```

Every budgetable item gets a stable key (`` `${legId}_d${n}_s${setIndex}_i${itemIndex}` ``)
used to sync picks across devices. **Only append new days/items at the end
of their arrays** — inserting in the middle shifts every later item's key
and silently forgets its saved state.

Each day also gets a shared free-text notes box, keyed by `notes_d${n}`
(day number, stable regardless of array position). Any item's preset
price can be overridden (or given one, if it had none) from the UI —
overrides live in `costs`, keyed by the same stable item key. Each leg
also has a manually-entered tolls & parking figure, keyed by `leg.id`,
in `legCosts`. The synced state blob PUT to `/api/state` is
`{selected:[...], removed:[...], notes:{key:text}, costs:{key:amount},
legCosts:{legId:amount}}`. A `#syncPill` in the masthead reflects the
save lifecycle (loading / saved / unsaved changes / saving / error) and
a "Save changes" button forces an immediate save — added because
save/load failures used to fail silently.

## JSONBin key security

The JSONBin access key lives in a Vercel environment variable
(`JSONBIN_KEY`), read only inside `api/state.js` on the server. It must
never appear in `index.html` or `trip-data.js`. Client code calls
`/api/state` (same-origin, no key) — do not reintroduce a direct `fetch`
to `api.jsonbin.io` from client-side code.

## Known limitation: no conflict resolution

Saving is last-write-wins — there's no merge logic. Every save PUTs the
*entire* state blob (picks and all notes together), so if both people edit
anything — a budget pick, a day's notes, doesn't matter which — on separate
devices around the same time, whichever save lands last silently overwrites
the other's changes, even to a field neither of you touched. Fine for
casual use, but don't assume concurrent edits are safe. The sync pill will
tell you if *your own* save failed, not whether someone else's overwrote it.

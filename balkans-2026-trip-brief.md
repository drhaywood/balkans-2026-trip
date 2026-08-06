# Balkans 2026 — Trip Brief & Options Register

**Purpose:** hand-off document for Claude Code. Contains the current locked day skeleton, every option still alive per leg, and every unresolved decision. Nothing here is a final itinerary.

**Vehicle:** EV, own car, departing Rotterdam. Real-world range ~250–320 km in mountain terrain with A/C.
**Travellers:** 2. Budget-leaning — campsites and guesthouses over hotels.
**Season:** August. Peak coastal traffic, peak heat inland, peak border queues.

**Status tags used below:**
- `LOCKED` — decided, do not re-litigate
- `OPTION` — still on the table, not yet committed
- `DECIDE` — an open decision that blocks other choices
- `VERIFY` — a factual claim that needs checking before it can be relied on

---

## Existing tooling context

There is an existing single-file `index.html` trip companion:
- Inline CSS/JS, no build step
- Leaflet for mapping
- OSRM public demo server for road routing (known flaky)
- ABRP deep links for EV route planning
- JSONBin as hosted key-value store for cross-device sync
- Stable item keys in the format `legId_dN_sN_iN`, with an item registry, a suppress-save flag during initial remote state load, and debounced saves on user action

Any changes should extend this file rather than replace it. Options below should map to items under their day, so they can be toggled on/off without breaking existing keys.

---

## Day skeleton (current)

| Day | Route | Overnight | Type |
|---|---|---|---|
| 1 | Rotterdam → Munich | Munich | Hotel — **BOOKED** |
| 2 | Munich → Bled | Bled | Camping |
| 3 | Triglav National Park | Bled | Camping |
| 4 | → Brela | Brela | Camping |
| 5 | Croatian coast south | Near Dubrovnik | Camping |
| 6 | Dubrovnik → Kotor | Kotor | Hotel |
| 7 | Kotor — southern coast day trips | Kotor | Hotel |
| 8 | Kotor — bay day trips | Kotor | Hotel |
| 9 | → Durmitor | Žabljak | Hotel or camping |
| 10 | Durmitor | Žabljak | Hotel or camping |
| 11 | Durmitor → Mostar | Mostar | Hotel |
| 12 | Mostar → Sarajevo | Sarajevo | Hotel |
| 13 | Sarajevo → Salzburg | Salzburg | Hotel |
| 14 | Salzburg → Rotterdam (arrive late) | Home | None |
| 15 | Open / buffer | Home | None |

`LOCKED` **Day 14 is a single push, Salzburg → Rotterdam, ~1,000 km, arriving home late. No accommodation.** Day 15 exists as the recovery day.

---

## Accommodation

Budget-first, with two deliberate mid-tier exceptions (Kotor and Salzburg — see rationale below).

**Source and reliability caveat:** the specific properties below come from a Google Places lookup, not from direct verification. Names, locations and general reputation are reliable. **Prices are not** — any figures shown come from user reviews of unknown date and are almost certainly not August rates. Treat every option as a candidate to check on Booking/direct, not as a recommendation to book blind. Ratings are indicative only.

### EV caveat that applies to every camping night

Campsite electrical hookup (EHU) is typically 6–16 A and **many campsites explicitly prohibit charging an EV from a pitch socket** — it trips the site and they know it. Do not assume a camping night is a charging night. Ask the specific question when booking: *"can I charge an electric car from the pitch hookup, and at what amperage?"* This matters most on Days 9–10.

---

### Days 2–3 — Bled (camping, 2 nights)

| Option | Tier | Notes |
|---|---|---|
| **River Camping Bled**, Lesce | Budget | 4.6★, ~2,600 reviews. Riverside, pools, on-site restaurant, direct river access. ~2 km from the lake — reviews note the cycle back up is a slog. Best all-round balance. |
| **Kamp Bled** | Budget | 4.4★, ~4,000 reviews. Walking distance to the lake, which is its main advantage. Reviews are polarised — several complain of cramped pitches, noise and tired sanitary blocks at a high price. |

`DECIDE` **If the Vršič/Soča option (Day 3) is taken, Night 3 should move to the Soča valley rather than returning to Bled.** Candidates in that case:

| Option | Tier | Notes |
|---|---|---|
| **Camping Vodenca**, Bovec | Budget | 4.5★. Riverside, kitchenette, owner-run, popular with kayakers. The cheapest sensible option. |
| **Camping Liza**, Bovec | Budget | 4.6★. Electricity included, on-site restaurant and shop, directly on the Soča. Some reviews flag it as pricey for what it is. |
| **Kamp Soča**, Soča village | Budget | 4.6★ but recurring complaints about unfriendly reception and crowding. Location and views are outstanding. |
| **Adrenaline-check Eco Place**, Bovec | Budget | 4.8★. Furnished tents and huts rather than pitches — useful if rafting is booked and you want zero setup. Some road noise. |

---

### Day 4 — Brela / Makarska Riviera (camping, 1 night)

`VERIFY` **Six campsites in this area were already researched and emailed in a previous session**, with ratings, pricing and notes captured in the planning map. Pull those first — the list below may overlap or duplicate.

| Option | Tier | Notes |
|---|---|---|
| **Camping Krvavica**, Krvavica | Budget | 4.5★. Small, quiet, 5 min walk to beach, water/electricity/washing machine, fresh bread to order. A reviewer reports ~€23/night for two off-season — expect materially more in August. |
| **Autocamp Sirena**, Lokva Rogoznica | Budget | 4.5★, terraced down to the sea, well-reviewed restaurant. One recent review describes a bad phone-booking experience — book in writing, not by phone. |
| **Camp Makarska** | Budget | 4.2★, small (113 reviews). Close to the beach, generous tent pitches, clean. Less proven than the others. |
| **Camp Riviera Makarska** | Budget | 4.1★. Best location for town access but reviewers report ~€48–51/night and only four showers for the whole site. |

---

### Day 5 — Near Dubrovnik (camping, 1 night)

Positioning matters more than usual here: you want an early Day 6 start for the Dubrovnik dawn visit **and** the Debeli Brijeg border. Sites north-west of the city add drive time to the border; sites south-east (Mlini/Srebreno) are on the right side for both.

| Option | Tier | Notes |
|---|---|---|
| **Auto Camp Matkovica**, Srebreno | Budget | 4.1★. Electric included, 5 min to the beach, shops opposite, ~12 min to the old town. **South-east of the city — best positioned for the border run.** |
| **Camping Kate**, Mlini | Budget | 4.4★. Also south-east. Reviews say it cannot be pre-booked — turn up early. That's a real risk in August; treat as a fallback, not a plan. |
| **Camp Pod Maslinom**, Orašac | Budget | 4.6★, the best-reviewed of the set. Shaded, sea views, small beach. **North-west of Dubrovnik**, so it adds ~40 min on Day 6 before you even reach the city. |
| **Camping Trsteno** | Budget | 4.2★, small and cheap, olive-shaded terraces, ~25 min from Dubrovnik. North-west again. |

**Avoid: Camping Solitudo.** 3.6★ across ~2,000 reviews, with consistent complaints about poor maintenance and prices reported around €75/night. Closest to the city, but not worth it.

---

### Days 6–8 — Kotor (hotel, 3 nights) — **MID-TIER EXCEPTION #1**

Rationale for spending here: three consecutive nights in one place, the longest static stay of the trip, in the hottest part of the route. Air conditioning that works and a room you can retreat to at midday is worth more than the €30/night difference.

| Option | Tier | Notes |
|---|---|---|
| **Hotel Monte Cristo**, Old Town | **Mid-tier** | 4.2★. Historic building in the middle of the Old Town, on-site breakfast, staff reportedly help with parking via WhatsApp. **Parking is the real issue in Kotor Old Town — confirm arrangements before booking, especially with an EV.** |
| **Apartments Wine House Old Town** | **Mid-tier** | 4.7★ (78 reviews). Renovated, central. Reviews note noise from an adjacent bar until ~1am — a problem across three nights. |
| **Guesthouse Step**, Dobrota | Budget | 4.4★. 5 min from the Old Town, 1 min from a beach, shared kitchen, balcony. Good value. **One review reports bed bugs** — check recent reviews before committing. |
| **Guest House Sandra**, Škaljari | Budget | 4.0★. Best views of the set, 10–15 min walk down to the Old Town (uphill on return). Easier parking than the Old Town options. |
| **Majka Guest House**, Old Town | Budget | 4.4★ but only 39 reviews, and it's effectively hostel-format — one bathroom for 20+ beds per one review. Cheap; not right for three nights as a couple. |

---

### Days 9–10 — Žabljak / Durmitor (hotel or camping, 2 nights)

**This is the decision that unblocks Day 11.** Whatever you pick must answer the charging question — see the EV section under Days 9–10.

| Option | Tier | Notes |
|---|---|---|
| **Durmitorski bungalovi**, Žabljak | Budget | 4.7★. Family-run bungalows with kitchenette and fridge, close to town and the park. Detached units — **most likely of the set to have an accessible outdoor socket.** Ask directly. |
| **Guesthouse Planinarski**, Pitomine | Budget | 4.7★. Cabin/treehouse format, directly on hiking trails, minutes from Žabljak, host cooks local food. Shared bathrooms. Excellent value. |
| **Chalets pod Gorom**, Njegovuđa | Budget | 4.9★. Cottages around a lawn, shared bathrooms, very well reviewed. ~20 min from Žabljak — check this against your Durmitor activity plan before booking. |
| **Polar Star**, Borje | **Mid-tier** | 4.5★, proper small hotel with buffet dinner, breakfast and sauna. ~5 min from Žabljak. The comfortable option if the Durmitor days are hike-heavy. One review reports an unexpected €91 surcharge on arrival — confirm the total in writing. |
| **Eko Oaza – Tear of Europe**, Dobrilovina | Budget camping | 4.9★ (449 reviews) — the best-rated place in this whole document. Family-run, home-cooked food, kitchen access, Tara river setting. **But it's on the Tara toward Mojkovac, well east of Žabljak** — it only makes sense if the Tara rafting/Tara Bridge options are taken. Check the drive time against your actual plan. |
| **Hotel Porto Tara** | Budget/mid | 4.3★, riverside, good for a rafting-anchored stay. Mixed recent reviews on cleanliness. Windy access road. |

---

### Day 11 — Mostar (hotel, 1 night)

All strong and all cheap — this is the easiest night on the trip. Free parking is common here, which matters for the EV.

| Option | Tier | Notes |
|---|---|---|
| **Guest House Vanja** | Budget | 4.8★ (144 reviews). 10 min walk to the Old Bridge, free parking, shared kitchen, free coffee. Best overall of the set. |
| **Guest House STARI** | Budget | 4.7★. 200 m from the Old Bridge, free parking out front, shared bathroom. Entrance is on a side street and hard to find. |
| **Guest House "Nana"** | Budget | 4.8★ (96 reviews). Next to the bus/train station, big clean rooms, very flexible hosts. |
| **Guesthouse Stari Grad** | Budget | 4.6★ but only 46 reviews, and one flags inconsistent room quality. Safe parking, <10 min to the Old Town. |
| **Villa Park**, Lacina | Budget/mid | 4.6★ (257 reviews). Neretva river views from two balcony rooms only — worth requesting specifically. On-site parking. One very negative recent review about the owner's conduct; read current reviews first. |

---

### Day 12 — Sarajevo (hotel, 1 night)

| Option | Tier | Notes |
|---|---|---|
| **Pigeon Square Rooms**, Baščaršija | Budget | 4.7★ (225 reviews) — the clear pick. Directly on the old square, spacious rooms, working AC, shared kitchen, well-regarded host. |
| **Apartment Gondola**, Hrvatin | Budget | 5.0★ but only 19 reviews. **Free on-site parking**, 1 min from the Trebević cable car, 5–7 min walk to Baščaršija. Best option if parking is the priority — and in Sarajevo it usually is. |
| **Bascarsija Private Rooms** | Budget | 4.0★, only 3 reviews. Too thin a sample to rely on. Fallback only. |

**Avoid: Hostel Latin Bridge** (3.8★, multiple serious complaints about check-in refusals and cleanliness) and **Room in heart of the city-Old Town** (4.3★ across 10 reviews, with a detailed report of cold, dusty rooms and no hot water).

---

### Day 13 — Salzburg (hotel, 1 night) — **MID-TIER EXCEPTION #2**

Rationale for spending here: this is the night before a ~1,000 km drive. A good bed and a proper breakfast has direct operational value, and you won't be sightseeing.

| Option | Tier | Notes |
|---|---|---|
| **Villa Verde**, Leopoldskronstraße | **Mid-tier** | 4.8★ (409 reviews). Small owner-run B&B, private parking, repeatedly praised breakfast, 15 min walk to the old town. Best-reviewed option in Salzburg by a distance and the obvious pick for a pre-drive night. |
| **B&B Hotel Salzburg-Nord** | Budget | 4.0★ (1,710 reviews). Just off the motorway — the pragmatic choice if you're arriving late and leaving at dawn and don't care about the city at all. Breakfast is extra. |
| **myNext – Riverside Hotel** | Budget | 4.0★. Riverside, guest kitchen and laundry, one stop from the main station. Functional. |
| **B&B Hotel Salzburg-Süd**, Puch | Budget | 4.3★. South of the city — **wrong side for a northbound departure.** Only if arriving late from the Sarajevo direction and skipping the city entirely. |

**Skip: Holiday Inn Salzburg City** — 3.8★ with a run of recent complaints about condition and service, at chain pricing.

---

### Day 14 — no accommodation

`LOCKED` Straight through to Rotterdam. Total nights booked: 13 (Day 1 already done, Days 2–13 outstanding).

**Consequence to plan around:** Day 13 in Salzburg becomes the only rest built into the return, so the Day 13 property choice carries more weight than a normal transit night. Villa Verde's private parking and breakfast are the practical argument, not the charm. Charging overnight in Salzburg also means starting Day 14 full, which is worth a stop's difference on the German motorway network.

---

### Accommodation open questions

1. Day 3 — Bled or Soča? Blocks two nights of booking.
2. Days 9–10 — hotel or camping, and does the choice solve the charging problem?
3. Kotor — parking arrangements for an EV in the Old Town, before booking an Old Town property.
4. All camping nights — confirm in writing whether EV charging from the pitch hookup is permitted.

---

## Days 1–2 — Rotterdam → Munich → Bled

`LOCKED` Munich overnight, Bled overnight.

**Notes**
- Two long transit days back to back. Day 15 exists as buffer at the end, but there is no buffer at the front.
- `VERIFY` Charging on the Munich → Salzburg → Villach → Bled corridor is dense and not a risk. Confirm Karawanks tunnel routing vs. Wurzen Pass.
- Austrian vignette required. Slovenian e-vinjeta required.

---

## Day 3 — Triglav National Park (base: Bled)

`DECIDE` **This day is under-specified and previously drifted.** Vršič Pass and the Soča Valley were locked-in original stops but disappeared from a later route summary. That was never explicitly confirmed as intentional. Resolve before booking.

**Options still alive**
- `OPTION` **Vršič Pass** — 50 hairpins, high alpine. Heavy regen on the descent west into the Soča. Was originally locked.
- `OPTION` **Soča Valley** — the reason Vršič exists on the route.
- `OPTION` **Soča rafting** — water activity was flagged as a priority for the trip overall. This is the most accessible rafting on the route other than Tara.
- `OPTION` **Slap Kozjak** — waterfall, short walk, Soča valley.
- `OPTION` **Hvadnik via ferrata** — `VERIFY` grade never confirmed. Do not commit until difficulty is checked against actual experience level.
- `OPTION` Bled/Bohinj-only day — the low-effort version if Vršič is dropped. Keeps the day restful before the long push to Brela.

**Conflict to resolve:** a full Vršič + Soča day is a long loop out of Bled and back. If Soča rafting is in, this realistically wants its own overnight in the Soča valley rather than returning to Bled — which the current skeleton does not allow.

---

## Day 4 — → Brela (Makarska Riviera)

`LOCKED` Brela overnight. Coastal camping.

**Notes**
- `LOCKED` **Plitvice is cut.** Do not reintroduce. Rationale: August crowds, €42pp, drought conditions likely to make it underwhelming. This decision was already made and paid for with a direct drive to Brela instead.
- Six campsites were researched and emailed across the Brela area and near Dubrovnik, with ratings, pricing and notes already captured in the planning map. `VERIFY` — pull the actual names/pricing from the existing map data rather than re-researching.
- Long driving day. Slovenia → Croatia border, then A1 south.

---

## Day 5 — Croatian coast → near Dubrovnik

`LOCKED` Overnight near Dubrovnik, not in it.

**Routing**
- `LOCKED` **Pelješac Bridge** — keeps the whole run inside Croatian territory and avoids the Neum corridor border bottleneck entirely. Non-negotiable in August.

**Options**
- `OPTION` Ston — walls, oysters, salt pans. On the Pelješac approach.
- `OPTION` Makarska Riviera beach stops en route south.

---

## Day 6 — Dubrovnik → Kotor

`LOCKED` **Dubrovnik as a dawn visit only, no overnight.** Arrive before the cruise crowds, leave before the heat. This was decided specifically to reconcile Dubrovnik's obvious appeal with the stated preference against city tourism.

**Border**
- `DECIDE` **Debeli Brijeg (HR → MNE) is the single worst August crossing on the route.** Southbound early morning is the mitigation. This constrains how long the Dubrovnik dawn visit can run. Either the dawn visit is short and you cross by ~9am, or you cross late evening and arrive in Kotor in the dark. Pick one.

**Options**
- `OPTION` Herceg Novi as a stop on the way in rather than a Day 8 day trip.
- `OPTION` Kamenari–Lepetane ferry across the bay narrows. Worth it for Tivat/Budva side approaches; for Kotor town itself the north-shore road via Risan is direct. Low priority, cheap, saves time on some permutations.

---

## Day 7 — Kotor base, southern coastal day trips

**Options**
- `OPTION` **Sveti Stefan** — `DECIDE` viewpoint vs. resort access was never resolved. The island itself is a private resort; the classic view is from the road above. If it's the viewpoint only, this is a 20-minute stop, not a day.
- `OPTION` Budva old town.
- `OPTION` Lovćen NP / Njegoš Mausoleum — the serpentine road up from Kotor. Significant elevation gain; note EV impact, though regen on the descent recovers a chunk.
- `OPTION` Cetinje — old royal capital. Historical depth, pairs with Lovćen.

**Note:** Day 7 and Day 8 are currently defined by direction (south vs. bay) rather than by content. There is more here than fits two days, so this needs pruning, not more options.

---

## Day 8 — Kotor base, bay day trips

**Options**
- `LOCKED` **Perast** — already starred as locked. Our Lady of the Rocks boat trip.
- `OPTION` Herceg Novi (if not taken on Day 6).
- `OPTION` Risan — Roman mosaics.
- `OPTION` Kotor town walls climb — do at dawn or dusk, not midday, in August.

---

## Days 9–10 — Durmitor / Žabljak

`LOCKED` Two nights Žabljak.

**Options**
- `OPTION` **Tara River rafting** — priority water activity. `VERIFY` half-day vs. full-day, and where put-in is relative to Žabljak.
- `OPTION` **Tara Bridge (Đurđevića Tara)** — flagged previously as adding a detour that widens the charging gap. Cheap to include if rafting already puts you there.
- `OPTION` Black Lake (Crno Jezero) — easy, close to Žabljak.
- `OPTION` Bobotov Kuk or a shorter Durmitor ridge hike — the "one full-day trek if the payoff justifies it" slot.
- `OPTION` Durmitor Ring Road (P14) scenic loop.
- `OPTION` Sedlo Pass.

**EV — this is the critical zone**
- `DECIDE` `VERIFY` **What charging actually exists in Žabljak, and is it reliable?** Everything downstream on Day 11 depends on this answer. Needs PlugShare check-ins from the last few months, not general knowledge.
- Book accommodation with confirmed access to a standard power outlet regardless of what DC exists. Overnight at ~2.3 kW over 10 hours ≈ 20+ kWh ≈ 120–150 km. That is the fallback plan.
- Register and pre-load payment details on: ABRP, PlugShare, Moon Power, EVC Charge / Electromaps.

---

## Day 11 — Durmitor → Mostar

`DECIDE` **This is the biggest unresolved decision on the trip.** Three routings, mutually exclusive:

### Option A — via Nikšić → Trebinje
- ~290 km. Descent overall.
- Charging: `VERIFY` Nikšić and Trebinje both plausible anchors.
- Cost: skips Sutjeska entirely. Least interesting road of the three.
- This is the low-risk default.

### Option B — via Podgorica → Trebinje
- ~140 km of near-continuous descent from 1,450 m to sea level, then west.
- Podgorica is the strongest charging hub in Montenegro.
- Cost: longer again, skips Sutjeska, but removes EV risk almost entirely.
- This is the routing to take **if the constraint turns out to be Žabljak itself** — i.e. you can't reliably leave with a full charge.

### Option C — via Šćepan Polje → Sutjeska → Foča
- Shortest at ~210 km to Sarajevo, and the best road: Tara Canyon, Šćepan Polje, Tjentište.
- **Does not reach Mostar.** Foča → Nevesinje → Mostar (~150 km) is a mountain charging desert and has been ruled out.
- `DECIDE` **Option C only works if Days 11–12 flip to Mostar-last:**
  - Day 11: Žabljak → Sutjeska (overnight, Schuko charge)
  - Day 12: Foča → Sarajevo → Konjic/Jablanica → Mostar
  - Day 13 onward: exit south via Počitelj/Kravica → Bijača border → Croatian A1 north
- Knock-on: the return corridor changes from Sarajevo → Salzburg to Ploče → Zagreb → Ljubljana → Austria. Roughly 100–150 km longer, but dense-charging motorway the entire way, versus the M17 north out of Sarajevo which is single-carriageway, truck-heavy and thin on chargers. **This may be a net win for an EV, not a cost.**

**Blocking question:** is the constraint (a) nothing reliable in Žabljak to leave on, or (b) nothing at Sutjeska/Foča to arrive at? (a) points to Option B. (b) points to Option A. Neither has been confirmed.

---

## Day 11–12 — Mostar and surrounds

**Options — Mostar day trips (south/west cluster)**
- `OPTION` **Kravica Waterfall** — back in. ~45 min from Mostar, out-and-back. Go at opening; midday in August is heaving. Was previously cut for crowding, reinstated.
- `OPTION` **Blagaj Tekija** — dervish house at the Buna spring. ~20 min from Mostar.
- `OPTION` **Počitelj** — Ottoman hill town. On the Mostar → coast road, so it pairs naturally with Kravica in one loop.
- `OPTION` Mostar Stari Most, old bazaar, and the war-history layer — acknowledged but not centred, per stated preference.

**Options — on the M17 between Mostar and Sarajevo (Day 12, on-route not detour)**
- `OPTION` **Jablanica** — Neretva bridge, Battle of the Neretva site, and the lamb.
- `OPTION` **Konjic** — old bridge; Tito's nuclear bunker (Ark D-0) is here. `VERIFY` tour booking requirements and whether it runs in August.

---

## Days 12–13 — Sarajevo

**Options**
- `OPTION` Baščaršija / Ottoman quarter
- `OPTION` Latin Bridge / 1914 assassination site
- `OPTION` Tunnel of Hope
- `OPTION` Yellow Fortress viewpoint
- `OPTION` Trebević / abandoned bobsleigh track

**Note:** the history layering preference is all eras chronologically, with the Yugoslav war acknowledged but not centred. Sarajevo is the one stop where that balance needs conscious management — it's easy for the whole day to become 1992–95.

---

## Days 13–14 — Return

**Current plan:** Sarajevo → Salzburg → Rotterdam.

`DECIDE` **The overnight city on Day 13 is not settled.** Salzburg is current, but the earlier Vienna → Nuremberg → Cologne corridor was never explicitly killed. All three remain live:

| Option | Position | Notes |
|---|---|---|
| `OPTION` **Salzburg** | Current plan | Roughly splits Sarajevo → Rotterdam into 13/14. Shortest total. Accommodation options already worked up (see below). |
| `OPTION` **Vienna** | Earlier plan | Further east, so Day 14 gets longer — but Sarajevo → Vienna is the more natural line if you exit Bosnia north via Zagreb rather than west via Ljubljana. Adds a genuine city night rather than a motel stop. |
| `OPTION` **Nuremberg** | Further along | Shortens Day 14 meaningfully but lengthens Day 13. Only makes sense paired with an earlier start out of Sarajevo. |
| `OPTION` **Cologne** | Near home | Turns Day 14 into a ~250 km hop. Would require Day 13 to be a very long push, which contradicts the single-night structure. Keep as a fallback if Day 13 runs late. |

**How to decide:** this is really a question of where the 13/14 split falls, not which city is nicer. Salzburg and Vienna split it roughly evenly. Nuremberg and Cologne front-load Day 13. Given Day 14 is already locked as a long push, front-loading has some logic — but it turns Day 13 into two long days back to back.

- `DECIDE` If Day 11 Option C is chosen, the return corridor changes entirely (see above) — you'd exit via the Croatian A1 rather than north out of Sarajevo, which favours Salzburg or Nuremberg over Vienna.
- `LOCKED` Day 14 is a single push to Rotterdam, arriving late. From Salzburg that's ~1,000 km; from Vienna, meaningfully more. This exceeds the stated 7–8 hour comfort ceiling and has been accepted deliberately; Day 15 is the recovery buffer. Plan the charging stops as rest stops rather than treating them as lost time, and leave Day 13's city with a full battery.
- `VERIFY` Sarajevo → Croatian/Slovenian border northbound. The M17/A1 through central Bosnia is the weakest charging corridor on the entire return.

**Note:** the Salzburg accommodation options below are the only return-leg lodging worked up so far. If Day 13 moves to Vienna, Nuremberg or Cologne, that section needs redoing — all three are dense with budget options and none need booking far ahead.

---

## Killed — do not reintroduce

- **Plitvice Lakes** — cut deliberately. Crowds, cost, drought.
- **Prokletije NP** — removed to avoid overextending the route.
- **Albania** — ruled out early for the same reason.
- **Foča → Nevesinje → Mostar** — charging desert, ruled out this session.
- **Route ending in Dubrovnik** — evaluated and rejected. Dubrovnik is a geographic dead end; finishing there means re-driving the Dalmatian coast and adds ~250–300 km to the return.

---

## Open decisions summary

1. Day 3 — is Vršič/Soča in or out? If in, does it need its own overnight?
2. Day 3 — Hvadnik via ferrata grade unverified.
3. Day 6 — Dubrovnik dawn visit length vs. Debeli Brijeg crossing timing.
4. Day 7 — Sveti Stefan: viewpoint or resort?
5. Days 7–8 — too many options for two days; prune.
6. Days 9–10 — what charging actually exists in Žabljak? Blocks Day 11.
7. Day 11 — routing Option A, B, or C. Option C requires flipping Mostar and Sarajevo and changes the return corridor.
8. Day 13 — Salzburg, Vienna, Nuremberg or Cologne? This is a 13/14 split question, and it's downstream of decision 7.

---

## Ask for Claude Code

Extend the existing `index.html` so that:
- Every `OPTION` above appears as a toggleable item under its day, using the existing `legId_dN_sN_iN` key scheme
- `DECIDE` items render as visible unresolved flags on the day, not buried in notes
- `VERIFY` items carry a marker so they're distinguishable from settled facts
- The Day 11 routing options are mutually exclusive — selecting Option C should surface the Day 11/12 flip and the return-corridor change as consequences rather than silently allowing an inconsistent itinerary
- The killed list is retained somewhere non-visible-by-default, so decisions don't get accidentally re-opened in a later session

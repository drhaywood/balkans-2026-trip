const ORIGIN={name:"Rotterdam",lat:51.9244,lng:4.4777};

/* Tesla Supercharger contest plan — real sites, verified against tesla.com.
   Only days 1-3 are populated so far. Days 4-6 (Croatia) are now routed on
   real roads too, but no charger stops have been verified for that leg yet —
   extend this once that research is done. */
const CHARGE_STOPS=[
  {day:1,name:"Koblenz Supercharger",lat:50.3463,lng:7.5073,
   note:"~25 min from Maria Laach. Barely a detour on day one."},
  {day:1,name:"Frankfurt Flughafen Supercharger",lat:50.0533,lng:8.5714,
   note:"Right on the A3 toward Munich. 20 stalls, up to 250kW."},
  {day:2,name:"Salzburg Nord Supercharger",lat:47.8360,lng:13.0591,
   note:"On the direct Munich–Villach corridor."},
  {day:2,name:"Villach-Ost Supercharger",lat:46.6018,lng:13.8833,
   note:"Last Austrian stop before the Karawanks tunnel into Slovenia."},
  {day:2,name:"Žirovnica Supercharger",lat:46.4036,lng:14.1305,
   note:"10 min from Bled, 5 min off the highway. Also the last charger before the Julian Alps — day 3 (Vršič/Bovec) has none at all."}
];

/* Retired ideas — kept here (not surfaced by default) so they don't get accidentally
   re-proposed in a later planning session. Rendered as a closed-by-default section. */
const KILLED=[
  {n:"Plitvice Lakes",reason:"Cut deliberately. August crowds, peak-season pricing, and 2026 drought conditions likely to make it underwhelming."},
  {n:"Prokletije NP",reason:"Removed to avoid overextending the route."},
  {n:"Albania",reason:"Ruled out early for the same reason as Prokletije — overextension."},
  {n:"Foča → Nevesinje → Mostar",reason:"A mountain charging desert. Ruled out."},
  {n:"Route ending in Dubrovnik",reason:"Evaluated and rejected — Dubrovnik is a geographic dead end. Finishing there means re-driving the Dalmatian coast, adding ~250–300 km to the return."}
];

const LEGS = [
  {
    id:"out", name:"Getting there", color:"#C08A2E", meta:"8 Aug · one long day, via the Eifel",
    route:[[51.9244,4.4777],[50.4014,7.2528],[48.1351,11.5820]],
    geometry:[[51.92413,4.4782],[51.9136,4.53541],[51.80798,4.64921],[51.72541,4.63211],[51.52589,4.7425],[51.55883,4.87531],[51.55093,5.13497],[51.48344,5.39777],[51.40501,5.43481],[51.42335,5.67852],[51.3777,5.91873],[51.39304,6.12232],[51.33467,6.16542],[51.27322,6.34893],[51.10213,6.42375],[51.0564,6.4991],[51.032,6.46936],[50.92791,6.66872],[50.64849,6.93355],[50.57164,7.13675],[50.50571,7.22118],[50.38439,7.27262],[50.40081,7.25235],[50.34095,7.5085],[50.23437,7.51499],[50.19195,7.58705],[50.09095,7.60501],[49.99985,7.68294],[49.92428,7.82903],[49.92603,7.94198],[49.87966,7.95149],[49.78206,8.10571],[49.71487,8.13854],[49.65179,8.28844],[49.37076,8.34653],[49.33249,8.55735],[49.28127,8.61781],[48.97254,8.43934],[48.90975,8.62993],[48.92366,8.75212],[48.84855,8.8047],[48.78012,9.01506],[48.71522,9.08756],[48.69192,9.30632],[48.63115,9.4553],[48.63196,9.56385],[48.58263,9.6648],[48.55904,9.63025],[48.53482,9.6541],[48.51866,9.8125],[48.45718,9.9457],[48.46467,10.11889],[48.39987,10.54378],[48.42001,10.80055],[48.39524,11.06104],[48.16628,11.45409],[48.16974,11.53277],[48.13519,11.58213]],
    days:[
      {n:1,date:"Sat 8 Aug",title:"Rotterdam → Maria Laach → Munich",lat:48.1351,lng:11.5820,
       from:ORIGIN,
       via:[{name:"Maria Laach Abbey",lat:50.4014,lng:7.2528}],
       body:"Down through the Eifel for a photo stop at the abbey, then the long haul east to Munich. Bed at the end of this one.",
       pills:[["drive","~8 h total"],["bed","Super 8 Munich"],["pencil","Maria Laach"]],
       hist:{h:"Maria Laach",t:"A Benedictine abbey begun in 1093 on the shore of a volcanic crater lake, and one of the most complete Romanesque churches in Germany — six towers, almost untouched by later rebuilding. Still a working monastery."},
       opts:{label:"Stops on the way",
         items:[
           {n:"Maria Laach Abbey",d:"Romanesque, six towers, on a volcanic crater lake. Church entry is free; there's a paid car park.",t:"1 h",cost:5,unit:"grp",star:true,lat:50.4014,lng:7.2528},
           {n:"Munich old town",d:"If you arrive with light left. Marienplatz and the Viktualienmarkt are walkable from most of the cheap beds.",t:"Evening",cost:0,lat:48.1374,lng:11.5755}
         ],
         foot:"<b>Reality check:</b> 2h45 to the abbey, then 4h45 on to Munich. Eight hours of driving plus stops. Don't add a third."},
       opts2:{label:"Where to sleep — Munich",
         items:[
           {n:"Wombat's Hauptbahnhof",d:"Right at the main station, five minutes' walk to the old town. No air conditioning, but every bunk has a fan.",t:"Hostel",cost:48,unit:"pp",lat:48.1388,lng:11.5604},
           {n:"Euro Youth Hotel",d:"Same street, similar price, consistently well reviewed. Spacious rooms with private bathrooms available.",t:"Hostel",cost:45,unit:"pp",lat:48.1385,lng:11.5603},
           {n:"The Tent",d:"An enormous circus tent packed with bunks, plus pitches for your own. Cheapest real option in the city. No electricity in the sleeping tent — charge near the restaurant.",t:"Camp",cost:25,unit:"pp",lat:48.1678,lng:11.5022},
           {n:"Campingplatz Obermenzing",d:"A proper campsite with hedged pitches. Bus at the end of the road to the S-Bahn. Showers €1 extra.",t:"Camp",cost:32,unit:"grp",lat:48.1746,lng:11.4465},
           {n:"Super 8 by Wyndham Munich City North",d:"Booked — Sat 8 Aug, €58 for the room. Am Nordring 4, Freimann, north side of the city with a short S-Bahn ride into the old town.",t:"Hotel · booked",cost:58,unit:"grp",star:true,lat:48.18887,lng:11.59145}
         ],
         foot:"<b>After eight hours of driving, take the bed.</b> Prices are peak-August estimates for a private double or two dorm beds."}}
    ]
  },
  {
    id:"bled", name:"Lake Bled", color:"#4F7141", meta:"9 Aug · arrive, then climb",
    route:[[48.1351,11.5820],[46.3683,14.1146]],
    geometry:[[48.13519,11.58213],[48.11575,11.61295],[47.89601,11.72394],[47.86591,11.79405],[47.86076,11.84744],[47.82822,11.89245],[47.79592,12.20396],[47.80206,12.31287],[47.83354,12.39234],[47.83753,12.45463],[47.82901,12.8096],[47.7685,12.8975],[47.7703,12.97997],[47.72797,13.09163],[47.56967,13.16983],[47.51496,13.17008],[47.44271,13.21948],[47.41895,13.31331],[47.41897,13.38602],[47.38329,13.40166],[47.29997,13.39227],[47.24797,13.42633],[47.18901,13.43162],[47.09455,13.6089],[47.05905,13.59039],[46.96207,13.6208],[46.93365,13.60273],[46.88446,13.51294],[46.82318,13.48603],[46.68622,13.65832],[46.64427,13.78222],[46.65092,13.87074],[46.61661,13.90361],[46.59005,13.98289],[46.53206,14.03097],[46.45338,13.99074],[46.40789,14.12609],[46.36857,14.1597],[46.36831,14.1146]],
    days:[
      {n:2,date:"Sun 9 Aug",title:"Munich breakfast → Bled",lat:46.3683,lng:14.1146,
       from:{name:"Munich",lat:48.1351,lng:11.5820},
       body:"Linger over breakfast, then four and a half hours south into Slovenia. Arrive mid-afternoon with plenty of light — sunset isn't until about 8:20.",
       pills:[["drive","~4.5 h"],["locked","Viewpoint hike"],["tent","Tent"]],
       hist:{h:"History underfoot",t:"Bled Castle has sat on that cliff since 1011. Tito kept a summer villa on the north shore — Vila Bled, now a hotel — where he hosted Nehru and Nasser and built the Non-Aligned Movement."},
       opts:{label:"What to do around Bled",
         items:[
           {n:"Mala Osojnica viewpoint",d:"Twenty minutes past Ojstrica, steel steps near the top. Higher, wider, the better of the two. If you only do one, do this.",t:"2 h loop",cost:0,star:true,lat:46.3617,lng:14.0806},
           {n:"Ojstrica viewpoint",d:"A short steep scramble from the lakeshore. The classic postcard angle with the island framed below. Same trail.",t:"20 min up",cost:0,star:true,lat:46.3639,lng:14.0817},
           {n:"Lake circuit walk",d:"Six kilometres flat all the way round. Easy, and the island keeps changing shape as you go.",t:"1.5 h",cost:0,lat:46.3625,lng:14.0930},
           {n:"Bled Island & pletna boat",d:"Hand-rowed wooden boats, unchanged for centuries. Ninety-nine steps up to the church. Cash only — the rowers don't take cards.",t:"1.5 h",cost:20,unit:"pp",lat:46.3625,lng:14.0922},
           {n:"Rowboat rental",d:"On the eastern shore. Row yourselves to the island — cheaper than the pletna for two and more satisfying. Per boat, per hour.",t:"2 h",cost:25,unit:"grp",lat:46.3648,lng:14.1043},
           {n:"Bled Castle",d:"Cliff-top since 1011. Small museum, a wine cellar, and the view straight back down over the lake.",t:"1–2 h",cost:19,unit:"pp",lat:46.3692,lng:14.1006},
           {n:"Swimming, western shore",d:"Free public spots near Velika Zaka by the campsite. The water's genuinely warm by mid-August.",t:"—",cost:0,lat:46.3606,lng:14.0872},
           {n:"Vintgar Gorge",d:"Four kilometres north. Wooden boardwalk pinned to the canyon wall above turquoise water. Timed entry — book ahead for August.",t:"Half day",cost:15,unit:"pp",lat:46.3944,lng:14.0808},
           {n:"Lake Bohinj",d:"Half an hour southwest. Bigger, wilder and far quieter than Bled. The better swim of the two lakes. Parking only.",t:"Half day",cost:10,unit:"grp",lat:46.2833,lng:13.8833}
         ],
         foot:"<b>If you only have the afternoon:</b> everything except Vintgar and Bohinj is within walking distance of the lake, and the viewpoints are free. Walk the western shore, climb Ojstrica then Mala Osojnica for sunset, swim on the way down."},
       opts2:{label:"Where to sleep — Bled",
         items:[
           {n:"Kamp Bled",d:"Lakeside at Velika Zaka, clean showers, charging lockers at reception. Pricey and crowded in August — book well ahead.",t:"Camp",cost:30,unit:"pp",star:true,lat:46.3615,lng:14.0809},
           {n:"Camping Šobec",d:"Three kilometres out in a bend of the Sava, ringed by pine. Quieter and cheaper than Kamp Bled, with a swimming lake.",t:"Camp",cost:22,unit:"pp",lat:46.3617,lng:14.1339},
           {n:"Travellers' Haven Hostel",d:"Recently renovated, two kitchens, five minutes from the bus station. Cheapest bed near the lake and a well-liked owner.",t:"Hostel",cost:35,unit:"pp",lat:46.3724,lng:14.1042},
           {n:"1 A Adventure Hostel, Lesce",d:"Five kilometres out with a free daily shuttle to Bled. They book rafting and canyoning directly — useful the night before Triglav.",t:"Hostel",cost:32,unit:"pp",lat:46.3614,lng:14.1608}
         ],
         foot:"<b>You said tent for this night.</b> Kamp Bled wins on location, Šobec on price and quiet. Both need booking for August."}}
    ]
  },
  {
    id:"triglav", name:"Triglav National Park", color:"#2E8B84", meta:"10 Aug · over the pass, into the Julian Alps",
    route:[[46.3683,14.1146],[46.4331,13.7469],[46.3383,13.5525]],
    geometry:[[46.36831,14.1146],[46.36668,14.12207],[46.36813,14.13406],[46.36351,14.14984],[46.36806,14.16238],[46.38947,14.13788],[46.40456,14.12958],[46.40889,14.12455],[46.41479,14.09528],[46.42471,14.07515],[46.42916,14.05765],[46.45066,14.00178],[46.45142,13.99133],[46.45545,13.98526],[46.46086,13.96174],[46.46356,13.95878],[46.46808,13.92447],[46.47609,13.90887],[46.47544,13.8994],[46.47911,13.88433],[46.48109,13.85447],[46.4845,13.8421],[46.48229,13.83784],[46.48629,13.8266],[46.48749,13.81243],[46.48565,13.79512],[46.48841,13.7896],[46.48516,13.78974],[46.47855,13.78035],[46.47556,13.78041],[46.47471,13.78488],[46.47125,13.78502],[46.44501,13.77504],[46.44216,13.76859],[46.44446,13.76953],[46.44312,13.76455],[46.43805,13.76152],[46.44047,13.76006],[46.43884,13.75895],[46.43937,13.75317],[46.44142,13.75322],[46.43916,13.7517],[46.44,13.74841],[46.43451,13.74354],[46.43202,13.74448],[46.42047,13.74467],[46.41549,13.7411],[46.41369,13.74517],[46.41031,13.74639],[46.40967,13.7527],[46.40959,13.74913],[46.4086,13.75284],[46.40753,13.75044],[46.4075,13.75465],[46.4068,13.74915],[46.40552,13.75016],[46.4071,13.7408],[46.40497,13.74298],[46.4049,13.73836],[46.40105,13.74468],[46.39438,13.74389],[46.38961,13.74653],[46.38243,13.75817],[46.38148,13.75202],[46.3761,13.74738],[46.37018,13.72747],[46.36235,13.71412],[46.35676,13.69883],[46.34138,13.68368],[46.34249,13.6691],[46.34085,13.65037],[46.33447,13.63982],[46.33751,13.62858],[46.3383,13.60081],[46.33335,13.59152],[46.33546,13.58924],[46.33672,13.57532],[46.34028,13.5747],[46.34081,13.57183],[46.34376,13.57445],[46.33775,13.55991],[46.33944,13.55549],[46.33814,13.55223]],
    days:[
      {n:3,date:"Mon 10 Aug",title:"Vršič Pass → Trenta & the upper Soča",lat:46.3383,lng:13.5525,
       from:{name:"Bled",lat:46.3683,lng:14.1146},
       via:[{name:"Vršič Pass",lat:46.4331,lng:13.7469}],
       body:"Fifty numbered hairpins over the pass and down the far side into the park proper. One day means picking a side: water in the west, high pasture and gorges in the east.",
       pills:[["drive","~2 h"],["locked","Triglav NP"],["tent","Camp"]],
       hist:{h:"The Isonzo Front",t:"The Vršič road was built by Russian prisoners of war in 1915 under Austro-Hungarian command; a wooden chapel near the summit marks the avalanche that killed hundreds of them. The valley below was the Isonzo Front — twelve battles, over a million casualties, and the setting for A Farewell to Arms."},
       opts:{label:"Triglav — the headline sights",
         items:[
           {n:"Vršič Pass",d:"The drive is the attraction. Fifty numbered hairpins, the Russian Chapel at bend eight, pull-outs the whole way. Free, and you're doing it regardless.",t:"2 h",cost:0,star:true,lat:46.4331,lng:13.7469},
           {n:"Source of the Soča",d:"From Trenta, twenty minutes up to where the river comes out of the rock. The last stretch is a chained scramble — proper shoes, not sandals.",t:"1.5 h",cost:0,star:true,lat:46.4085,lng:13.7295},
           {n:"Peričnik Waterfall",d:"In the Vrata valley. The path runs behind the falling water, so you stand in the gap between rock and curtain. Parking fee only.",t:"1 h",cost:8,unit:"grp",star:true,lat:46.4319,lng:13.9333},
           {n:"Soča rafting",d:"Grade II–III, beginner-friendly, about two hours on the water. Note the municipal river tax is charged separately on top — €6 at Bovec, €15 at Kobarid.",t:"2 h",cost:70,unit:"pp",lat:46.3381,lng:13.5550},
           {n:"Canyoning",d:"Abseiling, sliding and jumping down a side gorge. Beginner tours cap jumps around five metres; advanced go to thirty-metre abseils. The more memorable of the two.",t:"3–4 h",cost:80,unit:"pp",lat:46.3243,lng:13.5531},
           {n:"Vogel cable car",d:"Up from Bohinj to 1,535 m for the full Triglav panorama without walking a step. Return ticket.",t:"Half day",cost:28,unit:"pp",lat:46.2739,lng:13.8400},
           {n:"Savica Waterfall",d:"At the far end of Lake Bohinj. Five hundred and fifty steps to the platform. Slovenia's national poem is set here.",t:"1.5 h",cost:8,unit:"pp",lat:46.2939,lng:13.8009},
           {n:"Tolmin Gorges",d:"The park's southern gate. Thermal spring, the Devil's Bridge sixty metres up, and a boulder wedged between the walls.",t:"2 h",cost:10,unit:"pp",lat:46.1861,lng:13.7297},
           {n:"Mount Triglav",d:"2,864 m and the thing on the flag. Two days minimum with a hut night and via ferrata near the top. Listed so you know you're not missing a day hike.",t:"2 days",cost:null,lat:46.3786,lng:13.8369},
           {n:"Via Ferrata Hvadnik",d:"A short protected route up a stream gorge at Gozd Martuljek, near Kranjska Gora — close to the start of the Vršič approach. Grade B/C, ~500 m of cable with a waterfall-climbing section and a couple of suspension bridges, ~1.5 h round trip. Needs a via ferrata kit (helmet, harness, energy-absorber lanyard) but no climbing experience.",t:"1.5 h",cost:null,lat:46.4875,lng:13.8454}
         ],
         foot:"<b>Look at the spread on the map.</b> West (Trenta, the source, Bovec) keeps you moving south toward Croatia. East (Vrata, Bohinj, Vogel) has the quieter walks but means backtracking past Bled. About ninety minutes apart."},
       opts2:{label:"Off the beaten path",
         items:[
           {n:"Planina Zajamniki",d:"A single row of shepherds' huts along a ridge above the Pokljuka plateau, facing the mountains. Reachable by car on a rough forest road. Almost nobody at sunrise.",t:"2 h",cost:0,star:true,lat:46.3350,lng:13.9250},
           {n:"Slap Kozjak",d:"Near Kobarid. A waterfall dropping into an enclosed rock chamber that feels deliberately built. Short flat walk, far less trafficked than Vintgar.",t:"1.5 h",cost:5,unit:"grp",star:true,lat:46.2547,lng:13.5844},
           {n:"Pokljuka Gorge",d:"A dry limestone gorge above Bled — natural bridges, a cave, and often nobody else on the loop. The gorge Vintgar's crowds haven't found.",t:"1.5 h",cost:10,unit:"pp",lat:46.3831,lng:14.0431},
           {n:"Mostnica Gorge",d:"From Stara Fužina at Bohinj. Two hours up a narrow green canyon to a meadow, past a rock everyone insists looks like an elephant.",t:"2–3 h",cost:5,unit:"pp",lat:46.2953,lng:13.8828},
           {n:"Radovna valley",d:"A flat, quiet valley road between Bled and the Vrata, good on foot or bike. Farms, meadows, no coaches.",t:"Flexible",cost:0,lat:46.4083,lng:14.0167},
           {n:"Velika Korita",d:"The Great Soča Gorge near Soča village, where the river narrows to about a metre across. Suspension bridges over the top.",t:"45 min",cost:0,lat:46.3372,lng:13.6800},
           {n:"Planina pri Jezeru",d:"A working high pasture with a small lake, and the gateway to the Seven Lakes valley. Serious uphill, shared with cows rather than tourists.",t:"5 h",cost:0,lat:46.3167,lng:13.8500},
           {n:"Lake Krn",d:"Slovenia's largest permanent alpine lake at 1,391 m. A long day's walk up from Lepena, and genuinely remote.",t:"6–7 h",cost:0,lat:46.2678,lng:13.6597}
         ],
         foot:"<b>If you want one thing nobody else is at:</b> Planina Zajamniki at first light. The shot everyone assumes is stock photography, and you can drive most of the way."},
       opts3:{label:"Where to sleep — Bovec",
         items:[
           {n:"Camping Vodenca",d:"Quiet, clean, right by the Soča. Free firewood, two big fire pits, charging points, and a kayak school next door.",t:"Camp",cost:14,unit:"pp",star:true,lat:46.3313,lng:13.5723},
           {n:"Kamp Soča",d:"The scenic one — mountain views and a river-access key at check-in. Gets busy and noisy in August.",t:"Camp",cost:15,unit:"pp",lat:46.3349,lng:13.6440},
           {n:"Camping Liza",d:"On the river with a shop and restaurant on site. Dog friendly, clean, but the pricier of the Bovec options.",t:"Camp",cost:18,unit:"pp",lat:46.3325,lng:13.5751},
           {n:"Adrenaline-check Eco Place",d:"Wooden huts as well as pitches, and they'll book your rafting or canyoning for you.",t:"Camp/hut",cost:20,unit:"pp",lat:46.3222,lng:13.5031}
         ],
         foot:"<b>Bovec campsites run roughly €11.50–18 per person</b> in high season. Vodenca is the quiet pick; Liza has the most facilities."}}
    ]
  },
  {
    id:"hrv", name:"Croatia", color:"#1F6F7A", meta:"11–13 Aug · straight to the coast, two nights at Brela",
    route:[[46.3383,13.5525],[43.3711,16.9114],[42.6989,18.0056]],
    geometry:[[46.33814,13.55223],[46.41714,13.62474],[46.42925,13.56605],[46.50277,13.59377],[46.56904,13.69356],[46.57137,13.83063],[46.61269,13.91735],[46.53257,14.03075],[46.45113,13.99287],[46.40864,14.12484],[46.33475,14.19758],[46.18858,14.4796],[46.03903,14.44984],[45.97009,14.63383],[45.89979,15.05131],[45.82862,15.1806],[45.77852,15.17915],[45.47897,15.42825],[45.40554,15.24979],[45.14509,15.27334],[44.96875,15.09142],[44.94603,15.16116],[44.86198,15.21096],[44.75165,15.3738],[44.63615,15.43911],[44.54033,15.43865],[44.45919,15.60573],[44.31358,15.67761],[44.25319,15.64481],[44.26413,15.59126],[44.23911,15.60577],[44.21528,15.45098],[44.12998,15.42358],[43.83886,15.88382],[43.70869,15.99372],[43.59556,16.34876],[43.60259,16.61972],[43.48088,16.80605],[43.39768,17.04501],[43.34931,16.96504],[43.37577,16.91965],[43.34879,16.96497],[43.40274,17.03547],[43.33288,17.16111],[43.22578,17.23791],[43.1599,17.47548],[43.06293,17.4959],[43.04927,17.45694],[43.03178,17.55071],[42.96947,17.51603],[42.86382,17.56643],[42.79056,17.88653],[42.76082,17.88123],[42.69908,18.00569]],
    days:[
      {n:4,date:"Tue 11 Aug",title:"→ Brela (Plitvice cut)",lat:43.3711,lng:16.9114,
       from:{name:"Bovec",lat:46.3383,lng:13.5525},
       body:"Plitvice's off the list — August crowds, peak-season pricing, and 2026's drought has the waterfalls running thin, so the one thing that sells the ticket wasn't going to deliver. Straight through to the coast instead: down through Ljubljana, Zagreb, and the A1 to the Makarska Riviera. This is a genuinely long single day — treat it like Day 14's Munich–Rotterdam haul, not a casual drive, and start early given yesterday's Vršič hairpins are still in your legs.",
       pills:[["drive","~7.5–8 h"],["locked","Brela"],["tent","Autocamp Sirena"],["pencil","2 nights"]],
       opts:{label:"Brela camping — you've emailed all four",
         items:[
           {n:"Autocamp Sirena",d:"Lokva Rogoznica, ~10 min south of Brela. Cliffside pitches over the sea, tent-friendly without reservation per reviewers, restaurant with live music on-site. The strongest overall pick on this stretch.",t:"4.5★ · 1,888 reviews",cost:15,unit:"pp",star:true,lat:43.4063,lng:16.7771},
           {n:"Camping Krvavica",d:"Krvavica, ~15 min south. Small and quiet, 5-min walk to the beach, good showers. Cheapest of the strong options at ~€23/night for two.",t:"4.5★ · 1,299 reviews",cost:12,unit:"pp",star:true,lat:43.3235,lng:16.9858},
           {n:"Mini Camp Podaca",d:"Podaca, ~20 min south. Terraced olive-grove pitches with sea views, free communal kitchen. Highest-rated of the four.",t:"4.6★ · 601 reviews",cost:15,unit:"pp",lat:43.1225,lng:17.3060},
           {n:"Camp Viter",d:"Zaostrog, ~25 min south. Right on the beach, big enough for tent plus motorcycle, close to town for supplies.",t:"4.4★ · 1,299 reviews",cost:14,unit:"pp",lat:43.1393,lng:17.2810}
         ],
         foot:"<b>Note:</b> replies aren't back on all of these yet — once you hear back, delete whichever don't have space so the budget total only reflects where you're actually staying."}},
      {n:5,date:"Wed 12 Aug",title:"Brela — beach day",lat:43.3711,lng:16.9114,
       body:"No driving. A full day to actually use the beach and campsite you paid for, instead of passing through it. Second night at the same site.",
       pills:[["locked","Rest day"],["pencil","Punta Rata beach"],["tent","2nd night"]],
       opts:{label:"What to do with a free day in Brela",
         items:[
           {n:"Punta Rata Beach",d:"Brela's signature beach, consistently ranked among Europe's best — pebble beach around the small pine-covered islet Kamen Brela, walkable from most of the campsites on the list.",t:"Half day+",cost:0,star:true,lat:43.3757,lng:16.9370},
           {n:"Biokovo Skywalk",d:"A glass horseshoe platform cantilevered off Biokovo mountain above the riviera, roughly 1,200m up with views straight down to the coast — a real change of pace from beach time if you want one active thing this day.",t:"Half day",cost:16,unit:"pp",lat:43.3183,lng:17.0658},
           {n:"Kamen Brela islet swim",d:"Swim or kayak out to the small pine islet just off Punta Rata — the postcard shot of Brela.",t:"1–2 h",cost:0,lat:43.3757,lng:16.9370},
           {n:"Just don't drive anywhere",d:"You cut Plitvice specifically to get unhurried time on the coast — the point of this day is doing less, not filling it with a second activity.",t:"—",cost:null,lat:43.3711,lng:16.9114}
         ]}},
      {n:6,date:"Thu 13 Aug",title:"→ Dubrovnik (camp outside the walls)",lat:42.6989,lng:18.0056,
       from:{name:"Brela",lat:43.3711,lng:16.9114},
       body:"Coastal drive over the Pelješac Bridge, bypassing the old Neum corridor entirely. Camp just outside Dubrovnik tonight rather than inside the city, so tomorrow's dawn walk starts fresh instead of after a late check-in.",
       pills:[["drive","~3 h"],["tent","Camp Pod Maslinom"],["pencil","Dawn walk tomorrow"]],
       opts:{label:"Dubrovnik-area camping",
         items:[
           {n:"Camp Pod Maslinom",d:"Orašac, ~20 min from Dubrovnik old town. Best-reviewed option near the city — olive-shaded terraces, small secluded beach, staff specifically help with Dubrovnik trip logistics.",t:"4.6★ · 1,819 reviews",cost:15,unit:"pp",star:true,lat:42.6989,lng:18.0056},
           {n:"Slano camping bambo",d:"Slano, ~35 min from Dubrovnik. Cheaper, quieter, right on the water — the fallback if Camp Pod Maslinom is full.",t:"4.5★ · 115 reviews",cost:10,unit:"pp",lat:42.7752,lng:17.8849},
           {n:"Avoid: Camping Solitudo",d:"The closest site to the old town, but reviews split hard — €75+/night against run-down facilities and broken showers by multiple accounts. Not worth the proximity.",t:"Skip",cost:null,lat:42.6621,lng:18.0705}
         ]}}
    ]
  },
  {
    id:"mne", name:"Montenegro — the base", color:"#B0603C", meta:"14–16 Aug · three nights, one bed",
    route:[[42.6989,18.0056],[42.4247,18.7712]],
    geometry:[[42.69908,18.00569],[42.69718,18.01663],[42.69031,18.03188],[42.6957,18.03874],[42.69852,18.04625],[42.68815,18.05321],[42.67973,18.05783],[42.67093,18.07064],[42.66314,18.08607],[42.65491,18.09498],[42.64446,18.11682],[42.63559,18.13553],[42.62995,18.15422],[42.62249,18.17796],[42.62423,18.2029],[42.6189,18.21447],[42.60855,18.23055],[42.59846,18.23149],[42.58323,18.23445],[42.56515,18.24583],[42.55041,18.28681],[42.51731,18.35846],[42.50626,18.39995],[42.49158,18.43247],[42.48588,18.43862],[42.48262,18.44763],[42.48103,18.45488],[42.47882,18.46048],[42.47516,18.46983],[42.47234,18.47752],[42.46234,18.48595],[42.45529,18.49733],[42.45705,18.51031],[42.45819,18.521],[42.45346,18.53156],[42.45059,18.53848],[42.45054,18.55021],[42.45525,18.55956],[42.45128,18.57252],[42.44287,18.58402],[42.43948,18.58929],[42.43823,18.59737],[42.43861,18.60616],[42.43888,18.61005],[42.44042,18.61704],[42.44295,18.62713],[42.44481,18.63884],[42.45085,18.64856],[42.45741,18.66353],[42.45958,18.67517],[42.46287,18.67295],[42.46557,18.68569],[42.45533,18.68216],[42.4397,18.69314],[42.43275,18.69865],[42.42909,18.70275],[42.42041,18.71506],[42.3947,18.7374],[42.39754,18.7469],[42.41756,18.76594],[42.42396,18.77018]],
    days:[
      {n:7,date:"Fri 14 Aug",title:"Dubrovnik at dawn → Kotor",lat:42.4247,lng:18.7712,
       from:{name:"Camp Pod Maslinom",lat:42.6989,lng:18.0056},
       body:"Walls at first light, empty streets, out before the first ship docks. Then the border and around the bay to Kotor by lunch.",
       pills:[["locked","Dubrovnik dawn"],["locked","Kotor"],["drive","~2.5 h"],["sleep","Base 1 of 3"]],
       hist:{h:"Two republics",t:"Dubrovnik spent four centuries as Ragusa, an independent maritime republic that bought its safety from the Ottomans with tribute rather than war, and abolished slavery in 1416. Kotor went the other way — Venetian for nearly four hundred years, which is why the lion of St Mark sits over the gate."},
       opts2:{label:"Where to sleep — Kotor (3 nights)",
         items:[
           {n:"Hotel Monte Cristo",d:"Old Town, historic building, on-site breakfast — staff reportedly help arrange parking via WhatsApp. Parking is the real constraint for any Old Town stay with an EV.",t:"4.2★ · Mid-tier",cost:null,verify:true,lat:42.4247,lng:18.7712},
           {n:"Apartments Wine House Old Town",d:"Renovated, central. Reviews note noise from an adjacent bar until ~1am — worth weighing across three nights. Same Old Town parking caveat as Monte Cristo.",t:"4.7★ (78) · Mid-tier",cost:null,verify:true,lat:42.4245,lng:18.7715},
           {n:"Guesthouse Step",d:"Dobrota, 5 min from the Old Town, 1 min from a beach, shared kitchen, balcony. Good value. One review reports bed bugs — check recent reviews before committing.",t:"4.4★ · Budget",cost:null,lat:42.4444,lng:18.7644},
           {n:"Guest House Sandra",d:"Škaljari. Best views of the set, 10–15 min walk down to the Old Town (uphill on the way back). Easier parking than the Old Town options.",t:"4.0★ · Budget",cost:null,lat:42.4195,lng:18.7810},
           {n:"Majka Guest House",d:"Old Town, but effectively hostel-format — one bathroom for 20+ beds per one review. Cheap, but not right for three nights as a couple.",t:"4.4★ (39) · Budget",cost:null,lat:42.4249,lng:18.7708}
         ],
         foot:"<b>Rationale for spending here:</b> three consecutive nights, the longest static stay of the trip, in the hottest part of the route — working AC is worth more than the price gap. <b>Prices aren't reliable</b>: this list comes from a Google Places lookup, not direct verification, so treat every option as a candidate to check on Booking/direct rather than a blind pick."}},
      {n:8,date:"Sat 15 Aug",title:"Kotor — southern coast day trips",lat:42.2864,lng:18.8400,
       from:{name:"Kotor",lat:42.4247,lng:18.7712},
       body:"Sveti Stefan, Budva, the Lovćen serpentine and Cetinje are all live for this day — more than fits, so this is about picking two or three, not doing all four.",
       pills:[["pencil","Southern coast"],["sleep","Base 2 of 3"]],
       decide:[
         {label:"Sveti Stefan: viewpoint or resort?",body:"The islet itself is a private Aman resort — non-guests can walk the causeway to the gate but no further. The classic view is a free roadside pull-off above the village (or the better, higher Church of Saint Sava viewpoint nearby). If it's the viewpoint only, this is a 20-minute stop, not a day."},
         {label:"Days 8-9 have more options than fit",body:"Sveti Stefan, Budva, Lovćen/Njegoš, Cetinje (today) and Perast, the fortress climb, Herceg Novi, Risan (day 9) — more than two days can hold. Needs pruning, not more research."}
       ],
       hist:{h:"History underfoot",t:"Budva claims over 2,500 years of continuous habitation, one of the oldest settlements on the Adriatic. Cetinje was Montenegro's royal capital from the 15th century until 1918 — a mountain-ringed town chosen precisely because it was hard to attack."},
       opts:{label:"Southern coast — pick two or three",
         items:[
           {n:"Sveti Stefan",d:"The islet-resort south of Budva, ~90 min coastal drive from Kotor. See the decide flag above — viewpoint or resort are very different trips.",t:"Viewpoint vs resort",cost:null,lat:42.2558,lng:18.8911},
           {n:"Budva old town",d:"Walled old town on its own small peninsula, over 2,500 years of habitation behind it. Busier and more built-up than Kotor's.",t:"Half day",cost:0,lat:42.2864,lng:18.8400},
           {n:"Lovćen NP / Njegoš Mausoleum",d:"The old serpentine road up from Kotor in twenty-five hairpins, the whole bay unfolding below, to the mausoleum at 1,657 m (461 steps). Significant elevation gain — regen on the descent recovers a chunk of it.",t:"Half day",cost:13,unit:"pp",star:true,lat:42.4008,lng:18.8375},
           {n:"Cetinje",d:"Montenegro's old royal capital, chosen for being hard to attack. Historical depth rather than a headline sight — pairs naturally with Lovćen on the same drive.",t:"Half day",cost:0,lat:42.3906,lng:18.9219}
         ],
         foot:"<b>Note:</b> this day and day 9 are currently defined by direction (south vs. bay) rather than by content — prune rather than trying to fit everything in."}},
      {n:9,date:"Sun 16 Aug",title:"Kotor — bay day trips",lat:42.4869,lng:18.6989,
       from:{name:"Kotor",lat:42.4247,lng:18.7712},
       body:"Perast and the boat out to Our Lady of the Rocks are the locked centerpiece. Fortress climb, Herceg Novi and Risan are all live around it — more than a day needs.",
       pills:[["locked","Perast"],["sleep","Base 3 of 3"]],
       hist:{h:"An island built by hand",t:"Our Lady of the Rocks is artificial. Sailors have dropped a stone into the bay on every safe return since the fifteenth century, and the islet grew under the church. The tradition still runs each 22 July as the Fašinada."},
       opts:{label:"Bay day trips",
         items:[
           {n:"Perast",d:"Twenty minutes round the bay. A single street of baroque palaces and no cars.",t:"Half day",cost:0,star:true,lat:42.4869,lng:18.6989},
           {n:"Our Lady of the Rocks",d:"Short boat hop from Perast to the hand-built island church. Boat plus church entry.",t:"1 h",cost:12,unit:"pp",star:true,lat:42.4878,lng:18.6897},
           {n:"Kotor town walls climb",d:"1,350 steps switchbacking up the cliff behind the old town to San Giovanni. Do it at dawn or dusk, not midday — no shade, and August is merciless.",t:"2–3 h",cost:15,unit:"pp",lat:42.4262,lng:18.7756},
           {n:"Herceg Novi",d:"At the mouth of the bay. Brief's own note: take this here, or work it into the Dubrovnik→Kotor drive on day 7 instead — one location, not both.",t:"Half day",cost:0,lat:42.4531,lng:18.5375},
           {n:"Risan",d:"Roman mosaics — the floor of a villa at the head of the bay, including the well-known sleeping Hypnos.",t:"1–2 h",cost:0,lat:42.5133,lng:18.6942}
         ],
         foot:"<b>Perast is the one thing locked in.</b> Fortress climb, Herceg Novi and Risan are all live — treat as a menu, not a checklist."}}
    ]
  },
  {
    id:"durmitor", name:"Durmitor National Park", color:"#3D6B8C", meta:"17–18 Aug · Žabljak, two nights",
    route:[[42.4247,18.7712],[43.1548,19.1223]],
    geometry:[[42.42396,18.77018],[42.40652,18.76442],[42.41038,18.77903],[42.40259,18.77945],[42.39956,18.78274],[42.41966,18.79453],[42.43176,18.80825],[42.4293,18.81533],[42.43246,18.82881],[42.43752,18.8382],[42.4388,18.83597],[42.43773,18.85323],[42.51816,18.91516],[42.57583,18.87173],[42.62109,18.86441],[42.659,18.86187],[42.68868,18.87784],[42.72632,18.85579],[42.77728,18.88845],[42.7832,18.92571],[42.80428,18.91109],[42.8236,18.89754],[42.84508,18.91493],[42.85958,18.93447],[42.8792,18.94165],[42.89594,18.96384],[42.90351,18.97452],[42.90114,18.99243],[42.90193,19.01028],[42.89959,19.02531],[42.89676,19.04136],[42.8986,19.06385],[42.8945,19.07885],[42.90077,19.09295],[42.90479,19.0902],[42.90558,19.08825],[42.9092,19.09024],[42.91843,19.08672],[42.92511,19.07494],[42.93214,19.07016],[42.94485,19.07337],[42.94906,19.08194],[42.94676,19.09233],[42.94693,19.09483],[42.94853,19.09492],[42.94737,19.09998],[42.95159,19.09583],[42.9512,19.09949],[42.96182,19.09287],[42.97662,19.08388],[42.98691,19.07111],[42.99999,19.07652],[43.01388,19.08317],[43.03027,19.08845],[43.04605,19.08102],[43.06929,19.10443],[43.08019,19.10459],[43.0938,19.10885],[43.11707,19.12211],[43.1294,19.1256],[43.15477,19.12229]],
    days:[
      {n:10,date:"Mon 17 Aug",title:"Kotor → Žabljak",lat:43.1548,lng:19.1223,
       from:{name:"Kotor",lat:42.4247,lng:18.7712},
       body:"Up out of the bay to the Durmitor plateau. Where you sleep tonight needs to answer the charging question, not just the comfort one — see the flag below before booking.",
       pills:[["drive","~3 h"],["locked","Durmitor NP"],["warn","Thin charging"]],
       decide:[
         {label:"What charging actually exists in Žabljak?",body:"This blocks the whole routing choice on day 12 — everything downstream depends on the answer. Needs recent PlugShare check-ins, not general knowledge. Fallback regardless of what DC exists: book accommodation with a confirmed standard power outlet — ~2.3 kW over 10 h ≈ 20+ kWh ≈ 120–150 km overnight. Register and pre-load payment on ABRP, PlugShare, Moon Power and EVC Charge/Electromaps before arriving."}
       ],
       hist:{h:"A glacial plateau",t:"Durmitor's karst plateau sits above 1,400 m, ringed by 48 peaks over 2,000 m and pocked with glacial lakes — Montenegro's largest national park and, since 1980, a UNESCO World Heritage Site."},
       opts2:{label:"Where to sleep — Žabljak (2 nights)",
         items:[
           {n:"Durmitorski bungalovi",d:"Family-run bungalows with kitchenette and fridge, close to town and the park. Detached units — most likely of the set to have an accessible outdoor socket. Ask directly before booking.",t:"4.7★ · Budget",cost:null,verify:true,lat:43.1520,lng:19.1180},
           {n:"Guesthouse Planinarski",d:"Pitomine. Cabin/treehouse format, directly on hiking trails, minutes from Žabljak, host cooks local food. Shared bathrooms. Excellent value.",t:"4.7★ · Budget",cost:null,lat:43.1450,lng:19.1300},
           {n:"Chalets pod Gorom",d:"Njegovuđa. Cottages around a lawn, shared bathrooms, very well reviewed. ~20 min from Žabljak — check against the actual Durmitor activity plan before booking.",t:"4.9★ · Budget",cost:null,lat:43.2000,lng:19.0500},
           {n:"Polar Star",d:"Borje. Proper small hotel with buffet dinner, breakfast and sauna, ~5 min from Žabljak — the comfortable option if the Durmitor days are hike-heavy. One review reports an unexpected €91 surcharge on arrival.",t:"4.5★ · Mid-tier",cost:null,verify:true,lat:43.1500,lng:19.0900},
           {n:"Eko Oaza – Tear of Europe",d:"Dobrilovina, on the Tara toward Mojkovac. 4.9★ (449 reviews) — the best-rated place in the whole brief. Family-run, home-cooked food, kitchen access, river setting. Only makes sense if Tara rafting/Tara Bridge are taken — well east of Žabljak, check the actual drive time.",t:"4.9★ (449) · Budget camping",cost:null,lat:43.0700,lng:19.4200},
           {n:"Hotel Porto Tara",d:"Riverside, good for a rafting-anchored stay. Mixed recent reviews on cleanliness. Windy access road.",t:"4.3★ · Budget/mid",cost:null,lat:43.1000,lng:19.3000}
         ],
         foot:"<b>Every camping night on this trip needs the same question asked before booking:</b> \"can I charge an electric car from the pitch hookup, and at what amperage?\" Many sites explicitly prohibit it even with EHU present — this matters most here."}},
      {n:11,date:"Tue 18 Aug",title:"Durmitor",lat:43.1467,lng:19.0844,
       from:{name:"Žabljak",lat:43.1548,lng:19.1223},
       body:"A full day in the park. Priority is Tara rafting if the logistics work out — everything else fits around it.",
       pills:[["pencil","Durmitor day"],["sleep","2nd night"]],
       hist:{h:"The canyon Tito's partisans crossed",t:"The Tara Canyon is Europe's deepest at over 1,300 m — second in the world only to the Grand Canyon. Đurđevića Tara bridge, opened in 1940, was itself partly demolished by its own engineer in 1942 to slow the Axis advance, then rebuilt."},
       opts:{label:"Durmitor — pick what fits",
         items:[
           {n:"Tara River rafting",d:"The priority water activity for this stretch of the trip. Half-day vs. full-day, and exactly where the put-in sits relative to Žabljak, still needs confirming.",t:"Half or full day",cost:null,verify:true,lat:43.2870,lng:18.5972},
           {n:"Tara Bridge (Đurđevića Tara)",d:"Flagged previously as adding a detour that widens the day's charging gap. Cheap to include if rafting already puts you out this way.",t:"1 h",cost:0,lat:43.1614,lng:19.3067},
           {n:"Black Lake (Crno Jezero)",d:"Easy, close to Žabljak, the low-effort option that's still genuinely worth it.",t:"1–2 h",cost:0,star:true,lat:43.1467,lng:19.0844},
           {n:"Bobotov Kuk / ridge hike",d:"The one full-day trek slot, if the payoff justifies it. Durmitor's highest peak at 2,523 m, or a shorter ridge walk if the summit push is too much for the day.",t:"Full day",cost:0,lat:43.1264,lng:19.0361},
           {n:"Durmitor Ring Road (P14)",d:"Scenic loop around the park by car — the low-commitment way to see most of it in an afternoon.",t:"Half day",cost:0,lat:43.1300,lng:19.0500},
           {n:"Sedlo Pass",d:"High mountain pass through the park, part of the Ring Road loop but worth calling out on its own for the viewpoint.",t:"1 h",cost:0,lat:43.1719,lng:19.0294}
         ],
         foot:"<b>Yesterday's charging answer shapes today.</b> If Žabljak turned out to be a real charging dead end, treat the Ring Road and Black Lake as the safe low-mileage plan and save the Tara detour for a confirmed-charge day."}}
    ]
  },
  {
    id:"bih", name:"Bosnia & Herzegovina", color:"#6B7F3E", meta:"19–20 Aug · Mostar & Sarajevo",
    route:[[43.1548,19.1223],[42.4304,19.2594],[42.7124,18.3446],[43.3438,17.8078],[43.6606,17.7625],[43.6549,17.9626],[43.8586,18.4312]],
    geometry:[[43.15477,19.12229],[43.13782,19.1218],[43.12138,19.12477],[43.06607,19.13687],[43.02144,19.16176],[42.97638,19.19048],[42.94531,19.20165],[42.9267,19.23494],[42.92654,19.27428],[42.91563,19.28291],[42.91269,19.28084],[42.91843,19.26778],[42.90737,19.27043],[42.90024,19.27359],[42.89698,19.27282],[42.87783,19.30217],[42.87541,19.29987],[42.86132,19.32066],[42.84295,19.34192],[42.83143,19.35669],[42.82588,19.37067],[42.82074,19.38482],[42.81642,19.39914],[42.81542,19.40109],[42.80675,19.39078],[42.79073,19.39442],[42.78219,19.39279],[42.77282,19.39128],[42.75784,19.38956],[42.74376,19.38951],[42.73562,19.38128],[42.72493,19.3778],[42.70858,19.3725],[42.69792,19.37392],[42.68391,19.37428],[42.66946,19.36749],[42.65761,19.37669],[42.64622,19.37913],[42.63425,19.37297],[42.62092,19.37039],[42.60893,19.37601],[42.59966,19.37541],[42.58955,19.35878],[42.578,19.35467],[42.56608,19.34498],[42.54544,19.33428],[42.53396,19.33728],[42.52051,19.3426],[42.50621,19.33225],[42.50204,19.32134],[42.49623,19.3104],[42.48225,19.30587],[42.4699,19.3003],[42.439,19.26583],[42.4414,19.24368],[42.44341,19.20626],[42.45428,19.19214],[42.46321,19.17586],[42.4987,19.15026],[42.51546,19.12469],[42.54096,19.10971],[42.56401,19.08311],[42.58102,19.05233],[42.61201,19.02791],[42.62746,19.01258],[42.6402,19.00118],[42.64895,18.99172],[42.66615,18.97679],[42.67277,18.97506],[42.67839,18.97383],[42.68612,18.96305],[42.69787,18.96178],[42.7107,18.9525],[42.74154,18.93793],[42.76544,18.94078],[42.77732,18.93649],[42.78108,18.92299],[42.77676,18.89187],[42.78257,18.86507],[42.77651,18.84884],[42.77002,18.83134],[42.75489,18.81908],[42.75326,18.80589],[42.75093,18.78733],[42.7412,18.76971],[42.74437,18.74691],[42.74457,18.71824],[42.75068,18.68856],[42.75435,18.66613],[42.74962,18.64675],[42.73917,18.62904],[42.73672,18.60552],[42.72357,18.58445],[42.71308,18.57074],[42.71295,18.53879],[42.712,18.52746],[42.71779,18.50408],[42.70558,18.51884],[42.70859,18.48258],[42.70868,18.44477],[42.70773,18.39655],[42.71524,18.34638],[42.71044,18.31104],[42.73128,18.2624],[42.75988,18.23603],[42.78206,18.19469],[42.79238,18.14858],[42.81378,18.11243],[42.8493,18.09567],[42.86454,18.02799],[42.88375,17.98366],[42.90472,17.92953],[42.94671,17.91132],[42.99141,17.8944],[43.03935,17.94917],[43.083,17.94232],[43.11215,17.90924],[43.19153,17.8955],[43.23152,17.85191],[43.26911,17.83548],[43.3172,17.82961],[43.34599,17.80745],[43.36584,17.83312],[43.40519,17.87388],[43.48313,17.80991],[43.52109,17.74031],[43.57964,17.72008],[43.62772,17.75314],[43.6526,17.7545],[43.66437,17.77152],[43.68644,17.8241],[43.69093,17.87073],[43.67205,17.91353],[43.65498,17.96284],[43.68224,17.98634],[43.7172,17.99516],[43.74174,18.0253],[43.85856,18.13912],[43.86331,18.30412],[43.85114,18.3779],[43.85834,18.43131]],
    days:[
      {n:12,date:"Wed 19 Aug",title:"Durmitor → Mostar",lat:43.3438,lng:17.8078,
       from:{name:"Žabljak",lat:43.1548,lng:19.1223},
       body:"The biggest unresolved routing decision on the trip — three mutually exclusive ways down off the plateau. Pick one below; Option C changes more than the road.",
       pills:[["pencil","A/B/C routing"],["pencil","Mostar"],["sleep","1 night"]],
       hist:{h:"The bridge, twice over",t:"Ottoman-built in 1566, the Stari Most stood 427 years until Croat forces shelled it in November 1993. Reconstruction used the original quarry and Ottoman techniques, and it reopened in 2004. The city on either side of the Neretva is still, in practice, divided."},
       opts:{label:"Routing to Mostar",exclusive:true,
         items:[
           {n:"Option A — via Nikšić → Trebinje",d:"~290 km, descent overall. Skips Sutjeska entirely — least interesting road of the three. The low-risk default.",t:"Charging: Nikšić & Trebinje both plausible anchors",cost:0,verify:true,lat:42.7731,lng:18.9445},
           {n:"Option B — via Podgorica → Trebinje",d:"~140 km of near-continuous descent from 1,450 m to sea level, then west. Podgorica is the strongest charging hub in Montenegro — longer again, but removes EV risk almost entirely. Take this if the constraint turns out to be Žabljak itself: you can't reliably leave with a full charge.",t:"Charging: Podgorica, the strongest hub in the country",cost:0,star:true,lat:42.4304,lng:19.2594},
           {n:"Option C — via Šćepan Polje → Sutjeska → Foča",d:"Shortest at ~210 km, and the best road: Tara Canyon, Šćepan Polje, Tjentište. But it does not reach Mostar — Foča → Nevesinje → Mostar is a ruled-out charging desert.",t:"Charging: works only with the flip below",cost:0,consequence:"<b>This flips the plan:</b> day 12 becomes Žabljak → Sutjeska (overnight, Schuko charge), day 13 becomes Foča → Sarajevo → Konjic/Jablanica → Mostar, and the whole exit changes to south via Počitelj/Kravica → Bijača border → Croatian A1, replacing Sarajevo → Salzburg with Ploče → Zagreb → Ljubljana → Austria. ~100–150 km longer, but dense-charging motorway the entire way — may be a net win for an EV, not a cost. The day cards below are written for A/B; picking this means rebuilding days 12–15 by hand, not just re-routing the map line.",lat:43.2870,lng:18.5972}
         ],
         foot:"<b>Blocking question:</b> is the constraint (a) nothing reliable in Žabljak to leave on, or (b) nothing at Sutjeska/Foča to arrive at? (a) points to Option B, (b) points to Option A. Neither is confirmed yet."},
       opts2:{label:"Mostar day trips (if A or B)",
         items:[
           {n:"Kravica Waterfall",d:"Back in — ~45 min from Mostar, out-and-back. Go at opening; midday in August is heaving. Was previously cut for crowding, reinstated.",t:"Half day",cost:0,star:true,lat:43.1583,lng:17.6111},
           {n:"Blagaj Tekija",d:"A 16th-century Dervish monastery built directly into the cliff face at the source of the Buna River, one of Europe's most powerful natural springs. About 12 km south of Mostar.",t:"1–2 h",cost:0,star:true,lat:43.2572,lng:17.9032},
           {n:"Počitelj",d:"Ottoman hill town on the Mostar → coast road — pairs naturally with Kravica in one loop.",t:"1–2 h",cost:0,lat:43.1344,lng:17.7318},
           {n:"Stari Most, old bazaar & the war-history layer",d:"Acknowledged but not centred, per stated preference — the bridge at dusk is worth it regardless, divers still working the crowd.",t:"Evening",cost:0,lat:43.3438,lng:17.8078}
         ]},
       opts3:{label:"Where to sleep — Mostar",
         items:[
           {n:"Guest House Vanja",d:"10 min walk to the Old Bridge, free parking, shared kitchen, free coffee. Best overall of the set.",t:"4.8★ (144) · Budget",cost:null,star:true,lat:43.3420,lng:17.8130},
           {n:"Guest House STARI",d:"200 m from the Old Bridge, free parking out front, shared bathroom. Entrance is on a side street and hard to find.",t:"4.7★ · Budget",cost:null,lat:43.3410,lng:17.8140},
           {n:"Guest House \"Nana\"",d:"Next to the bus/train station, big clean rooms, very flexible hosts.",t:"4.8★ (96) · Budget",cost:null,lat:43.3480,lng:17.8090},
           {n:"Guesthouse Stari Grad",d:"Only 46 reviews and one flags inconsistent room quality. Safe parking, <10 min to the Old Town.",t:"4.6★ · Budget",cost:null,verify:true,lat:43.3440,lng:17.8110},
           {n:"Villa Park, Lacina",d:"Neretva river views from two balcony rooms only — worth requesting specifically. On-site parking. One very negative recent review about the owner's conduct — read current reviews first.",t:"4.6★ (257) · Budget/mid",cost:null,verify:true,lat:43.3520,lng:17.8250}
         ],
         foot:"<b>All strong and all cheap</b> — this is the easiest night on the trip. Free parking is common here, which matters for the EV."}},
      {n:13,date:"Thu 20 Aug",title:"Mostar → Sarajevo",lat:43.8586,lng:18.4312,
       from:{name:"Mostar",lat:43.3438,lng:17.8078},
       body:"Up the M17 through Jablanica and Konjic — on-route, not a detour. Short enough drive that the rest of the day is Sarajevo, not just the arrival.",
       pills:[["drive","~2.5 h"],["locked","Sarajevo"],["sleep","1 night"]],
       hist:{h:"More than one era",t:"Sarajevo has been Ottoman regional capital, Austro-Hungarian showcase city, the spark of 1914, a Winter Olympics host in 1984, and besieged for four years in the 1990s. It's easy for the whole day to become 1992–95 — worth deliberately keeping the other centuries in view too."},
       opts:{label:"On the M17 — Jablanica & Konjic",
         items:[
           {n:"Jablanica",d:"Neretva bridge and the Battle of the Neretva site — and the lamb, a genuine local specialty worth timing lunch around.",t:"1 h",cost:0,lat:43.6606,lng:17.7625},
           {n:"Konjic",d:"An old stone bridge of its own, and Tito's nuclear bunker (Ark D-0) just outside town. Tour booking requirements and whether it runs in August still need confirming.",t:"1–2 h",cost:null,verify:true,lat:43.6549,lng:17.9626}
         ]},
       opts2:{label:"Sarajevo — one night, pick what fits",
         items:[
           {n:"Baščaršija / Ottoman quarter",d:"The old bazaar core — coppersmiths, mosques, the obvious place to just walk.",t:"2–3 h",cost:0,star:true,lat:43.8590,lng:18.4320},
           {n:"Latin Bridge / 1914 assassination site",d:"Where Franz Ferdinand was shot — the spark of the First World War, right in the old town.",t:"20 min",cost:0,lat:43.8577,lng:18.4306},
           {n:"Tunnel of Hope",d:"The hand-dug tunnel under the airport runway that kept the besieged city supplied through the 1990s. Out near Butmir, a short drive from the centre.",t:"1–2 h",cost:0,lat:43.8214,lng:18.3130},
           {n:"Yellow Fortress",d:"Free viewpoint over the old town and the valley, especially good near sunset.",t:"1 h",cost:0,lat:43.8626,lng:18.4275},
           {n:"Trebević / abandoned bobsleigh track",d:"1984 Olympic bobsleigh run, now derelict and covered in graffiti, reached by cable car from the old town.",t:"Half day",cost:0,lat:43.8100,lng:18.4600}
         ],
         foot:"<b>Keep the balance conscious here.</b> All eras chronologically, war acknowledged but not centred — Sarajevo is the one stop on the trip where it's easy for the whole day to collapse into just 1992–95."},
       opts3:{label:"Where to sleep — Sarajevo",
         items:[
           {n:"Pigeon Square Rooms",d:"Baščaršija. Directly on the old square, spacious rooms, working AC, shared kitchen, well-regarded host. The clear pick.",t:"4.7★ (225) · Budget",cost:null,star:true,lat:43.8590,lng:18.4320},
           {n:"Apartment Gondola",d:"Hrvatin. Free on-site parking, 1 min from the Trebević cable car, 5–7 min walk to Baščaršija. Best option if parking is the priority — and in Sarajevo it usually is.",t:"5.0★ (19) · Budget",cost:null,verify:true,lat:43.8470,lng:18.4380},
           {n:"Bascarsija Private Rooms",d:"Only 3 reviews — too thin a sample to rely on. Fallback only.",t:"4.0★ (3) · Budget",cost:null,verify:true,lat:43.8585,lng:18.4315},
           {n:"Avoid: Hostel Latin Bridge",d:"3.8★, multiple serious complaints about check-in refusals and cleanliness.",t:"Skip",cost:null,lat:43.8580,lng:18.4310},
           {n:"Avoid: Room in heart of the city-Old Town",d:"4.3★ across 10 reviews, with a detailed report of cold, dusty rooms and no hot water.",t:"Skip",cost:null,lat:43.8595,lng:18.4325}
         ]}}
    ]
  },
  {
    id:"home", name:"The way back", color:"#7A6A9B", meta:"21–23 Aug · Sarajevo → Salzburg → Rotterdam (+ buffer)",
    route:[[43.8586,18.4312],[47.8095,13.0550],[51.9244,4.4777]],
    geometry:[[43.85834,18.43131],[43.85571,18.40102],[43.852,18.34803],[43.9111,18.32143],[43.99732,18.18508],[44.11617,18.10914],[44.13617,17.97415],[44.24194,17.90167],[44.26808,17.88118],[44.38158,17.98765],[44.41891,17.99781],[44.44973,18.05771],[44.5185,18.08492],[44.5894,18.09455],[44.64912,18.07712],[44.70951,18.07249],[44.75435,18.08364],[44.83185,18.01093],[44.83119,17.80887],[44.864,17.64516],[44.86144,17.47624],[44.93963,17.28679],[45.11569,17.20347],[45.14322,17.25382],[45.20901,17.20877],[45.2978,17.06175],[45.43853,16.8259],[45.57059,16.57447],[45.70127,16.36022],[45.78582,16.12202],[45.76046,15.89824],[45.83973,15.70378],[45.91055,15.52472],[45.85588,15.2521],[45.85619,15.1422],[45.90209,15.00286],[45.925,14.90392],[45.95355,14.75543],[45.98062,14.60286],[46.02603,14.49604],[46.08326,14.46056],[46.16977,14.48594],[46.281,14.29392],[46.36422,14.16429],[46.44355,14.01757],[46.54583,14.02179],[46.60397,13.93454],[46.64705,13.77383],[46.70299,13.63819],[46.78887,13.52588],[46.86768,13.50547],[46.95524,13.6148],[47.09232,13.60993],[47.15546,13.50038],[47.23737,13.42151],[47.31652,13.39636],[47.41865,13.38652],[47.43765,13.24065],[47.51239,13.17159],[47.63094,13.13173],[47.72982,13.08841],[47.75048,13.08673],[47.78202,13.08176],[47.80175,13.06728],[47.82032,13.05308],[47.82711,13.0259],[47.76714,12.92168],[47.82726,12.75159],[47.82768,12.62054],[47.83432,12.44014],[47.80405,12.29563],[47.81659,12.04951],[47.84427,11.86802],[47.9411,11.7017],[48.06901,11.72081],[48.18269,11.72327],[48.29751,11.63238],[48.50532,11.58906],[48.60984,11.5438],[48.8037,11.4657],[48.96061,11.42269],[49.03827,11.35805],[49.24789,11.21682],[49.45926,11.23709],[49.54785,11.01396],[49.61527,10.92428],[49.73701,10.80141],[49.74831,10.62229],[49.7855,10.43231],[49.78021,10.2477],[49.74665,10.03151],[49.7548,9.91828],[49.77259,9.74311],[49.77092,9.58065],[49.8244,9.54031],[49.88197,9.42679],[49.9468,9.33492],[50.00292,9.21755],[50.02147,8.94997],[50.06479,8.7241],[50.0445,8.53828],[50.14041,8.33087],[50.24806,8.24683],[50.35777,8.14837],[50.4124,7.98741],[50.43512,7.91861],[50.4462,7.83891],[50.49348,7.73567],[50.53844,7.59336],[50.61195,7.42634],[50.70143,7.25821],[50.82752,7.20243],[50.91915,7.08249],[51.04352,7.00647],[51.23879,6.91023],[51.42015,6.79714],[51.48729,6.80742],[51.48526,6.66354],[51.54421,6.5642],[51.65655,6.17608],[51.66292,5.95384],[51.7829,5.82942],[51.84456,5.77691],[51.86702,5.56919],[51.87337,5.49759],[51.87659,5.35109],[51.84339,5.00362],[51.82741,4.77864],[51.88121,4.56701],[51.91954,4.5148],[51.92413,4.4782]],
    days:[
      {n:14,date:"Fri 21 Aug",title:"Sarajevo → Salzburg",lat:47.8095,lng:13.0550,
       from:{name:"Sarajevo",lat:43.8586,lng:18.4312},
       body:"This is really a question of where the 13/14 split falls, not which city is nicer. Salzburg is the current plan and the only one with lodging worked up below. The M17/A1 out of Sarajevo through central Bosnia is the weakest charging corridor on the entire return, whichever city is picked.",
       pills:[["pencil","Return city undecided"],["drive","~7–10 h (city-dependent)"],["warn","Weak charging out of Bosnia"],["sleep","1 night"]],
       hist:{h:"Mid-tier exception #2",t:"This is the night before the long final push — a good bed and a proper breakfast has direct operational value here, not just comfort. The same logic as the three nights in Kotor."},
       opts:{label:"Which city — this sets tomorrow's drive",exclusive:true,
         items:[
           {n:"Salzburg",d:"Roughly splits Sarajevo → Rotterdam into 13/14 evenly. Shortest total of the four. Accommodation options already worked up — see below.",t:"Current plan",cost:0,star:true,lat:47.8095,lng:13.0550},
           {n:"Vienna",d:"Further east, so day 15 gets longer — but the more natural line if exiting Bosnia north via Zagreb rather than west via Ljubljana. A genuine city night rather than a motel stop.",t:"Earlier plan",cost:0,consequence:"Lodging for Vienna isn't researched yet — the Salzburg options below don't apply. Day 15's ~1,000 km / warn pill assumes Salzburg; expect meaningfully more from here.",lat:48.2082,lng:16.3738},
           {n:"Nuremberg",d:"Shortens day 15 meaningfully but lengthens today. Only makes sense paired with an earlier start out of Sarajevo.",t:"Further along",cost:0,consequence:"Lodging for Nuremberg isn't researched yet — the Salzburg options below don't apply. Today's drive gets longer to compensate.",lat:49.4521,lng:11.0767},
           {n:"Cologne",d:"Turns day 15 into a ~250 km hop. Requires today to be a very long push, which strains the single-night structure. Keep as a fallback if today runs late rather than a first choice.",t:"Near home",cost:0,consequence:"Lodging for Cologne isn't researched yet — the Salzburg options below don't apply. Only makes sense if today is already running long.",lat:50.9375,lng:6.9603}
         ],
         foot:"<b>Downstream of the day 12 routing choice.</b> If Option C was picked there, this whole return corridor changes to Ploče → Zagreb → Ljubljana → Austria, which favours Salzburg or Nuremberg over Vienna."},
       opts2:{label:"Where to sleep — Salzburg (if the current plan)",
         items:[
           {n:"Villa Verde",d:"Leopoldskronstraße. Small owner-run B&B, private parking, repeatedly praised breakfast, 15 min walk to the old town. Best-reviewed option in Salzburg by a distance — the obvious pick for a pre-drive night.",t:"4.8★ (409) · Mid-tier",cost:null,star:true,lat:47.7930,lng:13.0330},
           {n:"B&B Hotel Salzburg-Nord",d:"Just off the motorway — the pragmatic choice if arriving late and leaving at dawn, not caring about the city at all. Breakfast is extra.",t:"4.0★ (1,710) · Budget",cost:null,lat:47.8360,lng:13.0430},
           {n:"myNext – Riverside Hotel",d:"Riverside, guest kitchen and laundry, one stop from the main station. Functional.",t:"4.0★ · Budget",cost:null,lat:47.8130,lng:13.0480},
           {n:"B&B Hotel Salzburg-Süd, Puch",d:"South of the city — wrong side for a northbound departure. Only if arriving late from the Sarajevo direction and skipping the city entirely.",t:"4.3★ · Budget",cost:null,lat:47.7550,lng:13.0350},
           {n:"Skip: Holiday Inn Salzburg City",d:"3.8★ with a run of recent complaints about condition and service, at chain pricing.",t:"Skip",cost:null,lat:47.8010,lng:13.0450}
         ],
         foot:"<b>If day 14 moves to Vienna, Nuremberg or Cologne, this whole list needs redoing</b> — none of it has been researched for those cities yet."}},
      {n:15,date:"Sat 22 Aug",title:"Salzburg → Rotterdam",lat:51.9244,lng:4.4777,
       from:{name:"Salzburg",lat:47.8095,lng:13.0550},
       body:"Single push to Rotterdam, arriving late. ~1,000 km from Salzburg — meaningfully more from Vienna. This exceeds the usual 7–8 hour comfort ceiling deliberately; tomorrow is the recovery buffer, not this evening. Treat the charging stops as rest stops, not lost time, and leave Salzburg with a full battery.",
       pills:[["drive","~10–11 h w/ charging"],["warn","Exceeds comfort ceiling — deliberate"]]},
      {n:16,date:"Sun 23 Aug",title:"Open buffer day",lat:51.9244,lng:4.4777,
       body:"No plan, deliberately. Yesterday was a long push arriving late — this exists purely as recovery slack, not a day to fill.",
       pills:[["locked","Recovery day"],["pencil","No plan"]]}
    ]
  }
];

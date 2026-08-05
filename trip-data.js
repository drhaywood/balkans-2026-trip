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
           {n:"Mount Triglav",d:"2,864 m and the thing on the flag. Two days minimum with a hut night and via ferrata near the top. Listed so you know you're not missing a day hike.",t:"2 days",cost:null,lat:46.3786,lng:13.8369}
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
       hist:{h:"Two republics",t:"Dubrovnik spent four centuries as Ragusa, an independent maritime republic that bought its safety from the Ottomans with tribute rather than war, and abolished slavery in 1416. Kotor went the other way — Venetian for nearly four hundred years, which is why the lion of St Mark sits over the gate."}},
      {n:8,date:"Sat 15 Aug",title:"Kotor fortress + Perast",lat:42.4869,lng:18.6989,
       from:{name:"Kotor",lat:42.4247,lng:18.7712},
       body:"1,350 steps up the walls at dawn — brutal in August heat any later. Afternoon in Perast and the boat out to Our Lady of the Rocks.",
       pills:[["locked","Fortress walls"],["locked","Perast"],["sleep","Base 2 of 3"]],
       hist:{h:"An island built by hand",t:"Our Lady of the Rocks is artificial. Sailors have dropped a stone into the bay on every safe return since the fifteenth century, and the islet grew under the church. The tradition still runs each 22 July as the Fašinada."},
       opts:{label:"What to do around the bay",
         items:[
           {n:"Fortress walls to San Giovanni",d:"1,350 steps switchbacking up the cliff behind the old town. Go at first light — no shade, and August is merciless.",t:"2–3 h",cost:15,unit:"pp",star:true,lat:42.4262,lng:18.7756},
           {n:"Kotor old town",d:"Venetian squares, the lion of St Mark over the gate, a cathedral from 1166. Small enough to get properly lost in.",t:"2 h",cost:0,lat:42.4247,lng:18.7712},
           {n:"Perast",d:"Twenty minutes round the bay. A single street of baroque palaces and no cars.",t:"Half day",cost:0,star:true,lat:42.4869,lng:18.6989},
           {n:"Our Lady of the Rocks",d:"Short boat hop from Perast to the hand-built island church. Boat plus church entry.",t:"1 h",cost:12,unit:"pp",lat:42.4878,lng:18.6897},
           {n:"Kotor–Lovćen serpentine",d:"The old road up the mountain in twenty-five hairpins, the whole bay unfolding below. Pull-outs the entire way.",t:"Half day",cost:0,lat:42.4133,lng:18.7500},
           {n:"Njegoš Mausoleum, Lovćen",d:"At 1,657 m, reached by 461 steps. Poet, prince and bishop, buried at the top of his own country. Park entry plus mausoleum.",t:"2 h",cost:13,unit:"pp",lat:42.4008,lng:18.8375},
           {n:"Ostrog Monastery",d:"Ninety minutes inland. Built into a sheer white cliff. Free to enter; covered shoulders and legs required.",t:"Half day",cost:0,lat:42.6764,lng:19.0294},
           {n:"Swimming, Dobrota shore",d:"Small pebble beaches along the water just north of the old town.",t:"—",cost:0,lat:42.4444,lng:18.7644}
         ],
         foot:"<b>Three nights means two full days plus edges.</b> Fortress and Perast fill one comfortably. The serpentine road plus Ostrog fills the other, but note on the map how far inland Ostrog sits — that's the long one."}},
      {n:9,date:"Sun 16 Aug",title:"Serpentine road + Ostrog",lat:42.6764,lng:19.0294,
       from:{name:"Kotor",lat:42.4247,lng:18.7712},
       body:"Up the old Kotor–Lovćen switchbacks for the bay view, then inland to the monastery in the cliff. Long day, but nothing to pack.",
       pills:[["pencil","Lovćen"],["pencil","Ostrog"],["sleep","Base 3 of 3"]],
       hist:{h:"Njegoš",t:"Petar II Petrović-Njegoš was at once Montenegro's prince, its Orthodox bishop, and its greatest poet. His mausoleum sits at 1,657 m on Lovćen. Ostrog draws Orthodox, Catholic and Muslim pilgrims alike."}}
    ]
  },
  {
    id:"bih", name:"Bosnia & Herzegovina", color:"#6B7F3E", meta:"17–19 Aug · home a different way",
    route:[[42.4247,18.7712],[43.3400,18.6800],[43.3438,17.8078],[43.1583,17.6111],[45.8150,15.9819]],
    geometry:[[42.42396,18.77018],[42.4096,18.76934],[42.40052,18.76668],[42.4108,18.77919],[42.40763,18.78083],[42.40325,18.781],[42.40006,18.78295],[42.41033,18.78956],[42.42608,18.80023],[42.4324,18.80869],[42.43037,18.81359],[42.4276,18.81781],[42.43373,18.82928],[42.43881,18.832],[42.43552,18.84076],[42.43886,18.83612],[42.43555,18.84686],[42.43497,18.86605],[42.52505,18.9175],[42.56842,18.88043],[42.59385,18.86733],[42.62492,18.86592],[42.65376,18.86482],[42.67833,18.86116],[42.69201,18.87947],[42.71494,18.86132],[42.74014,18.85818],[42.77693,18.89079],[42.78051,18.91829],[42.79004,18.9281],[42.80513,18.90812],[42.81846,18.89813],[42.8321,18.90473],[42.84746,18.91467],[42.86118,18.90581],[42.88009,18.88111],[42.89268,18.84833],[42.8926,18.81719],[42.90725,18.78974],[42.92554,18.7588],[42.94601,18.73524],[42.96357,18.71208],[42.98919,18.72751],[43.0082,18.70129],[43.03381,18.65801],[43.05284,18.64026],[43.06365,18.61025],[43.08138,18.60787],[43.11453,18.59421],[43.1383,18.5752],[43.14971,18.56713],[43.17432,18.5647],[43.208,18.57124],[43.23344,18.59971],[43.25642,18.62447],[43.2886,18.61799],[43.30965,18.65955],[43.33193,18.68938],[43.36476,18.69433],[43.35181,18.67967],[43.34347,18.67049],[43.34826,18.65672],[43.33693,18.67469],[43.35537,18.6807],[43.36519,18.69962],[43.3268,18.68162],[43.30504,18.65081],[43.28136,18.61933],[43.25268,18.6263],[43.22454,18.57899],[43.20172,18.5677],[43.16253,18.56773],[43.16431,18.54843],[43.17706,18.50555],[43.19459,18.458],[43.20575,18.42932],[43.22609,18.41179],[43.23971,18.38979],[43.25687,18.36213],[43.24498,18.33973],[43.24521,18.3053],[43.26074,18.28586],[43.28167,18.26336],[43.29026,18.22137],[43.26339,18.16785],[43.25717,18.115],[43.25718,18.10398],[43.24664,18.08661],[43.26294,18.03797],[43.25986,18.00671],[43.24538,17.97356],[43.26864,17.93051],[43.26564,17.89693],[43.28378,17.86335],[43.313,17.82995],[43.33809,17.80984],[43.33163,17.81509],[43.3074,17.83175],[43.25715,17.83622],[43.21204,17.80013],[43.15615,17.75732],[43.11693,17.71358],[43.1364,17.67194],[43.16183,17.63436],[43.158,17.61149],[43.16446,17.57036],[43.12979,17.58667],[43.16183,17.47158],[43.20613,17.30248],[43.24635,17.2309],[43.34852,17.13113],[43.42406,16.97464],[43.48335,16.80301],[43.55183,16.70674],[43.59842,16.55238],[43.60224,16.33026],[43.64304,16.20455],[43.68465,16.05274],[43.8029,15.9177],[44.01579,15.57871],[44.21481,15.45054],[44.23845,15.60347],[44.24923,15.62632],[44.3944,15.63288],[44.51682,15.48285],[44.66906,15.42029],[44.79091,15.32522],[44.8595,15.21461],[44.93986,15.1693],[45.00742,15.13053],[45.07648,15.20621],[45.16974,15.27762],[45.25563,15.27679],[45.35946,15.27593],[45.42314,15.29919],[45.49653,15.44819],[45.56867,15.61596],[45.73889,15.87875],[45.78195,15.95245],[45.8054,15.96632],[45.81501,15.98194]],
    days:[
      {n:10,date:"Mon 17 Aug",title:"→ Sutjeska National Park",lat:43.3400,lng:18.6800,
       from:{name:"Kotor",lat:42.4247,lng:18.7712},
       body:"North out of Montenegro on mountain roads into Bosnia. Camp at Tjentište beneath the monument.",
       pills:[["drive","~4.5 h"],["locked","Sutjeska"],["tent","Camp"],["warn","Thin charging"]],
       hist:{h:"The Battle of the Sutjeska",t:"In 1943 Tito's Partisans broke out of a German encirclement here and lost roughly a third of their force doing it. The concrete monument at Tjentište is one of the great Yugoslav spomeniks. Perućica, inside the park, is one of the last primeval forests left in Europe."}},
      {n:11,date:"Tue 18 Aug",title:"Perućica, then Mostar",lat:43.3438,lng:17.8078,
       from:{name:"Tjentište",lat:43.3400,lng:18.6800},
       body:"Morning in the old-growth forest, afternoon drive to Mostar. The Stari Most at dusk, divers still working the crowd.",
       pills:[["drive","~3.5 h"],["locked","Mostar"],["sleep","Cheap hotel"]],
       hist:{h:"The bridge, twice over",t:"Ottoman-built in 1566, the Stari Most stood 427 years until Croat forces shelled it in November 1993. Reconstruction used the original quarry and Ottoman techniques, and it reopened in 2004. The city on either side of the Neretva is still, in practice, divided."}},
      {n:12,date:"Wed 19 Aug",title:"Kravice, then turn north",lat:43.1583,lng:17.6111,
       from:{name:"Mostar",lat:43.3438,lng:17.8078},
       body:"Early run down to the waterfalls for a swim before the heat, back through Mostar, and then the long haul home begins.",
       pills:[["pencil","Kravice"],["drive","~5.5 h after"],["tent","Camp near Zagreb"]]}
    ]
  },
  {
    id:"home", name:"The way back", color:"#7A6A9B", meta:"20–21 Aug · 1,400 km",
    route:[[45.8150,15.9819],[48.1351,11.5820],[51.9244,4.4777]],
    geometry:[[45.81501,15.98194],[45.80501,15.96606],[45.79664,15.90438],[45.82202,15.748],[45.89215,15.59085],[45.87741,15.3057],[45.83856,15.16106],[45.89979,15.05166],[45.93019,14.92533],[45.93515,14.78881],[45.96926,14.6462],[46.01463,14.53841],[46.05111,14.45072],[46.13195,14.48138],[46.25952,14.37034],[46.3149,14.2528],[46.42071,14.08439],[46.51965,14.02369],[46.58954,13.98368],[46.65181,13.86763],[46.67888,13.68825],[46.75082,13.57461],[46.82203,13.48825],[46.90534,13.54368],[47.01889,13.61475],[47.12732,13.55787],[47.17222,13.45489],[47.26355,13.41536],[47.36733,13.39529],[47.41932,13.31889],[47.46244,13.20589],[47.57623,13.16594],[47.676,13.12441],[47.76436,12.99743],[47.80254,12.85045],[47.82903,12.7005],[47.82642,12.56439],[47.83145,12.38764],[47.79815,12.23188],[47.82325,11.96566],[47.86558,11.82174],[47.9974,11.67666],[48.11548,11.6135],[48.13646,11.57972],[48.1715,11.6001],[48.25488,11.64633],[48.46261,11.58944],[48.58082,11.58935],[48.74832,11.45919],[48.92652,11.46589],[49.01167,11.35492],[49.14191,11.2685],[49.40336,11.19613],[49.50645,11.11834],[49.58428,10.92734],[49.70499,10.85172],[49.7313,10.68713],[49.76779,10.49743],[49.77393,10.32606],[49.78453,10.11594],[49.7473,9.96613],[49.74829,9.8216],[49.76214,9.63923],[49.79864,9.58763],[49.85595,9.49235],[49.90246,9.3824],[49.97013,9.29525],[49.99173,9.10339],[50.05985,8.87532],[50.05359,8.63016],[50.03507,8.44066],[50.16754,8.29424],[50.27778,8.24208],[50.39761,8.07434],[50.41274,7.93781],[50.45359,7.89462],[50.44786,7.78636],[50.5052,7.71945],[50.5592,7.54784],[50.62586,7.38711],[50.73076,7.23859],[50.85338,7.21532],[50.92664,7.05752],[51.06576,6.9879],[51.28396,6.90089],[51.43972,6.8057],[51.48628,6.78411],[51.49236,6.64354],[51.56304,6.50402],[51.67297,6.1138],[51.66375,5.92273],[51.79613,5.80014],[51.84449,5.77271],[51.86863,5.56617],[51.87501,5.49746],[51.86695,5.33217],[51.84515,4.99653],[51.82855,4.7691],[51.88283,4.56541],[51.91961,4.51464],[51.92413,4.4782]],
    days:[
      {n:13,date:"Thu 20 Aug",title:"Zagreb → Bavaria",lat:48.1351,lng:11.5820,
       from:{name:"Zagreb",lat:45.8150,lng:15.9819},
       body:"Up through Slovenia and Austria into Germany. Munich, or just short of it.",
       pills:[["drive","~6 h"],["tent","Camp"]]},
      {n:14,date:"Fri 21 Aug",title:"→ Rotterdam",lat:51.9244,lng:4.4777,
       from:{name:"Munich",lat:48.1351,lng:11.5820},
       body:"The last push. Roughly eight hours with charging, the top of your range. Cologne is the bail-out if you'd rather split it — and with two days spare, you can.",
       pills:[["drive","~8 h"],["warn","At your limit"]]}
    ]
  }
];

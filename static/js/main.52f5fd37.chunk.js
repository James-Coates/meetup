(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(19),o=n.n(r),s=(n(26),n(2)),l=n(3),c=n(5),u=n(4),d=n(6),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={details:"",moreInfo:!1},n.handleClick=function(){n.setState({moreInfo:!0})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.event,t=e.local_date,n=e.name,i=e&&e.group?e.group.name:"",r=e.yes_rsvp_count;return a.a.createElement("div",{className:"event"},a.a.createElement("p",{className:"event-date"},t),a.a.createElement("h3",{className:"event-name"},n),a.a.createElement("p",{className:"event-group"},i),a.a.createElement("p",{className:"event-rsvp"},r),a.a.createElement("button",{className:"details-btn",onClick:this.handleClick},"Details"),a.a.createElement("div",{className:"modal ".concat(this.state.moreInfo?"":"display-hidden")}))}}]),t}(i.Component),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={events:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.events;return a.a.createElement("ul",{className:"event-list"},e.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(p,{event:e}))}))}}]),t}(i.Component),m=n(7),_=n.n(m),g=n(8),f={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1558510554e3,duration:108e5,id:"261667519",name:"Blockchain in PropTech",rsvp_limit:170,date_in_series_pattern:!1,status:"upcoming",time:15639012e5,local_date:"2019-07-23",local_time:"19:00",updated:1563820223e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:156,venue:{id:26098889,name:"Deloitte",lat:48.12923812866211,lon:11.593481063842773,repinned:!0,address_1:"Rosenheimer Pl. 4",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1460377542e3,name:"Blockchain Munich",id:19826973,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"munichblockchain",who:"members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/munichblockchain/events/261667519/",description:"<p>Despite the fact that global real estate holdings are worth hundreds of trillions of dollars the sector has long lagged behind as areas such as finance rapidly digitalized. Up until now investment in real estate has usually been the providence of the wealthy with most of the population effectively locked out of the asset class. Additionally, the industry suffers from low liquidity, high transactions costs, high barriers to entry and little transparency.</p> <p>Right now we\u2019re entering a kind of perfect storm environment where blockchain is enabling new business models while simultaneously addressing the issues endemic to the industry.</p> <p>At this event, we will see established real estate players leveraging blockchain-based for investment purposes, to streamline inefficient processes and to build innovative new business models on top of a decentralized technology stack.</p> <p>Dr. Nicolai Wendland, CIO 21st Real Estate GmbH<br/>As founder of startup Potentialspaces, and being an expert in Real Estate Economics and Real Estate Management with over 10 years project experience in Urban &amp; Real Estate Economics and Big Data Management, Nicolai is co-founder and CIO of Berlin-based 21st Real Estate GmbH. The vision of 21st Real Estate is to no small one: it\u2018s the complete digitization of dealings in real estate. In his talk, he will focus on potential applications of Blockchain technology in real estate due diligence processes.</p> <p>Nessim Djerboua, CEO EverReal<br/>Nessim is co-founder of EverReal, a platform for digital real estate transactions. Prior to starting EverReal, Nessim worked at AppDirect, a unicorn cloud commerce tech company, based in Silicon Valley where he was responsible to build out the European business. Nessim will talk about the role of Blockchain as part of the digitization process in real estate sales processes.</p> <p>+++++</p> <p>Notes on the location:<br/>- Please report to reception and sign your full name on the list, which will be synced with the Meetup participants-list. Only pre-registered participants will be admitted to the event.<br/>- The event is located on the second floor. Please use after check-in only the elevator to get to the second floor.<br/>- For organizational reasons, access to the premises is only possible between 6:45 p.m. and 7:15 p.m.<br/>- Leaving the event is possible during breaks and after the event in consultation with Deloitte staff, who must unlock the doors.<br/>- Parking at Deloitte is not possible. Parking is available for a fee at the Hilton Hotel next door.</p> ",visibility:"public"},{created:1563179258e3,duration:108e5,id:"263160408",name:" Recreating an old game with Rust",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15651936e5,local_date:"2019-08-07",local_time:"18:00",updated:1563179258e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:42,venue:{id:25852478,name:"ThoughtWorks Munich ",lat:48.135860443115234,lon:11.613353729248047,repinned:!1,address_1:"Bothestra\xdfe 11",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1431526364e3,name:"Rust Munich",id:18594917,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"rust-munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/rust-munich/events/263160408/",description:"<p>ZZT is an old DOS game that still has a small but passionate community of people that use its built-in level editor to create new games. This talk is about the process and techniques used to reverse engineer and reimplement the game's engine using Rust.</p> <p>Speaker: Joshua Worth</p> ",visibility:"public"},{created:1562057073e3,duration:72e5,id:"262805286",name:"Testing your code and your tests",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:1566405e6,local_date:"2019-08-21",local_time:"18:30",updated:1562354982e3,utc_offset:72e5,waitlist_count:20,yes_rsvp_count:40,venue:{id:26182777,name:"innoQ Deutschland GmbH",lat:48.135284423828125,lon:11.567602157592773,repinned:!0,address_1:"Kreuzstra\xdfe 16",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1344375043e3,name:"Munich Scala User Group",id:4493412,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"ScalaMuc",who:"Scalaphiles",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/ScalaMuc/events/262805286/",description:"<p>In this meetup, we will talk about testing! INNOQ will provide food &amp; drinks.</p> <p>Schedule:<br/>18:30 Doors open<br/>19:15 Daniel Westheide<br/>20:00 Break<br/>20:15 Lars Hupel</p> <p>Daniel Westheide: Testing in the postapocalyptic future<br/><a hre</p> ",visibility:"public"},{created:1556020305e3,duration:72e5,id:"260849735",name:"AfterWERK meets MUNICH STARTUP.de",date_in_series_pattern:!1,status:"upcoming",time:15640704e5,local_date:"2019-07-25",local_time:"18:00",updated:1563262205e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:145,venue:{id:19782872,name:"WERK1",lat:48.12442398071289,lon:11.607309341430664,repinned:!0,address_1:"Grafinger Stra\xdfe 6",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1458124246e3,name:"WERK1",id:19716609,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"WERK1munich",who:"movers and shakers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/WERK1munich/events/260849735/",description:"<p>Once per month, the Munich Startup Community meets at WERK1 for the famous \u201eFeierabend-Bier\u201c, snacks and wine!</p> <p>Join us for 1-2 pitches &amp; networking. If you are interested in pitching yourself, write to [masked].</p> <p>In a nutshell<br/>\u2013 Thursday, 25th July 2019 || 6pm<br/>\u2013 Informal networking with snacks &amp; drinks<br/>\u2013 Meet Munich Entrepreneurs Startups &amp; Freelancers<br/>\u2013 max. 2 startup pitches, 4 minutes each</p> ",how_to_find_us:"access by car only v.",visibility:"public"},{created:1563190897e3,duration:108e5,id:"263162450",name:"Developing IoT Tech in the 5G Era - Talks by Nokia, Sierra Wireless and Roboy",rsvp_limit:200,date_in_series_pattern:!1,status:"upcoming",time:15688233e5,local_date:"2019-09-18",local_time:"18:15",updated:1563195157e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:16,group:{created:1490683239e3,name:"Munichs robotics meetup",id:23035493,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munichs-robotics-meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munichs-robotics-meetup/events/263162450/",description:"<p>In order to participate, attendees must download a FREE TICKET here (<a href=.</p> ",visibility:"public"},{created:1550634729e3,duration:54e5,id:"hrtcsqyzkbkc",name:"Weekend Coffee for Startup People",date_in_series_pattern:!1,status:"upcoming",time:1564236e6,local_date:"2019-07-27",local_time:"16:00",updated:1550634729e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:9,venue:{id:26033912,name:"Park Caf\xe9",lat:48.1423454284668,lon:11.56462287902832,repinned:!0,address_1:"Sophienstra\xdfe 7",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1443569671e3,name:"StartupBlink M\xfcnchen",id:18980890,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"StartupBlink-Munchen",who:"StartupBlinkers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/StartupBlink-Munchen/events/hrtcsqyzkbkc/",description:"<p>Any plans for the weekend?</p> <p>This event brings together a small group of local entrepreneurs over a cup of coffee, in a relaxing and informal atmosphere. It's your chance to make new connections, share advice, and brainstorm new ideas with the people that are trying to build a new project or start a freelancing career.</p> <p>This event is self-organized for the local startup community. If you arrive first at the cafe, just pick a table and post in the group comments below where you are sitting and how to identify you (e.g. shirt color).</p> <p>Are you interested in leading this event on a weekly basis? Send us a quick email to [masked] to get more details.</p> <p>Enjoy your coffee with new friends!</p> <p>_ _ _</p> <p>Do you Telegram?<br/>Join the conversation in our global startup chat and connect with entrepreneurs from all over the world. <a h</p> ",how_to_find_us:"Know a better location for this meetup? Just send us a message, and we'll change it for you!",visibility:"public",pro_is_email_shared:!1},{created:1532377148e3,duration:18e6,id:"jbbfbqyzlbkb",name:" Monthly Bitcoin Munich Stammtisch",date_in_series_pattern:!1,status:"upcoming",time:15651936e5,local_date:"2019-08-07",local_time:"18:00",updated:1532377148e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:15,venue:{id:18883832,name:"Wirtshaus am Bavariapark",lat:48.131839752197266,lon:11.544540405273438,repinned:!1,address_1:"Theresienh\xf6he 15",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1372415991e3,name:"Bitcoin Munich",id:9128392,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Bitcoin-Munich",who:"Bitcoiners",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Bitcoin-Munich/events/jbbfbqyzlbkb/",description:"<p>(English description below.)</p> <p>\u2014</p> <p>Willkommen beim ersten und originalen Stammtisch der M\xfcnchner Bitcoin-Enthusiasten!</p> <p>Wir treffen uns zur zwanglosen Plauderei \xfcber die technischen sowie \xf6konomischen und gesellschaftlichen Aspekte von Bitcoin und anderen Kryptow\xe4hrungen. Auch werden wir wohl diskutieren, worum es bei dem ganzen Aufruhr um Blockchains eigentlich geht.</p> <p>Egal ob Neulinge oder Profis, ob Urbayer oder Weltb\xfcrger, alle sind herzlich willkommen! Ihr k\xf6nnt immer reichlich interessante Leute treffen, und ihr k\xf6nnt euch gut f\xfcr aufregende Projekte zusammenfinden!</p> <p>Neuerdings sind wir viele Leute auf viele Tische verteilt, also sucht euch einfach eine Gruppe mit gemeinsamen Interessen und gemeinsamer Sprache! Normalerweise k\xf6nnen fast alle Anwesenden jedoch Englisch sprechen.</p> <p>Ab 18.00 Uhr treffen wir uns im Wirtshaus am Bavariapark. Bei sch\xf6nem Wetter sind wir drau\xdfen im Biergarten, ansonsten im Hauptgeb\xe4ude ",how_to_find_us:"U4/U5 Schwanthalerh\xf6he, exit Eas.",visibility:"public"},{created:1563023071e3,duration:72e5,id:"263119080",name:"August Meetup - Philosophy & Physics",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:1565109e6,local_date:"2019-08-06",local_time:"18:30",updated:1563448862e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:50,venue:{id:26292223,name:"Mayflower GmbH",lat:48.14387130737305,lon:11.49881362915039,repinned:!0,address_1:"Landsberger Str. 314",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1372413211e3,name:"Munich Lambda",id:9128172,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Lambda",who:"Hackers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Lambda/events/263119080/",description:"<p>For our next meetup, we'll have two speakers using ClojureScript and Haskell to introduce us to some physical and philosophical questions that can be modeled with functional programming.</p> <p>Please be aware that the latter talk on 18th century philosopher Immanuel Kant's categorical imperative will be a mix of German and English. Code examples will likely help, and I'm sure the German speaking audience will provide clarifications for the people next to them.</p> <p>Mayflower has kindly agreed to provide us with beverages and freshly grilled barbecue on their lovely new roof terrace. Carnivore, vegetarian and vegan options will be available!</p> <p>Location: Mayflower GmbH</p> <p>Agenda:<br/>18:30 - Meet and greet with food and drinks<br/>19:00 - Thomas Sojka: The discovery of fire in ClojureScript<br/>19:30 - Questions and discussion<br/>19:45 - Cornelius Diekmann: Kants kategorischer Imperativ in Haskell [partially GERMAN!]<br/>20:15 - Questions and discussion<br/>20:30 - End</p> <p>Talk info:<br/>Title: The discovery of fire in ClojureScript<br/>Language: English<br/>Speaker: Thomas Sojka<br/>Abstract: Friction, tinder &amp; wood are classic ingredients for the creation of fire but this talk will show you how to create fire with ClojureScript, forces &amp; blending. Relearn your long lost physics knowledge with fun and take a look into the world of creative visual programming.</p> <p>Title: Kmanuel Kant, 1785; freely cited from Wikipedia]. We will take Kant's categorical Imperative and model it in Haskell. I'm not a philosopher and universal epiphany is unlikely to occur, though, modelling and debugging is still great fun.</p> <p>Image courtesy of Alex Block, alexblocktravels.com.</p> ",visibility:"public"},{created:1556284315e3,duration:72e5,id:"260941484",name:"Pitch Club Developer Edition #36",date_in_series_pattern:!1,status:"upcoming",time:15713352e5,local_date:"2019-10-17",local_time:"20:00",updated:1556284315e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:25959917,name:"Bar Ludwig II",lat:48.12186813354492,lon:11.58230972290039,repinned:!0,address_1:"Hochstra\xdfe 77",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1539021073e3,name:"Pitch Club Developer Edition M\xfcnchen",id:30141555,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Pitch-Club-Developer-Edition-Munchen",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Pitch-Club-Developer-Edition-Munchen/events/260941484/",description:"<p>Softwareentwickler und IT-Professionals aufgepasst! Pitch Club veranstaltet am 17. Oktober 2019 ab 17 Uhr in der Bar Ludwig II (Hochstra\xdfe 77, 81541 M\xfcnchen) die \u201cPitch Club Developer Edition #36\u201d in M\xfcnchen. Hierf\xfcr suchen wir noch Entwickler und Projektmanager aus dem IT-Bereich, die an dem Event teilnehmen m\xf6chten.</p> <p>Beim Event treffen gestandene Unternehmen und Startups auf IT-Professionals, die es zu \xfcberzeugen gilt. Die Unternehmen pitchen ihr HR-Konzept, Jobs und Projekte und versuchen so, die Talente f\xfcr sich zu gewinnen. Die Entwickler stellen zudem unbequeme Fragen und pr\xfcfen die Jobs auf Herz und Nieren. Am Ende m\xfcssen die Unternehmen in 1-on-1 Gespr\xe4chen nochmal alles geben, bei der alle Teilnehmer sich bei Speisen und Getr\xe4nken austauschen und gegebenenfalls schon mit ihren zuk\xfcnftigen Arbeitgebern in Kontakt treten k\xf6nnen. Nach Abschluss der Veranstaltung geht das Event ab 20 Uhr in die \xf6ffentliche Afterwork Party \xfcber.</p> <p>Wenn Du an der kostenlosen Teilnahme (inklusive Snackbuffet, Softdrinks, Bier und Long Drinks) beim invite-only Event ab 17 Uhr interessiert bist, dann bewirb Dich unter: </p> ",visibility:"public"},{created:1554896745e3,duration:396e5,id:"260503471",name:"Die IDV fordert heraus - Hacktober 2019 (Munich)",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:1571472e6,local_date:"2019-10-19",local_time:"10:00",updated:1554897967e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:7,venue:{id:25542952,name:"IDV AG",lat:48.12831497192383,lon:11.544486999511719,repinned:!0,address_1:"Theresienh\xf6he 30",city:"M\xfcnchen",country:"de",localized_country_name:"Germany",phone:"0151 51 00 06 21"},group:{created:1507618442e3,name:"IDV Challenge",id:26216189,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"IDV-Challenge",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/IDV-Challenge/events/260503471/",description:"<p>Hast du Lust, dich alleine oder im Team (max. 3) mit deiner Idee einer Softwarel\xf6sung mit anderen zu messen?</p> <p>Wenn ja, dann melde dich gleich zum IDV Hacktober 2019 </p> ",how_to_find_us:"Dein Weg zu uns: Du kannst uns bequem \xfcber die \xf6ffentlichen Verkehrsmittel U6 Haltestelle Poccistra\xdfe und U4/U5 Schwanthaler H\xf6he sowie \xfcber die Bus Linie 62/131 Hans-Fischer-Stra\xdfe bzw. die Bus Linie 53 Haltestelle Herzog-Ernst-Platz erreichen.",visibility:"public"},{created:1563598759e3,duration:108e5,id:"263308816",name:"Trading Stammtisch #003",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:15657138e5,local_date:"2019-08-13",local_time:"18:30",updated:1563606883e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,venue:{id:26150135,name:"Coffee Fellows",lat:48.1400260925293,lon:11.56225872039795,repinned:!0,address_1:"Sch\xfctzenstra\xdfe 14",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1549003633e3,name:"Trading Meetup M\xfcnchen",id:31061826,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Trading-Meetup-Munchen",who:"Trader",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Trading-Meetup-Munchen/events/263308816/",description:"<p>Stammtisch - Austausch - Netzwerken</p> ",visibility:"public"},{created:1562694388e3,duration:108e5,id:"263003823",name:"Dragon meets Weisswurst - Episode II",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:156528e7,local_date:"2019-08-08",local_time:"18:00",updated:1563181771e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:21,venue:{id:26179892,name:"WeWork",lat:48.13810348510742,lon:11.580933570861816,repinned:!0,address_1:"Neuturmstra\xdfe 5",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1426252089e3,name:"Founders Fight  Club - M\xfcnchen",id:18498550,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"FoundersFightClubMunich",who:"FounderFighters",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/FoundersFightClubMunich/events/263003823/",description:"<p>\u201cDon't fear failure. \u2014 Not failure, but low aim, is the crime. In great attempts, it is glorious even to fail.\u201d<br/>\u2015 Bruce Lee, Striking Thoughts: Bruce Lee\u2019s Wisdom for Daily Living</p> <p>Time to go east! Again. Even further - since this is...<br/>Episode II - The breath of the Dragon!</p> <p>If you want to do business or innovation in the upcoming decade, you can\u2019t miss out on saying \u201cNi Hao and Servus\u201d making new friends in China! Let the Dragon fire up the Weisswurst!</p> <p>In the last event, we've hosted over 120 people.</p> <p>But this is Episode II - things are different now!</p> <p>This event series connects like-minded entrepreneurs who want to go global and take their idea to the next level. Enter the 1.4 Billion people market. you covered.<br/>Or you just want to come for cool people and free drinks - that also works for us. Just like in the first event of the series.</p> <p>But this is Episode II - things are different now!<br/>We're powered and hosted by wework!!! Who doesn't love wework's vision and distinct style of wework's community space? This is exciting!<br/>But therefore limited to 80 people. And you do need a ticket - so please register here: ater Bay Area of China on the 13th-21st Oct 2019!</p> ",visibility:"public",pro_is_email_shared:!1},{created:1560787805e3,duration:72e5,id:"262390042",name:"Beer, Pizza and IoT @ Concept Reply",date_in_series_pattern:!1,status:"upcoming",time:15664914e5,local_date:"2019-08-22",local_time:"18:30",updated:1563876793e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:82,venue:{id:26066109,name:"Luise-Ullrich-Stra\xdfe 14",lat:48.14474868774414,lon:11.538175582885742,repinned:!0,address_1:"Luise-Ullrich-Stra\xdfe 14",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1508251656e3,name:"M\xfcnchen IoT Meetup",id:26294946,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Muenchen-IoT-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Muenchen-IoT-Meetup/events/262390042/",description:"<p>Event still in the planning. Everyone welcome. This time will go to the Reply offices at the Nove Building in Donnersbergerbr\xfccke.</p> <p>Speakers:<br/>Amer Alimanovic - Freelance Software Engineer based in Munich - The future of IoT device management with LwM2M</p> ",visibility:"public"},{created:1546431607e3,duration:108e5,id:"pfwdpqyzlbsb",name:"STEEM MUNICH meetup",date_in_series_pattern:!1,status:"upcoming",time:15657984e5,local_date:"2019-08-14",local_time:"18:00",updated:1546435949e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:3,venue:{id:1440375,name:"Paulaner Br\xe4uhaus",lat:48.126304626464844,lon:11.558951377868652,repinned:!0,address_1:"Kapuzinerplatz 5",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:148450955e4,name:"STEEM MUNICH meetup",id:21933232,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Steem-Munich",who:"Steemians",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Steem-Munich/events/pfwdpqyzlbsb/",description:"<p>Willkommen zum monatlichen STEEM-Stammtisch in M\xfcnchen. In lockerer Runde plaudern wir \xfcber die aktuellen Entwicklungen rund um die STEEM-Blockchain und die Portale steemit.com, dtube.video, busy.org, steemsports.com und steemtools.com.</p> <p>Welcome to the monthly STEEM-Meetup in Munich. In a relaxed round, we talk about the current developments around the STEEM-Blockchain and the portals steemit.com, busy.org and steemsports.com.</p> <p>Hier ein paar Reviews von den letzten Meetups der letzten Monate.</p> ",how_to_find_us:"Ask for Table",visibility:"public"},{local_time:"18:00",local_date:"2019-10-16",link:"https://www.meetup.com/Munchen-Digitale-Moglichkeiten-Meetup/events/svgmtpyznbvb/",visibility:"public_limited",group:{created:1486925552e3,name:"M\xfcnchen Digitale M\xf6glichkeiten Meetup",id:22353596,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-Digitale-Moglichkeiten-Meetup",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:1,duration:72e5,time:15712416e5,utc_offset:72e5,name:"Aktuelle Situation und Austausch im Bereich Crypto",id:"svgmtpyznbvb"},{local_time:"18:00",local_date:"2019-08-21",link:"https://www.meetup.com/Munich-Investment-Circle/events/lvpchpyzlbcc/",visibility:"public_limited",group:{created:1491074865e3,name:"Munich Investment Circle",id:23092309,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Investment-Circle",who:"Teamplayer",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:2,duration:5256e5,time:15664032e5,utc_offset:72e5,name:"Aktuelle Situation und Austausch im Bereich Crypto",id:"lvpchpyzlbcc"},{created:1558702579e3,duration:126e5,id:"261733943",name:"Munich Quantum Technologies Meetup",rsvp_limit:120,date_in_series_pattern:!1,status:"upcoming",time:15640722e5,local_date:"2019-07-25",local_time:"18:30",rsvp_close_offset:"PT90H31M",updated:1563784369e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:81,venue:{id:26051517,name:"Microsoft Germany GmbH",lat:48.1776237487793,lon:11.593453407287598,repinned:!0,address_1:"Walter-Gropius-Stra\xdfe 5",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1550554045e3,name:"Munich Quantum Technologies",id:31200770,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Quantum-Technologies",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Quantum-Technologies/events/261733943/",description:"<p>During this Meetup, we will have invited speakers on different topics in Quantum Technologies. Opportunity for Networking is present during the break and at the open end. Pizza and drinks are likely provided. For info on our previous event, please visit n / Networking</p> ",how_to_find_us:"We will be waiting for you in the reception area.",visibility:"public"},{created:1563281301e3,duration:108e5,id:"263192153",name:"AfterWERK - Werk's QuizZz",date_in_series_pattern:!1,status:"upcoming",time:15664896e5,local_date:"2019-08-22",local_time:"18:00",updated:1563431482e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:18,venue:{id:26521298,name:"Atelierstra\xdfe 29",lat:48.12374496459961,lon:11.608219146728516,repinned:!1,address_1:"Atelierstra\xdfe 29",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1458124246e3,name:"WERK1",id:19716609,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"WERK1munich",who:"movers and shakers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/WERK1munich/events/263192153/",description:"<p>Join our WERK's Quiz Night and show off your Werksviertel and WERK1 knowledge to win a great prize!</p> <p>This time, we will deviate slightly from the usual setting. While there won't be any startup pitches, you'll still have the opportunity to network with like-minded people in a relaxed atmosphere.</p> <p>You will have to form teams of up to 2 people to answer Werksviertel and WERK1 related questions - all over beer, snacks, and wine!</p> <p>In a nutshell<br/>\u2013 Thursday, 22th August 2019 || 6pm<br/>\u2013 Meet Munich Entrepreneurs Startups &amp; Freelancers<br/>\u2013 Learn more about the Werksviertel history &amp; WERK1 ecosystem</p> ",how_to_find_us:"access by car only vi.",visibility:"public"},{created:1532377148e3,duration:18e6,id:"jbbfbqyznbdb",name:" Monthly Bitcoin Munich Stammtisch",date_in_series_pattern:!1,status:"upcoming",time:1570032e6,local_date:"2019-10-02",local_time:"18:00",updated:1532377148e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:5,venue:{id:18883832,name:"Wirtshaus am Bavariapark",lat:48.131839752197266,lon:11.544540405273438,repinned:!1,address_1:"Theresienh\xf6he 15",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1372415991e3,name:"Bitcoin Munich",id:9128392,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Bitcoin-Munich",who:"Bitcoiners",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Bitcoin-Munich/events/jbbfbqyznbdb/",description:"<p>(English description below.)</p> <p>\u2014</p> <p>Willkommen beim ersten und originalen Stammtisch der M\xfcnchner Bitcoin-Enthusiasten!</p> <p>Wir treffen uns zur zwanglosen Plauderei \xfcber die technischen sowie \xf6konomischen und gesellschaftlichen Aspekte von Bitcoin und anderen Kryptow\xe4hrungen. Auch werden wir wohl diskutieren, worum es bei dem ganzen Aufruhr um Blockchains eigentlich geht.</p> <p>Egal ob Neulinge oder Profis, ob Urbayer oder Weltb\xfcrger, alle sind herzlich willkommen! Ihr k\xf6nnt immer reichlich interessante Leute treffen, und ihr k\xf6nnt euch gut f\xfcr aufregende Projekte zusammenfinden!</p> <p>Neuerdings sind wir viele Leute auf viele Tische verteilt, also sucht euch einfach eine Gruppe mit gemeinsamen Interessen und gemeinsamer Sprache! Normalerweise k\xf6nnen fast alle Anwesenden jedoch Englisch sprechen.</p> <p>Ab 18.00 Uhr treffen wir uns im Wirtshaus am Bavariapark. Bei sch\xf6nem Wetter sind wir drau\xdfen im Biergarten, ansonsten im Hauptgeb\xe4ude.</p> ",how_to_find_us:"U4/U5 Schwanthalerh\xf6he, exit Ea South through the Verkehrsmuseum towards the Wirtshaus/Biergarten area. // Fragt das Personal dort dann nach // Then ask the staff there.",visibility:"public"}]},y=n(9),b=n.n(y);function w(){return(w=Object(g.a)(_.a.mark(function e(t){var n,i,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,k();case 4:if(!(n=e.sent)){e.next=11;break}return i="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,b.a.get(i);case 9:return a=e.sent,e.abrupt("return",a.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function v(){return(v=Object(g.a)(_.a.mark(function e(t,n){var i,a,r;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",f.events);case 2:return e.next=4,k();case 4:if(!(i=e.sent)){e.next=12;break}return a="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(a+="&lat="+t+"&lon="+n),e.next=10,b.a.get(a);case 10:return r=e.sent,e.abrupt("return",r.data.events);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){var e=localStorage.getItem("access_token"),t=localStorage.getItem("refresh_token"),n=localStorage.getItem("last_saved_time");if(!e){var i=new URLSearchParams(window.location.search).get("code");return i?M("get",i):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=hi1r286u66ertam55qqihmjp1b&response_type=code&redirect_uri=https://james-coates.co.uk/meetup/",null)}return e&&Date.now()-n<36e5?e:M("renew",t)}function M(e,t){return E.apply(this,arguments)}function E(){return(E=Object(g.a)(_.a.mark(function e(t,n){var i,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?i="https://m49ckcqvs2.execute-api.eu-west-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(i="https://m49ckcqvs2.execute-api.eu-west-2.amazonaws.com/dev/api/refresh/"+n),e.next=3,b.a.get(i);case 3:return a=e.sent,localStorage.setItem("access_token",a.data.access_token),localStorage.setItem("refresh_token",a.data.refresh_token),localStorage.setItem("last_saved_time",a.data.last_saved_time),e.abrupt("return",a.data.access_token);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={query:"",suggestions:[]},n.handleInputChange=function(e){var t=e.target.value;n.setState({query:t}),function(e){return w.apply(this,arguments)}(t).then(function(e){return n.setState({suggestions:e})})},n.handleSuggestionClick=function(e,t,i){n.setState({query:e}),n.props.updateEvents(t,i),n.setState({suggestions:[]})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"city-search"},a.a.createElement("input",{type:"text",className:"city",value:this.state.query,placeholder:"City",onChange:this.handleInputChange}),a.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return a.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleSuggestionClick(t.name_string,1.1,1.2)}},t.name_string)})))}}]),t}(i.Component),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={number:32},n.handleChange=function(e){var t=e.target.value;n.setState({number:t})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"number-of-events"},a.a.createElement("input",{className:"number",type:"number",value:this.state.number,onChange:this.handleChange}))}}]),t}(i.Component),B=(n(45),function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={events:[]},n.updateEvents=function(e,t){(function(e,t){return v.apply(this,arguments)})(e,t).then(function(e){return n.setState({events:e})})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(z,{updateEvents:this.updateEvents}),a.a.createElement(h,{events:this.state.events}),a.a.createElement(S,null))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.52f5fd37.chunk.js.map
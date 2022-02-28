(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),c=t(13),o=t.n(c),l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),c(e),o(e)}))},r=t(4),j=t(8),s=t(2),u=t(9),d=t(3),h=t(6),b="[UI] Set Error",O="[UI] Remove Error",p="[UI] Start Loading",m="[UI] Finish Loading",v="[COUNTRIES] Get Countries",x="[COUNTRIES] Get Country Id",S="[COUNTRIES] Search Country",C="[COUNTRIES] Get Continent",f="[COUNTRIES] Get Activities",N="[COUNTRIES] Get Countries Ordered",A="[ACTIVITY] Add Activity",g="[ACTIVITY] Get Activities",M="https://henry-countries-app.herokuapp.com/api/activity",y=function(e){return{type:b,payload:e}},R=function(){return{type:O}},I=function(){return{type:p}},T=function(){return{type:m}},E=t(0),B=function(){var e=Object(s.f)(),n=Object(r.b)(),t=Object(r.c)((function(e){return e.activities})).activities,i=Object(r.c)((function(e){return e.ui})).msgError;console.log(t);var c=Object(a.useState)({values:[]}),o=Object(h.a)(c,2),l=o[0],j=o[1],b=Object(a.useState)({name:"",difficulty:"",duration:"",season:""}),O=Object(h.a)(b,2),p=O[0],m=O[1],v=p.name,x=p.difficulty,S=p.duration,C=p.season;console.log(p);var f=function(e){m(Object(d.a)(Object(d.a)({},p),{},Object(u.a)({},e.target.name,e.target.value)))},N=function(){return v.trim().length<3?(n(y("Error: has to be at least 3 characters")),!1):/[^a-zA-Z0-9 ]+$/gm.test(v)?(n(y("Error: the activity name must not have special characters")),!1):0===x.length||x<0||x>5?(n(y("Error: the range is between one and five")),!1):0===S.length||S<=0?(n(y("Error: duration must be greater than zero")),!1):0===C.length?(n(y("Error: select a season of the year")),!1):0===l.values.length?(n(y("Error: select at least one country for said activity")),!1):(n(R()),!0)};return Object(E.jsxs)("div",{className:"activity",children:[Object(E.jsx)("h2",{className:"activity__title",children:"Add New Activity"}),i&&Object(E.jsx)("p",{className:"error",children:i}),Object(E.jsxs)("form",{className:"activity__form",children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"Activity name: "}),Object(E.jsx)("input",{type:"text",name:"name",onChange:f,value:v,placeholder:"Write the activity name"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"Difficulty: "}),Object(E.jsx)("input",{type:"number",name:"difficulty",onChange:f,value:x,min:1,max:5,placeholder:"Between 1 and 5"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"Duration (hs): "}),Object(E.jsx)("input",{type:"number",min:1,name:"duration",onChange:f,value:S,placeholder:"Duration in hours of the activity"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"Season: "}),Object(E.jsxs)("select",{id:"season",name:"season",onChange:f,children:[Object(E.jsx)("option",{value:"-",children:"Select a station"}),Object(E.jsx)("option",{value:"summer",children:"Summer"}),Object(E.jsx)("option",{value:"fall",children:"Fall"}),Object(E.jsx)("option",{value:"winter",children:"Winter"}),Object(E.jsx)("option",{value:"spring",children:"Spring"})]})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:"Select countries related to this activity:"}),Object(E.jsxs)("select",{multiple:!0,id:"countries",required:"",name:"countryId",size:"10",onChange:function(e){var n=Array.from(e.target.selectedOptions,(function(e){return e.value}));j({values:n})},children:[Object(E.jsx)("option",{name:"AFG",value:"AFG",children:"Afghanistan"}),Object(E.jsx)("option",{name:"ALB",value:"ALB",children:"Albania"}),Object(E.jsx)("option",{name:"DZA",value:"DZA",children:"Algeria"}),Object(E.jsx)("option",{name:"ASM",value:"ASM",children:"American Samoa"}),Object(E.jsx)("option",{name:"AND",value:"AND",children:"Andorra"}),Object(E.jsx)("option",{name:"AGO",value:"AGO",children:"Angola"}),Object(E.jsx)("option",{name:"AIA",value:"AIA",children:"Anguilla"}),Object(E.jsx)("option",{name:"ATA",value:"ATA",children:"Antarctica"}),Object(E.jsx)("option",{name:"ATG",value:"ATG",children:"Antigua and Barbuda"}),Object(E.jsx)("option",{name:"ARG",value:"ARG",children:"Argentina"}),Object(E.jsx)("option",{name:"ARM",value:"ARM",children:"Armenia"}),Object(E.jsx)("option",{name:"ABW",value:"ABW",children:"Aruba"}),Object(E.jsx)("option",{name:"AUS",value:"AUS",children:"Australia"}),Object(E.jsx)("option",{name:"AUT",value:"AUT",children:"Austria"}),Object(E.jsx)("option",{name:"AZE",value:"AZE",children:"Azerbaijan"}),Object(E.jsx)("option",{name:"BHS",value:"BHS",children:"Bahamas"}),Object(E.jsx)("option",{name:"BHR",value:"BHR",children:"Bahrain"}),Object(E.jsx)("option",{name:"BGD",value:"BGD",children:"Bangladesh"}),Object(E.jsx)("option",{name:"BRB",value:"BRB",children:"Barbados"}),Object(E.jsx)("option",{name:"BLR",value:"BLR",children:"Belarus"}),Object(E.jsx)("option",{name:"BEL",value:"BEL",children:"Belgium"}),Object(E.jsx)("option",{name:"BLZ",value:"BLZ",children:"Belize"}),Object(E.jsx)("option",{name:"BEN",value:"BEN",children:"Benin"}),Object(E.jsx)("option",{name:"BMU",value:"BMU",children:"Bermuda"}),Object(E.jsx)("option",{name:"BTN",value:"BTN",children:"Bhutan"}),Object(E.jsx)("option",{name:"BOL",value:"BOL",children:"Bolivia"}),Object(E.jsx)("option",{name:"BIH",value:"BIH",children:"Bosnia and Herzegovina"}),Object(E.jsx)("option",{name:"BWA",value:"BWA",children:"Botswana"}),Object(E.jsx)("option",{name:"BVT",value:"BVT",children:"Bouvet Island"}),Object(E.jsx)("option",{name:"BRA",value:"BRA",children:"Brazil"}),Object(E.jsx)("option",{name:"IOT",value:"IOT",children:"British Indian Ocean Territory"}),Object(E.jsx)("option",{name:"VGB",value:"VGB",children:"British Virgin Islands"}),Object(E.jsx)("option",{name:"BRN",value:"BRN",children:"Brunei"}),Object(E.jsx)("option",{name:"BGR",value:"BGR",children:"Bulgaria"}),Object(E.jsx)("option",{name:"BFA",value:"BFA",children:"Burkina Faso"}),Object(E.jsx)("option",{name:"BDI",value:"BDI",children:"Burundi"}),Object(E.jsx)("option",{name:"KHM",value:"KHM",children:"Cambodia"}),Object(E.jsx)("option",{name:"CMR",value:"CMR",children:"Cameroon"}),Object(E.jsx)("option",{name:"CAN",value:"CAN",children:"Canada"}),Object(E.jsx)("option",{name:"CPV",value:"CPV",children:"Cape Verde"}),Object(E.jsx)("option",{name:"BES",value:"BES",children:"Caribbean Netherlands"}),Object(E.jsx)("option",{name:"CYM",value:"CYM",children:"Cayman Islands"}),Object(E.jsx)("option",{name:"CAF",value:"CAF",children:"Central African Republic"}),Object(E.jsx)("option",{name:"TCD",value:"TCD",children:"Chad"}),Object(E.jsx)("option",{name:"CHL",value:"CHL",children:"Chile"}),Object(E.jsx)("option",{name:"CHN",value:"CHN",children:"China"}),Object(E.jsx)("option",{name:"CXR",value:"CXR",children:"Christmas Island"}),Object(E.jsx)("option",{name:"CCK",value:"CCK",children:"Cocos (Keeling) Islands"}),Object(E.jsx)("option",{name:"COL",value:"COL",children:"Colombia"}),Object(E.jsx)("option",{name:"COM",value:"COM",children:"Comoros"}),Object(E.jsx)("option",{name:"COK",value:"COK",children:"Cook Islands"}),Object(E.jsx)("option",{name:"CRI",value:"CRI",children:"Costa Rica"}),Object(E.jsx)("option",{name:"HRV",value:"HRV",children:"Croatia"}),Object(E.jsx)("option",{name:"CUB",value:"CUB",children:"Cuba"}),Object(E.jsx)("option",{name:"CUW",value:"CUW",children:"Cura\xe7ao"}),Object(E.jsx)("option",{name:"CYP",value:"CYP",children:"Cyprus"}),Object(E.jsx)("option",{name:"CZE",value:"CZE",children:"Czechia"}),Object(E.jsx)("option",{name:"COD",value:"COD",children:"DR Congo"}),Object(E.jsx)("option",{name:"DNK",value:"DNK",children:"Denmark"}),Object(E.jsx)("option",{name:"DJI",value:"DJI",children:"Djibouti"}),Object(E.jsx)("option",{name:"DMA",value:"DMA",children:"Dominica"}),Object(E.jsx)("option",{name:"DOM",value:"DOM",children:"Dominican Republic"}),Object(E.jsx)("option",{name:"ECU",value:"ECU",children:"Ecuador"}),Object(E.jsx)("option",{name:"EGY",value:"EGY",children:"Egypt"}),Object(E.jsx)("option",{name:"SLV",value:"SLV",children:"El Salvador"}),Object(E.jsx)("option",{name:"GNQ",value:"GNQ",children:"Equatorial Guinea"}),Object(E.jsx)("option",{name:"ERI",value:"ERI",children:"Eritrea"}),Object(E.jsx)("option",{name:"EST",value:"EST",children:"Estonia"}),Object(E.jsx)("option",{name:"SWZ",value:"SWZ",children:"Eswatini"}),Object(E.jsx)("option",{name:"ETH",value:"ETH",children:"Ethiopia"}),Object(E.jsx)("option",{name:"FLK",value:"FLK",children:"Falkland Islands"}),Object(E.jsx)("option",{name:"FRO",value:"FRO",children:"Faroe Islands"}),Object(E.jsx)("option",{name:"FJI",value:"FJI",children:"Fiji"}),Object(E.jsx)("option",{name:"FIN",value:"FIN",children:"Finland"}),Object(E.jsx)("option",{name:"FRA",value:"FRA",children:"France"}),Object(E.jsx)("option",{name:"GUF",value:"GUF",children:"French Guiana"}),Object(E.jsx)("option",{name:"PYF",value:"PYF",children:"French Polynesia"}),Object(E.jsx)("option",{name:"ATF",value:"ATF",children:"French Southern and Antarctic Lands"}),Object(E.jsx)("option",{name:"GAB",value:"GAB",children:"Gabon"}),Object(E.jsx)("option",{name:"GMB",value:"GMB",children:"Gambia"}),Object(E.jsx)("option",{name:"GEO",value:"GEO",children:"Georgia"}),Object(E.jsx)("option",{name:"DEU",value:"DEU",children:"Germany"}),Object(E.jsx)("option",{name:"GHA",value:"GHA",children:"Ghana"}),Object(E.jsx)("option",{name:"GIB",value:"GIB",children:"Gibraltar"}),Object(E.jsx)("option",{name:"GRC",value:"GRC",children:"Greece"}),Object(E.jsx)("option",{name:"GRL",value:"GRL",children:"Greenland"}),Object(E.jsx)("option",{name:"GRD",value:"GRD",children:"Grenada"}),Object(E.jsx)("option",{name:"GLP",value:"GLP",children:"Guadeloupe"}),Object(E.jsx)("option",{name:"GUM",value:"GUM",children:"Guam"}),Object(E.jsx)("option",{name:"GTM",value:"GTM",children:"Guatemala"}),Object(E.jsx)("option",{name:"GGY",value:"GGY",children:"Guernsey"}),Object(E.jsx)("option",{name:"GIN",value:"GIN",children:"Guinea"}),Object(E.jsx)("option",{name:"GNB",value:"GNB",children:"Guinea-Bissau"}),Object(E.jsx)("option",{name:"GUY",value:"GUY",children:"Guyana"}),Object(E.jsx)("option",{name:"HTI",value:"HTI",children:"Haiti"}),Object(E.jsx)("option",{name:"HMD",value:"HMD",children:"Heard Island and McDonald Islands"}),Object(E.jsx)("option",{name:"HND",value:"HND",children:"Honduras"}),Object(E.jsx)("option",{name:"HKG",value:"HKG",children:"Hong Kong"}),Object(E.jsx)("option",{name:"HUN",value:"HUN",children:"Hungary"}),Object(E.jsx)("option",{name:"ISL",value:"ISL",children:"Iceland"}),Object(E.jsx)("option",{name:"IND",value:"IND",children:"India"}),Object(E.jsx)("option",{name:"IDN",value:"IDN",children:"Indonesia"}),Object(E.jsx)("option",{name:"IRN",value:"IRN",children:"Iran"}),Object(E.jsx)("option",{name:"IRQ",value:"IRQ",children:"Iraq"}),Object(E.jsx)("option",{name:"IRL",value:"IRL",children:"Ireland"}),Object(E.jsx)("option",{name:"IMN",value:"IMN",children:"Isle of Man"}),Object(E.jsx)("option",{name:"ISR",value:"ISR",children:"Israel"}),Object(E.jsx)("option",{name:"ITA",value:"ITA",children:"Italy"}),Object(E.jsx)("option",{name:"CIV",value:"CIV",children:"Ivory Coast"}),Object(E.jsx)("option",{name:"JAM",value:"JAM",children:"Jamaica"}),Object(E.jsx)("option",{name:"JPN",value:"JPN",children:"Japan"}),Object(E.jsx)("option",{name:"JEY",value:"JEY",children:"Jersey"}),Object(E.jsx)("option",{name:"JOR",value:"JOR",children:"Jordan"}),Object(E.jsx)("option",{name:"KAZ",value:"KAZ",children:"Kazakhstan"}),Object(E.jsx)("option",{name:"KEN",value:"KEN",children:"Kenya"}),Object(E.jsx)("option",{name:"KIR",value:"KIR",children:"Kiribati"}),Object(E.jsx)("option",{name:"UNK",value:"UNK",children:"Kosovo"}),Object(E.jsx)("option",{name:"KWT",value:"KWT",children:"Kuwait"}),Object(E.jsx)("option",{name:"KGZ",value:"KGZ",children:"Kyrgyzstan"}),Object(E.jsx)("option",{name:"LAO",value:"LAO",children:"Laos"}),Object(E.jsx)("option",{name:"LVA",value:"LVA",children:"Latvia"}),Object(E.jsx)("option",{name:"LBN",value:"LBN",children:"Lebanon"}),Object(E.jsx)("option",{name:"LSO",value:"LSO",children:"Lesotho"}),Object(E.jsx)("option",{name:"LBR",value:"LBR",children:"Liberia"}),Object(E.jsx)("option",{name:"LBY",value:"LBY",children:"Libya"}),Object(E.jsx)("option",{name:"LIE",value:"LIE",children:"Liechtenstein"}),Object(E.jsx)("option",{name:"LTU",value:"LTU",children:"Lithuania"}),Object(E.jsx)("option",{name:"LUX",value:"LUX",children:"Luxembourg"}),Object(E.jsx)("option",{name:"MAC",value:"MAC",children:"Macau"}),Object(E.jsx)("option",{name:"MDG",value:"MDG",children:"Madagascar"}),Object(E.jsx)("option",{name:"MWI",value:"MWI",children:"Malawi"}),Object(E.jsx)("option",{name:"MYS",value:"MYS",children:"Malaysia"}),Object(E.jsx)("option",{name:"MDV",value:"MDV",children:"Maldives"}),Object(E.jsx)("option",{name:"MLI",value:"MLI",children:"Mali"}),Object(E.jsx)("option",{name:"MLT",value:"MLT",children:"Malta"}),Object(E.jsx)("option",{name:"MHL",value:"MHL",children:"Marshall Islands"}),Object(E.jsx)("option",{name:"MTQ",value:"MTQ",children:"Martinique"}),Object(E.jsx)("option",{name:"MRT",value:"MRT",children:"Mauritania"}),Object(E.jsx)("option",{name:"MUS",value:"MUS",children:"Mauritius"}),Object(E.jsx)("option",{name:"MYT",value:"MYT",children:"Mayotte"}),Object(E.jsx)("option",{name:"MEX",value:"MEX",children:"Mexico"}),Object(E.jsx)("option",{name:"FSM",value:"FSM",children:"Micronesia"}),Object(E.jsx)("option",{name:"MDA",value:"MDA",children:"Moldova"}),Object(E.jsx)("option",{name:"MCO",value:"MCO",children:"Monaco"}),Object(E.jsx)("option",{name:"MNG",value:"MNG",children:"Mongolia"}),Object(E.jsx)("option",{name:"MNE",value:"MNE",children:"Montenegro"}),Object(E.jsx)("option",{name:"MSR",value:"MSR",children:"Montserrat"}),Object(E.jsx)("option",{name:"MAR",value:"MAR",children:"Morocco"}),Object(E.jsx)("option",{name:"MOZ",value:"MOZ",children:"Mozambique"}),Object(E.jsx)("option",{name:"MMR",value:"MMR",children:"Myanmar"}),Object(E.jsx)("option",{name:"NAM",value:"NAM",children:"Namibia"}),Object(E.jsx)("option",{name:"NRU",value:"NRU",children:"Nauru"}),Object(E.jsx)("option",{name:"NPL",value:"NPL",children:"Nepal"}),Object(E.jsx)("option",{name:"NLD",value:"NLD",children:"Netherlands"}),Object(E.jsx)("option",{name:"NCL",value:"NCL",children:"New Caledonia"}),Object(E.jsx)("option",{name:"NZL",value:"NZL",children:"New Zealand"}),Object(E.jsx)("option",{name:"NIC",value:"NIC",children:"Nicaragua"}),Object(E.jsx)("option",{name:"NER",value:"NER",children:"Niger"}),Object(E.jsx)("option",{name:"NGA",value:"NGA",children:"Nigeria"}),Object(E.jsx)("option",{name:"NIU",value:"NIU",children:"Niue"}),Object(E.jsx)("option",{name:"NFK",value:"NFK",children:"Norfolk Island"}),Object(E.jsx)("option",{name:"PRK",value:"PRK",children:"North Korea"}),Object(E.jsx)("option",{name:"MKD",value:"MKD",children:"North Macedonia"}),Object(E.jsx)("option",{name:"MNP",value:"MNP",children:"Northern Mariana Islands"}),Object(E.jsx)("option",{name:"NOR",value:"NOR",children:"Norway"}),Object(E.jsx)("option",{name:"OMN",value:"OMN",children:"Oman"}),Object(E.jsx)("option",{name:"PAK",value:"PAK",children:"Pakistan"}),Object(E.jsx)("option",{name:"PLW",value:"PLW",children:"Palau"}),Object(E.jsx)("option",{name:"PSE",value:"PSE",children:"Palestine"}),Object(E.jsx)("option",{name:"PAN",value:"PAN",children:"Panama"}),Object(E.jsx)("option",{name:"PNG",value:"PNG",children:"Papua New Guinea"}),Object(E.jsx)("option",{name:"PRY",value:"PRY",children:"Paraguay"}),Object(E.jsx)("option",{name:"PER",value:"PER",children:"Peru"}),Object(E.jsx)("option",{name:"PHL",value:"PHL",children:"Philippines"}),Object(E.jsx)("option",{name:"PCN",value:"PCN",children:"Pitcairn Islands"}),Object(E.jsx)("option",{name:"POL",value:"POL",children:"Poland"}),Object(E.jsx)("option",{name:"PRT",value:"PRT",children:"Portugal"}),Object(E.jsx)("option",{name:"PRI",value:"PRI",children:"Puerto Rico"}),Object(E.jsx)("option",{name:"QAT",value:"QAT",children:"Qatar"}),Object(E.jsx)("option",{name:"COG",value:"COG",children:"Republic of the Congo"}),Object(E.jsx)("option",{name:"ROU",value:"ROU",children:"Romania"}),Object(E.jsx)("option",{name:"RUS",value:"RUS",children:"Russia"}),Object(E.jsx)("option",{name:"RWA",value:"RWA",children:"Rwanda"}),Object(E.jsx)("option",{name:"REU",value:"REU",children:"R\xe9union"}),Object(E.jsx)("option",{name:"BLM",value:"BLM",children:"Saint Barth\xe9lemy"}),Object(E.jsx)("option",{name:"SHN",value:"SHN",children:"Saint Helena, Ascension and Tristan da Cunha"}),Object(E.jsx)("option",{name:"KNA",value:"KNA",children:"Saint Kitts and Nevis"}),Object(E.jsx)("option",{name:"LCA",value:"LCA",children:"Saint Lucia"}),Object(E.jsx)("option",{name:"MAF",value:"MAF",children:"Saint Martin"}),Object(E.jsx)("option",{name:"SPM",value:"SPM",children:"Saint Pierre and Miquelon"}),Object(E.jsx)("option",{name:"VCT",value:"VCT",children:"Saint Vincent and the Grenadines"}),Object(E.jsx)("option",{name:"WSM",value:"WSM",children:"Samoa"}),Object(E.jsx)("option",{name:"SMR",value:"SMR",children:"San Marino"}),Object(E.jsx)("option",{name:"SAU",value:"SAU",children:"Saudi Arabia"}),Object(E.jsx)("option",{name:"SEN",value:"SEN",children:"Senegal"}),Object(E.jsx)("option",{name:"SRB",value:"SRB",children:"Serbia"}),Object(E.jsx)("option",{name:"SYC",value:"SYC",children:"Seychelles"}),Object(E.jsx)("option",{name:"SLE",value:"SLE",children:"Sierra Leone"}),Object(E.jsx)("option",{name:"SGP",value:"SGP",children:"Singapore"}),Object(E.jsx)("option",{name:"SXM",value:"SXM",children:"Sint Maarten"}),Object(E.jsx)("option",{name:"SVK",value:"SVK",children:"Slovakia"}),Object(E.jsx)("option",{name:"SVN",value:"SVN",children:"Slovenia"}),Object(E.jsx)("option",{name:"SLB",value:"SLB",children:"Solomon Islands"}),Object(E.jsx)("option",{name:"SOM",value:"SOM",children:"Somalia"}),Object(E.jsx)("option",{name:"ZAF",value:"ZAF",children:"South Africa"}),Object(E.jsx)("option",{name:"SGS",value:"SGS",children:"South Georgia"}),Object(E.jsx)("option",{name:"KOR",value:"KOR",children:"South Korea"}),Object(E.jsx)("option",{name:"SSD",value:"SSD",children:"South Sudan"}),Object(E.jsx)("option",{name:"ESP",value:"ESP",children:"Spain"}),Object(E.jsx)("option",{name:"LKA",value:"LKA",children:"Sri Lanka"}),Object(E.jsx)("option",{name:"SDN",value:"SDN",children:"Sudan"}),Object(E.jsx)("option",{name:"SUR",value:"SUR",children:"Suriname"}),Object(E.jsx)("option",{name:"SJM",value:"SJM",children:"Svalbard and Jan Mayen"}),Object(E.jsx)("option",{name:"SWE",value:"SWE",children:"Sweden"}),Object(E.jsx)("option",{name:"CHE",value:"CHE",children:"Switzerland"}),Object(E.jsx)("option",{name:"SYR",value:"SYR",children:"Syria"}),Object(E.jsx)("option",{name:"STP",value:"STP",children:"S\xe3o Tom\xe9 and Pr\xedncipe"}),Object(E.jsx)("option",{name:"TWN",value:"TWN",children:"Taiwan"}),Object(E.jsx)("option",{name:"TJK",value:"TJK",children:"Tajikistan"}),Object(E.jsx)("option",{name:"TZA",value:"TZA",children:"Tanzania"}),Object(E.jsx)("option",{name:"THA",value:"THA",children:"Thailand"}),Object(E.jsx)("option",{name:"TLS",value:"TLS",children:"Timor-Leste"}),Object(E.jsx)("option",{name:"TGO",value:"TGO",children:"Togo"}),Object(E.jsx)("option",{name:"TKL",value:"TKL",children:"Tokelau"}),Object(E.jsx)("option",{name:"TON",value:"TON",children:"Tonga"}),Object(E.jsx)("option",{name:"TTO",value:"TTO",children:"Trinidad and Tobago"}),Object(E.jsx)("option",{name:"TUN",value:"TUN",children:"Tunisia"}),Object(E.jsx)("option",{name:"TUR",value:"TUR",children:"Turkey"}),Object(E.jsx)("option",{name:"TKM",value:"TKM",children:"Turkmenistan"}),Object(E.jsx)("option",{name:"TCA",value:"TCA",children:"Turks and Caicos Islands"}),Object(E.jsx)("option",{name:"TUV",value:"TUV",children:"Tuvalu"}),Object(E.jsx)("option",{name:"UGA",value:"UGA",children:"Uganda"}),Object(E.jsx)("option",{name:"UKR",value:"UKR",children:"Ukraine"}),Object(E.jsx)("option",{name:"ARE",value:"ARE",children:"United Arab Emirates"}),Object(E.jsx)("option",{name:"GBR",value:"GBR",children:"United Kingdom"}),Object(E.jsx)("option",{name:"USA",value:"USA",children:"United States"}),Object(E.jsx)("option",{name:"UMI",value:"UMI",children:"United States Minor Outlying Islands"}),Object(E.jsx)("option",{name:"VIR",value:"VIR",children:"United States Virgin Islands"}),Object(E.jsx)("option",{name:"URY",value:"URY",children:"Uruguay"}),Object(E.jsx)("option",{name:"UZB",value:"UZB",children:"Uzbekistan"}),Object(E.jsx)("option",{name:"VUT",value:"VUT",children:"Vanuatu"}),Object(E.jsx)("option",{name:"VAT",value:"VAT",children:"Vatican City"}),Object(E.jsx)("option",{name:"VEN",value:"VEN",children:"Venezuela"}),Object(E.jsx)("option",{name:"VNM",value:"VNM",children:"Vietnam"}),Object(E.jsx)("option",{name:"WLF",value:"WLF",children:"Wallis and Futuna"}),Object(E.jsx)("option",{name:"ESH",value:"ESH",children:"Western Sahara"}),Object(E.jsx)("option",{name:"YEM",value:"YEM",children:"Yemen"}),Object(E.jsx)("option",{name:"ZMB",value:"ZMB",children:"Zambia"}),Object(E.jsx)("option",{name:"ZWE",value:"ZWE",children:"Zimbabwe"}),Object(E.jsx)("option",{name:"ALA",value:"ALA",children:"\xc5land Islands"})]})]}),Object(E.jsx)("button",{type:"submit",onClick:function(t){var a;t.preventDefault(),N()&&(n((a={name:v,difficulty:x,duration:S,season:C,countryId:l.values},function(e){fetch("".concat(M),{method:"POST",body:JSON.stringify(a),mode:"cors",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(n){alert(n.message),e({type:A,payload:a.name})}))})),e("/countries"))},children:"Create"})]})]})},G="https://henry-countries-app.herokuapp.com/api/countries",L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){t(I()),fetch("".concat(G,"?continent=").concat(e)).then((function(e){return e.json()})).then((function(e){"az name"===n?e=e.sort((function(e,n){return e.name.localeCompare(n.name)})):"za name"===n?e=e.sort((function(e,n){return n.name.localeCompare(e.name)})):"higher population"===n?e=e.sort((function(e,n){return n.population-e.population})):"lower population"===n&&(e=e.sort((function(e,n){return e.population-n.population}))),t({type:C,payload:e}),t(T())}))}},U=function(e,n){return function(t){t(I()),fetch("".concat(G,"?order=").concat(e,"&param=").concat(n)).then((function(e){return e.json()})).then((function(e){t({type:N,payload:e}),t(T())}))}},P=function(e){var n=e.activity;return Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Name: "})," ",n.name]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Difficulty: "})," ",n.difficulty]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Duration (hs): "})," ",n.duration]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Season: "})," ",n.season]})]},n.id)},D=function(){return Object(E.jsxs)("figure",{className:"loader",children:[Object(E.jsx)("div",{className:"dot white"}),Object(E.jsx)("div",{className:"dot"}),Object(E.jsx)("div",{className:"dot"}),Object(E.jsx)("div",{className:"dot"}),Object(E.jsx)("div",{className:"dot"})]})},K=function(){var e=Object(s.g)().id,n=Object(s.f)(),t=Object(r.b)(),i=Object(r.c)((function(e){return e.ui})).loading,c=Object(r.c)((function(e){return e.countries})).countryId;Object(a.useEffect)((function(){t(function(e){return function(n){n(I()),fetch("".concat(G,"/").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:x,payload:e}),n(T())}))}}(e))}),[t,e]),console.log(c);return i?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:"country",children:[Object(E.jsx)("button",{onClick:function(){n(-1)},children:"Back"}),Object(E.jsxs)("div",{className:"country__description",children:[Object(E.jsx)("figure",{className:"country__image",children:Object(E.jsx)("img",{src:c.flags,alt:c.name})}),Object(E.jsxs)("div",{className:"country__body",children:[Object(E.jsx)("h3",{children:c.name}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Codigo: "})," ",c.id]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Capital: "})," ",c.capital]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Subregion: "})," ",c.subregion]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Area: "})," ",c.area]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Population: "})," ",c.population]}),void 0!==c.activities&&0===c.activities.length?Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Activities: "})," country still without activities"]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("p",{children:Object(E.jsx)("span",{children:"Activities: "})}),void 0!==c.activities&&c.activities.map((function(e){return Object(E.jsx)(P,{activity:e},e.id)}))]})]})]})]})},F=function(e){var n=e.country;return Object(E.jsx)(j.b,{to:"/countries/".concat(n.id),children:Object(E.jsxs)("div",{className:"card",children:[Object(E.jsx)("figure",{className:"card__image",children:Object(E.jsx)("img",{src:n.flags,alt:n.name})}),Object(E.jsxs)("div",{className:"card__body",children:[Object(E.jsx)("h3",{children:n.name}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Continent: "})," ",n.continent]})]})]})})},H=function(e){var n=e.homeCountries,t=Object(r.c)((function(e){return e.ui})).msgError;return Object(E.jsx)(E.Fragment,{children:t?Object(E.jsx)("h2",{children:t.countryNotFound}):null===n||void 0===n?void 0:n.map((function(e){return Object(E.jsx)(F,{country:e},e.id)}))})},V=function(e){var n=e.handleSubmit,t=e.country,i=e.handleChange,c=e.handleChangeContinent,o=e.handleChangeActivity,l=e.handleChangeOrder,j=Object(s.f)(),u=Object(r.b)(),d=Object(r.c)((function(e){return e.activities})).activities;Object(a.useEffect)((function(){u((function(e){fetch("".concat(M)).then((function(e){return e.json()})).then((function(n){return e({type:g,payload:n})}))}))}),[u]);return Object(E.jsxs)("div",{className:"container-forms",children:[Object(E.jsxs)("form",{onSubmit:n,className:"formCountry",children:[Object(E.jsx)("div",{className:"formCountry__searchCountry",children:Object(E.jsx)("input",{type:"text",placeholder:"search for a country",name:"country",value:t,onChange:i})}),Object(E.jsx)("button",{className:"formCountry__buttonCountry",children:"Search"})]}),Object(E.jsxs)("select",{id:"continent",onChange:c,children:[Object(E.jsx)("option",{value:"-",children:"Filter by continent"}),Object(E.jsx)("option",{value:"africa",children:"\xc1frica"}),Object(E.jsx)("option",{value:"america",children:"Am\xe9ricas"}),Object(E.jsx)("option",{value:"antarctic",children:"Antarctic"}),Object(E.jsx)("option",{value:"asia",children:"Asia"}),Object(E.jsx)("option",{value:"europe",children:"Europe"}),Object(E.jsx)("option",{value:"oceania",children:"Ocean\xeda"})]}),Object(E.jsx)("button",{className:"btn-new-activity",type:"button",onClick:function(){j("/activity")},children:"New Activity"}),Object(E.jsxs)("select",{id:"activities",onChange:o,children:[Object(E.jsx)("option",{value:"-",children:"Filter by activities"}),d.length>0&&d.map((function(e){return Object(E.jsx)("option",{value:e,children:e})}))]}),Object(E.jsxs)("select",{id:"ordered",onChange:l,children:[Object(E.jsx)("option",{value:"-",children:"Order"}),Object(E.jsx)("option",{value:"az name",children:"A - Z"}),Object(E.jsx)("option",{value:"za name",children:"Z - A"}),Object(E.jsx)("option",{value:"lower population",children:"Population (-)"}),Object(E.jsx)("option",{value:"higher population",children:"Population (+)"})]})]})},w=function(){var e=Object(r.b)(),n=Object(r.c)((function(e){return e.ui})).loading,t=Object(r.c)((function(e){return e.countries})),i=t.allCountries,c=t.resultSearchCountries,o=t.resultContinent,l=t.countriesWithActivities,j=Object(a.useState)(0),s=Object(h.a)(j,2),b=s[0],O=s[1],p=Object(a.useState)({country:""}),m=Object(h.a)(p,2),x=m[0],C=m[1],N=Object(a.useState)({continent:""}),A=Object(h.a)(N,2),g=A[0],M=A[1],B=Object(a.useState)({activity:""}),P=Object(h.a)(B,2),K=P[0],F=P[1],w=Object(a.useState)({order:""}),W=Object(h.a)(w,2),Z=W[0],Y=W[1],k=x.country,_=g.continent,J=K.activity,z=Z.order;console.log("current page",b),Object(a.useEffect)((function(){e((function(e){e(I()),fetch("".concat(G)).then((function(e){return e.json()})).then((function(n){e({type:v,payload:n}),e(T())}))})),O(0)}),[e]),Object(a.useEffect)((function(){e(L(_,"")),O(0)}),[_,e]),Object(a.useEffect)((function(){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(n){n(I()),fetch("".concat(G,"?filter=").concat(e)).then((function(e){return e.json()})).then((function(e){n({type:f,payload:e}),n(T())}))}}(J)),O(0)}),[J,e]),Object(a.useEffect)((function(){switch(O(0),z){case"az name":o.length>0?(console.log(o),e(L(_,z))):e(U("ASC","name"));break;case"za name":o.length>0?(console.log(o),e(L(_,z))):e(U("DESC","name"));break;case"higher population":o.length>0?(console.log(o),e(L(_,z))):e(U("DESC","population"));break;case"lower population":o.length>0?(console.log(o),e(L(_,z))):e(U("ASC","population"))}}),[e,z]);var X=function(){(i.length>b+10||o.length>b+10)&&O(b+10)};return n?Object(E.jsx)(D,{}):Object(E.jsxs)("div",{className:"countries",children:[Object(E.jsx)(V,{handleSubmit:function(n){var t;n.preventDefault(),e((t=k,function(e){e(I()),fetch("".concat(G,"?name=").concat(t)).then((function(e){return e.json()})).then((function(n){e({type:S,payload:n}),e(T()),e(R())})).catch((function(n){return console.log(n.message),e(y({countryNotFound:"The country was not found"})),e(T()),n}))}))},country:k,handleChange:function(e){C(Object(d.a)(Object(d.a)({},x),{},Object(u.a)({},e.target.name,e.target.value)))},handleChangeContinent:function(e){M({continent:e.target.value})},handleChangeActivity:function(e){F({activity:e.target.value})},handleChangeOrder:function(e){Y({order:e.target.value})}}),Object(E.jsx)("div",{className:"grid-card",children:Object(E.jsx)(H,{homeCountries:function(){var e=[];return c.length?(e=c.slice(b,b+9),b>0&&(e=c.slice(b,b+10))):o.length?(e=o.slice(b,b+9),b>0&&(e=o.slice(b,b+10))):l.length?(e=l.slice(b,b+9),b>0&&(e=l.slice(b,b+10))):(e=i.slice(b,b+9),b>0&&(e=i.slice(b,b+10))),e}()})}),Object(E.jsxs)("div",{className:"countries__buttons",children:[b>0&&Object(E.jsx)("button",{className:"btn-previous",onClick:function(){b>0&&O(b-10)},children:"Previous"}),i.length>b+10&&Object(E.jsx)("button",{className:"btn-next",onClick:X,children:"Next"}),o.length>0&&o.length>b+10&&Object(E.jsx)("button",{className:"btn-next",onClick:X,children:"Next"})]})]})},W=function(){var e=Object(s.f)();return Object(E.jsx)("div",{className:"home",children:Object(E.jsx)("button",{className:"home__button",onClick:function(){return e("/countries",{replace:!0})},children:"Go"})})},Z=function(){return Object(E.jsx)("div",{children:Object(E.jsxs)(s.c,{children:[Object(E.jsx)(s.a,{path:"/",element:Object(E.jsx)(W,{})}),Object(E.jsx)(s.a,{path:"/countries",element:Object(E.jsx)(w,{})}),Object(E.jsx)(s.a,{path:"/countries/:id",element:Object(E.jsx)(K,{})}),Object(E.jsx)(s.a,{path:"/activity",element:Object(E.jsx)(B,{})})]})})},Y=t(12),k=t(18),_=t(20),J={activities:[]},z={allCountries:[],countryId:[],resultSearchCountries:[],resultContinent:[],countriesWithActivities:[]},X={loading:!1,msgError:null},Q="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,q=Object(Y.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(d.a)(Object(d.a)({},e),{},{msgError:n.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{msgError:null});case p:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case m:return Object(d.a)(Object(d.a)({},e),{},{loading:!1});default:return e}},countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:return Object(d.a)(Object(d.a)({},e),{},{allCountries:n.payload,resultContinent:[]});case x:return Object(d.a)(Object(d.a)({},e),{},{countryId:n.payload});case S:return Object(d.a)(Object(d.a)({},e),{},{resultContinent:[],resultSearchCountries:n.payload});case C:return Object(d.a)(Object(d.a)({},e),{},{resultContinent:n.payload,resultSearchCountries:[],countriesWithActivities:[],allCountries:[]});case f:return Object(d.a)(Object(d.a)({},e),{},{countriesWithActivities:n.payload,resultContinent:[],resultSearchCountries:[]});case N:return Object(d.a)(Object(d.a)({},e),{},{allCountries:n.payload,countriesWithActivities:[]});default:return e}},activities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A:return Object(d.a)(Object(d.a)({},e),{},{activities:[].concat(Object(_.a)(e.activities),[n.payload])});case g:return Object(d.a)(Object(d.a)({},e),{},{activities:n.payload});default:return e}}}),$=Object(Y.d)(q,Q(Object(Y.a)(k.a)));t(29);var ee=function(){return Object(E.jsx)(r.a,{store:$,children:Object(E.jsx)(j.a,{children:Object(E.jsx)(Z,{})})})},ne=t(19);t.n(ne).a.config(),o.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(ee,{})}),document.getElementById("root")),l()}},[[33,1,2]]]);
//# sourceMappingURL=main.c24560c3.chunk.js.map
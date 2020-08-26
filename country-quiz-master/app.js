const countCap = `[
    {
      "name": "Afghanistan",
      "capital": "Kabul"
    },
    {
      "name": "Åland Islands",
      "capital": "Mariehamn"
    },
    {
      "name": "Albania",
      "capital": "Tirana"
    },
    {
      "name": "Algeria",
      "capital": "Algiers"
    },
    {
      "name": "American Samoa",
      "capital": "Pago Pago"
    },
    {
      "name": "Andorra",
      "capital": "Andorra la Vella"
    },
    {
      "name": "Angola",
      "capital": "Luanda"
    },
    {
      "name": "Anguilla",
      "capital": "The Valley"
    },
    {
      "name": "Antarctica",
      "capital": ""
    },
    {
      "name": "Antigua and Barbuda",
      "capital": "Saint John's"
    },
    {
      "name": "Argentina",
      "capital": "Buenos Aires"
    },
    {
      "name": "Armenia",
      "capital": "Yerevan"
    },
    {
      "name": "Aruba",
      "capital": "Oranjestad"
    },
    {
      "name": "Australia",
      "capital": "Canberra"
    },
    {
      "name": "Austria",
      "capital": "Vienna"
    },
    {
      "name": "Azerbaijan",
      "capital": "Baku"
    },
    {
      "name": "Bahamas",
      "capital": "Nassau"
    },
    {
      "name": "Bahrain",
      "capital": "Manama"
    },
    {
      "name": "Bangladesh",
      "capital": "Dhaka"
    },
    {
      "name": "Barbados",
      "capital": "Bridgetown"
    },
    {
      "name": "Belarus",
      "capital": "Minsk"
    },
    {
      "name": "Belgium",
      "capital": "Brussels"
    },
    {
      "name": "Belize",
      "capital": "Belmopan"
    },
    {
      "name": "Benin",
      "capital": "Porto-Novo"
    },
    {
      "name": "Bermuda",
      "capital": "Hamilton"
    },
    {
      "name": "Bhutan",
      "capital": "Thimphu"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "capital": "Sucre"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "capital": "Kralendijk"
    },
    {
      "name": "Bosnia and Herzegovina",
      "capital": "Sarajevo"
    },
    {
      "name": "Botswana",
      "capital": "Gaborone"
    },
    {
      "name": "Bouvet Island",
      "capital": ""
    },
    {
      "name": "Brazil",
      "capital": "Brasília"
    },
    {
      "name": "British Indian Ocean Territory",
      "capital": "Diego Garcia"
    },
    {
      "name": "United States Minor Outlying Islands",
      "capital": ""
    },
    {
      "name": "Virgin Islands (British)",
      "capital": "Road Town"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "capital": "Charlotte Amalie"
    },
    {
      "name": "Brunei Darussalam",
      "capital": "Bandar Seri Begawan"
    },
    {
      "name": "Bulgaria",
      "capital": "Sofia"
    },
    {
      "name": "Burkina Faso",
      "capital": "Ouagadougou"
    },
    {
      "name": "Burundi",
      "capital": "Bujumbura"
    },
    {
      "name": "Cambodia",
      "capital": "Phnom Penh"
    },
    {
      "name": "Cameroon",
      "capital": "Yaoundé"
    },
    {
      "name": "Canada",
      "capital": "Ottawa"
    },
    {
      "name": "Cabo Verde",
      "capital": "Praia"
    },
    {
      "name": "Cayman Islands",
      "capital": "George Town"
    },
    {
      "name": "Central African Republic",
      "capital": "Bangui"
    },
    {
      "name": "Chad",
      "capital": "N'Djamena"
    },
    {
      "name": "Chile",
      "capital": "Santiago"
    },
    {
      "name": "China",
      "capital": "Beijing"
    },
    {
      "name": "Christmas Island",
      "capital": "Flying Fish Cove"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "capital": "West Island"
    },
    {
      "name": "Colombia",
      "capital": "Bogotá"
    },
    {
      "name": "Comoros",
      "capital": "Moroni"
    },
    {
      "name": "Congo",
      "capital": "Brazzaville"
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "capital": "Kinshasa"
    },
    {
      "name": "Cook Islands",
      "capital": "Avarua"
    },
    {
      "name": "Costa Rica",
      "capital": "San José"
    },
    {
      "name": "Croatia",
      "capital": "Zagreb"
    },
    {
      "name": "Cuba",
      "capital": "Havana"
    },
    {
      "name": "Curaçao",
      "capital": "Willemstad"
    },
    {
      "name": "Cyprus",
      "capital": "Nicosia"
    },
    {
      "name": "Czech Republic",
      "capital": "Prague"
    },
    {
      "name": "Denmark",
      "capital": "Copenhagen"
    },
    {
      "name": "Djibouti",
      "capital": "Djibouti"
    },
    {
      "name": "Dominica",
      "capital": "Roseau"
    },
    {
      "name": "Dominican Republic",
      "capital": "Santo Domingo"
    },
    {
      "name": "Ecuador",
      "capital": "Quito"
    },
    {
      "name": "Egypt",
      "capital": "Cairo"
    },
    {
      "name": "El Salvador",
      "capital": "San Salvador"
    },
    {
      "name": "Equatorial Guinea",
      "capital": "Malabo"
    },
    {
      "name": "Eritrea",
      "capital": "Asmara"
    },
    {
      "name": "Estonia",
      "capital": "Tallinn"
    },
    {
      "name": "Ethiopia",
      "capital": "Addis Ababa"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "capital": "Stanley"
    },
    {
      "name": "Faroe Islands",
      "capital": "Tórshavn"
    },
    {
      "name": "Fiji",
      "capital": "Suva"
    },
    {
      "name": "Finland",
      "capital": "Helsinki"
    },
    {
      "name": "France",
      "capital": "Paris"
    },
    {
      "name": "French Guiana",
      "capital": "Cayenne"
    },
    {
      "name": "French Polynesia",
      "capital": "Papeetē"
    },
    {
      "name": "French Southern Territories",
      "capital": "Port-aux-Français"
    },
    {
      "name": "Gabon",
      "capital": "Libreville"
    },
    {
      "name": "Gambia",
      "capital": "Banjul"
    },
    {
      "name": "Georgia",
      "capital": "Tbilisi"
    },
    {
      "name": "Germany",
      "capital": "Berlin"
    },
    {
      "name": "Ghana",
      "capital": "Accra"
    },
    {
      "name": "Gibraltar",
      "capital": "Gibraltar"
    },
    {
      "name": "Greece",
      "capital": "Athens"
    },
    {
      "name": "Greenland",
      "capital": "Nuuk"
    },
    {
      "name": "Grenada",
      "capital": "St. George's"
    },
    {
      "name": "Guadeloupe",
      "capital": "Basse-Terre"
    },
    {
      "name": "Guam",
      "capital": "Hagåtña"
    },
    {
      "name": "Guatemala",
      "capital": "Guatemala City"
    },
    {
      "name": "Guernsey",
      "capital": "St. Peter Port"
    },
    {
      "name": "Guinea",
      "capital": "Conakry"
    },
    {
      "name": "Guinea-Bissau",
      "capital": "Bissau"
    },
    {
      "name": "Guyana",
      "capital": "Georgetown"
    },
    {
      "name": "Haiti",
      "capital": "Port-au-Prince"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "capital": ""
    },
    {
      "name": "Holy See",
      "capital": "Rome"
    },
    {
      "name": "Honduras",
      "capital": "Tegucigalpa"
    },
    {
      "name": "Hong Kong",
      "capital": "City of Victoria"
    },
    {
      "name": "Hungary",
      "capital": "Budapest"
    },
    {
      "name": "Iceland",
      "capital": "Reykjavík"
    },
    {
      "name": "India",
      "capital": "New Delhi"
    },
    {
      "name": "Indonesia",
      "capital": "Jakarta"
    },
    {
      "name": "Côte d'Ivoire",
      "capital": "Yamoussoukro"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "capital": "Tehran"
    },
    {
      "name": "Iraq",
      "capital": "Baghdad"
    },
    {
      "name": "Ireland",
      "capital": "Dublin"
    },
    {
      "name": "Isle of Man",
      "capital": "Douglas"
    },
    {
      "name": "Israel",
      "capital": "Jerusalem"
    },
    {
      "name": "Italy",
      "capital": "Rome"
    },
    {
      "name": "Jamaica",
      "capital": "Kingston"
    },
    {
      "name": "Japan",
      "capital": "Tokyo"
    },
    {
      "name": "Jersey",
      "capital": "Saint Helier"
    },
    {
      "name": "Jordan",
      "capital": "Amman"
    },
    {
      "name": "Kazakhstan",
      "capital": "Astana"
    },
    {
      "name": "Kenya",
      "capital": "Nairobi"
    },
    {
      "name": "Kiribati",
      "capital": "South Tarawa"
    },
    {
      "name": "Kuwait",
      "capital": "Kuwait City"
    },
    {
      "name": "Kyrgyzstan",
      "capital": "Bishkek"
    },
    {
      "name": "Lao People's Democratic Republic",
      "capital": "Vientiane"
    },
    {
      "name": "Latvia",
      "capital": "Riga"
    },
    {
      "name": "Lebanon",
      "capital": "Beirut"
    },
    {
      "name": "Lesotho",
      "capital": "Maseru"
    },
    {
      "name": "Liberia",
      "capital": "Monrovia"
    },
    {
      "name": "Libya",
      "capital": "Tripoli"
    },
    {
      "name": "Liechtenstein",
      "capital": "Vaduz"
    },
    {
      "name": "Lithuania",
      "capital": "Vilnius"
    },
    {
      "name": "Luxembourg",
      "capital": "Luxembourg"
    },
    {
      "name": "Macao",
      "capital": ""
    },
    {
      "name": "Macedonia (the former Yugoslav Republic of)",
      "capital": "Skopje"
    },
    {
      "name": "Madagascar",
      "capital": "Antananarivo"
    },
    {
      "name": "Malawi",
      "capital": "Lilongwe"
    },
    {
      "name": "Malaysia",
      "capital": "Kuala Lumpur"
    },
    {
      "name": "Maldives",
      "capital": "Malé"
    },
    {
      "name": "Mali",
      "capital": "Bamako"
    },
    {
      "name": "Malta",
      "capital": "Valletta"
    },
    {
      "name": "Marshall Islands",
      "capital": "Majuro"
    },
    {
      "name": "Martinique",
      "capital": "Fort-de-France"
    },
    {
      "name": "Mauritania",
      "capital": "Nouakchott"
    },
    {
      "name": "Mauritius",
      "capital": "Port Louis"
    },
    {
      "name": "Mayotte",
      "capital": "Mamoudzou"
    },
    {
      "name": "Mexico",
      "capital": "Mexico City"
    },
    {
      "name": "Micronesia (Federated States of)",
      "capital": "Palikir"
    },
    {
      "name": "Moldova (Republic of)",
      "capital": "Chișinău"
    },
    {
      "name": "Monaco",
      "capital": "Monaco"
    },
    {
      "name": "Mongolia",
      "capital": "Ulan Bator"
    },
    {
      "name": "Montenegro",
      "capital": "Podgorica"
    },
    {
      "name": "Montserrat",
      "capital": "Plymouth"
    },
    {
      "name": "Morocco",
      "capital": "Rabat"
    },
    {
      "name": "Mozambique",
      "capital": "Maputo"
    },
    {
      "name": "Myanmar",
      "capital": "Naypyidaw"
    },
    {
      "name": "Namibia",
      "capital": "Windhoek"
    },
    {
      "name": "Nauru",
      "capital": "Yaren"
    },
    {
      "name": "Nepal",
      "capital": "Kathmandu"
    },
    {
      "name": "Netherlands",
      "capital": "Amsterdam"
    },
    {
      "name": "New Caledonia",
      "capital": "Nouméa"
    },
    {
      "name": "New Zealand",
      "capital": "Wellington"
    },
    {
      "name": "Nicaragua",
      "capital": "Managua"
    },
    {
      "name": "Niger",
      "capital": "Niamey"
    },
    {
      "name": "Nigeria",
      "capital": "Abuja"
    },
    {
      "name": "Niue",
      "capital": "Alofi"
    },
    {
      "name": "Norfolk Island",
      "capital": "Kingston"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "capital": "Pyongyang"
    },
    {
      "name": "Northern Mariana Islands",
      "capital": "Saipan"
    },
    {
      "name": "Norway",
      "capital": "Oslo"
    },
    {
      "name": "Oman",
      "capital": "Muscat"
    },
    {
      "name": "Pakistan",
      "capital": "Islamabad"
    },
    {
      "name": "Palau",
      "capital": "Ngerulmud"
    },
    {
      "name": "Palestine, State of",
      "capital": "Ramallah"
    },
    {
      "name": "Panama",
      "capital": "Panama City"
    },
    {
      "name": "Papua New Guinea",
      "capital": "Port Moresby"
    },
    {
      "name": "Paraguay",
      "capital": "Asunción"
    },
    {
      "name": "Peru",
      "capital": "Lima"
    },
    {
      "name": "Philippines",
      "capital": "Manila"
    },
    {
      "name": "Pitcairn",
      "capital": "Adamstown"
    },
    {
      "name": "Poland",
      "capital": "Warsaw"
    },
    {
      "name": "Portugal",
      "capital": "Lisbon"
    },
    {
      "name": "Puerto Rico",
      "capital": "San Juan"
    },
    {
      "name": "Qatar",
      "capital": "Doha"
    },
    {
      "name": "Republic of Kosovo",
      "capital": "Pristina"
    },
    {
      "name": "Réunion",
      "capital": "Saint-Denis"
    },
    {
      "name": "Romania",
      "capital": "Bucharest"
    },
    {
      "name": "Russian Federation",
      "capital": "Moscow"
    },
    {
      "name": "Rwanda",
      "capital": "Kigali"
    },
    {
      "name": "Saint Barthélemy",
      "capital": "Gustavia"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "capital": "Jamestown"
    },
    {
      "name": "Saint Kitts and Nevis",
      "capital": "Basseterre"
    },
    {
      "name": "Saint Lucia",
      "capital": "Castries"
    },
    {
      "name": "Saint Martin (French part)",
      "capital": "Marigot"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "capital": "Saint-Pierre"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "capital": "Kingstown"
    },
    {
      "name": "Samoa",
      "capital": "Apia"
    },
    {
      "name": "San Marino",
      "capital": "City of San Marino"
    },
    {
      "name": "Sao Tome and Principe",
      "capital": "São Tomé"
    },
    {
      "name": "Saudi Arabia",
      "capital": "Riyadh"
    },
    {
      "name": "Senegal",
      "capital": "Dakar"
    },
    {
      "name": "Serbia",
      "capital": "Belgrade"
    },
    {
      "name": "Seychelles",
      "capital": "Victoria"
    },
    {
      "name": "Sierra Leone",
      "capital": "Freetown"
    },
    {
      "name": "Singapore",
      "capital": "Singapore"
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "capital": "Philipsburg"
    },
    {
      "name": "Slovakia",
      "capital": "Bratislava"
    },
    {
      "name": "Slovenia",
      "capital": "Ljubljana"
    },
    {
      "name": "Solomon Islands",
      "capital": "Honiara"
    },
    {
      "name": "Somalia",
      "capital": "Mogadishu"
    },
    {
      "name": "South Africa",
      "capital": "Pretoria"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "capital": "King Edward Point"
    },
    {
      "name": "Korea (Republic of)",
      "capital": "Seoul"
    },
    {
      "name": "South Sudan",
      "capital": "Juba"
    },
    {
      "name": "Spain",
      "capital": "Madrid"
    },
    {
      "name": "Sri Lanka",
      "capital": "Colombo"
    },
    {
      "name": "Sudan",
      "capital": "Khartoum"
    },
    {
      "name": "Suriname",
      "capital": "Paramaribo"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "capital": "Longyearbyen"
    },
    {
      "name": "Swaziland",
      "capital": "Lobamba"
    },
    {
      "name": "Sweden",
      "capital": "Stockholm"
    },
    {
      "name": "Switzerland",
      "capital": "Bern"
    },
    {
      "name": "Syrian Arab Republic",
      "capital": "Damascus"
    },
    {
      "name": "Taiwan",
      "capital": "Taipei"
    },
    {
      "name": "Tajikistan",
      "capital": "Dushanbe"
    },
    {
      "name": "Tanzania, United Republic of",
      "capital": "Dodoma"
    },
    {
      "name": "Thailand",
      "capital": "Bangkok"
    },
    {
      "name": "Timor-Leste",
      "capital": "Dili"
    },
    {
      "name": "Togo",
      "capital": "Lomé"
    },
    {
      "name": "Tokelau",
      "capital": "Fakaofo"
    },
    {
      "name": "Tonga",
      "capital": "Nuku'alofa"
    },
    {
      "name": "Trinidad and Tobago",
      "capital": "Port of Spain"
    },
    {
      "name": "Tunisia",
      "capital": "Tunis"
    },
    {
      "name": "Turkey",
      "capital": "Ankara"
    },
    {
      "name": "Turkmenistan",
      "capital": "Ashgabat"
    },
    {
      "name": "Turks and Caicos Islands",
      "capital": "Cockburn Town"
    },
    {
      "name": "Tuvalu",
      "capital": "Funafuti"
    },
    {
      "name": "Uganda",
      "capital": "Kampala"
    },
    {
      "name": "Ukraine",
      "capital": "Kiev"
    },
    {
      "name": "United Arab Emirates",
      "capital": "Abu Dhabi"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "capital": "London"
    },
    {
      "name": "United States of America",
      "capital": "Washington, D.C."
    },
    {
      "name": "Uruguay",
      "capital": "Montevideo"
    },
    {
      "name": "Uzbekistan",
      "capital": "Tashkent"
    },
    {
      "name": "Vanuatu",
      "capital": "Port Vila"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "capital": "Caracas"
    },
    {
      "name": "Viet Nam",
      "capital": "Hanoi"
    },
    {
      "name": "Wallis and Futuna",
      "capital": "Mata-Utu"
    },
    {
      "name": "Western Sahara",
      "capital": "El Aaiún"
    },
    {
      "name": "Yemen",
      "capital": "Sana'a"
    },
    {
      "name": "Zambia",
      "capital": "Lusaka"
    },
    {
      "name": "Zimbabwe",
      "capital": "Harare"
    }
  ]`

  const quizType = document.getElementById('quizType')
  const quizCard = document.getElementById('quizCard')
  const flagCard = document.getElementById('flagCard')
  const resultCard = document.getElementById('resultCard')
  const resultCard1 = document.getElementById('resultCard1')
  const resultCard2 = document.getElementById('resultCard2')
  const resultCard3 = document.getElementById('resultCard3')
  const doneCard = document.getElementById('doneCard')
  const nextButt = document.getElementById('nextButt')
  const nextButtlast = document.getElementById('nextButtlast')
  const nextButtr = document.getElementById('nextButtr')
  const nextButtr0 = document.getElementById('nextButtr0')
  const prevButt = document.getElementById('prevButt')
  const nextButtf = document.getElementById('nextButtf')
  const submitButt = document.getElementById('submitButt')
  const submitButtf = document.getElementById('submitButtf')
  let clickCount = 0 

const randomCountry = JSON.parse(countCap)

document.getElementById('countryName').innerHTML = JSON.parse(countCap)[10].capital
document.getElementById('name1').innerHTML = randomCountry[153].name
document.getElementById('name2').innerHTML = randomCountry[171].name.split(' ', 1)
if(document.getElementById('name2').innerHTML.endsWith(',') || document.getElementById('name2').innerHTML.endsWith('(')){
  document.getElementById('name2').innerHTML = document.getElementById('name2').innerHTML.slice(0, document.getElementById('name2').innerHTML.length-1)
}
document.getElementById('name3').innerHTML = randomCountry[135].name
document.getElementById('name4').innerHTML = randomCountry[10].name

document.getElementById('countryNamer').innerHTML = JSON.parse(countCap)[10].capital
document.getElementById('namer1').innerHTML = randomCountry[153].name
document.getElementById('namer2').innerHTML = randomCountry[171].name.split(' ', 1)
if(document.getElementById('namer2').innerHTML.endsWith(',') || document.getElementById('name2').innerHTML.endsWith('(')){
  document.getElementById('namer2').innerHTML = document.getElementById('name2').innerHTML.slice(0, document.getElementById('name2').innerHTML.length-1)
}
document.getElementById('namer3').innerHTML = randomCountry[135].name
document.getElementById('namer4').innerHTML = randomCountry[10].name


const outerDiv1 = document.getElementById('name1').parentElement
const outerDiv2 = document.getElementById('name2').parentElement
const outerDiv3 = document.getElementById('name3').parentElement
const outerDiv4 = document.getElementById('name4').parentElement

const outerDiv11 = document.getElementById('name11').parentElement
const outerDiv21 = document.getElementById('name21').parentElement
const outerDiv31 = document.getElementById('name31').parentElement
const outerDiv41 = document.getElementById('name41').parentElement

const outerDiv12 = document.getElementById('name12').parentElement
const outerDiv22 = document.getElementById('name22').parentElement
const outerDiv32 = document.getElementById('name32').parentElement
const outerDiv42 = document.getElementById('name42').parentElement

const outerDiv13 = document.getElementById('name13').parentElement
const outerDiv23 = document.getElementById('name23').parentElement
const outerDiv33 = document.getElementById('name33').parentElement
const outerDiv43 = document.getElementById('name43').parentElement

const outerDivr1 = document.getElementById('namer1').parentElement
const outerDivr2 = document.getElementById('namer2').parentElement
const outerDivr3 = document.getElementById('namer3').parentElement
const outerDivr4 = document.getElementById('namer4').parentElement

const outerDivr11 = document.getElementById('namer11').parentElement
const outerDivr21 = document.getElementById('namer21').parentElement
const outerDivr31 = document.getElementById('namer31').parentElement
const outerDivr41 = document.getElementById('namer41').parentElement

const outerDivr12 = document.getElementById('namer12').parentElement
const outerDivr22 = document.getElementById('namer22').parentElement
const outerDivr32 = document.getElementById('namer32').parentElement
const outerDivr42 = document.getElementById('namer42').parentElement

const outerDivr13 = document.getElementById('namer13').parentElement
const outerDivr23 = document.getElementById('namer23').parentElement
const outerDivr33 = document.getElementById('namer33').parentElement
const outerDivr43 = document.getElementById('namer43').parentElement


let correctCount = document.getElementById('correctCount').innerHTML

function choice1(){
  // if(document.getElementById('name1').innerHTML === randomCountry[10].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name1').innerHTML !== randomCountry[10].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv1.style.backgroundColor = '#F9A826'
  outerDiv1.style.color = 'white'
  outerDiv1.style.border = 'none'

  outerDiv2.style.backgroundColor = 'white'
  outerDiv2.style.color = '#5256A1'
  outerDiv2.style.border = '1px solid #5256A1'
  
  outerDiv3.style.backgroundColor = 'white'
  outerDiv3.style.color = '#5256A1'
  outerDiv3.style.border = '1px solid #5256A1'
  
  outerDiv4.style.backgroundColor = 'white'
  outerDiv4.style.color = '#5256A1'
  outerDiv4.style.border = '1px solid #5256A1'

  //FOR FIRST RESULT CARD
    outerDivr1.style.backgroundColor = '#EA8282' //red
    outerDivr1.style.color = 'white'
    outerDivr1.style.border = 'none'

    outerDivr3.style.backgroundColor = 'white'
    outerDivr3.style.color = '#5256A1'
    outerDivr3.style.border = '1px solid #5256A1'
    
    outerDivr2.style.backgroundColor = 'white'
    outerDivr2.style.color = '#5256A1'
    outerDivr2.style.border = '1px solid #5256A1'

    outerDivr4.style.backgroundColor = '#60BF88' //green
    outerDivr4.style.color = 'white'
    outerDivr4.style.border = 'none'
    
}

function choice2(){
  // if(document.getElementById('name2').innerHTML === randomCountry[10].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name2').innerHTML !== randomCountry[10].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv2.style.backgroundColor = '#F9A826'
  outerDiv2.style.color = 'white'
  outerDiv2.style.border = 'none'

  outerDiv1.style.backgroundColor = 'white'
  outerDiv1.style.color = '#5256A1'
  outerDiv1.style.border = '1px solid #5256A1'
  
  outerDiv3.style.backgroundColor = 'white'
  outerDiv3.style.color = '#5256A1'
  outerDiv3.style.border = '1px solid #5256A1'
  
  outerDiv4.style.backgroundColor = 'white'
  outerDiv4.style.color = '#5256A1'
  outerDiv4.style.border = '1px solid #5256A1'

  
  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'

  outerDivr2.style.backgroundColor = '#EA8282' //red
  outerDivr2.style.color = 'white'
  outerDivr2.style.border = 'none'

  outerDivr3.style.backgroundColor = 'white'
  outerDivr3.style.color = '#5256A1'
  outerDivr3.style.border = '1px solid #5256A1'
  
  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'

}

function choice3(){
  // if(document.getElementById('name3').innerHTML === randomCountry[10].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name3').innerHTML !== randomCountry[10].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv3.style.backgroundColor = '#F9A826'
  outerDiv3.style.color = 'white'
  outerDiv3.style.border = 'none'

  outerDiv2.style.backgroundColor = 'white'
  outerDiv2.style.color = '#5256A1'
  outerDiv2.style.border = '1px solid #5256A1'
  
  outerDiv1.style.backgroundColor = 'white'
  outerDiv1.style.color = '#5256A1'
  outerDiv1.style.border = '1px solid #5256A1'
  
  outerDiv4.style.backgroundColor = 'white'
  outerDiv4.style.color = '#5256A1'
  outerDiv4.style.border = '1px solid #5256A1'



  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'

  outerDivr3.style.backgroundColor = '#EA8282' //red
  outerDivr3.style.color = 'white'
  outerDivr3.style.border = 'none'

  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'
  
  outerDivr2.style.backgroundColor = 'white'
  outerDivr2.style.color = '#5256A1'
  outerDivr2.style.border = '1px solid #5256A1'
  
}

let callCount = 0
function choice4(){
  callCount += 1
  correctCount = parseInt(correctCount) + 1
  if(callCount > 1){
    correctCount = correctCount - 1
  }
  console.log(correctCount)

console.log('callTmes =' + callCount)
  

  outerDiv4.style.backgroundColor = '#F9A826'
  outerDiv4.style.color = 'white'
  outerDiv4.style.border = 'none'

  outerDiv2.style.backgroundColor = 'white'
  outerDiv2.style.color = '#5256A1'
  outerDiv2.style.border = '1px solid #5256A1'
  
  outerDiv3.style.backgroundColor = 'white'
  outerDiv3.style.color = '#5256A1'
  outerDiv3.style.border = '1px solid #5256A1'
  
  outerDiv1.style.backgroundColor = 'white'
  outerDiv1.style.color = '#5256A1'
  outerDiv1.style.border = '1px solid #5256A1'



  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'

  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'

  outerDivr3.style.backgroundColor = 'white'
  outerDivr3.style.color = '#5256A1'
  outerDivr3.style.border = '1px solid #5256A1'
  
  outerDivr2.style.backgroundColor = 'white'
  outerDivr2.style.color = '#5256A1'
  outerDivr2.style.border = '1px solid #5256A1'
  

}



function choice11(){
  // if(document.getElementById('name1').innerHTML === randomCountry[50].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name1').innerHTML !== randomCountry[50].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  // console.log(correctCount.innerHTML)

  outerDiv11.style.backgroundColor = '#F9A826'
  outerDiv11.style.color = 'white'
  outerDiv11.style.border = 'none'

  outerDiv21.style.backgroundColor = 'white'
  outerDiv21.style.color = '#5256A1'
  outerDiv21.style.border = '1px solid #5256A1'
  
  outerDiv31.style.backgroundColor = 'white'
  outerDiv31.style.color = '#5256A1'
  outerDiv31.style.border = '1px solid #5256A1'
  
  outerDiv41.style.backgroundColor = 'white'
  outerDiv41.style.color = '#5256A1'
  outerDiv41.style.border = '1px solid #5256A1'

    

  //FOR SECOND RESULT CARD
  outerDivr11.style.backgroundColor = '#EA8282' //red
  outerDivr11.style.color = 'white'
  outerDivr11.style.border = 'none'
  
  outerDivr21.style.backgroundColor = 'white'
  outerDivr21.style.color = '#5256A1'
  outerDivr21.style.border = '1px solid #5256A1'

  outerDivr31.style.backgroundColor = '#60BF88' //green
  outerDivr31.style.color = 'white'
  outerDivr31.style.border = 'none'

  outerDivr41.style.backgroundColor = 'white'
  outerDivr41.style.color = '#5256A1'
  outerDivr41.style.border = '1px solid #5256A1'


}

function choice21(){
  // if(document.getElementById('name2').innerHTML === randomCountry[50].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name2').innerHTML !== randomCountry[50].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv21.style.backgroundColor = '#F9A826'
  outerDiv21.style.color = 'white'
  outerDiv21.style.border = 'none'

  outerDiv11.style.backgroundColor = 'white'
  outerDiv11.style.color = '#5256A1'
  outerDiv11.style.border = '1px solid #5256A1'
  
  outerDiv31.style.backgroundColor = 'white'
  outerDiv31.style.color = '#5256A1'
  outerDiv31.style.border = '1px solid #5256A1'
  
  outerDiv41.style.backgroundColor = 'white'
  outerDiv41.style.color = '#5256A1'
  outerDiv41.style.border = '1px solid #5256A1'
  
  


  //FOR SECOND RESULT CARD
  outerDivr31.style.backgroundColor = '#60BF88' //green
  outerDivr31.style.color = 'white'
  outerDivr31.style.border = 'none'

  outerDivr21.style.backgroundColor = '#EA8282' //red
  outerDivr21.style.color = 'white'
  outerDivr21.style.border = 'none'

  outerDivr41.style.backgroundColor = 'white'
  outerDivr41.style.color = '#5256A1'
  outerDivr41.style.border = '1px solid #5256A1'
  
  outerDivr11.style.backgroundColor = 'white'
  outerDivr11.style.color = '#5256A1'
  outerDivr11.style.border = '1px solid #5256A1'

  
}

let callCount1 = 0
function choice31(){
  callCount1 += 1
  correctCount = parseInt(correctCount) + 1
  if(callCount > 1){
    correctCount = correctCount - 1
  }
  console.log(correctCount)

console.log('callTmes =' + callCount1)


  outerDiv31.style.backgroundColor = '#F9A826'
  outerDiv31.style.color = 'white'
  outerDiv31.style.border = 'none'

  outerDiv21.style.backgroundColor = 'white'
  outerDiv21.style.color = '#5256A1'
  outerDiv21.style.border = '1px solid #5256A1'
  
  outerDiv11.style.backgroundColor = 'white'
  outerDiv11.style.color = '#5256A1'
  outerDiv11.style.border = '1px solid #5256A1'
  
  outerDiv41.style.backgroundColor = 'white'
  outerDiv41.style.color = '#5256A1'
  outerDiv41.style.border = '1px solid #5256A1'

  

  //FOR SECOND RESULT CARD
  outerDivr31.style.backgroundColor = '#60BF88' //green
  outerDivr31.style.color = 'white'
  outerDivr31.style.border = 'none'

  outerDivr21.style.backgroundColor = 'white'
  outerDivr21.style.color = '#5256A1'
  outerDivr21.style.border = '1px solid #5256A1'

  outerDivr41.style.backgroundColor = 'white'
  outerDivr41.style.color = '#5256A1'
  outerDivr41.style.border = '1px solid #5256A1'
  
  outerDivr11.style.backgroundColor = 'white'
  outerDivr11.style.color = '#5256A1'
  outerDivr11.style.border = '1px solid #5256A1'


}

function choice41(){
  // if(document.getElementById('name4').innerHTML === randomCountry[50].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else if(document.getElementById('name4').innerHTML !== randomCountry[50].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }

    outerDiv41.style.backgroundColor = '#F9A826'
    outerDiv41.style.color = 'white'
    outerDiv41.style.border = 'none'
  
    outerDiv21.style.backgroundColor = 'white'
    outerDiv21.style.color = '#5256A1'
    outerDiv21.style.border = '1px solid #5256A1'
    
    outerDiv31.style.backgroundColor = 'white'
    outerDiv31.style.color = '#5256A1'
    outerDiv31.style.border = '1px solid #5256A1'
    
    outerDiv11.style.backgroundColor = 'white'
    outerDiv11.style.color = '#5256A1'
    outerDiv11.style.border = '1px solid #5256A1'
  
    
  
    //FOR SECOND RESULT CARD
    outerDivr31.style.backgroundColor = '#60BF88' //green
    outerDivr31.style.color = 'white'
    outerDivr31.style.border = 'none'
  
    outerDivr41.style.backgroundColor = '#EA8282' //red
    outerDivr41.style.color = 'white'
    outerDivr41.style.border = 'none'
  
    outerDivr21.style.backgroundColor = 'white'
    outerDivr21.style.color = '#5256A1'
    outerDivr21.style.border = '1px solid #5256A1'
    
    outerDivr11.style.backgroundColor = 'white'
    outerDivr11.style.color = '#5256A1'
    outerDivr11.style.border = '1px solid #5256A1'
  
  
}



let callCount2 = 0
function choice12(){
  callCount2 += 1
  correctCount = parseInt(correctCount) + 1
  if(callCount > 1){
    correctCount = correctCount - 1
  }
  console.log(correctCount)

console.log('callTmes =' + callCount2)

  outerDiv12.style.backgroundColor = '#F9A826'
  outerDiv12.style.color = 'white'
  outerDiv12.style.border = 'none'

  outerDiv22.style.backgroundColor = 'white'
  outerDiv22.style.color = '#5256A1'
  outerDiv22.style.border = '1px solid #5256A1'
  
  outerDiv32.style.backgroundColor = 'white'
  outerDiv32.style.color = '#5256A1'
  outerDiv32.style.border = '1px solid #5256A1'
  
  outerDiv42.style.backgroundColor = 'white'
  outerDiv42.style.color = '#5256A1'
  outerDiv42.style.border = '1px solid #5256A1'


  //FOR THE THIRD RESULT CARD
    outerDivr12.style.backgroundColor = '#60BF88' //green
    outerDivr12.style.color = 'white'
    outerDivr12.style.border = 'none'
    
    outerDivr22.style.backgroundColor = 'white'
    outerDivr22.style.color = '#5256A1'
    outerDivr22.style.border = '1px solid #5256A1'

    outerDivr32.style.backgroundColor = 'white'
    outerDivr32.style.color = '#5256A1'
    outerDivr32.style.border = '1px solid #5256A1'

    outerDivr42.style.backgroundColor = 'white'
    outerDivr42.style.color = '#5256A1'
    outerDivr42.style.border = '1px solid #5256A1'

  
  
}

function choice22(){
  // if(document.getElementById('name2').innerHTML === randomCountry[100].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name2').innerHTML !== randomCountry[100].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv22.style.backgroundColor = '#F9A826'
  outerDiv22.style.color = 'white'
  outerDiv22.style.border = 'none'

  outerDiv12.style.backgroundColor = 'white'
  outerDiv12.style.color = '#5256A1'
  outerDiv12.style.border = '1px solid #5256A1'
  
  outerDiv32.style.backgroundColor = 'white'
  outerDiv32.style.color = '#5256A1'
  outerDiv32.style.border = '1px solid #5256A1'
  
  outerDiv42.style.backgroundColor = 'white'
  outerDiv42.style.color = '#5256A1'
  outerDiv42.style.border = '1px solid #5256A1'


  //FOR THE THIRD RESULT CARD
    outerDivr12.style.backgroundColor = '#60BF88' //green
    outerDivr12.style.color = 'white'
    outerDivr12.style.border = 'none'

    outerDivr22.style.backgroundColor = '#EA8282' //red
    outerDivr22.style.color = 'white'
    outerDivr22.style.border = 'none'

    outerDivr32.style.backgroundColor = 'white'
    outerDivr32.style.color = '#5256A1'
    outerDivr32.style.border = '1px solid #5256A1'

    outerDivr42.style.backgroundColor = 'white'
    outerDivr42.style.color = '#5256A1'
    outerDivr42.style.border = '1px solid #5256A1'


}

function choice32(){
  // if(document.getElementById('name3').innerHTML === randomCountry[100].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name3').innerHTML !== randomCountry[100].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv32.style.backgroundColor = '#F9A826'
  outerDiv32.style.color = 'white'
  outerDiv32.style.border = 'none'

  outerDiv22.style.backgroundColor = 'white'
  outerDiv22.style.color = '#5256A1'
  outerDiv22.style.border = '1px solid #5256A1'
  
  outerDiv12.style.backgroundColor = 'white'
  outerDiv12.style.color = '#5256A1'
  outerDiv12.style.border = '1px solid #5256A1'
  
  outerDiv42.style.backgroundColor = 'white'
  outerDiv42.style.color = '#5256A1'
  outerDiv42.style.border = '1px solid #5256A1'


  //FOR FIRST RESULT CARD
  outerDivr4.style.backgroundColor = '#60BF88' //green
  outerDivr4.style.color = 'white'
  outerDivr4.style.border = 'none'
  
  outerDivr3.style.backgroundColor = '#EA8282' //red
  outerDivr3.style.color = 'white'
  outerDivr3.style.border = 'none'
  
  outerDivr1.style.backgroundColor = 'white'
  outerDivr1.style.color = '#5256A1'
  outerDivr1.style.border = '1px solid #5256A1'
  
  outerDivr2.style.backgroundColor = 'white'
  outerDivr2.style.color = '#5256A1'
  outerDivr2.style.border = '1px solid #5256A1'

}

function choice42(){
  // if(document.getElementById('name4').innerHTML === randomCountry[100].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else if(document.getElementById('name4').innerHTML !== randomCountry[100].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }

    outerDiv42.style.backgroundColor = '#F9A826'
    outerDiv42.style.color = 'white'
    outerDiv42.style.border = 'none'
  
    outerDiv12.style.backgroundColor = 'white'
    outerDiv12.style.color = '#5256A1'
    outerDiv12.style.border = '1px solid #5256A1'
    
    outerDiv32.style.backgroundColor = 'white'
    outerDiv32.style.color = '#5256A1'
    outerDiv32.style.border = '1px solid #5256A1'
    
    outerDiv22.style.backgroundColor = 'white'
    outerDiv22.style.color = '#5256A1'
    outerDiv22.style.border = '1px solid #5256A1'
  

    //FOR THE THIRD RESULT CARD
      outerDivr12.style.backgroundColor = '#60BF88' //green
      outerDivr12.style.color = 'white'
      outerDivr12.style.border = 'none'
  
      outerDivr42.style.backgroundColor = '#EA8282' //red
      outerDivr42.style.color = 'white'
      outerDivr42.style.border = 'none'
  
      outerDivr22.style.backgroundColor = 'white'
      outerDivr22.style.color = '#5256A1'
      outerDivr22.style.border = '1px solid #5256A1'
  
      outerDivr32.style.backgroundColor = 'white'
      outerDivr32.style.color = '#5256A1'
      outerDivr32.style.border = '1px solid #5256A1'
  
  
  
}



function choice13(){
  // if(document.getElementById('name1').innerHTML === randomCountry[150].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name1').innerHTML !== randomCountry[150].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }



  outerDiv13.style.backgroundColor = '#F9A826'
  outerDiv13.style.color = 'white'
  outerDiv13.style.border = 'none'

  outerDiv23.style.backgroundColor = 'white'
  outerDiv23.style.color = '#5256A1'
  outerDiv23.style.border = '1px solid #5256A1'
  
  outerDiv33.style.backgroundColor = 'white'
  outerDiv33.style.color = '#5256A1'
  outerDiv33.style.border = '1px solid #5256A1'
  
  outerDiv43.style.backgroundColor = 'white'
  outerDiv43.style.color = '#5256A1'
  outerDiv43.style.border = '1px solid #5256A1'


//FOR THE fourth RESULT CARD
outerDivr13.style.backgroundColor = '#EA8282' //red
outerDivr13.style.color = 'white'
outerDivr13.style.border = 'none'

outerDivr23.style.backgroundColor = '#60BF88' //green
outerDivr23.style.color = 'white'
outerDivr23.style.border = 'none'

outerDivr33.style.backgroundColor = 'white'
outerDivr33.style.color = '#5256A1'
outerDivr33.style.border = '1px solid #5256A1'

outerDivr43.style.backgroundColor = 'white'
outerDivr43.style.color = '#5256A1'
outerDivr43.style.border = '1px solid #5256A1'

}

let callCount3 = 0
function choice23(){
  callCount3 += 1
  correctCount = parseInt(correctCount) + 1
  if(callCount > 1){
    correctCount = correctCount - 1
  }
  console.log(correctCount)

console.log('callTmes =' + callCount3)

  outerDiv23.style.backgroundColor = '#F9A826'
  outerDiv23.style.color = 'white'
  outerDiv23.style.border = 'none'

  outerDiv13.style.backgroundColor = 'white'
  outerDiv13.style.color = '#5256A1'
  outerDiv13.style.border = '1px solid #5256A1'
  
  outerDiv33.style.backgroundColor = 'white'
  outerDiv33.style.color = '#5256A1'
  outerDiv33.style.border = '1px solid #5256A1'
  
  outerDiv43.style.backgroundColor = 'white'
  outerDiv43.style.color = '#5256A1'
  outerDiv43.style.border = '1px solid #5256A1'


//FOR THE fourth RESULT CARD
outerDivr23.style.backgroundColor = '#60BF88' //green
outerDivr23.style.color = 'white'
outerDivr23.style.border = 'none'

outerDivr13.style.backgroundColor = 'white'
outerDivr13.style.color = '#5256A1'
outerDivr13.style.border = '1px solid #5256A1'

outerDivr33.style.backgroundColor = 'white'
outerDivr33.style.color = '#5256A1'
outerDivr33.style.border = '1px solid #5256A1'

outerDivr43.style.backgroundColor = 'white'
outerDivr43.style.color = '#5256A1'
outerDivr43.style.border = '1px solid #5256A1'

}

function choice33(){
  // if(document.getElementById('name3').innerHTML === randomCountry[150].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else{
  //   if(document.getElementById('name3').innerHTML !== randomCountry[150].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }
  // }

  outerDiv33.style.backgroundColor = '#F9A826'
  outerDiv33.style.color = 'white'
  outerDiv33.style.border = 'none'

  outerDiv23.style.backgroundColor = 'white'
  outerDiv23.style.color = '#5256A1'
  outerDiv23.style.border = '1px solid #5256A1'
  
  outerDiv13.style.backgroundColor = 'white'
  outerDiv13.style.color = '#5256A1'
  outerDiv13.style.border = '1px solid #5256A1'
  
  outerDiv43.style.backgroundColor = 'white'
  outerDiv43.style.color = '#5256A1'
  outerDiv43.style.border = '1px solid #5256A1'

 
  //FOR THE fourth RESULT CARD
  outerDivr23.style.backgroundColor = '#60BF88' //green
  outerDivr23.style.color = 'white'
  outerDivr23.style.border = 'none'

  outerDivr13.style.backgroundColor = 'white'
  outerDivr13.style.color = '#5256A1'
  outerDivr13.style.border = '1px solid #5256A1'

  outerDivr33.style.backgroundColor = '#EA8282' //red
  outerDivr33.style.color = 'white'
  outerDivr33.style.border = 'none'

  outerDivr43.style.backgroundColor = 'white'
  outerDivr43.style.color = '#5256A1'
  outerDivr43.style.border = '1px solid #5256A1'
}

function choice43(){
  // if(document.getElementById('name4').innerHTML === randomCountry[150].name){
  //   correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 1
  // }else if(document.getElementById('name4').innerHTML !== randomCountry[150].name){
  //     correctCount.innerHTML  = parseInt(correctCount.innerHTML) + 0
  //   }

    outerDiv43.style.backgroundColor = '#F9A826'
    outerDiv43.style.color = 'white'
    outerDiv43.style.border = 'none'
  
    outerDiv13.style.backgroundColor = 'white'
    outerDiv13.style.color = '#5256A1'
    outerDiv13.style.border = '1px solid #5256A1'
    
    outerDiv33.style.backgroundColor = 'white'
    outerDiv33.style.color = '#5256A1'
    outerDiv33.style.border = '1px solid #5256A1'
    
    outerDiv23.style.backgroundColor = 'white'
    outerDiv23.style.color = '#5256A1'
    outerDiv23.style.border = '1px solid #5256A1'
      
      //FOR THE fourth RESULT CARD
      outerDivr23.style.backgroundColor = '#60BF88' //green
      outerDivr23.style.color = 'white'
      outerDivr23.style.border = 'none'
    
      outerDivr13.style.backgroundColor = 'white'
      outerDivr13.style.color = '#5256A1'
      outerDivr13.style.border = '1px solid #5256A1'
    
      outerDivr33.style.backgroundColor = 'white'
      outerDivr33.style.color = '#5256A1'
      outerDivr33.style.border = '1px solid #5256A1'
  
      outerDivr43.style.backgroundColor = '#EA8282' //red
      outerDivr43.style.color = 'white'
      outerDivr43.style.border = 'none'
}


if(clickCount===0){
  prevButt.style.display = 'none'
}

function nextButr(){
  clickCount++ 

  if(clickCount===1){
  
    prevButt.style.display = 'block'
    resultCard.style.display = 'none'
    resultCard1.style.display = 'block'
    resultCard2.style.display = 'none'
    resultCard3.style.display = 'none'
    
    document.getElementById('countryNamer1').innerHTML = JSON.parse(countCap)[50].capital
    document.getElementById('namer11').innerHTML = randomCountry[201].name
    document.getElementById('namer21').innerHTML = randomCountry[21].name
    document.getElementById('namer31').innerHTML = randomCountry[50].name
    document.getElementById('namer41').innerHTML = randomCountry[95].name
    
  }

  if(clickCount===2){
  
    prevButt.style.display = 'block'
    resultCard.style.display = 'none'
    resultCard1.style.display = 'none'
    resultCard2.style.display = 'block'
    resultCard3.style.display = 'none'
    
  document.getElementById('countryNamer2').innerHTML = JSON.parse(countCap)[100].capital
  document.getElementById('namer12').innerHTML = randomCountry[100].name
  document.getElementById('namer22').innerHTML = randomCountry[22].name
  document.getElementById('namer32').innerHTML = randomCountry[39].name
  document.getElementById('namer42').innerHTML = randomCountry[121].name

  }

  if(clickCount===3){
  
    nextButtr0.style.display = 'none'
      prevButt.style.display = 'block'

      resultCard.style.display = 'none'
      resultCard1.style.display = 'none'
      resultCard2.style.display = 'none'
      resultCard3.style.display = 'block'
      
      document.getElementById('countryNamer3').innerHTML = JSON.parse(countCap)[150].capital
      document.getElementById('namer13').innerHTML = randomCountry[15].name
      document.getElementById('namer23').innerHTML = randomCountry[150].name
      document.getElementById('namer33').innerHTML = randomCountry[230].name
      document.getElementById('namer43').innerHTML = randomCountry[220].name
      
  }

  
}
       
function prevButr(){
  clickCount--

  
  if(clickCount===0){
    prevButt.style.display = 'none'
    nextButtr.style.display = 'block'
    resultCard2.style.display = 'none'
    resultCard1.style.display = 'none'
    resultCard.style.display = 'block'
    resultCard3.style.display = 'none'

    document.getElementById('countryNamer').innerHTML = JSON.parse(countCap)[10].capital
    document.getElementById('namer1').innerHTML = randomCountry[153].name
    document.getElementById('namer2').innerHTML = randomCountry[171].name.split(' ', 1)
    if(document.getElementById('namer2').innerHTML.endsWith(',') || document.getElementById('name2').innerHTML.endsWith('(')){
      document.getElementById('namer2').innerHTML = document.getElementById('name2').innerHTML.slice(0, document.getElementById('name2').innerHTML.length-1)
    }
    document.getElementById('namer3').innerHTML = randomCountry[135].name
    document.getElementById('namer4').innerHTML = randomCountry[10].name
  }

  if(clickCount===1){
    nextButtr.style.display = 'block'
    resultCard.style.display = 'none'
    resultCard2.style.display = 'none'
    resultCard1.style.display = 'block'
    resultCard3.style.display = 'none'


    document.getElementById('countryNamer1').innerHTML = JSON.parse(countCap)[50].capital
    document.getElementById('namer11').innerHTML = randomCountry[201].name
    document.getElementById('namer21').innerHTML = randomCountry[21].name
    document.getElementById('namer31').innerHTML = randomCountry[50].name
    document.getElementById('namer41').innerHTML = randomCountry[95].name
    
  }

  if(clickCount===2){
    nextButtr.style.display = 'block'
    resultCard.style.display = 'none'
    resultCard1.style.display = 'none'
    resultCard2.style.display = 'block'
    resultCard3.style.display = 'none'


  document.getElementById('countryNamer2').innerHTML = JSON.parse(countCap)[100].capital
  document.getElementById('namer12').innerHTML = randomCountry[100].name
  document.getElementById('namer22').innerHTML = randomCountry[22].name
  document.getElementById('namer32').innerHTML = randomCountry[39].name
  document.getElementById('namer42').innerHTML = randomCountry[121].name

  }
  
}

function nextBut(){
  clickCount++            //increases the count of clickcount via iteration
   

  if(clickCount===1){
    quizCard.style.display = 'none'
    quizCard1.style.display = 'block'
    quizCard2.style.display = 'none'
    quizCard3.style.display = 'none'
    
    document.getElementById('countryName1').innerHTML = JSON.parse(countCap)[50].capital
    document.getElementById('name11').innerHTML = randomCountry[201].name
    document.getElementById('name21').innerHTML = randomCountry[21].name
    document.getElementById('name31').innerHTML = randomCountry[50].name
    document.getElementById('name41').innerHTML = randomCountry[95].name
    
  }

  if(clickCount===2){
    quizCard.style.display = 'none'
    quizCard1.style.display = 'none'
    quizCard2.style.display = 'block'
    quizCard3.style.display = 'none'

  document.getElementById('countryName2').innerHTML = JSON.parse(countCap)[100].capital
  document.getElementById('name12').innerHTML = randomCountry[100].name
  document.getElementById('name22').innerHTML = randomCountry[22].name
  document.getElementById('name32').innerHTML = randomCountry[39].name
  document.getElementById('name42').innerHTML = randomCountry[121].name
  }

  if(clickCount===3){
    quizCard.style.display = 'none'
    quizCard1.style.display = 'none'
    quizCard2.style.display = 'none'
    quizCard3.style.display = 'block'

    nextButtlast.innerHTML = 'Submit'
      nextButtf.style.display = 'none'
      submitButt.style.display = 'block'
      submitButtf.style.display = 'block'
      
      
      document.getElementById('countryName3').innerHTML = JSON.parse(countCap)[150].capital
      document.getElementById('name13').innerHTML = randomCountry[15].name
      document.getElementById('name23').innerHTML = randomCountry[150].name
      document.getElementById('name33').innerHTML = randomCountry[230].name
      document.getElementById('name43').innerHTML = randomCountry[220].name
  }

  if(clickCount===4){
      quizCard3.style.display = 'none'
      flagCard.style.display = 'none'
      doneCard.style.display = 'block'
  }

}

function cquests(){
    quizType.style.display = 'none'
    quizCard.style.display = 'block'
    submitButt.style.display = 'none'
}

function fquests(){
    quizType.style.display = 'none'
    flagCard.style.display = 'block'
    submitButtf.style.display = 'none'
}

function resultShow(){
  doneCard.style.display = 'none'
  resultCard.style.display = 'block'
  clickCount = 0
}

function tryAgain(){
    window.location.reload()
}

// function countries(){
//     var http = new XMLHttpRequest()
//     http.onreadystatechange = function(){
//         if(this.readyState === 4){
//             console.log(this.responseText)
//         }
//     }
//     http.open('GET', 'https://restcountries.eu/rest/v2/all?fields=name;capital', true)
//     http.send()
// }

// countries()
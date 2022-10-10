const countries = {
    "ad": "Andorra",
    "ae": "United Arab Emirates",
    "af": "Afghanistan",
    "ag": "Antigua and Barbuda",
    "ai": "Anguilla",
    "al": "Albania",
    "am": "Armenia",
    "ao": "Angola",
    "aq": "Antarctica",
    "ar": "Argentina",
    "as": "American Samoa",
    "at": "Austria",
    "au": "Australia",
    "aw": "Aruba",
    "ax": "Åland Islands",
    "az": "Azerbaijan",
    "ba": "Bosnia and Herzegovina",
    "bb": "Barbados",
    "bd": "Bangladesh",
    "be": "Belgium",
    "bf": "Burkina Faso",
    "bg": "Bulgaria",
    "bh": "Bahrain",
    "bi": "Burundi",
    "bj": "Benin",
    "bl": "Saint Barthélemy",
    "bm": "Bermuda",
    "bn": "Brunei",
    "bo": "Bolivia",
    "bq": "Caribbean Netherlands",
    "br": "Brazil",
    "bs": "Bahamas",
    "bt": "Bhutan",
    "bv": "Bouvet Island",
    "bw": "Botswana",
    "by": "Belarus",
    "bz": "Belize",
    "ca": "Canada",
    "cc": "Cocos (Keeling) Islands",
    "cd": "DR Congo",
    "cf": "Central African Republic",
    "cg": "Republic of the Congo",
    "ch": "Switzerland",
    "ci": "Côte d'Ivoire (Ivory Coast)",
    "ck": "Cook Islands",
    "cl": "Chile",
    "cm": "Cameroon",
    "cn": "China",
    "co": "Colombia",
    "cr": "Costa Rica",
    "cu": "Cuba",
    "cv": "Cape Verde",
    "cw": "Curaçao",
    "cx": "Christmas Island",
    "cy": "Cyprus",
    "cz": "Czechia",
    "de": "Germany",
    "dj": "Djibouti",
    "dk": "Denmark",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "dz": "Algeria",
    "ec": "Ecuador",
    "ee": "Estonia",
    "eg": "Egypt",
    "eh": "Western Sahara",
    "er": "Eritrea",
    "es": "Spain",
    "et": "Ethiopia",
    "eu": "European Union",
    "fi": "Finland",
    "fj": "Fiji",
    "fk": "Falkland Islands",
    "fm": "Micronesia",
    "fo": "Faroe Islands",
    "fr": "France",
    "ga": "Gabon",
    "gb": "United Kingdom",
    "gb-eng": "England",
    "gb-nir": "Northern Ireland",
    "gb-sct": "Scotland",
    "gb-wls": "Wales",
    "gd": "Grenada",
    "ge": "Georgia",
    "gf": "French Guiana",
    "gg": "Guernsey",
    "gh": "Ghana",
    "gi": "Gibraltar",
    "gl": "Greenland",
    "gm": "Gambia",
    "gn": "Guinea",
    "gp": "Guadeloupe",
    "gq": "Equatorial Guinea",
    "gr": "Greece",
    "gs": "South Georgia",
    "gt": "Guatemala",
    "gu": "Guam",
    "gw": "Guinea-Bissau",
    "gy": "Guyana",
    "hk": "Hong Kong",
    "hm": "Heard Island and McDonald Islands",
    "hn": "Honduras",
    "hr": "Croatia",
    "ht": "Haiti",
    "hu": "Hungary",
    "id": "Indonesia",
    "ie": "Ireland",
    "il": "Israel",
    "im": "Isle of Man",
    "in": "India",
    "io": "British Indian Ocean Territory",
    "iq": "Iraq",
    "ir": "Iran",
    "is": "Iceland",
    "it": "Italy",
    "je": "Jersey",
    "jm": "Jamaica",
    "jo": "Jordan",
    "jp": "Japan",
    "ke": "Kenya",
    "kg": "Kyrgyzstan",
    "kh": "Cambodia",
    "ki": "Kiribati",
    "km": "Comoros",
    "kn": "Saint Kitts and Nevis",
    "kp": "North Korea",
    "kr": "South Korea",
    "kw": "Kuwait",
    "ky": "Cayman Islands",
    "kz": "Kazakhstan",
    "la": "Laos",
    "lb": "Lebanon",
    "lc": "Saint Lucia",
    "li": "Liechtenstein",
    "lk": "Sri Lanka",
    "lr": "Liberia",
    "ls": "Lesotho",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "lv": "Latvia",
    "ly": "Libya",
    "ma": "Morocco",
    "mc": "Monaco",
    "md": "Moldova",
    "me": "Montenegro",
    "mf": "Saint Martin",
    "mg": "Madagascar",
    "mh": "Marshall Islands",
    "mk": "North Macedonia",
    "ml": "Mali",
    "mm": "Myanmar",
    "mn": "Mongolia",
    "mo": "Macau",
    "mp": "Northern Mariana Islands",
    "mq": "Martinique",
    "mr": "Mauritania",
    "ms": "Montserrat",
    "mt": "Malta",
    "mu": "Mauritius",
    "mv": "Maldives",
    "mw": "Malawi",
    "mx": "Mexico",
    "my": "Malaysia",
    "mz": "Mozambique",
    "na": "Namibia",
    "nc": "New Caledonia",
    "ne": "Niger",
    "nf": "Norfolk Island",
    "ng": "Nigeria",
    "ni": "Nicaragua",
    "nl": "Netherlands",
    "no": "Norway",
    "np": "Nepal",
    "nr": "Nauru",
    "nu": "Niue",
    "nz": "New Zealand",
    "om": "Oman",
    "pa": "Panama",
    "pe": "Peru",
    "pf": "French Polynesia",
    "pg": "Papua New Guinea",
    "ph": "Philippines",
    "pk": "Pakistan",
    "pl": "Poland",
    "pm": "Saint Pierre and Miquelon",
    "pn": "Pitcairn Islands",
    "pr": "Puerto Rico",
    "ps": "Palestine",
    "pt": "Portugal",
    "pw": "Palau",
    "py": "Paraguay",
    "qa": "Qatar",
    "re": "Réunion",
    "ro": "Romania",
    "rs": "Serbia",
    "ru": "Russia",
    "rw": "Rwanda",
    "sa": "Saudi Arabia",
    "sb": "Solomon Islands",
    "sc": "Seychelles",
    "sd": "Sudan",
    "se": "Sweden",
    "sg": "Singapore",
    "sh": "Saint Helena, Ascension and Tristan da Cunha",
    "si": "Slovenia",
    "sj": "Svalbard and Jan Mayen",
    "sk": "Slovakia",
    "sl": "Sierra Leone",
    "sm": "San Marino",
    "sn": "Senegal",
    "so": "Somalia",
    "sr": "Suriname",
    "ss": "South Sudan",
    "st": "São Tomé and Príncipe",
    "sv": "El Salvador",
    "sx": "Sint Maarten",
    "sy": "Syria",
    "sz": "Eswatini (Swaziland)",
    "tc": "Turks and Caicos Islands",
    "td": "Chad",
    "tf": "French Southern and Antarctic Lands",
    "tg": "Togo",
    "th": "Thailand",
    "tj": "Tajikistan",
    "tk": "Tokelau",
    "tl": "Timor-Leste",
    "tm": "Turkmenistan",
    "tn": "Tunisia",
    "to": "Tonga",
    "tr": "Turkey",
    "tt": "Trinidad and Tobago",
    "tv": "Tuvalu",
    "tw": "Taiwan",
    "tz": "Tanzania",
    "ua": "Ukraine",
    "ug": "Uganda",
    "um": "United States Minor Outlying Islands",
    "un": "United Nations",
    "us": "United States",
    "us-ak": "Alaska",
    "us-al": "Alabama",
    "us-ar": "Arkansas",
    "us-az": "Arizona",
    "us-ca": "California",
    "us-co": "Colorado",
    "us-ct": "Connecticut",
    "us-de": "Delaware",
    "us-fl": "Florida",
    "us-ga": "Georgia",
    "us-hi": "Hawaii",
    "us-ia": "Iowa",
    "us-id": "Idaho",
    "us-il": "Illinois",
    "us-in": "Indiana",
    "us-ks": "Kansas",
    "us-ky": "Kentucky",
    "us-la": "Louisiana",
    "us-ma": "Massachusetts",
    "us-md": "Maryland",
    "us-me": "Maine",
    "us-mi": "Michigan",
    "us-mn": "Minnesota",
    "us-mo": "Missouri",
    "us-ms": "Mississippi",
    "us-mt": "Montana",
    "us-nc": "North Carolina",
    "us-nd": "North Dakota",
    "us-ne": "Nebraska",
    "us-nh": "New Hampshire",
    "us-nj": "New Jersey",
    "us-nm": "New Mexico",
    "us-nv": "Nevada",
    "us-ny": "New York",
    "us-oh": "Ohio",
    "us-ok": "Oklahoma",
    "us-or": "Oregon",
    "us-pa": "Pennsylvania",
    "us-ri": "Rhode Island",
    "us-sc": "South Carolina",
    "us-sd": "South Dakota",
    "us-tn": "Tennessee",
    "us-tx": "Texas",
    "us-ut": "Utah",
    "us-va": "Virginia",
    "us-vt": "Vermont",
    "us-wa": "Washington",
    "us-wi": "Wisconsin",
    "us-wv": "West Virginia",
    "us-wy": "Wyoming",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "va": "Vatican City (Holy See)",
    "vc": "Saint Vincent and the Grenadines",
    "ve": "Venezuela",
    "vg": "British Virgin Islands",
    "vi": "United States Virgin Islands",
    "vn": "Vietnam",
    "vu": "Vanuatu",
    "wf": "Wallis and Futuna",
    "ws": "Samoa",
    "xk": "Kosovo",
    "ye": "Yemen",
    "yt": "Mayotte",
    "za": "South Africa",
    "zm": "Zambia",
    "zw": "Zimbabwe"
}
const quotes = [
    "“It is hard to fail but it is worse never to have tried to succeed.” —Theodore Roosevelt",
    "“That which does not kill us makes us stronger.” —Friedrich Nietzsche",
    "“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison",
    "“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.” —Wayne Dyer",
    "“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt",
    "“I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.” —Anthony Robbins",
    "“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.” —Michelangelo",
    "“Do not go where the path may lead , go instead where there is no path and leave a trail.” —Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. —Winston Churchill",
    "“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’” —Muhammad Ali",
    "“The two most important days in your life are the day you are born and the day you find out why.” —Mark Twain",
    "“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” —Henry Ford",
    "“Live each day as if your life had just begun.” —Johann Wolfgang Von Goethe",
    "“The journey of a thousand miles begins with one step.” —Lao Tzu",
    "“Do one thing every day that scares you.” —Eleanor Roosevelt",
    "​“You can waste your lives drawing lines. Or you can live your life crossing them.” —Shonda Rhimes",
    "“Never bend your head. Always hold it high. Look the world straight in the eye.” —Helen Keller",
    "“My mission in life is not merely to survive, but to thrive.”  —Maya Angelou",
    "“The battles that count aren’t the ones for gold medals. The struggles within yourself—the invisible battles inside all of us—that’s where it’s at.” —Jesse Owens",
]

function newCountry() {

    let randomCountryCode = Object.keys(countries)[Math.floor(Math.random() * Object.keys(countries).length)];
    let country = countries[randomCountryCode];

    let countryFlag = "https://flagcdn.com/w320/" + randomCountryCode + ".png";

    document.getElementById("country-button").innerHTML = "Show country";
    document.getElementById("country").innerHTML = "<img id='flag' src='" + countryFlag + "' style='border-radius: 10px; height=50px;'/>";
    document.getElementById("countryShow").style.display = "None";
    document.getElementById("countryShow").innerHTML = "<h2>" + country + "</h2>";
    document.getElementById("country-button").setAttribute("onclick", "showCountry()");
}
newCountry();

const showCountry = () => {
    document.getElementById("countryShow").style.display = "block";
    document.getElementById("country-button").innerHTML = "New flag";
    document.getElementById("country-button").setAttribute("onclick", "newCountry()");
}

const newQuote = () => {
    document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
newQuote();

// mental math generator
const mentalMath = () => {
    document.getElementById("answer").innerHTML = "";
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    let operator = Math.floor(Math.random() * 3);
    let answer = 0;
    let question = "";
    if (operator == 0) {
        answer = num1 + num2;
        question = num1 + " + " + num2;
    } else if (operator == 1) {
        answer = num1 - num2;
        question = num1 + " - " + num2;
    } else if (operator == 2) {
        answer = num1 * num2;
        question = num1 + " * " + num2;
    }
    document.getElementById("maths-question").innerHTML = question;
    document.getElementById("maths-button").innerHTML = "Answer";
    document.getElementById("maths-button").setAttribute("onclick", "showAnswer()");
}

mentalMath();

const showAnswer = () => {
    document.getElementById("answer").innerHTML = "<span style='font-size: 20px; font-weight: bold;'>" + eval(document.getElementById('maths-question').innerHTML) + "</span>";
    document.getElementById("maths-button").innerHTML = "New Question";
    document.getElementById("maths-button").onclick = mentalMath;
}



const newElement = () => {
    fetch("./periods.json")
        .then(response => response.json())
        .then(data => {
            let randomPeriod = data.elements[Math.floor(Math.random() * data.elements.length)];
            let periodSymbol = randomPeriod.symbol;
            let periodName = randomPeriod.name;
            let periodAtomicNumber = randomPeriod.number;
            let periodAtomicMass = randomPeriod.atomic_mass;

            document.getElementById("element-symbol").innerHTML = periodSymbol;
            document.getElementById("element-awnser").style.display = "none";
            document.getElementById("element-awnser").innerHTML = "<h2>" + periodName + "</h2><p>Atomic Number: " + periodAtomicNumber + "</p>";
        });

    document.getElementById("element-button").innerHTML = "Show name";
    document.getElementById("element-button").setAttribute("onclick", "showElement()");

}

newElement();

const showElement = () => {
    document.getElementById("element-awnser").style.display = "block";
    document.getElementById("element-button").innerHTML = "New Element";
    document.getElementById("element-button").onclick = newElement;
}

// Get information about this day in history from English Wikipedia

let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();

fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`)
    .then(response => response.json())
    .then(data => {
        let events = data.events;
        let randomEvent = events[Math.floor(Math.random() * events.length)];
        let eventYear = randomEvent.year;
        let eventText = randomEvent.text;
        document.getElementById("history").innerHTML = "<h2>" + eventYear + "</h2><p>" + eventText + "</p>";
    });

// Clean https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit
// Definatly not clean https://v2.jokeapi.dev/joke/Any

const newJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,racist,sexist,explicit")
        .then(response => response.json())
        .then(data => {
            let joke = data.joke;
            let setup = data.setup;
            let delivery = data.delivery;
            if (joke) {
                document.getElementById("joke").innerHTML = "<p>" + joke + "</p>";
                document.getElementById("joke-awnser").innerHTML = "";
            } else {
                document.getElementById("joke").innerHTML = "<p>" + setup + "</p>";
                document.getElementById("joke-awnser").style.display = "none";
                document.getElementById("joke-awnser").innerHTML = "<p>" + delivery + "</p>";
                document.getElementById("joke-button-div").innerHTML = "<button onclick='showJoke()'>Show joke</button>";
            }
        });
}
newJoke()

const showJoke = () => {
    document.getElementById("joke-awnser").style.display = "block";
    document.getElementById("joke-button-div").innerHTML = "<button onclick='newJoke()'>New joke</button>";
}

const newFact = () => {
    fetch("https://api.api-ninjas.com/v1/facts?limit=1"
        , {
            headers: {
                "X-Api-Key": "GLq8DfJ4HXqlOhYZ2whk0w==OHvq0XDH9LC7xNts"
            }
        })
        .then(response => response.json())
        .then(data => {
            let fact = data[0].fact;
            document.getElementById("did-you-know").innerHTML = fact;
        });
}
newFact();

fetch("https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=khcwemcse29tu1ikh1msnzno74ykj7mkmcvc8xnbr77r8d1ef")
    .then(response => response.json())
    .then(data => {
        let word = data.word;
        let definition = data.definitions[0].text;
        document.getElementById("word-of-day").innerHTML = word
        document.getElementById("def").style.display = "none";
        document.getElementById("def").innerHTML = definition;
    });

const getDef = () => {
    document.getElementById("def").style.display = "block";
    document.getElementById("def-button-div").innerHTML = ""
}
// khcwemcse29tu1ikh1msnzno74ykj7mkmcvc8xnbr77r8d1ef
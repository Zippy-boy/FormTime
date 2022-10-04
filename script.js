// Word of day.
function getWord() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://random-word-api.herokuapp.com/word?number=1', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            document.getElementById("word-of-day").innerHTML = data[0];
        } else {
            console.log('error');
        }
    };
    request.send();
}

function getDef() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/' + document.getElementById("word-of-day").innerHTML, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            document.getElementById("def").innerHTML = data[0].meanings[0].definitions[0].definition;
        } else {
            console.log('error');
        }
    };
    request.send();
}


// get country codes from contries.json file on local



let contries = fetch('https://flagcdn.com/en/codes.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((err) => {
        console.log(err);
    });

console.log(contries);

let randomCountry = contries[Math.floor(Math.random() * contries.length)];
console.log(randomCountry);



getWord();
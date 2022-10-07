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

function getDef(test=false) {
    var request = new XMLHttpRequest();
    try {
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
    catch (err) {
        console.log(err);
    }
}

// get country codes from contries.json file on local
async function getCountryCodes() {
    
}

// get random country code


getCountryCodes();
getWord();
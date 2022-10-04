

function randomWord() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://random-word-api.herokuapp.com/word?number=1', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data)
            document.getElementById("word-of-day").innerHTML = data[0];
            showDef();
        } else {
            console.log('error');
        }
    };
    request.send();
}

showDef = () => {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/' + document.getElementById("word-of-day").innerHTML, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data)
            document.getElementById("def").innerHTML = data[0].meanings[0].definitions[0].definition;
        } else {
            console.log('error');
        }
    };
    request.send();
}



randomWord();
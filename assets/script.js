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



setTimeout(function () {

    function newCountry() {
        fetch("./assets/json/contries.json")
            .then(response => response.json())
            .then(data => {
                let randomCountryCode = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)];
                let country = data[randomCountryCode];
                let countryFlag = "https://flagcdn.com/w2560/" + randomCountryCode + ".png";

                document.getElementById("country-button").innerHTML = "Show country";
                document.getElementById("country").innerHTML = "<img id='flag' src='" + countryFlag + "'/>";
                document.getElementById("countryShow").style.display = "None";
                document.getElementById("countryShow").innerHTML = "<h2>" + country + "</h2>";
                document.getElementById("country-button").setAttribute("onclick", "showCountry()");
                wrapper = document.getElementById("WhereInTheWorld")
                // make it visible
                wrapper.style.display = "block";
                wrapper.style.animation = "popInToPage 1s ease-in-out";
            });
    }

    newCountry();

    const showCountry = () => {
        document.getElementById("countryShow").style.display = "block";
        document.getElementById("country-button").innerHTML = "New flag";
        document.getElementById("country-button").setAttribute("onclick", "newCountry()");
    }

    const newQuote = () => {
        document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

        wrapper = document.getElementById("RandomQuote")
        // make it visible
        wrapper.style.display = "block";
        wrapper.style.animation = "popInToPage 1s ease-in-out";
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
        wrapper = document.getElementById("MentalMaths")
        // make it visible
        wrapper.style.display = "block";
        wrapper.style.animation = "popInToPage 1s ease-in-out";
    }

    mentalMath();

    const showAnswer = () => {
        document.getElementById("answer").innerHTML = "<span style='font-size: 20px; font-weight: bold;'>" + eval(document.getElementById('maths-question').innerHTML) + "</span>";
        document.getElementById("maths-button").innerHTML = "New Question";
        document.getElementById("maths-button").onclick = mentalMath;
    }



    const newElement = () => {
        fetch("./assets/json/periods.json")
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
        
        wrapper = document.getElementById("NameElement")
        wrapper.style.display = "block";
        wrapper.style.animation = "popInToPage 1s ease-in-out";
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
    console.log(month);
    let day = today.getDate();

    fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`)
        .then(response => response.json())
        .then(data => {
            let events = data.events;
            let randomEvent = events[Math.floor(Math.random() * events.length)];
            let eventYear = randomEvent.year;
            let eventText = randomEvent.text;
            document.getElementById("history-date").innerHTML = eventYear;
            document.getElementById("history").innerHTML = "<p>" + eventText + "</p>";

            wrapper = document.getElementById("ThisDayInHistory")
            // make it visible
            wrapper.style.display = "block";
            wrapper.style.animation = "popInToPage 1s ease-in-out";
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
                    document.getElementById("joke-button-div").innerHTML = "<button onclick='newJoke()'>New joke</button>";
                    document.getElementById("joke").innerHTML = "<p>" + joke + "</p>";
                    document.getElementById("joke-awnser").innerHTML = "";
                } else {
                    document.getElementById("joke").innerHTML = "<p>" + setup + "</p>";
                    document.getElementById("joke-awnser").style.display = "none";
                    document.getElementById("joke-awnser").innerHTML = "<p>" + delivery + "</p>";
                    document.getElementById("joke-button-div").innerHTML = "<button onclick='showJoke()'>Show joke</button>";
                } 
                wrapper = document.getElementById("JokeOfDay")
                // make it visible
                wrapper.style.display = "block";
                wrapper.style.animation = "popInToPage 1s ease-in-out";
            });
    }
    newJoke()

    const showJoke = () => {
        document.getElementById("joke-awnser").style.display = "block";
        document.getElementById("joke-button-div").innerHTML = "<button onclick='newJoke()'>New joke</button>";
    }

    const newFact = () => {
        document.getElementById("did-you-know").innerHTML = "Loading...";
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

                wrapper = document.getElementById("DidYouKnow")
                // make it visible
                wrapper.style.display = "block";
                wrapper.style.animation = "popInToPage 1s ease-in-out";
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
            document.getElementById("def").innerHTML = "<p>" + definition + "</p>";

            wrapper = document.getElementById("WordOfDay")
            // make it visible
            wrapper.style.display = "block";
            wrapper.style.animation = "popInToPage 1s ease-in-out";
        });

    const getDef = () => {
        document.getElementById("def").style.display = "block";
        document.getElementById("def-button-div").innerHTML = ""
    }
    // khcwemcse29tu1ikh1msnzno74ykj7mkmcvc8xnbr77r8d1ef
    const newBrainteaser = () => {
        fetch("./assets/json/brainTeasers.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("brainteaser-button").innerHTML = "Show answer";
                document.getElementById("brainteaser-button").setAttribute("onclick", "showAwnser()");

                let randomTeaser = data[Math.floor(Math.random() * data["length"])];
                let teaser = randomTeaser["Qestion"];
                let answer = randomTeaser["Awnser"];

                document.getElementById("brainteaser-question").innerHTML = teaser;
                document.getElementById("brainteaser-awser").style.display = "none";
                document.getElementById("brainteaser-awser").innerHTML = "A: " + answer;

                wrapper = document.getElementById("BrainTeaser")
                // make it visible
                wrapper.style.display = "block";
                wrapper.style.animation = "popInToPage 1s ease-in-out";
            });
    }
    newBrainteaser();

    const showAwnser = () => {
        document.getElementById("brainteaser-awser").style.display = "block";
        document.getElementById("brainteaser-button").innerHTML = "New Brainteaser";
        document.getElementById("brainteaser-button").onclick = newBrainteaser;
    }


    const newScamble = () => {
        document.getElementById("scramble-button").innerHTML = "Show answer";
        document.getElementById("scramble-button").setAttribute("onclick", "showScramble()");

        fetch("./assets/words.txt")
            .then(response => response.text())
            .then(data => {
                let words = data.split("\n");
                let randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
                let scrammbledWord = (randomWord.split("").sort(() => Math.random() - 0.5).join(""));
                // get rid of all spaces in scrammbledWord
                scrammbledWord = scrammbledWord.replace(/\s/g, '');


                document.getElementById("scramble-word").innerHTML = scrammbledWord;
                document.getElementById("scramble-awnser").style.display = "none";
                document.getElementById("scramble-awnser").innerHTML = randomWord;

                wrapper = document.getElementById("WordScramble")
                // make it visible
                wrapper.style.display = "block";
                wrapper.style.animation = "popInToPage 1s ease-in-out";
            });
    }
    newScamble();

    const showScramble = () => {
        document.getElementById("scramble-awnser").style.display = "block";
        document.getElementById("scramble-button").innerHTML = "New word";
        document.getElementById("scramble-button").onclick = newScamble;
    }



    // get top 3 news stories
    fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=dcacaf96d9f94413996799f326fdadfe")
        .then(response => response.json())
        .then(data => {
            let articles = data.articles;
            let top3 = articles.slice(0, 3);
            let news = "";
            top3.forEach(article => {
                news += "<a href='" + article.url + "' target='_blank'><h3>" + article.title + "</h3></a>";
            });
            document.getElementById("news").innerHTML = news;

            wrapper = document.getElementById("News")
            // make it visible
            wrapper.style.display = "block";
            wrapper.style.animation = "popInToPage 1s ease-in-out";
        });

    // delay 30 seconds (30000)
    setTimeout(() => {
        document.getElementById("title").innerHTML = "";
    }, 30000);

    // delay by 10 hours (36000000)
    setTimeout(() => {
        location.reload();
    }, 36000000);

}, 4000);
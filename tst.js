fetch("https://www.dictionary.com/e/word-of-the-day/phoenix-2022-10-01/")
    .then((response) => response.text())
    .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const word = doc.querySelector(".otd-item-headword__word").textContent;
        const definition = doc.querySelector(".otd-item-headword__pos").textContent;
        const example = doc.querySelector(".otd-item-headword__example").textContent;
        console.log(word, definition, example);
    });
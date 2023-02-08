var wrapperDivs = document.getElementsByClassName("wrapper");
var readyLoader = document.querySelector("#readyLoader");
var allLoaded = false;
var loadedCount = 0;

setTimeout(function() {
    var wrapperDivsClassNames = [];
    for (var i = 0; i < wrapperDivs.length; i++) {
        var isLoaded = wrapperDivs[i].getAttribute("data-loaded");
        wrapperDivsClassNames.push([wrapperDivs[i].id, isLoaded]);
        var div = document.createElement("div");
        div.id = wrapperDivs[i].id;
        div.innerHTML = wrapperDivs[i].id;
        div.className = isLoaded === "true" ? "wrapper-loaded" : "wrapper-unloaded";
        readyLoader.appendChild(div);
        if (isLoaded === "true") {
            loadedCount++;
        }
    }
    console.log(wrapperDivsClassNames);
}, 100);

// create a function to check the data-loaded attribute
function checkDataLoaded() {
    var wrapperDivs = document.getElementsByClassName("wrapper");
    var readyLoader = document.querySelector("#readyLoader");
    for (var i = 0; i < wrapperDivs.length; i++) {
        var wrapperDiv = wrapperDivs[i];
        var isDataLoaded = wrapperDiv.getAttribute("data-loaded");
        var className = isDataLoaded === "true" ? "wrapper-loaded" : "wrapper-unloaded";
        wrapperDiv.className = className;
    }
    console.log("loadedCount: " + loadedCount);
}

// run the checkDataLoaded function every 2 seconds
setInterval(checkDataLoaded, 5000);

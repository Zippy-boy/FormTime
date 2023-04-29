var wrapperDivs = document.getElementsByClassName("wrapper");
var readyLoader = document.querySelector("#readyLoader");
var allLoaded = false;
var loadedCount = 0;
var count = 0

setTimeout(function () {
    var wrapperDivsClassNames = [];
    for (var i = 0; i < wrapperDivs.length; i++) {
        var isLoaded = wrapperDivs[i].getAttribute("data-loaded");
        wrapperDivsClassNames.push([wrapperDivs[i].id, isLoaded]);
        var div = document.createElement("div");
        div.id = wrapperDivs[i].id + "-loader";
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
    loadedCount = 0;
    var wrapperDivs = document.getElementsByClassName("wrapper");
    readyLoader = document.querySelector("#readyLoader");
    for (var i = 0; i < wrapperDivs.length; i++) {
        var wrapperDiv = wrapperDivs[i];
        var isDataLoaded = wrapperDiv.getAttribute("data-loaded");
        var className = isDataLoaded === "true" ? "wrapper-loaded" : "wrapper-unloaded";
        var loaderDiv = document.getElementById(wrapperDiv.id + "-loader");
        loaderDiv.className = className;
        // update the div background to green if data-loaded is true
        if (isDataLoaded === "true") {
            document.getElementById(wrapperDiv.id + "-loader").style.backgroundColor = "green";
            loadedCount++;
        }
    }
    // console.log("loadedCount: " + loadedCount);
    // console.log(wrapperDivs.length)
}



// run the checkDataLoaded function every 2 seconds
let intervalId = setInterval(function () {
    checkDataLoaded();
    console.log({ loadedCount })
    if (loadedCount === wrapperDivs.length || count++ > 50 ) {
            setTimeout(function () {
            allLoaded = true;
            console.log("all loaded");

            document.querySelector(".loader").style.display = "none";
            document.querySelector(".main").style.display = "block";

            // exit the setInterval function
            clearInterval(intervalId);
        }, 1001);
    }
}, 100);

// setting up elements
var inputBox = document.getElementById("translate-input-box");
var translateBtn = document.getElementById("translate-btn");
var resetBtn = document.getElementById("reset-btn");
var minionSays = document.getElementById("minion-says");
var output = document.getElementById("output");

// setting up functions
function getUserInput() {
  return encodeURI(inputBox.value);
}

function updateOutput(msg) {
  var text = `"${msg}"`;
  output.innerText = text;
}

// setting up API string
var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var apiCallString = `${url}?text=${getUserInput()}`;

// setting up API fetch request
function fetchTranslation() {
  fetch(apiCallString)
    .then((response) => response.json())
    .then((jsonObj) => jsonObj.contents.translation)
    .then((translatedMsg) => updateOutput(translatedMsg));
  // logic
  // use constructed api and fetch response
  // get JSON object from response
  // get translation string from JSON object
  // update the string in output region
}

// calling the API on click

translateBtn.addEventListener("click", fetchTranslation);

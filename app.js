// var userName = prompt("give me a username");

// var welcomeMessage = 'Hello ' + userName;

// alert(welcomeMessage);
var btnTranslate = document.querySelector("#btn-translator");
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txt-Input");
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrongwith server. try after some time")
}

btnTranslate.addEventListener("click", function clickEventHandler() {
    // outputDiv.innerText = "adda tranlated " + txtInput.ariaValueMax;
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
          })
    .catch(errorHandler)
})

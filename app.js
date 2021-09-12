// var userName = prompt("give me a username");

// var welcomeMessage = 'Hello ' + userName;

// alert(welcomeMessage);
var btnTranslate = document.querySelector("#btn-translator");
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txt-Input");

btnTranslate.addEventListener("click", function clickEventHandler() {
    outputDiv.innerText = "adda tranlated " + txtInput.ariaValueMax;
})

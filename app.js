// var userName = prompt("give me a username");

// var welcomeMessage = 'Hello ' + userName;

// alert(welcomeMessage);
var btnTranslate = document.querySelector("#btn-translator");

var txtInput = document.querySelector("#txt-Input");

console.log(txtInput);

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("clicked!");
    console.log("input",txtInput.value);

})

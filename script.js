var lowerCaseChr = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numericChr = "0123456789";
var specialChr = "~!@#$%&=+<>?";


var passLength = document.querySelector("#passLength");
var copy = document.querySelector("#copyBtn");
var checkboxlowerCase
var checkboxlowerCase
var checkboxlowerCase
var checkboxlowerCase























/*Function to copy the generated password*/
function copyText(event) {
    event.preventDefault();
    var copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }
  copy.addEventListener("click", copyText);
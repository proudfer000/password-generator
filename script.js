var lowerCaseChr = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numericChr = "0123456789";
var specialChr = "~!@#$%&=+<>?";
var allChrSum =""

var checkboxLowerCase = document.querySelector("#lowerCase");
var checkboxUpperCase = document.querySelector("#upperCase");
var checkboxNumeric = document.querySelector("#numeric");
var checkboxSpecialChr = document.querySelector("#specialCharacters");



function test() {
  if(document.getElementById("lowerCase").checked==true){
    alert ("mierda");
    allChrSum = allChrSum + numericChr;
    allChrSum = allChrSum + specialChr;

    
  }
  
  
}

function clearValue() {
  allChrSum = ""
  
}

var passLength = document.querySelector("#passLength");
var copy = document.querySelector("#copyBtn");
var generatePass = document.querySelector("#generateBtn");
var clear = document.querySelectorAll("input[type=checkbox]");

console.log(checkboxLowerCase.checked);
console.log(checkboxUpperCase.checked);
console.log(checkboxNumeric.checked);
console.log(checkboxSpecialChr.checked);
//console.log(test);







/*Function to copy the generated password*/
function copyText(event) {
    event.preventDefault();
    var copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }
  copy.addEventListener("click", copyText);
  generatePass.addEventListener("click", test);
  clear.addEventListener("click", )
  
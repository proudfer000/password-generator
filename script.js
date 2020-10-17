var lowerCaseChr = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numericChr = "0123456789";
var specialChr = "~!@#$%&=+<>?";
var allChrSum ="";
var allChrSumFinalString ="";

var startBtn = document.querySelector("#stBtn");
var passLength = document.querySelector("#passLength");
var checkboxLowerCase = document.querySelector("#lowerCase");
var checkboxUpperCase = document.querySelector("#upperCase");
var checkboxNumeric = document.querySelector("#numeric");
var checkboxSpecialChr = document.querySelector("#specialCharacters");
var generatePass = document.querySelector("#generateBtn");
var passField = document.getElementById("generatedPassword");
var copy = document.querySelector("#copyBtn");




function randomPassGnr() {
  if (passLength.value!==""){
      if(checkboxLowerCase.checked 
      || checkboxUpperCase.checked
      || checkboxNumeric.checked
      || checkboxSpecialChr.checked){
    
          if(checkboxLowerCase.checked){
            allChrSum = allChrSum + lowerCaseChr;
      }
          if(checkboxUpperCase.checked){
            allChrSum = allChrSum + upperCaseChr;
      }

          if(checkboxNumeric.checked){
            allChrSum = allChrSum + numericChr;
      }

          if(checkboxSpecialChr.checked){
            allChrSum = allChrSum + specialChr;
      }

          allChrSum = allChrSum.split("");

          for(var i =0; i < passLength.value; i++){
            allChrSumFinalString += allChrSum[Math.floor(Math.random()*allChrSum.length)]
        
            if (i+1 == passLength.value){
              passField.value = allChrSumFinalString;
              console.log(i);
              clearValue();
        }
      }   
  }
      else {
      alert ("Please check at least one option")
  }
  
}
  else {
  alert ("Please write a number between 8-128 ")
}
}

function clearValue() {
  allChrSum ="";
  allChrSumFinalString="";
  
}




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

  checkboxLowerCase.addEventListener("click", clearValue);
  checkboxUpperCase.addEventListener("click", clearValue);
  checkboxNumeric.addEventListener("click", clearValue);
  checkboxSpecialChr.addEventListener("click", clearValue);
  copy.addEventListener("click", copyText);
  generatePass.addEventListener("click", randomPassGnr);
  
  
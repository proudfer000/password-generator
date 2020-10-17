var lowerCaseChr = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numericChr = "0123456789";
var specialChr = "~!@#$%&=+<>?";
var allChrSum ="";
var allChrSumFinalString ="";

var passField = document.getElementById("generatedPassword");
var checkboxLowerCase = document.querySelector("#lowerCase");
var checkboxUpperCase = document.querySelector("#upperCase");
var checkboxNumeric = document.querySelector("#numeric");
var checkboxSpecialChr = document.querySelector("#specialCharacters");
var passLength = document.querySelector("#passLength");
var copy = document.querySelector("#copyBtn");
var generatePass = document.querySelector("#generateBtn");



function test(event) {
  
  if(document.getElementById("lowerCase").checked==true 
  || document.getElementById("upperCase").checked==true
  || document.getElementById("numeric").checked==true
  || document.getElementById("specialCharacters").checked==true){
    
      if(document.getElementById("lowerCase").checked==true){
        allChrSum = allChrSum + lowerCaseChr;
   }
      if(document.getElementById("upperCase").checked==true){
        allChrSum = allChrSum + upperCaseChr;
      }
      if(document.getElementById("numeric").checked==true){
        allChrSum = allChrSum + numericChr;
      }
      if(document.getElementById("specialCharacters").checked==true){
        allChrSum = allChrSum + specialChr;
      }
      allChrSum = allChrSum.split("");

      for(var i =0; i < passLength.value; i++){
        //console.log(i);
        allChrSumFinalString += allChrSum[Math.floor(Math.random()*allChrSum.length)]
        console.log(allChrSumFinalString);
        console.log(allChrSum);
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
  generatePass.addEventListener("click", test);
  
  